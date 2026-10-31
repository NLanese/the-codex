import React, { useState } from "react";
import { OstrichTabBar } from "@ostrich_development/ostrich-components";
import nightlordStats from "../../constants/projects/nightreign/bosses/nightlords";
import day1_stats from "../../constants/projects/nightreign/bosses/day1";
import day2_stats from "../../constants/projects/nightreign/bosses/day2";
import minor_stats from "../../constants/projects/nightreign/bosses/minor";
import major_stats from "../../constants/projects/nightreign/bosses/major";

///////////////
// Constants //
///////////////

const img = (file) => `/assets/project_images/nightreign/${file}`

const depthColor = '#161754'
const nightShade = "#2b2161"
const graceGiven = "#f2e144"
const frenzyTouched = "#ff5100"
const greyOfNight = "#636478"
const gloomGlow = "#452d8a"
const silveredNight = "#7fc7bf"
const silverLining = "#d4eeff"
const slateMiasma = "#595d6b"
const traceNight = '#9b9fbf'
const scarletRot = '#754142'
const poisonGlow = "#506e51"

const NEGATIONS = ["Physical", "Strike", "Slash", "Pierce", "Magic", "Fire", "Lightning", "Holy"]
const RESISTANCES = ["Poison", "Rot", "Bleed", "Frostbite", "Madness", "Sleep"]

// Negation bar scale: data ranges roughly -40 to +80, zero sits a third of the way in
const NEG_MIN = -40
const NEG_MAX = 80
const RES_MAX = 600

// Each tab: its stat table, the bosses in display order, and any notes
const TABS = {
    "Nightlords": {
        table: nightlordStats,
        bosses: [
            ["Gladius", "gladius.png", frenzyTouched],
            ["Adel", "adel.png", gloomGlow],
            ["Maris", "maris.png", nightShade],
            ["Gnoster", "pest.png", silveredNight],
            ["Faurtis", "pest.png", silveredNight],
            ["Animus", "pest.png", silveredNight],
            ["Libra", "libra.png", graceGiven],
            ["Fulghor", "fulghor.png", greyOfNight],
            ["Caligo", "caligo.png", traceNight],
            ["Heolster", "heolster.png", "black"],
            ["Heolster2", "heolster.png", "black"],
            ["Balancers", "harmonia.png", silverLining],
            ["Dreglord", "greg.png", scarletRot],
        ],
        notes: [],
    },
    "Night 1": {
        table: day1_stats,
        bosses: [
            ["DemiQueen", "demiQueen.png", gloomGlow],
            ["DemiSwordmaster", "demiSwordmaster.png", silverLining],
            ["BellBearingHunter", "bellBearing.png", scarletRot],
            ["GapingDragon", "gapingDragon.png", poisonGlow],
            ["WormFace", "wormface.png", greyOfNight],
            ["ValiantGargoyle", "valiantGargoyle.png", scarletRot],
            ["DearFreja", "freja.png", poisonGlow],
            ["NightsCavalry", "cavalry.png", "black"],
            ["SmelterDemon", "smelter.png", frenzyTouched],
            ["Commander", "commander.png", scarletRot],
            ["Centipede", "centipede.png", poisonGlow],
            ["Tibia", "tibia.png", silverLining],
            ["Grafted", "grafted.png", graceGiven],
            ["Revenent", "revenent.png", poisonGlow],
            ["Ulcerated", "ulcerated.png", scarletRot],
            ["DeathKnight", "deathKnight.png", "black"],
            ["Demons", "demon.png", frenzyTouched],
            ["Bear", "bear.png", scarletRot],
            ["Curseblade", "curseblade.png", "black"],
            ["DivineWarrior", "divine.png", graceGiven],
        ],
        notes: [],
    },
    "Night 2": {
        table: day2_stats,
        bosses: [
            ["Margit", "omen.png", graceGiven],
            ["Sentinel", "sentinel.png", graceGiven],
            ["Dragon", "ancient.png", scarletRot],
            ["Crucible", "crucible.png", graceGiven],
            ["Hippo", "hippo.png", "black"],
            ["Commander", "outland2.png", greyOfNight],
            ["Wyrm", "wyrm.png", scarletRot],
            ["Nox", "dragonkin.png", gloomGlow],
            ["Draconic", "draconic.png", scarletRot],
            ["Fallingstar", "star.png", gloomGlow],
            ["Apostle", "skinny.png", "black"],
            ["Noble", "fatty.png", "black"],
            ["Bird", "deathBird.png", "black"],
            ["NamelessBird", "namelessBird.png", slateMiasma],
            ["Nameless", "nameless.png", graceGiven],
            ["Dancer", "dancer.png", gloomGlow],
            ["Knight", "artorias.png", "black"],
            ["Prince", "prince.png", scarletRot],
            ["Mohg", "mohg.png", "red"],
        ],
        notes: [],
    },
    "Major Field Bosses": {
        table: major_stats,
        bosses: [
            ["Flying", "flying.png", scarletRot],
            ["Ulcerated", "ulcerated.png", poisonGlow],
            ["BellBearingHunter", "bellBearing.png", scarletRot],
            ["Avatar", "avatar.png", graceGiven],
            ["Ancestor", "ancestor.png", silveredNight],
            ["Sentinel", "sentinel.png", graceGiven],
            ["Wyrm", "wyrm.png", scarletRot],
            ["Loretta", "loretta.png", silverLining],
            ["Bird", "deathBird.png", "black"],
            ["BBK", "bbk.png", "red"],
            ["Draconic", "draconic.png", "red"],
        ],
        notes: [
            "Most Major Field Bosses provide 30000 Runes and Strong Reward Pools",
            "Death Rite Bird, Royal Carian Knight, Black Blade Kindred and the Draconic Tree Sentinel drop 50% more runes",
            "Castle Rooftop Bosses have 20% more HP, do 20% more damage, and provide 60k Runes and Strong Reward Pools. The previous exceptions still apply",
            "Depth of the Night Cursed Variants deal 15% more damage, have 15% more health and drop 15% more Runes",
            "The Health, Runes, and Damage Done by these bosses are different if they are in a POI as opposed to the field",
        ],
    },
    "Minor Field Bosses": {
        table: minor_stats,
        bosses: [
            ["Scion", "scion.png", poisonGlow],
            ["Black", "black.png", "black"],
            ["Wolf", "wolf.png", scarletRot],
            ["Zamor", "zamor.png", silveredNight],
            ["Leonine", "leonine.png", graceGiven],
            ["Elder", "elder.png", slateMiasma],
            ["Hippo", "hippo.png", graceGiven],
            ["DemiQueen", "demiQueen.png", "black"],
            ["Miranda", "flower.png", poisonGlow],
            ["Revenent", "revenent.png", poisonGlow],
            ["NightsCavalry", "cavalry.png", "black"],
        ],
        notes: [
            "Minor Field Bosses provide 22500 Runes and Weak Reward Pools",
            "Castle Basement Bosses have 45% more HP, provide 37500 Runes and Strong Reward Pools",
            "Depth of the Night Cursed Variants deal 65% more damage, have 65% more health and drop 65% more Runes",
            "The Health, Runes, and Damage Done by these bosses are different if they are in a POI as opposed to the field",
        ],
    },
}

/////////////
// Helpers //
/////////////

function formatHP(hp){
    if (typeof hp === "number") return hp.toLocaleString("en-US")
    if (!hp || hp === "NA") return "Not recorded"
    return String(hp).replace(/^(\d+)/, (n) => Number(n).toLocaleString("en-US"))
}

function formatSigned(value){
    if (typeof value !== "number") return value ?? "—"
    if (value > 0) return `+${value}`
    if (value < 0) return `−${Math.abs(value)}`
    return "0"
}

// The lowest negation(s), only if the boss actually takes extra damage from them
function findWeaknesses(stats){
    const values = NEGATIONS.map(type => [type, stats?.[type]]).filter(([, v]) => typeof v === "number")
    if (values.length === 0) return []
    const lowest = Math.min(...values.map(([, v]) => v))
    if (lowest >= 0) return []
    return values.filter(([, v]) => v === lowest).map(([type]) => type)
}

export default function BossStats({ isMobile }){

    ///////////
    // State //
    ///////////

    const [screen, setScreen] = useState("Nightlords")
    const [search, setSearch] = useState("")

    const tab = TABS[screen]
    const query = search.trim().toLowerCase()
    const shown = tab.bosses.filter(([key]) => {
        if (!query) return true
        const name = tab.table[key]?.name || key
        return name.toLowerCase().includes(query) || key.toLowerCase().includes(query)
    })

    // Card grid: 3 per row on desktop, 2 on mobile
    const perRow = isMobile ? 2 : 3
    const gridGap = isMobile ? 12 : 22
    const cardWidth = `calc((100% - ${gridGap * (perRow - 1)}px) / ${perRow})`
    const loneWidth = `max(40%, ${cardWidth})`

    const fontSmall = isMobile ? 11 : 13
    const fontBody = isMobile ? 12 : 14

    /////////////
    // Renders //
    /////////////

    function renderSectionLabel(text){
        return (
            <div style={{display: 'flex', alignItems: 'center', gap: 8, margin: '12px 0 6px'}}>
                <span style={{color: traceNight, fontSize: fontSmall, whiteSpace: 'nowrap'}}>{text}</span>
                <span style={{flex: 1, height: 1, backgroundColor: gloomGlow}}/>
            </div>
        )
    }

    // Diverging bar: gold to the left of zero (takes extra damage), orange to the right (resists)
    function renderNegationRow(type, value){
        const v = typeof value === "number" ? Math.max(NEG_MIN, Math.min(NEG_MAX, value)) : 0
        const span = NEG_MAX - NEG_MIN
        const zero = (-NEG_MIN / span) * 100
        const fillStart = v < 0 ? ((v - NEG_MIN) / span) * 100 : zero
        const fillWidth = (Math.abs(v) / span) * 100
        const color = v < 0 ? graceGiven : v > 0 ? frenzyTouched : traceNight

        return (
            <div key={type} style={{display: 'grid', gridTemplateColumns: isMobile ? '62px 1fr 34px' : '78px 1fr 40px', alignItems: 'center', gap: 8, height: isMobile ? 18 : 21}}>
                <span style={{color: silverLining, fontSize: fontBody}}>{type}</span>
                <div style={{position: 'relative', height: 6, backgroundColor: depthColor, borderRadius: 3}}>
                    <div style={{position: 'absolute', left: `${zero}%`, top: -3, bottom: -3, width: 1, backgroundColor: greyOfNight}}/>
                    {v !== 0 && (
                        <div style={{position: 'absolute', left: `${fillStart}%`, width: `${fillWidth}%`, top: 0, bottom: 0, backgroundColor: color, borderRadius: 3}}/>
                    )}
                </div>
                <span style={{color, fontSize: fontBody, textAlign: 'right', fontVariantNumeric: 'tabular-nums'}}>{formatSigned(value)}</span>
            </div>
        )
    }

    function renderResistRow(type, value){
        const immune = value === "---"
        const pct = typeof value === "number" ? Math.min(value / RES_MAX, 1) * 100 : 0

        return (
            <div key={type} style={{display: 'grid', gridTemplateColumns: isMobile ? '62px 1fr 44px' : '78px 1fr 52px', alignItems: 'center', gap: 8, height: isMobile ? 18 : 21}}>
                <span style={{color: silverLining, fontSize: fontBody}}>{type}</span>
                <div style={{position: 'relative', height: 6, backgroundColor: depthColor, borderRadius: 3}}>
                    {immune
                        ? <div style={{position: 'absolute', inset: 0, borderRadius: 3, border: `1px dashed ${frenzyTouched}`}}/>
                        : <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, backgroundColor: silveredNight, borderRadius: 3}}/>
                    }
                </div>
                <span style={{color: immune ? frenzyTouched : silverLining, fontSize: fontBody, textAlign: 'right', fontVariantNumeric: 'tabular-nums'}}>
                    {immune ? "Immune" : (value ?? "—")}
                </span>
            </div>
        )
    }

    function renderWeakness(stats){
        const weak = findWeaknesses(stats)
        if (weak.length === 0){
            return <span style={{color: traceNight, fontSize: fontBody}}>No elemental weakness</span>
        }
        return (
            <span style={{color: graceGiven, fontSize: fontBody}}>
                Weak to {weak.join(" and ")} ({formatSigned(stats[weak[0]])})
            </span>
        )
    }

    function renderBossCard([key, file, accent], width){
        const stats = tab.table[key]
        const name = stats?.name || key
        const alone = width !== cardWidth

        return (
            <article key={`${screen}-${key}`} style={{
                backgroundColor: nightShade, borderRadius: 14, overflow: 'hidden',
                border: `1px solid ${gloomGlow}`, display: 'flex', flexDirection: 'column',
                width: width, boxSizing: 'border-box',
                // A lone card on the last row is centred
                marginLeft: alone ? 'auto' : 0, marginRight: alone ? 'auto' : 0,
            }}>
                <div style={{
                    position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden',
                    background: `radial-gradient(ellipse at 50% 40%, ${accent} 0%, ${nightShade} 78%)`,
                }}>
                    <img src={img(file)} alt={name} loading="lazy"
                        style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block'}}
                    />
                    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: '45%', background: `linear-gradient(to bottom, transparent, ${nightShade})`}}/>
                    <h3 style={{
                        position: 'absolute', left: 14, right: 14, bottom: 8, margin: 0,
                        color: silverLining, fontSize: isMobile ? 15 : 20, fontWeight: 600, lineHeight: 1.2,
                        textShadow: `0 1px 6px ${depthColor}`,
                    }}>
                        {name}
                    </h3>
                </div>

                <div style={{padding: isMobile ? '8px 10px 12px' : '10px 14px 16px'}}>
                    {!stats ? (
                        <p style={{color: traceNight, fontSize: fontBody, margin: '8px 0'}}>No stats recorded for this boss yet.</p>
                    ) : (
                        <>
                            <div style={{display: 'flex', alignItems: 'baseline', gap: 6}}>
                                <span style={{color: silverLining, fontSize: isMobile ? 18 : 24, fontWeight: 600, fontVariantNumeric: 'tabular-nums'}}>
                                    {formatHP(stats.HP)}
                                </span>
                                <span style={{color: traceNight, fontSize: fontSmall}}>HP</span>
                            </div>
                            <div style={{marginTop: 2}}>{renderWeakness(stats)}</div>

                            {renderSectionLabel("Damage negation")}
                            {NEGATIONS.map(type => renderNegationRow(type, stats[type]))}

                            {renderSectionLabel("Status resistance")}
                            {RESISTANCES.map(type => renderResistRow(type, stats[type]))}
                        </>
                    )}
                </div>
            </article>
        )
    }

    function renderNotes(){
        if (tab.notes.length === 0) return null
        return (
            <ul style={{
                listStyle: 'none', margin: '0 0 24px', padding: isMobile ? 12 : '14px 18px',
                backgroundColor: nightShade, borderRadius: 14, border: `1px solid ${gloomGlow}`,
                display: 'grid', gap: 8, maxWidth: 900,
            }}>
                {tab.notes.map(note => (
                    <li key={note} style={{
                        color: silverLining, fontSize: fontBody, lineHeight: 1.45,
                        borderLeft: `2px solid ${graceGiven}`, paddingLeft: 10,
                    }}>
                        {note}
                    </li>
                ))}
            </ul>
        )
    }

    function renderLegend(){
        const swatch = (color, dashed) => (
            <span style={{display: 'inline-block', width: 14, height: 6, borderRadius: 3, marginRight: 6, verticalAlign: 'middle',
                backgroundColor: dashed ? 'transparent' : color, border: dashed ? `1px dashed ${color}` : 'none'}}/>
        )
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', gap: isMobile ? 10 : 18, color: traceNight, fontSize: fontSmall}}>
                <span>{swatch(graceGiven)}Takes extra damage</span>
                <span>{swatch(frenzyTouched)}Resists damage</span>
                <span>{swatch(silveredNight)}Status buildup needed</span>
                <span>{swatch(frenzyTouched, true)}Immune</span>
            </div>
        )
    }

    function renderToolbar(){
        return (
            <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between', gap: 12, marginBottom: 18}}>
                <label style={{display: 'flex', alignItems: 'center', gap: 10, color: silverLining, fontSize: fontBody}}>
                    Find a boss
                    <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Name, e.g. Gladius"
                        style={{
                            flex: 1, minWidth: isMobile ? 0 : 240, padding: '7px 10px', borderRadius: 8,
                            border: `1px solid ${gloomGlow}`, backgroundColor: nightShade, color: silverLining, fontSize: fontBody,
                        }}
                    />
                </label>
                {renderLegend()}
            </div>
        )
    }

    function renderGrid(){
        if (shown.length === 0){
            return (
                <div style={{padding: 24, color: silverLining, fontSize: fontBody}}>
                    No {screen.toLowerCase()} match &ldquo;{search}&rdquo;.{" "}
                    <button onClick={() => setSearch("")} style={{
                        background: 'none', border: 'none', padding: 0, color: graceGiven,
                        textDecoration: 'underline', cursor: 'pointer', fontSize: fontBody,
                    }}>
                        Clear search
                    </button>
                </div>
            )
        }
        // A card left alone on the last row is widened to at least 40%
        const loneLast = shown.length % perRow === 1
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', gap: gridGap}}>
                {shown.map((boss, i) =>
                    renderBossCard(boss, (loneLast && i === shown.length - 1) ? loneWidth : cardWidth)
                )}
            </div>
        )
    }

    /////////////////
    // Main Render //
    /////////////////

    return(
        <div style={{padding: isMobile ? 10 : 20}}>
            <div style={{padding: isMobile ? '10px 0 16px' : '10px 20px 20px'}}>
                <OstrichTabBar style={{width: '100%'}}
                value={screen}
                tabs={Object.keys(TABS)}
                onTabClick={(t) => setScreen(t)}
                />
            </div>
            <div style={{padding: isMobile ? 0 : '0 20px'}}>
                {renderNotes()}
                {renderToolbar()}
                {renderGrid()}
            </div>
        </div>
    )
}
