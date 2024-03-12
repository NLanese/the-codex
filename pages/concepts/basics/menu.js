// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../../recoil/atoms";

const VariablesMenu = ({}) => {
    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)


    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        setDirectory("Basics")
    }, [])
    
    /////////////////
    // Main Return //
    /////////////////
    return(
        <div>

        </div>
    )
}

export default VariablesMenu