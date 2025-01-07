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
import Styles from "../../../../styles/styles";
import Colors from "../../../../styles/colors";


const OperatorsTest = ({}) => {

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
            router.replace(`/concepts/basics/lessons/${lesson.toLowerCase().replace(" ", "_")}`)
        }

        function handleTestClick(test){
            router.replace(`/concepts/basics/tests/${test.toLowerCase().replace(" ", "_")}`)
        }

        function handleLabsClick(lab){
            router.replace(`/concepts/basics/labs/${lab.toLowerCase().replace(" ", "_")}`)
        }
 
    /////////////////
    // Form Object //
    /////////////////

        let DataTypesTestForm = [
            {
                id: "1",
                title: "1. If the following code is executed, what is the value of x by the end?",
                type: "MC",
                render: () => (
                    <div style={{justifyItems: 'center'}}>
                        <div style={Styles.Code.testCodeSegment}>
                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= 4</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>y </span>
                                <span style={Styles.Code.reg}>= 5</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>+ </span>
                                <span style={Styles.Code.var}>y </span>
                            </p>
                        </div>
                    </div>
                ),
                options: [ "4", "45", "9", "This throws an Error"],
                correctValue: '9'
            },

            {
                id: "2",
                title: "2. If the following code is executed, what is the value of x by the end?",
                type: "MC",
                render: () => (
                    <div style={{justifyItems: 'center'}}>
                        <div style={Styles.Code.testCodeSegment}>
                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= "</span>
                                <span style={Styles.Code.str}>100</span>
                                <span style={Styles.Code.reg}>"</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>y </span>
                                <span style={Styles.Code.reg}>= "</span>
                                <span style={Styles.Code.str}>50</span>
                                <span style={Styles.Code.reg}>"</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>+ </span>
                                <span style={Styles.Code.var}>y </span>
                            </p>
                        </div>
                    </div>
                ),
                options: [ "150", "10050", "1050", "This throws an Error"],
                correctValue: '10050'
            },

            {
                id: "3",
                title: "3. If the following code is executed, what is the value of x by the end?",
                type: "MC",
                render: () => (
                    <div style={{justifyItems: 'center'}}>
                        <div style={Styles.Code.testCodeSegment}>
                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= 10</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>y </span>
                                <span style={Styles.Code.reg}>= "</span>
                                <span style={Styles.Code.str}>50</span>
                                <span style={Styles.Code.reg}>"</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>+ </span>
                                <span style={Styles.Code.var}>y </span>
                            </p>
                        </div>
                    </div>
                ),
                options: [ "60", "150", "1050", "This throws an Error"],
                correctValue: '1050'
            },

            {
                id: "4",
                title: "4. If the following code is executed, what is the value of x by the end?",
                type: "MC",
                render: () => (
                    <div style={{justifyItems: 'center'}}>
                        <div style={Styles.Code.testCodeSegment}>
                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>const </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= "</span>
                                <span style={Styles.Code.str}>50</span>
                                <span style={Styles.Code.reg}>"</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.keyword}>let </span>
                                <span style={Styles.Code.var}>y </span>
                                <span style={Styles.Code.reg}>= 50</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 24}}>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>= </span>
                                <span style={Styles.Code.var}>x </span>
                                <span style={Styles.Code.reg}>+ </span>
                                <span style={Styles.Code.var}>y </span>
                            </p>
                        </div>
                    </div>
                ),
                options: [ "5050", "150", "100", "This throws an Error"],
                correctValue: 'This throws an Error'
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
            current={"Operators"}
        >
            {MAIN()}
        </TestTemplatePage>
    )

}

export default OperatorsTest