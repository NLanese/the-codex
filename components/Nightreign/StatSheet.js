import React, {useEffect, useState, useRef} from "react";
import Styles from "../../styles/styles";

import { OstCard } from "@ostrich_development/ostrich-components";
import { OstrichTabBar } from "@ostrich_development/ostrich-components";
import {
    panelStyle, SectionLabel, boostColor, penaltyColor, neutralColor,
} from "./nightreignTheme";
import determineBaseNegations from "../../constants/projects/nightreign/nightfarers/determineBaseNegations";

export default function StatSheet({
    nightfarer, all_relic_effects,
    toggles, isMobile, hp, fp, stam,
    vigor, end, dex, str, intl, fai, mind, arcane,
}){
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
const scarletRot = '#754142'
const traceNight = '#9b9fbf'


///////////
// State //
///////////

const [expandedStat, setExpandedStat] = useState(false)


///////////////
// Rendering //
///////////////

// Stats and Vitals
function renderVitals(all_relic_effects){
    return(
        <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '5fr 7fr',
            gap: isMobile ? 4 : 24,
        }}>
            {renderBars(all_relic_effects)}
            {renderAttributes()}
        </div>
    )
}

// Renders Nightfarer Attributes
function renderAttributes(){
    return(
        <div>
            <SectionLabel>Attributes</SectionLabel>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 18}}>
                <div>
                    {renderAttribute("Vigor")}
                    {renderAttribute("Endurance")}
                    {renderAttribute("Mind")}
                    {renderAttribute("Arcane")}
                </div>
                <div>
                    {renderAttribute("Strength")}
                    {renderAttribute("Dexterity")}
                    {renderAttribute("Intelligence")}
                    {renderAttribute("Faith")}
                </div>
            </div>
        </div>
    )
}   

function renderAttribute(atr){
    let state 
    let max = .5
    let color = "grey"
    if (atr === "Strength") {
        state = str + findAttributeTypeFromEffects("str")
        max = .68
        color = "#c4471f"
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
        color = "#4f86ff"
    }
    else if (atr === "Faith") {
        state = fai + findAttributeTypeFromEffects("fai")
        max = .72
        color = graceGiven
    }
    else if (atr === "Mind") {
        state = mind + findAttributeTypeFromEffects("mind")
        max = .45
        color = "#b44cf0"
    }
    else if (atr === "Arcane") {
        state = arcane + findAttributeTypeFromEffects("arcane")
        max = .60
        color = "#c2387e"
    }

    return renderBar(atr, state, max, color)
}

// Renders Stat Bars
function renderBars(all_relic_effects){
    let hpVal = hp + findVitalsMods("HP")
    let fpVal = fp + findVitalsMods("FP")
    let stamVal = stam + findVitalsMods("Stam")
    return(
        <div>
            <SectionLabel>Vitals</SectionLabel>
            {renderBar("HP", return_modified_vital("HP", hpVal, all_relic_effects), 17.5, '#f2463a', true)}
            {renderBar("FP", return_modified_vital("FP", fpVal, all_relic_effects), 2.5, '#4fc3f7', true)}
            {renderBar("Stamina", return_modified_vital("Stam", stamVal, all_relic_effects), 2.5, '#68d12e', true)}
        </div>
    )
}

// Called Above, Renders Individual Bar (width is value / max, as a percentage)
function renderBar(title, value, max, color, large=false){
    let label = title
    if (isMobile && !large && title.length > 5){
        label = title.slice(0, 3)
    }
    const pct = Math.max(0, Math.min(100, value / max))

    return(
        <div style={{
            display: 'grid', gridTemplateColumns: large ? '62px 1fr 46px' : (isMobile ? '34px 1fr 26px' : '84px 1fr 28px'),
            alignItems: 'center', gap: 8, height: large ? 28 : 24,
        }}>
            <span style={{color: silverLining, fontSize: large ? 15 : 14}}>{label}</span>
            <div style={{height: large ? 10 : 7, backgroundColor: depthColor, borderRadius: 5, overflow: 'hidden'}}>
                <div style={{width: `${pct}%`, height: '100%', backgroundColor: color, borderRadius: 5}}/>
            </div>
            <span style={{color: silverLining, fontSize: large ? 15 : 14, textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: large ? 600 : 400}}>
                {value}
            </span>
        </div>
    )
}

function renderStats(toggles){
    const [statsShown, setStatsShown] = useState("Damage")
    if (isMobile){
        function renderList(){
            if (statsShown === "Negations"){
                return(
                    <div>
                        <SectionLabel>Damage negation</SectionLabel>
                        {renderStat("Physical", "neg", toggles)}
                        {renderStat("Slash", "neg", toggles)}
                        {renderStat("Strike", "neg", toggles)}
                        {renderStat("Thrust", "neg", toggles)}
                        {renderStat("Magic", "neg", toggles)}
                        {renderStat("Fire", "neg", toggles)}
                        {renderStat("Lightning", "neg", toggles)}
                        {renderStat("Holy", "neg", toggles)}
                        {renderStat("Poise ", "neg", toggles)}
                        {renderStat("Poise", "malenia_is_overrated_there_I_said_it", toggles)}

                        <SectionLabel>Status resistance</SectionLabel>
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
                            style={{width: '100%', marginBottom: 10}}
                            tabs={["Incantations", "Sorceries", "Skill", "Items"]}
                            onTabClick={(tab) => {setExpandedStat(tab)}}
                        />
                        {renderBreakdown(toggles)}
                    </div>
                )
            }
            return(
                <div>
                    <SectionLabel>Damage</SectionLabel>
                    {renderDamageList(toggles)}
                </div>
            )
        }
        return(
            <div>
                <OstrichTabBar
                    style={{width: '100%', marginTop: 14, marginBottom: 4}}
                    tabs={["Damage", "Negations", "Compound"]}
                    onTabClick={(tab) => {setStatsShown(tab)}}
                />
                {renderList()}
            </div>
        )
    }
    return(
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, marginTop: 6}}>
            <div>
                <SectionLabel>Damage negation</SectionLabel>
                {renderStat("Physical", "neg", toggles)}
                {renderStat("Slash", "neg", toggles)}
                {renderStat("Strike", "neg", toggles)}
                {renderStat("Thrust", "neg", toggles)}
                {renderStat("Magic", "neg", toggles)}
                {renderStat("Fire", "neg", toggles)}
                {renderStat("Lightning", "neg", toggles)}
                {renderStat("Holy", "neg", toggles)}
                {renderStat("Poise ", "neg", toggles)}
                {renderStat("Poise", "malenia_is_overrated_there_I_said_it", toggles)}

                <SectionLabel>Status resistance</SectionLabel>
                {renderStat("Poison", "res", toggles)}
                {renderStat("Sleep", "res", toggles)}
                {renderStat("Blight", "res", toggles)}
                {renderStat("Frostbite", "res", toggles)}
                {renderStat("Madness", "res", toggles)}
                {renderStat("Rot", "res", toggles)}
                {renderStat("Bleed", "res", toggles)}
            </div>
            <div>
                <SectionLabel>Damage</SectionLabel>
                {renderDamageList(toggles)}
            </div>
            <div>
                <SectionLabel>{expandedStat ? `${expandedStat} breakdown` : "Breakdown"}</SectionLabel>
                {expandedStat
                    ? renderBreakdown(toggles)
                    : <p style={{color: traceNight, fontSize: 13, lineHeight: 1.45, margin: '6px 0'}}>
                        Choose Skill, Sorceries, Incantations or Consumables to see damage for each type.
                      </p>
                }
            </div>
        </div>
    )
}

function renderDamageList(toggles){
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

function renderBreakdown(toggles){
    return(
        <div>
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

// Row label shown for each stat (sections already say Damage / Negation / Resistance)
function statLabel(type, variety){
    if (type === "Poise " && variety === "neg") return "Poise negation"
    if (type === "Poise" && variety === "off") return "Poise damage"
    return type
}

// Gold when your build raises a stat, orange when it lowers it
function valueColor(type, variety, toggles){
    let change = 0
    if (variety === "off" || variety === "neg"){
        if (type === "Poise "){
            change = stack_modifiers_ADD("poiseNeg", 0, toggles)
        }
        else{
            change = determineDamModifier(type, variety, toggles) - 1
        }
    }
    else if (variety === "res"){
        change = findResistance(type)
    }
    if (change > 0.0001) return boostColor
    if (change < -0.0001) return penaltyColor
    return neutralColor
}

function statRowStyle(clickable, selected){
    return {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
        width: '100%', boxSizing: 'border-box', minHeight: 26, padding: '3px 6px',
        borderBottom: `1px solid ${gloomGlow}`, fontFamily: 'inherit', textAlign: 'left',
        background: selected ? gloomGlow : 'transparent',
        border: 'none', borderRadius: selected ? 6 : 0,
        cursor: clickable ? 'pointer' : 'default',
    }
}

function renderStat(type, variety, toggles, extras=false){
    const label = statLabel(type, variety)
    const value = determineRenderedValue(type, variety, toggles)
    const color = valueColor(type, variety, toggles)
    const valueEl = (
        <span style={{color, fontSize: 14, fontVariantNumeric: 'tabular-nums'}}>{value}</span>
    )

    if (extras){
        const selected = expandedStat === type
        return(
            <button type="button" aria-pressed={selected} onClick={() => {setExpandedStat(type)}}
                style={{...statRowStyle(true, selected), borderBottom: `1px solid ${gloomGlow}`}}>
                <span style={{color: silverLining, fontSize: 14}}>
                    {label} {!isMobile && <span style={{color: selected ? graceGiven : traceNight}}>&rsaquo;</span>}
                </span>
                {valueEl}
            </button>
        )
    }
    return(
        <div style={{...statRowStyle(false, false), borderBottom: `1px solid ${gloomGlow}`}}>
            <span style={{color: silverLining, fontSize: 14}}>{label}</span>
            {valueEl}
        </div>
    )
}

function renderExtras(type, variety, toggles, expandedType){
    if (expandedStat === expandedType){
        return(
            <div key={type} style={{...statRowStyle(false, false), borderBottom: `1px solid ${gloomGlow}`}}>
                <span style={{color: silverLining, fontSize: 14}}>{type}</span>
                <span style={{color: valueColor(type, variety, toggles), fontSize: 14, fontVariantNumeric: 'tabular-nums'}}>
                    {determineRenderedValue(type, variety, toggles)}
                </span>
            </div>
        )
    }
}

///////////////
// Functions //
///////////////

function findAttributeTypeFromEffects(attr){
    return stack_modifiers_ADD(attr, 0, toggles)
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

function return_modified_vital(vital, vitalVal){
    vitalVal = stack_modifiers(vital, vitalVal, toggles, eff => eff.selfType === "statPercent")
    return Math.round(vitalVal)
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
        else  if (type === "Poise "){
            return `${stack_modifiers_ADD("poiseNeg", 0, toggles)}%`
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

function getBaseNegations(){
    let bases = determineBaseNegations(nightfarer)
    return bases
}

// Renders Title and Modifier for a Damage Type
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
                totalMod = stack_modifiers('weaponDamage', totalMod, toggles, dam => dam.effect.appliesRanged)
                totalMod = stack_modifiers('rangedDamage', totalMod, toggles)
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
                totalMod = stack_modifiers('stoneDamage', totalMod, toggles)
            }
            // Gravity Sorcery
            else if (type === "Gravity Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('gravDamage', totalMod, toggles)
                totalMod = stack_modifiers('stoneDamage', totalMod, toggles)
            }
            // Glintblade Sorcery
            else if (type === "Stonedigger Sorcery"){
                totalMod = stack_modifiers('affDamage', totalMod, toggles)
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
                totalMod = stack_modifiers('magicDamage', totalMod, toggles)
                totalMod = stack_modifiers('digDamage', totalMod, toggles)
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



            // Sorceries summary row (applies to all sorceries)
            else if (type === "Sorceries"){
                totalMod = stack_modifiers('sorcDamage', totalMod, toggles)
            }
            // Incantations summary row (applies to all incantations)
            else if (type === "Incantations"){
                totalMod = stack_modifiers('incantDamage', totalMod, toggles)
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
                totalMod = stack_modifiers('counterDamage', totalMod, toggles)
                totalMod = stack_modifiers('weaponDamage', totalMod, toggles)
            }

    }

    /// NEGATIONS //
    else if (relCat === "neg"){

        // Finds All Negations and Applies
        totalMod = stack_modifiers('allNeg', totalMod, toggles)   

        // Finds "Physical Damage Modifiers" and applies
        if (type === "Physical"){
            totalMod = stack_modifiers('physNeg', totalMod, toggles)
        }
        // Finds "Holy Damage Modifiers" and applies
        if (type === "Holy"){
            totalMod = stack_modifiers('holyNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNeg', totalMod, toggles)
        }
        // Finds "Holy Damage Modifiers" and applies
        else if (type === "Fire"){
            totalMod = stack_modifiers('fireNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNeg', totalMod, toggles)
        }
        // Finds "Magic Damage Modifiers" and applies
        else if (type === "Magic"){
            totalMod = stack_modifiers('magicNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNeg', totalMod, toggles)
        }
        // Finds "Magic Damage Modifiers" and applies
        else if (type === "Lightning"){
            totalMod = stack_modifiers('lightningNeg', totalMod, toggles)
            totalMod = stack_modifiers('affNeg', totalMod, toggles)
        }
        // Finds "Magic Damage Modifiers" and applies
        else if (type === "Poise "){
            totalMod = 0
            totalMod = stack_modifiers_ADD('poiseNeg', totalMod, toggles)
        }
    }
   
    return totalMod
}

// Multiplies totalMod by every active, toggled effect with this key.
// Counter effects scale linearly: 5% per stack -> 1 + 0.05 * count
function stack_modifiers(key, totalMod, toggles, filterFn=null){
    let mods = findDamageTypeFromEffects(key)
    mods.forEach(dam => {
        if (filterFn && !filterFn(dam)) return
        if (!determine_if_effect_is_active(dam)) return
        if (!determine_if_effect_is_toggled(dam, toggles)) return
        if (dam.effect.conditionCount){
            let count = Number(toggles?.[dam.effect.condition]) || 0
            totalMod = totalMod * (((dam.effect[key] - 1) * count) + 1)
        }
        else{
            totalMod = totalMod * dam.effect[key]
        }
    })
    return totalMod
}

// Adds every active, toggled effect with this key to totalMod (flat bonuses).
// Counter effects add value * count
function stack_modifiers_ADD(key, totalMod, toggles){
    let mods = findDamageTypeFromEffects(key)
    mods.forEach(dam => {
        if (!determine_if_effect_is_active(dam)) return
        if (!determine_if_effect_is_toggled(dam, toggles)) return
        if (dam.effect.conditionCount){
            let count = Number(toggles?.[dam.effect.condition]) || 0
            totalMod = totalMod + (dam.effect[key] * count)
        }
        else{
            totalMod = totalMod + dam.effect[key]
        }
    })
    return totalMod
}

function findDamageTypeFromEffects(type){
    return all_relic_effects.filter(eff => {
        if (eff.effect[type]){
            console.log(type)
            return eff
        }
    })
}

function findResistance(type){
    const resKeys = {
        Poison: "poisonRes", Rot: "rotRes", Sleep: "sleepRes",
        Frostbite: "frostRes", Bleed: "bleedRes", Madness: "madRes", Blight: "deathRes",
    }
    if (!resKeys[type]) return 0
    return stack_modifiers_ADD(resKeys[type], 0, toggles)
}

function determine_if_effect_is_active(effect){
    if (effect.active){
        return true
    }
    return false
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



/////////////////
// Main Return //
/////////////////
    return(
        <div style={panelStyle({flex: 7, minWidth: 0, padding: isMobile ? '4px 12px 14px' : '6px 20px 18px'})}>
            {renderVitals(all_relic_effects)}
            {renderStats(toggles)}
        </div>
    )
}