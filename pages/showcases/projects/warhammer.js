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
import determineDetachment from "../../../constants/projects/warhammer/detachments/determineDetachment";
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";

// WarHammer Functions 
import determineUnits from "../../../constants/projects/warhammer/army_units/determineUnits"

export default function Warhammer() {
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
const [armySizeNum, setArmySizeNum] = useState(false)
const [detachment, setDetachment] = useState(false)

// Unit Selection
const [selectType, setSelectType] = useState(false) 
const [shownUnit, setShownUnit] = useState(false)

// Selections
const [pts, setPts] = useState(0)

///////////////
// Functions //
///////////////

function determineArmySizeName(armySize){
    if (armySize === 500){
        return "Combat Patrol"
    }
    else if (armySize === 1000){
        return "Incursion"
    }
    else if (armySize === 2000){
        return "Strike Force"
    }
    else if (armySize === 3000){
        return "Onslaught"
    }
    else return "No Army Size Selected"
}

function determineTagActive(unit){
    if (shownUnit === unit.name){
        return true
    }
    return false
}

function handleUnitTypeTabClick(type){
    setSelectType(type)
}

function determineVisibleUnitCards(){

}

///////////////
// Rendering //
///////////////



// BASICS //

function renderBar(title, value, max, color){
    if (max === 0){
        color = "grey"
    }
    return(
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', gap: 10, padding: 2, }}>
                <div style={{flex: 9, backgroundColor: "grey", marginTop: 2, marginBottom: 2}}>
                    <div style={{ 
                        backgroundColor: color, height: 25, 
                        width: `${(value / max) * 100}%`, maxWidth: '100%', 
                    }}>
                        <p style={{padding: 0, paddingLeft: 10, paddingTop: 2, margin: 0, overflow: "visible", width: '1000%', textWrap: "overflow", whiteSpace: 'nowrap', overflow: 'visible', flexShrink: 0}}>
                            {title}: {value} / {!!max ? max : 0}
                        </p>
                    </div>
                </div>
            </div>
    )
}

function renderSelectArmy(){
    return(
        <OstrichDropDown 
        boxStyle={{zIndex: 1000}} openOnHover={true}
        titleStyle={{height: '70%', marginTop: 5, fontSize: 22}}
        isInput={true} rounded={false} titleChanges={true}
        placeholder={"Select Your Army"}
        drawers={[
            "Leagues of Votann", "Space Wolves", "Tau", "Tyranids"
        ]}
        title={armyType ? armyType : ""} onDrawerClick={(op) => {
            setArmyType(op)
        }}
        />
    )
}

function renderArmySize(armySizeNum){
    return(
        <FormMultipleChoice 
            titleStyle={{fontSize: 20}}
            itemsPerRow={1}
            inForm={false}
            onChange={(op) => {
                setArmySize(op.value[0])
            }}
            fieldTextStyle={{padding: 0, margin: 0}}
            fieldObj={{
                id: "2",
                type: "MC",
                template: "tabs",
                value: armySizeNum,
                options: [
                    {tag: "Combat Patrol (500)", value: 500}, 
                    {tag: "Incursion (1000)", value: 1000}, 
                    {tag: "Strike Force (2000)", value: 2000}, 
                    {tag: "Onslaught (3000)", value: 3000}, 
                ]
            }}
        />
    )
}

function renderBasics(){
    return(
        <div style={{backgroundColor: scorchedGreen, flex: 6}}>
            <p style={{...Styles.Fonts.basicXL, margin: 5, marginTop: 0, padding: 0, color: goldenAge}}>
                Select your Army
            </p>
            <div style={{marginLeft: 10, marginRight: 10, marginTop: 20}}>
                {renderSelectArmy()}
            </div>
            {renderArmySize(armySizeNum)}
        </div>
    )
}

function renderDetachment(armyType){
    if (!armyType){
        return
    }
    let list = determineDetachment(armyType)
    return(
        <div style={{backgroundColor: scorchedGreen, marginTop: 0, flex: 6}}>
            <p style={{...Styles.Fonts.basicXL, margin: 5, marginTop: 0, padding: 0, color: goldenAge}}>
                Select your Detachment
            </p>
            <FormMultipleChoice 
            style={{marginTop: -25}}
            titleStyle={{fontSize: 20}}
            itemsPerRow={1}
            inForm={false}
            onChange={(op) => {
                setDetachment(op.value[0])
            }}
            fieldTextStyle={{padding: 0, margin: 0}}
            fieldObj={{
                id: "2",
                type: "MC",
                template: "tabs",
                options: list
            }}
        />
        </div>
    )
}


// UNIT SELECTION //

function renderUnitTypeTabBar(){
    return(
        <div style={{ flex: 1}}>
            <OstrichTabBar
            openOnHover={true}
            tabs={["Characters", "Battleline", "Transports", "Other"]}
            onTabClick={(tab) => handleUnitTypeTabClick(tab)}
            />
        </div>  
    )
}

function renderUnitTags(armyType, selectType){
    return determineUnits(armyType, selectType).map( unit => {
        const _style={ marign: 0,
            justifyItems: 'center', alignContent: 'center', textAlign: 'center',
            borderRight: "1px solid black",  borderLeft: "1px solid black"
        }
        return(
            <div style={{display: 'flex', flex: 1,flexDirection: 'row', gap: 5, height: '70%', backgroundColor: determineTagActive(unit) ? goldenAge : "#efefef"}}>
                <p style={{..._style, flex: 3}}>
                    {unit.name} ({unit.pts})
                </p>
                <p style={{..._style, flex: 1}}>
                    M: {unit.base_stats.move}
                </p>
                <p style={{..._style, flex: 1}}>
                    T: {unit.base_stats.tough}
                </p>
                <p style={{..._style, flex: 1}}>
                    S: {unit.base_stats.saving}
                </p>
                <p style={{..._style, flex: 1}}>
                    W: {unit.base_stats.wounds}
                </p>
                <p style={{..._style, flex: 1}}>
                    L: {unit.base_stats.leader}
                </p>
                <p style={{..._style, flex: 1}}>
                    OC: {unit.base_stats.control}
                </p>
                <p style={{..._style, flex: 2}}>
                    {unit.base_stats.invuln ? ("Invuln: " + unit.base_stats.invuln) : "No Invulnerability"}
                </p>
            </div>
        )
    })
}

function renderUnitCards(){

}


function renderMAIN_DESKTOP(armyType, armySize, pts){
    const upperCardsStyle = {
        display: 'flex', gap: 10, flexDirection: 'column',
        padding: 7.5, height: '40vh', 
    }
    return(
        <div style={{display: 'flex', paddingTop: "5%", flexDirection: 'row', padding: 10, gap: 10, height: '40vh'}}>

            {/* Select Army and Detachment */}
            <div style={{...upperCardsStyle}}>
                <div style={{display: 'flex', gap: 10, flex: 2, flexDirection: 'row'}}>
                    {renderBasics()}
                    {renderDetachment(armyType)}
                </div>
            </div>

            {/* Select Units */}
            <div style={{...upperCardsStyle, flex: 7, backgroundColor: scorchedGreen, paddingLeft: 10}}>
                {/* Title and Fill Bar */}
                <div style={{display: 'flex', flexDirection: 'row', flex: 1, height: "5vh"}}>
                    <p style={{...Styles.Fonts.basicXL, margin: 5, marginTop: 0, marginBottom: 0, padding: 0, color: goldenAge, flex: 3}}>
                        Fill out your Ranks
                    </p>
                    <div style={{display: 'flex', flex: 8}}>
                        {renderBar(determineArmySizeName(armySize), pts, armySize, "red")}
                    </div>
                </div>

                {/* Unit Selection */}
                <div style={{display: 'flex', flex: 11, flexDirection: 'column', height: '34vh', paddingBottom: 15}}>
                    {renderUnitTypeTabBar()}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 10, paddingTop: 10, overflowY: 'scroll', height: '34vh'}}>
                        {renderUnitTags(armyType, selectType)}
                    </div>
                </div>
            </div>
        </div>
    )
}

/////////////////////
// Mini Components //
/////////////////////

function UnitCard({
    canAfford,
    unitObject
}){

}

/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: '3.5%', backgroundColor: votannGreen,  minHeight: '100vh', boxSizing: 'border-box', width: '100%', flex: 1, justifyContent: 'space-between'}}>
        {renderMAIN_DESKTOP(armyType, armySize, pts)}
    </div>
)
}