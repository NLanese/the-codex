import React from 'react';
import PropTypes from 'prop-types';

export const FormText = ({
    fieldObj,
    titleStyle,
    captionStyle,
    onChange,
}) => {

    ///////////////
    // Functions //
    ///////////////

        // Handles any changes in text field
        function handleInput(event){
            if (fieldObj.onChange){
                fieldObj.onChange(event.target.value, fieldObj)
            }
            onChange(event.target.value, fieldObj)
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

    ////////////////
    // Renderings //
    ////////////////

        function renderCaption(){
            if (fieldObj.caption){
                return(
                    <div style={{...captionStyle}}>
                        {fieldObj.caption}
                    </div>
                )
            }
        }

    /////////////////
    // Main Return //
    /////////////////

        return(
            <div>
                <div style={{...titleStyle}}>
                    {fieldObj.title}
                </div>
                {renderCaption()}
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
FormText.propTypes = {
    fieldObj: PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        value: PropTypes.any.isRequired,
        fieldHidden: PropTypes.bool,
        style: PropTypes.object,
        placeholder: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    titleStyle: PropTypes.object,
};