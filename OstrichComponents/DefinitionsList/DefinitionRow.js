


const DefinitionRow = ({
    definitionObject,
    definitionRowStyle = {display: "flex", flexDirection: 'row'},
    titleBoxStyle,
    definitionBoxStyle,
}) => {

    console.log(definitionRowStyle)
    
    return(
        <div style={{display: "flex", flexDirection: 'row', ...definitionRowStyle}}>
            <div style={{...titleBoxStyle}}>
                <div style={{...definitionObject.titleStyle, backgroundColor: definitionObject.color}}>
                    {definitionObject.title}
                </div>
            </div>
            <div style={{...definitionBoxStyle}}>
                <div style={{...definitionObject.definitionStyle, backgroundColor: definitionObject.color}}>
                    {definitionObject.definition}
                </div>
            </div>
        </div>
    )
}

export default DefinitionRow