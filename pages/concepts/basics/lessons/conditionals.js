// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
import Colors from "../../../../styles/colors";

// Ostrich
import { ODef, OstCard, OstrichForm } from "@ostrich_development/ostrich-components";
import { ODefContnet } from "../../../../constants/oDefContent";

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

// Images
const pseudoImage = "/assets/lesson_images/conditionals/pseudo1.png";
const pseudoImage2 = "/assets/lesson_images/conditionals/pseudo2.png";


const ConditionalsLesson = ({}) => {

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
                    <span style={Styles.Code.reg}>== 0) </span>
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
                    <span style={Styles.Code.reg}>== 0) </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.var}>System</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.var}>out</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>println(</span>
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
                    <span style={Styles.Code.var}>System</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.var}>out</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>println(</span>
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
                    <span style={Styles.Code.reg}>== 0) </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.var}>Console</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>WriteLine(</span>
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
                    <span style={Styles.Code.var}>Console</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>WriteLine(</span>
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
                    <span style={Styles.Code.var}>count </span>
                    <span style={Styles.Code.reg}>% 2 </span>
                    <span style={Styles.Code.reg}>== 0:</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>print(</span>
                    <span style={Styles.Code.str}>"Number is Even"</span>
                    <span style={Styles.Code.func}>)</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else</span>
                    <span style={Styles.Code.reg}>:</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>print(</span>
                    <span style={Styles.Code.str}>"Number is Odd"</span>
                    <span style={Styles.Code.func}>)</span>
                    </p>
                </div>
            )
        }

    // Second Code Snippet //

        function renderJavaScript2(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>userInput </span>
                    <span style={Styles.Code.comment}>// For now, assume we grab input from a user before we actually code it</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInput.score </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInput.price </span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.5) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 63) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.0) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 50) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>
                </div>
            )
        }

        function renderJava2(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>userInputScore</span>
                    <span style={Styles.Code.reg}>; </span>
                    <span style={Styles.Code.comment}>// For now, assume we grab input from a user before we actually code it</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>userInputPrice</span>
                    <span style={Styles.Code.reg}>; </span>
                    <span style={Styles.Code.comment}>// For now, assume we grab input from a user before we actually code it</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInputScore</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInputPrice</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.5) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 63) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.0) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 50) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>
                </div>
            )
        }

        function renderCs2(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>userInputScore</span>
                    <span style={Styles.Code.reg}>; </span>
                    <span style={Styles.Code.comment}>// For now, assume we grab input from a user before we actually code it</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>userInputPrice</span>
                    <span style={Styles.Code.reg}>; </span>
                    <span style={Styles.Code.comment}>// For now, assume we grab input from a user before we actually code it</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInputScore</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInputPrice</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.5) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 63) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.0) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.reg}>(</span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 50) "}</span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else </span>
                    <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.comment}>{"// Pass on this worker"}</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.func}>{"}"}</span>
                    </p>
                </div>
            )
        }

        function renderPython2(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>userInput </span>
                    <span style={Styles.Code.comment}># For now, assume we grab input from a user before we actually code it</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInput.score</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>userInput.price</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.5:"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 63:"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"# Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else</span>
                    <span style={Styles.Code.reg}>:</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"# Pass on this worker"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>elif </span>
                    <span style={Styles.Code.var}>workerReviewScore </span>
                    <span style={Styles.Code.reg}>{"> 4.0:"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>if </span>
                    <span style={Styles.Code.var}>workerPriceAnHour </span>
                    <span style={Styles.Code.reg}>{"< 50:"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"# Hire this worker"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>else</span>
                    <span style={Styles.Code.reg}>:</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                    <span style={Styles.Code.comment}>{"# Pass on this worker"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>else</span>
                    <span style={Styles.Code.reg}>:</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.comment}>{"# Pass on this worker"}</span>
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
                    <div style={Styles.Fonts.lessonHeader}>What are Conditionals?</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            Computer Science and Software Development is often times trying to recreate real life objects or situations but in a virtual space. Online markets,
                            for example, will simulate a 'cart' and allow users to put 'objects in it.' Obviously you do not have a real cart nor are you moving the real items you are considering
                            purchasing into anything, but we simulate this on a website because it is an intuitive and familiar experience for the user. As such, we often times
                            need to apply logic in what we create. IF a user clicks an object, it goes to the cart. IF there are objects in the cart, their individual prices
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
                                definition="Conditionals are logic gates that can split off into two or more paths depending on a value. Conditionals are most easily thought of as 'if statements' although that definition is a little reductive, as there are other forms of Conditionals. If statements are the most common however."
                                />}
                            />.
                        </p>

                        <p style={Styles.Fonts.basic}>
                            <strong>Let's go over some basic conditionals.</strong> Here we will also learn a bit about
                            <ODef
                            text="pseudocode"
                            modalContent={
                            <ODefContnet
                                color="#88fccc"
                                word="Pseudocode"
                                definition="Code is written in specific computer languages with specific operational syntax. If a word or character is wrong, the code will not work. When working with complicated workflows or projects that have a lot of different operations going on, it is greatly beneficial to write out what exactly the code does and how it should do it in plain English. This plain writing is called Pseudocode."
                                />}
                            />.
                        </p>

                        <OstCard
                        templateStyle={1}
                        imageSrc={pseudoImage}
                        style={{backgroundColor: "#ebf4ff"}}
                        >
                            <p style={{...Styles.Fonts.basic, marginLeft: '15%', marginRight: '15%'}}>
                            This is some very simple pseudocode that depicts a program that
                            creates a number, accepts a value, and then informs the user whether
                            that value is even or odd.
                            </p>
                        </OstCard>

                        <p style={Styles.Fonts.basic}>
                            Now, we'll take the pseudocode above and convert it into REAL code using the four
                            programming languages that we have been using thus far; Java, JavaScript, C# and Python.
                        </p>

                        <CodeSnippet
                            js={renderJavaScript()}
                            java={renderJava()}
                            cs={renderCs()}
                            py={renderPython()}
                        />
                    </div>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <p style={Styles.Fonts.basic}>
                        In addition to the <strong>conditional</strong>, there were a few new things in this code. Let's go over them
                        before we cover everything accomplished in the small code snippet above.
                    </p>

                    <div style={Styles.Sections.importantNote}>
                        <p style={{...Styles.Fonts.basic, marginBottom: 0}}>
                        First, let's go over <strong>printing</strong>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0}}>
                        Printing, which we will go over in more depth in the next lesson, is the act of displaying a value (or a variable's value)
                        inside your computer terminal. This way you will be able to see the value of variables along the progression of
                        your code's processes. <strong>Simply put, printing lets developers see how their variables are changing and helps to detect
                        where any issues may have arisen.</strong>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 0}}>
                        In the code above, you see us printing using <strong>console.log</strong> in JavaScript, <strong>System.out.println</strong> in Java,
                        <strong> Console.WriteLine</strong> in C# and <strong>print</strong> in Python.
                        </p>

                        <p style={{...Styles.Fonts.basic, marginBottom: 0}}>
                        Next, a quick reminder on the <strong>modulo operator</strong>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0}}>
                        Remember the modulo <strong>returns only the remainder</strong>. This means 4 % 2 would be 0, as 4 divided by 2 is 2 with a remainder of 0.
                        5 % 2 would return 1, as 2 goes into 5 twice with a remainder of 1.
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 0}}>
                        In the code above, we are determining whether 'count' is even by checking if there is a remainder when dividing by 2.
                        </p>
                    </div>

                    <p style={Styles.Fonts.basic}>
                        Now, back to covering the conditional. As you see above, there are two possible print statements in the code.
                        Using if statements and the 'count' variable, we can dictate which print statement gets called.
                        IF the 'count' variable is even, the code will print that the value was even. ELSE, the code will print
                        that the value is odd.
                    </p>

                    <p style={Styles.Fonts.basic}>
                        Let's say 'userInput' has a value of 6. This means that now count will also have a value of 6.
                        Then the computer arrives at the if statement, and evaluates the expression "count % 2 == 0". Since 6 % 2 is 0, the expression is true, and
                        the code underneath the 'if statement' will be run, while all "else" or "else if" options will be ignored.
                        In this case where userInput is 6, the else statement will not even be read by the computer.
                    </p>

                    <p style={Styles.Fonts.basic}>
                        Let's take a look at a more complicated example now
                    </p>

                    <CodeSnippet
                        js={renderJavaScript2()}
                        java={renderJava2()}
                        cs={renderCs2()}
                        py={renderPython2()}
                    />

                    <div style={{...Styles.Sections.importantNote, marginTop: 30}}>
                        <p style={Styles.Fonts.basic}>
                        We will go over the code you see above in a moment, but before taking a look at the pseudocode see if you can try to figure out
                        how this workflow operates. Try to determine what the end results of this code can be, depending on what the userInput values are.
                        </p>

                        <p style={Styles.Fonts.basic}>
                        For example, imagine if the userInput values had an employee with 4.4 stars who had a going rate of 55 dollars an hour.
                        What would this code do, given this information?
                        </p>
                    </div>

                    <p style={Styles.Fonts.basic}>
                    Hopefully you've run through this logic on your own. Now let's see this same code but displayed as
                    pseudocode. This may add some clarity to the logic being used. Try again to follow the workflow, and see
                    what different results would happen based on different userInputs.
                    </p>

                    <OstCard
                    templateStyle={1}
                    imageSrc={pseudoImage2}
                    style={{backgroundColor: "#ebf4ff"}}
                    >
                        <div style={{marginLeft: '10%', marginRight: '10%'}}>
                            <p style={Styles.Fonts.basic}>
                            This is a more complicated 'if / else' chain that also introduces a new 'if' statement, the <strong>else if</strong> (written as 'elif' in Python).
                            </p>

                            <p style={Styles.Fonts.basic}>
                            This statement allows you to add multiple possible results to a conditional. As seen in the first examples shown, there were only 2 possible
                            results of each if statement. Either it was true or it wasn't. Recall that when the condition of an 'if' statement is NOT true, it will
                            automatically run the code beneath the else statement.
                            </p>

                            <p style={Styles.Fonts.basic}>
                            As you see via this pseudocode, there are 3 possible top-level conditionals. First we check to see if the worker rating is above 4.5 stars.
                            IF IT IS NOT, we then check to see if the rating is above a 4.0. IF IT IS NOT, then it runs the 'else' statement which is an immediate pass
                            on the worker in question.
                            </p>
                        </div>
                    </OstCard>
                </div>
            )
        }

        function renderThird(){
            return(
                <div>
                    <div style={Styles.Fonts.lessonHeader}>Test your Knowledge</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            Now, using the code and pseudocode above, try answering the following questions to demonstrate your understanding of conditional logic!
                            Below is a short quiz listing potential 'userInput' values. Determine what the result of the code would be for each.
                        </p>

                        <OstrichForm
                            style={{
                                backgroundColor: Colors.offWhiteContent,
                                boxShadow:'2px 2px 10px 2px rgba(20, 20, 15, 0.1)',
                                borderRadius: 15
                            }}
                            title={"Test your Conditionals Knowledge!"}
                            fieldTextStyles={{fontSize: 16}}
                            fields={[
                                {
                                    id: '1',
                                    title: "1. If the User Input had a worker with a review score of 3.9 and an hourly rate of $38 an hour, what would this code return?",
                                    type: "MC",
                                    options: ["He is hired", "He is not hired", "Nothing, an Error is thrown"],
                                    correctValue: "He is not hired"
                                },
                                {
                                    id: '2',
                                    title: "2. If the User Input had a worker with a review score of 4.7 and an hourly rate of $49 an hour, what would this code return?",
                                    type: "MC",
                                    options: ["He is hired", "He is not hired", "Nothing, an Error is thrown"],
                                    correctValue: "He is hired"
                                },
                                {
                                    id: '3',
                                    title: "3. If the User Input had a worker with a review score of 4.5 and an hourly rate of $63 an hour, what would this code return?",
                                    type: "MC",
                                    options: ["He is hired", "He is not hired", "Nothing, an Error is thrown"],
                                    correctValue: "He is not hired"
                                },
                                {
                                    id: '4',
                                    title: "4. If the User Input had a worker with a review score of 4.2 and an hourly rate of $45 an hour, what would this code return?",
                                    type: "MC",
                                    options: ["He is hired", "He is not hired", "Nothing, an Error is thrown"],
                                    correctValue: "He is hired"
                                },
                                {
                                    id: '5',
                                    title: "5. If the User Input is NOT provided, what would this code print?",
                                    type: "MC",
                                    options: ["He is hired", "He is not hired", "Nothing, an Error is thrown"],
                                    correctValue: "He is not hired"
                                },
                            ]}
                        />
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
                {renderTitle("Conditionals")}
                {renderFirst()}
                {renderSecond()}
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
            current={"Conditionals"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default ConditionalsLesson
