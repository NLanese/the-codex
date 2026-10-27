// AUTO-GENERATED units for Black Templars (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import black_templars_weapons from "../weapons/black_templars"

const black_templars_army = [
    {
        army: "black_templars",
        class: "characters",
        name: "Castellan",
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
            black_templars_weapons.astartes_chainsword,
            black_templars_weapons.master_crafted_power_weapon,
        ],
        rangedWeapons: [
            black_templars_weapons.heavy_bolt_pistol,
            black_templars_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.astartes_chainsword, selected: true},
            ],
            slot4: [
                {...black_templars_weapons.master_crafted_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Infernus Squad\n- Intercessor Squad\n- Crusader Squad\n- Sword Brethren\n- Sternguard Veteran Squad\n\nYou can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Vehement Aggression", desc: "While this model is leading a unit, each time that unit is selected to fight, take a Leadership test for that unit: if passed, until the end of the phase, each time a model in that unit makes an attack, you can re-roll the Hit roll; if failed, until the end of the phase, each time a model in that unit makes an attack, re-roll a Hit roll of 1" },
            { name: "Prioritised Eradication", desc: "Each time a model in this model's unit makes a melee attack that destroys one or more enemy units, roll one D6: on a 4+, you gain 1 CP" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Faction: Black Templars","Lieutenant","Castellan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "other",
        name: "Chaplain Grimaldus",
        pts: 110,
        units: 1,
        img: null,
        leader: true,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            black_templars_weapons.artificer_crozius,
            black_templars_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            black_templars_weapons.plasma_pistol_supercharge,
            black_templars_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.artificer_crozius, selected: true},
            ],
            slot4: [
                {...black_templars_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Litanies of the Devout", desc: "While this unit is leading a unit and contains a Chaplain Grimaldus model, each time a model in that unit makes a melee attack, you can re-roll the Hit roll." },
            { name: "Temple Relics", desc: "In your Command phase, if this unit contains one or more Cenobyte Servitor models, select one Temple Relics ability (see left). Until the start of your next Command phase, this unit’s Chaplain Grimaldus model has that ability.\n\n\nBanner of the Emperor Victorious: Add 1 to Advance and Charge rolls for this unit\n\n\nColumn of the Major Alter: Add 1 to the Toughness characteristic of models in this unit\n\n\nWater from the Stoup of Elucidation: Improve the Armour Penetration characteristic of melee weapons equipped by models in this unit by 1." },
            { name: "Leader", desc: "This unit can be attached to the following units:\n\n- Assault Intercessor Squad\n- Infernus Squad\n- Intercessor Squad\n- Crusader Squad\n- Sword Brethren" },
        ],
        keywords: ["Infantry","Imperium","Tacticus","Faction: Adeptus Astartes","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "characters",
        name: "Crusade Ancient",
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
            black_templars_weapons.master_crafted_power_weapon_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.master_crafted_power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Vengeful Exhortation", desc: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play, the destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
            { name: "Martial Honour", desc: "The first time a model in this model's unit makes a melee attack that destroys one or more enemy units, until the end of the battle, while this model's unit is not Battle-shocked, add 5 to this model's Objective Control characteristic." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n\n- Crusader Squad\n- Sword Brethren Squad\n\n\nYou can attach this model to one of the above units even if one Captain, Chapter Master, Execrator or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Character","Infantry","Grenades","Ancient","Tacticus","Imperium","Faction: Adeptus Astartes","Faction: Black Templars","Crusade Ancient"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "battleline",
        name: "Crusader Squad",
        pts: 150,
        units: 4,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            black_templars_weapons.master_crafted_power_weapon_3,
        ],
        rangedWeapons: [
            black_templars_weapons.neophyte_firearm,
            black_templars_weapons.pyre_pistol,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.neophyte_firearm, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.pyre_pistol, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.master_crafted_power_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Righteous Zeal", desc: "In your opponent's Shooting phase, each time an enemy unit has shot, if any models from this unit were destroyed as a result of those attacks, this unit can make a Righteous Zeal move. To do so, roll one D6 and add 2 to the result: models in this unit move a number of inches up to this result, but this unit must end that move as close as possible to the closest enemy unit (excluding **Aircraft**). When doing so, those models can be moved within Engagement Range of that enemy unit. This unit cannot make a Righteous Zeal move while it is Battle-shocked or within Engagement Range of one or more enemy units, and can only make one Righteous Zeal move per phase." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Black Templars","Tacticus","Crusader Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "battleline",
        name: "Crusader Squad [Legends]",
        pts: 85,
        units: 1,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            black_templars_weapons.combat_knife,
            black_templars_weapons.twin_lightning_claws,
        ],
        rangedWeapons: [
            black_templars_weapons.astartes_shotgun,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.astartes_shotgun, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.combat_knife, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.twin_lightning_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Righteous Zeal", desc: "You can re-roll Advance and Charge rolls made for this unit." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Imperium","Faction: Adeptus Astartes","Faction: Black Templars","Crusader Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "characters",
        name: "Emperor's Champion",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            black_templars_weapons.black_sword_strike,
            black_templars_weapons.black_sword_sweep,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.black_sword_strike, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.black_sword_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Armour of Faith", desc: "Once per phase, when an attack is allocated to this model and the saving throw is failed, you can change the Damage characteristic of that attack to 0." },
            { name: "Sigismund's Heir", desc: "Each time this model's unit declares a charge, if one or more targets of that charge have the CHARACTER keyword, add 2 to the Charge roll. Once per battle, when this model's unit is selected to fight, if that unit is within Engagement Range of one or more enemy CHARACTER units, this model can use this ability. If it does, until the end of the phase, melee weapons equipped by this model have the [DEVASTATING WOUNDS] ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Intercessor Squad\n- Crusader Squad\n- Sword Brethren\n- Sternguard Veteran Squad" },
            { name: "Chosen of the Emperor", desc: "You cannot include more than one **Emperor's Champion** model in your army." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Emperor's Champion","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "characters",
        name: "Emperor's Champion (Anointed)",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            black_templars_weapons.black_sword_strike,
            black_templars_weapons.black_sword_sweep,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.black_sword_strike, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.black_sword_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Armour of Faith", desc: "Once per phase, when an attack is allocated to this model and the saving throw is failed, you can change the Damage characteristic of that attack to 0." },
            { name: "Sigismund's Heir", desc: "Each time this model's unit declares a charge, if one or more targets of that charge have the CHARACTER keyword, add 2 to the Charge roll. Once per battle, when this model's unit is selected to fight, if that unit is within Engagement Range of one or more enemy CHARACTER units, this model can use this ability. If it does, until the end of the phase, melee weapons equipped by this model have the [DEVASTATING WOUNDS] ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Intercessor Squad\n- Crusader Squad\n- Sword Brethren\n- Sternguard Veteran Squad" },
            { name: "Chosen of the Emperor", desc: "You cannot include more than one **Emperor's Champion** model in your army." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Emperor's Champion","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "characters",
        name: "Execrator",
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
            black_templars_weapons.master_crafted_power_weapon_4,
        ],
        rangedWeapons: [
            black_templars_weapons.pyre_pistol,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.pyre_pistol, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.master_crafted_power_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Crusader Squad\n- Sword Brethren" },
            { name: "Remorseless Persecution", desc: "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Advanced" },
            { name: "Condemnatory Annihilation", desc: "Each time this model's unit has fought, if one or more enemy units were destroyed as a result of those attacks, each enemy unit within 6\" of this model must take a Battle-shock test" },
        ],
        keywords: ["Infantry","Character","Chaplain","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Faction: Black Templars","Execrator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
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

        ],
        rangedWeapons: [
            black_templars_weapons.lancer_laser_destroyer,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.lancer_laser_destroyer, selected: true},
            ],
        },
        abilities: [
            { name: "Aquilon Optics", desc: "Each time this model is selected to shoot, you can re-roll one Hit roll, you can re-roll one Wound roll and you can re-roll one Damage roll when resolving its attacks" },
        ],
        keywords: ["Vehicle","Imperium","Smoke","Gladiator Lancer","Faction: Adeptus Astartes","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
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

        ],
        rangedWeapons: [
            black_templars_weapons.tempest_bolter,
            black_templars_weapons.twin_heavy_onslaught_gatling_cannon,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.tempest_bolter, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.twin_heavy_onslaught_gatling_cannon, selected: true},
            ],
        },
        abilities: [
            { name: "Rotating Death", desc: "This model’s twin heavy onslaught gatling cannon has the [SUSTAINED HITS 2] ability when targeting Infantry units." },
        ],
        keywords: ["Smoke","Imperium","Vehicle","Faction: Adeptus Astartes","Gladiator Reaper","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "other",
        name: "Gladiator Valiant",
        pts: 150,
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

        ],
        rangedWeapons: [
            black_templars_weapons.twin_las_talon,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.twin_las_talon, selected: true},
            ],
        },
        abilities: [
            { name: "Ferocious Assault", desc: "Each time this model makes an attack with its twin las-talon that targets the closest eligible Monster or Vehicle unit, add 1 to the Hit roll" },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Gladiator Valiant","Faction: Adeptus Astartes","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "characters",
        name: "High Marshal Helbrecht",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            black_templars_weapons.sword_of_the_high_marshals_sweep,
            black_templars_weapons.sword_of_the_high_marshals_strike,
        ],
        rangedWeapons: [
            black_templars_weapons.ferocity,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.ferocity, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.sword_of_the_high_marshals_sweep, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.sword_of_the_high_marshals_strike, selected: true},
            ],
        },
        abilities: [
            { name: "Crusade of Wrath", desc: "While this model is leading a unit, add 1 to the Attacks and Strength characteristic of melee weapons equipped by models in that unit." },
            { name: "High Marshal", desc: "At the start of the Fight phase, select one enemy unit within Engagement Range of this model’s unit and roll one D6, adding 1 to the result for every five models in this model's unit: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Intercessor Squad\n- Crusader Squad\n- Sword Brethren" },
        ],
        keywords: ["Epic Hero","Character","Grenades","Imperium","Faction: Adeptus Astartes","Tacticus","High Marshal Helbrecht","Infantry","Faction: Black Templars","Chapter Master"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "transports",
        name: "Impulsor",
        pts: 85,
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

        ],
        rangedWeapons: [
            black_templars_weapons.ironhail_skytalon_array,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.ironhail_skytalon_array, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 7 TACTICUS or PHOBOS INFANTRY models. It cannot transport JUMP PACK models." },
            { name: "Assault Vehicle", desc: "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move, and cannot declare a charge that turn." },
            { name: "Orbital Comms Array [Aura]", desc: "While a friendly Adeptus Astartes unit is within 6\" of the bearer, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP" },
            { name: "Shield Dome", desc: "The bearer has a 5+ invulnerable save." },
        ],
        keywords: ["Vehicle","Transport","Dedicated Transport","Imperium","Faction: Adeptus Astartes","Impulsor","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
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

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 16 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Legacy of Jerulas", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly model that disembarked from this TRANSPORT this turn makes an attack that targets that enemy unit, re-roll a Hit roll of 1 and a re-roll a Wound roll of 1" },
        ],
        keywords: ["Vehicle","Land Raider Crusader","Smoke","Faction: Adeptus Astartes","Imperium","Transport","Grenades","Faction: Black Templars","Land Raider"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "characters",
        name: "Marshal",
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
            black_templars_weapons.master_crafted_power_weapon_5,
        ],
        rangedWeapons: [
            black_templars_weapons.plasma_pistol_standard,
            black_templars_weapons.plasma_pistol_supercharge,
            black_templars_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.plasma_pistol_standard, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...black_templars_weapons.master_crafted_power_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Infernus Squad\n- Intercessor Squad\n- Crusader Squad\n- Sword Brethren\n- Sternguard Veteran Squad" },
            { name: "Inspirational Exemplar", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, an unmodified Hit roll of 5+ scores a Critical Hit." },
            { name: "Pious Fervour", desc: "Each time this model's unit is selected to fight, until the end of the phase, add 1 to the Attacks characteristic of this model's Master-Crafted Power Weapon for each enemy unit within 6\" of this model (to a maximum of +3)" },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Faction: Black Templars","Marshal","Captain"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
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

        ],
        rangedWeapons: [
            black_templars_weapons.las_talon,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.las_talon, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 14 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION model takes up the space of 3 models." },
            { name: "Stabilised Disembarkation", desc: "In your opponent's Shooting phase, each time and enemy unit is selected to shoot, after that unit has shot, if any of those attacks targeted this TRANSPORT, it can use this ability. If it does, any units embarked within it can disembark. When doing so, models in those units can be set up wholly within 6\" of this TRANSPORT and not within Engagement Range of one or more enemy units." },
        ],
        keywords: ["Vehicle","Imperium","Smoke","Repulsor","Faction: Adeptus Astartes","Transport","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "other",
        name: "Repulsor Executioner",
        pts: 235,
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

        ],
        rangedWeapons: [
            black_templars_weapons.repulsor_executioner_defensive_array,
            black_templars_weapons.heavy_laser_destroyer,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.repulsor_executioner_defensive_array, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.heavy_laser_destroyer, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 7 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models." },
            { name: "Interception Strike", desc: "Each time this model makes a ranged attack that targets a unit that is within 12\" of one or more ADEPTUS ASTARTES units from your army, you can re-roll the Hit roll." },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Transport","Repulsor Executioner","Faction: Adeptus Astartes","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "other",
        name: "Sternguard Veteran Squad",
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
            black_templars_weapons.astartes_chainsword_2,
            black_templars_weapons.power_weapon,
            black_templars_weapons.power_fist,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.astartes_chainsword_2, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.power_weapon, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Vitruous Onslaught", desc: "Each time a model in this unit makes an attack that targets the closest eligible target, you can re-roll a Wound roll of 1." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Tacticus","Sternguard Veteran Squad","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "black_templars",
        class: "other",
        name: "Sword Brethren Squad",
        pts: 105,
        units: 4,
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
            invuln: false
        },
        meleeWeapons: [
            black_templars_weapons.thunder_hammer,
            black_templars_weapons.master_crafted_power_weapon_3,
            black_templars_weapons.astartes_chainsword_3,
            black_templars_weapons.twin_lightning_claws_2,
        ],
        rangedWeapons: [
            black_templars_weapons.pyre_pistol,
        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.pyre_pistol, selected: true},
            ],
            slot2: [
                {...black_templars_weapons.thunder_hammer, selected: true},
            ],
            slot3: [
                {...black_templars_weapons.master_crafted_power_weapon_3, selected: true},
            ],
            slot4: [
                {...black_templars_weapons.astartes_chainsword_3, selected: true},
            ],
            slot5: [
                {...black_templars_weapons.twin_lightning_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Exploit Their Cowardice", desc: "Each time an enemy unit within Engagement Range of this unit is selected to Fall Back, after it ends that Fall Back move, if this unit is not within Engagement Range of one or more enemy units, this unit can make a Normal move." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Faction: Black Templars","Primaris Sword Brethren"],
        pointOptions: [{ models: 5, pts: 130 }, { models: 6, pts: 235 }, { models: 10, pts: 260 }],
        transport: null,
    },
    {
        army: "black_templars",
        class: "other",
        name: "Terminator Squad",
        pts: 175,
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
            black_templars_weapons.power_fist_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...black_templars_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Teleport Homer", desc: "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" horizontally of that token and not within 9\" horizontally of any enemy models. That token is then removed." },
            { name: "Judgement of the Weak", desc: "Each time an enemy unit (excluding MONSTERS and VEHICLES) within engagement range of this unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests." },
        ],
        keywords: ["Infantry","Imperium","Terminator","Terminator Squad","Faction: Adeptus Astartes","Faction: Black Templars"],
        pointOptions: [],
        transport: null,
    },
]

export default black_templars_army
