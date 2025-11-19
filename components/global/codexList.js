// React
import React, {useEffect, useState} from "react";

// Constants
import Colors from "../../styles/colors"

// Recoil
import { useAtom } from "jotai";
// import { directoryDataState } from "../../jotai/atoms";

// NextJS
import { useRouter } from "next/router"


export default function CodexList({
    items,              // Listed Elements
    directory=false,    // Changes the directory State if this Lsit is a Dropdown Page
    onClick=false,      // Unique specified onClick if NOT a dropdown page
    size="large",       // Button Size | large | medium | small |
    selected
}){

    ///////////
    // State //
    ///////////

        const [hoveredItm, setHoveredItm] = useState(false)

        // const [directoryState, setDirectoryState] = useAtom(directoryDataState)

        const router = useRouter()

    ///////////////
    // Functions //
    ///////////////

        // Enters Hover
        function handleMouseEnter(itm){
            setHoveredItm(itm)
        }

        // Leaves Hover
        function handleMouseLeave(){
            setHoveredItm(false)
        }

        // Determines Color
        function determineColor(itm){
            if (itm === selected){
                return Colors.selectedColor
            }
            else if (hoveredItm === itm){
                return Colors.activeColor
            }
            else{
                return Colors.inactiveGrey
            }
        }

        // Determines Style of Button 
        function determineStyle(itm){
            let width = 500
            let height = 130
            if (size === "medium" || size === "med" || size === "md"){
                width = 270
                height = 50
            }
            else if (size === "small" || size === "sm"){
                width = 180
                height = 40
            }
            else if (size === "auto"){
                width = "auto"
            }
            return {
                backgroundColor: determineColor(itm), 
                width: width, minHeight: height, borderColor: 'black', 
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', 
                borderRadius: 15, borderWidth: 1, marginTop: 10
            }
        }

        function determineFont(){
            let fontSize = 36
            let fontWeight = 500
            if (size === "medium" || size === "med"|| size === "md"){
                fontWeight = 400
                fontSize = 20
            }
            else if (size === "small" || size === "sm"){
                fontWeight = 400
                fontSize = 16
            }
            return {fontFamily: 'Gilroy', fontWeight: fontWeight, fontSize: fontSize, textAlign: 'center', padding: 5}
        }

        // Handles PRessing the option Button
        function handleClick(itm){
            if (onClick){
                onClick(itm)
                return
            }
            // if (directory){
            //     setDirectoryState(itm)   
            // }
            router.push(`/${directory.toLowerCase()}/${itm.toLowerCase()}/menu`)
        }

    /////////////////
    // Main Return //
    /////////////////

   
        return(
            <div style={{
                display: 'flex',
                flexDirection: 'column',       // or 'row' if horizontal
                justifyContent: 'center',      // centers along the main axis
                alignItems: 'center',          // centers along the cross axis
              }}>
                {items.map((itm, i) => (
                  <div
                    key={i}
                    style={{ ...determineStyle(itm) }}
                    onMouseEnter={() => handleMouseEnter(itm)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleClick(itm)}
                  >
                    <div style={{ ...determineFont(), textAlign: 'center' }}>{itm}</div>
                  </div>
                ))}
              </div>
        )
}