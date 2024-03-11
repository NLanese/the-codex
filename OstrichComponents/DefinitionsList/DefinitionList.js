import DefinitionRow from "./DefinitionRow"


const DefinitionList = ({
    title=false,
    titleStyle={display: "flex", justifyContent: "center", fontSize: 24, textAlign: "center"},
    definitionRowStyle,
    definitionTitleStyle,
    definitionStyle,
    definitionsList
}) => {

    function renderDefinitions(){
        return definitionsList.map( (def, i) => {
            return(
                <DefinitionRow 
                    definitionObject={def}
                    definitionBoxStyle={definitionRowStyle}
                />
            )  
        })
    }

    function renderTitle(){
        if (title){
            return(
                <div style={{titleStyle}}>
                    {title}
                </div>
            )
        }
    }

    /////////////////
    // Main Return //
    /////////////////

    return (
        <div>
            {renderTitle()}
            <div>
                {renderDefinitions()}
            </div>
        </div>
    )

}

export default DefinitionList