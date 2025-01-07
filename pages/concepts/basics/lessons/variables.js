// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
 
// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState, tabBarState } from "../../../../recoil/atoms";

// Images
import imageA from "@lessonAssets/variables/codeExample.png"

// Components and Functions
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import CodeSnippet from "../../../../components/CodeSpaces/codeSnippet";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";
import Image from 'next/image';


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
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill"</span>
                    </p>

                    <p style={Styles.Code.code}>
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
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill";</span>
                    </p>

                    <p style={Styles.Code.code}>
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
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0</span>
                    </p>

                    <p style={Styles.Code.code}>
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
                    <div style={Styles.Fonts.lessonHeader}>What is a Variable</div>
                    <div style={Styles.Sections.lessonContent}>
                        <p style={Styles.Fonts.basic}>
                            Variables are one of the most important base concepts of Computer Science. Every method of coding will involve the use of variables. So, first thing is first; what IS a variable?
                        </p>
                        <div style={Styles.Sections.importantNote}>
                            <p style={Styles.Fonts.basic}>
                                <strong>A Variable is essentially a container for information that be stored, changed, referenced, checked or otherwise used in the future.</strong> For example, a user on a website may have a firstName and a lastName variable associated with their account. The value of that variable would change from user to user. Another example could be on a shopping website, as you add items to your cart you may notice a little counter over your cart icon, indicating how many items you have added. This counter shows the value of a variable that keeps track of this data.
                            </p>
                        </div>
                        <p style={Styles.Fonts.basic}>
                            Let's go over some of the specifics of what exactly a variable can do, again considering that their role is to store, change, reference, or check the data given to them.
                        </p>
                        <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                            <li>
                                <strong>Variables Store Data -- </strong> This is the most fundamental ability a variable has. Just like in basic math, variable hold a value. For example, variable X can hold numeric data such as the number 2; others can take decimal numbers like 2.4. Variables can also hold text data, such as a <strong>string</strong> which is how we refer to text in computer science. A variable, for example could contain a name like "Rick Sanchez"
                            </li>
                            <br></br>
                            <li>
                                <strong>Variables can have their Data changed -- </strong>More times than not, when working with a technical project, you will have more values that can change than not. For example, if we were developing a game, we would need a variable to keep score. This score would need to be changed quite frequently. Similarly, a user may have a username associated with an account, and they will need the ability to change that. Sometimes, variables will not change and SHOULD not change, and as such these variables are actually created differently than others, and are often referred to as <strong>constants</strong> but these will be covered later.
                            </li>
                            <br></br>
                            <li>
                                <strong>Variables will have their Data referenced -- </strong> What's the point in storing data if you don't use it? In most previous examples, the variable we mention ends up being referenced when it is displayed to the user. The score is displayed, the amount of items in a cart is displayed, and so is a username. However, they can be referenced by the code itself. For example, a game will know to end when a score reaches a certain number. In a pickup game for example, if you play to 21 points, the app would check every time a team scores to see if their score is 21. If the score is 21 the game ends. <strong>We will go into this deeper in the future when we learn about conditionals</strong>
                            </li>
                        </div>
                    </div>
                    <div style={Styles.Fonts.lessonHeader}>How to use a Variable</div>
                    <p style={Styles.Fonts.basic}>
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

        function renderThird(){
            return(
                <div>
                    <p>
                        Variables are the basic building blocks of <strong>Object Oriented Programming</strong> focused software development. This means that nearly every operation or every computation will be done using variables. The examples shown above are very basic, but as we continue along the course you will learn more and more about variables and how to use them when developing.
                    </p>
                    <p>
                        For example, even this web page is comprised of variables. In the examples of code above, when you the user select a different tab ("JavaScript", "Java", "C", or "Python") you are actually changing a variable named 'display' to match the value of the button you selected. To explain this more simply, allow me to explain in <strong>pseudocode</strong>  
                    </p>
                    <div>
                        <li>
                            A user presses a button that has a variable attached to it. That variable's value is the same as the text shown on each button (Java, JavaScript, C#, or Python)
                        </li>
                        <br></br>
                        <li>
                            A <strong>function</strong> fires that uses this variable. Depending on what is variable's value is ("Java", "JavaScript", "Python", or "C#") it will load a specific set of lines to render. If the code box's variable's value is "JavaScript", it will load the text you see in the box when 'JavaScript' is selected, for example
                        </li>
                        <br></br>
                        <li>
                            Once this value is changed, the code box will render the newly selected text
                        </li>
                        <p>
                            This is actually some of the code running the very site we are using in action. Look below as the variable, 'lang' will have a different result in the function based off of its value. If this is all still confusing to you, do not worry! There is a lot more to cover before this all comes together
                        </p>
                        <div>
                            <Image src={require('../../../../public/assets/lesson_images/variables/codeExample.png')} width="70%" height="20%"/>
                        </div>
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
                {renderThird()}
            </div>
        )
    }

    return (
        <LessonTemplatePage
            onLessonClick={handleLessonClick}
            lessons={basicsLessons}
            onLabsClick={handleLabsClick}
            labs={basicsLabs}
            onTestsClick={handleTestClick}
            tests={basicsTests}
            current={"Variables"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default VariablesLesson