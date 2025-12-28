import React, {useEffect, useState, useRef} from "react";
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";
import nightlordStats from "../../constants/projects/nightreign/bosses/nightlords";

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

    ///////////
    // State //
    ///////////

    const [screen, setScreen] = useState("Nightlords")

    /////////////
    // Renders //
    /////////////

    function renderBossCard(img, name, color){
        let abv = name.split(" ")[0]
        return(
            <OstCard style={{flex: 3, padding: 0, margin: 0, backgroundColor: slateMiasma}}>
                    <OstCard rounded={false} noShadow={true} imageSrc={img} templateStyle={1} style={{height: '50%', width: '100%', padding: 0, margin: 0, backgroundColor: color}}/>
                    <p style={{textAlign: 'center', fontSize: 24, padding: 0, margin: 3}}>
                        {name}
                    </p>
                    {renderNegationTable(abv)}
            </OstCard>
        )
    }

    function renderNegationTable(boss){
        let stats = nightlordStats[boss] ? nightlordStats[boss] : null
        console.log(stats)
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
    }

    function _nightlords(){
        return(
            <div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(gladius, "Gladius (Tricephalos)", frenzyTouched)}
                    {renderBossCard(adel, "Adel (Gaping Jaw)", gloomGlow)}
                    {renderBossCard(maris, "Maris (Augur)", nightShade)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(pest, "Gnoster (Sentient Pest)", silveredNight)}
                    {renderBossCard(pest, "Faurtis (Sentient Pest)", silveredNight)}
                    {renderBossCard(pest, "Animus (Sentient Pest)", silveredNight)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(libra, "Libra (Equilibruis Beast)", graceGiven)}
                    {renderBossCard(fulghor, "Fulghor (Darkdrift Knight)", greyOfNight)}
                    {renderBossCard(caligo, "Caligo (Fissure in the Fog", traceNight)}
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(heolster, "Heolster (Night Aspect", "black")}
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
                    {renderBossCard(gladius, "Gladius (Tricephalos)", frenzyTouched)}
                    {renderBossCard(adel, "Adel (Gaping Jaw)", gloomGlow)}
                    {renderBossCard(maris, "Maris (Augur)", nightShade)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(pest, "Gnoster (Sentient Pest)", silveredNight)}
                    {renderBossCard(pest, "Faurtis (Sentient Pest)", silveredNight)}
                    {renderBossCard(pest, "Animus (Sentient Pest)", silveredNight)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(libra, "Libra (Equilibruis Beast)", graceGiven)}
                    {renderBossCard(fulghor, "Fulghor (Darkdrift Knight)", greyOfNight)}
                    {renderBossCard(caligo, "Caligo (Fissure in the Fog", traceNight)}
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 530, marginBottom: 20}}>
                    {renderBossCard(heolster, "Heolster (Night Aspect", "black")}
                    {/* {renderBossCard(harmonia, "The Balancers", silverLining)} */}
                    {/* {renderBossCard(strag, "Traitorous Straghess (The Dreglord)", scarletRot)} */}
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
                />
            </div>
            {main_screen_render()}
        </div>
    )
}