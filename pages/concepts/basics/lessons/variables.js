// React
import React, {useEffect, useState} from "react";

// Styles
import Styles from "../../../../styles/styles";
 
// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../../../recoil/atoms";

// Components and Functions
import renderTitle from "../../../../components/lessonsAndLabs/renderTitle";


const VariablesLesson = ({}) => {

    ///////////
    // State //
    ///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)

    const [loading, setLoading] = useState(true)

    ////////////////
    // UseEffects //
    ////////////////

        // Sets Directory if not already
        useEffect(() => {
            if (directory !== "Basics"){
                setDirectory("Basics")
            }
            setLoading(false)
        }, [])

 
    ///////////////
    // Rendering //
    ///////////////

        function renderVariablesJS(){
            return(
                <div>
                    <p style={Styles.Code.keyword}>let</p>
                    <p style={Styles.Code.var}>x</p>
                    <p style={Styles.Code.reg}>= 0</p>
                </div>
            )
        }

        
    /////////////////
    // Main Return //
    /////////////////

    function MAIN(){
        return (
            <div style={{marginTop: '-3.2%'}}>
                {renderTitle("Variables")}
            </div>
        )
    }

    return MAIN()

}

export default VariablesLesson