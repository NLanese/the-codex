// React
import React, { useEffect } from "react";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";

// Ostrich
import { OstCard, OstrichButton } from "@ostrich_development/ostrich-components";
import { DOC } from "../../../components/ostrich-components/docKit";
import { DOC_PAGES } from "../../../components/ostrich-components/docPages";

// Showcase Elements
import OstCardShowcase from "../../../components/ostrich-components/ostCards";
import ButtonsShowcase from "../../../components/ostrich-components/buttons";
import DropdownShowcase from "../../../components/ostrich-components/dropdowns";
import TabBarsShowcase from "../../../components/ostrich-components/tabBars";
import OstFormsShowcase from "../../../components/ostrich-components/ostForms";
import FormFieldsShowcase from "../../../components/ostrich-components/formFields";
import DefinitionsShowcase from "../../../components/ostrich-components/definitions";
import ThemingShowcase from "../../../components/ostrich-components/theming";

const SHOWCASES = {
    ostcards: OstCardShowcase,
    buttons: ButtonsShowcase,
    dropdowns: DropdownShowcase,
    tabbars: TabBarsShowcase,
    ostrich_forms: OstFormsShowcase,
    form_fields: FormFieldsShowcase,
    definitions: DefinitionsShowcase,
    theming: ThemingShowcase,
}

export default function OstrichShowcase() {

    const [directory, setDirectory] = useAtom(directoryDataState)

    // Sets Directory
    useEffect(() => {
        setDirectory("Portfolio")
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 30, padding: '2.5% 3%' }}>
            <div style={{ flex: 10, minWidth: 0 }}>
                {DOC_PAGES.map((page) => {
                    const Showcase = SHOWCASES[page.route]
                    return Showcase ? (
                        <div key={page.route} id={`page-${page.route}`} style={{ scrollMarginTop: 20 }}>
                            <Showcase />
                        </div>
                    ) : null
                })}
            </div>

            {/* Side Menu */}
            <OstCard style={{ flex: 2, minWidth: 180, position: 'sticky', top: 20, marginTop: 20, padding: '16px 18px' }}>
                <div style={{ fontFamily: DOC.font, fontSize: 13, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: DOC.muted, marginBottom: 8 }}>
                    Components
                </div>
                <nav aria-label="Components" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {DOC_PAGES.map((page) => (
                        <OstrichButton
                            key={page.route}
                            label={page.title}
                            onClick={() => document.getElementById(`page-${page.route}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            style={{ backgroundColor: 'transparent', boxShadow: 'none', justifyContent: 'flex-start', padding: '6px 8px', borderRadius: 8, height: 'auto' }}
                            hoverStyle={{ backgroundColor: '#ebf4ff' }}
                            labelStyle={{ fontFamily: DOC.font, fontSize: 16, color: DOC.ink }}
                        />
                    ))}
                </nav>
            </OstCard>
        </div>
    )
}
