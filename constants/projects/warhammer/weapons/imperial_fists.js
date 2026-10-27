// AUTO-GENERATED weapons for Imperial Fists (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import weapon_abilities from "./_weapon_abilities"

const imperial_fists_weapons = {
    fist_of_dorn: {
        name: "Fist of Dorn",
        type: "melee",
        range: 0,
        attacks: 5,
        b_save: 2,
        str: 10,
        AP: 3,
        dam: 3,
        abilities: [
            weapon_abilities.devastating_wounds(),
        ],
    },
    fist_of_retribution: {
        name: "Fist of Retribution",
        type: "melee",
        range: 0,
        attacks: 5,
        b_save: 2,
        str: 8,
        AP: 3,
        dam: 3,
        abilities: [],
    },
    dorns_arrow: {
        name: "Dorn's Arrow",
        type: "ranged",
        range: 24,
        attacks: 2,
        b_save: 2,
        str: 5,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.rapid_fire(2),
            weapon_abilities.sustained_hits(1),
        ],
    },
    hand_of_defiance: {
        name: "Hand of Defiance",
        type: "melee",
        range: 0,
        attacks: 5,
        b_save: 2,
        str: 12,
        AP: 2,
        dam: 2,
        abilities: [],
    },
    artificer_grav_gun: {
        name: "Artificer Grav Gun",
        type: "ranged",
        range: 18,
        attacks: 2,
        b_save: 2,
        str: 5,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.anti_vehicle(2),
        ],
    },
}

export default imperial_fists_weapons
