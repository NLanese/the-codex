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
import determineBaseNegations from "../../../constants/projects/nightreign/nightfarers/determineBaseNegations";
import determineBaseVitals from "../../../constants/projects/nightreign/nightfarers/determineBaseVitals";
import RelicsModal from "../../../components/Nightreign/RelicsModal";
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";

export default function NightreignBuildMaker() {
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
const silverLining = "#d4eeff"


///////////
// State //
///////////

    // Directory
    const [directory, setDirectory] = useAtom(directoryDataState)
    setDirectory("Private")

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

    // Deep Relics
    const [relic4, setRelic4] = useState(false)
    const [relic5, setRelic5] = useState(false)
    const [relic6, setRelic6] = useState(false)

    const [effect41, setEffect41] = useState(false)
    const [effect42, setEffect42] = useState(false)
    const [effect43, setEffect43] = useState(false)

    const [effect51, setEffect51] = useState(false)
    const [effect52, setEffect52] = useState(false)
    const [effect53, setEffect53] = useState(false)

    const [effect61, setEffect61] = useState(false)
    const [effect62, setEffect62] = useState(false)
    const [effect63, setEffect63] = useState(false)

    // Relics Toggle Effects
    const [relics_effect_toggles, set_relic_effect_toggles] = useState({})

    // Relic Editting and Effects
    const [all_relic_effects, set_all_relic_effects] = useState([])
    const [all_relic_types, set_all_relic_types] = useState([])
    const [currentEditNum, setCurrentEditNum] = useState(false) //11,12,13,21,22,23,31,32,33

    // Deep Of The Night
    const [deepDisplayed, setDeepDisplayed] = useState(false)

    // Rendering States
    const [selectionState, setSelectionState] = useState("Relics") 
    const [relicsModal, setRelicsModal] = useState(false)
    const [cursedModal, setCursedModal] = useState(false)
    const [expandedStat, setExpandedStat] = useState(false)

    // Vitals
    const [hp, setHP] = useState(1)
    const [fp, setFP] = useState(1)
    const [stam, setStam] = useState(1)

    const [vigor, setVigor] = useState(1)
    const [end, setEnd] = useState(1)
    const [dex, setDex] = useState(1)
    const [str, setStr] = useState(1)
    const [intl, setIntl] = useState(1)
    const [fai, setFai] = useState(1)
    const [mind, setMind] = useState(1)
    const [arcane, setArcane] = useState(1)


////////////////
// UseEffects //
////////////////

    useEffect(() => {
        if (nightfarer && lvl){
            let vitalsObject = determineBaseVitals(nightfarer, lvl)
            setHP(vitalsObject.HP)
            setFP(vitalsObject.FP)
            setStam(vitalsObject.Stam)
            setVigor(vitalsObject.Vig)
            setEnd(vitalsObject.End)
            setStr(vitalsObject.Str)
            setDex(vitalsObject.Dex)
            setMind(vitalsObject.Mind)
            setIntl(vitalsObject.Int)
            setFai(vitalsObject.Fai)
            if (nightfarer === "Wylder" || nightfarer === "Raider" || nightfarer === "Undertaker" || nightfarer === "Guardian" || nightfarer === "Recluse" ){
                setArcane(10)
            }
            else if (nightfarer === "Duchess"){
                setArcane(11)
            }
            else if (nightfarer === "Revenant"){
                setArcane(12)
            }
            else if (nightfarer === "Ironeye"){
                setArcane(13)
            }
            else if (nightfarer === "Executor"){
                setArcane(28)
            }
            else if (nightfarer === "Scholar"){
                setArcane(50)
            }
        }
    }, [nightfarer, lvl])

    useEffect(() => {
        let all = [];
        let types = [];
    
        if (effect11) { 
            all.push({...effect11, active: true}) 
            types.push(effect11.selfType)
        }
        [all, types] = handleEffectState(effect12, all, types);
        [all, types] = handleEffectState(effect13, all, types);
        [all, types] = handleEffectState(effect21, all, types);
        [all, types] = handleEffectState(effect22, all, types);
        [all, types] = handleEffectState(effect23, all, types);
        [all, types] = handleEffectState(effect31, all, types);
        [all, types] = handleEffectState(effect32, all, types);
        [all, types] = handleEffectState(effect33, all, types);
        [all, types] = handleEffectState(effect41, all, types);
        [all, types] = handleEffectState(effect42, all, types);
        [all, types] = handleEffectState(effect43, all, types);
        [all, types] = handleEffectState(effect51, all, types);
        [all, types] = handleEffectState(effect52, all, types);
        [all, types] = handleEffectState(effect53, all, types);
        [all, types] = handleEffectState(effect61, all, types);
        [all, types] = handleEffectState(effect62, all, types);
        [all, types] = handleEffectState(effect63, all, types);
    
        setRelic1({ slot1: effect11, slot2: effect12, slot3: effect13 });
        setRelic2({ slot1: effect21, slot2: effect22, slot3: effect23 });
        setRelic3({ slot1: effect31, slot2: effect32, slot3: effect33 });
        setRelic4({ slot1: effect41, slot2: effect42, slot3: effect43 });
        setRelic5({ slot1: effect51, slot2: effect52, slot3: effect53 });
        setRelic6({ slot1: effect61, slot2: effect62, slot3: effect63 });
    
        // Update final combined effects
        set_all_relic_effects(all);
        set_all_relic_types(types)

    }, [
        effect11, effect12, effect13,
        effect21, effect22, effect23,
        effect31, effect32, effect33,
        effect41, effect42, effect43,
        effect51, effect52, effect53,
        effect61, effect62, effect63
    ]);

    useEffect(() => {
        findConditions()
    }, [all_relic_effects])

    useEffect(() => {
        if (selectionState === "Deep Relics"){
            setDeepDisplayed(true)
        }
        else{
            setDeepDisplayed(false)
        }
    }, [selectionState])


///////////////
// Rendering //
///////////////
function renderSelectionsContainer(toggles, all_relic_effects){
    return(
        <div style={{
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: 30, height: 500, padding: isMobile ? 5 : 25,
        }}>
            <div style={{
                flex: 5, display: 'flex', flexDirection: 'row', 
                backgroundColor: nightShade, height: 600, 
                borderRadius: 20
            }}>
                {renderNightFarer()}
                {renderSelections(deepDisplayed)}
            </div>
            <div style={{flex: 7, backgroundColor: nightShade, height: 600}}>
                {renderVitals(all_relic_effects)}
                {renderStats(toggles)}
            </div>
        </div>
    )
}

function renderSelections(deepDisplayed){
    if (selectionState === "Relics" || selectionState === "Deep Relics"){
        return renderRelics(deepDisplayed)
    }
    else if (selectionState === "Effects"){
        return renderEffectToggles()
    }
    else{
        return(
            <div style={{flex: 7}}>
                <p style={{...Styles.Fonts.basicX, color: silverLining}}>
                    Nothing here yet. Please check in again for updates!
                </p>
            </div>
        )
    }
}


// NIGHT FARER //
function renderNightFarer(){
    return(
        <div style={{
            display: 'flex', flexDirection: 'column', flex: 5, 
            paddingRight: 10
        }}>
            <FormMultipleChoice 
                title={"Selection"}
                style={{width: '100%'}}
                titleStyle={{marginBottom: 0, paddingBottom: 0, backgroundColor: gloomGlow, padding: 2.5, paddingLeft: 5, color: graceGiven}}
                itemsPerRow={3}
                inForm={false}
                fieldTextStyle={{padding: 0, paddingLeft: 3, paddingRight: 3, margin: 0, fontSize: 14}}
                onChange={(op) => {
                    setSelectionState(op.value[0])
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: [
                        "Relics", "Deep Relics", "Effects",
                        // {tag: "Weapon Passives", textStyle: {fontSize: 11}}, {tag: "Blessings + Talismans", textStyle: {fontSize: 11}}, "Items"
                        ],
                }}
                inputValue={selectionState}
            />
            <FormMultipleChoice 
                title={"Nightfarer"}
                titleStyle={{marginBottom: 0, paddingBottom: 0, backgroundColor: gloomGlow, padding: 2.5, paddingLeft: 5, color: graceGiven,}}
                itemsPerRow={2}
                inForm={false}
                onChange={(op) => {
                    setNightfarer(op.value[0])
                }}
                fieldTextStyle={{padding: 0, margin: 0}}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: ["Wylder", "Guardian", "Ironeye", "Duchess", "Raider", "Revenant", "Recluse", "Executor", "Scholar", {tag: "Undertaker", fontSize: isMobile ? 12 : 16}],
                    textStyle: {fontSize: 12, padding: 0},
                  }
                }
              />
              <FormMultipleChoice 
                title={"Level"}
                titleStyle={{
                    marginBottom: 0, paddingBottom: 0, 
                    backgroundColor: gloomGlow, color: graceGiven,
                    padding: 2.5, paddingLeft: 5
                }}
                itemsPerRow={8}
                inForm={false}
                fieldTextStyle={{padding: 0, margin: 0}}
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
                }}
              />
        </div>
    )
}

// RELICS // 
function renderRelics(deepDisplayed){
    if (deepDisplayed){
        return(
            <div style={{ flex: 7, backgroundColor: nightShade}}>
                <div style={{display: 'flex', gap: 10, flexDirection: 'column', height: 590,}}>
                    <Relic relic={relic4} id={4} depth={true}/>
                    <Relic relic={relic5} id={5} depth={true}/>
                    <Relic relic={relic6} id={6} depth={true}/>
                </div>
            </div>
            
        )
    }
    return(
        <div style={{ flex: 7, backgroundColor: nightShade}}>
            <div style={{display: 'flex', gap: 10, flexDirection: 'column', height: 590,}}>
                <Relic relic={relic1} id={1} depth={false}/>
                <Relic relic={relic2} id={2} depth={false}/>
                <Relic relic={relic3} id={3} depth={false}/>
            </div>
        </div>
        
    )
}

function Relic({ relic, id, depth }) {
    const [cons, setCons] = useState(false)

    return (
        <OstCard style={{ flex: 4, backgroundColor: greyOfNight, padding: 0, overflow: 'hidden', border: "1px solid", borderColor: silveredNight }}>
            {renderRelicHeader(id, depth, cons, setCons)}
            <div style={{ height: '88%', display: 'flex', flexDirection: 'column', backgroundColor: depthColor }}>
                {renderRelicEffect(relic?.slot1 ?? null, `${id}1`, cons)}
                {renderRelicEffect(relic?.slot2 ?? null, `${id}2`, cons)}
                {renderRelicEffect(relic?.slot3 ?? null, `${id}3`, cons)}
            </div>
        </OstCard>
    )
}

function renderRelicHeader(key, depth, cons, setCons){
    return(
        <div style={{height: '12%'}}>
            <div style={{display: 'flex', flexDirection: 'row', backgroundColor: gloomGlow, overflow: 'hidden', gap: 10, padding: 2, paddingBottom: 0}}>
            <OstCard noShadow={true} style={{color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, flex: 7 }}>
                RELIC
            </OstCard>
            {renderFlipRelic(depth, setCons, cons)}
            <OstCard noShadow={true} style={{color: frenzyTouched, backgroundColor: depthColor, padding: 0, margin: 0, flex: 2.5, textAlign: 'center'}} onClick={() => clearRelic(key)}>
                CLEAR
            </OstCard>
            </div>
        </div>
    )
}

function renderFlipRelic(depth, setCons, cons){
    if (!depth){
        return
    }
    let text = "POSITIVES"
    let color = "lime"
    if (cons){
        text = "NEGATIVES"
        color = "red"
    }
    return(
        <OstCard noShadow={true} style={{color: color, backgroundColor: depthColor, paddingLeft: 2, paddingRight: 2, paddingTop: 0, paddingBottom: 0, margin: 0, flex: 2.5, fontSize: 14, textAlign: 'center', alignContent: 'center'}} onClick={() => setCons(!cons)}>
            {text}
        </OstCard> 
    )
}

function renderRelicEffect(relicSlot, key, cons){
    return (
        <OstCard key={key} noShadow={true} rounded={false} 
        style={{border: '1px solid black', minHeight: 25, padding: 3, flex: 4, fontSize: 15}} 
        onClick={() => handleRelicEffectClick(key, cons)}
        >
            {relicSlot?.title ? relicSlot?.title : "No Effect"}
        </OstCard>
        
    )
}

// EFFECTS //
function renderEffectToggles(){
    let keysOfEffects = Object.keys({...relics_effect_toggles})
    if (!keysOfEffects || keysOfEffects.length < 1){
        return(
            <div style={{flex: 7, marginBottom: 10}}>
                <p style={{...Styles.Fonts.basicX, color: silverLining}}>
                    All Relic Effects are always active. No Effects to toggle.
                </p>
            </div>
        )
    }
    return(
        <div style={{flex: 7, paddingTop: 10, paddingBottom: 10}}>
            {renderSingleToggle(keysOfEffects)}
        </div>
    )
}

function renderSingleToggle(keysOfEffects){
    return keysOfEffects.map((eff, i) => {
        let type = (typeof relics_effect_toggles[eff])
        return(
            <OstCard 
            noShadow={true} 
            style={{width: '85%', display: 'flex', flexDirection: 'row', gap: 10, backgroundColor: '#efefef'}}
            >
                <p style={{margin: 0, padding: 0, fontSize: 13.5, flex: 10}}>
                    {eff}
                </p>
                <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                    {renderToggle_Check_Or_Counter(eff, relics_effect_toggles, type)}
                </div>
            </OstCard>
    )})
}

function renderToggle_Check_Or_Counter(eff, relics_effect_toggles, type){
    if (type !== 'number'){
        return(
            <OstCard 
            onClick={() => set_relic_effect_toggles(prev => ({...prev, [eff]: !prev[eff]}))}
            style={{
                display: 'flex', justifySelf: 'center', alignSelf: 'center', 
                border: "2px solid #f2e144", borderRadius: 4, 
                height: 35, width: 35, margin: 0, padding: 0,
                backgroundColor: depthColor, fontSize: 13.5
            }}>
                {fillOrInput(eff, relics_effect_toggles[eff], type)}
            </OstCard>
        )
    }
    else{
        return(
            <OstCard 
            style={{
                display: 'flex', justifySelf: 'center', alignSelf: 'center', 
                border: "2px solid #f2e144", borderRadius: 4, 
                height: 35, width: 35, margin: 0, padding: 0,
                backgroundColor: depthColor, fontSize: 13.5
            }}>
                {fillOrInput(eff, relics_effect_toggles[eff], type)}
            </OstCard>
        )
    }
}

function fill(filled){
    if (filled){
        return <div style={{display: 'flex', flex: 1, backgroundColor: graceGiven, margin: '25%'}}/>
    }
}

function fillOrInput(eff, effVal, type){
    if (type !== 'number'){
        return (fill(effVal))
    }
    else{
        return(
            <input type="number" style={{height: 30, width: 30}}
                onChange={(e) => {
                    set_relic_effect_toggles(prev => 
                        ({...prev, [eff]: parseInt(e.target.value, 10)}))
                    }
                }
            />
        )
    }
}


// STATS //
function renderStats(toggles){
    const [statsShown, setStatsShown] = useState("Damage")
    if (isMobile){
        function renderList(){
            if (statsShown === "Negations"){
                return(
                    <div>
                        {renderStat("Physical", "neg", toggles)}
                        {renderStat("Slash", "neg", toggles)}
                        {renderStat("Strike", "neg", toggles)}
                        {renderStat("Thrust", "neg", toggles)}
                        {renderStat("Magic", "neg", toggles)}
                        {renderStat("Fire", "neg", toggles)}
                        {renderStat("Lightning", "neg", toggles)}
                        {renderStat("Holy", "neg", toggles)}

                        {renderStat("Poise", "malenia_is_overrated_there_I_said_it")}

                        {renderStat("Poison", "res", toggles)}
                        {renderStat("Sleep", "res", toggles)}
                        {renderStat("Blight", "res", toggles)}
                        {renderStat("Frostbite", "res", toggles)}
                        {renderStat("Madness", "res", toggles)}
                        {renderStat("Rot", "res", toggles)}
                        {renderStat("Bleed", "res", toggles)}
                    </div>
                )
            }
            else if (statsShown === "Compound"){
                return(
                    <div>
                        <OstrichTabBar
                            style={{width: '80%', marginLeft: '10%', marginBottom: 10}}
                            tabs={["Incantations", "Sorceries", "Skill", "Items"]}
                            onTabClick={(tab) => {setExpandedStat(tab)}}
                        />
                        {renderExtras("Fire Incants", "off", toggles, "Incantations")}
                        {renderExtras("Giant's Fire", "off", toggles, "Incantations")}
                        {renderExtras("Black Flame", "off", toggles, "Incantations")}
                        {renderExtras("Flame of Frenzy", "off", toggles, "Incantations")}
                        {renderExtras("Holy Incants", "off", toggles, "Incantations")}
                        {renderExtras("Golden Incants", "off", toggles, "Incantations")}
                        {renderExtras("Lightning Incants", "off", toggles, "Incantations")}
                        {renderExtras("Dragon Incants", "off", toggles, "Incantations")}
                        {renderExtras("Bestial Incants", "off", toggles, "Incantations")}

                        {renderExtras("Crystalian Sorcery", "off", toggles, "Sorceries")}
                        {renderExtras("Carian Sorcery", "off", toggles, "Sorceries")}
                        {renderExtras("Glintblade Sorcery", "off", toggles, "Sorceries")}
                        {renderExtras("Gravity Sorcery", "off", toggles, "Sorceries")}
                        {renderExtras("Stonedigger Sorcery", "off", toggles, "Sorceries")}
                        {renderExtras("Standard Sorcery", "off", toggles, "Sorceries")}

                        {renderExtras("Physical Skill", "off", toggles, "Skill")}
                        {renderExtras("Roaring Skill", "off", toggles, "Skill")}
                        {renderExtras("Magic / Gravity Skill", "off", toggles, "Skill")}
                        {renderExtras("Fire Skill", "off", toggles, "Skill")}
                        {renderExtras("Lightning Skill", "off", toggles, "Skill")}
                        {renderExtras("Holy Skill", "off", toggles, "Skill")}
                    </div>
                )
            }
            return(
                <div>
                    {renderStat("Melee", "off", toggles)}
                    {renderStat("Ranged", "off", toggles)}
                    {renderStat("Magic", "off", toggles)}
                    {renderStat("Lightning", "off", toggles)}
                    {renderStat("Fire", "off", toggles)}
                    {renderStat("Holy", "off", toggles)}
                    
                    {renderStat("Critical", "off", toggles)}
                    {renderStat("Counter", "off", toggles)}
                    {renderStat("Poise", "off", toggles)}
                    {renderStat("Skill", "off", toggles, true)}
                    {renderStat("Sorceries", 'off', toggles, true)}
                    {renderStat("Incantations", 'off', toggles, true)}
                    {renderStat("Consumables", "off", toggles, true)}
                </div>
            )
        }
        return(
            <div style={{paddingRight: 10, paddingLeft: 10}}>
                <OstrichTabBar
                    style={{width: '80%', marginLeft: '10%', marginTop: 10, marginBottom: 10}}
                    tabs={["Damage", "Negations", "Compound"]}
                    onTabClick={(tab) => {setStatsShown(tab)}}
                />
                {renderList()}
            </div>
        )
    }
    return(
        <div style={{display: 'flex', flexDirection: 'row', gap: 5}}>
            <div style={{flex: 4, backgroundColor: gloomGlow, height: '100%'}}>
                {renderStat("Physical", "neg", toggles)}
                {renderStat("Slash", "neg", toggles)}
                {renderStat("Strike", "neg", toggles)}
                {renderStat("Thrust", "neg", toggles)}
                {renderStat("Magic", "neg", toggles)}
                {renderStat("Fire", "neg", toggles)}
                {renderStat("Lightning", "neg", toggles)}
                {renderStat("Holy", "neg", toggles)}

                {renderStat("Poise", "malenia_is_overrated_there_I_said_it", toggles)}

                {renderStat("Poison", "res", toggles)}
                {renderStat("Sleep", "res", toggles)}
                {renderStat("Blight", "res", toggles)}
                {renderStat("Frostbite", "res", toggles)}
                {renderStat("Madness", "res", toggles)}
                {renderStat("Rot", "res", toggles)}
                {renderStat("Bleed", "res", toggles)}
            </div>
            <div style={{flex: 4}}>
                {renderStat("Melee", "off", toggles)}
                {renderStat("Ranged", "off", toggles)}
                {renderStat("Magic", "off", toggles)}
                {renderStat("Lightning", "off", toggles)}
                {renderStat("Fire", "off", toggles)}
                {renderStat("Holy", "off", toggles)}
                
                {renderStat("Critical", "off", toggles)}
                {renderStat("Counter", "off", toggles)}
                {renderStat("Poise", "off", toggles)}
                {renderStat("Skill", "off", toggles, true)}
                {renderStat("Sorceries", 'off', toggles, true)}
                {renderStat("Incantations", 'off', toggles, true)}
                {renderStat("Consumables", "off", toggles, true)}
            </div>
            <div style={{flex: 4}}>
                <p style={{...Styles.Fonts.basicX, color: silverLining, margin: 0, textAlign: 'center'}}>{expandedStat ? expandedStat : ""}</p>
                {renderExtras("Fire Incants", "off", toggles, "Incantations")}
                {renderExtras("Giant's Fire", "off", toggles, "Incantations")}
                {renderExtras("Black Flame", "off", toggles, "Incantations")}
                {renderExtras("Flame of Frenzy", "off", toggles, "Incantations")}
                {renderExtras("Holy Incants", "off", toggles, "Incantations")}
                {renderExtras("Golden Incants", "off", toggles, "Incantations")}
                {renderExtras("Lightning Incants", "off", toggles, "Incantations")}
                {renderExtras("Dragon Incants", "off", toggles, "Incantations")}
                {renderExtras("Bestial Incants", "off", toggles, "Incantations")}

                {renderExtras("Crystalian Sorcery", "off", toggles, "Sorceries")}
                {renderExtras("Carian Sorcery", "off", toggles, "Sorceries")}
                {renderExtras("Glintblade Sorcery", "off", toggles, "Sorceries")}
                {renderExtras("Gravity Sorcery", "off", toggles, "Sorceries")}
                {renderExtras("Stonedigger Sorcery", "off", toggles, "Sorceries")}
                {renderExtras("Standard Sorcery", "off", toggles, "Sorceries")}

                {renderExtras("Physical Skill", "off", toggles, "Skill")}
                {renderExtras("Roaring Skill", "off", toggles, "Skill")}
                {renderExtras("Magic / Gravity Skill", "off", toggles, "Skill")}
                {renderExtras("Fire Skill", "off", toggles, "Skill")}
                {renderExtras("Lightning Skill", "off", toggles, "Skill")}
                {renderExtras("Holy Skill", "off", toggles, "Skill")}
            </div>
        </div>
    )
}

function renderStat(type, variety, toggles, extras=false){
    // Style Stuff
    let color = "white"
    let caption = ""
    if (variety === "off"){
        color = graceGiven
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
    if ((type === "Skill" || type === "Sorceries" || type === "Incantations" || type === "Consumables") && !isMobile){
        caption = caption + " (Expand)"
    }
    let cardStyle = {
        border: '1px solid black', display: 'flex', 
        flexDirection: 'row', flex: 3, 
        backgroundColor: gloomGlow, padding: 5,
        justifyContent: 'space-between'
    }




    if (extras){
        return(
            <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0}} onClick={() => {setExpandedStat(type)}}>
                <div style={cardStyle}>
                    <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-start'}}>
                        {type} {caption} - 
                    </p>
                    <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-end'}}>{
                        determineRenderedValue(type, variety, toggles)}
                    </p>
                </div>
            </OstCard>
        )
    }
    return(
        <OstCard noShadow={true} rounded={false} style={{padding: 0, margin: 0}}>
            <div style={cardStyle}>
                <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-start'}}>
                    {type} {caption} - 
                </p>
                <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-end'}}>{
                    determineRenderedValue(type, variety, toggles)}
                </p>
            </div>
        </OstCard>
    )
}

function renderExtras(type, variety, toggles, expandedType){
    if (expandedStat === expandedType){
        // Style Stuff
        let color = "white"
        let caption = ""
        if (variety === "off"){
            color = graceGiven
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
        let cardStyle = {
            border: '1px solid black', display: 'flex', 
            flexDirection: 'row', flex: 3, 
            backgroundColor: gloomGlow, padding: 5,
            justifyContent: 'space-between'
        }
        return(
            <OstCard noShadow={true} rounded={false} style={cardStyle}>
                <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-start'}}>
                    {type} {caption} - 
                </p>
                <p style={{display: 'flex', color: color, fontSize: 13, margin: 0, alignSelf: 'flex-end'}}>{
                    determineRenderedValue(type, variety, toggles)}
                </p>
            </OstCard>
        )
    }
}

// VITALS //
function renderVitals(all_relic_effects){
    return(
        <div style={{
            display: 'flex', flexDirection: isMobile ? 'column' : 'row',
            border: '2px solid', borderColor: greyOfNight
        }}>
            {renderBars(all_relic_effects)}
            {renderAttributes()}
        </div>
    )
}

function renderAttributes(){
    return(
        <OstCard noShadow={true} rounded={false} style={{flex: 7, borderLeft: '2px solid', borderColor: greyOfNight, padding: 0}}>
            <div style={{display: 'flex', flexDirection: 'row', padding: 5}}>
                <div style={{flex: 6, paddingRight: 10}}>
                    {renderAttribute("Vigor")}
                    {renderAttribute("Endurance")}
                    {renderAttribute("Mind")}
                    {renderAttribute("Arcane")}
                </div>
                <div style={{flex: 6, paddingLeft: 10, borderLeft: '1px solid', borderColor: silverLining}}>
                    {renderAttribute("Strength")}
                    {renderAttribute("Dexterity")}
                    {renderAttribute("Intelligence")}
                    {renderAttribute("Faith")}
                </div>
            </div>
        </OstCard>
    )
}   

function renderAttribute(atr){
    let state 
    let max = .5
    let color = "grey"
    if (atr === "Strength") {
        state = str + findAttributeTypeFromEffects("str")
        max = .68
        color = "#9c2400"
    }
    else if (atr === "Dexterity") {
        state = dex + findAttributeTypeFromEffects("dex")
        max = .68
        color = "#f2970f"
    }
    else if (atr === "Vigor") {
        state = vigor + findAttributeTypeFromEffects("vigor")
        max = .70
        color = "#f2463a"
    }
    else if (atr === "Endurance") {
        state = end + findAttributeTypeFromEffects("end")
        max = .45
        color = "#68ad28"
    }
    else if (atr === "Intelligence") {
        state = intl + findAttributeTypeFromEffects("intl")
        max = .72
        color = "#0352ff"
    }
    else if (atr === "Faith") {
        state = fai + findAttributeTypeFromEffects("fai")
        max = .72
        color = graceGiven
    }
    else if (atr === "Mind") {
        state = mind + findAttributeTypeFromEffects("mind")
        max = .45
        color = "#a510e6"
    }
    else if (atr === "Arcane") {
        state = arcane + findAttributeTypeFromEffects("arcane")
        max = .60,
        color = "#87174f"
    }


    return (
        <div>
            {renderBar(atr, state, max, color)}
        </div>
    )
}

function renderBars(all_relic_effects){
    let hpVal = hp + findVitalsMods("HP")
    console.log(hpVal)
    let fpVal = fp + findVitalsMods("FP")
    let stamVal = stam + findVitalsMods("Stam")
    return(
        <div style={{flex: 5}}>
            <div style={{width: '90%', marginTop: '6%'}}>
            {renderBar(
                "HP", 
                return_modified_vital("HP", hpVal, all_relic_effects),
                17.5, 
                'red'
            )}
            {renderBar(
                "FP", 
                return_modified_vital("FP", fpVal, all_relic_effects),
                2.5, 
                'cyan'
            )}     
            {renderBar(
                "Stam", 
                return_modified_vital("Stam", stamVal, all_relic_effects),
                2.5, 
                'lime'
            )}
            </div>
        </div>
    )
}

function renderBar(title, value, max, color){
    if (title.length > 5){
        title = `${title[0]}${title[1]}${title[2]}`
    }

    return(
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', gap: 10, padding: 2, }}>
                <p style={{flex: 3, alignSelf: 'flex-start', textAlign: 'center', ...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: color}}>{title}</p>
                <div style={{flex: 9, backgroundColor: greyOfNight, marginTop: 2, marginBottom: 2}}>
                    <div style={{backgroundColor: color, height: '100%', width: `${(value / max)}%`, display: "flex", justifyContent: 'center'}} >
                        {(value > 2) ? value : 2}
                    </div>
                </div>
            </div>
    )
}

// RELIC MODAL //
function renderRelicModal(){
    const nonMobileStyle={
        backgroundColor: nightShade,
        width: '50%', marginLeft: '20%', minWidth: 300,
        height: '82%', marginTop: '0%', minHeight: 220,
        borderRadius: 20, borderColor: silveredNight
    }
    const mobileStyle={
        backgroundColor: nightShade,
        width: '85%', marginLeft: '-5%', minWidth: 300,
        height: '82%', marginTop: '0%', minHeight: 220,
        borderRadius: 20, borderColor: silveredNight
    }
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
        content: (isMobile ? mobileStyle : nonMobileStyle)
        }}
        >
            <RelicsModal 
                selectEffect={handleChangeEffect} 
                isMobile={isMobile} 
                closeModal={closeModal} 
                nightfarer={nightfarer} 
                isDeep={deepDisplayed}
                isCursed={cursedModal}
            />
        </ReactModal>
    )
}

function renderCredits(pos){
    if (!isMobile && pos === "bottom"){
        return(
            <div style={{alignSelf: 'flex-end', marginTop: 90, flex: 1, display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 8}}>
                    <p style={{...Styles.Fonts.basicX, color: silverLining}}>
                        Credits for Relic Effects and Nightfarer Negations <a style={{color: graceGiven}} href="https://docs.google.com/spreadsheets/d/1meXOw4jR1hh7YXVMeijWwSDIXnCw6Tk4hTZPq2qvyK4/edit?gid=1078794188#gid=1078794188">HERE</a>
                    </p>
                    <p style={{...Styles.Fonts.basicX, color: silverLining}}>
                        Credits for Nightfarer Attributes <a style={{color: graceGiven}} href="https://eldenringnightreign.wiki.fextralife.com/Nightfarers+(Classes)">HERE</a>
                    </p>
                </div>
                <div style={{flex: 4}}>
                    <OstCard style={{backgroundColor: silveredNight, height: '100%', width: '60%', marginLeft: '20%', fontSize: 30, textAlign: 'center', paddingBottom: 0, marginBottom: 0}}
                        onClick={() => {
                            window.open(
                              "https://www.reddit.com/r/Nightreign/comments/1ppvb4w/build_calculator_released/",
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }}
                    >
                        Bugs or Comments? Post Here
                    </OstCard>
                </div>
            </div>
        )
    }
    else if (isMobile && pos === "top"){
        return(
            <div style={{alignSelf: 'flex-end', marginTop: 0, flex: 1, display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 8}}>
                    <p style={{...Styles.Fonts.basicX, color: silverLining}}>
                        Credits for Relic Effects and Nightfarer Negations <a style={{color: graceGiven}} href="https://docs.google.com/spreadsheets/d/1meXOw4jR1hh7YXVMeijWwSDIXnCw6Tk4hTZPq2qvyK4/edit?gid=1078794188#gid=1078794188">HERE</a>
                    </p>
                    <p style={{...Styles.Fonts.basicX, color: silverLining}}>
                        Credits for Nightfarer Attributes <a style={{color: graceGiven}} href="https://eldenringnightreign.wiki.fextralife.com/Nightfarers+(Classes)">HERE</a>
                    </p>
                </div>
                <div style={{flex: 4}}>
                    <OstCard style={{backgroundColor: silveredNight, height: '80%', width: '60%', marginLeft: '20%', fontSize: 20, textAlign: 'center', paddingBottom: 0, marginBottom: 0}}
                        onClick={() => {
                            window.open(
                              "https://www.reddit.com/r/Nightreign/comments/1ppvb4w/build_calculator_released/",
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }}
                    >
                        Bugs or Comments? Post Here
                    </OstCard>
                </div>
            </div>
        )
    }
}

///////////////
// Functions //
///////////////

function handleRelicEffectClick(key, cons){
    setCurrentEditNum(key)
    setCursedModal(cons)
    clearEffect(key)
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

    else if (currentEditNum === "41"){
        setEffect41(effect)
    }
    else if (currentEditNum === "42"){
        setEffect42(effect)
    }
    else if (currentEditNum === "43"){
        setEffect43(effect)
    }

    else if (currentEditNum === "51"){
        setEffect51(effect)
    }
    else if (currentEditNum === "52"){
        setEffect52(effect)
    }
    else if (currentEditNum === "53"){
        setEffect53(effect)
    }

    else if (currentEditNum === "61"){
        setEffect61(effect)
    }
    else if (currentEditNum === "62"){
        setEffect62(effect)
    }
    else if (currentEditNum === "63"){
        setEffect63(effect)
    }


    else{
        console.warn("Nope... ",  currentEditNum)
    }
    setRelicsModal(false)
}

function clearEffect(key){
    if (key === "11"){
        setEffect11(false)
    }
    else if (key === "12"){
        setEffect12(false)
    }
    else if (key === "13"){
        setEffect13(false)
    }

    else if (key === "21"){
        setEffect21(false)
    }
    else if (key === "22"){
        setEffect22(false)
    }
    else if (key === "23"){
        setEffect23(false)
    }

    else if (key === "31"){
        setEffect31(false)
    }
    else if (key === "32"){
        setEffect32(false)
    }
    else if (key === "33"){
        setEffect33(false)
    }
    else if (key === "41"){
        setEffect41(false)
    }
    else if (key === "42"){
        setEffect42(false)
    }
    else if (key === "43"){
        setEffect43(false)
    }

    else if (key === "51"){
        setEffect51(false)
    }
    else if (key === "52"){
        setEffect52(false)
    }
    else if (key === "53"){
        setEffect53(false)
    }

    else if (key === "61"){
        setEffect61(false)
    }
    else if (key === "62"){
        setEffect62(false)
    }
    else if (key === "63"){
        setEffect63(false)
    }


    else{
        console.warn("Nope... ",  key)
    }
}

function clearRelic(key){
    if (key === 1){
        setEffect11(false)
        setEffect12(false)
        setEffect13(false)
    }
    else if (key === 2){
        setEffect21(false)
        setEffect22(false)
        setEffect23(false)
    }
    else if (key === 3){
        setEffect31(false)
        setEffect32(false)
        setEffect33(false)
    }

    else if (key === 4){
        setEffect41(false)
        setEffect42(false)
        setEffect43(false)
    }
    else if (key === 5){
        setEffect51(false)
        setEffect52(false)
        setEffect53(false)
    }
    else if (key === 6){
        setEffect61(false)
        setEffect62(false)
        setEffect63(false)
    }

}

function getBaseNegations(){
    let bases = determineBaseNegations(nightfarer)
    return bases
}

function determineRenderedValue(type, variety, toggles){

    // NEGATIONS
    if (variety === "neg"){
        let negationBases = getBaseNegations(nightfarer)
        if (type === "Physical"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.phys) * 100).toFixed(0)}%`
        }
        else if (type === "Slash"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.slash) * 100).toFixed(0)}%`
        }
        else if (type === "Strike"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.strike) * 100).toFixed(0)}%`
        }
        else if (type === "Thrust"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.thrust) * 100).toFixed(0)}%`
        }
        else if (type === "Magic"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.magic) * 100).toFixed(0)}%`
        }
        else if (type === "Fire"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.fire) * 100).toFixed(0)}%`
        }
        else if (type === "Lightning"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.lightning) * 100).toFixed(0)}%`
        }
        else if (type === "Holy"){
            return `${((determineDamModifier(type, variety, toggles) * negationBases.holy) * 100).toFixed(0)}%`
        }
    }

    // RESISTANCES
    else if (variety === "res"){
        let negationBases = getBaseNegations(nightfarer)
        if (type === "Poison"){
            return (negationBases.poison + findResistance(type))
        }
        else if (type === "Rot"){
            return (negationBases.rot + findResistance(type))
        }
        else if (type === "Bleed"){
            return (negationBases.bleed + findResistance(type))
        }
        else if (type === "Frostbite"){
            return (negationBases.frost + findResistance(type))
        }
        else if (type === "Sleep"){
            return (negationBases.sleep + findResistance(type))
        }
        else if (type === "Madness"){
            return (negationBases.mad + findResistance(type))
        }
        else if (type === "Blight"){
            return (negationBases.blight + findResistance(type))
        }
    }

    // DAMAGE MODIFIERS
    else if (variety === "off"){
        return `${(determineDamModifier(type, variety, toggles) * 100).toFixed(0)}%`

    }

    // POISE
    else  if (type === "Poise"){
        let negationBases = getBaseNegations(nightfarer)
        return negationBases.poise
    }
    
}

function determineDamModifier(type, relCat=false, toggles){

    // Total Damage Modifier
    let totalMod = 1

    // OFFENSIVE //
    if (relCat === "off"){
            totalMod = stack_modifiers("allDamage", totalMod, toggles)

            // Melee Damage
            if (type === "Melee") totalMod = stack_modifiers('weaponDamage', totalMod, toggles)

            // Ranged Weapon Damage
            else if (type === "Ranged"){
                let mods = findDamageTypeFromEffects("weaponDamage")
                mods.forEach(dam => {
                    if (determine_if_effect_is_active(dam, toggles)){
                        if (dam.effect.appliesRanged){
                            totalMod = totalMod * dam.effect.weaponDamage
                        }
                    }
                }) 
            }

            // Bestial Incantaions Damage 
            else if (type === "Bestial Incants"){
                totalMod = stack_modifiers('weaponDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
                totalMod = stack_modifiers('beastDamage', totalMod, toggles)
            }

            // Physical Skill Damage 
            else if (type === "Physical Skill"){
                totalMod = stack_modifiers('weaponDamage', totalMod, toggles)
                totalMod = stack_modifiers('skillDamage', totalMod, toggles)
            }
            // Finds "Physical Skill Damage Modifiers" and applies
            else if (type === "Roaring Skill"){
                totalMod = stack_modifiers('weaponDamage', totalMod, toggles)
                totalMod = stack_modifiers('skillDamage', totalMod, toggles)
                totalMod = stack_modifiers('roarDamage', totalMod, toggles)
            }

            // Magic Damage 
            else if (type === "Magic"){
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
            }

            // Magic Skill
            else if (type === "Magic / Gravity Skill"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('skillDamage', totalMod, toggles)
            }
            // Crystal Sorcery
            else if (type === "Crystalian Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('crystalDamage', totalMod, toggles)
            }
            // Carian Sorcery
            else if (type === "Carian Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('carianDamage', totalMod, toggles)
            }
            // Glintblade Sorcery
            else if (type === "Glintblade Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('glintDamage', totalMod, toggles)
            }
            // Gravity Sorcery
            else if (type === "Gravity Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('gravDamage', totalMod, toggles)
            }
            // Glintblade Sorcery
            else if (type === "Stonedigger Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('diggerDamage', totalMod, toggles)
            }
            // Standard Sorcery
            else if (type === "Standard Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorceryDamage', totalMod, toggles)
            }

    ///////////////
    // Lightning //
    ///////////////

            // Finds "Lightning Damage Modifiers" and applies
            else if (type === "Lightning"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('lightningDamage', totalMod, toggles)
            }
            // Finds "Dragon Cult Damage Modifiers" and applies
            else if (type === "Lightning Incants"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('lightningDamage', totalMod, toggles)
                totalMod = stack_modifiers('dargonCultDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
            }
            // Lightning Skill Damage 
            else if (type === "Lightning Skill"){
                totalMod = stack_modifiers('lightningDamage', totalMod, toggles)
                totalMod = stack_modifiers('skillDamage', totalMod, toggles)
            }


    //////////
    // FIRE //
    //////////

            // Finds "Fire Damage Modifiers" and applies
            else if (type === "Fire"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('fireDamage', totalMod, toggles)
            }
            // Fire Skill Damage 
            else if (type === "Fire Skill"){
                totalMod = stack_modifiers('fireDamage', totalMod, toggles)
                totalMod = stack_modifiers('skillDamage', totalMod, toggles)
            }
            // Finds "Flame Incantation Damage Modifiers" and applies
            else if (type === "Fire Incants"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('fireDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
            }
            // Finds "Giant's Fire Damage Modifiers" and applies
            else if (type === "Giant's Fire"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('fireDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
                totalMod = stack_modifiers('giantFireDamage', totalMod, toggles)
            }
            // Finds "Black Flame Damage Modifiers" and applies
            else if (type === "Black Flame"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('fireDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
                totalMod = stack_modifiers('godslayerDamage', totalMod, toggles)
            }
            // Finds "Frenzy Flame Damage Modifiers" and applies
            else if (type === "Flame of Frenzy"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('fireDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
                totalMod = stack_modifiers('frenzyDamage', totalMod, toggles)
            }

    
        //////////
        // Holy //
        //////////

            // Finds "Holy Damage Modifiers" and applies
            else if (type === "Holy"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('holyDamage', totalMod, toggles)
            }
            // Lightning Skill Damage 
            else if (type === "Holy Skill"){
                totalMod = stack_modifiers('holyDamage', totalMod, toggles)
                totalMod = stack_modifiers('skillDamage', totalMod, toggles)
            }
            // Finds "Holy Incantation Damage Modifiers" and applies
            else if (type === "Holy Incants"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('holyDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
            }
            // Finds "Fundamentalist Incantation Damage Modifiers" and applies
            else if (type === "Golden Incants"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('holyDamage', totalMod, toggles)
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
                totalMod = stack_modifiers('fundDamage', totalMod, toggles)
            }



            // Finds "Skill Damage Modifiers" and applies
            else if (type === "Skill"){
                totalMod = stack_modifiers('skillDamage', totalMod, toggles)
            }
            // Finds "Crit Damage Modifiers" and applies
            else if (type === "Critical"){
                totalMod = stack_modifiers('critDamage', totalMod, toggles)
                totalMod = stack_modifiers('weaponDamage', totalMod, toggles)
            }
            // Finds "Guard Counter Damage Modifiers" and applies
            else if (type === "Counter"){
                let weaponDams = findDamageTypeFromEffects("counterDamage")
                weaponDams.forEach(dam => {
                    totalMod = totalMod * dam.effect.counterDamage
                })
                totalMod = stack_modifiers('weaponDamage', totalMod, toggles)
            }

    }

    /// NEGATIONS //
    else if (relCat === "neg"){

        // Finds All Negations and Applies
        totalMod = stack_modifiers('allNegation', totalMod, toggles)   

        // Finds "Physical Damage Modifiers" and applies
        if (type === "Physical"){
            totalMod = stack_modifiers('physNegation', totalMod, toggles)
        }
        // Finds "Holy Damage Modifiers" and applies
        if (type === "Holy"){
            totalMod = stack_modifiers('holyNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
        // Finds "Holy Damage Modifiers" and applies
        else if (type === "Fire"){
            totalMod = stack_modifiers('fireNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
        // Finds "Magic Damage Modifiers" and applies
        else if (type === "Magic"){
            totalMod = stack_modifiers('magicNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
        // Finds "Magic Damage Modifiers" and applies
        else if (type === "Lightning"){
            totalMod = stack_modifiers('lightningNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
    }
   
    return totalMod
}

function findDamageTypeFromEffects(type){
    return all_relic_effects.filter(eff => {
        if (eff.effect[type]){
            return eff
        }
    })
}

function findPercentEffectFromEffects(type, all_relic_effects){
    if (!all_relic_effects || all_relic_effects.length < 1){
        return 1
    }
    return all_relic_effects.filter(eff => {
        if (eff.selfType === "statPercent"){
            if (eff.effect[type]){
                return eff.effect[type]
            }
        }
    })
}

function findAttributeTypeFromEffects(attr){
    let mods =  all_relic_effects.filter(eff => {
        if (eff.effect[attr]){
            return eff.effect[attr]
        }
    })
    if (mods?.length > 0){
        let totalMod = 0
        mods.forEach((eff) => {
            totalMod = totalMod + eff.effect[attr]
        })
        return(totalMod)
    }
    else{
        return 0
    }
}

function findVitalsMods(vital){
    if (vital === "HP"){
        return findAttributeTypeFromEffects("vigor") * 20
    }
    else if (vital === "FP"){
        return findAttributeTypeFromEffects("mind") * 5
    }
    else if (vital === "Stam"){
        return findAttributeTypeFromEffects("end") * 2
    }
}

function findResistance(type){
    let totalMod = 0
    if (type === "Poison"){
        let resMods = findDamageTypeFromEffects("poisonRes")
        resMods.forEach(dam => {
            totalMod = totalMod + dam.effect.poisonRes
        })
    }
    else if (type === "Rot"){
        let resMods = findDamageTypeFromEffects("rotRes")
        resMods.forEach(dam => {
            totalMod = totalMod + dam.effect.rotRes
        })
    }
    else if (type === "Sleep"){
        let resMods = findDamageTypeFromEffects("sleepRes")
        resMods.forEach(dam => {
            totalMod = totalMod + dam.effect.sleepRes
        })
    }
    else if (type === "Frostbite"){
        let resMods = findDamageTypeFromEffects("frostRes")
        resMods.forEach(dam => {
            totalMod = totalMod + dam.effect.frostRes
        })
    }
    else if (type === "Bleed"){
        let resMods = findDamageTypeFromEffects("bleedRes")
        resMods.forEach(dam => {
            totalMod = totalMod + dam.effect.bleedRes
        })
    }
    else if (type === "Madness"){
        let resMods = findDamageTypeFromEffects("madRes")
        resMods.forEach(dam => {
            totalMod = totalMod + dam.effect.madRes
        })
    }
    else if (type === "Blight"){
        let resMods = findDamageTypeFromEffects("deathRes")
        resMods.forEach(dam => {
            totalMod = totalMod + dam.effect.deathRes
        })
    }
    return totalMod
}

function findConditions(){
    let objOfToggles = {}
    all_relic_effects.forEach(eff => {
        if (!eff.effect.always){
            if (eff.effect.condition){
                if (objOfToggles[eff.effect.condition] === null || objOfToggles[eff.effect.condition] === undefined){
                    if (eff.effect.conditionCounter){
                        objOfToggles[eff.effect.condition] = 0
                    }
                    else{
                        objOfToggles[eff.effect.condition] = true
                    }
                }
            }
        }
    })
    set_relic_effect_toggles(objOfToggles) 
}

function determine_if_effect_is_toggled(effect, toggles){
    toggles = (toggles === {} ? false : toggles)
    if (!effect.effect.always){
        if (toggles){
            if (toggles[effect.effect.condition]){
                return true 
            }
            else{
                return false
            }
        }
    }
    return true
}

function determine_if_effect_is_active(effect){
    if (effect.active){
        return true
    }
    return false
}

function handleEffectState(effect, all, types){
    if (effect) {
        if (!effect.stacks.selfType){
            let selfType = effect.selfType
            if (types.includes(selfType)){
                all.push({...effect, active: false});
            }
            else{
                all.push({...effect, active: true});
            }
        }
        else{
            all.push({...effect, active: true});
            types.push(effect.selfType);
        }
    }
    return [all, types]
}

function stack_modifiers(key, totalMod, toggles){
    let mods = findDamageTypeFromEffects(key)
    mods.forEach(dam => {
        if (determine_if_effect_is_toggled(dam, toggles)){
            if (dam.effect.conditionCounter){
                let mod = (( (dam.effect[key] - 1) * toggles[dam.effect.condition] ) + 1)
                console.log(mod)
                totalMod = totalMod * mod
            }
            else if (determine_if_effect_is_active(dam)){
                totalMod = totalMod * dam.effect[key]
            }  
        }
    })  
    return totalMod
}

function closeModal(){
    setRelicsModal(false)
}

function return_modified_vital(vital, vitalVal, all_relic_effects){
    let foundModifiers = findPercentEffectFromEffects(vital, all_relic_effects)
    if (foundModifiers.length > 0){
        foundModifiers.forEach(percentInc => {
            vitalVal = vitalVal * percentInc.effect[vital]
        })
    }
    return Math.round(vitalVal)
}

//////////////
// Resizing //
//////////////
    const { width } = useViewport()
    const isMobile = width < 900

    useEffect(() => {
        const prev = document.body.style.backgroundColor
        document.body.style.backgroundColor = depthColor
    
        return () => {
        document.body.style.backgroundColor = prev
        }
    }, [])


  function useViewport() {
    const [width, setWidth] = useState(null) // start with null, server-safe
  
    useEffect(() => {
      // This runs only on the client
      const handleResize = () => setWidth(window.innerWidth)
  
      handleResize() // set initial width
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return { width }
  }


/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: 20, backgroundColor: depthColor,  minHeight: '100vh', boxSizing: 'border-box', width: '100%', flex: 1, justifyContent: 'space-between'}}>
        {renderCredits("top")}
        <div style={{flex: 11}}>
            {renderRelicModal()}
            {renderSelectionsContainer(relics_effect_toggles, all_relic_effects)}
        </div>
        {renderCredits("bottom")}
    </div>
)
}