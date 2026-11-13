// NBA Bet Bot: today's FanDuel odds from The Odds API.
//
// The Odds API's free plan gives 500 credits a month, and each call costs (markets × regions) credits.
// This route asks for 2 markets in 1 region (2 credits) and reuses the answer for CACHE_HOURS:
//   - Vercel's network keeps the response and serves that copy to every visitor (the Cache-Control header below)
//   - a copy is also kept in this server's memory, which covers local development
// So the API is called at most a couple of times a day instead of once per page view.
// Each game also carries both teams' injuries from ESPN's free injury report (see server/helpers/injuries.mjs).

import axios from 'axios';
import { getInjuries, injuriesForTeam } from '../../../server/helpers/injuries.mjs';

const CACHE_HOURS = 12;
const CACHE_MS = CACHE_HOURS * 60 * 60 * 1000;

// Last successful answer, kept between requests while this server instance is alive
let cache = { bets: null, fetchedAt: 0 };

// The API sends American odds (oddsFormat: "american"). A real American price is a whole number
// of at least 100 either way (-110, +250). Anything else, like a pulled line, is dropped.
function formatAmerican(price) {
    if (!Number.isFinite(price) || Math.abs(price) < 100) return null;
    return price > 0 ? `+${price}` : `${price}`;
}

function findBookmakerByTitle(bookmakers, title) {
    const rBook = bookmakers.find(bookmaker => bookmaker.key === title);
    if (!rBook){
        return
    }
    const revisedOdds = {}
    rBook.markets.forEach(market => {
        if (market.key === "h2h"){
            const moneyline = {}
            market.outcomes.forEach(o => {
                const odds = formatAmerican(o.price)
                if (odds) moneyline[o.name] = odds
            })
            if (Object.keys(moneyline).length === 2) revisedOdds.moneyline = moneyline
        }
        else if (market.key === "spreads"){
            const spread = {}
            market.outcomes.forEach(o => {
                const odds = formatAmerican(o.price)
                if (odds && Number.isFinite(o.point)) spread[o.name] = { odds, diff: o.point }
            })
            if (Object.keys(spread).length === 2) revisedOdds.spread = spread
        }
    })
    return (revisedOdds.moneyline || revisedOdds.spread) ? revisedOdds : undefined
}

function sendBets(res, bets, source) {
    // Lets Vercel's network serve this same answer to everyone for CACHE_HOURS
    res.setHeader('Cache-Control', `public, s-maxage=${CACHE_HOURS * 3600}, stale-while-revalidate=3600`);
    res.setHeader('X-Odds-Source', source);
    res.status(200).json(bets);
}

export default async function handler(req, res) {

    // Still fresh? Don't spend any credits.
    if (cache.bets && Date.now() - cache.fetchedAt < CACHE_MS) {
        return sendBets(res, cache.bets, "memory");
    }

    try {
        const response = await axios.get('https://api.the-odds-api.com/v4/sports/basketball_nba/odds', {
            params: {
                apiKey: process.env.ODDS_API_KEY,
                regions: 'us',              // FanDuel is in the "us" region; one region keeps each call at 2 credits
                markets: 'spreads,h2h',
                oddsFormat: 'american',     // whole-number odds like -110, so nothing needs converting
            },
            timeout: 15000,
        });
        console.log(`[betBot] fetched odds: ${response.headers['x-requests-last']} credits used, ${response.headers['x-requests-remaining']} left this month`);

        const bets = response.data
            .filter(bet => bet.sport_key === 'basketball_nba')
            .map(bet => ({
                away: bet.away_team,
                home: bet.home_team,
                bet: findBookmakerByTitle(bet.bookmakers, "fanduel"),
                tipoff: bet.commence_time
            }))
            .filter(bet => bet.bet);   // skip games FanDuel hasn't posted lines for yet

        // Who's out or day-to-day on each side (short form for the game cards)
        const report = await getInjuries();
        const short = (list) => list.map(i => ({ name: i.name, status: i.status, injury: i.injury, returnDate: i.returnDate }));
        for (const bet of bets) {
            bet.injuries = report
                ? { [bet.away]: short(injuriesForTeam(report, bet.away)), [bet.home]: short(injuriesForTeam(report, bet.home)), updated: report.updated }
                : null;
        }

        cache = { bets, fetchedAt: Date.now() };
        return sendBets(res, bets, "odds-api");

    } catch (err) {
        const statusCode = err?.response?.status;
        const apiMessage = err?.response?.data?.error_code || err.message;
        console.warn(`[betBot] error fetching odds: ${statusCode || ""} ${apiMessage}`);

        // Older odds are better than none: serve the last good copy if there is one
        if (cache.bets) {
            return sendBets(res, cache.bets, "memory-stale");
        }
        if (apiMessage === "OUT_OF_USAGE_CREDITS"){
            return res.status(200).json({ERROR: "OUT OF CREDITS"});
        }
        return res.status(502).json({ERROR: "ODDS UNAVAILABLE"});
    }
}
