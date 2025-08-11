// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

import {candyBoxStyles} from "../../const/styles"
import { render } from "react-dom";


export default function NewOldsvilleHouse2({
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
        if (x = 1){
            return(<span onClick={() => grabFlowerLolli()}>o</span>)
        }
        else if (x != 1){
            return(<span onClick={() => grabFlowerLolli()}>|</span>)
        }
    }

    //////////////////////
    // Homeowner Status //
    //////////////////////

    const [manInHouse2, setManInHouse2] = useState()

    function determineManInHouseState(){
        if (thingsDone.includes("house2ManToldToFight")){
            return ("Downstairs")
        }
        else if (thingsDone.includes("house2ManToldToWait")){

        }
        else if (thingsDone.includes("house2ManHelped")){
            
        }
        else if (thingsDone.includes("house2ManDead")){
            
        }
    }

    ///////////////////
    // Drawer Status //
    ///////////////////

    function renderHouse2(){
        if (drawerOpened){
            return(
                <div>
                <p style={candyBoxStyles.mapStyle}>   /       |                                                                                                     |      \</p>
                <p style={candyBoxStyles.mapStyle}>  /        |                                                                                                     |        \</p>
                <p style={candyBoxStyles.mapStyle}> /         |                                                                                                     |         \</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                          %%%%%**            ________________________________________|          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                        {"<%&%&%%$%$%$"}         |                CELLAR                 |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                       {"<############"}         |_______________________________________|          |</p>      
                <p style={candyBoxStyles.mapStyle}>|          |                                        [_  0   0  _] \\     |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                          |       |%%  \\    |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          {renderLolliInPot(1)}                                \  __  /%%% //    |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          {renderLolliInPot(2)}   $%                            \___/ %%% //     |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |       %$ {renderLolliInPot(2)}  $$$%                             ||     //      |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |      $%$_| /$                            ----------//       | \                                     |   | \    |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         \|/                            //|         |        |\ \                                    |   |  \   |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          |                            // |         |        | \ \                                   |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         _|_                          //  |         |        |  \ \                                  |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         | |                         //   |         |        |   \ \                                 |    \  |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |        /   \                        ||   |         |        |    \ \                                |     \ |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |_______|     |______________         ||   |         |        |    |\ \                               |      \|  |</p>
                <p style={candyBoxStyles.mapStyle}>|         /        |     |             /|        ||   |_________|        |    ||\ \                              |          |</p>
                <p style={candyBoxStyles.mapStyle}>|        /          \___/             / |       oOOOo /          \       |    || \ \                             |          |</p>
                <p style={candyBoxStyles.mapStyle}>|       /                            /  |            /     /\     \      |    ||  \ \                            |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      /____________________________/____________   |     |  |    |      |    ||   \ \                           |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             |  |           |           |   |     |  |    |      |    ||    \ \                          |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             |  |           |           |   |     |  |    |      |    ||     \|\                         |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             |  |           |           |   |_____|  |____|      |    ||     || \                        |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |    O        |  |___________|           | __/     |__|     \_____|____||_____||__\_______________________|          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             | /            |           ||________|  |________|                                          \          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             |/             |           |                                                                 \         |</p>
                <p style={candyBoxStyles.mapStyle}>|      |_____________|______________|___________|                                                                  \        |</p>
                <p style={candyBoxStyles.mapStyle}>|      /                                                                                                            \       |</p>
                <p style={candyBoxStyles.mapStyle}>|     /                                                                                                              \      |</p>
                <p style={candyBoxStyles.mapStyle}>|    /                                                                                                                \     |</p>
                <p style={candyBoxStyles.mapStyle}>|   /                                                                                                                  \    |</p>
                <p style={candyBoxStyles.mapStyle}>|  /                                                                                                                    \   |</p>
                <p style={candyBoxStyles.mapStyle}>| /                                                                                                                      \  |</p>
                <p style={candyBoxStyles.mapStyle}>|/________________________________________________________________________________________________________________________\ |</p>
            </div>
                )
        }
        else{
            return(
            <div>
                <p style={candyBoxStyles.mapStyle}>   /       |                                                                                                     |      \</p>
                <p style={candyBoxStyles.mapStyle}>  /        |                                                                                                     |        \</p>
                <p style={candyBoxStyles.mapStyle}> /         |                                                                                                     |         \</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                          %%%%%**            ________________________________________|          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                        {"<%&%&%%$%$%$"}         |                CELLAR                 |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                       {"<############"}         |_______________________________________|          |</p>      
                <p style={candyBoxStyles.mapStyle}>|          |                                        [_  0   0  _] \\     |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                          |       |%%  \\    |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          {renderLolliInPot(1)}                                \  __  /%%% //    |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          {renderLolliInPot(2)}   $%                            \___/ %%% //     |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |       %$ {renderLolliInPot(2)}  $$$%                             ||     //      |                                       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |      $%$_| /$                            ----------//       | \                                     |   | \    |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         \|/                            //|         |        |\ \                                    |   |  \   |</p>
                <p style={candyBoxStyles.mapStyle}>|          |          |                            // |         |        | \ \                                   |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         _|_                          //  |         |        |  \ \                                  |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |         | |                         //   |         |        |   \ \                                 |    \  |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |        /   \                        ||   |         |        |    \ \                                |     \ |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |_______|     |______________         ||   |         |        |    |\ \                               |      \|  |</p>
                <p style={candyBoxStyles.mapStyle}>|         /        |     |             /|        ||   |_________|        |    ||\ \                              |          |</p>
                <p style={candyBoxStyles.mapStyle}>|        /          \___/             / |       oOOOo /          \       |    || \ \                             |          |</p>
                <p style={candyBoxStyles.mapStyle}>|       /                            /  |            /     /\     \      |    ||  \ \                            |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      /____________________________/   |           |     |  |     |     |    ||   \ \                           |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onClick={() => setDrawerOpened(true)}>|              |</span>   |           |     |  |     |     |    ||    \ \                          |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onClick={() => setDrawerOpened(true)}>|              |</span>   |           |     |  |     |     |    ||     \|\                         |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onClick={() => setDrawerOpened(true)}>|              |</span>   |           |_____|  |_____|     |    ||     || \                        |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |    O        <span onClick={() => setDrawerOpened(true)}>|        O     |</span>   |___________/     |__|     \_____|____||_____||__\_______________________|          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onClick={() => setDrawerOpened(true)}>|              |</span>  /         |________|  |________|                                          \          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |             <span onClick={() => setDrawerOpened(true)}>|              |</span> /                                                                           \         |</p>
                <p style={candyBoxStyles.mapStyle}>|      |_____________<span onClick={() => setDrawerOpened(true)}>|______________|</span>/                                                                             \        |</p>
                <p style={candyBoxStyles.mapStyle}>|      /                                                                                                            \       |</p>
                <p style={candyBoxStyles.mapStyle}>|     /                                                                                                              \      |</p>
                <p style={candyBoxStyles.mapStyle}>|    /                                                                                                                \     |</p>
                <p style={candyBoxStyles.mapStyle}>|   /                                                                                                                  \    |</p>
                <p style={candyBoxStyles.mapStyle}>|  /                                                                                                                    \   |</p>
                <p style={candyBoxStyles.mapStyle}>| /                                                                                                                      \  |</p>
                <p style={candyBoxStyles.mapStyle}>|/________________________________________________________________________________________________________________________\ |</p>
            </div>
            )
        }
        
    }

    return renderHouse2()
}