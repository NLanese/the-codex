
// React
import React, {useEffect, useState} from "react";

// Styles 
import Styles from "../../styles/styles";

// Ostrich
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar"
import { FormMultipleChoice } from "../../OstrichComponents/Forms/FormMultipleChoice";

// Relics
import offensiveRelics from "../../constants/projects/nightreign/relics/offensiveRelics";
import deepOffensiveRelics from "../../constants/projects/nightreign/relics/deep_relics/offensiveRelics";

import defensiveRelics from "../../constants/projects/nightreign/relics/defensiveRelics";
import deepDefensiveRelics from "../../constants/projects/nightreign/relics/deep_relics/defensiveRelics";

import regenRelics from "../../constants/projects/nightreign/relics/regenRelics";
import regenDeepRelics from "../../constants/projects/nightreign/relics/deep_relics/regenRelics";

import statRelics from "../../constants/projects/nightreign/relics/statRelics";
import deepStatRelics from "../../constants/projects/nightreign/relics/deep_relics/statRelics";

import miscRelics from "../../constants/projects/nightreign/relics/miscRelics";

import characterRelics from "../../constants/projects/nightreign/relics/characterRelics";

export default function RelicsModal({
    selectEffect,
    isMobile, 
    closeModal,
    nightfarer,
    isDeep,
    isCursed
}) {

///////////
// State //
///////////

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

const [effectCat, setEffectCat] = useState()
const [search, setSearch] = useState("")
const [selectedList, setSelectedList] = useState([])
const [filteredEffects, setFilteredEffects] = useState([])

useEffect(() => {
    setEffectCat("All")
}, [])

useEffect(() => {
    setSearch("")

    // All
    if (effectCat === "All"){
        if (isDeep){
            setSelectedList([
                ...offensiveRelics, ...deepOffensiveRelics, 
                ...defensiveRelics, ...deepDefensiveRelics,
                ...regenRelics, ...regenDeepRelics,
                ...statRelics, 
                ...miscRelics
            ])
            setFilteredEffects([
                ...offensiveRelics, ...deepOffensiveRelics, 
                ...defensiveRelics, ...deepDefensiveRelics,
                ...regenRelics, ...regenDeepRelics,
                ...statRelics, 
                ...miscRelics
            ])
        }
        else{
            setSelectedList([...offensiveRelics, ...defensiveRelics, ...regenRelics, ...statRelics, ...miscRelics])
            setFilteredEffects([...offensiveRelics, ...defensiveRelics, ...regenRelics, ...statRelics, ...miscRelics])
        }
    }

    // Offensive 
    if (effectCat === "Offensive" || effectCat === "Off" ){
        if (isDeep){
            setSelectedList([...offensiveRelics, ...deepOffensiveRelics])
            setFilteredEffects([...offensiveRelics, ...deepOffensiveRelics])
        }
        else{
            setSelectedList(offensiveRelics)
            setFilteredEffects(offensiveRelics)
        }
    }

    // Defensive
    else if (effectCat === "Defensive" || effectCat === "Def" ){
        if (isDeep){
            setSelectedList([...defensiveRelics, ...deepDefensiveRelics])
            setFilteredEffects([...defensiveRelics, ...deepDefensiveRelics])
        }
        else{
            setSelectedList(defensiveRelics)
            setFilteredEffects(defensiveRelics)
        }
    }

    // Regen
    else if (effectCat === "Regenerative" || effectCat === "Regen" ){
        if (isDeep){
            setSelectedList([...regenRelics, ...regenDeepRelics])
            setFilteredEffects([...regenRelics, ...regenDeepRelics])
        }
        else{
            setSelectedList(regenRelics)
            setFilteredEffects(regenRelics)
        }
    }

    // Stat Changes
    else if (effectCat === "Stat Changes"){
        if (isDeep){
            setSelectedList([...statRelics, ...deepStatRelics])
            setFilteredEffects([...statRelics, ...deepStatRelics])
        }
        else{
            setSelectedList(statRelics)
            setFilteredEffects(statRelics)
        }
    }

    // Character
    else if (effectCat === "Character"){
        let applicable = [...characterRelics].filter(rel => {
            if (rel.nightfarer === nightfarer){
                return rel
            }
            else{
                return false
            }
        })
        setSelectedList(applicable)
        setFilteredEffects(applicable)
    }

    // Misc
    else if (effectCat === "Misc"){
        setSelectedList(miscRelics)
        setFilteredEffects(miscRelics)
    }


}, [effectCat])

useEffect(() => {
    console.log(search)
    if (search === ""){
        setFilteredEffects([...selectedList])
    }
    else{
        let newList = selectedList.filter(eff => {
        if (eff.title.toUpperCase().includes(search.toUpperCase())){
            return eff
        }
    })
    setFilteredEffects([...newList])
    }   
}, [search])


////////////////
// Renderings //
////////////////
function renderFilteredEffects(){
    return filteredEffects.map(eff => {
        return(
            <OstCard noShadow={true} rounded={false} onClick={() => selectEffect(eff)}
            style={{
            border: "1px solid black", backgroundColor: traceNight,
            padding: 0, paddingLeft: 10, 
            display: 'flex', flexDirection: 'row'}}
            >
                <div style={{display: 'flex', flexDirection: 'column', flex: 10}}>
                    <p style={{...Styles.Fonts.basicX, marginBottom: 0, fontSize: isMobile ? 16 : 22,}}>
                        {eff.title}
                    </p>
                    <p style={{...Styles.Fonts.basic, fontSize: isMobile ? 12 : 14, marginTop: 0}}>
                        {eff.desc}
                    </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', flex: 2, fontSize: 12}}>
                    {renderCanStack(eff)}
                </div>
                
            </OstCard>
        )
    })
}

function renderCanStack(eff){
    if (eff.stacks.self){
        return <p style={{color: graceGiven, backgroundColor: nightShade, padding: 5, marginRight: 5}}>Stacks with self</p>
    }
    else if (!eff.stacks.self && eff.stacks.selfType){
        return<p style={{color: silverLining, backgroundColor: nightShade, padding: 5, marginRight: 5}}>Stacks with similar type</p>
    }
    else{
        return <p style={{color: frenzyTouched, backgroundColor: nightShade, padding: 5, marginRight: 5}}>Does not stack</p>
    }
}

function renderOptions(){
    if (isMobile){
        return(
            <FormMultipleChoice
                titleStyle={{marginBottom: 0, paddingBottom: 0, backgroundColor: gloomGlow, padding: 2.5, paddingLeft: 5, color: graceGiven}}
                itemsPerRow={7}
                inForm={false}
                onChange={(op) => {
                    setEffectCat(op.value[0])
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: ["All", "Off", "Def", "Regen", "Stat Changes", "Character", "Misc"],
                }}
                inputValue={selectedList}
                fieldTextStyle={{padding: 0, margin: 0, fontSize: 10}}
                value="All"
            />
        )
    }
    else{
        return(
            <OstrichTabBar
            startingTabByTitle="All"
            style={{width: '80%', marginLeft: '10%', marginBottom: 10}}
            tabs={["All", "Offensive", "Defensive", "Regenerative", "Stat Changes", "Character", "Misc"]}
            onTabClick={(tab) => setEffectCat(tab)}
            />
        )
    }
}

function renderTitle(){
    if (isMobile){
        return(
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '60%',  alignItems: 'center'}}>
                <p style={{...Styles.Fonts.h2, margin: 0, color: graceGiven}}>Select an Effect</p>
                <OstCard noShadow={true} style={{
                    color: frenzyTouched, backgroundColor: depthColor, 
                    padding: 4, margin: 0, flex: 2.5, height: 40,
                    textAlign: 'center', dispklay: 'flex',
                    justifyContent: 'center', alignContent: 'center'
                }} onClick={() => closeModal()}>
                    CLOSE
                </OstCard>
            </div>
        )
    }
    else{
        return <p style={{...Styles.Fonts.h2, margin: 0, color: graceGiven}}>Select an Effect</p>
    }
}

///////////////
// Functions //
///////////////


/////////////////
// Main Return //
/////////////////
if (isCursed){
    if (isMobile){
        return (
            <div>
                <p style={{...Styles.Fonts.basicXL, color: silverLining}}>Cursed Relic Effectcs coming soon</p>
                <OstCard noShadow={true} style={{
                color: frenzyTouched, backgroundColor: depthColor, 
                padding: 4, margin: 0, wisth: 120, height: 40,
                textAlign: 'center', dispklay: 'flex',
                justifyContent: 'center', alignContent: 'center'
                }} onClick={() => closeModal()}>
                    CLOSE
                </OstCard>
            </div>
        )
    }
    return(
        <p style={{...Styles.Fonts.basicXL, color: silverLining}}>Cursed Relic Effectcs coming soon</p>
    )
}
    return(
        <div style={{height: '100%', paddingBottom: 10}}>
            <div style={{height: '20%'}}>
                <div>
                    {renderTitle()}
                </div>
                    {renderOptions()}
                <div style={{marginLeft: '10%', display: 'flex', flexDirection: 'row'}}>
                    <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: silverLining}}>Search for Effect: </p>
                    <input style={{width: '62%'}} onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            
            <div style={{overflowY: 'auto', overflowX: 'hidden', marginTop: isMobile ? '20%' : 5, height: isMobile ? "65%" : '80%'}}>
                {renderFilteredEffects()}
            </div>
        </div>
    )
}