// React
import React, {useEffect, useState} from "react";

// Constants
import Colors from "../../styles/colors"

// NextJS
import { useRouter } from "next/router"


export default function ListPage({items, directory}){

    ///////////
    // State //
    ///////////

        const [hoveredItm, setHoveredItm] = useState(false)

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
            if (hoveredItm === itm){
                return Colors.activeColor
            }
            else{
                return Colors.inactiveGrey
            }
        }

        // Determines Style of Button 
        function determineStyle(itm){
            return {backgroundColor: determineColor(itm), width: 500, height: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 15, borderColor: 'black', borderWidth: 1, display: 'flex', marginTop: 10}
        }

    /////////////////
    // Main Return //
    /////////////////

    return items.map( itm => {
        return(
            <div
            onMouseEnter={() => handleMouseEnter(itm)}
            onMouseLeave={() => handleMouseLeave()}
            style={{...determineStyle(itm)}}
            onClick={() => {router.replace(`/${directory}/${itm.toLowerCase()}/menu`)}}
            >
                <div style={{fontFamily: 'Gilroy', fontWeight: 500, fontSize: 36}}>
                    {itm}
                </div>
            </div>
        )
    })
}