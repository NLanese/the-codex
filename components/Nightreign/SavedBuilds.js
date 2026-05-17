import React, {useEffect, useState, useRef} from "react";
import Styles from "../../styles/styles";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";
import { OstCard } from "../../OstrichComponents/Format/OstCard";

export default function SavedBuilds({
    isMobile,
    effect11, effect12, effect13,
    effect21, effect22, effect23,
    effect31, effect32, effect33,
    effect41, effect42, effect43,
    effect51, effect52, effect53,
    effect61, effect62, effect63,
    relic1, relic2, relic3,
    relic4, relic5, relic6
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

    const [screen, setScreen] = useState("Save Current Build")
    const [buildName, setBuildName] = useState("")
    const [localBuildData, setLocalBuildData] = useState()

    useEffect(() => {

    }, [])

///////////////
// Functions //
///////////////

    const saveBuild = () => {
        const data = {
            relic1, relic2, relic3,
            effect11, effect12, effect13,
            effect21, effect22, effect23,
            effect31, effect32, effect33,
            relic4, relic5, relic6,
            effect41, effect42, effect43,
            effect51, effect52, effect53,
            effect61, effect62, effect63,
            buildName
        };

        localStorage.setItem("nightreignRelics", JSON.stringify(data));
    };

///////////////
// Rendering //
///////////////

    function renderNameInput(){
        return(
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '10%'}}>
                <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: silverLining}}>Enter a Name for your Build: </p>
                <input style={{width: '62%'}} 
                    onChange={(e) => setBuildName(e.target.value)} 
                    value={buildName}
                />
            </div>
        )
    }

    function renderContent(){
        if (screen === "Load Saved Builds"){

        }
        else if (screen === "Save Current Build"){
            return(
                <div style={{display: 'flex', flexDirection: 'row', width: '95%', marginLeft: '1%', gap: '1.5%'}}>
                    <div style={{flex: 7}}>
                        <p style={{...Styles.Fonts.lessonHeader, width: '90%', color: silverLining}}>Your Current Relics</p>
                        {renderRelics()}
                    </div>
                    <div  style={{flex: 5, paddingTop: 40}}>
                        {renderNameInput()}
                    </div>
                </div>
            )
        }
    }

    function renderRelics(){
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', gap: 10, flexDirection: 'column', height: 500, flex: 6}}>
                    <Relic relic={relic1} id={1} depth={false}/>
                    <Relic relic={relic2} id={2} depth={false}/>
                    <Relic relic={relic3} id={3} depth={false}/>
                </div>
                <div style={{display: 'flex', gap: 10, flexDirection: 'column', height: 500, flex: 6}}>
                    <Relic relic={relic4} id={4} depth={true}/>
                    <Relic relic={relic5} id={5} depth={true}/>
                    <Relic relic={relic6} id={6} depth={true}/>
                </div>
            </div>
        )
    }

///////////
// RELIC //
///////////

    function Relic({ relic, id }) {
        const [cons, setCons] = useState(false)
    
        return (
            <OstCard style={{ flex: 4, backgroundColor: greyOfNight, padding: 0, overflow: 'hidden', border: "1px solid", borderColor: silveredNight }}>
                {renderRelicHeader(id)}
                <div style={{ height: '88%', display: 'flex', flexDirection: 'column', backgroundColor: depthColor }}>
                    {renderRelicEffect(relic?.slot1 ?? null, `${id}1`, cons)}
                    {renderRelicEffect(relic?.slot2 ?? null, `${id}2`, cons)}
                    {renderRelicEffect(relic?.slot3 ?? null, `${id}3`, cons)}
                </div>
            </OstCard>
        )
    }

    function renderRelicHeader(key){
        return(
            <div style={{height: '12%'}}>
                <div style={{display: 'flex', flexDirection: 'row', backgroundColor: gloomGlow, overflow: 'hidden', gap: 10, padding: 2, paddingBottom: 0}}>
                <OstCard noShadow={true} style={{color: graceGiven, padding: 0, paddingLeft: 5, margin: 0, flex: 7 }}>
                    RELIC
                </OstCard>
                {/* {renderFlipRelic(depth, setCons, cons)} */}
                </div>
            </div>
        )
    }

    function renderRelicEffect(relicSlot, key, cons){
        return (
            <OstCard key={key} noShadow={true} rounded={false} 
            style={{border: '1px solid black', minHeight: 25, padding: 3, flex: 4, fontSize: 15, backgroundColor: 'white'}} 
            >
                {relicSlot?.title ? relicSlot?.title : "No Effect"}
            </OstCard>
            
        )
    }


//////////
// Main //
//////////
    return(
        <div style={{marginTop: 10}}>
            {/* <OstrichTabBar style={{width: '100%'}}
                value={screen}
                tabs={["Load Saved Builds", "Save Current Build"]}
                onTabClick={(tab) => setScreen(tab)}
            /> */}
           {renderContent()}
        </div>
    )
}