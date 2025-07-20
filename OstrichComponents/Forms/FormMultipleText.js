import React, {useEffect, useState, useRef} from 'react';
import { FormText } from './FormText';

export const FormMultipleText = ({
    boxStyle,
    inputSyle,
    fieldObj,
    titleStyle,
    captionStyle,
    answerBoxStyle,
    onChange,
    setNewFieldValue,

    correctDisplay = "bubble", // or "bubble" or "fieldBubble"
    correctResponse,
    validResponse
}) => {
    ///////////
    // State //
    ///////////


    ////////////////
    // Renderings //
    ////////////////

    function MAIN(){
        if (isLoading){
            return null
        }
        else{
            return(
                <div style={{width: '95%', height: 'auto'}}>
                    <FormText 
                        inputSyle={inputSyle}
                        fieldObj={fieldObj}
                        titleStyle={titleStyle}
                        captionStyle={captionStyle}
                        onChange={onChange}
                        setNewFieldValue={setNewFieldValue}
                    />
                </div>
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