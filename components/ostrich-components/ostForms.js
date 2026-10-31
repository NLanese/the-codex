import React, { useState } from "react";
import { OstrichForm } from "@ostrich_development/ostrich-components";
import { DocPage, Section, SubHeading, P, C, Note, Example, ExampleRow, PropGrid, CodeBlock, style } from "./docKit";

// Returns true when the password is strong enough, or a sentence explaining what's missing
function checkPassword(input) {
    if (!input || input.length < 8) return "Use at least 8 characters."
    if (!/[A-Z]/.test(input)) return "Add an uppercase letter."
    if (!/[a-z]/.test(input)) return "Add a lowercase letter."
    if (!/[0-9]/.test(input)) return "Add a number."
    if (!/[^A-Za-z0-9]/.test(input)) return "Add a symbol, like ! or #."
    return true
}

const SIGN_UP_FIELDS = [
    {
        id: "Email",
        title: "Email",
        type: "email",
        placeholder: "example@email.com",
        invalidMessage: "Enter an email like name@site.com.",
    },
    {
        id: "Account Alias",
        title: "Account Alias",
        caption: "A username that will be displayed to other accounts instead of your email",
        placeholder: "Stephen_B_Smith",
        type: "text",
        required: false,
    },
    {
        id: "Password",
        title: "Password",
        type: "password",
        validResponse: checkPassword,
    },
    {
        id: "Type",
        title: "Account Type",
        caption: "What kind of Account will you be signing up with?",
        moreText: "This cannot be changed later on",
        type: "MC",
        options: ["Personal", "Business", "Government"],
    },
    {
        id: "Interests",
        title: "Interests",
        caption: "Enter up to 5 Interests, at least 2",
        type: "MultiText",
        minLength: 2,
        limit: 5,
    },
]

const QUIZ_FIELDS = [
    {
        id: "1",
        title: "Question 1: What is 2 + 2?",
        type: "MC",
        options: ["1", "2", "3", "4", "5", "6"],
        correctResponse: ["4"],
    },
    {
        id: "2",
        title: "Question 2: Choose all letters",
        type: "MC",
        singleOption: false,
        options: ["A", "Circle", "B", "Horses", "C", "Bobby Hill", "D", "Alexander the Warrior Jar"],
        correctResponse: ["A", "B", "C", "D"],
    },
    {
        id: "3",
        title: "Question 3: What is 'blue'?",
        caption: "Select all that apply",
        type: "MC",
        template: "tabs",
        singleOption: false,
        options: ["A Color", "A Shape", "A Sound", "A Smell", "A Type of Horse", "A Four Letter Word"],
        correctResponse: ["A Color", "A Four Letter Word"],
    },
]

const FORM_PROPS = [
    {
        title: "Content",
        props: [
            { name: "fields", type: "Array", required: true, desc: "The questions. Each one is a field object (see Field objects below)." },
            { name: "title", type: "Node", desc: "Heading at the top of the form." },
            { name: "submitLabel", type: "Node", def: "\"Submit\"", desc: "Text on the submit button.", old: "submitButtonTitle" },
            { name: "answerLabel", type: "String", def: "\"Correct answer:\"", desc: "Text in front of a revealed answer." },
        ],
    },
    {
        title: "Submitting",
        props: [
            { name: "onSubmit", type: "Function", desc: "(values, fields, previousValues) => {}. values is { [fieldId]: value }; previousValues is the last submission, or null." },
            { name: "onChange", type: "Function", desc: "Runs whenever any field changes. Receives the updated field." },
            { name: "allowResubmission", type: "Boolean", def: false, desc: "true: submit as many times as you like. false: the button locks after one submission." },
            { name: "pastAnswerData", type: "Object", desc: "Saved values from an earlier submission ({ [id]: value }, the same shape onSubmit gives you). Fields start filled in and the form counts as submitted." },
            { name: "clearOnSubmit", type: "Boolean", def: false, desc: "Empties every field after a submission." },
            { name: "allFieldsRequired", type: "Boolean", def: true, desc: "true: every field must be valid unless it says required: false. false: only fields with required: true." },
            { name: "allowSubmit", type: "Boolean", def: true, desc: "false: the submit button is disabled." },
            { name: "formLocked", type: "Boolean", def: false, desc: "true: the submit button is disabled." },
        ],
    },
    {
        title: "Grading",
        props: [
            { name: "correctResponse", type: "Object", desc: "An answer key for the whole form: { [fieldId]: answer }. Checked first, then each field's own correctResponse / correctValue. Matching either counts as correct." },
            { name: "reviewOnSubmit", type: "Boolean", def: false, desc: "After submitting, shows how many answers were right (\"2 / 3 correct\")." },
            { name: "showsAnswer", type: "Boolean", def: false, desc: "After a wrong submission, highlights or shows the correct answer. Fields can override this." },
            { name: "showErrors", type: "Boolean", def: true, desc: "false: never explain why a field is invalid." },
            { name: "showWrongAnswers", type: "Boolean", desc: "Kept for older code. Fields with a correctResponse always turn green or red after a submission now." },
        ],
    },
    {
        title: "Form styles",
        props: [
            style("style", "The whole form."),
            style("headerStyle", "The area around the title.", "titleBoxStyle"),
            style("titleStyle", "The form's title.", "titleTextStyle"),
            style("bodyStyle", "The area holding the fields.", "fieldsBoxStyle"),
            style("submitStyle", "The submit button. Default width 25%.", "submitButtonStyle"),
            style("disabledSubmitStyle", "The submit button when it can't be pressed.", "submitButtonInactiveStyle"),
            style("submitLabelStyle", "The submit button's text.", "submitButtonTextStyle"),
            style("reviewStyle", "The \"x / total correct\" line.", "reviewTextStyle"),
        ],
    },
    {
        title: "Styles for every field",
        note: "A field object's own styles win over these.",
        props: [
            style("fieldStyle", "Every field's card."),
            style("fieldContentStyle", "The box inside every card."),
            style("titleRowStyle", "Every title + status bubble row."),
            style("fieldTitleStyle", "Every field's title.", "fieldsTitleStyle"),
            style("bubbleStyle", "Every status bubble."),
            style("detailsStyle", "Every caption / extra text block."),
            style("captionStyle", "Every caption.", "captionTextStyle"),
            style("moreTextStyle", "Every field's extra text."),
            style("inputStyle", "Every text box."),
            style("focusedInputStyle", "Every text box, while focused."),
            style("optionStyle", "Multiple choice: every option (marker + text)."),
            style("markerStyle", "Multiple choice: every bubble or box.", "fieldOptionStyles"),
            style("selectedMarkerStyle", "Multiple choice: every bubble or box, when picked."),
            style("optionLabelStyle", "Multiple choice: every option's text.", "fieldTextStyles"),
            style("fieldButtonStyle", "Buttons inside fields (the multi-text add button).", "fieldButtonStyles"),
            style("messagesStyle", "The error / answer area under every input."),
            style("errorStyle", "Every \"why is this invalid\" message."),
            style("answerStyle", "Every \"Correct answer\" line."),
            { name: "fieldProps", type: "Object", desc: "Any other prop for every field component, e.g. { optionRowStyle, entryStyle, dropdownProps }. See the Form Fields page for the full list." },
        ],
    },
]

const FIELD_OBJECT_PROPS = [
    {
        title: "The basics",
        props: [
            { name: "type", type: "String", required: true, desc: "\"MC\" (multiple choice), \"MultiText\", \"DropDownText\", or any HTML input type: \"text\", \"email\", \"password\", \"number\", \"date\"..." },
            { name: "id", type: "String | Number", desc: "The key for this field in onSubmit's values. Defaults to its position, starting at 1." },
            { name: "title", type: "String", desc: "The question or label." },
            { name: "caption", type: "String", desc: "Smaller text under the title." },
            { name: "moreText", type: "String", desc: "A second line of supporting text." },
            { name: "placeholder", type: "String", desc: "Text-type fields: the empty input's hint." },
            { name: "value", type: "Any", desc: "The starting value." },
            { name: "img", type: "String", desc: "An image shown with the caption." },
            { name: "imgAlt", type: "String", desc: "Describes img for screen readers." },
        ],
    },
    {
        title: "Choices",
        props: [
            { name: "options", type: "Array", desc: "MC and DropDownText: the choices. Strings, or { tag, value, labelStyle, markerStyle } objects." },
            { name: "singleOption", type: "Boolean", def: true, desc: "MC: one answer (true) or many (false). Setting a limit above 1 also allows many." },
            { name: "template", type: "String", desc: "MC: \"tabs\" shows the options as a row of tabs instead of bubbles." },
            { name: "limit", type: "Number", desc: "MC and MultiText: the most answers allowed. On MC, a limit above 1 allows several answers even without singleOption: false." },
            { name: "min", type: "Number", desc: "MC and MultiText: the fewest answers that count as valid. minLength works too." },
            { name: "itemsPerRow", type: "Number", def: 3, desc: "MC: options per row." },
        ],
    },
    {
        title: "Validation and answers",
        props: [
            { name: "required", type: "Boolean", desc: "false: an empty answer is fine. Defaults to the form's allFieldsRequired." },
            { name: "validResponse", type: "Function", desc: "(value) => true | false | \"why it's wrong\". A string marks the field invalid and is shown to the person. Can also be a boolean, or a string the value must match." },
            { name: "invalidMessage", type: "String", def: "\"This answer isn't valid.\"", desc: "Shown when validResponse says no." },
            { name: "requiredMessage", type: "String", def: "\"This field is required.\"", desc: "Shown when a required field is empty." },
            { name: "correctResponse", type: "Any", desc: "The right answer: a value, an array of values, or (field) => boolean. Checked after the form's correctResponse answer key; matching either counts as correct. 175 and \"175\" are the same answer." },
            { name: "correctValue", type: "Any", desc: "Same as correctResponse, for fields that use this name. If both are set, correctResponse is used." },
            { name: "showsAnswer", type: "Boolean", desc: "Overrides the form's showsAnswer for this field." },
        ],
    },
    {
        title: "This field's styles",
        props: [
            style("fieldStyle", "The card."),
            style("titleStyle", "The title."),
            style("captionStyle", "The caption."),
            style("inputStyle", "The text box.", "style"),
            style("optionLabelStyle", "MC: each option's text.", "textStyle"),
            style("errorStyle", "The error message."),
            style("answerStyle", "The \"Correct answer\" line."),
            { name: "inputProps", type: "Object", desc: "Extra attributes for the <input>: name, autoComplete, maxLength..." },
            { name: "fieldProps", type: "Object", desc: "Any other prop for this field's component, like { bubbleStyle, optionRowStyle }." },
        ],
    },
]

export default function OstFormsShowcase() {
    const [submitted, setSubmitted] = useState(null)

    return (
        <DocPage
            title="Ostrich Forms"
            component="<OstrichForm />"
            imports="OstrichForm"
            intro={<>Describe your questions as a list of objects and <C>OstrichForm</C> builds the whole form: text boxes, multiple choice, tabs, multi-entry lists and type-ahead dropdowns, with validation messages, grading and a submit button.</>}
            sections={["A sign-up form", "Quizzes and grading", "Saved answers", "Styling every field", "Props", "Field objects"]}
        >
            <Section title="A sign-up form">
                <P>Each field explains itself when its answer isn't valid. The browser checks types like <C>email</C> for you, and <C>validResponse</C> can return a sentence saying what's wrong. Messages appear once someone has used a field, or when they press Submit early.</P>
                <ExampleRow>
                    <Example size="full" previewStyle={{ display: "block", background: "white" }}>
                        <OstrichForm
                            title="Example Form"
                            style={{ maxWidth: 760, margin: "0 auto" }}
                            fields={SIGN_UP_FIELDS}
                            onSubmit={(values) => setSubmitted(values)}
                        />
                        {submitted ? (
                            <CodeBlock title="onSubmit received" code={JSON.stringify(submitted, null, 2)} style={{ maxWidth: 760, margin: "16px auto 0" }} />
                        ) : null}
                    </Example>
                </ExampleRow>
                <CodeBlock style={{ marginTop: 16 }} code={`
                    function checkPassword(input) {
                        if (!input || input.length < 8) return "Use at least 8 characters."
                        if (!/[A-Z]/.test(input)) return "Add an uppercase letter."
                        if (!/[a-z]/.test(input)) return "Add a lowercase letter."
                        if (!/[0-9]/.test(input)) return "Add a number."
                        if (!/[^A-Za-z0-9]/.test(input)) return "Add a symbol, like ! or #."
                        return true
                    }

                    <OstrichForm
                        title="Example Form"
                        onSubmit={(values) => console.log(values)}
                        fields={[
                            {
                                id: "Email",
                                title: "Email",
                                type: "email",
                                placeholder: "example@email.com",
                                invalidMessage: "Enter an email like name@site.com.",
                            },
                            {
                                id: "Account Alias",
                                title: "Account Alias",
                                caption: "A username that will be displayed to other accounts instead of your email",
                                placeholder: "Stephen_B_Smith",
                                type: "text",
                                required: false,
                            },
                            {
                                id: "Password",
                                title: "Password",
                                type: "password",
                                validResponse: checkPassword,
                            },
                            {
                                id: "Type",
                                title: "Account Type",
                                caption: "What kind of Account will you be signing up with?",
                                moreText: "This cannot be changed later on",
                                type: "MC",
                                options: ["Personal", "Business", "Government"],
                            },
                            {
                                id: "Interests",
                                title: "Interests",
                                caption: "Enter up to 5 Interests, at least 2",
                                type: "MultiText",
                                minLength: 2,
                                limit: 5,
                            },
                        ]}
                    />
                `} />
            </Section>

            <Section title="Quizzes and grading">
                <P>Give fields a <C>correctResponse</C> and the form grades itself. After submitting, each field's status bubble turns green or red, <C>reviewOnSubmit</C> adds a score, <C>showsAnswer</C> reveals the right answer on wrong questions, and <C>allowResubmission</C> lets people try again.</P>
                <ExampleRow>
                    <Example size="full" previewStyle={{ display: "block", background: "white" }}>
                        <OstrichForm
                            title="Example Test Form"
                            style={{ maxWidth: 760, margin: "0 auto" }}
                            reviewOnSubmit
                            showsAnswer
                            allowResubmission
                            optionLabelStyle={{ fontSize: 18 }}
                            fields={QUIZ_FIELDS}
                        />
                    </Example>
                </ExampleRow>
                <CodeBlock style={{ marginTop: 16 }} code={`
                    <OstrichForm
                        title="Example Test Form"
                        reviewOnSubmit
                        showsAnswer
                        allowResubmission
                        optionLabelStyle={{ fontSize: 18 }}
                        fields={[
                            {
                                id: "1",
                                title: "Question 1: What is 2 + 2?",
                                type: "MC",
                                options: ["1", "2", "3", "4", "5", "6"],
                                correctResponse: ["4"],
                            },
                            {
                                id: "2",
                                title: "Question 2: Choose all letters",
                                type: "MC",
                                singleOption: false,
                                options: ["A", "Circle", "B", "Horses", "C", "Bobby Hill", "D", "Alexander the Warrior Jar"],
                                correctResponse: ["A", "B", "C", "D"],
                            },
                            {
                                id: "3",
                                title: "Question 3: What is 'blue'?",
                                caption: "Select all that apply",
                                type: "MC",
                                template: "tabs",
                                singleOption: false,
                                options: ["A Color", "A Shape", "A Sound", "A Smell", "A Type of Horse", "A Four Letter Word"],
                                correctResponse: ["A Color", "A Four Letter Word"],
                            },
                        ]}
                    />
                `} />
                <SubHeading>An answer key for the whole form</SubHeading>
                <P>If your questions and answers live in different places, pass the form an answer key as <C>correctResponse</C>: <C>{"{ [fieldId]: answer }"}</C>. Keys are field ids, or positions starting at 1 when fields have no id.</P>
                <CodeBlock code={`
                    <OstrichForm
                        title="Data Types Test"
                        reviewOnSubmit
                        correctResponse={{ 1: ["String"], 2: ["Integer"] }}
                        fields={[
                            { title: 'Q1: "hi" is a', type: "MC", options: ["String", "Integer"] },
                            { title: "Q2: 5 is a", type: "MC", options: ["String", "Integer"] },
                        ]}
                    />
                `} />
                <SubHeading>How answers are checked</SubHeading>
                <P>A question can have an answer in two places: the form's answer key, and the field's own <C>correctResponse</C> (or <C>correctValue</C>). The form checks both, in this order:</P>
                <ol style={{ fontFamily: "Gilroy, system-ui, sans-serif", fontSize: 18, lineHeight: 1.6, margin: "6px 0 10px", paddingLeft: 26, maxWidth: 900 }}>
                    <li>The form's <C>correctResponse</C> answer key, if it has an entry for the question.</li>
                    <li>The field's own <C>correctResponse</C> or <C>correctValue</C>.</li>
                </ol>
                <P>Matching either one counts as correct. When <C>showsAnswer</C> reveals the answer after a wrong submission, multiple choice highlights every accepted answer, and the "Correct answer" text shows the answer key's entry first. Numbers and text are compared as the same, so <C>175</C> matches the option <C>"175"</C>.</P>
                <ExampleRow>
                    <Example
                        title="Answers in two places"
                        description="The key accepts 4 for question 1; the field also accepts 2 + 2. Question 2 only has a field answer, and question 3 only has a key entry."
                        size="full"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <OstrichForm
                                title="Two Answer Sources"
                                reviewOnSubmit
                                showsAnswer
                                allowResubmission
                                correctResponse={{ 1: ["4"], 3: [175] }}
                                fields={[
                                    { id: "1", title: "1. What is 2 + 2?", type: "MC",
                                      options: ["4", "2 + 2", "22"], correctValue: "2 + 2" },
                                    { id: "2", title: "2. Which is a string?", type: "MC",
                                      options: ["5", "'5'", "true"], correctValue: "'5'" },
                                    { id: "3", title: "3. What is 100 + 75?", type: "MC",
                                      options: ["125", "175", "10075"] },
                                ]}
                            />
                        `}
                    >
                        <OstrichForm
                            title="Two Answer Sources"
                            style={{ maxWidth: 760, margin: "0 auto" }}
                            reviewOnSubmit
                            showsAnswer
                            allowResubmission
                            correctResponse={{ 1: ["4"], 3: [175] }}
                            fields={[
                                { id: "1", title: "1. What is 2 + 2?", type: "MC", options: ["4", "2 + 2", "22"], correctValue: "2 + 2" },
                                { id: "2", title: "2. Which is a string?", type: "MC", options: ["5", "'5'", "true"], correctValue: "'5'" },
                                { id: "3", title: "3. What is 100 + 75?", type: "MC", options: ["125", "175", "10075"] },
                            ]}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Saved answers">
                <P>Store what <C>onSubmit</C> gives you, then pass it back as <C>pastAnswerData</C>. The form opens filled in and already submitted, so grading shows straight away and the submit button follows <C>allowResubmission</C>.</P>
                <ExampleRow>
                    <Example
                        size="full"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            const saved = { 1: ["3"], 2: ["A", "B", "C", "D"] }

                            <OstrichForm
                                title="Returning to a finished quiz"
                                pastAnswerData={saved}
                                reviewOnSubmit
                                showsAnswer
                                fields={quizFields.slice(0, 2)}
                            />
                        `}
                    >
                        <OstrichForm
                            title="Returning to a finished quiz"
                            style={{ maxWidth: 760, margin: "0 auto" }}
                            pastAnswerData={{ 1: ["3"], 2: ["A", "B", "C", "D"] }}
                            reviewOnSubmit
                            showsAnswer
                            fields={QUIZ_FIELDS.slice(0, 2)}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Styling every field">
                <P>Form-level style props reach every field, and <C>fieldProps</C> passes anything else a field component accepts. A field object's own styles still win.</P>
                <ExampleRow>
                    <Example
                        size="full"
                        previewStyle={{ display: "block", background: "white" }}
                        code={`
                            <OstrichForm
                                title="Styled Form"
                                style={{ border: "none", backgroundColor: "#f3f7fc" }}
                                titleStyle={{ color: "#11013b", fontSize: 28 }}
                                fieldStyle={{ backgroundColor: "white", borderRadius: 14 }}
                                markerStyle={{ borderRadius: 4 }}
                                selectedMarkerStyle={{ backgroundColor: "#11013b" }}
                                submitStyle={{ width: "100%", marginLeft: 0, backgroundColor: "#11013b" }}
                                submitLabelStyle={{ color: "white" }}
                                fieldProps={{ bubbleStyle: { display: "none" } }}
                                fields={[
                                    { id: "name", title: "Your name", type: "text" },
                                    { id: "color", title: "Favorite color", type: "MC", options: ["Red", "Green", "Blue"] },
                                ]}
                            />
                        `}
                    >
                        <OstrichForm
                            title="Styled Form"
                            style={{ maxWidth: 760, margin: "0 auto", border: "none", backgroundColor: "#f3f7fc" }}
                            titleStyle={{ color: "#11013b", fontSize: 28 }}
                            fieldStyle={{ backgroundColor: "white", borderRadius: 14 }}
                            markerStyle={{ borderRadius: 4 }}
                            selectedMarkerStyle={{ backgroundColor: "#11013b" }}
                            submitStyle={{ width: "100%", marginLeft: 0, backgroundColor: "#11013b" }}
                            submitLabelStyle={{ color: "white" }}
                            fieldProps={{ bubbleStyle: { display: "none" } }}
                            fields={[
                                { id: "name", title: "Your name", type: "text" },
                                { id: "color", title: "Favorite color", type: "MC", options: ["Red", "Green", "Blue"] },
                            ]}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Props">
                <PropGrid title="OstrichForm props" groups={FORM_PROPS} />
                <Note>Old prop names (shown on each card) still work.</Note>
            </Section>

            <Section title="Field objects">
                <P>Each item in <C>fields</C> is an object with these keys. The field components can also be used on their own; see the Form Fields page.</P>
                <PropGrid title="Field keys" groups={FIELD_OBJECT_PROPS} />
            </Section>
        </DocPage>
    )
}
