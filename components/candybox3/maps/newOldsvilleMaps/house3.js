// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Candybox
import {candyBoxStyles} from "../../const/styles"
import checkInvFor from "../../func/checkInventoryFor";



export default function NewOldsvilleHouse3({
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

    const [deskFlowerGrabbed, setDeskFlowerGrabbed] = useState(determineLolliState())

    function grabDeskLolli(){
        setLollipops(prev => prev + 1)
        setThingsDone(prev => [...prev, "house3FlowerDeskGrabbed"])
        setDeskFlowerGrabbed(true)
    }

    function determineLolliState(){
        if (thingsDone.includes("house3FlowerDeskGrabbed")){
            return (true)
        }
        else{
            return (false)
        }
    }

    const renderLolliOnDesk = (x) => {
        if (deskFlowerGrabbed){
            return<>     </>
        }
        else{
            return(<span onClick={() => grabDeskLolli()}>----o</span>)
        }
    }


    //////////////////////
    // Homeowner Status //
    //////////////////////

    const [manInHouse3, setManInHouse3] = useState(determineManInHouseState())

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

    function renderHouse3(){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>   /       |                                                                             |      |                |      \</p>
                <p style={candyBoxStyles.mapStyle}>  /        |                                                                             |      |                |        \</p>
                <p style={candyBoxStyles.mapStyle}> /         |                                                                             |      |                |         \</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                                                             |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                           __________                        |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           ___________________            /___       \                       |    __|                |          |</p>      
                <p style={candyBoxStyles.mapStyle}>|          |           |  v     v        |           |/ O \   O   |                      |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           | v         / \   |           |\___/       |9                     |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           |   /www\  /   \  |           | |   ]      |                      |    - |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           |  /     \/     \ |           | |********# |                      | --   |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           | /       \      \|           */  ----   #**                      |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           |/_________\______|            ************                       |      |                |   | \    |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                        //|*#**##***|\\                      |   ---|                |   |  \   |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                       / /|  *#**##  |\ \                    |  -   |                |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                      / / |    **    | \ \                   |      |                |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                     / /__|     *    |__\ \                  |      |                |    \  |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                    (_____|          |_____)                 |      |                |     \ |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |____________________________              |          |                       |-     |                |      \|  |</p>
                <p style={candyBoxStyles.mapStyle}>|         /                            /|             |__________|                       |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|        /       {renderLolliOnDesk()}                / |             /          \                  _____|  --  |________        |          |</p>
                <p style={candyBoxStyles.mapStyle}>|       _____________________________/  |            /     /\     \                /     |      |       /|       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |    o        ||         o   |   |           |     |  |     |              /                    / |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |_____________||_____________|   |           |     |  |     |             /____________________/  |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |  /          ||  /          |   |           |     |  |     |             |                   |   |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      | /           || /           |   |           |_____|  |_____|             |      _______      |   |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |/____________||/____________|   |___________/-    |__|    -\_____________|    /)|#(#%|& \    |   |_______|          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |  /          ||  /          |  /         |________|  |________|          |   |(#|3#3%|)% |   |  /        \          |</p>
                <p style={candyBoxStyles.mapStyle}>|      | /           || /           | /                                          |   |__|____|___|   | /          \         |</p>
                <p style={candyBoxStyles.mapStyle}>|      |/____________||/____________|/                                           |___________________|/            \        |</p>
                <p style={candyBoxStyles.mapStyle}>|      /                                 ____________________________________________________                       \       |</p>
                <p style={candyBoxStyles.mapStyle}>|     /                                 #                                                   #                        \      |</p>
                <p style={candyBoxStyles.mapStyle}>|    /                                 #                                                   #                          \     |</p>
                <p style={candyBoxStyles.mapStyle}>|   /                                 #                                                   #                            \    |</p>
                <p style={candyBoxStyles.mapStyle}>|  /                                 #___________________________________________________#                              \   |</p>
                <p style={candyBoxStyles.mapStyle}>| /                                                                                                                      \  |</p>
                <p style={candyBoxStyles.mapStyle}>|/________________________________________________________________________________________________________________________\ |</p>
            </div>
        )        
    }

    function renderDialogue(){
        return(
            <div style={{height: '70%', paddingRight: '7.5%'}}>
                <div>
                    Hello,  I am The Explorer
                </div>
                <button 
                style={{marginTop: 20}}
                onClick={() => setSelectedMap("New Oldsville")}>
                    Leave
                </button>
            </div>
        )
    }


    /////////////////
    // Main Render //
    /////////////////

    return (
        <div style={{flexDirection: 'row', display: 'flex'}}>
            <div style={{ marginTop: '10%', marginLeft: '10%'}}>   
                {renderHouse3()}
            </div>
            <div style={{marginTop: '10%', paddingLeft: '5%'}}>
                {renderDialogue()}
            </div>
        </div>
    )
}