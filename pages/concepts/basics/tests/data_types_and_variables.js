// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState, tabBarState } from "../../../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import { TestTemplatePage } from "../../../../components/PagePrefabs/TestTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";

// Ostirch
import { OstrichForm } from "../../../../OstrichComponents/Forms/OstrichForm";

// Local
import Colors from "../../../../styles/colors";
import Styles from "../../../../styles/styles";


const DataTypesTest = ({}) => {

    ///////////
    // State //
    ///////////

        // Sets the URL PAth and main directory
        const [directory, setDirectory] = useRecoilState(directoryDataState)

        // Makes sure Header Bar Highlights the Active Tab
        const [tabBar, setTabBar] = useRecoilState(tabBarState)

        // Checks whether the page is loadiong or not
        const [loading, setLoading] = useState(true)

        // Router
        const router = useRouter()

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
            router.push(`/concepts/basics/lessons/${lesson.toLowerCase().replace(" ", "_")}`)
        }

        function handleTestClick(test){
            router.push(`/concepts/basics/tests/${test.toLowerCase().replace(" ", "_")}`)
        }

        function handleLabsClick(lab){
            router.push(`/concepts/basics/labs/${lab.toLowerCase().replace(" ", "_")}`)
        }

        
    /////////////
    // Renders //
    /////////////

        function renderForQ1(){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '80%'}}>
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
                        <span style={Styles.Code.var}>result </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>numberValue </span>
                        <span style={Styles.Code.reg}>+ </span>
                        <span style={Styles.Code.var}>stringValue</span>
                    </p>
                </div>
            )
        }

        function renderForQ2(){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '80%'}}>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}># C# </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>numberValue </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.reg}>100; </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>string </span>
                        <span style={Styles.Code.var}>stringValue </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.str}>"5" </span>
                        <span style={Styles.Code.reg}>; </span>
                    </p>
                    <br></br>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>int </span>
                        <span style={Styles.Code.var}>result </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>numberValue </span>
                        <span style={Styles.Code.reg}>+ </span>
                        <span style={Styles.Code.var}>stringValue</span>
                        <span style={Styles.Code.reg}>; </span>
                    </p>
                </div>
            )
        }

        function renderForQ3(){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '80%'}}>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}># Python </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>x </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.reg}>100</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>y </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.reg}>50 </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>z </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.reg}>25 </span>
                    </p>
                    <br></br>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>a </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>x </span>
                        <span style={Styles.Code.reg}>+ </span>
                        <span style={Styles.Code.var}>y </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>a </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>a </span>
                        <span style={Styles.Code.reg}>+ </span>
                        <span style={Styles.Code.var}>z </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>c </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>a </span>
                    </p>
                </div>
            )
        }

        function renderForQ4(){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '80%'}}>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.comment}># Python </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>x </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.reg}>100</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>y </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.reg}>50 </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>stringValue </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.str}>"Leela" </span>
                    </p>
                    <br></br>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.var}>result </span>
                        <span style={Styles.Code.reg}>= </span>
                        <span style={Styles.Code.var}>stringValue </span>
                        <span style={Styles.Code.reg}>+ (</span>
                        <span style={Styles.Code.var}>z </span>
                        <span style={Styles.Code.reg}>+ </span>
                        <span style={Styles.Code.var}>x </span>
                        <span style={Styles.Code.reg}>)</span>
                    </p>
                </div>
            )
        }
 
    /////////////////
    // Form Object //
    /////////////////

        let DataTypesTestForm = [
            {
                id: "1",
                title: "1. What is the data type of the following",
                type: "MC",
                caption: "x = 'Bender Rodreguez'",
                options: ["String", "Integer", "Double"],
                correctValue: 'String'
            },

            {
                id: "2",
                title: "2. What is the data type of the following",
                type: "MC",
                caption: "age = 5",
                options: ["String", "Integer", "Double"],
                correctValue: 'Integer'
            },

            {
                id: "3",
                title: "3. What is the data type of the following",
                type: "MC",
                caption: "gpa = 3.5",
                options: ["String", "Integer", "Double"],
                correctValue: 'Double'
            },

            {
                id: "4",
                title: "4. What is the data type of the following",
                type: "MC",
                caption: "year = '2024'",
                options: ["String", "Integer", "Double"],
                correctValue: 'String'
            },


            {
                id: "5",
                title: "5. What is the data type of the following",
                type: "MC",
                caption: "x = 9000",
                options: ["Boolean", "Float", "Double", "Integer"],
                correctValue: 'Integer'
            },

            {
                id: "6",
                title: "6. What is the data type of the following",
                type: "MC",
                caption: "x = 10.0",
                options: ["Boolean", "String", "Double", "Integer"],
                correctValue: 'Double'
            },

            {
                id: "7",
                title: "7. What is the value of 'result?'",
                type: "MC",
                render: renderForQ1,
                options: ["54", "'54'", "9", "'9'", "This would be an Error"],
                correctValue: "'54'"
            },

            {
                id: "8",
                title: "8. What is the value of 'result?'",
                type: "MC",
                render: renderForQ2,
                options: ["1004", "104", "This would be an Error", "'1004'", "'104"],
                correctValue: "This would be an Error"
            },

            {
                id: "9",
                title: "9. What is the value of 'c?'",
                type: "MC",
                render: renderForQ3,
                options: ["125", "75", "200", "175", "300", "75", "25", "50", "This would be an Error"],
                correctValue: "175"
            },

            {
                id: "10",
                title: "10. What is the value of 'result?'",
                type: "MC",
                render: renderForQ4,
                options: ["'Leela50+100'", "'Leela150'", "'Leela10050'", "This would be an Error", "Apples"],
                correctValue: "Leela150"
            }
        ]

        const correctAnswers = {
            1: ["String"],
            2: ["Integer"],
            3: ["Double"],
            4: ["String"],
            5: ["Integer"],
            6: ["Double"]
        }

    //////////////////////
    // Lesson Rendering //
    //////////////////////


        
    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{marginTop: '3%'}}>
                     <OstrichForm
                        style={{
                            backgroundColor: Colors.offWhiteContent, 
                            boxShadow:'2px 2px 10px 2px rgba(20, 20, 15, 0.1)',
                            borderRadius: 15
                        }}
                        title={"Data Types Test"}
                        fields={DataTypesTestForm}
                        correctResponse={correctAnswers}
                        onSubmit={() => console.log("Submitted Bay Bay!")}
                        reviewOnSubmit={true}
                        titleTextStyle={{ fontSize: 32, fontWeight: 600, textAlign: 'center'}}
                        fieldsTitleStyle={{ fontSize: 24, fontWeight: 600, padding: 5}}
                        captionTextStyle={{ fontSize: 18, fontWeight: 400, backgroundcolor: 'grey', padding: 3}}
                    />
            </div>
        )
    }

    return (
        <TestTemplatePage
            onLessonClick={handleLessonClick}
            lessons={basicsLessons}
            onLabsClick={handleLabsClick}
            labs={basicsLabs}
            onTestsClick={handleTestClick}
            tests={basicsTests}
            current={"Data Types"}
        >
            {MAIN()}
        </TestTemplatePage>
    )

}

export default DataTypesTest
