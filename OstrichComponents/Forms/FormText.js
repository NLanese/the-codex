import React, {useEffect, useState} from "react";
import { OstCard } from "../Format/OstCard";
import PropTypes from 'prop-types';

export const FormText = ({
    boxStyle,
    inputSyle,
    fieldObj,
    titleStyle,
    captionStyle,
    onChange,
}) => {

    ///////////
    // State //
    ///////////

    const [titleStyleFinal, setTitleStyleFinal] = useState(false)
    const [captionStyleFinal, setCaptionStyleFinal] = useState(false)

    const [inputStyleFinal, setInputStyleFinal] = useState(false)
    const [inputFocused, setInputFocused] = useState(false)

    const handleFocus = (val) => setInputFocused(val);


    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        finalizeStyles()
    }, [])

    ///////////////
    // Functions //
    ///////////////

        // Finalizes all User Input Styles to Apply Defaults
        function finalizeStyles(){
            let temp = {
                fontSize: 24,
                fontWeight: 600,
                fontFamily: "Gilroy",
                margin: 3,
                paddingBottom: 1,
                marginBottom: 9
            }
            let final = {...temp, ...titleStyle}
            setTitleStyleFinal(final)
            temp.fontSize = 16
            temp.fontWeight = 600
            temp.color = 'grey'
            final = {...temp, ...captionStyle}
            setCaptionStyleFinal(final)

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
        }

        function determineInputStyle(){
            return {
                ...inputStyleFinal,
                ...(inputFocused ? { borderColor: 'blue', borderBottom: 0, outline: 'none', boxShadow: '0 0 0 2px rgba(0, 0, 255, 0.3)' } : {})
            }
        }

        // Handles any changes in text field
        function handleInput(event){
            if (fieldObj.onChange){
                fieldObj.onChange(event.target.value, fieldObj)
            }
            onChange(event.target.value, fieldObj)
        }

    ////////////////
    // Renderings //
    ////////////////

        // Renders the Field's Description / Caption
        function renderCaption(){
            if (fieldObj.caption){
                return(
                    <span style={{...captionStyleFinal}}>
                        {fieldObj.caption}
                    </span>
                )
            }
        }

    /////////////////
    // Main Return //
    /////////////////

        return(
            <OstCard style={boxStyle}>
                <p style={{...titleStyleFinal}}>
                    {fieldObj.title} {renderCaption()}
                </p>
                <input 
                    type={fieldObj.type}
                    value={fieldObj.value}
                    onChange={(event) => handleInput(event)}
                    onFocus={() => handleFocus(true)}
                    onBlur={() => handleFocus(false)}
                    style={fieldObj.formHidden ? { display: 'none' } : determineInputStyle()}
                    placeholder={fieldObj.placeholder? fieldObj.placeholder : ""}
                />
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