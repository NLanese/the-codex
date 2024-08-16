import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';

export const OstrichSelectionBox = ({
    tag,
    selected = false,
    onSelect,
    type,
    fieldObj = false,

    titleStyle,
    circleStyle = {border: "2px solid black", borderRadius: 32, height: 32, width: 32},
    boxStyle = {border: "2px solid black", borderRadius: 15, height: 55, minWidth: 100},
    selectedCircleStyle = {border: "2px solid black", borderRadius: 50, padding: 5, backgroundColor: "#E9F1FF"},
    selectedBoxStyle = {border: "2px solid black", borderRadius: 15, height: 55, minWidth: 100, padding: 5, backgroundColor: "#E9F1FF"},
    optionsTextStlye = {fontSize: 15, fontWeight: 800},
    hoverBorderColor
    
}) => {
    
    ////////////
    // States //
    ////////////

        // Hovered Toggled
        const [isHovered, setIsHovered] = useState(false)
        const hoverRef = useRef(isHovered)

        useEffect(() => {
            hoverRef.current = isHovered
        }, [isHovered])

    ///////////////
    // Functions //
    ///////////////

        // Sets Hovered to True
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        // Handles Hovered to False
        const handleMouseLeave = () => {
            if (!dropDeployed) {
                setIsHovered(false);
            }
        };

        const handleSelectionClick = (tag) => {
            onSelect(tag)
            if (fieldObj){          // If there is a Field Obj

            }
            else{                   // If there is no Field Obj
                setIsSelected(true)
            }
        }

    ////////////////
    // Renderings //
    ////////////////

        // Determines Whether Selected or Default Style for BUBBLE
        function determineCircleStyle(){
            if (isSelected){
                return selectedCircleStyle;
            }
            else{
                return circleStyle;
            }
        }

        // Determines Whether Selected or Default Style for BOX
        function determineBoxStyle(){
            if (selected){
                return selectedBoxStyle;
            }
            else{
                return boxStyle;
            }
        }

        // Renders the Selection Circle
        function renderCircle(){
            return(
                <button
                    style={determineCircleStyle()}
                    onClick={() => onSelect(tag)}
                ></button>
            )
        }

        // Renders For BUBBLE
        function renderCircleAndValue(){
            return(
                <div style={{display: 'flex', flexDirection: 'row'}}>
                   {renderCircle()}
                   <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100%", paddingLeft: 10, ...optionsTextStlye}}>
                        {tag}
                    </div>
                </div>
            )
        }

        // Renders the Tag in Selectable BOX
        function renderBoxAndValue(){
            <div
            style={determineBoxStyle()}
            onClick={onSelect(tag)}
            >
                <div>{tag}</div>
            </div>
        }

        // Determines whether to Render Box or Bubble
        function determineType(){
            if (type === "Bubble" || type === "bubble" || type === "circle" || type === "Circle"){
                return renderCircleAndValue()
            }
            else{
                return renderBoxAndValue()
            }
        }

    /////////////////
    // Main Return //
    /////////////////
    return determineType()
    
}