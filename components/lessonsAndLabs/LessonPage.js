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

export const LessonPage = ({
    children,
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
                        onClick={onLabsClick}
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
                        onClick={onTestsClick}
                        size="sm"
                    />
                </div>
            </div>
        )
    }

    function renderSideMenu(){
        return(
            <div>
                {renderLessonsList()}
                {renderLabsAndTests()}
            </div>
        )
    }

    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{padding: 10, paddingRight: 45}}>
                {children}
            </div>
            <div>
                {renderSideMenu()}
            </div>
        </div>
    )
}