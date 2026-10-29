// One list of everything shown on the Portfolio and Ongoing Projects pages.
//
// route:  a page on this site.   href: an outside site (opens in a new tab).
// Leave both out and the card shows as "not yet available".
// fit:    "cover" for artwork/screenshots, "logo" for logos (shown whole).
// tileBg: background behind a logo, when the logo has its own background color.
// status: live | beta | offline | soon | pro

const ICONS = "/assets/icons/big"

/////////////////////////
// Professional Works //
/////////////////////////

export const PRO_WORKS = [
    {
        id: "knm-app",
        title: "Kidz-N-Motion App",
        image: `${ICONS}/KNM.png`, fit: "logo",
        blurb: "The flagship app for Therapy In Motion PA, connecting children facing disabilities with their own Physical Therapist. I build and maintain the app, website and database.",
        tags: ["React Native", "Expo", "PostgreSQL"],
        status: "pro",
        route: "/showcases/works/kidz-n-motion",
    },
    {
        id: "knm-site",
        title: "Kidz-N-Motion Website",
        image: `${ICONS}/knmSite.png`, fit: "cover",
        blurb: "The public website for the Kidz-N-Motion physical therapy app.",
        status: "pro",
        href: "https://kidz-n-motion.app/",
    },
    {
        id: "ieee",
        title: "IEEE (Flagship App)",
        image: `${ICONS}/ieee.png`, fit: "logo",
        blurb: "IEEE's flagship app, used by millions of people worldwide. I maintain and modernize its client-facing features; downloads grew by 1.25 million in 2026, against a goal of 750,000.",
        tags: ["Mobile", "Cordova"],
        status: "pro",
        route: "/showcases/works/ieee",
    },
    {
        id: "eventhub",
        title: "EventHub (IEEE Events App)",
        image: `${ICONS}/eventhub.png`, fit: "logo", tileBg: "#1c2a51",
        blurb: "One app for all of IEEE's events and conferences: attendee and speaker profiles, maps of the event grounds, and your own event schedule.",
        tags: ["Mobile"],
        status: "pro",
        route: "/showcases/works/eventhub",
    },
]


///////////////////////
// Personal Projects //
///////////////////////

export const PROJECTS = [

    // Live Tools and Games
    {
        id: "nightreign",
        group: "live",
        title: "Nightreign Build Calculator",
        image: `${ICONS}/Nightreign.png`, fit: "cover",
        blurb: "An Elden Ring Nightreign build planner: pick a Nightfarer, slot your relics and see how your stats and damage change. Also has boss stats and saved relic lineups.",
        tags: ["React"],
        status: "live",
        route: "/showcases/projects/nightreign",
    },
    {
        id: "warhammer",
        group: "live",
        title: "Warhammer Army Codex",
        image: `${ICONS}/Warhammer.png`, fit: "logo",
        blurb: "A Warhammer 40k army builder: choose a battle size, fill out your ranks, and see each unit's weapons, abilities and wargear.",
        tags: ["React"],
        status: "beta",
        route: "/showcases/projects/warhammer",
    },
    {
        id: "candybox",
        group: "live",
        title: "Candy Box 3",
        image: `${ICONS}/CandyBox3.png`, fit: "logo",
        blurb: "A browser game in the spirit of the classic Candy Box games. Collect candy, then decide what to do with it.",
        tags: ["React"],
        status: "beta",
        route: "/showcases/projects/candybox_3",
    },
    {
        id: "ostrich",
        group: "live",
        title: "Ostrich Component Library",
        image: `${ICONS}/OstrichComponentsLogo.png`, fit: "logo", tileBg: "#f0f1f5",
        blurb: "My own React component library, published on npm. Nearly every part of this website is built with it.",
        tags: ["React", "npm"],
        status: "live",
        route: "/showcases/ostrich-components/menu",
    },
    {
        id: "food",
        group: "live",
        title: "Food Business Group",
        image: `${ICONS}/foodbusiness.png`, fit: "logo",
        blurb: "A website built for the Food Business Group.",
        status: "live",
        href: "https://foodbusinessgroup.vercel.app/",
    },

    // AI Experiments
    {
        id: "boardgame",
        group: "ai",
        title: "Board Game Wizard AI",
        image: `${ICONS}/BoardGameWizardIcon.jpeg`, fit: "cover",
        blurb: "A chatbot that answers rules questions about a list of board games, using Amazon Bedrock and a knowledge base built from the official rulebooks. The live demo is offline due to hosting costs.",
        tags: ["Amazon Bedrock", "Titan"],
        status: "offline",
        route: "/showcases/projects/boardgame_master_ai",
    },
    {
        id: "betbot",
        group: "ai",
        title: "NBA BetBot AI",
        image: `${ICONS}/BetBot.jpeg`, fit: "cover",
        blurb: "Pulls today's NBA bets from FanDuel, scrapes the matching stats from the NBA API, and has AI judge how good or bad each bet looks.",
        tags: ["Web Scraping", "NBA API", "AWS Bedrock"],
        status: "beta",
        route: "/showcases/projects/betbot",
    },
    {
        id: "dnd",
        group: "ai",
        title: "Dungeons, Dragons, and AI",
        image: `${ICONS}/DDAImg.jpeg`, fit: "cover",
        status: "soon",
    },

    // In the Workshop
    {
        id: "dungeondash",
        group: "workshop",
        title: "Dungeon Dash",
        image: `${ICONS}/DDScreen.png`, fit: "cover",
        blurb: "A game built in Unity.",
        tags: ["Unity"],
        status: "soon",
    },
    {
        id: "wanderer",
        group: "workshop",
        title: "Wanderer",
        image: `${ICONS}/WandererImg.jpeg`, fit: "cover",
        status: "soon",
    },
]

export const PROJECT_GROUPS = [
    { id: "live", eyebrow: "Live", title: "Tools, Games and Libraries", subtitle: "Things you can use right now." },
    { id: "ai", eyebrow: "AI", title: "AI Experiments", subtitle: "Projects that put large language models to work on everyday questions." },
    { id: "workshop", eyebrow: "In the Workshop", title: "Coming Soon", subtitle: "Still being built. Check back soon." },
]

// Shown on the Portfolio page under "Personal Projects"
export const FEATURED_PROJECT_IDS = ["nightreign", "ostrich", "boardgame", "betbot"]
