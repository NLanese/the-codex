// AUTO-GENERATED units for Imperial Fists (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import imperial_fists_weapons from "../weapons/imperial_fists"

const imperial_fists_army = [
    {
        army: "imperial_fists",
        class: "characters",
        name: "Darnath Lysander",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 7,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            imperial_fists_weapons.fist_of_dorn,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...imperial_fists_weapons.fist_of_dorn, selected: true},
            ],
        },
        abilities: [
            { name: "Icon of Obstinacy", desc: "Each time an attack targets this model's unit, if the Strength characteristic of that attack is greater than or equal to the Toughness characteristic of that unit, subtract 1 from the Wound roll." },
            { name: "Rampart", desc: "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 2+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Terminator Assault Squad\n- Terminator Squad" },
            { name: "Inspiring Commander", desc: "‘If you include this model in your army, until the end of the battle, non-Character models in Terminator Assault Squad and Terminator Squad units from your army have an Objective Control characteristic of 2 while they are not Battle-shocked." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Captain","Imperium","Terminator","Faction: Adeptus Astartes","Faction: Imperial Fists","Darnath Lysander"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_fists",
        class: "characters",
        name: "Pedro Kantor",
        pts: 90,
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
            imperial_fists_weapons.fist_of_retribution,
        ],
        rangedWeapons: [
            imperial_fists_weapons.dorns_arrow,
        ],
        weapon_options: {
            slot1: [
                {...imperial_fists_weapons.dorns_arrow, selected: true},
            ],
            slot2: [
                {...imperial_fists_weapons.fist_of_retribution, selected: true},
            ],
        },
        abilities: [
            { name: "Oath of Rynn", desc: "Once per battle, at the start of either player’s Command phase, this model can use this ability. When it does, until the end of the turn, add 1 to the Attacks characteristic of weapons equipped by models in this model’s unit." },
            { name: "To the Last", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Company Heroes\n- Bladeguard Veteran Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
            { name: "Inspiring Commander", desc: "If you include this model in your army, until the end of the battle, non-Character models in Sternguard\nVeteran Squad units from your army have an Objective Control characteristic of 2 while they are not Battle-shocked." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Imperium","Chapter Master","Faction: Adeptus Astartes","Faction: Imperial Fists","Pedro Kantor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_fists",
        class: "characters",
        name: "Tor Garadon",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            imperial_fists_weapons.hand_of_defiance,
        ],
        rangedWeapons: [
            imperial_fists_weapons.artificer_grav_gun,
        ],
        weapon_options: {
            slot1: [
                {...imperial_fists_weapons.artificer_grav_gun, selected: true},
            ],
            slot2: [
                {...imperial_fists_weapons.hand_of_defiance, selected: true},
            ],
        },
        abilities: [
            { name: "Signum Array", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability." },
            { name: "Siege Captain", desc: "Each time this model makes an attack that targets a Monster, Vehicle, or Fortification unit, improve the Strength, Armour Penetration and Damage characteristics of that attack by 2." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Aggressor Squad\n- Eradicator Squad\n- Heavy Intercessor Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Captain","Gravis","Tor Garadon","Faction: Adeptus Astartes","Imperium","Faction: Imperial Fists"],
        pointOptions: [],
        transport: null,
    },
]

export default imperial_fists_army
