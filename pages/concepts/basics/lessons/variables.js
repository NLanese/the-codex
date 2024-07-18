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
                <div style={{flexDirection: 'row'}}>
                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0</span>
                    </p>
                </div>
            )
        }

        function renderVariableJavaAndC(){
            return(
                <div style={{flexDirection: 'row'}}>
                    <p>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0;</span>
                    </p>
                </div>
            )
        }

        function renderVariablesPython(){
            return(
                <div style={{flexDirection: 'row'}}>
                    <p>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0</span>
                    </p>
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
                        <strong>A Variable is essentially a container for information that be changed, referenced, checked or otherwise used in the future. </strong> This definition may seem a little confusing, but that is because of how abstract Variables are. Let's use some real life examples:
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

                    <p>
                        Essentially, every bit of data that is used on any software system will be saved in a variable at some point in time. There are different kinds of variables and different computer languages have different ways of creating and interacting with variables, but the concept is consistent throughout all apsects of Computer Scinece. Below, you will see how to <strong>declare</strong> (which means create) a variable.
                    </p>
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
                    js={renderVariablesJS()}
                    java={renderVariableJavaAndC()}
                    cs={renderVariableJavaAndC()}
                    py={renderVariablesPython()}
                />
            </div>
        )
    }

    return MAIN()

}

export default VariablesLesson