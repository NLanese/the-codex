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
import { basicsLessons } from "../../../constants/lessonLists";

const BasicsMenu = ({}) => {
    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)

    const router = useRouter()

    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        setDirectory("Basics")
    }, [])

    ///////////////
    // Functions //
    ///////////////

    function handleLessonClick(lesson){
        router.replace("concepts/basics/lessons/" + lesson)
    }
    
    /////////////////
    // Main Return //
    /////////////////
    return(
        <div>
            <MenuPage 
            onLessonClick={(handleLessonClick)}
            lessons={basicsLessons}
            />
        </div>
    )
}

export default BasicsMenu