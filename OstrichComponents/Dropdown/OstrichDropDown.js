import React, { useEffect, useState, useRef, use } from 'react';
import { DrawerItem } from './DrawerItem';
import PropTypes from 'prop-types';


export const OstrichDropDown = ({
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

    boxHovers=true,
    drawersHover=true,
    boxActivates=true,
    drawersActivate=true,

    titleStyle,
    hoverTitleStyle,
    activeTitleStyle,

    drawerStyle,
    activeDrawerStyle,
    hoverDrawerStyle,

    boxStyle,
    activeBoxStyle,
    hoverBoxStyle,
    
    noBorder=false,
    noShadow=false,

    isTabItem=false,
    isActiveTab
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
    const [hoveredDrawer, setHoveredDrawer] = useState(false)

    // Styles
    const [boxStyleInput, setBoxStyleInput] = useState(false)
    const [activeBoxStyleInput, setActiveBoxStyleInput] = useState(false)
    const [hoverBoxStyleInput, setHoverBoxStyleInput] = useState(false)

    const [boxTitleStyleInput, setBoxTitleStyleInput] = useState(false)
    const [activeTitleBoxStyleInput, setActiveTitleBoxStyleInput] = useState(false)
    const [hoverTitleBoxStyleInput, setHoverTitleBoxStyleInput] = useState(false)

    const [drawerStyleInput, setDrawerStyleInput] = useState(false)
    const [activeDrawerBoxStyleInput, setActiveDrawerBoxStyleInput] = useState(false)
    const [hoverDrawerBoxStyleInput, setHoverDrawerBoxStyleInput] = useState(false)

    ///////////////
    // UseEffect //
    ///////////////

    // Initial BOX Style Checker
    useEffect(() => {
        finishBoxStyles()
    }, [boxStyle])

    // Initial DRAWER Style Checker
    useEffect(() => {
        finishDrawerStyles()
    }, [drawerStyle])


    /////////////////////
    // Style Functions //
    /////////////////////

    function finishDrawerStyles(){

        // Regular Drawer
        let temp = drawerStyle = {
            width: '100%', 
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
            fontWeight: 500
        }
        drawerStyle = {...temp, ...drawerStyle}

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
        hoverDrawerStyle = {...drawerStyle, backgroundColor: "#a5a8a8", ...hoverDrawerStyle}
        setHoverDrawerBoxStyleInput(hoverDrawerStyle)

        // Active Drawer
        activeDrawerStyle = {...drawerStyle, backgroundColor: "#c3e2fa", ...activeDrawerStyle}
        setActiveDrawerBoxStyleInput(activeDrawerStyle)
    }

    function finishBoxStyles(){

        /////////////////
        // Regular Box //
        /////////////////

            // Temporary Object
            let temp = {
                backgroundColor:"#efefef", 
                border: "1px solid black", borderRadius: 10,
                justifyItems: 'center', 
                position: 'relative',
            }
            boxStyle = {...temp, ...boxStyle}
            
            if (!boxStyle.width && !boxStyle.minWidth && !boxStyle.flex && !isTabItem){
                boxStyle.minWidth = 100
            }

            // Adds Padding If Needed
            if (!boxStyle.padding && !boxStyle.paddingRight && !boxStyle.paddingLeft && !boxStyle.paddingTop && !boxStyle.paddingBottom && !isTabItem){
                boxStyle.paddingRight = 10
                boxStyle.paddingLeft =  10
            }

            // Adds Border if Needed
            if (!noBorder && !boxStyle?.border && !boxStyle?.borderRadius && !boxStyle?.borderWidth){
                boxStyle.border = "1px solid black"
                boxStyle.borderRadius = 10
            }

            // Adds Shadow if Needed
            if (!noShadow && !boxStyle?.boxShadow){
                boxStyle.boxShadow = '2px 3px 3px rgba(0, 0, 0, 0.1)'
            }

            if (!boxStyle.width){
                boxStyle.minWidth = 130
            }

            if (!boxStyle.height){
                boxStyle.minHeight = 40
            }

            // Complete Regular Box Style
            setBoxStyleInput(boxStyle)

            let tempText = {
                fontFamily: "Gilroy",
                fontWeight: 600,
                textAlign: 'center',
            }
            let commpleteTempText = {...tempText, ...titleStyle}
            setBoxTitleStyleInput(commpleteTempText)



        ///////////////
        // Hover Box //
        ///////////////

            hoverBoxStyle = {...boxStyle, backgroundColor: "#a5a8a8", ...hoverBoxStyle} 
            setHoverBoxStyleInput(hoverBoxStyle)

            let tempHoverText = {
                ...commpleteTempText,
                ...hoverTitleStyle
            }
            setHoverTitleBoxStyleInput(tempHoverText)

        ////////////////
        // Active Box //
        ////////////////

            activeBoxStyle = {...boxStyle, backgroundColor: "#c3e2fa", borderRadius: 0, ...activeBoxStyle} 
            setActiveBoxStyleInput(activeBoxStyle)

            let tempActiveText = {
                ...commpleteTempText,
                ...activeTitleStyle
            }
            setActiveTitleBoxStyleInput(tempActiveText)            
      
        ///////////
        // Done. //
        ///////////
        setIsLoading(false)
    }

    function extractTextStyles(wrapStyle){
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
        if (wrapStyle.color){
            rObj = {...rObj, color: wrapStyle.color}
        }
        else{
            rObj = {...rObj, color: "black"}
        }
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
            if (obj){
                onClick(obj)
            }
            else{
                onClick(drawers)
            }
        }
        setIsHovered(false)
    }

    // Determines which DrawerPress Function to pass
    function handleDrawerPress(drawer){


        // Sets Drawer as Active, if already Active then Deactivates
        let isActive = false
        if (drawer.title){
            if (activeDrawer.title == drawer.title){
                isActive = true
            }
        }
        else{
            if (activeDrawer == drawer){
                isActive = true
            }
        }
        if (isActive){
            setActiveDrawer(false)
        }
        else{
            if (drawersActivate){
                setActiveDrawer(drawer)
            }
        }

        if (drawer.onClick){                // Runs Object OnClick Function 
            drawer.onClick(drawer)
        }   
        if (onDrawerClick){            // Runs Params OnClick Function 
            onDrawerClick(drawer)
        }
        else{
            console.warn("There was no onDrawerClick provided into the OstrichDropDown nor was there a onClick provided to the drawer object itself. Please check the OstrichDropDown Documentation")
        }
    }

    // If openOnHover, opens the Drop. Fires any hover functions
    function handleDrawerHover(drawer, enter){
        if (drawersHover && enter){
            setHoveredDrawer(drawer)
        }
        else if (!enter){
            setHoveredDrawer(false)
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
            if (boxHovers){
                setIsHovered(true)
            }
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

        // Active Drawer //
        let isActive = false
        if (drawer.title){
            if (activeDrawer.title == drawer.title){
                isActive = true
            }
        }
        else{
            if (activeDrawer == drawer){
                isActive = true
            }
        }
        if (isActive){
            // Uses Specific Drawer Style
            if (drawer.activeStyle){        
                return{
                    drawer: {...drawerStyleInput, ...drawer.activeStyle},
                    text: extractTextStyles({...drawerStyleInput, ...drawer.activeStyle})
                }
            }

            // Uses General Drawer Style
            else{
                return {
                    drawer:  activeDrawerBoxStyleInput, 
                    text: extractTextStyles(activeDrawerBoxStyleInput)
                }
            }
        }
        
        // Hover Drawer //
        else if (hoveredDrawer === drawer){

            // Uses Specific Drawer Style
            if (drawer.hoverStyle){        
                return{
                    drawer: {...drawerStyleInput, ...drawer.hoverStyle},
                    text: extractTextStyles({...drawerStyleInput, ...drawer.hoverStyle})
                }
            }

            return {
                drawer: hoverDrawerBoxStyleInput, 
                text: extractTextStyles(hoverDrawerBoxStyleInput)
            }
        }

        // Regular Drawer //
        else{

            // Uses Specific Drawer Style
            if (drawer.style){        
                return{
                    drawer: {...drawerStyleInput, ...drawer.style},
                    text: extractTextStyles({...drawerStyleInput, ...drawer.style})
                }
            }

            return {
                drawer: drawerStyleInput, 
                text: extractTextStyles(drawerStyleInput)
            }
        }
    }

    // Determines Box Style
    function determineBoxStyle(){
        if (isOpen && boxActivates){
            return activeBoxStyleInput
        }
        else if (isTabItem && isActiveTab){
            return activeBoxStyleInput
        }
        else if ((!isOpen || !boxActivates) && isHovered){
            return hoverBoxStyleInput
        }
        else{
            return boxStyleInput
        }
    }

     // Determines Title Style
     function determineTitleStyle(){
        if (isOpen && boxActivates){
            return activeTitleBoxStyleInput
        }
        else if (isTabItem && isActiveTab){
            return activeTitleBoxStyleInput
        }
        else if ((!isOpen || !boxActivates) && isHovered){
            return hoverTitleBoxStyleInput
        }
        else{
            return boxTitleStyleInput
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
                const isActive = activeDrawer === drawer;
                return(
                    <DrawerItem 
                        key={index}
                        style={isActive ? activeDrawerBoxStyleInput : {...determineDrawerStyle(drawer).drawer}}
                        textStyle={isActive ? extractTextStyles(activeDrawerBoxStyleInput) : {...determineDrawerStyle(drawer).text}}
                        onClick={() => handleDrawerPress(drawer)}
                        obj={drawerObject}
                        handleDrawerHover={(input) => handleDrawerHover(drawer, input)}
                    />
                )
            })
        }
        else if (isOpen && obj.drawers){
            let objDrawers = obj.drawers
            return objDrawers.map((drawer, index) => {
                return(
                    <DrawerItem 
                        key={index}
                        style={isActive ? activeDrawerBoxStyleInput : {...determineDrawerStyle(drawer).drawer}}
                        textStyle={isActive ? extractTextStyles(activeDrawerBoxStyleInput) : {...determineDrawerStyle(drawer).text}}
                        onClick={() => handleDrawerPress(drawer)}
                        obj={drawerObject}
                        handleDrawerHover={(input) => handleDrawerHover(drawer, input)}
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
                    position: 'absolute', top: "100%",
                    width: '102%',
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
                <div style={{height: '100%', width: '100%',  boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <p style={{margin: 0, height: '100%', display: 'flex', alignItems: 'center', ...determineTitleStyle()}}>
                        {renderTitle()}
                    </p>
                </div>
                <div style={{display: 'flex',  alignSelf: 'flex-end', justifyContent: 'center', width: '100%',}}>
                    {renderDrawerContainer()}
                </div>
            </div>
        )
    }
}