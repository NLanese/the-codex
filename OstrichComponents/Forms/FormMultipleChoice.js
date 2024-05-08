import React from 'react';
import PropTypes from 'prop-types';
import { OstrichSelectionBox } from './OstrichSelectionBox';

export const FormMultipleChoice = ({
    fieldObj,
    titleStyle,
    captionStyle,
    onChange,
    options,
}) => {
    
    ////////////
    // States //
    ////////////

    const [selectedAnswer, setSelectedAnswer]

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

        // Renders the Field's Description / Caption
        function renderCaption(){
            if (fieldObj.caption){
                return(
                    <div style={{...captionStyle}}>
                        {fieldObj.caption}
                    </div>
                )
            }
        }

        function renderOptions(){
            let i = 0
        }

        function renderOptionsRow(options){
            if (options.length < 2){
                return(
                    <OstrichSelectionBox 
                    tag={options[0]}
                    selected={isTagSelected(options[0])}

                    />
                )
            }
            else{
                return(
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <
                    </div>
                )
            }
        }

    /////////////////
    // Main Return //
    /////////////////

        return(
            <div style={}>
                <div style={{...titleStyle}}>
                    {fieldObj.title}
                </div>
                {renderCaption()}
                <div>
                   
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