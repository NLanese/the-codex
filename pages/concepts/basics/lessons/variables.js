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
                                <strong>Variables Store Data -- </strong> This is the most fundamental ability a variable has. Just like in basic math, variable hold a value. For example, variable X can hold numeric data such as the number 2; others can take decimal numbers like 2.4. Variables can also hold text data, such as a <strong>string</strong> which is how we refer to text in computer science. A variable, for example could contain a name like "Jeff Winger"
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
                    <div style={Styles.Sections.lessonContent}>
                    <p style={Styles.Fonts.basic}>
                        Essentially, every bit of data that is used on any software system will be saved in a variable at some point in time. There are different kinds of variables and different computer languages have different ways of creating and interacting with variables, but the concept is consistent throughout all apsects of Computer Scinece.
                    </p>
                    <p style={Styles.Fonts.basic}>
                        There can be a few parts of a Variable's lifecycle in computer science. 
                    </p>
                    <p style={Styles.Fonts.basic}>
                        The first part is called <strong>Declaration</strong>. This step is in just creating the variable. To us it is a simple process, but it informs the compiler to kickstart the variable life cycle.
                    </p>
                    <p style={Styles.Fonts.basic}>
                        Once we as the developer <strong>declare</strong> a variable, the computer compiler actually sections off a dedicated part of its memory for this value. This is called the <strong>Initialization</strong> phase of the Variable Lifecycle
                    </p>
                    <div style={Styles.Sections.importantNote}>
                        <p style={Styles.Fonts.basic}>
                            Declaration can look as simple as this
                        </p>
                        <div style={Styles.Sections.simpleLessonCode}>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>var </span>
                            <span style={Styles.Code.var}>x </span>
                            </p>
                        </div>
                        <p style={Styles.Fonts.basic}>
                            Here, we are simply <strong>declaring</strong> a variable that will be referred to as "x", The computer compiler knows the portion off a segment of memory dedicated to whatever value will eventually go into "x" in the <strong>Initialization</strong> Phase that automatically follows.
                        </p>
                    </div>
                    <p style={Styles.Fonts.basic}>
                        The final part of the lifecycle is the <strong>Assignment</strong> Phase. This is where we assign a value to the newly created variable. This then saves that value in the section of memory that was segmented off during the <strong>Initialization</strong> Phase
                    </p>
                    <div style={Styles.Sections.importantNote}>
                        <p style={Styles.Fonts.basic}>
                            <strong>Assignment</strong> can come after the <strong>Declaration</strong> of a variable
                        </p>
                        <div style={Styles.Sections.simpleLessonCode}>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>var </span>
                            <span style={Styles.Code.var}>x </span>
                            </p>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.var}>x </span>
                            <span style={Styles.Code.reg}>= 4</span>
                            </p>
                        </div>
                        <p style={Styles.Fonts.basic}>
                            Here, we are simply <strong>declaring</strong> a variable and then on the next line we are <strong>assigning</strong> the numeric value of 4 to the variable. 
                        </p>
                    </div>
                    <div style={Styles.Sections.importantNote}>
                        
                        <p style={Styles.Fonts.basic}>
                            <strong>Assignment</strong> can also come during the <strong>Declaration</strong> of a variable, keeping things all on one line of code
                        </p>
                        <div style={Styles.Sections.simpleLessonCode}>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>var </span>
                            <span style={Styles.Code.var}>x </span>
                            <span style={Styles.Code.reg}>= 4</span>
                            </p>
                        </div>
                        <p style={Styles.Fonts.basic}>
                            Here, we are simply <strong>declaring</strong> a variable and  simultaneously we are <strong>assigning</strong> the numeric value of 4 to the variable. 
                        </p>
                    </div>
                    <p style={Styles.Fonts.basic}>
                        Below, we will go over how to <strong>declaring</strong> and <strong>assign</strong> a variable in four different <strong>programming languages</strong>. We will go over these in more depth later; for now all you need to know is that each programming language, much like regular spoken languages, each have their own different rules. <strong>Keywords, syntax, and overall structure</strong> will differ between languages although the general concepts of Computer Science remain consistent between them.   
                    </p>
                </div>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <div style={Styles.Sections.lessonContent}>
                    <p style={Styles.Fonts.basic}>
                    Above, you saw that most languages are a bit different from each other in how the <strong>declare and assign</strong> a variable, but they all have the same basic pattern and premise. 
                    </p>
                    <p style={Styles.Fonts.basic}>
                    Let's break down a few of the things we're seeing above...
                    </p>
                    <div style={Styles.Sections.importantNote}>
                        <p style={Styles.Fonts.basic}>
                        In each language, we are declaring and assigning three variables, each one has a different <strong>Datatype</strong>.
                        </p>
                        <p style={Styles.Fonts.basic}>
                        A <strong>Datatype</strong> is a category for the kind of value that a variable may store. We've already covered two basic datatypes, <strong>Integers</strong> and <strong>Strings</strong>.
                        </p>
                        <p style={Styles.Fonts.basic}>
                        As you may have already seen, <strong>some programming languages like C# and Java</strong> require you to declare the Datatype that will be stored in the variable before you assign the value. We will cover Datatypes in more detail in the next lesson.
                        </p>
                        <p style={Styles.Fonts.basic}>
                        Even still, some programming languages like <strong>JavaScript</strong> have dynamic variables that can change data types, but the variable still needs a <strong>keyword</strong> to let the compiler know a variable declaration is taking place. JavaScript uses <strong>'let'</strong> as the keyword in our example, but developers can also use <strong>'var'</strong>
                        </p>

                    </div>
                    </div>
                    <div style={Styles.Fonts.lessonHeader}>Changing a Variable's Value</div>
                    <div style={Styles.Sections.lessonContent}>
                        <p style={Styles.Fonts.basic}>
                            Most times, a variable will be intended to have its value changed. In previous examples, we have mentioned Variables that hold values like a score or a cart total. Lets go over how we would make some of those changes
                        </p>
                        <p style={Styles.Fonts.basic}>
                            Again, imagine we create (declare and assign) a variabe similarly to how we've done so in the past.
                        </p>
                        <div style={Styles.Sections.simpleLessonCode}>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>var </span>
                            <span style={Styles.Code.var}>x </span>
                            <span style={Styles.Code.reg}>= 5</span>
                            </p>
                        </div>
                        <p style={Styles.Fonts.basic}>
                            We can now simply reassign a new value to the variable to have it changed
                        </p>
                        <div style={Styles.Sections.simpleLessonCode}>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.var}>x </span>
                            <span style={Styles.Code.reg}>= 50</span>
                            </p>
                        </div>
                        <p style={Styles.Fonts.basic}>
                            In the next lesson, we will go over the <strong>types</strong> of variables, as well as how and when to combine them, and have one variable influence the value of another!
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
                    js={renderVariablesJS()}
                    java={renderVariableJavaAndC()}
                    cs={renderVariableJavaAndC()}
                    py={renderVariablesPython()}
                />
                {renderSecond()}
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