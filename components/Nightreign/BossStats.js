import React, {useEffect, useState, useRef} from "react";
import { OstCard } from "../../OstrichComponents/Format/OstCard";

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

    /////////////
    // Renders //
    /////////////

    function renderBossCard(img, name, color){
        return(
            <OstCard style={{flex: 3, padding: 0, margin: 0, backgroundColor: slateMiasma}}>
                    <OstCard rounded={false} noShadow={true} imageSrc={img} templateStyle={1} style={{height: '50%', width: '100%', padding: 0, margin: 0, backgroundColor: color}}/>
                    <p style={{textAlign: 'center', fontSize: 24, padding: 0, margin: 3}}>
                        {name}
                    </p>
                    {renderNegationTable()}
            </OstCard>
        )
    }

    function renderNegationTable(boss){
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                    <p style={{padding: 0, margin: 0, border: '1px solid black', width: '100%', textAlign: 'center', backgroundColor: silverLining}}>Phase 1</p>
                    {renderNegations(boss, 1)}
                </div>
                <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                    <p style={{padding: 0, margin: 0, border: '1px solid black', width: '100%', textAlign: 'center', backgroundColor: traceNight}}>Phase 2</p>
                    {renderNegations(boss, 2)}
                </div>
                <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                    <p style={{padding: 0, margin: 0, border: '1px solid black', width: '100%', textAlign: 'center', backgroundColor: gloomGlow, color: '#efefef'}}>Phase 3</p>
                    {renderNegations(boss, 3)}
                </div>
            </div>
        )
    }

    function renderNegations(){
        return(
            <div style={{ width: '94%', marginLeft: '3%'}}>
                {renderSingleNegation("Strike")}
                {renderSingleNegation("Pierce")}
                {renderSingleNegation("Slash")}
                {renderSingleNegation("Fire")}
                {renderSingleNegation("Magic")}
                {renderSingleNegation("Holy")}
                {renderSingleNegation("Lightning")}
            </div>
        )
    }

    function renderSingleNegation(type){
        return(
            <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                <p style={{padding: 0, margin: 0}}>
                    {type}: 
                </p>
                <p style={{padding: 0, margin: 0}}>
                    0 
                </p>
            </OstCard>
        )
    }

    return(
        <div style={{padding: 20}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 500, marginBottom: 20}}>
                {renderBossCard(gladius, "Gladius (Tricephalos)", frenzyTouched)}
                {renderBossCard(adel, "Adel (Gaping Jaw)", gloomGlow)}
                {renderBossCard(maris, "Maris (Augur)", nightShade)}
                
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 500, marginBottom: 20}}>
                {renderBossCard(pest, "Gnoster (Sentient Pest)", silveredNight)}
                {renderBossCard(pest, "Faurtis (Sentient Pest)", silveredNight)}
                {renderBossCard(pest, "Animus (Sentient Pest)", silveredNight)}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 500, marginBottom: 20}}>
                {renderBossCard(libra, "Libra (Equilibruis Beast)", graceGiven)}
                {renderBossCard(fulghor, "Fulghor (Darkdrift Knight)", greyOfNight)}
                {renderBossCard(caligo, "Caligo (Fissure in the Fog", traceNight)}
                
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 35, height: 500, marginBottom: 20}}>
                {renderBossCard(heolster, "Heolster (Night Aspect", "black")}
                {renderBossCard(harmonia, "The Balancers", silverLining)}
                {renderBossCard(strag, "The Dreglord", silverLining)}
            </div>
        </div>
    )
}