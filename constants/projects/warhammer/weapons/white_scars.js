// AUTO-GENERATED weapons for White Scars (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import weapon_abilities from "./_weapon_abilities"

const white_scars_weapons = {
    moonfang: {
        name: "Moonfang",
        type: "melee",
        range: 0,
        attacks: 6,
        b_save: 2,
        str: 5,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.devastating_wounds(),
            weapon_abilities.precision(),
        ],
    },
    stormtooth: {
        name: "Stormtooth",
        type: "melee",
        range: 0,
        attacks: 6,
        b_save: 2,
        str: 6,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.lance(),
            weapon_abilities.anti_monster(4),
            weapon_abilities.anti_vehicle(4),
        ],
    },
    power_sword: {
        name: "Power Sword",
        type: "melee",
        range: 0,
        attacks: 8,
        b_save: 2,
        str: 5,
        AP: 2,
        dam: 1,
        abilities: [],
    },
    onslaught_gatling_cannon: {
        name: "Onslaught Gatling Cannon",
        type: "ranged",
        range: 24,
        attacks: 8,
        b_save: 2,
        str: 5,
        AP: 0,
        dam: 1,
        abilities: [
            weapon_abilities.devastating_wounds(),
        ],
    },
}

export default white_scars_weapons
