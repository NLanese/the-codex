// AUTO-GENERATED units for Astra Militarum (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import astra_militarum_weapons from "../weapons/astra_militarum"

const astra_militarum_army = [
    {
        army: "astra_militarum",
        class: "characters",
        name: "‘Iron Hand’ Straken [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.bionic_arm_with_devils_claw,
        ],
        rangedWeapons: [
            astra_militarum_weapons.auto_shotgun,
            astra_militarum_weapons.plasma_pistol_standard,
            astra_militarum_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.auto_shotgun, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.bionic_arm_with_devils_claw, selected: true},
            ],
        },
        abilities: [
            { name: "Been There, Seen it, Killed it", desc: "Each time this model makes a melee attack, if it made a Charge move this turn, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Catachan Jungle Fighters**" },
            { name: "Cold Steel and Courage", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the **[LETHAL HITS]** ability." },
        ],
        keywords: ["‘Iron Hand’ Straken","Faction: Astra Militarum","Imperium","Infantry","Character","Epic Hero","Grenades","Officer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Aegis Defence Line",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 2,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Emplacement Platform", desc: "Friendly **Astra Militarum Infantry** models can be set up or end any type of move on top of the platform section of this **Fortification**." },
            { name: "Reinforced Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this **Fortification**, that model has the Benefit of Cover against that attack." },
            { name: "Defence Line", desc: "While an **Astra Militarum Infantry** model has the Benefit of Cover as a result of this terrain feature, that model has a 4+ invulnerable save" },
            { name: "Deployment", desc: "When this model is set up, it will consist of 1 platform section, up to 5 shield sections, up to 2 broken shield sections and up to 2 end sections. All sections must be connected to each other to form a continuous defence line; the 2 broken shield sections can be placed either at the end of the defence line, or in the middle of it such that both are within ½\" of each other (in this case, these 2 sections count as being connected to each other). All of the sections that have been set up are then treated as a single model for all rules purposes." },
        ],
        keywords: ["Aegis Defence Line","Faction: Astra Militarum","Imperium","Fortification"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Aquila Lander [Legends]",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.multi_laser,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.multi_laser, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Aerial Deployment", desc: "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Aquila Lander","Transport","Imperium","Faction: Astra Militarum"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Arkurian Stormhammer [Legends]",
        pts: 480,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.stormhammer_cannon,
            astra_militarum_weapons.twin_battle_cannon,
            astra_militarum_weapons.multi_laser_2,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.stormhammer_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_battle_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.multi_laser_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Rolling Fortress", desc: "Each time a ranged attack is allocated to an ASTRA MILITARUM model from your army, if that model is not fully visible to every model in the attacking unit because of this Arkurian Stormhammer model, that model has the Benefit of Cover against that attack" },
        ],
        keywords: ["Vehicle","Titanic","Imperium","Faction: Astra Militarum","Arkurian Stormhammer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Armageddon-pattern Medusa [Legends]",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.medusa_siege_cannon,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.medusa_siege_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Pinning Bombardment", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Medusa siege cannon scored a hit against an enemy Infantry unit, that unit must take a Battle-shock test." },
        ],
        keywords: ["Armageddon-pattern Medusa","Vehicle","Artillery","Imperium","Squadron","Smoke","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Armoured Sentinels",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 2,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon,
            astra_militarum_weapons.sentinel_chainsaw,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.multi_laser,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.missile_launcher_frag,
            astra_militarum_weapons.missile_launcher_krak,
            astra_militarum_weapons.plasma_cannon_standard,
            astra_militarum_weapons.plasma_cannon_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.multi_laser, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.missile_launcher_frag, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.missile_launcher_krak, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.plasma_cannon_standard, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.close_combat_weapon, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.sentinel_chainsaw, selected: true},
            ],
        },
        abilities: [
            { name: "Mobile Hunter-killers", desc: "Each time a model in this unit makes an attack that targets a **Monster** or **Vehicle** unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Armoured Sentinels","Faction: Astra Militarum","Imperium","Smoke","Vehicle","Walker","Regiment","Squadron"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Artillery Team",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 3,
            tough: 7,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.crew_close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_mortar,
            astra_militarum_weapons.siege_cannon,
            astra_militarum_weapons.multiple_rocket_launcher,
            astra_militarum_weapons.heavy_quad_launcher,
            astra_militarum_weapons.lasgun,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_mortar, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.siege_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.multiple_rocket_launcher, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_quad_launcher, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.lasgun, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.crew_close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Remorseless Barrage", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with an Indirect Fire weapon scored a hit against an enemy unit, that unit must take a Battle-shock test (if an **Infantry** unit is hit by one or more attacks made by a multiple rocket launcher, they must subtract 1 from their Battle-shock test when doing so)." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Infantry","Artillery","Grenades","Regiment","Artillery Team"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Arvus Lighter [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 8,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Aerial Deployment", desc: "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Imperium","Transport","Arvus Lighter","Faction: Astra Militarum"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. It cannot transport Ogryn or Artillery models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Atlas Recovery Vehicle [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Recovery Vehicle", desc: "At the end of your Movement phase, you can select one friendly Astra Militarum Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds. Each model can only be selected for this ability once per turn." },
        ],
        keywords: ["Atlas Recovery Vehicle","Vehicle","Imperium","Squadron","Smoke","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Augmented Bone 'Ead [Crucible]",
        pts: 60,
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
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "You 'Eard 'Em", desc: "Each time an Order is issued to this model's unit, this model can issue that Order to one other friendly **Platoon** or **Ogryn** unit in the same way as an **Officer**." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Bullgryn Squad**\n- **Ogryn Squad**" },
        ],
        keywords: ["Character","Infantry","Crucible","Imperium","Grenades","Faction: Astra Militarum","Regiment","Augmented Bone 'Ead","Ogryn"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Avenger Strike Fighter",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.avenger_bolt_cannon,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.avenger_bolt_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_hull_3, selected: true},
            ],
        },
        abilities: [
            { name: "Fiery Vengeance", desc: "Once per turn, in your opponent’s Shooting phase, when another friendly ASTRA MILITARUM unit within 6\" of this model is destroyed by an attack made by a unit that can Fly, one model from your army with this ability can use it. If it does, after the attacking unit has finished making its attacks, that model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Fly","Aircraft","Imperium","Avenger Strike Fighter"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Baneblade",
        pts: 450,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.baneblade_cannon,
            astra_militarum_weapons.coaxial_autocannon,
            astra_militarum_weapons.demolisher_cannon,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.baneblade_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.coaxial_autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.demolisher_cannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Rolling Fortress", desc: "Each time a ranged attack is allocated to an **Astra Militarum** model from your army, if that model is not fully visible to every model in the attacking unit because of this **Baneblade** model, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Baneblade","Faction: Astra Militarum","Imperium","Vehicle","Titanic","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Banehammer",
        pts: 420,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.tremor_cannon,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.tremor_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Tremor Quake", desc: "In your Shooting phase, just after selecting a target for this model’s tremor cannon, the target unit and every other enemy **Infantry** unit within 3\" of that unit must take a Battle-shock test." },
            { name: "Transport", desc: "This model has a transport capacity of 26 **Astra Militarum Infantry models**. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models." },
        ],
        keywords: ["Banehammer","Faction: Astra Militarum","Imperium","Smoke","Vehicle","Titanic","Transport"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Banesword",
        pts: 450,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.quake_cannon,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.quake_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Armour Obliteration", desc: "Each time an attack made with this model’s quake cannon destroys an enemy model that has the Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 3+ instead of on a 6." },
        ],
        keywords: ["Banesword","Faction: Astra Militarum","Imperium","Titanic","Vehicle","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Basilisk",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.earthshaker_cannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.earthshaker_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Earthshaker Rounds", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with its earthshaker cannon scored a hit against an enemy **Infantry** unit, until the start of your next Shooting phase, that unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Artillery","Vehicle","Squadron","Smoke","Basilisk"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Cadian Castellan",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.power_fist,
            astra_militarum_weapons.power_weapon,
            astra_militarum_weapons.chainsword,
            astra_militarum_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.bolt_pistol,
            astra_militarum_weapons.laspistol,
            astra_militarum_weapons.plasma_pistol_standard,
            astra_militarum_weapons.plasma_pistol_supercharge,
            astra_militarum_weapons.boltgun,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.laspistol, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.boltgun, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.power_fist, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.power_weapon, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.chainsword, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units: **Cadian Shock Troops**, **Kasrkin**" },
            { name: "Senior Officer", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the **[SUSTAINED HITS 1]** ability" },
            { name: "Get Back in the Fight", desc: "While this model is leading a unit, that unit is eligible to shoot in a turn in which it Fell Back." },
        ],
        keywords: ["Cadian Castellan","Faction: Astra Militarum","Imperium","Infantry","Character","Officer","Grenades"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Cadian Command Squad",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.power_fist_2,
            astra_militarum_weapons.power_weapon_2,
            astra_militarum_weapons.chainsword_2,
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.laspistol_2,
            astra_militarum_weapons.bolt_pistol_2,
            astra_militarum_weapons.plasma_pistol_standard_2,
            astra_militarum_weapons.plasma_pistol_supercharge_2,
            astra_militarum_weapons.lasgun,
            astra_militarum_weapons.flamer,
            astra_militarum_weapons.grenade_launcher_frag,
            astra_militarum_weapons.grenade_launcher_krak,
            astra_militarum_weapons.meltagun,
            astra_militarum_weapons.plasma_gun_standard,
            astra_militarum_weapons.plasma_gun_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.laspistol_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.bolt_pistol_2, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.lasgun, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.flamer, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.grenade_launcher_frag, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.grenade_launcher_krak, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.meltagun, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.plasma_gun_standard, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.power_fist_2, selected: true},
            ],
            slot13: [
                {...astra_militarum_weapons.power_weapon_2, selected: true},
            ],
            slot14: [
                {...astra_militarum_weapons.chainsword_2, selected: true},
            ],
            slot15: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Cadia Stands!", desc: "While this unit contains an **Officer**, each time a ranged attack targets this unit, if this unit is within range of an objective marker you control, models in this unit have the Benefit of Cover against that attack." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Cadian Shock Troops**" },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Command Squad","Cadian","Grenades","Infantry","Character","Platoon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Carnodon [Legends]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.volkite_caliver,
            astra_militarum_weapons.carnodon_twin_autocannon,
            astra_militarum_weapons.carnodon_twin_lascannon,
            astra_militarum_weapons.carnodon_twin_multi_laser,
            astra_militarum_weapons.volkite_culverin,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.multi_laser,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.volkite_caliver, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.carnodon_twin_autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.carnodon_twin_lascannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.carnodon_twin_multi_laser, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.volkite_culverin, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.multi_laser, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Ancient Conquest", desc: "Each time this model makes an attack that targets an enemy unit that is within your opponent’s deployment zone, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Smoke","Carnodon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Catachan Command Squad",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_3,
            astra_militarum_weapons.chainsword_2,
            astra_militarum_weapons.power_fist_2,
            astra_militarum_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.laspistol_2,
            astra_militarum_weapons.lasgun,
            astra_militarum_weapons.flamer,
            astra_militarum_weapons.grenade_launcher_frag,
            astra_militarum_weapons.grenade_launcher_krak,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.meltagun,
            astra_militarum_weapons.plasma_gun_standard,
            astra_militarum_weapons.plasma_gun_supercharge,
            astra_militarum_weapons.sniper_rifle,
            astra_militarum_weapons.bolt_pistol_2,
            astra_militarum_weapons.plasma_pistol_standard_2,
            astra_militarum_weapons.plasma_pistol_supercharge_2,
            astra_militarum_weapons.boltgun_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.laspistol_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.lasgun, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.flamer, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.grenade_launcher_frag, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.grenade_launcher_krak, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.meltagun, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.plasma_gun_standard, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.sniper_rifle, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.bolt_pistol_2, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot13: [
                {...astra_militarum_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot14: [
                {...astra_militarum_weapons.boltgun_2, selected: true},
            ],
            slot15: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
            slot16: [
                {...astra_militarum_weapons.chainsword_2, selected: true},
            ],
            slot17: [
                {...astra_militarum_weapons.power_fist_2, selected: true},
            ],
            slot18: [
                {...astra_militarum_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit: **Catachan Jungle Fighters**" },
            { name: "Gung-ho Command", desc: "While this unit contains an **Officer**, ranged weapons equipped by models in this unit have the **[ASSAULT]** ability." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Command Squad","Grenades","Infantry","Character","Platoon","Catachan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Centaur Light Carrier [Legends]",
        pts: 40,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Blistering Advance", desc: "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn" },
        ],
        keywords: ["Vehicle","Transport","Imperium","Faction: Astra Militarum","Squadron","Centaur Light Carrier","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. It cannot transport Ogryn or Artillery models.",
    },
    {
        army: "astra_militarum",
        class: "transports",
        name: "Centaur RSV",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull,
        ],
        rangedWeapons: [
            astra_militarum_weapons.pintle_mounted_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.pintle_mounted_heavy_stubber, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Rapid Strike Vehicle", desc: "While one or more units are embarked within this model, unless this model is Battle‑shocked, add 1 to this model’s Objective Control characteristic for every 3 models (rounding down) embarked within it." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Smoke","Squadron","Vehicle","Centaur RSV","Dedicated Transport","Transport"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Astra Militarum Infantry** models. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models.",
    },
    {
        army: "astra_militarum",
        class: "transports",
        name: "Chimera",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.lasgun_array,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.multi_laser,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.lasgun_array, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.multi_laser, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Mobile Command Vehicle", desc: "In your Command phase, one **Officer** model embarked within this **Transport** can issue Orders even though it is not on the battlefield. When doing so, measure distances to and from this *Transport**." },
        ],
        keywords: ["Chimera","Faction: Astra Militarum","Imperium","Vehicle","Squadron","Transport","Dedicated Transport","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Astra Militarum Infantry** models. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Colossus [Legends]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 2,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.colossus_siege_mortar,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.colossus_siege_mortar, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Tracking Target", desc: "Each time this model is selected to shoot, provided it Remained Stationary this turn, its Colossus siege mortar has the [ANTI-MONSTER 5+] and [ANTI-VEHICLE 5+] abilities while resolving those attacks." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Smoke","Colossus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Commissar",
        pts: 30,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.power_weapon_3,
            astra_militarum_weapons.chainsword_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.bolt_pistol,
            astra_militarum_weapons.plasma_pistol_standard,
            astra_militarum_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.power_weapon_3, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.chainsword_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units: **Cadian Shock Troops**, **Catachan Jungle Fighters**, **Death Korps of Krieg**, **Kasrkin**, **Krieg Combat Engineers**, **Tempestus Scions**" },
            { name: "Summary Execution", desc: "Once per battle round, at the start of any phase, you can select one friendly **Astra Militarum Infantry** unit that is Battle-shocked and within 12\" of this model. If you do, one model in that unit is destroyed, and that unit is then no longer Battle-shocked." },
            { name: "Political Overwatch", desc: "While another **Officer** model is in the same unit as this model, you can re-roll Battle-shock tests taken for that unit." },
        ],
        keywords: ["Commissar","Faction: Astra Militarum","Imperium","Infantry","Character","Officer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Commissar Graves",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 5,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.enforcer_crew,
            astra_militarum_weapons.armoured_hull_4,
            astra_militarum_weapons.power_sword_and_manus_mortis,
        ],
        rangedWeapons: [
            astra_militarum_weapons.prefectus_heavy_stubber,
            astra_militarum_weapons.chiron_gatling_cannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.prefectus_heavy_stubber, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.chiron_gatling_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.enforcer_crew, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_hull_4, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.power_sword_and_manus_mortis, selected: true},
            ],
        },
        abilities: [
            { name: "Brutal Disciplinarian", desc: "Once per turn, at the start of any phase, you can select one friendly **Astra Militarum Infantry** unit (excluding units that only contain one model) that is Battle‑shocked and within 24\" of and visible to this model. If you do, one model in that unit is destroyed, and that unit is no longer Battle‑shocked." },
            { name: "Mechanised Spearhead", desc: "In your Movement phase, each time a friendly **Astra Militarum Regiment** unit disembarks from a **Transport** that is within 6\" of this model, after that unit has been set up, this model can issue 1 Order to that **Regiment** unit, regardless of how many Orders this model has already issued this turn." },
            { name: "Aquiline Prow", desc: "Each time this unit ends a Charge move, you can select one enemy unit within Engagement Range of it, then roll one D6: on a 2‑3, that enemy unit suffers D3 mortal wounds; on a 4‑5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Epic Hero","Officer","Vehicle","Squadron","Commissar Graves","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Commissar Graves on Foot",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.power_sword_and_manus_mortis_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.bolt_pistol_3,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.bolt_pistol_3, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.power_sword_and_manus_mortis_2, selected: true},
            ],
        },
        abilities: [
            { name: "Brutal Disciplinarian", desc: "Once per turn, at the start of any phase, you can select one friendly **Astra Militarum Infantry** (excluding units that only contain one model) unit that is Battle‑shocked and within 12\" of this model. If you do, one model in that unit is destroyed, and that unit is no longer Battle‑shocked." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Cadian Shock Troops**\n- **Catachan Jungle Fighters**\n- **Death Korps of Krieg**\n- **Kasrkin**\n- **Krieg Combat Engineers**\n- **Tempestus Scions**" },
            { name: "Icon of Discipline", desc: "This model’s unit is eligible to shoot and declare a Charge in a turn in which it Fell Back." },
            { name: "Using Commissar Graves", desc: "Your army can only include one **Commissar Graves** or **Commissar Graves on Foot** unit." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Epic Hero","Commissar Graves","Character","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Commissar Yarrick",
        pts: 150,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.power_sword,
            astra_militarum_weapons.power_klaw,
        ],
        rangedWeapons: [
            astra_militarum_weapons.laspistol_3,
            astra_militarum_weapons.bale_eye,
            astra_militarum_weapons.storm_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.laspistol_3, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.bale_eye, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.storm_bolter_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.power_sword, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.power_klaw, selected: true},
            ],
        },
        abilities: [
            { name: "Will of Iron", desc: "The first time this model is destroyed, remove it from play, then, at the end of the phase, roll one D6: on a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with 3 wounds remaining." },
            { name: "Leader", desc: "This model can be attached to the following units: \n- **Cadian Shock Troops**\n- **Catachan Jungle Fighters**\n- **Death Korps of Krieg**\n- **Kasrkin**\n- **Krieg Combat Engineers**\n- **Tempestus Scions**" },
            { name: "Hero of Hades Hive", desc: "In your Command phase, you can select one of the abilities in the Hero of Hades Hive section. Until the start of your next Command phase, this model has that ability." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Infantry","Character","Epic Hero","Officer","Commissar Yarrick"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Crassus [Legends]",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Transport","Smoke","Crassus"],
        pointOptions: [],
        transport: "This model has a transport capacity of 35 ASTRA MILITARUM INFANTRY models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of  2 models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Cyclops Demolition Vehicle",
        pts: 25,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 8,
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
            { name: "Demolition Charges", desc: "Each time this model or an enemy unit ends a move, if this model is within 3\" of one or more enemy units, select one of those enemy units. This model is destroyed, but instead of rolling for its Deadly Demise ability, roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D6 mortal wounds." },
            { name: "Unstable Payload", desc: "When rolling for this model’s Deadly Demise ability, units within 6\" suffer mortal wounds on a 4+, instead of on a 6." },
            { name: "Compact", desc: "This model can embark within an ASTRA MILITARUM TRANSPORT model as if it were an INFANTRY model. If it does, it takes up the space of 7 models." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Cyclops Demolition Vehicle","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Death Korps Grenadier Squad [Legends]",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.sergeants_close_combat_weapon,
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_stubber_2,
            astra_militarum_weapons.sergeants_pistol,
            astra_militarum_weapons.hot_shot_lasgun,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.grenade_launcher_frag_2,
            astra_militarum_weapons.grenade_launcher_krak_2,
            astra_militarum_weapons.meltagun_2,
            astra_militarum_weapons.plasma_gun_standard_2,
            astra_militarum_weapons.plasma_gun_supercharge_2,
            astra_militarum_weapons.sniper_rifle,
            astra_militarum_weapons.flamer,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_stubber_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.sergeants_pistol, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.hot_shot_lasgun, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.grenade_launcher_frag_2, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.grenade_launcher_krak_2, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.meltagun_2, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.plasma_gun_standard_2, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.plasma_gun_supercharge_2, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.sniper_rifle, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.flamer, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.sergeants_close_combat_weapon, selected: true},
            ],
            slot13: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Grenadiers", desc: "Once per turn, you can target this unit with the Grenade Stratagem for 0CP." },
            { name: "Grenadier Squad", desc: "If a model from your army with the Leader ability can be attached to a **Krieg Combat Engineers** unit, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Imperium","Faction: Astra Militarum","Grenades","Regiment","Platoon","Death Korps Grenadier Squad","Krieg"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Death Rider Commissar [Legends]",
        pts: 35,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.commissar_s_close_combat_weapon,
            astra_militarum_weapons.savage_claws,
        ],
        rangedWeapons: [
            astra_militarum_weapons.commisars_pistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.commisars_pistol, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.commissar_s_close_combat_weapon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.savage_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Death Riders**\n\n\n*You can attach this model to the above unit even if one **Death Rider Squadron Commander**, **Lord Marshal Dreir** or **Lord Solar Leontus** model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.*" },
            { name: "Summary Execution", desc: "Once per battle round, at the start of any phase, you can select one friendly ASTRA MILITARUM INFANTRY or ASTRA MILITARUM MOUNTED unit that is Battle-shocked and within 12\" of this model. If you do, one model in that unit is destroyed, and that unit is then no longer Battle-shocked." },
            { name: "Political Overwatch", desc: "While another Officer model is in the same unit as this model, you can re-roll Battle-shock tests taken for that unit." },
        ],
        keywords: ["Mounted","Character","Imperium","Grenades","Officer","Death Rider Commissar","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Death Riders",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.steeds_savage_claws,
            astra_militarum_weapons.power_sabre,
            astra_militarum_weapons.frag_lance,
        ],
        rangedWeapons: [
            astra_militarum_weapons.death_rider_lascarbine,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.death_rider_lascarbine, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.steeds_savage_claws, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.power_sabre, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.frag_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Screening Line", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\"." },
        ],
        keywords: ["Faction: Astra Militarum","Mounted","Imperium","Grenades","Regiment","Death Riders"],
        pointOptions: [{ models: 6, pts: 120 }],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Deathstrike",
        pts: 145,
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
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.deathstrike_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.deathstrike_missile, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Deathstrike Missile", desc: "In your Shooting phase, each time this model is selected to shoot, if it has not shot with its  Deathstrike missile this battle, you can do one of the following in addition to resolving this model’s ranged attacks:\n\n- **Designate Target:** If this model does not have a Deathstrike Target marker on the battlefield, place a Deathstrike Target marker for this model anywhere on the battlefield.\n\n- **Adjust Target:** If this model has a Deathstrike Target marker on the battlefield, move that marker to anywhere else on the battlefield." },
        ],
        keywords: ["Deathstrike","Faction: Astra Militarum","Imperium","Smoke","Squadron","Vehicle","Artillery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Dominus Armoured Siege Bombard [Legends]",
        pts: 325,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.dominus_triple_bombard,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.dominus_triple_bombard, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Pinning Bombardment", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Dominus triple bombard scored a hit against an enemy Infantry unit, that unit must take a Battle-shock test." },
        ],
        keywords: ["Vehicle","Titanic","Faction: Astra Militarum","Smoke","Dominus Armoured Siege Bombard"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Doomhammer",
        pts: 415,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.magma_cannon,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.magma_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Close-range Titan Killer", desc: "Each time this model’s magma cannon targets a **Monster** or **Vehicle** unit, that target is always considered to be within half range of that weapon." },
        ],
        keywords: ["Doomhammer","Faction: Astra Militarum","Imperium","Smoke","Vehicle","Titanic","Transport"],
        pointOptions: [],
        transport: "This model has a transport capacity of 26 **Astra Militarum Infantry** models. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Earthshaker Carriage Battery [Legends]",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 4,
            tough: 7,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.battery_close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.earthshaker_cannon_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.earthshaker_cannon_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.battery_close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Earthshaker Rounds", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with its earthshaker cannon scored a hit against an INFANTRY unit, until the end of your opponent’s next turn, that INFANTRY unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it." },
        ],
        keywords: ["Faction: Astra Militarum","Infantry","Artillery","Imperium","Grenades","Regiment","Earthshaker Carriage Battery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Earthshaker Platform [Legends]",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 8,
            saving: 3,
            wounds: 8,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.earthshaker_cannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.earthshaker_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Earthshaker Rounds", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with its earthshaker cannon scored a hit against an enemy Infantry unit, until the end of your opponent’s next turn, that unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it." },
            { name: "Reinforced Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack." },
            { name: "Fortification", desc: "While an enemy unit is only within Engagement Range of one or more Fortifications from your army:\n- That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll.\n- Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so." },
        ],
        keywords: ["Fortification","Imperium","Artillery","Faction: Astra Militarum","Earthshaker Platform"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Elysian Drop Sentinel [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapons_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.multi_melta,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.multi_melta, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.close_combat_weapons_2, selected: true},
            ],
        },
        abilities: [
            { name: "Meteoric Descent", desc: "When this model is set up on the battlefield using the Deep Strike ability, it can perform a meteoric descent. If it does, this model can be set up anywhere on the battlefield that is more than 3\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge." },
        ],
        keywords: ["Elysian Drop Sentinel","Vehicle","Walker","Imperium","Squadron","Smoke","Faction: Astra Militarum","Regiment"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Elysian Sniper Squad [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.lasgun,
            astra_militarum_weapons.sniper_rifle_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.lasgun, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.sniper_rifle_2, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Mark the Target", desc: "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Sniper Teams", desc: "For the purposes of embarking within Transports, each Elysian Sniper Team model counts as one Heavy Weapons Team model." },
        ],
        keywords: ["Infantry","Imperium","Grenades","Regiment","Elysian Sniper Squad","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Front-line Commander [Crucible]",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Get Back in the Fight", desc: "While this model is leading a unit, that unit is eligible to shoot in a turn in which it Fell Back." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Astra Militarum Battleline**\n- **Kasrkin**\n- **Krieg Combat Engineers**\n- **Tempestus Scions**" },
        ],
        keywords: ["Character","Infantry","Crucible","Imperium","Grenades","Officer","Faction: Astra Militarum","Front-line Commander"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Gaunt’s Ghosts",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            astra_militarum_weapons.gaunts_chainsword,
            astra_militarum_weapons.mkolls_straight_silver_knife,
            astra_militarum_weapons.straight_silver_knife,
        ],
        rangedWeapons: [
            astra_militarum_weapons.bolt_pistol_3,
            astra_militarum_weapons.corbecs_hot_shot_lascarbine,
            astra_militarum_weapons.larkins_long_las,
            astra_militarum_weapons.lascarbine,
            astra_militarum_weapons.rawnes_lascarbine,
            astra_militarum_weapons.braggs_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.bolt_pistol_3, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.corbecs_hot_shot_lascarbine, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.larkins_long_las, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.lascarbine, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.rawnes_lascarbine, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.braggs_autocannon, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.gaunts_chainsword, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.mkolls_straight_silver_knife, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.straight_silver_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save 5+", desc: "Ibram Gaunt has a 5+ Invulnerable Save" },
            { name: "Covert Stealth Team", desc: "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models." },
            { name: "Tanith Camo-cloaks", desc: "Models in this unit have the Benefit of Cover." },
        ],
        keywords: ["Gaunt’s Ghosts","Faction: Astra Militarum","Imperium","Epic Hero","Infantry","Grenades"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Gorgon Heavy Transport [Legends]",
        pts: 275,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: 5
        },
        meleeWeapons: [
            astra_militarum_weapons.landing_ramp,
        ],
        rangedWeapons: [
            astra_militarum_weapons.gorgon_mortar,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.twin_heavy_stubber,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.gorgon_mortar, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.twin_heavy_stubber, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.landing_ramp, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable Save against ranged attacks." },
            { name: "Mount Up!", desc: "At the end of your opponent’s Movement phase, if there are no models currently embarked within this **Transport**, you can select one friendly **Astra Militarum Infantry** unit (excluding **Artillery** units) that is wholly within 6\" of this **Transport**. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this **Transport**." },
        ],
        keywords: ["Gorgon Heavy Transport","Faction: Astra Militarum","Vehicle","Smoke","Transport","Imperium","Titanic"],
        pointOptions: [],
        transport: "This model has a transport capacity of 30 **Astra Militarum Infantry** models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Griffon Mortar Carrier [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.griffon_heavy_mortar,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.griffon_heavy_mortar, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Suppression Bombardment", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding Monster and Vehicle units) hit by one or more of those attacks made with this model’s Griffon heavy mortar. Unit the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Griffon Mortar Carrier","Vehicle","Artillery","Imperium","Squadron","Smoke","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Hades Breaching Drill [Legends]",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 3,
            wounds: 8,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.melta_cutter_drill,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.melta_cutter_drill, selected: true},
            ],
        },
        abilities: [
            { name: "Subterranean Assault", desc: "Each time you set up this model on the battlefield using the Deep Strike ability, you can select one friendly ASTRA MILITARUM INFANTRY unit in Strategic Reserves. If you do, set up that unit anywhere on the battlefield that is wholly within 9\" of this model and more than 9\" away from all enemy units." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Hades Breaching Drill"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Heavy Mortar Team [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 4,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_mortar_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_mortar_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Rearm, Reload, Fire", desc: "While this model is being affected by an Order, provided it Remained Stationary this turn, ranged weapons equipped by this model have the [SUSTAINED HITS 1] ability" },
        ],
        keywords: ["Heavy Mortar Team","Faction: Astra Militarum","Artillery","Grenades","Imperium","Regiment","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Heavy Quad Launcher Team [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 4,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_quad_launcher_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_quad_launcher_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Suppression Bombardment", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding Monster and Vehicle units) hit by one or more of those attacks. Unit the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Heavy Quad Launcher Team","Infantry","Faction: Astra Militarum","Artillery","Grenades","Imperium","Regiment"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Hell's Last [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            astra_militarum_weapons.dirk,
            astra_militarum_weapons.power_weapon,
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.demolitions,
            astra_militarum_weapons.bolt_pistol,
            astra_militarum_weapons.meltagun_2,
            astra_militarum_weapons.hot_shot_laspistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.demolitions, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.meltagun_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.hot_shot_laspistol, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.dirk, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.power_weapon, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Lesk’s Heroes", desc: "Add 1 to the Leadership characteristic of models in this unit and you can re-roll Battle-shock and Leadership tests taken for this unit." },
            { name: "Heroic Example", desc: "While this unit’s Minka Lesk model is on the battlefield, each time a model in this unit makes an attack, you can re-roll the Hit roll." },
            { name: "Invulnerable Save 5+", desc: "Models in this unit have a 5+ Invulnerable Save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Cadian Shock Troops**" },
            { name: "Regimental Banner", desc: "Add 1 to the Objective Control characteristic of models in the bearer’s unit." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Infantry","Grenades","Platoon","Command Squad","Hell's Last","Epic Hero"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Hellhammer",
        pts: 420,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hellhammer_cannon,
            astra_militarum_weapons.coaxial_autocannon,
            astra_militarum_weapons.demolisher_cannon,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hellhammer_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.coaxial_autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.demolisher_cannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Close-quarters Warfare", desc: "This model does not suffer the penalty to its Hit rolls for making ranged attacks while enemy units are within Engagement Range of it." },
        ],
        keywords: ["Hellhammer","Faction: Astra Militarum","Imperium","Vehicle","Titanic","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Hellhound",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 2,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.chem_cannon,
            astra_militarum_weapons.inferno_cannon,
            astra_militarum_weapons.melta_cannon,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.multi_melta,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.chem_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.inferno_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.melta_cannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.multi_melta, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Flush Them Out", desc: "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the start of your next Shooting phase, that unit is scattered. While a unit is scattered, it cannot have the Benefit of Cover." },
        ],
        keywords: ["Hellhound","Faction: Astra Militarum","Imperium","Vehicle","Squadron","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Hippogriff AFV",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull_5,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_stubber_3,
            astra_militarum_weapons.meltagun_3,
            astra_militarum_weapons.vigilator_cannon,
            astra_militarum_weapons.melta_cannon_2,
            astra_militarum_weapons.chiron_gatling_cannon_2,
            astra_militarum_weapons.lascannon_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_stubber_3, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.meltagun_3, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.vigilator_cannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.melta_cannon_2, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.chiron_gatling_cannon_2, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.lascannon_2, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.armoured_hull_5, selected: true},
            ],
        },
        abilities: [
            { name: "Convoy Escort Vehicle", desc: "In your Shooting phase, after this unit has shot, it can make a Normal move of up to D6\". If it does, until the end of the turn, this unit is not eligible to declare a charge." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Vehicle","Squadron","Smoke","Hippogriff AFV"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Hydra",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hydra_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hydra_autocannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Flak Battery", desc: "Each time this model makes an attack that targets a unit that can **Fly**, you can re-roll the Hit roll." },
        ],
        keywords: ["Hydra","Faction: Astra Militarum","Imperium","Squadron","Smoke","Vehicle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Hydra Platform [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 8,
            saving: 3,
            wounds: 8,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hydra_quad_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hydra_quad_autocannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Flak Battery", desc: "Each time this model makes an attack that targets a unit that can Fly, you can re-roll the Hit roll." },
            { name: "Reinforced Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack" },
        ],
        keywords: ["Hydra Platform","Fortification","Imperium","Artillery","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Krieg Command Squad",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.trench_club,
            astra_militarum_weapons.power_fist_2,
            astra_militarum_weapons.power_weapon_2,
            astra_militarum_weapons.close_combat_weapon_3,
            astra_militarum_weapons.chainsword_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.plasma_pistol_standard_2,
            astra_militarum_weapons.plasma_pistol_supercharge_2,
            astra_militarum_weapons.laspistol_2,
            astra_militarum_weapons.boltgun_2,
            astra_militarum_weapons.plasma_gun_standard,
            astra_militarum_weapons.plasma_gun_supercharge,
            astra_militarum_weapons.meltagun,
            astra_militarum_weapons.grenade_launcher_frag,
            astra_militarum_weapons.grenade_launcher_krak,
            astra_militarum_weapons.flamer,
            astra_militarum_weapons.bolt_pistol_2,
            astra_militarum_weapons.lasgun,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.laspistol_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.boltgun_2, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.plasma_gun_standard, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.meltagun, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.grenade_launcher_frag, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.grenade_launcher_krak, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.flamer, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.bolt_pistol_2, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.lasgun, selected: true},
            ],
            slot13: [
                {...astra_militarum_weapons.trench_club, selected: true},
            ],
            slot14: [
                {...astra_militarum_weapons.power_fist_2, selected: true},
            ],
            slot15: [
                {...astra_militarum_weapons.power_weapon_2, selected: true},
            ],
            slot16: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
            slot17: [
                {...astra_militarum_weapons.chainsword_3, selected: true},
            ],
        },
        abilities: [
            { name: "Grim Determination", desc: "While this unit contains an **Officer**, you can target this unit with Stratagems even while it is Battle-shocked and Orders issued to this unit do not cease to affect this unit if it becomes Battle-shocked." },
            { name: "Leader", desc: "This model can be attached to the following units: **Death Korps of Krieg**, **Krieg Combat Engineers**" },
            { name: "Alchemyk Counteragents", desc: "The bearer's unit has the Feel No Pain 6+ ability against mortal wounds." },
            { name: "Servo-scribes", desc: "Once per battle, when issuing an Order, the Lord Commissar can issue one additional Order.\n\n\nDesigner's Note: Place a Servo-scribes token next to the unit, removing it when this ability has been used." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Command Squad","Grenades","Infantry","Character","Platoon","Krieg"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Krieg Heavy Weapons Squad",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            astra_militarum_weapons.krieg_heavy_flamer,
            astra_militarum_weapons.twin_krieg_heavy_stubber,
            astra_militarum_weapons.laspistol_2,
            astra_militarum_weapons.lascannon_3,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.krieg_heavy_flamer, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_krieg_heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.laspistol_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.lascannon_3, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Final Duty", desc: "While the Fire Coordinator model is on the battlefield, each time a Heavy Weapons Gunner model is destroyed, roll one D6: one a 3+, do not remove it from play. The destroyed model can shoot after the attacking model's unit has finished making its attacks, and is then removed from play." },
            { name: "Embarking", desc: "While embarked within a **Transport**, each Heavy Weapons Gunner model takes up the space of 2 models, and each weapon equipped by these models is considered to be 2 models' weapons for the purposes of the Firing Deck ability." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Infantry","Grenades","Regiment","Krieg Heavy Weapons Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Leman Russ Commander",
        pts: 235,
        units: 2,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 13,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.leman_russ_battle_cannon,
            astra_militarum_weapons.demolisher_battle_cannon,
            astra_militarum_weapons.vanquisher_battle_cannon,
            astra_militarum_weapons.eradicator_nova_cannon,
            astra_militarum_weapons.executioner_plasma_cannon_standard,
            astra_militarum_weapons.executioner_plasma_cannon_supercharge,
            astra_militarum_weapons.punisher_gatling_cannon,
            astra_militarum_weapons.exterminator_autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.multi_melta,
            astra_militarum_weapons.plasma_cannon_standard,
            astra_militarum_weapons.plasma_cannon_supercharge,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.leman_russ_battle_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.demolisher_battle_cannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.vanquisher_battle_cannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.eradicator_nova_cannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.executioner_plasma_cannon_standard, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.executioner_plasma_cannon_supercharge, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.punisher_gatling_cannon, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.exterminator_autocannon, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot13: [
                {...astra_militarum_weapons.multi_melta, selected: true},
            ],
            slot14: [
                {...astra_militarum_weapons.plasma_cannon_standard, selected: true},
            ],
            slot15: [
                {...astra_militarum_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot16: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot17: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot18: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Death Befitting An Officer", desc: "When this model is destroyed, roll one D6: on a 2+, do not remove it from play - it can, after the attacking model’s unit has finished making its attacks, shoot as if it were your Shooting phase and as if it had its full wounds remaining. This model is then removed from play." },
            { name: "Vox-net", desc: "Each time this model issues an Order, it can issue it to an eligible unit up to 12\" away" },
        ],
        keywords: ["Leman Russ Commander","Faction: Astra Militarum","Imperium","Officer","Vehicle","Smoke","Character","Squadron"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Lord Marshal Dreir",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.sabre_of_sacrifice,
            astra_militarum_weapons.savage_claws,
        ],
        rangedWeapons: [
            astra_militarum_weapons.laspistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.laspistol, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.sabre_of_sacrifice, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.savage_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Tough to Kill", desc: "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with D3 wounds remaining." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Death Riders**" },
            { name: "Leading the Charge", desc: "Each time this model's unit makes a Charge move, until the end of the turn, melee weapons equipped by models in that unit have the **[DEVASTATING WOUNDS]** ability." },
        ],
        keywords: ["Mounted","Epic Hero","Imperium","Faction: Astra Militarum","Character","Officer","Grenades","Lord Marshal Dreir"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Lord Solar Leontus",
        pts: 130,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.conquest,
            astra_militarum_weapons.konstantins_hooves,
        ],
        rangedWeapons: [
            astra_militarum_weapons.sols_righteous_gaze,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.sols_righteous_gaze, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.conquest, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.konstantins_hooves, selected: true},
            ],
        },
        abilities: [
            { name: "The Lord Solar", desc: "At the start of your Command phase, If this model is on the battlefield, you gain 1CP." },
            { name: "The Collegiate Astrolex", desc: "After both players have deployed their armies, select up to three **Astra Militarum** units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
            { name: "Supreme Commander", desc: "If this model is in your army, it must be your **Warlord**." },
            { name: "Leader", desc: "This model can be attached to the following units: **Attilan Rough Riders**, ** Cadian Shock Troops**, ** Catachan Jungle Fighters**, ** Death Korps of Krieg**, **Death Riders**, **Kasrkin**, **Krieg Combat Engineers**" },
        ],
        keywords: ["Lord Solar Leontus","Mounted","Epic Hero","Imperium","Faction: Astra Militarum","Character","Officer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Macharius [Legends]",
        pts: 310,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.macharius_twin_battlecannon,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.twin_heavy_stubber,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.macharius_twin_battlecannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.twin_heavy_stubber, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Battlefield Control", desc: "Each time this model makes a ranged attack, if it is within range of an objective marker you control, re-roll a Hit roll of 1." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Titanic","Imperium","Smoke","Macharius"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Macharius Omega [Legends]",
        pts: 310,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.omega_pattern_plasma_blastgun_standard,
            astra_militarum_weapons.omega_pattern_plasma_blastgun_supercharged,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.omega_pattern_plasma_blastgun_standard, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.omega_pattern_plasma_blastgun_supercharged, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Overwhelming Short-range Firepower", desc: "Each time this model makes an attack that targets the closest eligible enemy unit, re-roll a Hit roll of 1 and re-roll a Wound roll or 1." },
        ],
        keywords: ["Vehicle","Titanic","Imperium","Smoke","Macharius Omega","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Macharius Vanquisher [Legends]",
        pts: 285,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.macharius_twin_vanquisher_cannon,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.twin_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.macharius_twin_vanquisher_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.twin_heavy_stubber, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Tank Hunter", desc: "Each time this model makes a ranged attack with its Macharius twin vanquisher cannon that targets a MONSTER or VEHICLE unit, you can re-roll the Hit roll." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Titanic","Imperium","Smoke","Macharius Vanquisher"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Macharius Vulcan [Legends]",
        pts: 310,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.macharius_vulcan_mega_bolter,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.twin_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.macharius_vulcan_mega_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.twin_heavy_stubber, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Armoured Aggressor", desc: "Each time this model makes a ranged attack, it does not suffer the penalty to the Hit roll for being within Engagement Range of one or more enemy units." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Titanic","Imperium","Smoke","Macharius Vulcan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Malcador [Legends]",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.malcador_battle_cannon,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.malcador_battle_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Rugged Reliability", desc: "Each time a ranged attack targets this model, worsen the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Smoke","Malcador"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Malcador Annihilator [Legends]",
        pts: 270,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.demolisher_cannon,
            astra_militarum_weapons.malcador_twin_lascannon,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.demolisher_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.malcador_twin_lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Battlefield Dominance", desc: "Ranged weapons equipped by this model have the [IGNORES COVER] ability while targeting an enemy unit within half range." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Smoke","Malcador Annihilator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Malcador Defender [Legends]",
        pts: 310,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.demolisher_cannon,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.demolisher_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Armoured Defender", desc: "Each time you target this model with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ while resolving that Stratagem." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Smoke","Malcador Defender"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Malcador Infernus [Legends]",
        pts: 235,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.inferno_gun,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.inferno_gun, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Explosive Death", desc: "When this model is destroyed, roll one D6: on a 3+, do not remove it from play - it can, after the attacking model’s unit has finished making its attacks, shoot with its inferno gun as if it were your Shooting phase and as if it had its full wounds remaining. This model is then removed from play." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Smoke","Malcador"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Manticore",
        pts: 165,
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
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.storm_eagle_rockets,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.storm_eagle_rockets, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Furious Barrage", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding **Monsters** and **Vehicles**) that was hit by one or more of those attacks made with this model's storm eagle rockets. Until the start of your next Shooting phase, that enemy unit is staggered. While a unit is staggered, subtract 1 from the Objective Control characteristic of models in that unit (to a minimum of 1)." },
        ],
        keywords: ["Manticore","Faction: Astra Militarum","Imperium","Vehicle","Artillery","Squadron","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Manticore Platform [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 8,
            saving: 3,
            wounds: 8,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.storm_eagle_rockets_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.storm_eagle_rockets_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Reinforced Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack" },
            { name: "Furious Barrage", desc: "Each time this model makes an attack with its storm eagle rockets that targets an enemy unit that contains five or more models, you can re-roll the Hit roll." },
        ],
        keywords: ["Manticore Platform","Fortification","Imperium","Artillery","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Marauder Bomber [Legends]",
        pts: 345,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.armoured_hull_3, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-7 Wounds Remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Heavy Bombs", desc: "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll nine D6, adding 1 to each result if that unit is a MONSTER or VEHICLE: for each 5+, that unit suffers 1 mortal wound." },
            { name: "Inferno Bombs", desc: "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll nine D6, adding 1 to each result if that unit is not a MONSTER or VEHICLE: for each 5+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Titanic","Fly","Aircraft","Imperium","Marauder Bomber"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Marauder Destroyer [Legends]",
        pts: 375,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.marauder_nose_autocannons,
            astra_militarum_weapons.assault_cannon,
            astra_militarum_weapons.hellstrike_missile_rack,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.marauder_nose_autocannons, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.assault_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.hellstrike_missile_rack, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_hull_3, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-7 Wounds Remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Bomb Drop", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Titanic","Fly","Aircraft","Imperium","Marauder Destroyer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Medusa Carriage Battery [Legends]",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 4,
            tough: 7,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.battery_close_combat_weapons,
        ],
        rangedWeapons: [
            astra_militarum_weapons.medusa_siege_cannon_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.medusa_siege_cannon_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.battery_close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Siege Bombardment", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Infantry","Artillery","Imperium","Grenades","Regiment","Medusa Carriage Battery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Militarum Tempestus Command Squad",
        pts: 85,
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
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.tempestus_dagger,
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.flamer,
            astra_militarum_weapons.grenade_launcher_frag_2,
            astra_militarum_weapons.grenade_launcher_krak_2,
            astra_militarum_weapons.meltagun_2,
            astra_militarum_weapons.hot_shot_volley_gun,
            astra_militarum_weapons.plasma_gun_standard_2,
            astra_militarum_weapons.plasma_gun_supercharge_2,
            astra_militarum_weapons.hot_shot_lasgun,
            astra_militarum_weapons.hot_shot_laspistol,
            astra_militarum_weapons.bolt_pistol,
            astra_militarum_weapons.plasma_pistol_standard,
            astra_militarum_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.flamer, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.grenade_launcher_frag_2, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.grenade_launcher_krak_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.meltagun_2, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.hot_shot_volley_gun, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.plasma_gun_standard_2, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.plasma_gun_supercharge_2, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.hot_shot_lasgun, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.hot_shot_laspistol, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.bolt_pistol, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.plasma_pistol_standard, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot13: [
                {...astra_militarum_weapons.tempestus_dagger, selected: true},
            ],
            slot14: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Medi-pack", desc: "At the start of your Command phase, if the bearer's unit is below its Starting Strength, you can return up to D3 destroyed Tempestus Scions models to this unit." },
            { name: "Command Rod", desc: "While the bearer is leading a unit, that unit can be affected by up to two different Orders at the same time." },
            { name: "Leader", desc: "This unit can be attached to the following unit:\n- **Tempestus Scions**" },
            { name: "Tempestor Prime", desc: "While this unit contains a Tempestor Prime, ranged weapons equipped by models in this unit have the **[SUSTAINED HITS 1]** ability." },
        ],
        keywords: ["Militarum Tempestus","Faction: Astra Militarum","Imperium","Infantry","Character","Grenades","Command Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Ministorum Priest",
        pts: 35,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.zealots_vindicator,
            astra_militarum_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.zealots_vindicator_2,
            astra_militarum_weapons.holy_pistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.zealots_vindicator_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.holy_pistol, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.zealots_vindicator, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.power_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units: **Cadian Shock Troops**, **Catachan Jungle Fighters**, **Death Korps of Krieg**, **Kasrkin**, **Krieg Combat Engineers**, **Tempestus Scions**," },
            { name: "War Hymns", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the **[SUSTAINED HITS 1]** ability." },
            { name: "Holy Piety", desc: "Each time this model makes a melee attack, unless this model's unit is Battle-shocked, you can re-roll the Hit roll." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Infantry","Character","Grenades","Ministorum Priest"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Minotaur [Legends]",
        pts: 225,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.minotaur_twin_earthshaker_cannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.minotaur_twin_earthshaker_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Armoured Frontis", desc: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack." },
        ],
        keywords: ["Minotaur","Vehicle","Imperium","Squadron","Transport","Smoke","Faction: Astra Militarum","Artillery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Nork Deddog",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.huge_knife,
        ],
        rangedWeapons: [
            astra_militarum_weapons.ripper_gun,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.ripper_gun, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.huge_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Thunderous Head-butt", desc: "Each time this model’s unit is selected to fight, you can select one enemy unit within Engagement Range of this model and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
            { name: "Loyal Protector", desc: "At the start of the Declare Battle Formations step, this model must join one **Command Squad** unit from your army (a **Command Squad** cannot have more than one **Loyal Protector** model joined to it). This model then counts as part of that **Command Squad** for the rest of the battle, and its Starting Strength is increased accordingly. If it is not possible to join this model to a **Command Squad**, it does not take part in the battle and counts as having been destroyed. \n\nWhile this model is joined to a unit, it can embark within any **Transport** that unit can embark within, and takes up the space of 3 models.\n\nThis model cannot be selected as your **Warlord**." },
        ],
        keywords: ["Nork Deddog","Faction: Astra Militarum","Imperium","Epic Hero","Infantry","Ogryn","Loyal Protector","Character","Grenades"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Ogryn Bodyguard",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 5,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_5,
            astra_militarum_weapons.bullgryn_maul,
            astra_militarum_weapons.huge_knife_2,
            astra_militarum_weapons.ripper_gun_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.ripper_gun_3,
            astra_militarum_weapons.grenadier_gauntlet,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.ripper_gun_3, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.grenadier_gauntlet, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.close_combat_weapon_5, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.bullgryn_maul, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.huge_knife_2, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.ripper_gun_2, selected: true},
            ],
        },
        abilities: [
            { name: "Loyal Protector", desc: "At the start of the Declare Battle Formations step, this model must join one **Command Squad** unit from your army (a **Command Squad** cannot have more than one **Loyal Protector** model joined to it). This model then counts as part of that **Command Squad** for the rest of the battle, and its Starting Strength is increased accordingly. If it is not possible to join this model to a **Command Squad**, it does not take part in the battle and counts as having been destroyed. \n\nWhile this model is joined to a unit, it can embark within any **Transport** that unit can embark within, and takes up the space of 3 models.\n\n\nThis model cannot be selected as your **Warlord** and cannot be given Enhancements." },
            { name: "Slabshield", desc: "The bearer has a Wounds characteristic of 7." },
        ],
        keywords: ["Bodyguard","Faction: Astra Militarum","Imperium","Infantry","Grenades","Loyal Protector","Ogryn","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Praetor [Legends]",
        pts: 275,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.praetor_launcher_firestorm,
            astra_militarum_weapons.praetor_launcher_foehammer,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.praetor_launcher_firestorm, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.praetor_launcher_foehammer, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Targeting Coordinates", desc: "While this model is being affected by an Order, each time it makes an attack with its Praetor launcher, it does not suffer the penalty to the Hit roll for attacking a unit that is not visible to it." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Squadron","Smoke","Praetor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Primaris Psyker",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 2
        },
        meleeWeapons: [
            astra_militarum_weapons.force_weapon,
        ],
        rangedWeapons: [
            astra_militarum_weapons.psychic_maelstrom_witchfire,
            astra_militarum_weapons.psychic_maelstrom_focused_witchfire,
            astra_militarum_weapons.laspistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.psychic_maelstrom_witchfire, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.psychic_maelstrom_focused_witchfire, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.laspistol, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units: **Cadian Shock Troops**, **Catachan Jungle Fighters**, **Death Korps of Krieg**, **Kasrkin**, **Krieg Combat Engineers**, **Tempestus Scions**" },
            { name: "Malign Wardings (Psychic)", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks" },
            { name: "Psychic Barrier (Psychic)", desc: "At the start of your opponent’s Shooting phase, you can roll one D6: on a 1, this **Psyker**’s unit suffers D3 mortal wounds; on a 2+, until the end of the phase, models in this **Psyker**’s unit have a 4+ invulnerable save." },
        ],
        keywords: ["Primaris Psyker","Faction: Astra Militarum","Imperium","Character","Infantry","Psyker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Provisionally Prepared [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 2,
            saving: 6,
            wounds: 2,
            leader: 8,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapons_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.sniper_rifle_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.sniper_rifle_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapons_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Ratlings**" },
            { name: "Well-stocked Supplies", desc: "While this model is leading a unit, improve the Leadership and Objective Control characteristics of models in that unit by 1." },
            { name: "A Hearty 'Pick Me Up'", desc: "While this model is leading a unit, in your Command phase, you can return up to D3 destroyed models to that unit." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Infantry","Character","Epic Hero","Grenades","Provisionally Prepared"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Quartermaster Cadre Squad [Legends]",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.quartermasters_close_combat_weapon,
            astra_militarum_weapons.medical_scalpels,
        ],
        rangedWeapons: [
            astra_militarum_weapons.quartermasters_pistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.quartermasters_pistol, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.quartermasters_close_combat_weapon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.medical_scalpels, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This unit can be attached to the following units:\n- **Death Korps of Krieg**\n- **Death Korps Grenadier Squad**\n- **Infantry Squad**\n- **Krieg Combat Engineers**" },
            { name: "Medicae Medi-packs", desc: "Whilst this unit contains one or more Medicae Servitors, models in this unit have the Feel No Pain 5+ ability." },
            { name: "Mindlock", desc: "While this unit contains a Quartermaster Revenant model, improve the Weapon Skill characteristic of this unit's Medical scalpels by 1" },
        ],
        keywords: ["Character","Infantry","Imperium","Grenades","Regiment","Quartermaster Cadre Squad","Faction: Astra Militarum","Krieg"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Rapier Laser Destroyer Battery [Legends]",
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
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.laser_destroyer,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.laser_destroyer, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Powerful Volley", desc: "While this unit is being affected by an Order, provided it Remained Stationary this turn, Heavy weapons equipped by models in this unit have the [LETHAL HITS] ability." },
        ],
        keywords: ["Faction: Astra Militarum","Infantry","Artillery","Grenades","Regiment","Imperium","Rapier Laser Destroyer Battery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Ratlings",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 2,
            saving: 6,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_6,
        ],
        rangedWeapons: [
            astra_militarum_weapons.tankstopper_rifle,
            astra_militarum_weapons.sniper_rifle_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.tankstopper_rifle, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.sniper_rifle_2, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.close_combat_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Shoot Sharp and Scarper", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move as if it were your Movement phase. If it does, until the end of the turn, this unit is not eligible to declare a charge." },
            { name: "Ratling Battlemutt", desc: "Once per battle, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the **[LETHAL HITS]** ability.\n\n**Designer’s Note:** *Place a Ratling Battlemutt token next to the unit, removing it once this ability has been used.*" },
            { name: "Demolition Gear", desc: "The bearer’s unit has the **Grenades** keyword." },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Infantry","Ratlings"],
        pointOptions: [{ models: 6, pts: 100 }],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Regimental Attachés [Legends]",
        pts: 40,
        units: 1,
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
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.astropaths_stave,
            astra_militarum_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            astra_militarum_weapons.laspistol_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.laspistol_2, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.astropaths_stave, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Aeronautica Commander", desc: "At the start of your Shooting phase, select one enemy unit within 30\" of and visible to this unit’s Officer of the Fleet model. Until the end of the phase, each time a friendly **Astra Militarum Aircraft** model makes a ranged attack that targets that unit, add 1 to the Hit roll." },
            { name: "Divination (Psychic)", desc: "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this unit’s Astropath model." },
            { name: "Attachés", desc: "At the start of the Declare Battle Formations step, this unit must join one **Command Squad** unit from your army (a **Command Squad** unit cannot have more than one **Regimental Attaché** unit joined to it). For the rest of the battle, every model in this unit counts as part of that **Command Squad** unit, and its Starting Strength is increased accordingly. If it is not possible to join a **Regimental Attaché** unit to a **Command Squad** in this way, it does not take part in the battle and counts as having been destroyed.\n\n\nWhile this unit is joined to a unit, it can embark within any **Transport** that unit can embark within." },
            { name: "Artillery Commander", desc: "At the start of your Shooting phase, select one enemy unit within 30\" of and visible to this unit’s Master of Ordnance model that has not already been selected for this ability this phase. Until the end of the phase, Blast weapons equipped by friendly **Astra Militarum Artillery** models have the **[SUSTAINED HITS 1]** ability when targeting that unit" },
        ],
        keywords: ["Regimental Attachés","Faction: Astra Militarum","Imperium","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Rein and Raus [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 2,
            saving: 6,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_6,
        ],
        rangedWeapons: [
            astra_militarum_weapons.demolition_charge,
            astra_militarum_weapons.stub_pistol,
            astra_militarum_weapons.sniper_rifle_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.demolition_charge, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.stub_pistol, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.sniper_rifle_2, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.close_combat_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Shoot Sharp and Scarper", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move. If it does, until the end of the turn, this unit is not eligible to declare a charge" },
            { name: "The Ratling Twins", desc: "While this unit contains 2 models, each time a model in this unit makes a ranged attack, you can re-roll the Hit roll and you can re-roll the Wound roll." },
        ],
        keywords: ["Epic Hero","Infantry","Imperium","Character","Rein and Raus","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Rogal Dorn Battle Tank",
        pts: 260,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.coaxial_autocannon,
            astra_militarum_weapons.oppressor_cannon,
            astra_militarum_weapons.twin_battle_cannon_2,
            astra_militarum_weapons.castigator_gatling_cannon,
            astra_militarum_weapons.pulveriser_cannon,
            astra_militarum_weapons.multi_melta,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.coaxial_autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.oppressor_cannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.twin_battle_cannon_2, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.castigator_gatling_cannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.pulveriser_cannon, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.multi_melta, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.meltagun, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Ablative Plating", desc: "Once per battle, when an attack is allocated to this model, you change the Damage characteristic of that attack to 0." },
        ],
        keywords: ["Rogal Dorn Battle Tank","Faction: Astra Militarum","Imperium","Vehicle","Squadron","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Rogal Dorn Commander",
        pts: 290,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.castigator_gatling_cannon,
            astra_militarum_weapons.pulveriser_cannon,
            astra_militarum_weapons.meltagun,
            astra_militarum_weapons.multi_melta,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.coaxial_autocannon,
            astra_militarum_weapons.oppressor_cannon,
            astra_militarum_weapons.twin_battle_cannon_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.castigator_gatling_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.pulveriser_cannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.meltagun, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.multi_melta, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.coaxial_autocannon, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.oppressor_cannon, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.twin_battle_cannon_2, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.armoured_tracks_3, selected: true},
            ],
        },
        abilities: [
            { name: "Called Shots", desc: "Each time this model is selected to shoot, you can re-roll one Hit roll, you can re-roll one Wound roll and you can re-roll one Damage roll when resolving its attacks." },
            { name: "Vox-net", desc: "Each time this model issues an Order, it can issue it to an eligible unit up to 12\" away" },
        ],
        keywords: ["Faction: Astra Militarum","Imperium","Vehicle","Squadron","Smoke","Rogal Dorn Commander","Character","Officer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Sabre Weapons Battery [Legends]",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.twin_heavy_bolter,
            astra_militarum_weapons.twin_lascannon,
            astra_militarum_weapons.twin_heavy_stubber,
            astra_militarum_weapons.twin_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.twin_heavy_stubber, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.twin_autocannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Sentinel Directives", desc: "Each time you target this unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem." },
            { name: "Fortification", desc: "While an enemy unit is only within Engagement Range of one or more Fortifications from your army:\n- That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll.\n- Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so." },
            { name: "Defence Searchlight", desc: "At the start of your Shooting phase, you can select one enemy unit within 24\" and visible to the bearer. Until the end of the phase, that unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Fortification","Imperium","Artillery","Faction: Astra Militarum","Sabre Weapons Battery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Salamander Command Vehicle [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Auspex Surveyor", desc: "Each time this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover" },
        ],
        keywords: ["Salamander Command Vehicle","Vehicle","Imperium","Faction: Astra Militarum","Squadron","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Salamander Scout Vehicle [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Outflank", desc: "When this model arrives from Strategic Reserves, it can be set up within your opponent’s deployment zone (all other restrictions still apply)." },
        ],
        keywords: ["Salamander Scout Vehicle","Vehicle","Smoke","Imperium","Faction: Astra Militarum","Squadron"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Scout Sentinels",
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
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_7,
            astra_militarum_weapons.sentinel_chainsaw,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.missile_launcher_frag,
            astra_militarum_weapons.missile_launcher_krak,
            astra_militarum_weapons.plasma_cannon_standard,
            astra_militarum_weapons.plasma_cannon_supercharge,
            astra_militarum_weapons.multi_laser,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.missile_launcher_frag, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.missile_launcher_krak, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.plasma_cannon_standard, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.multi_laser, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.close_combat_weapon_7, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.sentinel_chainsaw, selected: true},
            ],
        },
        abilities: [
            { name: "Daring Recon", desc: "At the start of your Shooting phase, select one enemy unit within 18\" of and visible to this unit. Until the end of the phase, each time a friendly **Astra Militarum** model makes an attack that targets that unit, re-roll a Hit roll of 1." },
        ],
        keywords: ["Scout Sentinels","Faction: Astra Militarum","Imperium","Vehicle","Walker","Regiment","Squadron","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Sentinel Commander [Crucible]",
        pts: 75,
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
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Mobile Firebase", desc: "Ranged weapons equipped by models in this unit have the **[ASSAULT]** ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Armoured Sentinels**\n- **Scout Sentinels***" },
        ],
        keywords: ["Character","Crucible","Imperium","Officer","Faction: Astra Militarum","Vehicle","Walker","Smoke","Sentinel Commander"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Sentinel Powerlifter [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.powerlifter,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.powerlifter, selected: true},
            ],
        },
        abilities: [
            { name: "Powerlifter Charge", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Regiment","Squadron","Smoke","Sentinel Powerlifter","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Sergeant Harker [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.payback,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.payback, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Catachan Jungle Fighters" },
            { name: "Payback Time", desc: "Once per battle, when this model is selected to shoot, it can use this ability. If it does, until the end of the phase, its Payback weapon has an Attacks characteristic of 6 and the **[SUSTAINED HITS 3]** ability instead of the **[SUSTAINED HITS 1]** ability." },
            { name: "Harker’s Hellraisers", desc: "While this model is leading a unit, each time a ranged attack targets that unit, if the attacking model is more than 12\" away, subtract 1 from the Hit roll." },
        ],
        keywords: ["Sergeant Harker","Faction: Astra Militarum","Imperium","Grenades","Officer","Character","Epic Hero","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Shadowsword",
        pts: 410,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.volcano_cannon,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.volcano_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Titan-killer", desc: "Each time this model makes a ranged attack with its volcano cannon that targets a **Monster** or **Vehicle** unit, that attack has the **[DEVASTATING WOUNDS]** ability." },
        ],
        keywords: ["Shadowsword","Faction: Astra Militarum","Imperium","Smoke","Vehicle","Titanic"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Sly Marbo",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.envenomed_blade,
        ],
        rangedWeapons: [
            astra_militarum_weapons.ripper_pistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.ripper_pistol, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.envenomed_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Like Fighting a Shadow", desc: "In your Shooting phase, after this model has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move. If it does, until the end of the turn, this model is not eligible to declare a charge." },
            { name: "One-man Army", desc: "Once per turn, in your opponent's Shooting phase, when an enemy unit makes a ranged attack that targets a friendly **Regiment** unit within 3\" of this model, after that enemy unit has shot, this model can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target." },
        ],
        keywords: ["Sly Marbo","Faction: Astra Militarum","Imperium","Infantry","Character","Epic Hero","Grenades","Regiment"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "transports",
        name: "Storm Chimera [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Mobile Command Vehicle", desc: "In your Command phase, one **Officer** model embarked within this **Transport** can issue Orders even though it is not on the battlefield. When doing so, measure distances to and from this **Transport**." },
        ],
        keywords: ["Dedicated Transport","Imperium","Squadron","Storm Chimera","Transport","Smoke","Faction: Astra Militarum","Vehicle"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Stormblade [Legends]",
        pts: 415,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.stormblade_plasma_blastgun_standard,
            astra_militarum_weapons.stormblade_plasma_blastgun_supercharge,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.twin_heavy_flamer,
            astra_militarum_weapons.twin_heavy_bolter,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.stormblade_plasma_blastgun_standard, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.stormblade_plasma_blastgun_supercharge, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.twin_heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Close-range Devastation", desc: "Each time this model makes a ranged attack with its Stormblade plasma blastgun that targets a unit within half range, you can re-roll the Hit roll." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Titanic","Imperium","Smoke","Stormblade"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Stormlord",
        pts: 430,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.vulcan_mega_bolter,
            astra_militarum_weapons.twin_heavy_bolter,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.vulcan_mega_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Mount Up!", desc: "At the end of your opponent’s Movement phase, if there are no models currently embarked within this **Transport**, you can select one friendly **Astra Militarum Infantry** unit (excluding **Artillery** units) that is wholly within 6\" of this **Transport**. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this **Transport**." },
        ],
        keywords: ["Stormlord","Faction: Astra Militarum","Imperium","Titanic","Transport","Vehicle","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 40 **Astra Militarum Infantry** models. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Stormsword",
        pts: 465,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.stormsword_siege_cannon,
            astra_militarum_weapons.twin_heavy_bolter,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.twin_heavy_flamer_2,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.stormsword_siege_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.twin_heavy_flamer_2, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Concussive Wave", desc: "In your Shooting phase, just after selecting a target for this model’s Stormsword siege cannon, roll one D6 for the target unit and every other unit within 3\" of that unit: on a 5+, the unit being rolled for is struck by a concussive wave. After this model has finished making its attacks against that target unit this phase, each unit struck by a concussive wave suffers D3 mortal wounds." },
        ],
        keywords: ["Stormsword","Faction: Astra Militarum","Imperium","Smoke","Titanic","Vehicle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Stygies Destroyer Tank Hunter [Legends]",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 13,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.stygies_laser_destroyer,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.stygies_laser_destroyer, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Tank Hunter", desc: "Each time this model makes a ranged attack that targets a Vehicle unit, add 1 to the Wound roll" },
        ],
        keywords: ["Stygies Destroyer Tank Hunter","Vehicle","Smoke","Squadron","Faction: Astra Militarum","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Tarantula Battery [Legends]",
        pts: 40,
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
            astra_militarum_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.twin_heavy_bolter,
            astra_militarum_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.twin_heavy_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Sentry Programming", desc: "You can target this unit with the Fire Overwatch Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Imperium","Tarantula Battery"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Tauros Assault Vehicle [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_frame,
        ],
        rangedWeapons: [
            astra_militarum_weapons.tauros_grenade_launcher_frag,
            astra_militarum_weapons.tauros_grenade_launcher_krak,
            astra_militarum_weapons.hunter_killer_missile,
            astra_militarum_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.tauros_grenade_launcher_frag, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.tauros_grenade_launcher_krak, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_frame, selected: true},
            ],
        },
        abilities: [
            { name: "Turbo-boost", desc: "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of this model." },
        ],
        keywords: ["Tauros Assault Vehicle","Mounted","Regiment","Imperium","Tauros","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Tauros Venator [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_frame,
        ],
        rangedWeapons: [
            astra_militarum_weapons.twin_multi_laser,
            astra_militarum_weapons.twin_lascannon,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.twin_multi_laser, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_frame, selected: true},
            ],
        },
        abilities: [
            { name: "Mobile Hunter-killer", desc: "Each time this model makes an attack that targets a Monster or Vehicle unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Tauros","Tauros Venator","Mounted","Faction: Astra Militarum","Imperium","Regiment"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "transports",
        name: "Taurox",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.twin_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.twin_autocannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Rapid Deployment", desc: "Units can disembark from this **Transport** after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally." },
        ],
        keywords: ["Taurox","Faction: Astra Militarum","Imperium","Vehicle","Squadron","Transport","Dedicated Transport"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Astra Militarum Infantry** models. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models.",
    },
    {
        army: "astra_militarum",
        class: "transports",
        name: "Taurox Prime",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.taurox_battle_cannon,
            astra_militarum_weapons.taurox_gatling_cannon,
            astra_militarum_weapons.taurox_missile_launcher_frag,
            astra_militarum_weapons.taurox_missile_launcher_krak,
            astra_militarum_weapons.twin_taurox_hot_shot_volley_gun,
            astra_militarum_weapons.twin_autocannon_2,
            astra_militarum_weapons.storm_bolter_3,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.taurox_battle_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.taurox_gatling_cannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.taurox_missile_launcher_frag, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.taurox_missile_launcher_krak, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.twin_taurox_hot_shot_volley_gun, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.twin_autocannon_2, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.storm_bolter_3, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Transport Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this **Transport** this turn makes an attack that targets that enemy unit, you can re-roll the Hit roll." },
        ],
        keywords: ["Taurox Prime","Faction: Astra Militarum","Imperium","Squadron","Vehicle","Dedicated Transport","Transport"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Militarum Tempestus Infantry** or **Astra Militarum Infantry Character** models.",
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Tech-Priest Enginseer",
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
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.enginseer_axe,
            astra_militarum_weapons.servo_arm,
        ],
        rangedWeapons: [
            astra_militarum_weapons.mechanicus_pistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.mechanicus_pistol, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.enginseer_axe, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.servo_arm, selected: true},
            ],
        },
        abilities: [
            { name: "Vengeance for the Omnissiah", desc: "If a friendly **Astra Militarum Vehicle** model is destroyed within 12\" of this model, until the end of the battle, this model’s Enginseer axe has an Attacks characteristic of 6" },
            { name: "Omnissiah’s Blessing", desc: "In your Command phase, select one friendly **Astra Militarum Vehicle** model within 3\" of this model. That **Vehicle** model regains up to D3 lost wounds and, until the start of your next Command phase, that **Vehicle** model has a 4+ invulnerable save. Each model can only be selected for this ability once per turn." },
            { name: "Enginseer", desc: "While this model is within 3\" of one or more friendly **Astra Militarum Vehicle** units, this model has the Lone Operative ability" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Cadian Shock Troops**\n- **Catachan Jungle Fighters**\n- **Death Korps of Krieg**\n- **Kasrkin**\n- **Krieg Combat Engineers**" },
        ],
        keywords: ["Tech-Priest Enginseer","Faction: Astra Militarum","Imperium","Infantry","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Tempestus Aquilons",
        pts: 100,
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
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.close_combat_weapon_3,
            astra_militarum_weapons.chainsword_2,
            astra_militarum_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.hot_shot_long_las,
            astra_militarum_weapons.plasma_carbine_standard,
            astra_militarum_weapons.plasma_carbine_supercharge,
            astra_militarum_weapons.melta_carbine,
            astra_militarum_weapons.sentry_flamer,
            astra_militarum_weapons.sentry_hot_shot_volley_gun,
            astra_militarum_weapons.sentry_grenade_launcher_frag,
            astra_militarum_weapons.sentry_grenade_launcher_krak,
            astra_militarum_weapons.hot_shot_lascarbine,
            astra_militarum_weapons.hot_shot_laspistol,
            astra_militarum_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.hot_shot_long_las, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.plasma_carbine_standard, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.plasma_carbine_supercharge, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.melta_carbine, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.sentry_flamer, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.sentry_hot_shot_volley_gun, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.sentry_grenade_launcher_frag, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.sentry_grenade_launcher_krak, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.hot_shot_lascarbine, selected: true},
            ],
            slot10: [
                {...astra_militarum_weapons.hot_shot_laspistol, selected: true},
            ],
            slot11: [
                {...astra_militarum_weapons.bolt_pistol, selected: true},
            ],
            slot12: [
                {...astra_militarum_weapons.close_combat_weapon_3, selected: true},
            ],
            slot13: [
                {...astra_militarum_weapons.chainsword_2, selected: true},
            ],
            slot14: [
                {...astra_militarum_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Precision Drop", desc: "In your Movement phase, when this unit is set up on the battlefield using the Deep Strike ability, it can perform a precision drop. If it does, this unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge." },
            { name: "Servo-sentry", desc: "When this unit is set up on the battlefield using the Deep Strike ability, the Tempestor Aquilon can shoot with its sentry weapon (its sentry flamer, sentry grenade launcher or sentry hot‑shot volley gun)." },
        ],
        keywords: ["Infantry","Grenades","Smoke","Imperium","Regiment","Militarum Tempestus","Tempestus Aquilons","Faction: Astra Militarum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Trojan Support Vehicle [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Support Vehicle", desc: "In your Command phase, select one friendly ASTRA MILITARUM VEHICLE model within 3\" of this model. That VEHICLE model regains up to D3 lost wounds and, until the start of your next Command phase, each time that VEHICLE model makes an attack, re-roll a Hit roll of 1. The same VEHICLE model cannot be selected for both this ability and the REGIMENTAL ENGINSEER's Omnissiah’s Blessing ability in the same turn, and each model can only be selected for this ability once per Command phase." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Squadron","Smoke","Imperium","Trojan Support Vehicle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "characters",
        name: "Ursula Creed",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            astra_militarum_weapons.power_weapon,
        ],
        rangedWeapons: [
            astra_militarum_weapons.duty_and_vengeance,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.duty_and_vengeance, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Lord Castellan", desc: "While this model is leading a unit, that unit can be affected by up to two different Orders at the same time." },
            { name: "Tactical Genius", desc: "Once per battle round, one unit from your army with this ability can use it when a friendly **Regiment** unit within 12\" of that model is targeted with a Stratagem. If it does, reduce the CP cost of that usage of that Stratagem by 1 CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Cadian Shock Troops**\n- **Kasrkin**" },
        ],
        keywords: ["Ursula Creed","Faction: Astra Militarum","Officer","Epic Hero","Infantry","Character","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Valdor [Legends]",
        pts: 285,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 13,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            astra_militarum_weapons.valdor_neutron_laser,
            astra_militarum_weapons.heavy_stubber,
            astra_militarum_weapons.storm_bolter,
            astra_militarum_weapons.autocannon,
            astra_militarum_weapons.heavy_bolter,
            astra_militarum_weapons.heavy_flamer,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.valdor_neutron_laser, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.autocannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot8: [
                {...astra_militarum_weapons.hunter_killer_missile, selected: true},
            ],
            slot9: [
                {...astra_militarum_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Power Overload", desc: "Each time this model makes an attack that targets a MONSTER or VEHICLE unit, you can re-roll the Damage roll." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Titanic","Smoke","Valdor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Valkyrie",
        pts: 190,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 2,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull,
        ],
        rangedWeapons: [
            astra_militarum_weapons.multiple_rocket_pod,
            astra_militarum_weapons.hellstrike_missiles,
            astra_militarum_weapons.multi_laser,
            astra_militarum_weapons.lascannon,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.multiple_rocket_pod, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.hellstrike_missiles, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.multi_laser, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...astra_militarum_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Airborne Insertion", desc: "At the end of your opponent’s Movement phase, one or more units embarked within this **Transport** can disembark from it." },
            { name: "Damaged: 1-5 Wounds Remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Valkyrie","Faction: Astra Militarum","Transport","Vehicle","Fly","Aircraft","Imperium"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Astra Militarum Infantry** models. Each **Ogryn** model takes up the space of 3 models. It cannot transport **Artillery** models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Valkyrie Sky Talon [Legends]",
        pts: 185,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 2,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull,
        ],
        rangedWeapons: [
            astra_militarum_weapons.multiple_rocket_pod,
            astra_militarum_weapons.hellstrike_missiles,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.multiple_rocket_pod, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.hellstrike_missiles, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Imperium","Transport","Valkyrie Sky Talon","Faction: Astra Militarum"],
        pointOptions: [],
        transport: "This model has a transport capacity of 1 TAUROS model or 2 ASTRA MILITARUM WALKER models.",
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Vendetta Gunship [Legends]",
        pts: 255,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 2,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull,
        ],
        rangedWeapons: [
            astra_militarum_weapons.vendetta_hellstrike_rack,
            astra_militarum_weapons.vendetta_twin_lascannon,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.vendetta_hellstrike_rack, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.vendetta_twin_lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Anti-armour Gunship", desc: "Each time a ranged attack made by this model is allocated to a Monster or Vehicle model, re-roll a Damage roll of 1" },
        ],
        keywords: ["Vendetta Gunship","Vehicle","Fly","Aircraft","Imperium","Transport"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Voss-pattern Lightning [Legends]",
        pts: 130,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull_3,
        ],
        rangedWeapons: [
            astra_militarum_weapons.lightning_hellstrike_rack,
            astra_militarum_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.lightning_hellstrike_rack, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.lascannon, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.armoured_hull_3, selected: true},
            ],
        },
        abilities: [
            { name: "Agile Dogfighter", desc: "Each time an attack targets this model, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Fly","Aircraft","Imperium","Voss-pattern Lightning"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Vulture Gunship [Legends]",
        pts: 225,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 2,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_hull_6,
        ],
        rangedWeapons: [
            astra_militarum_weapons.vulture_gatling_cannon,
            astra_militarum_weapons.multiple_rocket_pods,
            astra_militarum_weapons.vulture_hellstrike_rack,
            astra_militarum_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.vulture_gatling_cannon, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.multiple_rocket_pods, selected: true},
            ],
            slot3: [
                {...astra_militarum_weapons.vulture_hellstrike_rack, selected: true},
            ],
            slot4: [
                {...astra_militarum_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...astra_militarum_weapons.armoured_hull_6, selected: true},
            ],
        },
        abilities: [
            { name: "Gunship Barrage", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Faction: Astra Militarum","Vehicle","Fly","Aircraft","Imperium","Vulture Gunship"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "astra_militarum",
        class: "other",
        name: "Wyvern",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            astra_militarum_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            astra_militarum_weapons.wyvern_quad_stormshard_mortar,
        ],
        weapon_options: {
            slot1: [
                {...astra_militarum_weapons.wyvern_quad_stormshard_mortar, selected: true},
            ],
            slot2: [
                {...astra_militarum_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Suppression Bombardment", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding **Monsters** and **Vehicles**) that was hit by one or more attacks made with this model’s Wyvern quad stormshard mortar. Unit the start of your next Shooting phase, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Wyvern","Faction: Astra Militarum","Vehicle","Imperium","Artillery","Squadron","Smoke"],
        pointOptions: [],
        transport: null,
    },
]

export default astra_militarum_army
