// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState } from "../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import { OstrichTabBar } from "@Ostrich/Tabs/OstrichTabBar";


export const HeaderBar = ({}) => {

///////////
// State //
///////////

    const [token, setToken] = useRecoilState(tokenState)

    const [tabBar, setTabBar] = useRecoilState(tabBarState)

    const router = useRouter()

//////////////
// Contants //
//////////////

    const guestTabs = [
        {
            title: "Concepts", 
            onClick: () => {
                setTabBar("Concepts")
                router.replace("/concepts/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: ["Variables", "Functions", "Arrays and Lists", "Coding Strategies"],
                onDrawerClick: (drawer) => router.replace(`/concepts/${drawer}`)
            }
        },
        {
            title: "Languages", 
            onClick: () => {
                setTabBar("Languages")
                router.replace("/languages/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: ["JavaScript", "Ruby", "Python", "C++"],
                onDrawerClick: (drawer) => router.replace(`/languages/${drawer}`)
            }
        },
        {
            title: "Frameworks", 
            onClick: () => {
                setTabBar("Frameworks")
                router.replace("/frameworks/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: ["React JS", "React Native", "Angular", "Ionic", "Pandas", "NumPy"],
                onDrawerClick: (drawer) => router.replace(`/frameworks/${drawer}`)
            }
        },
        {
            title: "Information Tech"
        },
        {
            title: "Account", 
            onClick: () => {
                setTabBar("Frameworks")
                router.replace("/account/menu")
            },
            dropdown: {
                openOnHover: true,
                drawers: ["Sign In", "Sign Up"],
                onDrawerClick: (drawer) => router.replace(`/frameworks/${drawer}`)
            }
        }
    ]


//////////
// MAIN //
//////////

    return(
        <OstrichTabBar 
        startingTabByTitle={tabBarState}
        tabs={ token ? userTabs : guestTabs}

        style={{height: 50, width: '99%', paddingRight: 15, paddingLeft: 15, backgroundColor: '#11013b', display: "flex", zIndex: 10}}
        titleStyle={{textAlign: 'center', textAlignVertical: 'center', fontSize: 24, fontWeight: 500, color: 'white', marginTop: 10, fontFamily: "Gilroy", fontWeight: 300}}

        activeTitleStyle={{textAlign: 'center', fontSize: 24, fontWeight: 500, color: '#15c97b', marginTop: 10, fontFamily: "Gilroy", fontWeight: 700}}

        tabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5, borderLeft: "1px solid white", borderRight: "1px solid white" }}
        activeTabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5, borderLeft: "1px solid green", borderRight: "1px solid green" }}
        hoverTabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 3, marginBottom: 3, borderLeft: "1px solid white", borderRight: "1px solid white",  borderTop: "1px solid white", borderBottom: "1px solid white" }}

        drawerColor="white"
        drawerHoverColor=" #E9F1FF"
      />
    )
}