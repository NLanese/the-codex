import React, { useEffect, useState, useRef } from 'react';
import { DrawerItem } from './DrawerItem';
import PropTypes from 'prop-types';


export const OstrichDropDown = ({
    style={justifyContent: 'center', padding: 10, borderBottom: "2px solid black", borderRadius: 5, boxShadow:'-2px -2px -1px -1px rgba(-1, -1, -1, 0.1)' },
    title="ADD TITLE OR OBJECT PROP",
    titleStyle = {textAlign: 'center', fontSize: 14, fontWeight: 500},

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
    activeDrawerStyle,
    hoverDrawerStyle,

    boxStyle,
    noBorder=false,
    noShadow=false,
    activeBoxStyle,
    hoverBoxStyle,

}) => {

    ////////////
    // States //
    ////////////

    const [isOpen, setIsOpen] = useState(open)
    const [isHovered, setIsHovered] = useState(false)

    const [activeDrawer, setActiveDrawer] = useState(false)


    ///////////////
    // UseEffect //
    ///////////////

    useEffect(() => {

        // Drawer Style Handler
        if (!drawerStyle){
            drawerStyle = {width: '99%', backgroundColor:"white", padding: 2, borderBottom: "2px solid #E9F1FF"}
        }
        if (!hoverBoxStyle){

        }
        completeDrawerStyle()
    }, [])

    /////////////////////
    // Style Functions //
    /////////////////////

    function finishDrawerStyle(){
        if (!drawerStyle.width){
            drawerStyle.width = '99%'
        }
        if (!drawerStyle.backgroundColor){
            drawerStyle.backgroundColor = "#c6c7c8"
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

    function finishBoxStyle(){
        if (!boxStyle.width){
            boxStyle.minWidth = 140
        }
        if (!boxStyle.backgroundColor){
            boxStyle.backgroundColor = "#c6c7c8"
        }
        if (!boxStyle.padding){
            boxStyle.padding = "1.5%"
        }
        if (!boxStyle.minWidth){
            boxStyle.padding = "1.5%"
        }
        if (!noBorder && !boxStyle.border && !boxStyle.borderRadius && !boxStyle.borderWidth){
            boxStyle.border = "2px solid #E9F1FF"
            boxStyle.borderRadius = 10
        }
        if (!noShadow && !boxStyle.boxShadow){
            boxStyle.border = '2px 3px 3px rgba(0, 0, 0, 0.1)'
        }  
    }

    function checkRegularDrawerStyle(){
       
    }

    ///////////////
    // Functions //
    ///////////////


    function completeDrawerFunction(){
        
    }

    // Opens the dropdown (if not on hover), dires any function on press
    function handlePress(){
        if (!openOnHover && !manualOpen){
            setIsOpen(!isOpen)
        }
        if (onClick){
            onClick(obj)
        }
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
            setIsOpen(true)
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
            return {drawer: drawerStyle, text: drawerTitleStyle}
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
                        hoverTextStyleAdditions={hoverTitleStyle}
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
    return(
        <div onMouseLeave={() => handleMouseLeave()}>
            <div
            style={style}
            onClick={() => handlePress()}
            onMouseEnter={() => handleMouseEnter()}
            >
                <div style={titleStyle}>
                    {renderTitle()}
                </div>
            </div>
            <div style={{marginTop: 10}}/>
            {renderDrawerContainer()}
        </div>

    )
}