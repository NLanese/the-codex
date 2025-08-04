// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Maps
import NewOldsville from "./maps/newOldsville";


export default function Map({
    selectedMap, 
    setSelectedMap
}) {

    ///////////
    // State //
    ///////////

    const [thisMap, setThisMap] = useState(selectedMap)

    ///////////////
    // Renderers //
    ///////////////

    function renderThisMap(){
        if (thisMap === "New Oldsville"){
            return <NewOldsville />
        }
    }


    return renderThisMap()
}