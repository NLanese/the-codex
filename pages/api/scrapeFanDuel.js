import axios from 'axios'

// FanDuel's internal JSON URL for NBA bets
const FAN_DUEL_JSON_URL = 'https://sportsbook.fanduel.com/cache/psmg/PROD/en/US/sportsbook/20674.3.json'

export default async function handler(req, res) {
  try {
    const response = await axios.get(FAN_DUEL_JSON_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    })

    const data = response.data

    // Grab all NBA events (games)
    const events = data?.events || []

    const allPlayerProps = []

    for (const event of events) {
      const gameName = event?.name || ''
      const markets = event?.displayGroups?.flatMap(group => group.markets) || []

      for (const market of markets) {
        // Look for player stat lines (e.g., "Player Points", "Player Rebounds")
        if (!market.marketType.includes('Player')) continue

        for (const outcome of market.outcomes || []) {
          allPlayerProps.push({
            game: gameName,
            statType: market.marketType,
            player: outcome.label,
            odds: outcome.price,
          })
        }
      }
    }

    res.status(200).json({ bets: allPlayerProps })

  } catch (err) {
    console.error('Error scraping FanDuel:', err.message)
    res.status(500).json({ error: 'Failed to fetch FanDuel NBA props' })
  }
}
