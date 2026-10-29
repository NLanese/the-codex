// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";

// Ostrich
import { ODef, OstrichButton } from "@ostrich_development/ostrich-components";
import { ODefContnet } from "../../../../constants/oDefContent";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../../jotai/atoms";

// Components and Functions
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import {
    Callout, Recap, NextLesson, SectionHeader, LessonCode, TryIt,
    ConceptCard, CardRow, KeyTerms, CheckYourUnderstanding, lessonText
} from "../../../../components/LessonParts/lessonParts";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


///////////////////
// Code Examples //
///////////////////

const PRINT_CODE = {
    JavaScript: `
        let score = 21

        console.log(score)
        // The terminal would show: 21
    `,
    Java: `
        int score = 21;

        System.out.println(score);
        // The terminal would show: 21
    `,
    "C#": `
        int score = 21;

        Console.WriteLine(score);
        // The terminal would show: 21
    `,
    Python: `
        score = 21

        print(score)
        # The terminal would show: 21
    `,
}

const LABEL_CODE = {
    JavaScript: `
        let score = 21
        let name = "Hank"

        console.log("score is", score)     // score is 21
        console.log("Player: " + name)     // Player: Hank
    `,
    Java: `
        int score = 21;
        String name = "Hank";

        System.out.println("score is " + score);   // score is 21
        System.out.println("Player: " + name);     // Player: Hank
    `,
    "C#": `
        int score = 21;
        string name = "Hank";

        Console.WriteLine("score is " + score);    // score is 21
        Console.WriteLine("Player: " + name);      // Player: Hank
    `,
    Python: `
        score = 21
        name = "Hank"

        print("score is", score)     # score is 21
        print("Player: " + name)     # Player: Hank
    `,
}

const BUG_CODE = `
    let x = 5
    let y = "5"
    let z = 50

    let total = x + y + z
    // We expected 60, but the page shows 5550. Why?
`

const DEBUG_STARTER = `let x = 5
let y = "5"
let z = 50

console.log("x is", x, typeof x)
console.log("y is", y, typeof y)
console.log("z is", z, typeof z)

let total = x + y + z
console.log(total)`

// Passes when the last printed line is 60
function checkTotal(result){
    if (result.error) return "The code stopped with an error. Check the red message above."
    const lines = result.output.trim().split("\n")
    const last = lines[lines.length - 1]
    if (last === "60") return true
    if (last === "5550") return "Still 5550. Look at what the prints say about y."
    return `Your last line printed ${last}. The total should be 60.`
}


const PrintingLesson = ({}) => {

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

    // Counts how many times the reader pressed the console button
    const [presses, setPresses] = useState(0)

    // The bug explanation stays hidden until the reader fixes it or asks for it
    const [showBugAnswer, setShowBugAnswer] = useState(false)

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

        // Prints to the browser's real console, for the "open your console" exercise
        function handleConsoleTest(){
            const next = presses + 1
            setPresses(next)
            console.log("Good job! Now look at these printed statements!")
            console.log("You have pressed the button", next, next === 1 ? "time" : "times")
        }

    //////////////////////
    // Lesson Rendering //
    //////////////////////

        function renderFirst(){
            return(
                <div>
                    <SectionHeader first>What is Printing?</SectionHeader>
                    <p style={lessonText}>
                        Variables are invisible. While a program runs, their values change in the computer's memory where you can't see them.
                        Printing is how you take a peek.
                    </p>

                    <Callout type="key">
                        <p style={{...lessonText, marginBottom: 0}}>
                            <strong>Printing shows a value in the terminal while your program runs.</strong> It is the simplest tool developers have for seeing what their code is really doing, and often the most useful.
                        </p>
                    </Callout>

                    <p style={lessonText}>
                        Every language has its own print command, but they all work the same way: you put the value you want to see inside the parentheses.
                    </p>

                    <LessonCode languages={PRINT_CODE}/>

                    <CardRow>
                        <ConceptCard title="JavaScript" code={`console.log()`}>
                            Prints to the browser's console, or the terminal.
                        </ConceptCard>
                        <ConceptCard title="Java" code={`System.out.println()`} language="java">
                            "println" is short for "print line".
                        </ConceptCard>
                        <ConceptCard title="C#" code={`Console.WriteLine()`} language="csharp">
                            Writes one line to the console.
                        </ConceptCard>
                        <ConceptCard title="Python" code={`print()`} language="python">
                            The shortest of the four.
                        </ConceptCard>
                    </CardRow>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <SectionHeader>Where Printed Values Go</SectionHeader>
                    <p style={lessonText}>
                        If you code in an editor like Visual Studio Code or Eclipse, the
                        <ODef
                        text="terminal"
                        modalContent={
                        <ODefContnet
                            color="#88fccc"
                            word="Terminal"
                            definition="A text-only window where programs print messages and errors. In code editors it usually sits along the bottom of the screen. In a web browser, the equivalent is the Console tab."
                            />}
                        />
                        sits along the bottom of the screen. Printed values and error messages show up there.
                    </p>

                    <Callout type="watch" title="Printing is not displaying">
                        <p style={{...lessonText, marginBottom: 0}}>
                            Printing is <strong>not</strong> how text gets onto a web page. Everything you're reading here is <em>rendered</em> on the page for users.
                            Printed messages are for developers only, and most users never see them.
                        </p>
                    </Callout>

                    <p style={lessonText}>
                        Websites have a terminal too. To find it, right-click anywhere on this page and choose <strong>Inspect</strong> (in Chrome, Edge or Firefox), then switch to the <strong>Console</strong> tab.
                        If that doesn't work for you, <a href="https://zapier.com/blog/inspect-element-tutorial/" target="_blank" rel="noopener noreferrer">here's a guide</a>.
                        With the console open, press the button:
                    </p>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0 10px 0'}}>
                        <OstrichButton
                            label="Click me to Test Printing"
                            onClick={handleConsoleTest}
                            style={{padding: '12px 28px', height: 'auto', minWidth: 260}}
                            labelStyle={{...Styles.Fonts.basicX}}
                        />
                        <p style={{...lessonText, fontSize: 14.5, color: '#5f656e', marginTop: 10}}>
                            {presses === 0 ? "Nothing printed yet." : `Printed ${presses * 2} lines so far. Check your console!`}
                        </p>
                    </div>

                    <p style={lessonText}>
                        The code boxes in these lessons have a console built in, so you can also see printed values right on the page.
                    </p>
                </div>
            )
        }

        function renderThird(){
            return(
                <div>
                    <SectionHeader>Printing More than One Thing</SectionHeader>
                    <p style={lessonText}>
                        A bare number in the console is easy to lose track of. It helps to print a <strong>label</strong> next to the value, so you know which variable you're looking at.
                    </p>

                    <LessonCode languages={LABEL_CODE}/>

                    <p style={lessonText}>
                        In JavaScript and Python, separating values with commas prints them with a space between. In every language you can also join a label and a value with <strong>+</strong>, just like joining strings in the Data Types lesson.
                    </p>

                    <TryIt
                        title="Print a message"
                        starter={`let name = "Hank"\nlet score = 21\n\n// Print exactly:  Hank scored 21\n`}
                        expectedOutput="Hank scored 21"
                        correctMessage="That's it! You printed a variable with a label."
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Add one line that prints <strong>Hank scored 21</strong>, using the two variables rather than typing the name and number yourself.
                        </p>
                    </TryIt>
                </div>
            )
        }

        function renderFourth(){
            return(
                <div>
                    <SectionHeader>How do we USE printing? Debugging</SectionHeader>
                    <p style={lessonText}>
                        Code rarely works perfectly the first time. Sometimes it crashes with an error. Worse, sometimes it runs fine but gives the wrong answer.
                        A mistake like that is called a
                        <ODef
                        text="bug"
                        modalContent={
                        <ODefContnet
                            color="#ffd591"
                            word="Bug"
                            definition="A mistake in code that makes it behave differently than intended. Finding and fixing bugs is called debugging."
                            />}
                        />
                        , and hunting it down is called <strong>debugging</strong>. Look at this:
                    </p>

                    <LessonCode code={BUG_CODE}/>

                    <p style={lessonText}>
                        Nothing crashed, so there's no error message to help. This is where printing comes in: print each value along the way and compare what you <em>see</em> with what you <em>expected</em>.
                        The first place they don't match is where the bug lives.
                    </p>

                    <CardRow>
                        <ConceptCard title="1. Expect">
                            Decide what each value <em>should</em> be. Here: x is 5, y is 5, z is 50.
                        </ConceptCard>
                        <ConceptCard title="2. Print">
                            Print the values just before the line that goes wrong.
                        </ConceptCard>
                        <ConceptCard title="3. Compare">
                            Find the first value that isn't what you expected.
                        </ConceptCard>
                        <ConceptCard title="4. Fix">
                            Fix it, run again, and delete the extra prints when you're done.
                        </ConceptCard>
                    </CardRow>

                    <TryIt
                        title="Squash the bug"
                        starter={DEBUG_STARTER}
                        check={checkTotal}
                        correctMessage="Bug squashed! The total is 60."
                        onResult={(result) => { if (result.isCorrect) setShowBugAnswer(true) }}
                        minLines={10}
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Press <strong>Run</strong> and read the prints. <strong>typeof</strong> is a JavaScript helper that prints a value's data type.
                            Find the variable that isn't what it looks like, fix it, and get the last line to print <strong>60</strong>.
                        </p>
                    </TryIt>

                    {showBugAnswer ? (
                        <Callout type="example" title="What happened">
                            <p style={{...lessonText, marginBottom: 0}}>
                                y was the string "5", not the number 5. JavaScript works left to right: 5 + "5" joins into the string "55", and then "55" + 50 joins into "5550".
                                Removing the quotes around 5 (or converting it with <strong>Number(y)</strong>) fixes it. One print of <strong>typeof y</strong> found a bug that staring at the code might have missed.
                            </p>
                        </Callout>
                    ) : (
                        <div style={{display: 'flex', justifyContent: 'center', margin: '6px 0 18px 0'}}>
                            <OstrichButton
                                label="Stuck? Show me what happened"
                                onClick={() => setShowBugAnswer(true)}
                                style={{padding: '8px 20px', height: 'auto', backgroundColor: '#eefaf3'}}
                                labelStyle={{...Styles.Fonts.basic}}
                            />
                        </div>
                    )}
                </div>
            )
        }

        function renderWrapUp(){
            return(
                <div>
                    <KeyTerms
                        terms={[
                            {term: "Printing", definition: "Showing a value in the terminal while the program runs, for developers to read."},
                            {term: "Terminal / Console", definition: "The text window where printed values and error messages appear."},
                            {term: "Bug", definition: "A mistake that makes code behave differently than intended."},
                            {term: "Debugging", definition: "Finding and fixing bugs, often by printing values to see where things go wrong."},
                        ]}
                    />

                    <Recap
                        points={[
                            "Printing shows a value in the terminal: console.log, System.out.println, Console.WriteLine or print.",
                            "Printed values are for developers. They don't appear on the page for users.",
                            "Print a label with the value so you know what you're looking at.",
                            "To debug, print values along the way and find the first one that doesn't match what you expected.",
                        ]}
                    />

                    <CheckYourUnderstanding
                        questions={[
                            {
                                question: "Which command prints a value in Python?",
                                options: ["console.log()", "print()", "System.out.println()", "Console.WriteLine()"],
                                answer: "print()",
                            },
                            {
                                question: "Where do printed values appear?",
                                options: ["On the web page, for users", "In the terminal or console, for developers"],
                                answer: "In the terminal or console, for developers",
                            },
                            {
                                question: "Your code runs without errors but gives the wrong answer. What is a good first step?",
                                options: ["Delete it and start over", "Print the values along the way", "Add more variables"],
                                answer: "Print the values along the way",
                            },
                            {
                                question: "In JavaScript, what does  console.log(5 + \"5\")  print?",
                                options: ["10", "55", "An error"],
                                answer: "55",
                            },
                        ]}
                    />

                    <NextLesson lesson="Functions" onClick={handleLessonClick}/>
                </div>
            )
        }


    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{...Styles.Sections.lessonContent, marginTop: '3.2%'}}>
                {renderTitle("Printing and Debugging")}
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
            current={"Printing and Debugging"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default PrintingLesson
