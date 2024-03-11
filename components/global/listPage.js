// React
import React, {useEffect, useState} from "react";

// Constants
import Colors from "../../styles/colors"

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../recoil/atoms";

// NextJS
import { useRouter } from "next/router"


export default function ListPage({items, directory}){

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

        // Handles PRessing the option Button
        function handleClick(itm){
            setDirectoryState(itm)
            router.replace(`/${directory}/${itm.toLowerCase()}/menu`)
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
                <div style={{fontFamily: 'Gilroy', fontWeight: 500, fontSize: 36}}>
                    {itm}
                </div>
            </div>
        )
    })
}