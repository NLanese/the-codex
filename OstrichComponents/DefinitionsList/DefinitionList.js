import DefinitionRow from "./DefinitionRow"


const DefinitionList = ({
    title=false,
    titleStyle={display: "flex", justifyContent: "center", fontSize: 24, textAlign: "center"},
    definitionRowStyle,
    titleBoxStyle,
    definitionBoxStyle,
    definitionsList
}) => {

    function renderDefinitions(){
        return definitionsList.map( (def, i) => {
            return(
                <DefinitionRow 
                    key={i}
                    definitionObject={def}
                    definitionRowStyle={definitionRowStyle}
                    titleBoxStyle={titleBoxStyle}
                    definitionBoxStyle={definitionBoxStyle}
                />
            )  
        })
    }

    function renderTitle(){
        if (title){
            return(
                <div style={{...titleStyle}}>
                    {title}
                </div>
            )
        }
    }

    /////////////////
    // Main Return //
    /////////////////

    // return (
    //     <div>
    //         {/* {renderTitle()} */}
    //         <div>
    //             {/* {renderDefinitions()} */}
    //         </div>
    //     </div>
    // )

    return <div>Test</div>

}

export default DefinitionList