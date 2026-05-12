import React, {useEffect, useState, useRef} from "react";
import Styles from "../../styles/styles";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";

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

///////////////
// Rendering //
///////////////

    function renderNameInput(){
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: silverLining}}>Enter a Name for your Build: </p>
                <input style={{width: '62%'}} onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        )
    }

    function renderContent(){

    }


//////////
// Main //
//////////
    return(
        <div style={{marginTop: 10}}>
            <OstrichTabBar style={{width: '100%'}}
                value={screen}
                tabs={["Load Saved Builds", "Save Current Build"]}
                onTabClick={(tab) => setScreen(tab)}
            />
           {renderContent()}
        </div>
    )
}