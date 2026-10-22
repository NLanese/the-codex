// React
import React from "react";

// Styles
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Ostrich
import { OstCard } from "@ostrich_development/ostrich-components";


///////////////////
// Shared Styles //
///////////////////

// Body text for lessons: the same font as Styles.Fonts.basic, with room to breathe
export const lessonText = {
    ...Styles.Fonts.basic,
    lineHeight: 1.6,
    marginTop: 0,
    marginBottom: 14,
}

// Side-by-side layout: code on the left, explanation on the right
export const sideBySide = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 10,
}


//////////////
// Callouts //
//////////////

// Each callout type has one job, so readers learn what each color means
const calloutTypes = {
    key: {label: "KEY IDEA", accent: Colors.selectedColor, background: Colors.offWhite},
    example: {label: "EXAMPLE", accent: "#3fa87a", background: "#eefaf3"},
    watch: {label: "WATCH OUT", accent: "#e0912f", background: "#fff6e8"},
}

export const Callout = ({type = "key", title, children, style}) => {
    const t = calloutTypes[type] || calloutTypes.key
    return(
        <div style={{
            ...Styles.Sections.importantNote,
            backgroundColor: t.background,
            borderLeft: `6px solid ${t.accent}`,
            borderRadius: 15,
            padding: '14px 20px',
            margin: '18px 0',
            ...style
        }}>
            <div style={{...Styles.Fonts.basic, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: t.accent, marginBottom: 6}}>
                {t.label}{title ? ` · ${title}` : ""}
            </div>
            {children}
        </div>
    )
}


///////////////////////
// Variable Diagrams //
///////////////////////

// Draws a variable as a labeled box holding a value
export const VariableBox = ({name, value, valueStyle = Styles.Code.reg, caption}) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 12px'}}>
            <div style={{
                ...Styles.Sections.simpleLessonCode,
                position: 'relative',
                width: 150, maxWidth: 'none', margin: '14px 0 6px 0',
                padding: '22px 10px 16px 10px',
                textAlign: 'center',
            }}>
                <span style={{
                    position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: Colors.offWhiteContent,
                    border: "2px solid rgb(156, 161, 158)", borderRadius: 10,
                    padding: '1px 10px', whiteSpace: 'nowrap',
                    ...Styles.Fonts.basic, fontSize: 15, fontWeight: 600, color: 'black'
                }}>
                    {name}
                </span>
                <span style={{...Styles.Code.code, ...valueStyle, fontSize: 20}}>{value}</span>
            </div>
            {caption && (
                <div style={{...Styles.Fonts.basic, fontSize: 14, color: '#5f656e'}}>{caption}</div>
            )}
        </div>
    )
}


/////////////////////////
// Recap and Next Step //
/////////////////////////

export const Recap = ({points}) => {
    return(
        <div style={{...Styles.Sections.subContentBubble, padding: '18px 26px', marginTop: 30}}>
            <div style={{...Styles.Fonts.h1, marginBottom: 8}}>Recap</div>
            <ul style={{margin: 0, paddingLeft: 22}}>
                {points.map((point, i) => (
                    <li key={i} style={{...lessonText, marginBottom: 6}}>{point}</li>
                ))}
            </ul>
        </div>
    )
}

export const NextLesson = ({lesson, onClick}) => {
    return(
        <OstCard
            style={{marginLeft: '25%', marginRight: '25%', marginTop: 30, marginBottom: 40, cursor: 'pointer'}}
            onClick={() => onClick(lesson)}
        >
            <p style={{...Styles.Fonts.basicX, textAlign: 'center', margin: '6px 0'}}>
                Up next: <strong>{lesson}</strong> →
            </p>
        </OstCard>
    )
}
