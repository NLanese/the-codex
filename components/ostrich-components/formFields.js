import React, { useState } from "react";
import { FormText, FormMultipleText, FormMultipleChoice, FormDropDownText, OstrichSelectionBox } from "@ostrich_development/ostrich-components";
import { DocPage, Section, SubHeading, P, C, Note, Example, ExampleRow, PropGrid, style } from "./docKit";

const SHARED_PROPS = [
    {
        title: "Every field",
        props: [
            { name: "fieldObj", type: "Object", desc: "The field description: title, caption, type, options, validResponse... The same object you'd put in an OstrichForm's fields." },
            { name: "onChange", type: "Function", desc: "Runs on every change with { ...fieldObj, value, isValid }.", old: "setNewFieldValue" },
            { name: "showErrors", type: "Boolean", def: true, desc: "false: never show the \"why is this invalid\" message." },
            { name: "revealErrors", type: "Boolean", def: false, desc: "Show errors even before the person has used the field." },
            { name: "isRequired", type: "Boolean", desc: "Whether an empty value is an error. Defaults to fieldObj.required !== false." },
            { name: "showAnswer", type: "Boolean", def: false, desc: "Show the correct answer (the form sets this after a wrong submission)." },
            { name: "answerLabel", type: "String", def: "\"Correct answer:\"", desc: "Text in front of the revealed answer." },
            { name: "correctDisplay", type: "String", def: "\"bubble\"", desc: "How right / wrong is shown after grading: \"bubble\" or \"border\"." },
        ],
    },
    {
        title: "Styles every field has",
        props: [
            style("style", "The field's card.", "boxStyle"),
            style("contentStyle", "The box inside the card that holds everything."),
            style("titleRowStyle", "The row with the title and the status bubble."),
            style("titleStyle", "The title."),
            style("bubbleStyle", "The status bubble."),
            style("bubbleAreaStyle", "The space the bubble sits in."),
            style("detailsStyle", "The caption and extra text block."),
            style("captionStyle", "The caption."),
            style("moreTextStyle", "The extra text."),
            style("imageStyle", "fieldObj.img."),
            style("imageCardStyle", "The card around fieldObj.img."),
            style("messagesStyle", "The area under the input for errors and answers."),
            style("errorStyle", "The error message."),
            style("answerStyle", "The \"Correct answer\" line."),
        ],
    },
]

const TEXT_PROPS = [
    {
        title: "FormText",
        props: [
            { name: "currentValue", type: "Any", desc: "Controlled value. Anything other than false replaces what's typed." },
            { name: "validResponse", type: "Function", desc: "Overrides fieldObj.validResponse: (value) => true | false | \"why it's wrong\"." },
            { name: "inputProps", type: "Object", desc: "Extra attributes for the <input>: name, autoComplete, maxLength, inputMode..." },
            style("inputStyle", "The text box.", "inputSyle"),
            style("focusedInputStyle", "The text box, while focused."),
        ],
    },
]

const MULTI_TEXT_PROPS = [
    {
        title: "FormMultipleText",
        props: [
            { name: "limit", type: "Number", desc: "The most entries allowed." },
            { name: "minLength", type: "Number", def: 1, desc: "Entries needed to be valid. fieldObj.min or fieldObj.minLength work too." },
            { name: "perRow", type: "Number", def: 3, desc: "Entries shown per row." },
            { name: "buttonLabel", type: "Node", def: "\"Submit\"", desc: "Text on the add-entry button.", old: "buttonTitle" },
            { name: "validResponse", type: "Function", desc: "Checks each entry before it's added." },
            { name: "inputProps", type: "Object", desc: "Extra attributes for the <input>." },
            style("inputRowStyle", "The row holding the text box and the add button."),
            style("inputAreaStyle", "The space around the text box."),
            style("inputStyle", "The text box."),
            style("focusedInputStyle", "The text box, while focused."),
            style("buttonAreaStyle", "The space around the add button."),
            style("buttonStyle", "The add button."),
            style("buttonHoverStyle", "The add button, when hovered. Default: darkens."),
            style("entryRowStyle", "Each row of entries."),
            style("entryStyle", "Each added entry.", "answerBoxStyle"),
            style("entryHoverStyle", "Each added entry, when hovered. Default: darkens."),
        ],
    },
]

const MC_PROPS = [
    {
        title: "FormMultipleChoice",
        props: [
            { name: "options", type: "Array", desc: "The choices: strings, or { tag, value, onPress, labelStyle, markerStyle }. Defaults to fieldObj.options." },
            { name: "singleOption", type: "Boolean", def: true, desc: "One answer (true) or many (false). A limit above 1 also allows many. Reads fieldObj.singleOption when not given." },
            { name: "allowDeselect", type: "Boolean", desc: "Single answer: clicking the picked option un-picks it. Default true for bubbles, false for tabs." },
            { name: "value", type: "Any", desc: "Controlled: the picked value(s). Changing it changes the selection." },
            { name: "inputValue", type: "Any", desc: "The starting value." },
            { name: "limit", type: "Number", desc: "The most answers that can be picked. Above 1, several answers are allowed (unless singleOption is true)." },
            { name: "min", type: "Number", desc: "Many answers: the fewest that count as valid." },
            { name: "itemsPerRow", type: "Number", def: 3, desc: "Options per row." },
            { name: "markerType", type: "String", def: "\"bubble\"", desc: "\"bubble\" or \"box\".", old: "type" },
            { name: "inForm", type: "Boolean", def: true, desc: "false when it's used on its own, like a menu." },
            { name: "title", type: "String", desc: "Used when there's no fieldObj." },
            { name: "caption", type: "String", desc: "Used when there's no fieldObj." },
            style("optionsStyle", "The area holding all options."),
            style("optionGroupStyle", "The group of options inside it."),
            style("optionRowStyle", "Each row of options."),
            style("optionStyle", "Each option (marker + text)."),
            style("markerAreaStyle", "The space around each marker."),
            style("markerStyle", "Each bubble or box."),
            style("selectedMarkerStyle", "Each bubble or box, when picked.", "selectedOptionStyle"),
            style("optionLabelAreaStyle", "The space around each option's text."),
            style("optionLabelStyle", "Each option's text.", "fieldTextStyle"),
            style("tabStyle", "Tabs template: each tab."),
            style("hoverTabStyle", "Tabs template: each tab, when hovered."),
            style("activeTabStyle", "Tabs template: each tab, when picked."),
            style("tabLabelStyle", "Tabs template: each tab's text."),
            style("hoverTabLabelStyle", "Tabs template: each tab's text, when hovered."),
            style("activeTabLabelStyle", "Tabs template: each tab's text, when picked."),
        ],
    },
]

const DROPDOWN_TEXT_PROPS = [
    {
        title: "FormDropDownText",
        note: "Without fieldObj.options it behaves exactly like FormText.",
        props: [
            { name: "acceptsOtherValues", type: "Boolean", def: false, desc: "Allow answers that aren't one of the suggestions." },
            { name: "currentValue", type: "Any", desc: "Controlled value." },
            { name: "validResponse", type: "Function", desc: "Extra check on the chosen value." },
            { name: "inputProps", type: "Object", desc: "Extra attributes for the <input>." },
            { name: "dropdownProps", type: "Object", desc: "Anything else for the dropdown inside it (labelStyle, activeStyle, maxMenuHeight...)." },
            style("inputStyle", "The text box."),
            style("menuStyle", "The suggestion list."),
            style("drawerStyle", "Each suggestion."),
            style("hoverDrawerStyle", "Each suggestion, when hovered."),
        ],
    },
]

const SELECTION_BOX_PROPS = [
    {
        title: "OstrichSelectionBox",
        props: [
            { name: "option", type: "Any", required: true, desc: "A string, or { tag, value, labelStyle, markerStyle }." },
            { name: "selected", type: "Boolean", required: true, desc: "Whether it's picked." },
            { name: "onSelect", type: "Function", desc: "Runs when it's clicked. Receives the option's tag." },
            { name: "markerType", type: "String", def: "\"bubble\"", desc: "\"bubble\", \"circle\" or \"box\".", old: ["type", "optionType"] },
            { name: "singleOption", type: "Boolean", def: true, desc: "true: announced to screen readers as a radio button. false: as a checkbox." },
            { name: "correct", type: "Boolean", desc: "Marks it as the right answer (green)." },
            { name: "incorrect", type: "Boolean", desc: "Marks it as a wrong answer (red)." },
            style("style", "The whole option.", "containerStyle"),
            style("markerAreaStyle", "The space around the marker."),
            style("markerStyle", "The bubble or box.", "optionStyle"),
            style("selectedMarkerStyle", "The bubble or box, when picked.", "selectedOptionStyle"),
            style("correctMarkerStyle", "The bubble or box, when marked correct.", "correctOptionStyle"),
            style("wrongMarkerStyle", "The bubble or box, when marked wrong.", "incorrectOptionStyle"),
            style("labelAreaStyle", "The space around the text."),
            style("labelStyle", "The text.", "textStyle"),
        ],
    },
]

export default function FormFieldsShowcase() {
    const [name, setName] = useState({ value: "", isValid: false })
    const [size, setSize] = useState(null)
    const [picked, setPicked] = useState([])
    const [agree, setAgree] = useState(false)

    return (
        <DocPage
            title="Form Fields"
            component="<FormText /> <FormMultipleText /> <FormMultipleChoice /> <FormDropDownText /> <OstrichSelectionBox />"
            imports="FormText, FormMultipleText, FormMultipleChoice, FormDropDownText, OstrichSelectionBox"
            intro={<>These are the pieces an <C>OstrichForm</C> is built from. You can use any of them on their own: pass a <C>fieldObj</C> describing the field and an <C>onChange</C> to hear about every change.</>}
            sections={["Text", "Multiple text", "Multiple choice", "Dropdown text", "Selection box", "Shared props"]}
        >
            <Section title="Text">
                <P><C>FormText</C> handles any HTML input type and explains what's wrong when the value isn't valid.</P>
                <ExampleRow>
                    <Example
                        title="A validated text field"
                        size="wide"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <FormText
                                fieldObj={{
                                    title: "Username",
                                    caption: "Letters and numbers only",
                                    type: "text",
                                    placeholder: "ostrich42",
                                    validResponse: (value) =>
                                        /^[A-Za-z0-9]+$/.test(value) || "Only letters and numbers, please.",
                                }}
                                onChange={(field) => setName(field)}
                            />
                        `}
                    >
                        <FormText
                            fieldObj={{
                                title: "Username",
                                caption: "Letters and numbers only",
                                type: "text",
                                placeholder: "ostrich42",
                                validResponse: (value) => /^[A-Za-z0-9]+$/.test(value) || "Only letters and numbers, please.",
                            }}
                            onChange={(field) => setName(field)}
                        />
                        <div style={{ fontSize: 14, color: "#5f656e", marginTop: 8 }}>
                            value: "{name.value}", isValid: {String(name.isValid)}
                        </div>
                    </Example>
                    <Example
                        title="Restyled"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <FormText
                                fieldObj={{ title: "Email", type: "email" }}
                                style={{ boxShadow: "none", border: "1px solid #dfe5ee" }}
                                inputStyle={{ border: "1px solid #c9d3e0", borderRadius: 10, height: 38 }}
                                focusedInputStyle={{ border: "1px solid #57a5f2" }}
                                bubbleStyle={{ display: "none" }}
                            />
                        `}
                    >
                        <FormText
                            fieldObj={{ title: "Email", type: "email" }}
                            style={{ boxShadow: "none", border: "1px solid #dfe5ee" }}
                            inputStyle={{ border: "1px solid #c9d3e0", borderRadius: 10, height: 38 }}
                            focusedInputStyle={{ border: "1px solid #57a5f2" }}
                            bubbleStyle={{ display: "none" }}
                        />
                    </Example>
                </ExampleRow>
                <PropGrid title="FormText props" groups={TEXT_PROPS} />
            </Section>

            <Section title="Multiple text">
                <P><C>FormMultipleText</C> collects a list: type an entry, press the button (or Enter) to add it, click an entry to remove it.</P>
                <ExampleRow>
                    <Example
                        title="Tags"
                        size="full"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <FormMultipleText
                                fieldObj={{ title: "Tags", caption: "Add 2 to 4 tags", type: "MultiText" }}
                                minLength={2}
                                limit={4}
                                buttonLabel="Add"
                                entryStyle={{ backgroundColor: "#dcebfb" }}
                            />
                        `}
                    >
                        <FormMultipleText
                            fieldObj={{ title: "Tags", caption: "Add 2 to 4 tags", type: "MultiText" }}
                            minLength={2}
                            limit={4}
                            buttonLabel="Add"
                            entryStyle={{ backgroundColor: "#dcebfb" }}
                        />
                    </Example>
                </ExampleRow>
                <PropGrid title="FormMultipleText props" groups={MULTI_TEXT_PROPS} />
            </Section>

            <Section title="Multiple choice">
                <P><C>FormMultipleChoice</C> shows options as bubbles, boxes or tabs. With <C>inForm={"{false}"}</C> it works as a picker anywhere, like the menu on the Ostrich Components home page.</P>
                <ExampleRow>
                    <Example
                        title="Pick one"
                        size="wide"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <FormMultipleChoice
                                fieldObj={{
                                    title: "Size",
                                    type: "MC",
                                    options: ["Small", "Medium", "Large"],
                                }}
                                onChange={(field) => setSize(field.value)}
                            />
                        `}
                    >
                        <FormMultipleChoice
                            fieldObj={{ title: "Size", type: "MC", options: ["Small", "Medium", "Large"] }}
                            onChange={(field) => setSize(field.value)}
                        />
                        <div style={{ fontSize: 14, color: "#5f656e", marginTop: 8 }}>value: {JSON.stringify(size)}</div>
                    </Example>
                    <Example
                        title="Pick up to two, as boxes"
                        size="wide"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <FormMultipleChoice
                                fieldObj={{
                                    title: "Toppings",
                                    caption: "Up to two",
                                    type: "MC",
                                    limit: 2,
                                    options: ["Cheese", "Basil", "Olives", "Peppers"],
                                }}
                                markerType="box"
                                itemsPerRow={2}
                            />
                        `}
                    >
                        <FormMultipleChoice
                            fieldObj={{ title: "Toppings", caption: "Up to two", type: "MC", limit: 2, options: ["Cheese", "Basil", "Olives", "Peppers"] }}
                            markerType="box"
                            itemsPerRow={2}
                        />
                    </Example>
                    <Example
                        title="Tabs, as a menu"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <FormMultipleChoice
                                inForm={false}
                                onChange={(field) => setPicked(field.value)}
                                fieldObj={{
                                    type: "MC",
                                    template: "tabs",
                                    options: ["Cards", "Dropdowns", "Tab Bars", "Forms"],
                                }}
                                activeTabStyle={{ backgroundColor: "#11013b" }}
                                activeTabLabelStyle={{ color: "lime" }}
                            />
                        `}
                    >
                        <FormMultipleChoice
                            inForm={false}
                            onChange={(field) => setPicked(field.value)}
                            fieldObj={{ type: "MC", template: "tabs", options: ["Cards", "Dropdowns", "Tab Bars", "Forms"] }}
                            activeTabStyle={{ backgroundColor: "#11013b" }}
                            activeTabLabelStyle={{ color: "lime" }}
                        />
                        <div style={{ fontSize: 14, color: "#5f656e", marginTop: 8 }}>value: {JSON.stringify(picked)}</div>
                    </Example>
                </ExampleRow>
                <PropGrid title="FormMultipleChoice props" groups={MC_PROPS} />
            </Section>

            <Section title="Dropdown text">
                <P><C>FormDropDownText</C> is a text field with type-ahead suggestions taken from <C>fieldObj.options</C>. By default only a suggestion counts as a valid answer.</P>
                <ExampleRow>
                    <Example
                        title="Pick a state"
                        size="full"
                        previewStyle={{ display: "block", background: "white", minHeight: 300, alignItems: "flex-start", alignContent: "flex-start" }}
                        code={`
                            <FormDropDownText
                                fieldObj={{
                                    title: "State",
                                    type: "DropDownText",
                                    placeholder: "Start typing...",
                                    options: ["Arizona", "California", "Colorado", "Nevada", "New Mexico", "Utah", "Wyoming"],
                                }}
                            />
                        `}
                    >
                        <FormDropDownText
                            fieldObj={{
                                title: "State",
                                type: "DropDownText",
                                placeholder: "Start typing...",
                                options: ["Arizona", "California", "Colorado", "Nevada", "New Mexico", "Utah", "Wyoming"],
                            }}
                        />
                    </Example>
                </ExampleRow>
                <PropGrid title="FormDropDownText props" groups={DROPDOWN_TEXT_PROPS} />
            </Section>

            <Section title="Selection box">
                <P><C>OstrichSelectionBox</C> is the single bubble-and-label used inside multiple choice. Use it directly when you need one checkbox-style control, like agreeing to terms.</P>
                <ExampleRow>
                    <Example
                        title="A single checkbox"
                        code={`
                            const [agree, setAgree] = useState(false)

                            <OstrichSelectionBox
                                option="I agree to the terms"
                                markerType="box"
                                singleOption={false}
                                selected={agree}
                                onSelect={() => setAgree(!agree)}
                            />
                        `}
                    >
                        <OstrichSelectionBox
                            option="I agree to the terms"
                            markerType="box"
                            singleOption={false}
                            selected={agree}
                            onSelect={() => setAgree(!agree)}
                        />
                    </Example>
                    <Example
                        title="Graded states"
                        code={`
                            <OstrichSelectionBox option="Right answer" selected correct />
                            <OstrichSelectionBox option="Wrong answer" selected incorrect />
                        `}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <OstrichSelectionBox option="Right answer" selected correct />
                            <OstrichSelectionBox option="Wrong answer" selected incorrect />
                        </div>
                    </Example>
                </ExampleRow>
                <PropGrid title="OstrichSelectionBox props" groups={SELECTION_BOX_PROPS} />
            </Section>

            <Section title="Shared props">
                <P>Every field component (all but the selection box) also takes these.</P>
                <PropGrid title="Field props" groups={SHARED_PROPS} />
                <Note tone="tip">Inside an OstrichForm, pass any of these to every field at once with the form's <C>fieldProps</C>, or to one field with <C>fieldProps</C> on its field object.</Note>
            </Section>
        </DocPage>
    )
}
