// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
 
// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../../../recoil/atoms";

// Components and Functions
import renderTitle from "../../../../components/lessonsAndLabs/renderTitle";
import CodeSnippet from "../../../../components/lessonsAndLabs/codeSnippet";


const VariablesLesson = ({}) => {

    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)

    const [loading, setLoading] = useState(true)

    ////////////////
    // UseEffects //
    ////////////////

        // Sets Directory if not already
        useEffect(() => {
            if (directory !== "Basics"){
                setDirectory("Basics")
            }
            setLoading(false)
        }, [])

 
    ////////////////////
    // Code Rendering //
    ////////////////////

        function renderVariablesJS(){
            return(
                <div>
                    <p style={Styles.Code.keyword}>let</p>
                    <p style={Styles.Code.var}>x</p>
                    <p style={Styles.Code.reg}>= 0</p>
                </div>
            )
        }

        function renderVariableJavaAndC(){
            return(
                <div>
                    <p style={Styles.Code.keyword}>int</p>
                    <p style={Styles.Code.var}>x</p>
                    <p style={Styles.Code.reg}>= 0;</p>
                </div>
            )
        }

        function renderVariablesPython(){
            return(
                <div>
                    <p style={Styles.Code.var}>x</p>
                    <p style={Styles.Code.reg}>= 0</p>
                </div>
            )
        }

    //////////////////////
    // Lesson Rendering //
    //////////////////////

        function renderFirst(){
            return(
                <div>
                    <p>
                        Variables are one of the most important base concepts of Computer Science. Every method of coding will involve the use of variables. So, first thing is first; what IS a variable?
                    </p>
                    <p>
                        A Variable is essentially a container for information that be changed, referenced, checked or otherwise used in the future. This definition may seem a little confusing, but that is because of how abstract Variables are. Let's use some real life examples:
                    </p>
                    <div>
                        <p>
                            When you have a name attached to any online account, that name is a variable. Whether your name is "John", "Dave", or "Hossenpheffer" your account will se set to display whatever is stored under the 'name' variable
                        </p>
                        <p>
                            When you login to a website, both your username and password are stored in the computer as variables. They will begin as just empty values, but as you type into the 'username' or 'email' text bar, the 'login' variable will be changed to match what you type. When you press the login button, the computer will use what you entered into the 'login' variable and check it against all other known usernames.
                        </p>
                        <p>
                            In a shooter video game, each gun will have a different maximum ammo count. This number would be saved under a variable named something like max_ammo_count.
                        </p>
                    </div>
                </div>
            )
        }

        
    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{marginTop: '-3.2%'}}>
                {renderTitle("Variables")}
                {renderFirst()}
                <CodeSnippet
                    js={renderVariablesJS}
                    java={renderVariableJavaAndC}
                    cs={renderVariableJavaAndC}
                    py={renderVariablesPython}
                />
            </div>
        )
    }

    return MAIN()

}

export default VariablesLesson