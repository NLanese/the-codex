// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Maps
import NewOldsville from "./maps/newOldsville";
import NewOldsvilleHouse2 from "./maps/newOldsvilleMaps/house2";
import NewOldsvilleForge from "./maps/newOldsvilleMaps/forge";


export default function Map({
    selectedMap, 
    setSelectedMap,
    inventory,
    setInventory,
    thingsDone, 
    setThingsDone,
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
                />
            )
        }
    }


    return renderThisMap()
}