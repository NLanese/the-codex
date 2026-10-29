// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Jotai
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../../../jotai/atoms";

// Ostrich
import { OstCard } from "@ostrich_development/ostrich-components";

// Showcase Kit
import { Page, Hero, ActionButton, Avatar, PillTabs, Section, CardGrid, ProjectCard, StatRow, jumpTo, DOC, LIME } from "../../../components/Showcase/showcaseKit";
import { PRO_WORKS, PROJECTS, FEATURED_PROJECT_IDS } from "../../../constants/showcaseProjects";

// Assets
const headshot = "/assets/aboutMe/headshot.png"


export default function WorksMenu() {

    ///////////
    // State //
    ///////////

      const [directory, setDirectory] = useAtom(directoryDataState)
      const [activeTab, setActiveTab] = useAtom(tabBarState)
      const router = useRouter()

      // Which About Me story is showing
      const [aboutTab, setAboutTab] = useState("Personal Story")

    ////////////////
    // UseEffects //
    ////////////////

      useEffect(() => {
        setDirectory("Portfolio")
        setActiveTab("Official Works")
      }, [])

    ///////////////
    // Constants //
    ///////////////

      const featured = FEATURED_PROJECT_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean)

      const aboutTabs = [
        {title: "Personal Story", render: renderPersonalStory},
        {title: "Career History", render: renderCareerHistory},
        {title: "Intangibles", render: renderIntangibles},
      ]

      const aboutText = {fontSize: 17.5, lineHeight: 1.7, color: DOC.text, margin: "0 0 16px"}

    ////////////////
    // Renderings //
    ////////////////

      function renderHeadshot(){
        return <Avatar src={headshot} alt="Nick Lanese" size={230} ring={LIME}/>
      }

      function renderProjectCard(p){
        return(
            <ProjectCard
                key={p.id}
                image={p.image}
                fit={p.fit}
                tileBg={p.tileBg}
                title={p.title}
                blurb={p.blurb}
                tags={p.tags}
                status={p.status === "pro" ? null : p.status}
                href={p.href}
                onClick={p.route ? () => router.push(p.route) : undefined}
            />
        )
      }

      function renderAboutMe(){
        return(
            <OstCard
                noShadow
                style={{
                    backgroundColor: "white", border: `1px solid ${DOC.line}`, borderRadius: 20,
                    boxShadow: "0 4px 14px rgba(17, 1, 59, 0.08)", padding: "22px 28px 12px",
                }}
            >
                <div style={{marginBottom: 22}}>
                    <PillTabs
                        tabs={aboutTabs.map((tab) => tab.title)}
                        value={aboutTab}
                        onChange={setAboutTab}
                        ariaLabel="About Me"
                    />
                </div>
                <div role="tabpanel" style={{maxWidth: 900}}>
                    {(aboutTabs.find((tab) => tab.title === aboutTab) || aboutTabs[0]).render()}
                </div>
            </OstCard>
        )
      }

      function renderPersonalStory(){
        return(
            <>
                <p style={aboutText}>
                Creation has always been a passion of mine. As a child, before I could even properly formulate sentences, I could often be found
                constructing elaborate pathways for my Thomas the Tank Engines. As I grew, that graduated from basic toy trains to Legos and magnetic toys.
                I always loved to build; one of my favorite Christmas gifts as a child was an iCoaster, a set of magnetic roller coaster pieces you could
                connect to create an endless loop of marbles being lifted up an elevator system, sent down the track, and returned back to the elevator.
                Immediately, much to my father's chagrin, I insisted we create our own unique coaster instead of following the instructions provided.
                </p>

                <p style={aboutText}>
                Building something was often not enough for my younger self. I did not want to simply follow a recipe; I wanted to create something
                uniquely mine, something shaped by my own imagination and expertise. That yearning stayed with me throughout my life, and even as my passion
                for physical construction began to fade, I never relented in creating things. It wasn’t long before I discovered just how powerful a tool modern
                computing is, and how endless the possibilities for creation are with software in particular. Once I began taking Computer Science
                classes in high school, my path was chosen, and there was no turning back.
                </p>

                <p style={aboutText}>
                I vividly remember making my first “programs” on <a href="https://www.alice.org/get-alice/alice-2/" target="_blank" rel="noopener noreferrer" style={{color: DOC.accentDeep}}>Alice.</a> For a final project we were instructed to build a
                simple game. Most classmates created things like tic-tac-toe or a stationary carnival-style shooting game, where users simply pressed “Space” to fire at moving targets.
                I instead attempted a more complicated “Call of Duty”–style clone, complete with a user interface, movement, and aiming. Enough was never enough for me;
                when I create something, I take extreme pride in it.
                </p>
            </>
        )
      }

      function renderCareerHistory(){
        return(
            <>
                <p style={aboutText}>
                Fittingly, I began my professional journey as a software developer in a full sprint. I was hired as part of a brand-new two-man team by a studio that
                had never before dipped its toes into the technology sector, so there was an immense amount of both work and learning to take on. Less than three months in,
                the team lead departed the company, shifting all of his responsibilities onto me. This meant that on my first job as a software engineer, I had to
                master React Native / Expo and learn PostgreSQL and PlanetScale database hosting on the fly — all while continuing to build the app, website, and database at a satisfactory pace.
                </p>

                <p style={aboutText}>
                When I eventually moved on from the studio, I kept the remaining client, Kidz-n-Motion, and have since managed the production and maintenance of the
                Kidz-n-Motion site, app, and database. While handling those responsibilities, I also began my journey with IEEE. I was extremely fortunate to land in a
                far more stable environment after what had been an exceedingly tumultuous early work experience. There I was able to grow and develop even further as a software engineer,
                working with a team for the first time in my career and maintaining several significantly larger codebases for apps used by millions of people around the world.
                </p>
            </>
        )
      }

      function renderIntangibles(){
        return(
            <>
                <p style={aboutText}>
                As I grow as a developer and as a man, I have learned to utilize on my strengths while also always striving to improve my areas of weakness.
                </p>

                <p style={aboutText}> <strong>Clarity and Communication - </strong>
                Foremost, I take extreme pride in my ability to translate complicated technical topics into something easier to understand and more comfortable to hear.
                I know firsthand how frustrating it can be to work with something that feels nebulous, and as such I always strive to maintain transparency. In order
                to do this, there needs to be clarity and understanding between all parties. This remains true both in communicating with clients as well as other cohorts
                working on the codebase alongside you.
                </p>

                <p style={aboutText}> <strong>Version Management - </strong>
                I'm very often involved directly or solely in charge of library and dependency upgrades in my professional career. I am very well familiarized with Node and NPM
                and have even published / upgraded some packages to NPM.
                </p>

                <p style={aboutText}> <strong>Strong Documentation Practices - </strong>
                I'm very often involved directly or solely in charge of library and dependency upgrades in my professional career. I am very well familiarized with Node and NPM
                and have even published / upgraded some packages to NPM.
                </p>
            </>
        )
      }


    /////////////////
    // Main Return //
    /////////////////
    return(
        <Page>
            <Hero
                eyebrow="Portfolio"
                title="Nick Lanese"
                intro={<>
                    Software engineer building mobile apps, websites, and the databases behind them. I run the Kidz-N-Motion app, site and database,
                    and help maintain IEEE's apps, used by millions of people around the world.
                </>}
                actions={<>
                    <ActionButton label="Professional Work" onClick={() => jumpTo("professional-works")}/>
                    <ActionButton label="Personal Projects" variant="ghost" onClick={() => jumpTo("personal-projects")}/>
                    <ActionButton label="About Me" variant="ghost" onClick={() => jumpTo("about-me")}/>
                </>}
                aside={renderHeadshot()}
            />

            <div style={{marginTop: 26}}>
                <StatRow
                    stats={[
                        {value: "1.25M", label: "new IEEE app downloads in 2026, against a goal of 750K"},
                        {value: "Millions", label: "of people worldwide use the IEEE apps I help maintain"},
                        {value: "4", label: "professional apps and sites shipped and maintained"},
                    ]}
                />
            </div>

            <Section
                id="professional-works"
                eyebrow="Professional Works"
                title="Apps and sites I've shipped"
            >
                <CardGrid min={240}>
                    {PRO_WORKS.map(renderProjectCard)}
                </CardGrid>
            </Section>

            <Section
                id="personal-projects"
                eyebrow="Personal Projects"
                title="What I build for fun"
                subtitle="A few highlights. Every project, including the ones still in the workshop, lives on the Ongoing Projects page."
            >
                <CardGrid min={240}>
                    {featured.map(renderProjectCard)}
                </CardGrid>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 26}}>
                    <ActionButton
                        label="See all ongoing projects →"
                        variant="dark"
                        onClick={() => {
                            setActiveTab("Ongoing Projects")
                            router.push("/showcases/projects/menu")
                        }}
                    />
                </div>
            </Section>

            <Section
                id="about-me"
                eyebrow="About Me"
                title="The person behind the code"
            >
                {renderAboutMe()}
            </Section>
        </Page>
    )
}
