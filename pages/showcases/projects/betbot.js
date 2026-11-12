// React
import React, { useEffect, useState } from "react";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../jotai/atoms";

// Ostrich
import { OstCard, OstrichButton, FormMultipleChoice } from "@ostrich_development/ostrich-components";

// Showcase Kit
import { Page, Hero, ActionButton, PillTabs, Section, Chip, Avatar, Notice, DOC, LIME, jumpTo } from "../../../components/Showcase/showcaseKit";
import { P, SubHeading, FactRow, Panel, Timeline } from "../../../components/Showcase/caseStudyKit";


/////////////
// Helpers //
/////////////

// "+110" → 47.6, "-125" → 55.6 : the win chance the sportsbook's price implies
function impliedChance(americanOdds) {
    const n = parseInt(americanOdds, 10)
    if (!n) return null
    return n < 0 ? (-n / (-n + 100)) * 100 : (100 / (n + 100)) * 100
}

// -2.5 → "-2.5", 2.5 → "+2.5"
function formatPoints(points) {
    return points > 0 ? `+${points}` : `${points}`
}

// Groups by the visitor's own calendar day (tip-offs come in UTC, so a 7:30 PM game is "tomorrow" in UTC)
function localDayKey(tipoff) {
    const d = new Date(tipoff)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

function dayLabel(tipoff) {
    return new Date(tipoff).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })
}

function tipTime(tipoff) {
    return new Date(tipoff).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
}

// A real American price is a whole number of at least 100 either way (-110, +250). Anything else, like "-Infinity", isn't shown.
function validOdds(odds) {
    const n = Number(odds)
    return Number.isFinite(n) && Math.abs(n) >= 100
}

// Every line the bot shows for one team in one game
function teamLines(game, team) {
    const spread = game?.bet?.spread?.[team]
    const moneyline = game?.bet?.moneyline?.[team]
    return {
        spread: spread && Number.isFinite(spread.diff) && validOdds(spread.odds) ? { points: spread.diff, odds: spread.odds } : null,
        moneyline: validOdds(moneyline) ? moneyline : null,
    }
}


// "Boston Celtics" → "Celtics", "Portland Trail Blazers" → "Trail Blazers"
function shortName(team) {
    return team.endsWith("Trail Blazers") ? "Trail Blazers" : team.split(" ").pop()
}

function gameId(game) {
    return `${game.tipoff}|${game.away}|${game.home}`
}

// Which bet types both teams have lines for, so every row lines up
function gameBetTypes(game) {
    return ["spread", "moneyline"].filter((type) => teamLines(game, game.away)[type] && teamLines(game, game.home)[type])
}

// Everything you could bet on in one game, as FormMultipleChoice options.
// Ordered row by row: away team's lines, then home team's.
function gameOptions(game) {
    const types = gameBetTypes(game)
    const options = []
    for (const team of [game.away, game.home]) {
        for (const type of types) {
            const line = teamLines(game, team)[type]
            const odds = type === "spread" ? line.odds : line
            const chance = impliedChance(odds)
            // Spread buttons:  Celtics -110 / -2.5 / 52% Implied
            // Moneyline buttons: Celtics -125 / 56% Implied
            const lines = [`${shortName(team)} ${odds}`]
            if (type === "spread") lines.push(formatPoints(line.points))
            if (chance) lines.push(`${chance.toFixed(0)}% Implied`)
            options.push({
                value: `${team}|${type}`,
                tag: lines.join("\n"),
                team, type, odds,
                points: type === "spread" ? line.points : null,
                label: type === "spread" ? `Spread ${formatPoints(line.points)}` : "Moneyline",
            })
        }
    }
    return options
}

export default function BetBotProjectPage() {

    ///////////
    // State //
    ///////////

        const [directory, setDirectory] = useAtom(directoryDataState)
        const [activeTab, setActiveTab] = useAtom(tabBarState)

        // "loading" | "ready" | "credits" | "error"
        const [status, setStatus] = useState("loading")

        // All games with FanDuel lines
        const [games, setGames] = useState([])

        // Game days, in order: [{ key, label }]
        const [days, setDays] = useState([])

        // Label of the selected game day
        const [selectedDay, setSelectedDay] = useState(null)

        // Picks on the bet slip
        const [slip, setSlip] = useState([])

        // AI analysis of the slip: { status: "idle" | "loading" | "done" | "error", results, summary, message, slipKey }
        const [analysis, setAnalysis] = useState({ status: "idle" })

    ////////////////
    // UseEffects //
    ////////////////

        useEffect(() => {
            setDirectory("Portfolio")
            setActiveTab("Ongoing Projects")
            loadOdds()
        }, [])

    ///////////////
    // Functions //
    ///////////////

        // Gets the saved FanDuel odds (refreshed about twice a day; see pages/api/betBot/scrapeFanDuel.js)
        function loadOdds(){
            fetch("/api/betBot/scrapeFanDuel")
                .then((res) => res.json())
                .then((json) => {
                    if (json.ERROR) {
                        setStatus(json.ERROR === "OUT OF CREDITS" ? "credits" : "error")
                        return
                    }
                    const sorted = [...json].sort((a, b) => new Date(a.tipoff) - new Date(b.tipoff))
                    const foundDays = []
                    sorted.forEach((game) => {
                        const key = localDayKey(game.tipoff)
                        if (!foundDays.find((d) => d.key === key)) foundDays.push({ key, label: dayLabel(game.tipoff) })
                    })
                    setGames(sorted)
                    setDays(foundDays)
                    setSelectedDay(foundDays[0] ? foundDays[0].label : null)
                    setStatus("ready")
                })
                .catch((err) => {
                    console.error("Odds request failed:", err)
                    setStatus("error")
                })
        }

        // One pick per game: choosing a line replaces any other line from the same game
        function setGamePick(game, value){
            const id = gameId(game)
            const option = gameOptions(game).find((o) => o.value === value)
            setSlip((prev) => {
                const others = prev.filter((p) => p.id !== id)
                if (!option) return others
                const opponent = option.team === game.away ? game.home : game.away
                return [...others, {
                    id, value, team: option.team, opponent, type: option.type, label: option.label,
                    odds: option.odds, points: option.points, homeTeam: game.home, tipoff: game.tipoff,
                }]
            })
        }

        function removePick(id){
            setSlip((prev) => prev.filter((p) => p.id !== id))
        }

        // A fingerprint of the slip, to notice when it changes after an analysis
        const slipKey = (picks) => picks.map((p) => p.id + p.value).sort().join(";")

        // Sends the slip to /api/betBot/analyze (matchup data + Gemini) and shows what comes back
        async function analyzeSlip(){
            if (!slip.length || analysis.status === "loading") return
            setAnalysis({ status: "loading" })
            try {
                const res = await fetch("/api/betBot/analyze", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ picks: slip }),
                    signal: AbortSignal.timeout(90000),
                })
                const json = await res.json().catch(() => ({}))
                if (!res.ok) throw new Error(json.message || "Something went wrong. Please try again.")
                setAnalysis({ status: "done", results: json.results, summary: json.summary, dataAsOf: json.dataAsOf, slipKey: slipKey(slip) })
                setTimeout(() => jumpTo("analysis"), 50)
            }
            catch (err) {
                setAnalysis({ status: "error", message: err.name === "TimeoutError" ? "The AI took too long. Please try again." : err.message })
            }
        }

    ////////////////
    // Renderings //
    ////////////////

    // Odds //
        // One game: its lines as a single-answer FormMultipleChoice, so only one bet per game can be picked
        function renderGameCard(game){
            const types = gameBetTypes(game)
            const options = gameOptions(game)
            const picked = slip.find((p) => p.id === gameId(game))
            return (
                <OstCard
                    key={gameId(game)}
                    noShadow
                    style={{ backgroundColor: "white", border: `1px solid ${DOC.line}`, borderRadius: 18, padding: "16px 18px 12px", boxShadow: "0 4px 14px rgba(17, 1, 59, 0.08)" }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: DOC.accentDeep, letterSpacing: 1, textTransform: "uppercase" }}>
                            Tip-off {tipTime(game.tipoff)}
                        </div>
                        <Chip>FanDuel</Chip>
                    </div>
                    <div style={{ fontSize: 19, fontWeight: 700, color: DOC.ink, marginTop: 6 }}>
                        {game.away} <span style={{ color: DOC.muted, fontWeight: 400 }}>@</span> {game.home}
                    </div>

                    {options.length === 0 ? (
                        <div style={{ fontSize: 15, color: DOC.muted, marginTop: 10 }}>No lines posted for this game yet.</div>
                    ) : (
                        <div>
                            <div style={{ display: "grid", gridTemplateColumns: `repeat(${types.length}, 1fr)`, gap: 10, marginTop: 12, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: DOC.muted, fontWeight: 700, textAlign: "center" }}>
                                {types.map((t) => <div key={t}>{t === "spread" ? "Spread" : "Moneyline"}</div>)}
                            </div>
                            <FormMultipleChoice
                                fieldObj={{ id: gameId(game), type: "MC", template: "tabs", options, required: false }}
                                options={options}
                                singleOption
                                allowDeselect
                                value={picked ? picked.value : null}
                                onChange={(field) => setGamePick(game, field.value[0])}
                                inForm={false}
                                itemsPerRow={types.length}
                                showErrors={false}
                                aria-label={`Pick one bet for ${game.away} at ${game.home}`}
                                style={{ backgroundColor: "transparent", boxShadow: "none", border: "none", padding: 0, margin: "8px 0 0", width: "100%" }}
                                contentStyle={{ padding: 0, width: "100%" }}
                                optionsStyle={{ padding: 0 }}
                                optionRowStyle={{ display: "grid", gridTemplateColumns: `repeat(${types.length}, 1fr)`, gap: 14, width: "100%", marginBottom: 12 }}
                                tabStyle={{
                                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                                    backgroundColor: "white", border: `1px solid ${DOC.line}`, borderRadius: 12, padding: "12px 14px", minHeight: 50,
                                }}
                                hoverTabStyle={{ backgroundColor: "#e3ecf8" }}
                                activeTabStyle={{ backgroundColor: DOC.ink, border: `1px solid ${DOC.ink}` }}
                                tabLabelStyle={{ fontFamily: DOC.font, fontSize: 16, fontWeight: 700, color: DOC.ink, textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.45, margin: 0 }}
                                activeTabLabelStyle={{ color: "white" }}
                                hoverTabLabelStyle={{ color: DOC.ink }}
                            />
                        </div>
                    )}
                </OstCard>
            )
        }

        function renderGames(){
            if (status === "loading") {
                return <Panel><div style={{ color: DOC.muted, fontSize: 17 }}>Loading tonight's lines…</div></Panel>
            }
            if (status === "credits") {
                return (
                    <Notice>
                        The odds feed has used up its free credits for the month, so lines will be back when they refill on the 1st. Sorry about that!
                    </Notice>
                )
            }
            if (status === "error") {
                return <Notice>Couldn't load the odds right now. Please try again in a little while.</Notice>
            }
            if (games.length === 0) {
                return <Notice>No NBA games have FanDuel lines posted right now. Check back closer to game day.</Notice>
            }
            const day = days.find((d) => d.label === selectedDay)
            const todays = games.filter((g) => day && localDayKey(g.tipoff) === day.key)
            return (
                <div>
                    <PillTabs tabs={days.map((d) => d.label)} value={selectedDay} onChange={setSelectedDay} ariaLabel="Choose a game day" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: 18, marginTop: 20 }}>
                        {todays.map(renderGameCard)}
                    </div>
                </div>
            )
        }

    // Bet Slip //
        function renderSlip(){
            return (
                <Panel style={{ position: "sticky", top: 90 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <div style={{ fontSize: 20, fontWeight: 700, color: DOC.ink }}>Your bet slip</div>
                        <div style={{ fontSize: 14, color: DOC.muted }}>{slip.length} {slip.length === 1 ? "pick" : "picks"}</div>
                    </div>

                    {slip.length === 0 ? (
                        <div style={{ fontSize: 15.5, lineHeight: 1.55, color: DOC.muted, marginTop: 12 }}>
                            Click any spread or moneyline to add it here. You can pick one bet per game.
                        </div>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                            {slip.map((p) => {
                                const chance = impliedChance(p.odds)
                                return (
                                    <OstCard key={p.id} noShadow style={{ backgroundColor: DOC.wash, border: `1px solid ${DOC.line}`, borderRadius: 14, padding: "10px 12px", display: "flex", alignItems: "flex-start", gap: 10 }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontSize: 15.5, fontWeight: 700, color: DOC.ink }}>{p.team}</div>
                                            <div style={{ fontSize: 14, color: DOC.text, marginTop: 2 }}>{p.type === "spread" ? `${p.label} at ${p.odds}` : `${p.label} ${p.odds}`}</div>
                                            <div style={{ fontSize: 12.5, color: DOC.muted, marginTop: 2 }}>
                                                vs {p.opponent} · {dayLabel(p.tipoff)}{chance ? ` · ${chance.toFixed(0)}% implied` : ""}
                                            </div>
                                        </div>
                                        <OstrichButton
                                            label="✕"
                                            onClick={() => removePick(p.id)}
                                            aria-label={`Remove ${p.team} ${p.label}`}
                                            style={{ backgroundColor: "transparent", border: `1px solid ${DOC.line}`, borderRadius: 999, padding: "2px 9px", minWidth: 0, height: "auto", boxShadow: "none" }}
                                            hoverStyle={{ backgroundColor: "white" }}
                                            labelStyle={{ fontFamily: DOC.font, fontSize: 13, color: DOC.muted }}
                                        />
                                    </OstCard>
                                )
                            })}
                        </div>
                    )}

                    <div
                        style={{ marginTop: 18, opacity: slip.length && analysis.status !== "loading" ? 1 : 0.55, pointerEvents: slip.length && analysis.status !== "loading" ? "auto" : "none" }}
                        aria-disabled={!slip.length || analysis.status === "loading"}
                    >
                        <ActionButton
                            label={analysis.status === "loading" ? "Analyzing…" : "Analyze with AI"}
                            variant="dark"
                            onClick={analyzeSlip}
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.5, color: DOC.muted, marginTop: 10 }}>
                        {slip.length
                            ? "The AI weighs each team's form, rest and defense, and how every key player historically does against this opponent."
                            : "Add picks, then let the AI estimate each one's real chance and compare it with FanDuel's."}
                    </div>
                    {slip.length > 0 ? (
                        <div style={{ marginTop: 12 }}>
                            <ActionButton label="Clear slip" variant="light" onClick={() => setSlip([])} style={{ padding: "7px 14px" }} labelStyle={{ fontSize: 14 }} />
                        </div>
                    ) : null}
                </Panel>
            )
        }

    // How it works //
    // AI analysis //
        const VERDICT_LOOK = {
            "Value": { bg: "#dcfce9", fg: "#11733f" },
            "Fair price": { bg: "#ececf2", fg: "#4b4f5c" },
            "Avoid": { bg: "#fdecea", fg: "#8a1c12" },
            "No estimate": { bg: "#ececf2", fg: "#4b4f5c" },
        }

        function renderResultCard(r){
            const look = VERDICT_LOOK[r.verdict] || VERDICT_LOOK["No estimate"]
            const number = (label, value, color) => (
                <div style={{ flex: "1 1 110px" }}>
                    <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: DOC.muted, fontWeight: 700 }}>{label}</div>
                    <div style={{ fontSize: 26, fontWeight: 700, color: color || DOC.ink, marginTop: 2 }}>{value}</div>
                </div>
            )
            return (
                <OstCard key={r.id} noShadow style={{ backgroundColor: "white", border: `1px solid ${DOC.line}`, borderLeft: `6px solid ${look.fg}`, borderRadius: 14, padding: "16px 20px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                        <div>
                            <div style={{ fontSize: 19, fontWeight: 700, color: DOC.ink }}>{r.team} · {r.type === "spread" ? `${r.label} at ${r.odds}` : `Moneyline ${r.odds}`}</div>
                            <div style={{ fontSize: 14, color: DOC.muted, marginTop: 2 }}>vs {r.opponent}</div>
                        </div>
                        <div style={{ display: "flex", gap: 6 }}>
                            <Chip color={look.fg} background={look.bg} border={null} style={{ fontWeight: 700, fontSize: 13, padding: "3px 12px" }}>{r.verdict}</Chip>
                            {r.confidence ? <Chip>{r.confidence} confidence</Chip> : null}
                        </div>
                    </div>
                    {r.noData ? (
                        <P style={{ marginTop: 12 }}>No history found for this matchup, so the AI had little to go on.</P>
                    ) : null}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 14 }}>
                        {number("AI estimate", r.estimate != null ? `${r.estimate.toFixed(0)}%` : "—")}
                        {number("FanDuel implied", r.implied != null ? `${r.implied.toFixed(0)}%` : "—")}
                        {number("Edge", r.edge != null ? `${r.edge > 0 ? "+" : ""}${r.edge.toFixed(1)}` : "—", look.fg)}
                    </div>
                    {r.reasons.length ? (
                        <ul style={{ margin: "14px 0 0", paddingLeft: 20 }}>
                            {r.reasons.map((reason, i) => <li key={i} style={{ fontSize: 15.5, lineHeight: 1.55, color: DOC.text, marginBottom: 4 }}>{reason}</li>)}
                        </ul>
                    ) : null}
                    {r.key_matchup ? (
                        <div style={{ fontSize: 15, lineHeight: 1.5, color: DOC.ink, marginTop: 10, padding: "8px 12px", backgroundColor: DOC.wash, borderRadius: 10 }}>
                            <b>Key matchup:</b> {r.key_matchup}
                        </div>
                    ) : null}
                </OstCard>
            )
        }

        function renderAnalysis(){
            if (analysis.status === "idle") return null
            return (
                <div id="analysis" style={{ marginTop: 28, scrollMarginTop: 90 }}>
                    <Panel>
                        <div style={{ fontSize: 13, letterSpacing: 2.5, textTransform: "uppercase", color: DOC.accentDeep, fontWeight: 700 }}>AI analysis</div>
                        {analysis.status === "loading" ? (
                            <P style={{ marginTop: 10, color: DOC.muted }}>Pulling up both teams' numbers and every key player's matchup history…</P>
                        ) : analysis.status === "error" ? (
                            <P style={{ marginTop: 10, color: "#8a1c12" }}>{analysis.message}</P>
                        ) : (
                            <div>
                                {analysis.slipKey !== slipKey(slip) ? (
                                    <P style={{ marginTop: 10, color: "#9a6200" }}>Your slip has changed since this analysis. Click Analyze with AI again to update it.</P>
                                ) : null}
                                {analysis.summary ? <P style={{ marginTop: 10, fontSize: 17 }}>{analysis.summary}</P> : null}
                                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14 }}>
                                    {analysis.results.map(renderResultCard)}
                                </div>
                                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: DOC.muted, marginTop: 14 }}>
                                    Edge = the AI's estimate minus FanDuel's implied chance. "Value" means the AI thinks the pick is at least 3 points
                                    likelier than the price says; "Avoid" means at least 3 points less likely. The data has no injury or lineup news
                                    (NBA stats through {analysis.dataAsOf}), so check who's playing. This is a data project, not betting advice.
                                </div>
                            </div>
                        )}
                    </Panel>
                </div>
            )
        }

        function renderHowItWorks(){
            return (
                <div>
                    <SubHeading style={{ marginTop: 0 }}>Reading the lines</SubHeading>
                    <P>
                        <b>Moneyline</b> is a bet on who wins. A minus number is the favorite: −125 means you risk $125 to win $100. A plus
                        number is the underdog: +110 means a $100 bet wins $110.
                    </P>
                    <P>
                        <b>Spread</b> evens the game out with points. Celtics −2.5 only wins if Boston wins by 3 or more; Knicks +2.5 wins if
                        New York wins outright or loses by 2 or fewer. Spreads usually cost about −110 on either side.
                    </P>
                    <P>
                        <b>Implied %</b> turns a price into the win chance it assumes. −125 implies about 56%; +110 implies about 48%. The two
                        sides add up to a little over 100%, and that extra bit is the sportsbook's cut. A bet only has value if its real chance is
                        higher than its implied chance, which is exactly what the AI analysis will try to judge.
                    </P>

                    <SubHeading>What's live and what's next</SubHeading>
                    <Timeline items={[
                        {
                            when: "Odds",
                            title: "FanDuel odds, refreshed twice a day",
                            body: <P style={{ margin: "0 0 12px" }}>
                                Lines come from The Odds API. Its free plan allows 500 credits a month, so instead of asking on every page view,
                                the site saves each answer for 12 hours and shows everyone that copy. That uses about 120 credits a month.
                            </P>,
                        },
                        {
                            when: "Data",
                            title: "15 seasons of NBA history",
                            body: <P style={{ margin: "0 0 12px" }}>
                                A separate pipeline downloads every game and box score since 2011 from NBA.com and labels each game with what the
                                opponent was like going in: overall, inside and 3-point defense, rebounding, forcing turnovers, pace, age and size.
                                From that, every player gets career trends against each kind of opponent (recent seasons weighted most), and the
                                best players get a type: Elite (great against everyone) or Dominant (overwhelms weak defenses, contained by strong ones).
                            </P>,
                        },
                        {
                            when: "Analysis",
                            title: "AI estimates each pick",
                            body: <P style={{ margin: "0 0 12px" }}>
                                For each pick, the server builds an exact matchup summary (form, rest, defensive ranks, and how each key player is
                                expected to do against this specific opponent) and asks Google Gemini for a calibrated win chance. The verdict is
                                plain arithmetic: the AI's chance minus FanDuel's implied chance.
                            </P>,
                        },
                        {
                            when: "Next",
                            title: "Injuries and a decision model",
                            body: <P style={{ margin: "0 0 12px" }}>
                                Injury reports are the biggest missing piece. After that, Jev (a decision-making model that returns calibrated
                                probabilities) is planned to replace Gemini for the estimate.
                            </P>,
                        },
                    ]} />

                    <SubHeading>Version 1</SubHeading>
                    <P>
                        The first BetBot pulled each team's season stats and head-to-head numbers from the NBA API and sent them, with a
                        knowledge base of playoff schedules and team analysis, to a model on Amazon Bedrock. It worked, but running it cost close
                        to $200–300 a month, so it was taken down and is being rebuilt to run for free.
                    </P>
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

        return (
            <Page>
                <Hero
                    eyebrow="AI Experiment · Sports Data"
                    title="The NBA BetBot"
                    intro="Today's NBA lines from FanDuel, with the win chance each price implies. Build a bet slip, and an AI armed with 15 seasons of matchup data estimates each pick's real chance and flags the ones FanDuel may have mispriced."
                    actions={[
                        <ActionButton key="odds" label="See the lines" onClick={() => jumpTo("lines")} />,
                        <ActionButton key="how" label="How it works" variant="ghost" onClick={() => jumpTo("how-it-works")} />,
                    ]}
                    aside={<Avatar src="/assets/icons/big/BetBot.jpeg" alt="" size={190} />}
                />

                <FactRow facts={[
                    { label: "Odds", value: "FanDuel, via The Odds API" },
                    { label: "Refreshed", value: "Twice a day" },
                    { label: "AI analysis", value: "Gemini + 15 seasons of data" },
                    { label: "Running cost", value: "$0 / month" },
                ]} />

                <Section id="lines" eyebrow="Odds" title="Upcoming games" subtitle="Times are shown in your time zone. Pick one spread or moneyline per game to add it to your slip.">
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 24 }}>
                        <div style={{ flex: "1 1 560px", minWidth: 0 }}>{renderGames()}</div>
                        <div style={{ flex: "0 1 320px", minWidth: 280 }}>{renderSlip()}</div>
                    </div>
                    {renderAnalysis()}
                </Section>

                <Section id="how-it-works" eyebrow="Under the hood" title="How it works">
                    {renderHowItWorks()}
                </Section>

                <Notice>
                    I'm pretty sure I have to say something about responsible gambling here... so: this is a data project, not betting advice.
                    Sportsbooks build their lines from the same public stats, so gamble responsibly (or not at all). You get it.
                </Notice>
            </Page>
        )
}

