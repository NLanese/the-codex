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
    t.last_season ? `  Last season (${t.last_season.season}): ${t.last_season.record}, net rating ${signed(t.last_season.net_rating)}; ` +
      `summer roster moves ${signed(t.roster_change)}; so it started this season at about ${signed(t.prior_net_rating)}.` : null,
    `  Ranks (1 = best of 30): ${["defense", "interior_defense", "three_pt_defense", "rebounding", "forcing_turnovers", "pace"]
      .map(rank).filter(Boolean).join("; ")}.`,
  ].filter(Boolean).join("\n");
}

// How one player's career trends say he'll do against tonight's opponent
function describePlayer(p, opp, traitInfo, injuries) {
  const pr = p.profile || {};
  const o = p.overall;
  const type = pr.label ? `${pr.label}` : pr.matchup || "role player";
  const hurt = injuries ? injuryFor(injuries, p.name) : null;
  const status = hurt ? `[${hurt.status.toUpperCase()}${hurt.injury ? `: ${hurt.injury}` : ""}] ` : "";
  let line = `  ${status}${p.name} (${type}, ${o.min} min): normal ${o.gmsc36} GmSc/36, ${o.pts} pts, ${o.fg3_pct ?? "-"}% from three.`;
  const seasons = Object.entries(p.seasons || {}).sort(([a], [b]) => b.localeCompare(a));
  if (seasons.length) {
    line += " " + seasons.map(([label, s], i) => `${i === 0 ? "This season" : "Last season"} (${label}): ${s.games} g, ` +
      `${s.min} min, ${s.gmsc36} GmSc/36, ${s.pts} pts`).join("; ") + ".";
  }

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
  const model = statsModel(history, pick, team, opp, injuryReport);
  lines.splice(1, 0, `${model.text} You may move this by at most ${M.AI_MAX_ADJUST} points.`);
  return { ok: true, text: lines.join("\n"), team, opp, model };
}

// Edge = AI's chance minus the sportsbook's. A few points either way is just noise.
export function verdict(estimate, implied) {
  if (estimate == null || implied == null) return { edge: null, verdict: "No estimate" };
  const edge = estimate - implied;
  // Five tiers. ±3 or more is a strong call; ±1 to ±3 shows which way the AI leans without overstating it;
  // inside ±1 the price and the estimate basically agree.
  const v = edge >= 3 ? "Value" : edge >= 1 ? "Lean bet" : edge > -1 ? "Fair price" : edge > -3 ? "Lean pass" : "Avoid";
  return { edge: r1(edge), verdict: v };
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// Stats model: a fixed starting estimate for each pick, so the AI adjusts a number instead of  //
// inventing one. Same inputs always give the same answer.                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////
//
// 1. Team strength, in net rating points (points per 100 possessions, which reads as points per game):
//      - this season: season and last 10 games blended 70/30.
//      - starting point ("prior", from the pipeline): 60% of last season's net rating plus what the roster gained
//        or lost over the summer. A dozen games of this season is shaky, so early on the prior carries a lot of the
//        weight: this season counts games / (games + 10) (about half at 10 games, 80% by game 40).
// 2. Expected margin = strength gap + home court (+2.5 for the home team) - 1.5 for a team on a back-to-back
//      - injuries: what each missing player adds per game, minus the part already in this season's net rating
//        (a player out since opening night is already in it; one hurt yesterday isn't). Day-to-day counts half.
//        A player is valued from this season's numbers blended with last season's, the same games / (games + 10) way.
// 3. Turn margin into a chance. NBA results land around the expected margin with a spread (standard deviation)
//    of about 12 points, so: spread pick = chance the margin beats -points; moneyline = chance it beats 0.
// FanDuel's line is never an input: the model is an independent opinion to compare against it.

export const MODEL_SETTINGS = {
  HOME_COURT: 2.5,          // points
  BACK_TO_BACK: 1.5,        // points lost on the second night
  MARGIN_SD: 12,            // how far real results land from the expected margin
  SHRINK_GAMES: 10,         // this season's share = games / (games + 10); the rest comes from last season
  LAST10_WEIGHT: 0.3,       // share of the blended rating that comes from the last 10 games
  REPLACEMENT_GMSC36: 10,   // Game Score per 36 a bench replacement gives you
  POINTS_PER_GMSC: 0.4,     // margin points per 1 GmSc/36 above replacement, scaled by his minutes / 48
  MAX_INJURY_POINTS: 10,    // cap per team
  DAY_TO_DAY_WEIGHT: 0.5,
  AI_MAX_ADJUST: 5,         // the AI can move the model's chance by at most this many points
};
const M = MODEL_SETTINGS;

// Standard normal cumulative probability (Abramowitz-Stegun approximation, accurate to ~1e-7)
function normalCdf(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

function gamesPlayed(record) {
  const [w, l] = String(record || "0-0").split("-").map(Number);
  return (w || 0) + (l || 0);
}

function teamStrength(t) {
  const last10 = t.last10_net_rating ?? t.net_rating ?? 0;
  const now = (1 - M.LAST10_WEIGHT) * (t.net_rating ?? 0) + M.LAST10_WEIGHT * last10;
  const g = gamesPlayed(t.record);
  const share = g / (g + M.SHRINK_GAMES);
  return share * now + (1 - share) * (t.prior_net_rating ?? 0);
}

// A player's production and minutes: this season blended with last season by games played
export function playerForm(p) {
  const seasons = Object.entries(p.seasons || {}).sort(([a], [b]) => b.localeCompare(a));   // newest first
  const [now, last] = [seasons[0]?.[1], seasons[1]?.[1]];
  if (!now && !last) return { gmsc36: p.overall.gmsc36, min: p.overall.min };
  if (!now || !last) { const only = now || last; return { gmsc36: only.gmsc36, min: only.min }; }
  const share = now.games / (now.games + M.SHRINK_GAMES);
  return { gmsc36: share * now.gmsc36 + (1 - share) * last.gmsc36, min: share * now.min + (1 - share) * last.min };
}

// Share of this season's games played before the injury: that part of his absence is already in the net rating
function alreadyCounted(injuryDate, seasonStart, today) {
  if (!injuryDate) return 0.5;   // unknown: split the difference
  const span = today - seasonStart;
  if (span <= 0) return 0;
  return Math.max(0, Math.min(1, (today - Date.parse(injuryDate)) / span));
}

function injuryPoints(history, team, injuries, today) {
  if (!injuries?.length) return { points: 0, who: [] };
  const seasonStart = Date.parse(`${String(history.meta.season).slice(0, 4)}-10-20`);
  let points = 0;
  const who = [];
  for (const p of history.players[team.team] || []) {
    const hurt = injuryFor(injuries, p.name);
    if (!hurt) continue;
    const status = hurt.status.toLowerCase();
    const playing = status === "out" ? 0 : status.includes("day") ? 1 - M.DAY_TO_DAY_WEIGHT : 1;
    if (playing === 1) continue;
    const form = playerForm(p);
    const value = Math.max(0, (form.gmsc36 - M.REPLACEMENT_GMSC36)) * (form.min / 48) * M.POINTS_PER_GMSC;
    const lost = value * (1 - playing) * (1 - alreadyCounted(hurt.date, seasonStart, today));
    if (lost >= 0.1) { points += lost; who.push(`${p.name} ${r1(lost)}`); }
  }
  return { points: Math.min(points, M.MAX_INJURY_POINTS), who };
}

export function statsModel(history, pick, team, opp, injuryReport, now = Date.now()) {
  const teamHome = pick.homeTeam ? findTeam(history, pick.homeTeam)?.team === team.team : null;
  const parts = [];
  const add = (label, pts) => { if (Math.abs(pts) >= 0.05) parts.push(`${label} ${signed(pts)}`); return pts; };

  let margin = 0;
  margin += add("team strength", teamStrength(team) - teamStrength(opp));
  if (teamHome !== null) margin += add("home court", teamHome ? M.HOME_COURT : -M.HOME_COURT);
  if (restDays(team.last_game, pick.tipoff) === 0) margin += add(`${team.team} back-to-back`, -M.BACK_TO_BACK);
  if (restDays(opp.last_game, pick.tipoff) === 0) margin += add(`${opp.team} back-to-back`, M.BACK_TO_BACK);
  if (injuryReport) {
    const mine = injuryPoints(history, team, injuriesForTeam(injuryReport, team.name), now);
    const theirs = injuryPoints(history, opp, injuriesForTeam(injuryReport, opp.name), now);
    margin += add(`${team.team} injuries`, -mine.points);
    margin += add(`${opp.team} injuries`, theirs.points);
  }

  const needed = pick.type === "spread" ? -Number(pick.points) : 0;   // margin the bet needs to beat
  const chance = 100 * normalCdf((margin - needed) / M.MARGIN_SD);
  return {
    chance: Math.max(1, Math.min(99, r1(chance))),
    margin: r1(margin),
    text: `Stats model: expected margin ${signed(margin)} for ${team.team} (${parts.join(", ") || "even"}), ` +
          `so ${r1(chance)}% to ${pick.type === "spread" ? "cover" : "win"}.`,
  };
}
