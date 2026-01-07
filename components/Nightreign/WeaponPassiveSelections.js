import { OstCard } from "../../OstrichComponents/Format/OstCard"
import React, {useEffect, useState, useRef} from "react";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";


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
        <OstCard style={{ flex: 4, 
        backgroundColor: greyOfNight, borderColor: silveredNight,
        padding: 0, overflow: 'hidden', border: "1px solid" 
        }}>
            {renderWeaponHeader(id)}
            <div style={{ height: '88%', display: 'flex', flexDirection: 'column', backgroundColor: depthColor }}>
                {renderWeaponEffect(weapon?.slot1 ?? null, `${id}1`, false)}
                {renderWeaponEffect(weapon?.slot2 ?? null, `${id}2`, false)}
                {/* {renderWeaponEffect(weapon?.slot3 ?? null, `${id}3`, true)} */}
            </div>
        </OstCard>
    )
}

function renderWeaponHeader(key){
    return(
        <div style={{height: '12%'}}>
            <div style={{display: 'flex', flexDirection: 'row', backgroundColor: gloomGlow, overflow: 'hidden', gap: 10, padding: 2, paddingBottom: 0}}>
            <OstCard noShadow={true} style={{color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, flex: 7 }}>
                Weapon {key}
            </OstCard>
            <OstCard noShadow={true} style={{color: frenzyTouched, backgroundColor: depthColor, padding: 0, margin: 0, flex: 2.5, textAlign: 'center'}} onClick={() => clearWeapon(key)}>
                CLEAR
            </OstCard>
            </div>
        </div>
    )
}

function renderWeaponEffect(relicSlot, key, isNegative){
    return (
        <OstCard key={key} noShadow={true} rounded={false} 
        style={{border: '1px solid black', minHeight: 25, padding: 3, flex: 4, fontSize: 15, backgroundColor: isNegative ? scarletRot : silveredNight}} 
        onClick={() => handleWeaponEffectClick(key)}
        >
            {relicSlot?.title ? relicSlot?.title : "No Effect"}
        </OstCard>
        
    )
}

function determineCardsShown(){
    if (!secondSet){
        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', flex: 1}}>
            {renderSingleWeapon(weapon1, 1)}
            {renderSingleWeapon(weapon2, 2)}
            {renderSingleWeapon(weapon3, 3)}
            </div>
        )
    }
    else{
        return(
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', flex: 1}}>
            {renderSingleWeapon(weapon4, 4)}
            {renderSingleWeapon(weapon5, 5)}
            {renderSingleWeapon(weapon6, 6)}
            </div>
        )
    }
}


/////////////////
// Main Render //
/////////////////
return(
    <div style={{ flex: 7, backgroundColor: nightShade, display: 'flex', flexDirection: 'column'}}>
        <div style={{flex: 1}}>
            <OstrichTabBar
            tabs={["Weapons 1-3", "Weapons 4-6"]}
            value={secondSet ? "Weapons 4-6" : "Weapons 1-3"}
            onTabClick={(tab) =>  (tab === "Weapons 1-3" ? setSecondSet(false) : setSecondSet(true))}
            />
        </div>
        <div style={{flex: 11, paddingRight: 5}}>
            {determineCardsShown()}
        </div>
    </div>
)
}
