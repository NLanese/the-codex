// React
import React, { useEffect } from "react";
import { useRouter } from "next/router";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";

// Ostrich
import { OstCard } from "@ostrich_development/ostrich-components";
import { DocPage, P, C, DOC } from "../../../components/ostrich-components/docKit";
import { DOC_PAGES } from "../../../components/ostrich-components/docPages";

export default function OstrichShowcaseMenu() {

    const [directory, setDirectory] = useAtom(directoryDataState)
    const router = useRouter()

    // Sets Directory
    useEffect(() => {
        setDirectory("Portfolio")
    }, [])

    const go = (route) => router.push(`/showcases/ostrich-components/${route}`)

    return (
        <div style={{ paddingRight: '8%', paddingLeft: '8%', paddingTop: '2.5%' }}>
            <DocPage
                title="Ostrich Component Library"
                intro={<>
                    While there are a plethora of React friendly Front End Component Libraries, none quite seemed to work as fluidly as I would like,
                    so I created my own. My mission was to create single components capable of rendering complicated series of HTML elements, while
                    simultaneously providing sleek default styles and maintaining full customizability. Nearly every part of this website is built
                    with it.
                </>}
            >
                <div style={{ marginTop: 28 }}>
                    <P>Pick a component to see how it works, live examples you can copy, and every prop it takes.</P>
                    <P style={{ fontSize: 16, color: DOC.muted }}>Install with <C>npm install @ostrich_development/ostrich-components</C></P>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18, marginTop: 18 }}>
                    {DOC_PAGES.map((page) => (
                        <OstCard
                            key={page.route}
                            onClick={() => go(page.route)}
                            aria-label={`${page.title} docs`}
                            style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 6 }}
                            hoverStyle={{ backgroundColor: "#ebf4ff" }}
                        >
                            <div style={{ fontFamily: DOC.font, fontSize: 22, fontWeight: 700, color: DOC.ink }}>{page.title}</div>
                            <div style={{ fontFamily: DOC.mono, fontSize: 13, color: DOC.accentDeep }}>{page.component}</div>
                            <div style={{ fontFamily: DOC.font, fontSize: 15.5, lineHeight: 1.45, color: DOC.text }}>{page.blurb}</div>
                        </OstCard>
                    ))}
                    <OstCard
                        onClick={() => go("showcase")}
                        aria-label="All components on one page"
                        style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 6, backgroundColor: DOC.ink }}
                        hoverStyle={{ backgroundColor: "#2a1a6e" }}
                    >
                        <div style={{ fontFamily: DOC.font, fontSize: 22, fontWeight: 700, color: "white" }}>Everything</div>
                        <div style={{ fontFamily: DOC.mono, fontSize: 13, color: "lime" }}>All pages, one scroll</div>
                        <div style={{ fontFamily: DOC.font, fontSize: 15.5, lineHeight: 1.45, color: "#eeeaff" }}>Every component's docs on a single page, with a side menu to jump around.</div>
                    </OstCard>
                </div>
            </DocPage>
        </div>
    )
}
