// Board Game Master AI, version 2: local retrieval + hosted LLM.
//
// 1. Look up the selected game in rulesIndex.json (built by scripts/boardgame/buildRulesIndex.mjs).
// 2. Find the rules chunks that best match the question with BM25 (no vector database, no AWS).
// 3. Send those chunks + the question to any OpenAI-compatible chat API (Groq by default).
//
// Env vars (set in Vercel → Settings → Environment Variables, and in .env.local for dev):
//   LLM_API_KEY    required (a Groq key by default)
//   LLM_BASE_URL   optional, default https://api.groq.com/openai/v1
//                  for a fully local setup in dev, use Ollama: http://localhost:11434/v1
//   LLM_MODEL      optional, default openai/gpt-oss-20b

import rulesIndex from "../../constants/projects/boardgame_master_ai/rulesIndex.json";
import { retrieve } from "../../api/helpers/boardGameRag.mjs";
import fullRequest from "../../constants/projects/boardgame_master_ai/fullRequest";

const BASE_URL = (process.env.LLM_BASE_URL || "https://api.groq.com/openai/v1").replace(/\/$/, "");
const MODEL = process.env.LLM_MODEL || "openai/gpt-oss-20b";

const MAX_QUESTION_CHARS = 1000;
const MAX_HISTORY_MESSAGES = 6;

// Best-effort rate limit so a public page can't run up the API bill. Serverless instances
// don't share memory, so this is per instance; Groq's own limits are the real backstop.
const RATE_LIMIT = { windowMs: 60_000, max: 8 };
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

function cleanHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress || "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ message: "Too many questions at once. Please wait a minute and try again." });
  }

  const { game, question, history } = req.body || {};
  if (!game || typeof question !== "string" || !question.trim()) {
    return res.status(400).json({ message: "Please pick a game and type a question." });
  }
  if (question.length > MAX_QUESTION_CHARS) {
    return res.status(400).json({ message: `Please keep questions under ${MAX_QUESTION_CHARS} characters.` });
  }

  const gameIndex = rulesIndex.games[game];
  if (!gameIndex) {
    return res.status(404).json({ message: `I don't have the rules for ${game} loaded yet.` });
  }

  const apiKey = process.env.LLM_API_KEY;
  if (!apiKey && !BASE_URL.includes("localhost")) {
    return res.status(500).json({ message: "LLM_API_KEY is not configured on the server." });
  }

  // Search with the previous user question too, so follow-ups like "what about on defense?" still find the right rules.
  const prior = cleanHistory(history);
  const lastUserQuestion = [...prior].reverse().find((m) => m.role === "user")?.content || "";
  const { mode, chunks } = retrieve(gameIndex, `${question} ${lastUserQuestion}`);

  const body = {
    model: MODEL,
    messages: fullRequest(game, chunks, prior, question.trim()),
    temperature: 0.3,
    max_tokens: 1500,
  };
  // GPT-OSS models think before answering; "low" keeps answers fast and cheap.
  if (MODEL.includes("gpt-oss")) body.reasoning_effort = "low";

  try {
    const llmRes = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify(body),
    });

    if (!llmRes.ok) {
      const detail = await llmRes.text();
      console.error("LLM request failed", llmRes.status, detail.slice(0, 500));
      const message = llmRes.status === 429
        ? "The Board Game Master is busy right now. Please try again in a minute."
        : "The Board Game Master couldn't answer right now.";
      return res.status(502).json({ message });
    }

    const data = await llmRes.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "No response";
    const sources = [...new Set(chunks.map((c) => c.heading))];
    return res.status(200).json({ reply, sources, retrieval: mode });
  } catch (err) {
    console.error("Error calling LLM --", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
