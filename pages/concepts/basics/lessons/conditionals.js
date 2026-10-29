// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";

// Ostrich
import { ODef, OstCard } from "@ostrich_development/ostrich-components";
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

// Images
const pseudoImage = "/assets/lesson_images/conditionals/pseudo1.png";
const pseudoImage2 = "/assets/lesson_images/conditionals/pseudo2.png";


///////////////////
// Code Examples //
///////////////////

const SHAPE_CODE = {
    JavaScript: `
        if (condition) {
            // runs when the condition is true
        }
        else {
            // runs when the condition is false
        }
    `,
    Java: `
        if (condition) {
            // runs when the condition is true
        }
        else {
            // runs when the condition is false
        }
    `,
    "C#": `
        if (condition) {
            // runs when the condition is true
        }
        else {
            // runs when the condition is false
        }
    `,
    Python: `
        if condition:
            # runs when the condition is true
        else:
            # runs when the condition is false
    `,
}

const EVEN_ODD_CODE = {
    JavaScript: `
        let count = userInput

        if (count % 2 === 0) {
            console.log("Number is Even")
        }
        else {
            console.log("Number is Odd")
        }
    `,
    Java: `
        int count = userInput;

        if (count % 2 == 0) {
            System.out.println("Number is Even");
        }
        else {
            System.out.println("Number is Odd");
        }
    `,
    "C#": `
        int count = userInput;

        if (count % 2 == 0) {
            Console.WriteLine("Number is Even");
        }
        else {
            Console.WriteLine("Number is Odd");
        }
    `,
    Python: `
        count = userInput

        if count % 2 == 0:
            print("Number is Even")
        else:
            print("Number is Odd")
    `,
}

const HIRING_CODE = {
    JavaScript: `
        // For now, assume we already got these from the user
        let workerReviewScore = userInput.score
        let workerPriceAnHour = userInput.price

        if (workerReviewScore > 4.5) {
            if (workerPriceAnHour < 63) {
                // Hire this worker
            }
            else {
                // Pass on this worker
            }
        }
        else if (workerReviewScore > 4.2) {
            if (workerPriceAnHour < 50) {
                // Hire this worker
            }
            else {
                // Pass on this worker
            }
        }
        else {
            // Pass on this worker
        }
    `,
    Java: `
        // For now, assume we already got these from the user
        double workerReviewScore = userInputScore;
        int workerPriceAnHour = userInputPrice;

        if (workerReviewScore > 4.5) {
            if (workerPriceAnHour < 63) {
                // Hire this worker
            }
            else {
                // Pass on this worker
            }
        }
        else if (workerReviewScore > 4.2) {
            if (workerPriceAnHour < 50) {
                // Hire this worker
            }
            else {
                // Pass on this worker
            }
        }
        else {
            // Pass on this worker
        }
    `,
    "C#": `
        // For now, assume we already got these from the user
        double workerReviewScore = userInputScore;
        int workerPriceAnHour = userInputPrice;

        if (workerReviewScore > 4.5) {
            if (workerPriceAnHour < 63) {
                // Hire this worker
            }
            else {
                // Pass on this worker
            }
        }
        else if (workerReviewScore > 4.2) {
            if (workerPriceAnHour < 50) {
                // Hire this worker
            }
            else {
                // Pass on this worker
            }
        }
        else {
            // Pass on this worker
        }
    `,
    Python: `
        # For now, assume we already got these from the user
        workerReviewScore = userInput.score
        workerPriceAnHour = userInput.price

        if workerReviewScore > 4.5:
            if workerPriceAnHour < 63:
                # Hire this worker
            else:
                # Pass on this worker
        elif workerReviewScore > 4.2:
            if workerPriceAnHour < 50:
                # Hire this worker
            else:
                # Pass on this worker
        else:
            # Pass on this worker
    `,
}

const COMBINED_CODE = {
    JavaScript: `
        let topPick = workerReviewScore > 4.5 && workerPriceAnHour < 63
        let budgetPick = workerReviewScore > 4.2 && workerPriceAnHour < 50

        if (topPick || budgetPick) {
            // Hire this worker
        }
        else {
            // Pass on this worker
        }
    `,
    Java: `
        boolean topPick = workerReviewScore > 4.5 && workerPriceAnHour < 63;
        boolean budgetPick = workerReviewScore > 4.2 && workerPriceAnHour < 50;

        if (topPick || budgetPick) {
            // Hire this worker
        }
        else {
            // Pass on this worker
        }
    `,
    "C#": `
        bool topPick = workerReviewScore > 4.5 && workerPriceAnHour < 63;
        bool budgetPick = workerReviewScore > 4.2 && workerPriceAnHour < 50;

        if (topPick || budgetPick) {
            // Hire this worker
        }
        else {
            // Pass on this worker
        }
    `,
    Python: `
        topPick = workerReviewScore > 4.5 and workerPriceAnHour < 63
        budgetPick = workerReviewScore > 4.2 and workerPriceAnHour < 50

        if topPick or budgetPick:
            # Hire this worker
        else:
            # Pass on this worker
    `,
}


const ConditionalsLesson = ({}) => {

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

        function renderPseudoCard(image, alt, children){
            return(
                <OstCard
                    template={1}
                    imageSrc={image}
                    imageAlt={alt}
                    style={{...Styles.Sections.subContentBubble, padding: '18px 20px', margin: '22px 0'}}
                    imageStyle={{borderRadius: 10, maxHeight: 420}}
                    textStyle={{display: 'block', textAlign: 'left', fontSize: 'inherit', padding: '14px 6% 0 6%'}}
                >
                    {children}
                </OstCard>
            )
        }

        function renderFirst(){
            return(
                <div>
                    <SectionHeader first>What are Conditionals?</SectionHeader>
                    <p style={lessonText}>
                        Software is full of decisions. <strong>If</strong> you click "Add to Cart", the item goes in your cart.
                        <strong> If</strong> there are items in the cart, their prices are added up. <strong>If</strong> you pick express shipping, the extra cost is added.
                    </p>
                    <p style={lessonText}>
                        Code makes these decisions with
                        <ODef
                        text="conditionals"
                        modalContent={
                        <ODefContnet
                            color="#88fccc"
                            word="Conditionals"
                            definition="Code that splits into two or more paths depending on whether something is true. The 'if statement' is the most common kind."
                            />}
                        />
                        .
                    </p>

                    <Callout type="key">
                        <p style={{...lessonText, marginBottom: 0}}>
                            <strong>A conditional runs a block of code only when a condition is true.</strong> The condition is a true / false question, usually built with the comparison operators from the Operators lesson.
                        </p>
                    </Callout>

                    <div style={sideBySide}>
                        <LessonCode languages={SHAPE_CODE} width={380} style={{margin: 0}}/>
                        <div>
                            <p style={lessonText}>
                                Every if statement has the same shape. The computer checks the <strong>condition</strong> in the parentheses.
                            </p>
                            <p style={lessonText}>
                                If it is <strong>true</strong>, the code inside the first set of curly brackets runs.
                                If it is <strong>false</strong>, that code is skipped and the <strong>else</strong> block runs instead.
                            </p>
                            <p style={{...lessonText, marginBottom: 0}}>
                                The <strong>else</strong> part is optional. Without it, a false condition just means nothing happens.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <SectionHeader>From Plain English to Code</SectionHeader>
                    <p style={lessonText}>
                        Before writing a tricky piece of logic, developers often write it out in plain English first. This is called
                        <ODef
                        text="pseudocode"
                        modalContent={
                        <ODefContnet
                            color="#88fccc"
                            word="Pseudocode"
                            definition="A plain-English outline of what code should do, step by step. It isn't any real language, so it can't run, but it makes complicated logic much easier to plan."
                            />}
                        />
                        .
                    </p>

                    {renderPseudoCard(pseudoImage, "Pseudocode that takes a number and says whether it is even or odd", (
                        <p style={{...lessonText, marginBottom: 0}}>
                            This pseudocode creates a number, gives it the user's value, and then tells the user whether that value is even or odd.
                        </p>
                    ))}

                    <p style={lessonText}>
                        Here is that same plan written as real code in our four languages:
                    </p>

                    <LessonCode languages={EVEN_ODD_CODE}/>

                    <Callout type="example" title="Two familiar pieces">
                        <ul style={{margin: 0, paddingLeft: 22}}>
                            <li style={{...lessonText, marginBottom: 6}}>
                                <strong>count % 2 == 0</strong> is the even-number check from the Operators lesson: an even number has no remainder when divided by 2.
                            </li>
                            <li style={{...lessonText, marginBottom: 0}}>
                                <strong>console.log</strong>, <strong>System.out.println</strong>, <strong>Console.WriteLine</strong> and <strong>print</strong> are how each language <em>prints</em> a message. That is the whole next lesson.
                            </li>
                        </ul>
                    </Callout>

                    <p style={lessonText}>
                        Walk through it with a <strong>userInput</strong> of 6. count becomes 6, and the computer reaches the if statement. 6 % 2 is 0, so the condition is true:
                        "Number is Even" is printed, and the else block is skipped entirely.
                    </p>

                    <TryIt
                        title="Flip the result"
                        starter={`let count = 6\n\nif (count % 2 === 0) {\n    console.log("Number is Even")\n}\nelse {\n    console.log("Number is Odd")\n}`}
                        expectedOutput="Number is Odd"
                        correctMessage="Nice! You sent the code down the else path."
                        minLines={8}
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Run it once to see "Number is Even". Then change <strong>count</strong> so the code prints <strong>Number is Odd</strong> instead.
                        </p>
                    </TryIt>
                </div>
            )
        }

        function renderThird(){
            return(
                <div>
                    <SectionHeader>More than Two Paths: else if</SectionHeader>
                    <p style={lessonText}>
                        Real decisions often have more than two outcomes. Say an app helps you hire a contractor: you'll pay more for a great reviewer, but a merely good one has to be cheaper.
                    </p>

                    <LessonCode languages={HIRING_CODE}/>

                    <Callout type="think" title="Before you read on">
                        <p style={{...lessonText, marginBottom: 0}}>
                            Try to follow the code yourself. What happens to a worker with <strong>4.4 stars</strong> who charges <strong>$55 an hour</strong>?
                        </p>
                    </Callout>

                    <p style={lessonText}>
                        Here is the same logic as pseudocode. Follow it with a few different workers and see where each one ends up.
                    </p>

                    {renderPseudoCard(pseudoImage2, "Pseudocode for deciding whether to hire a worker based on review score and hourly price", (
                        <div>
                            <p style={lessonText}>
                                The new piece is <strong>else if</strong> (written <strong>elif</strong> in Python). It adds another condition to check, but only when the ones above it were false.
                            </p>
                            <p style={{...lessonText, marginBottom: 0}}>
                                So there are three top-level paths: first check if the rating is above 4.5. <strong>If not</strong>, check if it is above 4.2. <strong>If not</strong>, the else runs and we pass on the worker.
                                Our 4.4-star worker lands in the middle path, and since $55 is not under $50, we pass.
                            </p>
                        </div>
                    ))}

                    <CardRow>
                        <ConceptCard title="Only one path runs">
                            The computer checks each condition from top to bottom and runs the <strong>first</strong> block whose condition is true. Everything below it is skipped.
                        </ConceptCard>
                        <ConceptCard title="Conditionals can nest">
                            Each path above holds another if statement inside it. A decision inside a decision is completely normal.
                        </ConceptCard>
                    </CardRow>
                </div>
            )
        }

        function renderFourth(){
            return(
                <div>
                    <SectionHeader>Combining Conditions</SectionHeader>
                    <p style={lessonText}>
                        Nesting works, but it gets deep quickly. The logical operators from the Operators lesson, <strong>&&</strong> (and) and <strong>||</strong> (or), let you ask several questions at once.
                        This version makes exactly the same decisions as the nested one above:
                    </p>

                    <LessonCode languages={COMBINED_CODE}/>

                    <p style={lessonText}>
                        Neither style is "right". Nested ifs are easier to follow step by step; combined conditions are shorter. You'll see both all the time.
                    </p>

                    <TryIt
                        title="Hire or pass?"
                        starter={`let workerReviewScore = 4.7\nlet workerPriceAnHour = 49\n\nlet topPick = workerReviewScore > 4.5 && workerPriceAnHour < 63\nlet budgetPick = workerReviewScore > 4.2 && workerPriceAnHour < 50\n\nif (topPick || budgetPick) {\n    console.log("Hire")\n}\nelse {\n    console.log("Pass")\n}`}
                        minLines={11}
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Change the score and price to test the workers from the quiz below before you answer it.
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
                            {term: "Conditional", definition: "Code that only runs when a condition is true, like an if statement."},
                            {term: "Condition", definition: "The true / false question an if statement checks, like count % 2 == 0."},
                            {term: "else", definition: "The block that runs when none of the conditions above it were true."},
                            {term: "else if / elif", definition: "Adds another condition to check, only if the ones before it were false."},
                            {term: "Pseudocode", definition: "A plain-English plan of what the code should do, written before the real code."},
                        ]}
                    />

                    <Recap
                        points={[
                            "An if statement runs its block only when its condition is true.",
                            "else runs when the condition is false, and it is optional.",
                            "else if (elif in Python) adds more paths. Only the first true path runs.",
                            "Conditionals can be nested, or combined using && and ||.",
                            "Writing pseudocode first makes complicated logic much easier to get right.",
                        ]}
                    />

                    <CheckYourUnderstanding
                        title="Test your Conditionals Knowledge!"
                        questions={[
                            {
                                question: "Using the hiring code, a worker has a review score of 3.9 and charges $38 an hour. What happens?",
                                options: ["He is hired", "He is not hired"],
                                answer: "He is not hired",
                            },
                            {
                                question: "A worker has a review score of 4.7 and charges $49 an hour. What happens?",
                                options: ["He is hired", "He is not hired"],
                                answer: "He is hired",
                            },
                            {
                                question: "A worker has a review score of 4.5 and charges $63 an hour. What happens?",
                                options: ["He is hired", "He is not hired"],
                                answer: "He is not hired",
                            },
                            {
                                question: "A worker has a review score of 4.3 and charges $45 an hour. What happens?",
                                options: ["He is hired", "He is not hired"],
                                answer: "He is hired",
                            },
                            {
                                question: "In a chain of if / else if / else, how many of the blocks run?",
                                options: ["All of them", "Every block whose condition is true", "Exactly one"],
                                answer: "Exactly one",
                            },
                        ]}
                    />

                    <NextLesson lesson="Printing and Debugging" onClick={handleLessonClick}/>
                </div>
            )
        }


    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{...Styles.Sections.lessonContent, marginTop: '3.2%'}}>
                {renderTitle("Conditionals")}
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
            current={"Conditionals"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default ConditionalsLesson
