import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormText } from './FormText';
import { FormMultipleChoice } from './FormMultipleChoice';
import { OstrichButton } from '../Buttons/OstrichButton';
import { OstCard } from "../Format/OstCard"
import { FormMultipleText } from './FormMultipleText';

export const OstrichForm = ({
    title,                              // Form Title
    fields,                             // Object of objects that each represent a field in the Form
    submitButtonTitle="Submit",         // Title on Submit Button
    allFieldsRequired=true,
    formLocked=false,                   // If the form had previously been completed and is not allowed for resubmit, this locks it and displays pastAnswerData if possible
    pastAnswerData={},                  // Previous Answer Data to be displayed if form is locked

    showWrongAnswers=false,             // WIP -- Would show the correct answer if the user got the answer incorrect and submitted the form
    allowResubmission=false,            // Allows form resubmission. If False, form is locked.

    onChange,                           // Function to run on ANY field value change
    allowSubmit=true,                   // Boolean allowing Form to be Submitted or Locking it
    onSubmit,                           // Function to be run on Form Submission
    reviewOnSubmit,                     // Whether or not after submission, shows x / total correct
    clearOnSubmit=false,                // Whether or not values clear upon submission

    style,

    titleBoxStyle,
    titleTextStyle,

    fieldsBoxStyle,
    fieldsTitleStyle,

    captionTextStyle,
    moreTextStyle,

    fieldButtonStyles,
    fieldOptionStyles,
    fieldTextOptions,

    submitButtonStyle,
    submitButtonInactiveStyle,
    submitButtonTextStyle,
}) => {

    ////////////
    // States //
    ////////////

        // Rendering States
        const [loading, setLoading] = useState(true)
        const [submitted, setSubmitted] = useState(false)

        // Data States
        const [fieldsState, setFieldsState] = useState(false)
        const [canSubmit, setCanSubmit] = useState(false)

        // Style States
        const [styleFinal, setStyleFinal] = useState(false)
        const [titleStyleFinal, setTitleStyleFinal] = useState(false)
        const [titleTextStyleFinal, setTitleTextStyleFinal] = useState(false)
        const [fieldsBoxStyleFinal, setFieldsBoxStyleFinal] = useState(false)

        // Button Style States
        const [submitButtonStyleFinal, setSubmitButtonStyleFinal] = useState(false)
        const [submitButtonInactiveStyleFinal, setSubmitButtonInactiveStyleFinal] = useState(false)
        const [submitButtonTextStyleFinal, setSubmitButtonTextStyleFinal] = useState(false)
        

    /////////////
    // On Init //
    /////////////

        // Sets Form for Entry
        useEffect(() => {
            checkInputs()
        }, [])

        
    ///////////////////////////////////
    // After Every Form Value Change //
    ///////////////////////////////////

        // Determines if Submit is allowed or not
        useEffect(() => {
            if (fieldsState){
                if (Object.keys(fieldsState).length > 0) {
                    setCanSubmit(determineCanSubmit())
                    setLoading(false)
                }
            }
        }, [fieldsState])
        
    //////////////////
    // After Submit //
    //////////////////


    ////////////////
    // Renderings //
    ////////////////

        // Renders the Form Title
        function renderTitle(){
            return(
                <div style={{...titleStyleFinal}}>
                    <p style={{...titleTextStyleFinal}}>
                        {title}
                    </p>
                </div>
            )
        }

        // Renders All Fields
        function renderFields(){
            let fieldsKeys = Object.keys(fieldsState)
            return fieldsKeys.map( (fieldKey, index) => {
                let field = fieldsState[fieldKey]
                if (fieldKey === 'undefined'){
                    return
                }
                return (renderSingleField(field, index, fieldsTitleStyle))
            })
        }

        // Renders a Single Field
        function renderSingleField(fieldObj, index){
            if (fieldObj.type === "text" || fieldObj.type === "password" || fieldObj.type === "tel"){
                return(
                    <FormText 
                        key={fieldObj.id ? fieldObj.id : index}
                        boxStyle={fieldsBoxStyle}
                        fieldObj={fieldObj}
                        onChange={onFieldChange}
                        setNewFieldValue={handleSetFieldsState}
                        titleStyle={fieldsTitleStyle}
                        captionStyle={captionTextStyle}
                        fieldID={fieldObj.id}
                        correctResponse={fieldObj.correctResponse ? fieldObj.correctResponse : false}
                        validResponse={fieldObj.validResponse ? fieldObj.validResponse : false}
                    />
                )
            }
            else if (fieldObj.type === "MC" || fieldObj.type === "MultipleChoice" || fieldObj.type === "mc"){
                return(
                    <FormMultipleChoice 
                        key={fieldObj.id}

                        fieldObj={fieldObj}
                        titleStyle={fieldsTitleStyle}
                        captionStyle={captionTextStyle}

                        onChange={onFieldChange}
                        type={fieldObj?.type ? fieldObj.type : "Bubble"}

                        setNewFieldValue={handleSetFieldsState}
                        options={fieldObj.options}
                        singleOption={fieldObj.singleOption !== null ? fieldObj.singleOption : true}
                        min={fieldObj.min ? fieldObj.min : null}
                        limit={fieldObj.limit ? fieldObj.limit : null}
                    />
                )
            }
            else if (fieldObj.type === "MultiText" || fieldObj.type === "Multiple Text" || fieldObj.type === "Multi Text"){
                return(
                    <FormMultipleText 
                        key={fieldObj.id ? fieldObj.id : index}

                        boxStyle={fieldsBoxStyle}
                        fieldObj={fieldObj}
                        titleStyle={fieldsTitleStyle}
                        captionStyle={captionTextStyle}

                        onChange={onFieldChange}
                        setNewFieldValue={handleSetFieldsState}
                        
                        fieldID={fieldObj.id}
                        correctResponse={fieldObj.correctResponse ? fieldObj.correctResponse : false}
                        validResponse={fieldObj.validResponse ? fieldObj.validResponse : false}
                        limit={fieldObj.limit}
                        minLength={fieldObj.minLength}
                    />
                )
            }
        }

        // Renders the Form Submission Button
        function renderSubmit(){
            return(
                <OstrichButton 
                 style={determineSubmitStyle()}
                 title={submitButtonTitle}
                 activeColor={submitButtonStyleFinal.backgroundColor}
                 inactiveColor={submitButtonInactiveStyleFinal.backgroundColor}
                 titleStyle={submitButtonTextStyleFinal}
                 isActive={canSubmit}
                 onSubmit={() => submitForm()}
                />
            )
        }

    ////////////////////
    // Input Checkers //
    ////////////////////

        // Checks all Input Props
        async function checkInputs() {
            checkTitle();
            checkFields();
            finalizeStyles();
        
            const res = await finalizeFieldsState();
            setFieldsState({ ...res }); 
        }

        // Checks if Title prop is supplied (Needed)
        function checkTitle(){
            if (!title){
                console.warn("Ostrich Form Component was not supplied a 'title' prop. Ignore this warning if this was done intentiionally.")
            }
        }

        // Checks if Fields prop is supplied (Needed)
        function checkFields(){
            if (!fields){
                throw new Error("Ostrich Form Components need a 'fields' prop supplied!")
            }
        }

        // Converts Fields into Object
        async function finalizeFieldsState(){
            let temp = {}
            await fields.map((field, index) => {
                let id = field.id ? field.id : (index + 1)
                if (id){
                    temp[id] = {...field, id: id, isCorrect: false, isWrong: false}
                }
            })
            return (temp)
        }

    //////////////////
    // Style Checks //
    //////////////////

        function finalizeStyles(){
            checkStyle()
            checkTitleBoxStyle()
            checkTitleTextStyle()
            checkFieldsBoxStyle()
            checkSubmitStyles()
        }

        // Checks Style prop
        function checkStyle(){
            let temp = {
                border: "2px solid black",
                borderRadius: 20,
                paddingLeft: 20,
                paddingRight: 20,
                box: '2px 3px 3px rgba(0, 0, 0, 0.1)',
            }
            let final = {...temp, ...style}
            setStyleFinal(final)
        }

        // Checks if Title Box Style is provided 
        function checkTitleBoxStyle(){
            let temp = {
                alignItems: 'center',
                paddingBottom: 10,
                paddingTop: 10,
            }
            let final = {...temp, ...titleBoxStyle}
            setTitleStyleFinal(final)
        }

        // Checks if Title Text Style is provided
        function checkTitleTextStyle(){
            let temp = {
                fontSize: 24,
                fontWeight: 600,
                fontFamily: "Gilroy",
                paddingBottom: 1,
                marginBottom: 5,
                marginTop: 0,
                paddingTop: 5,
                textAlign: 'center',
            }
            let final = {...temp, ...titleTextStyle}
            setTitleTextStyleFinal(final)
        }

        // Checks if Title Box Style is provided 
        function checkFieldsBoxStyle(){
            let temp = {
                alignItems: 'center',
                paddingBottom: 10,
                paddingTop: 10,
                borderTop: "2px solid black",
                width: '90%',
                marginLeft: '5%'
            }
            let final = {...temp, ...fieldsBoxStyle}
            setFieldsBoxStyleFinal(final)
        }

        // Checks Submission Button Style
        function checkSubmitStyles(){
            let temp = {
                border: "0.0px solid black",
                borderRadius: 20,
                height: 50, width: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0, margin: 0,
                marginTop: 20, marginLeft: '5%'
            }
            let final = {...temp, backgroundColor: '#8ebbfa', ...submitButtonStyle}
            setSubmitButtonStyleFinal(final)
            final = {...temp, backgroundColor: '#9d9e9e',  border: "0.5px solid black", ...submitButtonInactiveStyle}
            setSubmitButtonInactiveStyleFinal(final)

            let tempText = {
                fontWeight: 600,
                justifyContent: 'center',
                display: 'flex',
                fontSize: 22,
                textAlign: 'center',
                textAlign: 'center',
                padding: 5,
            }
            setSubmitButtonTextStyleFinal({...tempText, ...submitButtonTextStyle})
        }

        // Determines the Style of the Submit Button (Active or Not)
        function determineSubmitStyle(){
            if (allowSubmit){
                return submitButtonStyleFinal
            }
            else {
                if (submitButtonInactiveStyle === "None"){
                    return null
                }
                else{
                    return submitButtonInactiveStyle
                }
            }
        }
    
    //////////////
    // Handlers //
    //////////////

        // Changes the Form FieldsState whenever an individual field is changed
        function handleSetFieldsState(singleFieldObj){
            let newFields = {...fieldsState}
            newFields[singleFieldObj.id] = singleFieldObj
            setFieldsState({...newFields})
        }

        function onFieldChange(singleFieldObj){
            handleSetFieldsState(singleFieldObj)
            if (onChange){
                onChange(singleFieldObj)
            }       
        }


    /////////////////////////
    // Submission Handlers //
    /////////////////////////

        // Determines whether or not the Form can be submitted. Runs on UseEffect
        function determineCanSubmit(){
            let submit = true 
            let fieldsKeys = Object.keys(fieldsState)
            fieldsKeys.forEach(fieldID => {
                if (fieldsState[fieldID].required !== false){
                    if (!fieldsState[fieldID].isValid){
                        submit = false
                    }
                }
            })
            return canSubmit
        }

        // Handles the Submission of the Form
        async function submitForm(){
            if (onSubmit){
                onSubmit(formData)
            }
            if (clearOnSubmit){
                setFormData({})
            }
            if (reviewOnSubmit){
                checkAllAnswersForCorrect()
            }
            setSubmitted(true)
            
        }

        function checkAllAnswersForCorrect(){
            let fieldsKeys = Object.keys(fieldsState)
            fieldsKeys.forEach(fieldID => {

                // If there is a correct response
                if (fieldsState[fieldID].correctResponse){

                    // If Correct Answer is provided as a function
                    if (typeof correctResponse === "function"){

                        // If the function fires correct
                        if (fieldsState[fieldID].correctResponse(fieldsState[fieldID])){
                            // Set as Correct
                            setFieldsState(prev => ({
                                ...prev, [fieldID]: {...prev[fieldID], isCorrect: true, isWromg: false}
                            }))
                        }

                        // if the fubnction fires incorrect
                        else{
                            // Set as Wrong
                            setFieldsState(prev => ({
                                ...prev, [fieldID]: {...prev[fieldID], isCorrect: false, isWrong: true}
                            }))
                        }
                    }

                    // If Correct Answer is provided as a value
                    else if (typeof correctResponse === "array"){

                        // If CorrectResponse === Current Value
                        if (fieldsState[fieldID].value === fieldsState[fieldID].correctResponse){
            
                            // Set as Correct
                            setFieldsState(prev => ({
                                ...prev, [fieldID]: {...prev[fieldID], isCorrect: true, isWromg: false}
                            }))
                        }

                        // If CorrectResponse !== Current Value
                        else{
            
                            // Set as Correct
                            setFieldsState(prev => ({
                                ...prev, [fieldID]: {...prev[fieldID], isCorrect: false, isWromg: true}
                            }))
                        }
                    }
                }

                // If there is no particular correct response
                // Set as Correct
                setFieldsState(prev => ({
                    ...prev, [fieldID]: {...prev[fieldID], isCorrect: true}
                }))
            })
        }


        // Updates the existing fields with "Correct" or "Incorrect" properties to dictate green or red border
        async function updateFieldsWithAnswerCheck(checkedAns){
            if (fieldsState && checkedAns){
                let answerKeys = Object.keys(checkedAns)
                let tempFields = {...fieldsState}
                answerKeys.forEach(key => {
                    tempFields[key].isCorrect = ((checkedAns[key] === "Correct")? true : false)
                    tempFields[key].isWrong = ((checkedAns[key] === "Incorrect")? true : false)
                })
                return tempFields
            }
            else{
                console.warn("Missing either fieldsState or CheckedAnswerData")
                return {}
            }
        }




    /////////////////
    // Main Return //
    /////////////////
    if (loading){
        return null
    }
    return(
        <OstCard style={{...styleFinal}}>
            {renderTitle()}
            <div style={{...fieldsBoxStyleFinal}}>
                {renderFields(fieldsState)}
            </div>
            {renderSubmit()}
        </OstCard>
    )
}

