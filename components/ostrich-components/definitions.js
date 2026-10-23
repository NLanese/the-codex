import React from "react";
import { ODef, DefinitionList, DefinitionRow } from "@ostrich_development/ostrich-components";
import { DocPage, Section, P, C, Note, Example, ExampleRow, PropGrid, style } from "./docKit";

const TERMS = [
    { term: "Component", definition: "A reusable piece of UI, written as a function that returns JSX." },
    { term: "Prop", definition: "A value passed into a component, like an argument to a function." },
    { term: "State", definition: "Data a component remembers between renders. Changing it re-renders the component." },
]

const ODEF_PROPS = [
    {
        title: "Content",
        props: [
            { name: "text", type: "String", required: true, desc: "The word that gets clicked." },
            { name: "definitionObject", type: "Object", desc: "{ term, definition }: shown as a definition row in the popup." },
            { name: "popupContent", type: "Node", desc: "Anything else to show in the popup, used when there's no definitionObject.", old: "modalContent" },
        ],
    },
    {
        title: "Styles",
        props: [
            style("style", "The clickable word. Default: bold and blue.", "textStyle"),
            style("popupStyle", "The popup.", "modalStyle"),
            style("contentStyle", "The padding box inside the popup (definitionObject only)."),
            style("rowStyle", "The definition row (definitionObject only)."),
            style("termStyle", "The term's box (definitionObject only)."),
            style("definitionStyle", "The definition's box (definitionObject only)."),
        ],
    },
]

const LIST_PROPS = [
    {
        title: "DefinitionList",
        props: [
            { name: "definitionsList", type: "Array", required: true, desc: "The rows: [{ term, definition, color, termTextStyle, definitionTextStyle }]." },
            { name: "title", type: "Node", desc: "A heading above the list." },
            style("style", "The whole list."),
            style("titleStyle", "The heading."),
            style("rowStyle", "Every row.", "definitionRowStyle"),
            style("termStyle", "Every term's box.", "titleBoxStyle"),
            style("definitionStyle", "Every definition's box.", "definitionBoxStyle"),
            style("termTextStyle", "Every term's text."),
            style("definitionTextStyle", "Every definition's text."),
        ],
    },
    {
        title: "DefinitionRow",
        note: "One row on its own. Takes the same styles, without the list-level ones.",
        props: [
            { name: "definitionObject", type: "Object", required: true, desc: "{ term, definition, color, termTextStyle, definitionTextStyle }." },
            style("style", "The row.", "definitionRowStyle"),
            style("termStyle", "The term's box.", "titleBoxStyle"),
            style("definitionStyle", "The definition's box.", "definitionBoxStyle"),
            style("termTextStyle", "The term's text."),
            style("definitionTextStyle", "The definition's text."),
        ],
    },
    {
        title: "Each definition object",
        props: [
            { name: "term", type: "Node", desc: "The word being defined.", old: "title" },
            { name: "definition", type: "Node", desc: "What it means." },
            { name: "color", type: "String", desc: "Background color for both halves of this row." },
            style("termTextStyle", "This row's term text.", "titleStyle"),
            style("definitionTextStyle", "This row's definition text.", "definitionStyle"),
        ],
    },
]

export default function DefinitionsShowcase() {
    return (
        <DocPage
            title="Definitions"
            component="<ODef /> <DefinitionList /> <DefinitionRow />"
            imports="ODef, DefinitionList, DefinitionRow"
            intro={<>Lessons are full of new words. <C>ODef</C> turns a word into a link that opens its definition in a popup, and <C>DefinitionList</C> lays out a glossary of terms and meanings.</>}
            sections={["Inline definitions", "Definition lists", "Props"]}
        >
            <Section title="Inline definitions">
                <P>Click the word to open the popup; click it again, click outside, or press Escape to close it.</P>
                <ExampleRow>
                    <Example
                        title="A word with a definition"
                        previewStyle={{ minHeight: 160, display: "block", alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            <p>
                                Every React app is built from{" "}
                                <ODef
                                    text="components"
                                    definitionObject={{
                                        term: "Component",
                                        definition: "A reusable piece of UI, written as a function that returns JSX.",
                                    }}
                                />
                                .
                            </p>
                        `}
                    >
                        <p style={{ fontSize: 18, margin: 0 }}>
                            Every React app is built from{" "}
                            <ODef text="components" definitionObject={TERMS[0]} />.
                        </p>
                    </Example>
                    <Example
                        title="Custom popup content"
                        previewStyle={{ minHeight: 160, display: "block", alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            <ODef
                                text="props"
                                style={{ color: "#2e7d32", textDecoration: "underline" }}
                                popupStyle={{ backgroundColor: "white", padding: 16, maxWidth: 320 }}
                                popupContent={
                                    <div>
                                        <strong>Props</strong> are passed in like attributes:
                                        <code>{"<OstCard style={...} />"}</code>
                                    </div>
                                }
                            />
                        `}
                    >
                        <p style={{ fontSize: 18, margin: 0 }}>
                            Components receive{" "}
                            <ODef
                                text="props"
                                style={{ color: "#2e7d32", textDecoration: "underline" }}
                                popupStyle={{ backgroundColor: "white", padding: 16, maxWidth: 320 }}
                                popupContent={<div><strong>Props</strong> are passed in like attributes: <code>{"<OstCard style={...} />"}</code></div>}
                            />{" "}
                            from their parent.
                        </p>
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Definition lists">
                <P>A list of term / definition rows. Each row is a flex row, so <C>flex</C> on <C>termStyle</C> and <C>definitionStyle</C> sets how wide each side is.</P>
                <ExampleRow>
                    <Example
                        title="A glossary"
                        description="The bordered look used on The Codex's unit pages."
                        size="wide"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <DefinitionList
                                title="React Basics"
                                definitionsList={[
                                    { term: "Component", definition: "A reusable piece of UI..." },
                                    { term: "Prop", definition: "A value passed into a component..." },
                                    { term: "State", definition: "Data a component remembers..." },
                                ]}
                                rowStyle={{ border: "1px solid black", borderRadius: 5, marginTop: 5 }}
                                termStyle={{
                                    flex: 2, display: "flex", justifyContent: "center", alignItems: "center",
                                    borderRight: "1px solid black",
                                }}
                                definitionStyle={{ flex: 7, paddingLeft: 10 }}
                            />
                        `}
                    >
                        <DefinitionList
                            title="React Basics"
                            definitionsList={TERMS}
                            rowStyle={{ border: "1px solid black", borderRadius: 5, marginTop: 5 }}
                            termStyle={{ flex: 2, display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid black" }}
                            definitionStyle={{ flex: 7, paddingLeft: 10 }}
                        />
                    </Example>
                    <Example
                        title="Restyled rows"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <DefinitionList
                                definitionsList={terms}
                                rowStyle={{ marginBottom: 6 }}
                                termStyle={{ backgroundColor: "#11013b", padding: "0 12px", display: "flex", alignItems: "center" }}
                                termTextStyle={{ color: "lime", fontWeight: 700 }}
                                definitionStyle={{ backgroundColor: "#f3f7fc", padding: "0 12px", flex: 1 }}
                            />
                        `}
                    >
                        <DefinitionList
                            definitionsList={TERMS.slice(0, 2)}
                            rowStyle={{ marginBottom: 6 }}
                            termStyle={{ backgroundColor: "#11013b", padding: "0 12px", display: "flex", alignItems: "center" }}
                            termTextStyle={{ color: "lime", fontWeight: 700 }}
                            definitionStyle={{ backgroundColor: "#f3f7fc", padding: "0 12px", flex: 1 }}
                        />
                    </Example>
                </ExampleRow>
                <ExampleRow>
                    <Example
                        title="One row on its own"
                        size="full"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <DefinitionRow
                                definitionObject={{
                                    term: "Hook",
                                    definition: "A function starting with use that lets a component use React features like state.",
                                    color: "#fff5e5",
                                }}
                                termStyle={{ flex: 2, paddingLeft: 12, fontWeight: 700 }}
                                definitionStyle={{ flex: 7 }}
                            />
                        `}
                    >
                        <DefinitionRow
                            definitionObject={{ term: "Hook", definition: "A function starting with use that lets a component use React features like state.", color: "#fff5e5" }}
                            termStyle={{ flex: 2, paddingLeft: 12, fontWeight: 700 }}
                            definitionStyle={{ flex: 7 }}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Props">
                <PropGrid title="ODef props" groups={ODEF_PROPS} />
                <PropGrid title="DefinitionList and DefinitionRow props" groups={LIST_PROPS} />
                <Note>Old prop names (shown on each card) still work.</Note>
            </Section>
        </DocPage>
    )
}
