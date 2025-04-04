// React
import React from "react";

// Constants
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Components
import ListPage from "../Global/codexList";

export const LessonTemplatePage = ({
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

        function renderLessonsList(){
            return(
                <div style={{
                    display: 'flex', flexDirection: 'column', flex: 1, 
                    justifyContent: 'flex-start', alignItems: 'center', 
                }}>
                    <div style={Styles.Sections.subContentBubble}>
                        <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                            Lessons
                        </div>
                        <ListPage 
                            items={lessons}
                            onClick={onLessonClick}
                            size="sm"
                            selected={current}
                            
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
                    <div style={Styles.Sections.subContentBubble}>
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
                        borderRadius: 12,
                        backgroundColor: Colors.offWhite, 
                        boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)'
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
                <div style={Styles.Sections.sideMenu}>
                    {renderLessonsList()}
                    {renderLabsAndTests()}
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{display: 'flex', flexDirection: 'row', paddingBottom: 10}}>
            <div style={{
            padding: 10, marginRight: 26, flex: 4, 
            boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)' }}
            >
                {children}
            </div>
            <div style={{flex: 1}}>
                {renderSideMenu()}
            </div>
        </div>
    )
}