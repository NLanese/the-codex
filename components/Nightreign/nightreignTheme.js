import React from "react";
// Shared colours and style helpers for the Nightreign calculator (matches Boss Stats)

export const depthColor = '#161754'
export const nightShade = "#2b2161"
export const graceGiven = "#f2e144"
export const frenzyTouched = "#ff5100"
export const greyOfNight = "#636478"
export const gloomGlow = "#452d8a"
export const silveredNight = "#7fc7bf"
export const silverLining = "#d4eeff"
export const traceNight = '#9b9fbf'
export const scarletRot = '#754142'

// Value colours: gold = boosted by your build, orange = reduced, plain = unchanged
export const boostColor = graceGiven
export const penaltyColor = frenzyTouched
export const neutralColor = silverLining

export function panelStyle(extra = {}){
    return {
        backgroundColor: nightShade, borderRadius: 14,
        border: `1px solid ${gloomGlow}`, boxSizing: 'border-box',
        ...extra,
    }
}

// Small sentence-case label followed by a hairline, used to title every section
export function SectionLabel({ children, style }){
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: 8, margin: '12px 0 6px', ...style}}>
            <span style={{color: traceNight, fontSize: 13, whiteSpace: 'nowrap'}}>{children}</span>
            <span style={{flex: 1, height: 1, backgroundColor: gloomGlow}}/>
        </div>
    )
}

// Pill button used for every choice (selection, nightfarer, level, tabs)
export function chipStyle(selected, extra = {}){
    return {
        padding: '6px 10px', borderRadius: 8, cursor: 'pointer',
        fontFamily: 'inherit', fontSize: 14, lineHeight: 1.2,
        border: `1px solid ${selected ? graceGiven : gloomGlow}`,
        backgroundColor: selected ? graceGiven : depthColor,
        color: selected ? depthColor : silverLining,
        fontWeight: selected ? 600 : 400,
        ...extra,
    }
}

// Plain text button (Clear, Close, etc.)
export function textButtonStyle(color = traceNight, extra = {}){
    return {
        background: 'none', border: 'none', padding: '2px 4px', cursor: 'pointer',
        fontFamily: 'inherit', fontSize: 13, color: color,
        ...extra,
    }
}
