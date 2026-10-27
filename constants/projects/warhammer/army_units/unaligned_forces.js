// AUTO-GENERATED units for Unaligned Forces (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import unaligned_forces_weapons from "../weapons/unaligned_forces"

const unaligned_forces_army = [
    {
        army: "unaligned_forces",
        class: "other",
        name: "Aegis Defence Line with Weapon Emplacement [Legends]",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 2,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.quad_gun,
            unaligned_forces_weapons.icarus_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.quad_gun, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.icarus_lascannon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Faction: Unaligned Forces","Fortification","Aegis Defence Line with Weapon Emplacement"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "characters",
        name: "Ambull [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 8,
            saving: 3,
            wounds: 8,
            leader: 8,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            unaligned_forces_weapons.enormous_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.enormous_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Frenzy", desc: "Each time an enemy unit is selected to shoot or fight, after it has finished making its attacks, if one or more of those attacks targeted this model and this model is not destroyed, this model can fight as if it were the Fight phase" },
            { name: "Borewyrm Infestation", desc: "Twice per battle, at the end of your opponent’s turn, if this model is not within Engagement Range of one or more enemy units, you can remove this model from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that\nis more than 9\" horizontally away from all enemy models. If the battle ends and this unit is not on the battlefield, it is destroyed. \n\nDesigner’s Note: Place two Borewyrm Infestation tokens next to this model, removing one each time this ability has been used." },
        ],
        keywords: ["Faction: Unaligned Forces","Allied Units","Monster","Character","Ambull"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Bastion [Legends]",
        pts: 275,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.icarus_lascannon,
            unaligned_forces_weapons.quad_gun,
            unaligned_forces_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.icarus_lascannon, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.quad_gun, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.heavy_bolter, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Faction: Unaligned Forces","Fortification","Towering","Vehicle","Transport","Bastion"],
        pointOptions: [],
        transport: "This FORTIFICATION has a transport capacity of 15 INFANTRY models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-CHARACTER models with a Wounds characteristic of 4 or more.",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Breaching Robot",
        pts: 35,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 3,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            unaligned_forces_weapons.cutting_blade,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.cutting_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Limited Loadout", desc: "This model cannot attempt to operate Hatchways and cannot perform Tactical Manoeuvres." },
            { name: "Assault Robot", desc: "In the Deploy Armies step, when setting up a unit from your army within an Entry Zone, you can set this model up alongside that unit as if it was part of it, using the same Entry Zone." },
            { name: "Bomb Kit", desc: "When the bearer is destroyed (other than through triggering its bomb, as described below), roll one D6 before removing it from play: on a 6 it explodes, and each other unit within 3\" of and visible to the bearer suffers 1 mortal wound.\n\nIn your Command phase, the bearer can trigger its bombs. If it does:\n- Open each Hatchway that is within 3\" of the bearer. Your opponent cannot attempt to prevent those Hatchways from opening, and those Hatchways cannot be closed again.\n- Roll one D6 for each other unit within 3\" of and visible to the bearer: on a 2+, that unit suffers 1 mortal wound. The bearer is then destroyed." },
            { name: "Cutting Gear", desc: "Each time the bearer ends a Normal move, you can open one Hatchway that is within 1\" of it. Your opponent cannot attempt to prevent that Hatchway from opening." },
        ],
        keywords: ["Vehicle","Faction: Unaligned Forces","Allied Units","Breaching Robot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Castellum Stronghold [Legends]",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 50,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.castellum_battle_cannon,
            unaligned_forces_weapons.whirlwind_castellan_launcher,
            unaligned_forces_weapons.castellum_icarus_quad_lascannon,
            unaligned_forces_weapons.multi_melta,
            unaligned_forces_weapons.twin_lascannon,
            unaligned_forces_weapons.twin_heavy_flamer,
            unaligned_forces_weapons.twin_heavy_bolter,
            unaligned_forces_weapons.castellum_air_defence_missiles,
            unaligned_forces_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.castellum_battle_cannon, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.whirlwind_castellan_launcher, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.castellum_icarus_quad_lascannon, selected: true},
            ],
            slot4: [
                {...unaligned_forces_weapons.multi_melta, selected: true},
            ],
            slot5: [
                {...unaligned_forces_weapons.twin_lascannon, selected: true},
            ],
            slot6: [
                {...unaligned_forces_weapons.twin_heavy_flamer, selected: true},
            ],
            slot7: [
                {...unaligned_forces_weapons.twin_heavy_bolter, selected: true},
            ],
            slot8: [
                {...unaligned_forces_weapons.castellum_air_defence_missiles, selected: true},
            ],
            slot9: [
                {...unaligned_forces_weapons.twin_assault_cannon, selected: true},
            ],
        },
        abilities: [
            { name: "Stronghold", desc: "Friendly INFANTRY models can be set up or end any type of move on top of the roof section of this FORTIFICATION. Any friendly model can be set up or end any type of move on the ramp or platform section of this FORTIFICATION." },
            { name: "Damaged: 1-15 Wounds Remaining", desc: "While this model has 1-15 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Castellum Stronghold","Fortification","Titanic","Vehicle","Transport","Faction: Unaligned Forces"],
        pointOptions: [],
        transport: "This FORTIFICATION has a transport capacity of 60 INFANTRY models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-CHARACTER models with a Wounds characteristic of 4 or more.",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Firestorm Redoubt [Legends]",
        pts: 260,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.icarus_lascannon,
            unaligned_forces_weapons.quad_gun,
            unaligned_forces_weapons.battle_cannon,
            unaligned_forces_weapons.punisher_gatling_cannon,
            unaligned_forces_weapons.quad_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.icarus_lascannon, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.quad_gun, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.battle_cannon, selected: true},
            ],
            slot4: [
                {...unaligned_forces_weapons.punisher_gatling_cannon, selected: true},
            ],
            slot5: [
                {...unaligned_forces_weapons.quad_lascannon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Transport","Vehicle","Wall of Martyrs","Firestorm Redoubt"],
        pointOptions: [],
        transport: "This Fortification has a transport capacity of 15 Infantry models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-Character models with a Wounds characteristic of 4 or more",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Fortress of Redemption [Legends]",
        pts: 480,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 30,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.redemptor_lascannons,
            unaligned_forces_weapons.redemptor_missile_silo_superfrag,
            unaligned_forces_weapons.redemptor_missile_silo_superkrak,
            unaligned_forces_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.redemptor_lascannons, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.redemptor_missile_silo_superfrag, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.redemptor_missile_silo_superkrak, selected: true},
            ],
            slot4: [
                {...unaligned_forces_weapons.heavy_bolter, selected: true},
            ],
        },
        abilities: [
            { name: "Vantage Point", desc: "While a model is on top of the tower roof of this FORTIFICATION, improve the Armour Penetration characteristic of ranged weapons equipped by that model by 1." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Transport","Titanic","Vehicle","Towering","Fortress of Redemption"],
        pointOptions: [],
        transport: "This FORTIFICATION has a transport capacity of 20 INFANTRY models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-CHARACTER models with a Wounds characteristic of 4 or more.",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Guardian Drone [Legends]",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            unaligned_forces_weapons.manipulator_limbs,
        ],
        rangedWeapons: [
            unaligned_forces_weapons.destroyer_pulse,
            unaligned_forces_weapons.guardian_salvo_launchers,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.destroyer_pulse, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.guardian_salvo_launchers, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.manipulator_limbs, selected: true},
            ],
        },
        abilities: [
            { name: "Drone Commander (Aura)", desc: "While a friendly **Spindle Drones** unit is within 6\" of this model, each time a model in that unit makes an attack, add 1 to the Hit roll." },
        ],
        keywords: ["Faction: Unaligned Forces","Allied Units","Monster","Guardian Drone"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Imperial Fortress Walls [Legends]",
        pts: null,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 14,
            saving: 2,
            wounds: 80,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.twin_long_barrelled_autocannon,
            unaligned_forces_weapons.twin_heavy_bolter,
            unaligned_forces_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.twin_long_barrelled_autocannon, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.twin_lascannon, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-30 Wounds Remaining", desc: "While this model has 1-30 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Fortress", desc: "When this FORTIFICATION is set up, all parts of it must be set up in contact with another part." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Titanic","Vehicle","Towering","Transport","Imperial Fortress Walls"],
        pointOptions: [],
        transport: "This FORTIFICATION has a transport capacity of 65 INFANTRY models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-CHARACTER models with a Wounds characteristic of 4 or more.",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Macro-cannon Aquila Strongpoint [Legends]",
        pts: 550,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 30,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.aquila_macro_cannon,
            unaligned_forces_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.aquila_macro_cannon, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.heavy_bolter, selected: true},
            ],
        },
        abilities: [
            { name: "Tremor Quake", desc: "In your Shooting phase, just after selecting a target for this model’s Aquila macro-cannon, the target unit and every other enemy INFANTRY unit within 3\" of that unit must take a Battle-shock test." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Titanic","Vehicle","Transport","Wall of Martyrs","Macro-cannon Aquila Strongpoint"],
        pointOptions: [],
        transport: "This FORTIFICATION has a transport capacity of 30 INFANTRY models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-CHARACTER models with a Wounds characteristic of 4 or more.",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Plasma Obliterator [Legends]",
        pts: 225,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.plasma_obliterator_standard,
            unaligned_forces_weapons.plasma_obliterator_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.plasma_obliterator_standard, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.plasma_obliterator_supercharge, selected: true},
            ],
        },
        abilities: [
            { name: "Emergency Plasma Vents", desc: "Each time this FORTIFICATION suffers a mortal wound as the result of a failed Hazardous test, roll one D6: on a 4+, that wound is not lost." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Transport","Vehicle","Towering","Plasma Obliterator"],
        pointOptions: [],
        transport: "This FORTIFICATION has a transport capacity of 20 INFANTRY models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-CHARACTER models with a Wounds characteristic of 4 or more.",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Primaris Redoubt [Legends]",
        pts: 220,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 3,
            wounds: 18,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.primaris_redoubt_turbo_laser_destructor,
            unaligned_forces_weapons.primaris_air_defence_missiles,
            unaligned_forces_weapons.primaris_icarus_lascannon,
            unaligned_forces_weapons.primaris_icarus_quad_lascannon,
            unaligned_forces_weapons.primaris_quad_gun,
            unaligned_forces_weapons.primaris_castellan_launcher,
            unaligned_forces_weapons.primaris_vengeance_launcher,
            unaligned_forces_weapons.heavy_bolter,
            unaligned_forces_weapons.battle_cannon,
            unaligned_forces_weapons.multi_melta,
            unaligned_forces_weapons.twin_lascannon,
            unaligned_forces_weapons.twin_heavy_bolter,
            unaligned_forces_weapons.twin_heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.primaris_redoubt_turbo_laser_destructor, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.primaris_air_defence_missiles, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.primaris_icarus_lascannon, selected: true},
            ],
            slot4: [
                {...unaligned_forces_weapons.primaris_icarus_quad_lascannon, selected: true},
            ],
            slot5: [
                {...unaligned_forces_weapons.primaris_quad_gun, selected: true},
            ],
            slot6: [
                {...unaligned_forces_weapons.primaris_castellan_launcher, selected: true},
            ],
            slot7: [
                {...unaligned_forces_weapons.primaris_vengeance_launcher, selected: true},
            ],
            slot8: [
                {...unaligned_forces_weapons.heavy_bolter, selected: true},
            ],
            slot9: [
                {...unaligned_forces_weapons.battle_cannon, selected: true},
            ],
            slot10: [
                {...unaligned_forces_weapons.multi_melta, selected: true},
            ],
            slot11: [
                {...unaligned_forces_weapons.twin_lascannon, selected: true},
            ],
            slot12: [
                {...unaligned_forces_weapons.twin_heavy_bolter, selected: true},
            ],
            slot13: [
                {...unaligned_forces_weapons.twin_heavy_flamer, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Vehicle","Primaris Redoubt"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Sentry Gun",
        pts: 30,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 4,
            saving: 4,
            wounds: 3,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.twin_heavy_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.twin_heavy_bolter_2, selected: true},
            ],
        },
        abilities: [
            { name: "Defensive Emplacement", desc: "In the Create the Battlefield and Place Objective Markers step, set this model up in one of the Sentry Gun positions (marked D1 on the mission map)." },
        ],
        keywords: ["Vehicle","Faction: Unaligned Forces","Sentry Gun","Allied Units"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Skyshield Landing Pad [Legends]",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 3,
            wounds: 16,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Skyshield", desc: "Friendly Infantry models and friendly units that can Fly can be set up or end any type of move on top of the platform section of this Fortification. While such a model is on the platform section of this Fortification, that model has a 5+ invulnerable save against ranged attacks" },
            { name: "Repair Aircraft", desc: "At the end of your Movement phase, if there is a friendly Aircraft model on top of this Fortification, that Aircraft regains up to D3 lost wounds" },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Skyshield Landing Pad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Spindle Drones [Legends]",
        pts: 35,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            unaligned_forces_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            unaligned_forces_weapons.drone_pulse,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.drone_pulse, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Threat Level Rising", desc: "Each time a model in this unit makes an attack, add 1 to the Hit roll if this unit is below its Starting Strength, and add 1 to the Wound roll as well if this unit is Below Half-strength" },
        ],
        keywords: ["Faction: Unaligned Forces","Allied Units","Infantry","Spindle Drones"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "characters",
        name: "The Archivist [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            unaligned_forces_weapons.eradicator_glove,
        ],
        rangedWeapons: [
            unaligned_forces_weapons.atomic_disassembler,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.atomic_disassembler, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.eradicator_glove, selected: true},
            ],
        },
        abilities: [
            { name: "Fearsome Assault", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test." },
            { name: "Disruptive Influence (Aura)", desc: "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock or Leadership test, subtract 1 from that test." },
        ],
        keywords: ["Faction: Unaligned Forces","Allied Units","Monster","Epic Hero","Character","The Archivist"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Vengeance Weapon Battery [Legends]",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.battle_cannon,
            unaligned_forces_weapons.punisher_gatling_cannon,
            unaligned_forces_weapons.quad_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.battle_cannon, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.punisher_gatling_cannon, selected: true},
            ],
            slot3: [
                {...unaligned_forces_weapons.quad_lascannon, selected: true},
            ],
        },
        abilities: [
            { name: "Automated Defences", desc: "Each time this model makes a ranged attack that targets the closest enemy unit:\n- If that attack is made with a Punisher gatling cannon and the target is not a MONSTER or VEHICLE, add 1 to the Hit roll.\n- If that attack is made with a battle cannon and the target is a MONSTER or VEHICLE, add 1 to the Hit roll.\n- If that attack is made with a quad-lascannon and the target can FLY, add 1 to the Hit roll." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Wall of Martyrs","Vehicle","Vengeance Weapon Battery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Void Shield Generator [Legends]",
        pts: 155,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 3,
            wounds: 16,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Projected Void Shields (Aura)", desc: "While a friendly model is wholly within 6\" of this FORTIFICATION, that model has a 4+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Void Shield Generator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Vortex Missile Strongpoint [Legends]",
        pts: 525,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 30,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.vortex_missile_battery,
            unaligned_forces_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.vortex_missile_battery, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.heavy_bolter, selected: true},
            ],
        },
        abilities: [
            { name: "Vortex", desc: "In your Shooting phase, each time you select a target for this model’s vortex missile battery, roll one D6 for the target unit and one D6 for every other enemy unit within 3\" of the target unit. On a 4+, the unit being rolled for is struck by the vortex; after resolving all of this model’s attacks against the target unit, each unit struck by the vortex suffers D3 mortal wounds." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Titanic","Vehicle","Transport","Wall of Martyrs","Vortex Missile Strongpoint"],
        pointOptions: [],
        transport: "This FORTIFICATION has a transport capacity of 30 INFANTRY models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-CHARACTER models with a Wounds characteristic of 4 or more.",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Wall of Martyrs Bunker [Legends]",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 13,
            saving: 2,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            unaligned_forces_weapons.icarus_lascannon,
            unaligned_forces_weapons.quad_gun,
        ],
        weapon_options: {
            slot1: [
                {...unaligned_forces_weapons.icarus_lascannon, selected: true},
            ],
            slot2: [
                {...unaligned_forces_weapons.quad_gun, selected: true},
            ],
        },
        abilities: [
            { name: "Inviolable Bastion", desc: "Each time an attack is allocated to this Fortification, subtract 1 from the Damage characteristic of that attack." },
        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Transport","Vehicle","Wall of Martyrs","Bunker"],
        pointOptions: [],
        transport: "This Fortification has a transport capacity of 11 Infantry models. Each model with a Wounds characteristic of 3 or more takes up the space of 2 models. It cannot transport non-Character models with a Wounds characteristic of 4 or more",
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Wall of Martyrs Defence Emplacement [Legends]",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 2,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [

        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Wall of Martyrs","Defence Emplacement"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "unaligned_forces",
        class: "other",
        name: "Wall of Martyrs Defence Line [Legends]",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 2,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [

        ],
        keywords: ["Fortification","Faction: Unaligned Forces","Wall of Martyrs","Defence Line"],
        pointOptions: [],
        transport: null,
    },
]

export default unaligned_forces_army
