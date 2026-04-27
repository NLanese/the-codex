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
import { 
    ChaosDemonsUnits, ChaosMarinesUnits, ChaosKnightsUnits,
    DeathGuardUnits, ThousandSonsUnits, WorldEatersUnits, 
    AdeptaSororitasUnits, AdeptusCustodesUnits, AdeptusMechanicusUnits,
    AdeptusTitanicusUnits, AstraMilitarumUnits, BlackTemplarsUnits,
    BloodAngelsUnits, DarkAngelsUnits, DeathwatchUnits,
    GreyKnightsUnits,
    ImperialAgentsUnits,
    ImperialKnightsUnits,
    IronHandsUnits,
    RavenGuardUnits,
    SalamandersUnits,
    SpaceMarinesUnits,
    SpaceWolvesUnits,
    UltramarinesUnits,
    ImperialArmourUnits,
    LegendsUnits,
    AeldariUnits,
    DrukhariUnits,
    GenestealerCultsUnits,
    NecronsUnits,
    OrksUnits,
    TauUnits,
    VotannUnits
} from "../../../constants/projects/warhammer/functions/getAllData";
import determineUnits from "../../../constants/projects/warhammer/army_units/determineUnits"

// Colors
const votannGreen = "#035241"
const goldenAge = "#b09902"
const scorchedGreen = "#11382f"
const wornViridium = "#1d2923"
const seaOfWar = '#445459'
const skiesOfSage = '#87948d'
const brassWarriors = '#472f08'

export default function Warhammer() {
////////////
// Consts //
////////////

    const ALL_ARMIES = []

    const chaosDemons = {title: "Chaos Demons", getUnits: ChaosDemonsUnits}
    ALL_ARMIES.push(chaosDemons)
    const chaosMarines = {title: "Chaos Marines", getUnits: ChaosMarinesUnits}
    ALL_ARMIES.push(chaosMarines)
    const ChaosKnights = {title: "Chaos Knights", getUnits: ChaosKnightsUnits}
    ALL_ARMIES.push(ChaosKnights)
    const DeathGuard = {title: "Death Guard", getUnits: DeathGuardUnits}
    ALL_ARMIES.push(DeathGuard)
    const ThousandSons = {title: "Thousand Sons", getUnits: ThousandSonsUnits}
    ALL_ARMIES.push(ThousandSons)
    const WorldEaters = {title: "World Eaters", getUnits: WorldEatersUnits}
    ALL_ARMIES.push(WorldEaters)
    const AgentsOfChaos = {title: "Agents of Chaos", getUnits: DeathGuardUnits}
    ALL_ARMIES.push(AgentsOfChaos)
    const AdeptaSororitas = {title: "Adepta Sororitas", getUnits: AdeptaSororitasUnits}
    ALL_ARMIES.push(AdeptaSororitas)
    const AdeptusCustodes = {title: "Adeptus Custodes", getUnits: AdeptusCustodesUnits}
    ALL_ARMIES.push(AdeptusCustodes)
    const AdeptusMechanicus = {title: "Adeptus Mechanicus", getUnits: AdeptusMechanicusUnits}
    ALL_ARMIES.push(AdeptusMechanicus)
    const AdeptusTitanicus = {title: "Adeptus Titanicus", getUnits: AdeptusTitanicusUnits}
    ALL_ARMIES.push(AdeptusTitanicus)
    const AstraMilitarum = {title: "Astra Militarum", getUnits: AstraMilitarumUnits}
    ALL_ARMIES.push(AstraMilitarum)
    const BlackTemplars = {title: "Black Templars", getUnits: BlackTemplarsUnits}
    ALL_ARMIES.push(BlackTemplars)
    const BloodAngels = {title: "Blood Angels", getUnits: BloodAngelsUnits}
    ALL_ARMIES.push(BloodAngels)
    const DarkAngels = {title: "Dark Angels", getUnits: DarkAngelsUnits}
    ALL_ARMIES.push(DarkAngels)
    const Deathwatch = {title: "Death Watch", getUnits: DeathwatchUnits}
    ALL_ARMIES.push(Deathwatch)
    const GreyKnights = {title: "Grey Knights", getUnits: GreyKnightsUnits}
    ALL_ARMIES.push(GreyKnights)
    const ImperialAgents = {title: "Imperial Agents", getUnits: ImperialAgentsUnits}
    ALL_ARMIES.push(ImperialAgents)
    const ImperialKnights = {title: "Imperial Knightd", getUnits: ImperialKnightsUnits}
    ALL_ARMIES.push(ImperialKnights)
    const IronHands = {title: "Iron Hands", getUnits: IronHandsUnits}
    ALL_ARMIES.push(IronHands)
    const RavenGuard = {title: "Raven Guard", getUnits: RavenGuardUnits}
    ALL_ARMIES.push(RavenGuard)
    const Salamanders = {title: "Salamanders", getUnits: SalamandersUnits}
    ALL_ARMIES.push(Salamanders)
    const SpaceMarines = {title: "Space Marines", getUnits: SpaceMarinesUnits}
    ALL_ARMIES.push(SpaceMarines)
    const SpaceWolves = {title: "Space Wolves", getUnits: SpaceWolvesUnits}
    ALL_ARMIES.push(SpaceWolves)
    const Ultramarines = {title: "Ultra Marines", getUnits: UltramarinesUnits}
    ALL_ARMIES.push(Ultramarines)
    const ImperialArmour = {title: "Imperial Armour", getUnits: ImperialArmourUnits}
    ALL_ARMIES.push(ImperialArmour)
    const Legends = {title: "Legends", getUnits: LegendsUnits}
    ALL_ARMIES.push(Legends)
    const Aeldari = {title: "Aeldari", getUnits: AeldariUnits}
    ALL_ARMIES.push(Aeldari)
    const Drukhari = {title: "Drukhari", getUnits: DrukhariUnits}
    ALL_ARMIES.push(Drukhari)
    const GenestealerCults = {title: "Genestealer Cults", getUnits: GenestealerCultsUnits}
    ALL_ARMIES.push(GenestealerCults)
    const Necrons = {title: "Necrons", getUnits: NecronsUnits}
    ALL_ARMIES.push(Necrons)
    const Orks = {title: "Orks", getUnits: OrksUnits}
    ALL_ARMIES.push(Orks)
    const Tau = {title: "Tau", getUnits: TauUnits}
    ALL_ARMIES.push(Tau)
    const Votann = {title: "Leagues of Votann", getUnits: VotannUnits}
    ALL_ARMIES.push(Votann)

///////////
// State //
///////////

// Directory and Tab
const [directory, setDirectory] = useAtom(directoryDataState)
setDirectory("Warhammer")

// Tab Bar
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
    if (shownUnit === unit){
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
        drawers={ALL_ARMIES}
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
    if (!selectType){
        return
    }
    return determineUnits(armyType, selectType).map( unit => {
        const _style={ marign: 0,
            justifyItems: 'center', alignContent: 'center', textAlign: 'center',
            borderRight: "1px solid black",  borderLeft: "1px solid black"
        }
        return(
            <OstCard  noShadow={true} rounded={false}
            onClick={() => {setShownUnit(unit)}}
            style={{
                display: 'flex', flex: 1, flexDirection: 'row', gap: 5, 
                height: '70%', backgroundColor: determineTagActive(unit) ? goldenAge : "#efefef",
                padding: 0
            }}
            >
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
            </OstCard>
        )
    })
}

function renderMAIN_DESKTOP(armyType, armySize, pts){
    const upperCardsStyle = {
        display: 'flex', gap: 10, flexDirection: 'column',
        padding: 7.5, height: '40vh', 
    }
    return(

        <div style={{display: 'flex', paddingTop: "5%", flexDirection: 'row', padding: 10, gap: 10}}>

            {/* Select Army and Detachment */}
            <div style={{...upperCardsStyle}}>
                <div style={{display: 'flex', gap: 10, flex: 2, flexDirection: 'column'}}>
                    {renderBasics()}
                    {renderDetachment(armyType)}
                </div>
            </div>

            {/* Select Units */}
            <div style={{...upperCardsStyle, flex: 7, backgroundColor: scorchedGreen, paddingLeft: 10}}>

                {/* All Units */}
                <div style={{height: '40vh'}}>
                    {/* Title and Fill Bar */}
                    <div style={{display: 'flex', flexDirection: 'row', flex: 1, height: "4vh"}}>
                        <p style={{...Styles.Fonts.basicXL, margin: 5, marginTop: 0, marginBottom: 0, padding: 0, color: goldenAge, flex: 3}}>
                            Fill out your Ranks
                        </p>
                        <div style={{display: 'flex', flex: 8}}>
                            {renderBar(determineArmySizeName(armySize), pts, armySize, "red")}
                        </div>
                    </div>

                    {/* Unit Selection */}
                    <div style={{display: 'flex', flex: 11, flexDirection: 'column', height: '36vh', paddingBottom: 15}}>
                        {renderUnitTypeTabBar()}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 10, paddingTop: 10, overflowY: 'scroll', height: '34vh'}}>
                            {renderUnitTags(armyType, selectType)}
                        </div>
                    </div>
                </div>

                {/* Selected Unit */}
                <UnitCard unit={shownUnit} />

            </div>
        </div>
    )
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

/////////////////////
// Mini Components //
/////////////////////

function UnitCard({
    unit
}){
    const [shownDetails, setShownDetails] = useState(false)
    const [shownAbility, setShownAbility] = useState(false)

    function MAIN(unit, shownDetails){
        return(
            <div style={{height: '50vh', backgroundColor: scorchedGreen, display: 'flex', flexDirection: 'row'}}>
                
                <div style={{flex:8}}>
                    <p style={{padding: 5, margin: 0, textAlign: 'center', fontSize: 22, color: goldenAge}}>{unit.name}</p>
                    <div style={{display: 'flex', flexDirection: 'row', padding: 5, gap: 10}}>
                        {renderImgOrAbility()}
                        <div style={{display: 'flex', flex: 2}}>
                            {renderUnitDetailSelections(shownDetails)}
                        </div>
                        <div style={{display: 'flex', flex: 8, backgroundColor: wornViridium, flexDirection: 'column', justifyContent: 'space-evenly', maxHeight: '38vh', overflow: 'scroll'}}>
                            {renderDetails(unit)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function renderImgOrAbility(){
        if (shownAbility){
            return renderShownAbility()
        }
        else{
            return(
                <OstCard noShadow={true}
                    templateStyle={1}
                    imageSrc={unit.img}
                    style={{flex: 3}}
                />
            )
        }
    }

    function renderShownAbility(){
        return(
            <OstCard style={{backgroundColor: skiesOfSage, flex: 3}}>
                <OstCard noShadow={true} rounded={false} 
                onClick={() => setShownAbility(false)}
                style={{justifySelf: 'flex-end', 
                    height: 35, width: 35, fontSize: 32, padding: 0, margin: 0,
                    backgroundColor: votannGreen, color: goldenAge,  textAlign: 'center'
                }}>
                    X
                </OstCard>
                <p style={{color: brassWarriors, fontSize: 24, textAlign: 'center', marginTop: -15, marginBottom: 2}}>
                    {shownAbility.name}
                </p>
                <p style={{fontSize: 16, textAlign: 'center', marginTop: 0}}>
                    {shownAbility.desc}
                </p>
            </OstCard>
        )
    }

    function renderUnitDetailSelections(shownDetails){
        return(
            <FormMultipleChoice 
                style={{padding: 0, margin: 0}}
                tabStyle={{width: '110%', margin: 0}}
                titleStyle={{fontSize: 20}}
                itemsPerRow={1}
                inForm={false}
                fieldTextStyle={{padding: 0, margin: 0}}
                value={shownDetails}
                onChange={(op) => {
                    setShownDetails(op.value[0])
                }}
                fieldObj={{
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    value: shownDetails,
                    options: [
                        "Melee Weapons", "Ranged Weapons", "Abilities", "Wargear", "Weapon Options", "Wargear Options", 
                        {tag: "Add to Army", doesNotFireParent: true, onPress: (tag) => console.log(tag)}
                    ]
                }}
            />
        )
    }

    function renderMeleeWeapons(unit){
        return unit.meleeWeapons.map(wep => {
            return renderWeaponTag(wep)
        })
    }

    function renderRangedWeapons(){
        return unit.rangedWeapons.map(wep => {
            return renderWeaponTag(wep)
        })
    }

    function renderWeaponTag(weapon){
        const _style={ marign: 0,
            justifyItems: 'center', alignContent: 'center', textAlign: 'center', padding: 0, margin: 0
        }
        return(
            <OstCard noShadow={true} rounded={true}
            style={{display: "flex", flexDirection: 'column', width: '95%', minHeight: '7vh', maxHeight: '8vh', marginBottom: 2, overflow:'hidden'}}>
                <div style={{display: 'flex', flex: 2, flexDirection: 'row', backgroundColor: skiesOfSage, textAlign: 'center', justifyContent: 'center'}}>
                    {weapon.name}
                </div>
                <div style={{display: 'flex', flex: 5, flexDirection: 'row', backgroundColor: "white", gap: 10, justifyContent: 'space-evenly'}}>
                    <p style={_style}>
                        Range: {weapon.range}
                    </p>
                    <p style={_style}>
                        Attacks: {weapon.attacks}
                    </p>
                    <p style={_style}>
                        Save: {weapon.b_save}
                    </p>
                    <p style={_style}>
                        Str: {weapon.str}
                    </p>
                    <p style={_style}>
                        AP: {weapon.AP}
                    </p>
                    <p style={_style}>
                        Dam: {weapon.dam}
                    </p>
                </div>
                {renderWeaponAbilities(weapon)}
            </OstCard>
        )
    }

    function renderWeaponAbilities(weapon){
        if (weapon.abilities.length === 0){
            return
        }
        return(
            <div style={{
                display: 'flex', flex: 7, flexDirection: 'row', gap: 10,
                justifyContent: 'flex-start', alignItems: 'center', padding: 5,
                backgroundColor: skiesOfSage, height: '2.5vh' 
            }}>
                <p style={{margin: 0, padding: 0, paddingLeft: 5, color: brassWarriors, fontSize: 18}}>Abilities</p>
                {weapon.abilities.map(ab => {
                    return(
                        <OstCard rounded={false} 
                            style={{backgroundColor: shownAbility === ab ? goldenAge : 'grey', height: '40%', height: '1vh', paddingTop: 0}}
                            onClick={() => {setShownAbility(ab)}}
                        >
                            {ab.name}
                        </OstCard>
                    )
                })}
            </div>
        )
    }

    function renderAbilities(){
    }

    function renderDetails(unit){
        if (shownDetails === "Melee Weapons"){
            return renderMeleeWeapons(unit)
        }
        else if (shownDetails === "Ranged Weapons"){
            return renderRangedWeapons(unit)
        }
        else if (shownDetails === "Abilities"){
            return renderAbilities(unit)
        }
    }
    
    return MAIN(unit, shownDetails)
}
