import React, {useEffect, useState} from "react";



export const OstCol =({
    children,
    canScroll = false,
    style,
    width
}) =>{

    ///////////
    // State //
    ///////////

    const [completeStyle, setCompleteStyle] = useState(false)

    /////////////////
    // Use Effects //
    /////////////////

    useEffect(() => {
        let tempStyle = {
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
        }
        setCompleteStyle({
            ...tempStyle, ...style, 
            overflowX: (canScroll ? 'scroll' : 'hidden' )
        })
    }, [])




    ///////////////
    // Rendrings //
    ///////////////


    // Top Level Render
    function determineReturn(){
        if (!templateStyle){
            return(
                <div style={completeStyle()}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => {
                    setIsPressed(false);
                    setIsHovered(false);
                }} 
                onMouseEnter={() => {
                    if (onClick){
                        setIsHovered(true)
                    }
                }}
                onClick={(details) => {
                    if (onClick){
                        setIsPressed(false); 
                        onClick(details);
                    }
                }}>
                    {children}
                </div>
            )
        }
        else if (templateStyle === 1){
            return TemplateOneRender()
        }
        else if (templateStyle === 2){
            return TemplateTwoRender()
        }
        else if (templateStyle === 3){
            return TemplateThreeRender()
        }
        else if (templateStyle === 4){
            return TemplateFourRender()
        }
    }

    /////////////////
    // Main Render //
    /////////////////
    return determineReturn()
    
}