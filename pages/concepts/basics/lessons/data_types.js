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
    Callout, VariableBox, Recap, NextLesson, SectionHeader, LessonCode, TryIt,
    ConceptCard, CardRow, KeyTerms, CheckYourUnderstanding, lessonText
} from "../../../../components/LessonParts/lessonParts";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


///////////////////
// Code Examples //
///////////////////

const DECLARE_CODE = {
    JavaScript: `
        let age = 16            // number
        let price = 4.99        // also "number": JS has one number type
        let name = "Hank"       // string
        let isMember = true     // boolean

        age = "sixteen"         // allowed: the type can change later
    `,
    Java: `
        int age = 16;
        double price = 4.99;
        char grade = 'A';
        String name = "Hank";
        boolean isMember = true;

        age = "sixteen";        // ERROR: age was declared as an int
    `,
    "C#": `
        int age = 16;
        double price = 4.99;
        char grade = 'A';
        string name = "Hank";
        bool isMember = true;

        age = "sixteen";        // ERROR: age was declared as an int
    `,
    Python: `
        age = 16                # int
        price = 4.99            # float
        name = "Hank"           # str (string)
        isMember = True         # bool

        age = "sixteen"         # allowed: the type can change later
    `,
}

const MIXING_CODE = {
    JavaScript: `
        let num = 4
        let num2 = 5
        let txt = "4"
        let txt2 = "5"

        num + num2      // 9     numbers are added
        txt + txt2      // "45"  strings are joined end to end
        num + txt       // "44"  the number becomes a string first
        num + 1.5       // 5.5   every number is the same "number" type
    `,
    Java: `
        int num = 4;
        int num2 = 5;
        String txt = "4";
        String txt2 = "5";

        int combinedNums = num + num2;      // 9
        String combinedTxt = txt + txt2;    // "45"
        String mixed = num + txt;           // "44"  stored as a String
        int broken = num + txt;             // ERROR: a String can't go in an int
        double numberType = num + 1.5;      // 5.5   Java turns the int into a double
    `,
    "C#": `
        int num = 4;
        int num2 = 5;
        string txt = "4";
        string txt2 = "5";

        int combinedNums = num + num2;      // 9
        string combinedTxt = txt + txt2;    // "45"
        string mixed = num + txt;           // "44"  stored as a string
        int broken = num + txt;             // ERROR: a string can't go in an int
        double numberType = num + 1.5;      // 5.5
    `,
    Python: `
        num = 4
        num2 = 5
        txt = "4"
        txt2 = "5"

        num + num2      # 9
        txt + txt2      # "45"
        num + txt       # TypeError! Python won't guess what you meant
        str(num) + txt  # "44"   convert (cast) the number first
        num + 1.5       # 5.5    ints and floats mix happily
    `,
}

const CASTING_CODE = {
    JavaScript: `
        String(5)          // "5"   number → string
        Number("5")        // 5     string → number
        Number("five")     // NaN   ("Not a Number"): the text isn't a number
    `,
    Java: `
        String.valueOf(5)          // "5"   int → String
        Integer.parseInt("5")      // 5     String → int
        (int) 4.99                 // 4     double → int (the decimal is cut off)
    `,
    "C#": `
        5.ToString()           // "5"   int → string
        int.Parse("5")         // 5     string → int
        (int) 4.99             // 4     double → int (the decimal is cut off)
    `,
    Python: `
        str(5)        # "5"   int → str
        int("5")      # 5     str → int
        int(4.99)     # 4     float → int (the decimal is cut off)
    `,
}

const BOOLEAN_CODE = {
    JavaScript: `
        4 + true          // 5        true becomes 1 (false would be 0)
        true + "true"     // "truetrue"
    `,
    Java: `
        int a = 4 + true;           // ERROR: Java never treats true as 1
        String b = true + "true";   // "truetrue"  anything + a String is a String
    `,
    "C#": `
        int a = 4 + true;           // ERROR: C# never treats true as 1
        string b = true + "true";   // "Truetrue"  note the capital T
    `,
    Python: `
        4 + True          # 5   like JavaScript, True counts as 1
        True + "true"     # TypeError! use str(True) + "true" instead
    `,
}


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

    //////////////////////
    // Lesson Rendering //
    //////////////////////

        function renderFirst(){
            return(
                <div>
                    <SectionHeader first>What is a Data Type?</SectionHeader>
                    <p style={lessonText}>
                        In the Variables lesson you saw that a variable is a box holding a value. But not every value is the same <em>kind</em> of thing.
                        21 is a number, "Hank Hill" is text, and false is a yes-or-no answer.
                    </p>

                    <Callout type="key">
                        <p style={{...lessonText, marginBottom: 0}}>
                            <strong>A data type is the kind of value a variable holds.</strong> It decides what you can do with that value, and what operators like + will do to it.
                        </p>
                    </Callout>

                    <p style={lessonText}>
                        Here is why that matters. These three boxes all look like they hold a 4, but to the computer they are completely different things:
                    </p>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', margin: '24px 0 10px 0'}}>
                        <VariableBox name="num" value="4" caption="a number you can do math with"/>
                        <VariableBox name="txt" value={'"4"'} valueStyle={Styles.Code.str} caption="text that happens to be a 4"/>
                        <VariableBox name="grade" value={"'4'"} valueStyle={Styles.Code.str} caption="a single character"/>
                    </div>

                    <p style={{...lessonText, marginTop: 14}}>
                        The quotation marks are the giveaway. Anything in quotes is text, even if it is made of digits. You can't divide "4" by 2, just like you can't divide the word "four".
                    </p>
                </div>
            )
        }

        function renderTypes(){
            return(
                <div>
                    <SectionHeader>The Basic Data Types</SectionHeader>
                    <p style={lessonText}>
                        Almost every language is built on the same handful of types. The names change slightly between languages, but the ideas don't.
                    </p>

                    <CardRow>
                        <ConceptCard title="Integer (int)" code={`let lives = 3`}>
                            A <strong>whole number</strong>, with no decimal point: 3, 0, -42.
                        </ConceptCard>
                        <ConceptCard title="Double / Float" code={`let price = 4.99`}>
                            A number <strong>with a decimal point</strong>. A double holds bigger and more precise numbers than a float.
                        </ConceptCard>
                        <ConceptCard title="Boolean (bool)" code={`let isOpen = true`}>
                            Only ever <strong>true or false</strong>. Every comparison from the Operators lesson produces one.
                        </ConceptCard>
                    </CardRow>
                    <CardRow>
                        <ConceptCard title="Character (char)" code={`char grade = 'A';`} language="java">
                            <strong>One single character</strong>, like 'A', '+' or '5', usually in single quotes. Java and C# have it; JavaScript and Python just use a one-letter string.
                        </ConceptCard>
                        <ConceptCard title="String" code={`let name = "Hank"`}>
                            A <strong>series of characters in order</strong>. It's how all text is stored, from a username to this sentence.
                        </ConceptCard>
                    </CardRow>

                    <Callout type="watch" title="Numbers have limits">
                        <p style={{...lessonText, marginBottom: 0}}>
                            Types take up memory, so each one has a size limit. An <strong>int</strong> in Java and C# can't store anything above 2,147,483,647 or below -2,147,483,648.
                            A <strong>double</strong> uses twice the memory of a <strong>float</strong> (64 bits instead of 32), which lets it hold larger numbers with more decimal places.
                        </p>
                    </Callout>
                </div>
            )
        }

        function renderStrictness(){
            return(
                <div>
                    <SectionHeader>Strict and Relaxed Languages</SectionHeader>
                    <p style={lessonText}>
                        How much data types matter depends on the
                        <ODef
                        text="programming language"
                        modalContent={
                        <ODefContnet
                            color="#88fccc"
                            word="Programming Language"
                            definition="Computers only understand binary, which people can't easily read or write. Programming languages bridge that gap: each one has its own 'grammar' (called syntax) that we can write and the computer can translate. In these lessons we use JavaScript, Java, C# and Python."
                            />}
                        />
                        . Click through the tabs to compare.
                    </p>

                    <LessonCode languages={DECLARE_CODE}/>

                    <CardRow>
                        <ConceptCard title="Strict: Java and C#">
                            You state the type when you
                            <ODef
                            text="declare"
                            modalContent={
                            <ODefContnet
                                color="#88fccc"
                                word="Declaration"
                                definition="Creating a variable is called 'declaring' it. In Java and C#, the declaration includes the data type, like 'int age'."
                                />}
                            />
                            the variable (<strong>int</strong>, <strong>String</strong>...), and it can never hold a different type afterward. Mistakes are caught before the program runs.
                        </ConceptCard>
                        <ConceptCard title="Relaxed: JavaScript and Python">
                            The language works out the type from the value you give it, and the same variable can hold a number now and text later. Quicker to write, but easier to make a mix-up.
                        </ConceptCard>
                    </CardRow>
                </div>
            )
        }

        function renderMixing(){
            return(
                <div>
                    <SectionHeader>Same Operator, Different Result</SectionHeader>
                    <p style={lessonText}>
                        Remember <strong>+</strong> from the Operators lesson? What it does depends on the data types on either side of it.
                        Between two numbers, it <strong>adds</strong>. Between two strings, it <strong>joins</strong> them end to end.
                    </p>

                    <LessonCode languages={MIXING_CODE}/>

                    <Callout type="example" title="Reading the tabs">
                        <ul style={{margin: 0, paddingLeft: 22}}>
                            <li style={{...lessonText, marginBottom: 6}}>
                                <strong>JavaScript</strong> assumes that if a string is involved, you want a string, so 4 + "4" quietly becomes "44".
                            </li>
                            <li style={{...lessonText, marginBottom: 6}}>
                                <strong>Java and C#</strong> do the same joining, but you must store the result in a variable of the right type, or you get an error.
                            </li>
                            <li style={{...lessonText, marginBottom: 0}}>
                                <strong>Python</strong> refuses to guess. Adding a number to a string is an error until you convert one of them yourself.
                            </li>
                        </ul>
                    </Callout>

                    <TryIt
                        title="Add or join?"
                        starter={`console.log(4 + 5)\nconsole.log("4" + "5")\nconsole.log(4 + "5")`}
                        expectedOutput={"9\n45\n45"}
                    >
                        <p style={{...lessonText, marginBottom: 4}}>
                            Predict what each line prints, then press <strong>Run</strong>. Notice the last two print the same thing for very different reasons.
                        </p>
                    </TryIt>
                </div>
            )
        }

        function renderCasting(){
            return(
                <div>
                    <SectionHeader>Changing a Value's Type</SectionHeader>
                    <p style={lessonText}>
                        Values often arrive as the wrong type. Anything a user types into a box on a website, even their age, comes in as a string.
                        Before you can do math with it, you convert it. Telling the computer to change a value's type is called
                        <ODef
                        text="casting"
                        modalContent={
                        <ODefContnet
                            color="#a3fc2d"
                            word="Casting"
                            definition="Manually telling the computer to change the data type of a value. For example, casting the number 4 to a string gives you '4'."
                            />}
                        />
                        .
                    </p>

                    <LessonCode languages={CASTING_CODE}/>

                    <p style={lessonText}>
                        Turning a number into text always works. Going the other way only works when the text really is a number: "5" can become 5, but "five" can't.
                    </p>

                    <div style={{...Styles.Fonts.h3, marginTop: 30, marginBottom: 8}}>A strange case: booleans</div>
                    <p style={lessonText}>
                        Behind the scenes, some languages store <strong>true</strong> as 1 and <strong>false</strong> as 0, which leads to some surprising results:
                    </p>

                    <LessonCode languages={BOOLEAN_CODE}/>

                    <p style={lessonText}>
                        You won't add booleans to numbers on purpose very often, but knowing this explains some confusing bugs later.
                    </p>
                </div>
            )
        }

        function renderWrapUp(){
            return(
                <div>
                    <KeyTerms
                        terms={[
                            {term: "Data type", definition: "The kind of value a variable holds, which decides what you can do with it."},
                            {term: "Integer (int)", definition: "A whole number with no decimal point."},
                            {term: "Double / Float", definition: "A number with a decimal point. A double is bigger and more precise than a float."},
                            {term: "String", definition: "Text: a series of characters in order, written in quotes."},
                            {term: "Boolean", definition: "A value that is only ever true or false."},
                            {term: "Casting", definition: "Converting a value from one data type to another, like \"5\" into 5."},
                        ]}
                    />

                    <Recap
                        points={[
                            "A data type is the kind of value a variable holds: a whole number, a decimal, text, or true / false.",
                            "Anything in quotes is a string, even \"4\", so it behaves like text, not a number.",
                            "Java and C# make you state the type up front. JavaScript and Python work it out for you.",
                            "+ adds numbers but joins strings, and each language handles mixing them differently.",
                            "Casting converts a value to a new type, like turning a user's typed \"16\" into the number 16.",
                        ]}
                    />

                    <CheckYourUnderstanding
                        questions={[
                            {
                                question: "What data type is the value \"42\" (with the quotes)?",
                                options: ["Integer", "Double", "String", "Boolean"],
                                answer: "String",
                            },
                            {
                                question: "In JavaScript, what does  \"3\" + \"4\"  produce?",
                                options: ["7", "\"34\"", "An error"],
                                answer: "\"34\"",
                            },
                            {
                                question: "In Python, what happens with  5 + \"5\" ?",
                                options: ["10", "\"55\"", "A TypeError"],
                                answer: "A TypeError",
                            },
                            {
                                question: "Which data type should hold a price like 4.99?",
                                options: ["int", "double", "boolean", "char"],
                                answer: "double",
                            },
                            {
                                question: "A user types their age into a box, and it arrives as the string \"16\". What do you need to do before adding 1 to it?",
                                options: ["Nothing, it already works", "Cast it to a number", "Cast it to a boolean"],
                                answer: "Cast it to a number",
                            },
                        ]}
                    />

                    <NextLesson lesson="Conditionals" onClick={handleLessonClick}/>
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
                {renderTypes()}
                {renderStrictness()}
                {renderMixing()}
                {renderCasting()}
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
            current={"Data Types"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default DataTypesLesson
