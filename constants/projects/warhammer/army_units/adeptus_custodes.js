// AUTO-GENERATED units for Adeptus Custodes (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import adeptus_custodes_weapons from "../weapons/adeptus_custodes"

const adeptus_custodes_army = [
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Agamatus Custodians",
        pts: 225,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.interceptor_lance,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.lastrum_bolt_cannon,
            adeptus_custodes_weapons.adrathic_devastator,
            adeptus_custodes_weapons.twin_las_pulsar,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.lastrum_bolt_cannon, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.adrathic_devastator, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.twin_las_pulsar, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.interceptor_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Implacable Vanguard", desc: "Once per battle, in your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not elgibile to declare a charge." },
            { name: "Turbo Boost", desc: "Each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit." },
        ],
        keywords: ["Mounted","Fly","Imperium","Agamatus Custodians","Faction: Adeptus Custodes"],
        pointOptions: [{ models: 4, pts: 450 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Aleya",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.somnus,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.somnus, selected: true},
            ],
        },
        abilities: [
            { name: "Tactical Perception", desc: "While this model is leading a unit, models in that unit have the Fights First ability." },
            { name: "Tenacious Spirit", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Prosecutors\n- Vigilators\n- Witchseekers" },
        ],
        keywords: ["Aleya","Epic Hero","Character","Infantry","Imperium","Anathema Psykana","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Allarus Custodians",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.guardian_spear,
            adeptus_custodes_weapons.castellan_axe,
            adeptus_custodes_weapons.misericordia,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.guardian_spear_2,
            adeptus_custodes_weapons.castellan_axe_2,
            adeptus_custodes_weapons.balistus_grenade_launcher,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.guardian_spear_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.castellan_axe_2, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.balistus_grenade_launcher, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.guardian_spear, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.castellan_axe, selected: true},
            ],
            slot6: [
                {...adeptus_custodes_weapons.misericordia, selected: true},
            ],
        },
        abilities: [
            { name: "Slayers of Tyrants", desc: "Each time a model in this unit makes an attack that targets a Character, Monster or Vehicle unit, you can re-roll the Wound roll." },
            { name: "From Golden Light", desc: "Once per battle, at the end of your opponent's turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
        ],
        keywords: ["Allarus Custodians","Imperium","Faction: Adeptus Custodes","Terminator","Infantry"],
        pointOptions: [{ models: 3, pts: 165 }, { models: 4, pts: 275 }, { models: 6, pts: 330 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "transports",
        name: "Anathema Psykana Rhino",
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
            adeptus_custodes_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.storm_bolter,
            adeptus_custodes_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Self Repair", desc: "At the start of your Command phase, this model regains 1 lost wound." },
        ],
        keywords: ["Rhino","Anathema Psykana","Vehicle","Dedicated Transport","Transport","Smoke","Imperium","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ANATHEMA PSYKANA INFANTRY models.",
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Aquilon Custodians",
        pts: 195,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.solerite_power_gauntlet,
            adeptus_custodes_weapons.solerite_power_talon,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.lastrum_storm_bolter,
            adeptus_custodes_weapons.twin_adrathic_destructor,
            adeptus_custodes_weapons.infernus_firepike,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.lastrum_storm_bolter, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.twin_adrathic_destructor, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.infernus_firepike, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.solerite_power_gauntlet, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.solerite_power_talon, selected: true},
            ],
        },
        abilities: [
            { name: "Heavy Assault Infantry", desc: "Each time a model in this unit makes a ranged attack that targets the closest eligible target, re-roll a Wound roll of 1." },
            { name: "From Golden Light", desc: "Once per battle, at the end of your opponent's turn, if this unit is not whithin Engagement Range of one or more enemy units, you can remove it from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models." },
        ],
        keywords: ["Imperium","Faction: Adeptus Custodes","Terminator","Infantry","Aquilon Custodians"],
        pointOptions: [{ models: 4, pts: 390 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Ares Gunship",
        pts: 580,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 12,
            saving: 2,
            wounds: 22,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.armoured_hull,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.arachnus_heavy_blaze_cannon,
            adeptus_custodes_weapons.arachnus_magna_blaze_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.arachnus_heavy_blaze_cannon, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.arachnus_magna_blaze_cannon, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Infernus Firebomb", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover. In addition, roll one D6 for each model in that unit: for each 6, that unit suffers 1 mortal wound." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Adeptus Custodes","Vehicle","Aircraft","Fly","Imperium","Ares Gunship"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Blade Champion",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.vaultswords_behemor,
            adeptus_custodes_weapons.vaultswords_hurricanis,
            adeptus_custodes_weapons.vaultswords_victus,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.vaultswords_behemor, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.vaultswords_hurricanis, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.vaultswords_victus, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Custodian Guard\n- Custodian Wardens" },
            { name: "Martial Inspiration", desc: "Once per battle, in your Charge phase, this model's unit is eligible to declare a charge in a turn in which it Advanced." },
            { name: "Swift Onslaught", desc: "While this model is leading a unit, you can re-roll Charge rolls made for that unit." },
        ],
        keywords: ["Blade Champion","Infantry","Character","Imperium","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Caladius Grav-tank",
        pts: 215,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 14,
            leader: 6,
            control: 4,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.twin_iliastus_accelerator_cannon,
            adeptus_custodes_weapons.twin_arachnus_heavy_blaze_cannon,
            adeptus_custodes_weapons.twin_lastrum_bolt_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.twin_iliastus_accelerator_cannon, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.twin_arachnus_heavy_blaze_cannon, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.twin_lastrum_bolt_cannon, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Advanced Firepower", desc: "Each time this model makes an attack with its Twin iliastus accelerator cannon that targets an enemy unit (excluding MONSTERS and VEHICLES), that attack has the [LETHAL HITS] ability. Each time this model makes an attack with its Twin arachnus heavy blaze cannon that targets an enemy MONSTER or VEHICLE unit, that attack has the [LETHAL HITS] ability." },
            { name: "Damaged: 1-5 wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Fly","Imperium","Caladius Grav-tank","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Contemptor-Achillus Dreadnought",
        pts: 155,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.achillus_dreadspear,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.achillus_dreadspear_2,
            adeptus_custodes_weapons.infernus_incinerator,
            adeptus_custodes_weapons.lastrum_storm_bolter,
            adeptus_custodes_weapons.twin_adrathic_destructor,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.achillus_dreadspear_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.infernus_incinerator, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.lastrum_storm_bolter, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.twin_adrathic_destructor, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.achillus_dreadspear, selected: true},
            ],
        },
        abilities: [
            { name: "Dread Foe", desc: "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds." },
        ],
        keywords: ["Faction: Adeptus Custodes","Vehicle","Imperium","Walker","Contemptor-Achillus Dreadnought","AC Walker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Contemptor-Galatus Dreadnought",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.galatus_warblade,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.galatus_warblade_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.galatus_warblade_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.galatus_warblade, selected: true},
            ],
        },
        abilities: [
            { name: "Galatus Shield", desc: "Each time a melee attack targets this model subtract 1 from the Wound roll." },
        ],
        keywords: ["Faction: Adeptus Custodes","Contemptor-Galatus Dreadnought","Vehicle","Walker","Imperium","AC Walker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Coronus Grav-carrier",
        pts: 200,
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
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.armoured_hull_3,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.twin_arachnus_blaze_cannon,
            adeptus_custodes_weapons.twin_lastrum_bolt_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.twin_arachnus_blaze_cannon, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.twin_lastrum_bolt_cannon, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.armoured_hull_3, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
            { name: "Damaged: 1-5 wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Transport","Fly","Imperium","Coronus Grav-carrier","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: "This model has a transport capacity of 8 Adeptus Custodes Infantry models.",
    },
    {
        army: "adeptus_custodes",
        class: "battleline",
        name: "Custodian Guard",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.guardian_spear,
            adeptus_custodes_weapons.sentinel_blade,
            adeptus_custodes_weapons.misericordia,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.guardian_spear_2,
            adeptus_custodes_weapons.sentinel_blade_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.guardian_spear_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.sentinel_blade_2, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.guardian_spear, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.sentinel_blade, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.misericordia, selected: true},
            ],
        },
        abilities: [
            { name: "Stand Vigil", desc: "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. While this unit is within range of an objective marker you control, you can re-roll the Wound roll instead." },
            { name: "Sentinel Storm", desc: "Once per battle, in your Shooting phase, after the unit has shot, it can shoot again." },
        ],
        keywords: ["Custodian Guard","Infantry","Battleline","Imperium","Faction: Adeptus Custodes"],
        pointOptions: [{ models: 5, pts: 200 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Custodian Guard with Adrasite and Pyrithite spears",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.adrasite_spear,
            adeptus_custodes_weapons.pyrithite_spear,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.adrasite_spear_2,
            adeptus_custodes_weapons.pyrithite_spear_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.adrasite_spear_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.pyrithite_spear_2, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.adrasite_spear, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.pyrithite_spear, selected: true},
            ],
        },
        abilities: [
            { name: "Stand Vigil", desc: "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. While this unit is within range of an objective marker you control, you can re-roll the Wound roll instead." },
            { name: "No Foe Shall Stand", desc: "Once per battle, at the start of your Shooting phase, this unit can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] and [IGNORES COVER abilities]." },
        ],
        keywords: ["Custodian Guard","Infantry","Imperium","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Custodian Wardens",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.guardian_spear,
            adeptus_custodes_weapons.castellan_axe,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.guardian_spear_2,
            adeptus_custodes_weapons.castellan_axe_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.guardian_spear_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.castellan_axe_2, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.guardian_spear, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.castellan_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Resolute Will", desc: "While a CHARACTER is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll." },
            { name: "Living Fortress", desc: "Once per battle, at the start of any phase, this unit can use this ability. If it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability." },
            { name: "Vexilla", desc: "Add 1 to the Objective Control characteristic of models in the bearer’s unit." },
        ],
        keywords: ["Custodian Wardens","Faction: Adeptus Custodes","Infantry","Imperium"],
        pointOptions: [{ models: 4, pts: 260 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Guardian of the Throne [Crucible]",
        pts: 130,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: **Custodian Guard, Custodian Wardens**" },
            { name: "Ka'tah Master", desc: "Once per phase, you can re-roll one Hit roll or one Wound roll for an attack made by this model." },
        ],
        keywords: ["Character","Infantry","Imperium","Guardian of the Throne","Crucible","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Kataphraktoi Exemplar [Crucible]",
        pts: 150,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: **Vertus Praetors**" },
            { name: "Fiend Slayer", desc: "Each time this model makes an attack that targets a **Monster** or **Vehicle** unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Character","Imperium","Crucible","Faction: Adeptus Custodes","Kataphraktoi Exemplar","Mounted","Dawneagle Jetbike","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Knight-Centura",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.executioner_greatblade,
            adeptus_custodes_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.master_crafted_boltgun,
            adeptus_custodes_weapons.witchseeker_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.master_crafted_boltgun, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.witchseeker_flamer, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.executioner_greatblade, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Prosecutors\n- Vigilators\n- Witchseekers" },
            { name: "Seeker's Instincts", desc: "While this model is leading a unit, add 2\" to the Move characteristic of models in that unit and add 2 to Advance and Charge rolls made for that unit." },
            { name: "Corner the Quarry", desc: "Each time an enemy unit (excluding MONSTERS and VEHICLES) that is within Engagement Range of this model’s unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests." },
        ],
        keywords: ["Knight-Centura","Faction: Adeptus Custodes","Infantry","Anathema Psykana","Imperium","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Null Maiden [Crucible]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: **Prosecutors, Vigilators, Witchseekers**" },
            { name: "Daughter of the Abyss", desc: "This model has the Feel No Pain 3+ ability against Psychic Attacks and mortal wounds." },
        ],
        keywords: ["Character","Infantry","Imperium","Crucible","Faction: Adeptus Custodes","Null Maiden","Anathema Psykana"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Orion Assault Dropship",
        pts: 690,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 12,
            saving: 2,
            wounds: 22,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.armoured_hull,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.arachnus_heavy_blaze_cannon,
            adeptus_custodes_weapons.spiculus_heavy_bolt_launcher,
            adeptus_custodes_weapons.twin_lastrum_bolt_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.arachnus_heavy_blaze_cannon, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.spiculus_heavy_bolt_launcher, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.twin_lastrum_bolt_cannon, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Assault Dropship", desc: "If a unit disembarks from this TRANSPORT before it moves, until the end of the turn, that unit is eligibile to charge in a turn in which it Advanced." },
        ],
        keywords: ["Vehicle","Transport","Aircraft","Fly","Imperium","Orion Assault Dropship","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ADEPTUS CUSTODES INFANTRY models. This model can also transport 1 VENERABLE CONTEMPTOR DREADNOUGHt, 1 CONTEMPTOR-ACHILLUS DREADNOUGHT or 1 CONTEMPTOR GALATUS-DREADNOUGHT; while doing so, its transport capacity is reduced to 6 ADEPTUS CUSTODES INFANTRY models.",
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Pallas Grav-attack",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 2,
            wounds: 9,
            leader: 6,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.armoured_hull_4,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.twin_arachnus_blaze_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.twin_arachnus_blaze_cannon, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.armoured_hull_4, selected: true},
            ],
        },
        abilities: [
            { name: "Merciless Hunter", desc: "In your Shooting phase, each time this model makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Wound roll." },
        ],
        keywords: ["Vehicle","Fly","Pallas Grav-attack","Faction: Adeptus Custodes","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Prosecutors",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 1,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            adeptus_custodes_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.boltgun,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.boltgun, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Purity of Execution", desc: "Each time a model in this unit makes a ranged attack that targets a Psyker unit, that attack has the [PRECISION] and [DEVASTATING WOUNDS] abilities." },
        ],
        keywords: ["Prosecutors","Faction: Adeptus Custodes","Imperium","Infantry","Anathema Psykana"],
        pointOptions: [{ models: 5, pts: 50 }, { models: 5, pts: 75 }, { models: 10, pts: 85 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Sagittarum Custodians",
        pts: 225,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.misericordia_2,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.adrastus_bolt_caliver,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.adrastus_bolt_caliver, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.misericordia_2, selected: true},
            ],
        },
        abilities: [
            { name: "Disintegration Beams", desc: "Once per battle, at the start of your Shooting phase, this unit can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the Devastating Wounds ability." },
            { name: "Saturation Volleys", desc: "In your Shooting phase, after this unit has shot, select one enemy unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks. Until the start of your next turn, while this unit is on the battlefield. that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the hit roll." },
        ],
        keywords: ["Infantry","Imperium","Faction: Adeptus Custodes","Sagittarum Custodians"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Shield-Captain",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.guardian_spear_3,
            adeptus_custodes_weapons.castellan_axe_3,
            adeptus_custodes_weapons.sentinel_blade_3,
            adeptus_custodes_weapons.pyrithite_spear_3,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.guardian_spear_2,
            adeptus_custodes_weapons.castellan_axe_2,
            adeptus_custodes_weapons.sentinel_blade_2,
            adeptus_custodes_weapons.pyrithite_spear_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.guardian_spear_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.castellan_axe_2, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.sentinel_blade_2, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.pyrithite_spear_2, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.guardian_spear_3, selected: true},
            ],
            slot6: [
                {...adeptus_custodes_weapons.castellan_axe_3, selected: true},
            ],
            slot7: [
                {...adeptus_custodes_weapons.sentinel_blade_3, selected: true},
            ],
            slot8: [
                {...adeptus_custodes_weapons.pyrithite_spear_3, selected: true},
            ],
        },
        abilities: [
            { name: "Master of the Stances", desc: "Once per battle, when this model's unit is selected to fight, it can use this ability. If it does, until that fight is resolved, both Ka'tah Stances are active for that unit, instead of only one." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Custodian Guard\n- Custodian Wardens" },
        ],
        keywords: ["Shield-Captain","Imperium","Faction: Adeptus Custodes","Character","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Shield-Captain in Allarus Terminator Armour",
        pts: 130,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.guardian_spear_3,
            adeptus_custodes_weapons.castellan_axe_3,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.guardian_spear_2,
            adeptus_custodes_weapons.castellan_axe_2,
            adeptus_custodes_weapons.balistus_grenade_launcher,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.guardian_spear_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.castellan_axe_2, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.balistus_grenade_launcher, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.guardian_spear_3, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.castellan_axe_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Allarus Custodians" },
            { name: "Auramite and Adamantite", desc: "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, each time an attack is allocated to this model, change the Damage characteristic of that attack to 1." },
        ],
        keywords: ["Terminator","Shield-Captain","Infantry","Imperium","Faction: Adeptus Custodes","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Shield-Captain on Dawneagle Jetbike",
        pts: 150,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.interceptor_lance_2,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.vertus_hurricane_bolter,
            adeptus_custodes_weapons.salvo_launcher,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.vertus_hurricane_bolter, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.salvo_launcher, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.interceptor_lance_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Vertus Praetors" },
            { name: "Sweeping Advance", desc: "Once per battle, at the end of the Fight phase, if this model's unit fought this phase, if it is within Engagement Range of one or more enemy units, it can make a Fall Back move or, if it is not within Engagement Range of one or more enemy units, it can make a Normal move." },
        ],
        keywords: ["Dawneagle Jetbike","Faction: Adeptus Custodes","Imperium","Mounted","Character","Fly","Shield-Captain"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Telemon Heavy Dreadnought",
        pts: 225,
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
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.armoured_feet,
            adeptus_custodes_weapons.telemon_caestus,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.spiculus_bolt_launcher,
            adeptus_custodes_weapons.arachnus_storm_cannon,
            adeptus_custodes_weapons.iliastus_accelerator_culverin,
            adeptus_custodes_weapons.twin_plasma_projector,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.spiculus_bolt_launcher, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.arachnus_storm_cannon, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.iliastus_accelerator_culverin, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.twin_plasma_projector, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.armoured_feet, selected: true},
            ],
            slot6: [
                {...adeptus_custodes_weapons.telemon_caestus, selected: true},
            ],
        },
        abilities: [
            { name: "Guardian Eternal", desc: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack." },
            { name: "Damaged: 1-4 wounds remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Devoted to Destruction", desc: "If this model is equipped with 2 Telemon caestus weapons in addition to its armoured feet weapon, add 2 to the Attacks characteristic of those Telemon caestus weapons." },
        ],
        keywords: ["Vehicle","Imperium","Faction: Adeptus Custodes","Telemon Heavy Dreadnought","Walker","AC Walker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Trajann Valoris",
        pts: 140,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 7,
            leader: 5,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.watchers_axe,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.eagles_scream,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.eagles_scream, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.watchers_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Feel No Pain", desc: "5+" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Custodian Guard\n- Custodian Wardens" },
            { name: "Captain-General", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill or Weapon Skill characteristics and/or all modifiers to the Hit roll." },
            { name: "Moment Shackle", desc: "Once per battle, at the start of the Fight phase, you can select one of the following to take effect until the end of the phase:\n- This model's Watcher's Axe melee weapon has an Attacks characteristic of 12.\n- This model has a 2+ invulnerable save." },
        ],
        keywords: ["Trajann Valoris","Epic Hero","Character","Infantry","Imperium","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "characters",
        name: "Valerian",
        pts: 110,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.gnosis,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.gnosis_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.gnosis_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.gnosis, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Custodian Guard\n- Custodian Wardens" },
            { name: "Golden Laurels", desc: "While this model is leading a unit, each time a melee attack targets that unit, worsen that Armour Penetration characteristic of that attack by 1." },
            { name: "Hero of Lion's Gate", desc: "Once per battle, after making a Hit roll, Wound roll or saving throw for this model, you can change the result of that roll to an unmodified 6." },
        ],
        keywords: ["Valerian","Faction: Adeptus Custodes","Infantry","Character","Imperium","Shield-Captain","Epic Hero"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Venatari Custodians",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.venatari_lance,
            adeptus_custodes_weapons.tarsis_buckler,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.venatari_lance_2,
            adeptus_custodes_weapons.kinetic_destroyer,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.venatari_lance_2, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.kinetic_destroyer, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.venatari_lance, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.tarsis_buckler, selected: true},
            ],
        },
        abilities: [
            { name: "Strike from the Skies", desc: "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back." },
            { name: "Swooping Dive", desc: "Once per battle, you can target this unit with the Rapid Ingress Stratagem for 0 CP, and can do so even if you have already targeted a different unit with that Stratagem that phase." },
            { name: "Tarsis Buckler", desc: "The bearer has a Wounds characteristic of 4." },
        ],
        keywords: ["Imperium","Infantry","Fly","Jump Pack","Venatari Custodians","Faction: Adeptus Custodes"],
        pointOptions: [{ models: 4, pts: 330 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Venerable Contemptor Dreadnought",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_custodes_weapons.contemptor_combat_weapon,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.combi_bolter,
            adeptus_custodes_weapons.multi_melta,
            adeptus_custodes_weapons.kheres_pattern_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.multi_melta, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.kheres_pattern_assault_cannon, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.contemptor_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Unyielding Ancient", desc: "The first time this model is destroyed, remove it from play without resolving its Deadly Demise ability. Then, at the end of the phase, roll one D6: on a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with D6 wounds remaining." },
        ],
        keywords: ["Venerable Contemptor Dreadnought","Vehicle","Walker","Imperium","Faction: Adeptus Custodes","AC Walker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Venerable Land Raider",
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
            adeptus_custodes_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.godhammer_lascannon,
            adeptus_custodes_weapons.storm_bolter_2,
            adeptus_custodes_weapons.twin_heavy_bolter,
            adeptus_custodes_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.godhammer_lascannon, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.storm_bolter_2, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...adeptus_custodes_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...adeptus_custodes_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Damaged: 1-5 Wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Venerable Land Raider","Transport","Vehicle","Imperium","Smoke","Faction: Adeptus Custodes"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 ADEPTUS CUSTODES INFANTRY models.",
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Vertus Praetors",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_custodes_weapons.interceptor_lance,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.salvo_launcher,
            adeptus_custodes_weapons.vertus_hurricane_bolter,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.salvo_launcher, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.vertus_hurricane_bolter, selected: true},
            ],
            slot3: [
                {...adeptus_custodes_weapons.interceptor_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Turbo Boost", desc: "Each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit." },
            { name: "Quicksilver Execution", desc: "Once per battle, after this unit ends a normal or Advance move, you can select one enemy unit (excluding MONSTER and VEHICLE units) that it moved over during that move, then roll one D6 for each model in this unit; for each 2+, that enemy unit suffers 2 mortal wounds." },
        ],
        keywords: ["Fly","Mounted","Imperium","Faction: Adeptus Custodes","Vertus Praetors"],
        pointOptions: [{ models: 3, pts: 225 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Vigilators",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 1,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            adeptus_custodes_weapons.executioner_greatblade_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.executioner_greatblade_2, selected: true},
            ],
        },
        abilities: [
            { name: "Deft Parry", desc: "Each time a melee attack targets this unit, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vigilators","Anathema Psykana","Infantry","Imperium","Faction: Adeptus Custodes"],
        pointOptions: [{ models: 5, pts: 55 }, { models: 5, pts: 90 }, { models: 10, pts: 100 }],
        transport: null,
    },
    {
        army: "adeptus_custodes",
        class: "other",
        name: "Witchseekers",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 1,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            adeptus_custodes_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            adeptus_custodes_weapons.witchseeker_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_custodes_weapons.witchseeker_flamer, selected: true},
            ],
            slot2: [
                {...adeptus_custodes_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Sanctified Flames", desc: "In your Shooting phase, after this unit has shot, select one enemy unit that was hit by one or more of those attacks. That unit must take a Battle-shock test." },
        ],
        keywords: ["Witchseekers","Faction: Adeptus Custodes","Anathema Psykana","Infantry","Imperium"],
        pointOptions: [{ models: 5, pts: 55 }, { models: 5, pts: 90 }, { models: 10, pts: 100 }],
        transport: null,
    },
]

export default adeptus_custodes_army
