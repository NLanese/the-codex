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

        function handleMouseEnter(itm){
            console.log("Hovering")
            setHoveredItm(itm)
        }

        function handleMouseLeave(){
            setHoveredItm(false)
        }

        function determineColor(itm){
            if (hoveredItm === itm){
                return Colors.activeColor
            }
            else{
                return Colors.inactiveGrey
            }
        }

    return items.map( itm => {
        return(
            <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            style={{backgroundColor: determineColor(itm), width: 500, height: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 15, borderColor: 'black', borderWidth: 1, display: 'flex', marginTop: 10}}
            onClick={(itm) => {router.replace(`/${directory}/${itm}`)}}
            >
                <div style={{fontFamily: 'Gilroy', fontWeight: 500, fontSize: 36}}>
                    {itm}
                </div>
            </div>
        )
    })
}