// React
import React, {useEffect, useState} from "react";

// Ostrich
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";

// Local
import Styles from "../../styles/styles";

const CodeSnippet = ({
    js,
    cs,
    py,
    java
}) => {

    ///////////
    // State //
    ///////////

    const [language, setLanguage] = useState("js")

    ///////////////
    // Functions //
    ///////////////

        function handleLanguagePress(lang){
            if (lang === "JavaScript"){
                setLanguage("js")
            }
            else if (lang === "C#"){
                setLanguage("cs")
            }
            else if (lang === "Java"){
                setLanguage("java")
            }
            else if (lang === "Python"){
                setLanguage("py")
            }
        }

    ////////////////
    // Renderings //
    ////////////////

    const renderSyntax = () => {
        if (language === "js"){
            return js
        }
        else if (language === "cs"){
            return cs
        }
        else if (language === "py"){
            return py
        }
        else if (language === "java"){
            return java
        }
    }

    function renderCodeSpace(){
        return(
            <div style={{backgroundColor: "black", marginTop: '0%', padding: 25}}>
                {renderSyntax()}
            </div>
        )
    }

    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return(
            <div style={{
            borderRadius: 15, border: "2px solid rgb(156, 161, 158)",
            boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)',
            overflow: 'hidden'
            }}>
                <OstrichTabBar
                startingTabByIndex={0}
                style={{height: "105%", width: '100%', overflow: 'hidden'}} 
                titleStyle={Styles.Code.codeSnippetTab}
                activeTitleStyle={Styles.Code.codeSnippetTabACTIVE}
                hoverTitleStyle={Styles.Code.codeSnippetTabHOVER}
                startingTabByTitle={"JavaScript"}
                noShadow={true}
                tabs={
                    [
                        {title: "JavaScript"},
                        {title: "Java"}, 
                        {title: "C#"}, 
                        {title: "Python"}
                    ]
                }
                onTabClick={(tab) => handleLanguagePress(tab.title)}
                />
                {renderCodeSpace()}
            </div>
        )
    }

    return MAIN()


}

export default CodeSnippet