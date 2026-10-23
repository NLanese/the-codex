import React, { useState } from "react";
import { OstrichTabBar } from "@ostrich_development/ostrich-components";
import { HeaderBar } from "../global/headerBar";
import { DocPage, Section, P, C, Note, Example, ExampleRow, PropGrid, style } from "./docKit";

const TAB_BAR_PROPS = [
    {
        title: "Content",
        props: [
            { name: "tabs", type: "Array", required: true, desc: "The tabs. Strings and numbers work, or tab objects (see below) to style and program each tab." },
        ],
    },
    {
        title: "Which tab is active",
        props: [
            { name: "startedActive", type: "Boolean", def: false, desc: "Start with a tab already selected (the first one, unless told otherwise)." },
            { name: "startingTabByIndex", type: "Number", def: 0, desc: "With startedActive: which tab starts selected, by position." },
            { name: "startingTabByTitle", type: "String", desc: "With startedActive: which tab starts selected, by title." },
            { name: "value", type: "Any", desc: "Controlled: the tab (or tab title) that should be active. Changing it moves the selection." },
            { name: "tabDeactivates", type: "Boolean", def: false, desc: "Clicking the active tab un-selects it. Otherwise only clicking another tab does." },
            { name: "isManuallyActive", type: "Boolean", def: false, desc: "The active tab is driven only by manualActiveTabTitle; clicks don't change it." },
            { name: "manualActiveTabTitle", type: "String", desc: "With isManuallyActive: the title of the active tab." },
        ],
    },
    {
        title: "Look and behavior",
        props: [
            { name: "showsHover", type: "Boolean", def: true, desc: "false: tabs and their text don't change when hovered." },
            { name: "showsActive", type: "Boolean", def: true, desc: "false: tabs and their text don't change when selected or opened." },
            { name: "openOnHover", type: "Boolean", def: true, desc: "Dropdown tabs open on hover. false means they open on click. A tab's own dropdown.openOnHover wins." },
        ],
    },
    {
        title: "Events",
        props: [
            { name: "onTabClick", type: "Function", desc: "Runs when any tab is clicked. Receives the tab exactly as you passed it in (string, number or object)." },
            { name: "onTabHover", type: "Function", desc: "Runs when any tab is hovered. Receives the tab." },
            { name: "onDrawerClick", type: "Function", desc: "Runs when a drawer in any dropdown tab is picked. Receives the drawer." },
        ],
    },
    {
        title: "Styles",
        note: "These apply to every tab; a tab object's own styles win over them.",
        props: [
            style("style", "The bar."),
            style("tabAreaStyle", "The box inside the bar that holds the row of tabs."),
            style("tabListStyle", "The row of tabs."),
            style("tabStyle", "Every tab."),
            style("hoverTabStyle", "Every tab, when hovered."),
            style("activeTabStyle", "Every tab, when selected."),
            style("labelStyle", "Every tab's text.", "titleStyle"),
            style("hoverLabelStyle", "Every tab's text, when hovered.", "hoverTitleStyle"),
            style("activeLabelStyle", "Every tab's text, when selected.", "activeTitleStyle"),
            style("drawerStyle", "Every drawer in every dropdown tab."),
            style("hoverDrawerStyle", "Every drawer in every dropdown tab, when hovered."),
            style("activeDrawerStyle", "Every drawer in every dropdown tab, after being picked."),
        ],
    },
]

const TAB_OBJECT_PROPS = [
    {
        title: "Each tab object",
        note: "Add any other keys you like (value, id, route...). They're handed back to onTabClick untouched.",
        props: [
            { name: "title", type: "String", desc: "Text on the tab." },
            { name: "onClick", type: "Function", desc: "Runs when this tab is clicked, before the bar's onTabClick. Receives the tab." },
            { name: "onHover", type: "Function", desc: "Runs when this tab is hovered." },
            { name: "dropdown", type: "Object", desc: "Makes this tab a dropdown. Takes the same keys as an OstrichDropDown: drawers, onDrawerClick, openOnHover, drawerStyle..." },
            { name: "clickable", type: "Boolean", def: true, desc: "false: this tab ignores clicks." },
            { name: "showsHover", type: "Boolean", def: true, desc: "false: this tab doesn't change when hovered." },
            { name: "flex", type: "Number", def: 1, desc: "How much of the bar's width this tab takes compared with the others." },
            style("style", "This tab."),
            style("hoverStyle", "This tab, when hovered."),
            style("activeStyle", "This tab, when selected."),
            style("labelStyle", "This tab's text.", "textStyle"),
            style("hoverLabelStyle", "This tab's text, when hovered.", "hoverTextStyle"),
            style("activeLabelStyle", "This tab's text, when selected.", "activeTextStyle"),
        ],
    },
]

export default function TabBarsShowcase() {
    const [total, setTotal] = useState(0)
    const [dynamicStyle, setDynamicStyle] = useState({})

    return (
        <DocPage
            title="Ostrich Tab Bars"
            component="<OstrichTabBar />"
            imports="OstrichTabBar"
            intro={<>The tab bar at the top of this site is an <C>OstrichTabBar</C>. Even unstyled, it works out tab widths, has normal, hover and active looks, supports the arrow keys, and can turn any tab into a dropdown without you rendering one yourself.</>}
            sections={["Basics", "Programming each tab", "The Codex header", "Props", "Tab objects"]}
        >
            <Section title="Basics">
                <ExampleRow>
                    <Example
                        title="Vanilla tab bar"
                        code={`
                            <OstrichTabBar tabs={[1, 2, 3]} />
                        `}
                        previewStyle={{ minHeight: 120, alignItems: "flex-start", alignContent: "flex-start" }}
                    >
                        <div style={{ width: "100%" }}><OstrichTabBar tabs={[1, 2, 3]} /></div>
                    </Example>
                    <Example
                        title="With a dropdown tab"
                        code={`
                            <OstrichTabBar
                                style={{ width: 400 }}
                                tabs={[
                                    {
                                        title: "Dropdown Tab",
                                        dropdown: {
                                            drawers: ["Drawer1", "Drawer2", "Drawer3"],
                                        },
                                    },
                                    "Tab 2",
                                    "Tab 3",
                                ]}
                            />
                        `}
                        previewStyle={{ minHeight: 200, alignItems: "flex-start", alignContent: "flex-start" }}
                    >
                        <OstrichTabBar
                            style={{ width: 400, maxWidth: "100%" }}
                            tabs={[{ title: "Dropdown Tab", dropdown: { drawers: ["Drawer1", "Drawer2", "Drawer3"] } }, "Tab 2", "Tab 3"]}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Programming each tab">
                <P>Most of a tab bar's setup usually lives in <C>tabs</C>. Each tab object can have its own styles, click behavior and dropdown, and the bar's <C>onTabClick</C> receives the whole object, so custom keys like <C>value</C> come along.</P>
                <ExampleRow>
                    <Example
                        title="A counter bar"
                        size="full"
                        description="Each tab carries a value; the middle tab is display only."
                        code={`
                            const [total, setTotal] = useState(0)

                            <OstrichTabBar
                                style={{ width: 500 }}
                                showsActive={false}
                                onTabClick={(tab) => setTotal(total + tab.value)}
                                tabs={[
                                    { title: "Add 1", value: 1, hoverStyle: { backgroundColor: "#d1ffdc" } },
                                    { title: "Add 5", value: 5, hoverStyle: { backgroundColor: "#d1ffdc" } },
                                    { title: \`Total: \${total}\`, showsHover: false, clickable: false },
                                    { title: "Subtract 1", value: -1, hoverStyle: { backgroundColor: "#ffdbd1" } },
                                    { title: "Subtract 5", value: -5, hoverStyle: { backgroundColor: "#ffdbd1" } },
                                ]}
                            />
                        `}
                        previewStyle={{ minHeight: 120, alignItems: "flex-start", alignContent: "flex-start" }}
                    >
                        <OstrichTabBar
                            style={{ width: 500, maxWidth: "100%" }}
                            showsActive={false}
                            onTabClick={(tab) => setTotal(total + tab.value)}
                            tabs={[
                                { title: "Add 1", value: 1, hoverStyle: { backgroundColor: "#d1ffdc" } },
                                { title: "Add 5", value: 5, hoverStyle: { backgroundColor: "#d1ffdc" } },
                                { title: `Total: ${total}`, showsHover: false, clickable: false },
                                { title: "Subtract 1", value: -1, hoverStyle: { backgroundColor: "#ffdbd1" } },
                                { title: "Subtract 5", value: -5, hoverStyle: { backgroundColor: "#ffdbd1" } },
                            ]}
                        />
                    </Example>
                    <Example
                        title="Dynamic styles"
                        size="full"
                        description="Drawers carry the style key and value they set."
                        code={`
                            const [dynamicStyle, setDynamicStyle] = useState({})

                            <OstrichTabBar
                                style={{ width: 500 }}
                                showsActive={false}
                                onDrawerClick={(drawer) =>
                                    setDynamicStyle({ ...dynamicStyle, [drawer.type]: drawer.value })
                                }
                                tabs={[
                                    {
                                        title: "Set Color",
                                        dropdown: {
                                            drawers: [
                                                { title: "Red", type: "backgroundColor", value: "#ffdbd1" },
                                                { title: "Green", type: "backgroundColor", value: "#d1ffdc" },
                                                { title: "White", type: "backgroundColor", value: "#fff" },
                                            ],
                                        },
                                    },
                                    {
                                        title: "Dynamic Styles!",
                                        showsHover: false,
                                        clickable: false,
                                        flex: 6,
                                        style: dynamicStyle,
                                        labelStyle: { ...dynamicStyle, backgroundColor: "transparent" },
                                    },
                                    {
                                        title: "Set Font Size",
                                        dropdown: {
                                            drawers: [
                                                { title: "Small Font", type: "fontSize", value: 12 },
                                                { title: "Medium Font", type: "fontSize", value: 16 },
                                                { title: "Big Font", type: "fontSize", value: 20 },
                                            ],
                                        },
                                    },
                                ]}
                            />
                        `}
                        previewStyle={{ minHeight: 200, alignItems: "flex-start", alignContent: "flex-start" }}
                    >
                        <OstrichTabBar
                            style={{ width: 500, maxWidth: "100%" }}
                            showsActive={false}
                            onDrawerClick={(drawer) => setDynamicStyle({ ...dynamicStyle, [drawer.type]: drawer.value })}
                            tabs={[
                                {
                                    title: "Set Color",
                                    dropdown: {
                                        drawers: [
                                            { title: "Red", type: "backgroundColor", value: "#ffdbd1" },
                                            { title: "Green", type: "backgroundColor", value: "#d1ffdc" },
                                            { title: "White", type: "backgroundColor", value: "#fff" },
                                        ],
                                    },
                                },
                                {
                                    title: "Dynamic Styles!",
                                    showsHover: false,
                                    clickable: false,
                                    flex: 6,
                                    style: { ...dynamicStyle },
                                    labelStyle: { ...dynamicStyle, backgroundColor: "transparent" },
                                },
                                {
                                    title: "Set Font Size",
                                    dropdown: {
                                        drawers: [
                                            { title: "Small Font", type: "fontSize", value: 12 },
                                            { title: "Medium Font", type: "fontSize", value: 16 },
                                            { title: "Big Font", type: "fontSize", value: 20 },
                                        ],
                                    },
                                },
                            ]}
                        />
                    </Example>
                </ExampleRow>
                <Note tone="tip">A tab object takes the same keys as an OstrichDropDown, so anything you can do to a dropdown (styles, click functions, drawers) you can do to a single tab.</Note>
            </Section>

            <Section title="The Codex header">
                <P>Here is the bar from the top of this page, and the code that styles it. The tabs themselves come from a list of objects with <C>title</C>, <C>onClick</C> and a <C>dropdown</C>.</P>
                <ExampleRow>
                    <Example
                        title="Header bar"
                        size="full"
                        previewStyle={{ minHeight: 260, display: "block", background: "white", alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            const tabs = [
                                {
                                    title: "Ostrich Components",
                                    onClick: () => router.push("/showcases/ostrich-components/menu"),
                                    dropdown: {
                                        openOnHover: true,
                                        drawers: ["Showcase", "OstCards", "TabBars", "Dropdowns", "Ostrich Forms"],
                                        onDrawerClick: (drawer) => handleShowcaseDrawer("ostrich-components", drawer, router),
                                    },
                                },
                                // ...more tabs
                            ]

                            <OstrichTabBar
                                tabs={tabs}
                                startedActive={true}
                                startingTabByTitle={activeTabBar}
                                style={{
                                    height: 55, width: "100%", padding: 0, margin: 0, marginBottom: 20,
                                    boxShadow: "5px 10px 15px 5px rgba(40, 40, 40, 0.4)",
                                    boxSizing: "border-box", position: "sticky",
                                }}
                                labelStyle={{ fontFamily: "Gilroy", fontWeight: 500, fontSize: 17, color: "white" }}
                                activeLabelStyle={{ color: "lime", fontWeight: 700, fontSize: 18 }}
                                hoverLabelStyle={{ color: "lime", fontWeight: 600, fontSize: 18 }}
                                tabStyle={{
                                    borderLeft: "1px solid white", borderRight: "1px solid white",
                                    backgroundColor: "#11013b", color: "#efefef", borderRadius: 0, padding: 0,
                                }}
                                hoverTabStyle={{ backgroundColor: "#11013b", color: "lime" }}
                                activeTabStyle={{
                                    borderLeft: "3px solid lime", borderRight: "3px solid lime",
                                    color: "lime", backgroundColor: "#11013b",
                                }}
                                drawerStyle={{ color: "black" }}
                            />
                        `}
                    >
                        <HeaderBar />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Props">
                <PropGrid title="OstrichTabBar props" groups={TAB_BAR_PROPS} />
                <Note>Old prop names (shown on each card) still work.</Note>
            </Section>

            <Section title="Tab objects">
                <PropGrid title="Tab keys" groups={TAB_OBJECT_PROPS} />
            </Section>
        </DocPage>
    )
}
