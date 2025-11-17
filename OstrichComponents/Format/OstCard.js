import React, {useEffect, useState} from "react";
import darkenColor from "../Functions/darkenColor";


export const OstCard =({
    children,
    imageSrc,
    templateStyle,
    style,
    details,
    noShadow=false,
    rounded=true,
    onClick
}) =>{

    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false)

    /////////////////////
    // Style Functions //
    /////////////////////

    // This takes imported Styles and Applies Ostrich Effects to it. 
    function completeStyle(use = true){
        let completeStyle
        let tempStyle = {
            borderRadius: rounded === true ? 15 : 0, 
            padding: 10, 
            boxShadow: !noShadow ? '1px 2px 3px 2px rgba(0, 0, 0, 0.2)' : null,
            fontFamily: "Gilroy"
        }
        if (!style || !use){
            completeStyle = {...tempStyle}
        }
        else{
            completeStyle = {...tempStyle, ...style}
        }
        if (onClick){
            completeStyle = {
                ...completeStyle, 
                transform: isPressed ? 'scale(0.95)' : 'scale(1)',
                transition: 'transform 0.1s ease-out',
                background: isHovered ? darkenColor(completeStyle.backgroundColor) : completeStyle.backgroundColor ? completeStyle.backgroundColor : "white",
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
        else {
            let renderMethod
            if (templateStyle === 1){
                renderMethod = TemplateOneRender()
            }
            else if (templateStyle === 2){
                renderMethod =  TemplateTwoRender()
            }
            else if (templateStyle === 3){
                renderMethod =  TemplateThreeRender()
            }
            else if (templateStyle === 4){
                renderMethod =  TemplateFourRender()
            }
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
                    {renderMethod}
                </div>
            )
        }
    }


    // Templates //

        // Template One
        const TemplateOneRender = () => {
            return(
                <div style={{display: 'flex', flexDirection: "column", height: '100%', width: '100%'}}>
                    <div style={{ display: 'flex',flex: 8, 
                        justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
                    }}>
                        <img src={imageSrc} style={{maxWidth: (details?.imgMaxWidth ? details.imgMaxWidth : '100%'), maxHeight: '100%', objectFit: "contain"}} />
                    </div>
                    {children ? 
                        (<div style={{ display: 'flex',
                            flex: 2, 
                            paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                            justifyContent: 'center', alignItems: 'center',
                            fontSize: (details?.titleStyle ? details?.titleStyle : 24)
                        }}>
                            {children}
                        </div>)
                        :
                        null
                    }
                </div>
            )
        }

        // Tempkate Two
        const TemplateTwoRender = () => {
            return(
                <div style={{display: 'flex', flexDirection: "column", height: '100%', width: '100%',}}>
                    <div style={{ display: 'flex',
                        flex: 2, 
                        paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                        justifyContent: 'center', alignItems: 'center',
                        fontSize: (details?.titleStyle ? details?.titleStyle : 24)
                    }}>
                        {children}
                    </div>
                    <div style={{ 
                        display: 'flex',flex: 8, 
                        justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
                    }}>
                        <img src={imageSrc} style={{maxWidth: (details?.imgMaxWidth ? details.imgMaxWidth : '100%'), maxHeight: '100%', objectFit: "contain"}} />
                    </div>
                </div>
            )
        }
        
        // Template Three
        const TemplateThreeRender = () => {
            return(
                <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                    {/* Title  */}
                    {details?.title ? 
                        (
                        <div style={{ 
                        display: 'flex',
                        flex: 2, 
                        justifyContent: 'center', alignItems: 'center',
                        fontSize: (details?.fontSize ? details.fontSize : 22),
                        fontFamily : (details?.fontFamily ? details.fontFamily : "Gilroy"),
                        }}>
                            {details?.title}
                        </div>
                        )
                        :
                        null
                    }

                    {/* Content */}
                    <div style={{ 
                    display: 'flex', flex: 10,
                    justifyContent: 'center', alignItems: 'row', 
                    }}>
                        <div style={{display: 'flex', flex: details?.pictureFlexSize ? details.pictureFlexSize : 8}}>
                            <img src={imageSrc} style={{maxWidth: '100%', maxHeight: '100%', objectFit: (details?.title ? "contain" : details?.caption ? "contain" : "contain")}} />
                        </div>
                        <div style={{ display: 'flex',
                        flex: details?.pictureFlexSize ? 12 - details?.pictureFlexSize : 4,
                        paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        }}>
                            {children}
                        </div>
                    </div>
                        
                    {/* Caption  */}
                    {details?.caption ? 
                        (
                        <div style={{ 
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center', alignItems: 'center',
                        fontSize: (details?.fontSize ? details.fontSize : 18),
                        fontFamily : (details?.fontFamily ? details.fontFamily : "Gilroy"),
                        }}>
                            {details?.caption}
                        </div>
                        )
                        :
                        null
                    }
                </div>
            )
        }

        // Template Four
        const TemplateFourRender = () => {
            return(
                <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                    {/* Title  */}
                    {details?.title ? (
                        <div style={{ 
                        display: 'flex',
                        flex: 2, 
                        justifyContent: 'center', alignItems: 'center',
                        fontSize: (details?.fontSize ? details.fontSize : 22),
                        fontFamily : (details?.fontFamily ? details.fontFamily : "Gilroy"),
                        }}>
                            {details?.title}
                        </div>
                    ) : null
                    }

                    {/* Content */}
                    <div style={{ 
                    display: 'flex', flex: 10,
                    justifyContent: 'center', alignItems: 'row', 
                    }}>
                        <div style={{ display: 'flex',
                        flex: 6, 
                        paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        }}>
                            {details?.columnLeft}
                        </div>
                        <div style={{ display: 'flex',
                        flex: 6, 
                        paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        }}>
                            {details?.columnRight}
                        </div>
                    </div>
                        
                    {/* Title  */}
                    {details?.caption ? 
                        (
                        <div style={{ 
                        display: 'flex',
                        flex: 1, 
                        justifyContent: 'center', alignItems: 'center',
                        fontSize: (details?.fontSize ? details.fontSize : 18),
                        fontFamily : (details?.fontFamily ? details.fontFamily : "Gilroy"),
                        }}>
                            {details?.caption}
                        </div>
                        )
                        :
                        null
                    }
                </div>
            )
        }
    
    /////////////////
    // Main Render //
    /////////////////
    return determineReturn()
    
}