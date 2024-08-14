import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { OstrichSelectionBox } from './OstrichSelectionBox';

export const FormMultipleChoice = ({
    fieldObj,               // If coming from a form, this object will represent the properties needed to fill this component
    titleStyle,             // Style of the Title for the Multiple Choice Question
    fieldStyle,             // 
    captionStyle = {fontSize: 18, padding: 5, fontWeight: 400},           //
    onChange,               // Function to fire whenever a value is selected or unselected
    type="Bubble",          // 
    options,                // Selection Options
    singleOption = true,    // One Answer or Multiple
    limit = false           // If Multiple Answers, the limit to how many
}) => {
    
    ////////////
    // States //
    ////////////

    const [selectedAnswer, setSelectedAnswer] = useState([])

    const [loading, setLoading] = useState(true)

    ////////////////
    // UseEffects //
    ////////////////

    // Sets options to Field Options if empty
    useEffect(() => {
        if (!options){
            if (!fieldObj.options){
                console.warn("[Ostrich Component Error] -- No Options provided in FormMultipleChoice Component. If <OstrichForm>, make sure that al of your FieldObjects that are of type 'MultipleChoice', 'MC', or 'mc' also have an 'options' property. This property should be an array of strings. If using a <FormMultipleChoice> component alone... for some reason... make sure you provide the options property, which is an array of strings.")
            }
            options = fieldObj.options
        }
        setLoading(false)
    }, [])

    ///////////////
    // Functions //
    ///////////////

        // Selects Current Field and Sends Data back to Ostrich Form. Also runs any custom Field Function
        function handleInput(event){
            if (fieldObj.onChange){
                fieldObj.onChange(event.target.value, fieldObj)
            }
            if (event.target){
                onChange(event.target.value, fieldObj)
            }
            else{
                console.warn("There was no event detected on MultipleChoice Input.")
            }
            
        }

        // Determines the Input Style based on inputs or lackthereof
        function handleStyle(){
            if (!fieldObj.style){
                return {
                    marginTop: 10, marginLeft: '3%', marginRight: '3%',
                    height: 30, width: '94%',
                    fontSize: 18,
                    borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0
                }
            }
            else{
                return fieldObj.style
            }
        }

        function isTagSelected(option){
            if (selectedAnswer.includes(option)){
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
                    <div style={{captionStyle}}>
                        {fieldObj.caption}
                    </div>
                )
            }
        }

        function renderOptions(){
            if (loading){
                return
            }
            if (fieldObj.options.length < 5){
                return(
                    <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        {renderOptionsRow(options)}
                    </div>
                )
            }
        }

        function renderOptionsRow(rowOptions){
            return rowOptions.map( (opt, index) => {
                console.log("Should render field ", opt)
                return(
                    <OstrichSelectionBox 
                    tag={opt}
                    selected={isTagSelected(opt)}
                    onSelect={handleInput}
                    key={index}
                    type={type}
                    />
                )
            })
        }

        function determineFieldStyle(){
            if (fieldObj.style){
                return fieldObj.style;
            }
            else{
                return fieldStyle;
            }
        }

    /////////////////
    // Main Return //
    /////////////////

        return(
            <div style={determineFieldStyle()}>
                <div style={{...titleStyle}}>
                    {fieldObj.title}
                </div>
                {renderCaption()}
                <div style={{padding: 5, paddingTop: 15}}>
                    {renderOptions()}
                </div>
            </div>
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