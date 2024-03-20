import { conceptsList, languagesList, frameworksList, basicsLessons } from "./lessonLists"

// Fires on specific drawer type clicks
function handleDrawerClick(type, drawer, router){
    router.replace(`/concepts/${drawer.toLowerCase()}/menu`)
}

// Guest
export const guestTabs = (setTabBar, router) => { 
    return ([
        {
        title: "Concepts", 
        onClick: () => {
            setTabBar("Concepts")
            router.replace("/concepts/list")
        },
        dropdown: {
            openOnHover: true,
            drawers: conceptsList,
            onDrawerClick: (drawer) => { handleDrawerClick('concepts', drawer, router) }
        }
    },
    {
        title: "Languages", 
        onClick: () => {
            setTabBar("Languages")
            router.replace("/languages/list")
        },
        dropdown: {
            openOnHover: true,
            drawers: languagesList,
            onDrawerClick: (drawer) => { handleDrawerClick('languages', drawer, router) }
        }
    },
    {
        title: "Front End", 
        onClick: () => {
            setTabBar("Frameworks")
            router.replace("/frameworks/list")
        },
        dropdown: {
            openOnHover: true,
            drawers: frameworksList,
            onDrawerClick: (drawer) => { handleDrawerClick('frameworks', drawer, router) }
        }
    },
    {
        title: "Back End", 
    },
    {
        title: "Account", 
        onClick: () => {
            setTabBar("Frameworks")
            router.replace("/account/menu")
        },
        dropdown: {
            openOnHover: true,
            drawers: ["Sign In", "Sign Up"],
            onDrawerClick: (drawer) => { handleDrawerClick('account', drawer, router) }
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
                router.replace("/concepts/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: conceptsList,
                onDrawerClick: (drawer) => router.replace(`/concepts/${drawer}/menu`)
            }
        },
        {
            title: "Languages", 
            onClick: () => {
                setTabBar("Languages")
                router.replace("/languages/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: languagesList,
                onDrawerClick: (drawer) => router.replace(`/languages/${drawer.title}/menu`)
            }
        },
        {
            title: "Front End", 
            onClick: () => {
                setTabBar("Frameworks")
                router.replace("/frameworks/list")
            },
            dropdown: {
                openOnHover: true,
                drawers: frameworksList,
                onDrawerClick: (drawer) => router.replace(`/frameworks/${drawer.title}/menu`)
            }
        },
        {
            title: "Back End", 
        },
        {
            title: "Account", 
            onClick: () => {
                setTabBar("Frameworks")
                router.replace("/account/menu")
            },
            dropdown: {
                openOnHover: true,
                drawers: ["Progress", "Lesson Plan", "Settings"],
                onDrawerClick: (drawer) => router.replace(`/frameworks/${drawer}`)
            }
        }
    ])
}

// Variables
export const basicsTabs = (setTabBar, router) => {
    return([
    {
        title: "Definitions",
        onClick: (() => router.replace("/concepts/basics/definitions"))
    },
    {
        title: "Lessons",
        dropdown: {
            openOnHover: true,
            drawers: basicsLessons
        }
    },
    {
        title: "Tests",
        dropdown: {
            openOnHover: true,
            drawers: ["Data Types", "Operators", "Functions Test",]
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
        title: "Return",
        onClick: (() => router.replace("/"))
    }
    ])
}