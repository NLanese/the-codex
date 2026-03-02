import weapon_abilities from "./_weapon_abilities"

const votann_weapons = {
    transmitter_inverter_half_charge: {
        name: "Transmitter Inverter - Half Charge",
        type: "ranged",
        range: 12,
        attacks: 3,
        b_save: 2,
        str: 8,
        AP: 1,
        dam: 1,
        abilities: [
            weapon_abilities.rapid_fire.ranks[1]
        ],
    },
    transmitter_inverter_full_charge: {
        name: "Transmitter Inverter - Full Charge",
        type: "ranged",
        range: 18,
        attacks: 3,
        b_save: 2,
        str: 8,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.rapid_fire.ranks[2], 
            weapon_abilities.hazardous
        ]
    },
    transmitter_inverter_over_charge: {
        name: "Transmitter Inverter - Overcharge",
        type: "ranged",
        range: 24,
        attacks: 3,
        b_save: 2,
        str: 8,
        AP: 3,
        dam: 3,
        abilities: [
            weapon_abilities.rapid_fire.ranks[3], 
            weapon_abilities.hazardous, 
            weapon_abilities.overcharge
        ]
    },
    autoch_pattern_bolt_pistol: {
        name: "Autoch Pattern Bolt Pistol",
        type: "ranged",
        range: 12,
        attacks: 1,
        b_save: 3,
        str: 4,
        AP: 0,
        dam: 1,
        abilities: []
    },
    graviton_rifle: {
        name: "Graviton Rifle",
        type: "ranged",
        range: 18,
        attacks: 3,
        b_save: 3,
        str: 5,
        AP: 1,
        dam: 3,
        abilities: [
            weapon_abilities.anti_monster.ranks[3],
            weapon_abilities.anti_vehicle.ranks[3]
        ]
    },
    las_beam_cutter: {
        name: "Las-Beam Cutter",
        type: "ranged",
        range: 6,
        attacks: 1,
        b_save: 4,
        str: 6,
        AP: 3,
        dam: 1,
        abilities: []
    },
    bolt_cannon: {
        name: "Bolt Cannon",
        type: "ranged",
        range: 36,
        attacks: 3,
        b_save: 4,
        str: 6,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.sustained_hits.ranks[2]
        ]
    },
    graviton_blast_cannon: {
        name: "Graviton Blast Cannon",
        type: "ranged",
        range: 24,
        attacks: 3,
        b_save: 4,
        str: 5,
        AP: 2,
        dam: 3,
        abilities: [
            weapon_abilities.anti_monster.ranks[3],
            weapon_abilities.anti_vehicle.ranks[3]
        ]
    },
    sp_conversion_beamer: {
        name: "SP Conversion Beamer",
        type: "ranged",
        range: 24,
        attacks: 2,
        b_save: 4,
        str: 7,
        AP: 2,
        dam: 3,
        abilities: [
            weapon_abilities.conversion,
            weapon_abilities.lethal_hits
        ]
    },


    close_combat_weapons: {
        name: "Close Combat Weapons",
        type: "melee",
        range: 0,
        attacks: 1,
        b_save: 4,
        str: 3,
        AP: 0,
        dam: 1,
        abilities: []
    },
    close_combat_weapons_THUNDERKYN: {
        name: "Close Combat Weapons",
        type: "melee",
        range: 0,
        attacks: 2,
        b_save: 4,
        str: 3,
        AP: 0,
        dam: 1,
        abilities: []
    },
    gravitron_hammer: {
        name: "Gravitron Hammer",
        type: "melee",
        range: 0,
        attacks: 3,
        b_save: 4,
        str: 9,
        AP: 1,
        dam: 3,
        abilities: [
            weapon_abilities.anti_monster.ranks[3],
            weapon_abilities.anti_vehicle.ranks[3]
        ]
    },
    concussion_gauntlet: {
        name: "Concussion Gauntlet",
        type: "melee",
        range: 0,
        attacks: 2,
        b_save: 3,
        str: 8,
        AP: 2,
        dam: 2,
        abilities: []
    }
}


export default votann_weapons