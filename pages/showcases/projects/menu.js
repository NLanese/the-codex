// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Jotai
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../../../jotai/atoms";

// Showcase Kit
import { Page, Hero, ActionButton, PillTabs, Section, CardGrid, ProjectCard } from "../../../components/Showcase/showcaseKit";
import { PROJECTS, PROJECT_GROUPS } from "../../../constants/showcaseProjects";

const ALL = "All Projects"


export default function ProjectsMenu() {

    ///////////
    // State //
    ///////////

      const [directory, setDirectory] = useAtom(directoryDataState)
      const [activeTab, setActiveTab] = useAtom(tabBarState)
      const router = useRouter()

      // Which group of projects is showing
      const [filter, setFilter] = useState(ALL)

    ////////////////
    // UseEffects //
    ////////////////

      useEffect(() => {
        setDirectory("Portfolio")
        setActiveTab("Ongoing Projects")
      }, [])

    ////////////////
    // Renderings //
    ////////////////

      function renderGroup(group){
        const projects = PROJECTS.filter((p) => p.group === group.id)
        if (!projects.length){
            return null
        }
        return(
            <Section
                key={group.id}
                id={`projects-${group.id}`}
                eyebrow={group.eyebrow}
                title={group.title}
                subtitle={group.subtitle}
            >
                <CardGrid>
                    {projects.map((p) => (
                        <ProjectCard
                            key={p.id}
                            image={p.image}
                            fit={p.fit}
                            tileBg={p.tileBg}
                            title={p.title}
                            blurb={p.blurb}
                            tags={p.tags}
                            status={p.status}
                            href={p.href}
                            onClick={p.route ? () => router.push(p.route) : undefined}
                        />
                    ))}
                </CardGrid>
            </Section>
        )
      }

      const shownGroups = filter === ALL ? PROJECT_GROUPS : PROJECT_GROUPS.filter((g) => g.title === filter)


    /////////////////
    // Main Return //
    /////////////////

    return(
        <Page>
            <Hero
                eyebrow="Ongoing Projects"
                title="Things I'm building"
                intro={<>
                    Personal projects, experiments and tools I build in my free time. Some are live, some are still in the workshop,
                    and all of them are built with the same fundamentals taught in The Codex's lessons.
                </>}
            />

            <div style={{marginTop: 28}}>
                <PillTabs
                    tabs={[ALL, ...PROJECT_GROUPS.map((g) => g.title)]}
                    value={filter}
                    onChange={setFilter}
                    ariaLabel="Filter projects"
                />
            </div>

            {shownGroups.map(renderGroup)}

            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <ActionButton
                    label="← Back to Portfolio"
                    variant="dark"
                    onClick={() => {
                        setActiveTab("Official Works")
                        router.push("/showcases/works/menu")
                    }}
                />
            </div>
        </Page>
    )
}
