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
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";

export default function BetBotProjectPage() {
///////////
// State //
///////////

    // Directory
    const [directory, setDirectory] = useAtom(directoryDataState)

    // Loading
    const [loading, setLoading] = useState(true)

    // Relics
    const [relic1, setRelic1] = useState({})
    const [relic2, setRelic2] = useState({})
    const [relic3, setRelic3] = useState({})


/////////////////
// Main Return //
/////////////////
return(
    <div style={{marginTop: 20}}>
            <div style={Styles.Fonts.pageTitle}>Nightreign Build Calculator </div>
    </div>
)
}