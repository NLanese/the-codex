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
    Callout, Recap, NextLesson, SectionHeader, LessonCode, TryIt,
    ConceptCard, CardRow, KeyTerms, CheckYourUnderstanding, lessonText, sideBySide
} from "../../../../components/LessonParts/lessonParts";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


///////////////////
// Code Examples //
///////////////////

const MATH_CODE = {
    JavaScript: `
        let x = 6
        let y = 2

        let sum = x + y         // 8
        let difference = x - y  // 4
        let product = x * y     // 12
        let quotient = x / y    // 3
    `,
    Java: `
        int x = 6;
        int y = 2;

        int sum = x + y;         // 8
        int difference = x - y;  // 4
        int product = x * y;     // 12
        int quotient = x / y;    // 3
    `,
    "C#": `
        int x = 6;
        int y = 2;

        int sum = x + y;         // 8
        int difference = x - y;  // 4
        int product = x * y;     // 12
        int quotient = x / y;    // 3
    `,
    Python: `
        x = 6
        y = 2

        total = x + y       # 8
        difference = x - y  # 4
        product = x * y     # 12
        quotient = x / y    # 3.0
    `,
}

const DIVISION_CODE = {
    JavaScript: `
        console.log(7 / 2)   // 3.5
    `,
    Java: `
        System.out.println(7 / 2);     // 3   (both are ints, so the .5 is dropped)
        System.out.println(7.0 / 2);   // 3.5
    `,
    "C#": `
        Console.WriteLine(7 / 2);     // 3   (both are ints, so the .5 is dropped)
        Console.WriteLine(7.0 / 2);   // 3.5
    `,
    Python: `
        print(7 / 2)    # 3.5
        print(7 // 2)   # 3   (// is Python's "whole number" division)
    `,
}

const SHORTCUT_CODE = {
    JavaScript: `
        let score = 10

        score += 5    // same as score = score + 5  → 15
        score -= 3    // same as score = score - 3  → 12
        score *= 2    // same as score = score * 2  → 24
        score++       // same as score = score + 1  → 25
    `,
    Java: `
        int score = 10;

        score += 5;    // same as score = score + 5  → 15
        score -= 3;    // same as score = score - 3  → 12
        score *= 2;    // same as score = score * 2  → 24
        score++;       // same as score = score + 1  → 25
    `,
    "C#": `
        int score = 10;

        score += 5;    // same as score = score + 5  → 15
        score -= 3;    // same as score = score - 3  → 12
        score *= 2;    // same as score = score * 2  → 24
        score++;       // same as score = score + 1  → 25
    `,
    Python: `
        score = 10

        score += 5    # same as score = score + 5  → 15
        score -= 3    # same as score = score - 3  → 12
        score *= 2    # same as score = score * 2  → 24
        score += 1    # Python has no ++, so we add 1 → 25
    `,
}

const COMPARE_CODE = {
    JavaScript: `
        let age = 16

        age > 18      // false
        age < 18      // true
        age >= 16     // true
        age <= 15     // false
        age === 16    // true   (is equal to)
        age !== 16    // false  (is NOT equal to)
    `,
    Java: `
        int age = 16;

        age > 18      // false
        age < 18      // true
        age >= 16     // true
        age <= 15     // false
        age == 16     // true   (is equal to)
        age != 16     // false  (is NOT equal to)
    `,
    "C#": `
        int age = 16;

        age > 18      // false
        age < 18      // true
        age >= 16     // true
        age <= 15     // false
        age == 16     // true   (is equal to)
        age != 16     // false  (is NOT equal to)
    `,
    Python: `
        age = 16

        age > 18      # False
        age < 18      # True
        age >= 16     # True
        age <= 15     # False
        age == 16     # True   (is equal to)
        age != 16     # False  (is NOT equal to)
    `,
}

const LOGIC_CODE = {
    JavaScript: `
        let hasTicket = true
        let age = 16

        hasTicket && age >= 18   // false  (AND: both must be true)
        hasTicket || age >= 18   // true   (OR: at least one is true)
        !hasTicket               // false  (NOT: flips true and false)
    `,
    Java: `
        boolean hasTicket = true;
        int age = 16;

        hasTicket && age >= 18   // false  (AND: both must be true)
        hasTicket || age >= 18   // true   (OR: at least one is true)
        !hasTicket               // false  (NOT: flips true and false)
    `,
    "C#": `
        bool hasTicket = true;
        int age = 16;

        hasTicket && age >= 18   // false  (AND: both must be true)
        hasTicket || age >= 18   // true   (OR: at least one is true)
        !hasTicket               // false  (NOT: flips true and false)
    `,
    Python: `
        hasTicket = True
        age = 16

        hasTicket and age >= 18   # False  (AND: both must be true)
        hasTicket or age >= 18    # True   (OR: at least one is true)
        not hasTicket             # False  (NOT: flips True and False)
    `,
}


const OperatorsLesson = ({}) => {

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

        function renderFirst(){
            return(
                <div>
                    <SectionHeader first>What are Operators?</SectionHeader>
                    <p style={lessonText}>
                        Variables hold values. Operators are how you <em>do</em> something with those values: add them, compare them, or combine them.
                    </p>

                    <Callout type="key">
                        <p style={{...lessonText, marginBottom: 0}}>
                            <strong>An operator is a symbol that takes one or more values and produces a new value.</strong> In <strong>6 + 2</strong>, the + is the operator and 8 is the result.
                        </p>
                    </Callout>

                    <p style={lessonText}>
                        You already know most of them from math class. There are four families worth learning now:
                    </p>

                    <CardRow>
                        <ConceptCard title="Math" code={`x + y   x * y   x % y`}>
                            Work out a new number.
                        </ConceptCard>
                        <ConceptCard title="Shortcuts" code={`score += 5`}>
                            Change a variable using its own value.
                        </ConceptCard>
                        <ConceptCard title="Comparison" code={`age >= 18`}>
                            Ask a question. The answer is always true or false.
                        </ConceptCard>
                        <ConceptCard title="Logic" code={`a && b   !a`}>
                            Combine several true / false answers into one.
                        </ConceptCard>
                    </CardRow>
                </div>
            )
        }

        function renderMath(){
            return(
                <div>
                    <SectionHeader>Math Operators</SectionHeader>
                    <p style={lessonText}>
                        The four you know from math, <strong>+ - * /</strong>, work the same way in every language. Note that code uses <strong>*</strong> for multiply and <strong>/</strong> for divide.
                    </p>

                    <LessonCode languages={MATH_CODE}/>

                    <p style={lessonText}>
                        Notice the right side of each line is worked out first, and the result is stored in the new variable. That is the same "store" behavior of <strong>=</strong> from the Variables lesson.
                    </p>

                    <Callout type="watch" title="Dividing whole numbers">
                        <p style={lessonText}>
                            Division is the one place the languages disagree. When both numbers are whole numbers
                            (
                            <ODef
                            text="ints"
                            modalContent={
                            <ODefContnet
                                color="#a3fc2d"
                                word="Integer (int)"
                                definition="A whole number with no decimal point, like 7, 0 or -42. Data types like this one get their own lesson next."
                                />}
                            />
                            ), Java and C# throw away the decimal part instead of rounding.
                        </p>
                        <LessonCode languages={DIVISION_CODE} style={{margin: '0 0 4px 0'}}/>
                    </Callout>

                    <div style={{...Styles.Fonts.h3, marginTop: 30, marginBottom: 8}}>The Modulo Operator: %</div>
                    <div style={sideBySide}>
                        <LessonCode
                            compact
                            code={`
                                13 % 5    // 3
                                10 % 2    // 0
                                7 % 2     // 1
                            `}
                            width={230}
                        />
                        <p style={{...lessonText, marginBottom: 0}}>
                            The <strong>%</strong> sign is called <strong>modulo</strong>, and it gives you the <strong>remainder</strong> after dividing.
                            5 goes into 13 twice (that's 10), with <strong>3</strong> left over, so 13 % 5 is 3.
                        </p>
                    </div>

                    <p style={lessonText}>
                        It sounds niche, but you will use it constantly. The most common trick: a number is <strong>even</strong> when <strong>number % 2</strong> is 0,
                        because even numbers divide by 2 with nothing left over. You will use exactly that check in the Conditionals lesson.
                    </p>

                    <TryIt
                        title="Find the remainder"
                        starter={`// What is left over when you share 17 cookies between 5 people?\nlet cookies = 17\nlet people = 5\n\nconsole.log(cookies % people)`}
                        expectedOutput="2"
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Press <strong>Run</strong> to see what modulo gives you. Then change the numbers and predict the answer before you run it again.
                        </p>
                    </TryIt>
                </div>
            )
        }

        function renderShortcuts(){
            return(
                <div>
                    <SectionHeader>Shortcut Operators</SectionHeader>
                    <p style={lessonText}>
                        In the last lesson you wrote <strong>score = score + 1</strong> to raise a score. Updating a variable using its own value is so common that every language has a shorter way to write it.
                    </p>

                    <LessonCode languages={SHORTCUT_CODE}/>

                    <p style={lessonText}>
                        <strong>+=</strong> means "add this to what is already there." The same pattern works with <strong>-=</strong>, <strong>*=</strong> and <strong>/=</strong>.
                        JavaScript, Java and C# also have <strong>++</strong> and <strong>--</strong> to add or subtract exactly 1. Python leaves those out, so you write <strong>+= 1</strong> instead.
                    </p>
                </div>
            )
        }

        function renderComparison(){
            return(
                <div>
                    <SectionHeader>Comparison Operators</SectionHeader>
                    <p style={lessonText}>
                        Comparison operators ask a yes-or-no question about two values. The answer is always a
                        <ODef
                        text="boolean"
                        modalContent={
                        <ODefContnet
                            color="#a3fc2d"
                            word="Boolean"
                            definition="A value that can only be true or false. Every comparison produces one."
                            />}
                        />
                        : <strong>true</strong> or <strong>false</strong>.
                    </p>

                    <LessonCode languages={COMPARE_CODE}/>

                    <Callout type="watch" title="= is not ==">
                        <p style={lessonText}>
                            Remember from the Variables lesson: a single <strong>=</strong> <em>stores</em> a value. To <em>ask</em> whether two values are equal, you use <strong>==</strong>.
                            Mixing these up is one of the most common beginner bugs.
                        </p>
                        <p style={{...lessonText, marginBottom: 0}}>
                            JavaScript adds one twist: use <strong>===</strong> (three signs). The two-sign version tries to convert values first, so <strong>5 == "5"</strong> is true in JavaScript, which is rarely what you want.
                        </p>
                    </Callout>

                    <p style={lessonText}>
                        On their own, true and false don't do much. Their power comes in the Conditionals lesson, where code uses them to decide what to do next:
                        <em> if</em> the age is at least 18, show the page.
                    </p>
                </div>
            )
        }

        function renderLogic(){
            return(
                <div>
                    <SectionHeader>Logical Operators</SectionHeader>
                    <p style={lessonText}>
                        Sometimes one question isn't enough. "Can this person enter?" might depend on having a ticket <em>and</em> being old enough.
                        Logical operators combine true and false values.
                    </p>

                    <LessonCode languages={LOGIC_CODE}/>

                    <CardRow>
                        <ConceptCard title="AND">
                            <strong>&&</strong> (Python: <strong>and</strong>) is true only when <em>both</em> sides are true.
                        </ConceptCard>
                        <ConceptCard title="OR">
                            <strong>||</strong> (Python: <strong>or</strong>) is true when <em>at least one</em> side is true.
                        </ConceptCard>
                        <ConceptCard title="NOT">
                            <strong>!</strong> (Python: <strong>not</strong>) flips a value: true becomes false.
                        </ConceptCard>
                    </CardRow>

                    <Callout type="key" title="Order of operations">
                        <p style={{...lessonText, marginBottom: 0}}>
                            Code follows the same order as math: <strong>* / %</strong> happen before <strong>+ -</strong>. So <strong>2 + 3 * 4</strong> is 14, not 20.
                            When in doubt, add parentheses: <strong>(2 + 3) * 4</strong> is 20, and it is easier for the next person to read.
                        </p>
                    </Callout>

                    <TryIt
                        title="Predict, then run"
                        starter={`console.log(2 + 3 * 4)\nconsole.log((2 + 3) * 4)\nconsole.log(10 > 3 && 2 > 5)`}
                        expectedOutput={"14\n20\nfalse"}
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Before pressing Run, write down what you think each line will print.
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
                            {term: "Operator", definition: "A symbol that takes values and produces a new value, like + or >."},
                            {term: "Modulo (%)", definition: "Gives the remainder after division. 13 % 5 is 3."},
                            {term: "Comparison", definition: "An operator that asks a question and answers true or false, like >= or ==."},
                            {term: "Logical operator", definition: "Combines true / false values: AND (&&), OR (||) and NOT (!)."},
                        ]}
                    />

                    <Recap
                        points={[
                            "Math operators (+ - * /) work out a new number. Java and C# drop the decimal when dividing two ints.",
                            "Modulo (%) gives the remainder, and number % 2 == 0 means the number is even.",
                            "Shortcuts like += and ++ update a variable using its own value.",
                            "Comparisons (> < >= <= == !=) always answer true or false. = stores, == compares.",
                            "Logical operators combine answers: && needs both, || needs one, ! flips it.",
                        ]}
                    />

                    <CheckYourUnderstanding
                        questions={[
                            {
                                question: "What is the value of 17 % 5?",
                                options: ["3", "2", "3.4", "12"],
                                answer: "2",
                            },
                            {
                                question: "After  let score = 4  and then  score += 3 , what is score?",
                                options: ["3", "4", "7", "43"],
                                answer: "7",
                            },
                            {
                                question: "Which expression checks whether x is equal to 10?",
                                options: ["x = 10", "x == 10", "x += 10", "x % 10"],
                                answer: "x == 10",
                            },
                            {
                                question: "What does  2 + 3 * 4  produce?",
                                options: ["20", "14", "24", "9"],
                                answer: "14",
                            },
                            {
                                question: "If hasTicket is true and age is 16, what is  hasTicket && age >= 18 ?",
                                options: ["true", "false"],
                                answer: "false",
                            },
                        ]}
                    />

                    <NextLesson lesson="Data Types" onClick={handleLessonClick}/>
                </div>
            )
        }


    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{...Styles.Sections.lessonContent, marginTop: '3.2%'}}>
                {renderTitle("Operators")}
                {renderFirst()}
                {renderMath()}
                {renderShortcuts()}
                {renderComparison()}
                {renderLogic()}
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
            current={"Operators"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default OperatorsLesson
