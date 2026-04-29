import React, {useEffect, useState, useRef} from "react";
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";
import nightlordStats from "../../constants/projects/nightreign/bosses/nightlords";
import day1_stats from "../../constants/projects/nightreign/bosses/day1";
import day2_stats from "../../constants/projects/nightreign/bosses/day2"
import minor_stats from "../../constants/projects/nightreign/bosses/minor";
import major_stats from "../../constants/projects/nightreign/bosses/major";

export default function BossStats({
    isMobile
}){

    ///////////////
    // Constants //
    ///////////////

    const gladius = "/assets/project_images/nightreign/gladius.png"
    const adel = "/assets/project_images/nightreign/adel.png"
    const pest = "/assets/project_images/nightreign/pest.png"
    const maris = "/assets/project_images/nightreign/maris.png"
    const libra = "/assets/project_images/nightreign/libra.png"
    const fulghor = "/assets/project_images/nightreign/fulghor.png"
    const caligo = "/assets/project_images/nightreign/caligo.png"
    const heolster = "/assets/project_images/nightreign/heolster.png"
    const harmonia = "/assets/project_images/nightreign/harmonia.png"
    const strag = "/assets/project_images/nightreign/greg.png"

    const demiQueen = "/assets/project_images/nightreign/demiQueen.png"
    const demiSwordmaster = "/assets/project_images/nightreign/demiSwordmaster.png"
    const bellBearing = "/assets/project_images/nightreign/bellBearing.png"
    const gapingDragon = "/assets/project_images/nightreign/gapingDragon.png"
    const wormFace = "/assets/project_images/nightreign/wormface.png"
    const gargoyle = "/assets/project_images/nightreign/valiantGargoyle.png"
    const cavalry = "/assets/project_images/nightreign/cavalry.png"
    const freja = "/assets/project_images/nightreign/freja.png"
    const smelter = "/assets/project_images/nightreign/smelter.png"
    const commander = "/assets/project_images/nightreign/commander.png"
    const tibia = "/assets/project_images/nightreign/tibia.png"
    const centipede = "/assets/project_images/nightreign/centipede.png"
    const grafted = "/assets/project_images/nightreign/grafted.png"
    const revenent = "/assets/project_images/nightreign/revenent.png"
    const deathKnight = "/assets/project_images/nightreign/deathKnight.png"
    const ulcerated = "/assets/project_images/nightreign/ulcerated.png"
    const demons = "/assets/project_images/nightreign/demon.png"
    const curse = "/assets/project_images/nightreign/curseBlade.png"
    const divine = "/assets/project_images/nightreign/divine.png"
    const bear = "/assets/project_images/nightreign/bear.png"

    const omen = "/assets/project_images/nightreign/omen.png"
    const sentinel = "/assets/project_images/nightreign/sentinel.png"
    const dragon = "/assets/project_images/nightreign/ancient.png"
    const crucible = "/assets/project_images/nightreign/crucible.png"
    const hippo = "/assets/project_images/nightreign/hippo.png"
    const outland = "/assets/project_images/nightreign/outland2.png"
    const wyrm = "/assets/project_images/nightreign/wyrm.png"
    const nox = "/assets/project_images/nightreign/dragonkin.png"
    const draconic = "/assets/project_images/nightreign/draconic.png"
    const star = "/assets/project_images/nightreign/star.png"
    const skinny = "/assets/project_images/nightreign/skinny.png"
    const fatty = "/assets/project_images/nightreign/fatty.png"
    const bird = "/assets/project_images/nightreign/deathBird.png"
    const namelessBird = "/assets/project_images/nightreign/namelessBird.png"
    const nameless = "/assets/project_images/nightreign/nameless.png"
    const dancer = "/assets/project_images/nightreign/dancer.png"
    const artorias = "/assets/project_images/nightreign/artorias.png"
    const mohg = "/assets/project_images/nightreign/mohg.png"
    const prince = "/assets/project_images/nightreign/prince.png"

    const scion = "/assets/project_images/nightreign/scion.png"
    const black = "/assets/project_images/nightreign/black.png"
    const wolf = "/assets/project_images/nightreign/wolf.png"
    const zamor = "/assets/project_images/nightreign/zamor.png"
    const leonine = "/assets/project_images/nightreign/leonine.png"
    const elder = "/assets/project_images/nightreign/elder.png"
    const flower = "/assets/project_images/nightreign/flower.png"

    const flying = "/assets/project_images/nightreign/flying.png"
    const avatar = "/assets/project_images/nightreign/avatar.png"
    const ancestor = "/assets/project_images/nightreign/ancestor.png"
    const loretta = "/assets/project_images/nightreign/loretta.png"
    const bbk = "/assets/project_images/nightreign/bbk.png"




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

    ///////////
    // State //
    ///////////

    const [screen, setScreen] = useState("Nightlords")

    /////////////
    // Renders //
    /////////////

    function renderBossCard(img, name, color){
        let table = nightlordStats
        if (screen === "Night 1"){
            table = day1_stats
        }
        else if (screen === "Night 2"){
            table = day2_stats
        }
        else if (screen === "Minor Field Boss"){
            table = minor_stats
        }
        else if (screen === "Major Field Boss"){
            table = major_stats
        }
        let stats = table[name] ? table[name] : null
        let height = isMobile? 330 : 480;
        return(
            <OstCard style={{flex: 3, padding: 0, height: height, paddingBottom: 6, margin: 0, backgroundColor: slateMiasma}}>
                    <OstCard rounded={false} noShadow={true} imageSrc={img} templateStyle={1} style={{height: '50%', width: '100%', padding: 0, margin: 0, backgroundColor: color}}/>
                    <p style={{textAlign: 'center', fontSize: isMobile ? 15 : 24, padding: 0, margin: 3}}>
                        {stats?.name ? stats.name : "NA"}
                    </p>
                    {renderNegationTable(stats)}
            </OstCard>
        )
    }

    function renderNegationTable(stats){
        return(
            <div style={{display: 'flex', flexDirection: 'row', height: 'auto', backgroundColor: slateMiasma}}>
                <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                    <p style={{padding: 0, margin: 0, border: '1px solid black', width: '100%', textAlign: 'center', backgroundColor: silverLining, fontSize: isMobile ? 16 :20}}>Negations</p>
                    {renderNegations(stats)}
                </div>
                <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                <p style={{padding: 0, margin: 0, border: '1px solid black', width: '100%', textAlign: 'center', backgroundColor: gloomGlow, color: silverLining, fontSize: isMobile ? 16 :20}}>Resistances</p>
                    {renderResistances(stats)}
               </div>
            </div>
        )
    }

    function renderNegations(stats){
        return(
            <div style={{ width: '94%', marginLeft: '3%', backgroundColor: slateMiasma}}>
                {renderSingleNegation("Physical", stats)}
                {renderSingleNegation("Strike", stats)}
                {renderSingleNegation("Pierce", stats)}
                {renderSingleNegation("Slash", stats)}
                {renderSingleNegation("Fire", stats)}
                {renderSingleNegation("Magic", stats)}
                {renderSingleNegation("Holy", stats)}
                {renderSingleNegation("Lightning", stats)}
            </div>
        )
    }

    function renderResistances(stats){
        return(
            <div style={{ width: '94%', marginLeft: '3%', backgroundColor: slateMiasma}}>
                {renderHealth(stats)}
                {renderSingleResist("Poison", stats)}
                {renderSingleResist("Rot", stats)}
                {renderSingleResist("Frostbite", stats)}
                {renderSingleResist("Bleed", stats)}
                {renderSingleResist("Madness", stats)}
                {renderSingleResist("Sleep", stats)}
            </div>
        )
    }

    function renderSingleNegation(type, stats){
        let value = stats ? stats[type] : 0
        return(
            <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottom: '1px solid black', backgroundColor: slateMiasma}}>
                <p style={{padding: 0, margin: 0, fontSize: isMobile ? 13 :20}}>
                    {type}: 
                </p>
                <p style={{padding: 0, margin: 0, fontSize: isMobile ? 13 : 20, color: value > 0 ? frenzyTouched : value === 0 ? 'black' : silveredNight}}>
                    {value} 
                </p>
            </OstCard>
        )
    }

    function renderSingleResist(type, stats){
        let value = stats ? stats[type] : 0
        return(
            <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottom: '1px solid black', backgroundColor: slateMiasma}}>
                <p style={{padding: 0, margin: 0, fontSize: isMobile ? 13 :20}}>
                    {type}: 
                </p>
                <p style={{padding: 0, margin: 0, fontSize: isMobile ? 13 : 20, color: value === "---" ? frenzyTouched : value > 500 ? frenzyTouched : value > 250 ? 'black' : silveredNight}}>
                    {value} 
                </p>
            </OstCard>
        )
    }

    function renderHealth(stats){
        let value = stats ? stats.HP : 0
        return(
            <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottom: '1px solid black', backgroundColor: slateMiasma}}>
                <p style={{padding: 0, margin: 0, fontSize: isMobile ? 13 :20}}>
                    HP: 
                </p>
                <p style={{padding: 0, margin: 0, fontSize: isMobile ? 13 : 20, color:'black'}}>
                    {value} 
                </p>
            </OstCard>
        )
    }

    function main_screen_render(){
        if (screen === "Nightlords"){
            return _nightlords()
        }
        else if (screen === "Night 1"){
            return _night1()
        }
        else if (screen === "Night 2"){
            return _night2()
        }
        else if (screen === "Minor Field Boss"){
            return _minor()
        }
        else if (screen === "Major Field Bosses"){
            return _major()
        }
    }

    function _nightlords(){
        if (isMobile){
            return(
                <div style={{height: 'auto'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 'auto', marginBottom: 40}}>
                        {renderBossCard(gladius, "Gladius", frenzyTouched)}
                        {renderBossCard(adel, "Adel", gloomGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 'auto', marginBottom: 40}}>
                        {renderBossCard(pest, "Gnoster", silveredNight)}
                        {renderBossCard(pest, "Faurtis", silveredNight)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 'auto', marginBottom: 40}}>
                        {renderBossCard(pest, "Animus", silveredNight)}
                        {renderBossCard(maris, "Maris", nightShade)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 'auto', marginBottom: 40}}>
                        {renderBossCard(libra, "Libra", graceGiven)}
                        {renderBossCard(fulghor, "Fulghor", greyOfNight)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 'auto', marginBottom: 40}}>
                        {renderBossCard(caligo, "Caligo", traceNight)}
                        {renderBossCard(heolster, "Heolster", "black")}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 'auto', marginBottom: 40}}>
                        {renderBossCard(heolster, "Heolster2", "black")}
                        {renderBossCard(harmonia, "Balancers", silverLining)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 'auto', marginBottom: 40}}>
                        {renderBossCard(strag, "Dreglord", scarletRot)}
                    </div>
                </div>

            )
        }
        return(
            <div style={{height: 'auto'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(gladius, "Gladius", frenzyTouched)}
                    {renderBossCard(adel, "Adel", gloomGlow)}
                    {renderBossCard(maris, "Maris", nightShade)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(pest, "Gnoster", silveredNight)}
                    {renderBossCard(pest, "Faurtis", silveredNight)}
                    {renderBossCard(pest, "Animus", silveredNight)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(libra, "Libra", graceGiven)}
                    {renderBossCard(fulghor, "Fulghor", greyOfNight)}
                    {renderBossCard(caligo, "Caligo", traceNight)}
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(heolster, "Heolster", "black")}
                    {renderBossCard(heolster, "Heolster2", "black")}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(harmonia, "Balancers", silverLining)}
                    {renderBossCard(strag, "Dreglord", scarletRot)}
                </div>
            </div>
        )
    }

    function _night1(){
        if (isMobile){
            return(
                <div style={{height: 'auto'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(demiQueen, "DemiQueen", gloomGlow)}
                        {renderBossCard(demiSwordmaster, "DemiSwordmaster", silverLining)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(bellBearing, "BellBearingHunter", scarletRot)}
                        {renderBossCard(gapingDragon, "GapingDragon", poisonGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(gapingDragon, "GapingDragon", poisonGlow)}
                        {renderBossCard(wormFace, "WormFace", greyOfNight)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(gargoyle, "ValiantGargoyle", scarletRot)}
                        {renderBossCard(freja, "DearFreja", poisonGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(cavalry, "NightsCavalry", "black")}
                        {renderBossCard(smelter, "SmelterDemon", frenzyTouched)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(commander, "Commander", scarletRot)}
                        {renderBossCard(centipede, "Centipede", poisonGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(tibia, "Tibia", silverLining)}
                        {renderBossCard(grafted, "Grafted", graceGiven)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(revenent, "Revenent", poisonGlow)}
                        {renderBossCard(ulcerated, "Ulcerated", scarletRot)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(deathKnight, "DeathKnight", "black")}
                        {renderBossCard(demons, "Demons", frenzyTouched)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(curse, "Curseblade", "black")}
                        {renderBossCard(divine, "DivineWarrior", graceGiven)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(bear, "Bear", scarletRot)}
                    </div>
                </div>

            )
        }
        return(
            <div style={{height: 'auto'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(demiQueen, "DemiQueen", gloomGlow)}
                    {renderBossCard(demiSwordmaster, "DemiSwordmaster", silverLining)}
                    {renderBossCard(bellBearing, "BellBearingHunter", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(gapingDragon, "GapingDragon", poisonGlow)}
                    {renderBossCard(wormFace, "WormFace", greyOfNight)}
                    {renderBossCard(gargoyle, "ValiantGargoyle", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(freja, "DearFreja", poisonGlow)}
                    {renderBossCard(cavalry, "NightsCavalry", "black")}
                    {renderBossCard(smelter, "SmelterDemon", frenzyTouched)}
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(commander, "Commander", scarletRot)}
                    {renderBossCard(centipede, "Centipede", poisonGlow)}
                    {renderBossCard(tibia, "Tibia", silverLining)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(grafted, "Grafted", graceGiven)}
                    {renderBossCard(revenent, "Revenent", poisonGlow)}
                    {renderBossCard(ulcerated, "Ulcerated", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(deathKnight, "DeathKnight", "black")}
                    {renderBossCard(demons, "Demons", frenzyTouched)}
                    {renderBossCard(bear, "Bear", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(curse, "Curseblade", "black")}
                    {renderBossCard(divine, "DivineWarrior", graceGiven)}
                </div>
            </div>
        )
    }

    function _night2(){
        if (isMobile){
            return(
                <div style={{height: 'auto'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(omen, "Margit", graceGiven)}
                        {renderBossCard(sentinel, "Sentinel", graceGiven)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(dragon, "Dragon", scarletRot)}
                        {renderBossCard(crucible, "Crucible", graceGiven)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(hippo, "Hippo", "black")}
                        {renderBossCard(outland, "Commander", greyOfNight)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(wyrm, "Wyrm", scarletRot)}
                        {renderBossCard(nox, "Nox", gloomGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(draconic, "Draconic", scarletRot)}
                        {renderBossCard(star, "Fallingstar", gloomGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(skinny, "Apostle", "black")}
                        {renderBossCard(fatty, "Noble", "black")}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(bird, "Bird", "black")}
                        {renderBossCard(namelessBird, "NamelessBird", slateMiasma)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(nameless, "Nameless", graceGiven)}
                        {renderBossCard(dancer, "Dancer", gloomGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(artorias, "Knight", "black")}
                        {renderBossCard(prince, "Prince", scarletRot)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(mohg, "Mohg", "red")}
                    </div>
                </div>

            )
        }
        return(
            <div style={{height: 'auto'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(omen, "Margit", graceGiven)}
                    {renderBossCard(sentinel, "Sentinel", graceGiven)}
                    {renderBossCard(dragon, "Dragon", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(crucible, "Crucible", graceGiven)}
                    {renderBossCard(hippo, "Hippo", "black")}
                    {renderBossCard(outland, "Commander", greyOfNight)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(wyrm, "Wyrm", scarletRot)}
                    {renderBossCard(nox, "Nox", gloomGlow)}
                    {renderBossCard(draconic, "Draconic", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(star, "Fallingstar", gloomGlow)}
                    {renderBossCard(skinny, "Apostle", "black")}
                    {renderBossCard(fatty, "Noble", "black")}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(bird, "Bird", "black")}
                    {renderBossCard(namelessBird, "NamelessBird", slateMiasma)}
                    {renderBossCard(nameless, "Nameless", graceGiven)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(artorias, "Knight", "black")}
                    {renderBossCard(prince, "Prince", scarletRot)}
                    {renderBossCard(mohg, "Mohg", "red")}
                </div>
            </div>
        )
    }

    function _minor(){
        let content
        if (isMobile){
            content = (
                <div style={{height: 'auto'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(scion, "Scion", poisonGlow)}
                        {renderBossCard(black, "Black", "black")}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(wolf, "Wolf", scarletRot)}
                        {renderBossCard(zamor, "Zamor", silveredNight)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(leonine, "Leonine", graceGiven)}
                        {renderBossCard(elder, "Elder", slateMiasma)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(hippo, "Hippo", graceGiven)}
                        {renderBossCard(demiQueen, "DemiQueen", "black")}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(flower, "Miranda", poisonGlow)}
                        {renderBossCard(revenent, "Revenent", poisonGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(cavalry, "NightsCavalry", "black")}
                    </div>
                </div>
            )
                return(<div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20, gap: 12.5}}>
                    <OstCard style={{backgroundColor: silverLining, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Minor Field Bosses provide 22500 Runes and Weak Reward Pools
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: silveredNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Castle Basement Bosses have 45% more HP, provide 37500 Runes and Strong Reward Pools
                        </p>
                    </OstCard>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20, gap: 12.5}}>
                    <OstCard style={{backgroundColor: traceNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Depth of the Night Cursed Variants deal 65% more damage, have 65% more health and drop 65% more Runes
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: greyOfNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            The Health, Runes, and Damage Done by these bosses are different if they are in a POI as opposed to the field
                        </p>
                    </OstCard>
                </div>
                {content}
            </div>
            )

        }
        else{
            content =(
            <div style={{height: 'auto'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(scion, "Scion", poisonGlow)}
                    {renderBossCard(black, "Black", "black")}
                    {renderBossCard(wolf, "Wolf", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(zamor, "Zamor", silveredNight)}
                    {renderBossCard(leonine, "Leonine", graceGiven)}
                    {renderBossCard(elder, "Elder", slateMiasma)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(hippo, "Hippo", graceGiven)}
                    {renderBossCard(demiQueen, "DemiQueen", "black")}
                    {renderBossCard(flower, "Miranda", poisonGlow)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(revenent, "Revenent", poisonGlow)}
                    {renderBossCard(cavalry, "NightsCavalry", "black")}
                </div>
            </div>)

            return(<div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20, gap: 12.5}}>
                    <OstCard style={{backgroundColor: silverLining, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Minor Field Bosses provide 22500 Runes and Weak Reward Pools
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: silveredNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Castle Basement Bosses have 45% more HP, provide 37500 Runes and Strong Reward Pools
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: traceNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Depth of the Night Cursed Variants deal 65% more damage, have 65% more health and drop 65% more Runes
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: greyOfNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            The Health, Runes, and Damage Done by these bosses are different if they are in a POI as opposed to the field
                        </p>
                    </OstCard>
                </div>
                {content}
            </div>
            )
        }
    }

    function _major(){
        let content
        if (isMobile){
            content = (
                <div style={{height: 'auto'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(flying, "Flying", scarletRot)}
                        {renderBossCard(ulcerated, "Ulcerated", poisonGlow)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(bellBearing, "BellBearingHunter", scarletRot)}
                        {renderBossCard(avatar, "Avatar", graceGiven)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(ancestor, "Ancestor", silveredNight)}
                        {renderBossCard(sentinel, "Sentinel", graceGiven)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(wyrm, "Wyrm", scarletRot)}
                        {renderBossCard(loretta, "Loretta", silverLining)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(bird, "Bird", "black")}
                        {renderBossCard(bbk, "BBK", 'red')}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 15, height: 380, marginBottom: 5}}>
                        {renderBossCard(draconic, "Draconic", "red")}
                    </div>
                </div>
            )
            return(
            <div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20, gap: 12.5}}>
                    <OstCard style={{backgroundColor: silverLining, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                           MOST Major Field Bosses provide 30000 Runes and Strong Reward Pools
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: silveredNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                           Death Rite Bird, Royal Carian Knight, Black Blade Kindred and the Draconic Tree Sentinel drop 50% more runes
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: traceNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Castle Rooftop Bosses have 20% more HP, do 20% more damage, and provide 60k Runes and Strong Reward Pools.
                            The previous exceptions still apply
                        </p>
                    </OstCard>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20, gap: 12.5}}>
                    <OstCard style={{backgroundColor: traceNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Depth of the Night Cursed Variants deal 15% more damage, have 15% more health and drop 15% more Runes
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: gloomGlow, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            The Health, Runes, and Damage Done by these bosses are different if they are in a POI as opposed to the field
                        </p>
                    </OstCard>
                </div>
                {content}
            </div>
            )

        }
        else{
            content =(
            <div style={{height: 'auto'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(flying, "Flying", scarletRot)}
                    {renderBossCard(ulcerated, "Ulcerated", poisonGlow)}
                    {renderBossCard(bellBearing, "BellBearingHunter", scarletRot)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(avatar, "Avatar", graceGiven)}
                    {renderBossCard(ancestor, "Ancestor", silveredNight)}
                    {renderBossCard(sentinel, "Sentinel", graceGiven)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(wyrm, "Wyrm", scarletRot)}
                    {renderBossCard(loretta, "Loretta", silverLining)}
                    {renderBossCard(bird, "Bird", "black")}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(bbk, "BBK", 'red')}
                    {renderBossCard(draconic, "Draconic", "red")}
                </div>
            </div>)

            return(
            <div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20, gap: 12.5}}>
                    <OstCard style={{backgroundColor: silverLining, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                           MOST Major Field Bosses provide 30000 Runes and Strong Reward Pools
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: silveredNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                           Death Rite Bird, Royal Carian Knight, Black Blade Kindred and the Draconic Tree Sentinel drop 50% more runes
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: traceNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Castle Rooftop Bosses have 20% more HP, do 20% more damage, and provide 60k Runes and Strong Reward Pools.
                            The previous exceptions still apply
                        </p>
                    </OstCard>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20, gap: 12.5}}>
                    <OstCard style={{backgroundColor: traceNight, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            Depth of the Night Cursed Variants deal 15% more damage, have 15% more health and drop 15% more Runes
                        </p>
                    </OstCard>
                    <OstCard style={{backgroundColor: gloomGlow, padding: 7.5, flex: 3}}>
                        <p style={{padding: 0, margin: 2, textAlign: "center"}}>
                            The Health, Runes, and Damage Done by these bosses are different if they are in a POI as opposed to the field
                        </p>
                    </OstCard>
                </div>
                {content}
            </div>
            )
        }
    }

    /////////////////
    // Main Render //
    /////////////////

    return(
        <div style={{padding: 20}}>
            <div style={{padding: 20}}>
                <OstrichTabBar style={{width: '100%'}}
                value={screen}
                tabs={["Nightlords", "Night 1", "Night 2", "Major Field Bosses", "Minor Field Boss"]}
                onTabClick={(tab) => setScreen(tab)}
                />
            </div>
            {main_screen_render()}
        </div>
    )
}