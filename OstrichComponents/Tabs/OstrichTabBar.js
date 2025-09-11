import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { TabItem } from './TabItem';
import { title } from 'process';

export const OstrichTabBar = ({ 
    startingTabByTitle = false,     // the Title of the Tab you want selected by default
    startingTabByIndex = false,     // the Index of the Tab you want selected by default

    tabs,                           // Array of Objects for Tab Information

    style,                          // The Style of the Tab Bar itself

    titleStyle,                     //- The text styles for each Tab Title
    activeTitleStyle,               //- The text styles for each Tab Title WHEN ACTIVE
    hoverTitleStyle,                //- The text styles for each Tab Title WHEN HOVERED

    tabStyle,                       //- The Style of each Tab in the TabBar 
    activeTabStyle,                 //- The Style of each Tab in the TabBar WHEN ACTIVE
    hoverTabStyle,                  //- The Style of each Tab in the TabBar WHEN HOVERED

    drawerStyle,                    //- The Style of each Drawer in a Dropdown Tab
    activeDrawerStyle,              //- The Style of each Drawer in a Dropdown Tab WHEN ACTIVE
    hoverDrawerStyle,               //- The Style of each Drawer in a Dropdown Tab WHEN HOVERED

    onTabClick,                     //- Default onClick for Tab Items
    tabDeactivates=false,           //- If true, clicking on an already active tab will deactivate it. If false, you can only deactivate tabs by switching to a new one      
    onDrawerClick=false,            //- Default onClick for Drawers
    manualActiveTab=false,

    showsHover = true,              //- If false, Tabs do not change style on hover
    onTabHover,                     //- Runs on Tab Hover

    showsActive = true              //- If false, Tabs do not change style on open / active
    
}) => {
   
    ///////////
    // State //
    ///////////

        // Loading
        const [loading, setLoading] = useState(true)

        // Tab States
        const [activeTab, setActiveTab] = useState(false)
        const [hoveredTab, setHoveredTab] = useState(false)

        // Bar Style
        const [barStyle, setBarStyle] = useState(false)

        // Text Styles
        const [titleStyleX, setTitleStyleX] = useState(false)
        const [activeTitleStyleX, setActiveTitleStyleX] = useState(false)
        const [hoverTitleStyleX, setHoverTitleStyleX] = useState(false)

        // Tab Styles
        const [tabStyleX, setTabStyleX] = useState(false)
        const [activeTabStyleX, setActiveTabStyleX] = useState(false)
        const [hoverTabStyleX, setHoverTabStyleX] = useState(false)

        useEffect(() => {
            checkAllStyles()
            hasNeededValues()
        }, [])

        useEffect(() => {
            console.log("Updated activeTab:", activeTab);
          }, [activeTab]);

        // Sets Starting Tab
        // useEffect(() => {
        //     if (startingTabByIndex){
        //         setActiveTab(tabs[startingTabByIndex])
        //     }
        //     else if (startingTabByTitle){
        //     }
        // }, [])

    ///////////////
    // Functions //
    ///////////////

        // Determines if Tab is Active or not 
        function isActive(tab){
            if (activeTab?.title){
                if (activeTab.title === tab.title){
                    return true
                }
            }
            else{
                if (activeTab === tab){
                    return true
                }
            }
            return false
        }

         // Determines if Tab is Hovered or not 
         function isHovered(tab){
            if (hoveredTab?.title){
                if (hoveredTab.title === tab.title){
                    return true
                }
            }
            else{
                if (hoveredTab === tab){
                    return true
                }
            }
            return false
        }

        // STYLE COMPLETORS //

            // Checks all Styles
            function checkAllStyles(){
                checkTabStyle()
                checkActiveStyle()
                checkHoverStyle()
                setDefaultBarStyles()
            }

            // Bar Style Defaults
            function setDefaultBarStyles(){
                let tempBar = {
                    width: '300px',
                    height: '40px',
                    borderRight: "1px solid black",
                    borderLeft: "1px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black"
                }
                setBarStyle({...tempBar, ...style})
            }

            // Checks Default Imported Styles
            function checkTabStyle(){
                let tempTabStyleX = {
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderLeft: "0.5px solid black",
                    borderRight: "0.5px solid black",
                    color: 'black',
                    height: '100%'
                }
                setTabStyleX({...tempTabStyleX, ...tabStyle})

                let tempTitleStyle = {
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 500,
                        color: "black"
                }
                setTitleStyleX({...tempTitleStyle, ...titleStyle})
            }
            
            // Checks Default Imported Active Styles
            function checkActiveStyle(){
                let tempActiveTitleStyle = {
                    ...titleStyleX,
                    fontWeight: 600
                }
                setActiveTitleStyleX({...tempActiveTitleStyle, ...activeTitleStyle})

                setActiveTabStyleX({
                    ...tabStyleX,
                    backgroundColor: "#c3e2fa",
                    ...activeTabStyle
                })
            }

            // Checks Default Imported Hover Styles
            function checkHoverStyle(){
                setHoverTitleStyleX({...titleStyleX, ...hoverTitleStyle})
                let temp = {
                    ...tabStyleX, 
                    ...hoverTabStyle
                }
                if (!temp.backgroundColor){
                    temp = {...temp, backgroundColor: "#a5a8a8",}
                }
                setHoverTabStyleX(temp)
            }
        
        // PROP CHECKS //

            // Checks Valid Mandatory inputs
            function hasNeededValues(){
                if (!tabs || tabs.length === 0){
                   throw new Error("No valid 'tabs' prop provided! This needs to be an array of objects. You provided ", tabs)
                }

            }

        // Handlers / Determinators //

            // Determines whether to use onPress or TabObj.onPress
            function determineOnPress(tab){
                console.log("Detected Tab Click ", tab)
                if (tab.clickable === false){
                    return
                }
                else{
                    if (tab?.onClick){
                        tab.onClick(tab)
                    }
                    if (onTabClick){
                        onTabClick(tab)
                    }
                    if (showsActive){
                        if (tabDeactivates){
                            if (isActive(tab)){
                                console.log("Setting FALSE")
                                setActiveTab(false)
                                return
                            }
                            else{
                                console.log("Setting ", tab, " as active")
                                setActiveTab(tab)
                            }
                        }
                        else{
                            console.log("Setting ", tab, " as active")
                            setActiveTab(tab)
                        }
                    }
                }
            }

            // Handles onHover Function(s) and Sets Active
            function handleMouseEnterTab(tab){
                if (tab?.onHover){
                    tab.onHover(tab)
                }
                if (onTabHover){
                    onTabHover(tab)
                }
                if (showsHover){
                    setHoveredTab(tab)
                }
                
            }

            // Sets Hovered Tab to false
            function handleMouseLeaveTab(){
                setHoveredTab(false)
            }


    ////////////////
    // Renderings //
    ////////////////

        // Renders the Row containing the Tab Items
        function renderTabRow(){
            return(
                <div style={{flexDirection: 'row', display: 'flex', flex: 1}}>
                    {renderTabItems()}
                </div>
            )
        }

        // Renders Each Tab Item
        function renderTabItems(){
            return tabs.map((tab, i) => {
                return(
                    <TabItem
                    key={i}

                    title={tab.title ? tab.title : tab}
                    tabObj={tab}
                    index={i}     

                    isActive={isActive(tab)}

                    showsHover={!tab.showsHover}
                    isHovered={isHovered(tab)}

                    style={tabStyleX}
                    flex={tab.flex ? tab.flex : 1}
                    textStyle={titleStyleX}

                    activeStyle={activeTabStyleX}
                    activeTextStyle={activeTitleStyleX}
                    
                    hoverStyle={hoverTabStyleX}
                    hoverTextStyle={hoverTitleStyleX}

                    dropdown={tab.dropdown ? tab.dropdown : false}
                    drawerStyle={drawerStyle}
                    activeDrawerStyle={activeDrawerStyle}
                    hoverDrawerStyle={hoverDrawerStyle}

                    onPress={(tab) => determineOnPress(tab)}
                    onDrawerClick={ onDrawerClick ? (tab => onDrawerClick(tab)) : null}

                    onMouseEnter={(tab) => handleMouseEnterTab(tab)}
                    onMouseLeave={(tab) => handleMouseLeaveTab(tab)}
                    />
                )
            })
        }

    /////////////////
    // Main Return //
    /////////////////

    return (
        <div style={{ ...barStyle}}>
            <div style={{width: '100%', display: 'flex' }}>
                {renderTabRow()}
            </div>
        </div>
    );
};


///////////////////////
// Prop Restrictions //
///////////////////////

// OstrichTabBar.propTypes = {
//     tabs: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             isActive: PropTypes.bool,
//             dropdown: PropTypes.shape({
//                 style: PropTypes.object,
//                 onMouseEnter: PropTypes.func,
//                 onMouseLeave: PropTypes.func,

//                 openOnHover: PropTypes.bool,
//                 manualOpen: PropTypes.bool,
//                 open: PropTypes.bool,

//                 obj: PropTypes.object,
//                 drawers: PropTypes.array,
                
//                 dr: PropTypes.string,
//                 activeColor: PropTypes.string,
//                 titleStyle: PropTypes.object,
//                 activeTitleStyle: PropTypes.object,
//             })
//         })
//     ).isRequired,
//     style: PropTypes.object,
//     titleStyle: PropTypes.object,
//     activeTitleStyle: PropTypes.object,
//     hoverTitleStyle: PropTypes.object,
//     activeTabStyle: PropTypes.object,
    
//     dropDownTextStyle: PropTypes.object,
//     dropDrawerColor: PropTypes.string,
//     activeDropDrawerColor: PropTypes.string
// };