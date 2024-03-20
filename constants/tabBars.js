import { conceptsList, languagesList, frameworksList, basicsLessons } from "./lessonLists"

// Fires on specific drawer type clicks
function handleDrawerClick(type, drawer, router, setTabBar){
    console.log("Routing to... " + ` /concepts/${drawer.toLowerCase()}/menu`)
    console.log(router)
    router.replace(`/concepts/${drawer.toLowerCase()}/menu`)
    setTabBar(false)
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
            onDrawerClick: (drawer) => { handleDrawerClick('concepts', drawer, router, setTabBar) }
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
            onDrawerClick: (drawer) => { handleDrawerClick('languages', drawer, router, setTabBar) }
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
            onDrawerClick: (drawer) => { handleDrawerClick('frameworks', drawer, router, setTabBar) }
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
            onDrawerClick: (drawer) => { handleDrawerClick('account', drawer, router, setTabBar) }
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
                onDrawerClick: (drawer) => { handleDrawerClick('concepts', drawer, router, setTabBar) }
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
                onDrawerClick: (drawer) => { handleDrawerClick('languages', drawer, router, setTabBar) }
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
                onDrawerClick: (drawer) => { handleDrawerClick('frameworks', drawer, router, setTabBar) }
            }
        },
        {
            title: "Back End", 
        },
        {
            title: "Account", 
            onClick: () => {
                setTabBar("Account")
                router.replace("/account/menu")
            },
            dropdown: {
                openOnHover: true,
                drawers: ["Progress", "Lesson Plan", "Settings"],
                onDrawerClick: (drawer) => { handleDrawerClick('account', drawer, router, setTabBar) }
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