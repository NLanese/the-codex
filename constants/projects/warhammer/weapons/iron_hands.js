// AUTO-GENERATED weapons for Iron Hands (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import weapon_abilities from "./_weapon_abilities"

const iron_hands_weapons = {
    axiom_strike: {
        name: "Axiom - Strike",
        type: "melee",
        range: 0,
        attacks: 5,
        b_save: 2,
        str: 8,
        AP: 2,
        dam: 2,
        abilities: [],
    },
    axiom_sweep: {
        name: "Axiom - Sweep",
        type: "melee",
        range: 0,
        attacks: 10,
        b_save: 2,
        str: 5,
        AP: 2,
        dam: 1,
        abilities: [],
    },
    harrowhand: {
        name: "Harrowhand",
        type: "melee",
        range: 0,
        attacks: 6,
        b_save: 3,
        str: 7,
        AP: 2,
        dam: 2,
        abilities: [],
    },
    medusan_manipuli: {
        name: "Medusan Manipuli",
        type: "melee",
        range: 0,
        attacks: 2,
        b_save: 3,
        str: 8,
        AP: 2,
        dam: 3,
        abilities: [
            weapon_abilities.extra_attacks(),
        ],
    },
    gorgons_wrath: {
        name: "Gorgon's Wrath",
        type: "ranged",
        range: 36,
        attacks: 3,
        b_save: 2,
        str: 5,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.sustained_hits(2),
        ],
    },
}

export default iron_hands_weapons
