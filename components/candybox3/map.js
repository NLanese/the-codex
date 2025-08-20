// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Battle Track
import BATTLE_TRACK from "./battle_track";

// Maps
import NewOldsville from "./maps/newOldsville";
import NewOldsvilleHouse2 from "./maps/newOldsvilleMaps/house2";
import NewOldsvilleForge from "./maps/newOldsvilleMaps/forge";
import NewOldsvilleHouse3 from "./maps/newOldsvilleMaps/house3";


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
                />
            )
        }


        else if (thisMap.split(" -- ")[0] === "BattleTrack"){
            return(
                <BATTLE_TRACK
                    setSelectedMap={setSelectedMap}
                    selectedTrack={thisMap.split(" -- ")[1]}
                    inventory={inventory}
                    setInventory={setInventory}
                    thingsDone={thingsDone}
                    setThingsDone={setThingsDone}
                    setCandies={setCandies}
                    setLollipops={setLollipops}
                    
                />
            )
        }
    }


    return renderThisMap()
}