// React + Next
import React, { useEffect } from "react";

// Jotai
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../../../jotai/atoms";

// Showcase Kit
import { Hero, ActionButton, Section, Notice } from "../../../components/Showcase/showcaseKit";
import { CaseStudyPage, P, Code, SubHeading, FactRow, Phone, PhoneRow, WideShot, Split, FeatureTabs, Timeline } from "../../../components/Showcase/caseStudyKit";

// Assets
const IMG = "/assets/showcase_images/ieee"
const androidListing = `${IMG}/ieeeAndListing.png`
const iosListing = `${IMG}/ieeeAppListing.png`
const newDashboard = `${IMG}/new_dash_poeple_and_events.png`
const oldEvents = `${IMG}/old_events.png`
const oldPeople = `${IMG}/old_people.png`
const gSearch = `${IMG}/gSearch.png`
const gSearchPeople = `${IMG}/gSearch_people.png`
const gSearchEvents = `${IMG}/gSearch_events.png`

const IOS_LISTING = "https://apps.apple.com/us/app/ieee/id1259370915"
const ANDROID_LISTING = "https://play.google.com/store/apps/details?id=org.ieee.mobile.mcoe.ieee&hl=en_US"

// Navy into IEEE blue
const HERO_BG = "linear-gradient(135deg, #11013b 0%, #0b2c63 50%, #00629B 100%)"
const IEEE_BLUE = "#00629B"

const open = (url) => window.open(url, "_blank", "noopener,noreferrer")


export default function IEEEPage(){

    ///////////
    // State //
    ///////////

        const [directory, setDirectory] = useAtom(directoryDataState)
        const [activeTab, setActiveTab] = useAtom(tabBarState)

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

        const dashboardCards = [
            {
                title: "Old event cards",
                image: oldEvents,
                alt: "The previous event cards on the IEEE app dashboard",
                caption: "The previous Events cards",
                body: <>
                    <P>
                        The old Events cards showed the most important information clearly, but they felt cramped with longer event
                        titles, which events often have. They were also long enough that only a few fit on screen at once, which made
                        the dashboard feel monotonous.
                    </P>
                    <P>
                        For the redesign we wanted to cut their length in half to give the dashboard some visual variety, use flex
                        layout so long titles wouldn't fill the whole card, and add some color.
                    </P>
                </>,
            },
            {
                title: "Old people cards",
                image: oldPeople,
                alt: "The previous people cards on the IEEE app dashboard",
                caption: "The previous People cards",
                body: <>
                    <P>
                        The old People cards were safe, if a little cluttered. The member's grade was shown by the color along the
                        bottom of the card, and what they had in common with the current user sat in the middle.
                    </P>
                    <P>
                        For the redesign we wanted them to look more like cards in modern mobile apps: more color, a much more
                        prominent profile picture, and a clear hint that tapping the card opens that person's profile.
                    </P>
                </>,
            },
            {
                title: "New dashboard",
                image: newDashboard,
                alt: "The redesigned IEEE app dashboard with new People and Events cards",
                caption: "The new dashboard, with People and Events",
                body: <>
                    <P>
                        The new modules are far less rigid and blocky than the originals. They look simpler, but they actually carry
                        more information.
                    </P>
                    <P>
                        Event cards are now colored by event type: hybrid, in person or fully remote. Using flexbox sizing and dynamic
                        SCSS, the text scales with the screen, so long titles aren't cut off on small phones and the cards still look
                        good on larger devices like iPads.
                    </P>
                    <P>
                        The People cards had one main goal: the profile pictures were far too small, and in the new design they're the
                        focus. We kept the color coding; the light blue ring around this person's photo shows their "Traditional Member"
                        grade, and other grades get other colors.
                    </P>
                </>,
            },
        ]

    /////////////////
    // Main Return //
    /////////////////

    return(
        <CaseStudyPage>
            <Hero
                background={HERO_BG}
                eyebrow="Professional Work · IEEE"
                title="The IEEE App"
                intro={<>
                    IEEE's flagship app, used by millions of people around the world. I maintain and modernize its client-facing
                    features, and helped grow downloads by 1.25 million in 2026, against a goal of 750,000.
                </>}
                actions={<>
                    <ActionButton label="App Store ↗" onClick={() => open(IOS_LISTING)} ariaLabel="The IEEE app on the App Store (opens in a new tab)"/>
                    <ActionButton label="Google Play ↗" variant="ghost" onClick={() => open(ANDROID_LISTING)} ariaLabel="The IEEE app on Google Play (opens in a new tab)"/>
                </>}
                aside={<Phone src={newDashboard} alt="The redesigned IEEE app dashboard" width={200}/>}
            />

            <FactRow
                facts={[
                    {label: "Role", value: "Software engineer"},
                    {label: "At IEEE since", value: "2023"},
                    {label: "2026 downloads", value: "+1.25M (goal 750K)"},
                    {label: "Built with", value: "Angular, Ionic, Capacitor"},
                ]}
            />

            <Section id="story" eyebrow="The Story" title="Modernizing an app from 2014">
                <P>
                    The IEEE app reaches millions of users across the world, and it's a privilege to have contributed to something so
                    widely used. During my time at IEEE I've maintained and updated its client-facing features to improve the
                    experience for all of those users.
                </P>
                <P>
                    The app was published in 2014, so its codebase and support structure were built long before I arrived, and before
                    today's native frameworks existed. It was powered entirely by Cordova, which had been fully deprecated by the time
                    I joined.
                </P>
                <P>
                    My time at IEEE also saw a new CTO, and with that came new priorities for client-facing products. That led to some
                    major overhauls of the IEEE app, which I was a large part of.
                </P>
            </Section>

            <Section id="distribution" eyebrow="Distribution" title="Keeping it in the stores">
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 22, maxWidth: 980}}>
                    <WideShot src={androidListing} alt="The IEEE app's Google Play listing" caption="Google Play listing"/>
                    <WideShot src={iosListing} alt="The IEEE app's App Store listing" caption="App Store listing"/>
                </div>
                <div style={{marginTop: 26}}>
                    <P>
                        One of my major responsibilities, here and on <a href="/showcases/works/eventhub" style={{color: IEEE_BLUE, fontWeight: 600}}>EventHub</a>,
                        is keeping the app compliant with Apple's and Google Play's ever-changing policies.
                    </P>
                </div>
                <Timeline
                    color={IEEE_BLUE}
                    items={[
                        {
                            when: "Step 1",
                            title: "Privacy manifests, by hand",
                            body: <P>
                                Many of the app's libraries were deprecated and didn't provide the security and permission information iOS
                                now requires. I added Privacy Manifests to the Apple builds manually, which kept updates, new content and
                                bug fixes shipping on schedule.
                            </P>,
                        },
                        {
                            when: "Step 2",
                            title: "Upgrading Angular and Ionic",
                            body: <P>
                                The manual manifests weren't a permanent fix. The real fix was Capacitor, but first the Angular and Ionic
                                versions had to be upgraded.
                            </P>,
                        },
                        {
                            when: "Step 3",
                            title: "A Capacitor / Cordova hybrid",
                            body: <P>
                                With the upgrades in place, I integrated Capacitor into the app, turning it into a Capacitor/Cordova hybrid
                                project that can keep up with current store requirements.
                            </P>,
                        },
                    ]}
                />
            </Section>

            <Section
                id="dashboard"
                eyebrow="Dashboard Redesign"
                title="A new home dashboard"
                subtitle="The biggest project I've been part of at IEEE was reinventing the app's user dashboard, overhauling both how it works and how it looks. This section covers my impact on the design."
            >
                <FeatureTabs items={dashboardCards} ariaLabel="Dashboard redesign"/>
            </Section>

            <Section id="search" eyebrow="Global Search" title="Finding anything across IEEE">
                <Split media={<Phone src={gSearch} alt="The Global Search landing screen" caption="Global Search, before typing" width={240}/>}>
                    <P>
                        Two of IEEE's core values are <strong>supporting the development of technology and professionals</strong> and <strong>connecting
                        technical professionals worldwide</strong>. That means giving users a huge amount of content, and a strong way to filter
                        through it. That's what the app's Global Search is for.
                    </P>
                    <P>
                        The app hosts hundreds of thousands of pieces of content, spread across people, events, news, media and magazines.
                        Global Search lets users find and filter that content by type, title or keywords.
                    </P>
                    <P>
                        This screen is what users see when they first open Global Search: an empty search bar, with recently released and
                        recommended content already showing. In this case, the user's interests line up with the news items under the
                        search bar. Once they start typing, they can choose which type of content, if any, to filter the results by.
                    </P>
                </Split>

                <SubHeading>Two pieces I built</SubHeading>
                <Split
                    reverse
                    mediaBasis={500}
                    media={
                        <PhoneRow style={{margin: 0}}>
                            <Phone src={gSearchEvents} alt="Global Search results filtered to events" caption="Filtering by category" width={210}/>
                            <Phone src={gSearchPeople} alt="Global Search asking a guest to log in to see people" caption="The login check for people" width={210}/>
                        </PhoneRow>
                    }
                >
                    <P>
                        <strong>Category filters.</strong> Buttons that narrow results to one type of content. This matters because many
                        events are named after the magazine that hosts them, and many news posts share a title with their attached media.
                        The filters get users to what they're looking for faster, cut down on frustration and helped a lot with user
                        retention.
                    </P>
                    <P>
                        <strong>The login check for people.</strong> To protect user privacy, guests (anyone not signed in) can't look up or
                        view profiles. Adding the check was the easy part. The hard part was letting users log in from this screen: login
                        happens on an SSO page in an in-app browser, and the app had trouble loading the user's profile and refreshing pages
                        when they logged in from anywhere other than the main dashboard. By reworking the Global Search page's lifecycle and
                        retooling our <Code>NgRx</Code> dispatchers, I made login work seamlessly here and on other pages too.
                    </P>
                </Split>
            </Section>

            <Notice>More about my work on the IEEE app is on the way.</Notice>
        </CaseStudyPage>
    )
}
