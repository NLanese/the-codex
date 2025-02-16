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
                    <div style={Styles.Fonts.lessonHeader}>What is are Data Types?</div>
                    <div style={Styles.Sections.lessonContent}>
                        <p style={Styles.Fonts.basic}>
                            As briefly covered in the <strong>Variables Lesson</strong> every variable will have an attached 'DataType.' This describes what kind of value is being stored inside of the variable. This concept matters a lot more in some programming languages than it does in others. For example, in <strong>Java and C#</strong>, variables of different data types cannot interact with each other at all unless the developer makes some changes in order to change one or more of their data types so that they match. 
                            For example, in Java, if we try to add x which has a value of 2 (which has the datatype 'integer') to y, which has a value of 2.5 (which is of the data type 'double') the compiler will throw an error.
                        </p>
                        <p style={Styles.Fonts.basic}> 
                            <strong>Let's go over some basic Data Types</strong>
                        </p>
                        <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                            <li>
                                <strong>Integer -- </strong> Any whole number. Integers do not have decimals. Furthermore, there is a maximum  (and minimum) number that integers are allowed to represent. You cannot have integer variables store any value above 2,147,483,647 or below -2,147,483,647
                            </li>
                            <br></br>
                            <li>
                                <strong>Variables can have their Data changed -- </strong>More times than not, when working with a technical project, you will have more values that can change than not. For example, if we were developing a game, we would need a variable to keep score. This score would need to be changed quite frequently. Similarly, a user may have a username associated with an account, and they will need the ability to change that. Sometimes, variables will not change and SHOULD not change, and as such these variables are actually created differently than others, and are often referred to as <strong>constants</strong> but these will be covered later.
                            </li>
                            <br></br>
                            <li>
                                <strong>Variables will have their Data referenced -- </strong> What's the point in storing data if you don't use it? In most previous examples, the variable we mention ends up being referenced when it is displayed to the user. The score is displayed, the amount of items in a cart is displayed, and so is a username. However, they can be referenced by the code itself. For example, a game will know to end when a score reaches a certain number. In a pickup game for example, if you play to 21 points, the app would check every time a team scores to see if their score is 21. If the score is 21 the game ends. <strong>We will go into this deeper in the future when we learn about conditionals</strong>
                            </li>
                        </div>
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