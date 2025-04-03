// React
import React, {useEffect, useState, useRef} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import { OstrichTabBar } from "@Ostrich/Tabs/OstrichTabBar";

// Constants
import { guestTabs, userTabs, basicsTabs } from "../../constants/tabBars";

export const HeaderBar = ({
    // directory
}) => {

///////////
// State //
///////////

    const [token, setToken] = useRecoilState(tokenState)

    const [directory, setDirectory] = useRecoilState(directoryDataState)

    const [tabBar, setTabBar] = useRecoilState(tabBarState)

    const [tabs, setTabs] = useState([])

    const tabsRef = useRef(tabs)
    useEffect(() => {
        tabsRef.current = tabs
    }, [tabs])

    const [loading, setLoading] = useState(true)

    const router = useRouter()

////////////////
// UseEffects //
////////////////

    useEffect(() => {
        setLoading(true)
        setTabs(determineTabs())
    }, [directory])

    useEffect(() => {
        if(tabs){
            setLoading(false)
        }
    }, [tabs])
//////////////
// Contants //
//////////////



///////////////
// Functions //
///////////////

    // Determines which set of Tabs should render on the TabBar
    function determineTabs(){
        if (directory === "Basics"){
            return basicsTabs(setTabBar, router)
        }
        else if (token){
            return userTabs(setTabBar, router)
        }
        else if (!token){
            return guestTabs(setTabBar, router)
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
                startingTabByTitle={tabBar}
                tabs={tabs}
                style={{
                    height: 55, width: '100%', 
                    backgroundColor: '#11013b', 
                    boxShadow:'5px 10px 15px 5px rgba(40, 40, 40, 0.4)',
        
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