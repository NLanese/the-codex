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
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import {
    Callout, Recap, SectionHeader, LessonCode, TryIt,
    ConceptCard, CardRow, KeyTerms, CheckYourUnderstanding, lessonText, sideBySide
} from "../../../../components/LessonParts/lessonParts";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


/////////////////
// Definitions //
/////////////////

const parametersDefinition = "The values you hand to a function when you call it, so it has something to work with. Inside the function, each one is used like a variable. In increaseValueByOne(num), num is the parameter."
const returnDefinition = "A return statement stops the function and sends a value back to the code that called it. A function that adds 1 to its parameter would return the new number: give it 2 and it returns 3. Java and C# also make you state the data type of the returned value ahead of time."


///////////////////
// Code Examples //
///////////////////

const FULL_CODE = {
    JavaScript: `
        // Declare the function
        function increaseValueByOne(num) {
            num = num + 1
            return num
        }

        // Call it, and store what it returns
        let testValue = 1
        let functionReturnValue = increaseValueByOne(testValue)

        console.log(functionReturnValue)
        // The terminal would show: 2
    `,
    Java: `
        // Declare the function. Java also needs the return value's data type (int)
        public static int increaseValueByOne(int num) {
            num = num + 1;
            return num;
        }

        // Call it, and store what it returns
        int testValue = 1;
        int functionReturnValue = increaseValueByOne(testValue);

        System.out.println(functionReturnValue);
        // The terminal would show: 2
    `,
    "C#": `
        // Declare the function. C# also needs the return value's data type (int)
        public static int IncreaseValueByOne(int num) {
            num = num + 1;
            return num;
        }

        // Call it, and store what it returns
        int testValue = 1;
        int functionReturnValue = IncreaseValueByOne(testValue);

        Console.WriteLine(functionReturnValue);
        // The terminal would show: 2
    `,
    Python: `
        # Declare the function
        def increaseValueByOne(num):
            num = num + 1
            return num

        # Call it, and store what it returns
        testValue = 1
        functionReturnValue = increaseValueByOne(testValue)

        print(functionReturnValue)
        # The terminal would show: 2
    `,
}

const DECLARE_CODE = {
    JavaScript: `
        function increaseValueByOne(num) {
            num = num + 1
            return num
        }
    `,
    Java: `
        public static int increaseValueByOne(int num) {
            num = num + 1;
            return num;
        }
    `,
    "C#": `
        public static int IncreaseValueByOne(int num) {
            num = num + 1;
            return num;
        }
    `,
    Python: `
        def increaseValueByOne(num):
            num = num + 1
            return num
    `,
}

const CALL_CODE = {
    JavaScript: `
        // Call (or run) the function on a value
        increaseValueByOne(1)

        // Call it on a variable
        let testVal = 5
        increaseValueByOne(testVal)

        // Store what it returns in a new variable
        let functionVal = increaseValueByOne(testVal)    // 6
    `,
    Java: `
        // Call (or run) the function on a value
        increaseValueByOne(1);

        // Call it on a variable
        int testVal = 5;
        increaseValueByOne(testVal);

        // Store what it returns in a new variable
        int functionVal = increaseValueByOne(testVal);    // 6
    `,
    "C#": `
        // Call (or run) the function on a value
        IncreaseValueByOne(1);

        // Call it on a variable
        int testVal = 5;
        IncreaseValueByOne(testVal);

        // Store what it returns in a new variable
        int functionVal = IncreaseValueByOne(testVal);    // 6
    `,
    Python: `
        # Call (or run) the function on a value
        increaseValueByOne(1)

        # Call it on a variable
        testVal = 5
        increaseValueByOne(testVal)

        # Store what it returns in a new variable
        functionVal = increaseValueByOne(testVal)    # 6
    `,
}

const SCOPE_CODE = {
    JavaScript: `
        function increaseValueByOne(num) {
            let bonus = 1
            num = num + bonus
            return num
        }

        let testValue = 1
        let result = increaseValueByOne(testValue)

        console.log(result)       // 2
        console.log(testValue)    // 1   the original is untouched
        console.log(bonus)        // ERROR: bonus only exists inside the function
    `,
    Java: `
        public static int increaseValueByOne(int num) {
            int bonus = 1;
            num = num + bonus;
            return num;
        }

        int testValue = 1;
        int result = increaseValueByOne(testValue);

        System.out.println(result);       // 2
        System.out.println(testValue);    // 1   the original is untouched
        System.out.println(bonus);        // ERROR: bonus only exists inside the function
    `,
    "C#": `
        public static int IncreaseValueByOne(int num) {
            int bonus = 1;
            num = num + bonus;
            return num;
        }

        int testValue = 1;
        int result = IncreaseValueByOne(testValue);

        Console.WriteLine(result);       // 2
        Console.WriteLine(testValue);    // 1   the original is untouched
        Console.WriteLine(bonus);        // ERROR: bonus only exists inside the function
    `,
    Python: `
        def increaseValueByOne(num):
            bonus = 1
            num = num + bonus
            return num

        testValue = 1
        result = increaseValueByOne(testValue)

        print(result)       # 2
        print(testValue)    # 1   the original is untouched
        print(bonus)        # NameError: bonus only exists inside the function
    `,
}


const FunctionsLesson = ({}) => {

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

    //////////////////////
    // Lesson Rendering //
    //////////////////////

        function renderParamDef(text = "parameters"){
            return(
                <ODef
                text={text}
                modalContent={
                <ODefContnet
                    color="#11Df9f"
                    word="Parameters"
                    definition={parametersDefinition}
                />}
                />
            )
        }

        function renderReturnDef(text = "return"){
            return(
                <ODef
                text={text}
                modalContent={
                <ODefContnet
                    color="#11Df9f"
                    word="Return Statement"
                    definition={returnDefinition}
                />}
                />
            )
        }

        function renderFirst(){
            return(
                <div>
                    <SectionHeader first>What are Functions?</SectionHeader>
                    <p style={lessonText}>
                        Variables hold data that can be changed, used or displayed. It is usually <strong>functions</strong> that do the changing, using and displaying.
                    </p>

                    <Callout type="key">
                        <p style={{...lessonText, marginBottom: 0}}>
                            <strong>A function is a named set of instructions.</strong> It can take values in, work with them, and send a result back out. You write it once, then run it whenever you need it.
                        </p>
                    </Callout>

                    <p style={lessonText}>
                        If code were a language, <strong>variables would be the nouns and functions would be the verbs</strong>. A few you've already used today:
                    </p>

                    <CardRow>
                        <ConceptCard title="Logging in">
                            Your username and password are variables. Pressing "Log in" runs a function that checks whether that username exists <em>and</em> the password matches.
                        </ConceptCard>
                        <ConceptCard title="Shooting in a game">
                            Each shot runs a function that lowers <strong>current_ammo</strong> by 1. Reloading runs <strong>reload_weapon</strong>, which resets it to <strong>max_ammo</strong>.
                        </ConceptCard>
                        <ConceptCard title="This very page">
                            The lesson buttons on the side hold strings like "Data Types". Clicking one runs <strong>handleLessonClick("Data Types")</strong>, which sends you to that page.
                        </ConceptCard>
                    </CardRow>

                    <p style={lessonText}>
                        Here is a whole function from start to finish: declared, called, and its result printed.
                    </p>

                    <LessonCode languages={FULL_CODE}/>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <SectionHeader>The Parts of a Function</SectionHeader>
                    <div style={sideBySide}>
                        <LessonCode languages={DECLARE_CODE} width={420} style={{margin: 0}}/>
                        <div>
                            <p style={lessonText}>
                                <strong>The name</strong>, <em>increaseValueByOne</em>, is how you'll call it later. Name functions after what they do.
                            </p>
                            <p style={lessonText}>
                                <strong>The {renderParamDef()}</strong> go in the parentheses. Here there is one, <em>num</em>, which works like a variable inside the function.
                            </p>
                            <p style={{...lessonText, marginBottom: 0}}>
                                <strong>The body</strong> is the instructions. It ends by using <strong>{renderReturnDef()}</strong> to send the new value back.
                            </p>
                        </div>
                    </div>

                    <Callout type="example" title="Reading the tabs">
                        <ul style={{margin: 0, paddingLeft: 22}}>
                            <li style={{...lessonText, marginBottom: 6}}>
                                <strong>JavaScript</strong> starts with the keyword <span style={{color: Styles.Code.keyword.color}}>function</span>. Parameters have no data types, and curly brackets {"{ }"} wrap the body.
                            </li>
                            <li style={{...lessonText, marginBottom: 6}}>
                                <strong>Python</strong> uses <span style={{color: Styles.Code.keyword.color}}>def</span>. Instead of curly brackets, it uses a colon and <strong>indentation</strong>: every indented line after the colon is part of the function.
                            </li>
                            <li style={{...lessonText, marginBottom: 0}}>
                                <strong>Java and C#</strong> need more detail up front: <span style={{color: Styles.Code.keyword.color}}>public static</span> (covered in a later lesson), the data type the function returns (<span style={{color: Styles.Code.keyword.color}}>int</span>), and a data type for each parameter.
                            </li>
                        </ul>
                    </Callout>

                    <p style={lessonText}>
                        Unlike a variable, a function can't be
                        <ODef
                        text="declared"
                        modalContent={
                        <ODefContnet
                            color="#88fc23"
                            word="Declaration"
                            definition="Just like variables, functions must be declared before they can be used. Unlike variables, a function is declared and filled in at the same time: you name it and write its instructions in one go."
                        />}
                        />
                        empty and filled in later. You name it and write its instructions in one go.
                    </p>
                </div>
            )
        }

        function renderThird(){
            return(
                <div>
                    <SectionHeader>Calling a Function</SectionHeader>
                    <p style={lessonText}>
                        Declaring a function only <em>defines</em> it. Nothing happens until you <strong>call</strong> it: write its name, followed by parentheses holding the values to work with.
                    </p>

                    <LessonCode languages={CALL_CODE}/>

                    <Callout type="watch" title="A return value is easy to lose">
                        <p style={{...lessonText, marginBottom: 0}}>
                            The first two calls above run the function, but throw the result away because nothing stores it. To keep what a function returns, assign it to a variable, like the last line does.
                        </p>
                    </Callout>

                    <TryIt
                        title="Write your own function"
                        starter={`// Finish this function so it returns the number times 2\nfunction double(num) {\n    \n}\n\nconsole.log(double(4))\nconsole.log(double(21))`}
                        expectedOutput={"8\n42"}
                        correctMessage="Great! Your function works for any number you give it."
                        minLines={8}
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Fill in the body of <strong>double</strong> so it returns its parameter times 2. Hint: you'll need <strong>return</strong> and the <strong>*</strong> operator.
                        </p>
                    </TryIt>
                </div>
            )
        }

        function renderFourth(){
            return(
                <div>
                    <SectionHeader>Functions, Variables, and Scope</SectionHeader>
                    <p style={lessonText}>
                        A function is like a little room. Variables created inside it only exist inside it, and disappear when it finishes. Where a variable can be used is called its
                        <ODef
                        text="scope"
                        modalContent={
                        <ODefContnet
                            color="#88fc23"
                            word="Scope"
                            definition="The part of the code where a variable exists and can be used. A variable created inside a function has that function as its scope, so code outside can't see it."
                        />}
                        />
                        .
                    </p>

                    <LessonCode languages={SCOPE_CODE}/>

                    <CardRow>
                        <ConceptCard title="Inside stays inside">
                            <strong>bonus</strong> was created in the function, so the code outside can't use it.
                        </ConceptCard>
                        <ConceptCard title="The original is safe">
                            The function changed <strong>num</strong>, its own copy, so <strong>testValue</strong> is still 1. The only way out is the return value.
                        </ConceptCard>
                    </CardRow>

                    <TryIt
                        title="See it for yourself"
                        starter={`function increaseValueByOne(num) {\n    num = num + 1\n    return num\n}\n\nlet testValue = 1\nlet result = increaseValueByOne(testValue)\n\nconsole.log(result)\nconsole.log(testValue)`}
                        expectedOutput={"2\n1"}
                        correctMessage="Right: the function returned 2, and testValue stayed 1."
                        minLines={10}
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Run it and confirm testValue doesn't change. Then try adding <strong>console.log(num)</strong> at the very end and see what error you get.
                        </p>
                    </TryIt>
                </div>
            )
        }

        function renderWrapUp(){
            return(
                <div>
                    <KeyTerms
                        terms={[
                            {term: "Function", definition: "A named set of instructions you can run whenever you need it."},
                            {term: "Parameter", definition: "A value handed to a function, used like a variable inside it."},
                            {term: "Return", definition: "Sends a value back out of the function to the code that called it."},
                            {term: "Calling", definition: "Running a function, by writing its name followed by parentheses."},
                            {term: "Scope", definition: "Where a variable exists. Variables made inside a function stay inside it."},
                        ]}
                    />

                    <Recap
                        points={[
                            "A function is a named set of instructions: variables are the nouns, functions are the verbs.",
                            "Parameters are the values you give it. return sends a result back out.",
                            "Declaring a function defines it. Calling it, name plus parentheses, actually runs it.",
                            "Store the return value in a variable if you want to keep it.",
                            "Variables created inside a function only exist inside it.",
                        ]}
                    />

                    <CheckYourUnderstanding
                        questions={[
                            {
                                question: "In  function greet(name) { ... } , what is name?",
                                options: ["The function's name", "A parameter", "The return value"],
                                answer: "A parameter",
                            },
                            {
                                question: "What does a return statement do?",
                                options: ["Runs the function again", "Sends a value back to the code that called the function", "Prints a value to the terminal"],
                                answer: "Sends a value back to the code that called the function",
                            },
                            {
                                question: "Given the function increaseValueByOne from this lesson, what is  increaseValueByOne(9) ?",
                                options: ["9", "10", "91", "An error"],
                                answer: "10",
                            },
                            {
                                question: "You declared a function but nothing happened when the program ran. What is the most likely reason?",
                                options: ["You never called it", "It has no parameters", "Functions only run in Python"],
                                answer: "You never called it",
                            },
                            {
                                question: "A variable is created inside a function. Can code outside the function use it?",
                                options: ["Yes, always", "No, it only exists inside the function"],
                                answer: "No, it only exists inside the function",
                            },
                        ]}
                    />
                </div>
            )
        }


    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{...Styles.Sections.lessonContent, marginTop: '3.2%', paddingBottom: 40}}>
                {renderTitle("Functions")}
                {renderFirst()}
                {renderSecond()}
                {renderThird()}
                {renderFourth()}
                {renderWrapUp()}
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

export default FunctionsLesson
