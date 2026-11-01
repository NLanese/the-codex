// React
import React from "react";

// Constants
import { comingSoon as comingSoonPages } from "../../constants/lessonLists";

// Components
import { SidePanel, MobilePanels } from "./SidePanel";

export const TestTemplatePage = ({
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

    // The Lessons, Labs and Tests menus down the right side (desktop)
    function renderSideMenu(){
        return(
            <div style={{display: 'flex', flexDirection: 'column', gap: 24, padding: '20px 0 30px 0'}}>
                <SidePanel title="Lessons" items={lessons} onClick={onLessonClick} current={current} comingSoon={comingSoon}/>
                <SidePanel title="Labs" items={labs} onClick={onLabsClick} current={current} comingSoon={comingSoon}/>
                <SidePanel title="Tests" items={tests} onClick={onTestsClick} current={current} comingSoon={comingSoon}/>
            </div>
        )
    }

    /////////////////
    // Main Return //
    /////////////////

    return(
        <div className="codex-lesson-layout" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="codex-lesson-main" style={{padding: 10, flex: 10, minWidth: 0}}>
                {children}

                {/* Phones: the menus move below the test */}
                <MobilePanels
                    current={current}
                    comingSoon={comingSoon}
                    sections={[
                        {title: "Tests", items: tests, onClick: onTestsClick},
                        {title: "Lessons", items: lessons, onClick: onLessonClick},
                        {title: "Labs", items: labs, onClick: onLabsClick},
                    ]}
                />
            </div>
            <aside className="codex-sidebar" style={{flex: 2.4, minWidth: 220, maxWidth: 320, padding: '0 16px', backgroundColor: '#f0f0f0'}}>
                {renderSideMenu()}
            </aside>
        </div>
    )
}
