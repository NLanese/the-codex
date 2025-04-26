// React
import React, {useEffect, useState} from "react";

// Next JS
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState, userState } from "../../recoil/atoms";

// Styles 
import Styles from "../../styles/styles";

export default function AccountMenu() {

    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)
    const [tabBar, setTabBar] = useRecoilState(tabBarState)
    const [token, setToken] = useRecoilState(tokenState)
    const [user, setUser] = useRecoilState(userState)

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