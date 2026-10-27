// AUTO-GENERATED units for Blood Angels (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import blood_angels_weapons from "../weapons/blood_angels"

const blood_angels_army = [
    {
        army: "blood_angels",
        class: "characters",
        name: "Astorath",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 2,
            wounds: 5,
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            blood_angels_weapons.the_executioners_axe,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.the_executioners_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Redeemer of the Lost", desc: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play." },
            { name: "Mass of Doom", desc: "Each time this model’s unit makes a Charge move, until the end of the turn, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Death Company Marines with Jump Packs" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Fly","Jump Pack","Imperium","Chaplain","Faction: Adeptus Astartes","Faction: Blood Angels","Astorath"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Baal Predator",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            blood_angels_weapons.heavy_flamer,
            blood_angels_weapons.heavy_bolter,
            blood_angels_weapons.baal_flamestorm_cannon,
            blood_angels_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.heavy_flamer, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.baal_flamestorm_cannon, selected: true},
            ],
            slot4: [
                {...blood_angels_weapons.twin_assault_cannon, selected: true},
            ],
        },
        abilities: [
            { name: "Overcharged Engines", desc: "You can re-roll Advance rolls made for this model." },
        ],
        keywords: ["Imperium","Smoke","Vehicle","Faction: Adeptus Astartes","Baal Predator","Faction: Blood Angels"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Blood Angels Captain",
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
            blood_angels_weapons.master_crafted_chainsword,
        ],
        rangedWeapons: [
            blood_angels_weapons.heavy_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.master_crafted_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Company Heroes\n- Tactical Squad" },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Captain","Faction: Adeptus Astartes","Faction: Blood Angels","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Brother Corbulo [Legends]",
        pts: 75,
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
            blood_angels_weapons.heavens_teeth,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.heavens_teeth, selected: true},
            ],
        },
        abilities: [
            { name: "Sanguinary Priest", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "The Red Grail", desc: "While this model is leading a unit, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad\n- Assault Intercessor Squad\n- Sternguard Veteran Squad\n- Devastator Squad\n- Tactical Squad\n- Vanguard Veteran Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Sanguinary Priest","Brother Corbulo"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Captain Tycho [Legends]",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            blood_angels_weapons.dead_mans_hand,
        ],
        rangedWeapons: [
            blood_angels_weapons.blood_song,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.blood_song, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.dead_mans_hand, selected: true},
            ],
        },
        abilities: [
            { name: "Gifted Commander", desc: "While this model is leading a unit, each time that unit is selected to shoot, select one of the following abilities to apply to ranged weapons equipped by models in that unit until the end of the phase:\n\n\n- [ASSAULT]\n- [HEAVY]\n- [RAPID FIRE 1]" },
            { name: "Embittered", desc: "The first time an attack is allocated to this model, after the attacking unit has finished making its attacks, until the end of the battle, change the Attacks characteristic of this model’s Dead Man’s Hand to 12" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad\n- Command Squad\n- Assault Intercessor Squad\n- Sternguard Veteran Squad\n- Company Heroes\n- Tactical Squad\n- Vanguard Veteran Squad" },
            { name: "Tycho", desc: "Your army cannot contain both Captain Tycho and Tycho the Lost." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Captain","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Tycho"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Chief Librarian Mephiston",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 5,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            blood_angels_weapons.vitarus,
        ],
        rangedWeapons: [
            blood_angels_weapons.fury_of_the_ancients_witchfire,
            blood_angels_weapons.fury_of_the_ancients_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.fury_of_the_ancients_witchfire, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.fury_of_the_ancients_focused_witchfire, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.vitarus, selected: true},
            ],
        },
        abilities: [
            { name: "The Quickening [Psychic]", desc: "This model is eligible to declare a charge in a turn which it Advanced." },
            { name: "Transfixing Gaze [Aura, Psychic]", desc: "While an enemy unit is within 6\" of this model, each time that unit is selected to Fall Back, it must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead." },
            { name: "Invulnerable Save 5+", desc: "This model has a 5+ invulnerable save" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Tacticus","Psyker","Faction: Adeptus Astartes","Faction: Blood Angels","Chief Librarian Mephiston"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Commander Dante",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            blood_angels_weapons.the_axe_mortalis,
        ],
        rangedWeapons: [
            blood_angels_weapons.perdition,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.perdition, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.the_axe_mortalis, selected: true},
            ],
        },
        abilities: [
            { name: "Death Mask of Sanguinius", desc: "At the start of the Fight phase, each enemy unit within 6\" of this model must take a Battle-shock test, subtracting 1 from that test when they do" },
            { name: "Lord Regent of the Imperium Nihilus", desc: "While this model is leading a unit, add 1 to Advance and Charge rolls made for that unit and each time a model in that unit makes an attack, add 1 to the Hit roll." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad with Jump Packs\n- Sanguinary Guard\n- Vanguard Veteran Squad with Jump Packs\n- Assault Intercessors with Jump Packs" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Imperium","Fly","Faction: Adeptus Astartes","Faction: Blood Angels","Jump Pack","Tacticus","Chapter Master","Commander Dante"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Death Company Captain",
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
            blood_angels_weapons.master_crafted_chainsword,
        ],
        rangedWeapons: [
            blood_angels_weapons.heavy_bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.heavy_bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.master_crafted_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Death Company Marines\n- Death Company Marines with Bolt Rifles" },
            { name: "Forlorn Hero", desc: "While this model is leading a unit, unless that unit starts the battle embarked within a Transport, models in that unit have the Scouts 6\" ability" },
            { name: "Death Vision of Sanguinius", desc: "If this model is destroyed by a melee attack, after the attacking unit has finished making its attacks, you can roll one D6, adding 2 to the result if the attacking unit contains the enemy Warlord. On a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6+ that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Captain","Faction: Adeptus Astartes","Faction: Blood Angels","Tacticus","Death Company"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Death Company Captain with Jump Pack",
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

        ],
        rangedWeapons: [
            blood_angels_weapons.heavy_bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.heavy_bolt_pistol_2, selected: true},
            ],
        },
        abilities: [
            { name: "Death Vision of Sanguinius", desc: "If this model is destroyed by a melee attack, after the attacking unit has finished making its attacks, you can roll one D6, adding 2 to the result if the attacking unit contains the enemy Warlord. On a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6+ that enemy unit suffers D3+3 mortal wounds." },
            { name: "Lost to Fury", desc: "When this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Death Company Marines with Jump Packs" },
        ],
        keywords: ["Character","Infantry","Captain","Grenades","Fly","Faction: Blood Angels","Faction: Adeptus Astartes","Imperium","Jump Pack","Tacticus","Death Company"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Dreadnought",
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
            blood_angels_weapons.blood_fists,
            blood_angels_weapons.blood_talons_strike,
            blood_angels_weapons.blood_talons_sweep,
        ],
        rangedWeapons: [
            blood_angels_weapons.blood_fist_bolt_rifles,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.blood_fist_bolt_rifles, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.blood_fists, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.blood_talons_strike, selected: true},
            ],
            slot4: [
                {...blood_angels_weapons.blood_talons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Driven by Fury", desc: "In your opponent's Shooting phase, each time an enemy unit has shot, if this model was hit by one or more of those attacks, it can make a Driven by Fury move. To do so, roll one D6 and add 2 to the roll; this model moves a number of inches up to the result, but must finish as close as possible to the closest enemy unit [excluding Aircraft]. When doing so, this model can be moved within\nEngagement Range of that enemy unit. A model cannot make a Driven by Fury move while it is Battle-shocked or within Engagement Range of one or more enemy units, and can only make one Driven by Fury move per phase." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Dreadnought","Death Company Dreadnought","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Dreadnought with Magna-Grapple [Legends]",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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
            blood_angels_weapons.blood_talons,
            blood_angels_weapons.twin_furioso_fists,
        ],
        rangedWeapons: [
            blood_angels_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.blood_talons, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.twin_furioso_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Frenzied Reprisal", desc: "Each time an enemy unit targets this model, after that unit has finished making its attacks, this model can either shoot as if it were your Shooting phase or fight as if it were the Fight phase." },
            { name: "Magna-grapple", desc: "Add 2 to Charge rolls made for the bearer if one or more of the targets of that charge is a MOSNTER or VEHICLE unit." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Death Company Dreadnought","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Intercessors",
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
            control: 1,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            blood_angels_weapons.astartes_grenade_launcher_frag,
            blood_angels_weapons.astartes_grenade_launcher_krak,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.astartes_grenade_launcher_frag, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.astartes_grenade_launcher_krak, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company Intercessors"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Marines",
        pts: 85,
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

        ],
        rangedWeapons: [
            blood_angels_weapons.heavy_bolt_pistol_3,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.heavy_bolt_pistol_3, selected: true},
            ],
        },
        abilities: [
            { name: "An Honourable Death in Combat", desc: "Each time a model in this unit makes an attack, that attack has the [SUSTAINED HITS 1] ability if this unit is below its Starting Strength, or the [SUSTAINED HITS 2] ability if this unit is Below Half-strength." },
            { name: "Attached Unit", desc: "If a Chaplain model from your army with the Leader ability can be attached to Assault Intercessor Squad, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company Marines","Tacticus","Death Company"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Marines with Bolt Rifles",
        pts: 85,
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
            blood_angels_weapons.close_combat_weapon,
            blood_angels_weapons.power_fist,
        ],
        rangedWeapons: [
            blood_angels_weapons.bolt_rifle,
            blood_angels_weapons.astartes_grenade_launcher_frag,
            blood_angels_weapons.astartes_grenade_launcher_krak,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.bolt_rifle, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.astartes_grenade_launcher_frag, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.astartes_grenade_launcher_krak, selected: true},
            ],
            slot4: [
                {...blood_angels_weapons.close_combat_weapon, selected: true},
            ],
            slot5: [
                {...blood_angels_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Attached Unit", desc: "If a Chaplain model from your army with the Leader ability can be attached to Intercessor Squad, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company Marines with Bolt Rifles","Tacticus","Death Company"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Marines with Boltguns [Legends]",
        pts: 125,
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
            blood_angels_weapons.thunder_hammer,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.thunder_hammer, selected: true},
            ],
        },
        abilities: [
            { name: "An Honourable Death in Combat", desc: "Each time a model in this unit makes an attack, that attack has the [SUSTAINED HITS 1] ability if this unit is below its Starting Strength, or the [SUSTAINED HITS 2] ability if this unit is Below Half-strength." },
            { name: "Attached Leader", desc: "If a Chaplain model from your army with the Leader ability can be attached to a Tactical Squad, it can be attached to this unit instead.\n\n\nIf a Character unit from your army with the Leader ability can be attached to a Death Company Marines unit, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company Marines with Boltguns","Death Company"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Marines with Boltguns and Jump Packs [Legends]",
        pts: 140,
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
            blood_angels_weapons.thunder_hammer,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.thunder_hammer, selected: true},
            ],
        },
        abilities: [
            { name: "Beserk Fury", desc: "You can re-roll Charge rolls made for this unit" },
            { name: "Attached Leader", desc: "If a Chaplain model from your army with the Leader ability can be attached to Assault Intercessors with Jump Packs or an Assault Squad with Jump Packs, it can be attached to this unit instead.\n\n\nIf a Character unit from your army with the Leader ability can be attached to a Death Company Marines with Jump Packs unit, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company Marines with Boltguns and Jump Packs","Death Company"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Death Company Marines with Jump Packs",
        pts: 120,
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

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Savage Fury", desc: "You can re-roll Charge rolls made for this unit." },
            { name: "Attached Unit", desc: "If a Chaplain model from your army with the Leader ability can be attached to Assault Intercessors with Jump Packs, it can be attached to this unit instead" },
        ],
        keywords: ["Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Death Company Marines with Jump Packs","Tacticus","Fly","Jump Pack","Death Company"],
        pointOptions: [{ models: 6, pts: 230 }],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Furioso Dreadnought [Legends]",
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
            invuln: false
        },
        meleeWeapons: [
            blood_angels_weapons.furioso_fist,
            blood_angels_weapons.blood_talons,
            blood_angels_weapons.twin_furioso_fists,
        ],
        rangedWeapons: [
            blood_angels_weapons.heavy_frag_cannon,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.heavy_frag_cannon, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.furioso_fist, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.blood_talons, selected: true},
            ],
            slot4: [
                {...blood_angels_weapons.twin_furioso_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Wrathful Rampage", desc: "Each time this model is selected to fight, you can select one enemy unit within Engagement Range  of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Furioso Dreadnought","Smoke","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Gabriel Seth [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            blood_angels_weapons.blood_reaver,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.blood_reaver, selected: true},
            ],
        },
        abilities: [
            { name: "Lord of Slaughter", desc: "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Advanced" },
            { name: "Whirlwind of Rage", desc: "Each time this model fights, until that fight is resolved, add 1 to the Attacks characteristic of this model’s Blood Reaver for every 5 enemy models within 6\" of this model." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad\n- Command Squad\n- Tactical Squad\n- Vanguard Veteran Squad\n- Assault Intercessor Squad\n- Company Heroes\n- Sternguard Veteran Squad\n- Bladeguard Veteran Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Chapter Master","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Gabriel Seth"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Lemartes",
        pts: 100,
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
            blood_angels_weapons.the_blood_crozius,
        ],
        rangedWeapons: [
            blood_angels_weapons.absolvor_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.absolvor_bolt_pistol, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.the_blood_crozius, selected: true},
            ],
        },
        abilities: [
            { name: "Guardian of the Lost", desc: "While this model is leading a unit, each time an attack is allocated to a model in that unit, subtract 1 from the Damage characteristic of that attack." },
            { name: "Fury Unbound", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Death Company Marines with Jump Packs" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Imperium","Fly","Chaplain","Lemartes","Faction: Adeptus Astartes","Faction: Blood Angels","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Librarian Dreadnought [Legends]",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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
            blood_angels_weapons.furioso_fist,
            blood_angels_weapons.furioso_force_halberd,
        ],
        rangedWeapons: [
            blood_angels_weapons.blood_lance_focused_witchfire,
            blood_angels_weapons.blood_lance_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.blood_lance_focused_witchfire, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.blood_lance_witchfire, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.furioso_fist, selected: true},
            ],
            slot4: [
                {...blood_angels_weapons.furioso_force_halberd, selected: true},
            ],
        },
        abilities: [
            { name: "Shield of Sanguinius (Aura, Psychic)", desc: "While a friendly Adeptus Astartes unit is within 6\" of this model, models in that unit have the Feel No Pain 5+ ability against mortal wounds and Psychic Attacks." },
            { name: "Wings of Sanguinius (Psychic)", desc: "Once per turn, at the end of your Movement phase, one Psyker from your army with this ability can use it. If it does, roll one D6: on a 1, that Psyker suffers D3 mortal wounds; on a 2+, select one friendly Adeptus Astartes Infantry unit within 12\" of that Psyker and remove the selected unit from the battlefield, then set it up again anywhere on the battlefield that is more than 9\"\nhorizontally away from all enemy models." },
        ],
        keywords: ["Vehicle","Walker","Psyker","Imperium","Librarian Dreadnought","Faction: Adeptus Astartes","Faction: Blood Angels","Smoke","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "other",
        name: "Sanguinary Guard",
        pts: 125,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            blood_angels_weapons.encarmine_blade,
            blood_angels_weapons.encarmine_spear,
        ],
        rangedWeapons: [
            blood_angels_weapons.angelus_boltgun,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.angelus_boltgun, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.encarmine_blade, selected: true},
            ],
            slot3: [
                {...blood_angels_weapons.encarmine_spear, selected: true},
            ],
        },
        abilities: [
            { name: "Angelic Visage", desc: "Each time a melee attack targets this unit, subtract 1 from the Hit roll" },
            { name: "Heirs of Azkaellon", desc: "While a Character model is leading this unit, each time a melee attack targets this unit, subtract 1 from the Wound roll." },
            { name: "Attached Unit", desc: "If a Captain model from your army with the Leader ability can be attached to Assault Intercessors with Jump Packs, it can be attached to this unit instead." },
            { name: "Sanguinary Banner", desc: "Add 1 to the Objective Control characteristic of models in the bearer’s unit." },
        ],
        keywords: ["Infantry","Fly","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Sanguinary Guard","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Sanguinary Priest",
        pts: 75,
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
            { name: "Sanguinary Priest", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability" },
            { name: "Blood Chalice", desc: "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1." },
            { name: "Leader", desc: "This model can be attached to the following units: \n- **Assault Intercessor Squad**\n- **Bladeguard Veteran Squad**\n- **Desolation Squad**\n- **Devastator Squad**\n- **Hellblaster Squad**\n- **Infernus Squad**\n- **Intercessor Squad**\n- **Tactical Squad**\n- **Sternguard Veteran Squad**\n\n\nYou can attach this model to one of the above units, even if one **Captain, Chapter Master** or **Lieutenant** model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Sanguinary Priest","Faction: Adeptus Astartes","Faction: Blood Angels","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Sanguinary Priest on Bike [Legends]",
        pts: 135,
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
            blood_angels_weapons.power_fist_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Blood Chalice", desc: "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Bike Squad\n- Outrider Squad" },
            { name: "Sanguinary Priest", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability" },
        ],
        keywords: ["Character","Mounted","Grenades","Imperium","Sanguinary Priest","Faction: Adeptus Astartes","Faction: Blood Angels"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Sanguinary Priest with Jump Pack [Legends]",
        pts: 100,
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
            blood_angels_weapons.astartes_chainsword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.astartes_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Sanguinary Priest", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability" },
            { name: "Blood Chalice", desc: "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad with Jump Packs\n- Vanguard Veteran Squad with Jump packs\n- Assault Intercessors with Jump Packs\n\nYou can attach this model to one of the above units, even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Blood Angels","Fly","Jump Pack","Sanguinary Priest"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "The Sanguinor",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 2,
            wounds: 7,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            blood_angels_weapons.encarmine_broadsword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.encarmine_broadsword, selected: true},
            ],
        },
        abilities: [
            { name: "Aura of Fervour (Aura)", desc: "While a friendly Adeptus Astartes unit is within 6\" of this model, you can re-roll Battle-shock and Leadership tests taken for that unit" },
            { name: "Miraculous Savior", desc: "Once per battle, at the end of your opponent’s Charge phase, if this model is still in Reserves, you can select one enemy unit  that made a Charge move this phase. Set this model up on the battlefield within Engagement Range of that enemy unit." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Fly","Imperium","Jump Pack","The Sanguinor","Faction: Adeptus Astartes","Faction: Blood Angels"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "blood_angels",
        class: "characters",
        name: "Tycho the Lost [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            blood_angels_weapons.dead_mans_hand,
        ],
        rangedWeapons: [
            blood_angels_weapons.blood_song,
        ],
        weapon_options: {
            slot1: [
                {...blood_angels_weapons.blood_song, selected: true},
            ],
            slot2: [
                {...blood_angels_weapons.dead_mans_hand, selected: true},
            ],
        },
        abilities: [
            { name: "Forlorn Hero", desc: "While this model is leading a unit, that unit is  eligible to declare a charge in a turn in which it Advanced" },
            { name: "Death Visions of Sanguinius", desc: "If this model is destroyed by a melee attack, after the attacking unit has finished making its attacks, you can roll one D6, adding 2 to the result if the attacking unit contains the enemy Warlord: on a 2-3, that enemy unit suffers 3 mortal wounds; on a 4-5, that enemy unit suffers D3+3 mortal wounds; on a 6+, that enemy unit suffers D6+3 mortal wounds." },
            { name: "Tycho", desc: "Your army cannot contain both Captain Tycho and Tycho the Lost." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Death Company Marines" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Captain","Imperium","Grenades","Tycho the Lost","Faction: Adeptus Astartes","Faction: Blood Angels"],
        pointOptions: [],
        transport: null,
    },
]

export default blood_angels_army
