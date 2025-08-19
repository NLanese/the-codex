import React, {useEffect, useState, useRef} from "react";
import { OstCard } from "../Format/OstCard";
import PropTypes from 'prop-types';

export const FormText = ({
    boxStyle,
    inputSyle,
    fieldObj,
    titleStyle,
    captionStyle,
    currentValue=false,

    onChange,
    setNewFieldValue,

    correctDisplay = "bubble", // or "bubble" or "fieldBubble"
    correctResponse,

    hasValidResponse = true,
    validResponse,

    inMultiTextField    
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

    // Status 
    const [inputFocused, setInputFocused] = useState(false)
    const handleFocus = (val) => setInputFocused(val);

    const [isLoading, setIsLoading] = useState(true)

    const [isCorrect, setIsCorrect] = useState(null)
    const [isWrong, setIsWrong] = useState(null)
    const [isValid, setIsValid] = useState(null)

    // Value
    const [value, setValue] = useState("")



    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        if (currentValue !== false){
            setValue(currentValue)
        }
    }, [currentValue])


    // Runs on Init
    // Sets Styles and Applies Starting Field Values
    useEffect(() => {
        finalizeStyles()
        setIsLoading(false)
        if (fieldObj.value){
            setValue(fieldObj.value)
        }
    }, [])

    const prevValueRef = useRef(value);
    useEffect(() => {
        if (prevValueRef.current !== value) {
            fieldObj.value = value;
            prevValueRef.current = value;
            if (onChange) {
                onChange(fieldObj);
            }
            determineIfAnswerValid()
        }
    }, [value]);

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

        // Runs during above function. Determines Input style (Active or not)
        function determineInputStyle(){
            return {
                ...inputStyleFinal,
                ...(inputFocused ? { borderColor: ' c', borderBottom: 0, borderRadius: 15, outline: 'none', boxShadow: '0 0 0 2px rgba(0, 0, 255, 0.3)' } : {})
            }
        }

        // Handles any changes in text field
        function handleInput(event){
            if (fieldObj.onChange){
                fieldObj.onChange(event.target.value, fieldObj)
            }
            setValue(event.target.value)
        }

        // Takes FieldObj ValidResponse and determines if True
        function determineIfAnswerValid(){
            if (typeof fieldObj.validResponse === "function"){
                checkValid(value).then(resp =>{
                    if (resp){
                        setNewFieldValue({...fieldObj, isValid: true})
                        setIsValid(true)
                        return true
                    }
                    else{
                        setIsValid(false)
                        return false
                    }
                })
                
            }
            else if (typeof validResponse === "String" || typeof validResponse === "string"){
                if (value === validResponse){
                    setNewFieldValue({...fieldObj, isValid: true})
                    return true
                }
            }
            else{
                setNewFieldValue({...fieldObj, isValid: false})
                return false
            }
        }

        async function checkValid(val){
            return await validResponse(val)
        }

    ////////////////
    // Renderings //
    ////////////////

        // Renders the Field's Description / Caption
        function renderCaption(){
            if (fieldObj.caption){
                return(
                    <span style={captionStyleFinal}>
                        {fieldObj.caption}
                    </span>
                )
            }
        }

        // Renders Additional Text or Field Image
        function renderMoreDetails(){
            if (fieldObj.img){
                return(
                    <OstCard
                        style={{justifySelf: 'center'}}
                        imageSrc={img} 
                    />
                )
            }
            else if (fieldObj.moreText){
                return(
                    <p 
                    style={moreTextStyleFinal}
                    >
                        {fieldObj.moreText}
                    </p>
                )
            }
        }

        // Renders the Bubble Version of Correct or Valid
        function renderBubbleValidOrCorrect(){

            // Not sure what this is 
            if ((!fieldObj.validResponse && !correctResponse && !hasValidResponse)){
                console.warn("No valid field, no correct field, or correct display is not bubble in ", fieldObj.id)
                return
            }

            // If Field is not required at all and cannot be correct or wrong
            if (fieldObj.required === false && !fieldObj.correctResponse){
                return
            }

            let borderColor = '#bdbdbd'
            let borderFill = '#efefef'

            // Is Correct
            if (isCorrect){
                console.log("CORRECT response")
                borderColor = '#57f25f'
                borderFill = '#a8ffad'
            }

            // Is Wrong
            else if (isWrong){
                borderColor = 'red'
                borderFill = 'red'
            }

            // Is Valid
            else if (isValid){
                borderColor = '#57a5f2'
                borderFill = '#9cc6f0'
            }
            
            // In a Multi Text Field, this needs to be pushed more to the right
            if (inMultiTextField){
                return(
                <div style={{marginLeft: 'auto', marginRight: '-27.5%'}}>
                    <div style={{height: 30, aspectRatio: 1, borderRadius: 50, border: `3px solid ${borderColor}`, backgroundColor: borderFill}}>
                    </div>
                </div>
                )
            }
            return(
                <div style={{marginLeft: 'auto'}}>
                    <div style={{height: 30, aspectRatio: 1, borderRadius: 50, border: `3px solid ${borderColor}`, backgroundColor: borderFill}}>
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
                    <div style={{width: '95%', height: '10%'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingRight: '5%'}}>
                            <p style={{...titleStyleFinal}}>
                                {fieldObj.title}
                            </p>
                            {renderBubbleValidOrCorrect()}
                        </div>  
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {renderCaption()} 
                            {renderMoreDetails()}
                        </div>
                        <input 
                            type={fieldObj.type}
                            value={value}
                            onChange={(event) => handleInput(event)}
                            onFocus={() => handleFocus(true)}
                            onBlur={() => handleFocus(false)}
                            style={fieldObj.formHidden ? { display: 'none' } : determineInputStyle()}
                            placeholder={fieldObj.placeholder? fieldObj.placeholder : ""}
                        />
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

///////////////////////
// Prop Restrictions //
///////////////////////
// FormText.propTypes = {
//     fieldObj: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//         onChange: PropTypes.func,
//         value: PropTypes.any.isRequired,
//         fieldHidden: PropTypes.bool,
//         style: PropTypes.object,
//         placeholder: PropTypes.string
//     }).isRequired,
//     onChange: PropTypes.func.isRequired,
//     titleStyle: PropTypes.object,
// };