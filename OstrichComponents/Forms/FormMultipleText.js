import React, {useEffect, useState, useRef} from 'react';
import { FormText } from './FormText';
import { OstCard } from '../Format/OstCard';

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

    function renderSubmittedAnswers(){

    }

    function MAIN(){
        if (isLoading){
            return null
        }
        else{
            return(
                <div style={{width: '95%', height: 'auto'}}>
                    <div style= {{display: 'flex', flexDirection: 'row'}}>
                        <FormText 
                            boxStyle={{flex: 8}}
                            inputSyle={inputSyle}
                            fieldObj={fieldObj}
                            titleStyle={titleStyle}
                            captionStyle={captionStyle}
                            onChange={onChange}
                            setNewFieldValue={setNewFieldValue}
                            hasValidResponse={false}
                            correctDisplay={correctDisplay}
                        />
                        <OstCard style={{flex: 4}}>
                            Submit 
                        </OstCard>
                    <div>
                        {renderSubmittedAnswers()}
                    </div>
                </div>
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