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


const DataTypesLesson = ({}) => {

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

        function renderVariablesJS_2(){
            return(
                <div>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Numbers //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>

                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 5</span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>
                            // The variable x has a data type of an 'Int' short for Integer
                        </span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>y </span>
                    <span style={Styles.Code.reg}>= 2.5</span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The variable y has a data type of an 'Double.' </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// 'Doubles' take up double the space of an Integer in computer storage </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// but this allows them to be large enough to hold decimal values </span>
                    </p>


                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>z </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>* </span>
                    <span style={Styles.Code.var}>y </span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// In JavaScript, the resultant variable, z, will be equal to 5.0. </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// Notice how JavaScript converts the result to a Double when mixing Ints and Doubles </span>
                    </p>
                    <br></br>

                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Numbers and Strings //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////////////////</span></p>
                    

                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Bobby Hill" </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The variable name will hold a String value as its data type. </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// Strings are somewhat complicated, and their inner workings vary depending on the language you are using. </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// For now, just know that any words, sentences, or structures of literal language you want saved will be saved as Strings. </span>
                    </p>
    
                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>age </span>
                    <span style={Styles.Code.reg}>= 12</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// Here, the variable 'age' is an int. </span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>sentence </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>"is " </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>age </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>"years old." </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// Here, the variable 'sentence' takes the value of an int mixed with Strings.  </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The valuation of this equation converts the int into a string. This makes 'sentence' a String. </span>
                    </p>

                </div>
            )
        }

        function renderVariablesJavaScript_2(){
            return(
                <div>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Numbers //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>

                    <p>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 5;</span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>
                            // The variable x has a data type of an 'Int' short for Integer
                        </span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>y </span>
                    <span style={Styles.Code.reg}>= 2.5;</span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The variable y has a data type of an 'Double.' </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// 'Doubles' take up double the space of an Integer in computer storage </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// but this allows them to be large enough to hold decimal values </span>
                    </p>


                    <p>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>z </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>* </span>
                    <span style={Styles.Code.var}>y</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// In Java, the resultant variable, z, will be equal to 5.0. </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// You need to declare z as a Double, since Java can convert ints to Doubles but not the other way around. If you declare z as an 'int' this will cause an error. </span>
                    </p>
                    <br></br>

                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Numbers and Strings //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////////////////</span></p>
                    

                    <p>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Bobby Hill"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The variable name will hold a String value as its data type. </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// Strings are somewhat complicated, and their inner workings vary depending on the language you are using. </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// For now, just know that any words, sentences, or structures of literal language you want saved will be saved as Strings. </span>
                    </p>
    
                    <p>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>age </span>
                    <span style={Styles.Code.reg}>= 12;</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// Here, the variable 'age' is an int. </span>
                    </p>

                    <p>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>sentence </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>"is " </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.var}>age </span>
                    <span style={Styles.Code.reg}>+ </span>
                    <span style={Styles.Code.str}>"years old."</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// Here, the variable 'sentence' takes the value of an int mixed with Strings.  </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}>// The valuation of this equation converts the int into a string. This means you need to declare 'sentence' as a String. </span>
                    </p>

                </div>
            )
        }

        function renderVariablesPython_2(){
            return(
                <div>
                    <p>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 0</span>
                    </p>

                    <p>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill</span>
                    </p>
                </div>
            )
        }

        // Second Code Snippet //

        function renderVariablesJS_3(){
            return(
                <div>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>// Interacting with Numbers //</span></p>
                    <p style={Styles.Code.code}><span style={Styles.Code.comment}>//////////////////////////////</span></p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>= 2</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>y </span>
                    <span style={Styles.Code.reg}>= 2.5</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>double </span>
                    <span style={Styles.Code.var}>z </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>x </span>
                    <span style={Styles.Code.reg}>* </span>
                    <span style={Styles.Code.var}>y </span>
                    </p>
                    <br />

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// z would be equal to 5.0 since 2 * 2.5 = 5.0. In operations with two different number data types (like int and double)</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// the compiler will automatically make the resulting variable the more complicated of the two numeric data types.</span>
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

        function renderVariablesJava_3(){
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

        function renderVariablesC_3(){
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

        function renderVariablesPython_3(){
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

                    <div style={Styles.Fonts.lessonHeader}>What is are Data Types?</div>
                    <div style={Styles.Sections.lessonContent}>
                        <p style={Styles.Fonts.basic}>
                            As briefly covered in the <strong>Variables Lesson</strong> every variable will have an attached 'DataType.' This describes what kind of value is being stored inside of the variable. This concept matters a lot more in some 
                            <ODef 
                            text="programming languages" 
                            modalContent={
                            <ODefContnet 
                                color="#88fccc" 
                                word="Programming Language" 
                                definition= "Computers do not understand written (or typed) language. Rather, they speak in binary. To the human eye, binary language cannot be processed, so we have created systems of 'syntax' to form a bridge between human comprehension and computer binary code. This means we created 'languages' with their own syntax, or 'grammer' that the computer compiler can understand well enough to translate into binary. This allows developers to create the files that we know of. Like in rela life, each language will have its own quirks, its own rules words and structure. Some Programming languages we will cover are Python, Java, JavaScript and C#."
                                />} 
                            />  
                            than it does in others. For example, in <strong>Java and C#</strong>, variables of different data types cannot interact with each other at all unless the developer makes some changes in order to change one or more of their data types so that they match. 
                            For example, in Java, if we try to add x which has a value of 2 (which has the datatype 'integer') to y, which has a value of 2.5 (which is of the data type 'double') the compiler will throw an error.
                        </p>
                        <p style={Styles.Fonts.basic}> 
                            <strong>Let's go over some basic Data Types</strong>
                        </p>
                        <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                            <li>
                                <strong>Integer (int) -- </strong> Any whole number. Integers do not have decimals. Furthermore, there is a maximum  (and minimum) number that integers are allowed to represent. You cannot have integer variables store any value above 2,147,483,647 or below -2,147,483,647. This makes the Integer, or int; the smallest numeric data type in terms of memory it takes up. 
                            </li>
                            <br></br>
                            <li>
                                <strong>Double (double) -- </strong> A Double is a variable that functions much like an Integer but takes up an increased amount of memory in storage. As such, its range is larger and it is able to be used with decimal point numbers, unlike the int. A double is one of the largest numeric datatypes, taking up 64 bits of storage per variable of this type.
                            </li>
                            <br></br>
                            <li>
                                <strong>Float (float) -- </strong> A Float is a variable that functions much like a Double but takes up less storage, operating at only 32 bits. This means you can still have decimal numbers represented as a Float data type, but when handling massive numbers or searching for percsion to the 15th decimal, you may be better off using the Double data type. 
                            </li>
                            <br></br>
                            <li>
                                <strong>Character (char) -- </strong> A single typed character. This could be a letter, a symbol (such as + - * ! etc.) or even a number. However the char data type cannot be manipulated the same way as a numeric data type. This means to say that 5(int) and '5'(char) will behave differently. 
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

        
    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{marginTop: '-3.2%'}}>
                {renderTitle("Data Types")}
                {renderFirst()}
                <CodeSnippet
                    // js={renderVariablesJS()}
                    // java={renderVariablesJavaScript()}
                    // cs={renderVariablesJavaScript()}
                    // py={renderVariablesPython()}
                />
                {renderSecond()}
                <CodeSnippet
                    // js={renderVariablesJS_2()}
                    // java={renderVariablesJava_2()}
                    // cs={renderVariablesC_2()}
                    // py={renderVariablesPython_2()}
                />
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