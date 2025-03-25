import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { TabItem } from './TabItem';

export const OstrichTabBar = ({ 
    startingTabByTitle = false,     // the Title of the Tab you want selected by default
    startingTabByIndex = false,     // the Index of the Tab you want selected by default

    tabs,                           // Array of Objects for Tab Information

    style,                          // The Style of the Tab Bar itself

    titleStyle,                     // The text styles for each Tab Title
    activeTitleStyle,               // The text styles for each Tab Title WHEN ACTIVE
    hoverTitleStyle,                // The text styles for each Tab Title WHEN HOVERED

    tabStyle,                       // The Style of each Tab in the TabBar 
    activeTabStyle,                 // The Style of each Tab in the TabBar WHEN ACTIVE
    hoverTabStyle,                  // The Style of each Tab in the TabBar WHEN HOVERED

    drawerStyle,                    // The Style of each Drawer in a Dropdown Tab
    activeDrawerStyle,              // The Style of each Drawer in a Dropdown Tab WHEN ACTIVE
    hoverDrawerStyle,               // The Style of each Drawer in a Dropdown Tab WHEN HOVERED

    onTabClick,                     // Default onClick for Tab Items
    onDrawerClick,                  // Default onClick for Drawers
    manualActiveTab=false,

    showsHover = true,
    onTabHover,
    
}) => {
   
    ///////////
    // State //
    ///////////

        // Loading
        const [loading, setLoading] = useState(true)

        // Tab States
        const [activeTab, setActiveTab] = useState(false)
        const [hoveredTab, setHoveredTab] = useState(false)

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

    ///////////////
    // Functions //
    ///////////////

        // Determines if Tab is Active or not 
        function isActive(tab){
            if (activeTab.title){
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
            if (hoveredTab.title){
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
            }

            // Checks Default Imported Styles
            function checkTabStyle(){
                let tempTabStyleX = {
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginTop: 6,
                    marginBottom: 6, 
                    borderLeft: "0.5px solid #E9F1FF",
                    borderRight: "0.5px solid #E9F1FF",
                    backgroundColor: 'rgba(189, 236, 255, 0.35)',
                    color: 'black'
                }
                setTabStyleX({...tempTabStyleX, tabStyle})

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
                    fontSize: 16,
                    fontWeight: 600
                }
                setActiveTitleStyleX({...tempActiveTitleStyle, activeTitleStyle})

                setActiveTabStyleX({
                    ...tabStyleX,
                    backgroundColor: "#c3e2fa",
                    ...activeTabStyle
                })
            }

            // Checks Default Imported Hover Styles
            function checkHoverStyle(){
                setHoverTitleStyleX({...titleStyleX, hoverTitleStyle})
                setHoverTabStyleX({
                    ...tabStyleX, 
                    backgroundColor: "#a5a8a8",
                    ...hoverTabStyle
                })
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
                if (tab.onClick){
                    tab.onClick(tab)
                }
                if (onTabClick){
                    onTabClick(tab)
                }
            }

            // Handles onHover Function(s) and Sets Active
            function handleMouseEnterTab(tab){
                console.log(tab)
                if (tab?.onHover){
                    tab.onHover(tab)
                }
                if (onTabHover){
                    onTabHover(tab)
                }
                setHoveredTab(tab)
            }

            // Sets Hovered Tab to false
            function handleMouseLeaveTab(tab){
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
                    setActiveTab={setActiveTab}

                    showsHover={!tab.showsHover}
                    isHovered={isHovered(tab)}
                    setHoveredTab={setHoveredTab}

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
                    onDrawerClick={(tab => onDrawerClick(tab))}

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
        <div style={{ ...style, display: 'flex' }}>
           {renderTabRow()}
        </div>
    );
};


///////////////////////
// Prop Restrictions //
///////////////////////

OstrichTabBar.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            isActive: PropTypes.bool,
            dropdown: PropTypes.shape({
                style: PropTypes.object,
                onMouseEnter: PropTypes.func,
                onMouseLeave: PropTypes.func,

                openOnHover: PropTypes.bool,
                manualOpen: PropTypes.bool,
                open: PropTypes.bool,

                obj: PropTypes.object,
                drawers: PropTypes.array,
                
                dr: PropTypes.string,
                activeColor: PropTypes.string,
                titleStyle: PropTypes.object,
                activeTitleStyle: PropTypes.object,
            })
        })
    ).isRequired,
    style: PropTypes.object,
    titleStyle: PropTypes.object,
    activeTitleStyle: PropTypes.object,
    hoverTitleStyle: PropTypes.object,
    activeTabStyle: PropTypes.object,
    
    dropDownTextStyle: PropTypes.object,
    dropDrawerColor: PropTypes.string,
    activeDropDrawerColor: PropTypes.string
};