// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Battle Track
import BATTLE_TRACK from "./battle_track";

// Battle Tracks
import easternForest from "./battle_track_maps/newOldsVilleTracks/easternForest";

// Maps
import NewOldsville from "./maps/newOldsville";
import NewOldsvilleHouse2 from "./maps/newOldsvilleMaps/house2";
import NewOldsvilleForge from "./maps/newOldsvilleMaps/forge";
import NewOldsvilleHouse3 from "./maps/newOldsvilleMaps/house3";
import findActiveTrinkets from "./func/findActiveTrinkets";


export default function Map({
    selectedMap, 
    setSelectedMap,
    inventory,
    setInventory,
    thingsDone, 
    setThingsDone,
    setCandies,
    setLollipops
}) {

    ///////////
    // State //
    ///////////

    const [thisMap, setThisMap] = useState(selectedMap)
    useEffect(() => {
        setThisMap(selectedMap)
    }, [selectedMap])


        /////////////////////
    // Environment Timer \\
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        setInterval(() => {
            console.log(timer)
            let val
            if (timer <= 10){
                val = timer + 1
                console.log(val)
                setTimer(prev => val)
            }
            else{
                val = 0
                setTimer(prev => val)
            }
        }, 2500);
    }, [])

    ///////////////
    // Renderers //
    ///////////////

    function renderThisMap(){
        if (thisMap === "New Oldsville"){
            return( 
                <NewOldsville 
                    inventory={inventory}
                    setInventory={setInventory}
                    setSelectedMap={setSelectedMap}
                    thingsDone={thingsDone}
                    setThingsDone={setThingsDone}
                    timer={timer}
                />
            )
        }
        else if (thisMap === "New Oldsville -- Forge"){
            return( 
                <NewOldsvilleForge 
                    inventory={inventory}
                    setInventory={setInventory}
                    setSelectedMap={setSelectedMap}
                    thingsDone={thingsDone}
                    setThingsDone={setThingsDone}
                    setCandies={setCandies}
                    setLollipops={setLollipops}
                    timer={timer}
                />
            )
        }
        else if (thisMap === "New Oldsville -- House2"){
            return( 
                <NewOldsvilleHouse2 
                    inventory={inventory}
                    setInventory={setInventory}
                    setSelectedMap={setSelectedMap}
                    thingsDone={thingsDone}
                    setThingsDone={setThingsDone}
                    setCandies={setCandies}
                    setLollipops={setLollipops}
                    timer={timer}
                />
            )
        }
        else if (thisMap === "New Oldsville -- House3"){
            return( 
                <NewOldsvilleHouse3 
                    inventory={inventory}
                    setInventory={setInventory}
                    setSelectedMap={setSelectedMap}
                    thingsDone={thingsDone}
                    setThingsDone={setThingsDone}
                    setCandies={setCandies}
                    setLollipops={setLollipops}
                    timer={timer}
                />
            )
        }


        else if (thisMap.split(" -- ")[0] === "BattleTrack"){
            let selectedTrack
            if (thisMap.split(" -- ")[1] === "Eastern Forest"){
                selectedTrack = easternForest
            }
            let selectedTrinkets = findActiveTrinkets(inventory)
            return(
                <BATTLE_TRACK
                    setSelectedMap={setSelectedMap}
                    selectedTrack={selectedTrack}
                    inventory={inventory}
                    setInventory={setInventory}
                    thingsDone={thingsDone}
                    setThingsDone={setThingsDone}
                    setCandies={setCandies}
                    setLollipops={setLollipops}
                    selectedTrinkets={selectedTrinkets}
                    
                />
            )
        }
    }


    return renderThisMap()
}