// AUTO-GENERATED weapons for Raven Guard (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import weapon_abilities from "./_weapon_abilities"

const raven_guard_weapons = {
    claws_of_severax: {
        name: "Claws of Severax",
        type: "melee",
        range: 0,
        attacks: 7,
        b_save: 2,
        str: 5,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.sustained_hits(2),
            weapon_abilities.twin_linked(),
        ],
    },
    the_ravens_talons: {
        name: "The Raven's Talons",
        type: "melee",
        range: 0,
        attacks: 7,
        b_save: 2,
        str: 5,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.precision(),
            weapon_abilities.twin_linked(),
        ],
    },
    blackout: {
        name: "Blackout",
        type: "ranged",
        range: 18,
        attacks: 2,
        b_save: 2,
        str: 5,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.pistol(),
            weapon_abilities.precision(),
        ],
    },
}

export default raven_guard_weapons
