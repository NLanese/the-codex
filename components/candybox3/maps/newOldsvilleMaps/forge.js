// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useAtom } from "jotai";

import {candyBoxStyles} from "../../const/styles"
import NewOldsForgeItems from "../../const/items/NewOldsVilleForge";
import checkInvFor from "../../func/checkInventoryFor";
import { hasDone, markDone } from "../../func/thingsDone";

export default function NewOldsvilleForge({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone, 
    setThingsDone,
    candies,
    setCandies,
    setLollipops,
}){


    ///////////////////////////////
    // Hidden Lollipop Functions //
    ///////////////////////////////
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
        if (hasDone(thingsDone, "forgeLolliGrabbed")){
            return (false)
        }
        else{
            return (true)
        }
    }

    function grabLolli(){
        console.log("grab?")
        markDone(setThingsDone, "forgeLolliGrabbed")
        setLollipops(prev => prev + 1)
        setLolliPresent(false)
    }



    /////////////////////////////
    // Dialog and Menu Buttons //
    /////////////////////////////

    function renderLeave(){
        return(
            <button onClick={() => setSelectedMap("New Oldsville")}>
                Leave
            </button>
        )
    }

    const [tooBroke, setTooBroke] = useState(false)
    function renderDialogue(){
        return(
            <div>
                <div style={{height: '70%', paddingRight: '7.5%'}}>
                    <p>Welcome to the Forge!</p>
                    <p>Feel free to take a look at my wares. Purchase what you like, but remember I only take payment in candies!</p>
                    {tooBroke ?? <p>Sorry, you don't have enough candies for that item!</p>}
                </div>
                <div>
                    {renderWeaponsPurchase()}
                </div>
                <div style={{marginTop: 20}}>
                    {renderArmorPurchase()}
                </div>
                <div style={{marginTop: 20}}>
                    {renderLeave()}
                </div>
            </div>
        )
    }

    function renderWeaponsPurchase(){
        if (checkInvFor(inventory, "mace")){
            return(
                <div>
                    I have no more weapons to sell!
                </div>
            )
        }
        else if (checkInvFor(inventory, "sword2")){
            return(
                <button onClick={() => {handlePurchase(NewOldsForgeItems[0])}}>
                    Purchase Mace (5,000,000 candies)
                </button>
            )
        }
        else if (checkInvFor(inventory, "axe")){
            return(
                <button onClick={() => {handlePurchase(NewOldsForgeItems[1])}}>
                    Silver Sword (10,000 candies)
                </button>
            )
        }
        else if (checkInvFor(inventory, "sword1")){
           return(
                <button onClick={() => {handlePurchase(NewOldsForgeItems[2])}}>
                    Iron Axe (1500 candies)
                </button>
            )
        }
        else{
            return(
                <button onClick={() => {handlePurchase(NewOldsForgeItems[3])}}>
                    Wooden Sword (350 candies)
                </button>
            )
        }
    }

    function renderArmorPurchase(){
        if (checkInvFor(inventory, "sas")){
            return(
                <div>I have no more armor to sell!</div>
            )
        }
        else if (checkInvFor(inventory, "iron")){
            return(
                <button onClick={() => {handlePurchase(NewOldsForgeItems[6])}}>
                    Space Age Steel Armor (10,000,000 candies)
                </button>
            )
        }
        else if (checkInvFor(inventory, "leather")){
           return(
            <button onClick={() => {handlePurchase(NewOldsForgeItems[5])}}>
                    Iron Armor (115,000 candies)
                </button>
            )
        }
        else{
            return(
                <button onClick={() => {handlePurchase(NewOldsForgeItems[4])}}>
                    Leather Armor (10,000 candies)
                </button>
            )
        }
    }

    function handlePurchase(itm){
        if (candies >= itm.cost){
            setTooBroke(false)
            setThingsDone((prev) => [...prev, {title: ("Bought " + itm.name)}])
            setInventory((prev) => [...prev, itm])
            setCandies((prev) => prev - itm.cost)
        }
        else{
            setTooBroke(true)
        }
    }

    /////////////////
    // Room Render //
    /////////////////

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