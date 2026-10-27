// AUTO-GENERATED units for Salamanders (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import salamanders_weapons from "../weapons/salamanders"

const salamanders_army = [
    {
        army: "salamanders",
        class: "characters",
        name: "Adrax Agatone",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            salamanders_weapons.malleus_noctum,
        ],
        rangedWeapons: [
            salamanders_weapons.drakkis,
        ],
        weapon_options: {
            slot1: [
                {...salamanders_weapons.drakkis, selected: true},
            ],
            slot2: [
                {...salamanders_weapons.malleus_noctum, selected: true},
            ],
        },
        abilities: [
            { name: "Unto the Anvil", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Wound roll." },
            { name: "Lord of the Pyroclasts", desc: "While an enemy unit is within Engagement Range of this model, halve the Objective Control characteristic of models in that enemy unit" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Company Heroes\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Captain","Adrax Agatone","Faction: Adeptus Astartes","Faction: Salamanders","Imperium","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "salamanders",
        class: "characters",
        name: "Vulkan He'stan",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            salamanders_weapons.spear_of_vulkan,
        ],
        rangedWeapons: [
            salamanders_weapons.gauntlet_of_the_forge,
        ],
        weapon_options: {
            slot1: [
                {...salamanders_weapons.gauntlet_of_the_forge, selected: true},
            ],
            slot2: [
                {...salamanders_weapons.spear_of_vulkan, selected: true},
            ],
        },
        abilities: [
            { name: "Forgefather", desc: "In your Shooting phase, select one enemy unit within 24\" of and visible to this model. Until the end of the phase, each time a friendly Adeptus Astartes model makes a ranged attack with a Torrent or Melta weapon that targets that enemy unit, you can re-roll the Wound roll" },
            { name: "Seeker of the Unfound", desc: "The first time this model is set up on the battlefield, select one objective marker on the battlefield. While this model is within range of that objective marker, it has an Objective Control characteristic of 10, a Leadership characteristic of 5+ and the Feel No Pain 4+ ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Company Heroes\n- Infernus Squad\n- Tactical Squad" },
            { name: "Inspiring Commander", desc: "If you include this model in your army, until the end of the battle, non-Character models in Infernus Squad units from your army have an Objective Control characteristic of 2 while they are not Battle-shocked." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Captain","Imperium","Grenades","Vulkan He'stan","Faction: Adeptus Astartes","Faction: Salamanders","Tacticus"],
        pointOptions: [],
        transport: null,
    },
]

export default salamanders_army
