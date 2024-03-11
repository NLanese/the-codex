// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Ostrich
import DefinitionList from "../../../OstrichComponents/DefinitionsList/DefinitionList";

// Varibales Definitions 
import VariableDefinitionsList from "../../../constants/variableDefinitions";


const VariableDefinitions = ({}) => {

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
    
//////////////////
// Main Return //
/////////////////
return(
    <DefinitionList    
        title="Variable Terminology"
        definitionsList={VariableDefinitionsList}
        titleBoxStyle={{flex: 2,  display: "flex", justifyContent: 'center', alignItems: 'center', borderRight: "1px solid black"}}
        definitionBoxStyle={{flex: 7}}
        definitionRowStyle={{border: "1px solid black", borderRadius: 5, marginTop: 5}}
    />
)
}

export default VariableDefinitions