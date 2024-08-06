// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
 
// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState, tabBarState } from "../../../../recoil/atoms";

// Components and Functions
import renderTitle from "../../../../components/lessonsAndLabs/renderTitle";
import CodeSnippet from "../../../../components/lessonsAndLabs/codeSnippet";
import { LessonPage } from "../../../../components/lessonsAndLabs/LessonPage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


const VariablesLesson = ({}) => {

    ///////////
    // State //
    ///////////

    const router = useRouter()

    // Makes sure URL Path is correct
    const [directory, setDirectory] = useRecoilState(directoryDataState)

    // Makes sure Header Bar Highlights the Active Tab
    const [tabBar, setTabBar] = useRecoilState(tabBarState)

    // Loading Check
    const [loading, setLoading] = useState(true)

    ////////////////
    // UseEffects //
    ////////////////

        // Sets Directory and Tabs if not already
        useEffect(() => {
            if (directory !== "Basics"){
                setDirectory("Basics");
            }
            if (tabBar !== "Lessons"){
                setTabBar("Lessons");
            }
            setLoading(false)
        }, [])


    ///////////////
    // Functions //
    ///////////////

        function handleLessonClick(lesson){
            router.replace(`/concepts/basics/lessons/${lesson.toLowerCase().replace(" ", "_")}`)
        }

        function handleTestClick(test){
            router.replace(`/concepts/basics/tests/${test.toLowerCase().replace(" ", "_")}`)
        }

        function handleLabsClick(lab){
            router.replace(`/concepts/basics/labs/${lab.toLowerCase().replace(" ", "_")}`)
        }
 
    ////////////////////
    // Code Rendering //
    ////////////////////


        // First Code Snippet // 

        function renderVariablesJS(){
            return(
                <div>
                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0</span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill"</span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>isEarthFlat </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>false</span>
                    </p>

                </div>
            )
        }

        function renderVariableJavaAndC(){
            return(
                <div>
                    <p>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0;</span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill";</span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>bool </span>
                    <span style={Styles.Code.var}>isEarthFlat </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>false;</span>
                    </p>
                </div>
            )
        }

        function renderVariablesPython(){
            return(
                <div>
                    <p>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0</span>
                    </p>

                    <p>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill"</span>
                    </p>
                </div>
            )
        }

        // Second Code Snippet //

        function renderVariablesJS_2(){
            return(
                <div>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Numbers //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 4</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>y </span>
                    <span style={Styles.Code.reg}>= 2</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>z </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>* </span>
                    <span style={Styles.Code.var}>y </span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// z would be equal to 8 since 2 * 4 = 8</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>////////////////////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Strings or Characters //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>////////////////////////////////////////////</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Rick"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>name2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Morty"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>showName </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>" and " </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>name2 </span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// showName would be equal to 'Rick and Morty'</span>
                    </p>


                </div>
            )
        }

        function renderVariablesJava_2(){
            return(
                <div>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Numbers //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 4;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>y </span>
                    <span style={Styles.Code.reg}>= 2;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>z </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>* </span>
                    <span style={Styles.Code.var}>y</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// z would be equal to 8 since 2 * 4 = 8</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>////////////////////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Strings or Characters //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>////////////////////////////////////////////</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Rick"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Morty"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>showName </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>" and " </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>name2 </span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// showName would be equal to 'Rick and Morty'</span>
                    </p>


                </div>
            )
        }

        function renderVariablesC_2(){
            return(
                <div>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>##############################</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>## Interacting with Numbers ##</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>##############################</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 4;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>y </span>
                    <span style={Styles.Code.reg}>= 2;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>z </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>* </span>
                    <span style={Styles.Code.var}>y</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>## z would be equal to 8 since 2 * 4 = 8</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>############################################</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>## Interacting with Strings or Characters ##</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>############################################</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Rick"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Morty"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>showName </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>" and " </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>name2 </span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>## showName would be equal to 'Rick and Morty'</span>
                    </p>


                </div>
            )
        }

        function renderVariablesPython_2(){
            return(
                <div>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>##############################</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>## Interacting with Numbers ##</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>##############################</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 4</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>y </span>
                    <span style={Styles.Code.reg}>= 2</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>z </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>* </span>
                    <span style={Styles.Code.var}>y </span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>## z would be equal to 8 since 2 * 4 = 8</span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>############################################</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>## Interacting with Strings or Characters ##</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>############################################</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Rick"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>name2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Morty"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>showName</span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>name1 </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>" and " </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>name2 </span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>## showName would be equal to 'Rick and Morty'</span>
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
                        <li>
                            When you have a name attached to any online account, that name is a variable. Whether your name is "John", "Dave", or "Hossenpheffer" your account will se set to display whatever is stored under the 'name' variable
                        </li>
                        <br></br>
                        <li>
                            When you login to a website, both your username and password are stored in the computer as variables. They will begin as just empty values, but as you type into the 'username' or 'email' text bar, the 'login' variable will be changed to match what you type. When you press the login button, the computer will use what you entered into the 'login' variable and check it against all other known usernames.
                        </li>
                        <br></br>
                        <li>
                            In a shooter video game, each gun will have a different maximum ammo count. This number would be saved under a variable named something like max_ammo_count.
                        </li>
                    </div>

                    <p>
                        Essentially, every bit of data that is used on any software system will be saved in a variable at some point in time. There are different kinds of variables and different computer languages have different ways of creating and interacting with variables, but the concept is consistent throughout all apsects of Computer Scinece. Below, you will see how to <strong>declare</strong> (which means create) a variable.
                    </p>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <p>
                        Above, you saw that most languages are a bit different from each other in how the <strong>declare</strong> a variable, but they all have the same basic pattern and premise. Usually, there is a keyword (Like in JavaScript, there is <strong>the keyword let</strong> or in C# and Java the <strong>keyword is instead the data type of the variable</strong>)
                    </p>
                    <p>
                        Most languages treat variables the same once they have been declared, meaning that interacting with variables across different languages usually stays the same. Adding two number variables in JavaScript will work the same way as it does in Python. However, as we will cover <strong>under the Datatypes lesson</strong> you cannot just go mixing two different kinds of variables, and these constraints vary based on the language. Lets go over some basic examples for right now...
                    </p>
                    <div>
                        <li>
                            In some Computer Languages, a whole number cannot be mixed with a decimal point number. This means adding 2 and 2.4 would not work in every language.
                        </li>
                        <br></br>
                        <li>
                            In most Computer Languages, variables that contain letters or words cannot interact with variables that hold numeric values. This means I could not make x and y interact with one another if x = "Hank Hill" and y = 6
                        </li>
                    </div>
                    <p>
                        Lets go through some examples of valid operations with variables!
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
                {renderSecond()}
                <CodeSnippet
                    js={renderVariablesJS_2()}
                    java={renderVariablesJava_2()}
                    cs={renderVariablesC_2()}
                    py={renderVariablesPython_2()}
                />
            </div>
        )
    }

    return (
        <LessonPage
            onLessonClick={handleLessonClick}
            lessons={basicsLessons}
            onLabsClick={handleLabsClick}
            labs={basicsLabs}
            onTestsClick={handleTestClick}
            tests={basicsTests}
            current={"Variables"}
        >
            {MAIN()}
        </LessonPage>
    )

}

export default VariablesLesson