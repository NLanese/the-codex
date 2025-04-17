import axios from 'axios';

export default async function handler(req, res) {

    function handlePriceToOdds(price){
        let divvie = (1.0 / price)
        return divvie * 100
    }

    function convertToAmericanOdds(price) {
        if (price >= 2) {
          return `+${Math.round((price - 1) * 100)}`;
        } else {
          return `${Math.round(-100 / (price - 1))}`;
        }
      }

    function findBookmakerByTitle(bookmakers, title) {
        // console.log("/////////////\n// Bookmakers //\n///////////////")
        // console.log(bookmakers)
        let rBook = bookmakers.find(bookmaker => bookmaker.key === title);
        // console.log("\n/////////////\n// Fanduel //\n///////////////")
        // console.log(rBook)
        if (!rBook){
            return
        }
        let markets = rBook.markets
        let revisedOdds = {}
        markets.forEach(market => {
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

    // The Odds API key (replace with your actual API key)
    const API_KEY = process.env.ODDS_API_KEY;

    // Make request to the Odds API
    try {
        const response = await axios.get('https://api.the-odds-api.com/v4/sports/basketball_nba/odds', {
            params: {
                apiKey: API_KEY,
                regions: 'us,us2',
                markets: 'spreads,h2h'
            },
        });
        console.log(response.data)
        const nbaBets = response.data
            .filter(bet => bet.sport_key === 'basketball_nba')
            .map(bet => ({
                away: bet.away_team,
                home: bet.home_team,
                bet: findBookmakerByTitle(bet.bookmakers, "fanduel"),
                tipoff: bet.commence_time
            }));

        res.status(200).json(nbaBets);

    } catch (err) {
        const statusCode = err?.response?.status;
        const apiMessage = err?.response?.data?.error_code || 'No message';

        console.log('\n////////////////////////');
        console.log('// Error fetching odds //');
        console.log('////////////////////////\n');
        console.log('Status Code:', statusCode);
        console.log('API Message:', apiMessage);

        if (apiMessage === "OUT_OF_USAGE_CREDITS"){
            res.status(200).json({ERROR: "OUT OF CREDITS"})
        }
    }
}
