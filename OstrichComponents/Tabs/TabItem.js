import React, { useEffect, useState, useRef } from 'react';
import { OstrichDropDown } from '../Dropdown/OstrichDropDown';
import PropTypes from 'prop-types';


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

    console.log(dropdown)

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
            if (type === "regular"){
                if (tab.style){
                    return {...style, ...tab.style}
                }
                else{
                    return drawerStyle
                }
            }
            if (type === "active"){
                if (tab.activeStyle){
                    return {...activeStyle, ...tab.activeStyle}
                }
                else{
                    return activeStyle
                }
            }
            else if (type === "hover"){
                if (tab.hoverStyle){
                    return {...hoverStyle, ...tab.hoverStyle}
                }
                else{
                    return hoverStyle
                }
            }
        }

        // Determine the Drawer Press Handlers
        function determineDrawerPress(drawer){
            console.log(dropdown)
            console.log("Pressed ", drawer)
            if (onDrawerClick){
                console.log("Should run Tab Inherited onDrawerClick")
                onDrawerClick(drawer)
            }
            if (dropdown?.onDrawerClick){
                console.log("Should run Tab Specific onDrawerClick")
                dropdown.onDrawerClick(drawer)
            }

        }


    ////////////////
    // Renderings //
    ////////////////

        // Renders a Button as a Tab
        function renderTab(){
            return(
                <div
                style={determineBoxStyle("regular", tabObj)}
                onClick={() => handlePress()}
                onMouseEnter={(tabObj) => onMouseEnter(tabObj)}
                onMouseLeave={(tabObj) => onMouseLeave(tabObj)}
                >
                    <div 
                    // style={{...determineStyle().text}}
                    >
                        {title}
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
                    onClick={(tabObj) => onPress(tabObj)}
                    onMouseEnter={(tabObj) => onMouseEnter(tabObj)}
                    onMouseLeave={(tabObj) => onMouseLeave(tabObj)}    
                    >
                        {renderDropTab()}
                    </div>
                )
            }
            // else{
            //     return(
            //         <div style={{flex: flex}}
            //         onClick={() => handlePress()}
            //         onMouseEnter={() => handleMouseEnter()}
            //         onMouseLeave={() => handleMouseLeave()}    
            //         >
            //             {renderTab()}
            //         </div>
            //     )
            // }
        }
    
    return MAIN()
}