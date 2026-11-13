// NBA BetBot: "Analyze with AI".
//
// 1. For each pick on the slip, build an exact matchup summary from the NBA history files
//    (team form, rest, defensive ranks, and how each key player's career trends say he'll do against this opponent),
//    plus ESPN's injury report (who's out or day-to-day).
// 2. Work out a fixed "stats model" chance for each pick (betAnalysis.mjs statsModel), then ask the AI to adjust it,
//    by at most 5 points, for what the model can't see. temperature 0 so the same slip gets (nearly) the same answer.
// 3. Compare that with FanDuel's implied chance. The verdict (Value / Fair price / Avoid) is worked out here
//    from those two numbers, not by the AI.
//
// Uses the same AI settings as the Board Game Wizard: LLM_API_KEY, LLM_MODEL, optional LLM_BASE_URL.

import dns from "node:dns";
import { loadHistory, describePick, impliedChance, verdict, MODEL_SETTINGS } from "../../../server/helpers/betAnalysis.mjs";
import { getInjuries } from "../../../server/helpers/injuries.mjs";

dns.setDefaultResultOrder("ipv4first");

const BASE_URL = (process.env.LLM_BASE_URL || "https://generativelanguage.googleapis.com/v1beta/openai").replace(/\/$/, "");
const MODEL = process.env.LLM_MODEL || "";
const MAX_PICKS = 6;
const LLM_TIMEOUT_MS = 60_000;

// Best-effort limit so the free AI allowance isn't burned by one visitor (per server instance)
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 4;
}

const INSTRUCTIONS = `You are a careful NBA betting analyst. For each pick below, estimate the probability (0-100) that the bet wins:
for a spread, that the team covers; for a moneyline, that the team wins the game.

Use only the data given: team form and net rating (points per 100 possessions better than opponents), home court
(worth roughly 2-3 points), rest (back-to-backs hurt), defensive matchups, and how each key player's own history says he
does against this kind of opponent ("Tonight: about X GmSc/36" is his expected production; GmSc/36 = whole-box-score
production per 36 minutes, about 10 is average, 20+ is a star night). Player types: Elite = steady against everyone;
Dominant = great against weak defenses but contained by strong ones.

Injuries: each team's injury report is listed, and key players are marked [OUT] or [DAY-TO-DAY]. An OUT player will not
play: his matchup numbers don't apply, and his absence weakens his team (more so for Elite / Dominant players and big
minutes). DAY-TO-DAY players may or may not play, so treat them as uncertain. Sportsbooks usually already price in
injuries announced well before the game, so a missing star is not automatically value on the other side. News after the
report's time is not included; say so if a late decision could swing the pick.

Each pick comes with a "Stats model" chance, worked out from net ratings, home court, rest and injuries. Start from that
number. Adjust it, by at most 5 points either way, only for what the model can't see: player matchups, Elite/Dominant
types, a key player's history against this opponent, day-to-day uncertainty. If nothing clearly points one way, keep the
model's number. Your reasons should explain the adjustment (or why there isn't one).

Reply with ONLY this JSON, no other text:
{"picks": [{"pick": 1, "estimate": 54.0, "confidence": "low" | "medium" | "high",
            "reasons": ["short reason", "short reason", "short reason"], "key_matchup": "one sentence"}],
 "summary": "one or two sentences about the slip as a whole"}`;

function parseJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("no JSON in reply");
  return JSON.parse(text.slice(start, end + 1));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress || "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ message: "Too many analyses at once. Please wait a minute and try again." });
  }

  const picks = Array.isArray(req.body?.picks) ? req.body.picks.slice(0, MAX_PICKS) : [];
  if (!picks.length) return res.status(400).json({ message: "Add at least one pick to your slip first." });

  const apiKey = process.env.LLM_API_KEY;
  if ((!apiKey && !BASE_URL.includes("localhost")) || !MODEL) {
    return res.status(500).json({ message: "LLM_API_KEY or LLM_MODEL is not configured on the server." });
  }

  let history;
  try {
    history = loadHistory();
  } catch (err) {
    console.error("[betBot/analyze] couldn't load NBA history files", err);
    return res.status(500).json({ message: "The NBA history data isn't available on the server." });
  }

  const injuries = await getInjuries();   // null if ESPN can't be reached; the analysis says so
  const described = picks.map((p, i) => describePick(history, p, i, injuries));
  const usable = described.filter((d) => d.ok);
  if (!usable.length) return res.status(400).json({ message: "Couldn't find history for the teams on your slip." });

  const prompt = `${INSTRUCTIONS}\n\nStats as of ${history.meta.generated} (season ${history.meta.season}). ` +
                 `Injury report as of ${injuries ? injuries.updated : "unavailable"}.\n\n` +
                 described.map((d) => d.text).join("\n\n");

  const body = { model: MODEL, messages: [{ role: "user", content: prompt }], temperature: 0, max_tokens: 3000 };
  if (/gemini|gpt-oss/i.test(MODEL)) body.reasoning_effort = "low";

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), LLM_TIMEOUT_MS);
  const started = Date.now();
  try {
    const askAI = (b) => fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json", ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}) },
      body: JSON.stringify(b),
    });
    let llmRes = await askAI(body);
    if (llmRes.status === 400 && body.reasoning_effort) {
      console.warn("[betBot/analyze] AI rejected reasoning_effort, retrying without it:", (await llmRes.text()).slice(0, 300));
      const { reasoning_effort, ...rest } = body;
      llmRes = await askAI(rest);
    }
    if (!llmRes.ok) {
      console.error("[betBot/analyze] AI request failed", llmRes.status, (await llmRes.text()).slice(0, 800));
      return res.status(502).json({ message: llmRes.status === 429
        ? "The AI is busy right now. Please try again in a minute."
        : "The AI couldn't analyze this slip right now." });
    }
    const data = await llmRes.json();
    const reply = data.choices?.[0]?.message?.content || "";
    console.log(`[betBot/analyze] ${picks.length} pick(s) answered in ${Date.now() - started} ms`);

    let parsed;
    try {
      parsed = parseJson(reply);
    } catch (err) {
      console.error("[betBot/analyze] couldn't read the AI's reply:", reply.slice(0, 500));
      return res.status(502).json({ message: "The AI's answer came back garbled. Please try again." });
    }

    const results = picks.map((p, i) => {
      const ai = (parsed.picks || []).find((x) => Number(x.pick) === i + 1) || {};
      const implied = impliedChance(p.odds);
      // The AI's number, held to within AI_MAX_ADJUST points of the stats model. No AI number: use the model's.
      const model = described[i].model || null;
      let estimate = Number.isFinite(Number(ai.estimate)) ? Number(ai.estimate) : model ? model.chance : null;
      if (estimate !== null && model) {
        estimate = Math.max(model.chance - MODEL_SETTINGS.AI_MAX_ADJUST, Math.min(model.chance + MODEL_SETTINGS.AI_MAX_ADJUST, estimate));
      }
      if (estimate !== null) estimate = Math.round(Math.max(1, Math.min(99, estimate)) * 10) / 10;
      return {
        id: p.id,
        team: p.team, opponent: p.opponent, type: p.type, label: p.label, odds: p.odds,
        implied: implied === null ? null : Math.round(implied * 10) / 10,
        estimate,
        model: model ? model.chance : null,
        modelMargin: model ? model.margin : null,
        ...verdict(estimate, implied),
        confidence: ai.confidence || null,
        reasons: Array.isArray(ai.reasons) ? ai.reasons.slice(0, 4) : [],
        key_matchup: ai.key_matchup || null,
        noData: !described[i].ok,
      };
    });
    return res.status(200).json({ results, summary: parsed.summary || null, dataAsOf: history.meta.generated,
                                  injuriesAsOf: injuries ? injuries.updated : null });
  } catch (err) {
    const timedOut = err.name === "AbortError";
    console.error(timedOut ? "[betBot/analyze] AI timed out" : "[betBot/analyze] error", timedOut ? "" : err);
    return res.status(timedOut ? 504 : 500).json({ message: timedOut
      ? "The AI took too long. Please try again."
      : "Something went wrong analyzing this slip." });
  } finally {
    clearTimeout(timer);
  }
}
