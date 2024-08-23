// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
 
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

        function renderVariablesJS(){
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

        function renderVariablesJavaScript(){
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

        function renderVariablesPython(){
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

        function renderVariablesJS_2(){
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

        function renderVariablesJava_2(){
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

        function renderVariablesC_2(){
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

        function renderVariablesPython_2(){
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
                    <p>
                        As briefly covered in the <strong>Variables Lesson</strong> every variable will have an attached 'DataType.' This describes what kind of value is being stored inside of the variable. This concept matters a lot more in some programming languages than it does in others. For example, in Java and in C#, variables of different data types cannot interact with each other at all unless they are changed to match. This means that adding 2 to 2.5 would not be valid in C# and Java. In JavaScript, however, you can mix datatypes. 2.5 can be added to or multiplied by 2.
                    </p>
                    <p>
                        <strong>Let's go over some examples of valid and invalid variable interactions.</strong> We will go through each example, and explain why each interaction is or is not valid, as well as what the resulting value of the interacting variables would be. 
                    </p>
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
                    js={renderVariablesJS()}
                    java={renderVariablesJavaScript()}
                    cs={renderVariablesJavaScript()}
                    py={renderVariablesPython()}
                />
                {renderSecond()}
                <CodeSnippet
                    js={renderVariablesJS_2()}
                    java={renderVariablesJava_2()}
                    cs={renderVariablesC_2()}
                    py={renderVariablesPython_2()}
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