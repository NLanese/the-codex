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
                backgroundColor: nightShade, height: 450, 
                borderRadius: 20
            }}>
                {renderNightFarer()}
                {renderRelics()}
            </div>
            <div style={{flex: 4, backgroundColor: "#83adeb", height: 450}}>

            </div>
        </div>
    )
}

function renderNightFarer(){
    return(
        <div style={{
            display: 'flex', flexDirection: 'column', flex: 7, 
            backgroundColor: '#261c5e', paddingRight: 25
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

function renderRelics(){
    return(
        <div style={{display: 'flex', flex: 5, gap: 10, flexDirection: 'column'}}>
            {renderRelic(relic1)}
            {renderRelic(relic2)}
            {renderRelic(relic3)}
        </div>
    )
}

function renderRelic(relic){
    return(
        <OstCard style={{flex: 3, backgroundColor: greyOfNight, padding: 0}}>
            <p style={{backgroundColor: gloomGlow, color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, overflow: 'hidden'}}>RELIC</p>
            {renderRelicEffect(relic?.slot1 ? relic.slot1 : null)}
            {renderRelicEffect(relic?.slot2 ? relic.slot2 : null)}
            {renderRelicEffect(relic?.slot2 ? relic.slot2 : null)}
        </OstCard>
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


/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: 20, backgroundColor: depthColor, height: '100vh'}}>
            <div style={Styles.Fonts.pageTitle}>Nightreign Build Calculator </div>
            {renderSelectionsContainer()}
    </div>
)
}