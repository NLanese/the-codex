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


    //////////////////////
    // Lesson Rendering //
    //////////////////////

        function renderFirst(){
            return(
                <div>

                    <div style={Styles.Fonts.lessonHeader}>What are Data Types?</div>
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
                    <div style={Styles.Fonts.lessonHeader}>More on Mixing Data Types and using Operators</div>
                        <div style={Styles.Sections.lessonContent}>
                            <p style={Styles.Fonts.basic}>
                                There are times when two or more variables of different data types may be compared against one another, and not just added to one another like in the examples above. 
                                This means sometimes you may need to add an <strong>integer</strong> with a <strong>string</strong>, and sometimes you may need to see if a date (saved as a number) is before or after a date saved as a string. 
                                Other times, you will need to change the data type of one variable entirely in order to make it interact with another. Let's cover some of those cases, as well as some of the examples shown above, in more detail.
                            </p> 

                            <p style={Styles.Fonts.basic}>
                                First, we will cover simple operations between two different data types. As shown in the example above, nearly all languages can easily handle adding a string and a number together.
                                Newer and higher complexity languages like <strong>JavaScript and Python</strong> can automatically handle these differences in data types, whereas older and languages like <storng>C and Java</storng> are unable to do this, and require
                                developers to tell the machine what variable's type to change and what to change it to. This is done through a process called 
                                <ODef 
                                text="casting" 
                                modalContent={
                                <ODefContnet 
                                    color="#a3fc2d"
                                    word="Casting" 
                                    definition= "The process of manually telling the compiler to change the data type of a variable to a different one. For example, one could cast an integter x = 4 to be a string which = '4'"
                                />} 
                                />  
                            </p> 

                            <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                            For the <strong>Higher Level Programing Languages,</strong> the computer will be able to figure out when we add a number to a string, that it wants
                            the new value to be a string. Python and JavaScript are also higher level langauages that do not rely on type declarations, so you do not need to adjust your syntax for Data Type Conversions
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.comment}>// JavaScript </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>let </span>
                                            <span style={Styles.Code.var}>numberValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.reg}>5 </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>let </span>
                                            <span style={Styles.Code.var}>stringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.str}>"4" </span>
                                        </p>
                                        <br></br>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>let </span>
                                            <span style={Styles.Code.var}>combinedStringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.var}>x </span>
                                            <span style={Styles.Code.reg}>+ </span>
                                            <span style={Styles.Code.var}>y </span>
                                            
                                        </p>
                                    </div>
                                    <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.comment}># Python </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.var}>numberValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.reg}>5 </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.var}>stringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.str}>"4" </span>
                                        </p>
                                        <br></br>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.var}>combinedStringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.var}>x </span>
                                            <span style={Styles.Code.reg}>+ </span>
                                            <span style={Styles.Code.var}>y </span>
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div style={{...Styles.Sections.importantNote, ...Styles.Fonts.basic}}>
                                <p>
                                For the <strong>Higher Level Programing Languages,</strong>, the computer does not do as much assuming as it does in the lower levels. As such, if you as a developer attempt to combine a String and an integer or some other numeric data type, 
                                you will either be faced with an error. In C for example, "5" + 4 would return either an error or some long gibberish text.
                                </p>

                                <p>
                                Luckily, we are not working in any low level languages wherein that will be an issue. While both Java and C# are lower level when compared to Python and JavaScript, they do have 
                                some modern advancements that allow implicit conversions. They do, however, rely on the developer to tell the computer what daya type the resulting variable will be. For exampke, 
                                when combining "5" and 4, we would want the result to be a string; since turning a number into a string is far easier than the other way around. 
                                </p>

                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.comment}>// JavaScript </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>int </span>
                                            <span style={Styles.Code.var}>numberValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.reg}>5 </span>
                                            <span style={Styles.Code.reg}>; </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>string </span>
                                            <span style={Styles.Code.var}>stringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.str}>"4" </span>
                                            <span style={Styles.Code.reg}>; </span>
                                        </p>
                                        <br></br>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>string </span>
                                            <span style={Styles.Code.var}>combinedStringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.var}>x </span>
                                            <span style={Styles.Code.reg}>+ </span>
                                            <span style={Styles.Code.var}>y </span>
                                            <span style={Styles.Code.reg}>; </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>int </span>
                                            <span style={Styles.Code.var}>unexpectedResult </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.var}>x </span>
                                            <span style={Styles.Code.reg}>+ </span>
                                            <span style={Styles.Code.var}>y </span>
                                            <span style={Styles.Code.reg}>; </span>
                                        </p>
                                    </div>
                                    <div style={{...Styles.Sections.simpleLessonCode, flex: 3, marginLeft: 10}}>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.comment}># C# </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>int </span>
                                            <span style={Styles.Code.var}>numberValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.reg}>5 </span>
                                            <span style={Styles.Code.reg}>; </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>string </span>
                                            <span style={Styles.Code.var}>stringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.str}>"4" </span>
                                            <span style={Styles.Code.reg}>; </span>
                                        </p>
                                        <br></br>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>string </span>
                                            <span style={Styles.Code.var}>combinedStringValue </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.var}>x </span>
                                            <span style={Styles.Code.reg}>+ </span>
                                            <span style={Styles.Code.var}>y </span>
                                            <span style={Styles.Code.reg}>; </span>
                                        </p>
                                        <p style={Styles.Code.code}>
                                            <span style={Styles.Code.keyword}>int </span>
                                            <span style={Styles.Code.var}>thisWouldThrowAnError </span>
                                            <span style={Styles.Code.reg}>= </span>
                                            <span style={Styles.Code.var}>x </span>
                                            <span style={Styles.Code.reg}>+ </span>
                                            <span style={Styles.Code.var}>y </span>
                                            <span style={Styles.Code.reg}>; </span>
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
            <div style={{marginTop: '-3.2%'}}>
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