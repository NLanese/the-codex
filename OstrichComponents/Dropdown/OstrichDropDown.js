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

    drawerStyle={width: '99%', backgroundColor:"white", padding: 2, borderBottom: "2px solid #E9F1FF"},
    drawerColor="white",
    activeDrawerStyle={width: '100%', backgroundColor: "#E9F1FF",  padding: 2, borderBottom: "2px solid #E9F1FF"},
    hoverDrawerStyle={width: '100%', backgroundColor: "#E9F1FF",  padding: 2, borderBottom: "2px solid #E9F1FF"},
    drawerTitleStyle={textAlign: "center", fontSize: 16, fontWeight: 600, padding: 5},
    activeTitleStyle={textAlign: "center", fontSize: 18, fontWeight: 700, padding: 5},
    hoverTitleStyle={textAlign: "center", fontSize: 18, fontWeight: 700, padding: 5},

}) => {

    ////////////
    // States //
    ////////////

    const [isOpen, setIsOpen] = useState(open)

    const [activeDrawer, setActiveDrawer] = useState(false)



    ///////////////
    // Functions //
    ///////////////

    // Opens the dropdown (if not on hover), dires any function on press
    function handlePress(){
        console.log("Handling Base Press")
        if (!openOnHover && !manualOpen){
            setIsOpen(!isOpen)
        }
        if (onClick){
            onClick(obj)
        }
    }

    // Determines which DrawerPress Function to pass
    function handleDrawerPress(drawer){
        console.log("Handling Drawer Press")
        if (drawer.onClick){
            return drawer.onClick(drawer)
        }
        else if (onDrawerClick){
            return onDrawerClick(drawer)
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