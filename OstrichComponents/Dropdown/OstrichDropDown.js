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

    const [drawerStyleInput, setDrawerStyleInput] = useState(false)
    const [activeDrawerBoxStyleInput, setActiveDrawerBoxStyleInput] = useState(false)
    const [hoverDrawerBoxStyleInput, setHoverDrawerBoxStyleInput] = useState(false)

    ///////////////
    // UseEffect //
    ///////////////

    // Initial BOX Style Checker
    useEffect(() => {
        // Drawer Style Handler
        if (!boxStyle){
            boxStyle = {
                width: 'auto', 
                backgroundColor:"#efefef", 
                // padding: 2, 
                border: "1px solid black", borderRadius: 10,
                justifyItems: 'center', textAlign: 'center',
                position: 'relative',
            }
        }
        finishBoxStyles()
    }, [])

    // Initial DRAWER Style Checker
    useEffect(() => {
        // Drawer Style Handler
        if (!drawerStyle){
            drawerStyle = {
                width: '100%', 
                display: 'flex',
                minHeight: 30,
                textAlignVertical: 'center', textAlign: 'center',
                position: 'relative',
                backgroundColor:"#efefef", 
                border: "1px solid black", borderRadius: 0,
                borderTopWidth: 0,
                justifyContent: 'center', 
                alignContent: 'center',
                alignItems: 'center'
            }
        }
        finishDrawerStyles()
    }, [])


    /////////////////////
    // Style Functions //
    /////////////////////

    function finishDrawerStyles(){

        // Regular Drawer
        if (!drawerStyle.width){
            drawerStyle.width = '99%'
            drawerStyle.maxWidth = '100%'
        }
        if (!drawerStyle.backgroundColor){
            drawerStyle.backgroundColor = "lightgrey"
        }
        // if (!drawerStyle.padding){
        //     drawerStyle.padding = "0.5%"
        // }
        if (!drawerStyle.minWidth){
            // drawerStyle.minWidth = "50%"
        }
        if (!noBorder && !drawerStyle.border && !drawerStyle.borderRadius && !drawerStyle.borderWidth){
            drawerStyle.border = "2px solid #E9F1FF"
            drawerStyle.borderRadius = 0
        }
        if (!noShadow && !drawerStyle.boxShadow){
            drawerStyle.boxShadowRight = '2px 3px 3px rgba(0, 0, 0, 0.1)'
            drawerStyle.boxShadowLeft = '2px 3px 3px rgba(0, 0, 0, 0.1)'
        }  
        setDrawerStyleInput(drawerStyle)

        // Hover Drawer
        if (!hoverDrawerStyle){
            hoverDrawerStyle = {...drawerStyle}
            hoverDrawerStyle.backgroundColor ="#a5a8a8"
        }
        if (!hoverBoxStyle?.width){
            hoverDrawerStyle.width = drawerStyle.width
        }
        if (!hoverDrawerStyle?.padding){
            hoverDrawerStyle.padding = drawerStyle.padding
        }
        if (!hoverDrawerStyle?.minWidth){
            hoverDrawerStyle.minWidth = drawerStyle.minWidth
        }
        if (!hoverDrawerStyle?.border && !hoverDrawerStyle.borderRadius && !hoverDrawerStyle.borderWidth){
            hoverDrawerStyle.border = drawerStyle.border
            hoverDrawerStyle.borderRadius = drawerStyle.borderRadius
        }
        if (!hoverDrawerStyle?.boxShadow){
            hoverDrawerStyle.boxShadow = drawerStyle.boxShadow
        }  
        setHoverDrawerBoxStyleInput(hoverDrawerStyle)

        // Active Drawer
        if (!activeDrawerStyle){
            activeDrawerStyle = {...drawerStyle}
            activeDrawerStyle.backgroundColor ="#a5a8a8"
        }
        if (!activeBoxStyle?.width){
            activeDrawerStyle.width = drawerStyle.width
        }
        if (!activeDrawerStyle?.padding){
            activeDrawerStyle.padding = drawerStyle.padding
        }
        if (!activeDrawerStyle?.minWidth){
            activeDrawerStyle.minWidth = drawerStyle.minWidth
        }
        if (!activeDrawerStyle?.border && !activeDrawerStyle.borderRadius && !activeDrawerStyle.borderWidth){
            activeDrawerStyle.border = drawerStyle.border
            activeDrawerStyle.borderRadius = drawerStyle.borderRadius
        }
        if (!activeDrawerStyle?.boxShadow){
            activeDrawerStyle.boxShadow = drawerStyle.boxShadow
        }  
        setActiveDrawerBoxStyleInput(activeDrawerStyle)
    }

    function finishBoxStyles(){
        // Regular Box
        if (!boxStyle?.position){
            boxStyle.position = "relative"
        }
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
        if (!hoverBoxStyle?.position){
            hoverBoxStyle.position = "relative"
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
            activeBoxStyle.borderRadius = 0
        }
        if (!activeBoxStyle?.position){
            activeBoxStyle.position = "relative"
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

    function extractTextStyles(wrapStyle){
        // console.log(wrapStyle)
        let rObj = {}
        if (wrapStyle.fontSize){
            rObj = {...rObj, fontSize: wrapStyle.fontSize}
        }
        if (wrapStyle.fontFamily){
            rObj = {...rObj, fontFamily: wrapStyle.fontFamily}
        }
        if (wrapStyle.fontWeight){
            rObj = {...rObj, fontWeight: wrapStyle.fontWeight}
        }
        if (wrapStyle.letterSpacing){
            rObj = {...rObj, letterSpacing: wrapStyle.letterSpacing}
        }
        if (wrapStyle.textAlign){
            rObj = {...rObj, textAlign: wrapStyle.textAlign}
        }
        if (wrapStyle.textAlignVertical){
            rObj = {...rObj, textAlignVertical: wrapStyle.textAlignVertical}
        }
        if (wrapStyle.display){
            rObj = {...rObj, display: wrapStyle.display}
        }
        if (wrapStyle.justifyContent){
            rObj = {...rObj, justifyContent: wrapStyle.justifyContent}
        }
        if (wrapStyle.alignContent){
            rObj = {...rObj, alignContent: wrapStyle.alignContent}
        }
        if (wrapStyle.justifyItems){
            rObj = {...rObj, justifyItems: wrapStyle.justifyItems}
        }
        if (wrapStyle.alignItems){
            rObj = {...rObj, alignItems: wrapStyle.alignItems}
        }
        // console.log(rObj)
        return rObj
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
            return {
                drawer: activeDrawerBoxStyleInput, 
                text: extractTextStyles(activeDrawerBoxStyleInput)
            }
        }
        else{
            return {
                drawer: drawerStyleInput, 
                text: extractTextStyles(drawerStyleInput)
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
                if (typeof(drawer) === "string" || typeof(drawer) === "number" || typeof(drawer) === "integer"){
                    drawerObject = {title: `${drawer}`}
                }
                else{
                    drawerObject = drawer
                }
                console.log(determineDrawerStyle(drawer).drawer)
                console.log(determineDrawerStyle(drawer).text)
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
                <div style={{
                    position: 'absolute',
                    width: '100%'
                }}>
                    <div style={{position: 'relative', width: '100%', justifyItems: 'center'}}>
                        {renderDrawers()}
                    </div>
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
            style={{...determineBoxStyle(), position: 'relative'}}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handlePress()}
            onMouseEnter={() => handleMouseEnter()}
            >
                <p style={{...extractTextStyles(determineBoxStyle())}}>
                    {renderTitle()}
                </p>
                <div style={{marginTop: 10}}/>
                <div style={{display: 'flex',  alignSelf: 'flex-end', justifyContent: 'center', width: '100%', backgroundColor: 'chartreuse',}}>
                    {renderDrawerContainer()}
                </div>
            </div>
        )
    }
}