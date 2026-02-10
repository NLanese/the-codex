// React
import React, {useEffect, useState, useRef} from "react";
import ReactModal from 'react-modal';

// Recoil
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";

export default function NightreignBuildMaker() {
////////////
// Consts //
////////////

    const votannGreen = "#035241"

/////////////////
// Main Return //
/////////////////
return(
    <div style={{paddingTop: 20, backgroundColor: votannGreen,  minHeight: '100vh', boxSizing: 'border-box', width: '100%', flex: 1, justifyContent: 'space-between'}}>
        <p>Warhammer</p>
    </div>
)
}