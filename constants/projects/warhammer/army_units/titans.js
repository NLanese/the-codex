// AUTO-GENERATED units for Titans (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import titans_weapons from "../weapons/titans"

const titans_army = [
    {
        army: "titans",
        class: "other",
        name: "Reaver Titan",
        pts: 2200,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 14,
            saving: 2,
            wounds: 60,
            leader: 6,
            control: 20,
            invuln: 5
        },
        meleeWeapons: [
            titans_weapons.reaver_power_fist_strike,
            titans_weapons.reaver_power_fist_sweep,
            titans_weapons.reaver_feet,
        ],
        rangedWeapons: [
            titans_weapons.reaver_gatling_blaster,
            titans_weapons.reaver_laser_blaster,
            titans_weapons.reaver_melta_cannon,
            titans_weapons.reaver_volcano_cannon,
            titans_weapons.reaver_apocalypse_launcher,
        ],
        weapon_options: {
            slot1: [
                {...titans_weapons.reaver_gatling_blaster, selected: true},
            ],
            slot2: [
                {...titans_weapons.reaver_laser_blaster, selected: true},
            ],
            slot3: [
                {...titans_weapons.reaver_melta_cannon, selected: true},
            ],
            slot4: [
                {...titans_weapons.reaver_volcano_cannon, selected: true},
            ],
            slot5: [
                {...titans_weapons.reaver_apocalypse_launcher, selected: true},
            ],
            slot6: [
                {...titans_weapons.reaver_power_fist_strike, selected: true},
            ],
            slot7: [
                {...titans_weapons.reaver_power_fist_sweep, selected: true},
            ],
            slot8: [
                {...titans_weapons.reaver_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-20 wounds remaining", desc: "While this model has 1-20 wounds remaining, subtract 10 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks only." },
            { name: "God-machine", desc: "This model is eligible to shoot and declare a charge in a turn in which it Fell Back." },
            { name: "Striding Colossus", desc: "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Reaver Titan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "titans",
        class: "other",
        name: "Warbringer Nemesis Titan",
        pts: 2600,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 14,
            saving: 2,
            wounds: 80,
            leader: 6,
            control: 20,
            invuln: 5
        },
        meleeWeapons: [
            titans_weapons.nemesis_feet,
        ],
        rangedWeapons: [
            titans_weapons.anvillus_defence_battery,
            titans_weapons.ardex_defensor_mauler,
            titans_weapons.nemesis_quake_cannon,
            titans_weapons.nemesis_volcano_cannon,
            titans_weapons.reaver_gatling_blaster,
            titans_weapons.reaver_laser_blaster,
            titans_weapons.reaver_melta_cannon,
            titans_weapons.reaver_volcano_cannon,
        ],
        weapon_options: {
            slot1: [
                {...titans_weapons.anvillus_defence_battery, selected: true},
            ],
            slot2: [
                {...titans_weapons.ardex_defensor_mauler, selected: true},
            ],
            slot3: [
                {...titans_weapons.nemesis_quake_cannon, selected: true},
            ],
            slot4: [
                {...titans_weapons.nemesis_volcano_cannon, selected: true},
            ],
            slot5: [
                {...titans_weapons.reaver_gatling_blaster, selected: true},
            ],
            slot6: [
                {...titans_weapons.reaver_laser_blaster, selected: true},
            ],
            slot7: [
                {...titans_weapons.reaver_melta_cannon, selected: true},
            ],
            slot8: [
                {...titans_weapons.reaver_volcano_cannon, selected: true},
            ],
            slot9: [
                {...titans_weapons.nemesis_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-26 wounds remaining", desc: "While this model has 1-26 wounds remaining, subtract 10 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks only." },
            { name: "Titanic Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly IMPERIUM model makes an attack that targets that enemy unit, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1." },
            { name: "Titanic Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly CHAOS model makes an attack that targets that enemy unit, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1." },
            { name: "Striding Colossus", desc: "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Warbringer Nemesis Titan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "titans",
        class: "other",
        name: "Warhound Titan",
        pts: 1100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 13,
            saving: 2,
            wounds: 40,
            leader: 6,
            control: 16,
            invuln: 5
        },
        meleeWeapons: [
            titans_weapons.warhound_feet,
        ],
        rangedWeapons: [
            titans_weapons.warhound_vulcan_mega_bolter,
            titans_weapons.warhound_inferno_gun,
            titans_weapons.warhound_plasma_blastgun_standard,
            titans_weapons.warhound_plasma_blastgun_supercharge,
            titans_weapons.warhound_turbo_laser_destructor,
        ],
        weapon_options: {
            slot1: [
                {...titans_weapons.warhound_vulcan_mega_bolter, selected: true},
            ],
            slot2: [
                {...titans_weapons.warhound_inferno_gun, selected: true},
            ],
            slot3: [
                {...titans_weapons.warhound_plasma_blastgun_standard, selected: true},
            ],
            slot4: [
                {...titans_weapons.warhound_plasma_blastgun_supercharge, selected: true},
            ],
            slot5: [
                {...titans_weapons.warhound_turbo_laser_destructor, selected: true},
            ],
            slot6: [
                {...titans_weapons.warhound_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Flank Speed", desc: "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 8\" to the Move characteristic of this model." },
            { name: "Damaged: 1-13 wounds remaining", desc: "While this model has 1-13 wounds remaining, subtract 8 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks only." },
            { name: "Striding Colossus", desc: "Each time you target this model with a Stratagem, you must spend twice that Stratagem’s stated CP cost to do so." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Warhound Titan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "titans",
        class: "other",
        name: "Warlord Titan",
        pts: 3500,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 16,
            saving: 2,
            wounds: 100,
            leader: 6,
            control: 30,
            invuln: 5
        },
        meleeWeapons: [
            titans_weapons.arioch_power_claw_strike,
            titans_weapons.arioch_power_claw_sweep,
            titans_weapons.warlord_feet,
        ],
        rangedWeapons: [
            titans_weapons.arioch_power_claw,
            titans_weapons.belicosa_volcano_cannon,
            titans_weapons.macro_gatling_blaster,
            titans_weapons.mori_quake_cannon,
            titans_weapons.sunfury_plasma_annihilator_standard,
            titans_weapons.sunfury_plasma_annihilator_supercharge,
            titans_weapons.apocalypse_launcher,
            titans_weapons.laser_blaster,
            titans_weapons.ardex_defensor_lascannon,
            titans_weapons.ardex_defensor_mauler,
        ],
        weapon_options: {
            slot1: [
                {...titans_weapons.arioch_power_claw, selected: true},
            ],
            slot2: [
                {...titans_weapons.belicosa_volcano_cannon, selected: true},
            ],
            slot3: [
                {...titans_weapons.macro_gatling_blaster, selected: true},
            ],
            slot4: [
                {...titans_weapons.mori_quake_cannon, selected: true},
            ],
            slot5: [
                {...titans_weapons.sunfury_plasma_annihilator_standard, selected: true},
            ],
            slot6: [
                {...titans_weapons.sunfury_plasma_annihilator_supercharge, selected: true},
            ],
            slot7: [
                {...titans_weapons.apocalypse_launcher, selected: true},
            ],
            slot8: [
                {...titans_weapons.laser_blaster, selected: true},
            ],
            slot9: [
                {...titans_weapons.ardex_defensor_lascannon, selected: true},
            ],
            slot10: [
                {...titans_weapons.ardex_defensor_mauler, selected: true},
            ],
            slot11: [
                {...titans_weapons.arioch_power_claw_strike, selected: true},
            ],
            slot12: [
                {...titans_weapons.arioch_power_claw_sweep, selected: true},
            ],
            slot13: [
                {...titans_weapons.warlord_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks only." },
            { name: "Damaged: 1-33 wounds remaining", desc: "While this model has 1-33 wounds remaining, subtract 15 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Wrath of the Omnissiah", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That unit must take a Battle-shock test." },
            { name: "Striding Colossus", desc: "Each time you target this model with a Stratagem, you must spend four times that Stratagem’s stated CP cost to do so." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Warlord Titan"],
        pointOptions: [],
        transport: null,
    },
]

export default titans_army
