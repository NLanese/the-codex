// React
import React, {useEffect, useState} from "react";
import ReactModal from 'react-modal';

// Recoil
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { FormMultipleChoice } from "../../../OstrichComponents/Forms/FormMultipleChoice";

export default function BetBotProjectPage() {
////////////
// Consts //
////////////

const depthColor = '#161754'
const nightShade = "#2b2161"
const graceGiven = "#f2e144"
const frenzyTouched = "#ff5100"
const greyOfNight = "#636478"
const gloomGlow = "#452d8a"


///////////
// State //
///////////

    // Directory
    const [directory, setDirectory] = useAtom(directoryDataState)

    // Loading
    const [loading, setLoading] = useState(true)

    // Nightfarer
    const [nightfarer, setNightfarer] = useState("Wylder")

    // Relics
    const [relic1, setRelic1] = useState({})
    const [relic2, setRelic2] = useState({})
    const [relic3, setRelic3] = useState({})

    const [deepEnabled, setDeepEnabled] = useState(false)
    const [deepDisplayed, setDeepDisplayed] = useState(false)



///////////////
// Rendering //
///////////////
function renderSelectionsContainer(){
    return(
        <div style={{
        display: 'flex', flexDirection: 'row', 
        gap: 30, height: 500, padding: 25
        }}>
            <div style={{
                flex: 8, display: 'flex', flexDirection: 'row', 
                backgroundColor: nightShade, height: 550, 
                borderRadius: 20
            }}>
                {renderNightFarer()}
                {renderRelics()}
            </div>
            <div style={{flex: 4, backgroundColor: "#83adeb", height: 450}}>
                {renderStats()}
            </div>
        </div>
    )
}


// NIGHT FARER //

function renderNightFarer(){
    return(
        <div style={{
            display: 'flex', flexDirection: 'column', flex: 7, 
            backgroundColor: nightShade, paddingRight: 25
        }}>
            <FormMultipleChoice 
                title={"Nightfarer"}
                titleStyle={{marginBottom: 0, paddingBottom: 0, backgroundColor: gloomGlow, padding: 2.5, paddingLeft: 5, color: graceGiven,}}
                boxStyle={{width: '100%', margin: 0}}
                itemsPerRow={5}
                inForm={false}
                onChange={(op) => {
                  setNightfarer(op)
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: ["Wylder", "Guardian", "Ironeye", "Duchess", "Raider", "Revenant", "Recluse", "Executer", "Scholar", "Undertaker"],
                    textStyle: {fontSize: 16},
                  }
                }
              />
              <FormMultipleChoice 
                title={"Level"}
                titleStyle={{marginBottom: 0, paddingBottom: 0, backgroundColor: gloomGlow, padding: 2.5, paddingLeft: 5, color: graceGiven}}
                boxStyle={{width: '100%', margin: 0}}
                itemsPerRow={5}
                inForm={false}
                onChange={(op) => {
                  setNightfarer(op)
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    textStyle: {fontSize: 16},
                  }
                }
              />
        </div>
    )
}

// RELICS // 
function renderRelics(){
    return(
        <div style={{ flex: 5, backgroundColor: nightShade}}>
            <div style={{display: 'flex', gap: 10, flexDirection: 'column', height: 450,}}>
                {renderRelic(relic1)}
                {renderRelic(relic2)}
                {renderRelic(relic3)}
            </div>
            {renderDeepToggles()}
        </div>
        
    )
}

function renderRelic(relic){
    return(
        <OstCard style={{flex: 3, backgroundColor: greyOfNight, padding: 0}}>
            {renderRelicHeader()}
            {renderRelicEffect(relic?.slot1 ? relic.slot1 : null)}
            {renderRelicEffect(relic?.slot2 ? relic.slot2 : null)}
            {renderRelicEffect(relic?.slot2 ? relic.slot2 : null)}
        </OstCard>
    )
}

function renderRelicHeader(){
    return(
        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: gloomGlow, overflow: 'hidden', gap: 10}}>
            <OstCard noShadow={true} style={{color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, flex: 7 }}>
                RELIC
            </OstCard>
            <OstCard noShadow={true} style={{color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, flex: 2.5 }}>
                SAVE
            </OstCard>
            <OstCard noShadow={true} style={{color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, flex: 2.5 }}>
                LOAD
            </OstCard>
        </div>
    )
}

function renderRelicEffect(relicSlot){
    if (relicSlot === null){
        return (
            <OstCard style={{border: '1px solid black'}} noShadow={true} rounded={false}>
                No Effect
            </OstCard>
        )
    }
    return (
        <OstCard style={{border: '1px solid black'}} noShadow={true} rounded={false}>
            {relicSlot.title}
        </OstCard>
        
    )
}

// DEEP OF NIGHT //
function renderDeepToggles(){
    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5}}>
                <p style={{color: graceGiven, fontFamily: 'Gilroy', width: 180}}>ENABLE DEEP RELICS</p>
                <OstCard style={{display: 'flex', justifySelf: 'center', alignSelf: 'center', border: "2px solid #f2e144", borderRadius: 4, height: 10, width: 10, backgroundColor: depthColor, margin: 0}}
                onClick={() => setDeepEnabled(!deepEnabled)}
                >
                    {fill("enable")}
                </OstCard>
            </div>
            {renderDISPLAY_DEEP_RELICS()}
        </div>
    )
}

function renderDISPLAY_DEEP_RELICS(){
    if (deepEnabled){
        return(
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 0}}>
                    <p style={{color: graceGiven, fontFamily: 'Gilroy', width: 180}}>DISPLAY DEEP RELICS</p>
                    <OstCard style={{display: 'flex', justifySelf: 'center', alignSelf: 'center', border: "2px solid #f2e144", borderRadius: 4, height: 10, width: 10, backgroundColor: depthColor, margin: 0}}
                    onClick={() => setDeepDisplayed(!deepDisplayed)}
                    >
                        {fill("display")}
                    </OstCard>
                </div>
        )
    }
}

function fill(type){
    if (deepEnabled && type === "enable"){
        return <div style={{display: 'flex', flex: 1, backgroundColor: graceGiven}}/>
    }
    else if (deepDisplayed && type === "display"){
        return <div style={{display: 'flex', flex: 1, backgroundColor: graceGiven}}/>
    }
}

// STATS //
function renderStats(){
    return(
        <div style={{display: 'flex', flexDirection: 'row', gap: 5}}>
            <div>
                {renderVitals()}
            </div>
            <div style={{flex: 6}}>
                {renderStat("Weapon", "off")}
                {renderStat("Magic", "off")}
                {renderStat("Lightning", "off")}
                {renderStat("Fire", "off")}
                {renderStat("Holy", "off")}
                {renderStat("Skill", "off")}
                {renderStat("Critical", "off")}
                {renderStat("Counter", "off")}
            </div>
            <div style={{flex: 6}}>

            </div>
        </div>
    )
}

function renderStat(type, variety){
    let color = "white"
    if (variety === "off"){
        color = frenzyTouched
    }
    return(
        <OstCard style={{border: '1px solid black', flex: 3, backgroundColor: nightShade, padding: 5}} noShadow={true} rounded={false}>
            <p style={{color: color, fontSize: 13, margin: 0}}>{type} Damage Mutliplier - </p>
        </OstCard>
    )
}

// VITALS //
function renderVitals(){
    return
}



/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: 20, backgroundColor: depthColor, height: '100vh'}}>
            {renderSelectionsContainer()}
    </div>
)
}