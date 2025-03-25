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
                    display: "flex",
                    height: 50, width: '99%', 
                    backgroundColor: '#11013b', boxShadow:'5px 10px 30px 5px rgba(40, 40, 40, 0.4)', 
                    alignItems: 'center', justifyContent: 'center',
                }}
                titleStyle={{fontFamily: "Gilroy",  color: 'white',  fontWeight: 300, textAlign: 'center', textAlignVertical: 'center', fontSize: 24}}
                activeTitleStyle={{color: '#15c97b',  fontWeight: 700}}
                hoverTitleStyle={{color: '#15c97b',  fontWeight: 500}}
        
                tabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5, borderLeft: "1px solid white", borderRight: "1px solid white" }}
                activeTabStyle={{borderLeft: "1px solid green", borderRight: "1px solid green" }}
                hoverTabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 3, marginBottom: 3, borderLeft: "1px solid white", borderRight: "1px solid white",  borderTop: "1px solid white", borderBottom: "1px solid white" }}
        
                drawerColor="white"
                drawerHoverColor=" #E9F1FF"
              />
            )
        }
    }

    return MAIN()    
}