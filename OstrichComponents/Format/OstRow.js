import React, {useEffect, useState} from "react";



export const OstRow =({
    canScroll = false,
    style,
    columns,
    children,
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

        function renderColumns(){

        }


    /////////////////
    // Main Render //
    /////////////////

        return(
            <div style={completeStyle()}>
                {renderColumns()}
            </div>
        )
    
}