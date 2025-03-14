import React, { useEffect, useState, useRef } from 'react';


export const DrawerItem = ({
    style,
    textStyle,

    title=false,
    obj,
    isActive=false,
    onClick,

    hoverStyleAdditions,
    hoverTextStyleAdditions,
    activeStyle,
    activeTextStyle,
}) => {
    ////////////
    // States //
    ////////////

    const [isHovered, setIsHovered] = useState(false)

    ///////////////
    // Functions //
    ///////////////

        // Determines the styles for Text and Drawers
        function determineStyle() {
            if (isActive) {
            return {
                drawer: isHovered ? { ...activeStyle, ...hoverStyleAdditions } : { ...activeStyle },
                text: isHovered ? { ...activeStyle, ...hoverTextStyleAdditions } : { ...activeTextStyle },
            };
            } else {
            return {
                drawer: isHovered ? { ...style, ...hoverStyleAdditions } : { ...style },
                text: isHovered ? { ...textStyle, ...hoverTextStyleAdditions } : { ...textStyle },
            };
            }
        }

        // Determines whether tp send a string or an object as a parameter on Click
        function determineParameter(){
            return obj ? obj : title
        }

        // Determines whether to render Ttile or Obj.Title
        function determineTitle(){
            return title ? title : obj.title
        }

        // Hovered to True
        function handleMouseEnter(){
            setIsHovered(true)
        }

        // Hovered to False
        function handleMouseLeave(){
            setIsHovered(false)
        }

        // Determines which onClick function to use, general or specific.
        function handleOnPress(param){
            if (obj.onClick){
                return obj.onClick(param)
            }
            else if (obj.onPress){
                console.warn("Drawer Item ", obj.title ? obj.title : title , " has on 'onPress' prop supplied, when it should be an onClick.")
            }
            else if (!obj.onClick && onClick){
                return onClick(param)
            }
        }

    ////////////////
    // Renderings //
    ////////////////

    const MAIN = () => {

        console.log(determineStyle().drawer)
        console.log(determineStyle().text)
        return(
            <div 
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleOnPress(determineParameter)}
            style={determineStyle().drawer}
            >
                <div style={{...determineStyle().text, backgroundColor: 'greenyellow'}}>
                    {determineTitle()}
                </div>
            </div>
        )
    }

    /////////////////
    // Main Return //
    /////////////////
    return MAIN()
}