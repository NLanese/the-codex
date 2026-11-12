const onGoing = (router) => [
    "Boardgame Master AI", 
    "BetBot",
    "CandyBox 3",
    {title: "Nightreign Build Calculator", onClick: () => router.push("/showcases/projects/nightreign"), manualOnClick: true},
    {title: "Warhammer 40k Army Tester", onClick: () => router.push("/showcases/projects/warhammer"), manualOnClick: true},
    {title: "Dungeon Dash", onClick: () => router.push("/showcases/projects/dungeondash"), manualOnClick: true},
    {title: "Food Business Group", onClick: () => router.push("https://foodbusinessgroup.vercel.app/"), manualOnClick: true}

]

const proWorks = (router) => [
    "Kidz-n-Motion",
    {title: "Kidz-n-Motion Website", onClick: () => router.push("https://kidz-n-motion.app/"), manualOnClick: true},
    "IEEE",
    "EventHub",
]


export {
    proWorks,
    onGoing
}