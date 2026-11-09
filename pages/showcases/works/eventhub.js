// React + Next
import React, { useEffect } from "react";
import { useRouter } from "next/router";

// Jotai
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../../../jotai/atoms";

// Showcase Kit
import { Hero, ActionButton, Section, DOC } from "../../../components/Showcase/showcaseKit";
import { CaseStudyPage, P, Code, FactRow, Phone, PhoneRow, WideShot, Split, FeatureTabs, Checklist, Timeline } from "../../../components/Showcase/caseStudyKit";

// Assets (file names are case-sensitive on the server)
const IMG = "/assets/showcase_images/ieee"
const listing = `${IMG}/eventhub.png`
const attendeeList = `${IMG}/eventHub-attendee-list1.png`
const attendeeCard = `${IMG}/eventHub-attendee-list2.png`
const cordToCap = `${IMG}/cord-to-cap.png`
const selectEvent = `${IMG}/selectEvent.png`
const safeAttendee = `${IMG}/safeAttendee.png`
const safeSelect = `${IMG}/safeSelect.png`
const notesLanding = `${IMG}/ehNotesLanding.png`
const notesTyping = `${IMG}/ehNotesTaken.png`
const notesSaved = `${IMG}/ehNotesTaked.png`

const IOS_LISTING = "https://apps.apple.com/us/app/ieee-eventhub/id1456133827"

// Navy into the EventHub logo's dark blue
const HERO_BG = "linear-gradient(135deg, #11013b 0%, #1c2a51 55%, #1f4f8a 100%)"
const EH_BLUE = "#1f5fa8"

const open = (url) => window.open(url, "_blank", "noopener,noreferrer")


export default function EventHubPage(){

    ///////////
    // State //
    ///////////

        const [directory, setDirectory] = useAtom(directoryDataState)
        const [activeTab, setActiveTab] = useAtom(tabBarState)
        const router = useRouter()

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

        const attendeeFeatures = [
            {
                title: "Alphabet slider",
                image: attendeeList,
                alt: "The EventHub attendee list with an alphabet slider down the side",
                caption: "The attendee list and its alphabet slider",
                body: <>
                    <P>
                        This was one of the first major UI changes I was responsible for at IEEE, and it's still one of my favorites,
                        both for how it turned out and for the challenges of building it.
                    </P>
                    <Checklist
                        title="It had three jobs"
                        items={[
                            "Tapping a letter scrolls to the first attendee whose last name starts with it",
                            "Scrolling the list updates the slider to show which letter group is on screen",
                            "Only letters that actually start someone's last name are shown, so if no last names start with X, there's no X",
                        ]}
                    />
                    <P>
                        The first part was fairly simple. I sort the attendees alphabetically and build an object recording where each
                        new letter starts. If the first "B" last name is the 6th attendee, the object has key <Code>B</Code> with value 6.
                    </P>
                    <P>
                        Next, I track the height of each list item using Angular's element references. If B starts at the 6th item and
                        each item is 50px tall, then once the user scrolls past that point the slider switches to B. Likewise, if L starts
                        at the 100th item, tapping L scrolls the page 5,000px down.
                    </P>
                    <P>
                        Then there was Angular's infinite list. It's great for fast page loads, but it gets in the way when you need to
                        jump straight to an item several load groups away. I track the index of the last loaded item and work out how
                        many load groups are still needed. If the first "Z" is the 2,000th attendee, groups are 50 items, and only the
                        first group has loaded, that's 1,950 more attendees, or 39 more groups. Those load first, then the page scrolls
                        down to the 2,000th item.
                    </P>
                </>,
            },
            {
                title: "Attendee cards",
                image: attendeeCard,
                alt: "An expanded attendee card in the EventHub attendee list",
                caption: "An attendee item expanded into a card",
                body: <>
                    <P>
                        A much smaller job than the alphabet slider, but the attendee cards came with their own challenges.
                    </P>
                    <Checklist
                        title="What they needed to do"
                        items={[
                            "Tapping an attendee expands their item into a full card",
                            "Expanding a card can't throw off the alphabet slider's scroll tracking",
                            "If the attendee lists their social media, tapping it opens their page, in the app if it's installed or an in-app browser if not",
                            "Only one attendee card can be open at a time",
                        ]}
                    />
                    <P>
                        Every attendee item became tappable. Tapping one sets a <Code>selectedAttendee</Code> state variable, and when the
                        list renders, the matching attendee gets the expanded card instead of the regular item. That also guarantees only
                        one card is ever open.
                    </P>
                    <P>
                        I also added a <Code>scrollOffset</Code>: the difference in height between an attendee item and its expanded card.
                        It feeds into the scroll calculations, so the alphabet slider stays accurate while a card is open.
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
                title="IEEE EventHub"
                intro={<>
                    One app for every IEEE event, conference and official meeting: attendee and speaker profiles, maps of the event
                    grounds, and your own schedule synced to your phone's calendar.
                </>}
                actions={<>
                    <ActionButton label="App Store ↗" onClick={() => open(IOS_LISTING)} ariaLabel="IEEE EventHub on the App Store (opens in a new tab)"/>
                    <ActionButton label="The IEEE App →" variant="ghost" onClick={() => router.push("/showcases/works/ieee")}/>
                </>}
                aside={<Phone src={attendeeList} alt="The EventHub attendee list" width={200}/>}
            />

            <FactRow
                facts={[
                    {label: "Role", value: "Software engineer"},
                    {label: "At IEEE since", value: "2023"},
                    {label: "Built with", value: "Angular, Capacitor"},
                    {label: "Event data", value: "AWS S3, WordPress API"},
                ]}
            />

            <Section id="story" eyebrow="The Story" title="One app for thousands of events">
                <P>
                    IEEE hosts up to thousands of events a year, far too many for each one to have its own app in the App Store or
                    Google Play. At first every event host did make its own app, until Apple started rejecting them and warned that
                    future single-event apps would be barred. EventHub was the answer: one app that holds every IEEE-sponsored event.
                </P>
                <P>
                    Organizers that used to ship their own apps, like IEEE ComSoc or IEEE Women in Engineering, now all live inside
                    EventHub. Users can browse other attendees' and speakers' profiles, check maps of the event grounds, build their own
                    schedule that syncs to their phone's calendar, and find everything else about the event they've picked.
                </P>
            </Section>

            <Section id="distribution" eyebrow="Distribution" title="From Cordova to Capacitor">
                <Split media={<WideShot src={listing} alt="IEEE EventHub's App Store listing" caption="App Store listing" maxWidth={420}/>} mediaBasis={420}>
                    <P>
                        When I joined IEEE in 2023, I took over getting EventHub onto the Google Play Console from the developer before me.
                        The app was built with Angular and Cordova, with a few Capacitor packages mixed in. Since then I've moved it fully
                        onto Capacitor and off the deprecated Cordova engine.
                    </P>
                </Split>
                <div style={{marginTop: 26}}>
                    <Timeline
                        color={EH_BLUE}
                        items={[
                            {
                                when: "2023",
                                title: "Replacing the packages that broke",
                                body: <P>
                                    Relying on Cordova stopped being possible as several <Code>@ionic-native</Code> dependencies broke with current
                                    Android and iOS SDKs; they depended on old Cordova and didn't work in a Cordova/Capacitor hybrid. I removed
                                    them, swapped in their <Code>@capacitor</Code> or <Code>@awesome-cordova</Code> equivalents (which do work in the
                                    hybrid), and updated the code that imported them.
                                </P>,
                            },
                            {
                                when: "Spring 2024",
                                title: "All in on Capacitor",
                                body: <P>
                                    More problems from older dependencies pushed us to switch to Capacitor completely. Builds moved from
                                    <Code>cordova</Code> commands to <Code>capacitor</Code> commands, TypeScript and several analytics packages were
                                    upgraded to match, the Cordova config files were replaced with Capacitor ones, and the tsconfig was updated.
                                </P>,
                            },
                            {
                                when: "2025",
                                title: "Ready for Android 15",
                                body: <P>
                                    I led the work to make EventHub compatible with Android API level 35, since Google Play stopped accepting
                                    updates to apps targeting API 34 and below in November 2025.
                                </P>,
                            },
                        ]}
                    />
                </div>
                <WideShot src={cordToCap} alt="Diagram of the move from Cordova to Capacitor" caption="The move from Cordova to Capacitor" maxWidth={460}/>
            </Section>

            <Section
                id="attendees"
                eyebrow="Attendee List"
                title="Finding the people at your event"
                subtitle="EventHub lets you find and connect with other attendees, and I've done a lot of work on that feature and the ones around it. Pick a feature to read how it works."
            >
                <FeatureTabs items={attendeeFeatures} ariaLabel="Attendee list features"/>
                <div style={{marginTop: 24}}>
                    <P>
                        Users can also tap the magnifying glass in the top right to search for anyone. I reworked the search to match first
                        and last names separately, instead of one "first name + last name" string, so typing "Mann" or "Stan" both find
                        "Stanley Mann". Before, only "Stan" would.
                    </P>
                </div>
            </Section>

            <Section id="events" eyebrow="Event Providers" title="Adding new events">
                <Split media={<Phone src={selectEvent} alt="The EventHub screen for choosing an event provider" caption="Some of the sponsored IEEE groups" width={240}/>}>
                    <P>
                        EventHub hosts events from many different providers; this screen shows some of the sponsored IEEE groups.
                    </P>
                    <P>
                        Every provider has its own entry in a JSON file stored in an IEEE S3 bucket. When a new provider starts using
                        EventHub, another developer or I add it and its details to that JSON. When the app starts, it reads the file from
                        S3 to learn which providers to look for and what data to use. It then calls the IEEE WordPress site where providers
                        upload their event information, and that data comes back to the app for the user.
                    </P>
                    <P>
                        I added several of the providers now in the app myself. I've also been involved in nearly every change to the
                        app, the JSON and the API whenever the event structure changed, such as adding <Code>eventFormatType</Code> and
                        updating <Code>eventStartDate</Code> and <Code>eventEndDate</Code> to include a time as well as a date.
                    </P>
                </Split>
            </Section>

            <Section id="safe-area" eyebrow="Android 15" title="Restoring the safe area">
                <P>
                    In some of the screenshots above, the top of the app overlaps the status bar on Android phones. Somewhere in the
                    Angular upgrade or the move to newer Android SDKs, the safe-area package we relied on stopped working. I fixed it,
                    which made a big difference on newer phones running Android 15 and up.
                </P>
                <PhoneRow>
                    <Phone src={safeSelect} alt="The provider screen sitting below the Android status bar" caption="Provider list, inside the safe area" width={220}/>
                    <Phone src={safeAttendee} alt="The attendee list sitting below the Android status bar" caption="Attendee list, inside the safe area" width={220}/>
                </PhoneRow>
            </Section>

            <Section id="notes" eyebrow="Notes" title="Taking notes at an event">
                <P>
                    One of my very first contributions to EventHub was cleaning up and restoring note taking. Users can write notes for a
                    specific event, and the notes are there again when they come back to it. When I arrived, notes weren't saving
                    properly and weren't connected to the event they were written for.
                </P>
                <PhoneRow>
                    <Phone src={notesLanding} alt="The notes screen before writing" caption="Opening notes for an event" width={210}/>
                    <Phone src={notesTyping} alt="Writing a note for an event" caption="Writing a note" width={210}/>
                    <Phone src={notesSaved} alt="A saved note for an event" caption="The saved note" width={210}/>
                </PhoneRow>
            </Section>
        </CaseStudyPage>
    )
}
