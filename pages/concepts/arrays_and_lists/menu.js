// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import { MenuPage } from "../../../components/PagePrefabs/MenuPage";

// Constants
import { basicsLessons, basicsLabs, basicsTests } from "../../../constants/lessonLists";

const FunctionsMenu = ({}) => {
    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        if (directory !== "Arrays and Lists"){
            setDirectory("Arrays and Lists")
        }
        setLoading(false)
    }, [])

    ///////////////
    // Functions //
    ///////////////

    function handleLessonClick(lesson){
        router.replace(`/concepts/arrays_and_lists/lessons/${lesson.toLowerCase().replace(" ", "_")}`)
    }

    function handleTestClick(test){
        router.replace(`/concepts/arrays_and_lists/tests/${test.toLowerCase().replace(" ", "_")}`)
    }

    function handleLabsClick(lab){
        router.replace(`/concepts/arrays_and_lists/labs/${lab.toLowerCase().replace(" ", "_")}`)
    }
    
    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        if (loading){
            return null
        }
        else{
            return(
                <>
                    <MenuPage 
                        onLessonClick={handleLessonClick}
                        lessons={basicsLessons}
                        onLabsClick={handleLabsClick}
                        labs={basicsLabs}
                        onTestsClick={handleTestClick}
                        tests={basicsTests}
                    />
                </>
            )
        }
    }


    return MAIN()
    
}

export default FunctionsMenu