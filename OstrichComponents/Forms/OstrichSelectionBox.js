import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const OstrichSelectionBox = ({
    tag,
    selected,

    onSelect,

    titleStyle,
    circleStyle,
    selectedCircleStyle,

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

        const [isSelected, setIsSelected] = useState(false)

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

    ////////////////
    // Renderings //
    ////////////////

        // Determines Whether Selected or Default Style
        function determineCircleStyle(){
            if (selected){
                return selectedCircleStyle;
            }
            else{
                return circleStyle;
            }
        }

        // Renders the Selection Circle
        function renderCircle(){
            <div
            style={determineCircleStyle()}
            onClick={onSelect(tag)}
            >

            </div>
        }

    /////////////////
    // Main Return //
    /////////////////
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
           {renderCircle()}
           <div style={titleStyle}>{tag}</div>
        </div>
    )
}