import React, { useState } from "react";
import { OstrichButton } from "@ostrich_development/ostrich-components";
import { DocPage, Section, P, C, Note, Example, ExampleRow, PropGrid, style } from "./docKit";

const OstCompImg = "/assets/icons/big/OstrichComponentsLogo.png";

const BUTTON_PROPS = [
    {
        title: "Content",
        props: [
            { name: "label", type: "Node", desc: "The button's text.", old: "title" },
            { name: "caption", type: "Node", desc: "An optional second, smaller line under the label." },
            { name: "imgSrc", type: "String", desc: "The image for an image-only button (use with imgOnly)." },
            { name: "imgOnly", type: "Boolean", def: false, desc: "Show imgSrc instead of the label (an icon button)." },
            { name: "imgAlt", type: "String", desc: "Describes the image for screen readers. Defaults to the label; set it for image-only buttons." },
        ],
    },
    {
        title: "Behavior",
        props: [
            { name: "onClick", type: "Function", desc: "Runs when the button is clicked, or activated with Enter / Space.", old: "onSubmit" },
            { name: "disabled", type: "Boolean", def: false, desc: "Greys the button out and ignores clicks. Screen readers announce it as disabled.", old: "isActive (inverted)" },
            { name: "hoverDarken", type: "Number", def: 20, desc: "How much darker (0-100) the background gets on hover. 0 turns the effect off." },
            { name: "...HTML attributes", type: "Any", desc: "className, id, aria-*, data-*, ref and any other div attribute are passed to the button." },
        ],
    },
    {
        title: "Styles",
        props: [
            style("style", "The button. Its backgroundColor is the button color (default #9cc6f0).", "activeColor"),
            style("hoverStyle", "The button when hovered. Default: the background darkens by hoverDarken."),
            style("pressedStyle", "The button while pressed. Default: { transform: \"scale(0.95)\" }."),
            style("disabledStyle", "Layered over style when disabled. Default background: grey.", ["inactiveStyle", "inactiveColor"]),
            style("contentStyle", "Buttons with a caption: the box holding the label and caption."),
            style("labelStyle", "The label text.", "titleStyle"),
            style("captionStyle", "The caption text."),
            style("imageStyle", "The image on an image-only button."),
        ],
    },
]

export default function ButtonsShowcase() {
    const [count, setCount] = useState(0)
    const [enabled, setEnabled] = useState(false)

    return (
        <DocPage
            title="Ostrich Buttons"
            component="<OstrichButton />"
            imports="OstrichButton"
            intro={<>Cards can act as buttons, but when you want something that is a button from the start, use <C>OstrichButton</C>. It comes colored, darkens on hover, shrinks a little when pressed, and works from the keyboard.</>}
            sections={["Basics", "Icon buttons", "Disabled buttons", "Custom looks", "Props"]}
        >
            <Section title="Basics">
                <ExampleRow>
                    <Example
                        title="A plain button"
                        code={`
                            const [count, setCount] = useState(0)

                            <OstrichButton
                                label={\`Clicked \${count} times\`}
                                onClick={() => setCount(count + 1)}
                            />
                        `}
                    >
                        <OstrichButton label={`Clicked ${count} times`} onClick={() => setCount(count + 1)} />
                    </Example>
                    <Example
                        title="With a caption"
                        code={`
                            <OstrichButton
                                label="Download"
                                caption="PDF, 2 MB"
                                onClick={() => {}}
                            />
                        `}
                    >
                        <OstrichButton label="Download" caption="PDF, 2 MB" onClick={() => {}} />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Icon buttons">
                <ExampleRow>
                    <Example
                        title="Image only"
                        size="wide"
                        description="imgOnly shows imgSrc instead of the label. Give icon buttons an imgAlt so screen readers can name them."
                        code={`
                            <OstrichButton
                                imgOnly
                                imgSrc="/path/to/icon.png"
                                imgAlt="Open the Ostrich menu"
                                style={{ width: 60, height: 60 }}
                                onClick={() => {}}
                            />
                        `}
                    >
                        <OstrichButton imgOnly imgSrc={OstCompImg} imgAlt="Open the Ostrich menu" style={{ width: 60, height: 60 }} onClick={() => {}} />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Disabled buttons">
                <ExampleRow>
                    <Example
                        title="Toggling disabled"
                        code={`
                            const [enabled, setEnabled] = useState(false)

                            <OstrichButton
                                label={enabled ? "Disable the other" : "Enable the other"}
                                onClick={() => setEnabled(!enabled)}
                            />
                            <OstrichButton
                                label="Continue"
                                disabled={!enabled}
                                disabledStyle={{ backgroundColor: "#e0e0e0", color: "#888" }}
                                onClick={() => console.log("Continuing")}
                            />
                        `}
                    >
                        <OstrichButton label={enabled ? "Disable the other" : "Enable the other"} onClick={() => setEnabled(!enabled)} />
                        <OstrichButton
                            label="Continue"
                            disabled={!enabled}
                            disabledStyle={{ backgroundColor: "#e0e0e0", color: "#888" }}
                            onClick={() => console.log("Continuing")}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Custom looks">
                <P>The button's <C>backgroundColor</C> drives the hover color, so a new color gets a matching hover for free. Set <C>hoverStyle</C> or <C>pressedStyle</C> to replace the effects.</P>
                <ExampleRow>
                    <Example
                        title="New color"
                        code={`
                            <OstrichButton
                                label="Delete"
                                style={{ backgroundColor: "#ff6b6b" }}
                                labelStyle={{ color: "white", fontWeight: 700 }}
                                onClick={() => {}}
                            />
                        `}
                    >
                        <OstrichButton label="Delete" style={{ backgroundColor: "#ff6b6b" }} labelStyle={{ color: "white", fontWeight: 700 }} onClick={() => {}} />
                    </Example>
                    <Example
                        title="Outline button"
                        code={`
                            <OstrichButton
                                label="Outline"
                                style={{
                                    backgroundColor: "transparent",
                                    border: "2px solid #11013b",
                                    boxShadow: "none",
                                }}
                                hoverStyle={{ backgroundColor: "#e8e4f7" }}
                                pressedStyle={{ transform: "none", opacity: 0.8 }}
                                onClick={() => {}}
                            />
                        `}
                    >
                        <OstrichButton
                            label="Outline"
                            style={{ backgroundColor: "transparent", border: "2px solid #11013b", boxShadow: "none" }}
                            hoverStyle={{ backgroundColor: "#e8e4f7" }}
                            pressedStyle={{ transform: "none", opacity: 0.8 }}
                            onClick={() => {}}
                        />
                    </Example>
                    <Example
                        title="Subtle hover"
                        code={`
                            <OstrichButton
                                label="Barely darker"
                                hoverDarken={5}
                                onClick={() => {}}
                            />
                        `}
                    >
                        <OstrichButton label="Barely darker" hoverDarken={5} onClick={() => {}} />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Props">
                <PropGrid title="OstrichButton props" groups={BUTTON_PROPS} />
                <Note>Old prop names (shown on each card) still work.</Note>
            </Section>
        </DocPage>
    )
}
