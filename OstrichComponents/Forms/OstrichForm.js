import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormText } from './FormText';
import { FormMultipleChoice } from './FormMultipleChoice';
import { OstrichButton } from '../Buttons/OstrichButton';

export const OstrichForm = ({
    title,                              // Form Title
    fields,                             // Object of objects that each represent a field in the Form
    submitButtonTitle="Submit",         // Title on Submit Button
    allFieldsRequired=true,
    formLocked=false,                   // If the form had previously been completed and is not allowed for resubmit, this locks it and displays pastAnswerData if possible
    pastAnswerData={},                  // Previous Answer Data to be displayed if form is locked

    correctResponse=false,
    showWrongAnswers=false,             // WIP -- Would show the correct answer if the user got the answer incorrect and submitted the form
    allowResubmission=false,            // Allows form resubmission. If False, form is locked.

    onChange,                           // Function to run on ANY field value change
    allowSubmit=true,                   // Boolean allowing Form to be Submitted or Locking it
    onSubmit,                           // Function to be run on Form Submission
    reviewOnSubmit,                     // Whether or not after submission, shows x / total correct
    clearOnSubmit=false,                // Whether or not values clear upon submission

    style,

    titleBoxStyle,
    titleTextStyle = {fontSize: 24, padding: 5, fontWeight: 600},

    fieldsBoxStyle,
    fieldsTitleStyle = {fontSize: 24, padding: 5, fontWeight: 600},
    captionTextStyle = {fontSize: 18, padding: 3, fontWeight: 400},

    submitButtonStyle,
    submitButtonIncativeStyle,
    submitTextStyle
}) => {

    ////////////
    // States //
    ////////////

        // Rendering States
        const [loading, setLoading] = useState(true)
        const [submitted, setSubmitted] = useState(false)

        // Style States //
        const [styleState, setStyleState] = useState(style)
        const [titleBoxStyleState, setTitleBoxStyleState] = useState(titleBoxStyle)
        const [titleTextStyleState, setTitleTextStyleState] = useState(titleTextStyle)
        const [fieldsBoxStyleState, setFieldsBoxStyleState] = useState(fieldsBoxStyle)
        const [fieldsTitleStyleState, setFieldsTitleStyleState] = useState(fieldsTitleStyle)
        const [inactiveSubmitStyle, setInactiveSubmitStyle] = useState(submitButtonIncativeStyle)
        const [submitStyle, setSubmitStyle] = useState(submitButtonStyle)
        const [submitText, setSubmitText] = useState(submitTextStyle)


        // Data States
        const [fieldsState, setFieldsState] = useState(fields)
        const [formData, setFormData] = useState({})
        const [canSubmit, setCanSubmit] = useState( (!allFieldsRequired && allowSubmit) ? true : false )
        

    /////////////
    // On Init //
    /////////////

        // Sets Form for Entry
        useEffect(() => {
            checkInputs()
            setLoading(false)
        }, [])

        // Populates Form with Inputted Data
        useEffect(() => {
            let fieldsAsObject = {}
            if (Array.isArray(fieldsState)){
                fieldsState.forEach(field => {
                    fieldsAsObject[field.id] = field
                })
            }
            setFieldsState(fieldsAsObject)
        }, [])

    ///////////////////////////////////
    // After Every Form Value Change //
    ///////////////////////////////////

        // Determines if Submit is allowed or not
        useEffect(() => {
            if (Object.keys(formData).length === Object.keys(fieldsState).length){
                if (submitted){
                    if (allowResubmission){
                        setCanSubmit(true)
                    }
                    else{
                        setCanSubmit(false)
                    }
                }
                
            }
            else{
                setCanSubmit(false)
            }
        }, [formData])
        
    //////////////////
    // After Submit //
    //////////////////

        // Double Fires Style Changes after submission
        useEffect(() => {
            console.log("Fields State after submit detected")
            console.log(fieldsState)
            // console.log("Re-Setting the fields after submission")
            // setFieldsState(fieldsState)
        }, [submitted])

    ////////////////
    // Renderings //
    ////////////////

        // Renders the Form Title
        function renderTitle(){
            return(
                <div style={{...titleBoxStyleState}}>
                    <div style={{...titleTextStyleState}}>
                        {title}
                    </div>
                </div>
            )
        }

        // Renders All Fields
        function renderFields(fields){
            let fieldsKeys = Object.keys(fieldsState)
            return fieldsKeys.map( (fieldKey, index) => {
                let field = fieldsState[fieldKey]
                return (
                    <div key={index} style={{
                        borderWidth: (field.isCorrect ? 4 : 2), borderStyle: 'solid', borderColor: (field.isCorrect ? "#14f20c" :  (field.isWrong ? "#d6111b" : "#E9F1FF")),
                        marginBottom: 8, padding: 8,
                        boxShadow: '2px 3px 3px rgba(0, 0, 0, 0.1)',
                    }}>
                        {renderSingleField(field, index, fieldsTitleStyle)}
                    </div>
                )
            })
        }

        // Renders a Single Field
        function renderSingleField(fieldObj, index){
            if (fieldObj.type === "text" || fieldObj.type === "password" || fieldObj.type === "tel"){
                return(
                    <FormText 
                        key={fieldObj.id}
                        fieldObj={fieldObj}
                        titleStyle={fieldsTitleStyleState}
                        captionStyle={captionTextStyle}
                        onChange={handleFormChange}
                        fieldID={fieldObj.id}
                    />
                )
            }
            else if (fieldObj.type === "MC" || fieldObj.type === "MultipleChoice" || fieldObj.type === "mc"){
                return(
                    <FormMultipleChoice 
                        key={fieldObj.id}
                        fieldObj={fieldObj}
                        titleStyle={fieldsTitleStyleState}
                        captionStyle={captionTextStyle}
                        onChange={handleFormChange}
                        options={fieldObj.options}
                        fieldID={fieldObj.id}
                    />
                )
            }
        }

        // Renders the Form Submission Button
        function renderSubmit(){
            if (submitted && reviewOnSubmit){
                return(
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 5}}>
                        <OstrichButton 
                            style={determineSubmitStyle()}
                            title={submitButtonTitle}
                            activeColor={"rgba(73, 148, 244, 1)"}
                            inactiveColor={"rgba(215, 216, 218, 1)"}
                            titleStyle={submitText}
                            isActive={canSubmit}
                            onSubmit={submitForm}
                        />
                        </div>
                        <div style={{flex: 7}}>

                        </div>
                    </div>
                )
            }
            return(
                <OstrichButton 
                 style={determineSubmitStyle()}
                 title={submitButtonTitle}
                 activeColor={"rgba(73, 148, 244, 1)"}
                 inactiveColor={"rgba(215, 216, 218, 1)"}
                 titleStyle={submitText}
                 isActive={canSubmit}
                 onSubmit={submitForm}
                />
            )
        }

    ////////////////////
    // Input Checkers //
    ////////////////////

        // Checks all Input Props
        function checkInputs(){
            checkStyle()
            checkTitle()
            checkFields()
            checkTitleBoxStyle()
            checkTitleTextStyle()
            checkFieldsBoxStyle()
            checkFieldTitleStyle()
            checkSubmitStyles()
            checkInactiveSubmitStyle()
            checkSubmitTextStyle()
        }

        // Checks if Title prop is supplied (Needed)
        function checkTitle(){
            if (!title){
                throw new Error("Ostrich Form Components need a 'title' prop!")
            }
        }

        // Checks if Fields prop is supplied (Needed)
        function checkFields(){
            if (!fields){
                throw new Error("Ostrich Form Components need a 'fields' prop supplied!")
            }
        }

    //////////////////
    // Style Checks //
    //////////////////

        // Checks Style prop
        function checkStyle(){
            if (!styleState){
                setStyleState({
                    border: "2px solid #E9F1FF",
                    borderRadius: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    box: '2px 3px 3px rgba(0, 0, 0, 0.1)',
                })
            }
        }

        // Checks if Title Box Style is provided 
        function checkTitleBoxStyle(){
            if (!titleBoxStyleState){
                setTitleBoxStyleState({
                    alignItems: 'center',
                    paddingBottom: 10,
                    paddingTop: 10,
                })
            }
        }

        // Checks if Title Text Style is provided
        function checkTitleTextStyle(){
            if (!titleTextStyleState){
                setTitleTextStyleState({
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: 'center',
                })
            }
        }

        // Checks if Title Box Style is provided 
        function checkFieldsBoxStyle(){
            if (!fieldsBoxStyleState){
                setFieldsBoxStyleState({
                    alignItems: 'center',
                    paddingBottom: 10,
                    paddingTop: 10,
                })
            }
        }

        // Checks if Title Text Style is provided
        function checkFieldTitleStyle(){
            if (!fieldsTitleStyleState){
                setFieldsTitleStyleState({
                    fontWeight: 500,
                    fontSize: 20,
                    textAlign: 'left',
                })
            }
        }

        // Checks Submission Button Style
        function checkSubmitStyles(){
            if (!submitStyle){
                setSubmitStyle({
                    border: "2px solid #E9F1FF",
                    borderRadius: 20,
                    backgroundColor: 'grey',
                    width: 140,
                    height: 55,
                    boxShadow: '2px 3px 3px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 20
                })
            }
        }

        // Checks Inactice Submit Button
        function checkInactiveSubmitStyle(){
            if (!inactiveSubmitStyle){
                setInactiveSubmitStyle({
                    border: "2px solid #E9F1FF",
                    borderRadius: 20,
                    backgroundColor: 'grey',
                    width: 140,
                    height: 55,
                    boxShadow: '2px 3px 3px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 20
                })
            }
        }

        // Checks Submission Text Style
        function checkSubmitTextStyle(){
            if (!submitText){
                setSubmitText({
                    fontWeight: 700,
                    fontSize: 22,
                    textAlign: 'center',
                    textAlign: 'center',
                    paddingTop: 12
                })
            }
        }

        // Determines the Style of the Submit Button (Active or Not)
        function determineSubmitStyle(){
            if (allowSubmit){
                return submitStyle
            }
            else {
                return inactiveSubmitStyle
            }
        }
    
    //////////////
    // Handlers //
    //////////////

        // Fires on every Form Change (All User Input on Forms)
        function handleFormChange(value, fieldObj=false){
            determineOnChange(value, fieldObj)
            if (fieldObj && fieldObj.type === "text"){
                setFormData(previous => ({...previous, 
                    [fieldObj.id]: value
                }))
            }
            else if (fieldObj && fieldObj.type === "MC" || fieldObj.type === "MultipleChoice" || fieldObj.type === "mc"){
                handleMultiChoiceChange(value, fieldObj)
            }
        }

        // Determines whether or not to fire a custom or default 'onChange' function
        function determineOnChange(value, field){

            // If no OnChange Function was Provided
            const defaultOnChange = (value, field) => {return}
            if (!onChange){
                defaultOnChange(value, field)
            }

            // If an OnChange Function was Provided
            else{
                onChange(value, field)
            }
        }

        // Handles Changes to the Form when the Field Changed is of type Multiple Choice
        function handleMultiChoiceChange(value, fieldObj){
            if (fieldObj.multiAnswer && formData[fieldObj.id]){              // If Multiple Answers Accepted
                if (formData[fieldObj.id]){      // If Field exists already in FormData Object
                    setFormData(previous => ({...previous, 
                        [fieldObj.id]: [...formData[fieldObj.id], value]
                    }))
                }
            }
            else{                               // If the field is not yet present in FormData Object
                setFormData(previous => ({...previous, 
                    [fieldObj.id]: [value]
                }))
            }
        }

    /////////////////////////
    // Submission Handlers //
    /////////////////////////

        // Handles the Submission of the Form
        async function submitForm(){
            if (onSubmit){
                onSubmit(formData)
            }
            if (clearOnSubmit){
                setFormData({})
            }
            else if (correctResponse){
                checkAgainstAllAnswers().then( async (checkedAns) => {
                    return checkedAns
                }).then(checkedAns => {
                    return updateFieldsWithAnswerCheck(checkedAns)
                }).then( async (tempFields) => {
                    setFieldsState(tempFields)
                })
            }
            setSubmitted(true)
        }

        // If correctResponse, checks all submitted values against the correct answers
        async function checkAgainstAllAnswers(){
            let answerKeys = Object.keys(correctResponse)
            let checkedAnswers = {}
            answerKeys.forEach(answerKey => {
                if (checkSingleAnswer(answerKey)){
                    checkedAnswers[answerKey] = "Correct"
                }
                else{
                    checkedAnswers[answerKey] = "Incorrect"
                }
            })
            return checkedAnswers
        }

        // Checks if a single answer'd question matches the values of the correct answer
        function checkSingleAnswer(key){
            let isCorrect = true
            let isWrong = false
            if (formData[key]){
                if (correctResponse[key]){
                    correctResponse[key].forEach((correctAns) => {
                        if (!formData[key].includes(correctAns)){
                            isCorrect = false
                            isWrong = true
                        }
                    })
                    formData[key].forEach(inputAnswer => {
                        if (!correctResponse[key].includes(inputAnswer)){
                            isCorrect = false
                            isWrong = true
                        }
                    })
                }
                else{
                    isCorrect = false
                }
            }
            else {
                isCorrect = false
            }

            return isCorrect
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
                console.log("Missing either fieldsState or CheckedAnswerData")
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
        <div style={{...styleState}}>
            {renderTitle()}
            <div style={{...fieldsBoxStyleState}}>
                {renderFields(fieldsState)}
            </div>
            {renderSubmit()}
        </div>
    )
}


OstrichForm.propTypes = {
    title: PropTypes.string.isRequired,         // Title (String)
    titleBoxStyle: PropTypes.object,            // Title Container Style 
    titleTextStyle: PropTypes.object,           // Title Text Style

    fieldsBoxStyle: PropTypes.object,           // Form Fields' Container Style
    fieldTitleStyle: PropTypes.object,          // Form Fields' Title Style
    fields: PropTypes.arrayOf(                  // Fields- Each Field is an Input
        PropTypes.shape({
          title: PropTypes.string.isRequired,   // Field title
          caption: PropTypes.string,            // Field Description / Caption
          type: PropTypes.string.isRequired,    // Text, MC, True or False
          onChange: PropTypes.func.isRequired,  // OnChange Function
          value: PropTypes.any.isRequired,      // Value of Input
          fieldHidden: PropTypes.bool,
          style: PropTypes.object,
          placeholder: PropTypes.string,
          possibleResponses: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitButtonStyle: PropTypes.object,
};