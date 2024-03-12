// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../recoil/atoms";

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

    const [directory, setDirectory] = useRecoilState(directoryDataState)

    const [tabBar, setTabBar] = useRecoilState(tabBarState)

    const [tabs, setTabs] = useState([])

    const [loading, setLoading] = useState(true)

    const router = useRouter()

////////////////
// UseEffects //
////////////////

    useEffect(() => {
        setTabs(determineTabs())
        setLoading(false)
    }, [directory])

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

    // User
    const userTabs = [
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
                drawers: ["Progress", "Lesson Plan", "Settings"],
                onDrawerClick: (drawer) => router.replace(`/frameworks/${drawer}`)
            }
        }
    ]

    // Variables
    const basicsTabs = [
        {
            title: "Definitions",
            onClick: (() => router.replace("/concepts/basics/definitions"))
        },
        {
            title: "Lessons",
            dropdown: {
                openOnHover: true,
                drawers: ["Variables", "Data Types", "Objects", "Functions", "Classes"]
            }
        },
        {
            title: "Tests",
            dropdown: {
                openOnHover: true,
                drawers: ["Data Types", "Operators", "Functions Test",]
            }
        },
        {
            title: "Labs",
            dropdown: {
                openOnHover: true,
                drawers: ["Basics Mastery Lab",]
            }
        },
        {
            title: "Return",
            onClick: (() => router.replace("/"))
        }
    ]

///////////////
// Functions //
///////////////

    function determineTabs(){
        console.log(directory)
        if (directory === "Basics"){
            return basicsTabs
        }
        else if (token){
            return userTabs
        }
        else if (!token){
            return guestTabs
        }
    }

//////////
// MAIN //
//////////

    function MAIN(){
        if (loading){
            return
        }
        console.log("TABS:::::")
        console.log(tabs)
        return(
            <OstrichTabBar 
            startingTabByTitle={tabBarState}
            tabs={tabs}
    
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

    return MAIN()    
}