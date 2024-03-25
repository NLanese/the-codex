// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components
import { MenuPage } from "../../../components/menu/MenuPage";

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
        console.log(`routing to concepts/basics/lessons/${lesson.toLowerCase()}`)
        router.replace(`concepts/basics/lessons/${lesson.toLowerCase()}`)
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
                        labs={basicsLabs}
                        tests={basicsTests}
                    />
                </>
            )
        }
    }


    return MAIN()
    
}

export default BasicsMenu