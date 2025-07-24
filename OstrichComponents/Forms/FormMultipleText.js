import React, {useEffect, useState, useRef} from 'react';
import { FormText } from './FormText';
import { OstCard } from '../Format/OstCard';

export const FormMultipleText = ({
    boxStyle,
    inputSyle,
    fieldObj,
    titleStyle,
    captionStyle,
    answerBoxStyle,
    onChange,
    setNewFieldValue,

    limit,
    correctDisplay = "bubble", // or "bubble" or "fieldBubble"
    correctResponse,
    validResponse,
    hasValidResponse = true
    
}) => {
    ///////////
    // State //
    ///////////

        // Text Style
        const [titleStyleFinal, setTitleStyleFinal] = useState(false)
        const [captionStyleFinal, setCaptionStyleFinal] = useState(false)
        const [moreTextStyleFinal, setMoreTextStyleFinal] = useState(false)

        // Container Style
        const [boxStyleFinal, setBoxStyleFinal] = useState(false)
        const [inputStyleFinal, setInputStyleFinal] = useState(false)

        // Loading
        const [isLoading, setIsLoading] = useState(true)
        
        // Validations / Correction
        const [isCorrect, setIsCorrect] = useState(null)
        const [isWrong, setIsWrong] = useState(null)
        const [isValid, setIsValid] = useState(null)

    ////////////////
    // UseEffects //
    ////////////////


    // Runs on Init
    // Sets Styles and Applies Starting Field Values
    useEffect(() => {
        finalizeStyles()
        setIsLoading(false)
        if (fieldObj.value){
            setValue(fieldObj.value)
        }
    }, [])
        

    ///////////////
    // Functions //
    ///////////////

        // Finalizes all User Input Styles to Apply Defaults
        function finalizeStyles(){

            // Sets Title, Caption and MoreText
            let temp = {
                fontSize: 22,
                fontWeight: 600,
                fontFamily: "Gilroy",
                margin: 3,
                paddingBottom: 1,
                marginBottom: 0,
            }
            let final = {...temp, ...titleStyle}
            setTitleStyleFinal(final)
            temp.fontSize = 16
            temp.fontWeight = 600
            temp.color = 'grey'
            temp.marginTop = 0
            temp.paddingTop = 0
            temp.marginBottom = 0
            temp.paddingBottom = 0
            final = {...temp, ...captionStyle}
            setCaptionStyleFinal(final)
            temp.fontSize = 14
            temp.marginBottom = 10
            temp.fontWeight = 300
            temp.color = '#3d3d3d'
            if (fieldObj.moreTextStyle){
                final = {...temp, ...fieldObj.moreTextStyle}
            }
            else{
                final = {...final, ...temp}
            }
            setMoreTextStyleFinal({...final})


            // Sets Input Box
            let tempInput = {
                marginTop: 10, marginRight: '3%', paddingLeft: 10,
                height: 30, width: '97%',
                fontSize: 18,
                borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0
            }
            final = {...tempInput, ...inputStyleFinal }
            if (fieldObj.style){
                final = {...final, ...fieldObj.style}
            }
            setInputStyleFinal(final)


            // Sets Individual Field Box
            let tempBox = {
                boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.2)',
                borderRadius: 0,
                border: '0',
                borderLeft: '1 solid black',
                borderRight: '1 solid black',
                paddingBottom: 15

            }
            if (fieldObj.isCorrect && correctDisplay === "border"){
                tempBox.boxShadow = '0px 0px 2px 0px rgba(62, 250, 141, 0.2)'
            }
            if (fieldObj.isWrong && correctDisplay === "border"){
                tempBox.boxShadow = '0px 0px 2px 0px rgba(212, 59, 59 0.2)'
            }
            final = {...tempBox, ...boxStyle}
            setBoxStyleFinal(final)
        }



    ////////////////
    // Renderings //
    ////////////////

    function renderSubmittedAnswers(){

    }

    // Renders the Bubble Version of Correct or Valid
    function renderBubbleValidOrCorrect(){
        if (!hasValidResponse){
            return
        }
        if ((!fieldObj.validResponse && !correctResponse) || (correctDisplay !== "bubble")){
            return
        }
        let borderColor = '#bdbdbd'
        let borderFill = '#efefef'
        if ((!fieldObj.validResponse && isValid) && !correctResponse){
            borderColor = '#57a5f2'
            borderFill = '#9cc6f0'
        }
        else if (correctResponse && isCorrect){
            borderColor = '#57f25f'
            borderFill = '#a8ffad'
        }
        return(
            <div style={{marginLeft: 'auto'}}>
                <div style={{height: '100%', aspectRatio: 1, borderRadius: 50, border: `3px solid ${borderColor}`, backgroundColor: borderFill}}>
                </div>
            </div>
        )
    }

    function MAIN(){
        if (isLoading){
            return null
        }
        else{
            return(
                <div style={{width: '95%', height: 'auto'}}>
                    <div style= {{display: 'flex', flexDirection: 'row'}}>
                        <FormText 
                            boxStyle={{flex: 10}}
                            inputSyle={inputSyle}
                            fieldObj={fieldObj}
                            titleStyle={titleStyle}
                            captionStyle={captionStyle}
                            onChange={onChange}
                            setNewFieldValue={setNewFieldValue}
                            hasValidResponse={false}
                            correctDisplay={correctDisplay}
                        />
                        <div style={{ 
                        flex: 2, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-end' 
                        }}>
                            <OstCard style={{ 
                                height: '30%' , 
                                textAlign: 'center', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                margin: 0, 
                                width: "100%"
                            }}>
                                Submit
                            </OstCard>
                            {renderBubbleValidOrCorrect()}
                        </div>
                    <div>
                        {renderSubmittedAnswers()}
                    </div>
                </div>
                </div>
            )
        }
    }


    /////////////////
    // Main Return //
    /////////////////


    return(
        <OstCard 
        style={boxStyleFinal}
        >
            {MAIN()}
        </OstCard>
    )
}