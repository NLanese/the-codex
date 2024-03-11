


const DefinitionRow = ({
    definitionObject,
    definitionRowStyle,
    titleBoxStyle,
    definitionBoxStyle,
}) => {

    
    return(
        <div style={{display: "flex", flexDirection: 'row', ...definitionRowStyle}}>
            <div style={{...titleBoxStyle}}>
                <div style={{...definitionObject.titleStyle}}>
                    {definitionObject.title}
                </div>
            </div>
            <div style={{...definitionBoxStyle}}>
                <div style={{...definitionObject.definitionStyle}}>
                    {definitionObject.definition}
                </div>
            </div>
        </div>
    )
}

export default DefinitionRow