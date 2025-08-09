// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

import {candyBoxStyles} from "../../const/styles"


export default function NewOldsvilleForge({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone, 
    setThingsDone,
    setCandies,
    setLollipops,
}){

    const [lolliPresent, setLolliPresent] = useState(determineLolliState())

    function renderLolli(){
        if (lolliPresent){
            return(<span onClick={() => grabLolli()}>----o</span>)
        }
        else{
            return <span>     </span>
        }
    }

    function determineLolliState(){
        if (thingsDone.includes("forgeLolliGrabbed")){
            return (false)
        }
        else{
            return (true)
        }
    }

    function grabLolli(){
        console.log("grab?")
        setThingsDone(prev => [...prev, "forgeLolliGrabbed"])
        setLollipops(prev => prev + 1)
        setLolliPresent(false)
    }

    function renderLeave(){
        return(
            <button onClick={() => setSelectedMap("New Oldsville")}>
                Leave
            </button>
        )
    }

    function renderDialogue(){
        return(
            <div>
                <div style={{height: '70%', paddingRight: '7.5%'}}>
                    <p>Welcome to the Forge!</p>
                    <p>Feel free to take a look at my wares. Purchase what you like, but remember I only take payment in candies!</p>
                </div>
                <div>
                    {renderLeave()}
                </div>
            </div>
        )
    }

    function renderForgeRoom(){
        return(
            <>
            <p style={candyBoxStyles.mapStyle}>   /       |          |         | |                                                  |      \</p>
            <p style={candyBoxStyles.mapStyle}>  /        |          |         | |       ||_|_________|____                         |        \</p>
            <p style={candyBoxStyles.mapStyle}> /         |          |         | |      /||_|_________|___ \                        |         \</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |      \||_|_________|____/                        |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |       || '         '                             |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |                                   ______         |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |                                .-' ____ '-.      |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |                                \.-'    '-./      |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |                 __|_________|___\        /       |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |                |__|_________|___/        \       |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |          |         | |                   '         '  /'-.____.-'\      |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |    ______|         | |_______                         '-.______.-'      |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |   /      |_________|/       /\                                          |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |  /   {renderLolli()}                 / /                            ||            |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          | /_________________________/ /                            /  \           |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |/__________________________\/                             \  /     ____  |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |                                                          .\/.    |____| |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |                                    _____                  /\      :||:  |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |              )                    / ~~~ \                /  \      ||   |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |             (                     \ `¿´ /               /    \     ||   |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |    _____)_________________      _.-\ - /-._            /      \         |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |   /  __(__________)____  /|  /¯¯¯¯/¯|¯|¯\¯¯¯¯\     _________________    |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |  /  :@@@@@@@@@@@@(@@@@: / | (  ´)|´  ¯  `|(´  )    \________________\   |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |  :. '-.@@@@@@@@@@@@.-' .: | |   ||       ||   |     \               /   |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |  : '.  '-.______.-'  .' : |  \   )|     |(   /       '-._________.-'    |          |</p>
            <p style={candyBoxStyles.mapStyle}>|          |__:   '-.__________.-'   : |___\==||_____||==/____|¯¯|_____||  |_________|          |</p>
            <p style={candyBoxStyles.mapStyle}>|         /   :     |----------|     : |---/  |+-----++:0+----|  |    .'|  |_         \         |</p>
            <p style={candyBoxStyles.mapStyle}>|        /    :     |----------|     :/'---UUUU+--+--+0000----|  |   |\.'__'.\         \        |</p>
            <p style={candyBoxStyles.mapStyle}>|       /     '-.   |----------|   .-'         |  |  |        |__|   \|______|          \       |</p>
            <p style={candyBoxStyles.mapStyle}>|      /         '-.|__________|.-'            |  |  |                                   \      |</p>
            <p style={candyBoxStyles.mapStyle}>|     /                                        |  |  |                                    \     |</p>
            <p style={candyBoxStyles.mapStyle}>|    /                                         |__|__|                                     \    |</p>
            <p style={candyBoxStyles.mapStyle}>|   /                                          (__|__)                                      \   |</p>
            <p style={candyBoxStyles.mapStyle}>|  /                                                                                         \  |</p>
            <p style={candyBoxStyles.mapStyle}>| /                                                                                           \ |</p>
            <p style={candyBoxStyles.mapStyle}>|/_____________________________________________________________________________________________\|</p>
        </>
        )
    }

    return(
        <div style={{flexDirection: 'row', display: 'flex'}}>
            <div style={{ marginTop: '10%', marginLeft: '10%'}}>   
                {renderForgeRoom()}
            </div>
            <div style={{marginTop: '10%', paddingLeft: '5%'}}>
                {renderDialogue()}
            </div>
        </div>
    )
}