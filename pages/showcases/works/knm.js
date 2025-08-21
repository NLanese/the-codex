// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";


// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";


export default function KNMPage(){

    ///////////
    // State //
    ///////////

        const [directory, setDirectory] = useRecoilState(directoryDataState)
        const router = useRouter()

    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
    setDirectory("Portfolio")            
    }, [])

}