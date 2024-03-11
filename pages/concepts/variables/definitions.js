// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../recoil/atoms";

// Ostrich
import DefinitionRow from "../../../OstrichComponents/DefinitionsList/DefinitionRow";

// Varibales Definitions 
import VariableDefinitions from "../../../constants/variableDefinitions";

export const VariableDefinitions = ({}) => {
///////////
// State //
///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)

    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        setDirectory("Variables")
    }, [])
    

}