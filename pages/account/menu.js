// React
import React, {useEffect, useState} from "react";

// Next JS
import { useRouter } from "next/router";

// Recoil
import { useAtom } from "jotai";
import { tokenState, tabBarState, directoryDataState, userState } from "../../jotai/atoms";

// Styles 
import Styles from "../../styles/styles";

export default function AccountMenu() {

    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useAtom(directoryDataState)
    const [tabBar, setTabBar] = useAtom(tabBarState)
    const [token, setToken] = useAtom(tokenState)
    const [user, setUser] = useAtom(userState)

    const [loggedIn, setLoggedIn] = useState(false)

    const router = useRouter()

    ////////////////
    // UseEffects //
    ////////////////

    // Directory Set
    useEffect(() => {
        setDirectory(false)
        setTabBar("Account")
    }, [])

    // Determines If User is Logged In Already
    useEffect(() => {
       if (token){
        if (user){
            setLoggedIn(true)
        }
       }
    }, [token])

    /////////////////
    // Main Return //
    /////////////////
    
    return(
        <div>

        </div>
    )
}