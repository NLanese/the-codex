// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState } from "../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import { OstrichTabBar } from "@Ostrich/Tabs/OstrichTabBar";

// Constants
import { conceptsList, languagesList, frameworksList } from "../../constants/lessonLists";


export const HeaderBar = ({}) => {

///////////
// State //
///////////

    const [token, setToken] = useRecoilState(tokenState)

    const [directory, setDirectory] = useRecoilState()

    const [tabBar, setTabBar] = useRecoilState(tabBarState)

    const router = useRouter()

//////////////
// Contants //
//////////////

    // Guest
    const guestTabs = [
        {
            title: "Concepts", 
            onClick: () => {
                setTabBar("Concepts")
                router.replace("/concepts/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: conceptsList,
                onDrawerClick: (drawer) => router.replace(`/concepts/${drawer}/menu`)
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
                drawers: languagesList,
                onDrawerClick: (drawer) => router.replace(`/languages/${drawer.title}/menu`)
            }
        },
        {
            title: "Front End", 
            onClick: () => {
                setTabBar("Frameworks")
                router.replace("/frameworks/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: frameworksList,
                onDrawerClick: (drawer) => router.replace(`/frameworks/${drawer.title}/menu`)
            }
        },
        {
            title: "Back End", 
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

    // Variables
    const variablesTab = [
        {
            title: "Definitions",
            onClick: (() => router.replace("/concepts/variables/definitions"))
        },
        {
            title: "Lessons",
            dropdown: {
                openOnHover: true,
                drawers: ["What is a Variable", "Data Types", "Objects", "Classes"]
            }
        },
        {
            title: "Tests",
            dropdown: {
                openOnHover: true,
                drawers: ["Data Types", "Variables Test"]
            }
        },
        {
            title: "Return",
            onClick: (() => router.replace("/"))
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