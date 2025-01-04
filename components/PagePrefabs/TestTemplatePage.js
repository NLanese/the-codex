// React
import React from "react";

// Constants
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Components
import CodexList from "../Global/codexList";

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
            <div style={{
                display: 'flex', flexDirection: 'column', flex: 1, 
                justifyContent: 'flex-start', alignItems: 'center', 
            }}>
                <div style={{ 
                    marginTop: 45,
                    padding: 15,
                    justifyContent: 'center', 
                    borderRadius: 12,
                    backgroundColor: Colors.offWhite, 
                    boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)'
                }}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                        Lessons
                    </div>
                    <CodexList 
                        items={lessons}
                        onClick={onLessonClick}
                        size="sm"
                    />
                </div>
            </div>
        )
    }

    // Renders the List of Labs and Tests on the Side Menu
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
                   borderRadius: 12,
                   backgroundColor: Colors.offWhite, 
                   boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)'
                }}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                        Labs
                    </div>
                    <CodexList 
                        items={labs}
                        onClick={onLabsClick}
                        size="sm"
                    />
                </div>

                <div style={{ 
                    marginTop: 45,
                    padding: 15,
                    justifyContent: 'center', 
                    borderRadius: 12,
                    backgroundColor: Colors.offWhite, 
                    boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)'
                }}>
                    <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                        Tests
                    </div>
                    <CodexList 
                        items={tests}
                        onClick={onTestsClick}
                        size="sm"
                        selected={current}
                    />
                </div>
            </div>
        )
    }

    // Renders all of the Side Menus
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

    // Main Return
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{
                padding: 10, paddingRight: 45, flex: 4,
            }}>
                {children}
            </div>
            <div style={{flex: 1}}>
                {renderSideMenu()}
            </div>
        </div>
    )
}