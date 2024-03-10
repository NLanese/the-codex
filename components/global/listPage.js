// React
import React, {useEffect, useState} from "react";

// Constants
import Colors from "../../styles/colors"

// NextJS
import { useRouter } from "next/router"
import { constSelector } from "recoil";


export default function ListPage({items, directory}){

    ///////////
    // State //
    ///////////

        const [hoveredItm, setHoveredItm] = useState(false)

        const router = useRouter()

    ///////////////
    // Functions //
    ///////////////

        function handleMouseEnter(itm){
            setHoveredItm(itm)
        }

        function handleMouseLeave(){
            setHoveredItm(false)
        }

        function determineColor(itm){
            if (hoveredItm === itm){
                console.log(itm, " should be active")
                return Colors.activeColor
            }
            else{
                return Colors.inactiveGrey
            }
        }

        function determineStyle(itm){
            return {backgroundColor: determineColor(itm), width: 500, height: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 15, borderColor: 'black', borderWidth: 1, display: 'flex', marginTop: 10}
        }

    return items.map( itm => {
        return(
            <div
            onMouseEnter={() => handleMouseEnter(itm)}
            onMouseLeave={() => handleMouseLeave()}
            style={{...determineStyle(itm)}}
            onClick={(itm) => {router.replace(`/${directory}/${itm}`)}}
            >
                <div style={{fontFamily: 'Gilroy', fontWeight: 500, fontSize: 36}}>
                    {itm}
                </div>
            </div>
        )
    })
}