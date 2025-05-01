import React, {useEffect, useState, useRef} from "react";
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


    // Value
    const [value, setValue] = useState("")



    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        finalizeStyles()
        setIsLoading(false)
        if (fieldObj.value){
            setValue(fieldObj.value)
        }
    }, [])

    const prevValueRef = useRef();
    useEffect(() => {
        if (prevValueRef.current !== value) {
            fieldObj.value = value;
            prevValueRef.current = value;
            if (onChange) {
                onChange(fieldObj);
            }
        }
    }, [value]);

    ///////////////
    // Functions //
    ///////////////

        // Finalizes all User Input Styles to Apply Defaults
        function finalizeStyles(){

            // Sets Title, Caption and MoreText
            let temp = {
                fontSize: 24,
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
            temp.fontWeight = 500
            temp.color = '#3d3d3d'
            if (fieldObj.moreTextStyle){
                final = {...temp, ...fieldObj.moreTextStyle}
            }
            else{
                final = {...temp, ...final}
            }
            setMoreTextStyleFinal(final)


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
            final = {...tempBox, ...boxStyle}
            setBoxStyleFinal(final)
        }

        function determineInputStyle(){
            return {
                ...inputStyleFinal,
                ...(inputFocused ? { borderColor: 'blue', borderBottom: 0, borderRadius: 15, outline: 'none', boxShadow: '0 0 0 2px rgba(0, 0, 255, 0.3)' } : {})
            }
        }

        // Handles any changes in text field
        function handleInput(event){
            if (fieldObj.onChange){
                fieldObj.onChange(event.target.value, fieldObj)
            }
            setValue(event.target.value)
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

        function MAIN(){
            if (isLoading){
                return null
            }
            else{
                // console.log(fieldObj.value)
                return(
                    <>
                        <p style={{...titleStyleFinal}}>
                            {fieldObj.title} {renderCaption()}
                        </p>
                        <div style={{display: 'flex'}}>
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
                    </>
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