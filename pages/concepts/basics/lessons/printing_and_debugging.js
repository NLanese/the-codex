// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";

// Ostrich
import {ODef} from "../../../../OstrichComponents/Text/OstrichDefinition";
import {ODefContnet}  from "../../../../constants/oDefContent";
 
// Recoil
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../../jotai/atoms";

// Components and Functions
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import CodeSnippet from "../../../../components/CodeSpaces/codeSnippet";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";
import { OstCard } from "../../../../OstrichComponents/Format/OstCard";

// Images
const pseudoImage = "/assets/lesson_images/conditionals/pseudo1.png";

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
                        <span style={Styles.Code.var}>count </span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>count </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>userInput </span>
                        </p>


                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>if </span>
                            <span style={Styles.Code.reg}>(</span>
                            <span style={Styles.Code.var}>count </span>
                            <span style={Styles.Code.reg}>% 2 </span>
                            <span style={Styles.Code.reg}>== 0)</span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.var}>console</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.func}>log(</span>
                            <span style={Styles.Code.str}>"Number is Even"</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.func}>{"}"}</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>else </span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.var}>console</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.func}>log(</span>
                            <span style={Styles.Code.str}>"Number is Odd"</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>

                </div>
            )
        }

        // First Code Snippet // 
        function renderJava(){
            return(
                <div>
                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>count</span>
                        <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>count </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>userInput</span>
                        <span style={Styles.Code.reg}>;</span>
                        </p>


                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>if </span>
                            <span style={Styles.Code.reg}>(</span>
                            <span style={Styles.Code.var}>count </span>
                            <span style={Styles.Code.reg}>% 2 </span>
                            <span style={Styles.Code.reg}>== 0)</span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.var}>console</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.func}>log(</span>
                            <span style={Styles.Code.str}>"Number is Even"</span>
                            <span style={Styles.Code.func}>)</span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.func}>{"}"}</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>else </span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.var}>console</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.func}>log(</span>
                            <span style={Styles.Code.str}>"Number is Odd"</span>
                            <span style={Styles.Code.func}>)</span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                </div>
            )
        }

        // First Code Snippet // 
        function renderCs(){
            return(
                <div>
                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>count</span>
                        <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>count </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>userInput</span>
                        <span style={Styles.Code.reg}>;</span>
                        </p>


                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>if </span>
                            <span style={Styles.Code.reg}>(</span>
                            <span style={Styles.Code.var}>count </span>
                            <span style={Styles.Code.reg}>% 2 </span>
                            <span style={Styles.Code.reg}>== 0)</span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.func}>print(</span>
                            <span style={Styles.Code.str}>"Number is Even"</span>
                            <span style={Styles.Code.func}>)</span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.func}>{"}"}</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>else </span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.func}>print(</span>
                            <span style={Styles.Code.str}>"Number is Odd"</span>
                            <span style={Styles.Code.func}>)</span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                </div>
            )
        }

        // First Code Snippet // 
        function renderPython(){
            return(
                <div>
                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>count </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>userInput </span>
                        </p>


                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>if </span>
                            <span style={Styles.Code.reg}>(</span>
                            <span style={Styles.Code.var}>count </span>
                            <span style={Styles.Code.reg}>% 2 </span>
                            <span style={Styles.Code.reg}>== 0)</span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.func}>print(</span>
                            <span style={Styles.Code.str}>"Number is Even"</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.func}>{"}"}</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>else </span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.func}>print(</span>
                            <span style={Styles.Code.str}>"Number is Odd"</span>
                            <span style={Styles.Code.func}>)</span>
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
                    <div style={Styles.Sections.lessonContent}>
                    <div style={{...Styles.Fonts.basic}}>

                        <p>
                        <strong>First, lets go over 'printing'</strong>. Printing is one of the best tools available to developers, as it is the most basic but often
                        most crucial line of defense against errors. What printing does is it takes any variable 
                        and prints its value to your terminal at any given time. This allows developers to see where
                        and when values are changing in their code, which helps us pin down where any errors may be. 
                        </p>
                        

                        <p>
                        In JavaScript and Java, you accomplish this by calling (typing) 
                        <strong> console.log()</strong> with the variable who's value you want printed placed inside the parethesis. 
                        </p>

                        <p>
                        In C# and Python, you accomplish this by calling (typing) 
                        <strong> print()</strong> with the variable who's value you want printed placed inside the parethesis. 
                        </p>

                        <p>
                        If you are developing in an IDE like Eclipse or Visual Studio Code, the terminal will be on the bottom of 
                        your screen. This is where any errors or printed statements will appear. However, you can also have websites print statements. 
                        To clarify, this is <strong>a far different process than rendering things on the screen.</strong> Everything you see here is 
                        rendered on the webpage, none of this content is printed. 
                        </p>

                        <p>
                        To test this, please right click on your screen and select the option "Inspect" if you are on Google Chrome and "Inspect Element"
                        on Internet Explorer windows. <strong>if this is not working for you, click this <a href="https://zapier.com/blog/inspect-element-tutorial/">here</a></strong>
                        </p>

                        Once you are able to Inspect, switch the new tab (which will be on the left of your screen on Google and the bottom on Explorer) switch to the 'console' tab. 
                        Now, you are able to hit the button below and see the console fill up with printed statements!

                        <OstCard
                            style={{marginLeft: '30%', marginRight: '30%', marginTop: 30}}
                            onClick={() => console.log("Good job! Noow look at these printed statements!")}
                        >
                            <p style={{textAlign: 'center'}}>
                            Click me to Test Printing
                            </p>
                        </OstCard>
                    </div>
                    </div>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <div style={Styles.Fonts.lessonHeader}>How do we USE printing?</div>
                    <div style={Styles.Sections.lessonContent}>
                        <div style={{...Styles.Fonts.basic}}>
                            <p>
                            Many times in development, you will run into some unexpected issues. Maybe a simple function will error out, claiming that you are trying to 
                            access a variable that doesnt exist. Other times the varibale may exist but not have the value you are expecting. These issues will cause your 
                            application to function improperly. Let's look at the code snippet below and explore this concept.
                            </p>
                        </div>
                        <div style={Styles.Sections.simpleLessonCode}>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>x </span>
                            <span style={Styles.Code.reg}>= 5</span>
                            </p>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>y </span>
                            <span style={Styles.Code.reg}>= "5"</span>
                            </p>
                            <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>z </span>
                            <span style={Styles.Code.reg}>= 50</span>
                            </p>

                            <br></br>
                            
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
                {renderTitle("Printing and Debugging")}
                {renderFirst()}
                {/* {renderSecond()} */}
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
            current={"Data Types"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default PrintingLesson