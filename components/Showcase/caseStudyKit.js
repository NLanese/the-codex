// Building blocks for the Official Works case-study pages (Kidz-N-Motion, IEEE, EventHub).
// Same palette and theme as showcaseKit, so these pages read as part of the Portfolio.
// Every visible piece is an Ostrich Component: OstCard, OstrichButton, OstrichTabBar (via PillTabs)
// and DefinitionList. Plain HTML is only used for layout, headings and paragraphs.

import React, { useState } from "react";
import { useRouter } from "next/router";
import { OstCard, DefinitionList } from "@ostrich_development/ostrich-components";
import { Page, ActionButton, PillTabs, Chip, DOC } from "./showcaseKit";


//////////
// Page //
//////////

// The themed page with a "back to Portfolio" button above the hero
export function CaseStudyPage({ children }) {
    const router = useRouter()
    return (
        <Page>
            <div style={{ marginTop: 22, display: "flex" }}>
                <ActionButton
                    label="← All work"
                    variant="light"
                    onClick={() => router.push("/showcases/works/menu")}
                    style={{ padding: "8px 16px" }}
                    labelStyle={{ fontSize: 14.5 }}
                />
            </div>
            {children}
        </Page>
    )
}


//////////
// Text //
//////////

const proseStyle = { fontSize: 17.5, lineHeight: 1.7, color: DOC.text, margin: "0 0 16px", maxWidth: 760 }

// A paragraph in the page's body text style
export function P({ children, style }) {
    return <p style={{ ...proseStyle, ...style }}>{children}</p>
}

// Inline code-style name (fields, packages, commands), as a mono Chip
export function Code({ children }) {
    return (
        <Chip mono color={DOC.ink} style={{ fontSize: 14, padding: "1px 8px", verticalAlign: "1px" }}>{children}</Chip>
    )
}

// Small heading inside a section
export function SubHeading({ children, style }) {
    return <h3 style={{ fontSize: 22, fontWeight: 700, color: DOC.ink, margin: "34px 0 12px", ...style }}>{children}</h3>
}


///////////
// Facts //
///////////

// Row of quick facts (Role, Stack, Platforms...), each an OstCard
export function FactRow({ facts }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 22 }}>
            {facts.map((f) => (
                <OstCard
                    key={f.label}
                    noShadow
                    style={{ flex: "1 1 190px", backgroundColor: DOC.wash, border: `1px solid ${DOC.line}`, borderRadius: 16, padding: "14px 18px" }}
                >
                    <div style={{ fontSize: 12.5, letterSpacing: 1.8, textTransform: "uppercase", color: DOC.muted, fontWeight: 700 }}>{f.label}</div>
                    <div style={{ fontSize: 18, lineHeight: 1.35, color: DOC.ink, fontWeight: 700, marginTop: 4 }}>{f.value}</div>
                </OstCard>
            ))}
        </div>
    )
}


/////////////////
// Screenshots //
/////////////////

// A phone screenshot in a rounded frame, with an optional caption underneath
export function Phone({ src, alt = "", caption, width = 240 }) {
    return (
        <figure style={{ margin: 0, width, maxWidth: "100%", flex: "0 1 auto" }}>
            <OstCard
                template={1}
                imageSrc={src}
                imageAlt={alt}
                noShadow
                style={{
                    padding: 7, backgroundColor: DOC.ink, borderRadius: 30,
                    boxShadow: "0 10px 26px rgba(17, 1, 59, 0.22)",
                }}
                imageAreaStyle={{ width: "100%", borderRadius: 24, overflow: "hidden", backgroundColor: "white" }}
                imageStyle={{ width: "100%", height: "auto", maxWidth: "100%", maxHeight: "none", display: "block" }}
            />
            {caption ? (
                <figcaption style={{ fontSize: 14.5, lineHeight: 1.45, color: DOC.muted, textAlign: "center", marginTop: 12 }}>{caption}</figcaption>
            ) : null}
        </figure>
    )
}

// A wide screenshot or diagram, shown whole
export function WideShot({ src, alt = "", caption, maxWidth = 900 }) {
    return (
        <figure style={{ margin: "8px 0 0", maxWidth }}>
            <OstCard
                template={1}
                imageSrc={src}
                imageAlt={alt}
                noShadow
                style={{ padding: 10, backgroundColor: "white", border: `1px solid ${DOC.line}`, borderRadius: 18, boxShadow: "0 4px 14px rgba(17, 1, 59, 0.08)" }}
                imageAreaStyle={{ width: "100%", borderRadius: 10, overflow: "hidden" }}
                imageStyle={{ width: "100%", height: "auto", maxWidth: "100%", maxHeight: "none", display: "block" }}
            />
            {caption ? (
                <figcaption style={{ fontSize: 14.5, lineHeight: 1.45, color: DOC.muted, marginTop: 10 }}>{caption}</figcaption>
            ) : null}
        </figure>
    )
}

// Several phones side by side, wrapping on small screens
export function PhoneRow({ children, style }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", gap: "28px 32px", margin: "18px 0 8px", ...style }}>
            {children}
        </div>
    )
}


////////////
// Layout //
////////////

// Text beside a picture. Stacks (picture first) when there isn't room.
export function Split({ media, children, reverse = false, mediaBasis = 260 }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", flexDirection: reverse ? "row-reverse" : "row", alignItems: "flex-start", gap: "24px 44px" }}>
            <div style={{ flex: `0 1 ${mediaBasis}px`, minWidth: 0, display: "flex", justifyContent: "center", margin: "0 auto" }}>{media}</div>
            <div style={{ flex: "1 1 380px", minWidth: 0 }}>{children}</div>
        </div>
    )
}

// White panel that groups a section's content
export function Panel({ children, style }) {
    return (
        <OstCard
            noShadow
            style={{
                backgroundColor: "white", border: `1px solid ${DOC.line}`, borderRadius: 20,
                boxShadow: "0 4px 14px rgba(17, 1, 59, 0.08)", padding: "24px 28px", ...style,
            }}
        >
            {children}
        </OstCard>
    )
}


//////////////////
// Feature Tabs //
//////////////////

// Pill tabs that swap between features, each a phone screenshot beside its write-up.
// items: [{ title, image, alt, caption, body }]
export function FeatureTabs({ items, ariaLabel }) {
    const [current, setCurrent] = useState(items[0].title)
    const item = items.find((i) => i.title === current) || items[0]
    return (
        <Panel>
            <div style={{ marginBottom: 24 }}>
                <PillTabs tabs={items.map((i) => i.title)} value={current} onChange={setCurrent} ariaLabel={ariaLabel} />
            </div>
            <div role="tabpanel" aria-label={item.title}>
                <Split media={<Phone src={item.image} alt={item.alt} caption={item.caption} width={230} />} mediaBasis={240}>
                    {item.body}
                </Split>
            </div>
        </Panel>
    )
}


///////////
// Lists //
///////////

// Numbered list in a soft card, e.g. requirements or notification triggers
export function Checklist({ title, items, numbered = true }) {
    const Tag = numbered ? "ol" : "ul"
    return (
        <OstCard
            noShadow
            style={{ backgroundColor: DOC.wash, border: `1px solid ${DOC.line}`, borderRadius: 16, padding: "16px 22px 6px", margin: "6px 0 20px", maxWidth: 760 }}
        >
            {title ? <div style={{ fontSize: 16, fontWeight: 700, color: DOC.ink, marginBottom: 6 }}>{title}</div> : null}
            <Tag style={{ margin: 0, paddingLeft: 22 }}>
                {items.map((it, i) => (
                    <li key={i} style={{ fontSize: 16.5, lineHeight: 1.6, color: DOC.text, marginBottom: 10 }}>{it}</li>
                ))}
            </Tag>
        </OstCard>
    )
}

// Groups of data-model fields, each an OstCard holding an Ostrich DefinitionList.
// groups: [{ title, fields: [[name, description], ...] }]
// min: narrowest a card may get before the grid drops a column
export function FieldGroups({ groups, min = 300 }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${min}px), 1fr))`, alignItems: "start", gap: 18, marginTop: 10 }}>
            {groups.map((g) => (
                <OstCard
                    key={g.title}
                    noShadow
                    style={{ backgroundColor: "white", border: `1px solid ${DOC.line}`, borderRadius: 16, padding: "14px 16px 10px" }}
                >
                    <DefinitionList
                        title={g.title}
                        titleStyle={{ fontFamily: DOC.font, fontSize: 17, fontWeight: 700, color: DOC.ink, textAlign: "left", justifyContent: "flex-start", padding: "0 0 8px", margin: 0, backgroundColor: "transparent", borderBottom: `1px solid ${DOC.line}` }}
                        definitionsList={g.fields.map(([term, definition]) => ({ term, definition }))}
                        rowStyle={{ display: "flex", flexDirection: "column", gap: 3, padding: "10px 0", borderBottom: `1px solid ${DOC.wash}` }}
                        termStyle={{ padding: 0, backgroundColor: "transparent" }}
                        definitionStyle={{ padding: 0, backgroundColor: "transparent" }}
                        termTextStyle={{ fontFamily: DOC.mono, fontSize: 14, fontWeight: 600, color: DOC.ink, textAlign: "left", overflowWrap: "anywhere", margin: 0 }}
                        definitionTextStyle={{ fontFamily: DOC.font, fontSize: 15, lineHeight: 1.5, color: DOC.muted, textAlign: "left", margin: 0 }}
                    />
                </OstCard>
            ))}
        </div>
    )
}

// Vertical timeline of milestones, each an OstCard with a colored edge.
// items: [{ when, title, body }]
export function Timeline({ items, color = DOC.accentDeep }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 820 }}>
            {items.map((it) => (
                <OstCard
                    key={it.when + it.title}
                    noShadow
                    style={{ backgroundColor: "white", border: `1px solid ${DOC.line}`, borderLeft: `6px solid ${color}`, borderRadius: 14, padding: "14px 20px 4px" }}
                >
                    <div style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color, fontWeight: 700 }}>{it.when}</div>
                    <div style={{ fontSize: 19, fontWeight: 700, color: DOC.ink, margin: "4px 0 8px" }}>{it.title}</div>
                    <div>{it.body}</div>
                </OstCard>
            ))}
        </div>
    )
}
