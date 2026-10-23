// Shared building blocks for the Ostrich Components docs pages.
// Every page is data + examples; the look lives here, so restyling the docs means editing this file.
// Everything here is built from Ostrich Components (cards, buttons, dropdowns), styled through their props.

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { OstCard, OstrichButton, OstrichDropDown } from "@ostrich_development/ostrich-components";

/////////////
// Palette //
/////////////

export const DOC = {
    font: "Gilroy, system-ui, sans-serif",
    mono: 'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Roboto Mono", "Courier New", monospace',
    ink: "#11013b",          // Same navy as the header bar
    text: "#1f2430",
    muted: "#5f656e",
    line: "#dfe5ee",
    paper: "#fafffe",
    wash: "#f3f7fc",
    accent: "#9cc6f0",
    accentDeep: "#57a5f2",
    codeBg: "#110b2b",
}

// Prop card colors by type (same family as the original prop cards)
export const TYPE_COLORS = {
    String: "#eef2e4",
    Number: "#fbe3ef",
    Boolean: "#cdcdfa",
    Function: "#fad7cd",
    Object: "#cdfadd",
    Style: "#d9f7e4",
    Array: "#f6e19a",
    Node: "#dcebfb",
    Any: "#ececec",
}

// Code colors (from Styles.Code)
const CODE = {
    keyword: "#bd2eff",
    tag: "#c77dff",
    prop: "#0fdefa",
    str: "#f7e672",
    num: "#3fd0d0",
    comment: "#41FF00",
    func: "#fa6c61",
    reg: "#ffffff",
}

////////////////
// Code block //
////////////////

const TOKEN = new RegExp([
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/.source,              // 1 comment
    /("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)/.source, // 2 string
    /(<\/?[A-Za-z][\w.]*|\/?>)/.source,                    // 3 jsx tag
    /\b(import|from|export|default|const|let|var|return|function|if|else|new|await|async|true|false|null|undefined)\b/.source, // 4 keyword
    /(=>)/.source,                                          // 5 arrow
    /\b(\d+(?:\.\d+)?)\b/.source,                           // 6 number
    /([A-Za-z_$][\w$]*)(?=\s*=(?!=|>))/.source,             // 7 jsx prop / assignment
    /([A-Za-z_$][\w$]*)(?=\s*:)/.source,                    // 8 object key
    /([A-Za-z_$][\w$]*)(?=\s*\()/.source,                   // 9 call
    /(?<=^[ \t]+)([A-Za-z_$][\w$]*)(?=[ \t]*$)/.source,      // 10 bare boolean prop on its own line
].join("|"), "gm")

function highlight(code) {
    const out = []
    let last = 0, m, i = 0
    TOKEN.lastIndex = 0
    while ((m = TOKEN.exec(code))) {
        if (m.index > last) out.push(code.slice(last, m.index))
        const color =
            m[1] ? CODE.comment :
            m[2] ? CODE.str :
            m[3] ? CODE.tag :
            m[4] ? CODE.keyword :
            m[5] ? CODE.keyword :
            m[6] ? CODE.num :
            m[7] ? CODE.prop :
            m[8] ? CODE.prop :
            m[9] ? CODE.func :
            CODE.prop
        out.push(<span key={i++} style={{ color, fontStyle: m[1] ? "italic" : undefined }}>{m[0]}</span>)
        last = m.index + m[0].length
    }
    if (last < code.length) out.push(code.slice(last))
    return out
}

// Removes the common leading indentation so code can be written indented in the source
function dedent(code) {
    const lines = code.replace(/^\n+|\s+$/g, "").split("\n")
    const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length))
    return lines.map((l) => l.slice(indent)).join("\n")
}

export function CodeBlock({ code, title, style, maxLines = 24 }) {
    const text = useMemo(() => dedent(code), [code])
    const lineCount = text.split("\n").length
    const collapsible = lineCount > maxLines + 4
    const [expanded, setExpanded] = useState(false)
    const [copied, setCopied] = useState(false)
    const copy = () => {
        const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1200) }
        try {
            navigator.clipboard.writeText(text).then(done, () => {})   // Blocked clipboards just do nothing
        } catch (e) { /* no clipboard in this browser */ }
    }
    return (
        <OstCard noShadow style={{ position: "relative", display: "flex", flexDirection: "column", backgroundColor: DOC.codeBg, borderRadius: 12, border: "1px solid #2b2450", overflow: "hidden", padding: 0, ...style }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 12px", borderBottom: "1px solid #2b2450" }}>
                <span style={{ fontFamily: DOC.font, fontSize: 13, color: "#a9a3cf", letterSpacing: 0.5 }}>{title ?? "JSX"}</span>
                <OstrichButton
                    label={copied ? "Copied" : "Copy"}
                    onClick={copy}
                    style={DARK_BUTTON}
                    hoverStyle={{ backgroundColor: "#2b2450" }}
                    labelStyle={{ fontFamily: DOC.font, fontSize: 12, color: copied ? "#41FF00" : "#d9d5f5" }}
                />
            </div>
            <pre style={{
                margin: 0, padding: "12px 16px", flex: 1, overflowX: "auto", fontFamily: DOC.mono, fontSize: 13.5, lineHeight: 1.6, color: CODE.reg,
                maxHeight: collapsible && !expanded ? `${maxLines * 1.6}em` : undefined, overflowY: "hidden",
            }}>
                <code>{highlight(text)}</code>
            </pre>
            {collapsible ? (
                <OstrichButton
                    label={expanded ? "Show less" : `Show all ${lineCount} lines`}
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    style={{
                        width: "100%", padding: "8px 0", borderRadius: 0, boxShadow: "none", borderTop: "1px solid #2b2450",
                        backgroundColor: DOC.codeBg, marginTop: expanded ? 0 : -36, position: "relative",
                        backgroundImage: expanded ? "none" : "linear-gradient(to bottom, rgba(17, 11, 43, 0.6), #110b2b)",
                    }}
                    hoverStyle={{ backgroundColor: "#1d1640", backgroundImage: "none" }}
                    pressedStyle={{ transform: "none" }}
                    labelStyle={{ fontFamily: DOC.font, fontSize: 13, color: "#d9d5f5" }}
                />
            ) : null}
        </OstCard>
    )
}

// Small outlined button for the dark code header
const DARK_BUTTON = {
    backgroundColor: "transparent", border: "1px solid #3d3570", borderRadius: 6,
    padding: "2px 8px", boxShadow: "none", minWidth: 0, height: "auto",
}

// Inline code
export const C = ({ children }) => (
    <code style={{ fontFamily: DOC.mono, fontSize: "0.88em", background: "#e8eef7", color: DOC.ink, padding: "1px 6px", borderRadius: 5 }}>
        {children}
    </code>
)

////////////
// Layout //
////////////

export const P = ({ children, style }) => (
    <p style={{ fontFamily: DOC.font, fontSize: 18, lineHeight: 1.6, color: DOC.text, margin: "10px 0", maxWidth: 900, ...style }}>{children}</p>
)

// Section ids are prefixed with the page, so several pages can share one screen (the "All" page)
const PageId = createContext("")

// Scrolls to a section without changing the page's URL
const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

export function DocPage({ title, component, intro, imports, sections = [], children }) {
    const pageId = slug(title)
    return (
        <PageId.Provider value={pageId}>
            <div style={{ fontFamily: DOC.font, color: DOC.text, marginBottom: 60 }}>
                <OstCard style={{
                    backgroundColor: DOC.ink, backgroundImage: `linear-gradient(135deg, ${DOC.ink} 0%, #2a1a6e 100%)`, color: "white",
                    borderRadius: 20, padding: "28px 32px", marginTop: 20, boxShadow: "0 8px 24px rgba(17, 1, 59, 0.25)",
                }}>
                    <div style={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: "lime", fontWeight: 600 }}>Ostrich Components</div>
                    <h1 style={{ fontSize: 40, fontWeight: 700, margin: "6px 0 4px", letterSpacing: 0.5 }}>{title}</h1>
                    {component ? <div style={{ fontFamily: DOC.mono, fontSize: 15, color: "#c9c3ef" }}>{component}</div> : null}
                    {intro ? <div style={{ fontSize: 18, lineHeight: 1.55, marginTop: 14, maxWidth: 860, color: "#eeeaff" }}>{intro}</div> : null}
                    {imports ? (
                        <div style={{ marginTop: 16, display: "inline-block", fontFamily: DOC.mono, fontSize: 13.5, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "6px 12px" }}>
                            <span style={{ color: CODE.keyword }}>import</span>{" { "}
                            <span style={{ color: "white" }}>{imports}</span>
                            {" } "}<span style={{ color: CODE.keyword }}>from</span>{" "}
                            <span style={{ color: CODE.str }}>"@ostrich_development/ostrich-components"</span>
                        </div>
                    ) : null}
                    {sections.length ? (
                        <nav aria-label={`${title} sections`} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                            {sections.map((s) => (
                                <OstrichButton
                                    key={s}
                                    label={s}
                                    onClick={() => jumpTo(`${pageId}-${slug(s)}`)}
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.3)",
                                        borderRadius: 999, padding: "4px 12px", boxShadow: "none", minWidth: 0, height: "auto",
                                    }}
                                    hoverStyle={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                                    labelStyle={{ fontFamily: DOC.font, fontSize: 14, color: "white" }}
                                />
                            ))}
                        </nav>
                    ) : null}
                </OstCard>
                {children}
            </div>
        </PageId.Provider>
    )
}

export const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

export function Section({ title, children, id }) {
    const pageId = useContext(PageId)
    return (
        <section id={id ?? `${pageId}-${slug(title)}`} style={{ marginTop: 44, scrollMarginTop: 80 }}>
            <h2 style={{
                fontFamily: DOC.font, fontSize: 28, fontWeight: 700, color: DOC.ink, margin: "0 0 8px",
                paddingLeft: 14, borderLeft: `5px solid ${DOC.accentDeep}`,
            }}>{title}</h2>
            {children}
        </section>
    )
}

export const SubHeading = ({ children }) => (
    <h3 style={{ fontFamily: DOC.font, fontSize: 21, fontWeight: 600, color: DOC.ink, margin: "26px 0 6px" }}>{children}</h3>
)

export const Note = ({ children, tone = "info" }) => {
    const tones = {
        info: { bg: "#ebf4ff", edge: DOC.accentDeep, label: "Note" },
        tip: { bg: "#eafbe9", edge: "#2e9e44", label: "Tip" },
        warn: { bg: "#fff5e5", edge: "#e08a00", label: "Heads up" },
    }
    const t = tones[tone] ?? tones.info
    return (
        <OstCard noShadow style={{
            backgroundColor: t.bg, borderLeft: `4px solid ${t.edge}`, borderRadius: 10, padding: "12px 16px",
            margin: "14px 0", fontFamily: DOC.font, fontSize: 16.5, lineHeight: 1.55, maxWidth: 900,
        }}>
            <strong style={{ color: t.edge }}>{t.label}: </strong>{children}
        </OstCard>
    )
}

/////////////
// Example //
/////////////

// A live preview with its code underneath.
// Examples in an ExampleRow share the row's three tracks (title, preview, code), so across a
// row every title, preview and code box starts and ends at the same height.
// size: "normal" (one column), "wide" (two columns) or "full" (the whole row)

const MIN_COLUMN = 320
const GAP = 20
const RowColumns = createContext(3)

export function Example({ title, description, code, children, previewStyle, size = "normal" }) {
    const columns = useContext(RowColumns)
    const span = size === "full" ? columns : size === "wide" ? Math.min(2, columns) : 1
    return (
        <OstCard style={{
            padding: 0, overflow: "hidden", minWidth: 0, marginBottom: GAP,
            display: "grid", gridTemplateRows: "subgrid", gridTemplateColumns: "minmax(0, 1fr)", gridRow: "span 3", gridColumn: `span ${span}`, rowGap: 0,
        }}>
            <div style={{ padding: title ? "12px 16px 0" : 0, fontFamily: DOC.font }}>
                {title ? <div style={{ fontSize: 18, fontWeight: 600, color: DOC.ink }}>{title}</div> : null}
                {description ? <div style={{ fontSize: 15, color: DOC.muted, marginTop: 2, lineHeight: 1.45 }}>{description}</div> : null}
            </div>
            <OstCard noShadow style={{
                padding: 20, margin: 12, borderRadius: 12, minHeight: 80, minWidth: 0,
                // A previewStyle background replaces the dotted grid
                ...(previewStyle?.background === undefined
                    ? { background: `radial-gradient(#dbe4f0 1px, transparent 1px) 0 0 / 14px 14px, ${DOC.wash}` }
                    : null),
                display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center", gap: 16, flexWrap: "wrap",
                ...previewStyle,
            }}>
                {children}
            </OstCard>
            {code ? <CodeBlock code={code} style={{ margin: "0 12px 12px" }} /> : <div style={{ margin: "0 12px 12px" }} />}
        </OstCard>
    )
}

// Lays examples out in columns (as many 320px+ columns as fit) and tells them how many there are
export function ExampleRow({ children }) {
    // Never more columns than the row's examples need (two examples share the row in halves)
    const wanted = React.Children.toArray(children).reduce((n, child) => {
        const size = child?.props?.size
        return n + (size === "full" ? 3 : size === "wide" ? 2 : 1)
    }, 0)
    const [fit, setFit] = useState(3)
    const columns = Math.max(1, Math.min(fit, wanted))
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el || typeof ResizeObserver === "undefined") return
        const measure = () => setFit(Math.max(1, Math.floor((el.clientWidth + GAP) / (MIN_COLUMN + GAP))))
        measure()
        const observer = new ResizeObserver(measure)
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return (
        <RowColumns.Provider value={columns}>
            <div ref={ref} style={{
                display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                columnGap: GAP, rowGap: 0, marginTop: 16,
            }}>
                {children}
            </div>
        </RowColumns.Provider>
    )
}

///////////////
// Prop grid //
///////////////

function TypePill({ type }) {
    return (
        <OstCard noShadow style={{
            fontFamily: DOC.font, fontSize: 12, fontWeight: 600, letterSpacing: 0.4,
            padding: "2px 8px", borderRadius: 999, backgroundColor: "rgba(17, 1, 59, 0.08)", color: DOC.ink, whiteSpace: "nowrap",
        }}>{type}</OstCard>
    )
}

export function PropCard({ name, type = "Any", def, desc, old, required }) {
    const base = type.split(/[ |]/)[0]
    return (
        <OstCard style={{
            backgroundColor: TYPE_COLORS[base] ?? TYPE_COLORS.Any, padding: "12px 14px",
            display: "flex", flexDirection: "column", gap: 6, minWidth: 0,
        }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: DOC.mono, fontSize: 15.5, fontWeight: 700, color: DOC.ink, wordBreak: "break-word" }}>{name}</span>
                <TypePill type={type} />
            </div>
            <div style={{ fontFamily: DOC.font, fontSize: 14.5, lineHeight: 1.45, color: DOC.text }}>{desc}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                {required ? <Tag strong>Required</Tag> : null}
                {def !== undefined ? <Tag>Default: <span style={{ fontFamily: DOC.mono }}>{String(def)}</span></Tag> : null}
                {old ? <Tag muted>Old name: <span style={{ fontFamily: DOC.mono }}>{[].concat(old).join(", ")}</span></Tag> : null}
            </div>
        </OstCard>
    )
}

const Tag = ({ children, strong, muted }) => (
    <OstCard noShadow style={{
        fontFamily: DOC.font, fontSize: 12, padding: "2px 8px", borderRadius: 6,
        backgroundColor: strong ? DOC.ink : "rgba(255,255,255,0.65)", color: strong ? "white" : muted ? DOC.muted : DOC.ink,
    }}>{children}</OstCard>
)

export function TypeLegend({ types }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "8px 0 4px" }}>
            {types.map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: DOC.font, fontSize: 13, color: DOC.muted }}>
                    <OstCard noShadow style={{ width: 14, height: 14, padding: 0, borderRadius: 4, backgroundColor: TYPE_COLORS[t], border: "1px solid rgba(0,0,0,0.1)" }} />
                    {t}
                </span>
            ))}
        </div>
    )
}

// groups: [{ title, note?, props: [{ name, type, def, desc, old, required }] }]
export function PropGrid({ title, groups }) {
    const [query, setQuery] = useState("")
    const q = query.trim().toLowerCase()
    const match = (p) => !q || p.name.toLowerCase().includes(q) || String(p.desc).toLowerCase().includes(q) || [].concat(p.old ?? []).some((o) => o.toLowerCase().includes(q))
    const used = new Set(groups.flatMap((g) => g.props.map((p) => p.type.split(/[ |]/)[0])))
    const types = Object.keys(TYPE_COLORS).filter((t) => used.has(t))
    const total = groups.reduce((n, g) => n + g.props.filter(match).length, 0)
    const names = useMemo(() => [...new Set(groups.flatMap((g) => g.props.map((p) => p.name)))], [groups])

    return (
        <div style={{ marginTop: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ fontFamily: DOC.font, fontSize: 20, fontWeight: 600, color: DOC.ink }}>{title}</div>
                {/* Type to filter; the drawers suggest matching prop names */}
                <OstrichDropDown
                    isInput
                    canAddCustomInputs
                    placeholder="Filter props..."
                    drawers={names}
                    onLabelChange={(text) => setQuery(text ?? "")}
                    maxMenuHeight={260}
                    inputProps={{ "aria-label": `Filter ${title}` }}
                    style={{ width: 260, maxWidth: "100%", backgroundColor: "white" }}
                    activeStyle={{ backgroundColor: "white" }}
                    inputStyle={{ fontFamily: DOC.font, fontSize: 15 }}
                    drawerLabelStyle={{ fontFamily: DOC.mono, fontSize: 13.5 }}
                />
            </div>
            <TypeLegend types={types} />
            {groups.map((g) => {
                const shown = g.props.filter(match)
                if (!shown.length) return null
                return (
                    <div key={g.title} style={{ marginTop: 14 }}>
                        <div style={{ fontFamily: DOC.font, fontSize: 14, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: DOC.muted }}>{g.title}</div>
                        {g.note ? <div style={{ fontFamily: DOC.font, fontSize: 14.5, color: DOC.muted, marginTop: 2 }}>{g.note}</div> : null}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14, marginTop: 8 }}>
                            {shown.map((p) => <PropCard key={p.name} {...p} />)}
                        </div>
                    </div>
                )
            })}
            {total === 0 ? <P style={{ color: DOC.muted }}>No props match "{query}".</P> : null}
        </div>
    )
}

// Shorthand for long lists of style props: style("labelStyle", "The label text")
export const style = (name, desc, old) => ({ name, type: "Style", desc, old })
