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
