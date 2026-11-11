// NBA Bet Bot: today's FanDuel odds from The Odds API.
//
// The Odds API's free plan gives 500 credits a month, and each call costs (markets × regions) credits.
// This route asks for 2 markets in 1 region (2 credits) and reuses the answer for CACHE_HOURS:
//   - Vercel's network keeps the response and serves that copy to every visitor (the Cache-Control header below)
//   - a copy is also kept in this server's memory, which covers local development
// So the API is called at most a couple of times a day instead of once per page view.

import axios from 'axios';

const CACHE_HOURS = 12;
const CACHE_MS = CACHE_HOURS * 60 * 60 * 1000;

// Last successful answer, kept between requests while this server instance is alive
let cache = { bets: null, fetchedAt: 0 };

function convertToAmericanOdds(price) {
    if (price >= 2) {
        return `+${Math.round((price - 1) * 100)}`;
    } else {
        return `${Math.round(-100 / (price - 1))}`;
    }
}

function findBookmakerByTitle(bookmakers, title) {
    const rBook = bookmakers.find(bookmaker => bookmaker.key === title);
    if (!rBook){
        return
    }
    const revisedOdds = {}
    rBook.markets.forEach(market => {
        if (market.key === "h2h"){
            revisedOdds.moneyline = {
                [market.outcomes[0].name]: convertToAmericanOdds(market.outcomes[0].price),
                [market.outcomes[1].name]: convertToAmericanOdds(market.outcomes[1].price),
            }
        }
        else if (market.key === "spreads"){
            revisedOdds.spread = {
                [market.outcomes[0].name]: {odds: convertToAmericanOdds(market.outcomes[0].price), diff: market.outcomes[0].point},
                [market.outcomes[1].name]: {odds: convertToAmericanOdds(market.outcomes[1].price), diff: market.outcomes[1].point}
            }
        }
    })
    return revisedOdds
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
