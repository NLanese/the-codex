// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../../../recoil/atoms";

// Next JS
import { useRouter } from "next/router";

// Components

// Constants

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

                </>
            )
        }
    }


    return MAIN()
    
}

export default BasicsMenu