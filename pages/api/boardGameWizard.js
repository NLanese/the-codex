// Board Game Master AI, version 2: local retrieval + hosted LLM.
//
// 1. Look up the selected game in rulesIndex.json (built by scripts/boardgame/buildRulesIndex.mjs).
// 2. Find the rules chunks that best match the question with BM25 (no vector database, no AWS).
// 3. Send those chunks + the question to any OpenAI-compatible chat API (Google Gemini by default).
//
// Env vars (set in Vercel → Settings → Environment Variables, and in .env.local for dev):
//   LLM_API_KEY    required (a Gemini key from Google AI Studio by default)
//   LLM_MODEL      required, e.g. a current "gemini-...-flash" model name
//   LLM_BASE_URL   optional, default https://generativelanguage.googleapis.com/v1beta/openai
//                  Groq: https://api.groq.com/openai/v1   Ollama (fully local, dev only): http://localhost:11434/v1

import dns from "node:dns";
import rulesIndex from "../../constants/projects/boardgame_master_ai/rulesIndex.json";
import { retrieve } from "../../server/helpers/boardGameRag.mjs";
import fullRequest from "../../constants/projects/boardgame_master_ai/fullRequest";

const BASE_URL = (process.env.LLM_BASE_URL || "https://generativelanguage.googleapis.com/v1beta/openai").replace(/\/$/, "");
const MODEL = process.env.LLM_MODEL || "";

// Try IPv4 before IPv6 when connecting to the AI. On networks where IPv6 doesn't really work,
// Node otherwise waits 20+ seconds for it to fail before falling back, which makes every answer slow.
dns.setDefaultResultOrder("ipv4first");

const MAX_QUESTION_CHARS = 1000;
const LLM_TIMEOUT_MS = 60_000;   // give up on the AI after 60 seconds instead of hanging forever
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
  if ((!apiKey && !BASE_URL.includes("localhost")) || !MODEL) {
    return res.status(500).json({ message: "LLM_API_KEY or LLM_MODEL is not configured on the server." });
  }

  // Search with the previous user question too, so follow-ups like "what about on defense?" still find the right rules.
  const prior = cleanHistory(history);
  const lastUserQuestion = [...prior].reverse().find((m) => m.role === "user")?.content || "";
  const { mode, chunks } = retrieve(gameIndex, `${question} ${lastUserQuestion}`);

  const body = {
    model: MODEL,
    messages: fullRequest(game, chunks, prior, question.trim()),
    temperature: 0.3,
    max_tokens: 2500,
    stream: true,   // send the answer piece by piece as it's written
  };
  // Gemini and GPT-OSS models think privately before answering. "low" keeps that short, so answers come faster.
  if (/gemini|gpt-oss/i.test(MODEL)) body.reasoning_effort = "low";

  const sources = [...new Set(chunks.map((c) => c.heading))];
  const started = Date.now();
  console.log(`[boardGameWizard] asking ${MODEL} about ${game} (${mode}: ${chunks.length} sections)`);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), LLM_TIMEOUT_MS);

  const askAI = (requestBody) => fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
    body: JSON.stringify(requestBody),
  });

  let streaming = false;
  try {
    let llmRes = await askAI(body);

    // Some models reject the thinking setting. If so, log why and ask again without it rather than failing.
    if (llmRes.status === 400 && body.reasoning_effort) {
      console.warn("[boardGameWizard] AI rejected the request, retrying without reasoning_effort:", (await llmRes.text()).slice(0, 400));
      const { reasoning_effort, ...withoutReasoning } = body;
      llmRes = await askAI(withoutReasoning);
    }

    console.log(`[boardGameWizard] AI started answering (status ${llmRes.status}) after ${Date.now() - started} ms`);
    if (!llmRes.ok) {
      const detail = await llmRes.text();
      console.error("[boardGameWizard] AI request failed", llmRes.status, detail.slice(0, 800));
      const message = llmRes.status === 429
        ? "The Board Game Master is busy right now. Please try again in a minute."
        : "The Board Game Master couldn't answer right now.";
      return res.status(502).json({ message });
    }

    // Pass the answer on to the page as it arrives, one JSON object per line:
    //   {"type":"sources",...}  then many {"type":"text","text":"..."}  then {"type":"done"}
    res.writeHead(200, {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Content-Encoding": "none",   // stops compression from holding the stream back
      "X-Accel-Buffering": "no",
    });
    streaming = true;
    const send = (obj) => res.write(JSON.stringify(obj) + "\n");
    send({ type: "sources", sources, retrieval: mode });

    // The AI streams "server-sent events": lines like  data: {...json...}  ending with  data: [DONE]
    const reader = llmRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let firstText = true;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();   // keep any half-received line for the next round
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const data = line.slice(5).trim();
        if (!data || data === "[DONE]") continue;
        let text;
        try { text = JSON.parse(data).choices?.[0]?.delta?.content; } catch { continue; }
        if (!text) continue;
        if (firstText) {
          console.log(`[boardGameWizard] first words after ${Date.now() - started} ms`);
          firstText = false;
        }
        send({ type: "text", text });
      }
    }
    console.log(`[boardGameWizard] finished after ${Date.now() - started} ms`);
    send({ type: "done" });
    res.end();
    return;
  } catch (err) {
    const timedOut = err.name === "AbortError";
    console.error(timedOut
      ? `[boardGameWizard] AI didn't finish within ${LLM_TIMEOUT_MS / 1000} seconds`
      : "[boardGameWizard] Error calling the AI --", timedOut ? "" : err, err.cause || "");
    const message = timedOut
      ? "The Board Game Master took too long to answer. Please try again."
      : "The Board Game Master couldn't reach the AI right now.";
    // Once streaming has started the status can't change, so the error goes down the stream instead
    if (streaming) {
      res.write(JSON.stringify({ type: "error", message }) + "\n");
      res.end();
      return;
    }
    return res.status(timedOut ? 504 : 500).json({ message });
  } finally {
    clearTimeout(timer);
  }
}
