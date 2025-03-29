import React, { useEffect, useState, useRef } from 'react';
import { OstrichDropDown } from '../Dropdown/OstrichDropDown';
import PropTypes from 'prop-types';
import { root } from 'postcss';


export const TabItem = ({

    title,                  // Tab Title
    tabObj,                 // Tab Object (Optional) Can hold data like dropdowns and functions
    index,                  // The index of this item in the greater Tab Array

    isActive,               // Is Active 
    setActiveTab,           // Used to set the Active Tab in the greater Tab Bar

    showsHover,
    isHovered,
    setHoveredTab,

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

    ///////////////
    // Functions //
    ///////////////

        // Extracts Text Styles and Applies to Drop Styles
        function applyTextStyles(textStyle, rObj){
            if (textStyle.fontSize){
                rObj = {...rObj, fontSize: textStyle.fontSize}
            }
            if (textStyle.fontFamily){
                rObj = {...rObj, fontFamily: textStyle.fontFamily}
            }
            if (textStyle.fontWeight){
                rObj = {...rObj, fontWeight: textStyle.fontWeight}
            }
            if (textStyle.letterSpacing){
                rObj = {...rObj, letterSpacing: textStyle.letterSpacing}
            }
            if (textStyle.textAlign){
                rObj = {...rObj, textAlign: textStyle.textAlign}
            }
            if (textStyle.textAlignVertical){
                rObj = {...rObj, textAlignVertical: textStyle.textAlignVertical}
            }
            if (textStyle.display){
                rObj = {...rObj, display: textStyle.display}
            }
            if (textStyle.justifyContent){
                rObj = {...rObj, justifyContent: textStyle.justifyContent}
            }
            if (textStyle.alignContent){
                rObj = {...rObj, alignContent: textStyle.alignContent}
            }
            if (textStyle.justifyItems){
                rObj = {...rObj, justifyItems: textStyle.justifyItems}
            }
            if (textStyle.alignItems){
                rObj = {...rObj, alignItems: textStyle.alignItems}
            }
            if (textStyle.color){
                rObj = {...rObj, color: textStyle.color}
            }
            return rObj
        }

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
                rObj = applyTextStyles(textStyle, rObj)
            }

            // Active / Opened
            if (type === "active"){
                if (tab?.activeStyle){
                    rObj = {...activeStyle, ...tab.activeStyle}
                }
                else{
                    rObj = activeStyle
                }
                rObj = applyTextStyles(({...textStyle, activeTextStyle}), rObj)
            }

            // Hovered (While Closed)
            else if (type === "hover"){
                if (tab?.hoverStyle){
                    rObj = {...hoverStyle, ...tab.hoverStyle}
                }
                else{
                    rObj = hoverStyle
                }
                rObj = applyTextStyles(({...textStyle, hoverTextStyle}), rObj)
            }

            return (rObj ? {...rObj, maxHeight: '100%', overflow: 'hidden'} : {})
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

        function applyTabDefaultStyles(style){
            let rObj = {
                display: 'flex',
                minHeight: 30,
                textAlignVertical: 'center', textAlign: 'center',
                position: 'relative',
                backgroundColor:"#efefef", 
                border: "1px solid black", borderRadius: 0,
                borderTopWidth: 0.5, borderBottomWidth: 0.5,
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


    ////////////////
    // Renderings //
    ////////////////

        // Renders a Button as a Tab
        function renderTab(){
            let styleType
            if (isHovered){
                styleType = "hover"
            }
            else{
                styleType = (isActive ? "active" : "regular")
            }
            return(
                <div
                style={applyTabDefaultStyles(determineBoxStyle(styleType, tabObj))}
                onClick={(tabObj) => onPress(tabObj)}
                onMouseEnter={() => onMouseEnter(tabObj)}
                onMouseLeave={() => onMouseLeave(tabObj)}
                >
                    <div 
                    style={(isActive ? {...activeTextStyle} : {...textStyle})}
                    >
                        <p>
                            {title}
                        </p>
                    </div>
                </div>
            )
        }

        // Renders a Dropdown Menu as a Tab
        function renderDropTab(){
            return(
                <OstrichDropDown
                title={title}

                onClick={(tab) => onPress(tab)}
                onMouseEnter={(tabObj => onMouseEnter(tabObj))}
                onMouseLeave={(tabObj => onMouseLeave(tabObj))}

                obj={dropdown}
                drawers={dropdown.drawers}
                onDrawerClick={(drawer) => determineDrawerPress(drawer)}

                openOnHover={(dropdown.openOnHover === false ? false : true)}
                closeOnLeave={(dropdown.closeOnLeave === false ? false : true)}
                manualOpen={dropdown.manualOpen}
                open={isActive}

                boxHovers={(showsHover || tabObj.showsHover)}
                drawersHover={(dropdown.drawersShowHover === false) ? false : true}

                drawerStyle={determineDrawerStyle("regular", dropdown)}
                activeDrawerStyle={determineDrawerStyle("active", dropdown)}
                hoverDrawerStyle={determineDrawerStyle("hover", dropdown)}

                boxStyle={determineBoxStyle("regular", tabObj)}
                activeBoxStyle={determineBoxStyle("active", tabObj)}
                hoverBoxStyle={determineBoxStyle("hover", tabObj)}
                
                noBorder={(style.border || tabObj.style?.border) ? false : true}
                noShadow={(style.boxShadow || tabObj.style?.boxShadow) ? false : true}
                />
            )
        }

        // Main Render
        function MAIN(){
            if (dropdown){
                return(
                    <div style={{flex: flex}}
                    onClick={() => onPress(tabObj)}
                    onMouseEnter={() => onMouseEnter(tabObj)}
                    onMouseLeave={() => onMouseLeave(tabObj)}    
                    >
                        {renderDropTab()}
                    </div>
                )
            }
            else{
                return(
                    <div style={{flex: flex}}
                    onClick={() => onPress(tabObj)}
                    onMouseEnter={() => onMouseEnter(tabObj)}
                    onMouseLeave={() => onMouseLeave(tabObj)}    
                    >
                        {renderTab()}
                    </div>
                )
            }
        }
    
    return MAIN()
}