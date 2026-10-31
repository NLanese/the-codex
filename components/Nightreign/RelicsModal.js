
// React
import React, {useEffect, useState} from "react";

// Styles 
import Styles from "../../styles/styles";

// Ostrich
import { OstCard } from "@ostrich_development/ostrich-components";
import { OstrichTabBar } from "@ostrich_development/ostrich-components";
import { FormMultipleChoice } from "@ostrich_development/ostrich-components";

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

// Weapons 
import defensive_weapon_passives from "../../constants/projects/nightreign/passives/defensive_weapon";
import stat_weapon_passives from "../../constants/projects/nightreign/passives/stat_weapons";
import offensive_weapon_passives from "../../constants/projects/nightreign/passives/offensive_weapon";

export default function RelicsModal({
    selectEffect,
    selectWeaponEffect,
    isMobile, 
    closeModal,
    nightfarer,
    isDeep,
    isCursed,
    isWeapons
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

// On Init
useEffect(() => {
    setEffectCat("All")
}, [])

// Chnages Relics Shown in Filters
useEffect(() => {
    setSearch("")

    // All
    if (effectCat === "All"){
        if (isWeapons){
            setSelectedList([...offensive_weapon_passives, ...defensive_weapon_passives, ...stat_weapon_passives])
            setFilteredEffects([...offensive_weapon_passives, ...defensive_weapon_passives, ...stat_weapon_passives])
        }
        else if (isDeep){
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
        if (isWeapons){
            setSelectedList(offensive_weapon_passives)
            setFilteredEffects(offensive_weapon_passives)
        }
        else if (isDeep){
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
        if (isWeapons){
            setSelectedList(defensive_weapon_passives)
            setFilteredEffects(defensive_weapon_passives)
        }
        else if (isDeep){
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
        if (isWeapons){
            setSelectedList(stat_weapon_passives)
            setFilteredEffects(stat_weapon_passives)
        }
        else if (isDeep){
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

// On Searchbar Type Input
useEffect(() => {
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
    if (filteredEffects.length === 0){
        return (
            <p style={{color: traceNight, fontSize: 15, padding: '12px 4px'}}>
                {search ? `No effects match "${search}". Try a shorter search or another category.` : "No effects in this category."}
            </p>
        )
    }
    return filteredEffects.map(eff => {
        return(
            <button key={eff.title} type="button" onClick={() => determineChange(eff)}
            style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, width: '100%', textAlign: 'left',
                padding: isMobile ? '10px 10px' : '12px 14px', marginBottom: 6, cursor: 'pointer',
                fontFamily: 'inherit', borderRadius: 10,
                border: `1px solid ${gloomGlow}`, backgroundColor: depthColor,
            }}
            >
                <div style={{flex: 1, minWidth: 0}}>
                    <div style={{color: silverLining, fontSize: isMobile ? 15 : 17, fontWeight: 600, lineHeight: 1.25}}>
                        {eff.title}
                    </div>
                    <div style={{color: traceNight, fontSize: isMobile ? 12.5 : 14, lineHeight: 1.4, marginTop: 3}}>
                        {eff.desc}
                    </div>
                </div>
                {renderCanStack(eff)}
            </button>
        )
    })
}

function renderCanStack(eff){
    let text = "Doesn't stack"
    let color = frenzyTouched
    if (eff.stacks.self){
        text = "Stacks with itself"
        color = graceGiven
    }
    else if (!eff.stacks.self && eff.stacks.selfType){
        text = "Stacks with similar"
        color = silverLining
    }
    return (
        <span style={{
            flexShrink: 0, fontSize: 12, color: color, whiteSpace: 'nowrap',
            border: `1px solid ${color}`, borderRadius: 999, padding: '2px 8px', marginTop: 2,
        }}>
            {text}
        </span>
    )
}

function renderOptions(){
    if (isWeapons){
        return(
            <OstrichTabBar
            startingTabByTitle="All"
            style={{width: '80%', marginLeft: '10%', marginBottom: 10}}
            tabs={["All", "Offensive", "Defensive", "Stat Changes"]}
            onTabClick={(tab) => setEffectCat(tab)}
            />
        )
    }
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
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 10}}>
            <h2 style={{margin: 0, color: graceGiven, fontSize: isMobile ? 20 : 24, fontWeight: 600}}>
                {isWeapons ? "Choose a weapon passive" : "Choose an effect"}
            </h2>
            <button type="button" onClick={() => closeModal()} style={{
                background: 'none', border: `1px solid ${gloomGlow}`, borderRadius: 8, cursor: 'pointer',
                color: silverLining, fontFamily: 'inherit', fontSize: 14, padding: '5px 12px',
            }}>
                Close
            </button>
        </div>
    )
}

///////////////
// Functions //
///////////////

function determineChange(eff){
    if (isWeapons){
        console.log("Changing Weapon Effect")
        selectWeaponEffect(eff)
    }
    else{
        selectEffect(eff)
    }
}

/////////////////
// Main Return //
/////////////////
if (isCursed){
    return (
        <div>
            {renderTitle()}
            <p style={{color: silverLining, fontSize: 17}}>Curse effects aren't in the calculator yet. Check back for updates.</p>
        </div>
    )
}
    return(
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <div style={{flexShrink: 0}}>
                {renderTitle()}
                {renderOptions()}
                <input type="search" placeholder="Search effects" aria-label="Search effects"
                    onChange={(e) => setSearch(e.target.value)} value={search}
                    style={{
                        width: '100%', boxSizing: 'border-box', margin: '4px 0 12px', padding: '8px 12px',
                        borderRadius: 8, border: `1px solid ${gloomGlow}`, backgroundColor: depthColor,
                        color: silverLining, fontFamily: 'inherit', fontSize: 15,
                    }}
                />
            </div>
            <div style={{overflowY: 'auto', overflowX: 'hidden', flex: 1, minHeight: 0, paddingRight: 4}}>
                {renderFilteredEffects()}
            </div>
        </div>
    )
}
