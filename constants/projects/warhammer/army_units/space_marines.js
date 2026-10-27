// AUTO-GENERATED units for Space Marines (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import space_marines_weapons from "../weapons/space_marines"

const space_marines_army = [
    {
        army: "space_marines",
        class: "other",
        name: "Aggressor Squad",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.twin_power_fist,
        ],
        rangedWeapons: [
            space_marines_weapons.auto_boltstorm_gauntlets,
            space_marines_weapons.flamestorm_gauntlets,
            space_marines_weapons.fragstorm_grenade_launcher,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.auto_boltstorm_gauntlets, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.flamestorm_gauntlets, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.fragstorm_grenade_launcher, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Close-quarters Firepower", desc: "Each time a model in this unit makes a ranged attack that targets the closest eligible target, improve the Armour Penetration characteristic of that attack\nby 1." },
        ],
        keywords: ["Infantry","Imperium","Gravis","Aggressor Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Ancient",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon,
            space_marines_weapons.power_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.bolt_rifle,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Unbreakable Duty", desc: "While this model is within range of an objective marker and/or within 6\" of the centre of the battlefield, this model has the Feel No Pain 4+ ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Devastator Squad\n- Hellblaster Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Desolation Squad\n- Tactical Squad\n\nYou can attach this model to one of the above units even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Ancient"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Ancient in Terminator Armor",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.power_weapon,
            space_marines_weapons.power_fist,
            space_marines_weapons.thunder_hammer,
            space_marines_weapons.chainfist,
            space_marines_weapons.close_combat_weapon,
            space_marines_weapons.twin_lightning_claws,
        ],
        rangedWeapons: [
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.power_weapon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.power_fist, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.thunder_hammer, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.chainfist, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.close_combat_weapon, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.twin_lightning_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Keep the Banner High", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Terminator Squad\n- Terminator Assault Squad\n\nYou can attach this model to one of the above units even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Terminator Storm Shield", desc: "The bearer has a Wounds characteristic of 6." },
        ],
        keywords: ["Character","Infantry","Imperium","Terminator","Ancient","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Ancient on Bike [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.astartes_chainsword,
            space_marines_weapons.power_fist_2,
            space_marines_weapons.thunder_hammer_2,
            space_marines_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.twin_boltgun,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.boltgun,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.thunder_hammer_2, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
            { name: "Unbreakable Duty", desc: "While this model is within range of an objective marker and/or within 6\" of the centre of the battlefield, this model has the Feel No Pain 4+ ability." },
        ],
        keywords: ["Character","Mounted","Grenades","Imperium","Ancient","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Apothecary",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.reductor_pistol,
            space_marines_weapons.absolvor_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.reductor_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.absolvor_bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Narthecium", desc: "While this model is leading a unit, in your Command phase, you can return 1 destroyed model (excluding Character models) to that unit." },
            { name: "Gene Seed Recovery", desc: "When this model’s Bodyguard unit is destroyed, roll one D6: on a 2+, you gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Desolation Squad\n- Devastator Squad\n- Hellblaster Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad\n\nYou can attach this model to one of the above units even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Grenades","Imperium","Faction: Adeptus Astartes","Tacticus","Infantry","Apothecary"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Apothecary Biologis",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.absolvor_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.absolvor_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Surgical Precision", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Vivispectrum", desc: "If this model’s unit destroys an enemy unit as the result of a melee attack, until the end of the battle, this model has an Objective Control characteristic of 9." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Aggressor Squad\n- Eradicator Squad\n- Heavy Intercessor Squad\n\nYou can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Infantry","Imperium","Gravis","Faction: Adeptus Astartes","Apothecary","Biologis"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Apothecary on Bike [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.astartes_chainsword,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.twin_boltgun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.astartes_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
            { name: "Gene Seed Recovery", desc: "When this model’s Bodyguard unit is destroyed, roll one D6: on a 2+, you gain 1CP." },
            { name: "Narthecium", desc: "While this model is leading a unit, in your Command phase, you can return 1 destroyed model (excluding Character models) to that unit." },
        ],
        keywords: ["Character","Mounted","Grenades","Imperium","Apothecary","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "battleline",
        name: "Assault Intercessor Squad",
        pts: 75,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.power_weapon_2,
            space_marines_weapons.power_fist_2,
            space_marines_weapons.thunder_hammer_3,
        ],
        rangedWeapons: [
            space_marines_weapons.hand_flamer,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.heavy_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.thunder_hammer_3, selected: true},
            ],
        },
        abilities: [
            { name: "Shock Assault", desc: "Each time a model in this unit targets an enemy unit with a melee attack, re-roll a Wound roll of 1. If that enemy unit is within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Faction: Adeptus Astartes","Imperium","Assault Intercessor Squad","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Assault Intercessors with Jump Packs",
        pts: 90,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.power_weapon_2,
            space_marines_weapons.power_fist_2,
        ],
        rangedWeapons: [
            space_marines_weapons.hand_flamer,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.heavy_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Hammer of Wrath", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it, then roll one D6 for each model in this unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Fly","Tacticus","Jump Pack","Faction: Adeptus Astartes","Assault Intercessors with Jump Packs"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Assault Squad [Legends]",
        pts: 95,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.eviscerator,
            space_marines_weapons.power_fist_2,
            space_marines_weapons.thunder_hammer_3,
            space_marines_weapons.power_weapon_2,
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.twin_lightning_claws_2,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.flamer,
            space_marines_weapons.plasma_gun_standard,
            space_marines_weapons.plasma_gun_supercharge,
            space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.plasma_gun_standard, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.meltagun, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.eviscerator, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.thunder_hammer_3, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.twin_lightning_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Astartes Shield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Chainsword Doctrines", desc: "Each time this unit is selected to fight, select one of the following abilities to apply to all Astartes chainswords equipped by models in this unit until the end of the phase: \n\n- [SUSTAINED HITS 1]\n- [LETHAL HITS]\n- [LANCE]" },
        ],
        keywords: ["Infantry","Grenades","Imperium","Assault Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Assault Squad with Jump Packs [Legends]",
        pts: 115,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.eviscerator,
            space_marines_weapons.power_fist_2,
            space_marines_weapons.thunder_hammer_3,
            space_marines_weapons.power_weapon_2,
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.twin_lightning_claws_2,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.flamer,
            space_marines_weapons.plasma_gun_standard,
            space_marines_weapons.plasma_gun_supercharge,
            space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.plasma_gun_standard, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.meltagun, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.eviscerator, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.thunder_hammer_3, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.twin_lightning_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Astartes Shield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Hammer of Wrath", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Assault Squad with Jump Packs","Jump Pack","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Astartes Servitors [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 1,
            leader: 8,
            control: 0,
            invuln: 6
        },
        meleeWeapons: [
            space_marines_weapons.servitor_servo_arm,
            space_marines_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_bolter,
            space_marines_weapons.plasma_cannon_standard,
            space_marines_weapons.plasma_cannon_supercharge,
            space_marines_weapons.multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_cannon_standard, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.multi_melta, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.servitor_servo_arm, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Mindlock", desc: "While a Techmarine model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by  Astartes Servitor models in this unit by 1." },
            { name: "Invulnerable Save", desc: "6+" },
            { name: "Servitor Retinue", desc: "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a Techmarine. If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly." },
        ],
        keywords: ["Infantry","Imperium","Faction: Adeptus Astartes","Astartes Servitors"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Astraeus",
        pts: 525,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 24,
            leader: 6,
            control: 8,
            invuln: 5
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            space_marines_weapons.twin_macro_accelerator_cannon,
            space_marines_weapons.astraeus_las_ripper,
            space_marines_weapons.plasma_eradicator_standard,
            space_marines_weapons.plasma_eradicator_supercharge,
            space_marines_weapons.ironhail_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_macro_accelerator_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.astraeus_las_ripper, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_eradicator_standard, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_eradicator_supercharge, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.ironhail_heavy_stubber, selected: true},
            ],
        },
        abilities: [
            { name: "Suppression Fire", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more attacks made with its twin macro-accelerator cannon this phase. Until the start of your next turn, while this model is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Faction: Adeptus Astartes","Vehicle","Titanic","Imperium","Astraeus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Attack Bike Squad [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.twin_boltgun,
            space_marines_weapons.heavy_bolter_2,
            space_marines_weapons.multi_melta_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Outrider Escort", desc: "Once per turn, in your opponent’s Shooting phase, when a friendly Adeptus Astartes Mounted unit within 6\" of this model is selected as the target of an attack, this model can use this ability. If it does, after that enemy unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)." },
        ],
        keywords: ["Mounted","Grenades","Imperium","Faction: Adeptus Astartes","Attack Bike Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Ballistus Dreadnought",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_feet,
        ],
        rangedWeapons: [
            space_marines_weapons.ballistus_lascannon,
            space_marines_weapons.ballistus_missile_launcher_frag,
            space_marines_weapons.ballistus_missile_launcher_krak,
            space_marines_weapons.twin_storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.ballistus_lascannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.ballistus_missile_launcher_frag, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.ballistus_missile_launcher_krak, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.armoured_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Ballistus Strike", desc: "Each time this model makes a ranged attack that targets a unit that is not Below Half-strength, you can re-roll the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Ballistus Dreadnought","Faction: Adeptus Astartes","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Bike Squad [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_5,
            space_marines_weapons.power_weapon_3,
            space_marines_weapons.power_fist_3,
            space_marines_weapons.thunder_hammer_2,
            space_marines_weapons.astartes_chainsword_3,
        ],
        rangedWeapons: [
            space_marines_weapons.twin_boltgun,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.boltgun,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.flamer,
            space_marines_weapons.meltagun,
            space_marines_weapons.plasma_gun_standard,
            space_marines_weapons.plasma_gun_supercharge,
            space_marines_weapons.grav_gun,
            space_marines_weapons.heavy_bolter_2,
            space_marines_weapons.multi_melta_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.meltagun, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.plasma_gun_standard, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.grav_gun, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot17: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot18: [
                {...space_marines_weapons.close_combat_weapon_5, selected: true},
            ],
            slot19: [
                {...space_marines_weapons.power_weapon_3, selected: true},
            ],
            slot20: [
                {...space_marines_weapons.power_fist_3, selected: true},
            ],
            slot21: [
                {...space_marines_weapons.thunder_hammer_2, selected: true},
            ],
            slot22: [
                {...space_marines_weapons.astartes_chainsword_3, selected: true},
            ],
        },
        abilities: [
            { name: "Turbo Boost", desc: "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit" },
        ],
        keywords: ["Mounted","Grenades","Imperium","Faction: Adeptus Astartes","Bike Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Bladeguard Ancient",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Deeds of Heroism", desc: "Once per battle, when this model is selected to fight, it can use this ability. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in this model’s unit" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Bladeguard Veteran Squad\n\nYou can attach this model to the above unit even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Bladeguard Ancient","Faction: Adeptus Astartes","Tacticus","Ancient"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Bladeguard Veteran Squad",
        pts: 80,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.master_crafted_power_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.neo_volkite_pistol,
            space_marines_weapons.heavy_bolt_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.neo_volkite_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.master_crafted_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Bladeguard", desc: "At the start of the Fight phase, you can select one of the following abilities to apply to models in this unit until the end of the phase:\n\n- Swords of the Imperium: Each time a model in this unit makes a melee attack, re-roll a Hit roll of 1.\n- Shields of the Imperium: Each time an invulnerable saving throw is made for a model in this unit, re-roll a saving throw of 1." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Tacticus","Bladeguard Veteran Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Brutalis Dreadnought",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.brutalis_fists,
            space_marines_weapons.brutalis_talons_strike,
            space_marines_weapons.brutalis_talons_sweep,
        ],
        rangedWeapons: [
            space_marines_weapons.brutalis_bolt_rifles,
            space_marines_weapons.twin_icarus_ironhail_heavy_stubber,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.brutalis_bolt_rifles, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_icarus_ironhail_heavy_stubber, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_multi_melta, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.brutalis_fists, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.brutalis_talons_strike, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.brutalis_talons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Brutalis Charge", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds" },
        ],
        keywords: ["Vehicle","Walker","Brutalis Dreadnought","Imperium","Faction: Adeptus Astartes","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Caestus Assault Ram [Legends]",
        pts: 215,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 3,
            wounds: 18,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull,
        ],
        rangedWeapons: [
            space_marines_weapons.firefury_missile_batteries,
            space_marines_weapons.twin_magna_melta,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.firefury_missile_batteries, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_magna_melta, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
            { name: "Into the Foe", desc: "If a unit disembarks from this Transport before it moves, until the end of the turn, that unit is eligible to charge in a turn in which it Advanced." },
        ],
        keywords: ["Vehicle","Aircraft","Transport","Fly","Imperium","Caestus Assault Ram","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Captain",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_6,
            space_marines_weapons.power_fist_4,
            space_marines_weapons.master_crafted_power_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.neo_volkite_pistol_2,
            space_marines_weapons.bolt_pistol_2,
            space_marines_weapons.master_crafted_bolter,
            space_marines_weapons.heavy_bolt_pistol_2,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.neo_volkite_pistol_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.master_crafted_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_bolt_pistol_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.close_combat_weapon_6, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.power_fist_4, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.master_crafted_power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad*\n- Hellblaster Squad*\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Company Heroes\n- Tactical Squad\n\n* This model cannot be attached to a Bladeguard Veteran Squad unless it is equipped with a relic shield, and cannot be attached to a Hellblaster Squad unless it is equipped with a plasma pistol." },
            { name: "Relic Shield", desc: "The bearer has a Wounds characteristic of 6." },
        ],
        keywords: ["Character","Infantry","Captain","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Captain in Gravis Armour",
        pts: 80,
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
            space_marines_weapons.relic_chainsword,
            space_marines_weapons.relic_blade,
            space_marines_weapons.relic_fist,
            space_marines_weapons.master_crafted_power_weapon_2,
            space_marines_weapons.power_fist_4,
        ],
        rangedWeapons: [
            space_marines_weapons.master_crafted_heavy_bolt_rifle,
            space_marines_weapons.boltstorm_gauntlet,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.master_crafted_heavy_bolt_rifle, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.boltstorm_gauntlet, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.relic_chainsword, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.relic_blade, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.relic_fist, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.master_crafted_power_weapon_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.power_fist_4, selected: true},
            ],
        },
        abilities: [
            { name: "Refuse to Yield", desc: "Each time an attack is allocated to this model, halve the Damage characteristic of that attack." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Aggressor Squad\n- Eradicator Squad\n- Heavy Intercessor Squad" },
        ],
        keywords: ["Character","Infantry","Captain","Grenades","Imperium","Faction: Adeptus Astartes","Gravis"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Captain in Phobos Armour",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.combat_knife,
        ],
        rangedWeapons: [
            space_marines_weapons.instigator_bolt_carbine,
            space_marines_weapons.bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.instigator_bolt_carbine, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.combat_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Master of Deceit", desc: "After both players have deployed their armies, if your army includes one or more models with this ability, you can select up to three friendly ADEPTUS ASTARTES INFANTRY units and redeploy all of those units. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Eliminator Squad\n- Incursor Squad\n- Infiltrator Squad\n- Reiver Squad\n- Scout Squad" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Captain","Phobos","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Captain in Terminator Armour",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.relic_fist_2,
            space_marines_weapons.relic_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.storm_bolter,
            space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.relic_fist_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.relic_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Relic Terminator Squad\n- Terminator Assault Squad\n- Terminator Squad" },
            { name: "Unstoppable Valour", desc: "You can re-roll Charge rolls made for this model’s unit." },
        ],
        keywords: ["Character","Infantry","Captain","Faction: Adeptus Astartes","Imperium","Terminator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Captain on Bike [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.power_fist_4,
            space_marines_weapons.relic_weapon,
            space_marines_weapons.thunder_hammer_4,
            space_marines_weapons.astartes_chainsword_4,
            space_marines_weapons.close_combat_weapon_6,
            space_marines_weapons.twin_lightning_claws,
        ],
        rangedWeapons: [
            space_marines_weapons.combi_weapon,
            space_marines_weapons.master_crafted_boltgun,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.bolt_pistol_2,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.twin_boltgun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.master_crafted_boltgun, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.power_fist_4, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.relic_weapon, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.thunder_hammer_4, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.astartes_chainsword_4, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.close_combat_weapon_6, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.twin_lightning_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Swift Assault", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
        ],
        keywords: ["Character","Grenades","Captain","Imperium","Faction: Adeptus Astartes","Mounted"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Captain with Jump Pack",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.astartes_chainsword_4,
            space_marines_weapons.power_fist_4,
            space_marines_weapons.relic_weapon,
            space_marines_weapons.thunder_hammer_4,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_bolt_pistol,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.astartes_chainsword_4, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.power_fist_4, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.relic_weapon, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.thunder_hammer_4, selected: true},
            ],
        },
        abilities: [
            { name: "Angel's Wrath", desc: "While this model is leading a unit, each time that unit ends a Charge move, until the end of the turn, add 1 to the Strength characteristic of melee  weapons equipped by models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessors with Jump Packs\n- Vanguard Veteran Squad with Jump Packs" },
        ],
        keywords: ["Character","Infantry","Grenades","Captain","Imperium","Faction: Adeptus Astartes","Fly","Jump Pack","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Carab Culln the Risen [Legends]",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 4,
            invuln: 5
        },
        meleeWeapons: [
            space_marines_weapons.tarsus_scorpii,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_bolter_2,
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_assault_cannon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.tarsus_scorpii, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "5+" },
            { name: "Death-hold", desc: "When making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Smoke","Character","Epic Hero","Dreadnought","Carab Culln the Risen","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Centurion Assault Squad",
        pts: 150,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 4,
            tough: 7,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.siege_drills,
        ],
        rangedWeapons: [
            space_marines_weapons.centurion_bolters,
            space_marines_weapons.twin_flamer,
            space_marines_weapons.twin_meltagun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.centurion_bolters, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_flamer, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_meltagun, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.siege_drills, selected: true},
            ],
        },
        abilities: [
            { name: "Annihilator Protocols", desc: "Melee weapons equipped by models in this unit have the [SUSTAINED HITS 2] ability when targeting Monster, Vehicle or Fortification units" },
            { name: "Centurion Assault Launchers", desc: "The bearer has the Grenades keyword." },
            { name: "Centurion Assault Launchers", desc: "The bearer has the Grenades keyword." },
        ],
        keywords: ["Infantry","Imperium","Centurion Assault Squad","Faction: Adeptus Astartes","Centurion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Centurion Devastator Squad",
        pts: 175,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 4,
            tough: 7,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.centurion_fists,
        ],
        rangedWeapons: [
            space_marines_weapons.grav_cannon,
            space_marines_weapons.centurion_bolters,
            space_marines_weapons.centurion_missile_launcher,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.grav_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.centurion_bolters, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.centurion_missile_launcher, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.centurion_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Decimator Protocols", desc: "Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead." },
        ],
        keywords: ["Infantry","Imperium","Centurion Devastator Squad","Centurion","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Champion of the Chapter [Crucible]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Exemplar Warrior", desc: "Once per turn, when this model's unit is selected to shoot or fight, it can use this ability. If it does, until the end of the phase, each time this model makes an attack, you can re-roll the Wound Roll." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Tacticus** (Excluding **Character** and **Fly**)\n- **Tactical Squad**" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Champion of the Chapter","Tacticus","Faction: Adeptus Astartes","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Chaplain",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.crozius_arcanum,
        ],
        rangedWeapons: [
            space_marines_weapons.absolvor_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.absolvor_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.crozius_arcanum, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Hellblaster Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Infantry","Grenades","Tacticus","Imperium","Faction: Adeptus Astartes","Chaplain"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Chaplain in Terminator Armour",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 5,
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.crozius_arcanum,
        ],
        rangedWeapons: [
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.crozius_arcanum, selected: true},
            ],
        },
        abilities: [
            { name: "Recitation of Faith", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against mortal wounds." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Terminator Assault Squad\n- Terminator Squad" },
        ],
        keywords: ["Character","Infantry","Terminator","Chaplain","Imperium","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Chaplain on Bike",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.crozius_arcanum,
        ],
        rangedWeapons: [
            space_marines_weapons.absolvor_bolt_pistol,
            space_marines_weapons.twin_bolt_rifle,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.absolvor_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_bolt_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.crozius_arcanum, selected: true},
            ],
        },
        abilities: [
            { name: "Catechism of Fire", desc: "Each time this model’s unit is selected to shoot, you can select one enemy unit within 12\" of and visible to this model. Until the end of the phase, ranged\nweapons equipped by models in this model’s unit have the [DEVASTATING WOUNDS] ability when targeting that enemy unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
        ],
        keywords: ["Character","Mounted","Imperium","Grenades","Chaplain","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Chaplain Venerable Dreadnought [Legends]",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            space_marines_weapons.dreadnought_combat_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.dreadnought_inferno_cannon,
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.assault_cannon,
            space_marines_weapons.heavy_plasma_cannon_standard,
            space_marines_weapons.heavy_plasma_cannon,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.twin_lascannon,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.dreadnought_inferno_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.assault_cannon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_plasma_cannon_standard, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.heavy_plasma_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.dreadnought_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "5+" },
        ],
        keywords: ["Vehicle","Walker","Imperium","Dreadnought","Chaplain Venerable Dreadnought","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Chaplain with Jump Pack",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.crozius_arcanum,
            space_marines_weapons.power_fist,
        ],
        rangedWeapons: [
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.boltgun,
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.crozius_arcanum, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Exhortation of Rage", desc: "Each time this model’s unit is selected to fight, you can select one enemy unit within Engagement Range of this model’s unit and roll one D6: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessors with Jump Packs\n- Vanguard Veteran Squad with Jump Packs" },
        ],
        keywords: ["Character","Infantry","Imperium","Chaplain","Faction: Adeptus Astartes","Fly","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Command Squad [Legends]",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.champions_blade,
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.close_combat_weapon_4,
            space_marines_weapons.power_fist_3,
            space_marines_weapons.power_weapon_3,
            space_marines_weapons.thunder_hammer_2,
            space_marines_weapons.twin_lightning_claws_3,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.boltgun,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.flamer,
            space_marines_weapons.meltagun,
            space_marines_weapons.grav_gun,
            space_marines_weapons.heavy_bolter,
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.grav_cannon_2,
            space_marines_weapons.missile_launcher_frag,
            space_marines_weapons.missile_launcher_krak,
            space_marines_weapons.lascannon,
            space_marines_weapons.multi_melta,
            space_marines_weapons.plasma_cannon_standard,
            space_marines_weapons.plasma_cannon_supercharge,
            space_marines_weapons.plasma_gun_standard,
            space_marines_weapons.plasma_gun_supercharge,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.meltagun, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.grav_gun, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.grav_cannon_2, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.missile_launcher_frag, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.missile_launcher_krak, selected: true},
            ],
            slot17: [
                {...space_marines_weapons.lascannon, selected: true},
            ],
            slot18: [
                {...space_marines_weapons.multi_melta, selected: true},
            ],
            slot19: [
                {...space_marines_weapons.plasma_cannon_standard, selected: true},
            ],
            slot20: [
                {...space_marines_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot21: [
                {...space_marines_weapons.plasma_gun_standard, selected: true},
            ],
            slot22: [
                {...space_marines_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot23: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot24: [
                {...space_marines_weapons.champions_blade, selected: true},
            ],
            slot25: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot26: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
            slot27: [
                {...space_marines_weapons.power_fist_3, selected: true},
            ],
            slot28: [
                {...space_marines_weapons.power_weapon_3, selected: true},
            ],
            slot29: [
                {...space_marines_weapons.thunder_hammer_2, selected: true},
            ],
            slot30: [
                {...space_marines_weapons.twin_lightning_claws_3, selected: true},
            ],
        },
        abilities: [
            { name: "Narthecium", desc: "While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding Character models) to this unit" },
            { name: "Astartes Banner", desc: "While this unit contains a Company Ancient, add 1 to the Objective Control characteristic of models in this unit." },
            { name: "Astartes Shield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Honour or Death", desc: "While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic  Intervention Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase." },
            { name: "Astartes Shield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Astartes Shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Command Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Company Champion on Bike [Legends]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.master_crafted_power_weapon_3,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.twin_boltgun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.master_crafted_power_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Martial Superiority", desc: "Each time this model makes a melee attack that targets a Character unit, you can re-roll the Hit roll and you can re-roll the Wound roll" },
            { name: "Honour or Death", desc: "While this model is leading a unit, add 1 to Advance and Charge rolls made for that unit and you can target that unit with the Heroic Intervention  stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
        ],
        keywords: ["Character","Mounted","Grenades","Imperium","Company Champion","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Company Heroes",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.master_crafted_power_weapon_4,
            space_marines_weapons.close_combat_weapon_7,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_rifle_2,
            space_marines_weapons.master_crafted_bolt_rifle,
            space_marines_weapons.master_crafted_heavy_bolter,
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_rifle_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.master_crafted_bolt_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.master_crafted_heavy_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.master_crafted_power_weapon_4, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.close_combat_weapon_7, selected: true},
            ],
        },
        abilities: [
            { name: "Ancient Banner", desc: "While this unit contains an Ancient, add 1 to the Objective Control characteristic of models in this unit" },
            { name: "Command Squad", desc: "While a Character model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll." },
            { name: "Company Heroes", desc: "You must attach one Captain or Chapter Master model to this unit. If this is not possible, this unit does not take part in the battle and counts as having been destroyed." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Tacticus","Company Heroes","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Company Veterans on Bikes [Legends]",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.power_fist_2,
            space_marines_weapons.thunder_hammer_2,
            space_marines_weapons.power_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.boltgun,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.twin_boltgun,
            space_marines_weapons.flamer,
            space_marines_weapons.meltagun,
            space_marines_weapons.plasma_gun_standard,
            space_marines_weapons.plasma_gun_supercharge,
            space_marines_weapons.grav_gun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.meltagun, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.plasma_gun_standard, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.grav_gun, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.thunder_hammer_2, selected: true},
            ],
            slot17: [
                {...space_marines_weapons.power_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Vanguard Assault", desc: "Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability." },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save" },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save" },
        ],
        keywords: ["Mounted","Imperium","Grenades","Company Veterans","Faction: Adeptus Astartes"],
        pointOptions: [{ models: 3, pts: 275 }],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Deimos Predator [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.plasma_destroyer_standard,
            space_marines_weapons.plasma_destroyer_supercharge,
            space_marines_weapons.infernus_cannon,
            space_marines_weapons.conversion_beam_cannon,
            space_marines_weapons.magna_melta_cannon,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.heavy_bolter_2,
            space_marines_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.plasma_destroyer_standard, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_destroyer_supercharge, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.infernus_cannon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.conversion_beam_cannon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.magna_melta_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Armoured Spearhead", desc: "Each time this model makes an attack that targets an enemy unit, re-roll a Hit roll of 1 and, if that unit is within range of an objective marker you do not control, you can re-roll the Hit roll instead." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Deimos Predator","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Desolation Squad",
        pts: 200,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.superfrag_rocket_launcher,
            space_marines_weapons.superkrak_rocket_launcher,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.castellan_launcher,
            space_marines_weapons.vengor_launcher,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.superfrag_rocket_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.superkrak_rocket_launcher, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.castellan_launcher, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.vengor_launcher, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Targeter Optics", desc: "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the  [IGNORES COVER] ability." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Tacticus","Desolation Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Devastator Squad",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_5,
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.power_fist_3,
            space_marines_weapons.thunder_hammer_2,
            space_marines_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            space_marines_weapons.boltgun,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.heavy_bolter,
            space_marines_weapons.lascannon,
            space_marines_weapons.grav_cannon_2,
            space_marines_weapons.multi_melta,
            space_marines_weapons.plasma_cannon_standard,
            space_marines_weapons.plasma_cannon_supercharge,
            space_marines_weapons.missile_launcher_frag,
            space_marines_weapons.missile_launcher_krak,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.lascannon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.grav_cannon_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.multi_melta, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.plasma_cannon_standard, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.missile_launcher_frag, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.missile_launcher_krak, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.close_combat_weapon_5, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot17: [
                {...space_marines_weapons.power_fist_3, selected: true},
            ],
            slot18: [
                {...space_marines_weapons.thunder_hammer_2, selected: true},
            ],
            slot19: [
                {...space_marines_weapons.power_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Signum", desc: "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability." },
            { name: "Armorium Cherub", desc: "Once per battle, after making a Hit roll for a model in this unit, you can change that roll to an unmodified 6." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Devastator Squad","Faction: Adeptus Astartes"],
        pointOptions: [{ models: 6, pts: 200 }],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Dreadnought",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.dreadnought_combat_weapon,
            space_marines_weapons.close_combat_weapon_8,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.missile_launcher_frag_2,
            space_marines_weapons.missile_launcher_krak_2,
            space_marines_weapons.assault_cannon,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.twin_lascannon,
            space_marines_weapons.heavy_plasma_cannon_standard,
            space_marines_weapons.heavy_plasma_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.missile_launcher_frag_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.missile_launcher_krak_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.assault_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.heavy_plasma_cannon_standard, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.heavy_plasma_cannon, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.dreadnought_combat_weapon, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.close_combat_weapon_8, selected: true},
            ],
        },
        abilities: [
            { name: "Wisdom of the Ancients [Aura]", desc: "While a friendly Adeptus Astartes Infantry unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Faction: Adeptus Astartes","Walker","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "transports",
        name: "Drop Pod",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 7,
            saving: 3,
            wounds: 8,
            leader: 6,
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
            { name: "Drop Pod Assault", desc: "This model must start the battle in Reserves and can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model must immediately disembark after it has been set up on the battlefield, and they must be set up more than 9\" away from all enemy models." },
            { name: "Transport", desc: "This model has a transport capacity of 12 Adeptus Astartes Infantry models. It cannot transport Jump Pack, Wulfen, Gravis, Centurion or Terminator models." },
            { name: "Combat Disembarkation", desc: "Each time a unit disembarks from this model after it has been set up on the battlefield, that unit is still eligible to declare a charge this turn" },
            { name: "Deployment Complete", desc: "Once this unit is set up on the battlefield and all units within it have disembarked, until the end of the battle, units cannot embark within this TRANSPORT" },
        ],
        keywords: ["Vehicle","Imperium","Drop Pod","Transport","Dedicated Transport"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Eliminator Squad",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.instigator_bolt_carbine_2,
            space_marines_weapons.bolt_sniper_rifle,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.las_fusil,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.instigator_bolt_carbine_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_sniper_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.las_fusil, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Reposition Under Covering Fire", desc: "In your Shooting phase, after this unit has shot, if it contains an Eliminator Sergeant equipped with an instigator bolt carbine, this unit can make a\nNormal move. If it does so, until the end of the turn, this unit is not eligible to declare a charge." },
            { name: "Mark the Target", desc: "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability." },
        ],
        keywords: ["Infantry","Imperium","Grenades","Phobos","Faction: Adeptus Astartes","Eliminator Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Eradicator Squad",
        pts: 90,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.melta_rifle,
            space_marines_weapons.multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.melta_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.multi_melta, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Total Obliteration", desc: "Each time a ranged attack made by a model in this unit targets a Monster or Vehicle model, you can re-roll the Hit roll, you can re-roll the Wound roll and you can re-roll the Damage roll." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Gravis","Eradicator Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Ferren Areios [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
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
            space_marines_weapons.relic_thunder_hammer,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.relic_thunder_hammer, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Company Heroes\n- Hellblaster Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
            { name: "Master of Rites", desc: "In your Command phase, select one of the following to apply to this model’s unit until the end of the turn: \n\n\n- This model’s unit is eligible to shoot in a turn in which it Advanced.\n\n\n- This model’s unit is eligible to declare a charge in a turn in it which it Advanced.\n\n\n- This model’s unit is eligible to shoot and declare a charge in a turn in which it Fell Back." },
            { name: "Unrelenting and Uncompromising", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill or Weapon Skill characteristics and/or all modifiers to\nthe Hit roll." },
        ],
        keywords: ["Character","Epic Hero","Infantry","Captain","Grenades","Faction: Adeptus Astartes","Imperium","Tacticus","Ferren Areios"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Firestrike Servo-Turrets",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 3,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.twin_firestrike_las_talon,
            space_marines_weapons.twin_firestrike_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_firestrike_las_talon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_firestrike_autocannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Sentinel Protocols", desc: "Each time you select this unit for the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 4+ when resolving that Stratagem." },
        ],
        keywords: ["Artillery","Vehicle","Imperium","Faction: Adeptus Astartes","Firestrike Servo-turrets"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Gladiator Lancer",
        pts: 160,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            space_marines_weapons.lancer_laser_destroyer,
            space_marines_weapons.icarus_rocket_pod,
            space_marines_weapons.ironhail_heavy_stubber,
            space_marines_weapons.fragstorm_grenade_launcher,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.lancer_laser_destroyer, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.icarus_rocket_pod, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.ironhail_heavy_stubber, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.fragstorm_grenade_launcher, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Aqullon Optics", desc: "Each time this model is selected to shoot, you can re-roll one Hit roll, you can re-roll one Wound roll and you can re-roll one Damage roll when resolving its attacks" },
        ],
        keywords: ["Vehicle","Imperium","Smoke","Gladiator Lancer","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Gladiator Reaper",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            space_marines_weapons.tempest_bolter,
            space_marines_weapons.twin_heavy_onslaught_gatling_cannon,
            space_marines_weapons.icarus_rocket_pod,
            space_marines_weapons.ironhail_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.tempest_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_heavy_onslaught_gatling_cannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.icarus_rocket_pod, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.ironhail_heavy_stubber, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Rotating Death", desc: "This model’s twin heavy onslaught gatling cannon has the [SUSTAINED HITS 2] ability when targeting Infantry units." },
        ],
        keywords: ["Smoke","Imperium","Vehicle","Faction: Adeptus Astartes","Gladiator Reaper"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Gladiator Valiant",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            space_marines_weapons.twin_las_talon,
            space_marines_weapons.icarus_rocket_pod,
            space_marines_weapons.ironhail_heavy_stubber,
            space_marines_weapons.multi_melta_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_las_talon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.icarus_rocket_pod, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.ironhail_heavy_stubber, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Ferocious Assault", desc: "Each time this model makes an attack with its twin las-talon that targets the closest eligible Monster or Vehicle unit, add 1 to the Hit roll" },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Gladiator Valiant","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Hammerfall Bunker",
        pts: 175,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 2,
            wounds: 14,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            space_marines_weapons.hammerfall_missile_launcher_superfrag,
            space_marines_weapons.hammerfall_missile_launcher_superkrak,
            space_marines_weapons.hammerfall_heavy_bolter_array,
            space_marines_weapons.hammerfall_heavy_flamer_array,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hammerfall_missile_launcher_superfrag, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hammerfall_missile_launcher_superkrak, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.hammerfall_heavy_bolter_array, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.hammerfall_heavy_flamer_array, selected: true},
            ],
        },
        abilities: [
            { name: "Fortification", desc: "While an enemy unit is only within Engagement Range of one or more Fortifications from your army:\n- That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll.\n- Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so." },
            { name: "Ceramite Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack." },
            { name: "Defensive Array", desc: "You can target this Fortification with the Fire Overwatch Strategem for 0CP, and can do so even if you have already targeted another unit with that Stratagem this turn. This Fortification can only be targeted with that Stratagem once per turn." },
            { name: "Defensive Array", desc: "You can target this Fortification with the Fire Overwatch Strategem for 0CP, and can do so even if you have already targeted another unit with that Stratagem this turn. This Fortification can only be targeted with that Stratagem once per turn." },
        ],
        keywords: ["Fortification","Imperium","Hammerfall Bunker","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "battleline",
        name: "Heavy Intercessor Squad",
        pts: 100,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_bolt_rifle,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.heavy_bolter_3,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_bolt_rifle, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.heavy_bolter_3, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Unyielding in the Face of the Foe", desc: "While this unit is within range of an objective marker you control, each time an attack with a Damage characteristic of 1 is allocated to a model in \nthis unit, add 1 to any armour saving throw made against that attack." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Imperium","Gravis","Faction: Adeptus Astartes","Heavy Intercessor Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Hellblaster Squad",
        pts: 110,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.plasma_incinerator_standard,
            space_marines_weapons.plasma_incinerator_supercharge,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.plasma_incinerator_standard, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_incinerator_supercharge, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "For the Chapter!", desc: "Each time a model in this unit is destroyed, roll one D6: on a 3+, do not remove it from play. The destroyed model can shoot after the attacking model’s unit has finished making its attacks, and is then removed from play. When resolving these attacks, any Hazardous tests taken for that attack are automatically passed." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Hellblaster Squad","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Hunter [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 11,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.skyspear_missile_launcher,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.skyspear_missile_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Hunter Missile Targeting", desc: "Each time this model makes an attack with its skyspear missile launcher that targets a Monster or Vehicle unit, that attack scores a hit on an unmodified Hit roll of 2+." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Hunter","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Imperial Space Marine [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.disintegration_combi_gun,
            space_marines_weapons.disintegration_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.disintegration_combi_gun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.disintegration_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Swift Assault", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability." },
            { name: "Unbreakable Duty", desc: "While this model is within range of an objective marker and/or within 6\" of the centre of the battlefield, this model has the Feel No Pain 4+ ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad\n- Command Squad\n- Tactical Squad\n- Vanguard Veteran Squad\n- Devastator Squad\n\nYou can attach this model to one of the above units even if one Character model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Infantry","Imperium","Imperial Space Marine","Grenades","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "transports",
        name: "Impulsor",
        pts: 80,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            space_marines_weapons.ironhail_skytalon_array,
            space_marines_weapons.ironhail_heavy_stubber,
            space_marines_weapons.bellicatus_missile_array_frag,
            space_marines_weapons.bellicatus_missile_array_icarus,
            space_marines_weapons.bellicatus_missile_array_krak,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.fragstorm_grenade_launcher,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.ironhail_skytalon_array, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.ironhail_heavy_stubber, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.bellicatus_missile_array_frag, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.bellicatus_missile_array_icarus, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.bellicatus_missile_array_krak, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.fragstorm_grenade_launcher, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 7 TACTICUS or PHOBOS INFANTRY models. It cannot transport JUMP PACK models." },
            { name: "Assault Vehicle", desc: "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move, and cannot declare a charge that turn." },
            { name: "Orbital Comms Array [Aura]", desc: "While a friendly Adeptus Astartes unit is within 6\" of the bearer, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP" },
            { name: "Shield Dome", desc: "The bearer has a 5+ invulnerable save." },
        ],
        keywords: ["Vehicle","Transport","Dedicated Transport","Imperium","Faction: Adeptus Astartes","Impulsor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Inceptor Squad",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.assault_bolters,
            space_marines_weapons.plasma_exterminators_standard,
            space_marines_weapons.plasma_exterminators_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.assault_bolters, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_exterminators_standard, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_exterminators_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Meteoric Descent", desc: "In your Movement phase, when this unit is set up on the battlefield using the Deep Strike ability, it can perform a meteoric descent. If it does, this unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge." },
        ],
        keywords: ["Infantry","Fly","Jump Pack","Imperium","Gravis","Faction: Adeptus Astartes","Inceptor Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Incursor Squad",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.paired_combat_blades,
        ],
        rangedWeapons: [
            space_marines_weapons.occulus_bolt_carbine,
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.occulus_bolt_carbine, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.paired_combat_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Multi-spectrum Array", desc: "In your Shooting phase, after this unit has shot, select one enemy unit that was hit by one or more attacks made by this unit this phase. Until the end of the phase, each time a friendly Adeptus Astartes unit makes an attack that targets that enemy unit, add 1 to the Hit roll." },
            { name: "Haywire Mine", desc: "Once per battle, at the start of any phase, you can select one enemy unit within 3\" of the bearer and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds, or 2D3 mortal wounds instead if it is a Vehicle unit." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Phobos","Incursor Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Infernus Squad",
        pts: 90,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.pyreblaster,
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.pyreblaster, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Purge the Foe", desc: "In your Shooting phase, after this unit has shot, you can select one enemy Infantry unit hit by one or more of those attacks made with a pyreblaster. That enemy unit must take a Battle-shock test, subtracting 1 from that test." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Tacticus","Infernus Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Infiltrator Squad",
        pts: 100,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.marksman_bolt_carbine,
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.marksman_bolt_carbine, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Omni-scramblers", desc: "Enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" of this unit." },
            { name: "Helix Gauntlet", desc: "Models in the bearer’s unit have the Feel No Pain 6+ ability." },
            { name: "Infiltrator Comms Array", desc: "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP" },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Phobos","Faction: Adeptus Astartes","Infiltrator Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "battleline",
        name: "Intercessor Squad",
        pts: 80,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.power_weapon_2,
            space_marines_weapons.astartes_chainsword,
            space_marines_weapons.power_fist_2,
            space_marines_weapons.thunder_hammer_3,
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.hand_flamer,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.bolt_rifle,
            space_marines_weapons.astartes_grenade_launcher_krak,
            space_marines_weapons.astartes_grenade_launcher_frag,
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.bolt_rifle, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.astartes_grenade_launcher_krak, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.astartes_grenade_launcher_frag, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.thunder_hammer_3, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Objective Secured", desc: "If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
            { name: "Target Elimination", desc: "Each time this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, add 2 to the Attacks characteristic of bolt rifles equipped by models in this unit and you can only select one enemy unit as the target of all of this unit's attacks" },
        ],
        keywords: ["Infantry","Battleline","Grenades","Imperium","Tacticus","Intercessor Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Invader ATV",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_7,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.twin_bolt_rifle,
            space_marines_weapons.onslaught_gatling_cannon,
            space_marines_weapons.multi_melta_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_bolt_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.onslaught_gatling_cannon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.close_combat_weapon_7, selected: true},
            ],
        },
        abilities: [
            { name: "Outrider Escort", desc: "Once per turn, in your opponent's Shooting phase, when another friendly Adeptus Astartes Mounted unit within 6\" of this model is selected as the target of an attack, one model from your army with this ability can use it. If it does, after that enemy unit has finished making its attacks, that model can shoot as if it were your Shooting phase , but when resolving those attacks it can only target that enemy unit [and only if it is an eligible target)." },
        ],
        keywords: ["Mounted","Grenades","Imperium","Invader ATV","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Invictor Tactical Warsuit",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.invictor_fist,
        ],
        rangedWeapons: [
            space_marines_weapons.incendium_cannon,
            space_marines_weapons.twin_ironhail_autocannon,
            space_marines_weapons.fragstorm_grenade_launcher,
            space_marines_weapons.heavy_bolter_2,
            space_marines_weapons.twin_ironhail_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.incendium_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_ironhail_autocannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.fragstorm_grenade_launcher, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_ironhail_heavy_stubber, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.invictor_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Combat Support", desc: "Once per turn, in your opponent’s Shooting phase, when a friendly Adeptus Astartes Phobos Infantry unit within 6\" of this model is selected as the target of an attack, this model can use this ability. If it does, after that enemy model’s unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)." },
        ],
        keywords: ["Vehicle","Walker","Invictor Tactical Warsuit","Faction: Adeptus Astartes","Imperium","Phobos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Ironclad Dreadnought [Legends]",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 10,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.dreadnought_chainfist,
            space_marines_weapons.seismic_hammer,
            space_marines_weapons.dreadnought_combat_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.hurricane_bolter,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hurricane_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.meltagun, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.dreadnought_chainfist, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.seismic_hammer, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.dreadnought_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Siege-breaker Protocols", desc: "Each time this model makes a melee attack that targets a Vehicle or Fortification unit, add 1 to the Hit roll and add 1 to the Wound roll" },
            { name: "Ironclad Assault Launchers", desc: "The bearer has the Grenades keyword." },
        ],
        keywords: ["Vehicle","Walker","Smoke","Imperium","Ironclad Dreadnought","Faction: Adeptus Astartes","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Judiciar",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.executioner_relic_blade,
        ],
        rangedWeapons: [
            space_marines_weapons.absolvor_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.absolvor_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.executioner_relic_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Tempormortis", desc: "While this model is leading a unit, that unit has the Fights First ability." },
            { name: "Silent Fury", desc: "Each time this model destroys an enemy Character model, until the end of the battle, add 1 to the Attacks characteristic of its executioner relic blade." },
            { name: "Invulnerable Save*", desc: "4+\n* This model has a 4+ invulnerable save against melee attacks." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Infantry","Imperium","Tacticus","Judiciar","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Raider",
        pts: 220,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            space_marines_weapons.godhammer_lascannon,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.godhammer_lascannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Transport", desc: "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Faction: Adeptus Astartes","Land Raider","Transport"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Raider Crusader",
        pts: 220,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.hurricane_bolter,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hurricane_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_assault_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 16 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Vehicle","Land Raider Crusader","Smoke","Faction: Adeptus Astartes","Imperium","Transport","Grenades","Land Raider"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Raider Excelsior [Legends]",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: 5
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            space_marines_weapons.grav_cannon,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.godhammer_lascannons,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.grav_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.godhammer_lascannons, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Transport", desc: "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
            { name: "Invulnerable Save", desc: "5+" },
        ],
        keywords: ["Vehicle","Smoke","Transport","Imperium","Land Raider Excelsior","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Raider Helios [Legends]",
        pts: 265,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            space_marines_weapons.godhammer_lascannons,
            space_marines_weapons.helios_launcher,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.godhammer_lascannons, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.helios_launcher, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Transport", desc: "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
        ],
        keywords: ["Vehicle","Smoke","Transport","Imperium","Land Raider Helios","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Raider Prometheus [Legends]",
        pts: 250,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            space_marines_weapons.quad_heavy_bolter,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.quad_heavy_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Transport", desc: "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
        ],
        keywords: ["Vehicle","Smoke","Transport","Imperium","Land Raider Prometheus","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Raider Redeemer",
        pts: 270,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            space_marines_weapons.flamestorm_cannon,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.flamestorm_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_assault_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 14 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Vehicle","Grenades","Imperium","Smoke","Land Raider Redeemer","Faction: Adeptus Astartes","Transport","Land Raider"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Speeder [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.heavy_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Target Sighted", desc: "At the start of your Shooting phase, select one enemy unit that is visible to this model. Until the end of the phase, each time a friendly Adeptus Astartes model makes an attack with a Blast weapon that targets that enemy unit, add 1 to the Hit roll and that attack has the [IGNORES COVER] ability." },
        ],
        keywords: ["Vehicle","Fly","Imperium","Land Speeder","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "transports",
        name: "Land Speeder Storm [Legends]",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 4,
            wounds: 7,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.cerberus_launcher,
            space_marines_weapons.heavy_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.cerberus_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Storm Assault", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Transport", desc: "This model has a transport capacity of 6 models. It can only transport Scout Squad, Scout Sniper Squad and Sergeant Telion models." },
        ],
        keywords: ["Vehicle","Fly","Dedicated Transport","Transport","Imperium","Land Speeder Storm","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Speeder Tempest [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 8,
            saving: 3,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_3,
        ],
        rangedWeapons: [
            space_marines_weapons.tempest_salvo_launcher_frag,
            space_marines_weapons.tempest_salvo_launcher_krak,
            space_marines_weapons.assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.tempest_salvo_launcher_frag, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.tempest_salvo_launcher_krak, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.assault_cannon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.armoured_hull_3, selected: true},
            ],
        },
        abilities: [
            { name: "Isolate and Destroy", desc: "Each time this model makes an attack that targets an enemy unit, if there are no other units from your opponent’s army within 6\" of that target, add 1 to the Wound roll." },
        ],
        keywords: ["Vehicle","Fly","Imperium","Land Speeder Tempest","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Speeder Tornado [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.heavy_bolter_2,
            space_marines_weapons.assault_cannon,
            space_marines_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.assault_cannon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Strafing Enfilade", desc: "Each time this model ends a Normal move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move, then roll six D6: for each 4+, that enemy unit suffers 1 mortal wound" },
        ],
        keywords: ["Vehicle","Fly","Imperium","Faction: Adeptus Astartes","Land Speeder Tornado"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Land Speeder Typhoon [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.typhoon_missile_launcher_frag,
            space_marines_weapons.typhoon_missile_launcher_krak,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.heavy_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.typhoon_missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.typhoon_missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Fire and Redeploy", desc: "In your Shooting phase, each time this model has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to D6\". If it does, until the end of the turn, this model is not eligible to declare a charge." },
        ],
        keywords: ["Vehicle","Fly","Imperium","Faction: Adeptus Astartes","Land Speeder Typhoon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Librarian",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.force_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.smite_witchfire,
            space_marines_weapons.smite_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.smite_witchfire, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.smite_focused_witchfire, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Mental Fortress [Psychic]", desc: "While this model is leading a unit, models in that unit have a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Desolation Squad\n- Devastator Squad\n- Hellblaster Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Psyker","Faction: Adeptus Astartes","Tacticus","Librarian"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Librarian in Phobos Armour",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.force_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.smite_witchfire,
            space_marines_weapons.smite_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.smite_witchfire, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.smite_focused_witchfire, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Shrouding [Psychic]", desc: "While this model is leading a unit, models in that unit have the Stealth ability and that unit cannot be targeted by ranged attacks unless the attacking\nmodel is within 12\"." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Eliminator Squad\n- Incursor Squad\n- Infiltrator Squad\n- Reiver Squad" },
        ],
        keywords: ["Character","Grenades","Imperium","Psyker","Faction: Adeptus Astartes","Phobos","Librarian","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Librarian in Terminator Armour",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.force_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.smite_witchfire,
            space_marines_weapons.smite_focused_witchfire,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.smite_witchfire, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.smite_focused_witchfire, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Veil of Time [Psychic]", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Relic Terminator Squad\n- Terminator Assault Squad\n- Terminator Squad" },
        ],
        keywords: ["Character","Infantry","Imperium","Psyker","Terminator","Librarian","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Librarian on Bike [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.force_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.twin_boltgun,
            space_marines_weapons.smite_witchfire,
            space_marines_weapons.smite_focused_witchfire,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.boltgun,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.smite_witchfire, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.smite_focused_witchfire, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
            { name: "Mental Fortress", desc: "While this model is leading a unit, models in that unit have a 4+ invulnerable save." },
        ],
        keywords: ["Character","Mounted","Grenades","Psyker","Imperium","Librarian","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Librarian with Jump Pack [Legends]",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.force_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.smite_witchfire,
            space_marines_weapons.smite_focused_witchfire,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.boltgun,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.smite_witchfire, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.smite_focused_witchfire, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Might of Heroes [Pyschic]", desc: "While this model is leading a unit, improve the Strength and Armour Penetration characteristic of melee weapons equipped by models in that unit by 1." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad with Jump Packs\n- Vanguard Veteran Squad with Jump Packs" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Librarian","Psyker","Faction: Adeptus Astartes","Fly","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Librarius Adept [Crucible]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Veil of Time (Psychic)", desc: "Weapons equipped by models in this unit have the [Sustained Hits 1] ability" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Tacticus** (Excluding **Character** and **Fly**)\n- **Tactical Squad**" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Psyker","Tacticus","Faction: Adeptus Astartes","Librarius Adept","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Lieutenant",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.master_crafted_power_weapon_5,
            space_marines_weapons.close_combat_weapon,
            space_marines_weapons.power_fist,
        ],
        rangedWeapons: [
            space_marines_weapons.neo_volkite_pistol_2,
            space_marines_weapons.bolt_pistol_2,
            space_marines_weapons.heavy_bolt_pistol_2,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.master_crafted_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.neo_volkite_pistol_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.heavy_bolt_pistol_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.master_crafted_bolter, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.master_crafted_power_weapon_5, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.close_combat_weapon, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Company Heroes\n- Hellblaster Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad\n\nYou can attach this model to a unit it can lead even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Lieutenant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Lieutenant in Phobos Armour",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.paired_combat_blades_2,
        ],
        rangedWeapons: [
            space_marines_weapons.master_crafted_scoped_bolt_carbine,
            space_marines_weapons.bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.master_crafted_scoped_bolt_carbine, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.paired_combat_blades_2, selected: true},
            ],
        },
        abilities: [
            { name: "Strategic Dispersal", desc: "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy models, it can make a Normal move of up to  6\". If it does, until the end of the turn, that unit is not eligible to declare a charge.’" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Incursor Squad\n- Infiltrator Squad\n- Reiver Squad\n\nYou can attach this model to a unit it can lead units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Phobos","Faction: Adeptus Astartes","Lieutenant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Lieutenant in Reiver Armour",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.combat_knife_2,
        ],
        rangedWeapons: [
            space_marines_weapons.master_crafted_special_issue_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.master_crafted_special_issue_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.combat_knife_2, selected: true},
            ],
        },
        abilities: [
            { name: "Deadly Terror", desc: "While this model is leading a unit, increase the range of that unit’s Terror Troops ability by 3\"." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Reiver Squad\n\nYou can attach this model a unit it can lead even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Infantry","Grenades","Smoke","Imperium","Phobos","Faction: Adeptus Astartes","Lieutenant","Lieutenant in Reiver Armour"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Lieutenant with Combi-weapon",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.paired_combat_blades_3,
        ],
        rangedWeapons: [
            space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.paired_combat_blades_3, selected: true},
            ],
        },
        abilities: [
            { name: "Priority Objective Identified", desc: "At the start of the first battle round, if your army includes one or more models with this ability, you can select one objective marker on the battlefield. Until the end of the battle, while one or more models with this ability are on the battlefield, each time a friendly ADEPTUS ASTARTES model makes an attack that targets an enemy unit that is within range of that objective marker, re-roll a Wound roll of 1." },
            { name: "Evade and Survive", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move" },
            { name: "Lone Survivor", desc: "This model cannot be selected to be your **Warlord**." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Lieutenant with Combi-weapon","Faction: Adeptus Astartes","Phobos","Lieutenant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Mortis Dreadnought [Legends]",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_feet_2,
        ],
        rangedWeapons: [
            space_marines_weapons.assault_cannon,
            space_marines_weapons.dreadnought_inferno_cannon,
            space_marines_weapons.heavy_plasma_cannon_standard,
            space_marines_weapons.heavy_plasma_cannon,
            space_marines_weapons.missile_launcher_frag_2,
            space_marines_weapons.missile_launcher_krak_2,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.twin_lascannon,
            space_marines_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.assault_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.dreadnought_inferno_cannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.heavy_plasma_cannon_standard, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_plasma_cannon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.missile_launcher_frag_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.missile_launcher_krak_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.armoured_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Mortis Strike", desc: "Each time this model makes a ranged attack that targets a unit that is not Below Half-strength, you can re-roll the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Dreadnought","Mortis Dreadnought","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Outrider Squad",
        pts: 80,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.astartes_chainsword_2,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_bolt_pistol,
            space_marines_weapons.twin_bolt_rifle,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_bolt_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
        },
        abilities: [
            { name: "Thunderous Impact", desc: "Each time a model in this unit makes a melee attack, if this unit made a Charge move this turn, improve the Strength and Damage characteristics of that attack by 1" },
        ],
        keywords: ["Mounted","Grenades","Imperium","Outrider Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Predator Annihilator",
        pts: 135,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.predator_twin_lascannon,
            space_marines_weapons.lascannon_2,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.heavy_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.predator_twin_lascannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.lascannon_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Annihilator", desc: "Each time a ranged attack made by this model is allocated to a Monster or Vehicle model, you can re‑roll the Damage roll" },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Faction: Adeptus Astartes","Predator Annihilator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Predator Destructor",
        pts: 140,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.predator_autocannon,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.lascannon_2,
            space_marines_weapons.heavy_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.predator_autocannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.lascannon_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Destructor", desc: "Each time this model makes a ranged attack that targets an Infantry unit, improve the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Faction: Adeptus Astartes","Predator Destructor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Primaris Company Champion [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.master_crafted_power_weapon_6,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.master_crafted_power_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Honour or Death", desc: "While this model is leading a unit, add 1 to Advance and Charge rolls made for that unit and you can target that unit with the Heroic Intervention  stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase." },
            { name: "Martial Superiority", desc: "Each time this model makes a melee attack that targets a Character unit, you can re-roll the Hit roll and you can re-roll the Wound roll" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad" },
        ],
        keywords: ["Character","Infantry","Imperium","Grenades","Faction: Adeptus Astartes","Tacticus","Primaris Company Champion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "transports",
        name: "Razorback",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has  shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
            { name: "Transport", desc: "This model has a transport capacity of 6 Adeptus Astartes Infantry models.  It cannot transport JUMP PACK, WULFEN, PHOBOS, GRAVIS, CENTURION, TERMINATOR or TACTICUS models (excluding TACTICUS CHARACTER models that began the battle attached to a non-TACTICUS unit)" },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Faction: Adeptus Astartes","Dedicated Transport","Transport","Razorback"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Redemptor Dreadnought",
        pts: 205,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.redemptor_fist,
        ],
        rangedWeapons: [
            space_marines_weapons.twin_fragstorm_grenade_launcher,
            space_marines_weapons.twin_storm_bolter,
            space_marines_weapons.icarus_rocket_pod,
            space_marines_weapons.macro_plasma_incinerator_standard,
            space_marines_weapons.macro_plasma_incinerator_supercharge,
            space_marines_weapons.heavy_onslaught_gatling_cannon,
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.onslaught_gatling_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_fragstorm_grenade_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_storm_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.icarus_rocket_pod, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.macro_plasma_incinerator_standard, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.macro_plasma_incinerator_supercharge, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.heavy_onslaught_gatling_cannon, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.onslaught_gatling_cannon, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.redemptor_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Duty Eternal", desc: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack" },
        ],
        keywords: ["Vehicle","Walker","Imperium","Redemptor Dreadnought","Faction: Adeptus Astartes","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Reiver Squad",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.combat_knife_3,
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.special_issue_bolt_pistol,
            space_marines_weapons.bolt_carbine,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.special_issue_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_carbine, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.combat_knife_3, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Fearsome Assault", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test subtracting 1 from that test" },
            { name: "Terror Troops", desc: "While an enemy unit (excluding Monsters and Vehicles) is within 3\" of one or more units with this ability, subtract 1 from the Objective Control characteristic of models in that enemy unit." },
            { name: "Grapnel Launchers", desc: "Each time the bearer’s unit makes a Normal, Advance, Fall Back or Charge move, ignore any vertical distance when determining the total distance the\nbearer can be moved during that move" },
            { name: "Reiver Grav-chute", desc: "The bearer has the Deep Strike ability." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Phobos","Reiver Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "transports",
        name: "Relic Razorback [Legends]",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.twin_assault_cannon,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_lascannon,
            space_marines_weapons.multi_melta_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_assault_cannon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has  shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
            { name: "Transport", desc: "This model has a transport capacity of 6 Adeptus Astartes Infantry models. It cannot transport Jump Pack, Wulfen, Tacticus, Phobos, Gravis, Centurion or Terminator models." },
        ],
        keywords: ["Vehicle","Smoke","Transport","Dedicated Transport","Imperium","Relic Razorback","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Relic Terminator Squad [Legends]",
        pts: 200,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.twin_lightning_claws_4,
            space_marines_weapons.power_fist_2,
            space_marines_weapons.power_weapon_2,
            space_marines_weapons.chainfist_2,
        ],
        rangedWeapons: [
            space_marines_weapons.volkite_charger,
            space_marines_weapons.plasma_blaster_standard,
            space_marines_weapons.plasma_blaster_supercharge,
            space_marines_weapons.reaper_autocannon,
            space_marines_weapons.combi_bolter,
            space_marines_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.volkite_charger, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_blaster_standard, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.plasma_blaster_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.reaper_autocannon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.combi_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.twin_lightning_claws_4, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.chainfist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Fury of the First", desc: "Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill or Weapon Skill characteristic and/or to the Hit roll. In addition, each time a model in this unit makes an attack that targets the enemy unit you selected for the Oath of Moment ability this turn, add 1 to the Hit roll" },
            { name: "Grenade Harness", desc: "The bearer has the Grenades keyword" },
        ],
        keywords: ["Infantry","Imperium","Terminator","Relic Terminator Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Repulsor",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_4,
        ],
        rangedWeapons: [
            space_marines_weapons.hunter_slayer_missile,
            space_marines_weapons.repulsor_defensive_array,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_lascannon,
            space_marines_weapons.heavy_onslaught_gatling_cannon,
            space_marines_weapons.las_talon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hunter_slayer_missile, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.repulsor_defensive_array, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.heavy_onslaught_gatling_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.las_talon, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.armoured_hull_4, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 14 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION model takes up the space of 3 models." },
            { name: "Emergency Combat Embarkation", desc: "Once per turn, in your opponent’s Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move, you can select one Adeptus Astartes unit from your army that was selected as a target of that charge. Provided that unit is not within Engagement Range of any enemy units and every model in that unit is within 3\" of this Transport, it can embark within this Transport. The charging unit can then select new targets for its charge." },
        ],
        keywords: ["Vehicle","Imperium","Smoke","Repulsor","Faction: Adeptus Astartes","Transport"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Repulsor Executioner",
        pts: 230,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_4,
        ],
        rangedWeapons: [
            space_marines_weapons.repulsor_executioner_defensive_array,
            space_marines_weapons.heavy_laser_destroyer,
            space_marines_weapons.heavy_onslaught_gatling_cannon,
            space_marines_weapons.icarus_rocket_pod,
            space_marines_weapons.ironhail_heavy_stubber,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_icarus_ironhail_heavy_stubber,
            space_marines_weapons.macro_plasma_incinerator_standard,
            space_marines_weapons.macro_plasma_incinerator_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.repulsor_executioner_defensive_array, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.heavy_laser_destroyer, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.heavy_onslaught_gatling_cannon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.icarus_rocket_pod, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.ironhail_heavy_stubber, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.twin_icarus_ironhail_heavy_stubber, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.macro_plasma_incinerator_standard, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.macro_plasma_incinerator_supercharge, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.armoured_hull_4, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 7 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
            { name: "Executioner", desc: "Each time this model makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Transport","Repulsor Executioner","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "transports",
        name: "Rhino",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Self Repair", desc: "At the end of your Command phase, this model regains 1 lost wound." },
            { name: "Transport", desc: "This model has a transport capacity of 12 ADEPTUS ASTARTES INFANTRY models. It cannot transport JUMP PACK, WULFEN, PHOBOS, GRAVIS, CENTURION, TERMINATOR or TACTICUS models (excluding TACTICUS CHARACTER models that began the battle attached to a non-TACTICUS unit)" },
        ],
        keywords: ["Imperium","Smoke","Dedicated Transport","Transport","Vehicle","Faction: Adeptus Astartes","Rhino"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Rhino Primaris [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.twin_plasma_gun_standard,
            space_marines_weapons.twin_plasma_gun_overcharge,
            space_marines_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.twin_plasma_gun_standard, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_plasma_gun_overcharge, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Self Repair", desc: "At the end of your Command phase, this model regains 1 lost wound." },
            { name: "Transport", desc: "This model has a transport capacity of 6 Adeptus Astartes Infantry models. It cannot transport Jump Pack, Wulfen, Phobos, Gravis, Centurion, Terminator or Tacticus models (except for Tacticus Character models that begin the battle attached to a non-Tacticus unit)." },
            { name: "Orbital Comms Array [Aura]", desc: "While a friendly Adeptus Astartes unit is within 6\" of the bearer, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP" },
        ],
        keywords: ["Vehicle","Smoke","Transport","Imperium","Rhino Primaris","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Scout Bike Squad [Legends]",
        pts: 75,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 4,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.combat_knife_4,
            space_marines_weapons.power_weapon_3,
            space_marines_weapons.power_fist_3,
            space_marines_weapons.thunder_hammer_2,
            space_marines_weapons.astartes_chainsword_3,
        ],
        rangedWeapons: [
            space_marines_weapons.astartes_shotgun,
            space_marines_weapons.astartes_grenade_launcher_krak,
            space_marines_weapons.astartes_grenade_launcher_frag,
            space_marines_weapons.twin_boltgun,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.boltgun,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.astartes_shotgun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.astartes_grenade_launcher_krak, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.astartes_grenade_launcher_frag, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.combat_knife_4, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.power_weapon_3, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.power_fist_3, selected: true},
            ],
            slot17: [
                {...space_marines_weapons.thunder_hammer_2, selected: true},
            ],
            slot18: [
                {...space_marines_weapons.astartes_chainsword_3, selected: true},
            ],
        },
        abilities: [
            { name: "Outflank", desc: "When this unit arrives from Strategic Reserves, it can be set up within your opponent’s deployment zone (all other restrictions still apply)." },
        ],
        keywords: ["Mounted","Grenades","Imperium","Smoke","Scout Bike Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Scout Sniper Squad [Legends]",
        pts: 75,
        units: 5,
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
            space_marines_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            space_marines_weapons.scout_sniper_rifle,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.missile_launcher_frag,
            space_marines_weapons.missile_launcher_krak,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.scout_sniper_rifle, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.missile_launcher_frag, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.missile_launcher_krak, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Concealed Positions", desc: "This unit can only be selected as the target of a ranged attack if the attacking model is within 12\"." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Scout Sniper Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Scout Squad",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
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
            space_marines_weapons.combat_knife_5,
            space_marines_weapons.close_combat_weapon_5,
            space_marines_weapons.astartes_chainsword_2,
        ],
        rangedWeapons: [
            space_marines_weapons.astartes_shotgun,
            space_marines_weapons.scout_sniper_rifle,
            space_marines_weapons.boltgun,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.heavy_bolter,
            space_marines_weapons.missile_launcher_frag,
            space_marines_weapons.missile_launcher_krak,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.astartes_shotgun, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.scout_sniper_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.missile_launcher_frag, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.missile_launcher_krak, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.combat_knife_5, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.close_combat_weapon_5, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
        },
        abilities: [
            { name: "Guerrilla Tactics", desc: "At the end of your opponent’s turn, if this unit is more than 6\" away from all enemy models, you can remove this unit from the battlefield and place it into\nStrategic Reserves." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Scout Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Stalker [Legends]",
        pts: 140,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 11,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.icarus_stormcannon,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.icarus_stormcannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Skyfire Protocols", desc: "Each time you target this model with the Overwatch Stratagem just after an enemy unit that can Fly starts or ends a Normal, Advance or Fall Back move, when resolving that Stratagem, in addition to shooting that enemy unit, you can select up to three additional enemy units within 24\" of this model that can Fly; this model can also shoot at each of those units with its Icarus stormcannons (provided each one is an eligible target), but when doing so, an unmodified Hit roll of 6 is required to score a hit." },
        ],
        keywords: ["Imperium","Vehicle","Smoke","Stalker","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Sternguard Veteran Squad",
        pts: 100,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_2,
            space_marines_weapons.power_weapon_5,
            space_marines_weapons.power_fist_5,
            space_marines_weapons.astartes_chainsword_5,
        ],
        rangedWeapons: [
            space_marines_weapons.sternguard_bolt_pistol,
            space_marines_weapons.sternguard_bolt_rifle,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.sternguard_heavy_bolter,
            space_marines_weapons.pyrecannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.sternguard_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.sternguard_bolt_rifle, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.sternguard_heavy_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.pyrecannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.power_weapon_5, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.power_fist_5, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.astartes_chainsword_5, selected: true},
            ],
        },
        abilities: [
            { name: "Sternguard Focus", desc: "Each time a model in this unit makes an attack that targets your Oath of Moment Target, you can re-roll the wound roll" },
        ],
        keywords: ["Infantry","Grenades","Imperium","Tacticus","Sternguard Veteran Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Storm Speeder Hailstrike",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.fragstorm_grenade_launcher,
            space_marines_weapons.onslaught_gatling_cannon,
            space_marines_weapons.twin_ironhail_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.fragstorm_grenade_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.onslaught_gatling_cannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_ironhail_heavy_stubber, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Hailstrike", desc: "Each time this model has shot, select one enemy unit (excluding MONSTERS or VEHICLES) that was hit by one or more of those attacks. Until the end of the phase, each time a friendly ADEPTUS ASTARTES unit makes a ranged attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per phase." },
        ],
        keywords: ["Vehicle","Fly","Imperium","Faction: Adeptus Astartes","Storm Speeder Hailstrike"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Storm Speeder Hammerstrike",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.hammerstrike_missile_launcher,
            space_marines_weapons.krakstorm_grenade_launcher,
            space_marines_weapons.melta_destroyer,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hammerstrike_missile_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.krakstorm_grenade_launcher, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.melta_destroyer, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Hammerstrike", desc: "Each time this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Imperium","Fly","Vehicle","Storm Speeder Hammerstrike","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Storm Speeder Thunderstrike",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            space_marines_weapons.stormfury_missiles,
            space_marines_weapons.thunderstrike_las_talon,
            space_marines_weapons.twin_icarus_rocket_pod,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.stormfury_missiles, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.thunderstrike_las_talon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_icarus_rocket_pod, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Thunderstrike", desc: "Each time this model has shot, select one enemy MONSTER or VEHICLE unit that was hit by one or more of those attacks. Until the end of the phase, each time a friendly ADEPTUS ASTARTES unit makes a ranged attack that targets that enemy unit, add 1 to the Wound roll." },
        ],
        keywords: ["Vehicle","Fly","Imperium","Storm Speeder Thunderstrike","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Stormhawk Interceptor",
        pts: 155,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            space_marines_weapons.icarus_stormcannon,
            space_marines_weapons.twin_assault_cannon,
            space_marines_weapons.las_talon,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.typhoon_missile_launcher_frag,
            space_marines_weapons.typhoon_missile_launcher_krak,
            space_marines_weapons.skyhammer_missile_launcher,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.icarus_stormcannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_assault_cannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.las_talon, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.typhoon_missile_launcher_frag, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.typhoon_missile_launcher_krak, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.skyhammer_missile_launcher, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll" },
        ],
        keywords: ["Aircraft","Vehicle","Imperium","Fly","Smoke","Faction: Adeptus Astartes","Stormhawk Interceptor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Stormraven Gunship",
        pts: 280,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 3,
            wounds: 14,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_4,
        ],
        rangedWeapons: [
            space_marines_weapons.stormstrike_missile_launcher,
            space_marines_weapons.twin_heavy_plasma_cannon_standard,
            space_marines_weapons.twin_heavy_plasma_cannon_supercharge,
            space_marines_weapons.hurricane_bolter,
            space_marines_weapons.twin_assault_cannon,
            space_marines_weapons.twin_lascannon,
            space_marines_weapons.typhoon_missile_launcher_frag,
            space_marines_weapons.typhoon_missile_launcher_krak,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.stormstrike_missile_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_heavy_plasma_cannon_standard, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.twin_heavy_plasma_cannon_supercharge, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.hurricane_bolter, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_assault_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.typhoon_missile_launcher_frag, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.typhoon_missile_launcher_krak, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.twin_multi_melta, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.armoured_hull_4, selected: true},
            ],
        },
        abilities: [
            { name: "Armoured Resilience", desc: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack." },
            { name: "Transport", desc: "This model has a transport capacity of 12 Adeptus Astartes Infantry models and 1 Dreadnought model. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
        ],
        keywords: ["Aircraft","Vehicle","Imperium","Fly","Transport","Stormraven Gunship","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Stormtalon Gunship",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            space_marines_weapons.skyhammer_missile_launcher_2,
            space_marines_weapons.twin_assault_cannon,
            space_marines_weapons.typhoon_missile_launcher_frag,
            space_marines_weapons.typhoon_missile_launcher_krak,
            space_marines_weapons.twin_heavy_bolter,
            space_marines_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.skyhammer_missile_launcher_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_assault_cannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.typhoon_missile_launcher_frag, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.typhoon_missile_launcher_krak, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Strafing Run", desc: "Each time this model makes a ranged attack that targets a unit that cannot Fly, add 1 to the Hit roll." },
        ],
        keywords: ["Aircraft","Vehicle","Imperium","Fly","Stormtalon Gunship","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Suppressor Squad",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.accelerator_autocannon,
            space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.accelerator_autocannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Suppression Fire", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks made with an accelerator autocannon. Until the start of your next turn, while this unit is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Fly","Jump Pack","Suppressor Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "battleline",
        name: "Tactical Squad",
        pts: 140,
        units: 10,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.close_combat_weapon_5,
            space_marines_weapons.twin_lightning_claws_3,
            space_marines_weapons.astartes_chainsword_2,
            space_marines_weapons.power_fist_3,
            space_marines_weapons.thunder_hammer_2,
            space_marines_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.boltgun,
            space_marines_weapons.grav_pistol,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.flamer,
            space_marines_weapons.meltagun,
            space_marines_weapons.plasma_gun_standard,
            space_marines_weapons.plasma_gun_supercharge,
            space_marines_weapons.grav_gun,
            space_marines_weapons.heavy_bolter,
            space_marines_weapons.multi_melta,
            space_marines_weapons.lascannon,
            space_marines_weapons.missile_launcher_frag,
            space_marines_weapons.missile_launcher_krak,
            space_marines_weapons.plasma_cannon_standard,
            space_marines_weapons.plasma_cannon_supercharge,
            space_marines_weapons.grav_cannon_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.boltgun, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.meltagun, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.plasma_gun_standard, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.grav_gun, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.multi_melta, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.lascannon, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.missile_launcher_frag, selected: true},
            ],
            slot17: [
                {...space_marines_weapons.missile_launcher_krak, selected: true},
            ],
            slot18: [
                {...space_marines_weapons.plasma_cannon_standard, selected: true},
            ],
            slot19: [
                {...space_marines_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot20: [
                {...space_marines_weapons.grav_cannon_2, selected: true},
            ],
            slot21: [
                {...space_marines_weapons.close_combat_weapon_5, selected: true},
            ],
            slot22: [
                {...space_marines_weapons.twin_lightning_claws_3, selected: true},
            ],
            slot23: [
                {...space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot24: [
                {...space_marines_weapons.power_fist_3, selected: true},
            ],
            slot25: [
                {...space_marines_weapons.thunder_hammer_2, selected: true},
            ],
            slot26: [
                {...space_marines_weapons.power_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Combat Squads", desc: "At the start of the Declare Battle Formations step, before any units have been set up, this unit can be split into two units, each containing five models" },
        ],
        keywords: ["Infantry","Battleline","Grenades","Imperium","Faction: Adeptus Astartes","Tactical Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Tarantula Air Defense Battery [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_5,
        ],
        rangedWeapons: [
            space_marines_weapons.tarantula_air_defence_missiles,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.tarantula_air_defence_missiles, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.armoured_hull_5, selected: true},
            ],
        },
        abilities: [
            { name: "Sentry Programming", desc: "You can target this model with the Fire Overwatch Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this turn.  This model can only be targeted with that Stratagem once\nper turn." },
        ],
        keywords: ["Vehicle","Imperium","Tarantula Air Defence Battery","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Techmarine",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.omnissian_power_axe,
            space_marines_weapons.servo_arm,
        ],
        rangedWeapons: [
            space_marines_weapons.forge_bolter,
            space_marines_weapons.grav_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.forge_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.grav_pistol_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.omnissian_power_axe, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.servo_arm, selected: true},
            ],
        },
        abilities: [
            { name: "Techmarine", desc: "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, this model has the Lone Operative ability" },
            { name: "Blessing of the Omnissiah", desc: "In your Command phase, you can select one friendly Adeptus Astartes Vehicle model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn." },
            { name: "Vengeance of the Omnissiah", desc: "If a friendly Adeptus Astartes Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s Omnissian power axe has an\nAttacks characteristic of 7." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Desolation Squad\n- Devastator Squad\n- Intercessor Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Techmarine"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Techmarine on Bike [Legends]",
        pts: 110,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.plasma_cutter,
            space_marines_weapons.omnissian_power_axe,
            space_marines_weapons.astartes_chainsword,
            space_marines_weapons.thunder_hammer_3,
            space_marines_weapons.power_fist_5,
            space_marines_weapons.servo_arm,
        ],
        rangedWeapons: [
            space_marines_weapons.boltgun_2,
            space_marines_weapons.grav_pistol_3,
            space_marines_weapons.conversion_beamer,
            space_marines_weapons.bolt_pistol_2,
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.combi_weapon,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.flamer,
            space_marines_weapons.twin_boltgun,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.boltgun_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.grav_pistol_3, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.conversion_beamer, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.combi_weapon, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.twin_boltgun, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.plasma_cutter, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.omnissian_power_axe, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.thunder_hammer_3, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.power_fist_5, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.servo_arm, selected: true},
            ],
        },
        abilities: [
            { name: "Blessing of the Omnissiah", desc: "In your Command phase, you can select one friendly Adeptus Astartes Vehicle model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
            { name: "Techmarine", desc: "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, this model has the Lone Operative ability" },
            { name: "Vengeance of the Omnissiah", desc: "If a friendly Adeptus Astartes Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s Omnissian power axe has an\nAttacks characteristic of 7." },
        ],
        keywords: ["Character","Mounted","Grenades","Imperium","Techmarine","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Terminator Assault Squad",
        pts: 180,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.thunder_hammer_5,
            space_marines_weapons.twin_lightning_claws_5,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.thunder_hammer_5, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.twin_lightning_claws_5, selected: true},
            ],
        },
        abilities: [
            { name: "Teleport Homer", desc: "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" horizontally of that token and not within 9\" horizontally of any enemy models. That token is then removed." },
            { name: "Terminatus Assault", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of this unit must take a Battle-Shock test." },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 4." },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 4." },
        ],
        keywords: ["Infantry","Imperium","Terminator Assault Squad","Terminator","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Terminator Squad",
        pts: 170,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_marines_weapons.power_weapon_2,
            space_marines_weapons.chainfist_2,
            space_marines_weapons.power_fist_2,
        ],
        rangedWeapons: [
            space_marines_weapons.storm_bolter,
            space_marines_weapons.cyclone_missile_launcher_frag,
            space_marines_weapons.cyclone_missile_launcher_krak,
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.cyclone_missile_launcher_frag, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.cyclone_missile_launcher_krak, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.assault_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.chainfist_2, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Teleport Homer", desc: "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" horizontally of that token and not within 9\" horizontally of any enemy models. That token is then removed." },
            { name: "Fury of the First", desc: "Each time a model in this unit makes an attack that targets your Oath of Moment target, add 1 to the Hit roll." },
        ],
        keywords: ["Infantry","Imperium","Terminator","Terminator Squad","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Terminus Ultra [Legends]",
        pts: 285,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 6,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            space_marines_weapons.terminus_lascannon_standard,
            space_marines_weapons.terminus_lascannon_overload,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.terminus_lascannon_standard, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.terminus_lascannon_overload, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Vehicle","Smoke","Transport","Imperium","Terminus Ultra","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Thunderfire Cannon [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 3,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.gunners_servo_arms,
            space_marines_weapons.plasma_cutter_2,
            space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            space_marines_weapons.thunderfire_cannon,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.flamer,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.thunderfire_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.flamer, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.gunners_servo_arms, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.plasma_cutter_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Tremor Shells", desc: "In your Shooting phase, after this unit has shot, if an enemy Infantry unit was hit by one or more attacks made by this unit’s thunderfire cannon this  phase, until the end of your opponent’s next turn, that enemy unit is shaken. While a unit is shaken, subtract 2 from that unit’s Move characteristic, and subtract 2 from Advance and Charge rolls made for that unit." },
            { name: "Crewed Artillery", desc: "If one model in this unit is destroyed, the remaining model in this unit is also destroyed" },
        ],
        keywords: ["Vehicle","Faction: Adeptus Astartes","Imperium","Thunderfire Cannon","Artillery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Thunderhawk Gunship",
        pts: 840,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 12,
            saving: 2,
            wounds: 30,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            space_marines_weapons.hellstrike_missile_battery,
            space_marines_weapons.thunderhawk_heavy_cannon,
            space_marines_weapons.turbo_laser_destructor,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hellstrike_missile_battery, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.thunderhawk_heavy_cannon, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.turbo_laser_destructor, selected: true},
            ],
        },
        abilities: [
            { name: "Aerial Assault", desc: "Each time a unit with the Deep Strike ability disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Damaged: 1-10 wounds remaining", desc: "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Thunderhawk Cluster Bombs", desc: "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Adeptus Astartes","Vehicle","Titanic","Fly","Aircraft","Transport","Imperium","Thunderhawk Gunship"],
        pointOptions: [],
        transport: "This model has a transport capacity of 30 ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models. Each CENTURION model takes up the space of 3 models. Each MOUNTED model takes up the space of 4 models.",
    },
    {
        army: "space_marines",
        class: "other",
        name: "Thunderhawk Transporter [Legends]",
        pts: 495,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 12,
            saving: 2,
            wounds: 30,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_hull_6,
        ],
        rangedWeapons: [
            space_marines_weapons.hellstrike_missile_battery,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.hellstrike_missile_battery, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.armoured_hull_6, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-10 wounds remaining", desc: "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Transport", desc: "This model has a transport capacity of 15 Adeptus Astartes Infantry or Adeptus Astartes Mounted models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models. Each Centurion model takes up the space of 3 models. Each Mounted model takes up the space of 4 models. This model can also transport up to 2 Adeptus Astartes Vehicle models (excluding Aircraft and Titanic models). Models embarked within Transport Vehicles that are themselves being transported by this model do not count towards the transport capacity of this model." },
            { name: "Aerial Deployment", desc: "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
        ],
        keywords: ["Vehicle","Titanic","Fly","Aircraft","Transport","Imperium","Thunderhawk Transporter","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Vanguard Veteran Squad [Legends]",
        pts: 120,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.heirloom_weapon,
            space_marines_weapons.vanguard_veteran_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.grav_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.heirloom_weapon, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.vanguard_veteran_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Vanguard Assault", desc: "Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability." },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save" },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save" },
            { name: "Vanguard Assault", desc: "Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Vanguard Veteran Squad"],
        pointOptions: [{ models: 6, pts: 240 }],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Vanguard Veteran Squad with Jump Packs",
        pts: 100,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.vanguard_veteran_weapon,
        ],
        rangedWeapons: [
            space_marines_weapons.plasma_pistol_supercharge,
            space_marines_weapons.plasma_pistol_standard,
            space_marines_weapons.inferno_pistol,
            space_marines_weapons.hand_flamer,
            space_marines_weapons.bolt_pistol,
            space_marines_weapons.grav_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.inferno_pistol, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.hand_flamer, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.grav_pistol, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.vanguard_veteran_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Vanguard Assault", desc: "Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability." },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save" },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save" },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Vanguard Veteran Squad with Jump Packs","Jump Pack","Fly","Vanguard Veteran Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "characters",
        name: "Venerable Battle-Brother [Crucible]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_feet_3,
            space_marines_weapons.brutalis_fists_2,
            space_marines_weapons.brutalis_talons_strike_2,
            space_marines_weapons.brutalis_talons_sweep_2,
            space_marines_weapons.redemptor_fist_2,
        ],
        rangedWeapons: [
            space_marines_weapons.ballistus_missile_launcher_frag_2,
            space_marines_weapons.ballistus_missile_launcher_krak_2,
            space_marines_weapons.brutalis_bolt_rifles_2,
            space_marines_weapons.onslaught_gatling_cannon_2,
            space_marines_weapons.ballistus_lascannon_2,
            space_marines_weapons.heavy_onslaught_gatling_cannon_2,
            space_marines_weapons.macro_plasma_incinerator_standard_2,
            space_marines_weapons.macro_plasma_incinerator_supercharge_2,
            space_marines_weapons.twin_fragstorm_grenade_launcher_2,
            space_marines_weapons.twin_storm_bolter_2,
            space_marines_weapons.twin_heavy_bolter_2,
            space_marines_weapons.twin_multi_melta_2,
            space_marines_weapons.icarus_rocket_pod_2,
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.twin_icarus_ironhail_heavy_stubber_2,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.ballistus_missile_launcher_frag_2, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.ballistus_missile_launcher_krak_2, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.brutalis_bolt_rifles_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.onslaught_gatling_cannon_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.ballistus_lascannon_2, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.heavy_onslaught_gatling_cannon_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.macro_plasma_incinerator_standard_2, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.macro_plasma_incinerator_supercharge_2, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.twin_fragstorm_grenade_launcher_2, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.twin_storm_bolter_2, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.twin_heavy_bolter_2, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.twin_multi_melta_2, selected: true},
            ],
            slot13: [
                {...space_marines_weapons.icarus_rocket_pod_2, selected: true},
            ],
            slot14: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot15: [
                {...space_marines_weapons.twin_icarus_ironhail_heavy_stubber_2, selected: true},
            ],
            slot16: [
                {...space_marines_weapons.armoured_feet_3, selected: true},
            ],
            slot17: [
                {...space_marines_weapons.brutalis_fists_2, selected: true},
            ],
            slot18: [
                {...space_marines_weapons.brutalis_talons_strike_2, selected: true},
            ],
            slot19: [
                {...space_marines_weapons.brutalis_talons_sweep_2, selected: true},
            ],
            slot20: [
                {...space_marines_weapons.redemptor_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Wisdom of the Ancients [Aura]", desc: "When a friendly **Adeptus Astartes Infantry** unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1" },
        ],
        keywords: ["Character","Vehicle","Dreadnought","Venerable Battle-Brother","Faction: Adeptus Astartes","Imperium","Walker","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Venerable Dreadnought [Legends]",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_feet_2,
            space_marines_weapons.dreadnought_combat_weapon,
            space_marines_weapons.close_combat_weapon_8,
        ],
        rangedWeapons: [
            space_marines_weapons.heavy_flamer,
            space_marines_weapons.storm_bolter,
            space_marines_weapons.missile_launcher_frag_2,
            space_marines_weapons.missile_launcher_krak_2,
            space_marines_weapons.assault_cannon,
            space_marines_weapons.multi_melta_2,
            space_marines_weapons.heavy_plasma_cannon_standard,
            space_marines_weapons.heavy_plasma_cannon,
            space_marines_weapons.dreadnought_inferno_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.missile_launcher_frag_2, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.missile_launcher_krak_2, selected: true},
            ],
            slot5: [
                {...space_marines_weapons.assault_cannon, selected: true},
            ],
            slot6: [
                {...space_marines_weapons.multi_melta_2, selected: true},
            ],
            slot7: [
                {...space_marines_weapons.heavy_plasma_cannon_standard, selected: true},
            ],
            slot8: [
                {...space_marines_weapons.heavy_plasma_cannon, selected: true},
            ],
            slot9: [
                {...space_marines_weapons.dreadnought_inferno_cannon, selected: true},
            ],
            slot10: [
                {...space_marines_weapons.armoured_feet_2, selected: true},
            ],
            slot11: [
                {...space_marines_weapons.dreadnought_combat_weapon, selected: true},
            ],
            slot12: [
                {...space_marines_weapons.close_combat_weapon_8, selected: true},
            ],
        },
        abilities: [
            { name: "Wisdom of the Ancients [Aura]", desc: "While a friendly Adeptus Astartes Infantry unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1." },
        ],
        keywords: ["Vehicle","Venerable","Walker","Smoke","Imperium","Dreadnought","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Vindicator",
        pts: 185,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 9,
            tough: 11,
            saving: 2,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.demolisher_cannon,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.demolisher_cannon, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Siege Shield", desc: "When making ranged attacks with its demolisher cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Faction: Adeptus Astartes","Vindicator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_marines",
        class: "other",
        name: "Whirlwind",
        pts: 190,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            space_marines_weapons.whirlwind_vengeance_launcher,
            space_marines_weapons.hunter_killer_missile,
            space_marines_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_marines_weapons.whirlwind_vengeance_launcher, selected: true},
            ],
            slot2: [
                {...space_marines_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...space_marines_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Pinning Bombardment", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Whirlwind vengeance launcher scored a hit against an enemy Infantry unit, that unit must take a Battle-shock test." },
        ],
        keywords: ["Imperium","Vehicle","Smoke","Faction: Adeptus Astartes","Whirlwind"],
        pointOptions: [],
        transport: null,
    },
]

export default space_marines_army
