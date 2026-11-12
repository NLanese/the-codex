// Board Game Master AI: local retrieval (BM25) helpers.
// Shared by the index build script (scripts/boardgame/buildRulesIndex.mjs)
// and the API route (pages/api/boardGameWizard.js), so both tokenize text the same way.

const STOPWORDS = new Set(
  ("a an and are as at be but by can do does for from has have how i if in into is it its " +
   "me my of on or so than that the their them then there these they this to was what when " +
   "where which who why will with you your we our us player players game games").split(" ")
);

// Very light stemmer: enough to match "cards"/"card", "moving"/"moves"/"move", "castle"/"castling".
function stem(word) {
  let w = word;
  if (w.length > 5 && w.endsWith("ing")) w = w.slice(0, -3);
  else if (w.length > 4 && w.endsWith("ed")) w = w.slice(0, -2);
  else if (w.length > 4 && w.endsWith("es")) w = w.slice(0, -2);
  else if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) w = w.slice(0, -1);
  if (w.length > 3 && w.endsWith("e")) w = w.slice(0, -1);
  return w;
}

export function tokenize(text) {
  return (text.toLowerCase().match(/[a-z0-9]+/g) || [])
    .filter((w) => !STOPWORDS.has(w))
    .map(stem);
}

export function countWords(text) {
  return (text.match(/\S+/g) || []).length;
}

// Split one game's rules into chunks of roughly `targetWords`, never splitting a paragraph,
// and remember the most recent heading so every chunk knows which section it came from.
export function chunkRules(text, targetWords = 220) {
  const paragraphs = text.replace(/\r\n/g, "\n").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  // Filters out OCR junk ("J2", "Se eo", "Fill the Shop (the 6") that would otherwise look like headings.
  const looksReal = (line) => {
    const t = line.replace(/^#+\s*/, "").replace(/\s*#+\s*$/, "").replace(/^Step \d+\.\s*/i, "").trim();
    const last = t.split(/\s+/).pop().toLowerCase();
    return /[A-Za-z]{4,}/.test(t) && !/\.\s/.test(t) && !t.includes("|") && (t.match(/\(/g) || []).length === (t.match(/\)/g) || []).length &&
      !["the", "a", "an", "have", "has", "of", "to", "and", "your", "is"].includes(last);
  };
  const isHeading = (p) =>
    /^#{1,6}\s/.test(p) || (p.length < 70 && !/[.!?:]$/.test(p) && p === p.toUpperCase() && /[A-Z]/.test(p) && looksReal(p));

  // "## SETUP: ##" -> "SETUP"
  const cleanHeading = (h) => h.replace(/^#+\s*/, "").replace(/\s*#+\s*$/, "").replace(/:$/, "").trim();
  // A short Title Case first line ("How To Castle In Chess") followed by text is a heading too.
  const isTitleLine = (line) => {
    const words = line.trim().split(/\s+/);
    if (words.length < 2 || words.length > 9 || /[.,;!?:)]$/.test(line.trim())) return false;
    const caps = words.filter((w) => /^[A-Z0-9]/.test(w)).length;
    return /^[A-Z]/.test(line.trim()) && caps / words.length >= 0.5 && looksReal(line);
  };

  const chunks = [];
  let heading = "Overview";
  let buffer = [];
  let words = 0;

  const flush = () => {
    if (!buffer.length) return;
    chunks.push({ heading, text: buffer.join("\n\n") });
    buffer = [];
    words = 0;
  };

  for (let p of paragraphs) {
    // A markdown heading directly followed by text (no blank line) still starts a new section.
    const firstLine = p.split("\n")[0];
    if (p.includes("\n") && (/^#{1,6}\s/.test(firstLine) || isTitleLine(firstLine))) {
      flush();
      heading = cleanHeading(firstLine);
      p = p.slice(firstLine.length).trim();
    } else if (!p.includes("\n") && (isHeading(p) || isTitleLine(p))) {
      flush();
      heading = cleanHeading(p);
      continue;
    }
    // Very long paragraphs (scanned text with no blank lines) get split line by line.
    const pieces = countWords(p) > targetWords * 1.5 ? p.split("\n") : [p];
    for (const piece of pieces) {
      const w = countWords(piece);
      if (!w) continue;
      if (words + w > targetWords && words > 0) flush();
      buffer.push(piece);
      words += w;
    }
  }
  flush();
  return chunks;
}

// Build the per-game BM25 statistics that get saved to rulesIndex.json.
export function buildGameIndex(text) {
  const chunks = chunkRules(text).map((c, i) => {
    const tokens = tokenize(`${c.heading} ${c.text}`);
    const tf = {};
    for (const t of tokens) tf[t] = (tf[t] || 0) + 1;
    return { id: i, heading: c.heading, text: c.text, len: tokens.length, tf };
  });
  const df = {};
  for (const c of chunks) for (const t of Object.keys(c.tf)) df[t] = (df[t] || 0) + 1;
  const avgLen = chunks.reduce((s, c) => s + c.len, 0) / Math.max(chunks.length, 1);
  const totalWords = chunks.reduce((s, c) => s + countWords(c.text), 0);
  return { chunks, df, avgLen, totalWords };
}

// Score every chunk of one game against the question with BM25 and return the best ones.
// Short rulebooks are sent whole, because then the model sees every rule.
export function retrieve(gameIndex, query, { topK = 6, sendWholeIfUnder = 3500, k1 = 1.2, b = 0.75 } = {}) {
  const { chunks, df, avgLen, totalWords } = gameIndex;
  if (totalWords <= sendWholeIfUnder) return { mode: "whole", chunks };

  const N = chunks.length;
  const terms = [...new Set(tokenize(query))];
  const scored = chunks.map((c) => {
    let score = 0;
    for (const t of terms) {
      const f = c.tf[t];
      if (!f) continue;
      const idf = Math.log(1 + (N - df[t] + 0.5) / (df[t] + 0.5));
      score += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * c.len) / avgLen)));
    }
    return { c, score };
  });

  let best = scored.filter((s) => s.score > 0).sort((a, b2) => b2.score - a.score).slice(0, topK);
  // Nothing matched (e.g. "how do I play?"): fall back to the start of the rulebook.
  if (!best.length) best = scored.slice(0, topK);
  // Put the picked chunks back in rulebook order so the excerpts read naturally.
  return { mode: "search", chunks: best.map((s) => s.c).sort((a, b2) => a.id - b2.id) };
}
