import React, { useState } from "react";
import { OstrichDropDown } from "@ostrich_development/ostrich-components";
import { DocPage, Section, SubHeading, P, C, Note, Example, ExampleRow, PropGrid, style } from "./docKit";

const DROPDOWN_PROPS = [
    {
        title: "Content",
        props: [
            { name: "label", type: "String", desc: "The text shown on the dropdown itself.", old: "title" },
            { name: "drawers", type: "Array", desc: "The items in the menu. Strings or numbers work, or drawer objects (see below) to style and program each one." },
            { name: "obj", type: "Object", desc: "Pass the whole dropdown as one object ({ title, drawers, style, onDrawerClick... }). Handy for data-driven menus." },
            { name: "labelChanges", type: "Boolean", def: false, desc: "The label becomes the title of the drawer that was picked.", old: "titleChanges" },
            { name: "isInput", type: "Boolean", def: false, desc: "The label becomes a text box that filters the drawers as you type." },
            { name: "canAddCustomInputs", type: "Boolean", def: false, desc: "isInput only: keep typed text even when it matches no drawer." },
            { name: "placeholder", type: "String", def: "\"Begin Typing...\"", desc: "isInput only: the empty text box's placeholder." },
            { name: "inputProps", type: "Object", desc: "isInput only: extra attributes for the <input> (name, autoComplete, maxLength...)." },
        ],
    },
    {
        title: "Opening and closing",
        props: [
            { name: "openOnHover", type: "Boolean", def: true, desc: "Opens as soon as the cursor enters. false means it opens on click." },
            { name: "closeOnLeave", type: "Boolean", def: true, desc: "Closes when the cursor leaves both the dropdown and its menu." },
            { name: "defaultOpen", type: "Boolean", def: false, desc: "Starts open.", old: "open" },
            { name: "manualOpen", type: "Boolean", def: false, desc: "Clicking and hovering never toggle the menu; only defaultOpen does." },
            { name: "maxMenuHeight", type: "Number", def: 500, desc: "Tallest the open menu gets before it scrolls.", old: "maxDrawerContainerHeight" },
        ],
    },
    {
        title: "Look",
        props: [
            { name: "showsHover", type: "Boolean", def: true, desc: "false: the dropdown keeps its normal style when hovered.", old: "boxHovers" },
            { name: "showsActive", type: "Boolean", def: true, desc: "false: the dropdown keeps its normal style while open.", old: "boxActivates" },
            { name: "drawersShowHover", type: "Boolean", def: true, desc: "false: drawers don't change when hovered.", old: "drawersHover" },
            { name: "drawersShowActive", type: "Boolean", def: true, desc: "false: drawers don't stay highlighted after being picked.", old: "drawersActivate" },
            { name: "rounded", type: "Boolean", def: true, desc: "Rounded corners." },
            { name: "noBorder", type: "Boolean", def: false, desc: "Removes the default border." },
            { name: "noShadow", type: "Boolean", def: false, desc: "Removes the default shadow." },
        ],
    },
    {
        title: "Events",
        props: [
            { name: "onDrawerClick", type: "Function", desc: "Runs when any drawer is picked. Receives the drawer you passed in (string, number or object)." },
            { name: "onClick", type: "Function", desc: "Runs when the dropdown itself is clicked." },
            { name: "onMouseEnter", type: "Function", desc: "Runs when the cursor enters the dropdown." },
            { name: "onMouseLeave", type: "Function", desc: "Runs when the cursor leaves the dropdown." },
            { name: "onInputChange", type: "Function", desc: "isInput only: runs on every keystroke with the typed text.", old: "onChangeWhenInput" },
            { name: "onLabelChange", type: "Function", desc: "Runs whenever the shown label changes (typing, picking or clearing).", old: "onTitleChange" },
        ],
    },
    {
        title: "Styles",
        note: "Hover and active styles only need the differences; they're layered over the normal style.",
        props: [
            style("style", "The dropdown.", "boxStyle"),
            style("hoverStyle", "The dropdown, when hovered.", "hoverBoxStyle"),
            style("activeStyle", "The dropdown, while open.", "activeBoxStyle"),
            style("labelStyle", "The label text.", "titleStyle"),
            style("hoverLabelStyle", "The label text, when hovered.", "hoverTitleStyle"),
            style("activeLabelStyle", "The label text, while open.", "activeTitleStyle"),
            style("labelAreaStyle", "The box around the label or text box."),
            style("inputStyle", "isInput only: the text box (layered over labelStyle)."),
            style("drawerStyle", "Every drawer."),
            style("hoverDrawerStyle", "Every drawer, when hovered."),
            style("activeDrawerStyle", "Every drawer, after being picked."),
            style("drawerLabelStyle", "The text inside every drawer."),
            style("menuStyle", "The box the drawers sit in (this is what scrolls).", "drawerContainerStyle"),
            style("menuContainerStyle", "The box that positions the menu. Default: just below, full width, zIndex 10."),
            style("menuAreaStyle", "The space under the label that holds the menu."),
        ],
    },
]

const DRAWER_PROPS = [
    {
        title: "Each drawer object",
        note: "Anything else you add (value, type, id...) is handed back to your click functions untouched.",
        props: [
            { name: "title", type: "String", desc: "Text in the drawer." },
            { name: "onClick", type: "Function", desc: "Runs when this drawer is picked, in addition to the dropdown's onDrawerClick." },
            { name: "manualOnClick", type: "Boolean", def: false, desc: "true: skip the dropdown's onDrawerClick for this drawer." },
            { name: "clickable", type: "Boolean", def: true, desc: "false: this drawer ignores clicks." },
            { name: "tag", type: "String", desc: "Extra text that isInput searches match against." },
            { name: "value", type: "Any", desc: "Any data you want back when it's clicked." },
            style("style", "This drawer."),
            style("hoverStyle", "This drawer, when hovered."),
            style("activeStyle", "This drawer, after being picked."),
            style("labelStyle", "This drawer's text."),
        ],
    },
]

export default function DropdownShowcase() {
    const [dynamicLabel, setDynamicLabel] = useState("Dynamic Title")
    const [color, setColor] = useState("white")
    const [total, setTotal] = useState(0)
    const [typed, setTyped] = useState("")

    return (
        <DocPage
            title="Ostrich Dropdowns"
            component="<OstrichDropDown />"
            imports="OstrichDropDown"
            intro={<>Give an <C>OstrichDropDown</C> a label and an array, and it renders a styled dropdown with hover effects, clickable drawers, and keyboard support (arrow keys, Enter and Escape) out of the box.</>}
            sections={["Basics", "Programming each drawer", "Search box dropdowns", "Props", "Drawer objects"]}
        >
            <Section title="Basics">
                <ExampleRow>
                    <Example
                        title="Vanilla dropdown"
                        description="Opens on hover."
                        previewStyle={{ minHeight: 200, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            <OstrichDropDown
                                label="Vanilla Dropdown"
                                drawers={[1, 2, 3]}
                            />
                        `}
                    >
                        <OstrichDropDown label="Vanilla Dropdown" drawers={[1, 2, 3]} />
                    </Example>
                    <Example
                        title="Click to open"
                        previewStyle={{ minHeight: 200, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            <OstrichDropDown
                                label="Click to Open"
                                openOnHover={false}
                                drawers={[1, 2, 3]}
                            />
                        `}
                    >
                        <OstrichDropDown label="Click to Open" openOnHover={false} drawers={[1, 2, 3]} />
                    </Example>
                    <Example
                        title="Label follows the pick"
                        description="Use labelChanges, or set the label yourself in onDrawerClick."
                        previewStyle={{ minHeight: 200, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            const [label, setLabel] = useState("Dynamic Title")

                            <OstrichDropDown
                                label={label}
                                drawers={[1, 2, 3]}
                                onDrawerClick={(drawer) => setLabel(drawer)}
                            />
                        `}
                    >
                        <OstrichDropDown label={String(dynamicLabel)} drawers={[1, 2, 3]} onDrawerClick={(drawer) => setDynamicLabel(drawer)} />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Programming each drawer">
                <P>Drawers can be objects instead of plain values. Each one can carry its own styles and click function, plus any data you want handed back when it's picked.</P>
                <ExampleRow>
                    <Example
                        title="Unique drawer styles"
                        size="wide"
                        previewStyle={{ minHeight: 230, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            const [color, setColor] = useState("white")

                            <OstrichDropDown
                                label="Unique Drawer Styles"
                                style={{ width: 350, backgroundColor: color }}
                                activeStyle={{ backgroundColor: color }}
                                onDrawerClick={(drawer) => setColor(drawer.style.color)}
                                drawers={[
                                    {
                                        title: "Red",
                                        style: { color: "red" },
                                        hoverStyle: { backgroundColor: "pink", color: "black" },
                                        activeStyle: { backgroundColor: "red", color: "black" },
                                    },
                                    {
                                        title: "Blue",
                                        style: { color: "blue" },
                                        hoverStyle: { backgroundColor: "cyan", color: "black" },
                                        activeStyle: { backgroundColor: "blue", color: "black" },
                                    },
                                    {
                                        title: "Green",
                                        style: { color: "green" },
                                        hoverStyle: { backgroundColor: "lime", color: "black" },
                                        activeStyle: { backgroundColor: "green", color: "black" },
                                    },
                                ]}
                            />
                        `}
                    >
                        <OstrichDropDown
                            label="Unique Drawer Styles"
                            style={{ width: 350, maxWidth: "100%", backgroundColor: color }}
                            activeStyle={{ backgroundColor: color }}
                            onDrawerClick={(drawer) => setColor(drawer.style.color)}
                            drawers={[
                                { title: "Red", style: { color: "red" }, hoverStyle: { backgroundColor: "pink", color: "black" }, activeStyle: { backgroundColor: "red", color: "black" } },
                                { title: "Blue", style: { color: "blue" }, hoverStyle: { backgroundColor: "cyan", color: "black" }, activeStyle: { backgroundColor: "blue", color: "black" } },
                                { title: "Green", style: { color: "green" }, hoverStyle: { backgroundColor: "lime", color: "black" }, activeStyle: { backgroundColor: "green", color: "black" } },
                            ]}
                        />
                    </Example>
                    <Example
                        title="A click function per drawer"
                        description="drawersShowActive={false} keeps a drawer from staying highlighted, which suits buttons."
                        previewStyle={{ minHeight: 230, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            const [total, setTotal] = useState(0)

                            <OstrichDropDown
                                label={\`Total: \${total}\`}
                                drawersShowActive={false}
                                drawers={[
                                    {
                                        title: "Increase By One",
                                        onClick: () => setTotal(total + 1),
                                    },
                                    {
                                        title: "Decrease By Two",
                                        onClick: () => setTotal(total - 2),
                                    },
                                    {
                                        title: "Double the total",
                                        onClick: () => setTotal(total * 2),
                                    },
                                ]}
                            />
                        `}
                    >
                        <OstrichDropDown
                            label={`Total: ${total}`}
                            style={{ width: 300, maxWidth: "100%" }}
                            drawersShowActive={false}
                            drawers={[
                                { title: "Increase By One", onClick: () => setTotal(total + 1) },
                                { title: "Decrease By Two", onClick: () => setTotal(total - 2) },
                                { title: "Double the total", onClick: () => setTotal(total * 2) },
                            ]}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Search box dropdowns">
                <P>With <C>isInput</C>, the label becomes a text box and the drawers narrow down as you type. Arrow keys move through the matches and Enter picks one.</P>
                <ExampleRow>
                    <Example
                        title="Type to filter"
                        size="wide"
                        previewStyle={{ minHeight: 260, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            <OstrichDropDown
                                isInput
                                placeholder="Search numbers..."
                                onLabelChange={(text) => setTyped(text)}
                                drawers={["1", "12", "123", "4", "45", "456", "567", "67890", "90"]}
                            />
                        `}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
                            <OstrichDropDown
                                isInput
                                placeholder="Search numbers..."
                                onLabelChange={(text) => setTyped(text)}
                                drawers={["1", "12", "123", "4", "45", "456", "567", "67890", "90"]}
                            />
                            <span style={{ fontSize: 14, color: "#5f656e" }}>Current text: "{typed}"</span>
                        </div>
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Props">
                <PropGrid title="OstrichDropDown props" groups={DROPDOWN_PROPS} />
                <Note>The old prop names (shown on each card) still work, so existing code doesn't break.</Note>
            </Section>

            <Section title="Drawer objects">
                <P>Every item in <C>drawers</C> can be a string, a number, or an object with these keys.</P>
                <PropGrid title="Drawer keys" groups={DRAWER_PROPS} />
            </Section>
        </DocPage>
    )
}
