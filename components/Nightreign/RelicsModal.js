
// React
import React, {useEffect, useState} from "react";

// Styles 
import Styles from "../../styles/styles";

// Ostrich
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar"

// Relics
import offensiveRelics from "../../constants/projects/nightreign/relics/offensiveRelics";
import defensiveRelics from "../../constants/projects/nightreign/relics/defensiveRelics";
import regenRelics from "../../constants/projects/nightreign/relics/regenRelics";

export default function RelicsModal({
    selectEffect
}) {

///////////
// State //
///////////
const [effectCat, setEffectCat] = useState()
const [search, setSearch] = useState("")
const [selectedList, setSelectedList] = useState([])
const [filteredEffects, setFilteredEffects] = useState([])

useEffect(() => {
    setSearch("")
    if (effectCat === "All"){
        setSelectedList([...offensiveRelics, ...defensiveRelics, ...regenRelics])
        setFilteredEffects([...offensiveRelics, ...defensiveRelics, ...regenRelics])
    }
    if (effectCat === "Offensive"){
        setSelectedList(offensiveRelics)
        setFilteredEffects(offensiveRelics)
    }
    else if (effectCat === "Defensive"){
        setSelectedList(defensiveRelics)
        setFilteredEffects(defensiveRelics)
    }
    else if (effectCat === "Regenerative"){
        setSelectedList(regenRelics)
        setFilteredEffects(regenRelics)
    }
}, [effectCat])

useEffect(() => {
    console.log(search)
    if (search === ""){
        setFilteredEffects([...selectedList])
    }
    else{
        let newList = selectedList.filter(eff => {
        if (eff.title.includes(search)){
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
            style={{border: "1px solid black", padding: 0, paddingLeft: 10, display: 'flex', flexDirection: 'row'}}
            >
                <div style={{display: 'flex', flexDirection: 'column', flex: 10}}>
                    <p style={{...Styles.Fonts.basicX, marginBottom: 0}}>
                        {eff.title}
                    </p>
                    <p style={{...Styles.Fonts.basic, fontSize: 14, marginTop: 0}}>
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
        return <p>Stacks with self</p>
    }
    else if (!eff.stacks.self && eff.stacks.selfType){
        return<p>Stacks with OTHER SIMILAR verions of self</p>
    }
    else{
        return <p>Does not stack</p>
    }
}

///////////////
// Functions //
///////////////


/////////////////
// Main Return //
/////////////////
    return(
        <div style={{height: '100%'}}>
            <div style={{height: '20%'}}>
                <div>
                    <p style={{...Styles.Fonts.h2, marginBottom: 0}}>Select an Effect</p>
                </div>
                <OstrichTabBar
                    style={{width: '80%', marginLeft: '10%', marginBottom: 10}}
                    tabs={["All", "Offensive", "Defensive", "Regenerative", "Stat Changes", "Starting Equipment"]}
                    onTabClick={(tab) => setEffectCat(tab)}
                />
                <div style={{marginLeft: '10%', display: 'flex', flexDirection: 'row', paddingBottom: 10}}>
                    <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0}}>Search for Effect: </p>
                    <input style={{width: '62%'}} onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            
            <div style={{overflowY: 'auto', overflowX: 'hidden', marginTop: 15, height: '80%'}}>
                {renderFilteredEffects()}
            </div>
        </div>
    )
}