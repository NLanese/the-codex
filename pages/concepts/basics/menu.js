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

const BasicsMenu = ({}) => {
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
        if (directory !== "Basics"){
            setDirectory("Basics")
        }
        setLoading(false)
    }, [])

    ///////////////
    // Functions //
    ///////////////

    function handleLessonClick(lesson){
        console.log(`/concepts/basics/lessons/${lesson.toLowerCase().replace(" ", "_")}`)
        router.replace(`/concepts/basics/lessons/${lesson.toLowerCase().replace(" ", "_")}`)
    }

    function handleTestClick(test){
        router.replace(`/concepts/basics/tests/${test.toLowerCase().replace(" ", "_")}`)
    }

    function handleLabsClick(lab){
        router.replace(`/concepts/basics/labs/${lab.toLowerCase().replace(" ", "_")}`)
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

export default BasicsMenu