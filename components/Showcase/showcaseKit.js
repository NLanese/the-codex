// Shared building blocks for The Codex's landing, Portfolio and Projects pages.
// Same palette as the Ostrich Components docs (DOC), so the whole portfolio side reads as one site.
// Every visible piece here is an Ostrich Component: cards, buttons, tab bars and code blocks,
// all themed at once through OstrichTheme. Plain HTML is only used for layout and headings.

import React from "react";
import { OstCard, OstrichButton, OstrichTabBar, OstrichTheme } from "@ostrich_development/ostrich-components";
import { DOC } from "../ostrich-components/docKit";

export { DOC }

export const LIME = "#82ffb8"     // Colors.activeColor, softer than the header's pure lime
const HERO_BG = `linear-gradient(135deg, ${DOC.ink} 0%, #2a1a6e 100%)`

// One theme for every Ostrich component on these pages
export const CODEX_THEME = {
    colors: {
        text: DOC.text,
        mutedText: DOC.muted,
        softText: DOC.muted,
        border: DOC.line,
        surface: DOC.wash,
        card: "white",
        hover: "#e3ecf8",
        active: DOC.ink,
        accent: LIME,
        accentBorder: "#3fd889",
        link: DOC.accentDeep,
        codeBackground: DOC.codeBg,
    },
    font: DOC.font,
    radius: { sm: 10, md: 16, lg: 22 },
    shadows: {
        normal: "0 4px 14px rgba(17, 1, 59, 0.10)",
        soft: "0 3px 10px rgba(17, 1, 59, 0.08)",
    },
}


////////////
// Layout //
////////////

// Themed, centered page column with comfortable side gutters
export function Page({ children }) {
    return (
        <OstrichTheme theme={CODEX_THEME}>
            <div style={{ fontFamily: DOC.font, color: DOC.text, padding: "8px 6% 70px", maxWidth: 1280, margin: "0 auto", boxSizing: "border-box" }}>
                {children}
            </div>
        </OstrichTheme>
    )
}

// Scrolls smoothly to an element on the page by id
export function jumpTo(id) {
    if (typeof document === "undefined") return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}


//////////
// Hero //
//////////

export function Hero({ eyebrow, title, intro, actions, aside }) {
    return (
        <OstCard
            noShadow
            style={{
                backgroundColor: DOC.ink, backgroundImage: HERO_BG, color: "white",
                borderRadius: 22, padding: "38px 40px", marginTop: 20,
                boxShadow: "0 10px 30px rgba(17, 1, 59, 0.28)",
                display: "flex", flexWrap: "wrap", alignItems: "center", gap: 36,
            }}
        >
            <div style={{ flex: "1 1 420px", minWidth: 0 }}>
                {eyebrow ? (
                    <div style={{ fontSize: 14, letterSpacing: 2.5, textTransform: "uppercase", color: LIME, fontWeight: 700 }}>{eyebrow}</div>
                ) : null}
                <h1 style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.08, fontWeight: 700, margin: "10px 0 0", letterSpacing: 0.3 }}>{title}</h1>
                {intro ? (
                    <div style={{ fontSize: 18.5, lineHeight: 1.6, marginTop: 16, maxWidth: 680, color: "#e4defd" }}>{intro}</div>
                ) : null}
                {actions ? (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>{actions}</div>
                ) : null}
            </div>
            {aside ? <div style={{ flex: "0 1 auto", minWidth: 0, maxWidth: "100%", display: "flex", justifyContent: "center", margin: "0 auto" }}>{aside}</div> : null}
        </OstCard>
    )
}

// A round photo, as an OstCard image template
export function Avatar({ src, alt, size = 120, ring = "white" }) {
    return (
        <OstCard
            template={1}
            imageSrc={src}
            imageAlt={alt}
            noShadow
            style={{
                width: size, height: size, padding: 0, borderRadius: 999, overflow: "hidden", flexShrink: 0,
                border: `${Math.max(4, Math.round(size / 45))}px solid ${ring}`,
                boxShadow: "0 10px 26px rgba(0, 0, 0, 0.28)",
            }}
            imageAreaStyle={{ flex: 1, width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", maxWidth: "none", maxHeight: "none", objectFit: "cover", objectPosition: "center 20%" }}
        />
    )
}


/////////////
// Buttons //
/////////////

// variant: "primary" (mint on navy), "ghost" (outline, for use on the navy hero),
// "dark" (navy, for use on white), "light" (white pill, for use on white)
export function ActionButton({ label, onClick, variant = "primary", ariaLabel, style, labelStyle }) {
    const looks = {
        primary: { bg: LIME, text: DOC.ink, border: "none", shadow: true },
        ghost: { bg: "rgba(255,255,255,0.06)", text: "white", border: "1px solid rgba(255,255,255,0.4)", hover: { backgroundColor: "rgba(255,255,255,0.18)" } },
        dark: { bg: DOC.ink, text: "white", border: "none", shadow: true, hover: { backgroundColor: "#2a1a6e" } },
        light: { bg: "white", text: DOC.ink, border: `1px solid ${DOC.line}`, shadow: true, hover: { backgroundColor: DOC.wash } },
    }
    const look = looks[variant] || looks.primary
    return (
        <OstrichButton
            label={label}
            onClick={onClick}
            aria-label={ariaLabel}
            style={{
                backgroundColor: look.bg, border: look.border, borderRadius: 999,
                padding: "11px 22px", minWidth: 0, height: "auto",
                boxShadow: look.shadow ? "0 3px 10px rgba(17, 1, 59, 0.14)" : "none",
                ...style,
            }}
            hoverStyle={look.hover}
            labelStyle={{ fontFamily: DOC.font, fontSize: 16, fontWeight: 700, color: look.text, whiteSpace: "nowrap", ...labelStyle }}
        />
    )
}


///////////////
// Tab Bars //
///////////////

// Pill-style OstrichTabBar for switching or filtering content on a page.
// tabs: a list of titles. Each becomes a tab object sized to its text (flex "0 0 auto") instead of stretching.
export function PillTabs({ tabs, value, onChange, ariaLabel }) {
    return (
        <OstrichTabBar
            tabs={tabs.map((title) => ({ title, flex: "0 0 auto" }))}
            value={value}
            startedActive
            onTabClick={(tab) => onChange(typeof tab === "string" ? tab : tab.title)}
            aria-label={ariaLabel}
            style={{ border: "none", boxShadow: "none", backgroundColor: "transparent", height: "auto", minWidth: 0, padding: 0, margin: 0 }}
            tabAreaStyle={{ height: "auto" }}
            tabListStyle={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "flex-start", alignItems: "center" }}
            tabStyle={{
                display: "flex", backgroundColor: DOC.wash, border: `1px solid ${DOC.line}`,
                borderRadius: 999, padding: "8px 18px", height: "auto", cursor: "pointer",
            }}
            hoverTabStyle={{ backgroundColor: "#e3ecf8" }}
            activeTabStyle={{ backgroundColor: DOC.ink, border: `1px solid ${DOC.ink}` }}
            labelStyle={{ fontFamily: DOC.font, fontSize: 15.5, fontWeight: 700, color: DOC.ink, margin: 0, whiteSpace: "nowrap" }}
            hoverLabelStyle={{ color: DOC.ink }}
            activeLabelStyle={{ color: "white" }}
        />
    )
}


//////////////
// Sections //
//////////////

export function Section({ id, eyebrow, title, subtitle, children, style }) {
    return (
        <section id={id} style={{ marginTop: 56, scrollMarginTop: 90, ...style }}>
            {eyebrow ? (
                <div style={{ fontSize: 13, letterSpacing: 2.5, textTransform: "uppercase", color: DOC.accentDeep, fontWeight: 700 }}>{eyebrow}</div>
            ) : null}
            {title ? (
                <h2 style={{ fontSize: 32, fontWeight: 700, color: DOC.ink, margin: "6px 0 0", letterSpacing: 0.3 }}>{title}</h2>
            ) : null}
            {subtitle ? (
                <p style={{ fontSize: 17, lineHeight: 1.6, color: DOC.muted, margin: "8px 0 0", maxWidth: 760 }}>{subtitle}</p>
            ) : null}
            <div style={{ marginTop: 22 }}>{children}</div>
        </section>
    )
}

export function CardGrid({ children, min = 270 }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`, gap: 22 }}>
            {children}
        </div>
    )
}


///////////
// Chips //
///////////

// Small rounded label, as a shadowless OstCard
export function Chip({ children, color = DOC.muted, background = DOC.wash, border = DOC.line, mono = false, style }) {
    return (
        <OstCard
            noShadow
            style={{
                display: "inline-block", padding: "2px 9px", borderRadius: 999,
                backgroundColor: background, border: border ? `1px solid ${border}` : "none",
                color, fontSize: 12, lineHeight: 1.6, fontFamily: mono ? DOC.mono : DOC.font,
                ...style,
            }}
        >
            {children}
        </OstCard>
    )
}

const STATUS = {
    live: { label: "Live", bg: "#dcfce9", fg: "#11733f" },
    beta: { label: "In Progress", bg: "#fff3d6", fg: "#9a6200" },
    offline: { label: "Demo Offline", bg: "#ececf2", fg: "#4b4f5c" },
    soon: { label: "Coming Soon", bg: "#ececf2", fg: "#4b4f5c" },
    pro: { label: "Professional", bg: "#e1efff", fg: "#1d5fa8" },
}

export function StatusBadge({ status }) {
    const s = STATUS[status]
    if (!s) return null
    return (
        <Chip color={s.fg} background={s.bg} border={null} style={{ fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", padding: "3px 10px" }}>
            {s.label}
        </Chip>
    )
}


///////////////////
// Project Cards //
///////////////////

// An OstCard in its image-over-text template (template 1).
// image: path under /public. fit: "cover" for artwork and screenshots, "logo" for logos (shown whole).
// tileBg: background behind a logo, to match logos that have their own background color (defaults to white).
// Give it onClick for a page on this site, or href for an outside site. With neither, the card is shown as not yet available.
// cta: optional link text, replacing the default "View project →" / "Visit site ↗".
export function ProjectCard({ image, fit = "cover", tileBg, title, blurb, tags = [], status, onClick, href, cta: ctaText }) {
    const clickable = !!(onClick || href)
    const open = () => {
        if (href) window.open(href, "_blank", "noopener,noreferrer")
        else if (onClick) onClick()
    }
    const cta = !clickable ? null : ctaText ? ctaText : href ? "Visit site ↗" : "View project →"

    return (
        <OstCard
            template={1}
            imageSrc={image}
            imageAlt=""
            onClick={clickable ? open : undefined}
            aria-label={clickable ? `${title}${href ? " (opens in a new tab)" : ""}` : undefined}
            noShadow
            style={{
                padding: 0, overflow: "hidden", backgroundColor: "white",
                border: `1px solid ${DOC.line}`, borderRadius: 18,
                boxShadow: "0 4px 14px rgba(17, 1, 59, 0.08)",
                height: "100%", boxSizing: "border-box",
                opacity: clickable ? 1 : 0.82,
            }}
            hoverStyle={{ backgroundColor: DOC.wash, boxShadow: "0 8px 22px rgba(17, 1, 59, 0.16)" }}
            pressedStyle={{ transform: "scale(0.98)" }}
            imageAreaStyle={{
                flex: "0 0 170px", height: 170, width: "100%",
                backgroundColor: fit === "logo" ? (tileBg || "white") : DOC.wash,
                borderBottom: `1px solid ${DOC.line}`,
            }}
            imageStyle={fit === "logo"
                ? { maxWidth: "70%", maxHeight: "76%", objectFit: "contain" }
                : { width: "100%", height: "100%", maxWidth: "none", maxHeight: "none", objectFit: "cover", filter: clickable ? "none" : "grayscale(55%)" }}
            textStyle={{
                flex: "1 1 auto", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start",
                textAlign: "left", fontSize: "inherit", padding: "16px 18px 18px", gap: 8,
            }}
        >
            {status ? <div><StatusBadge status={status} /></div> : null}
            <div style={{ fontSize: 20, fontWeight: 700, color: DOC.ink, lineHeight: 1.25 }}>{title}</div>
            {blurb ? <div style={{ fontSize: 15.5, lineHeight: 1.55, color: DOC.text }}>{blurb}</div> : null}
            {tags.length ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
                    {tags.map((t) => <Chip key={t} mono>{t}</Chip>)}
                </div>
            ) : null}
            <div style={{ flex: 1 }} />
            {cta ? <div style={{ fontSize: 15, fontWeight: 700, color: DOC.accentDeep, marginTop: 4 }}>{cta}</div> : null}
        </OstCard>
    )
}


////////////
// Extras //
////////////

// Small row of headline numbers, each an OstCard
export function StatRow({ stats }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {stats.map((s) => (
                <OstCard
                    key={s.label}
                    noShadow
                    style={{ flex: "1 1 200px", backgroundColor: DOC.wash, border: `1px solid ${DOC.line}`, borderRadius: 16, padding: "16px 20px" }}
                >
                    <div style={{ fontSize: 32, fontWeight: 700, color: DOC.ink }}>{s.value}</div>
                    <div style={{ fontSize: 15, lineHeight: 1.45, color: DOC.muted, marginTop: 2 }}>{s.label}</div>
                </OstCard>
            ))}
        </div>
    )
}

// Friendly heads-up banner, as an OstCard
export function Notice({ children }) {
    return (
        <OstCard
            role="note"
            noShadow
            style={{
                marginTop: 40, backgroundColor: "#fff6e8", borderLeft: "6px solid #e0912f", borderRadius: 14,
                padding: "14px 20px", fontSize: 16, lineHeight: 1.55, color: "#5b3a08",
            }}
        >
            {children}
        </OstCard>
    )
}
