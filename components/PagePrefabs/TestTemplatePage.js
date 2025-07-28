// React
import React from "react";

// Constants
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Components
import CodexList from "../Global/codexList";
import ListPage from "../Global/codexList"

export const TestTemplatePage = ({
    children,
    onLessonClick, 
    lessons,

    current,

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

    // Renders the List of Lessons on the Side Menu
    function renderLessonsList(){
        return(
            <div>
                <div style={Styles.Sections.subContentBubble}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                    Lessons
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <ListPage 
                        items={lessons}
                        onClick={onLessonClick}
                        size="md"
                    />
                    </div>
                </div>

            </div>
        )
    }

    // Renders the List of Labs and Tests on the Side Menu
    function renderLabsAndTests(){
        return(
            <div>
                <div style={Styles.Sections.subContentBubble}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                    Labs
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <ListPage 
                        items={labs}
                        onClick={onLabsClick}
                        size="md"
                    />
                    </div>
                </div>

                <div style={Styles.Sections.subContentBubble}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                        Tests
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <ListPage 
                        items={tests}
                        onClick={onTestsClick}
                        size="md"
                    />
                    </div>
                </div>
            </div>
        )
    }

    // Renders all of the Side Menus
    function renderSideMenu(){
        return(
            <div style={Styles.Sections.sideMenu}>
                {renderLessonsList()}
                {renderLabsAndTests()}
            </div>
        )
    }

    /////////////////
    // Main Return //
    /////////////////

    // Main Return
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{
                padding: 10, flex: 10,
            }}>
                {children}
            </div>
            <div style={{flex: 2, display: 'flex', justifyContent: 'center'}}>
                {renderSideMenu()}
            </div>
        </div>
    )
}