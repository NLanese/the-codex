

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

    ////////////////
    // Renderings //
    ////////////////

    function renderSyntax(){
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
}

export default CodeSnippet