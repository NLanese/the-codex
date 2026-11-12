// Builds the Board Game Master AI's search index from the rules in data/boardgame_rules/.
//
//   node scripts/boardgame/buildRulesIndex.mjs
//
// Input (either or both):
//   data/boardgame_rules/<Game Name>.md|.txt   one file per game; the file name must match the
//                                              name in the page's dropdown, e.g. "Robo Quest Arena.md"
//   data/boardgame_rules/*.txt|.md             a combined file where each game starts with a marker
//                                              line like:  === Chess ===
// Output:
//   constants/projects/boardgame_master_ai/rulesIndex.json  (imported by pages/api/boardGameWizard.js)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { buildGameIndex } from "../../server/helpers/boardGameRag.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const rulesDir = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, "data/boardgame_rules");
const outFile = path.join(root, "constants/projects/boardgame_master_ai/rulesIndex.json");

const MARKER = /^===\s*(.+?)\s*===\s*$/m;
const games = {};

const files = fs.readdirSync(rulesDir).filter((f) => /\.(md|txt)$/i.test(f) && f.toLowerCase() !== "readme.md");
for (const file of files) {
  const text = fs.readFileSync(path.join(rulesDir, file), "utf8");
  if (MARKER.test(text)) {
    // Combined file: split on "=== Game Name ===" lines.
    const parts = text.split(/^===\s*(.+?)\s*===\s*$/m);
    for (let i = 1; i < parts.length; i += 2) {
      const name = parts[i].trim();
      games[name] = (games[name] ? games[name] + "\n\n" : "") + parts[i + 1];
    }
  } else {
    const name = path.basename(file, path.extname(file)).trim();
    games[name] = (games[name] ? games[name] + "\n\n" : "") + text;
  }
}

const index = { builtAt: new Date().toISOString(), games: {} };
for (const [name, text] of Object.entries(games)) {
  const g = buildGameIndex(text);
  if (!g.chunks.length) continue;
  index.games[name] = g;
  console.log(`${name.padEnd(22)} ${String(g.chunks.length).padStart(4)} chunks  ${String(g.totalWords).padStart(6)} words`);
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(index));
const kb = (fs.statSync(outFile).size / 1024).toFixed(1);
console.log(`\nWrote ${Object.keys(index.games).length} game(s) to ${path.relative(root, outFile)} (${kb} KB)`);
if (!Object.keys(index.games).length) console.log(`No rules found in ${path.relative(root, rulesDir)}. Add files there and run again.`);
