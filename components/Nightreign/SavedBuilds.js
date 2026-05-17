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
    const [localBuildData, setLocalBuildData] = useState([])

    useEffect(() => {
        const existing = JSON.parse(localStorage.getItem("nightreignRelics")) || [];
        console.log(existing)
        setLocalBuildData(existing)
    }, [])

///////////////
// Functions //
///////////////

    const saveBuild = () => {
        const newBuild = {
            buildName: buildName,
            relic1:relic1, relic2:relic2, relic3:relic3,
            effect11:effect11, effect12:effect12, effect13:effect13,
            effect21:effect21, effect22:effect22, effect23:effect23,
            effect31:effect31, effect32:effect32, effect33:effect33,
            relic4:relic4, relic5:relic5, relic6:relic6,
            effect41:effect41, effect42:effect42, effect43:effect43,
            effect51:effect51, effect52:effect52, effect53:effect53,
            effect61:effect61, effect62:effect62, effect63:effect63
        };

        // Compute updated array FIRST
        const updated = [...localBuildData, newBuild];

        // Add new build
        setLocalBuildData(updated)

        console.log("Saving with...")
        console.log(updated)

        // Save back to localStorage
        localStorage.setItem("nightreignRelics", JSON.stringify(updated));

        console.log("Saved...")
        console.log(JSON.parse(localStorage.getItem("nightreignRelics")))
    };

    const deleteBuild = (buildObj) => {
        

        let toUpdate = [...localBuildData];

        toUpdate = toUpdate.filter(build => {
            if (build !== buildObj){
                return build
            }
        })

        // Add new build
        setLocalBuildData(toUpdate)

        console.log("Saving with...")
        console.log(toUpdate)

        // Save back to localStorage
        localStorage.setItem("nightreignRelics", JSON.stringify(toUpdate));

        console.log("Saved...")
        console.log(JSON.parse(localStorage.getItem("nightreignRelics")))
    };

///////////////
// Rendering //
///////////////

    function renderNameInput(){
        return(
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '10%'}}>
                <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: silverLining}}>Enter a Name for your Build: </p>
                <input style={{width: '60%', marginRight: '5.5%'}} 
                    onChange={(e) => setBuildName(e.target.value)} 
                    value={buildName}
                />
                <OstCard rounded={false}
                style={{width: '50'}} onClick={() => saveBuild()}>
                    Save
                </OstCard>
            </div>
        )
    }

    function renderLocalSaves(data){
        return data.map(save => {
            return(
                <OstCard style={{backgroundColor: silverLining, padding: 2, marginTop: 10}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 7}}>
                            <p style={{...Styles.Fonts.basicX, padding: 1, paddingTop: 5, paddingLeft: 5, margin: 1, height: '100%'}}>{save.buildName}</p>
                        </div>
                        <div style={{flex: 5, display: 'flex', flexDirection: 'row', gap: 5.5}}>
                            <OstCard rounded={false}
                            style={{width: '50', marginRight: 10, justifyContent: 'center', textAlign: 'center', color: frenzyTouched}} onClick={() => deleteBuild(save)}>
                                Delete
                            </OstCard>
                            <OstCard rounded={false}
                            style={{width: '50', marginRight: 10, justifyContent: 'center', textAlign: 'center'}} onClick={() => console.log("Bingo")}>
                                Load
                            </OstCard>
                        </div>
                    </div>
                </OstCard>
            )
        })
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
                        {renderLocalSaves(localBuildData)}
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
           {renderContent()}
        </div>
    )
}