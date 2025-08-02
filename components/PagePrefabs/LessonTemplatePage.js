// React
import React from "react";

// Constants
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Components
import ListPage from "../global/codexList";

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
                <div style={{height: '100vh', alignContent: 'center'}}>
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

        function renderLabsAndTests(){
            return(
                <div style={{height: '100vh', alignContent: 'center'}}>
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

        function renderSideMenu(){
            return(
                <div style={Styles.Sections.sideMenu}>
                    {renderLessonsList()}
                </div>
            )
        }

        function renderOtherSideMenu(){
            return(
                <div style={Styles.Sections.sideMenu}>
                    {renderLabsAndTests()}
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

    return(
    <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Left Sticky Sidebar */}
        <div style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '200px',
            backgroundColor: '#f0f0f0',
            padding: 20,
            overflowY: 'auto',
            flex: 2.5
        }}>
            {renderOtherSideMenu()}
        </div>

        {/* Main Scrollable Content */}
        <div style={{
            flex: 7,
            padding: 30,
            overflowY: 'auto',
        }}>
            {children}
        </div>

        {/* Right Sticky Sidebar */}
        <div style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '200px',
            backgroundColor: '#f0f0f0',
            padding: 20,
            overflowY: 'auto',
            flex: 2.5
        }}>
            {renderSideMenu()}
        </div>
    </div>
    )
}