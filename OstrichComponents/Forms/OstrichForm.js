import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormText } from './FormText';
import { FormMultipleChoice } from './FormMultipleChoice';
import { OstrichButton } from '../Buttons/OstrichButton';

export const OstrichForm = ({
    title,                              // Form Title
    fields,                             // Object of objects that each represent a field in the Form
    submitButtonTitle="Submit",         // Title on Submit Button

    onChange,                           // Function to run on ANY field value change
    allowSubmit=true,                   // Boolean allowing Form to be Submitted or Locking it
    onSubmit,                           // Function to be run on Form Submission
    clearOnSubmit=true,                 // Whether or not values clear upon submission

    style,

    titleBoxStyle,
    titleTextStyle,
    captionTextStyle,

    fieldsBoxStyle,
    fieldsTitleStyle,

    submitButtonStyle,
    submitButtonIncativeStyle,
    submitTextStyle
}) => {

    ////////////
    // States //
    ////////////

        // Rendering States
        const [loading, setLoading] = useState(true)

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
        const [formData, setFormData] = useState({})
        

    /////////////
    // On Init //
    /////////////

    useEffect(() => {
        checkInputs()
        setLoading(false)
    }, [])


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
            return fields.map( (field, index) => {
                return (
                    <div key={index} style={{
                        borderWidth: 1, borderStyle: 'solid', borderColor: "#E9F1FF",
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
                        key={`field-${index}`}
                        fieldObj={fieldObj}
                        titleStyle={fieldsTitleStyleState}
                        captionStyle={captionTextStyle}
                        onChange={handleFormChange}
                    />
                )
            }
            else if (fieldObj.type === "MC" || fieldObj.type === "MultipleChoice" || fieldObj.type === "mc"){
                return(
                    <FormMultipleChoice 
                        key={`field-${index}`}
                        fieldObj={fieldObj}
                        titleStyle={fieldsTitleStyleState}
                        captionStyle={captionTextStyle}
                        onChange={handleFormChange}
                        options={fieldObj.options}
                    />
                )
            }
        }

        // Renders the Form Submission Button
        function renderSubmit(){
            return(
                <OstrichButton 
                 style={submitStyle}
                 title={submitButtonTitle}
                 activeColor={"rgba(73, 148, 244, 1)"}
                 inactiveColor={"rgba(215, 216, 218, 1)"}
                 titleStyle={submitText}
                 isActive={allowSubmit}
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

        function handleFormChange(value, field=false){
            determineOnChange(value, field)
            if (field && field.type === "text"){
                setFormData(previous => ({...previous, 
                    [field.title]: value
                }))
            }
            else if (field && field.type === "MC"){

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

        function submitForm(){
            onSubmit(formData)
            if (clearOnSubmit){
                setFormData({})
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
                {renderFields(fields)}
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
          correctResponse: PropTypes.string
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitButtonStyle: PropTypes.object,
};