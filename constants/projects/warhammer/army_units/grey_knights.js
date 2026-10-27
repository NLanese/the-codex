// AUTO-GENERATED units for Grey Knights (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import grey_knights_weapons from "../weapons/grey_knights"

const grey_knights_army = [
    {
        army: "grey_knights",
        class: "characters",
        name: "Brother-Captain",
        pts: 90,
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
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psycannon,
            grey_knights_weapons.psilencer,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.psycannon, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psilencer, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Brotherhood Terminator Squad\n- Paladin Squad" },
            { name: "Hammerhand (Psychic)", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [Lethal Hits] ability." },
            { name: "Eye of Judgement (Psychic)", desc: "Each time this model makes an attack, you can re-roll the Wound roll." },
        ],
        keywords: ["Brother-Captain","Terminator","Faction: Grey Knights","Psyker","Infantry","Imperium","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Brother-Captain Stern [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_sword,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.nemesis_force_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Brotherhood Terminator Squad\n- Paladin Squad" },
            { name: "Exemplar of the Silvered Host", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, on a Critical Wound, the target suffers 1 mortal wound in addition to any normal damage." },
            { name: "Strands of Fate (Psychic)", desc: "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Imperium","Psyker","Faction: Grey Knights","Terminator","Brother-Captain Stern"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Brotherhood Champion",
        pts: 70,
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
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_2,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.nemesis_force_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Purgation Squad\n- Strike Squad" },
            { name: "Clarion of Haste (Psychic)", desc: "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Advanced." },
            { name: "Inspiring Exemplar", desc: "Each time this model destroys a Character model in the Fight phase, you gain 1CP and, until the end of the battle, add 1 to the Attacks characteristic of its Nemesis force weapon." },
        ],
        keywords: ["Character","Infantry","Psyker","Imperium","Faction: Grey Knights","Brotherhood Champion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Brotherhood Chaplain",
        pts: 65,
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
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.crozius_arcanum,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.crozius_arcanum, selected: true},
            ],
        },
        abilities: [
            { name: "Zealous Path", desc: "While this model is leading a unit, you can re-roll Charge rolls made for that unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Brotherhood Terminator Squad\n- Paladin Squad" },
        ],
        keywords: ["Brotherhood Chaplain","Faction: Grey Knights","Terminator","Psyker","Imperium","Infantry","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Brotherhood Librarian",
        pts: 80,
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
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_3,
        ],
        rangedWeapons: [
            grey_knights_weapons.combi_weapon,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.vortex_of_doom,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.combi_weapon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.vortex_of_doom, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.nemesis_force_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Haloed in Soulfire (Psychic)", desc: "While this model is leading a unit, that unit can only be selected as the target of a ranged attack if the attacking model is within 18\"." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Brotherhood Terminator Squad**\n- **Paladin Squad**" },
            { name: "Sanctic Hood", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks." },
        ],
        keywords: ["Brotherhood Librarian","Faction: Grey Knights","Imperium","Terminator","Infantry","Character","Psyker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Brotherhood Techmarine",
        pts: 70,
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
            grey_knights_weapons.servo_arm,
            grey_knights_weapons.omnissian_power_axe,
        ],
        rangedWeapons: [
            grey_knights_weapons.grav_pistol,
            grey_knights_weapons.forge_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.grav_pistol, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.forge_bolter, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.servo_arm, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.omnissian_power_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Strike Squad\n- Purgation Squad\n- Purifier Squad" },
            { name: "Guardians of the Machine", desc: "Each time an enemy unit ends a Charge move within Engagement Range of one or more **Grey Knights Vehicle** models from your army and within 6\" of this model's unit, you can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Blessing of the Omnissiah", desc: "In your Command phase, you can select one friendly **Grey Knights Vehicle** model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that **Vehicle** model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn." },
            { name: "Techmarine", desc: "While this model is within 3\" of one or more friendly **Grey Knights Vehicle** units, this model has the Lone Operative ability." },
        ],
        keywords: ["Character","Infantry","Psyker","Imperium","Faction: Grey Knights","Brotherhood Techmarine"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "battleline",
        name: "Brotherhood Terminator Squad",
        pts: 150,
        units: 1,
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
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_4,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psycannon_2,
            grey_knights_weapons.psilencer_2,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.psycannon_2, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psilencer_2, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_force_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Force Edge (Psychic)", desc: "Each time a model in this unit makes a melee attack that targets a unit (excluding **Vehicles** or **Monsters**), improve the Armour Penetration characteristic of that attack by 1." },
            { name: "Ancient's Banner", desc: "Add 1 to the Objective Control characteristic of models in the bearer’s unit." },
            { name: "Apothecary's narthecium", desc: "In your Command phase, if the bearer is not destroyed, you can return 1 destroyed model (excluding **Characters**) to the bearer’s unit." },
        ],
        keywords: ["Battleline","Infantry","Grenades","Psyker","Imperium","Faction: Grey Knights","Terminator","Brotherhood Terminator Squad"],
        pointOptions: [{ models: 5, pts: 185 }, { models: 6, pts: 300 }, { models: 9, pts: 375 }],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Castellan Crowe",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.black_blade_of_antwyr,
        ],
        rangedWeapons: [
            grey_knights_weapons.purifying_flame,
            grey_knights_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.purifying_flame, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.black_blade_of_antwyr, selected: true},
            ],
        },
        abilities: [
            { name: "Champion of the Order of Purifiers (Psychic)", desc: "While this model is leading a unit, add 1 to the Attacks characteristic of Purifying Flame weapons equipped by that unit." },
            { name: "Foesight (Psychic)", desc: "Each time this model makes an attack that targets a **Character** unit, you can re-roll the Hit roll." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Purifier Squad" },
        ],
        keywords: ["Castellan Crowe","Faction: Grey Knights","Psyker","Imperium","Epic Hero","Infantry","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Champion of Titan [Crucible]",
        pts: 90,
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
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Might of Titan", desc: "Once per battle, at the start of a phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks and Strength characteristics of melee weapons equipped by this model." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Purgation Squad**\n- **Strike Squad**" },
        ],
        keywords: ["Character","Infantry","Crucible","Psyker","Grenades","Imperium","Faction: Grey Knights","Champion of Titan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Dreadknight Champion [Crucible]",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 2,
            wounds: 13,
            leader: 6,
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Surge of Wrath", desc: "Each time this model makes a melee attack that targets a **Monster** or **Vehicle** unit, you can re-roll the Hit roll, you can re-roll the Wound roll and you can re-roll the Damage roll." },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "When Damaged, subtract 1 from Hit rolls when it makes attacks." },
        ],
        keywords: ["Character","Crucible","Psyker","Imperium","Faction: Grey Knights","Vehicle","Walker","Dreadknight Champion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Grand Master",
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
            wounds: 7,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_5,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psycannon,
            grey_knights_weapons.psilencer,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.psycannon, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psilencer, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_force_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Might of Titan (Psychic)", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks and Strength characteristics of melee weapons equipped by this model." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Brotherhood Terminator Squad**\n- **Paladin Squad**" },
        ],
        keywords: ["Infantry","Character","Grenades","Psyker","Faction: Grey Knights","Terminator","Grand Master","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Grand Master in Nemesis Dreadknight",
        pts: 225,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 2,
            wounds: 13,
            leader: 6,
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_mace,
            grey_knights_weapons.nemesis_flail,
            grey_knights_weapons.dreadfists,
            grey_knights_weapons.nemesis_daemon_greathammer,
            grey_knights_weapons.nemesis_greatsword_strike,
            grey_knights_weapons.nemesis_greatsword_sweep,
        ],
        rangedWeapons: [
            grey_knights_weapons.sublimator,
            grey_knights_weapons.gatling_psilencer,
            grey_knights_weapons.heavy_incinerator,
            grey_knights_weapons.heavy_psycannon,
            grey_knights_weapons.fragstorm_grenade_launcher,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.sublimator, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.gatling_psilencer, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.heavy_incinerator, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.heavy_psycannon, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.fragstorm_grenade_launcher, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.nemesis_mace, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.nemesis_flail, selected: true},
            ],
            slot8: [
                {...grey_knights_weapons.dreadfists, selected: true},
            ],
            slot9: [
                {...grey_knights_weapons.nemesis_daemon_greathammer, selected: true},
            ],
            slot10: [
                {...grey_knights_weapons.nemesis_greatsword_strike, selected: true},
            ],
            slot11: [
                {...grey_knights_weapons.nemesis_greatsword_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Surge of Wrath (Psychic)", desc: "Each time this model makes a melee attack that targets a **Monster** or **Vehicle** unit, you can re-roll the Hit roll, you can re-roll the Wound roll and you can re-roll the Damage roll." },
        ],
        keywords: ["Character","Vehicle","Walker","Psyker","Imperium","Grand Master in Nemesis Dreadknight","Faction: Grey Knights"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Grand Master Voldus",
        pts: 110,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 7,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.malleus_argyrum,
        ],
        rangedWeapons: [
            grey_knights_weapons.searing_purity,
            grey_knights_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.searing_purity, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.malleus_argyrum, selected: true},
            ],
        },
        abilities: [
            { name: "Sanctuary (Psychic)", desc: "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll." },
            { name: "Hammer Aflame (Psychic)", desc: "Each time this model’s unit is selected to fight, you can select one enemy unit within Engagement Range of this model’s unit and roll one D6: on a 2-3, that enemy unit suffers 1 mortal wound; on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers D3+3 mortal wounds." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Brotherhood Terminator Squad\n- Paladin Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Psyker","Imperium","Faction: Grey Knights","Terminator","Grand Master Voldus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Grey Knights Dreadnought [Legends]",
        pts: 160,
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
            grey_knights_weapons.dreadnought_combat_weapon,
            grey_knights_weapons.armoured_feet,
            grey_knights_weapons.nemesis_doomglaive,
        ],
        rangedWeapons: [
            grey_knights_weapons.missile_launcher_frag,
            grey_knights_weapons.missile_launcher_krak,
            grey_knights_weapons.assault_cannon,
            grey_knights_weapons.heavy_plasma_cannon_standard,
            grey_knights_weapons.heavy_plasma_cannon_supercharge,
            grey_knights_weapons.multi_melta,
            grey_knights_weapons.twin_lascannon,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.heavy_flamer,
            grey_knights_weapons.heavy_psycannon_2,
            grey_knights_weapons.incinerator,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.assault_cannon, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.heavy_plasma_cannon_standard, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.heavy_plasma_cannon_supercharge, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.multi_melta, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.twin_lascannon, selected: true},
            ],
            slot8: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot9: [
                {...grey_knights_weapons.heavy_flamer, selected: true},
            ],
            slot10: [
                {...grey_knights_weapons.heavy_psycannon_2, selected: true},
            ],
            slot11: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot12: [
                {...grey_knights_weapons.dreadnought_combat_weapon, selected: true},
            ],
            slot13: [
                {...grey_knights_weapons.armoured_feet, selected: true},
            ],
            slot14: [
                {...grey_knights_weapons.nemesis_doomglaive, selected: true},
            ],
        },
        abilities: [
            { name: "Wisdom of the Ancients (Aura)", desc: "While a friendly **Grey Knights Infantry** unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
        ],
        keywords: ["Dreadnought","Faction: Grey Knights","Walker","Vehicle","Psyker","Smoke","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "transports",
        name: "Grey Knights Relic Razorback [Legends]",
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            grey_knights_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            grey_knights_weapons.twin_psycannon,
            grey_knights_weapons.twin_assault_cannon,
            grey_knights_weapons.twin_lascannon,
            grey_knights_weapons.twin_heavy_bolter,
            grey_knights_weapons.multi_melta,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.twin_psycannon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.twin_assault_cannon, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.twin_lascannon, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.multi_melta, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.hunter_killer_missile, selected: true},
            ],
            slot8: [
                {...grey_knights_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Faction: Grey Knights","Dedicated Transport","Vehicle","Transport","Smoke","Imperium","Relic Razorback"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 **Grey Knights Infantry** models. It cannot transport **Terminator** models.",
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Grey Knights Thunderhawk Gunship",
        pts: 805,
        units: 4,
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
            grey_knights_weapons.armored_hull,
        ],
        rangedWeapons: [
            grey_knights_weapons.lascannon,
            grey_knights_weapons.thunderhawk_heavy_cannon,
            grey_knights_weapons.turbo_laser_destructor,
            grey_knights_weapons.hellstrike_missile_battery,
            grey_knights_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.lascannon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.thunderhawk_heavy_cannon, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.turbo_laser_destructor, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.hellstrike_missile_battery, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.armored_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-10 Wounds Remaining", desc: "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Aerial Assault", desc: "Each time a unit with the Deep Strike ability disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Thunderhawk cluster bombs", desc: "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Thunderhawk Gunship","Faction: Grey Knights","Titanic","Vehicle","Fly","Transport","Aircraft","Imperium"],
        pointOptions: [],
        transport: "This model has a transport capacity of 30 **Grey Knights Infantry** models. Each **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Interceptor Squad",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 2,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_6,
            grey_knights_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psilencer_2,
            grey_knights_weapons.psycannon_2,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.psilencer_2, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psycannon_2, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_force_weapon_6, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Personal Teleporters", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\" as if it were your Movement phase. If it does, until the end of the turn, this unit is not eligible to declare a charge." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Fly","Psyker","Faction: Grey Knights","Interceptor Squad"],
        pointOptions: [{ models: 6, pts: 250 }],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Kaldor Draigo [Legends]",
        pts: 125,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 7,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.the_titansword,
        ],
        rangedWeapons: [
            grey_knights_weapons.scourging,
            grey_knights_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.scourging, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.the_titansword, selected: true},
            ],
        },
        abilities: [
            { name: "Untouchable Purity", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against mortal wounds" },
            { name: "One With the Warp (Psychic)", desc: "Once per battle, when this model’s unit declares a charge in the same turn it was set up on the battlefield using the Deep Strike or Teleport Assault ability, add 3 to the Charge roll." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Brotherhood Terminator Squad\n- Paladin Squad" },
            { name: "Supreme Commander", desc: "If this model is in your army, it must be your WARLORD." },
        ],
        keywords: ["Epic Hero","Infantry","Character","Grenades","Psyker","Terminator","Imperium","Kaldor Draigo","Faction: Grey Knights"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Land Raider",
        pts: 220,
        units: 1,
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
            grey_knights_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            grey_knights_weapons.godhammer_lascannon,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.hunter_killer_missile,
            grey_knights_weapons.multi_melta,
            grey_knights_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.godhammer_lascannon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.multi_melta, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Vehicle","Smoke","Transport","Imperium","Land Raider","Faction: Grey Knights"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Grey Knights Infantry** models. Each **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Land Raider Banisher",
        pts: 255,
        units: 1,
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
            grey_knights_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            grey_knights_weapons.twin_psycannon_2,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.hunter_killer_missile,
            grey_knights_weapons.multi_melta,
            grey_knights_weapons.heavy_incinerator,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.twin_psycannon_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.multi_melta, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.heavy_incinerator, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Land Raider Banisher", desc: "This model has a transport capacity of 12 Grey Knights Infantry models. Each Terminator model takes up the space of 2 models." },
        ],
        keywords: ["Transport","Vehicle","Smoke","Imperium","Land Raider Banisher","Faction: Grey Knights"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Land Raider Crusader",
        pts: 220,
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
            grey_knights_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.hunter_killer_missile,
            grey_knights_weapons.multi_melta,
            grey_knights_weapons.twin_assault_cannon,
            grey_knights_weapons.hurricane_bolter,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.multi_melta, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.twin_assault_cannon, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.hurricane_bolter, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Vehicle","Transport","Smoke","Imperium","Grenades","Land Raider Crusader","Faction: Grey Knights"],
        pointOptions: [],
        transport: "This model has a transport capacity of 16 **Grey Knights Infantry** models. Each **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Land Raider Redeemer",
        pts: 270,
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
            grey_knights_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            grey_knights_weapons.flamestorm_cannon,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.hunter_killer_missile,
            grey_knights_weapons.multi_melta,
            grey_knights_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.flamestorm_cannon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.multi_melta, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.twin_assault_cannon, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Land Raider Redeemer","Faction: Grey Knights","Grenades","Imperium","Vehicle","Transport","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 14 **Grey Knights Infantry** models. Each **Terminator** model takes up the space of 2 models",
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Nemesis Dreadknight",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 2,
            wounds: 13,
            leader: 6,
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_greatsword_strike,
            grey_knights_weapons.nemesis_greatsword_sweep,
            grey_knights_weapons.nemesis_daemon_greathammer,
            grey_knights_weapons.dreadfists,
        ],
        rangedWeapons: [
            grey_knights_weapons.gatling_psilencer,
            grey_knights_weapons.heavy_psycannon,
            grey_knights_weapons.heavy_incinerator,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.gatling_psilencer, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.heavy_psycannon, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.heavy_incinerator, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.nemesis_greatsword_strike, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_greatsword_sweep, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.nemesis_daemon_greathammer, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.dreadfists, selected: true},
            ],
        },
        abilities: [
            { name: "Indomitable Spirit (Psychic)", desc: "This model is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back." },
        ],
        keywords: ["Nemesis Dreadknight","Vehicle","Walker","Psyker","Imperium","Faction: Grey Knights"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Paladin Squad",
        pts: 180,
        units: 1,
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
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psycannon,
            grey_knights_weapons.psilencer,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.psycannon, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psilencer, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Attuned Onslaught (Psychic)", desc: "Each time this unit makes a Charge move, until the end of the turn, add 1 to the Damage characteristic of melee weapons equipped by **Paladin Squad** models in this unit." },
            { name: "Ancient's Banner", desc: "Add 1 to the Objective Control characteristic of models in the bearer’s unit." },
            { name: "Apothecary's narthecium", desc: "In your Command phase, if the bearer is not destroyed, you can return 1 destroyed model (excluding **Characters**) to the bearer’s unit." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Psyker","Faction: Grey Knights","Terminator","Paladin Squad"],
        pointOptions: [{ models: 5, pts: 225 }, { models: 6, pts: 360 }, { models: 9, pts: 450 }],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Purgation Squad",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_6,
            grey_knights_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psilencer_2,
            grey_knights_weapons.psycannon_2,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.psilencer_2, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psycannon_2, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_force_weapon_6, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Righteous Persecution", desc: "In your Shooting phase, after this unit has shot, select one enemy unit (excluding **Monsters** or **Vehicles**) hit by one or more of those attacks; until the start of your next turn, that enemy unit is pinned. While a unit is pinned, subtract 2 from that unit's Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Purgation Squad","Psyker","Imperium","Grenades","Infantry","Faction: Grey Knights"],
        pointOptions: [{ models: 6, pts: 230 }],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Purifier Squad",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_6,
            grey_knights_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.purifying_flame_2,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psilencer_2,
            grey_knights_weapons.psycannon_2,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.purifying_flame_2, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psilencer_2, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.psycannon_2, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.nemesis_force_weapon_6, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Sanctity of Purpose", desc: "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target is within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Purifier Squad","Faction: Grey Knights","Psyker","Imperium","Grenades","Infantry"],
        pointOptions: [{ models: 6, pts: 250 }],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "transports",
        name: "Razorback",
        pts: 85,
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
            grey_knights_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            grey_knights_weapons.twin_lascannon,
            grey_knights_weapons.twin_heavy_bolter,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.twin_lascannon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Focus", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly model that disembarked from this **Transport** this turn makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per turn." },
        ],
        keywords: ["Razorback","Faction: Grey Knights","Dedicated Transport","Vehicle","Transport","Smoke","Imperium"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 **Grey Knights Infantry** models. It cannot transport **Terminator** models.",
    },
    {
        army: "grey_knights",
        class: "transports",
        name: "Rhino",
        pts: 80,
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
            grey_knights_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Truesilver Aegis (Psychic)", desc: "While a friendly **Grey Knights** unit is wholly within 6\" of this model, models in that unit have the Feel No Pain 6+ ability against mortal wounds." },
        ],
        keywords: ["Rhino","Faction: Grey Knights","Transport","Vehicle","Dedicated Transport","Imperium","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Grey Knights Infantry** models. It cannot transport **Terminator** models.",
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Servitors [Legends]",
        pts: 50,
        units: 4,
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
            grey_knights_weapons.servo_arm_2,
            grey_knights_weapons.servitors_tools,
        ],
        rangedWeapons: [
            grey_knights_weapons.heavy_bolter,
            grey_knights_weapons.multi_melta_2,
            grey_knights_weapons.plasma_cannon_standard,
            grey_knights_weapons.plasma_cannon_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.multi_melta_2, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.plasma_cannon_standard, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.servo_arm_2, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.servitors_tools, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (6+)", desc: "This unit has a 6+ Invulnerable Save" },
            { name: "Mindlock", desc: "While a **Brotherhood Techmarine** model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by **Servitor** models in this unit by 1" },
            { name: "Servitor Retinue", desc: "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a **Brotherhood Techmarine** (a unit cannot have more than one **Servitors** unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly." },
            { name: "Retinue", desc: "While a **Brotherhood Techmarine** model is leading this unit, models in this unit have the Deep Strike and Teleport Assault abilities" },
        ],
        keywords: ["Infantry","Imperium","Servitors","Faction: Grey Knights"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Stormhawk Interceptor",
        pts: 160,
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
            grey_knights_weapons.armoured_hull,
        ],
        rangedWeapons: [
            grey_knights_weapons.las_talon,
            grey_knights_weapons.icarus_stormcannon,
            grey_knights_weapons.twin_heavy_bolter,
            grey_knights_weapons.typhoon_missile_launcher_frag,
            grey_knights_weapons.typhoon_missile_launcher_krak,
            grey_knights_weapons.skyhammer_missile_launcher,
            grey_knights_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.las_talon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.icarus_stormcannon, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.typhoon_missile_launcher_frag, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.typhoon_missile_launcher_krak, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.skyhammer_missile_launcher, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.twin_assault_cannon, selected: true},
            ],
            slot8: [
                {...grey_knights_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can **Fly**, add 1 to the Hit roll." },
        ],
        keywords: ["Stormhawk Interceptor","Faction: Grey Knights","Vehicle","Aircraft","Fly","Smoke","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
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
            grey_knights_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            grey_knights_weapons.stormstrike_missile_launcher,
            grey_knights_weapons.twin_heavy_plasma_cannon_standard,
            grey_knights_weapons.twin_heavy_plasma_cannon_supercharge,
            grey_knights_weapons.twin_multi_melta,
            grey_knights_weapons.hurricane_bolter,
            grey_knights_weapons.twin_assault_cannon,
            grey_knights_weapons.twin_lascannon,
            grey_knights_weapons.twin_heavy_bolter,
            grey_knights_weapons.typhoon_missile_launcher_frag,
            grey_knights_weapons.typhoon_missile_launcher_krak,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.stormstrike_missile_launcher, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.twin_heavy_plasma_cannon_standard, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.twin_heavy_plasma_cannon_supercharge, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.twin_multi_melta, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.hurricane_bolter, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.twin_assault_cannon, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.twin_lascannon, selected: true},
            ],
            slot8: [
                {...grey_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot9: [
                {...grey_knights_weapons.typhoon_missile_launcher_frag, selected: true},
            ],
            slot10: [
                {...grey_knights_weapons.typhoon_missile_launcher_krak, selected: true},
            ],
            slot11: [
                {...grey_knights_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Armoured Resilience", desc: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack." },
        ],
        keywords: ["Stormraven Gunship","Faction: Grey Knights","Aircraft","Vehicle","Transport","Fly","Imperium"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Grey Knights Infantry** models and 1 **Grey Knights Venerable Dreadnought** model. Each **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "grey_knights",
        class: "other",
        name: "Stormtalon Gunship",
        pts: 170,
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
            grey_knights_weapons.armoured_hull,
        ],
        rangedWeapons: [
            grey_knights_weapons.twin_lascannon,
            grey_knights_weapons.twin_heavy_bolter,
            grey_knights_weapons.typhoon_missile_launcher_frag,
            grey_knights_weapons.typhoon_missile_launcher_krak,
            grey_knights_weapons.skyhammer_missile_launcher,
            grey_knights_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.twin_lascannon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.typhoon_missile_launcher_frag, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.typhoon_missile_launcher_krak, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.skyhammer_missile_launcher, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.twin_assault_cannon, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Strafing Run", desc: "Each time this model makes a ranged attack that targets a unit that cannot **Fly**, add 1 to the Hit roll" },
        ],
        keywords: ["Stormtalon Gunship","Faction: Grey Knights","Aircraft","Vehicle","Fly","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "battleline",
        name: "Strike Squad",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            grey_knights_weapons.nemesis_force_weapon_6,
            grey_knights_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.incinerator,
            grey_knights_weapons.psycannon_2,
            grey_knights_weapons.psilencer_2,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.incinerator, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.psycannon_2, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.psilencer_2, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.nemesis_force_weapon_6, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Sanctifying Ritual (Psychic)", desc: "At the end of your Command phase, if this unit is within range of an objective marker that you control, that objective marker remains under you control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase." },
        ],
        keywords: ["Strike Squad","Faction: Grey Knights","Psyker","Imperium","Grenades","Battleline","Infantry"],
        pointOptions: [{ models: 6, pts: 240 }],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Venerable Daemon Slayer [Crucible]",
        pts: 175,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Guidance of the Ancients", desc: "In your Shooting phase, after this unit has shot, select one unit hit by one or more of those attacks. Until the end of the phase, each time a **Grey Knights** model from your army makes an attack that targets that unit, add 1 to the Hit roll." },
        ],
        keywords: ["Character","Crucible","Psyker","Imperium","Faction: Grey Knights","Vehicle","Walker","Smoke","Venerable Daemon Slayer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "grey_knights",
        class: "characters",
        name: "Venerable Dreadnought",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            grey_knights_weapons.dreadnought_combat_weapon,
        ],
        rangedWeapons: [
            grey_knights_weapons.assault_cannon,
            grey_knights_weapons.heavy_plasma_cannon_standard,
            grey_knights_weapons.heavy_plasma_cannon_supercharge,
            grey_knights_weapons.twin_lascannon,
            grey_knights_weapons.storm_bolter_2,
            grey_knights_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...grey_knights_weapons.assault_cannon, selected: true},
            ],
            slot2: [
                {...grey_knights_weapons.heavy_plasma_cannon_standard, selected: true},
            ],
            slot3: [
                {...grey_knights_weapons.heavy_plasma_cannon_supercharge, selected: true},
            ],
            slot4: [
                {...grey_knights_weapons.twin_lascannon, selected: true},
            ],
            slot5: [
                {...grey_knights_weapons.storm_bolter_2, selected: true},
            ],
            slot6: [
                {...grey_knights_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...grey_knights_weapons.dreadnought_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Guidance of the Ancients (Psychic)", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a **Grey Knights** model from your army makes an attack which targets that unit, add 1 to the Hit roll." },
        ],
        keywords: ["Venerable Dreadnought","Faction: Grey Knights","Walker","Vehicle","Psyker","Smoke","Imperium","Character"],
        pointOptions: [],
        transport: null,
    },
]

export default grey_knights_army
