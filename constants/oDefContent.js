import DefinitionRow from "../OstrichComponents/DefinitionsList/DefinitionRow"
import Styles from "../styles/styles"

export const ODefContnet = ({
    word,
    definition,
    color
}) => {

    return(
        <div style={{padding: 15}}>
            <DefinitionRow 
                definitionObject={
                    {
                        title: word,
                        definition: definition,
                        titleStyle: Styles.Fonts.h2,
                        definitionStyle: Styles.Fonts.definition,
                        color: color
                    }
                }
                definitionRowStyle={{border: "1px solid black", borderRadius: 5, marginTop: 5}}
                titleBoxStyle={{
                    flex: 3,  display: "flex", 
                    justifyContent: 'center', alignItems: 'center', 
                    borderRight: "1px solid black"
                }}
                definitionBoxStyle={{flex: 7}}
            />
        </div>
    )
}