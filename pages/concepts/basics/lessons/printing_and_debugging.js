// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";

// Ostrich
import { OstCard } from "@ostrich_development/ostrich-components";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../../jotai/atoms";

// Components and Functions
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import CodeSnippet from "../../../../components/CodeSpaces/codeSnippet";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


const PrintingLesson = ({}) => {

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

    ////////////////////
    // Code Rendering //
    ////////////////////

    // First Code Snippet //

        function renderJavaScript(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>console</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>log(</span>
                    <span style={Styles.Code.var}>score</span>
                    <span style={Styles.Code.func}>)</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The terminal would show: 21</span>
                    </p>
                </div>
            )
        }

        function renderJava(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>System</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.var}>out</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>println(</span>
                    <span style={Styles.Code.var}>score</span>
                    <span style={Styles.Code.func}>)</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The terminal would show: 21</span>
                    </p>
                </div>
            )
        }

        function renderCs(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>Console</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>WriteLine(</span>
                    <span style={Styles.Code.var}>score</span>
                    <span style={Styles.Code.func}>)</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The terminal would show: 21</span>
                    </p>
                </div>
            )
        }

        function renderPython(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>print(</span>
                    <span style={Styles.Code.var}>score</span>
                    <span style={Styles.Code.func}>)</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># The terminal would show: 21</span>
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
                    <div style={Styles.Fonts.lessonHeader}>What is Printing?</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            <strong>First, let's go over 'printing'</strong>. Printing is one of the best tools available to developers, as it is the most basic but often
                            most crucial line of defense against errors. What printing does is it takes any variable
                            and prints its value to your terminal at any given time. This allows developers to see where
                            and when values are changing in their code, which helps us pin down where any errors may be.
                        </p>

                        <div style={Styles.Sections.importantNote}>
                            <p style={Styles.Fonts.basic}>
                                Every language has its own way of printing, but they all work the same way: you call (type) the print command with the variable whose value you want printed placed inside the parentheses.
                            </p>
                            <li style={Styles.Fonts.basic}>
                                In <strong>JavaScript</strong>, you call <strong>console.log()</strong>
                            </li>
                            <li style={Styles.Fonts.basic}>
                                In <strong>Java</strong>, you call <strong>System.out.println()</strong>
                            </li>
                            <li style={Styles.Fonts.basic}>
                                In <strong>C#</strong>, you call <strong>Console.WriteLine()</strong>
                            </li>
                            <li style={Styles.Fonts.basic}>
                                In <strong>Python</strong>, you call <strong>print()</strong>
                            </li>
                        </div>
                    </div>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <p style={Styles.Fonts.basic}>
                        If you are developing in an IDE like Eclipse or Visual Studio Code, the terminal will be on the bottom of
                        your screen. This is where any errors or printed statements will appear. However, you can also have websites print statements.
                        To clarify, this is <strong>a far different process than rendering things on the screen.</strong> Everything you see here is
                        rendered on the webpage; none of this content is printed.
                    </p>

                    <div style={Styles.Fonts.lessonHeader}>Try it Yourself</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            To test this, right click on your screen and select the option "Inspect" (in Chrome, Edge, or Firefox).
                            <strong> If this is not working for you, click <a href="https://zapier.com/blog/inspect-element-tutorial/" target="_blank" rel="noopener noreferrer">here</a>.</strong>
                        </p>

                        <p style={Styles.Fonts.basic}>
                            Once you are able to Inspect, switch to the 'Console' tab in the new panel that opens. Now, you are able to hit the button below and see the console fill up with printed statements!
                        </p>

                        <OstCard
                            style={{marginLeft: '30%', marginRight: '30%', marginTop: 30}}
                            onClick={() => console.log("Good job! Now look at these printed statements!")}
                        >
                            <p style={{...Styles.Fonts.basic, textAlign: 'center'}}>
                            Click me to Test Printing
                            </p>
                        </OstCard>
                    </div>
                </div>
            )
        }

        // TODO: Unfinished section, not rendered yet. Add it back to MAIN() once complete.
        function renderThird(){
            return(
                <div>
                    <div style={Styles.Fonts.lessonHeader}>How do we USE printing?</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            Many times in development, you will run into some unexpected issues. Maybe a simple function will error out, claiming that you are trying to
                            access a variable that doesn't exist. Other times the variable may exist but not have the value you are expecting. These issues will cause your
                            application to function improperly. Let's look at the code snippet below and explore this concept.
                        </p>
                        <div style={Styles.Sections.simpleLessonCode}>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>x </span>
                            <span style={Styles.Code.reg}>= 5</span>
                            </p>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>y </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.str}>"5"</span>
                            </p>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>z </span>
                            <span style={Styles.Code.reg}>= 50</span>
                            </p>
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
                {renderTitle("Printing and Debugging")}
                {renderFirst()}
                <CodeSnippet
                    js={renderJavaScript()}
                    java={renderJava()}
                    cs={renderCs()}
                    py={renderPython()}
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
            current={"Printing and Debugging"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default PrintingLesson
