


const DefinitionRow = ({
    definitionObject,
    definitionRowStyle = {display: "flex", flexDirection: 'row'},
    titleBoxStyle,
    definitionBoxStyle,
}) => {
    
    return(
        <div style={{display: "flex", flexDirection: 'row', ...definitionRowStyle}}>
            <div style={{...titleBoxStyle, backgroundColor: definitionObject.color}}>
                <p style={{...definitionObject.titleStyle}}>
                    {definitionObject.title}
                </p>
            </div>
            <div style={{...definitionBoxStyle, backgroundColor: definitionObject.color}}>
                <p style={{...definitionObject.definitionStyle}}>
                    {definitionObject.definition}
                </p>
            </div>
        </div>
    )
}

export default DefinitionRow