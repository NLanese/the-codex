import React from "react";
import { SectionLabel, chipStyle } from "./nightreignTheme";

const SELECTIONS = ["Relics", "Deep Relics", "Effects", "Weapon Passives", "Talismans"]
const NIGHTFARERS = ["Wylder", "Guardian", "Ironeye", "Duchess", "Raider", "Revenant", "Recluse", "Executor", "Scholar", "Undertaker"]
const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default function BasePlayerSelections({
    _nightfarer, setNightfarer,
    _lvl, setLvl,
    _selectionState, setSelectionState,
    isMobile
}) {

    // columns = 0 lets the chips size to their text and wrap
    function renderChips(options, current, onPick, columns, compact = false){
        const layout = columns
            ? {display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`}
            : {display: 'flex', flexWrap: 'wrap'}
        return (
            <div style={{...layout, gap: 6}}>
                {options.map(op => (
                    <button
                        key={op}
                        type="button"
                        aria-pressed={current === op}
                        onClick={() => onPick(op)}
                        style={chipStyle(current === op, compact ? {padding: '6px 0', textAlign: 'center'} : {})}
                    >
                        {op}
                    </button>
                ))}
            </div>
        )
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', width: isMobile ? '100%' : 230, flexShrink: 0}}>
            <SectionLabel style={{marginTop: 0}}>Edit</SectionLabel>
            {renderChips(SELECTIONS, _selectionState, (op) => setSelectionState(op), 0)}

            <SectionLabel style={{marginTop: 18}}>Nightfarer</SectionLabel>
            {renderChips(NIGHTFARERS, _nightfarer, (op) => setNightfarer(op), isMobile ? 3 : 2)}

            <SectionLabel style={{marginTop: 18}}>Level</SectionLabel>
            {renderChips(LEVELS, _lvl, (op) => { setLvl(false); setLvl(op) }, isMobile ? 8 : 5, true)}
        </div>
    )
}
