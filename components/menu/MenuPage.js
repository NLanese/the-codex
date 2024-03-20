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

export const MenuPage = ({
    onLessonClick, 
    lessons,

    onTestsClick,
    tests,

    onLabsClick,
    labs

}) => {

    ///////////
    // State //
    ///////////


    ////////////////
    // Renderings //
    ////////////////

    function renderLessonsList(){
        return(
            <div style={{flex: 1}}>
                <div style={{ 
                    marginTop: 45,
                    padding: 15,
                    justifyContent: 'center', 
                    backgroundColor: Colors.offWhite, 
                    boxShadow:'-2px -2px -1px -1px rgba(-1, -1, -1, 0.1)'
                }}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                        Lessons
                    </div>
                    <ListPage 
                        items={lessons}
                        onClick={onLessonClick}
                        size="sm"
                    />
                </div>
            </div>
        )
    }

    function renderDefinitions(){
        return(
            <div style={{flex: 3}}>
                <DefinitionList
                    title={"Unit Terms"}
                    definitionsList={BasicDefinitionsList}
                    titleBoxStyle={{flex: 2,  display: "flex", justifyContent: 'center', alignItems: 'center', borderRight: "1px solid black"}}
                    definitionBoxStyle={{flex: 7}}
                    definitionRowStyle={{border: "1px solid black", borderRadius: 5, marginTop: 5}}
                />
            </div>
        )
    }

    function renderLabsAndTests(){
        return(
            <div style={{
                display: 'flex', flexDirection: 'column', flex: 1, 
                justifyContent: 'flex-start', alignItems: 'center', 
            }}>
                <div style={{ 
                    marginTop: 45,
                    padding: 15,
                    justifyContent: 'center', 
                    backgroundColor: Colors.offWhite, 
                    boxShadow:'-2px -2px -1px -1px rgba(-1, -1, -1, 0.1)'
                }}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                        Labs
                    </div>
                    <ListPage 
                        items={labs}
                        onClick={onLessonClick}
                        size="sm"
                    />
                </div>

                <div style={{ 
                marginTop: 45,
                padding: 15,
                justifyContent: 'center', 
                backgroundColor: Colors.offWhite, 
                boxShadow:'-2px -2px -1px -1px rgba(-1, -1, -1, 0.1)'
                }}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                        Tests
                    </div>
                    <ListPage 
                        items={tests}
                        onClick={onLessonClick}
                        size="sm"
                    />
                </div>
            </div>
        )
    }
   
    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {renderLessonsList()}
            {renderDefinitions()}
            {renderLabsAndTests()}
        </div>
    )
}