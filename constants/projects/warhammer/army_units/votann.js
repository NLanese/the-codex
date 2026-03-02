const evalu =  "/assets/project_images/warhammer/units/votann/eval.png"
const buri = "/assets/project_images/warhammer/units/votann/buri.png"
const champ = "/assets/project_images/warhammer/units/votann/champ.png"
const grim = "/assets/project_images/warhammer/units/votann/grim.png"
const iron = "/assets/project_images/warhammer/units/votann/iron.png"
const kahl = "/assets/project_images/warhammer/units/votann/kahl.png"
const mem = "/assets/project_images/warhammer/units/votann/mem.png"
const uthar = "/assets/project_images/warhammer/units/votann/uthar.png"



const votann_army = [

    // CHARACTERS // 

    {
        army: "votann",
        class: "character",
        name: "Arkanyst Evaluator",
        pts: 65,
        img: evalu,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        
    },
    {
        army: "votann",
        class: "character",
        name: "Brokhyr Iron-Master",
        pts: 105,
        img: iron,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
    },
    {
        army: "votann",
        class: "character",
        name: "Buri Aegnirssen",
        img: buri,
        pts: 95,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4,
        },
    },
    {
        army: "votann",
        class: "character",
        name: "Einhyr Champion",
        img: champ,
        pts: 70,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false,
        },
    },
    {
        army: "votann",
        class: "character",
        name: "Grimnyr",
        img: grim,
        pts: 65,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4,
        },
    },
    {
        army: "votann",
        class: "character",
        name: "Kahl",
        img: kahl,
        pts: 65,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4,
        },
    },
    {
        army: "votann",
        class: "character",
        name: "Uthar the Destined",
        img: uthar,
        pts: 95,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4,
        },
    },
    {
        army: "votann",
        class: "character",
        name: "Memnyr",
        img: mem,
        pts: 45,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false,
        },
    },

    // BATTLELINE

    {
        army: "votann",
        class: "battleline",
        name: "Uthar the Destined",
        img: grim,
        pts: 100,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4,
        },
    },
]


export default votann_army