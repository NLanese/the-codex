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

    // This takes imported Styles and Applies Ostrich Effects to it. 
    function completeStyle(use = true){
        let completeStyle
        let tempStyle = {
            borderRadius: 15, 
            padding: 10, 
            boxShadow: '1px 2px 3px 2px rgba(0, 0, 0, 0.2)'
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

        // Tempkate Two
        const TemplateTwoRender = () => {
            return(
                <div style={{
                    ...completeStyle(true), 
                    display: 'flex', flexDirection: 'column', 
                    minHeight: 100, paddingBottom: 10,
                    overflow: 'hidden',
                }} 
                onMouseDown={() =>{ 
                    if (onClick){
                        setIsPressed(true)
                    }
                }}
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
                    {/* Content  */}
                    <div style={{ display: 'flex',
                        flex: 2, 
                        paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                        justifyContent: 'center', 
                        fontSize: (details?.titleStyle ? details?.titleStyle : 24)
                    }}>
                        {children}
                    </div>

                    {/* Picture */}
                    <div style={{ display: 'flex',
                        flex: 8, 
                        justifyContent: 'center', alignItems: 'center', 
                    }}>
                        <img src={imageSrc} style={{maxWidth: '100%', maxHeight: '100%', objectFit: "contain"}} />
                    </div>

                        
                </div>
            )
        }
        
        // Template Three
        const TemplateThreeRender = () => {
            return(
                <div style={{
                    ...completeStyle(true), 
                    display: 'flex', flexDirection: 'column', 
                    minHeight: 100, paddingBottom: 10,
                    overflow: 'hidden',
                }} 
                onMouseDown={() =>{ 
                    if (onClick){
                        setIsPressed(true)
                    }
                }}
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
                        <div style={{display: 'flex', flex: 8}}>
                            <img src={imageSrc} style={{maxWidth: '100%', maxHeight: '100%', objectFit: (details?.title ? "contain" : details?.caption ? "contain" : "contain")}} />
                        </div>
                        <div style={{ display: 'flex',
                        flex: 4, 
                        paddingBottom: 5, paddingTop: 5, textAlign: 'center', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        }}>
                            {children}
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

        // Template Four
        const TemplateFourRender = () => {
            return(
                <div style={{
                    ...completeStyle(true), 
                    display: 'flex', flexDirection: 'column', 
                    minHeight: 100, paddingBottom: 10,
                    overflow: 'hidden',
                }} 
                onMouseDown={() =>{ 
                    if (onClick){
                        setIsPressed(true)
                    }
                }}
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