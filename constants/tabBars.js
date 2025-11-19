import { conceptsList, languagesList, frameworksList, basicsLessons, basicsTests, basicsLabs } from "./lessonLists"
import { proWorks, onGoing } from "./portfolioLists"

// Fires on specific drawer type clicks
function handleDrawerClick(type, drawer, router, setTabBar, finalPath){
    router.push(`/${type}/${drawer.toLowerCase()}/menu`)
    setTabBar(false)
}

// Handles Clicks in Ostrich Components
function handleShowcaseDrawer(folder, drawer, router){
    console.log(`Should route to /showcases/${folder}/${drawer.toLowerCase().replaceAll(" ", "_")}`)
    router.push(`/showcases/${folder}/${drawer.toLowerCase().replaceAll(" ", "_")}`)
}

// Fires on specific Lesson drawer type clicks
function handleLessonTestLabDrawerClick(type, unit, LTL, finalPath, router){
    router.push((`/${type}/${unit}/${LTL}/${finalPath}`).toLowerCase().replaceAll(" ", "_"))
}

// Portfolio
export const portfolioTabs = (setTabBar, router) => { 
    return ([
        {
        title: "Ostrich Components", 
        onClick: () => {
            router.push("/showcases/ostrich-components/menu")
        },
        dropdown: {
            openOnHover: true,
            drawers: ["Showcase", "OstCards", "TabBars", "Dropdowns", "Ostrich Forms"],
            onDrawerClick: (drawer) => { 
                handleShowcaseDrawer("ostrich-components", drawer, router) 
            }
        }
    },
    {
        title: "Ongoing Projects", 
        onClick: () => {
            router.push("/showcases/projects/menu")
        },
        dropdown: {
            openOnHover: true,
            drawers: onGoing(router),
            onDrawerClick: (drawer) =>  { handleShowcaseDrawer("projects", drawer, router) }
        }
    },
    {
        title: "Official Works", 
        onClick: () => {
            setTabBar("Portfolio")
            router.push("/showcases/works/menu")
        },
        dropdown: {
            openOnHover: true,
            drawers: proWorks(router),
            onDrawerClick: (drawer) => { handleShowcaseDrawer('works', drawer, router)}
        }
    },
    {
        title: "Return Home", 
        onClick: () => {
            setTabBar(false)
            router.push("/")
        },
    },
    ])
}

// Guest
export const guestTabs = (setTabBar, router) => { 
    return ([
        {
        title: "Concepts", 
        onClick: () => {
            setTabBar("Concepts")
            router.push("/concepts/list")
        },
        dropdown: {
            openOnHover: true,
            drawers: conceptsList,
            onDrawerClick: (drawer) => { handleDrawerClick('concepts', drawer, router,  setTabBar, "menu")}
        }
    },
    {
        title: "Languages", 
        onClick: () => {
            setTabBar("Languages")
            router.push("/languages/list")
        },
        dropdown: {
            openOnHover: true,
            drawers: languagesList,
            onDrawerClick: (drawer) => { handleDrawerClick('languages', drawer, router,  setTabBar, "menu")}
        }
    },
    {
        title: "Front End", 
        onClick: () => {
            setTabBar("Frameworks")
            router.push("/frameworks/list")
        },
        dropdown: {
            openOnHover: true,
            drawers: frameworksList,
            onDrawerClick: (drawer) => { handleDrawerClick('frameworks', drawer, router,  setTabBar, "menu")}
        }
    },
    {
        title: "Back End", 
    },
    {
        title: "Return to Portfolio Home", 
        onClick: () => {
            setTabBar(false)
            router.push("/")
        },
    },
    {
        title: "Account", 
        onClick: () => {
            setTabBar("Frameworks")
            router.push("/account/menu")
        },
        dropdown: {
            openOnHover: true,
            drawers: ["Sign In", "Sign Up"],
            onDrawerClick: (drawer) => { handleDrawerClick('account', drawer, router,  setTabBar, "menu")}
        }
    }
    ])
}

// User
export const userTabs = (setTabBar, router)  => {
    return([
        {
            title: "Concepts", 
            onClick: () => {
                setTabBar("Concepts")
                router.push("/concepts/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: conceptsList,
                onDrawerClick: (drawer) => { handleDrawerClick('concepts', drawer, router, "menu") }
            }
        },
        {
            title: "Languages", 
            onClick: () => {
                setTabBar("Languages")
                router.push("/languages/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: languagesList,
                onDrawerClick: (drawer) => { handleDrawerClick('languages', drawer, router, "menu") }
            }
        },
        {
            title: "Front End", 
            onClick: () => {
                setTabBar("Frameworks")
                router.push("/frameworks/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: frameworksList,
                onDrawerClick: (drawer) => { handleDrawerClick('frameworks', drawer, router, "menu") }
            }
        },
        {
            title: "Back End", 
        },
        {
            title: "Return to Portfolio Home", 
            onClick: () => {
                setTabBar(false)
                router.push("/")
            },
        },
        {
            title: "Account", 
            onClick: () => {
                setTabBar("Account")
                router.push("/account/menu")
            },
            dropdown: {
                openOnHover: true,
                drawers: ["Progress", "Lesson Plan", "Settings"],
                onDrawerClick: (drawer) => { handleDrawerClick('account', drawer, router, setTabBar, "menu") }
            }
        }
    ])
}

// Variables
export const basicsTabs = (setTabBar, router) => {
    return([
    {
        title: "Definitions",
        onClick: (() => router.push("/concepts/basics/definitions"))
    },
    {
        title: "Lessons",
        dropdown: {
            openOnHover: true,
            drawers: basicsLessons,
            onDrawerClick: (drawer) => { handleLessonTestLabDrawerClick("concepts", "basics", "lessons", drawer.toLowerCase(), router) }
        }
    },
    {
        title: "Tests",
        dropdown: {
            openOnHover: true,
            drawers: basicsTests
        }
    },
    {
        title: "Labs",
        dropdown: {
            openOnHover: true,
            drawers: ["Basics Mastery Lab",]
        }
    },
    {
        title: "Return Home",
        onClick: (() => router.push("/"))
    }
    ])
}



