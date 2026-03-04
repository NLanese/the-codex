const evalu =  "/assets/project_images/warhammer/units/votann/eval.png"
const buri = "/assets/project_images/warhammer/units/votann/buri.png"
const champ = "/assets/project_images/warhammer/units/votann/champ.png"
const grim = "/assets/project_images/warhammer/units/votann/grim.png"
const iron = "/assets/project_images/warhammer/units/votann/iron.png"
const kahl = "/assets/project_images/warhammer/units/votann/kahl.png"
const mem = "/assets/project_images/warhammer/units/votann/mem.png"
const uthar = "/assets/project_images/warhammer/units/votann/uthar.png"

import votann_weapons from "../weapons/votann"



const votann_army = [

    // CHARACTERS // 

    {
        army: "votann",
        class: "character",
        name: "Arkanyst Evaluator",
        pts: 65,
        units: 1,
        img: evalu,
        leader: false,
        warlord: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.close_combat_weapons
        ],
        rangedWeapons: [
            votann_weapons.transmitter_inverter_half_charge,
            votann_weapons.transmitter_inverter_full_charge,
            votann_weapons.transmitter_inverter_over_charge,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.transmitter_inverter_half_charge, selected: true},
            ],
            slot2: [
                {...votann_weapons.transmitter_inverter_full_charge, selected: true},
            ],
            slot3: [
                {...votann_weapons.transmitter_inverter_over_charge, selected: true},
            ],
            slot4: [
                {...votann_weapons.close_combat_weapons, selected: true},
            ]
        }
    },
    {
        army: "votann",
        class: "character",
        name: "Brokhyr Iron-Master",
        pts: 105,
        units: 5,
        img: iron,
        leader: true,
        warlord: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.close_combat_weapons,
            votann_weapons.gravitron_hammer
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_bolt_pistol,
            votann_weapons.graviton_rifle,
            votann_weapons.las_beam_cutter
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.graviton_rifle, selected: true, name: "Brokhyr"},
            ],
            slot2: [
                {...votann_weapons.gravitron_hammer, selected: true, name: "Brokhyr"},
            ],
            slot3: [
                {...votann_weapons.las_beam_cutter, selected: true, name: "Ironkin Assistant"},
            ],
            slot4: [
                {...votann_weapons.close_combat_weapons, selected: true, name: "Ironkin Assistant"},
            ],
            slot5: [
                {...votann_weapons.autoch_pattern_bolt_pistol, selected: true, name: "E-Cog 1"},
            ],
            slot6: [
                {...votann_weapons.close_combat_weapons, selected: true, name: "E-Cog 1"},
            ],
        }
        
    },
    {
        army: "votann",
        class: "character",
        name: "Buri Aegnirssen",
        img: buri,
        pts: 95,
        units: 1,
        leader: false,
        warlord: true,
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
        units: 1,
        leader: true,
        warlord: false,
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
        unitS: 3,
        leader: true,
        warlord: true,
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
        units: 1,
        leader: true,
        warlord: true,
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
        units: 1,
        leader: true,
        warlord: true,
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
        units: 1,
        leader: true,
        warlord: false,
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
        units: 10,
        leader: false,
        warlord: false,
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

    // OTHER

    {
        army: "votann",
        class: "other",
        name: "Brokhyr Thunderkyn",
        img: grim,
        pts: 100,
        units: 3,
        leader: false,
        warlord: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false,
        },
        meleeWeapons: [
            votann_weapons.close_combat_weapons_THUNDERKYN,
        ],
        rangedWeapons: [
            votann_weapons.bolt_cannon,
            votann_weapons.graviton_blast_cannon,
            votann_weapons.sp_conversion_beamer
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.bolt_cannon, selected: true},
                {...votann_weapons.graviton_blast_cannon, selected: false},
                {...votann_weapons.sp_conversion_beamer, selected: false},
            ],
            slot2: [
                {...votann_weapons.close_combat_weapons_THUNDERKYN, selected: true},
            ]
        }
    },

    {
        army: "votann",
        class: "other",
        name: "Cthonian Beserks",
        img: grim,
        pts: 100,
        units: 5,
        leader: false,
        warlord: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false,
        },
        meleeWeapons: [
            votann_weapons.concussion_maul,
            votann_weapons.heavy_plasma_axe,
            votann_weapons.twin_concussion_gauntlet
        ],
        rangedWeapons: [
            votann_weapons.mole_grenade_launcher
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.heavy_plasma_axe, selected: true},
                {...votann_weapons.concussion_maul, selected: false},
                {...votann_weapons.twin_concussion_gauntlet, selected: false},
                {...votann_weapons.mole_grenade_launcher, selected: false},
            ],
        }
    },

    {
        army: "votann",
        class: "other",
        name: "Cthonian Earthshakers",
        img: grim,
        pts: 110,
        units: 2,
        leader: false,
        warlord: false,
        base_stats: {
            move: 4,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false,
        },
        meleeWeapons: [
            votann_weapons.plasma_picks
        ],
        rangedWeapons: [
            votann_weapons.breacher_ordnance,
            votann_weapons.tremor_shells,
            votann_weapons.autoch_pattern_bolt_pistol
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_bolt_pistol, selected: true},
            ],
            slot2: [
                {...votann_weapons.plasma_picks, selected: true},
            ],
            slot2: [
                {...votann_weapons.breacher_ordnance, selected: true},
                {...votann_weapons.tremor_shells, selected: false},
            ]
        }
    },

]


export default votann_army