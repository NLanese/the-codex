import React, { useEffect, useState, useRef } from 'react';
import { OstrichDropDown } from '../Dropdown/OstrichDropDown';
import PropTypes from 'prop-types';
import { root } from 'postcss';


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
                if (!rObj?.minWidth){
                    rObj = {...rObj, minWidth: '0'}
                }
                if (!rObj?.borderRadius){
                    rObj = {...rObj, borderRadius: '0'}
                }
            }

            // Active / Opened
            if (type === "active"){
                if (tab?.activeStyle){
                    rObj = {...activeStyle, ...tab.activeStyle}
                }
                else{
                    rObj = activeStyle
                }                
            }

            // Hovered (While Closed)
            else if (type === "hover" && showsHover){
                if (tab.showsHover === false){
                    return determineBoxStyle('regular', tab)
                }
                if (tab?.hoverStyle){
                    rObj = {...hoverStyle, ...tab.hoverStyle}
                }
                else{
                    rObj = hoverStyle
                }
            }
            return (rObj ? {...rObj, maxHeight: '100%'} : {})
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
            let styleType = (isActive ? "active" : "regular")
            if (isHovered && !isActive){
                styleType = "hover"
            }
            return(
                <div
                style={applyTabDefaultStyles(determineBoxStyle(styleType, tabObj))}
                // onClick={() => onPress(tabObj)}
                onMouseEnter={() => onMouseEnter(tabObj)}
                onMouseLeave={() => onMouseLeave(tabObj)}
                >
                    <div 
                    style={determineBoxStyle(style, tabObj)}
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
                onMouseEnter={() => onMouseEnter(tabObj)}
                onMouseLeave={() => onMouseLeave(tabObj)}

                obj={dropdown}
                drawers={dropdown.drawers}
                onDrawerClick={(drawer) => determineDrawerPress(drawer)}

                openOnHover={(dropdown.openOnHover === false ? false : true)}
                closeOnLeave={(dropdown.closeOnLeave === false ? false : true)}
                manualOpen={dropdown.manualOpen}
                open={isActive}

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
                isActiveTab={isActive}
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