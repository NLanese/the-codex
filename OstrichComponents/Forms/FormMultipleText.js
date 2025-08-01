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
    minLength,
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
        const [answerBoxStyleFinal, setAnswerBoxStyleFinal] = useState(false)

        // Loading
        const [isLoading, setIsLoading] = useState(true)
        
        // Validations / Correction
        const [isCorrect, setIsCorrect] = useState(null)
        const [isWrong, setIsWrong] = useState(null)
        const [isValid, setIsValid] = useState(null)

        // Value
        const [value, setValue] = useState([])
        const [currentInput, setCurrentInput] = useState("")

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

    // When this Field has its value changed, the change is conveyed to the Greater Form
    const prevValueRef = useRef(value);
    useEffect(() => {
        if (prevValueRef.current !== value) {
            fieldObj.value = value;
            fieldObj.isValid = true
            prevValueRef.current = value;
            if (onChange) {
                onChange(fieldObj);
            }
            if (minLength){
                if (value.length >= minLength){
                    setIsValid(true)
                }
            }
        }
        console.log("Value changed to ", value)
    }, [value]);

    useEffect(() => {
        console.log(isValid)
    }, [isValid])
        

    ///////////////
    // Functions //
    ///////////////

        ////////////
        // STYLES //

            // Finalizes all User Input Styles to Apply Defaults
            function finalizeStyles(){
                finalizeTextStyles()
                finalizeInputStyles()
                finalizeContainerStyles()
            }

            function finalizeTextStyles(){
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
            }

            function finalizeInputStyles(){
                // Sets Input Box
                let tempInput = {
                    marginTop: 10, marginRight: '3%', paddingLeft: 10,
                    height: 30, width: '97%',
                    fontSize: 18,
                    borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0
                }
                let final = {...tempInput, ...inputStyleFinal }
                if (fieldObj.style){
                    final = {...final, ...fieldObj.style}
                }
                setInputStyleFinal(final)
            }

            function finalizeContainerStyles(){
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
                let final = {...tempBox, ...boxStyle}
                setBoxStyleFinal(final)

                tempBox.flex = 4
                tempBox.marginRight = '1.5%'
                tempBox.marginLeft = '1.5%'
                tempBox.width = '100%'
                tempBox.boxShadow ='2px 2px 2px 2px rgba(40, 40, 40, 0.1)'
                tempBox.borderRadius =  10,
                tempBox.border = "1px solid rgb(182, 117, 117)",
                tempBox.justifyContent = 'center'
                tempBox.textAlign = 'center'
                final = {...tempBox, answerBoxStyle}
                setAnswerBoxStyleFinal(final)
            }

        //////////////
        // HANDLERS //

        // Runs when Text is Entered in Input
        function onTextInput(target){
            setCurrentInput(target.value)
        }

        // Handles Current Text Submission
        function handleAddEntry(){
            setValue(val => [...val, currentInput])
            setCurrentInput("")
        }

        function handleRemoveEntry(val){
            let temp = [...value].filter((thisVal) => {
                if (val !== thisVal){
                    return thisVal
                }
            })
            setValue(temp)
        }

    ////////////////
    // Renderings //
    ////////////////

    function renderInputSpace(){
        return(
            <FormText 
                boxStyle={{flex: 10, borderRight: 0}}
                inputSyle={inputStyleFinal}
                fieldObj={fieldObj}
                titleStyle={titleStyleFinal}
                captionStyle={captionStyleFinal}
                onChange={onTextInput}
                setNewFieldValue={setNewFieldValue}
                hasValidResponse={true}
                correctDisplay={correctDisplay}
                validResponse={ () => {if (isValid) return true}}
                inMultiTextField={true}
                currentValue={currentInput}
            />
        )
    }

    function renderAddEntry(){
        return(
            <div style={{ flex: 2, display: 'flex',  flexDirection: 'column',  justifyContent: 'flex-end'}}>
                <OstCard 
                style={{ 
                    height: '25%', textAlign: 'center', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 0, width: "90%", marginLeft:'5%', marginRight: '5%',
                    backgroundColor: '#9cc6f0', fontSize: 18,
                }}
                onClick={() => handleAddEntry()}
                >
                    Submit
                </OstCard>
            </div>
        )
    }

    function renderSubmissionRow(arr){
        return arr.map(val => {
            if (!val){
                return
            }
            return(
                <OstCard 
                    style={answerBoxStyleFinal}
                    onClick={() => handleRemoveEntry(val)}
                >
                    {val}
                </OstCard>
            )
        })
    }

    function renderSubmittedAnswers(){
        if (value.length < 4){
            return (
                <div style={{marginTop: 10, display: 'flex', flexDirection: 'row'}}>
                    {renderSubmissionRow(value)}
                </div>
            )
        }
        else{
            let i = 0
            let rArr = []
            while (i < value.length){
                let tempArr = [value[i], value[i + 1] ? value[i + 1] : null, value[i + 2] ? value[i + 2] : null]
                rArr = [...rArr, tempArr]
                i = i + 3
            }
            let renderBlock = rArr.map(arr => {
                return(
                    <div style={{marginTop: 10, display: 'flex', flexDirection: 'row'}}>
                        {renderSubmissionRow(arr)}
                    </div>
                )
            })
            return renderBlock
        }
    }



    function MAIN(){
        if (isLoading){
            return null
        }
        else{
            return(
                <div style={{width: '95%', height: 'auto', display: 'flex', flexDirection: 'column'}}>
                    <div style= {{display: 'flex', flexDirection: 'row'}}>
                        {renderInputSpace()}
                        {renderAddEntry()}
                    </div>
                    {renderSubmittedAnswers()}
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