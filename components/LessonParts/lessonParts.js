// React
import React from "react";

// Styles
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Ostrich
import {
    OstCard,
    OstrichForm,
    CodeExample,
    CodeWorkSpace,
    DefinitionList,
} from "@ostrich_development/ostrich-components";

// Jotai
import { useAtom } from "jotai";
import { codeLanguageState } from "../../jotai/atoms";


///////////////////
// Shared Styles //
///////////////////

// Body text for lessons: the same font as Styles.Fonts.basic, with room to breathe
export const lessonText = {
    ...Styles.Fonts.basic,
    lineHeight: 1.6,
    marginTop: 0,
    marginBottom: 14,
}

// Side-by-side layout: code on the left, explanation on the right
export const sideBySide = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 10,
}

// The order language tabs appear in, everywhere in the lessons
const LANGUAGE_ORDER = ["JavaScript", "Java", "C#", "Python"]


/////////////////////
// Section Headers //
/////////////////////

// A lesson section title. The first one on a page sits closer to the page title.
export const SectionHeader = ({children, first = false}) => {
    return(
        <div style={{...Styles.Fonts.lessonHeader, marginTop: first ? 20 : 40, marginBottom: 16}}>
            {children}
        </div>
    )
}


//////////////
// Callouts //
//////////////

// Each callout type has one job, so readers learn what each color means
const calloutTypes = {
    key: {label: "KEY IDEA", accent: Colors.selectedColor, background: Colors.offWhite},
    example: {label: "EXAMPLE", accent: "#3fa87a", background: "#eefaf3"},
    watch: {label: "WATCH OUT", accent: "#e0912f", background: "#fff6e8"},
    think: {label: "THINK ABOUT IT", accent: "#2f8fe0", background: "#eef6ff"},
}

export const Callout = ({type = "key", title, children, style}) => {
    const t = calloutTypes[type] || calloutTypes.key
    return(
        <OstCard
            noShadow
            style={{
                ...Styles.Sections.importantNote,
                backgroundColor: t.background,
                borderLeft: `6px solid ${t.accent}`,
                borderRadius: 15,
                padding: '14px 20px',
                margin: '18px 0',
                ...style
            }}
        >
            <div style={{...Styles.Fonts.basic, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: t.accent, marginBottom: 6}}>
                {t.label}{title ? ` · ${title}` : ""}
            </div>
            {children}
        </OstCard>
    )
}


//////////
// Code //
//////////

// Read-only code using the library's CodeExample.
// Pass `code` for one language, or `languages` ({ JavaScript: "...", Python: "..." }) for tabs.
// Every tabbed block on the page follows the language the reader last picked.
export const LessonCode = ({
    code,
    language = "javascript",
    languages,
    title,
    highlightLines,
    lineNumbers = false,
    compact = false,
    width,
    style,
    codeStyle,
}) => {
    const [chosen, setChosen] = useAtom(codeLanguageState)

    // Keep tabs in the same order on every block
    let ordered = languages
    if (languages && !Array.isArray(languages)){
        ordered = {}
        const keys = Object.keys(languages).sort((a, b) => {
            const ia = LANGUAGE_ORDER.indexOf(a), ib = LANGUAGE_ORDER.indexOf(b)
            return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
        })
        keys.forEach(k => { ordered[k] = languages[k] })
    }

    const tabbed = !!ordered
    const block = (
        <CodeExample
            // Remounting on a new choice moves every block to that language
            key={tabbed ? chosen : undefined}
            code={tabbed ? undefined : code}
            language={tabbed ? undefined : language}
            languages={ordered}
            defaultLanguage={tabbed ? chosen : undefined}
            onLanguageChange={tabbed ? setChosen : undefined}
            title={title}
            highlightLines={highlightLines}
            lineNumbers={lineNumbers}
            showCopy={!compact}
            maxLines={null}
            style={{
                margin: compact ? 0 : '18px 0',
                boxShadow: '2px 2px 2px 2px rgba(40, 40, 40, 0.1)',
                ...style
            }}
            // Small one-language snippets don't need a header bar
            headerStyle={compact && !tabbed ? {display: 'none'} : undefined}
            codeStyle={{fontSize: compact ? 14 : 15, ...codeStyle}}
        />
    )

    // A fixed width keeps the block from squeezing text beside it
    if (width){
        return <div style={{flex: `0 0 ${typeof width === 'number' ? width + 'px' : width}`, maxWidth: '100%'}}>{block}</div>
    }
    return block
}

// An editable, runnable JavaScript box (the library's CodeWorkSpace) inside a card.
// Give it expectedOutput to grade the reader's answer.
export const TryIt = ({
    title = "Try it yourself",
    children,
    starter,
    expectedOutput,
    check,
    minLines = 4,
    correctMessage = "Nice! That's the right output.",
    wrongMessage,
    onResult,
}) => {
    return(
        <OstCard
            noShadow
            style={{
                ...Styles.Sections.subContentBubble,
                backgroundColor: "#eefaf3",
                borderLeft: "6px solid #3fa87a",
                borderRadius: 15,
                padding: '16px 20px',
                margin: '22px 0',
            }}
        >
            <div style={{...Styles.Fonts.basic, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: "#3fa87a", marginBottom: 6}}>
                TRY IT · {title}
            </div>
            {children}
            <CodeWorkSpace
                language="javascript"
                defaultValue={starter}
                expectedOutput={expectedOutput}
                check={check}
                lineNumbers
                minLines={minLines}
                showReset
                correctMessage={correctMessage}
                wrongMessage={wrongMessage}
                onResult={onResult}
                style={{marginTop: 10}}
                codeStyle={{fontSize: 15}}
            />
        </OstCard>
    )
}


/////////////////
// Explanation //
/////////////////

// A titled card for one idea, with an optional small code block underneath
export const ConceptCard = ({title, children, code, language, languages, style}) => {
    return(
        <OstCard
            style={{
                ...Styles.Sections.subContentBubble,
                flex: 1, minWidth: 220, padding: '14px 16px',
                display: 'flex', flexDirection: 'column',
                ...style
            }}
        >
            {title && <div style={{...Styles.Fonts.h3, marginBottom: 4}}>{title}</div>}
            <div style={{...lessonText, fontSize: 15.5, flex: 1}}>{children}</div>
            {(code || languages) && (
                <LessonCode code={code} language={language} languages={languages} compact/>
            )}
        </OstCard>
    )
}

// Lays ConceptCards out in a wrapping row
export const CardRow = ({children, style}) => (
    <div style={{display: 'flex', flexDirection: 'row', gap: 14, flexWrap: 'wrap', margin: '10px 0 18px 0', ...style}}>
        {children}
    </div>
)

// A small glossary of terms using the library's DefinitionList
export const KeyTerms = ({title = "Key Terms", terms}) => {
    return(
        <DefinitionList
            title={title}
            definitionsList={terms}
            style={{
                backgroundColor: Colors.offWhiteContent,
                borderRadius: 15,
                boxShadow: '2px 2px 10px 2px rgba(20, 20, 15, 0.1)',
                padding: '6px 16px 14px 16px',
                margin: '22px 0',
            }}
            titleStyle={{...Styles.Fonts.h1}}
            rowStyle={{border: "1px solid #c9d3de", borderRadius: 10, marginTop: 8, overflow: 'hidden', padding: 0}}
            termStyle={{flex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.offWhite, borderRight: "1px solid #c9d3de"}}
            definitionStyle={{flex: 9}}
            termTextStyle={{...Styles.Fonts.basic, fontWeight: 600, textAlign: 'center', margin: 0, padding: '10px 8px'}}
            definitionTextStyle={{...Styles.Fonts.basic, fontSize: 15.5, lineHeight: 1.5, margin: 0, padding: '10px 14px'}}
        />
    )
}


///////////////////////
// Variable Diagrams //
///////////////////////

// Draws a variable as a labeled box holding a value
export const VariableBox = ({name, value, valueStyle = Styles.Code.reg, caption}) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 12px'}}>
            <div style={{
                ...Styles.Sections.simpleLessonCode,
                position: 'relative',
                width: 150, maxWidth: 'none', margin: '14px 0 6px 0',
                padding: '22px 10px 16px 10px',
                textAlign: 'center',
            }}>
                <span style={{
                    position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: Colors.offWhiteContent,
                    border: "2px solid rgb(156, 161, 158)", borderRadius: 10,
                    padding: '1px 10px', whiteSpace: 'nowrap',
                    ...Styles.Fonts.basic, fontSize: 15, fontWeight: 600, color: 'black'
                }}>
                    {name}
                </span>
                <span style={{...Styles.Code.code, ...valueStyle, fontSize: 20}}>{value}</span>
            </div>
            {caption && (
                <div style={{...Styles.Fonts.basic, fontSize: 14, color: '#5f656e'}}>{caption}</div>
            )}
        </div>
    )
}


/////////////
// Quizzes //
/////////////

// End-of-lesson check using OstrichForm.
// questions: [{ question, options, answer, perRow? }]. Graded on submit, wrong answers show the right one.
export const CheckYourUnderstanding = ({title = "Check your Understanding", questions}) => {
    return(
        <div style={{marginTop: 30}}>
            <OstrichForm
                title={title}
                style={{
                    backgroundColor: Colors.offWhiteContent,
                    boxShadow: '2px 2px 10px 2px rgba(20, 20, 15, 0.1)',
                    borderRadius: 15
                }}
                fieldTitleStyle={{...Styles.Fonts.basic, fontSize: 18, fontWeight: 600, lineHeight: 1.4}}
                optionLabelStyle={{fontSize: 16, textAlign: 'left', width: '100%'}}
                fieldProps={{optionLabelAreaStyle: {flex: 1}}}
                reviewOnSubmit
                showWrongAnswers
                showsAnswer
                allowResubmission
                fields={questions.map((q, i) => ({
                    id: String(i + 1),
                    title: `${i + 1}. ${q.question}`,
                    type: "MC",
                    options: q.options,
                    correctResponse: q.answer,
                    itemsPerRow: q.perRow ?? (q.options.some(o => String(o).length > 14) ? 1 : 2),
                }))}
            />
        </div>
    )
}


/////////////////////////
// Recap and Next Step //
/////////////////////////

export const Recap = ({points}) => {
    return(
        <OstCard style={{...Styles.Sections.subContentBubble, padding: '18px 26px', marginTop: 30}}>
            <div style={{...Styles.Fonts.h1, marginBottom: 8}}>Recap</div>
            <ul style={{margin: 0, paddingLeft: 22}}>
                {points.map((point, i) => (
                    <li key={i} style={{...lessonText, marginBottom: 6}}>{point}</li>
                ))}
            </ul>
        </OstCard>
    )
}

export const NextLesson = ({lesson, onClick}) => {
    return(
        <OstCard
            style={{marginLeft: '25%', marginRight: '25%', marginTop: 30, marginBottom: 40, cursor: 'pointer'}}
            onClick={() => onClick(lesson)}
        >
            <p style={{...Styles.Fonts.basicX, textAlign: 'center', margin: '6px 0'}}>
                Up next: <strong>{lesson}</strong> →
            </p>
        </OstCard>
    )
}
