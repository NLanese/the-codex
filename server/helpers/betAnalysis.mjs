// NBA BetBot: turns the picks on a bet slip into a short, exact matchup summary for the AI,
// using the history files built by the NBA_Stats_Ostrich_API pipeline (constants/projects/betBot/nbaHistory/).
//
// Nothing here guesses: it looks numbers up and does arithmetic. The AI only gets the result.

import fs from "fs";
import path from "path";
import { injuriesForTeam, injuryFor } from "./injuries.mjs";

const DATA_DIR = path.join(process.cwd(), "constants", "projects", "betBot", "nbaHistory");

// The defenses that can "contain" a player (same list as the pipeline's QUALITY_TRAITS)
const QUALITY_TRAITS = ["defense", "interior_defense", "three_pt_defense", "rebounding", "forcing_turnovers"];
const REAL_PATTERN_T = 2;
const PLAYERS_PER_TEAM = 7;

// The Odds API and NBA.com don't always spell team names the same way
const NAME_ALIASES = { "los angeles clippers": "la clippers" };

///////////////
// Load data //
///////////////

let cache = null;
export function loadHistory() {
  if (cache) return cache;
  const teams = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "teams.json"), "utf8"));
  const players = {};
  for (const t of teams.teams) {
    const file = path.join(DATA_DIR, `${t.team}.json`);
    if (fs.existsSync(file)) players[t.team] = JSON.parse(fs.readFileSync(file, "utf8")).players;
  }
  cache = { meta: teams, teams: teams.teams, players };
  return cache;
}

const normalize = (name) => {
  const n = String(name || "").toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  return NAME_ALIASES[n] || n;
};

export function findTeam(history, name) {
  const n = normalize(name);
  return history.teams.find((t) => normalize(t.name) === n)
    || history.teams.find((t) => n.endsWith(normalize(t.name).split(" ").pop()));   // fall back to the nickname
}

/////////////
// Numbers //
/////////////

// "-125" -> 55.6 : the win chance a sportsbook price implies
export function impliedChance(odds) {
  const n = Number(odds);
  if (!Number.isFinite(n) || Math.abs(n) < 100) return null;
  return n < 0 ? (-n / (-n + 100)) * 100 : (100 / (n + 100)) * 100;
}

// Days between a team's last game and tonight's tip-off, on the US Eastern calendar the NBA uses
export function restDays(lastGame, tipoff) {
  if (!lastGame || !tipoff) return null;
  const tonight = new Date(tipoff).toLocaleDateString("en-CA", { timeZone: "America/New_York" });   // YYYY-MM-DD
  const days = Math.round((Date.parse(tonight) - Date.parse(lastGame)) / 86400000);
  return days > 0 ? days - 1 : null;   // 0 = back-to-back
}

// How to say what contains a player (the pipeline stores the trait's label)
const CONTAINED_BY_WORDS = {
  "Overall defense": "strong defenses", "Inside defense": "strong interior defenses", "3-point defense": "strong 3-point defenses",
  "Rebounding": "strong rebounding teams", "Forcing turnovers": "teams that force lots of turnovers",
};

const r1 = (x) => (x === null || x === undefined ? null : Math.round(x * 10) / 10);
const signed = (x) => (x > 0 ? `+${r1(x)}` : `${r1(x)}`);

/////////////////////////
// Matchup descriptions //
/////////////////////////

function describeInjuries(t, injuries) {
  if (!injuries) return "  Injury report: unavailable right now.";
  if (!injuries.length) return "  Injury report: nobody listed.";
  return "  Injury report: " + injuries.map((i) =>
    `${i.name} ${i.status.toUpperCase()}${i.injury ? ` (${i.injury})` : ""}${i.returnDate ? `, expected back ${i.returnDate}` : ""}`).join("; ") + ".";
}

function describeTeam(t, isHome, rest, traitInfo) {
  const tr = t.traits || {};
  const rank = (k) => (tr[k] ? `${traitInfo[k]?.label || k} #${tr[k].rank} (${tr[k].tier}, ${tr[k].value})` : null);
  const restText = rest === null ? "rest unknown" : rest === 0 ? "BACK-TO-BACK" : `${rest} day${rest === 1 ? "" : "s"} rest`;
  return [
    `${t.team} ${t.name} (${isHome ? "home" : "away"}): ${t.record}, last 10 ${t.last10}, home ${t.home}, away ${t.away}, ` +
      `net rating ${signed(t.net_rating)} (last 10: ${signed(t.last10_net_rating)}), ${restText}.`,
    `  Ranks (1 = best of 30): ${["defense", "interior_defense", "three_pt_defense", "rebounding", "forcing_turnovers", "pace"]
      .map(rank).filter(Boolean).join("; ")}.`,
  ].join("\n");
}

// How one player's career trends say he'll do against tonight's opponent
function describePlayer(p, opp, traitInfo, injuries) {
  const pr = p.profile || {};
  const o = p.overall;
  const type = pr.label ? `${pr.label}` : pr.matchup || "role player";
  const hurt = injuries ? injuryFor(injuries, p.name) : null;
  const status = hurt ? `[${hurt.status.toUpperCase()}${hurt.injury ? `: ${hurt.injury}` : ""}] ` : "";
  let line = `  ${status}${p.name} (${type}, ${o.min} min): normal ${o.gmsc36} GmSc/36, ${o.pts} pts, ${o.fg3_pct ?? "-"}% from three.`;

  // Real (t 2+) effects of tonight's opponent, from his career trends
  const effects = [];
  for (const k of QUALITY_TRAITS) {
    const trend = p.trends?.[k];
    const oppTrait = opp.traits?.[k];
    if (!trend || !oppTrait || trend.per_unit?.gmsc36 == null || Math.abs(trend.t?.gmsc36 || 0) < REAL_PATTERN_T) continue;
    const delta = trend.per_unit.gmsc36 * (oppTrait.value - oppTrait.league_avg);
    effects.push({ k, delta, rank: oppTrait.rank, tier: oppTrait.tier });
  }
  effects.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
  if (effects.length) {
    const e = effects[0];
    line += ` Tonight: about ${r1(o.gmsc36 + e.delta)} GmSc/36 (${signed(e.delta)}) because ${opp.team}'s ` +
            `${(traitInfo[e.k]?.label || e.k).toLowerCase()} is ${e.tier} (#${e.rank}).`;
  } else {
    line += " No reliable effect from this opponent's defense.";
  }

  // 3-point shooting against tonight's 3-point defense, if it's a real pattern for him
  const t3 = p.trends?.three_pt_defense;
  const opp3 = opp.traits?.three_pt_defense;
  if (t3 && opp3 && t3.per_unit?.fg3_pct != null && Math.abs(t3.t?.fg3_pct || 0) >= REAL_PATTERN_T) {
    line += ` 3P% tonight: about ${r1(o.fg3_pct + t3.per_unit.fg3_pct * (opp3.value - opp3.league_avg))}%.`;
  }

  const h2h = p.vs_teams?.[opp.team];
  if (h2h) line += ` Vs ${opp.team} recently: ${h2h.games} game${h2h.games === 1 ? "" : "s"}, ${h2h.pts} pts, ${h2h.gmsc36} GmSc/36${h2h.small_sample ? " (small sample)" : ""}.`;
  if (pr.contained_by && pr.label) line += ` Contained by ${CONTAINED_BY_WORDS[pr.contained_by] || pr.contained_by.toLowerCase()}.`;
  return line;
}

// Everything the AI needs for one pick, as plain text
export function describePick(history, pick, index, injuryReport) {
  const team = findTeam(history, pick.team);
  const opp = findTeam(history, pick.opponent);
  if (!team || !opp) return { ok: false, text: `Pick ${index + 1}: no history found for ${pick.team} vs ${pick.opponent}.` };

  const traitInfo = history.meta.traits || {};
  const teamHome = pick.homeTeam ? findTeam(history, pick.homeTeam)?.team === team.team : null;
  const bet = pick.type === "spread"
    ? `${team.team} ${pick.points > 0 ? "+" : ""}${pick.points} (spread) at ${pick.odds}: wins if ${team.team} ` +
      (pick.points < 0 ? `wins by more than ${Math.abs(pick.points)}` : `wins, or loses by less than ${pick.points}`)
    : `${team.team} moneyline at ${pick.odds}: wins if ${team.team} wins the game`;

  const teamHurt = injuryReport ? injuriesForTeam(injuryReport, team.name) : null;
  const oppHurt = injuryReport ? injuriesForTeam(injuryReport, opp.name) : null;
  const lines = [
    `PICK ${index + 1}: ${bet}. FanDuel's implied chance: ${r1(impliedChance(pick.odds))}%.`,
    describeTeam(team, teamHome === true, restDays(team.last_game, pick.tipoff), traitInfo),
    describeInjuries(team, teamHurt),
    describeTeam(opp, teamHome === false, restDays(opp.last_game, pick.tipoff), traitInfo),
    describeInjuries(opp, oppHurt),
    `${team.team} key players vs ${opp.team}:`,
    ...(history.players[team.team] || []).slice(0, PLAYERS_PER_TEAM).map((p) => describePlayer(p, opp, traitInfo, teamHurt)),
    `${opp.team} key players vs ${team.team}:`,
    ...(history.players[opp.team] || []).slice(0, PLAYERS_PER_TEAM).map((p) => describePlayer(p, team, traitInfo, oppHurt)),
  ];
  return { ok: true, text: lines.join("\n"), team, opp };
}

// Edge = AI's chance minus the sportsbook's. A few points either way is just noise.
export function verdict(estimate, implied) {
  if (estimate == null || implied == null) return { edge: null, verdict: "No estimate" };
  const edge = estimate - implied;
  return { edge: r1(edge), verdict: edge >= 3 ? "Value" : edge <= -3 ? "Avoid" : "Fair price" };
}
