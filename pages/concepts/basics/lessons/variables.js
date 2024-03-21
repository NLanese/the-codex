// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
 
// Recoil
import { directoryDataState } from "../../../../recoil/atoms";


const VariablesLesson = ({}) => {

    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)

    const [loading, setLoading] = useState(true)

    ////////////////
    // UseEffects //
    ////////////////

    // Sets Directory if not already
    useEffect(() => {
        if (directory !== "Basics"){
            setDirectory("Basics")
        }
        setLoading(false)
    }, [])
 
    ///////////////
    // Rendering //
    ///////////////

}

export default VariablesLesson