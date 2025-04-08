import React, {useEffect, useState} from "react";
import { OstCard } from "../Format/OstCard";
import { OstrichButton } from "../Buttons/OstrichButton";
import { title } from "process";

export const OstPopUp = ({
    relative = false,         // If True, the PopUp's position Styles are relative to its container. If false, it is positioned relative to the absolute DOM
    positionStyle,            // Position
    style,                    // Pop Up Render Style
    contnent,                 // String 
    buttons = false,          // Array of Button Objects
    timerForDismiss = false,  //  
    children
}) => {

    ///////////
    // State //
    ///////////

    // Loading
    const [loading, setLoading] = useState(true)

    // Buttons Param as a State
    const [buttonsState, setButtonsState] = useState([])

    ////////////////////
    // Prop Functions //
    ////////////////////

    // Sets Default Button 
    function setUpDefaultButtons(){
        if (!buttons){
            buttons = [{
                title: "Ok",
                template: "Fullbar"
            }]
        }
        setButtonsState(buttons)
    }

    //////////////////////
    // Render Functions //
    //////////////////////

    
    

}