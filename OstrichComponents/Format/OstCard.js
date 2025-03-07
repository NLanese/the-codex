import React, {useEffect, useState} from "react";


export const OstCard =({
    children,
    imageSrc,
    templateStyle,
    style,
    details,
    onClick
}) =>{

    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false)

    /////////////////////
    // Style Functions //
    /////////////////////

    function completeStyle(use = true){
        let completeStyle
        if (!style || !use){
            completeStyle = {borderRadius: 15, padding: 10, boxShadow: '1px 2px 3px 2px rgba(0, 0, 0, 0.2)'}
        }
        else{
            completeStyle = {...style}
            if (!style.borderRadius){
                completeStyle = {...completeStyle, borderRadius: 15}
            }
            if (!style.padding){
                completeStyle = {...completeStyle, padding: 10}
            }
            if (!style.boxShadow){
                completeStyle = {...completeStyle, boxShadow: '1px 2px 3px 2px rgba(0, 0, 0, 0.2)'}
            }
        }
        if (onClick){
            completeStyle = {
                ...completeStyle, 
                transform: isPressed ? 'scale(0.95)' : 'scale(1)',
                transition: 'transform 0.1s ease-out',
                background: isHovered ? 'rgba(0, 0, 0, 0.15)' : 'transparent',
                cursor: onClick ? 'pointer' : "none"
            }
        }
        return completeStyle
    }


    ///////////////
    // Rendrings //
    ///////////////


    // Top Level Render
    function determineReturn(){
        if (!templateStyle){
            return(
                <div style={completeStyle()}>
                    {children}
                </div>
            )
        }
        if (templateStyle === 1){
            return TemplateOneRender()
        }
    }


    // Templates //

        // Template One
        const TemplateOneRender = () => {
            if (!onClick){
                return(
                    <div style={{
                        ...completeStyle(true), 
                        display: 'flex', flexDirection: 'column', 
                        minHeight: 100, paddingBottom: 10,
                        overflow: 'hidden',
                    }}>
                        <div style={{ display: 'flex',
                            flex: 8, 
                            justifyContent: 'center', alignItems: 'center', 
                        }}>
                            <img src={imageSrc} style={{maxWidth: '100%', maxHeight: '100%', objectFit: "contain"}} />
                        </div>
                        <div style={{ display: 'flex',
                            flex: 2, 
                            paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                            justifyContent: 'center', 
                            fontSize: (details?.titleStyle ? details?.titleStyle : 24)
                        }}>
                            {children}
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div style={{
                        ...completeStyle(true), 
                        display: 'flex', flexDirection: 'column', 
                        minHeight: 100, paddingBottom: 10,
                        overflow: 'hidden',
                    }} 
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
                        setIsPressed(false); 
                        onClick(details);
                    }}>
                        <div style={{ display: 'flex',
                            flex: 8, 
                            justifyContent: 'center', alignItems: 'center', 
                        }}>
                            <img src={imageSrc} style={{maxWidth: '100%', maxHeight: '100%', objectFit: "contain"}} />
                        </div>
                        <div style={{ display: 'flex',
                            flex: 2, 
                            paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                            justifyContent: 'center', 
                            fontSize: (details?.titleStyle ? details?.titleStyle : 24)
                        }}>
                            {children}
                        </div>
                    </div>
                )
            }
        }

        // Template Two
        const TemplateTwoRender = () => {
            return
        }
    
    /////////////////
    // Main Render //
    /////////////////
    return determineReturn()
    
}