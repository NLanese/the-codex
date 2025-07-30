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
                        <span style={Styles.Code.var}>num </span>
                        <span style={Styles.Code.reg}>= 4</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>let </span>
                        <span style={Styles.Code.var}>num2 </span>
                        <span style={Styles.Code.reg}>= 5</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>let </span>
                        <span style={Styles.Code.var}>txt </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.str}>'4'</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>let </span>
                        <span style={Styles.Code.var}>txt2 </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.str}>'5'</span>
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>combinedNums </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>num2 </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The value of combinedNums would be 9</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>combinedTxt </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>txt </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>txt2 </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// Remmeber that a char data type can pnly hold one character.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// This means that to have multiple chars together, you will need a String.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The value of combinedTxt would be "54".</span> 
                        </p> 

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>mixedDataTypes </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>text </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// In JavaScript, mixing two data types will convert.</span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The less computationally demanding variable and convert it to the </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// more computationally heavy variable. In this case, our int will convert </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// into a string. This makes the mixedDataTypes value '54'</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>num3 </span>
                            <span style={Styles.Code.reg}>= 1.5</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>let </span>
                            <span style={Styles.Code.var}>numberType </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>num3 </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// JavaScript is different than most langauages in that 'int', 'float' and 'double' do.</span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// not actually exist. Instead, every numerical value in JavaScript is of data type 'number' </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// This makes working with numbers easier to develop in JavaScript, but less computationally efficient </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// since a 'number' can be as large as a double, so it takes much more space in storage than ints</span> 
                        </p>

                </div>
            )
        }

        function renderJava(){
            return(
                <div>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>= 4</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>num2 </span>
                            <span style={Styles.Code.reg}>= 5</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>char </span>
                            <span style={Styles.Code.var}>txt </span>
                            <span style={Styles.Code.reg}>= </span> 
                            <span style={Styles.Code.str}>'4'</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>char </span>
                            <span style={Styles.Code.var}>txt2 </span>
                            <span style={Styles.Code.reg}>= </span> 
                            <span style={Styles.Code.str}>'5'</span>
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>combinedNums </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>num2 </span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The value of combinedNums would be 9</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>String </span>
                            <span style={Styles.Code.var}>combinedTxt </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>txt </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>txt2 </span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// Remmeber that a char data type can pnly hold one character.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// This means that to have multiple chars together, you will need a String.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The value of combinedTxt would be "54".</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>String </span>
                            <span style={Styles.Code.var}>mixedDataTypes </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.keyword}>(char) </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>text </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>mixedDataTypes </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.keyword}>(int) </span>
                            <span style={Styles.Code.var}>text </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// In Java, you can sometimes mix different data types through a process called <strong>casting</strong> .</span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The less computationally demanding variable and convert it to the </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// more computationally heavy variable. In this case, our int will convert </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// into a string. This makes the mixedDataTypes value '54'</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>float </span>
                            <span style={Styles.Code.var}>decimal </span>
                            <span style={Styles.Code.reg}>= 1.5</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>float </span>
                            <span style={Styles.Code.var}>numberType </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>num3 </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// Java can easily convert ints to floats or doubles when needed.</span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// thus you can execute the code above without needing to use casting like you would </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// when changing non-numerical data types. </span> 
                        </p>
                </div>
            )
        }

        function renderCs(){
            return(
                <div>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>= 4</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>num2 </span>
                            <span style={Styles.Code.reg}>= 5</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>char </span>
                            <span style={Styles.Code.var}>txt </span>
                            <span style={Styles.Code.reg}>= </span> 
                            <span style={Styles.Code.str}>'4'</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>char </span>
                            <span style={Styles.Code.var}>txt2 </span>
                            <span style={Styles.Code.reg}>= </span> 
                            <span style={Styles.Code.str}>'5'</span>
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>combinedNums </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>num2 </span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># The value of combinedNums would be 9</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>String </span>
                            <span style={Styles.Code.var}>combinedTxt </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>txt </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>txt2 </span>
                            <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># Remmeber that a char data type can pnly hold one character.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># This means that to have multiple chars together, you will need a String.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># The value of combinedTxt would be "54".</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.keyword}>int </span>
                            <span style={Styles.Code.var}>mixedDataTypes </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.keyword}>(int) </span>
                            <span style={Styles.Code.var}>text </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// In C#, you can sometimes mix different data types through a process called <strong>casting</strong> .</span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The less computationally demanding variable and convert it to the </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// more computationally heavy variable. In this case, our int will convert </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// into a string. This makes the mixedDataTypes value '54'</span> 
                        </p>
                </div>
            )
        }

        function renderPython(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>num </span>
                        <span style={Styles.Code.reg}>= 4</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>num2 </span>
                        <span style={Styles.Code.reg}>= 5</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>txt </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.str}>'4'</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>txt2 </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.str}>'5'</span>
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.var}>combinedNums </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>num2 </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># The value of combinedNums would be 9</span> 
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.var}>combinedTxt </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>txt </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>txt2 </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># Remmeber that a char data type can pnly hold one character.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># This means that to have multiple chars together, you will need a String.</span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># The value of combinedTxt would be "54".</span> 
                        </p> 

                        <br></br>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.var}>mixedDataTypes </span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.var}>num </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>text </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># In Python, mixing two data types will convert.</span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># The less computationally demanding variable and convert it to the </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># more computationally heavy variable. In this case, our int will convert </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># into a string. This makes the mixedDataTypes value '54'</span> 
                        </p>
                </div>
            )
        }

        // First Code Snippet // 
        function renderJavaScriptTypes(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>= 4</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>boolValue </span>
                    <span style={Styles.Code.bool}>= true</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>boolAndNumber </span>
                    <span style={Styles.Code.reg}>= </span> 
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span> 
                    <span style={Styles.Code.var}>boolValue </span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The value of boolAndNumber would be 5 </span> 
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// This is because true is 1 when converted to a number </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// false would become 0 </span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>stringValue </span>
                    <span style={Styles.Code.bool}>= "true"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>boolAndString </span>
                    <span style={Styles.Code.reg}>= </span> 
                    <span style={Styles.Code.var}>boolValue </span>
                    <span style={Styles.Code.reg}>+ </span> 
                    <span style={Styles.Code.var}>stringValue </span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The value of boolAndString would be "truetrue" </span> 
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// This is because JavaScript converts easily to Strings </span>
                    </p>
                </div>
            )
        }

        function renderJavaTypes(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>num </span>
                        <span style={Styles.Code.reg}>= 4</span>
                        <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>bool </span>
                        <span style={Styles.Code.var}>boolValue </span>
                        <span style={Styles.Code.bool}>= true</span>
                        <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>boolAndNumber </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.var}>num </span>
                        <span style={Styles.Code.reg}>+ </span> 
                        <span style={Styles.Code.var}>boolValue </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// The value of boolAndNumber would be 5 </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// This is because true is 1 when converted to a number </span>
                        </p>
                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// false would become 0 </span>
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>string </span>
                        <span style={Styles.Code.var}>stringValue </span>
                        <span style={Styles.Code.str}>= "true"</span>
                        <span style={Styles.Code.reg}>; </span> 
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>let </span>
                        <span style={Styles.Code.var}>boolAndString </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.var}>boolValue </span>
                        <span style={Styles.Code.reg}>+ </span> 
                        <span style={Styles.Code.var}>stringValue </span>
                        <span style={Styles.Code.reg}>; </span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// This would throw an error </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}>// This is because Java cannot easily convert to Strings </span>
                        </p>
                </div>
            )
        }

        function renderCTypes(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>num </span>
                        <span style={Styles.Code.reg}>= 4;</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>bool </span>
                        <span style={Styles.Code.var}>boolValue </span>
                        <span style={Styles.Code.bool}>= true</span>
                        <span style={Styles.Code.reg}>;</span>
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>boolAndNumber </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.var}>num </span>
                        <span style={Styles.Code.reg}>+ </span> 
                        <span style={Styles.Code.var}>boolValue </span>
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># The value of boolAndNumber would be 5 </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># This is because true is 1 when converted to a number </span>
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># false would become 0 </span>
                        </p>

                        <br></br>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>string </span>
                        <span style={Styles.Code.var}>stringValue </span>
                        <span style={Styles.Code.str}>= "true"</span>
                        <span style={Styles.Code.reg}>; </span> 
                        </p>

                        <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>let </span>
                        <span style={Styles.Code.var}>boolAndString </span>
                        <span style={Styles.Code.reg}>= </span> 
                        <span style={Styles.Code.var}>boolValue </span>
                        <span style={Styles.Code.reg}>+ </span> 
                        <span style={Styles.Code.var}>stringValue </span>
                        <span style={Styles.Code.reg}>; </span> 
                        </p>

                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># This would throw an error </span> 
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.comment}># This is because C# cannot easily convert to Strings </span>
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
                    </div>
                    
                    <div style={Styles.Fonts.lessonHeader}>Why are Data Types Important?</div>
                    <div style={Styles.Sections.lessonContent}>

                        <p style={Styles.Fonts.basic}> 
                            Data types help segment different kinds of variables and minimize storage. Their importance depends on the langauage, as some languages like <strong>Java and C</strong> require a data type be provided the moment a variable is declared; whereas the compilers in languages like <strong>JavaScript and Ruby</strong> can determine the data type based on the value provided during initalization. In these languages the data type can also change, whereas in older languages once a data type is set it cannot be easily altered.
                        </p>

                        <p style={Styles.Fonts.basic}> 
                            Regardless of the language however, all data types behave a little differently. Lets take a look at some simple examples...
                        </p>

                        <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                            Below we 
                            <ODef 
                            text="declare" 
                            modalContent={
                            <ODefContnet 
                                color="#88fccc" 
                                word="Declaration" 
                                definition="Creating a variable in Computer Science is referred to as 'Declaring.' If I wanted to create and use a new variable, x, I would first have to declare it. In most languages, there will be a keyword immediately proceeding the variable name. For instance, in JavaScript, if I wanted to declare an empty variable x, I could do so by entering 'let x' or 'var x', as 'let' and 'var' are keywords for creating variables in JavaScript."
                                />} 
                            /> 
                            and 
                            <ODef 
                            text="initialize" 
                            modalContent={
                            <ODefContnet 
                                color="#88fccc" 
                                word="Initializing a Variable" 
                                definition="In most langauges, we can declare and initialize a variable at the same time. To initialize a variable simply means to assign a value to it. In our previous example, 'let x', we would simply need to add a value to the statement to consider x initialized. 'let x = 5' is an example of full variable initialization."
                                />} 
                            />
                             variables that look like they have a similar value, but are of different data types. We will first initialize an int, and then a char.
                            <div style={Styles.Sections.simpleLessonCode}>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>int </span>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>= 4;</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>int </span>
                                <span style={Styles.Code.var}>num2 </span>
                                <span style={Styles.Code.reg}>= 5;</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>char </span>
                                <span style={Styles.Code.var}>txt </span>
                                <span style={Styles.Code.reg}>= </span> 
                                <span style={Styles.Code.str}>'4'</span>
                                <span style={Styles.Code.reg}>;</span> 
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>char </span>
                                <span style={Styles.Code.var}>txt2 </span>
                                <span style={Styles.Code.reg}>= </span> 
                                <span style={Styles.Code.str}>'5'</span>
                                <span style={Styles.Code.reg}>;</span> 
                                </p>
                            </div>

                            Now we will compare how they interact with each other was well as between themselves.
                            <div style={{...Styles.Sections.simpleLessonCode, width: 750}}>
                                <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>int </span>
                                    <span style={Styles.Code.var}>combinedNums </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>num </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>num2 </span>
                                    <span style={Styles.Code.reg}>;</span>
                                </p>
                                <p style={Styles.Code.code}>
                                   <span style={Styles.Code.comment}>// The value of combinedNums would be 9</span> 
                                </p>
                                <br></br>
                                <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>String </span>
                                    <span style={Styles.Code.var}>combinedTxt </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>txt </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>txt2 </span>
                                    <span style={Styles.Code.reg}>;</span>
                                </p>
                                <p style={Styles.Code.code}>
                                   <span style={Styles.Code.comment}>// Remmeber that a char data type can pnly hold one character.</span> 
                                </p>
                                <p style={Styles.Code.code}>
                                   <span style={Styles.Code.comment}>// This means that to have multiple chars together, you will need a String.</span> 
                                </p>
                                <p style={Styles.Code.code}>
                                   <span style={Styles.Code.comment}>// The value of combinedTxt would be "54".</span> 
                                </p>
                            </div>

                            As previously mentioned, data types are more important in some languages than in others. Below we will show how different languages may have some limitations that others don't. 
                           
                            <br></br>

                            <div>
                                <CodeSnippet 
                                    js={renderJavaScript()}
                                    java={renderJava()}
                                    cs={renderCs()}
                                    py={renderPython()}
                                />
                            </div>

                            <br></br>
                            <br></br>
                            
                            <p style={Styles.Fonts.basic}>
                                Let's go over a bit of what we saw above. Foremost, you can see clearly in these small code snippets some of the bigger differences between langauges. <strong>Python</strong>, for example does not even have developers use a 
                                <span>
                                <ODef 
                                text="Keyword" 
                                modalContent={
                                <ODefContnet 
                                    color="#ffd591" 
                                    word="Keywords" 
                                    definition="Keywords are phrases or words that have an inherent definition in whatever language you are currently using, and thus cannot be used as variable names. For example, words like 'if', 'else', 'let', and 'public' are some examples of keywords in JavaScript. These words cannot be used as variable names."
                                />} 
                                />  
                                </span>
                                to announce the creation of a variable. <strong>JavaScript</strong> just uses they keywords 'let', 'var', and 'const' to create variables and constants respectively. Older, lower-level programming Languages like <strong>Java and C# </strong>require developers to specify the variable's data type at the moment of declaration. 
                                
                            </p>   

                            <p style={Styles.Fonts.basic}>
                            As you can see, in most cases you will be able to switch the data type of a variable (or create a new variable to do so) when mixing data types in operations. While some languages rely on the developer guiding the compiler through the process of mixing data types; others can figure out what the developer wants and automatically make the adjustments. 
                            </p> 

                        </div>

                        <br></br>
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