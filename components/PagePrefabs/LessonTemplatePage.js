// React
import React from "react";

// Constants
import { comingSoon as comingSoonPages } from "../../constants/lessonLists";

// Components
import { SidePanel } from "./SidePanel";

export const LessonTemplatePage = ({
    children,
    onLessonClick,
    lessons,

    current,

    onTestsClick,
    tests,

    onLabsClick,
    labs,

    // Names listed without a page yet; shown as "Coming soon"
    comingSoon = comingSoonPages,
}) => {

    ////////////////
    // Renderings //
    ////////////////

        function renderLessonsList(){
            return(
                <div style={{paddingTop: 100, paddingBottom: 30}}>
                    <SidePanel
                        title="Lessons"
                        items={lessons}
                        onClick={onLessonClick}
                        current={current}
                        comingSoon={comingSoon}
                    />
                </div>
            )
        }

        function renderLabsAndTests(){
            return(
                <div style={{paddingTop: 100, paddingBottom: 30}}>
                    <SidePanel
                        title="Labs"
                        items={labs}
                        onClick={onLabsClick}
                        current={current}
                        comingSoon={comingSoon}
                    />
                    <SidePanel
                        title="Tests"
                        items={tests}
                        onClick={onTestsClick}
                        current={current}
                        comingSoon={comingSoon}
                        style={{marginTop: 30}}
                    />
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

    return(
    <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Left Sticky Sidebar */}
        <aside style={sidebar}>
            {renderLabsAndTests()}
        </aside>

        {/* Main Scrollable Content */}
        <div style={{
            flex: 7,
            padding: 30,
            overflowY: 'auto',
            minWidth: 0,
        }}>
            {children}
        </div>

        {/* Right Sticky Sidebar */}
        <aside style={sidebar}>
            {renderLessonsList()}
        </aside>
    </div>
    )
}


////////////
// Styles //
////////////

const sidebar = {
    position: 'sticky',
    top: 0,
    height: '100vh',
    width: '200px',
    backgroundColor: '#f0f0f0',
    paddingLeft: 20, paddingRight: 20,
    overflowY: 'auto',
    flex: 2.5,
}
