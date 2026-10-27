// AUTO-GENERATED units for Adeptus Mechanicus (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import adeptus_mechanicus_weapons from "../weapons/adeptus_mechanicus"

const adeptus_mechanicus_army = [
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Archaeopter Fusilave",
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
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.armoured_hull,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.cognis_heavy_stubber_array,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.cognis_heavy_stubber_array, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Bomb Rack", desc: "Each time this model finishes a Normal move, you can select one enemy unit it moved across and roll six D6: for each 4+, that unit suffers 1 mortal wound." },
            { name: "Chaff Launcher", desc: "The bearer has the Smoke keyword." },
            { name: "Command Uplink", desc: "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Archaeopter Fusilave","Vehicle","Aircraft","Fly","Imperium","Faction: Adeptus Mechanicus","Skitarii"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Archaeopter Stratoraptor",
        pts: 185,
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
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.armoured_hull,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.cognis_heavy_stubber,
            adeptus_mechanicus_weapons.heavy_phosphor_blaster,
            adeptus_mechanicus_weapons.twin_cognis_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.cognis_heavy_stubber, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.heavy_phosphor_blaster, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.twin_cognis_lascannon, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Strafing Run", desc: "Each time this model makes a ranged attack that targets an enemy unit (excluding units that can Fly), add 1 to the Hit roll." },
            { name: "Chaff Launcher", desc: "The bearer has the Smoke keyword.�" },
            { name: "Command Uplink", desc: "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Archaeopter Stratoraptor","Skitarii","Vehicle","Aircraft","Fly","Imperium","Faction: Adeptus Mechanicus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Archaeopter Transvector",
        pts: 150,
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
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.armoured_hull,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.cognis_heavy_stubber_array,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.cognis_heavy_stubber_array, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Aerial Deployment", desc: "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
            { name: "Chaff Launcher", desc: "The bearer has the Smoke keyword.�" },
            { name: "Command Uplink", desc: "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Archaeopter Transvector","Faction: Adeptus Mechanicus","Vehicle","Aircraft","Fly","Imperium","Skitarii","Transport"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 **Skitarii Infantry** or **Tech-priest Infantry** models. It cannot transport **Jump Pack, Kataphron** or **Sydonian Skatros** models.",
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Belisarius Cawl",
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
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.arc_scourge,
            adeptus_mechanicus_weapons.cawls_omnissian_axe,
            adeptus_mechanicus_weapons.mechadendrite_hive,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.solar_atomiser,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.solar_atomiser, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.arc_scourge, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.cawls_omnissian_axe, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.mechadendrite_hive, selected: true},
            ],
        },
        abilities: [
            { name: "Canticles of the Omnissiah", desc: "At the start of your Command phase, select one of the abilities in the Canticles of the Omnissiah section. Until the start of your next Command phase, this model has that ability.\n\nInvocation of Machine Vengeance (Aura): At the start of your Command phase, select one unit from your opponent’s army. Until the start of your next Command phase, that enemy unit is your Machine Vengeance target. Each time a model in a friendly Adeptus Mechanicus unit makes an attack that targets your Machine Vengeance target, you can re‑roll the Hit roll.\n\nMantra of Discipline:  This model has the Battleline keyword and has the following ability:\nBinharic Courage (Aura): While a friendly Adeptus Mechanicus unit is within 6\" of this model, add 1 to the Objective Control characteristic of models in that unit and each time you take a Battle-shock or Leadership test for that unit, add 1 to that test.’\n\nShroudpsalm (Aura): While a friendly Adeptus Mechanicus unit is within 6\" of this model, that unit has the Stealth ability." },
            { name: "Mechanicus Bodyguard", desc: "While this model is within 3\" of one or more other friendly **Adeptus Mechanicus** units, this model has the Lone Operative ability." },
            { name: "Self-repair Mechanisms", desc: "At the start of your Command phase, this model regains up to D3 lost wounds." },
            { name: "Supreme Commander", desc: "If this model is in your army, it must be your **Warlord**." },
        ],
        keywords: ["Belisarius Cawl","Epic Hero","Monster","Character","Tech-Priest","Faction: Adeptus Mechanicus","Imperium","Cult Mechanicus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Cohort Commander [Crucible]",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 3,
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
            { name: "Leader", desc: "This model can be attached to the following units: **Skitarii Rangers, Skitarii Vanguard**" },
            { name: "Prioritisation Protocol", desc: "Melee weapons equipped by this model have [Precision]." },
        ],
        keywords: ["Character","Faction: Adeptus Mechanicus","Infantry","Imperium","Crucible","Skitarii","Marshal","Cohort Commander"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Corpuscarii Electro-Priests",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 7,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.electrostatic_gauntlets,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.electrostatic_gauntlets_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.electrostatic_gauntlets_2, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.electrostatic_gauntlets, selected: true},
            ],
        },
        abilities: [
            { name: "Electro-shock", desc: "In your Shooting phase, after this unit has shot, select one enemy unit (excluding **Monsters** and **Vehicles**) hit by one or more of those attacks. Until the end of your opponent’s next turn, that enemy unit is shocked. While a unit is shocked, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it." },
        ],
        keywords: ["Electro-Priests","Corpuscarii","Imperium","Infantry","Faction: Adeptus Mechanicus","Cult Mechanicus"],
        pointOptions: [{ models: 5, pts: 130 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Cybernetica Datasmith",
        pts: 35,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.power_fist,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model must be attached to the following unit:\n- **Kastelan Robots**\n\nYou must attach this model to a Kastelan Robots unit, even if one or more other Cybernetica Datasmith models havealready been attached to it. In such cases, if that bodyguard unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths. If you cannot attach this model to a Kastelan Robots unit, this model cannot be deployed and counts as having been destroyed during the first battle round. While attached to a Kastelan Robots unit, this model loses the INFANTRY keyword." },
            { name: "Battle Protocols", desc: "At the start of the battle, if this model is leading a **Kastelan Robots** unit, that unit enters Aegis Protocols (see below). In your Command phase, if this model is leading a **Kastelan Robots** unit, you can select one protocol from those listed below for that unit to enter. Once a unit enters a protocol, it remains in that protocol until it enters a different one\n- Protector Protocol: Add 2 to the Attacks characteristic of ranged weapons equipped by **Kastelan Robot** models in that unit.\n- Conqueror Protocol: Add 2 to the Attacks characteristic of melee weapons equipped by **Kastelan Robot** models in that unit.\n- Aegis Protocol: Add 1 to the Toughness characteristic of **Kastelan Robot** models in that unit." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Cybernetica Datasmith","Tech-Priest","Infantry","Character","Imperium","Faction: Adeptus Mechanicus","Legio Cybernetica"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Fulgurite Electro-Priests",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 7,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.electroleech_stave,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.electroleech_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Electro-Infusion", desc: "While a **Character** model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll." },
        ],
        keywords: ["Electro-Priests","Fulgurite","Infantry","Imperium","Faction: Adeptus Mechanicus","Cult Mechanicus"],
        pointOptions: [{ models: 5, pts: 140 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Hastarii Exterminators",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.power_weapon,
            adeptus_mechanicus_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.hastarii_arc_blaster,
            adeptus_mechanicus_weapons.eradication_caster_focused,
            adeptus_mechanicus_weapons.eradication_caster_dissipated,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.hastarii_arc_blaster, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.eradication_caster_focused, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.eradication_caster_dissipated, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.power_weapon, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Attached Unit", desc: "If a **Character** unit from your army can be attached to a **Skitarii Rangers** unit, it can be attached to this unit instead" },
            { name: "Broad‑spectrum Targeting Augurs", desc: "Each time a model in this unit makes an attack with an eradication caster that targets a unit (excluding **Monster** and **Vehicle** units), that attack has the **[SUSTAINED HITS 1]** ability." },
        ],
        keywords: ["Imperium","Faction: Adeptus Mechanicus","Infantry","Skitarii","Hastarii","Exterminators"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Hastarii Fusiliers",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.power_weapon,
            adeptus_mechanicus_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.hastarii_phosphor_blaster,
            adeptus_mechanicus_weapons.neutron_fusil,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.hastarii_phosphor_blaster, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.neutron_fusil, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.power_weapon, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Attached Unit", desc: "If a **Character** unit from your army can be attached to a **Skitarii Rangers** unit, it can be attached to this unit instead" },
            { name: "Monocular Targeting Helms", desc: "Each time a model in this unit makes an attack with a neutron fusil against a **Monster** or **Vehicle** unit, that attack has the **[IGNORES COVER]** ability." },
        ],
        keywords: ["Imperium","Faction: Adeptus Mechanicus","Infantry","Skitarii","Hastarii","Fusiliers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Ironstrider Alpha [Crucible]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 2,
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
            { name: "Leader", desc: "This model can be attached to the following units: **Ironstrider Ballistarii, Sydonian Dragoons with Taser Lances, Sydonian Dragoons with Radium Jezzails**" },
            { name: "Vector of the Omnissiah's Wrath", desc: "Ranged weapons equipped by this model have [Ignores Cover]." },
        ],
        keywords: ["Character","Faction: Adeptus Mechanicus","Imperium","Crucible","Skitarii","Vehicle","Walker","Smoke","Ironstrider Alpha"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Ironstrider Ballistarii",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.ironstrider_feet,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.twin_cognis_autocannon,
            adeptus_mechanicus_weapons.twin_cognis_lascannon_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.twin_cognis_autocannon, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.twin_cognis_lascannon_2, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.ironstrider_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Elevated Strider", desc: "This unit is eligible to shoot in a turn in which it Fell Back or Advanced, and you can re-roll Desperate Escape tests taken for models in this unit." },
            { name: "Broad Spectrum Data-tether", desc: "Each time you select this unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Ironstrider Ballistarii","Vehicle","Smoke","Skitarii","Faction: Adeptus Mechanicus","Walker","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Kastelan Robots",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 2,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.close_combat_weapon_2,
            adeptus_mechanicus_weapons.twin_kastelan_fist,
            adeptus_mechanicus_weapons.kastelan_fist,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.twin_kastelan_phosphor_blaster,
            adeptus_mechanicus_weapons.kastelan_phosphor_blaster,
            adeptus_mechanicus_weapons.incendine_combustor,
            adeptus_mechanicus_weapons.heavy_phosphor_blaster,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.twin_kastelan_phosphor_blaster, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.kastelan_phosphor_blaster, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.incendine_combustor, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.heavy_phosphor_blaster, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.close_combat_weapon_2, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.twin_kastelan_fist, selected: true},
            ],
            slot7: [
                {...adeptus_mechanicus_weapons.kastelan_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Robotic Bodyguard", desc: "While a **Cybernetica Datasmith** model is leading this unit, that model has the Feel No Pain 4+ ability." },
            { name: "Repulsor Grid", desc: "Each time a ranged attack is allocated to a **Kastelan Robot** model in this unit, on an unmodified saving throw of 6, the attacking unit suffers 1 mortal wound after it has finished making its attacks." },
        ],
        keywords: ["Kastelan Robots","Faction: Adeptus Mechanicus","Imperium","Vehicle","Walker","Legio Cybernetica"],
        pointOptions: [{ models: 2, pts: 360 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Kataphron Breachers",
        pts: 160,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 3,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.arc_claw,
            adeptus_mechanicus_weapons.hydraulic_claw,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.heavy_arc_rifle,
            adeptus_mechanicus_weapons.torsion_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.heavy_arc_rifle, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.torsion_cannon, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.arc_claw, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.hydraulic_claw, selected: true},
            ],
        },
        abilities: [
            { name: "Breaching Command", desc: "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. While this unit is within 6” of one or more friendly **Adeptus Mechanicus Battleline** units, you can re-roll the Hit roll instead." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save." },
        ],
        keywords: ["Breachers","Kataphron","Infantry","Faction: Adeptus Mechanicus","Imperium","Cult Mechanicus"],
        pointOptions: [{ models: 3, pts: 320 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Kataphron Destroyers",
        pts: 105,
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
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.heavy_grav_cannon,
            adeptus_mechanicus_weapons.cognis_flamer,
            adeptus_mechanicus_weapons.phosphor_blaster,
            adeptus_mechanicus_weapons.kataphron_plasma_culverin_standard,
            adeptus_mechanicus_weapons.kataphron_plasma_culverin_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.heavy_grav_cannon, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.cognis_flamer, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.phosphor_blaster, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.kataphron_plasma_culverin_standard, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.kataphron_plasma_culverin_supercharge, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Sentinel Directive", desc: "Each time you target this unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save." },
        ],
        keywords: ["Destroyers","Kataphron","Infantry","Faction: Adeptus Mechanicus","Imperium","Cult Mechanicus"],
        pointOptions: [{ models: 3, pts: 210 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Magos [Crucible]",
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
            leader: 7,
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
            { name: "Leader", desc: "This model can be attached to the following units: **Electro-Priests, Kataphrons, Skitarii Rangers, Skitarii Vanguard**" },
            { name: "Technoarcane Zealotry", desc: "While this model's unit is in range of one or more objective markers, improve this model's Leadership characteristic by 1." },
        ],
        keywords: ["Character","Faction: Adeptus Mechanicus","Infantry","Imperium","Cult Mechanicus","Magos","Tech-Priest","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Onager Dunecrawler",
        pts: 155,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.dunecrawler_legs,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.cognis_heavy_stubber,
            adeptus_mechanicus_weapons.eradication_beamer_dissipated,
            adeptus_mechanicus_weapons.eradication_beamer_focused,
            adeptus_mechanicus_weapons.daedalus_missile_launcher,
            adeptus_mechanicus_weapons.icarus_array,
            adeptus_mechanicus_weapons.neutron_laser,
            adeptus_mechanicus_weapons.twin_onager_heavy_phosphor_blaster,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.cognis_heavy_stubber, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.eradication_beamer_dissipated, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.eradication_beamer_focused, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.daedalus_missile_launcher, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.icarus_array, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.neutron_laser, selected: true},
            ],
            slot7: [
                {...adeptus_mechanicus_weapons.twin_onager_heavy_phosphor_blaster, selected: true},
            ],
            slot8: [
                {...adeptus_mechanicus_weapons.dunecrawler_legs, selected: true},
            ],
        },
        abilities: [
            { name: "Emanatus Forcefield (Aura)", desc: "While a friendly **Adeptus Mechanicus Battleline** model is wholly within 6\" of this model, that **Battleline** model has a 4+ invulnerable save against ranged attacks." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Damaged: 1-4 wounds remaining", desc: "While this mdel has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Scuttling Walker", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move through friendly **Monster** and **Vehicle** models and sections of terrain features that are 4\" or less in height." },
            { name: "Broad spectrum data-tether", desc: "The bearer loses the SMOKE keyword, but each time you target the bearer with a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Onager Dunecrawler","Imperium","Vehicle","Walker","Skitarii","Faction: Adeptus Mechanicus","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Pteraxii Skystalkers",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.taser_goad,
            adeptus_mechanicus_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.flechette_blaster,
            adeptus_mechanicus_weapons.flechette_carbine,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.flechette_blaster, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.flechette_carbine, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.taser_goad, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Ride the Thermals", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can do one of the following:\n- Make a Normal move of up to 6\".\n- Make a Normal move of up to 12\", provided every model in this unit ends that move wholly within 6\" of one or more friendly **Adeptus Mechanicus Battleline** units.\n\nIn either case, if it does, until the end of the turn, this unit is not eligible to declare a charge." },
        ],
        keywords: ["Skystalkers","Imperium","Faction: Adeptus Mechanicus","Infantry","Fly","Jump Pack","Grenades","Skitarii","Pteraxii"],
        pointOptions: [{ models: 5, pts: 150 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Pteraxii Sterylizors",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.taser_goad,
            adeptus_mechanicus_weapons.pteraxii_talons,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.flechette_blaster,
            adeptus_mechanicus_weapons.phosphor_torch,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.flechette_blaster, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.phosphor_torch, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.taser_goad, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.pteraxii_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Searing Conflagaration", desc: "Each time a model in this unit makes an attack with a phosphor torch that targets an enemy unit within range of an objective marker, re-roll a Wound roll of 1. If this unit is also within 6\" of one or more friendly **Adeptus Mechanicus Battleline** units, each time such an attack targets such a unit, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Sterylizors","Imperium","Infantry","Fly","Jump Pack","Skitarii","Faction: Adeptus Mechanicus","Pteraxii"],
        pointOptions: [{ models: 5, pts: 160 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Secutarii Hoplites [Legends]",
        pts: 65,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.alpha_close_combat_weapon,
            adeptus_mechanicus_weapons.arc_lance,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.arc_lance_2,
            adeptus_mechanicus_weapons.archeotech_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.arc_lance_2, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.archeotech_pistol, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.alpha_close_combat_weapon, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.arc_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Titan Guard", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase. When oing so, if there are one or more friendly **Adeptus Titanicus** units on the battlefield, you can re-roll the subsequent charge roll." },
            { name: "Secutarii", desc: "If a model from your army with the Leader ability can be attached to a **Skitarii Vanguard** unit, it can be attached to this unit instead." },
            { name: "Enhanced data-tether", desc: "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Omnispex", desc: "Ranged weapons equipped by models in the bearer’s unit have the IGNORES COVER ability." },
        ],
        keywords: ["Secutarii Hoplites","Infantry","Imperium","Skitarii","Faction: Adeptus Mechanicus"],
        pointOptions: [{ models: 6, pts: 130 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Secutarii Peltasts [Legends]",
        pts: 50,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.alpha_close_combat_weapon,
            adeptus_mechanicus_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.galvanic_caster_flechette,
            adeptus_mechanicus_weapons.galvanic_caster_hammershot,
            adeptus_mechanicus_weapons.archeotech_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.galvanic_caster_flechette, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.galvanic_caster_hammershot, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.archeotech_pistol, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.alpha_close_combat_weapon, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save." },
            { name: "Blind Barrage", desc: "In your Shooting phase, after this unit has shot, select one enemy Infantry unit hit by one or more of those attacks. Until the start of your next turn, while this unit is on the  battlefield, that enemy unit is blinded. While a unit is blinded, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Secutarii", desc: "If a model from your army with the Leader ability can be attached to a **Skitarii Vanguard** unit, it can be attached to this unit instead." },
            { name: "Enhanced data-tether", desc: "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Omnispex", desc: "Ranged weapons equipped by models in the bearer’s unit have the IGNORES COVER ability." },
        ],
        keywords: ["Infantry","Faction: Adeptus Mechanicus","Secutarii Peltasts","Skitarii","Imperium"],
        pointOptions: [{ models: 6, pts: 100 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Serberys Raiders",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.cavalry_sabre_clawed_limbs,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.galvanic_carbine,
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.galvanic_carbine, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.cavalry_sabre_clawed_limbs, selected: true},
            ],
        },
        abilities: [
            { name: "Tactica Obliqua", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can do one of the following:\n- Make a Normal move of up to D6\".\n- Make a Normal move of up to 6\", provided every model in this unit ends that move wholly within 6\" of one or more friendly **Adeptus Mechanicus Battleline** units." },
            { name: "Enhanced data-tether", desc: "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Serberys Raiders","Imperium","Faction: Adeptus Mechanicus","Skitarii","Mounted"],
        pointOptions: [{ models: 3, pts: 120 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Serberys Sulphurhounds",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.cavalry_arc_maul,
            adeptus_mechanicus_weapons.clawed_limbs,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.phosphor_pistol,
            adeptus_mechanicus_weapons.phosphor_blast_carbine,
            adeptus_mechanicus_weapons.mechanicus_pistol,
            adeptus_mechanicus_weapons.sulphur_breath,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.phosphor_pistol, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.phosphor_blast_carbine, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.sulphur_breath, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.cavalry_arc_maul, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.clawed_limbs, selected: true},
            ],
        },
        abilities: [
            { name: "Line-breakers", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit that is within Engagement Range of that enemy unit, adding 2 to the result if this unit started its Charge move within 6\" of one or more friendly Adeptus Mechanicus Battleline units. For each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Serberys Sulphurhounds","Imperium","Faction: Adeptus Mechanicus","Skitarii","Mounted"],
        pointOptions: [{ models: 3, pts: 110 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Servitor Battleclade",
        pts: 60,
        units: 6,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.dataspikes,
            adeptus_mechanicus_weapons.servo_claw,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.mechanicus_pistol,
            adeptus_mechanicus_weapons.heavy_arc_rifle_2,
            adeptus_mechanicus_weapons.heavy_bolter,
            adeptus_mechanicus_weapons.incendine_igniter,
            adeptus_mechanicus_weapons.meltagun,
            adeptus_mechanicus_weapons.phosphor_blaster_2,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.heavy_arc_rifle_2, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.incendine_igniter, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.meltagun, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.phosphor_blaster_2, selected: true},
            ],
            slot7: [
                {...adeptus_mechanicus_weapons.dataspikes, selected: true},
            ],
            slot8: [
                {...adeptus_mechanicus_weapons.servo_claw, selected: true},
            ],
        },
        abilities: [
            { name: "Network Override", desc: "While this unit contains one or more **Tech-Priest** models, this unit is: \n- Eligible to perform an Action in a turn in which it Advanced. \n- Eligible to shoot in a turn in which it started an Action." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save." },
            { name: "Attached Unit", desc: "If a **Character** unit from your army with the Leader ability can be attached to a **Kataphron Breachers** unit, it can be attached to this unit instead." },
        ],
        keywords: ["Faction: Adeptus Mechanicus","Infantry","Imperium","Cult Mechanicus","Servitor Battleclade"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Servitors [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 8,
            control: 0,
            invuln: 6
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.servitors_servo_arm,
            adeptus_mechanicus_weapons.servitors_tools,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.heavy_bolter_2,
            adeptus_mechanicus_weapons.multi_melta,
            adeptus_mechanicus_weapons.plasma_cannon_standard,
            adeptus_mechanicus_weapons.plasma_cannon_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.heavy_bolter_2, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.multi_melta, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.plasma_cannon_standard, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.servitors_servo_arm, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.servitors_tools, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save." },
            { name: "Mindlock", desc: "While a TECH-PRIEST model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by SERVITOR models in this unit by 1." },
            { name: "Servitor Retinue", desc: "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a TECH-PRIEST ENGINSEER model (a unit cannot have more than one SERVITORS unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly." },
        ],
        keywords: ["Faction: Adeptus Mechanicus","Infantry","Imperium","Cult Mechanicus","Servitors"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Sicarian Infiltrators",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.power_weapon_2,
            adeptus_mechanicus_weapons.taser_goad_2,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.stubcarbine,
            adeptus_mechanicus_weapons.flechette_blaster,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.stubcarbine, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.flechette_blaster, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.power_weapon_2, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.taser_goad_2, selected: true},
            ],
        },
        abilities: [
            { name: "Neurostatic Interference (Aura)", desc: "While an enemy unit is within 6\" of this unit, each time a Battle-shock or Leadership test is taken for that unit, subtract 1 from that test. While this unit is within 6\" of one or more friendly **Adeptus Mechanicus Battleline** units, subtract 2 from that test instead." },
        ],
        keywords: ["Imperium","Faction: Adeptus Mechanicus","Skitarii","Infantry","Sicarian","Infiltrators"],
        pointOptions: [{ models: 5, pts: 155 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Sicarian Ruststalkers",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.transonic_razor_chordclaw,
            adeptus_mechanicus_weapons.transonic_blades,
            adeptus_mechanicus_weapons.transonic_blades_chordclaw,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.transonic_razor_chordclaw, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.transonic_blades, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.transonic_blades_chordclaw, selected: true},
            ],
        },
        abilities: [
            { name: "Optimised Gait", desc: "Add 1 to Advance and Charge rolls made for this unit. While this unit is within 6\" of one or more friendly **Adeptus Mechanicus Battleline** units, add 2 to Advance and Charge rolls made for this unit instead." },
        ],
        keywords: ["Ruststalkers","Imperium","Faction: Adeptus Mechanicus","Infantry","Skitarii","Sicarian"],
        pointOptions: [{ models: 5, pts: 165 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Skitarii Marshal",
        pts: 35,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.control_stave,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.control_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Skitarii Rangers**\n- **Skitarii Vanguard**" },
            { name: "Control Edict", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll." },
            { name: "Servo-skull Uplink", desc: "Once per battle, at the start of any phase, you can select one friendly **Skitarii** unit that is Battle-shocked and within 6\" of this model. That unit is no longer Battle-shocked." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Marshal","Imperium","Faction: Adeptus Mechanicus","Skitarii","Character","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "battleline",
        name: "Skitarii Rangers",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.alpha_combat_weapon,
            adeptus_mechanicus_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.galvanic_rifle,
            adeptus_mechanicus_weapons.transuranic_arquebus,
            adeptus_mechanicus_weapons.arc_rifle,
            adeptus_mechanicus_weapons.plasma_caliver_supercharge,
            adeptus_mechanicus_weapons.plasma_caliver_standard,
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.galvanic_rifle, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.transuranic_arquebus, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.arc_rifle, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.plasma_caliver_supercharge, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.plasma_caliver_standard, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot7: [
                {...adeptus_mechanicus_weapons.alpha_combat_weapon, selected: true},
            ],
            slot8: [
                {...adeptus_mechanicus_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Objective Scouted", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
            { name: "Enhanced data-tether", desc: "Each time you select the bearer’s unit\nas the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Omnispex", desc: "Ranged weapons equipped by models in the bearer’s unit have the IGNORES COVER ability." },
        ],
        keywords: ["Rangers","Imperium","Faction: Adeptus Mechanicus","Infantry","Skitarii","Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "battleline",
        name: "Skitarii Vanguard",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.alpha_combat_weapon,
            adeptus_mechanicus_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.radium_carbine,
            adeptus_mechanicus_weapons.transuranic_arquebus,
            adeptus_mechanicus_weapons.arc_rifle,
            adeptus_mechanicus_weapons.plasma_caliver_supercharge,
            adeptus_mechanicus_weapons.plasma_caliver_standard,
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.radium_carbine, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.transuranic_arquebus, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.arc_rifle, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.plasma_caliver_supercharge, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.plasma_caliver_standard, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot7: [
                {...adeptus_mechanicus_weapons.alpha_combat_weapon, selected: true},
            ],
            slot8: [
                {...adeptus_mechanicus_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Rad-saturation (Aura)", desc: "While an enemy unit (excluding **Vehicle** units) is within 3\" of this unit, subtract 1 from the Objective Control characteristic of models in that unit." },
            { name: "Enhanced data-tether", desc: "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Omnispex", desc: "Ranged weapons equipped by models in the bearer’s unit have the IGNORES COVER ability." },
        ],
        keywords: ["Vanguard","Imperium","Faction: Adeptus Mechanicus","Infantry","Skitarii","Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Skorpius Disintegrator",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.armoured_hull,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.cognis_heavy_stubber,
            adeptus_mechanicus_weapons.disruptor_missile_launcher,
            adeptus_mechanicus_weapons.belleros_energy_cannon,
            adeptus_mechanicus_weapons.ferrumite_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.cognis_heavy_stubber, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.disruptor_missile_launcher, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.belleros_energy_cannon, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.ferrumite_cannon, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Broad spectrum data-tether", desc: "Each time you select the bearer as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Blistering Salvoes", desc: "Each time this model makes an attack with a belleros energy cannon that targets an **Infantry** unit, add 1 to the Hit roll. Each time this model makes an attack with a ferrumite cannon that targets a **Monster** or **Vehicle** unit, add 1 to the Hit roll." },
            { name: "Damaged: 1-4 wounds remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Skorpius Disintegrator","Imperium","Faction: Adeptus Mechanicus","Skitarii","Vehicle","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "transports",
        name: "Skorpius Dunerider",
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
            wounds: 11,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.armoured_hull,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.cognis_heavy_stubber_array,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.cognis_heavy_stubber_array, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Broad spectrum data-tether", desc: "Each time you select the bearer as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this **Transport** this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Skorpius Dunerider","Imperium","Faction: Adeptus Mechanicus","Vehicle","Dedicated Transport","Transport","Skitarii","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Adeptus Mechanicus Infantry** models. It cannot transport **Jump Pack, Kataphron** or **Sydonian Skatros** models.",
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Sydonian Dragoons with radium jezzails",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.ironstrider_feet,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.phosphor_serpenta,
            adeptus_mechanicus_weapons.radium_jezzail,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.phosphor_serpenta, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.radium_jezzail, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.ironstrider_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Focused Hunters", desc: "At the start of the battle, select one unit from your opponent’s army. Until the end of the battle, each time a model in this unit makes an attack that targets that unit, you can re-roll the Hit roll." },
            { name: "Broad Spectrum Data-tether", desc: "Each time you select the bearer as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Imperium","Faction: Adeptus Mechanicus","Skitarii","Vehicle","Walker","Sydonian","Dragoons with Radium Jezzails","Smoke"],
        pointOptions: [{ models: 2, pts: 100 }, { models: 3, pts: 150 }],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "other",
        name: "Sydonian Dragoons with taser lances",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.taser_lance,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.phosphor_serpenta,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.phosphor_serpenta, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.taser_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Dynamic Efficiency", desc: "This unit is eligible to declare a charge in a turn in which it Advanced or Fell Back, and you can re-roll Desperate Escape tests taken for models in this unit." },
            { name: "Broad Spectrum Data-tether", desc: "Each time you select the bearer as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
        ],
        keywords: ["Imperium","Faction: Adeptus Mechanicus","Skitarii","Vehicle","Walker","Sydonian","Dragoons with Taser Lances","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Sydonian Skatros",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.sydonian_feet,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.radium_jezzail_2,
            adeptus_mechanicus_weapons.skatros_transuranic_arquebus,
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.radium_jezzail_2, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.skatros_transuranic_arquebus, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.sydonian_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Dread Snipers", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That unit must take a Battle-shock test." },
            { name: "Sydonian Sentinel", desc: "This model cannot be your **Warlord**." },
            { name: "Achillan Eye", desc: "Each time this model makes an attack with a radium jezzail that targets an Infantry unit, you can re-roll the Wound roll. Each time this model makes an attack with a Skatros transuranic arquebus that targets a Monster or Vehicle unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Infantry","Imperium","Skitarii","Sydonian","Faction: Adeptus Mechanicus","Character","Skatros"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Tech-Priest Dominus",
        pts: 65,
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
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.omnissian_axe,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.macrostubber,
            adeptus_mechanicus_weapons.phosphor_serpenta_2,
            adeptus_mechanicus_weapons.eradication_ray_dissipated,
            adeptus_mechanicus_weapons.eradication_ray_focused,
            adeptus_mechanicus_weapons.volkite_blaster,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.macrostubber, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.phosphor_serpenta_2, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.eradication_ray_dissipated, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.eradication_ray_focused, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.volkite_blaster, selected: true},
            ],
            slot6: [
                {...adeptus_mechanicus_weapons.omnissian_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corpuscarii Electro-Priests\n- Fulgurite Electro-Priests\n- Kataphron Breachers\n- Kataphron Destroyers\n- Skitarii Rangers\n- Skitarii Vanguard" },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Lord of the Machine Cult", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability. If that unit has the **Electro-Priests** keyword, models in that unit have the Feel No Pain 4+ ability instead" },
            { name: "Data-spike", desc: "At the start of the Fight phase, you can select one enemy **Vehicle** unit within Engagement Range of this model’s unit and roll one D6: on a 4+, that enemy unit suffers D6 mortal wounds and, until the end of the phase, the Weapon Skill characteristic of melee weapons equipped by that enemy unit is worsened by 1." },
        ],
        keywords: ["Dominus","Imperium","Faction: Adeptus Mechanicus","Tech-Priest","Character","Infantry","Cult Mechanicus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Tech-Priest Enginseer",
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
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.servo_arm,
            adeptus_mechanicus_weapons.omnissian_axe_2,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.servo_arm, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.omnissian_axe_2, selected: true},
            ],
        },
        abilities: [
            { name: "Enginseer", desc: "While this model is within 3\" of one or more friendly **Adeptus Mechanicus Vehicle** units, unless it is leading a unit, this model has the Lone Operative ability." },
            { name: "Omnissiah's Blessing", desc: "In your Command phase, select one friendly Adeptus Mechanicus model within 3\" of this model. That model regains up to D3 lost wounds and, if it is a Vehicle model, until the start of your next Command phase, that model has the Feel No Pain 5+ ability. Each model can only be selected for this ability once per Command phase" },
            { name: "Vengeance for the Omnissiah", desc: "If a friendly **Adeptus Mechanicus Vehicle** model is destroyed within 12\" of this model, until the end of the battle, this model’s Omnissian axe has an Attacks characteristic of 6." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corpuscarii Electro-Priests\n- Fulgurite Electro-Priests\n- Kataphron Breachers\n- Kataphron Destroyers\n- Servitors\n- Skitarii Rangers\n- Skitarii Vanguard" },
        ],
        keywords: ["Enginseer","Imperium","Faction: Adeptus Mechanicus","Tech-Priest","Character","Infantry","Cult Mechanicus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Tech-Priest Manipulus",
        pts: 60,
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
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.omnissian_staff,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.magnarail_lance,
            adeptus_mechanicus_weapons.transonic_cannon,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.magnarail_lance, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.transonic_cannon, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.omnissian_staff, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corpuscarii Electro-Priests\n- Fulgurite Electro-Priests\n- Kataphron Breachers\n- Kataphron Destroyers\n- Skitarii Rangers\n- Skitarii Vanguard" },
            { name: "Galvanic Field", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [Lethal Hits] ability." },
            { name: "Defend the Divine Work", desc: "Once per battle, at the start of any phase, this model can use this ability. If it does, until the  end of the phase, all models in this model’s unit have a 4+ invulnerable save." },
        ],
        keywords: ["Manipulus","Imperium","Faction: Adeptus Mechanicus","Tech-Priest","Character","Infantry","Cult Mechanicus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Technoarcheologist",
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
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.servo_arc_claw,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.mechanicus_pistol, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.servo_arc_claw, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Seekers of Divine Arcana", desc: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
            { name: "Cogitative Instincts", desc: "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" horizontally of this model." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corpuscarii Electro-Priests\n- Fulgurite Electro-Priests\n- Kataphron Breachers\n- Kataphron Destroyers\n- Skitarii Rangers\n- Skitarii Vanguard" },
        ],
        keywords: ["Technoarcheologist","Imperium","Faction: Adeptus Mechanicus","Tech-Priest","Character","Infantry","Cult Mechanicus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adeptus_mechanicus",
        class: "transports",
        name: "Terrax-Pattern Termite [Legends]",
        pts: 200,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 3,
            wounds: 14,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.termite_drill,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.terrax_melta_cutter,
            adeptus_mechanicus_weapons.combi_bolter,
            adeptus_mechanicus_weapons.heavy_flamer,
            adeptus_mechanicus_weapons.twin_volkite_charger,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.terrax_melta_cutter, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.combi_bolter, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.heavy_flamer, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.twin_volkite_charger, selected: true},
            ],
            slot5: [
                {...adeptus_mechanicus_weapons.termite_drill, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-5 wounds remaining", desc: "While this mdel has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Termite Assault", desc: "This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model can disembark after it has been set up on the battlefield, and if they do they must be set up more than 9\" away from all enemy models." },
            { name: "Deadly Demise", desc: "D3" },
        ],
        keywords: ["Vehicle","Imperium","Transport","Dedicated Transport","Terrax-pattern Termite"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Adeptus Mechanicus Infantry** models. It cannot transport **Jump Pack or Kataphron** models",
    },
    {
        army: "adeptus_mechanicus",
        class: "characters",
        name: "Thulia Ghuld",
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
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            adeptus_mechanicus_weapons.rod_of_the_war_forge_strike,
            adeptus_mechanicus_weapons.rod_of_the_war_forge_sweep,
        ],
        rangedWeapons: [
            adeptus_mechanicus_weapons.jericho_class_conversion_resonator_shockwave,
            adeptus_mechanicus_weapons.jericho_class_conversion_resonator_titanic_impact,
        ],
        weapon_options: {
            slot1: [
                {...adeptus_mechanicus_weapons.jericho_class_conversion_resonator_shockwave, selected: true},
            ],
            slot2: [
                {...adeptus_mechanicus_weapons.jericho_class_conversion_resonator_titanic_impact, selected: true},
            ],
            slot3: [
                {...adeptus_mechanicus_weapons.rod_of_the_war_forge_strike, selected: true},
            ],
            slot4: [
                {...adeptus_mechanicus_weapons.rod_of_the_war_forge_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Icon of War", desc: "**Fanatical Devotion:** You can select one friendly **Skitarii** or **Thulia Ghuld** unit within 6\" of this model; until the start of your next Command phase, that unit is eligible to shoot and declare a charge in a turn in which it Advanced.\n\n**Adaptive Tactics:** You can select one friendly **Skitarii** or **Thulia Ghuld** unit within 6\" of this model; until the start of your next Command phase, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.\n\n**The Fires of Mars:** You can select one friendly **Skitarii** or **Thulia Ghuld** unit within 6\" of this model; until the start of your next Command phase, the Conqueror Imperative and Protector Imperative are both active for that unit." },
            { name: "Mechanicus Bodyguard", desc: "While this model is within 3\" of one or more other friendly **Adeptus Mechanicus** units, this model has the Lone Operative ability." },
            { name: "Secutor of Olympus", desc: "At the start of your Shooting phase, select one enemy **Vehicle** unit within 12\" of this model and roll one D6: on a 2+, that enemy unit suffers D3+1 mortal wounds." },
            { name: "Supreme Commander", desc: "If this model is in your army, it must be your **Warlord**." },
            { name: "Rod of the War Forge", desc: "In your Command phase, select one of the abilities in the Icon of War section. Until the start of your next Command phase, this model has that ability." },
            { name: "Cybernetic Augmentation", desc: "This model can move through terrain features, but cannot end a move within a wall, a floor, etc. This model can be set up or end a move on any floor level of **Ruins**, but if that level is not the ground floor, it can only do so if its base does not overhang the floor at that level." },
        ],
        keywords: ["Epic Hero","Monster","Character","Tech-Priest","Faction: Adeptus Mechanicus","Imperium","Cult Mechanicus","Thulia Ghuld"],
        pointOptions: [],
        transport: null,
    },
]

export default adeptus_mechanicus_army
