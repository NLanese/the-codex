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

        function renderCircle(){

        }

    /////////////////
    // Main Return //
    /////////////////
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>

            </div>
        </div>
    )
}