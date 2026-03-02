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
        ]
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
            weapon_abilities.rapid_fire.ranks[2], weapon_abilities.hazardous
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
            weapon_abilities.rapid_fire.ranks[3], weapon_abilities.hazardous
        ]
    }
}