// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";

// Ostrich
import { ODef } from "@ostrich_development/ostrich-components";
import { ODefContnet } from "../../../../constants/oDefContent";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../../jotai/atoms";

// Components and Functions
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


const OperatorsLesson = ({}) => {

    ///////////
    // State //
    ///////////

    const router = useRouter()

    // Makes sure URL Path is correct
    const [directory, setDirectory] = useAtom(directoryDataState)

    // Makes sure Header Bar Highlights the Active Tab
    const [tabBar, setTabBar] = useAtom(tabBarState)

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

    //////////////////////
    // Lesson Rendering //
    //////////////////////

        function renderFirst(){
            return(
                <div>
                    <div style={Styles.Fonts.lessonHeader}>What are Operators?</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            <strong>Operators are symbols </strong> {"(primarily +, -, *, /, >, <, and %)"} <strong>that are used to convey some sort of action or comparison between two or more variables or values.</strong> More simply put, we use them to express certain actions; we would use + to convey the fact that we wish to add two values together.
                        </p>
                        <p style={Styles.Fonts.basic}>
                            Let's go over some examples of using these operators
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
                                    <p style={Styles.Fonts.basic}>
                                        Here, you see we have created two numeric variables, and then using operators created four new variables that are the result of some operation between the first two.
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'addition'</strong> would have a value of 8 ( 6 + 2 )
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'subtraction'</strong> would have a value of 4 ( 6 - 2 )
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'multi'</strong> would have a value of 12 ( 6 * 2 )
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'division'</strong> would have a value of 3 ( 6 / 2 )
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
                                definition="Every variable will have a data type, but depending on the Programming Language you are using, this data type can be changed. Data Types denote what kind of value is stored inside of the variable. For example, in x=5, x would be a variable with a datatype of an Integer"
                                />}
                            />
                            . These are ways we categorize variables, and some operators will work on some variable types but not others. For example, if we had two variables that were text based, we wouldn't be able to perform division between them. This means to say we cannot divide 5 by "w". However there is one more form of operator that exists for use with numeric variables and that is the <strong>comparative operator</strong>. Let's go over some of those now.
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
                                    <p style={Styles.Fonts.basic}>
                                        Here, you see we have created three numeric variables, and then using comparative operators created four new variables that are the result of a comparison between them. Comparisons always result in <strong>true</strong> or <strong>false</strong>.
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'greaterThan'</strong> would have a value of <strong>true</strong> ( 6 {'>'} 2 )
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'lessThan'</strong> would have a value of <strong>false</strong> ( 6 {'<'} 2 )
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'greaterOrEqual'</strong> would have a value of <strong>true</strong> ( 6 {'>='} 6 )
                                    </p>
                                    <p style={Styles.Fonts.basic}>
                                        <strong>The variable named 'lessOrEqual'</strong> would have a value of <strong>true</strong> ( 2 {'<='} 6 )
                                    </p>
                                </div>
                            </div>
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
