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
import CodeSnippet from "../../../../components/CodeSpaces/codeSnippet";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";
import { OstCard } from "../../../../OstrichComponents/Format/OstCard";

// Images
const pseudoImage = "/assets/lesson_images/conditionals/pseudo1.png";

const ConditionalsLesson = ({}) => {

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
            router.replace(`/concepts/basics/lessons/${lesson.toLowerCase().replaceAll(" ", "_")}`)
        }

        function handleTestClick(test){
            router.replace(`/concepts/basics/tests/${test.toLowerCase().replaceAll(" ", "_")}`)
        }

        function handleLabsClick(lab){
            router.replace(`/concepts/basics/labs/${lab.toLowerCase().replaceAll(" ", "_")}`)
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

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.func}>{"}"}</span>
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

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.func}>{"}"}</span>
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

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.func}>{"}"}</span>
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
                        </p>

                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.func}>print(</span>
                            <span style={Styles.Code.str}>"Number is Even"</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>


                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>else </span>
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

                    <div style={Styles.Fonts.lessonHeader}>What are Condtionals?</div>
                    <div style={Styles.Sections.lessonContent}>

                        <p style={Styles.Fonts.basic}>
                            Computer Science and Software Development is often times trying to recreate real life objects or situations but in a virutal space. Online markets
                            for exmaple will simulate a 'cart' and allow users to put 'objects in it.' Obviously you do not have a real cart nor are you moving the real items you are considering 
                            purchasing into anything, but we simulate this on a website because it is an intuitive and familiarexperience for the user. As such, we often times
                            need to apply logic in what we create. IF us a user clicks an obejct, it goes to the cart. IF there are objects in the cart, their individual prices 
                            are added to display a total. IF the user selects express shipping, the extra price is applied and the item is marked for faster shipping.
                        </p>

                        <p style={Styles.Fonts.basic}>
                        Applying this logic in Software Development requires the use of 
                            <ODef 
                            text="conditionals" 
                            modalContent={
                            <ODefContnet 
                                color="#88fccc" 
                                word="Conditionals" 
                                definition="Conditionals are logic gates that can split off into two or more paths depending on a value. Conditionals are most easily thought as 'if statements' although that definition is a little reductive, as there are other forms of Conditionals. If statements are the most common however"
                                />
                            } 
                            />  
                        </p>

                        <p style={Styles.Fonts.basic}> 
                            <strong>Let's go over some basic conditionals.</strong> Here we will also learn a bit about 
                            <ODef 
                            text="pseudocode" 
                            modalContent={
                            <ODefContnet 
                                color="#88fccc" 
                                word="Pseudocode" 
                                definition="Code is written in specific computer langauges with specific operational syntax. If a word or character is wrong, the code will not work. When working with complicated workflows or porjects that have a lot of different operations going on, it is greatly beneficial to write out what exactly the code does and how it should do it in plain English. This plain writing is called Pseudocode."
                                />
                            } 
                            />.  
                        </p>

                        <OstCard
                        templateStyle={1}
                        imageSrc={pseudoImage}
                        style={{backgroundColor: "#ebf4ff"}}
                        >
                            <p style={{marginLeft: '15%', marginRight: '15%'}}>
                            This is some very simple pseudocode that depicts a program that
                            creates a number, accepts a value, and then informs the user whether 
                            that value is even or odd. 
                            </p>
                        </OstCard>

                        <p style={Styles.Fonts.basic}>
                            Now, we'll take the pseduocode above and convert it into REAL code using the four 
                            programming languages that we have been using thus far; Java, JavaScript, C# and Python.
                        </p>

                        <CodeSnippet 
                            js={renderJavaScript()}
                            java={renderJava()}
                            cs={renderCs()}
                            py={renderPython()}
                        />

                        <p style={Styles.Fonts.basic}>
                            In addition to the <strong>conditional</strong> in the code, there were a few new things in this code. Let's go over everything we see above
                            before we cover everything accomplished in the small code snippet above.
                        </p>

                        <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                            <p style={{marginBottom: 0, paddingBottom: 0}}>
                            First, let's go over <strong>printing</strong>
                            </p>
                            <p style={{marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0}}>
                            Printing, which we will go over in more depth later, is the act of displaying a value (or a variable's value)
                            inside your computer terminal. This way you will be able to see the value of variables along the progression of 
                            your code's processes. <strong>Simply put, printing lets developers see how their variables are changing and helps to detect 
                            where any issues may have arisen.</strong>
                            </p>
                            <p style={{marginTop: 0, paddingTop: 0}}>
                            In the code above, you see us printing using <strong>console.log</strong> (for Java and JavaScript) and
                            <strong> print</strong> (in Python and C#)
                            </p>


                            <p style={{marginBottom: 0, paddingBottom: 0}}>
                            Next, a quick reminder on the <strong>modulo operator</strong>
                            </p>
                            <p style={{marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0}}>
                            Remember the modulo <strong>returns only the remainder</strong>. This means 4 % 2 would be 0, as 4 divided by 2 is 2 with a remainder of 0. 
                            5 % 2 would return 1, as 2 goes into 5 twice with a remainder of 1.
                            </p>
                            <p style={{marginTop: 0, paddingTop: 0}}>
                            In the code above, we are determining whether 'count' is even by checking if there is a remainder when dividing by 2
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
            <div style={{marginTop: '-3.2%'}}>
                {renderTitle("Conditionals")}
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

export default ConditionalsLesson