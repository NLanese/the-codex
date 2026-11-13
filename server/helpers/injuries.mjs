// NBA injury report, from ESPN's free public feed (no key, no credits).
// Used by the BetBot's odds request (to show who's out on each game card) and its AI analysis.
//
// The report is fetched at most once every INJURY_REFRESH_HOURS per server instance and kept in memory.
// ESPN updates it through the day and it's free, so it's refreshed every few hours to catch late scratches.

const ESPN_INJURIES = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/injuries";
export const INJURY_REFRESH_HOURS = 3;

let cache = { report: null, fetchedAt: 0 };

// "Nikola Jokić" and "Nikola Jokic", "Jaren Jackson Jr." and "Jaren Jackson": NBA.com and ESPN spell names differently
export function normalizeName(name) {
  return String(name || "")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")       // drop accents
    .toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv)\b\.?/g, "")               // drop suffixes
    .replace(/[^a-z ]/g, "")
    .replace(/\s+/g, " ").trim();
}

// ESPN says "LA Clippers", The Odds API says "Los Angeles Clippers"
const TEAM_ALIASES = { "los angeles clippers": "la clippers" };
const normalizeTeam = (name) => {
  const n = String(name || "").toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  return TEAM_ALIASES[n] || n;
};

// ESPN's raw feed -> { updated, teams: { "boston celtics": [ { name, status, injury, returnDate, comment } ] } }
export function parseInjuries(json) {
  const teams = {};
  for (const team of json?.injuries || []) {
    teams[normalizeTeam(team.displayName)] = (team.injuries || []).map((i) => {
      const d = i.details || {};
      return {
        name: i.athlete?.displayName || "Unknown",
        status: i.status || d.fantasyStatus?.description || "Unknown",     // "Out", "Day-To-Day", ...
        injury: [d.side && d.side !== "Not Specified" ? d.side : null, d.type, d.detail].filter(Boolean).join(" ") || null,
        returnDate: d.returnDate || null,
        comment: i.shortComment || null,
        date: i.date || null,
      };
    });
  }
  return { updated: json?.timestamp || new Date().toISOString(), teams };
}

// The current report (from memory if fresh). If ESPN can't be reached, returns the last good report, or null.
export async function getInjuries() {
  if (cache.report && Date.now() - cache.fetchedAt < INJURY_REFRESH_HOURS * 3600 * 1000) return cache.report;
  try {
    const res = await fetch(ESPN_INJURIES, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`ESPN answered ${res.status}`);
    const report = parseInjuries(await res.json());
    cache = { report, fetchedAt: Date.now() };
    const count = Object.values(report.teams).reduce((n, list) => n + list.length, 0);
    console.log(`[injuries] fetched ESPN report: ${count} players listed`);
    return report;
  } catch (err) {
    console.warn("[injuries] couldn't fetch ESPN injury report:", err.message);
    return cache.report;
  }
}

// One team's injured players (by any spelling of the team name)
export function injuriesForTeam(report, teamName) {
  if (!report) return [];
  const n = normalizeTeam(teamName);
  return report.teams[n] || Object.entries(report.teams).find(([k]) => k.endsWith(n.split(" ").pop()))?.[1] || [];
}

// Finds one player's entry in a team's list
export function injuryFor(list, playerName) {
  const n = normalizeName(playerName);
  return list.find((i) => normalizeName(i.name) === n) || null;
}
