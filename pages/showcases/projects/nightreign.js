// React
import React, {useEffect, useState, useRef} from "react";
import ReactModal from 'react-modal';

// Recoil
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { FormMultipleChoice } from "../../../OstrichComponents/Forms/FormMultipleChoice";

// Nighteign Functions
import determineBaseVitals from "../../../components/Nightreign/functions/determineBaseVitals";
import determineBaseNegations from "../../../components/Nightreign/functions/determineBaseNegations";
import RelicsModal from "../../../components/Nightreign/RelicsModal";

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
const silveredNight = "#7fc7bf"


///////////
// State //
///////////

    // Directory
    const [directory, setDirectory] = useAtom(directoryDataState)

    // Loading
    const [loading, setLoading] = useState(true)

    // Nightfarer
    const [nightfarer, setNightfarer] = useState(false)
    const [lvl, setLvl] = useState(false)

    // Relics
    const [relic1, setRelic1] = useState(false)
    const [relic2, setRelic2] = useState(false)
    const [relic3, setRelic3] = useState(false)

    const [effect11, setEffect11] = useState(false)
    const [effect12, setEffect12] = useState(false)
    const [effect13, setEffect13] = useState(false)

    const [effect21, setEffect21] = useState(false)
    const [effect22, setEffect22] = useState(false)
    const [effect23, setEffect23] = useState(false)

    const [effect31, setEffect31] = useState(false)
    const [effect32, setEffect32] = useState(false)
    const [effect33, setEffect33] = useState(false)

    // Relic Editting and Effects
    const [all_relic_effects, set_all_relic_effects] = useState([])
    const [currentEditNum, setCurrentEditNum] = useState(false) //11,12,13,21,22,23,31,32,33

    // Deep Of The Night
    const [deepEnabled, setDeepEnabled] = useState(false)
    const [deepDisplayed, setDeepDisplayed] = useState(false)

    const [relicsModal, setRelicsModal] = useState(false)

    // Vitals
    const [hp, setHP] = useState(1)
    const [fp, setFP] = useState(1)
    const [stam, setStam] = useState(1)


////////////////
// UseEffects //
////////////////

    useEffect(() => {
        if (nightfarer && lvl){
            let vitalsObject = determineBaseVitals(nightfarer, lvl)
            setHP(vitalsObject.HP)
            setFP(vitalsObject.FP)
            setStam(vitalsObject.Stam)
        }
    }, [nightfarer, lvl])

    useEffect(() => {
        let all = [];
    
        if (effect11) all.push(effect11);
        if (effect12) all.push(effect12);
        if (effect13) all.push(effect13);

        setRelic1({ slot1: effect11, slot2: effect12, slot3: effect13 })
    
        if (effect21) all.push(effect21);
        if (effect22) all.push(effect22);
        if (effect23) all.push(effect23);

        setRelic2({ slot1: effect21, slot2: effect22, slot3: effect23 })
    
        if (effect31) all.push(effect31);
        if (effect32) all.push(effect32);
        if (effect33) all.push(effect33);

        setRelic3({ slot1: effect31, slot2: effect32, slot3: effect33 })
    
        set_all_relic_effects(all);
        console.log(all)
    }, [
        effect11, effect12, effect13,
        effect21, effect22, effect23,
        effect31, effect32, effect33
    ]);



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
            <div style={{flex: 4, backgroundColor: nightShade, height: 550}}>
                {renderVitals()}
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
                    setNightfarer(false)
                    setNightfarer(op.value[0])
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: ["Wylder", "Guardian", "Ironeye", "Duchess", "Raider", "Revenant", "Recluse", "Executor", "Scholar", "Undertaker"],
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
                    setLvl(false)
                    setLvl(op.value[0])
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
                {renderRelic(relic1,1)}
                {renderRelic(relic2,2)}
                {renderRelic(relic3,3)}
            </div>
            {renderDeepToggles()}
        </div>
        
    )
}

function renderRelic(relic, key){
    return(
        <OstCard key={key} style={{flex: 3, backgroundColor: greyOfNight, padding: 0, overflow: 'hidden'}}>
            {renderRelicHeader()}
            <div style={{height: '88%', display: 'flex', flexDirection: 'column', backgroundColor: 'lime'}}>
                {renderRelicEffect((relic?.slot1 ? relic.slot1 : null), `${key}1`)}
                {renderRelicEffect((relic?.slot2 ? relic.slot2 : null), `${key}2`)}
                {renderRelicEffect((relic?.slot3 ? relic.slot3 : null), `${key}3`)}
            </div>
        </OstCard>
    )
}

function renderRelicHeader(){
    return(
        <div style={{height: '12%'}}>
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
        </div>
    )
}

function renderRelicEffect(relicSlot, key){
    return (
        <OstCard key={key} noShadow={true} rounded={false} 
        style={{border: '1px solid black', minHeight: 25, padding: 3, flex: 4}} 
        onClick={() => handleRelicEffectClick(key)}
        >
            {relicSlot?.title ? relicSlot?.title : "No Effect"}
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
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: -5}}>
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
            <div style={{flex: 6}}>
                {renderStat("Weapon", "off")}
                {renderStat("Ranged", "off")}
                {renderStat("Incantation", "off")}
                {renderStat("Sorcery", "off")}
                {renderStat("Magic", "off")}
                {renderStat("Lightning", "off")}
                {renderStat("Fire", "off")}
                {renderStat("Holy", "off")}
                {renderStat("Skill", "off")}
                {renderStat("Critical", "off")}
                {renderStat("Counter", "off")}
                {renderStat("Poise", "off")}
                {renderStat("Consumables", "off")}
            </div>
            <div style={{flex: 6}}>
                {renderStat("Physical", "neg")}
                {renderStat("Slash", "neg")}
                {renderStat("Strike", "neg")}
                {renderStat("Thrust", "neg")}
                {renderStat("Magic", "neg")}
                {renderStat("Fire", "neg")}
                {renderStat("Lightning", "neg")}
                {renderStat("Holy", "neg")}
                {renderStat("Poise", "neg")}
                {renderStat("Poison", "neg")}
                {renderStat("Sleep", "neg")}
                {renderStat("Blight", "neg")}
                {renderStat("Frostbite", "neg")}
                {renderStat("Madness", "neg")}
                {renderStat("Rot", "neg")}
                {renderStat("Bleed", "neg")}
            </div>
        </div>
    )
}

function renderStat(type, variety){
    let color = "white"
    let caption = ""

    if (variety === "off"){
        color = frenzyTouched
        caption = "Damage"
    }
    else{
        color = silveredNight
        caption = "Negation"
        if (type === "Poise"){
            caption = ""
        }
        else if (type === "Poison" || type ===  "Sleep" || type ===  "Blight" || type ===  "Frostbite" || type ===  "Madness" || type === "Rot" || type === "Bleed"){
            caption = "Resist"
        }
    }
    
    return(
        <OstCard noShadow={true} rounded={false}
        style={{
            border: '1px solid black', display: 'flex', 
            flexDirection: 'row', flex: 3, 
            backgroundColor: gloomGlow, padding: 5,
            justifyContent: 'space-between'
        }} >
            <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-start'}}>
                {type} {caption} - 
            </p>
            <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-end'}}>{
                determineRenderedValue(type, variety)}
            </p>
        </OstCard>
    )
}

// VITALS //
function renderVitals(){
    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 10, padding: 2}}>
                <p style={{flex: 3, alignSelf: 'flex-start', textAlign: 'center', ...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: "red"}}>HP</p>
                <div style={{flex: 9, backgroundColor: greyOfNight, marginTop: 2, marginBottom: 2}}>
                    <div style={{backgroundColor: 'red', height: '100%', width: `${(hp / 17.5)}%`, display: "flex", justifyContent: 'center'}} >
                        {hp}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 10, padding: 2}}>
                <p style={{flex: 3, alignSelf: 'flex-start', textAlign: 'center', ...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: "cyan"}}>FP</p>
                <div style={{flex: 9, backgroundColor: greyOfNight, marginTop: 2, marginBottom: 2}}>
                    <div style={{backgroundColor: 'cyan', height: '100%', width: `${(fp / 3.0)}%`, display: "flex", justifyContent: 'center'}} >
                        {fp}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 10, padding: 2}}>
                <p style={{flex: 3, alignSelf: 'flex-start', textAlign: 'center', ...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: "lime"}}>Stamina</p>
                <div style={{flex: 9, backgroundColor: greyOfNight, marginTop: 2, marginBottom: 2}}>
                    <div style={{backgroundColor: 'lime', height: '100%', width: `${(stam / 2.5)}%`, display: "flex", justifyContent: 'center'}} >
                        {stam}
                    </div>
                </div>
            </div>
        </div>
    )
}

// RELIC MODAL //
function renderRelicModal(){
    return(
        <ReactModal
        isOpen={relicsModal}
        onRequestClose={() => setRelicsModal(false)}   
        shouldCloseOnOverlayClick={true}              
        style={{
        overlay: {
            zIndex: 9999,
            backgroundColor: 'rgba(17, 3, 64, 0.85)',
        },
        content: {
            backgroundColor: 'white',
            width: '50%', marginLeft: '20%', minWidth: 300,
            height: '70%', marginTop: '0%', minHeight: 220,
            borderRadius: 20
        }   
        }}
        >
            <RelicsModal 
                selectEffect={handleChangeEffect}
            />
        </ReactModal>
    )
}

///////////////
// Functions //
///////////////

function handleRelicEffectClick(key){
    setCurrentEditNum(key)
    setRelicsModal(true)
}

function handleChangeEffect(effect){
    if (currentEditNum === "11"){
        setEffect11(effect)
    }
    else if (currentEditNum === "12"){
        setEffect12(effect)
    }
    else if (currentEditNum === "13"){
        setEffect13(effect)
    }

    else if (currentEditNum === "21"){
        setEffect21(effect)
    }
    else if (currentEditNum === "22"){
        setEffect22(effect)
    }
    else if (currentEditNum === "23"){
        setEffect23(effect)
    }

    else if (currentEditNum === "31"){
        setEffect31(effect)
    }
    else if (currentEditNum === "32"){
        setEffect32(effect)
    }
    else if (currentEditNum === "33"){
        setEffect33(effect)
    }
    else{
        console.log("Nope... ",  currentEditNum)
    }
    setRelicsModal(false)
}

function getBaseNegations(){
    let bases = determineBaseNegations(nightfarer)
    return bases
}

function determineRenderedValue(type, variety){
    if (variety === "neg"){
        let negationBases = getBaseNegations(nightfarer)
        if (type === "Physical"){
            return negationBases.phys
        }
        else if (type === "Slash"){
            return negationBases.slash
        }
        else if (type === "Strike"){
            return negationBases.strike
        }
        else if (type === "Thrust"){
            return negationBases.thrust
        }
        else if (type === "Magic"){
            return negationBases.magic
        }
        else if (type === "Fire"){
            return negationBases.fire
        }
        else if (type === "Lightning"){
            return negationBases.lightning
        }
        else if (type === "Holy"){
            return negationBases.holy
        }
        else if (type === "Poise"){
            return negationBases.poise
        }
        else if (type === "Poison"){
            return negationBases.poison
        }
        else if (type === "Rot"){
            return negationBases.rot
        }
        else if (type === "Bleed"){
            return negationBases.bleed
        }
        else if (type === "Frostbite"){
            return negationBases.frost
        }
        else if (type === "Sleep"){
            return negationBases.sleep
        }
        else if (type === "Madness"){
            return negationBases.mad
        }
        else if (type === "Blight"){
            return negationBases.blight
        }
    }
    else if (variety === "off"){
        return `${(determineDamModifier(type) * 100).toFixed(0)}%`

    }
    
}

function determineDamModifier(type){

    console.log("Type - ", type)
    // Total Damage Modifier
    let totalMod = 1

    // Finds "Weapon Damage Modifiers" and applies
    if (type === "Weapon"){
        let weaponDams = findDamageTypeFromEffects("weaponDamage")
        weaponDams.forEach(dam => {
            totalMod = totalMod * dam.effect.weaponDamage
        })
    }

    // Finds "All Damage Modifiers" and applies
    let allDams = findDamageTypeFromEffects("allDamage")
    allDams.forEach(dam => {
        totalMod = totalMod * dam.effect.allDamage
    })
    return totalMod
}

function findDamageTypeFromEffects(type){
    return all_relic_effects.filter(eff => {
        if (eff.effect[type]){
            return eff.effect
        }
        else{
            console.log("NO ", type)
            console.log(eff.effect)
        }
    })
}



/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: 20, backgroundColor: depthColor, height: '100vh'}}>
        {renderRelicModal()}
        {renderSelectionsContainer()}
    </div>
)
}