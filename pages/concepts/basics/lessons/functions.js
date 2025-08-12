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
import { ODef } from "../../../../OstrichComponents/Text/OstrichDefinition";
import { ODefContnet } from "../../../../constants/oDefContent";

// Next JS
import { useRouter } from "next/router";
import Image from 'next/image';


const VariablesLesson = ({}) => {

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

        function renderJS(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Declare the Function </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>function </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{") {"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ 1 </span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>return </span>
                    <span style={Styles.Code.var}>num </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Create a test variable to use as a parameter</span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>testValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.reg}> 1</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Create a variable whose value will be the return value of this function  </span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>functionReturnValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
                    </p>

                    <br></br>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.var}>conosle</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>log</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>functionReturnValue</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
                    </p>

                </div>
            )
        }

        function renderJava(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Declare the Function, in Java it needs to also declare the Return Value's data type </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>public int </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"(int "}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{") {"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ 1;</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>return </span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Create a test variable to use as a parameter</span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>testValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.reg}> 1;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}>// Create a variable whose value will be the return value of this function  </span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>functionReturnValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <br></br>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.var}>conosle</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>log</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>functionReturnValue</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                </div>
            )
        }

        function renderCs(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Declare the Function, in Java it needs to also declare the Return Value's data type </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>public int </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"(int "}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{") {"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ 1;</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>return </span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>{"}"}</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Create a test variable to use as a parameter</span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>testValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.reg}> 1;</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Create a variable whose value will be the return value of this function  </span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>functionReturnValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <br></br>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.func}>print</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>functionReturnValue</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                </div>
            )
        }

        function renderPython(){
            return(
                <div>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Declare the Function </span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>def </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{") :"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.var}>num </span>
                    <span style={Styles.Code.reg}>+ 1</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                    <span style={Styles.Code.keyword}>return </span>
                    <span style={Styles.Code.var}>num</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Create a test variable to use as a parameter</span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.var}>testValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.reg}> 1</span>
                    </p>

                    <br></br>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.comment}># Create a variable whose value will be the return value of this function  </span>
                    </p>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.var}>functionReturnValue </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.func}>increaseValueByOne</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>num</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
                    </p>

                    <br></br>

                    <p style={{...Styles.Code.code}}>
                    <span style={Styles.Code.var}>conosle</span>
                    <span style={Styles.Code.reg}>.</span>
                    <span style={Styles.Code.func}>log</span>
                    <span style={Styles.Code.keyword}>{"("}</span>
                    <span style={Styles.Code.var}>functionReturnValue</span>
                    <span style={Styles.Code.keyword}>{")"}</span>
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
                    <div style={Styles.Fonts.lessonHeader}>What are Functions</div>
                    <p style={Styles.Fonts.basic}>
                        Functions are just as essential in Software Development as Variables are. As we know, <strong>variables hold data that can be changed, used, or displayed. If is often functions that do this changing, displaying, or using.</strong> 
                        A good way to think about this relationship between variables and functions is to think of them as nouns and verbs in a sentence. Computer Science is essentially you telling the computer what to do, and the Programming Langauges you are using 
                        is simply the langauge the computers understand. 
                    </p>
                    <p style={Styles.Fonts.basic}>
                        <strong>A function is a set of instructions to be run by the computer or the compiler. It can take variables in as inputs, manipulate them, and send them back out as outputs. </strong> 
                    </p>
                    <div style={{...Styles.Fonts.basic, ...Styles.Sections.importantNote}}>
                        <li>
                            When you have a name attached to any online account, that name is a variable. Whether your name is "John", "Dave", or 
                            "Hossenpheffer" your account will be set to display whatever is stored under the 'name' variable. You may use a 
                            function that takes any 'name' variable and then uses that to create a render of that name. 
                        </li>
                        <br></br>
                        <li>
                            When you login to a website, both your username and password are stored in the computer as variables. They will begin 
                            as just empty values, but as you type into the 'username' or 'email' text bar, the 'login' variable will be changed to 
                            match what you type. When you press the login button, the computer run a function using the username/email and password 
                            you provided to see if there is any username that matches what you entered that ALSO matches the password you entered.
                        </li>
                        <br></br>
                        <li>
                            In a shooter video game, each gun will have a different maximum ammo count. This number would be saved under a variable named something 
                            like max_ammo_count. You would also have a variabled named current_ammo_in_magazine. Whenever you shoot that gun, a function would run to 
                            reduce the value of current_ammo_in_magazine by 1. Whenever you reload, a reload_weapon function would run to reset current_ammo_in_magazine to 
                            be equal to max_ammo_count.
                        </li>
                    </div>

                    <p style={Styles.Fonts.basic}>
                        If Computer Science was a language, <strong>Variables would be nouns and Functions would be verbs</strong>. 
                        They are the two basic building blocks of any program or app, as well as the most integral. For exmaple, on this page
                        the "Labs", "Tests", and "Lessons" are all variables. The 'Lessons' variables are strings that equal "Variables", "Operators", "Data Types", etc. 
                        Whenever you click one of these buttons, a function fires that tells this website to redirect the user to the page of the variable they clicked on. 
                        When you click The Data Types Button, a function called "navigateToLesson()" fires and uses the variable value "Data Type" as a paremeter to determine 
                        which page to go to. 
                    </p>

                    <p style={Styles.Fonts.basic}>
                       Below we will define some basic functions in our four languages so you can see how to set them up.
                    </p>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div style={{...Styles.Fonts.basic}}>
                    <p>
                        As you see above, function declaration has some differences in different programming languages. Again, 
                        <ODef 
                        text="declaration" 
                        modalContent={
                        <ODefContnet 
                            color="#88fc23" 
                            word="Declaration" 
                            definition="Just like variables, functions need to be declared before they can be used or referenced. UNLIKE variables, functions need to be intiizlized and declared at the same time and CANNOT be changed later on. This means when you declare a function, you are naming the function as well as composing the contents of the function at the same time."
                        />} 
                        /> is different between different programming languagaes. This means to say that declaring a function in JavaScript is different than declaring a function in Python or C#.
                        Using, or <strong>running</strong> functions is usually done the same way across most languagaes, however.
                    </p>
                    <div style={Styles.Sections.importantNote}>


                        {/* JS */}
                        <div style={{
                            padding: 15, 
                            border: "1px solid black", borderRadius: 15, 
                            margin: "5%", width: '90%'
                        }}>
                            <h1 style={Styles.Fonts.lessonHeader}>JavaScript</h1>
                            JavaScript, as a higher level programming language has a simple function declaration structure. 
                            In the majority functions are declared simply with the keyword <strong>function</strong>, and 
                            the data type of the value the function returns does not need to be stated. Similarly, all of the
                            <ODef 
                            text="parameters" 
                            modalContent={
                            <ODefContnet 
                                color= "#11Df9f"
                                word="Declaration" 
                                definition= "Functions are responsible for changing the value of variables that are at your disposal. Generally, when you execute or 'do' a function, you as the developer will need to tell the function which variables it will be changing or working with. These provided variables are the parameters"                            />} 
                            /> have no specified data types either. 

                            <div style={{...Styles.Sections.simpleLessonCode, width: '90%'}}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Declare the Function </span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>function </span>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>num</span>
                                <span style={Styles.Code.keyword}>{") {"}</span>
                                </p>

                                <p style={{...Styles.Code.code, marginLeft: 20}}>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>+ 1 </span>
                                </p>

                                <p style={{...Styles.Code.code, marginLeft: 20}}>
                                <span style={Styles.Code.keyword}>return </span>
                                <span style={Styles.Code.var}>num </span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                </p>
                            </div>

                            Here, <span style={Styles.Code.keyword}>function </span> is the key word we use to tell the computer
                            that we are beginning a function declaration. We then enter the name of the function, which in our case is
                            <span style={Styles.Code.func}> increaseValueByOne</span>. The function takes <strong>one parameter </strong>
                            and inside that function, it will be referred to as <span style={Styles.Code.var}>num</span>. Everything inside the function is encased
                            by curly brackets  {"{  }"}.

                            <p>
                            Once the function begins, it takes the parameter, which is referred to as <span style={Styles.Code.var}>num</span>, and 
                            makes its value one plus itself. (More simply put, it increases the value of num by one). Then, the function will 
                            <ODef 
                            text="return" 
                            modalContent={
                            <ODefContnet 
                                color= "#11Df9f"
                                word="Return Statement" 
                                definition="In most cases, a function will have a return statement. This statement tells the function to stop running itself and spit out the following value. For example, a function that takes a number as a parameter and adds 1 to it would return a new number. If 2 was the parameter, the return vaue of the addOne() function would be 3. Higher Level programming langauges do not necesarily always need a return statement, but lower level ones like C# and Java usually will. These lower level anguages also need the data type of t=its return value specified ahead of time."                            
                            />} 
                            /> the new value.
                            </p>

                            <div style={{...Styles.Sections.simpleLessonCode, width: '95%'}}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Call (or Run) the Function on a Value</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.reg}>1</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                                <br></br>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Call (or Run) the Function on a Variable</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.reg}> = 5</span>
                                </p>


                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                                <br></br>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Initialize a Variable Equal to the Return</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>functionVal</span>
                                <span style={Styles.Code.reg}> = </span>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                            </div>

                        </div>

                        {/* Python */}
                        <div style={{
                            padding: 15, 
                            border: "1px solid black", borderRadius: 15, 
                            margin: "5%", width: '90%'
                        }}>
                            <h1 style={Styles.Fonts.lessonHeader}>Python</h1>
                            Python is another high level programming langauge with a rather straightforward syntax for function declaration. Similarly, its
                            <ODef 
                            text="parameters" 
                            modalContent={
                            <ODefContnet 
                                color= "#11Df9f"
                                word="Declaration" 
                                definition= "Functions are responsible for changing the value of variables that are at your disposal. Generally, when you execute or 'do' a function, you as the developer will need to tell the function which variables it will be changing or working with. These provided variables are the parameters"                            />} 
                            /> have no specified data types either. 

                            <div style={{...Styles.Sections.simpleLessonCode, width: '90%'}}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}># Declare the Function </span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>def </span>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>num</span>
                                <span style={Styles.Code.keyword}>{") :"}</span>
                                </p>

                                <p style={{...Styles.Code.code, marginLeft: 20}}>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>+ 1 </span>
                                </p>

                                <p style={{...Styles.Code.code, marginLeft: 20}}>
                                <span style={Styles.Code.keyword}>return </span>
                                <span style={Styles.Code.var}>num </span>
                                </p>

                            </div>

                            Here, <span style={Styles.Code.keyword}>def </span> is the key word we use to tell the computer
                            that we are beginning a function declaration. We then enter the name of the function, which in our case is
                            <span style={Styles.Code.func}> increaseValueByOne</span>. The function takes <strong>one parameter </strong>
                            and inside that function, it will be referred to as <span style={Styles.Code.var}>num</span>. Python differs from 
                            the vast majority of programming languages in that it does NOT use curly brackets to indicate scope, or what's inside of 
                            a function vs outside of it. Rather, it uses a colon : and indentations. This means every line that is 1 tab indented after the 
                            colon is a part of the function.

                            <p>
                            Once the function begins, it takes the parameter, which is referred to as <span style={Styles.Code.var}>num</span>, and 
                            makes its value one plus itself. (More simply put, it increases the value of num by one). Then, the function will 
                            <ODef 
                            text="return" 
                            modalContent={
                            <ODefContnet 
                                color= "#11Df9f"
                                word="Return Statement" 
                                definition="In most cases, a function will have a return statement. This statement tells the function to stop running itself and spit out the following value. For example, a function that takes a number as a parameter and adds 1 to it would return a new number. If 2 was the parameter, the return vaue of the addOne() function would be 3. Higher Level programming langauges do not necesarily always need a return statement, but lower level ones like C# and Java usually will. These lower level anguages also need the data type of t=its return value specified ahead of time."                            
                            />} 
                            /> the new value
                            </p>

                            <div style={{...Styles.Sections.simpleLessonCode, width: '95%'}}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Call (or Run) the Function on a Value</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.reg}>1</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                                <br></br>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Call (or Run) the Function on a Variable</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.reg}> = 5</span>
                                </p>


                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                                <br></br>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Initialize a Variable Equal to the Return</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>functionVal</span>
                                <span style={Styles.Code.reg}> = </span>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                            </div>

                        </div>

                        {/* Java */}
                        <div style={{
                            padding: 15, 
                            border: "1px solid black", borderRadius: 15, 
                            margin: "5%", width: '90%'
                        }}>
                            <h1 style={Styles.Fonts.lessonHeader}>Java and C#</h1>
                           Java and C# are  lower level programming languages, and as such more needs to be explicitly declared when creating a function. The
                           main difference is the data type of the 
                           <ODef 
                            text="return value" 
                            modalContent={
                            <ODefContnet 
                                color= "#11Df9f"
                                word="Return Statement" 
                                definition="In most cases, a function will have a return statement. This statement tells the function to stop running itself and spit out the following value. For example, a function that takes a number as a parameter and adds 1 to it would return a new number. If 2 was the parameter, the return vaue of the addOne() function would be 3. Higher Level programming langauges do not necesarily always need a return statement, but lower level ones like C# and Java usually will. These lower level anguages also need the data type of t=its return value specified ahead of time."                            
                            />} 
                            /> must be declared at the start of the function declaration. This means a function like AddOne() would need to specifiy that it is returning an integer. Additionally, 
                            you will need to prvoide data types for each (or any) of the 
                            <ODef 
                            text="parameters" 
                            modalContent={
                            <ODefContnet 
                                color= "#11Df9f"
                                word="Declaration" 
                                definition= "Functions are responsible for changing the value of variables that are at your disposal. Generally, when you execute or 'do' a function, you as the developer will need to tell the function which variables it will be changing or working with. These provided variables are the parameters"                            />} 
                            /> provided into the function as well. 

                            <div style={{...Styles.Sections.simpleLessonCode, width: '90%'}}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Declare the Function </span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>public static int </span>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.keyword}>int </span>
                                <span style={Styles.Code.var}>num</span>
                                <span style={Styles.Code.keyword}>{") {"}</span>
                                </p>

                                <p style={{...Styles.Code.code, marginLeft: 20}}>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>num </span>
                                <span style={Styles.Code.reg}>+ 1;</span>
                                </p>

                                <p style={{...Styles.Code.code, marginLeft: 20}}>
                                <span style={Styles.Code.keyword}>return </span>
                                <span style={Styles.Code.var}>num</span>
                                <span style={Styles.Code.reg}>;</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                </p>
                            </div>

                            Here we do not just have a keyword as simple as <strong>function.</strong> Instead, we denote the beginning of a function 
                            declaration by stating whethere the function is <span style={Styles.Code.keyword}>public (or private) </span>, followed by 
                            <span style={Styles.Code.keyword}>static (or dynamic) </span>. Finally, the function declaration needs to specify the 
                            <span style={Styles.Code.keyword}> data type of the return value (int, in this case)</span> declaration. We then enter 
                            the name of the function, which in our case is<span style={Styles.Code.func}> increaseValueByOne</span>. The function takes <strong>one parameter </strong>
                            and inside that function, it will be referred to as <span style={Styles.Code.var}>num</span> that is of data type 
                            <span style={Styles.Code.keyword}> int</span>. Everything inside the function is encased by curly brackets  {"{  }"}.
                            <p>

                            Once the function begins, it takes the parameter, which is referred to as <span style={Styles.Code.var}>num</span>, and 
                            makes its value one plus itself. (More simply put, it increases the value of num by one). Then, the function will 
                            <ODef 
                            text="return" 
                            modalContent={
                            <ODefContnet 
                                color= "#11Df9f"
                                word="Return Statement" 
                                definition="In most cases, a function will have a return statement. This statement tells the function to stop running itself and spit out the following value. For example, a function that takes a number as a parameter and adds 1 to it would return a new number. If 2 was the parameter, the return vaue of the addOne() function would be 3. Higher Level programming langauges do not necesarily always need a return statement, but lower level ones like C# and Java usually will. These lower level anguages also need the data type of t=its return value specified ahead of time."                            
                            />} 
                            /> the new value.
                            </p>

                            <div style={{...Styles.Sections.simpleLessonCode, width: '95%'}}>
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Call (or Run) the Function on a Value</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.reg}>1</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                                <br></br>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Call (or Run) the Function on a Variable</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.reg}> = 5</span>
                                </p>


                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                                <br></br>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.comment}>// Initialize a Variable Equal to the Return</span>
                                </p>

                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>functionVal</span>
                                <span style={Styles.Code.reg}> = </span>
                                <span style={Styles.Code.func}>increaseValueByOne</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>testVal</span>
                                <span style={Styles.Code.keyword}>{")"}</span>
                                </p>

                            </div>

                        </div>

                </div>
            </div>
            )
        }

        function renderThird(){
            return(
                <div style={{...Styles.Fonts.basic, marginTop: 25}}>
                    <div style={Styles.Fonts.lessonHeader}>Functions, Variables, and Scope</div>
                    <p>
                        As previously mentioned, Programming Languages are just different ways developers can communicate with the computer, and in all of these languages
                        <strong> Variables are the nouns and Functions are the verbs</strong>. In the vast majority of cases, whenever a value is changed, updated, created, 
                        deleted, or otherwise manipulated it will be because of a function. 
                    </p>
                </div>
            )
        }

        
    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{...Styles.Sections.lessonContent, marginTop: '3.2%'}}>
                {renderTitle("Functions")}
                {renderFirst()}
                <CodeSnippet
                    js={renderJS()}
                    java={renderJava()}
                    cs={renderCs()}
                    py={renderPython()}
                />
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
            current={"Functions"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default VariablesLesson