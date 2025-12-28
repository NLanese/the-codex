import React, {useEffect, useState, useRef} from "react";
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";
import nightlordStats from "../../constants/projects/nightreign/bosses/nightlords";
import day1And2Stats from "../../constants/projects/nightreign/bosses/day1and2";

export default function BossStats({
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
    const strag = "/assets/project_images/nightreign/strag.png"

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
        if (screen === "Day 1 and 2 Bosses"){
            table = day1And2Stats
        }
        let stats = table[name] ? table[name] : null
        return(
            <OstCard style={{flex: 3, padding: 0, margin: 0, backgroundColor: slateMiasma}}>
                    <OstCard rounded={false} noShadow={true} imageSrc={img} templateStyle={1} style={{height: '50%', width: '100%', padding: 0, margin: 0, backgroundColor: color}}/>
                    <p style={{textAlign: 'center', fontSize: 24, padding: 0, margin: 3}}>
                        {stats?.name ? stats.name : "NA"}
                    </p>
                    {renderNegationTable(stats)}
            </OstCard>
        )
    }

    function renderNegationTable(stats){
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                    <p style={{padding: 0, margin: 0, border: '1px solid black', width: '100%', textAlign: 'center', backgroundColor: silverLining, fontSize: 20}}>Negations</p>
                    {renderNegations(stats)}
                </div>
                <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                <p style={{padding: 0, margin: 0, border: '1px solid black', width: '100%', textAlign: 'center', backgroundColor: gloomGlow, color: silverLining, fontSize: 20}}>Resistances</p>
                    {renderResistances(stats)}
               </div>
            </div>
        )
    }

    function renderNegations(stats){
        return(
            <div style={{ width: '94%', marginLeft: '3%'}}>
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
            <div style={{ width: '94%', marginLeft: '3%'}}>
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
            <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottom: '1px solid black'}}>
                <p style={{padding: 0, margin: 0, fontSize: 20}}>
                    {type}: 
                </p>
                <p style={{padding: 0, margin: 0, fontSize: 20, color: value > 0 ? frenzyTouched : value === 0 ? 'black' : silveredNight}}>
                    {value} 
                </p>
            </OstCard>
        )
    }

    function renderSingleResist(type, stats){
        let value = stats ? stats[type] : 0
        return(
            <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottom: '1px solid black'}}>
                <p style={{padding: 0, margin: 0, fontSize: 20}}>
                    {type}: 
                </p>
                <p style={{padding: 0, margin: 0, fontSize: 20, color: value === "Immune" ? frenzyTouched : value > 500 ? frenzyTouched : value > 250 ? 'black' : silveredNight}}>
                    {value} 
                </p>
            </OstCard>
        )
    }

    function main_screen_render(){
        if (screen === "Nightlords"){
            return _nightlords()
        }
        else if (screen === "Day 1 and 2 Bosses"){
            return _major_field_bosses()
        }
    }

    function _nightlords(){
        return(
            <div>
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
                    {/* {renderBossCard(harmonia, "The Balancers", silverLining)} */}
                    {/* {renderBossCard(strag, "Traitorous Straghess (The Dreglord)", scarletRot)} */}
                </div>
            </div>
        )
    }

    function _major_field_bosses(){
        return(
            <div>
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
            </div>
        )
    }

    /////////////////
    // Main Render //
    /////////////////

    return(
        <div style={{padding: 20}}>
            <div style={{padding: 20}}>
                <OstrichTabBar style={{width: '100%'}}
                value={screen}
                tabs={["Nightlords", "Day 1 and 2 Bosses", "Major Field Bosses", "Minor Field Boss"]}
                onTabClick={(tab) => setScreen(tab)}
                />
            </div>
            {main_screen_render()}
        </div>
    )
}