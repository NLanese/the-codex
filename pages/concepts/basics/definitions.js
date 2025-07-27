// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Ostrich
import DefinitionList from "../../../OstrichComponents/DefinitionsList/DefinitionList";

// Varibales Definitions 
import BasicDefinitionsList from "../../../constants/basicDefinitions";
import { OstCard } from "../../../OstrichComponents/Format/OstCard";


const VariableDefinitions = ({}) => {

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
    
//////////////////
// Main Return //
/////////////////
return(
    <OstCard style={{margin: '10%', marginTop: 0}}>
        <DefinitionList    
        title="Basic Terminology"
        definitionsList={BasicDefinitionsList}
        titleBoxStyle={{flex: 2,  display: "flex", justifyContent: 'center', alignItems: 'center', borderRight: "1px solid black"}}
        definitionBoxStyle={{flex: 7}}
        definitionRowStyle={{border: "1px solid black", borderRadius: 5, marginTop: 5}}
        />
    </OstCard>
    
)
}

export default VariableDefinitions