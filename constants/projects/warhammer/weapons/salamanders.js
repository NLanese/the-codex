// AUTO-GENERATED weapons for Salamanders (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import weapon_abilities from "./_weapon_abilities"

const salamanders_weapons = {
    malleus_noctum: {
        name: "Malleus Noctum",
        type: "melee",
        range: 0,
        attacks: 5,
        b_save: 2,
        str: 10,
        AP: 2,
        dam: 3,
        abilities: [],
    },
    drakkis: {
        name: "Drakkis",
        type: "ranged",
        range: 12,
        attacks: "D6+3",
        b_save: "N/A",
        str: 4,
        AP: 1,
        dam: 1,
        abilities: [
            weapon_abilities.ignores_cover(),
            weapon_abilities.pistol(),
            weapon_abilities.torrent(),
        ],
    },
    spear_of_vulkan: {
        name: "Spear of Vulkan",
        type: "melee",
        range: 0,
        attacks: 6,
        b_save: 2,
        str: 6,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.devastating_wounds(),
        ],
    },
    gauntlet_of_the_forge: {
        name: "Gauntlet of the Forge",
        type: "ranged",
        range: 12,
        attacks: "D6+3",
        b_save: "N/A",
        str: 6,
        AP: 1,
        dam: 1,
        abilities: [
            weapon_abilities.ignores_cover(),
            weapon_abilities.pistol(),
            weapon_abilities.torrent(),
        ],
    },
}

export default salamanders_weapons
