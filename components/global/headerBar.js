// React
import React, {useEffect, useState, useRef} from "react";

// Recoil
import { useAtom } from "jotai";
import { tokenState, tabBarState, directoryDataState } from "../../jotai/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import { OstrichTabBar } from "@Ostrich/Tabs/OstrichTabBar";

// Constants
import { guestTabs, userTabs, basicsTabs, portfolioTabs } from "../../constants/tabBars";

export const HeaderBar = ({
    // directory
}) => {

///////////
// State //
///////////

    const [token, setToken] = useAtom(tokenState)

    // Which Tab Bar is Rendered (Guest, User, Lessons, Portfolio, etc)
    const [directory, setDirectory] = useAtom(directoryDataState)

    // Active Tab Bar
    const [activeTabBar, setActiveTabBar] = useAtom(tabBarState)

    // The Array of Objects to be used as Tabs that are Rendered
    const [tabs, setTabs] = useState([])
    const tabsRef = useRef(tabs)
    useEffect(() => {
        tabsRef.current = tabs
    }, [tabs])

    // Loading
    const [loading, setLoading] = useState(true)

    // Router
    const router = useRouter()

////////////////
// UseEffects //
////////////////

    useEffect(() => {
        setLoading(true)
        setTabs(determineTabs())
    }, [directory])

    useEffect(() => {
        setLoading(true)
        if(tabs){
            setLoading(false)
        }
    }, [tabs])

    useEffect(() => {
        setLoading(true)
        if(activeTabBar){
            setLoading(false)
        }
    }, [activeTabBar])

//////////////
// Contants //
//////////////



///////////////
// Functions //
///////////////

    // Determines which set of Tabs should render on the TabBar
    function determineTabs(){
        if (directory === "Portfolio"){
            return portfolioTabs(setActiveTabBar, router)
        }
        else if (token){
            return userTabs(setActiveTabBar, router)
        }
        else if (!token){
            return guestTabs(setActiveTabBar, router)
        }
    }


//////////
// MAIN //
//////////

    function MAIN(){
        if (loading){
            return
        }
        else{
            return(
                <OstrichTabBar 
                startingTabByTitle={activeTabBar}
                startedActive={true}
                tabs={tabs}
                style={{
                    height: 55, width: '100%', 
                    boxShadow:'5px 10px 15px 5px rgba(40, 40, 40, 0.4)',
                    boxSizing: 'border-box', position: 'sticky'
        
                }}

                titleStyle={{
                    fontFamily: "Gilroy", fontWeight: 500, fontSize: 17,
                    color: 'white', alignItems: 'center', 
                }}
                activeTitleStyle={
                    {color: 'lime',  fontWeight: 700, fontSize: 18,}
                }
                hoverTitleStyle={
                    {color: 'lime',  fontWeight: 600, fontSize: 18,}
                }
        
                tabStyle={{
                    borderLeft: "1px solid white", borderRight: "1px solid white",
                    backgroundColor: '#11013b', color: "#efefef",
                    borderRadius: 0, padding: 0,
                }}
                hoverTabStyle={{
                    backgroundColor: '#11013b', 
                    color: 'lime'
                }}
                activeTabStyle={{
                    borderLeft: "3px solid lime", borderRight: "3px solid lime",
                    color: 'lime', backgroundColor: '#11013b'
                }}

                drawerStyle={
                    {color: 'black'}
                }
                
        
              />
            )
        }
    }

    return MAIN()    
}
