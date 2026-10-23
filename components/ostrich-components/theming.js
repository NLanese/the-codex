import React, { useState } from "react";
import {
    OstrichTheme, DEFAULT_THEME, OstrichButton, OstrichDropDown, OstCard, FormMultipleChoice, OstrichTabBar,
} from "@ostrich_development/ostrich-components";
import { DocPage, Section, SubHeading, P, C, Note, ExampleRow, Example, CodeBlock, PropGrid, DOC } from "./docKit";

const COLOR_NOTES = {
    text: "Normal text",
    mutedText: "Captions",
    softText: "Extra field text (moreText)",
    border: "Lines around tabs, dropdowns and forms",
    surface: "Tabs, dropdowns, drawers, entries",
    card: "Clickable cards",
    hover: "Hovered tabs, dropdowns and drawers",
    active: "Selected tabs, open dropdowns, picked drawers",
    accent: "Buttons, selected options, valid status",
    accentBorder: "The edge of accent things",
    submit: "Form submit button",
    disabled: "Disabled buttons",
    marker: "Unselected option bubbles, neutral status",
    correct: "Correct answers",
    correctBorder: "Edge of correct answers",
    wrong: "Wrong answers",
    wrongBorder: "Edge of wrong answers",
    error: "\"Why is this invalid?\" messages",
    correctText: "\"Correct answer: ...\" text",
    link: "ODef clickable word",
    popup: "ODef popup",
    focusRing: "Keyboard focus outline",
}

const RADIUS_NOTES = { sm: "Dropdowns, multi-text entries", md: "Cards, buttons", lg: "Forms, submit button" }
const SHADOW_NOTES = { normal: "Cards, buttons", soft: "Dropdowns", subtle: "Form fields", popup: "ODef popup" }

const PRESETS = {
    Default: {},
    Ocean: {
        colors: { accent: "#4fd1c5", accentBorder: "#2c9c92", active: "#c6f6f1", hover: "#9fe3dc", surface: "#f0fbfa", submit: "#4fd1c5" },
        radius: 6,
    },
    Midnight: {
        colors: {
            text: "#f1f0ff", mutedText: "#a9a3cf", softText: "#cfcaf0", border: "#3d3570", surface: "#1d1640", card: "#241b52",
            hover: "#2f2566", active: "#3b2f80", accent: "#7c5cff", accentBorder: "#a48bff", submit: "#7c5cff", marker: "#4a4280",
        },
        shadows: { normal: "0 4px 14px rgba(0,0,0,0.5)", soft: "0 2px 8px rgba(0,0,0,0.4)" },
        radius: { sm: 8, md: 14, lg: 18 },
    },
    Sharp: {
        colors: { accent: "#ffd400", accentBorder: "#111", active: "#fff3a6", border: "#111" },
        radius: 0,
        shadows: { normal: "4px 4px 0 #111", soft: "3px 3px 0 #111" },
    },
}

const THEME_PROPS = [
    {
        title: "OstrichTheme",
        props: [
            { name: "theme", type: "Object", required: true, desc: "{ colors, font, radius, shadows }. Only include what you want to change; everything else keeps its default." },
            { name: "children", type: "Node", desc: "Everything inside is themed. Themes can be nested; the inner one wins for the keys it sets." },
            { name: "style", type: "Style", desc: "The wrapper. It uses display: contents, so by default it doesn't affect your layout." },
        ],
    },
    {
        title: "The theme object",
        props: [
            { name: "colors", type: "Object", desc: "Any of the color tokens listed below, by name." },
            { name: "font", type: "String", def: "\"Gilroy, system-ui, sans-serif\"", desc: "The font family every component uses." },
            { name: "radius", type: "Number | Object", desc: "One number for every corner size, or { sm, md, lg }." },
            { name: "shadows", type: "Object", desc: "{ normal, soft, subtle, popup }: any CSS box-shadow." },
        ],
    },
    {
        title: "Helpers",
        props: [
            { name: "ostrichThemeCSS", type: "Function", desc: "(theme, selector = \":root\") => a CSS string setting the same variables. Good for global stylesheets and dark mode." },
            { name: "themeToCSSVars", type: "Function", desc: "(theme) => { \"--ost-accent\": \"teal\", ... } to spread into any element's style." },
            { name: "DEFAULT_THEME", type: "Object", desc: "Every default value, if you want to build on them." },
        ],
    },
]

// The JSX for a preset, as shown under the preview
function themeCode(theme) {
    const body = JSON.stringify(theme, null, 4).replace(/"([a-zA-Z]+)":/g, "$1:").split("\n").map((l, i) => (i ? "    " + l : l)).join("\n")
    return `<OstrichTheme\n    theme={${body}}\n>\n    <App />\n</OstrichTheme>`
}

function Preview() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, width: "100%", maxWidth: 520 }}>
            <OstrichTabBar tabs={["Home", "Lessons", "Projects"]} startedActive />
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-start" }}>
                <OstrichButton label="Button" onClick={() => {}} />
                <OstrichDropDown label="Dropdown" drawers={["One", "Two", "Three"]} />
                <OstCard onClick={() => {}}>Clickable card</OstCard>
            </div>
            <FormMultipleChoice fieldObj={{ title: "Pick one", type: "MC", options: ["Alpha", "Beta", "Gamma"], value: ["Beta"] }} />
        </div>
    )
}

function Swatch({ value }) {
    return <OstCard noShadow style={{ width: 34, height: 34, padding: 0, borderRadius: 8, backgroundColor: value, border: "1px solid rgba(0,0,0,0.12)", flexShrink: 0 }} />
}

function TokenCard({ name, cssVar, value, note, preview }) {
    return (
        <OstCard style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 12px", minWidth: 0 }}>
            {preview}
            <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: DOC.mono, fontWeight: 700, fontSize: 14.5, color: DOC.ink }}>{name}</div>
                <div style={{ fontFamily: DOC.mono, fontSize: 12, color: DOC.muted, wordBreak: "break-all" }}>{cssVar} · {value}</div>
                <div style={{ fontFamily: DOC.font, fontSize: 13.5, color: DOC.text, marginTop: 2 }}>{note}</div>
            </div>
        </OstCard>
    )
}

const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12, marginTop: 10 }

export default function ThemingShowcase() {
    const [preset, setPreset] = useState("Ocean")

    return (
        <DocPage
            title="Theming"
            component="<OstrichTheme />"
            imports="OstrichTheme, ostrichThemeCSS"
            intro={<>Every default color, font, corner and shadow in the library is a CSS variable. Wrap part of your app in <C>OstrichTheme</C> to change them everywhere at once, while each component's own style props still win.</>}
            sections={["Try a theme", "Three ways to theme", "Tokens", "Props"]}
        >
            <Section title="Try a theme">
                <P>The same components, unchanged, inside different themes.</P>
                <div style={{ maxWidth: 520 }}>
                    <FormMultipleChoice
                        inForm={false}
                        value={[preset]}
                        onChange={(field) => field.value?.[0] && setPreset(field.value[0])}
                        itemsPerRow={4}
                        fieldObj={{ type: "MC", template: "tabs", options: Object.keys(PRESETS) }}
                    />
                </div>
                <ExampleRow>
                    <Example
                        title="Default"
                        previewStyle={{ background: "white", minHeight: 330, alignItems: "flex-start", alignContent: "flex-start" }}
                    >
                        <Preview />
                    </Example>
                    <Example
                        title={preset}
                        previewStyle={{ background: preset === "Midnight" ? "#120c2e" : "white", minHeight: 330, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={themeCode(PRESETS[preset])}
                    >
                        <OstrichTheme theme={PRESETS[preset]}>
                            <Preview />
                        </OstrichTheme>
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Three ways to theme">
                <SubHeading>1. Around part of your app</SubHeading>
                <CodeBlock code={`
                    import { OstrichTheme } from "@ostrich_development/ostrich-components"

                    <OstrichTheme theme={{ colors: { accent: "teal", surface: "#fafafa" }, font: "Inter", radius: 8 }}>
                        <App />
                    </OstrichTheme>
                `} />
                <SubHeading>2. Plain CSS</SubHeading>
                <P>The variables are ordinary CSS, so media queries like dark mode just work.</P>
                <CodeBlock title="CSS" code={`
                    :root {
                        --ost-accent: teal;
                        --ost-radius-md: 8px;
                    }

                    @media (prefers-color-scheme: dark) {
                        :root {
                            --ost-text: #f1f0ff;
                            --ost-surface: #1d1640;
                        }
                    }
                `} />
                <SubHeading>3. Generate the CSS</SubHeading>
                <CodeBlock code={`
                    import { ostrichThemeCSS } from "@ostrich_development/ostrich-components"

                    const css = ostrichThemeCSS({ colors: { accent: "teal" } }, ".dark")
                    // ".dark {\\n  --ost-accent: teal;\\n}"
                `} />
                <Note tone="tip">Component style props always beat the theme. Use the theme for the overall look and style props for one-off changes.</Note>
            </Section>

            <Section title="Tokens">
                <SubHeading>Colors</SubHeading>
                <div style={grid}>
                    {Object.entries(DEFAULT_THEME.colors).map(([name, value]) => (
                        <TokenCard key={name} name={name} cssVar={`--ost-${name}`} value={value} note={COLOR_NOTES[name]} preview={<Swatch value={value} />} />
                    ))}
                </div>
                <SubHeading>Corners</SubHeading>
                <div style={grid}>
                    {Object.entries(DEFAULT_THEME.radius).map(([name, value]) => (
                        <TokenCard
                            key={name} name={`radius.${name}`} cssVar={`--ost-radius-${name}`} value={value} note={RADIUS_NOTES[name]}
                            preview={<OstCard noShadow style={{ width: 34, height: 34, padding: 0, boxSizing: "border-box", borderRadius: value, border: `3px solid ${DOC.accentDeep}`, flexShrink: 0 }} />}
                        />
                    ))}
                </div>
                <SubHeading>Shadows</SubHeading>
                <div style={grid}>
                    {Object.entries(DEFAULT_THEME.shadows).map(([name, value]) => (
                        <TokenCard
                            key={name} name={`shadows.${name}`} cssVar={`--ost-shadow-${name}`} value={value} note={SHADOW_NOTES[name]}
                            preview={<OstCard style={{ width: 34, height: 34, padding: 0, borderRadius: 8, backgroundColor: "white", boxShadow: value, flexShrink: 0 }} />}
                        />
                    ))}
                </div>
                <SubHeading>Font</SubHeading>
                <div style={grid}>
                    <TokenCard name="font" cssVar="--ost-font" value={DEFAULT_THEME.font} note="Every component's text" preview={<span style={{ fontSize: 26, fontWeight: 700, width: 34, textAlign: "center" }}>Aa</span>} />
                </div>
            </Section>

            <Section title="Props">
                <PropGrid title="Theme props and helpers" groups={THEME_PROPS} />
            </Section>
        </DocPage>
    )
}
