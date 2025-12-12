
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

export default function RelicsModal() {

    return(
        <div>
            <div>
                Select an Effect
            </div>
            <OstrichTabBar
                tabs={["Offensive", "Defensive", "Stat Changes", "Starting Equipment"]}
            />
        </div>
    )
}