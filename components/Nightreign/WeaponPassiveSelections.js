import { SectionLabel, chipStyle, textButtonStyle } from "./nightreignTheme";
import React, {useEffect, useState, useRef} from "react";


export default function WeaponPassiveSelections({
    w1,w2,w3,
    w4,w5,w6,
    handleWeaponEffectClick,
    clearWeapon,
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

const [secondSet, setSecondSet] = useState(false)

// Weapon Passives
const [weapon1, setWeapon1] = useState(w1)
const [weapon2, setWeapon2] = useState(w2)
const [weapon3, setWeapon3] = useState(w3)
const [weapon4, setWeapon4] = useState(w4)
const [weapon5, setWeapon5] = useState(w5)
const [weapon6, setWeapon6] = useState(w6)


useEffect(() => {
    setWeapon1(w1)
    setWeapon2(w2)
    setWeapon3(w3)
    setWeapon4(w4)
    setWeapon5(w5)
    setWeapon6(w6)

    console.log(w1)
}, [w1, w2, w3, w4, w5, w6])

////////////////
// Renderings //
////////////////

function renderSingleWeapon(weapon, id){
    return(
        <div key={id} style={{borderRadius: 10, overflow: 'hidden', border: `1px solid ${gloomGlow}`, backgroundColor: depthColor}}>
            {renderWeaponHeader(id)}
            <div style={{display: 'flex', flexDirection: 'column', gap: 6, padding: 8}}>
                {renderWeaponEffect(weapon?.slot1 ?? null, `${id}1`, false)}
                {renderWeaponEffect(weapon?.slot2 ?? null, `${id}2`, false)}
                {/* {renderWeaponEffect(weapon?.slot3 ?? null, `${id}3`, true)} */}
            </div>
        </div>
    )
}

function renderWeaponHeader(key){
    return(
        <div style={{display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px 6px 12px', backgroundColor: gloomGlow}}>
            <span style={{color: graceGiven, fontSize: 15, fontWeight: 600, flex: 1, whiteSpace: 'nowrap'}}>
                Weapon {key}
            </span>
            <button type="button" style={textButtonStyle(frenzyTouched)} onClick={() => clearWeapon(key)}>
                Clear
            </button>
        </div>
    )
}

function renderWeaponEffect(relicSlot, key, isNegative){
    const filled = !!relicSlot?.title
    return (
        <button key={key} type="button"
        onClick={() => handleWeaponEffectClick(key)}
        style={{
            textAlign: 'left', fontFamily: 'inherit', fontSize: 14, lineHeight: 1.3,
            padding: '8px 10px', borderRadius: 7, cursor: 'pointer', minHeight: 36,
            border: filled ? `1px solid ${isNegative ? scarletRot : gloomGlow}` : `1px dashed ${greyOfNight}`,
            backgroundColor: filled ? (isNegative ? scarletRot : nightShade) : 'transparent',
            color: filled ? silverLining : traceNight,
        }}
        >
            {filled ? relicSlot.title : "+ Add a passive"}
        </button>
    )
}

function determineCardsShown(){
    const ids = secondSet ? [4, 5, 6] : [1, 2, 3]
    const weapons = {1: weapon1, 2: weapon2, 3: weapon3, 4: weapon4, 5: weapon5, 6: weapon6}
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            {ids.map(id => renderSingleWeapon(weapons[id], id))}
        </div>
    )
}


/////////////////
// Main Render //
/////////////////
return(
    <div style={{flex: 1, minWidth: 0}}>
        <SectionLabel style={{marginTop: 0}}>Weapon passives</SectionLabel>
        <div style={{display: 'flex', gap: 6, marginBottom: 12}}>
            {[["Weapons 1-3", false], ["Weapons 4-6", true]].map(([label, value]) => (
                <button key={label} type="button" aria-pressed={secondSet === value}
                    onClick={() => setSecondSet(value)}
                    style={chipStyle(secondSet === value, {flex: 1})}>
                    {label}
                </button>
            ))}
        </div>
        {determineCardsShown()}
    </div>
)
}
