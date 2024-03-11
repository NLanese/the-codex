import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { TabItem } from './TabItem';

export const OstrichTabBar = ({ 
    startingTabByTitle,
    tabs,                   // Array of Objects for Tab Information

    style,                  // The Style of the Tab Bar itself
    titleStyle,             // The text styles for each Tab Title

    activeTitleStyle,       
    hoverTitleStyle,

    tabStyle,
    activeTabStyle,
    hoverTabStyle,

    onTabClick,
    onDrawerClick,
    manualActiveTab=false,

    drawerStyle,
    drawerColor, 
    activeDrawerColor,
    hoverDrawerColor,
}) => {
   
    ///////////
    // State //
    ///////////

        const [loading, setLoading] = useState(true)

        const [activeTab, setActiveTab] = useState(startingTabByTitle ? startingTabByTitle : false)

        const [titleStyleX, setTitleStyleX] = useState(titleStyle ? titleStyle : false)
        const [activeTitleStyleX, setActiveTitleStyleX] = useState(activeTitleStyle ? activeTitleStyle : false)
        const [hoverTitleStyleX, setHoverTitleStyleX] = useState(hoverTitleStyle ? hoverTitleStyle : false)

        const [tabStyleX, setTabStyleX] = useState(tabStyle ? tabStyle : false)
        const [activeTabStyleX, setActiveTabStyleX] = useState(activeTabStyle ? activeTabStyle : false)
        const [hoverTabStyleX, setHoverTabStyleX] = useState(hoverTabStyle ? hoverTabStyle : false)

        useEffect(() => {
            checkAllStyles()
        }, [])

    ///////////////
    // Functions //
    ///////////////

        // Determines if Tab is Active or not 
        function isActive(tab){
            if (activeTab === tab.title){
                return true
            }
            return false
        }

        // STYLE CHECKERS //

            // Checks all Styles
            function checkAllStyles(){
                checkTabStyle()
                checkActiveStyle()
            }

            // Checks Default Imported Styles
            function checkTabStyle(){
                if (!tabStyleX){
                    setTabStyleX({
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginTop: 6,
                        marginBottom: 6, 
                        borderLeft: "0.5px solid #E9F1FF",
                        borderRight: "0.5px solid #E9F1FF",
                        backgroundColor: 'rgba(189, 236, 255, 0.35)'
                    })
                }

                if (!titleStyleX){
                    setTitleStyleX({
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 500
                    })
                }
            }

            // Checks Default Imported Active Styles
            function checkActiveStyle(){
                if (!activeTitleStyleX){
                    setActiveTitleStyleX({
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 600
                    })
                }

                if (!activeTabStyleX && style){
                    setActiveTabStyleX({
                        ...style,
                        backgroundColor: 'rgba(49, 255, 73, 0.35)',
                    })
                }
                else if (!activeTabStyle){
                    setActiveTabStyleX({
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 8,
                        paddingBottom: 8,
                        marginTop: 6,
                        marginBottom: 6, 
                        borderLeft: "0.5px solid #E9F1FF",
                        borderRight: "0.5px solid #E9F1FF",
                        backgroundColor: 'rgba(49, 255, 73, 0.45)'
                    })
                }
            }

        // DETERMINATIONS //

            // Determines whether to use onPress or TabObj.onPress
            function determineOnPress(tab){
                if (tab.onClick){
                    return tab.onClick
                }
                else if (onTabClick){
                    return onTabClick
                }
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

                    title={tab.title}
                    tabObj={tab}
                    index={i}       
                    isActive={isActive(tab)}
                    setActiveTab={setActiveTab}

                    style={tabStyleX}
                    flex={tab.flex ? tab.flex : 1}
                    textStyle={titleStyleX}

                    activeStyle={activeTabStyleX}
                    activeTextStyle={activeTitleStyleX}
                    
                    hoverStyle={hoverTabStyleX}
                    hoverTextStyle={hoverTitleStyleX}

                    dropdown={tab.dropdown ? tab.dropdown : false}
                    dropdownStyles={false}
                    drawerColor={drawerColor}
                    activeDrawerColor={activeDrawerColor}
                    hoverDrawerColor={hoverDrawerColor}

                    onPress={determineOnPress(tab)}
                    onDrawerClick={onDrawerClick}
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