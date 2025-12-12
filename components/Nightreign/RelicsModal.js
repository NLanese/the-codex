
// React
import React, {useEffect, useState} from "react";
import ReactModal from 'react-modal';

// Recoil
import { useAtom } from "jotai";
import { directoryDataState } from "../../jotai/atoms";

// Styles 
import Styles from "../../styles/styles";

// Ostrich
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar"

// Relics
import offensiveRelics from "../../constants/projects/nightreign/relics/offensiveRelics";

export default function RelicsModal() {

///////////
// State //
///////////
const [effectCat, setEffectCat] = useState()
const [search, setSearch] = useState("")
const [filteredEffects, setFilteredEffects] = useState([])

useEffect(() => {
    setSearch("")
    if (effectCat === "Offensive"){
        setFilteredEffects(offensiveRelics)
    }
}, [effectCat])

useEffect(() => {
    let oldList = filteredEffects
    let newList = oldList.filter(eff => {
        if (eff.title.includes(search)){
            return eff
        }
    })
    setFilteredEffects(newList)
}, [search])


////////////////
// Renderings //
////////////////
function renderFilteredEffects(){
    return filteredEffects.map(eff => {
        return(
            <OstCard noShadow={true} rounded={false}
            style={{border: "1px solid black", padding: 0, paddingLeft: 10}}
            >
                <p style={{...Styles.Fonts.basicX, marginBottom: 0}}>
                    {eff.title}
                </p>
                <p style={{...Styles.Fonts.basic, fontSize: 14, marginTop: 0}}>
                    {eff.desc}
                </p>
            </OstCard>
        )
    })
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
                    style={{width: '80%', marginLeft: '10%', marginBottom: 20}}
                    tabs={["All", "Offensive", "Defensive", "Stat Changes", "Starting Equipment"]}
                    onTabClick={(tab) => setEffectCat(tab)}
                />
                <div style={{marginLeft: '10%', display: 'flex', flexDirection: 'row', paddingTop: 10}}>
                    <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0}}>Search for Effect: </p>
                    <input style={{width: '62%'}}
                    />
                </div>
            </div>
            
            <div style={{overflowY: 'auto', overflowX: 'hidden', marginTop: 15, height: '80%'}}>
                {renderFilteredEffects()}
            </div>
        </div>
    )
}