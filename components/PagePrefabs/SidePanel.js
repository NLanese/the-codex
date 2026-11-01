// React
import React from "react";

// Constants
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Ostrich
import { OstCard, OstrichButton } from "@ostrich_development/ostrich-components";


// One titled box of navigation buttons for the side menus (Lessons, Labs, Tests)
//   items       the names to list
//   onClick     called with the item's name
//   current     the item for the page you're on, shown highlighted
//   comingSoon  items without a page yet, shown greyed out and not clickable
export const SidePanel = ({title, items = [], onClick, current, comingSoon = [], style}) => {

    function renderItem(item){
        const isCurrent = item === current
        const isReady = !comingSoon.includes(item)

        return(
            <OstrichButton
                key={item}
                label={item}
                caption={isReady ? undefined : "Coming soon"}
                disabled={!isReady}
                onClick={() => { if (!isCurrent) onClick?.(item) }}
                aria-current={isCurrent ? "page" : undefined}
                style={{
                    ...itemBox,
                    backgroundColor: isCurrent ? Colors.selectedColor : Colors.inactiveGrey,
                    cursor: isCurrent ? 'default' : 'pointer',
                }}
                hoverStyle={isCurrent ? undefined : {backgroundColor: Colors.activeColor}}
                disabledStyle={{backgroundColor: "#dfe5e4", boxShadow: 'none', border: "1px dashed #b7c7c5"}}
                labelStyle={{
                    ...itemText,
                    color: isCurrent ? 'white' : isReady ? 'black' : '#8a9694',
                    fontWeight: isCurrent ? 600 : 400,
                }}
                captionStyle={{...Styles.Fonts.basic, fontSize: 12.5, letterSpacing: 0.5, color: '#8a9694', marginTop: 2}}
                contentStyle={{display: 'flex', flexDirection: 'column'}}
            />
        )
    }

    return(
        <OstCard
            style={{...Styles.Sections.subContentBubble, padding: '14px 16px 18px 16px', ...style}}
        >
            <div style={{...Styles.Fonts.h1, textAlign: 'center', marginBottom: 6}}>
                {title}
            </div>
            <nav aria-label={title} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {items.map(renderItem)}
            </nav>
        </OstCard>
    )
}


////////////
// Styles //
////////////

// Matches the old CodexList "md" buttons, but stretches to the panel's width
const itemBox = {
    minHeight: 50,
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 10px',
    borderRadius: 15,
    boxShadow: '1px 1px 2px 1px rgba(40, 40, 40, 0.12)',
}

const itemText = {
    fontFamily: 'Gilroy',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 1.2,
}


//////////////////////
// Phone Navigation //
//////////////////////

// A swipeable row of lesson buttons shown above the lesson on phones.
// The current lesson is highlighted and scrolled into view.
export const LessonStrip = ({items = [], onClick, current, comingSoon = []}) => {
    const rowRef = React.useRef(null)

    React.useEffect(() => {
        const row = rowRef.current
        const active = row?.querySelector('[aria-current="page"]')
        if (row && active){
            row.scrollLeft = active.offsetLeft - (row.clientWidth - active.offsetWidth) / 2
        }
    }, [current])

    return(
        <nav aria-label="Lessons" className="codex-mobile-only" style={{margin: '0 -16px 6px -16px'}}>
            <div style={{...Styles.Fonts.basic, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.5, color: '#5f656e', padding: '0 16px 6px 16px'}}>
                LESSONS
            </div>
            <div ref={rowRef} style={{display: 'flex', gap: 8, overflowX: 'auto', padding: '2px 16px 10px 16px', scrollbarWidth: 'none'}}>
                {items.filter(item => !comingSoon.includes(item)).map(item => {
                    const isCurrent = item === current
                    return(
                        <OstrichButton
                            key={item}
                            label={item}
                            onClick={() => { if (!isCurrent) onClick?.(item) }}
                            aria-current={isCurrent ? "page" : undefined}
                            style={{
                                flex: '0 0 auto', borderRadius: 999, padding: '8px 16px', height: 'auto',
                                backgroundColor: isCurrent ? Colors.selectedColor : Colors.inactiveGrey,
                                boxShadow: '1px 1px 2px 1px rgba(40, 40, 40, 0.12)',
                                cursor: isCurrent ? 'default' : 'pointer',
                            }}
                            hoverStyle={isCurrent ? undefined : {backgroundColor: Colors.activeColor}}
                            labelStyle={{fontFamily: 'Gilroy', fontSize: 15.5, whiteSpace: 'nowrap', color: isCurrent ? 'white' : 'black', fontWeight: isCurrent ? 600 : 500}}
                        />
                    )
                })}
            </div>
        </nav>
    )
}

// The full Lessons / Labs / Tests panels, stacked at the bottom of the page on phones
export const MobilePanels = ({sections = [], current, comingSoon = []}) => {
    return(
        <div className="codex-mobile-only" style={{marginTop: 30}}>
            {sections.map((s, i) => (
                <SidePanel
                    key={s.title}
                    title={s.title}
                    items={s.items}
                    onClick={s.onClick}
                    current={current}
                    comingSoon={comingSoon}
                    style={{marginTop: i === 0 ? 0 : 18}}
                />
            ))}
        </div>
    )
}
