// React + Next
import React, { useEffect } from "react";

// Jotai
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../../../jotai/atoms";

// Showcase Kit
import { Hero, ActionButton, Section, DOC } from "../../../components/Showcase/showcaseKit";
import { CaseStudyPage, P, Code, SubHeading, FactRow, Phone, PhoneRow, WideShot, Split, FeatureTabs, Checklist, FieldGroups } from "../../../components/Showcase/caseStudyKit";

// Assets
const IMG = "/assets/showcase_images/knm"
const listing = `${IMG}/AppListing.png`
const chiScreen = `${IMG}/chiScreen.png`
const parScreen = `${IMG}/parScreen.png`
const therScreen = `${IMG}/therScreen.png`
const therCal = `${IMG}/therCalView.png`
const allAssign = `${IMG}/allAssign.png`
const assignOpened = `${IMG}/assignOpened.png`
const modelStruc = `${IMG}/modelStructure.png`

const IOS_LISTING = "https://apps.apple.com/us/app/kidz-n-motion/id1661352847"
const WEBSITE = "https://kidz-n-motion.app/"
const FOUNDER = "https://www.linkedin.com/in/dr-lafonda-beneby-pt-dpt-982255134/"

// Navy into Kidz-N-Motion orange
const HERO_BG = "linear-gradient(135deg, #11013b 0%, #3b1440 45%, #8a3d0c 100%)"

const open = (url) => window.open(url, "_blank", "noopener,noreferrer")
const link = { color: DOC.accentDeep, fontWeight: 600 }


export default function KNMPage(){

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

        const accountTypes = [
            {
                title: "Child",
                image: chiScreen,
                alt: "The Kidz-N-Motion home screen on a child account",
                caption: "Child account home screen",
                body: <>
                    <P>
                        Children get a deliberately small set of features, so the app stays simple and they can't get lost in it.
                        They can only watch and complete workout videos their Physical Therapist has assigned, which keeps them from
                        trying an exercise they aren't ready for yet.
                    </P>
                    <Checklist
                        title="After each one-minute video, the child answers three questions"
                        items={[
                            "Were you able to complete the workout without help from a parent?",
                            "Were you able to complete the workout without leaning on something for support?",
                            "How long did you keep going: the full minute, at least 30 seconds, or less than 30 seconds?",
                        ]}
                    />
                    <P>
                        Their answers earn a Gold, Silver or Bronze medal. Children can also check their calendar to see when
                        assignments are due and when appointments are scheduled.
                    </P>
                </>,
            },
            {
                title: "Parent",
                image: parScreen,
                alt: "The Kidz-N-Motion home screen on a parent account",
                caption: "Parent account home screen",
                body: <>
                    <P>
                        Parents can do everything children can, plus a few more things. The first is switching which child is
                        currently active. Parents can watch the workout videos too, and the active child is the one awarded the
                        medal for finishing a video.
                    </P>
                    <P>
                        Like children, parents can see when assignments are due and when appointments are scheduled. They can also
                        pick a date and request an appointment; their Physical Therapist then gets an email and a push notification
                        and can confirm or decline it.
                    </P>
                    <P>
                        If a child doesn't have a device of their own, parents can switch to child mode and hand over their phone.
                        Switching back to the parent account needs a password.
                    </P>
                </>,
            },
            {
                title: "Therapist",
                image: therScreen,
                alt: "The Kidz-N-Motion home screen on a therapist account",
                caption: "Therapist account home screen",
                body: <>
                    <P>
                        Therapists have the most features of the three account types. They can create or approve appointments,
                        meetings and workout assignments for their clients, and their calendar shows every assignment's start and
                        end dates along with every appointment.
                    </P>
                    <P>
                        Therapists can send and receive messages, but only with parent accounts. For obvious reasons, the app never
                        lets an adult message a child directly.
                    </P>
                    <P>
                        Therapists can also invite new clients from inside the app. They enter the parent's email address and some
                        basic details, such as names and the child's motor function level. Once the invite is accepted, accounts for
                        the parent and their child are created automatically with temporary passwords.
                    </P>
                </>,
            },
        ]

        const userFields = [
            {
                title: "Therapist specific",
                fields: [
                    ["occationTitle", "The therapist's title"],
                    ["enableAppointmentNotifications", "True if the therapist is notified about confirmed appointments"],
                    ["clientCarePlans", "Every client belonging to the therapist"],
                ],
            },
            {
                title: "Guardian specific",
                fields: [
                    ["messagesAreMuted", "True if the therapist has muted this client's messages"],
                    ["appointmentsAreMuted", "True if the therapist has muted this client's appointments"],
                    ["enableMissedDateNotifications", "True if the client has muted missed-assignment notifications"],
                    ["soloUser", "True if the client uses the app without a therapist"],
                    ["soloUserStripeID", "Payment IDs for solo users who paid for full access"],
                    ["childCarePlans", "Every child connected to the guardian"],
                ],
            },
            {
                title: "Child specific",
                fields: [
                    ["canAccessSettings", "True if the guardian lets the child change their settings"],
                    ["canAccessMessages", "True if the guardian lets the child message the therapist"],
                    ["leaveApp", "True if the guardian lets the child leave the app or sign out"],
                    ["carePlan", "The child's care plan"],
                ],
            },
        ]

        const carePlanFields = [
            {
                title: "Relationships",
                fields: [
                    ["child", "The connected child account"],
                    ["guardians", "The connected guardian accounts"],
                    ["therapist", "The connected therapist account"],
                    ["videoDetails", "Per-video notes and medals (below)"],
                    ["medals", "Every medal earned (below)"],
                    ["assignments", "Assigned workouts"],
                    ["meetings", "Scheduled meetings"],
                ],
            },
            {
                title: "Progress and exercise",
                fields: [
                    ["dailyStreak", "How many days in a row the child has earned a medal"],
                    ["functionalLevel", "Which level of videos the child can access"],
                    ["blockedVideoIDs", "Videos the therapist has blocked for this child"],
                    ["generalNotes", "Notes left by the therapist"],
                ],
            },
            {
                title: "videoDetail model",
                fields: [
                    ["videoID", "The video's ID on Cloudinary, used to track watched and blocked videos"],
                    ["medals", "Every medal for this video and this care plan"],
                    ["videoNotes", "The therapist's notes for this video"],
                    ["carePlan", "The care plan the notes belong to"],
                ],
            },
            {
                title: "medal model",
                fields: [
                    ["grade", "Bronze, silver or gold"],
                    ["videoID", "The video's ID on Cloudinary"],
                    ["date", "When the medal was earned"],
                    ["carePlan", "The care plan the medal belongs to"],
                ],
            },
        ]

    /////////////////
    // Main Return //
    /////////////////

    return(
        <CaseStudyPage>
            <Hero
                background={HERO_BG}
                eyebrow="Professional Work · Therapy In Motion PA"
                title="Kidz-N-Motion"
                intro={<>
                    The flagship app for Therapy In Motion PA, connecting children facing disabilities with their own Physical
                    Therapist. I'm the sole developer of the app, the website and the database behind them.
                </>}
                actions={<>
                    <ActionButton label="App Store ↗" onClick={() => open(IOS_LISTING)} ariaLabel="Kidz-N-Motion on the App Store (opens in a new tab)"/>
                    <ActionButton label="Website ↗" variant="ghost" onClick={() => open(WEBSITE)} ariaLabel="Kidz-N-Motion website (opens in a new tab)"/>
                </>}
                aside={<Phone src={therScreen} alt="The Kidz-N-Motion therapist home screen" width={200}/>}
            />

            <FactRow
                facts={[
                    {label: "Role", value: "Sole developer"},
                    {label: "Platforms", value: "iOS and Android"},
                    {label: "Built with", value: "React Native, PostgreSQL"},
                    {label: "Services", value: "Firebase, Cloudinary, Stripe"},
                ]}
            />

            <Section id="story" eyebrow="The Story" title="Physical therapy that kept going through COVID">
                <P>
                    Kidz-N-Motion was founded by <a href={FOUNDER} target="_blank" rel="noopener noreferrer" style={link}>Dr. LaFonda Beneby</a> during
                    COVID, when she and her in-school Physical Therapist peers suddenly couldn't give their clients the services they
                    needed. They could describe exercises to parents, but there was no way to <strong>show</strong> children the exercises,
                    and no way to confirm the activities were actually done.
                </P>
                <P>
                    To reconnect with the children who needed them, Dr. LaFonda founded Therapy In Motion and started building the
                    Kidz-N-Motion app. Clients and their parents can reach their Physical Therapist with in-app instant messaging.
                    Therapists assign workouts, and every workout comes with its own animation of a child doing the exercise, so
                    clients can follow along. Therapists can also record clients during in-person sessions and send the videos to
                    parents through the app, so parents can see how their child progresses.
                </P>
            </Section>

            <Section id="distribution" eyebrow="Distribution" title="Shipping to both app stores">
                <Split media={<WideShot src={listing} alt="The Kidz-N-Motion App Store listing" maxWidth={300}/>} mediaBasis={300}>
                    <P>
                        Kidz-N-Motion has been on the App Store and Google Play since 2021, used by therapists, clients and their parents
                        alike. It's built with React Native and kept up to date with current SDKs, APIs and store requirements. I've been
                        its sole architect, handling development, production and publishing, and I manage both the Apple Developer and
                        Google Play accounts.
                    </P>
                    <P>
                        This was my first professional project as a computer scientist, and it came with plenty of problems: my first
                        Gradle build errors on Android and CocoaPods issues on iOS. With no senior developer to turn to, and before AI
                        assistants were around to help, I worked through every compatibility issue and always got the app built and
                        shipped.
                    </P>
                </Split>
            </Section>

            <Section
                id="accounts"
                eyebrow="Account Types"
                title="One app, three experiences"
                subtitle="Children, parents and therapists each come to the app for something different, so each gets its own version of it. Pick an account type to see what it can do."
            >
                <FeatureTabs items={accountTypes} ariaLabel="Account types"/>
                <div style={{marginTop: 24}}>
                    <P>
                        Every user can personalize the app, too. There's a wide range of color palettes, including ones that stay
                        readable for different types of color blindness. Users can change their avatar, request a change-password
                        email, or reset a forgotten password through an emailed link to the website.
                    </P>
                </div>
            </Section>

            <Section id="calendar" eyebrow="Calendar" title="Assignments, meetings and reminders">
                <Split media={<Phone src={therCal} alt="The calendar on a therapist account" caption="Therapist calendar, pink palette" width={240}/>}>
                    <P>
                        Therapists create assignments and meetings for their clients, and each one shows up on the therapist's,
                        the child's and the guardian's calendars.
                    </P>
                    <P>
                        This screenshot is a therapist account using the pink color palette. Assignment due dates are light pink dots
                        under the date and meetings are darker fuchsia dots, so you can see an assignment due on the 28th and a meeting
                        on the 23rd. August 28th is selected, showing an assignment with three workout videos: Rolling, Toe Touches and
                        Squat.
                    </P>
                    <Checklist
                        title="Push notifications (through Firebase) go out when…"
                        items={[
                            "A child or guardian receives an assignment, or a meeting is scheduled",
                            "An assignment starts today (sent at 9am)",
                            "An assignment is due today (sent at 9am)",
                            "An assignment's due date passed without it being completed",
                            "A child completes an assignment (for guardians and therapists)",
                            "A meeting is today (sent at 9am)",
                        ]}
                    />
                    <P style={{fontSize: 15.5, color: DOC.muted}}>Users can turn these off at any time.</P>
                </Split>

                <SubHeading>Every assignment, past and present</SubHeading>
                <Split
                    reverse
                    mediaBasis={500}
                    media={
                        <PhoneRow style={{margin: 0}}>
                            <Phone src={allAssign} alt="The View All screen listing every assignment" caption="View All, with expired shown" width={210}/>
                            <Phone src={assignOpened} alt="An opened assignment showing its videos" caption="An opened assignment" width={210}/>
                        </PhoneRow>
                    }
                >
                    <P>
                        From the calendar, "View All" opens a list of every assignment and meeting. In the first screenshot,
                        "Show Expired" is on, so it lists every assignment the child has ever had.
                    </P>
                    <P>
                        Tapping an assignment opens its start date, due date and every assigned video. Videos the child completed while
                        the assignment was active have a green background instead of a red one, so therapists, children and guardians
                        can all check progress at a glance.
                    </P>
                </Split>
            </Section>

            <Section
                id="data-model"
                eyebrow="Data Model"
                title="How the accounts fit together"
                subtitle="The app is built to support how physical therapy practices already work, so the data is shaped around organizations, therapists and their clients."
            >
                <P>
                    Most clients are invited by their therapist and create their account from the emailed invite. For that to work,
                    the therapist must belong to an Organization. Every organization has at least one founder account, usually also a
                    therapist. Organizations invite therapists, and therapists invite clients. Each client is a parent and a child.
                </P>
                <WideShot src={modelStruc} alt="Diagram of how organizations, therapists, guardians, children and care plans relate" caption="How the main models relate"/>

                <SubHeading>Organization</SubHeading>
                <P>
                    The Organization is the parent of every other model in the app. An organization <strong>has many</strong> therapists,
                    plus settings that apply to all of its therapists and clients, such as payment and video settings. You could reach a
                    client by going from the organization through their therapist, but organizations also link to their clients, parents
                    and children directly.
                </P>

                <SubHeading>Users</SubHeading>
                <P>
                    Therapists, guardians and children are all rows in the same User table. What separates them is a set of
                    role-specific properties, decided by the <Code>role</Code> passed when the account is created. A <Code>THERAPIST</Code> takes
                    a different path through the API than a <Code>GUARDIAN</Code>. Those are the only two roles that can sign up directly;
                    signing up as a guardian creates the matching child account automatically.
                </P>
                <P>
                    Every user is created through the same mutation, <Code>signupUser</Code>, which adds these properties based on the role:
                </P>
                <FieldGroups groups={userFields}/>

                <SubHeading>Care plans</SubHeading>
                <P>
                    Users hold personal details, settings and relationships, but not the assignments, meetings, therapist notes or
                    exercise progress. Those live on the care plan (the Client model). Keeping it separate means the therapist, the
                    guardian and the child all get equal access to it without piling data onto the child's account, and it keeps the
                    relationships between models easier to follow.
                </P>
                <FieldGroups groups={carePlanFields} min={420}/>
            </Section>
        </CaseStudyPage>
    )
}
