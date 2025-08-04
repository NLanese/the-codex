// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Maps
import NewOldsville from "./maps/newOldsville";
import NewOldsvilleHouse2 from "./maps/newOldsvilleMaps/house2";


export default function Map({
    selectedMap, 
    setSelectedMap,
    inventory,
    setInventory
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
                />
            )
        }
    }


    return renderThisMap()
}