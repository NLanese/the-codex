import React, { useEffect, useState, useRef, use } from 'react';
import { DrawerItem } from './DrawerItem';
import PropTypes from 'prop-types';


export const OstrichDropDown = ({
    style,
    title="ADD TITLE OR OBJECT PROP",

    onClick=false,
    onMouseEnter=false,
    onMouseLeave=false,

    obj=false,
    drawers=false,
    onDrawerClick=false,


    openOnHover=true,
    closeOnLeave=true,
    manualOpen=false,
    open=false,

    drawerStyle,
    drawerTitleStyle,
    activeDrawerStyle,
    hoverDrawerStyle,

    boxStyle,
    noBorder=false,
    noShadow=false,
    activeBoxStyle,
    activeTitleStyle,
    hoverBoxStyle,

}) => {

    ////////////
    // States //
    ////////////

    // Status
    const [isOpen, setIsOpen] = useState(open)
    const [isLoading, setIsLoading] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const hoverRef = useRef(isHovered)
    useEffect(() => {
        hoverRef.current = isHovered
    }, [isHovered])



    const [activeDrawer, setActiveDrawer] = useState(false)

    // Styles
    const [boxStyleInput, setBoxStyleInput] = useState(false)
    const [activeBoxStyleInput, setActiveBoxStyleInput] = useState(false)
    const [hoverBoxStyleInput, setHoverBoxStyleInput] = useState(false)

    ///////////////
    // UseEffect //
    ///////////////

    // Initial Style Checker
    useEffect(() => {
        // Drawer Style Handler
        if (!boxStyle){
            boxStyle = {
                width: '35%', 
                backgroundColor:"#efefef", 
                padding: 2, 
                border: "1px solid black", borderRadius: 10,
                justifyItems: 'center', textAlign: 'center'
            }
            console.log("1")
            console.log(boxStyleInput)
        }
        finishBoxStyles()
    }, [])


    /////////////////////
    // Style Functions //
    /////////////////////

    function finishDrawerStyle(){
        if (!drawerStyle.width){
            drawerStyle.width = '99%'
        }
        if (!drawerStyle.backgroundColor){
            drawerStyle.backgroundColor = "rgb(198 199 200)"
        }
        if (!drawerStyle.padding){
            drawerStyle.padding = "1.5%"
        }
        if (!drawerStyle.minWidth){
            drawerStyle.padding = "1.5%"
        }
        if (!noBorder && !drawerStyle.border && !drawerStyle.borderRadius && !drawerStyle.borderWidth){
            drawerStyle.border = "2px solid #E9F1FF"
            drawerStyle.borderRadius = 10
        }
        if (!noShadow && !drawerStyle.boxShadow){
            drawerStyle.border = '2px 3px 3px rgba(0, 0, 0, 0.1)'
        }  
    }

    function finishBoxStyles(){
        // Regular Box
        if (!boxStyle?.width){
            boxStyle.width = "30%"
        }
        if (!boxStyle?.backgroundColor){
            boxStyle.backgroundColor = "#c6c7c8"
        }
        if (!boxStyle?.padding){
            boxStyle.padding = "1.5%"
        }
        if (!boxStyle?.minWidth){
            boxStyle.minWidth = 140
        }
        if (!noBorder && !boxStyle?.border && !boxStyle?.borderRadius && !boxStyle?.borderWidth){
            boxStyle.border = "1px solid black"
            boxStyle.borderRadius = 10
        }
        if (!noShadow && !boxStyle?.boxShadow){
            boxStyle.boxShadow = '2px 3px 3px rgba(0, 0, 0, 0.1)'
        }
       setBoxStyleInput(boxStyle)

        // Hover Box
        if (!hoverBoxStyle){
            hoverBoxStyle = {...boxStyle}
            hoverBoxStyle.backgroundColor ="#a5a8a8"
        }
        if (!hoverBoxStyle?.width){
            hoverBoxStyle.width = boxStyle.width
        }
        if (!hoverBoxStyle?.padding){
            hoverBoxStyle.padding = boxStyle.padding
        }
        if (!hoverBoxStyle?.minWidth){
            hoverBoxStyle.minWidth = boxStyle.minWidth
        }
        if (!hoverBoxStyle?.border && !hoverBoxStyle.borderRadius && !hoverBoxStyle.borderWidth){
            hoverBoxStyle.border = boxStyle.border
            hoverBoxStyle.borderRadius = boxStyle.borderRadius
        }
        if (!hoverBoxStyle?.boxShadow){
            hoverBoxStyle.boxShadow = boxStyle.boxShadow
        }  
        setHoverBoxStyleInput(hoverBoxStyle)

        // Active Box
        if (!activeBoxStyle){
            activeBoxStyle = {...boxStyle}
            activeBoxStyle.backgroundColor = "#c3e2fa"
        }
        if (!activeBoxStyle?.width){
            activeBoxStyle.width = boxStyle.width
        }
        if (!activeBoxStyle?.padding){
            activeBoxStyle.padding = boxStyle.padding
        }
        if (!activeBoxStyle?.minWidth){
            activeBoxStyle.minWidth = boxStyle.minWidth
        }
        if (!activeBoxStyle?.border && !activeBoxStyle?.borderRadius && !activeBoxStyle?.borderWidth){
            activeBoxStyle.border = boxStyle.border
            activeBoxStyle.borderRadius = 0
        }
        if (!activeBoxStyle?.boxShadow){
            activeBoxStyle.boxShadow = boxStyle.boxShadow
        }
        setActiveBoxStyleInput(activeBoxStyle)
      
        setIsLoading(false)
    }

    function determineBoxStyle(){
        if (isOpen){
            return activeBoxStyleInput
        }
        else if (!isOpen && isHovered){
            return hoverBoxStyleInput
        }
        else{
            return boxStyleInput
        }
    }


    ///////////////
    // Functions //
    ///////////////

    // Opens the dropdown (if not on hover), dires any function on press
    function handlePress(){
        if (!openOnHover && !manualOpen){
            if (drawers.length > 0){
                setIsOpen(!isOpen)
            }
            
        }
        if (onClick){
            onClick(obj)
        }
        setIsHovered(false)
    }

    // Determines which DrawerPress Function to pass
    function handleDrawerPress(drawer){
        if (drawer.onClick){
            return drawer.onClick(drawer)
        }
        else if (onDrawerClick){
            return onDrawerClick(drawer)
        }
        else{
            console.warn("There was no onDrawerClick provided into the OstrichDropDown nor was there a onClick provided to the drawer object itself. Please check the OstrichDropDown Documentation")
        }
    }

    // If openOnHover, opens the Drop. Fires any hover functions
    function handleMouseEnter(){
        if (openOnHover){
            if (drawers.length > 0){
                setIsOpen(!isOpen)
            }
        }
        else{
            setIsHovered(true)
        }
        if (onMouseEnter){
            onMouseEnter(obj)
        }
    }

    // If closeOnLeave, closes the Drop. Fires any hover functions
    function handleMouseLeave(){
        if (closeOnLeave){
            setIsOpen(false)
        }
        if (onMouseLeave){
            onMouseLeave(obj)
        }
        setIsHovered(false)
    }

    // Determines the Style of the Drawer
    function determineDrawerStyle(drawer){
        if (activeDrawer === drawer){
            if (drawerColor){
                activeDrawerStyle = {...activeDrawerStyle, backgroundColor: drawerColor}
            }
            return {drawer: activeDrawerStyle, text: activeTitleStyle}
        }
        else{
            return {
                drawer: drawerStyle, 
                text: drawerTitleStyle ? drawerTitleStyle : 
                {
                    fontFamily: drawerStyle?.fontFamily ? drawerStyle.fontFamily : null,
                    fontSize: drawerStyle?.fontSize ? drawerStyle.fontSize : null,
                    fontWeight: drawerStyle?.fontWeight ? drawerStyle.fontWeight : null
                }
            }
        }
    }


    ////////////////
    // Renderings //
    ////////////////

    // Renders Obj.Title or Title
    function renderTitle(){
        if (obj && obj.title){
            return obj.title
        }
        else{
            return title
        }
    }

    // Renders the Drop Drawers
    function renderDrawers(){
        if (isOpen && drawers){
            return drawers.map((drawer, index) => {
                let drawerObject = {}
                if (typeof(drawer) === "string"){
                    drawerObject = {title: drawer}
                }
                else{
                    drawerObject = drawer
                }
                return(
                    <DrawerItem 
                        key={index}
                        style={{...determineDrawerStyle(drawer).drawer}}
                        textStyle={{...determineDrawerStyle(drawer).text}}
                        onClick={() => handleDrawerPress(drawer)}
                        obj={drawerObject}
                        hoverStyleAdditions={hoverDrawerStyle}
                        // hoverTextStyleAdditions={hoverTitleStyle}
                    />
                )
            })
        }
    }

    // Renders the space for Drawers if present
    function renderDrawerContainer(){
        if (isOpen){
            return(
                <div style={{border: "1px solid black", boxShadow: '2px 2px 1.5px rgba(0, 0, 0, 0.2)'}}>
                    {renderDrawers()}
                </div> 
            )
        }
    }

    ////////////////////
    // MAIN RENDERING //
    ////////////////////
    
    if (isLoading){
        return
    }
    else{
        return(
            <div
            style={{...determineBoxStyle()}}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handlePress()}
            onMouseEnter={() => handleMouseEnter()}
            >
                {renderTitle()}
                <div style={{marginTop: 10}}/>
                {renderDrawerContainer()}
            </div>
    
        )
    }
}