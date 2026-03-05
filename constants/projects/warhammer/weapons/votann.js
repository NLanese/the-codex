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
            weapon_abilities.rapid_fire(1),
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
            weapon_abilities.rapid_fire(2),
            weapon_abilities.hazardous()
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
            weapon_abilities.rapid_fire(3),
            weapon_abilities.hazardous(), 
            weapon_abilities.overcharge()
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
            weapon_abilities.anti_monster(3),
            weapon_abilities.anti_vehicle(3)
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
            weapon_abilities.sustained_hits(2)
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
            weapon_abilities.anti_monster(3),
            weapon_abilities.anti_vehicle(3)
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
            weapon_abilities.conversion(),
            weapon_abilities.lethal_hits()
        ]
    },
    mole_grenade_launcher: {
        name: "Mole Grenade Launcher",
        type: "ranged",
        range: 18,
        attacks: 'D6',
        b_save: 5,
        str: 5,
        AP: 1,
        dam: 1,
        abilities: [
            weapon_abilities.blast(),
            weapon_abilities.indirect_fire()
        ]
    },
    breacher_ordnance: {
        name: "Breacher Ordnance",
        type: "ranged",
        range: 24,
        attacks: 'D6 + 1',
        b_save: 5,
        str: 10,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.blast(),
            weapon_abilities.indirect_fire(),
            weapon_abilities.heavy()
        ]
    },
    tremor_shells: {
        name: "Tremor Shells",
        type: "ranged",
        range: 36,
        attacks: 'D6 + 4',
        b_save: 5,
        str: 6,
        AP: 1,
        dam: 1,
        abilities: [
            weapon_abilities.blast(),
            weapon_abilities.indirect_fire(),
            weapon_abilities.heavy()
        ]
    },
    eta_carn_plasma_gun: {
        name: "EtaCarn Plasma Gun",
        type: "ranged",
        range: 24,
        attacks: 1,
        b_save: 3,
        str: 7,
        AP: 3,
        dam: 2,
        abilities: [
            weapon_abilities.rapid_fire(1)
        ]
    },
    exoarmor_grenade_launcher: {
        name: "Exoarmor Grenade Launcher",
        type: "ranged",
        range: 24,
        attacks: "D3",
        b_save: 3,
        str: 3,
        AP: 0,
        dam: 1,
        abilities: [
            weapon_abilities.blast()
        ]
    },
    volkanite_disintegrator: {
        name: "Volkanite Disintegrator",
        type: "ranged",
        range: 24,
        attacks: 3,
        b_save: 3,
        str: 5,
        AP: 0,
        dam: 1,
        abilities: [
            weapon_abilities.devastating_wounds()
        ]
    },
    cyclic_ion_cannon: {
        name: "Cyclic Ion Cannon",
        type: "ranged",
        range: 24,
        attacks: "D6 + 2",
        b_save: 4,
        str: 7,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.blast()
        ]
    },
    heavy_magna_rail_cannon: {
        name: "Heavy Magna Rail Cannon",
        type: "ranged",
        range: 30,
        attacks: "2",
        b_save: 4,
        str: 18,
        AP: 4,
        dam: "D6+4",
        abilities: [
            weapon_abilities.devastating_wounds(),
            weapon_abilities.heavy()
        ]
    },
    hekaton_warhead: {
        name: "Hekaton Warhead",
        type: "ranged",
        range: 36,
        attacks: "D6 + 3",
        b_save: 4,
        str: 7,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.blast(),
            weapon_abilities.heavy()
        ]
    },
    matr_autocannon: {
        name: "MATR Auto Cannon",
        type: "ranged",
        range: 24,
        attacks: 6,
        b_save: 4,
        str: 7,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.sustained_hits(1),
            weapon_abilities.heavy()
        ]
    },
    sp_heavy_conversion_beamer: {
        name: "SP Heavy Conversion Beamer",
        type: "ranged",
        range: 24,
        attacks: 4,
        b_save: 4,
        str: 10,
        AP: 2,
        dam: 4,
        abilities: [
            weapon_abilities.conversion(),
            weapon_abilities.lethal_hits()
        ]
    },
    twin_bolt_cannon: {
        name: "Twin Bolt Cannon",
        type: "ranged",
        range: 36,
        attacks: 3,
        b_save: 4,
        str: 6,
        AP: 1,
        dam: 2,
        abilities: [
            weapon_abilities.sustained_hits(2),
            weapon_abilities.twin_linked()
        ]
    },
    twin_ion_beamer: {
        name: "Twin Ion Beamerr",
        type: "ranged",
        range: 18,
        attacks: 'D3+1',
        b_save: 4,
        str: 8,
        AP: 2,
        dam: 1,
        abilities: [
            weapon_abilities.blast(),
            weapon_abilities.twin_linked()
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
            weapon_abilities.anti_monster(3),
            weapon_abilities.anti_vehicle(3)
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
    },
    twin_concussion_gauntlet: {
        name: "Twin Concussion Gauntlet",
        type: "melee",
        range: 0,
        attacks: 4,
        b_save: 4,
        str: 9,
        AP: 2,
        dam: 2,
        abilities: [
            weapon_abilities.twin_linked()
        ]
    },
    concussion_maul: {
        name: "Concussion Maul",
        type: "melee",
        range: 0,
        attacks: 3,
        b_save: 4,
        str: 5,
        AP: 2,
        dam: 3,
        abilities: [
            weapon_abilities.anti_monster(3),
            weapon_abilities.anti_vehicle(3)
        ]
    },
    heavy_plasma_axe: {
        name: "Heavy Plasma Axe",
        type: "melee",
        range: 0,
        attacks: 3,
        b_save: 4,
        str: 7,
        AP: 2,
        dam: 3,
        abilities: []
    },
    plasma_picks: {
        name: "Plasma Picks",
        type: "melee",
        range: 0,
        attacks: 4,
        b_save: 3,
        str: 5,
        AP: 2,
        dam:1,
        abilities: []
    },
    armored_wheels: {
        name: "Armored Wheels",
        type: "melee",
        range: 0,
        attacks: 6,
        b_save: 4,
        str: 8,
        AP: 0,
        dam:1,
        abilities: []
    },
    
}


export default votann_weapons