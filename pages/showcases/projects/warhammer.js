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
import { FormMultipleChoice } from "../../../OstrichComponents/Forms/FormMultipleChoice";
import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";

export default function NightreignBuildMaker() {
////////////
// Consts //
////////////

const votannGreen = "#035241"
const goldenAge = "#b09902"
const scorchedGreen = "#11382f"

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

// Army Details
const [armyType, setArmyType] = useState(false)
const [armySize, setArmySize] = useState(false)

///////////////
// Rendering //
///////////////

function renderSelectArmy(){
    return(
        <OstrichDropDown 
        title={"Select Your Army"}
        isInput={true}
        drawers={[
            "Leagues of Votann", "Space Wolves", "Tau", "Tyranids"
        ]}
    />
    )
}

function renderArmySize(){
    return(
        <FormMultipleChoice 
            title={"Select the Size of Your Forces"}
            itemsPerRow={3}
            inForm={false}
            onChange={(op) => {
                setArmySize(op.value[0])
            }}
            fieldTextStyle={{padding: 0, margin: 0}}
            fieldObj={{
                id: "2",
                type: "MC",
                template: "tabs",
                options: [
                    "Combat Patrol (500)", "Incursion (1000)", "Strike Force (2000)", "Onslaught (3000)"
                ]
            }}
        />
    )
}

function renderBasics(){
    return(
        <div>

        </div>
    )
}

/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: -10, backgroundColor: votannGreen,  minHeight: '100vh', boxSizing: 'border-box', width: '100%', flex: 1, justifyContent: 'space-between'}}>
        {/* <div style={{}}>

        </div> */}
    </div>
)
}