import React, { useEffect, useState, useRef } from 'react';
import { OstrichDropDown } from '../Dropdown/OstrichDropDown';
import PropTypes from 'prop-types';


export const TabItem = ({
    title,              // Tab Title
    tabObj,             // Tab Object (Optional) Can hold data like dropdowns and functions
    index,              // The index of this item in the greater Tab Array
    isActive,           // Is Active 
    setActiveTab,       // Used to set the Active Tab in the greater Tab Bar

    style,              // Style for the Component
    flex,               // This is only used when in the TabBar Component
    textStyle,          // The Style for the Tab Title

    activeStyle,        // Style for Component when Active
    activeTextStyle,    // Style for Componet Text when Active

    hoverStyle,
    hoverTextStyle,

    dropdown=false,
    onDrawerClick=false,
    dropdownStyles=false,
    drawerColor=false,
    activeDrawerColor=false,
    hoverDrawerColor=false,

    onPress,
}) => {
    ////////////
    // States //
    ////////////

        // Hovered Toggled
        const [isHovered, setIsHovered] = useState(false)
        const hoverRef = useRef(isHovered)
        useEffect(() => {
            hoverRef.current = isHovered
        }, [isHovered])

        // Drop Opened Toggle
        const [dropDeployed, setDropDepoyed] = useState(false)

        // Title X
        const [titleX, setTitleX] = useState(title ? title : tabObj.title)


    ///////////////
    // Functions //
    ///////////////

        // DETERMINATORS /

        function determineStyle() {
            let tabStyle = { ...style };
            let thisTextStyle = { ...textStyle };
        
            // Hovered Tab
            if (isHovered) {
                const baseColor = isActive ? activeStyle.backgroundColor : style.backgroundColor;
                const hoverColor = hoverStyle ? hoverStyle.backgroundColor : handleDarken(baseColor, 10);
        
                tabStyle = {
                    ...tabStyle,
                    backgroundColor: hoverColor,
                    boxShadow: !hoverStyle ? '-2px -2px -1px -1px rgba(-1, -1, -1, 0.1)' : undefined,
                    flex: flex,
                };
                thisTextStyle = isActive ?
                    (hoverTextStyle ? hoverTextStyle : {...activeTextStyle, fontSize: activeTextStyle.fontSize + 2}) :
                    (hoverTextStyle ? hoverTextStyle : {...textStyle, fontSize: textStyle.fontSize + 2})
            }

            // Active Not Hovered
            else if (isActive) {
                tabStyle = activeStyle ? {...activeStyle} : style;
                thisTextStyle = activeTextStyle ? {...activeTextStyle} : {...textStyle};
            }
        
            return { tab: tabStyle, text: thisTextStyle };
        }
        
          

        // HOVER COLORS //

            // Determines whether the supplied color is RGBA
            function isRGBA(colorString) {
                // Regular expression for RGBA format
                const rgbaRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*(0|1|0?\.\d+))?\s*\)$/;
            
                return rgbaRegex.test(colorString);
            }

            // Darkens HexColor
            function darkenColor(color, percent) {
                const darkenValue = percent / 100;
                const [r, g, b, a] = color.match(/\d+/g);
                const darkenedR = Math.round(r * (1 - darkenValue));
                const darkenedG = Math.round(g * (1 - darkenValue));
                const darkenedB = Math.round(b * (1 - darkenValue));
                return `rgb(${darkenedR}, ${darkenedG}, ${darkenedB}, ${a})`;
            }

            // Darkens RGBA Color
            function darkenRGBA(rgbaColor, percent) {
                const darkenValue = percent / 100;
                const match = rgbaColor.match(/\d+/g);
                const darkenedR = Math.round(match[0] * (1 - darkenValue));
                const darkenedG = Math.round(match[1] * (1 - darkenValue));
                const darkenedB = Math.round(match[2] * (1 - darkenValue));
                let alpha
                if (match[3] && match[3].toString() !== "0"){
                    alpha = match[3]
                }
                else if (match[3] && match[3].toString() === "0" && match[4]){
                    alpha = match[4]
                }
                else{
                    alpha = 1
                }
                // const alpha = match[3] !== undefined ? `${parseFloat(match[3]).toFixed(2)}` : '';
                return `rgba(${darkenedR}, ${darkenedG}, ${darkenedB}, ${alpha})`;
            }

            // Darkens the background color
            function handleDarken(color, percent){
                if (isRGBA(color)){
                    return darkenRGBA(color, percent)
                }
                else{
                    return darkenColor(color, percent)
                }
            }
            
        // HANDLERS //

            // Either 
            function handlePress(){

                // If the Tab Item has an onPress Prop Provided...
                if (onPress){
                    if (tabObj){
                        onPress(tabObj)
                    }
                    else{
                        onPress(titleX, index)
                    }
                }

                // If the imported tab object has a funciton built in, run that
                else if (tabObj.onClick){
                    tabObj.onClick(tabObj)  // Runs the inherited onClick function
                }

                // If improper naming convention is used
                else if (tabObj.onPress){
                    console.warn("tabjObj has a provided 'onPress' function. The proper naming convention is 'onClick'")
                }

                // If there is no Dropdown menu...
                if (!dropdown){
                    setActiveTab(titleX)    // Set the Tab Active
                }
                     
                // If there is a dropdown menu
                else{
                    if (dropdown && !dropdown.openOnHover){
                        setDropDepoyed(!dropDeployed) // Only opens the menu when openOnHover is falsey
                    }
                }
            }

            // This will be passed into Dropdowns in case the Tab activation is contigent on a drawer click
            function activateTab(tab){
                setActiveTab(titleX)
                if (tabObj.onClick){
                    tabObj.onClick(tab)
                }
                else if (onDrawerClick){
                    onDrawerClick(tab)
                }
            }

            // This fire on the click of a Dropdown Drawer, if the Tab is a drop down
            function activateDrawer(drawer){
                if (!tabObj.dropdown){
                    return
                }
                if (drawer.onClick){
                    drawer.onClick(drawer)
                }
                else if (tabObj.dropdown.onDrawerClick){
                    tabObj.dropdown.onDrawerClick(drawer)
                }
                else if (onDrawerClick){
                    onDrawerClick(drawer)
                }
                else{
                    console.warn("[Ostrich Tab Bar] - A Drawer was pressed but no where in the component structure was a function provided to fire on Drawer Clicks. Please Refer to the documentation.")
                }
            }

            // Sets Hovered to True
            const handleMouseEnter = () => {
                setIsHovered(true);
            };

            // Handles Hovered to False
            const handleMouseLeave = () => {
                if (!dropDeployed) {
                    setIsHovered(false);
                }
            };


    ////////////////
    // Renderings //
    ////////////////

        // Renders a Button as a Tab
        function renderTab(){
            return(
                <div
                style={{...determineStyle().tab}}
                onClick={() => handlePress()}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
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
                style={{...determineStyle().tab}}
                title={titleX}
                titleStyle={{...determineStyle().text}}

                obj={tabObj}
                drawers={dropdown.drawers}
                onClick={activateTab}
                onDrawerClick={activateDrawer}
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