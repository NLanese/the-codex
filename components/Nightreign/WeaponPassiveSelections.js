export default function BasePlayerSelections({
    w1,w2,w3,
    w4,w5,w6,
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

////////////////
// Renderings //
////////////////
function renderSingleWeapon(weapon, id){
    return(
        <OstCard style={{ flex: 4, backgroundColor: greyOfNight, padding: 0, overflow: 'hidden', border: "1px solid", borderColor: silveredNight }}>
            {renderWeaponHeader(id)}
            <div style={{ height: '88%', display: 'flex', flexDirection: 'column', backgroundColor: depthColor }}>
                {renderWeaponEffect(weapon?.slot1 ?? null, `${id}1`, true)}
                {renderWeaponEffect(weapon?.slot2 ?? null, `${id}2`, true)}
                {renderWeaponEffect(weapon?.slot3 ?? null, `${id}3`, false)}
            </div>
        </OstCard>
    )
}

function renderWeaponHeader(key){
    return(
        <div style={{height: '12%'}}>
            <div style={{display: 'flex', flexDirection: 'row', backgroundColor: gloomGlow, overflow: 'hidden', gap: 10, padding: 2, paddingBottom: 0}}>
            <OstCard noShadow={true} style={{color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, flex: 7 }}>
                Weapon
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
        style={{border: '1px solid black', minHeight: 25, padding: 3, flex: 4, fontSize: 15, backgroundColor: isNegative ? frenzyTouched : silveredNight}} 
        onClick={() => handleWeaponEffectClick(key, cons)}
        >
            {relicSlot?.title ? relicSlot?.title : "No Effect"}
        </OstCard>
        
    )
}


/////////////////
// Main Render //
/////////////////
return(
    <div style={{ flex: 7, backgroundColor: nightShade, display: 'flex', flexDirection: 'row'}}>
        <div style={{display: 'flex', flexDirection: 'row', flex: 6}}>
            {renderSingleWeapon(w1, 1)}
            {renderSingleWeapon(w2, 2)}
            {renderSingleWeapon(w3, 3)}
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flex: 6}}>
            {renderSingleWeapon(w4, 4)}
            {renderSingleWeapon(w5, 5)}
            {renderSingleWeapon(w6, 6)}
        </div>
    </div>
)
}
