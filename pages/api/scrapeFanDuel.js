import axios from 'axios';

export default async function handler(req, res) {

    function handlePriceToOdds(price){
        let divvie = (1.0 / price)
        return divvie * 100
    }

    function findBookmakerByTitle(bookmakers, title) {
        let rBook = bookmakers.find(bookmaker => bookmaker.title === title);
        let markets = rBook.markets
        let h2hOdds = {}
        let spreadOdds = {}
        revisedOdds = markets.map(market => {
            if (market.key === "h2h"){

            }
        })
      }

    // The Odds API key (replace with your actual API key)
    const API_KEY = process.env.ODDS_API_KEY;

    try {
        // Make request to the Odds API
        const response = await axios.get('https://api.the-odds-api.com/v4/sports/basketball_nba/odds', {
            params: {
            apiKey: API_KEY,      // Replace with your API key
            regions: 'us,us2',
            markets: 'spreads,h2h'
            },
        });

        // Filter NBA-related bets, just in case you want to narrow it down more
        let nbaBets = response.data.filter(bet => bet.sport_key === 'basketball_nba');
        console.log(nbaBets)
        nbaBets = nbaBets.map(bet => {
            return {
                away: bet.away_team,
                home: bet.home_team,
                odds: {
                    bet: findBookmakerByTitle(bet.bookmakers, "fanduel")
                }
            }
        })

        // Send the response to the client
        res.status(200).json(nbaBets);
    } catch (error) {
        console.error('Error fetching NBA odds:', error);
        res.status(500).json({ error: 'Error fetching NBA odds' });
    }
}
