import React, {useEffect, useState, useRef} from "react";
import Styles from "../../styles/styles";

import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";
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

function renderBars(all_relic_effects){
    let hpVal = hp + findVitalsMods("HP")
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

///////////////
// Functions //
///////////////

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

function return_modified_vital(vital, vitalVal, all_relic_effects){
    let foundModifiers = findPercentEffectFromEffects(vital, all_relic_effects)
    if (foundModifiers.length > 0){
        foundModifiers.forEach(percentInc => {
            vitalVal = vitalVal * percentInc.effect[vital]
        })
    }
    return Math.round(vitalVal)
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

function getBaseNegations(){
    let bases = determineBaseNegations(nightfarer)
    return bases
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
            totalMod = stack_modifiers('holyNegation', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
        // Finds "Holy Damage Modifiers" and applies
        else if (type === "Fire"){
            totalMod = stack_modifiers('fireNegation', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
        // Finds "Magic Damage Modifiers" and applies
        else if (type === "Magic"){
            totalMod = stack_modifiers('magicNegation', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
        // Finds "Magic Damage Modifiers" and applies
        else if (type === "Lightning"){
            totalMod = stack_modifiers('lightningNegation', totalMod, toggles)
            totalMod = stack_modifiers('affNegation', totalMod, toggles)
        }
    }
   
    return totalMod
}

function stack_modifiers(key, totalMod, toggles){
    let mods = findDamageTypeFromEffects(key)
    mods.forEach(dam => {
        if (determine_if_effect_is_toggled(dam, toggles)){
            if (dam.effect.conditionCounter){
                let mod = (( (dam.effect[key] - 1) * toggles[dam.effect.condition] ) + 1)
                totalMod = totalMod * mod
            }
            else if (determine_if_effect_is_active(dam)){
                totalMod = totalMod * dam.effect[key]
            }  
        }
    })  
    return totalMod
}

function findDamageTypeFromEffects(type){
    return all_relic_effects.filter(eff => {
        if (eff.effect[type]){
            return eff
        }
    })
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
        <div style={{flex: 7, backgroundColor: nightShade, height: 600}}>
            {renderVitals(all_relic_effects)}
            {renderStats(toggles)}
        </div>
    )
}