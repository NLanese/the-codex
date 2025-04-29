import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

export const FormText = ({
    boxStyle,
    fieldObj,
    titleStyle,
    captionStyle,
    onChange,
}) => {

    ///////////
    // State //
    ///////////

    const [titleStyleFinal, setTitleStyleFinal] = useState({})
    const [captionStyleFinal, setCaptionStyleFinal] = useState({})

    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        finalizeStyles()
    }, [])

    ///////////////
    // Functions //
    ///////////////

        function finalizeStyles(){
            let temp = {
                fontSize: 24,
                fontWeight: 600,
                fontFamily: "Gilroy",
                paddingBottom: 1,
                marginBottom: 1
            }
            let final = {...temp, ...titleStyle}
            setTitleStyleFinal(final)
            temp.fontSize = 18
            temp.fontWeight = 500
            temp.color = 'blue'
            final = {...temp, ...captionStyle}
            setCaptionStyleFinal(final)
        }

        // Handles any changes in text field
        function handleInput(event){
            if (fieldObj.onChange){
                fieldObj.onChange(event.target.value, fieldObj)
            }
            onChange(event.target.value, fieldObj)
        }

        // Determines the Input Style based on inputs or lackthereof
        function handleStyle(){
            let returnStyle;
            if (!fieldObj.style){
                returnStyle = {
                    marginTop: 10, marginLeft: '3%', marginRight: '3%',
                    height: 30, width: '94%',
                    fontSize: 18,
                    borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0
                }
            }
            else{
                returnStyle =  fieldObj.style
            }
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
            <div>
                <p style={{...titleStyleFinal}}>
                    {fieldObj.title} {renderCaption()}
                </p>
                <div>
                    <input 
                    type={fieldObj.type}
                    value={fieldObj.value}
                    onChange={(event) => handleInput(event)}
                    style={fieldObj.formHidden ? { display: 'none' } : {...handleStyle()}}
                    placeholder={fieldObj.placeholder? fieldObj.placeholder : ""}
                    />
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