// React
import React, {useEffect, useState} from "react";

// Ostrich
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";

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
            <div style={{backgroundColor: "black", marginTop: '-1%', padding: 5}}>
                {renderSyntax()}
            </div>
        )
    }

    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return(
            <div>
                <OstrichTabBar 
                startingTabByTitle={"JavaScript"}
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