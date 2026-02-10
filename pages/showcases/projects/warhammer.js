// React
import React, {useEffect, useState, useRef} from "react";
import ReactModal from 'react-modal';

// Recoil
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";

export default function NightreignBuildMaker() {
////////////
// Consts //
////////////

const votannGreen = "#035241"

///////////
// State //
///////////

// Directory and Tab
const [directory, setDirectory] = useAtom(directoryDataState)
setDirectory("Nightreign")
const [currentTab, setCurrentTab] = useAtom(tabBarState)
    useEffect(() => {
        if (currentTab === "Boss" || currentTab === "Maps"){
            setScreen(currentTab)
        }
        else{
            setScreen("Main")
        }
    },[currentTab])

// Screen
const [screen, setScreen] = useState("Main")

/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: 20, backgroundColor: votannGreen,  minHeight: '100vh', boxSizing: 'border-box', width: '100%', flex: 1, justifyContent: 'space-between'}}>
        <p>Warhammer</p>
    </div>
)
}