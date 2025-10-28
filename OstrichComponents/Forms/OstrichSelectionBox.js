import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';

export const OstrichSelectionBox = ({
    option,
    selected = false,
    onSelect,
    type,
    fieldObj = false,

    titleStyle,

    optionType = "bubble",
    optionStyle,
    selectedOptionStyle,
    incorrectOptionStyle, 
    correctOptionStyle,

    circleStyle = {border: "2px solid black", borderRadius: 32, height: 32, width: 32},

    containerStyle,

    correct = false,
    incorrect = false,
    
}) => {
    
    ////////////
    // States //
    ////////////


        // Style States
        const [titleStyleFinal, setTitleStyleFinal] = useState({})
        const [optionStyleFinal, setOptionStyleFinal] = useState({})
        const [incorrectStyleFinal, setIncorrectStyleFinal] = useState({})
        const [correctStyleFinal, setCorrectStyleFinal] = useState({})
        const [selectedStyleFinal, setSelectedStyleFinal] = useState({})
        const [containerStyleFinal, setContainerStyleFinal] = useState({})
        
        // Hovered Toggled
        const [isHovered, setIsHovered] = useState(false)
        const hoverRef = useRef(isHovered)

        useEffect(() => {
            hoverRef.current = isHovered
        }, [isHovered])

        // Loading
        const [loading, setLoading] = useState(true)

        // Option Value
        const [tag, setTag] = useState(null)

    /////////////////
    // Use Effects //
    /////////////////

    useEffect(() => {
        handleInititalState()
        setLoading(false)
    }, [])

    ///////////////
    // Functions //
    ///////////////

        // Sets Hovered to True
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        // Handles Hovered to False
        const handleMouseLeave = () => {
            if (!dropDeployed) {
                setIsHovered(false);
            }
        };


        // Loads initial styles and finds tag from object
        const handleInititalState = () => {

            // Tag Finding
            if (typeof option === "string"){
                setTag(option)
            }
            else{
                setTag(option.tag)
            }

            // Style Setting
            let temp = {
                border: "0.0px solid black", borderRadius: 32, 
                height: 32, width: 32, minHeight: 32, minWidth: 32, 
                justifySelf: 'center',
                backgroundColor: '#bdbdbd'
            }

            temp = {...optionStyle, ...temp}
            if (optionType === "bubble" || optionType === "Bubble" || optionType === "Circle" || optionType === "circle"){
                temp.borderRadius = temp.width 
            }

            else if (optionType === "box" || optionType === "Box"){
                temp.width = 50
                temp.height = 50
            }

            setOptionStyleFinal(temp)
            setIncorrectStyleFinal({...temp, borderColor: '#57a5f2', backgroundColor: '#9cc6f0', incorrectOptionStyle})
            setSelectedStyleFinal({...temp, borderColor: '#57a5f2', backgroundColor: '#9cc6f0', selectedOptionStyle})
            setCorrectStyleFinal({...temp, borderColor: '#57f25f', backgroundColor: '#a8ffad', correctOptionStyle})

            let tempTitle = {
                fontSize: 22,
                fontWeight: 600,
                fontFamily: "Gilroy",
                margin: 3,
                paddingBottom: 1,
                paddingLeft: 10,
                marginBottom: 0,
                textAlignVertical: 'center',
            }
            setTitleStyleFinal({...tempTitle, ...titleStyle, ...fieldObj.textStyle})

            let tempContainer = {display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', ...containerStyle}
            setContainerStyleFinal(tempContainer)
        }

        // Handles Selection of Option
        const handleSelectionClick = (tag) => {
            onSelect(tag)
            if (fieldObj && fieldObj.onChange){          // If there is a Field Obj and Field Obj Function  
                fieldObj.onChange(tag, fieldObj)         // Fire the Field Obj Function
            }
        }

        const determineTextStyle = () => {
            if (typeof option === "string"){
                return titleStyleFinal
            }
            else{
                return {...titleStyleFinal, ...option.textStyle}
            }
        }

    ////////////////
    // Renderings //
    ////////////////

        // Determines Whether Selected or Default Style for BUBBLE
        function determineOptionStype(){
            if (correct){
                return correctStyleFinal
            }
            else if (incorrect){
                return incorrectStyleFinal
            }
            else if (selected){
                return selectedStyleFinal;
            }
            else{
                return optionStyleFinal;
            }
        }

        // Renders the Selection Circle
        function renderOption(){
            return(
                <div style={{height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <button
                        style={determineOptionStype()}
                        onClick={() => handleSelectionClick(tag)}
                    ></button>
                </div>
               
            )
        }

        // Renders For BUBBLE
        function renderOptionBox(){
            return(
                <div style={containerStyleFinal}>
                   {renderOption()}
                   <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100%",}}>
                        <p style={determineTextStyle()}>
                            {tag}
                        </p>
                    </div>
                </div>
            )
        }


    /////////////////
    // Main Return //
    /////////////////
    return renderOptionBox()
    
}