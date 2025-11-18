// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";

// Ostrich
import {ODef} from "../../../../OstrichComponents/Text/OstrichDefinition";
import {ODefContnet}  from "../../../../constants/oDefContent";
 
// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState, tabBarState } from "../../../../recoil/atoms";

// Components and Functions
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";
import Image from 'next/image';


const OperatorsLesson = ({}) => {

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
            router.push(`/concepts/basics/lessons/${lesson.toLowerCase().replaceAll(" ", "_")}`)
        }

        function handleTestClick(test){
            router.push(`/concepts/basics/tests/${test.toLowerCase().replaceAll(" ", "_")}`)
        }

        function handleLabsClick(lab){
            router.push(`/concepts/basics/labs/${lab.toLowerCase().replaceAll(" ", "_")}`)
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
                    <div style={Styles.Fonts.lessonHeader}>What are Operators</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            <strong>Operators are symbols </strong> {"(primarily +, -, *, /, >, <, and %)"} <strong>that are used to convey some sort of action or comparison between two or more variables or values.</strong> More simply put, we use them to express certain actions; we would use + to convey the fact that we wish to add two values together. 
                        </p>
                        <p>
                            Lets go over some examples of using these operators
                        </p>
                        <div style={Styles.Sections.importantNote}>
                            <p style={Styles.Fonts.basic}>
                                Let's start with the basic mathematical operators that we are all used to. 
                            </p>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{...Styles.Sections.simpleLessonCode, flex: 4}}>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>x </span>
                                    <span style={Styles.Code.reg}>= 2</span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>= 6</span>
                                    </p>

                                    <br></br>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>addition </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>x </span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>subtraction </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>- </span>
                                    <span style={Styles.Code.var}>x </span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>multi </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>* </span>
                                    <span style={Styles.Code.var}>x </span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>division </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>/ </span>
                                    <span style={Styles.Code.var}>x </span>
                                    </p>
                                    
                                </div>
                                <div style={{...Styles.Fonts.basic, flex: 8}}>
                                    <p style={ Styles.Fonts.basic}>
                                        Here, you see we have created two numeric variables, and then using operators created four new variables that are the result of some operation between the first two.
                                    </p> 
                                    <p></p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'addition'</strong>  would have a value of 8 ( 6 + 2 )
                                    </p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'subtraction'</strong>  would have a value of 4 ( 6 - 2 )
                                    </p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'multi'</strong>  would have a value of 12 ( 6 * 2 )
                                    </p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'addition'</strong>  would have a value of 3 ( 6 / 2 )
                                    </p>
                                </div>
                            </div>

                            <br></br>

                            <p style={Styles.Fonts.basic}>
                                Next we will go over another lesser known numeric operator, the <strong>modulo</strong>
                            </p>

                            <div style={Styles.Sections.simpleLessonCode}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>var </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= 5</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>var </span>
                                <span style={Styles.Code.var}>y </span>
                                <span style={Styles.Code.reg}>= 13</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>var </span>
                                <span style={Styles.Code.var}>modulo </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>y </span>
                                <span style={Styles.Code.reg}>% </span>
                                <span style={Styles.Code.var}>x </span>
                                </p>
                            </div>

                            <p style={Styles.Fonts.basic}>
                                Here, the new variable named <strong>modulo</strong> would have a value of 3. This is because modulo returns <strong>the remainder of a standard division operation.</strong> This means since 5 can go into 13 two times with a remainder of 3, the value of 13 % 5 is 3. 
                            </p>
                        </div>
                        <p style={Styles.Fonts.basic}>
                            In the next lesson, we will go over something called 
                            <ODef 
                            text="data types" 
                            modalContent={
                            <ODefContnet 
                                color="#a3fc2d" 
                                word="Data Types" 
                                definition= "Every variable will have a data type, but depending on the Programming Language you are using, this data type can be changed. Data Types denote what kind of value is stored inside of the variable. For example, in x=5, x would be a variable with a datatype of an Integer"
                                />} 
                            /> 
                        . These are ways we categorize variables, and some operators will work on some variable types but not others. For example, if we had two variables that were text based, we wouldn't be able to perform division between them. This means to say we cannot divide 5 by "w". However there is one more form of operator that exists for use with numeric variables and that is the <strong>comparative operator</strong> Lets go over some of those now
                        </p>
                        <div style={Styles.Sections.importantNote}>
                        <p style={Styles.Fonts.basic}>
                            Comparative operators will compare two numeric variables using operations like "greater than" and "less than." There are four total operators of this kind, and we will show them below.
                        </p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{...Styles.Sections.simpleLessonCode, flex: 4}}>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>x </span>
                                    <span style={Styles.Code.reg}>= 2</span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>= 6</span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>z </span>
                                    <span style={Styles.Code.reg}>= 6</span>
                                    </p>

                                    <br></br>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>greaterThan </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>{'> '} </span>
                                    <span style={Styles.Code.var}>x </span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>lessThan </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>{'< '} </span>
                                    <span style={Styles.Code.var}>x </span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>greaterOrEqual </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>y </span>
                                    <span style={Styles.Code.reg}>{'>= '} </span>
                                    <span style={Styles.Code.var}>z </span>
                                    </p>

                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>var </span>
                                    <span style={Styles.Code.var}>lessOrEqual </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>x </span>
                                    <span style={Styles.Code.reg}>{'<= '} </span>
                                    <span style={Styles.Code.var}>z </span>
                                    </p>
                                    
                                </div>
                                <div style={{...Styles.Fonts.basic, flex: 8}}>
                                    <p style={ Styles.Fonts.basic}>
                                        Here, you see we have created two numeric variables, and then using operators created four new variables that are the result of some operation between the first two.
                                    </p> 
                                    <p></p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'greaterThan'</strong>  would have a value of <strong>true</strong>
                                    </p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'lessThan'</strong>  would have a value of <strong>false</strong>
                                    </p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'greaterOrEqual'</strong>  would have a value of <strong>true</strong>
                                    </p>
                                    <p style={ Styles.Fonts.basic}>
                                        <strong>The variable named 'lessOrEqual'</strong>  would have a value of <strong>true</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
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
            <div style={{...Styles.Sections.lessonContent, marginTop: '3.2%'}}>
                {renderTitle("Operators")}
                {renderFirst()}
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
            current={"Operators"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default OperatorsLesson