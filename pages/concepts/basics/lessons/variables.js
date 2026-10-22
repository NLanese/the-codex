// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
import Colors from "../../../../styles/colors";

// Ostrich
import { ODef, OstrichForm } from "@ostrich_development/ostrich-components";
import { ODefContnet } from "../../../../constants/oDefContent";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../../jotai/atoms";

// Components and Functions
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import CodeSnippet from "../../../../components/CodeSpaces/codeSnippet";
import { LessonTemplatePage } from "../../../../components/PagePrefabs/LessonTemplatePage";
import { Callout, VariableBox, Recap, NextLesson, lessonText, sideBySide } from "../../../../components/LessonParts/lessonParts";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Next JS
import { useRouter } from "next/router";


const VariablesLesson = ({}) => {

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

    ////////////////////
    // Code Rendering //
    ////////////////////

    // Language Tabs //

        function renderJavaScript(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>let </span>
                    <span style={Styles.Code.var}>isEarthFlat </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>false</span>
                    </p>
                </div>
            )
        }

        function renderJava(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>String </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>boolean </span>
                    <span style={Styles.Code.var}>isEarthFlat </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>false</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                </div>
            )
        }

        function renderCs(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>int </span>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>string </span>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill"</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.keyword}>bool </span>
                    <span style={Styles.Code.var}>isEarthFlat </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>false</span>
                    <span style={Styles.Code.reg}>;</span>
                    </p>
                </div>
            )
        }

        function renderPython(){
            return(
                <div>
                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>score </span>
                    <span style={Styles.Code.reg}>= 21</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>name </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.str}>"Hank Hill"</span>
                    </p>

                    <p style={Styles.Code.code}>
                    <span style={Styles.Code.var}>isEarthFlat </span>
                    <span style={Styles.Code.reg}>= </span>
                    <span style={Styles.Code.bool}>False</span>
                    </p>
                </div>
            )
        }

    // Small Code Blocks //

        function renderCodeBlock(lines, width = 230){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: width, minWidth: width, margin: 0}}>
                    {lines}
                </div>
            )
        }

    //////////////////////
    // Lesson Rendering //
    //////////////////////

        function renderFirst(){
            return(
                <div>
                    <div style={Styles.Fonts.lessonHeader}>What is a Variable?</div>
                    <div style={{marginTop: 16}}>
                        <p style={lessonText}>
                            Every program you have ever used is built on variables, so they are the perfect place to start.
                        </p>

                        <Callout type="key">
                            <p style={{...lessonText, marginBottom: 0}}>
                                <strong>A variable is a named container for a value.</strong> You can store a value in it, change that value, and use it later.
                            </p>
                        </Callout>

                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', margin: '24px 0 10px 0'}}>
                            <VariableBox name="score" value="21" caption="a number"/>
                            <VariableBox name="name" value={'"Hank Hill"'} valueStyle={Styles.Code.str} caption="some text"/>
                            <VariableBox name="isEarthFlat" value="false" valueStyle={Styles.Code.bool} caption="true or false"/>
                        </div>

                        <p style={{...lessonText, marginTop: 14}}>
                            You use variables constantly without noticing. The little number over the cart icon on a shopping site? That is a variable counting your items.
                            Your username, your high score, the volume slider in a game: all variables.
                        </p>

                        <div style={{...Styles.Fonts.h3, marginTop: 24, marginBottom: 6}}>What variables do</div>
                        <div style={{display: 'flex', flexDirection: 'row', gap: 14, flexWrap: 'wrap'}}>
                            {renderAbilityCard(
                                "Store",
                                <>
                                    They hold a value: a number, true or false, or some text, which code calls a
                                    <ODef
                                    text="string"
                                    modalContent={
                                    <ODefContnet
                                        color="#bef576"
                                        word="String"
                                        definition="A string is a list of characters in order. 'Hello World' is a string: an 'H', followed by an 'e', followed by an 'l', and so on."
                                        />}
                                    />
                                </>,
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>name </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.str}>"Jeff"</span>
                                </p>
                            )}
                            {renderAbilityCard(
                                "Change",
                                "Their value can be updated while the program runs, like a score going up every time a team scores.",
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.var}>score </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>score </span>
                                <span style={Styles.Code.reg}>+ 1</span>
                                </p>
                            )}
                            {renderAbilityCard(
                                "Get Used",
                                "Code can read a variable to display it, or to make decisions. In a game to 21, the app checks the score after every point.",
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>if </span>
                                <span style={Styles.Code.reg}>(</span>
                                <span style={Styles.Code.var}>score </span>
                                <span style={Styles.Code.reg}>== 21)</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )
        }

        function renderAbilityCard(title, text, code){
            return(
                <div style={{...Styles.Sections.subContentBubble, flex: 1, minWidth: 200, padding: '14px 16px', display: 'flex', flexDirection: 'column'}}>
                    <div style={{...Styles.Fonts.h3, marginBottom: 4}}>{title}</div>
                    <p style={{...lessonText, fontSize: 15.5, flex: 1}}>{text}</p>
                    <div style={{...Styles.Sections.simpleLessonCode, width: 'auto', maxWidth: 'none', margin: 0}}>
                        {code}
                    </div>
                </div>
            )
        }

        function renderSecond(){
            return(
                <div>
                    <div style={{...Styles.Fonts.lessonHeader, marginTop: 40}}>Creating a Variable</div>
                    <div style={{marginTop: 16}}>
                        <p style={lessonText}>
                            Creating a variable takes two steps: you <strong>declare</strong> it (give it a name), and you <strong>assign</strong> it (give it a value).
                        </p>

                        <div style={sideBySide}>
                            {renderCodeBlock(
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>var </span>
                                <span style={Styles.Code.var}>x</span>
                                </p>
                            )}
                            <p style={{...lessonText, marginBottom: 0}}>
                                <ODef
                                text="Declaring"
                                modalContent={
                                <ODefContnet
                                    color="#88fccc"
                                    word="Declaration"
                                    definition="Creating a variable is called 'declaring' it. Most languages use a keyword right before the name to signal this. In JavaScript, 'let x' or 'var x' both declare a variable named x."
                                    />}
                                />
                                creates the variable and gives it a name. Right now, x is an empty box.
                            </p>
                        </div>

                        <div style={sideBySide}>
                            {renderCodeBlock(
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= 4</span>
                                </p>
                            )}
                            <p style={{...lessonText, marginBottom: 0}}>
                                <strong>Assigning</strong> puts a value in the box using the <strong>=</strong> sign. Now x holds 4.
                            </p>
                        </div>

                        <div style={sideBySide}>
                            {renderCodeBlock(
                                <p style={Styles.Code.code}>
                                <span style={Styles.Code.keyword}>var </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= 4</span>
                                </p>
                            )}
                            <p style={{...lessonText, marginBottom: 0}}>
                                Most of the time, you will do <strong>both at once</strong>, on one line.
                            </p>
                        </div>

                        <p style={{...lessonText, marginTop: 24}}>
                            Every
                            <ODef
                            text="programming language"
                            modalContent={
                            <ODefContnet
                                color="#88fccc"
                                word="Programming Language"
                                definition="Computers only understand binary, which people can't easily read or write. Programming languages bridge that gap: each one has its own 'grammar' (called syntax) that we can write and the computer can translate. In these lessons we use JavaScript, Java, C# and Python."
                                />}
                            />
                            writes this a little differently. Click through the tabs below to see the same three variables from the diagram above in each language.
                        </p>
                    </div>
                </div>
            )
        }

        function renderThird(){
            return(
                <div>
                    <Callout type="example" title="Reading the tabs">
                        <ul style={{margin: 0, paddingLeft: 22}}>
                            <li style={{...lessonText, marginBottom: 6}}>
                                <strong>JavaScript</strong> starts with a <strong>keyword</strong>, <span style={{color: Styles.Code.keyword.color}}>let</span>, to announce a new variable.
                            </li>
                            <li style={{...lessonText, marginBottom: 6}}>
                                <strong>Java and C#</strong> make you state what kind of value goes in the box first: <span style={{color: Styles.Code.keyword.color}}>int</span> for whole numbers, <span style={{color: Styles.Code.keyword.color}}>String</span> for text, and so on.
                            </li>
                            <li style={{...lessonText, marginBottom: 0}}>
                                <strong>Python</strong> skips all of that. You just write the name and the value.
                            </li>
                        </ul>
                    </Callout>

                    <p style={lessonText}>
                        That "kind of value" is called a <strong>data type</strong>, and it gets its own lesson soon. The takeaway for now: the syntax changes between languages, but the idea of a named box holding a value is the same everywhere.
                    </p>

                    <div style={{...Styles.Fonts.lessonHeader, marginTop: 40}}>Changing a Variable's Value</div>
                    <div style={{marginTop: 16}}>
                        <p style={lessonText}>
                            To change a variable, assign it a new value. The old value is thrown away and replaced.
                        </p>

                        <div style={sideBySide}>
                            {renderCodeBlock(
                                <>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.keyword}>let </span>
                                    <span style={Styles.Code.var}>score </span>
                                    <span style={Styles.Code.reg}>= 0</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.var}>score </span>
                                    <span style={Styles.Code.reg}>= 5</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.var}>score </span>
                                    <span style={Styles.Code.reg}>= </span>
                                    <span style={Styles.Code.var}>score </span>
                                    <span style={Styles.Code.reg}>+ 1</span>
                                    </p>
                                    <p style={Styles.Code.code}>
                                    <span style={Styles.Code.comment}>// score is now 6</span>
                                    </p>
                                </>
                            , 260)}
                            <div>
                                <p style={lessonText}>
                                    Line 2 replaces 0 with 5.
                                </p>
                                <p style={{...lessonText, marginBottom: 0}}>
                                    Line 3 is the interesting one. The computer works out the right side first (5 + 1), then stores the result back in score.
                                    This is how every score counter, cart total and timer works.
                                </p>
                            </div>
                        </div>

                        <Callout type="watch" title="= means store, not equals">
                            <p style={{...lessonText, marginBottom: 0}}>
                                In math, <strong>x = x + 1</strong> is impossible. In code it is completely normal, because = means "store the value on the right in the variable on the left."
                                Checking whether two things are <em>equal</em> uses a different symbol, <strong>==</strong>, which you will meet in the next lesson.
                            </p>
                        </Callout>

                        <p style={lessonText}>
                            Some values should never change, like the number of days in a week. Those are created as <strong>constants</strong> instead (using <span style={{color: Styles.Code.keyword.color}}>const</span> in JavaScript), and trying to reassign one causes an error.
                        </p>
                    </div>
                </div>
            )
        }

        function renderWrapUp(){
            return(
                <div>
                    <Recap
                        points={[
                            "A variable is a named container that holds a value.",
                            "Declaring creates it, assigning gives it a value, and you can do both on one line.",
                            "Each language writes it differently, but the idea is the same everywhere.",
                            "Assigning a new value replaces the old one. The = sign means \"store\", not \"equals\".",
                        ]}
                    />

                    <div style={{marginTop: 30}}>
                        <OstrichForm
                            style={{
                                backgroundColor: Colors.offWhiteContent,
                                boxShadow:'2px 2px 10px 2px rgba(20, 20, 15, 0.1)',
                                borderRadius: 15
                            }}
                            title={"Check your Understanding"}
                            fieldTextStyles={{fontSize: 16}}
                            fields={[
                                {
                                    id: '1',
                                    title: "1. After running  let score = 3  and then  score = score + 2 , what is the value of score?",
                                    type: "MC",
                                    options: ["3", "2", "5", "Nothing, an Error is thrown"],
                                    correctValue: "5"
                                },
                                {
                                    id: '2',
                                    title: "2. Which line declares a variable WITHOUT assigning it a value?",
                                    type: "MC",
                                    options: ["var x", "var x = 4", "x = 4"],
                                    correctValue: "var x"
                                },
                                {
                                    id: '3',
                                    title: "3. Which of these creates a variable called name in Python?",
                                    type: "MC",
                                    options: ["let name = \"Hank\"", "String name = \"Hank\";", "name = \"Hank\""],
                                    correctValue: "name = \"Hank\""
                                },
                                {
                                    id: '4',
                                    title: "4. In code, what does a single = sign do?",
                                    type: "MC",
                                    options: ["Checks if two values are equal", "Stores the value on the right in the variable on the left"],
                                    correctValue: "Stores the value on the right in the variable on the left"
                                },
                            ]}
                        />
                    </div>

                    <NextLesson lesson="Operators" onClick={handleLessonClick}/>
                </div>
            )
        }


    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{...Styles.Sections.lessonContent, marginTop: '3.2%'}}>
                {renderTitle("Variables")}
                {renderFirst()}
                {renderSecond()}
                <CodeSnippet
                    js={renderJavaScript()}
                    java={renderJava()}
                    cs={renderCs()}
                    py={renderPython()}
                />
                {renderThird()}
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
            current={"Variables"}
        >
            {MAIN()}
        </LessonTemplatePage>
    )

}

export default VariablesLesson
