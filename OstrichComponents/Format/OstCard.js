export const OstCard =({
    children,
    imageSrc,
    templateStyle,
    style,
    details,
}) =>{


    /////////////////////
    // Style Functions //
    /////////////////////

    function completeStyle(use = true){
        if (!style || !use){
            return {borderRadius: 15, padding: 10, boxShadow: '1px 2px 3px 2px rgba(0, 0, 0, 0.2)'}
        }
        else{
            let completeStyle = {...style}
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
    }


    ///////////////
    // Rendrings //
    ///////////////
    
    function determineReturn(){
        if (templateStyle === 1){
            return TemplateOneRender()
        }
    }

    const TemplateOneRender = () => {
        return(
            <div style={{...completeStyle(false), display: 'flex', width: 100%}}>
                <div style={{flex: 7, width: '100%', justifyContent: '100%', alignItems: 'center'}}>
                    <img src={imageSrc} style={{width: '100%', height: '100%'}} />
                </div>
            </div>
        )
    }

    const TemplateTwoRender = () => {
        
    }
    
    
}