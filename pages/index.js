// React
import React, {useEffect} from "react";

// Next JS
import { useRouter } from "next/router";

// Jotai
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../jotai/atoms";

// Ostrich
import { CodeExample, OstrichButton } from "@ostrich_development/ostrich-components";

// Showcase Kit
import { Page, Hero, ActionButton, Avatar, Section, CardGrid, ProjectCard, Notice, DOC, LIME } from "../components/Showcase/showcaseKit";

// Assets
const OstCompImg = "/assets/icons/big/OstrichComponentsLogo.png";
const NightreignImg = "/assets/icons/big/Nightreign.png";
const HeadshotImg = "/assets/aboutMe/headshot.png";

// The Basics lessons that are live so far, in order
const STARTER_LESSONS = ["Variables", "Operators", "Data Types", "Conditionals", "Printing and Debugging", "Functions"]

// The hero's code sample, in the four lesson languages
const HERO_CODE = [
  { label: "JavaScript", code: `let you = "curious"\nyou = learn(you)   // "developer"` },
  { label: "Python", code: `you = "curious"\nyou = learn(you)   # "developer"` },
  { label: "Java", code: `String you = "curious";\nyou = learn(you);  // "developer"` },
  { label: "C#", code: `string you = "curious";\nyou = Learn(you);  // "developer"` },
]


export default function Landing() {

  ///////////
  // State //
  ///////////

  const [directory, setDirectory] = useAtom(directoryDataState)

  const [tabBar, setTabBar] = useAtom(tabBarState)

  const router = useRouter()

  ////////////////
  // UseEffects //
  ////////////////

  useEffect(() => {
    setDirectory(false)
  }, [])

  ///////////////
  // Functions //
  ///////////////

  function goTo(route, tab){
    if (tab){
      setTabBar(tab)
    }
    router.push(route)
  }

  function openLesson(lesson){
    router.push(`/concepts/basics/lessons/${lesson.toLowerCase().replaceAll(" ", "_")}`)
  }

  ////////////////
  // Renderings //
  ////////////////

  // The same idea in every lesson language, using the library's CodeExample tabs
  function renderHeroCode(){
    return(
      <CodeExample
        languages={HERO_CODE}
        defaultLanguage="JavaScript"
        showCopy={false}
        style={{ width: 380, maxWidth: "100%", boxShadow: "0 12px 28px rgba(0,0,0,0.35)" }}
        codeStyle={{ fontSize: 16 }}
      />
    )
  }

  function renderLessonPath(){
    return(
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 12}}>
        {STARTER_LESSONS.map((lesson, i) => (
          <OstrichButton
            key={lesson}
            onClick={() => openLesson(lesson)}
            aria-label={`Lesson ${i + 1}: ${lesson}`}
            label={
              <span style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span style={{
                  width: 28, height: 28, borderRadius: 99, backgroundColor: DOC.ink, color: LIME,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700,
                }}>
                  {i + 1}
                </span>
                {lesson}
              </span>
            }
            style={{
              backgroundColor: 'white', border: `1px solid ${DOC.line}`, borderRadius: 999,
              padding: '8px 18px 8px 8px', minWidth: 0, height: 'auto',
              boxShadow: "0 3px 10px rgba(17, 1, 59, 0.06)",
            }}
            hoverStyle={{ backgroundColor: DOC.wash }}
            labelStyle={{ fontFamily: DOC.font, fontSize: 16, fontWeight: 600, color: DOC.ink }}
          />
        ))}
      </div>
    )
  }

  /////////////////
  // Main Return //
  /////////////////

  return (
    <Page>
      <Hero
        eyebrow="The Codex"
        title="Learn to code, then see what it can build."
        intro={<>
          Free Computer Science lessons for new developers, alongside a portfolio of real apps and projects.
          Built and maintained by Nick Lanese, entirely from custom-made React components.
        </>}
        actions={<>
          <ActionButton label="Start Learning" onClick={() => goTo("/concepts/basics/menu")}/>
          <ActionButton label="See My Work" variant="ghost" onClick={() => goTo("/showcases/works/menu", "Official Works")}/>
        </>}
        aside={renderHeroCode()}
      />

      <Section
        eyebrow="Why The Codex"
        title="The resource I wish I'd had"
      >
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center'}}>
          <Avatar src={HeadshotImg} alt="Nick Lanese" size={120}/>
          <div style={{flex: '1 1 420px', fontSize: 18, lineHeight: 1.65, color: DOC.text}}>
            <p style={{margin: 0}}>
              I believe anyone can become a developer. I learned my trade through online courses, YouTube videos, and the occasional educational Reddit post.
              The Codex covers everything from the most basic Computer Science principles to the popular open source frameworks and libraries,
              so you can go from your first variable to building sites of your own.
            </p>
            <p style={{margin: '12px 0 0', color: DOC.muted}}>
              If even one person's life trajectory is changed by this content, it will all be worthwhile.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Start Here"
        title="The Basics, one lesson at a time"
        subtitle="Short lessons with side-by-side examples in JavaScript, Java, C# and Python."
      >
        {renderLessonPath()}
      </Section>

      <Section
        eyebrow="Explore"
        title="See it in action"
        subtitle="The same fundamentals, put to work in real apps, tools and a component library."
      >
        <CardGrid>
          <ProjectCard
            image={HeadshotImg}
            title="Nick's Portfolio"
            blurb="Professional work, including apps used by millions of people around the world, plus a little about me."
            cta="Open portfolio →"
            onClick={() => goTo("/showcases/works/menu", "Official Works")}
          />
          <ProjectCard
            image={NightreignImg}
            title="Ongoing Projects"
            blurb="Games, build calculators and AI experiments I'm building in my free time."
            cta="Browse projects →"
            onClick={() => goTo("/showcases/projects/menu", "Ongoing Projects")}
          />
          <ProjectCard
            image={OstCompImg}
            fit="logo"
            tileBg="#f0f1f5"
            title="Ostrich Component Library"
            blurb="The React component library this whole site is built with, published on npm, with live examples and docs."
            cta="Read the docs →"
            onClick={() => goTo("/showcases/ostrich-components/menu", "Ostrich Components")}
          />
        </CardGrid>
      </Section>

      <Notice>
        <strong>Heads up:</strong> The Codex is still under heavy construction, so you may run into the occasional 404 or unfinished page. Thanks for your patience!
      </Notice>
    </Page>
  );
}
