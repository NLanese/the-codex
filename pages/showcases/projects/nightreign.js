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

// Nighteign Functions
import determineBaseVitals from "../../../constants/projects/nightreign/nightfarers/determineBaseVitals";

// Nightreign Components
import RelicsModal from "../../../components/Nightreign/RelicsModal";
import BasePlayerSelections from "../../../components/Nightreign/BasePlayerSelections";
import StatSheet from "../../../components/Nightreign/StatSheet";

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
    setDirectory("Nightreign")

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
                <BasePlayerSelections 
                _nightfarer={nightfarer} _lvl={lvl} _selectionState={selectionState}
                setNightfarer={setNightfarer} setLvl={setLvl} setSelectionState={setSelectionState}
                isMobile={isMobile}
                />
                {renderSelections(deepDisplayed)}
            </div>
            {/* <div style={{flex: 7, backgroundColor: nightShade, height: 600}}>
                {renderVitals(all_relic_effects)}
                {renderStats(toggles)}
            </div> */}
            <StatSheet nightfarer={nightfarer} all_relic_effects={all_relic_effects} toggles={toggles} isMobile={isMobile}
            hp={hp} fp={fp} stam={stam} vigor={vigor} end={end} dex={dex} str={str} intl={intl} fai={fai} mind={mind} arcane={arcane}
            />
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
                    <OstCard style={{backgroundColor: silveredNight, height: '50%', width: '60%', marginLeft: '20%', fontSize: 20, textAlign: 'center', paddingBottom: 0, marginBottom: 0}}
                        onClick={() => {
                            window.open(
                              "https://www.reddit.com/r/Nightreign/comments/1ppvb4w/build_calculator_released/",
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }}
                    >
                        <p style={{margin: 0, padding: 0}}>
                            Bugs or Comments? Post Here
                        </p>
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

function closeModal(){
    setRelicsModal(false)
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