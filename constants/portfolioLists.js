const onGoing = (router) => [
    "Boardgame Master AI", 
    "BetBot",
    {title: "Ostrich Component Library", onClick: () => router.push("/showcases/ostrich-components/showcase"), manualOnClick: true},
    "CandyBox 3"
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