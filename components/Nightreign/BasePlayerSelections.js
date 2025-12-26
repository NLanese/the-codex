import React, {useEffect, useState, useRef} from "react";
import { FormMultipleChoice } from "../../OstrichComponents/Forms/FormMultipleChoice";

export default function BasePlayerSelections({
    _nightfarer, setNightfarer,
    _lvl, setLvl,
    _selectionState, setSelectionState,
    isMobile
}) {
    const [nightfarer] = useState(_nightfarer)
    const [lvl] = useState(_lvl)
    const [selectionState] = useState(_selectionState) 
    const graceGiven = "#f2e144"
    const gloomGlow = "#452d8a"

    return(
        <div style={{
            display: 'flex', flexDirection: 'column', flex: 5, 
            paddingRight: 10
        }}>
            <FormMultipleChoice 
                title={"Selection"}
                style={{width: '100%'}}
                titleStyle={{marginBottom: 0, paddingBottom: 0, backgroundColor: gloomGlow, padding: 2.5, paddingLeft: 5, color: graceGiven}}
                itemsPerRow={3}
                inForm={false}
                fieldTextStyle={{padding: 0, paddingLeft: 3, paddingRight: 3, margin: 0, fontSize: 14}}
                onChange={(op) => {
                    setSelectionState(op.value[0])
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: [
                        "Relics", "Deep Relics", "Effects",
                        ],
                }}
                inputValue={selectionState}
            />
            <FormMultipleChoice 
                title={"Nightfarer"}
                titleStyle={{marginBottom: 0, paddingBottom: 0, backgroundColor: gloomGlow, padding: 2.5, paddingLeft: 5, color: graceGiven,}}
                itemsPerRow={2}
                inForm={false}
                onChange={(op) => {
                    setNightfarer(op.value[0])
                }}
                fieldTextStyle={{padding: 0, margin: 0}}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: ["Wylder", "Guardian", "Ironeye", "Duchess", "Raider", "Revenant", "Recluse", "Executor", "Scholar", {tag: "Undertaker", fontSize: isMobile ? 12 : 16}],
                    textStyle: {fontSize: 12, padding: 0},
                  }
                }
              />
              <FormMultipleChoice 
                title={"Level"}
                titleStyle={{
                    marginBottom: 0, paddingBottom: 0, 
                    backgroundColor: gloomGlow, color: graceGiven,
                    padding: 2.5, paddingLeft: 5
                }}
                itemsPerRow={8}
                inForm={false}
                fieldTextStyle={{padding: 0, margin: 0}}
                onChange={(op) => {
                    setLvl(false)
                    setLvl(op.value[0])
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    textStyle: {fontSize: 16},
                }}
              />
        </div>
    )
}