// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Candybox
import {candyBoxStyles} from "../../const/styles"
import checkInvFor from "../../func/checkInventoryFor";



export default function EasternForest({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone, 
    setThingsDone,
    setCandies,
    setLollipops,
}){

    //////////////////
    // Drawer State //
    //////////////////

    const [drawerOpened, setDrawerOpened] = useState(determinedDrawerState())

    function openDrawer(){
        console.log("Door Opened")
        setDrawerOpened(true)
        setThingsDone(prev => [...prev, "hosue2DrawerOpened"])
    }

    function determinedDrawerState(){
        if (thingsDone.includes("hosue2DrawerOpened")){
            return true
        }
        else{
            return false
        }
    }


    /////////////////////////
    // Flower Pot Lollipop //
    /////////////////////////

    const [potFlowerGrabbed, setPotFlowerGrabbed] = useState(determineLolliState())

    function grabFlowerLolli(){
        setLollipops(prev => prev + 1)
        setThingsDone(prev => [...prev, "house2FlowerPotGrabbed"])
        setPotFlowerGrabbed(true)
    }

    function determineLolliState(){
        if (thingsDone.includes("house2FlowerPotGrabbed")){
            return (true)
        }
        else{
            return (false)
        }
    }

    const renderLolliInPot = (x) => {
        if (potFlowerGrabbed){
            return<> </>
        }
        if (x === 1){
            return(<span onClick={() => grabFlowerLolli()}>o</span>)
        }
        else if (x !== 1){
            return(<span onClick={() => grabFlowerLolli()}>|</span>)
        }
    }

    /////////////////////////
    // Drawer Pot Lollipop //
    /////////////////////////

    const [drawerFlowerGrabbed, setDrawerFlowerGrabbed] = useState(determineDrawerLolliState())

    function grabDrawerLolli(){
        setLollipops(prev => prev + 1)
        setThingsDone(prev => [...prev, "house2DrawerLolliGrabbed"])
        setDrawerFlowerGrabbed(true)
    }

    function determineDrawerLolliState(){
        if (thingsDone.includes("house2DrawerLolliGrabbed")){
            return (true)
        }
        else{
            return (false)
        }
    }

    const renderLolliInDrawer = () => {
        if (drawerFlowerGrabbed){
            return<>    </>
        }
        else{
            return(<span onClick={() => grabDrawerLolli()}>---o</span>)
        }
    }

    //////////////////////
    // Homeowner Status //
    //////////////////////

    const [manInHouse2, setManInHouse2] = useState(determineManInHouseState())

    function determineManInHouseState(){
        if (thingsDone.includes("house2ManDead")){
            return ("Dead")
        }
        else if (thingsDone.includes("house2ManToldToFight")){
            return ("Downstairs")
        }
        else if (thingsDone.includes("house2ManToldToWait")){
            return ("Waiting")
        }
        else if (thingsDone.includes("house2ManHelped")){
            return ("Happy")
        }
        else{
            return "Default"
        }
        
    }

    /////////////
    // Renders //
    /////////////

    // 120 char long
    function renderFloor(){
            return(
                <div>
                    <p style={candyBoxStyles.mapStyle}>   88888                                        8888888         8888888o                               8888888o</p>
                    <p style={candyBoxStyles.mapStyle}> 888888888                                    88888888888    888o888888888                            8o8888888</p>
                    <p style={candyBoxStyles.mapStyle}>88888888888                                 888888888888888 888888888o888888                         88888888888</p>
                    <p style={candyBoxStyles.mapStyle}> 888888888                                    88888888888    8888888888888                           o 888888888</p>
                    <p style={candyBoxStyles.mapStyle}>   |  |                                          |  |         o  |  |   o                               |  | o</p>
                    <p style={candyBoxStyles.mapStyle}>   |  |                                          |  |            |  |                                   |  |</p>
                    <p style={candyBoxStyles.mapStyle}>   |  |                                          |  |            |  |                                   |  |</p>
                    <p style={candyBoxStyles.mapStyle}>__/    \_________,\/\/._________________________/    \_\/\/_____/    \_________________________________/    \__________</p>
                    <p style={candyBoxStyles.mapStyle}>_______________________________________________________________________________________________________________________</p>
                </div>
            )
        }
    }

    function renderDialogue(){
        return(
            <div style={{height: '70%', paddingRight: '7.5%'}}>
                <div>
                    {renderManGivesQuest()}
                    {renderManIsSaved()}
                    {renderManIsDead()}
                </div>
                <button 
                style={{marginTop: 20}}
                onClick={() => setSelectedMap("New Oldsville")}>
                    Leave
                </button>
            </div>
        )
    }

    function renderManGivesQuest(){
        if (manInHouse2 === "Default"){
            return(
                <div>
                    <p>My name is Hugh Manson, welcome to my house!</p>
                    <p>Some evil corporate spiders came into my basement, turned it into a hegde fund; and now they won't leave!</p>
                    <p>What should I do?</p>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '5%'}}>
                        <button style={{flex: 6}}>
                            "Take Care of it yourself"
                        </button>
                        <button style={{flex: 6}}>
                            "Just wait it out"
                        </button>
                       {renderHelpButton()}
                    </div>
                </div>
            )
        }
    }
    
    function renderHelpButton(){
        if (
            checkInvFor(inventory, "mace") || 
            checkInvFor(inventory, "sword2") || 
            checkInvFor(inventory, "sword1") || 
            checkInvFor(inventory, "axe")  
        ){
            return(
                <button>
                    Let me handle it for you!
                </button>
            )
        }
    }

    function renderManIsSaved(){
        if (manInHouse2 === "house2ManHelped"){
            return(
                <div>
                    <p>Thanks for all the help!</p>
                </div>
            )
        }
    }

    function renderManIsDead(){
        if (manInHouse2 === "house2ManDead"){
            return(
                <div>
                    <p>I am dead.</p>
                </div>
            )
        }
    }

    /////////////////
    // Main Render //
    /////////////////

    return (
        <div style={{flexDirection: 'row', display: 'flex', marginTop: '5%'}}>
            <div style={{ marginTop: '1%', marginLeft: '2.5%', flex:7, }}>   
                {renderHouse2()}
            </div>
            <div style={{marginTop: '1%', paddingLeft: '2.5%', flex:5 }}>
                {renderDialogue()}
            </div>
        </div>
    )
}