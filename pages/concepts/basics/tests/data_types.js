// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState, tabBarState } from "../../../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import renderTitle from "../../../../components/CodeSpaces/renderTitle";
import { TestTemplatePage } from "../../../../components/PagePrefabs/TestTemplatePage";
import { basicsLessons, basicsLabs, basicsTests } from "../../../../constants/lessonLists";


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
                title: "1. What is the data type of the following",
                type: "MC",
                caption: "x = 'Bender Rodreguez'",
                options: ["String", "Integer", "Double", "Name"],
                correctValue: 'String'
            },

            {
                title: "2. What is the data type of the following",
                type: "MC",
                caption: "age = 5",
                options: ["String", "Integer", "Double", "Name"],
                correctValue: 'Integer'
            },

            {
                title: "3. What is the data type of the following",
                type: "MC",
                caption: "gpa = 3.5",
                options: ["String", "Integer", "Double", "Name"],
                correctValue: 'Double'
            },

            {
                title: "4. What is the data type of the following",
                type: "MC",
                caption: "year = '2024'",
                options: ["String", "Integer", "Double", "Name"],
                correctValue: 'String'
            },


            {
                title: "5. What is the data type of the following",
                type: "MC",
                caption: "x = 9000",
                options: ["Boolean", "Float", "Double", "Integer"],
                correctValue: 'Integer'
            },

            {
                title: "6. What is the data type of the following",
                type: "MC",
                caption: "x = 10.0",
                options: ["Boolean", "String", "Double", "Integer"],
                correctValue: 'Double'
            },
        ]


    //////////////////////
    // Lesson Rendering //
    //////////////////////


        
    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{marginTop: '-3.2%'}}>
                {renderTitle("Test 101 -- Data Types")}
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