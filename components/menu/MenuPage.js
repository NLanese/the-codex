// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tabBarState} from "../../recoil/atoms";

// Constants
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";
import BasicDefinitionsList from "../../constants/basicDefinitions";

// Next JS
import { useRouter } from "next/router";

// Components
import ListPage from "../global/listPage";
import DefinitionList from "../../OstrichComponents/DefinitionsList/DefinitionList";

export const MenuPage = ({onLessonClick, lessons}) => {

    ///////////
    // State //
    ///////////


    ////////////////
    // Renderings //
    ////////////////

    function renderLessonsList(){
        return(
            <div style={{ 
                marginTop: 45, marginRight: 15,
                padding: 15,
                justifyContent: 'center', 
                backgroundColor: Colors.offWhite, 
                boxShadow:'-2px -2px -1px -1px rgba(-1, -1, -1, 0.1)'
            }}>
                <p style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                    Lessons
                </p>
                <ListPage 
                    items={lessons}
                    onClick={onLessonClick}
                    size="sm"
                />
            </div>
        )
    }

    function renderDefinitions(){
        return(
            <DefinitionList
                definitionsList={BasicDefinitionsList}
            />
        )
    }
   
    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                {renderLessonsList()}
            </div>
            <div style={{display: 'flex', maxHeight: 700, overflow: 'scroll'}}>
                {renderDefinitions()}
            </div>
        </div>
    )
}