"use client";

import React, { useEffect, useState, useRef } from 'react';
import { OstrichDropDown } from '../Dropdown/OstrichDropDown';
import PropTypes from 'prop-types';


export const TabItem = ({

    title,                  // Tab Title
    tabObj,                 // Tab Object (Optional) Can hold data like dropdowns and functions
    index,                  // The index of this item in the greater Tab Array

    isActive,               // Is Active 

    showsHover,
    isHovered,

    style,                  // Style for the Component
    flex,                   // This is only used when in the TabBar Component
    textStyle,              // The Style for the Tab Title

    activeStyle,            // Style for Component when Active
    activeTextStyle,        // Style for Componet Text when Active

    hoverStyle,             // 
    hoverTextStyle,         //

    dropdown=false,         // Determines whether this is a static Tab or a Dropdown Meni
    drawerStyle=false,      // Drawer Style (Dropdowns)
    activeDrawerStyle=false,
    hoverDrawerStyle=false,

    onPress,                // Function that runs on Tab Clicks
    onDrawerClick,          // Function that runs on ALL Drawer Clicks (Drodpowns)

    onMouseEnter,
    onMouseLeave,
}) => {
    ////////////
    // States //
    ////////////

    const [isActiveX, setIsActiveX] = useState(isActive)
    useEffect(() => {
        setIsActiveX(isActive)
    }, [isActive])
    const [isHoveredX, setIsHoveredX] = useState(isHovered)

    ///////////////
    // Functions //
    ///////////////

        // Determines GENERAL or SPECIFIC Drawer Style
        function determineDrawerStyle(type, dropdown){
            if (type === "regular"){
                if (dropdown.drawerStyle){
                    return {...drawerStyle, ...dropdown.drawerStyle}
                }
                else{
                    return drawerStyle
                }
            }
            if (type === "active"){
                if (dropdown.activeDrawerStyle){
                    return {...activeDrawerStyle, ...dropdown.activeDrawerStyle}
                }
                else{
                    return activeDrawerStyle
                }
            }
            else if (type === "hover"){
                if (dropdown.hoverDrawerStyle){
                    return {...hoverDrawerStyle, ...dropdown.hoverDrawerStyle}
                }
                else{
                    return hoverDrawerStyle
                }
            }
        }

        // Determines GENERAL or SPECIFIC Tab Style
        function  determineBoxStyle(type, tab){
            let rObj = {}

            // Regular 
            if (type === "regular"){
                if (tab?.style){
                    rObj = {...style, ...tab.style}
                }
                else{
                    rObj = style
                }
            }

            // Active / Opened
            if (type === "active"){
                if (tab?.activeStyle){
                    rObj = {...style, ...activeStyle, ...tab.activeStyle}
                }
                else{
                    rObj = {...style, activeStyle}
                }                
            }

            // Hovered (While Closed)
            else if (type === "hover" && showsHover){
                if (tab.showsHover === false){
                    return determineBoxStyle('regular', tab)
                }
                if (tab?.hoverStyle){
                    rObj = {...style, ...hoverStyle, ...tab.hoverStyle}
                }
                else{
                    rObj = {...style, ...hoverStyle}
                }
            }

            if (!rObj?.minWidth){
                rObj = {...rObj, minWidth: '0'}
            }
            if (!rObj?.borderRadius){
                rObj = {...rObj, borderRadius: '0'}
            }
            return (rObj ? {...rObj, maxHeight: '100%'} : {})
        }

        // Determines GENERAL or SPECIFIC Text Style
        function  determineTextStyle(type, tab){
            let rObj = {}

            // Regular 
            if (type === "regular"){
                if (tab?.style){
                    rObj = {...textStyle, ...tab.textStyle}
                }
                else{
                    rObj = textStyle
                }
            }

            // Active / Opened
            if (type === "active"){
                if (tab?.activeTextStyle){
                    rObj = {...activeTextStyle, ...tab.activeTextStyle}
                }     
                else{
                    rObj = {...textStyle, activeTextStyle}
                }      
            }

            // Hovered (While Closed)
            else if (type === "hover" && showsHover){
                if (tab.showsHover === false){
                    return determineBoxStyle('regular', tab)
                }
                if (tab?.hoverTextStyle){
                    rObj = {...textStyle, ...hoverTextStyle, ...tab.hoverTextStyle}
                }
                else{
                    rObj = {...textStyle, hoverTextStyle}
                } 
            }

            if (!rObj?.minWidth){
                rObj = {...rObj, minWidth: '0'}
            }
            if (!rObj?.borderRadius){
                rObj = {...rObj, borderRadius: '0'}
            }
            return ({...rObj, maxHeight: '100%'})
        }

        // Determine the Drawer Press Handlers
        function determineDrawerPress(drawer){
            if (onDrawerClick){
                onDrawerClick(drawer)
            }
            if (dropdown?.onDrawerClick){
                dropdown.onDrawerClick(drawer)
            }

        }

        // Applies Default Styles
        function applyTabDefaultStyles(style){
            let rObj = {
                display: 'flex',
                minHeight: 30,
                textAlignVertical: 'center', textAlign: 'center',
                position: 'relative',
                backgroundColor:"#efefef", 
                borderTop: "0.5px solid black", 
                borderBottom: "0.5px solid black", 
                borderLeft: "px solid black", 
                borderRight: "1px solid black", 
                borderRadius: 0,
                justifyContent: 'center', 
                alignContent: 'center',
                alignItems: 'center',
                fontFamily: "Gilroy",
                fontWeight: 500,
            }
            if (!rObj.height){
                rObj.height = "100%"
            }
            return {...rObj, ...style}
        }


        // On Mouse Enter or Leave
        function tabOnMouse(type, tabObj){
            if (type === "leave"){
                setIsHoveredX(false)
                if (onMouseLeave){
                    onMouseLeave(tabObj)
                }
            }
            else{
                setIsHoveredX(true)
                if (onMouseEnter){
                    onMouseEnter(tabObj)
                }
            }
        }

        function tabOnClick(tabObj){
            // setIsActiveX(!isActiveX)
            if (onPress){
                onPress(tabObj)
            }
        }


    ////////////////
    // Renderings //
    ////////////////

        // Renders a Button as a Tab
        const renderTab = () => {
            let styleType = (isActiveX ? "active" : "regular")
            if (isHoveredX && !isActiveX){
                styleType = "hover"
            }
            return(
                <div
                style={applyTabDefaultStyles(determineBoxStyle(styleType, tabObj))}
                // onClick={() => onPress(tabObj)}
                onMouseEnter={() => tabOnMouse("enter", tabObj)}
                onMouseLeave={() => tabOnMouse("leave", tabObj)}
                >
                    <p style={determineTextStyle(styleType, tabObj)}>
                        {title}
                    </p>
                </div>
            )
        }

        // Renders a Dropdown Menu as a Tab
        function renderDropTab(){
            return(
                <OstrichDropDown
                title={title}

                onClick={(tab) => tabOnClick(tab)}
                onMouseEnter={() => onMouseEnter(tabObj)}
                onMouseLeave={() => onMouseLeave(tabObj)}

                obj={dropdown}
                drawers={dropdown.drawers}
                onDrawerClick={(drawer) => determineDrawerPress(drawer)}

                openOnHover={(dropdown.openOnHover === false ? false : true)}
                closeOnLeave={(dropdown.closeOnLeave === false ? false : true)}
                manualOpen={dropdown.manualOpen}
                open={isActiveX}

                boxHovers={(showsHover || tabObj.showsHover)}
                drawersHover={(dropdown.drawersShowHover === false) ? false : true}

                titleStyle={textStyle}
                hoverTitleStyle={hoverTextStyle}
                activeTitleStyle={activeTextStyle}

                drawerStyle={determineDrawerStyle("regular", dropdown)}
                activeDrawerStyle={determineDrawerStyle("active", dropdown)}
                hoverDrawerStyle={determineDrawerStyle("hover", dropdown)}

                boxStyle={determineBoxStyle("regular", tabObj)}
                activeBoxStyle={determineBoxStyle("active", tabObj)}
                hoverBoxStyle={determineBoxStyle("hover", tabObj)}
                
                noBorder={(style.border || tabObj.style?.border) ? false : true}
                noShadow={(style.boxShadow || tabObj.style?.boxShadow) ? false : true}

                isTabItem={true}
                isActiveTab={isActiveX}
                />
            )
        }

        // Main Render
        function MAIN(){
            if (dropdown){
                return(
                    <div style={{flex: flex, flex: 1}}
                    onClick={() => tabOnClick(tabObj)}
                    onMouseEnter={() => tabOnMouse("enter", tabObj)}
                    onMouseLeave={() => tabOnMouse("leave", tabObj)}    
                    >
                        {renderDropTab()}
                    </div>
                )
            }
            else{
                return(
                    <div style={{flex: flex, flex: 1}}
                    onClick={() => tabOnClick(tabObj)}
                    onMouseEnter={() => tabOnMouse("enter", tabObj)}
                    onMouseLeave={() => tabOnMouse("leave", tabObj)}    
                    >
                        {renderTab()}
                    </div>
                )
            }
        }
    
    return MAIN()
}