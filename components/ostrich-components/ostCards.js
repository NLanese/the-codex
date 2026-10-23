import React from "react";
import { OstCard } from "@ostrich_development/ostrich-components";
import { DocPage, Section, SubHeading, P, C, Note, Example, ExampleRow, PropGrid, style } from "./docKit";

const OstCompImg = "/assets/icons/big/OstrichComponentsLogo.png";

const CARD_PROPS = [
    {
        title: "Content",
        props: [
            { name: "children", type: "Node", desc: "Whatever goes inside the card. In templates 1-3 it becomes the text block." },
            { name: "template", type: "Number", desc: "A premade layout: 1 image over text, 2 text over image, 3 title / image beside text / caption, 4 title / two columns / caption.", old: "templateStyle" },
            { name: "imageSrc", type: "String", desc: "The image used by templates 1-3." },
            { name: "imageAlt", type: "String", desc: "Describes the image for screen readers. Use \"\" for a decorative image." },
            { name: "details", type: "Object", desc: "Extra template data: { title, caption, columnLeft, columnRight, pictureFlexSize }." },
        ],
    },
    {
        title: "Behavior",
        props: [
            { name: "onClick", type: "Function", desc: "Turns the card into a button: it gets hover and press effects, a pointer cursor, and works with Enter / Space." },
            { name: "rounded", type: "Boolean", def: true, desc: "Rounded corners. false gives square corners." },
            { name: "noShadow", type: "Boolean", def: false, desc: "Removes the default drop shadow." },
            { name: "...HTML attributes", type: "Any", desc: "className, id, aria-*, data-*, onMouseEnter, ref and any other div attribute are passed to the card." },
        ],
    },
    {
        title: "Styles",
        note: "Your styles are layered over the defaults, so you only write what you want to change.",
        props: [
            style("style", "The card itself."),
            style("hoverStyle", "Clickable cards while hovered. Default: the background darkens."),
            style("pressedStyle", "Clickable cards while pressed. Default: { transform: \"scale(0.95)\" }."),
            style("contentStyle", "Templates: the outer layout box."),
            style("imageAreaStyle", "Templates: the box the image sits in."),
            style("imageStyle", "Templates: the image."),
            style("textStyle", "Templates: the text block (children)."),
            style("titleStyle", "Templates 3 and 4: the title."),
            style("captionStyle", "Templates 3 and 4: the caption."),
            style("bodyStyle", "Templates 3 and 4: the middle row."),
            style("columnStyle", "Template 4: each column."),
        ],
    },
]

export default function OstCardShowcase() {
    return (
        <DocPage
            title="Ostrich Cards"
            component="<OstCard />"
            imports="OstCard"
            intro={<>Ostrich Cards are the library's take on a View: a box with padding, rounded corners and a soft shadow. Give one an <C>onClick</C> and it becomes a button, complete with hover and press animations.</>}
            sections={["Basics", "Templates", "Styling the parts", "Props"]}
        >
            <Section title="Basics">
                <P>A card needs nothing but its content. Styles you pass are added on top of the defaults, so a custom color doesn't cost you the padding or the shadow.</P>
                <ExampleRow>
                    <Example
                        title="Vanilla card"
                        code={`
                            <OstCard>
                                Vanilla Ostrich Card
                            </OstCard>
                        `}
                    >
                        <OstCard>Vanilla Ostrich Card</OstCard>
                    </Example>
                    <Example
                        title="Card as a button"
                        description="Adding onClick adds hover, press and keyboard support."
                        code={`
                            <OstCard
                                onClick={() => console.log("Clicked")}
                            >
                                Ostrich Card Button
                            </OstCard>
                        `}
                    >
                        <OstCard onClick={() => console.log("Button Clicked")}>Ostrich Card Button</OstCard>
                    </Example>
                    <Example
                        title="Custom styled"
                        code={`
                            <OstCard
                                style={{
                                    width: 300,
                                    backgroundColor: "blue",
                                    color: "white",
                                    textAlign: "center",
                                }}
                            >
                                Custom Styled Card
                            </OstCard>
                        `}
                    >
                        <OstCard style={{ width: 300, maxWidth: "100%", backgroundColor: "blue", color: "white", textAlign: "center" }}>
                            Custom Styled Card
                        </OstCard>
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Templates">
                <P>Cards are a quick way to show pictures. Pick a <C>template</C> and pass an <C>imageSrc</C>; templates 3 and 4 also read a title and caption from <C>details</C>.</P>
                <ExampleRow>
                    <Example
                        title="Template 1"
                        description="Image on top, text below."
                        code={`
                            <OstCard template={1} imageSrc="/path/to/image.png">
                                Template One
                            </OstCard>
                        `}
                    >
                        <OstCard template={1} imageSrc={OstCompImg} imageAlt="Ostrich Components logo" style={{ width: 240 , maxWidth: "100%" }}>Template One</OstCard>
                    </Example>
                    <Example
                        title="Template 2"
                        description="Text on top, image below. Clickable too."
                        code={`
                            <OstCard
                                template={2}
                                imageSrc="/path/to/image.png"
                                onClick={() => console.log("Clicked")}
                            >
                                Template Two
                            </OstCard>
                        `}
                    >
                        <OstCard template={2} imageSrc={OstCompImg} imageAlt="Ostrich Components logo" style={{ width: 240 , maxWidth: "100%" }} onClick={() => console.log("Button Pressed")}>
                            Template Two
                        </OstCard>
                    </Example>
                    <Example
                        title="Template 3"
                        description="Title, image beside the content, caption."
                        code={`
                            <OstCard
                                template={3}
                                imageSrc="/path/to/image.png"
                                details={{ title: "Template Three", caption: "Number 3" }}
                            >
                                Inside wrapped content of Template Three.
                            </OstCard>
                        `}
                    >
                        <OstCard template={3} imageSrc={OstCompImg} imageAlt="Ostrich Components logo" style={{ width: 280 , maxWidth: "100%" }} details={{ title: "Template Three", caption: "Number 3" }}>
                            Inside wrapped content of Template Three. The title comes from the details prop.
                        </OstCard>
                    </Example>
                </ExampleRow>
                <ExampleRow>
                    <Example
                        title="Template 3 without details"
                        description="Title and caption are optional."
                        code={`
                            <OstCard template={3} imageSrc="/path/to/image.png">
                                Template Three with no details prop
                            </OstCard>
                        `}
                    >
                        <OstCard template={3} imageSrc={OstCompImg} imageAlt="Ostrich Components logo" style={{ width: 280 , maxWidth: "100%" }}>
                            Template Three with no details prop
                        </OstCard>
                    </Example>
                    <Example
                        title="Template 4"
                        description="Title, two columns that take text or components, caption."
                        code={`
                            <OstCard
                                template={4}
                                details={{
                                    title: "Template Four",
                                    caption: "Number 4",
                                    columnLeft: (
                                        <div style={{ backgroundColor: "pink", height: 40 }}>
                                            Text or Component
                                        </div>
                                    ),
                                    columnRight: "Text or Component",
                                }}
                            />
                        `}
                    >
                        <OstCard
                            template={4}
                            style={{ width: 320 , maxWidth: "100%" }}
                            details={{
                                title: "Template Four",
                                caption: "Number 4",
                                columnLeft: <div style={{ backgroundColor: "pink", height: 40, padding: 4 }}>Text or Component</div>,
                                columnRight: "Text or Component",
                            }}
                        />
                    </Example>
                    <Example
                        title="Template 4, columns only"
                        code={`
                            <OstCard
                                template={4}
                                details={{
                                    columnLeft: (
                                        <div style={{ backgroundColor: "cyan", height: 40 }}>
                                            Template Four
                                        </div>
                                    ),
                                    columnRight: "With no Title or Caption",
                                }}
                            />
                        `}
                    >
                        <OstCard
                            template={4}
                            style={{ width: 320 , maxWidth: "100%" }}
                            details={{
                                columnLeft: <div style={{ backgroundColor: "cyan", height: 40, padding: 4 }}>Template Four</div>,
                                columnRight: "With no Title or Caption",
                            }}
                        />
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Styling the parts">
                <P>Every piece a template draws has its own style prop, and the hover and press effects can be changed or turned off.</P>
                <ExampleRow>
                    <Example
                        title="Restyled template"
                        size="wide"
                        code={`
                            <OstCard
                                template={3}
                                imageSrc="/path/to/image.png"
                                details={{ title: "Restyled", caption: "Every part has a style prop" }}
                                titleStyle={{ fontSize: 22, fontWeight: 700, color: "#11013b" }}
                                captionStyle={{ fontSize: 14, color: "grey" }}
                                imageStyle={{ borderRadius: "50%" }}
                                textStyle={{ fontStyle: "italic" }}
                            >
                                Custom text block
                            </OstCard>
                        `}
                    >
                        <OstCard
                            template={3}
                            imageSrc={OstCompImg}
                            imageAlt="Ostrich Components logo"
                            style={{ width: 300 , maxWidth: "100%" }}
                            details={{ title: "Restyled", caption: "Every part has a style prop" }}
                            titleStyle={{ fontSize: 22, fontWeight: 700, color: "#11013b" }}
                            captionStyle={{ fontSize: 14, color: "grey" }}
                            imageStyle={{ borderRadius: "50%" }}
                            textStyle={{ fontStyle: "italic" }}
                        >
                            Custom text block
                        </OstCard>
                    </Example>
                    <Example
                        title="Custom hover and press"
                        code={`
                            <OstCard
                                onClick={() => {}}
                                hoverStyle={{ backgroundColor: "#d1ffdc" }}
                                pressedStyle={{ transform: "none", opacity: 0.6 }}
                            >
                                Hover and press me
                            </OstCard>
                        `}
                    >
                        <OstCard onClick={() => {}} hoverStyle={{ backgroundColor: "#d1ffdc" }} pressedStyle={{ transform: "none", opacity: 0.6 }}>
                            Hover and press me
                        </OstCard>
                    </Example>
                    <Example
                        title="Flat card"
                        code={`
                            <OstCard noShadow rounded={false} style={{ border: "1px solid #ccc" }}>
                                No shadow, square corners
                            </OstCard>
                        `}
                    >
                        <OstCard noShadow rounded={false} style={{ border: "1px solid #ccc" }}>No shadow, square corners</OstCard>
                    </Example>
                </ExampleRow>
            </Section>

            <Section title="Props">
                <PropGrid title="OstCard props" groups={CARD_PROPS} />
            </Section>
        </DocPage>
    )
}
