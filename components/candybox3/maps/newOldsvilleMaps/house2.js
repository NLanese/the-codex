// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

import {candyBoxStyles} from "../../const/styles"


export default function NewOldsvilleHouse2({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone, 
    setThingsDone,
    setCandies,
    setLollipops,
}){

    const [drawerOpened, setDrawerOpened] = useState(false)

    const [potFlowerGrabbed, setPotFlowerGrabbed] = useState(determineLolliState())

    function grabFlowerLolli(){
        setLollipops(prev => prev + 1)
        setThingsDone(prev => [...prev, "house2FlowerPotGrabbed"])
    }

    function determineLolliState(){
        if (thingsDone.includes("house2FlowerPotGrabbed")){
            return (false)
        }
        else{
            return (true)
        }
    }

    function renderLolliInPot(x){
        if (potFlowerGrabbed){
            return<> </>
        }
        if (x = 1){
            return(<span onClick={() => grabFlowerLolli()}>o</span>)
        }
        else if (x = 2){
            return(<span onClick={() => grabFlowerLolli()}>|</span>)
        }
    }

    function renderHouse2(){
        if (drawerOpened){
    
        }
        else{
            return(
                <>
                <p style={candyBoxStyles.mapStyle}>   /       |                                                                                                     |      \</p>
                <p style={candyBoxStyles.mapStyle}>  /        |                                                                                                     |        \</p>
                <p style={candyBoxStyles.mapStyle}> /         |                                                                                                     |         \</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                                             ________________________________________|          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                                             |                CELLAR                 |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                                             |_______________________________________|          |</p>      
                <p style={candyBoxStyles.mapStyle}>|          |                                                             |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                                             |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          {renderLolliInPot(1)}                                                  |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          {renderLolliInPot(2)}   $%                                             |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |       %$ {renderLolliInPot(2)}  $$$%                                            |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |      $%$_| /$                                               | \                                     |   | \    |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         \|/                                                 |\ \                                    |   |  \   |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          |                                                  | \ \                                   |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         _|_                                                 |  \ \                                  |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         | |                                                 |   \ \                                 |    \  |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |        /   \                                                |    \ \                                |      \|  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |_______|     |______________                                 |    |\ \                               |          |</p>
                <p style={candyBoxStyles.mapStyle}>|         /        |     |             /|                                |    ||\ \                              |          |</p>
                <p style={candyBoxStyles.mapStyle}>|        /          \___/             / |                                |    || \ \                             |          |</p>
                <p style={candyBoxStyles.mapStyle}>|       /                            /  |                                |    ||  \ \                            |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      /____________________________/   |                                |    ||   \ \                           |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onProgress={() => setDrawerOpened(true)}>|              |   |</span>                                |    ||    \ \                          |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onProgress={() => setDrawerOpened(true)}>|              |   |</span>                                |    ||     \|\                         |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onProgress={() => setDrawerOpened(true)}>|              |   |</span>                                |    ||     || \                        |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |    O        <span onProgress={() => setDrawerOpened(true)}>|        O     |   |</span>________________________________|____||_____||__\_______________________|          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onProgress={() => setDrawerOpened(true)}>|              |  /</span>                                                                         \          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onProgress={() => setDrawerOpened(true)}>|              | /</span>                                                                           \         |</p>
                <p style={candyBoxStyles.mapStyle}>|      |_____________<span onProgress={() => setDrawerOpened(true)}>|______________|/</span>                                                                             \        |</p>
                <p style={candyBoxStyles.mapStyle}>|      /                                                                                                            \       |</p>
                <p style={candyBoxStyles.mapStyle}>|     /                                                                                                              \      |</p>
                <p style={candyBoxStyles.mapStyle}>|    /                                                                                                                \     |</p>
                <p style={candyBoxStyles.mapStyle}>|   /                                                                                                                  \    |</p>
                <p style={candyBoxStyles.mapStyle}>|  /                                                                                                                    \   |</p>
                <p style={candyBoxStyles.mapStyle}>| /                                                                                                                      \  |</p>
                <p style={candyBoxStyles.mapStyle}>|/________________________________________________________________________________________________________________________\ |</p>
            </>
            )
        }
        
    }

    return(
        <div></div>
    )
}