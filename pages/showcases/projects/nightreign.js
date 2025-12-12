// React
import React, {useEffect, useState} from "react";
import ReactModal from 'react-modal';

// Recoil
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { FormMultipleChoice } from "../../../OstrichComponents/Forms/FormMultipleChoice";

export default function BetBotProjectPage() {
///////////
// State //
///////////

    // Directory
    const [directory, setDirectory] = useAtom(directoryDataState)

    // Loading
    const [loading, setLoading] = useState(true)

    // Nightfarer
    const [nightfarer, setNightfarer] = useState("Wylder")

    // Relics
    const [relic1, setRelic1] = useState({})
    const [relic2, setRelic2] = useState({})
    const [relic3, setRelic3] = useState({})


///////////////
// Rendering //
///////////////
function renderSelectionsContainer(){
    return(
        <div style={{
        display: 'flex', flexDirection: 'row', 
        gap: 30, height: 500, padding: 25
        }}>
            <div style={{flex: 8, display: 'flex', flexDirection: 'row', backgroundColor: "#83adeb", height: 450}}>
                {renderNightFarer()}
                {renderRelics()}
            </div>
            <div style={{flex: 4, backgroundColor: "#83adeb", height: 450}}>

            </div>
        </div>
    )
}

function renderNightFarer(){
    return(
        <div style={{display: 'flex', flex: 6, backgroundColor: 'red'}}>
            <FormMultipleChoice 
                boxStyle={{width: '100%', margin: 0}}
                itemsPerRow={5}
                inForm={false}
                onChange={(op) => {
                  setNightfarer(op)
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: ["Wylder", "Guardian", "Ironeye", "Duchess", "Raider", "Revenant", "Recluse", "Executer", "Scholar", "Undertaker"],
                    textStyle: {fontSize: 18},
                  }
                }
              />
        </div>
    )
}

function renderRelics(){
    return(
        <div style={{display: 'flex', flex: 6, flexDirection: 'column', backgroundColor: 'green'}}>
            {renderRelic(relic1)}
            {renderRelic(relic2)}
            {renderRelic(relic3)}
        </div>
    )
}

function renderRelic(){
    return(
        <div>
            RELIC
        </div>
    )
}


/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: 20, backgroundColor: "#161754", height: '100vh'}}>
            <div style={Styles.Fonts.pageTitle}>Nightreign Build Calculator </div>
            {renderSelectionsContainer()}
    </div>
)
}