// React
import React, { useEffect, useState } from "react";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../jotai/atoms";

// Ostrich
import { OstCard, OstrichButton } from "@ostrich_development/ostrich-components";

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

// Every line the bot shows for one team in one game
function teamLines(game, team) {
    const spread = game?.bet?.spread?.[team]
    const moneyline = game?.bet?.moneyline?.[team]
    return {
        spread: spread && spread.diff !== undefined ? { points: spread.diff, odds: spread.odds } : null,
        moneyline: moneyline || null,
    }
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

        function pickId(game, team, type){
            return `${game.tipoff}|${game.away}|${game.home}|${team}|${type}`
        }

        // Clicking a line adds it to the slip; clicking it again takes it off
        function togglePick(game, team, type){
            const id = pickId(game, team, type)
            if (slip.find((p) => p.id === id)) {
                setSlip((prev) => prev.filter((p) => p.id !== id))
                return
            }
            const lines = teamLines(game, team)
            const opponent = team === game.away ? game.home : game.away
            const pick = type === "spread"
                ? { id, team, opponent, type, label: `Spread ${formatPoints(lines.spread.points)}`, odds: lines.spread.odds, tipoff: game.tipoff }
                : { id, team, opponent, type, label: "Moneyline", odds: lines.moneyline, tipoff: game.tipoff }
            setSlip((prev) => [...prev, pick])
        }

        function removePick(id){
            setSlip((prev) => prev.filter((p) => p.id !== id))
        }

    ////////////////
    // Renderings //
    ////////////////

    // Odds //
        // One clickable price (a spread or a moneyline), as an OstCard
        function renderLineCell(game, team, type){
            const lines = teamLines(game, team)
            const line = lines[type]
            if (!line) {
                return (
                    <OstCard noShadow style={{ ...cellBase, backgroundColor: DOC.wash, color: DOC.muted, cursor: "default" }}>
                        <div style={{ fontSize: 15 }}>—</div>
                    </OstCard>
                )
            }
            const odds = type === "spread" ? line.odds : line
            const chance = impliedChance(odds)
            const picked = !!slip.find((p) => p.id === pickId(game, team, type))
            return (
                <OstCard
                    noShadow
                    onClick={() => togglePick(game, team, type)}
                    aria-label={`${picked ? "Remove" : "Add"} ${team} ${type === "spread" ? `spread ${formatPoints(line.points)}` : "moneyline"} at ${odds}`}
                    aria-pressed={picked}
                    style={{
                        ...cellBase,
                        backgroundColor: picked ? DOC.ink : "white",
                        border: `1px solid ${picked ? DOC.ink : DOC.line}`,
                        color: picked ? "white" : DOC.ink,
                    }}
                    hoverStyle={{ backgroundColor: picked ? "#2a1a6e" : "#e3ecf8" }}
                    pressedStyle={{ transform: "scale(0.97)" }}
                >
                    <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>
                        {type === "spread" ? `${formatPoints(line.points)}  ` : ""}{odds}
                    </div>
                    {chance ? (
                        <div style={{ fontSize: 12.5, marginTop: 3, color: picked ? LIME : DOC.muted }}>{chance.toFixed(0)}% implied</div>
                    ) : null}
                </OstCard>
            )
        }

        function renderTeamRow(game, team, isHome){
            return (
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 104px 104px", gap: 10, alignItems: "center", marginTop: 10 }}>
                    <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 16.5, fontWeight: 700, color: DOC.ink, lineHeight: 1.25 }}>{team}</div>
                        <div style={{ fontSize: 12.5, color: DOC.muted, marginTop: 2 }}>{isHome ? "Home" : "Away"}</div>
                    </div>
                    {renderLineCell(game, team, "spread")}
                    {renderLineCell(game, team, "moneyline")}
                </div>
            )
        }

        // One game: tip-off time, then each team's spread and moneyline
        function renderGameCard(game){
            return (
                <OstCard
                    key={`${game.tipoff}-${game.away}-${game.home}`}
                    noShadow
                    style={{ backgroundColor: "white", border: `1px solid ${DOC.line}`, borderRadius: 18, padding: "16px 18px 18px", boxShadow: "0 4px 14px rgba(17, 1, 59, 0.08)" }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: DOC.accentDeep, letterSpacing: 1, textTransform: "uppercase" }}>
                            Tip-off {tipTime(game.tipoff)}
                        </div>
                        <Chip>FanDuel</Chip>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 104px 104px", gap: 10, marginTop: 12, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: DOC.muted, fontWeight: 700 }}>
                        <div>Team</div>
                        <div style={{ textAlign: "center" }}>Spread</div>
                        <div style={{ textAlign: "center" }}>Moneyline</div>
                    </div>
                    {renderTeamRow(game, game.away, false)}
                    {renderTeamRow(game, game.home, true)}
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
                            Click any spread or moneyline to add it here.
                        </div>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                            {slip.map((p) => {
                                const chance = impliedChance(p.odds)
                                return (
                                    <OstCard key={p.id} noShadow style={{ backgroundColor: DOC.wash, border: `1px solid ${DOC.line}`, borderRadius: 14, padding: "10px 12px", display: "flex", alignItems: "flex-start", gap: 10 }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontSize: 15.5, fontWeight: 700, color: DOC.ink }}>{p.team}</div>
                                            <div style={{ fontSize: 14, color: DOC.text, marginTop: 2 }}>{p.label} · {p.odds}</div>
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

                    <div style={{ marginTop: 18, opacity: 0.55, pointerEvents: "none" }} aria-disabled="true">
                        <ActionButton label="Analyze with AI" variant="dark" style={{ width: "100%" }} />
                    </div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.5, color: DOC.muted, marginTop: 10 }}>
                        AI analysis is being rebuilt and is coming soon. For now, the implied % shows the win chance FanDuel's price assumes.
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
                            when: "Live now",
                            title: "FanDuel odds, refreshed twice a day",
                            body: <P style={{ margin: "0 0 12px" }}>
                                Lines come from The Odds API. Its free plan allows 500 credits a month, so instead of asking on every page view,
                                the site saves each answer for 12 hours and shows everyone that copy. That uses about 120 credits a month.
                            </P>,
                        },
                        {
                            when: "Next",
                            title: "AI analysis of your slip",
                            body: <P style={{ margin: "0 0 12px" }}>
                                Your picks plus each team's recent numbers go to an AI, which estimates a real win chance and compares it with the
                                implied one. It starts on Google Gemini, with Jev (a decision-making model that returns calibrated probabilities)
                                planned once access opens up.
                            </P>,
                        },
                        {
                            when: "Planned",
                            title: "15 seasons of history",
                            body: <P style={{ margin: "0 0 12px" }}>
                                Scripts will crunch years of game data into the numbers that matter: recent form, rest days, home and away records,
                                and how often teams cover the spread. The AI gets a short, exact summary instead of a giant spreadsheet.
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
                    intro="Today's NBA lines from FanDuel, with the win chance each price implies. Build a bet slip from any spread or moneyline; AI analysis that judges whether a pick has real value is being rebuilt."
                    actions={[
                        <ActionButton key="odds" label="See the lines" onClick={() => jumpTo("lines")} />,
                        <ActionButton key="how" label="How it works" variant="ghost" onClick={() => jumpTo("how-it-works")} />,
                    ]}
                    aside={<Avatar src="/assets/icons/big/BetBot.jpeg" alt="" size={190} />}
                />

                <FactRow facts={[
                    { label: "Odds", value: "FanDuel, via The Odds API" },
                    { label: "Refreshed", value: "Twice a day" },
                    { label: "AI analysis", value: "Being rebuilt" },
                    { label: "Running cost", value: "$0 / month" },
                ]} />

                <Section id="lines" eyebrow="Odds" title="Upcoming games" subtitle="Times are shown in your time zone. Click a spread or moneyline to add it to your slip.">
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 24 }}>
                        <div style={{ flex: "1 1 560px", minWidth: 0 }}>{renderGames()}</div>
                        <div style={{ flex: "0 1 320px", minWidth: 280 }}>{renderSlip()}</div>
                    </div>
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

const cellBase = {
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    textAlign: "center", borderRadius: 12, padding: "8px 6px", minHeight: 52, boxSizing: "border-box", cursor: "pointer",
}
