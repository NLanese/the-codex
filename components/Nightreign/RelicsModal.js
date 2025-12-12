
// React
import React, {useEffect, useState} from "react";
import ReactModal from 'react-modal';

// Recoil
import { useAtom } from "jotai";
import { directoryDataState } from "../../jotai/atoms";

// Styles 
import Styles from "../../styles/styles";

// Ostrich
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar"
import { FormText } from "../../OstrichComponents/Forms/FormText";

import offensiveRelics from "../../constants/projects/nightreign/relics/offensiveRelics";

export default function RelicsModal() {

    const [effectCat, setEffectCat] = useState()

    function renderRelicsInCategory(){
        return
    }

    return(
        <div style={{backgroundColor: 'lime'}}>
            <div>
                Select an Effect
            </div>
            <OstrichTabBar
                style={{width: '80%', marginLeft: '10%'}}
                tabs={["All", "Offensive", "Defensive", "Stat Changes", "Starting Equipment"]}
                onTabClick={(tab) => setEffectCat(tab)}
            />
            <input />
        </div>
    )
}