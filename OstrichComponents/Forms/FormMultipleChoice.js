import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import { OstrichSelectionBox } from './OstrichSelectionBox';
import { OstCard } from '../Format/OstCard';

export const FormMultipleChoice = ({
    boxStyle,
    fieldObj,               // If coming from a form, this object will represent the properties needed to fill this component
    titleStyle,             // Style of the Title for the Multiple Choice Question
    captionStyle,
    
    onChange,               // Function to fire whenever a value is selected or unselected

    type="Bubble",          // 
    
    correctDisplay = "bubble", // or "bubble" or "fieldBubble"
    correctResponse,
    validResponse,

    options,                // Selection Options
    singleOption = true,    // One Answer or Multiple
    limit = false,          // If Multiple Answers, the limit to how many
    min = false             // If Multiple Answers, the limit to how little
}) => {
    
    ////////////
    // States //
    ////////////

        // Text Style
        const [titleStyleFinal, setTitleStyleFinal] = useState(false)
        const [captionStyleFinal, setCaptionStyleFinal] = useState(false)
        const [moreTextStyleFinal, setMoreTextStyleFinal] = useState(false)
    
        // Container Style
        const [boxStyleFinal, setBoxStyleFinal] = useState(false)
        const [inputStyleFinal, setInputStyleFinal] = useState(false)



        const [value, setvalue] = useState([])

        const [loading, setLoading] = useState(true)


    ////////////////
    // UseEffects //
    ////////////////

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
            }
        }, [value]);

        // Sets options to Field Options if empty
        // Also Sets Styles
        useEffect(() => {
            if (!options){
                if (!fieldObj.options){
                    console.warn("[Ostrich Component Error] -- No Options provided in FormMultipleChoice Component. If <OstrichForm>, make sure that al of your FieldObjects that are of type 'MultipleChoice', 'MC', or 'mc' also have an 'options' property. This property should be an array of strings. If using a <FormMultipleChoice> component alone... for some reason... make sure you provide the options property, which is an array of strings.")
                }
                options = fieldObj.options
            }
            finalizeStyles()
            if (fieldObj.value){
                setvalue(fieldObj.value)
            }
            setLoading(false)
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

        // Selects Current Field and Sends Data back to Ostrich Form. Also runs any custom Field Function
        function handleInput(tag){
   
            if (fieldObj.onChange){                 // Fires FieldObj Function if present
                fieldObj.onChange(tag, fieldObj)
            }
            
            // Single Answer
            if (singleOption){                      
                if (value === tag){
                    setvalue([])           // Removing Previous Answer
                }
                else{
                    setvalue(tag)           // Changing / Selecting Answer
                }
            }


            // Multiple Answers
            else{                                   
                if (limit && limit <= value.answer){
                    if (value.includes(tag)){
                        let newSelected = value
                        newSelected = newSelected.filter(sel => {
                            if (sel !== tag){
                                return sel
                            }
                        })
                    }
                    setvalue(newSelected)
                }
                else{
                    setvalue([...value, tag])
                }
            }
            
        }

        // Determines on an indiivdual level whether an answer is selected
        function isTagSelected(option){
            if (value.includes(option)){
                return true
            }
            else{
                return false
            }
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
            else if (fieldObj.render){
                return fieldObj.render()
            }
        }

        // Renders the Bubble Version of Correct or Valid
        function renderBubbleValidOrCorrect(){
            if ((!validResponse && !correctResponse && (fieldObj.required === false)) || (correctDisplay !== "bubble")){
                return
            }
            let borderColor = '#bdbdbd'
            let borderFill = '#efefef'
            if ((validResponse && isValid) && !correctResponse){
                borderColor = '#57a5f2'
                borderFill = '#9cc6f0'
            }
            else if (!(fieldObj.required === false)){
                if (value.length > 0){
                    if (min){
                        if (value.length >= min){
                            borderColor = '#57a5f2'
                            borderFill = '#9cc6f0'
                        }
                    }
                    else{
                        borderColor = '#57a5f2'
                        borderFill = '#9cc6f0'
                    }
                }
            }
            else if (correctResponse && isCorrect){
                borderColor = '#57f25f'
                borderFill = '#a8ffad'
            }
            return(
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%', flex: 2}}>
                    <div style={{height: 35, aspectRatio: 1, borderRadius: 50, border: `3px solid ${borderColor}`, backgroundColor: borderFill}}>
                    </div>
                </div>
            )
        }

        function renderOptions() {
            if (loading) return;
        
            const rows = [];
            for (let i = 0; i < fieldObj.options.length; i += 3) {
                const rowItems = fieldObj.options.slice(i, i + 3);
                rows.push(
                    <div key={i} style={{ display: 'flex', flex: 4, flexDirection: 'row',  justifyContent: 'flex-start', marginBottom: 10, width: '90%', }}>
                        {renderOptionsRow(rowItems)}
                    </div>
                );
            }
        
            return <>{rows}</>;
        }

        // Renders Row to contain options
        function renderOptionsRow(rowOptions){
            return rowOptions.map( (opt, index) => {
                return(
                    <OstrichSelectionBox 
                    tag={opt}
                    selected={isTagSelected(opt)}
                    onSelect={handleInput}
                    key={index}
                    type={type}
                    fieldObj={fieldObj}
                    containerStyle={{width: 'calc(23.33%)', marginRight: '10%'}}
                    />
                )
            })
        }

    /////////////////
    // Main Return //
    /////////////////

        function MAIN(){
            if (loading){
                return
            }
            else{
                return(
                    <div style={{width: '95%', height: 'auto'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingRight: '5%'}}>
                            <p style={{...titleStyleFinal, flex: 11}}>
                                {fieldObj.title} 
                            </p>
                            {renderBubbleValidOrCorrect()}
                        </div>  
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {renderCaption()} 
                            {renderMoreDetails()}
                        </div>
                        <div style={{padding: 5, paddingTop: 15}}>
                            {renderOptions()}
                        </div>
                    </div>
                )
            }
        }

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