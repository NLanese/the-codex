


const DefinitionRow = ({
    definitionObject,
    definitionRowStyle = {display: "flex", flexDirection: 'row'},
    titleBoxStyle,
    definitionBoxStyle,
}) => {
    
    return(
        <div style={{display: "flex", flexDirection: 'row', ...definitionRowStyle}}>
            <div style={{...titleBoxStyle, backgroundColor: definitionObject.color}}>
                <div style={{...definitionObject.titleStyle}}>
                    {definitionObject.title}
                </div>
            </div>
            <div style={{...definitionBoxStyle, backgroundColor: definitionObject.color}}>
                <div style={{...definitionObject.definitionStyle}}>
                    {definitionObject.definition}
                </div>
            </div>
        </div>
    )
}

export default DefinitionRow