import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { OstrichSelectionBox } from './OstrichSelectionBox';

export const FormMultipleChoice = ({
    fieldObj,
    titleStyle,
    fieldStyle,
    captionStyle,
    onChange,
    type="Bubble",
    options,
}) => {
    
    ////////////
    // States //
    ////////////

    const [selectedAnswer, setSelectedAnswer] = useState([])
    console.log("This FieldObj --- ", fieldObj )

    ///////////////
    // Functions //
    ///////////////

        // Selects Current Field and Sends Data back to Ostrich Form. Also runs any custom Field Function
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
                    <div style={{...captionStyle}}>
                        {fieldObj.caption}
                    </div>
                )
            }
        }

        function renderOptions(){
            console.log(fieldObj.options)
        }

        function renderOptionsRow(rowOptions){
            let limit = 2
            if (type === "Box" || type === "box"){
                limit = 3
            }
            if (rowOptions.length < 2){
                return(
                    <OstrichSelectionBox 
                    tag={rowOptions[0]}
                    selected={isTagSelected(rowOptions[0])}
                    onSelect={handleInput}
                    />
                )
            }
            else if (rowOptions.length < 3){
                return(
                    <div style={{display: 'flex', flexDirection: 'space-evenly'}}>
                        <OstrichSelectionBox 
                        tag={rowOptions[0]}
                        selected={isTagSelected(rowOptions[0])}
                        onSelect={handleInput}
                        type={type}
                        />
                        <OstrichSelectionBox 
                        tag={rowOptions[0]}
                        selected={isTagSelected(rowOptions[1])}
                        onSelect={handleInput}
                        type={type}
                        />
                    </div>
                )
            }
            else{
                return(
                    <div style={{display: 'flex', flexDirection: 'space-evenly'}}>
                        <OstrichSelectionBox 
                        tag={rowOptions[0]}
                        selected={isTagSelected(rowOptions[0])}
                        onSelect={handleInput}
                        type={type}
                        />
                        <OstrichSelectionBox 
                        tag={rowOptions[1]}
                        selected={isTagSelected(rowOptions[1])}
                        onSelect={handleInput}
                        type={type}
                        />
                        <OstrichSelectionBox 
                        tag={rowOptions[2]}
                        selected={isTagSelected(rowOptions[2])}
                        onSelect={handleInput}
                        type={type}
                        />
                    </div>
                )
            }
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
                <div>
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