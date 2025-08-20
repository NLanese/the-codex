// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Candybox
import {candyBoxStyles} from "../../const/styles"
import checkInvFor from "../../func/checkInventoryFor";



export default function EasternForest({
    inventory,setInventory,
    thingsDone, setThingsDone,
    setSelectedMap,
    setCandies,setLollipops,
    pos, setPos
}){


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

    /////////////////
    // Main Render //
    /////////////////

    return (
        <div style={{flexDirection: 'row', display: 'flex', marginTop: '5%'}}>
           {renderFloor}
        </div>
    )
}