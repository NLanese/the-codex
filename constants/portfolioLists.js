const onGoing = (router) => [
    "Boardgame Master AI", 
    "BetBot",
    {title: "Ostrich Component Library", onClick: () => router.push("/showcases/ostrich-components/showcase"), manualOnClick: true},
    "CandyBox 3",
    {title: "Nightreign Build Calculator", onClick: () => router.push("/showcases/projects/nightreign"), manualOnClick: true},
    {title: "Warhammer 40k Army Tester", onClick: () => router.push("/showcases/projects/warhammer"), manualOnClick: true}

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