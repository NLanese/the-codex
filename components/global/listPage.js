// React
import React, {useEffect, useState} from "react";

// Constants
import Colors from "../../styles/colors"

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../recoil/atoms";

// NextJS
import { useRouter } from "next/router"


export default function ListPage({
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

        const [directoryState, setDirectoryState] = useRecoilState(directoryDataState)

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
            if (size === "medium" || size === "med"){
                width = 300
                height = 62
            }
            else if (size === "small" || size === "sm"){
                width = 180
                height = 50
            }
            return {backgroundColor: determineColor(itm), width: width, height: height, justifyContent: 'center', alignItems: 'center', borderRadius: 15, borderColor: 'black', borderWidth: 1, display: 'flex', marginTop: 10}
        }

        function determineFont(){
            let fontSize = 36
            let fontWeight = 500
            if (size === "medium" || size === "med"){
                fontWeight = 400
                fontSize = 28
            }
            else if (size === "small" || size === "sm"){
                fontWeight = 400
                fontSize = 20
            }
            return {fontFamily: 'Gilroy', fontWeight: fontWeight, fontSize: fontSize}
        }

        // Handles PRessing the option Button
        function handleClick(itm){
            if (onClick){
                onClick(itm)
                return
            }
            if (directory){
                setDirectoryState(itm)   
            }
            router.replace(`/${directory.toLowerCase()}/${itm.toLowerCase()}/menu`)
        }

    /////////////////
    // Main Return //
    /////////////////

    return items.map( (itm, i) => {
        return(
            <div
            key={i}
            onMouseEnter={() => handleMouseEnter(itm)}
            onMouseLeave={() => handleMouseLeave()}
            style={{...determineStyle(itm)}}
            onClick={() => {handleClick(itm)}}
            >
                <div style={determineFont()}>
                    {itm}
                </div>
            </div>
        )
    })
}