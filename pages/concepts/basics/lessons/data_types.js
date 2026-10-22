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
import CodeSnippet from "../../../../components/CodeSpaces/codeSnippet";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


const DataTypesLesson = ({}) => {

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
                    <span style={Styles.Code.str}>"4"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>txt2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"5"</span>
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
                    <span style={Styles.Code.comment}>// Strings are not added together like numbers, they are joined end to end.</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The value of combinedTxt would be "45".</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>mixedDataTypes </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>txt </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// In JavaScript, mixing a number and a string will automatically convert</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// the number into a string, and then join the two together.</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// This makes the value of mixedDataTypes "44"</span>
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
                    <span style={Styles.Code.comment}>// The value of numberType would be 5.5</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// JavaScript is different than most languages in that 'int', 'float' and 'double' do</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// not actually exist. Instead, every numerical value in JavaScript is of data type 'number'.</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// This makes working with numbers easier in JavaScript, but less memory efficient,</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// since every 'number' takes up as much space as a double.</span>
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
                    <span style={Styles.Code.reg}>= 4;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>num2 </span>
                    <span style={Styles.Code.reg}>= 5;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>txt </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"4"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>txt2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"5"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>combinedNums </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>num2</span>
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
                    <span style={Styles.Code.var}>txt2</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Strings are joined end to end. The value of combinedTxt would be "45".</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>mixedDataTypes </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>txt</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// When one side of a + is a String, Java converts the other side into a String.</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The value of mixedDataTypes would be "44". Notice that we still had to</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// declare mixedDataTypes as a String; storing it in an int would throw an error.</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>num3 </span>
                    <span style={Styles.Code.reg}>= 1.5;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>numberType </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>num3</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The value of numberType would be 5.5</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Java can easily convert ints to doubles when needed, so you can run</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// the code above without needing to cast anything.</span>
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
                    <span style={Styles.Code.reg}>= 4;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>num2 </span>
                    <span style={Styles.Code.reg}>= 5;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>string </span>
                    <span style={Styles.Code.var}>txt </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"4"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>string </span>
                    <span style={Styles.Code.var}>txt2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"5"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>combinedNums </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>num2</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The value of combinedNums would be 9</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>string </span>
                    <span style={Styles.Code.var}>combinedTxt </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>txt </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>txt2</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Strings are joined end to end. The value of combinedTxt would be "45".</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>string </span>
                    <span style={Styles.Code.var}>mixedDataTypes </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>txt</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Just like Java, when one side of a + is a string, C# converts the other side</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// into a string. The value of mixedDataTypes would be "44".</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>num3 </span>
                    <span style={Styles.Code.reg}>= 1.5;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>numberType </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>num3</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The value of numberType would be 5.5</span>
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
                    <span style={Styles.Code.str}>"4"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>txt2 </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"5"</span>
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
                    <span style={Styles.Code.comment}># Strings are joined end to end. The value of combinedTxt would be "45".</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>mixedDataTypes </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.func}>str(</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.func}>) </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>txt </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Unlike JavaScript, Python will NOT mix a number and a string for you.</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Writing num + txt would throw a TypeError. Instead, we convert (cast)</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># num into a string with str(). The value of mixedDataTypes would be "44"</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>num3 </span>
                    <span style={Styles.Code.reg}>= 1.5</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>numberType </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>num3 </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># The value of numberType would be 5.5. Python happily mixes ints and floats.</span>
                    </p>
                </div>
            )
        }

    // Second Code Snippet //

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
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>true</span>
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
                    <span style={Styles.Code.comment}>// The value of boolAndNumber would be 5</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// This is because true becomes 1 when converted to a number</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// false would become 0</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>stringValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"true"</span>
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
                    <span style={Styles.Code.comment}>// The value of boolAndString would be "truetrue"</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// This is because JavaScript converts easily to Strings</span>
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
                    <span style={Styles.Code.reg}>= 4;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>boolean </span>
                    <span style={Styles.Code.var}>boolValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>true</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>boolAndNumber </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>boolValue</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// This would throw an error</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Unlike JavaScript, Java does not treat true as 1, so you cannot add a boolean to a number</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>stringValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"true"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>boolAndString </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>boolValue </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>stringValue</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The value of boolAndString would be "truetrue"</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Anything added to a String gets converted into a String</span>
                    </p>
                </div>
            )
        }

        function renderCsTypes(){
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
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>true</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>boolAndNumber </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>boolValue</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// This would throw an error</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Just like Java, C# does not treat true as 1</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>string </span>
                    <span style={Styles.Code.var}>stringValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"true"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>string </span>
                    <span style={Styles.Code.var}>boolAndString </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>boolValue </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>stringValue</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// The value of boolAndString would be "Truetrue"</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Notice C# writes the boolean with a capital T when converting it to a string</span>
                    </p>
                </div>
            )
        }

        function renderPythonTypes(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>= 4</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>boolValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>True</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>boolAndNumber </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>boolValue </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># The value of boolAndNumber would be 5</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Like JavaScript, Python treats True as 1 and False as 0</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>stringValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"true"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>boolAndString </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>boolValue </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>stringValue </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># This would throw a TypeError</span>
                    </p>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Python will not convert to a string for you; str(boolValue) + stringValue would work</span>
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
                    <div style={Styles.Fonts.lessonHeader}>What are Data Types?</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            As briefly covered in the <strong>Variables Lesson</strong>, every variable will have an attached 'DataType.' This describes what kind of value is being stored inside of the variable. This concept matters a lot more in some
                            <ODef
                            text="programming languages"
                            modalContent={
                            <ODefContnet
                                color="#88fccc"
                                word="Programming Language"
                                definition="Computers do not understand written (or typed) language. Rather, they speak in binary. To the human eye, binary language cannot be processed, so we have created systems of 'syntax' to form a bridge between human comprehension and computer binary code. This means we created 'languages' with their own syntax, or 'grammar' that the computer compiler can understand well enough to translate into binary. This allows developers to create the files that we know of. Like in real life, each language will have its own quirks, its own rules, words and structure. Some Programming languages we will cover are Python, Java, JavaScript and C#."
                                />}
                            />
                            than it does in others. For example, in <strong>Java and C#</strong>, variables of different data types are very strict about how they can interact with each other, and often the developer needs to make some changes so that their data types match.
                            For example, in Java, if we add x, which has a value of 2 (the datatype 'integer'), to y, which has a value of 2.5 (the data type 'double'), and try to store the result in an integer variable, the compiler will throw an error.
                        </p>
                        <p style={Styles.Fonts.basic}>
                            <strong>Let's go over some basic Data Types</strong>
                        </p>
                        <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                            <li>
                                <strong>Integer (int) -- </strong> Any whole number. Integers do not have decimals. Furthermore, there is a maximum (and minimum) number that integers are allowed to represent. You cannot have integer variables store any value above 2,147,483,647 or below -2,147,483,648. This makes the Integer, or int, one of the smallest numeric data types in terms of memory it takes up.
                            </li>
                            <br></br>
                            <li>
                                <strong>Double (double) -- </strong> A Double is a variable that functions much like an Integer but takes up an increased amount of memory in storage. As such, its range is larger and it is able to be used with decimal point numbers, unlike the int. A double is one of the largest numeric datatypes, taking up 64 bits of storage per variable of this type.
                            </li>
                            <br></br>
                            <li>
                                <strong>Float (float) -- </strong> A Float is a variable that functions much like a Double but takes up less storage, operating at only 32 bits. This means you can still have decimal numbers represented as a Float data type, but when handling massive numbers or searching for precision to the 15th decimal, you may be better off using the Double data type.
                            </li>
                            <br></br>
                            <li>
                                <strong>Character (char) -- </strong> A single typed character. This could be a letter, a symbol (such as + - * ! etc.) or even a number. However the char data type cannot be manipulated the same way as a numeric data type. This means to say that 5 (int) and '5' (char) will behave differently.
                            </li>
                            <br></br>
                            <li>
                                <strong>String (String) -- </strong> A series of connected characters. A String in computer science is essentially how all text is recorded. A string does have a few different behaviors than a character, despite them being very similar. We will go over more on this later on.
                            </li>
                            <br></br>
                            <li>
                                <strong>Boolean (bool) -- </strong> A true or false value. Takes up minimal computer memory and can be used to quickly identify if conditions are met. More on this later as well!
                            </li>
                        </div>
                    </div>

                    <div style={Styles.Fonts.lessonHeader}>Why are Data Types Important?</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            Data types help segment different kinds of variables and minimize storage. Their importance depends on the language, as some languages like <strong>Java and C#</strong> require a data type be provided the moment a variable is declared; whereas the compilers in languages like <strong>JavaScript and Python</strong> can determine the data type based on the value provided during initialization. In these languages the data type can also change, whereas in stricter languages once a data type is set it cannot be easily altered.
                        </p>

                        <p style={Styles.Fonts.basic}>
                            Regardless of the language however, all data types behave a little differently. Let's take a look at some simple examples...
                        </p>

                        <div style={Styles.Sections.importantNote}>
                            <p style={Styles.Fonts.basic}>
                                Below we
                                <ODef
                                text="declare"
                                modalContent={
                                <ODefContnet
                                    color="#88fccc"
                                    word="Declaration"
                                    definition="Creating a variable in Computer Science is referred to as 'Declaring.' If I wanted to create and use a new variable, x, I would first have to declare it. In most languages, there will be a keyword immediately preceding the variable name. For instance, in JavaScript, if I wanted to declare an empty variable x, I could do so by entering 'let x' or 'var x', as 'let' and 'var' are keywords for creating variables in JavaScript."
                                    />}
                                />
                                and
                                <ODef
                                text="initialize"
                                modalContent={
                                <ODefContnet
                                    color="#88fccc"
                                    word="Initializing a Variable"
                                    definition="In most languages, we can declare and initialize a variable at the same time. To initialize a variable simply means to assign a value to it. In our previous example, 'let x', we would simply need to add a value to the statement to consider x initialized. 'let x = 5' is an example of full variable initialization."
                                    />}
                                />
                                variables that look like they have a similar value, but are of different data types. We will first initialize two ints, and then two Strings.
                            </p>
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
                                <span style={Styles.Code.keyword}>String </span>
                                <span style={Styles.Code.var}>txt </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.str}>"4"</span>
                                <span style={Styles.Code.reg}>;</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>String </span>
                                <span style={Styles.Code.var}>txt2 </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.str}>"5"</span>
                                <span style={Styles.Code.reg}>;</span>
                                </p>
                            </div>

                            <p style={Styles.Fonts.basic}>
                                Now we will compare how they interact with each other as well as between themselves.
                            </p>
                            <div style={{...Styles.Sections.simpleLessonCode, width: 750}}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>int </span>
                                <span style={Styles.Code.var}>combinedNums </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>+ </span>
                                <span style={Styles.Code.var}>num2</span>
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
                                <span style={Styles.Code.var}>txt2</span>
                                <span style={Styles.Code.reg}>;</span>
                                </p>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Strings are not added like numbers. Instead, they are joined end to end.</span>
                                </p>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// The value of combinedTxt would be "45".</span>
                                </p>
                            </div>
                        </div>

                        <p style={Styles.Fonts.basic}>
                            As previously mentioned, data types are more important in some languages than in others. Below we will show how different languages may have some limitations that others don't.
                        </p>

                        <CodeSnippet
                            js={renderJavaScript()}
                            java={renderJava()}
                            cs={renderCs()}
                            py={renderPython()}
                        />

                        <br></br>

                        <p style={Styles.Fonts.basic}>
                            Let's go over a bit of what we saw above. Foremost, you can see clearly in these small code snippets some of the bigger differences between languages. <strong>Python</strong>, for example, does not even have developers use a
                            <span>
                            <ODef
                            text="keyword"
                            modalContent={
                            <ODefContnet
                                color="#ffd591"
                                word="Keywords"
                                definition="Keywords are phrases or words that have an inherent definition in whatever language you are currently using, and thus cannot be used as variable names. For example, words like 'if', 'else', 'let', and 'public' are some examples of keywords in JavaScript. These words cannot be used as variable names."
                            />}
                            />
                            </span>
                            to announce the creation of a variable. <strong>JavaScript</strong> just uses the keywords 'let', 'var', and 'const' to create variables and constants. Stricter, lower-level programming languages like <strong>Java and C#</strong> require developers to specify the variable's data type at the moment of declaration.
                        </p>

                        <p style={Styles.Fonts.basic}>
                            As you can see, in most cases you will be able to switch the data type of a variable (or create a new variable to do so) when mixing data types in operations. While some languages rely on the developer guiding the compiler through the process of mixing data types, others can figure out what the developer wants and automatically make the adjustments.
                        </p>
                    </div>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <div style={Styles.Fonts.lessonHeader}>More on Mixing Data Types and using Operators</div>
                    <div>
                        <p style={Styles.Fonts.basic}>
                            There are times when two or more variables of different data types may be compared against one another, and not just added to one another like in the examples above.
                            This means sometimes you may need to add an <strong>integer</strong> with a <strong>string</strong>, and sometimes you may need to see if a date (saved as a number) is before or after a date saved as a string.
                            Other times, you will need to change the data type of one variable entirely in order to make it interact with another. Let's cover some of those cases, as well as some of the examples shown above, in more detail.
                        </p>

                        <p style={Styles.Fonts.basic}>
                            First, we will cover simple operations between two different data types. As shown in the example above, languages handle adding a string and a number together very differently.
                            Some languages, like <strong>JavaScript</strong>, will automatically convert the number into a string for you, whereas others, like <strong>Python</strong>, refuse to guess and require
                            developers to tell the machine what variable's type to change and what to change it to. This is done through a process called
                            <ODef
                            text="casting"
                            modalContent={
                            <ODefContnet
                                color="#a3fc2d"
                                word="Casting"
                                definition="The process of manually telling the compiler to change the data type of a variable to a different one. For example, one could cast an integer x = 4 to be a string which = '4'"
                            />}
                            />.
                        </p>

                        <div style={Styles.Sections.importantNote}>
                            <p style={Styles.Fonts.basic}>
                                Both <strong>JavaScript and Python</strong> are higher level languages that do not rely on type declarations, but they disagree on what to do when we add a number to a string.
                                JavaScript assumes we want the new value to be a string. Python throws an error unless we cast the number ourselves with <strong>str()</strong>.
                            </p>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.comment}>// JavaScript</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>let </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>= 5</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>let </span>
                                    <span style={Styles.Code.var}>stringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.str}>"4"</span>
                                    </p>
                                    <br></br>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>let </span>
                                    <span style={Styles.Code.var}>combinedStringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>stringValue </span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.comment}>// "54"</span>
                                    </p>
                                </div>
                                <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.comment}># Python</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>= 5</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.var}>stringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.str}>"4"</span>
                                    </p>
                                    <br></br>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.var}>combinedStringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.func}>str(</span>
                                    <span style={Styles.Code.var}>numberValue</span>
                                    <span style={Styles.Code.func}>) </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>stringValue </span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.comment}># "54"</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={Styles.Sections.importantNote}>
                            <p style={Styles.Fonts.basic}>
                                For the <strong>Lower Level Programming Languages</strong>, the computer does not do as much assuming as it does in the higher levels. In C for example, "5" + 4 would not give you "54" at all; it would return either an error or some long gibberish text.
                            </p>
                            <p style={Styles.Fonts.basic}>
                                Luckily, we are not working in any languages that low level. While both Java and C# are lower level when compared to Python and JavaScript, they do have
                                some modern advancements that allow implicit conversions. They do, however, rely on the developer to tell the computer what data type the resulting variable will be. For example,
                                when combining "4" and 5, we would want the result to be a string, since turning a number into a string is far easier than the other way around.
                            </p>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.comment}>// Java</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>int </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>= 5;</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>String </span>
                                    <span style={Styles.Code.var}>stringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.str}>"4"</span>
                                    <span style={Styles.Code.reg}>;</span>
                                    </p>
                                    <br></br>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>String </span>
                                    <span style={Styles.Code.var}>combinedStringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>stringValue</span>
                                    <span style={Styles.Code.reg}>;</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>int </span>
                                    <span style={Styles.Code.var}>thisWouldThrowAnError </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>stringValue</span>
                                    <span style={Styles.Code.reg}>;</span>
                                    </p>
                                </div>
                                <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.comment}>// C#</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>int </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>= 5;</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>string </span>
                                    <span style={Styles.Code.var}>stringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.str}>"4"</span>
                                    <span style={Styles.Code.reg}>;</span>
                                    </p>
                                    <br></br>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>string </span>
                                    <span style={Styles.Code.var}>combinedStringValue </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>stringValue</span>
                                    <span style={Styles.Code.reg}>;</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>int </span>
                                    <span style={Styles.Code.var}>thisWouldThrowAnError </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>numberValue </span>
                                    <span style={Styles.Code.reg}>+ </span>
                                    <span style={Styles.Code.var}>stringValue</span>
                                    <span style={Styles.Code.reg}>;</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p style={Styles.Fonts.basic}>
                            Some data types are easier to convert to than others. For example, JavaScript, Java and C# all assume that when you combine anything with a string, you want the result to be a string.
                            Python is the exception of the four, and will ask you to convert things yourself. There are some other weird cases too, especially with booleans.
                            We will go over some of them below.
                        </p>

                        <CodeSnippet
                            js={renderJavaScriptTypes()}
                            java={renderJavaTypes()}
                            cs={renderCsTypes()}
                            py={renderPythonTypes()}
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
                {renderTitle("Data Types")}
                {renderFirst()}
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
            current={"Data Types"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default DataTypesLesson
