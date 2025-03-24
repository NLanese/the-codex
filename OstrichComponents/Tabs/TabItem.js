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
    dropdownStyles=false,   // Drawer Style (Dropdowns)
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


    ////////////////
    // Renderings //
    ////////////////

        // Renders a Button as a Tab
        function renderTab(){
            return(
                <div
                style={{...determineStyle().tab}}
                onClick={() => handlePress()}
                onMouseEnter={(tabObj) => onMouseEnter(tabObj)}
                onMouseLeave={(tabObj) => handleMouseLeave(tabObj)}
                >
                    <div style={{...determineStyle().text}}>
                        {titleX}
                    </div>
                </div>
            )
        }

        // Renders a Dropdown Menu as a Tab
        function renderDropTab(){
            return(
                <OstrichDropDown
                title={title}

                onClick={activateTab}
                onMouseEnter={(tabObj => onMouseEnter(tabObj))}
                onMouseLeave={(tabObj => onMouseLeave(tabObj))}

                obj={dropdown}
                drawers={dropdown.drawers}
                onDrawerClick={(tabObj => onDrawerClick(tabObj.dropdown))}

                openOnHover={(dropdown.openOnHover === false ? false : true)}
                closeOnLeave={(dropdown.closeOnLeave === false ? false : true)}
                manualOpen={dropdown.manualOpen}
                open={isActive}

                boxHovers={(showsHover || tabObj.showsHover)}
                drawersHover={(dropdown.drawersShowHover === false) ? false : true}

                drawerStyle={determineDrawerStyle("regular", dropdown)}
                activeDrawerStyle={determineDrawerStyle("active", dropdown)}
                hoverDrawerStyle={determineDrawerStyle("hover", dropdown)}

                boxStyle={style}
                activeBoxStyle={{...activeStyle, ...activeTextStyle}}
                hoverBoxStyle={hoverStyle}
                
                titleStyle={{...determineStyle().text}}

                />
            )
        }

        // Main Render
        function MAIN(){
            if (dropdown){
                return(
                    <div style={{flex: flex}}
                    onClick={() => handlePress()}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}    
                    >
                        {renderDropTab()}
                    </div>
                )
            }
            else{
                return(
                    <div style={{flex: flex}}
                    onClick={() => handlePress()}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}    
                    >
                        {renderTab()}
                    </div>
                )
            }
        }
    
    return MAIN()
}