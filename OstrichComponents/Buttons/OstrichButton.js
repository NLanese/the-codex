import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const OstrichButton = ({
    style,
    inactiveStyle=false,
    title,
    caption=false,
    activeColor,
    inactiveColor="grey",
    titleStyle,
    captionStyle,

    isActive=true,
    onSubmit,
}) => {

    ////////////
    // States //
    ////////////

        const [isHovered, setIsHovered] = useState(false)
        const [isPressed, setIsPressed] = useState(false)

        const [styleFinal, setStyleFinal] = useState(false)
        const [inactiveStyleFinal, setInactiveStyleFinal] = useState(false)

    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        finalizeStyle()
    }, [])

    ///////////////
    // Functions //
    ///////////////

        // STYLES AND COLORS //

            // Completes Input Styles with Defaults
            function finalizeStyle(){
                let temp = {
                    transform: isPressed ? 'scale(0.95)' : 'scale(1)',
                    transition: 'transform 0.1s ease-out',
                    backgroundColor: determineBackgroundColor(),
                    cursor: 'pointer',
                    borderRadius: 15, 
                    padding: 10, 
                    boxShadow: '1px 2px 3px 2px rgba(0, 0, 0, 0.2)',
                    fontFamily: "Gilroy"
                }
                setStyleFinal({...temp, style})
                if (!inactiveStyle){
                    inactiveStyle = style
                }
                setInactiveStyleFinal({...temp, inactiveStyle})

            }

            // Determines ALL Style Rules(non-text) to Apply
            function determineStyle(){
                return {...styleFinal, backgroundColor: determineBackgroundColor()}
            }

            // Determines the backgrouundColor of the Button
            function determineBackgroundColor(){
                if (isActive){
                    if (isHovered){
                        return isRGBA(activeColor)
                        ? darkenRGBA(activeColor, 20) // Adjust the darkness level as needed
                        : darkenColor(activeColor, 20);
                    }
                    else{
                        return activeColor
                    }
                }
                else{
                    return inactiveColor
                }
            }

            // Determines whether the supplied color is RGBA
            function isRGBA(colorString) {
                // Regular expression for RGBA format
                const rgbaRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*(0|1|0?\.\d+))?\s*\)$/;
            
                return rgbaRegex.test(colorString);
            }

            // Darkens HexColor
            function darkenColor(color, percent) {
                const darkenValue = percent / 100;
                let r, g, b;
            
                if (color.startsWith('#')) {
                    // Convert hex to RGB
                    color = color.slice(1);
                    if (color.length === 3) {
                        color = color.split('').map(c => c + c).join('');
                    }
                    const int = parseInt(color, 16);
                    r = (int >> 16) & 255;
                    g = (int >> 8) & 255;
                    b = int & 255;
                } else {
                    // Parse rgb(x, y, z)
                    [r, g, b] = color.match(/\d+/g).map(Number);
                }
            
                const darkenedR = Math.round(r * (1 - darkenValue));
                const darkenedG = Math.round(g * (1 - darkenValue));
                const darkenedB = Math.round(b * (1 - darkenValue));
            
                return `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`;
            }

            // Darkens RGBA
            function darkenRGBA(rgbaColor, percent) {
                const darkenValue = percent / 100;
                const match = rgbaColor.match(/\d+/g);
                const darkenedR = Math.round(match[0] * (1 - darkenValue));
                const darkenedG = Math.round(match[1] * (1 - darkenValue));
                const darkenedB = Math.round(match[2] * (1 - darkenValue));
                const alpha = match[3] ? `, ${match[3]}` : '';
                return `rgba(${darkenedR}, ${darkenedG}, ${darkenedB}${alpha})`;
            }
        
        // HANDLERS //

            function handlePress(){
                onSubmit()
            }


    ////////////////
    // Renderings //
    ////////////////

    function renderButtonText(){
        if (!caption){
            return(
                <div style={{...titleStyle}}>
                    {title}
                </div>
            )
        }
        else{
            return(
                <div style={{justifyContent: 'center', alignItems: 'center'}}>
                     <div style={{...titleStyle}}>
                        {title}
                    </div>
                    <div style={{...captionStyle}}>
                        {caption}
                    </div>
                </div>
            )
        }
    }


    /////////////////
    // Main Render //
    /////////////////

    return(
        <div 
        style={{...determineStyle()}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
            setIsPressed(false)
            setIsHovered(false)
        }}
        onClick={() => handlePress()}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        >
            {renderButtonText()}
        </div>
    )
}


///////////////////////
// Prop Restrictions //
///////////////////////

OstrichButton.propTypes = {
    style: PropTypes.object,
    inactiveStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    titleStyle: PropTypes.object,
    captionStyle: PropTypes.object,
    isActive: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired
};
