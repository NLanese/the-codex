import eval from "../../../../public/assets/project_images/warhammer/units/votann/eval.png"
import buri from "../../../../public/assets/project_images/warhammer/units/votann/buri.png"
import champ from "../../../../public/assets/project_images/warhammer/units/votann/champ.png"
import grim from "../../../../public/assets/project_images/warhammer/units/votann/grim.png"
import iron from "../../../../public/assets/project_images/warhammer/units/votann/iron.png"
import kahl from "../../../../public/assets/project_images/warhammer/units/votann/kahl.png"
import mem from "../../../../public/assets/project_images/warhammer/units/votann/mem.png"
import uthar from "../../../../public/assets/project_images/warhammer/units/votann/uthar.png"



const votann_army = [

    // CHARACTERS // 

    {
        army: "votann",
        class: "character",
        name: "Arkanyst Evaluator",
        img: eval,
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