import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';

export const OstrichSelectionBox = ({
    tag,
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
    boxStyle = {border: "2px solid black", borderRadius: 15, height: 55, minWidth: 100},

    selectedCircleStyle = {border: "2px solid black", backgroundColor: '#3b63bf', borderRadius: 32, height: 32, width: 32},
    selectedBoxStyle = {border: "2px solid black", backgroundColor: '#3b63bf', borderRadius: 15, height: 55, minWidth: 100, padding: 5},

    incorrectCircleStyle = {border: "2px solid black", backgroundColor: 'red', borderRadius: 32, height: 32, width: 32},
    incorrectBoxStyle = {border: "2px solid black", backgroundColor: 'red', borderRadius: 15, height: 55, minWidth: 100, padding: 5},


    correctCircleStyle = {border: "2px solid black", backgroundColor: 'green', borderRadius: 32, height: 32, width: 32},
    correctBoxStyle = {border: "2px solid black", backgroundColor: 'green', borderRadius: 15, height: 55, minWidth: 100, padding: 5},

    optionsTextStlye = {fontSize: 15, fontWeight: 800},
    hoverBorderColor,

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
        
        // Hovered Toggled
        const [isHovered, setIsHovered] = useState(false)
        const hoverRef = useRef(isHovered)

        useEffect(() => {
            hoverRef.current = isHovered
        }, [isHovered])

        // Loading
        const [loading, setLoading] = useState(true)

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

        const handleInititalState = () => {
            let temp = {
                border: "2px solid #efefef", borderRadius: 32, height: 32, width: 32, backgroundColor: '#bdbdbd'
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
            setCorrectStyleFinal({...temp, borderColor: '#57f25f', backgroundColor: '#a8ffad', selectedOptionStyle})

            let tempTitle = {
                fontSize: 18,
                fontWeight: 600,
                fontFamily: "Gilroy",
                margin: 3,
                paddingBottom: 1,
                marginBottom: 0,
            }
            setTitleStyleFinal({...tempTitle, titleStyle})
        }

        const handleSelectionClick = (tag) => {
            onSelect(tag)
            if (fieldObj && fieldObj.onChange){          // If there is a Field Obj and Field Obj Function  
                fieldObj.onChange(tag, fieldObj)         // Fire the Field Obj Function
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
                return circleStyle;
            }
        }

        // Renders the Selection Circle
        function renderOption(){
            return(
                <button
                    style={determineOptionStype()}
                    onClick={() => handleSelectionClick(tag)}
                ></button>
            )
        }

        // Renders For BUBBLE
        function renderOptionBox(){
            return(
                <div style={{display: 'flex', flexDirection: 'row'}}>
                   {renderOption()}
                   <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100%", paddingLeft: 10}}>
                        <p style={titleStyleFinal}>
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