import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const OstrichButton = ({
    style,
    inactiveStyle=false,
    title,
    caption=false,
    activeColor,
    inactiveColor,
    titleStyle,
    captionStyle,

    isActive=true,
    onSubmit,
}) => {

    ////////////
    // States //
    ////////////

        const [isHovered, setIsHovered] = useState(false)

    ///////////////
    // Functions //
    ///////////////

        // STYLES AND COLORS //

            // Determines ALL Style Rules(non-text) to Apply
            function determineStyle(){
                if (!inactiveStyle){
                    inactiveStyle = style
                }
                if (isActive){
                    return {...style, backgroundColor: determineBackgroundColor()}
                }
                else{
                    return {...inactiveStyle, backgroundColor: determineBackgroundColor()}
                }
            }

            // Determines the backgrouundColor of the Button
            function determineBackgroundColor(){
                if (isActive){
                    if (isHovered){
                        return isRGBA(activeColor)
                        ? darkenRGBA(activeColor, 10) // Adjust the darkness level as needed
                        : darkenColor(activeColor, 10);
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
                const [r, g, b] = color.match(/\d+/g);
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
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handlePress()}
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
