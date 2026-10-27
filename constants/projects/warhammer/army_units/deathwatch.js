// AUTO-GENERATED units for Deathwatch (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import deathwatch_weapons from "../weapons/deathwatch"

const deathwatch_army = [
    {
        army: "deathwatch",
        class: "other",
        name: "Corvus Blackstar",
        pts: 180,
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
            deathwatch_weapons.armoured_hull,
        ],
        rangedWeapons: [
            deathwatch_weapons.hurricane_bolter,
            deathwatch_weapons.twin_assault_cannon,
            deathwatch_weapons.twin_lascannon,
            deathwatch_weapons.blackstar_rocket_launcher,
            deathwatch_weapons.stormstrike_missile_launcher,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.hurricane_bolter, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.twin_assault_cannon, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.twin_lascannon, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.blackstar_rocket_launcher, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.stormstrike_missile_launcher, selected: true},
            ],
            slot6: [
                {...deathwatch_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Blackstar Cluster Launcher", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 5+, that unit suffers 1 mortal wound." },
            { name: "Damaged: 1-5 Wounds Remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Transport", desc: "This model has a transport capacity of 12 ADEPTUS ASTARTES INFANTRY or KILL TEAM models. Each JUMP PACK, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION model takes up the space of 3 models." },
            { name: "Auspex Array", desc: "Ranged weapons equipped by the bearer have the [IGNORES COVER] ability." },
            { name: "Infernum Halo-launcher", desc: "The bearer has the SMOKE keyword." },
        ],
        keywords: ["Fly","Vehicle","Aircraft","Imperium","Transport","Corvus Blackstar","Faction: Adeptus Astartes","Faction: Deathwatch"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Deathwatch Terminator Squad",
        pts: 190,
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
            deathwatch_weapons.power_weapon,
            deathwatch_weapons.thunder_hammer,
            deathwatch_weapons.chainfist,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.power_weapon, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.thunder_hammer, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.chainfist, selected: true},
            ],
        },
        abilities: [
            { name: "Terminatus Assault", desc: "You can re-roll Charge rolls made for this unit. Each time this unit ends a Charge move, each enemy unit within Engagement Range of this unit must take a Battle-shock test. If that enemy unit does not have the IMPERIUM or CHAOS keywords, subtract 1 from that test." },
            { name: "Teleport Homer", desc: "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" of that token and not within 9\" of any enemy models. That token is then removed." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to a TERMINATOR SQUAD, it can be attached to this unit instead." },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 4." },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 4." },
        ],
        keywords: ["Infantry","Imperium","Deathwatch Terminator Squad","Terminator","Kill Team","Faction: Adeptus Astartes","Faction: Deathwatch"],
        pointOptions: [{ models: 5, pts: 350 }],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Deathwatch Veteran w/ carbine",
        pts: null,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            deathwatch_weapons.combat_knife,
            deathwatch_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.deathwatch_marksman_bolt_carbine,
            deathwatch_weapons.special_issue_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.deathwatch_marksman_bolt_carbine, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.special_issue_bolt_pistol, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.combat_knife, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Deathwatch Veteran w/ heavy thunder hammer",
        pts: null,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            deathwatch_weapons.heavy_thunder_hammer,
            deathwatch_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            deathwatch_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.heavy_thunder_hammer, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Astartes shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Deathwatch Veteran w/ stalker bolt rifle",
        pts: null,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            deathwatch_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.stalker_bolt_rifle,
            deathwatch_weapons.bolt_pistol,
            deathwatch_weapons.plasma_incinerator_standard,
            deathwatch_weapons.plasma_incinerator_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.stalker_bolt_rifle, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.plasma_incinerator_standard, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.plasma_incinerator_supercharge, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Fortis Kill Team",
        pts: 180,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            deathwatch_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.superfrag_missile_launcher,
            deathwatch_weapons.superkrak_missile_launcher,
            deathwatch_weapons.heavy_bolt_pistol,
            deathwatch_weapons.plasma_pistol_standard,
            deathwatch_weapons.plasma_pistol_supercharge,
            deathwatch_weapons.plasma_incinerator_standard,
            deathwatch_weapons.plasma_incinerator_supercharge,
            deathwatch_weapons.deathwatch_bolt_rifle,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.superfrag_missile_launcher, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.superkrak_missile_launcher, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...deathwatch_weapons.plasma_incinerator_standard, selected: true},
            ],
            slot7: [
                {...deathwatch_weapons.plasma_incinerator_supercharge, selected: true},
            ],
            slot8: [
                {...deathwatch_weapons.deathwatch_bolt_rifle, selected: true},
            ],
            slot9: [
                {...deathwatch_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Fortis Doctrines", desc: "Each time a model in this unit makes an attack that targets a unit that is below its Starting Strength, add 1 to the Hit roll. If that attack targets a unit that is Below Half-strength, add 1 to the Hit roll and add 1 to the Wound roll instead." },
            { name: "Attached Unit", desc: "If a CHARACTER from your army with the Leader ability can be attached to an INTERCESSOR SQUAD, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Fortis Kill Team","Faction: Adeptus Astartes","Faction: Deathwatch","Tacticus","Kill Team"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Gravis Veteran w/ infernus heavy bolter",
        pts: null,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            deathwatch_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.frag_cannon,
            deathwatch_weapons.hellstorm_bolt_rifle,
            deathwatch_weapons.astartes_grenade_launcher_frag,
            deathwatch_weapons.astartes_grenade_launcher_krak,
            deathwatch_weapons.infernus_heavy_bolter_heavy_bolter,
            deathwatch_weapons.infernus_heavy_bolter_heavy_flamer,
            deathwatch_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.frag_cannon, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.hellstorm_bolt_rifle, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.astartes_grenade_launcher_frag, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.astartes_grenade_launcher_krak, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.infernus_heavy_bolter_heavy_bolter, selected: true},
            ],
            slot6: [
                {...deathwatch_weapons.infernus_heavy_bolter_heavy_flamer, selected: true},
            ],
            slot7: [
                {...deathwatch_weapons.bolt_pistol, selected: true},
            ],
            slot8: [
                {...deathwatch_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Gravis"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Indomitor Kill Team",
        pts: 265,
        units: 10,
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
            deathwatch_weapons.twin_power_fists,
            deathwatch_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.auto_boltstorm_gauntlets,
            deathwatch_weapons.flamestorm_gauntlets,
            deathwatch_weapons.deathwatch_heavy_bolt_rifle,
            deathwatch_weapons.deathwatch_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.auto_boltstorm_gauntlets, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.flamestorm_gauntlets, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.deathwatch_heavy_bolt_rifle, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.deathwatch_heavy_bolter, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.twin_power_fists, selected: true},
            ],
            slot6: [
                {...deathwatch_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Indomitor Doctrines", desc: "Each time a model in this unit makes a ranged attack that targets the closest eligible target, or makes a melee attack in a turn in which it made a Charge move, improve the Strength characteristic of that attack by 2." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army can be attached to a HEAVY INTERCESSOR SQUAD, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Indomitor Kill Team","Gravis","Faction: Adeptus Astartes","Faction: Deathwatch","Kill Team"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Kill Team Cassius [Legends]",
        pts: 220,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            deathwatch_weapons.artificer_crozius,
            deathwatch_weapons.close_combat_weapon_2,
            deathwatch_weapons.twin_lightning_claws,
            deathwatch_weapons.force_weapon,
            deathwatch_weapons.power_fist,
            deathwatch_weapons.long_vigil_melee_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.frag_cannon_2,
            deathwatch_weapons.psychic_cleanse,
            deathwatch_weapons.heavy_flamer,
            deathwatch_weapons.deathwatch_twin_boltgun,
            deathwatch_weapons.boltgun,
            deathwatch_weapons.long_vigil_ranged_weapon,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.frag_cannon_2, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.psychic_cleanse, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.heavy_flamer, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.deathwatch_twin_boltgun, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.boltgun, selected: true},
            ],
            slot6: [
                {...deathwatch_weapons.long_vigil_ranged_weapon, selected: true},
            ],
            slot7: [
                {...deathwatch_weapons.artificer_crozius, selected: true},
            ],
            slot8: [
                {...deathwatch_weapons.close_combat_weapon_2, selected: true},
            ],
            slot9: [
                {...deathwatch_weapons.twin_lightning_claws, selected: true},
            ],
            slot10: [
                {...deathwatch_weapons.force_weapon, selected: true},
            ],
            slot11: [
                {...deathwatch_weapons.power_fist, selected: true},
            ],
            slot12: [
                {...deathwatch_weapons.long_vigil_melee_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Chaplain Cassius has a 4+ invulnerable save." },
            { name: "Jump Pack", desc: "The bearer has a Move characteristic of 12\" and can move over models and terrain as if they were not there." },
            { name: "Jump Pack", desc: "The bearer has a Move characteristic of 12\" and can move over models and terrain as if they were not there." },
            { name: "Psychic Hood", desc: "Models in the bearer’s unit have the Feel No Pain 4+ ability against Psychic Attacks." },
            { name: "Invulnerable Save", desc: "Garran Branatar has a 4+ invulnerable save." },
            { name: "Catechism of Death", desc: "While this unit contains Chaplain Cassius, melee weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Unflinching", desc: "You can re-roll Battle-shock tests for this unit." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Kill Team","Kill Team Cassius","Deathwatch","Faction: Agents of the Imperium","Ordo Xenos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Kill Team Sergeant",
        pts: null,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            deathwatch_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            deathwatch_weapons.plasma_pistol_standard,
            deathwatch_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.plasma_pistol_standard, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Spectrus Kill Team",
        pts: 180,
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
            deathwatch_weapons.paired_combat_blades,
            deathwatch_weapons.combat_knife,
            deathwatch_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.deathwatch_marksman_bolt_carbine,
            deathwatch_weapons.deathwatch_occulus_bolt_carbine,
            deathwatch_weapons.special_issue_bolt_pistol_2,
            deathwatch_weapons.deathwatch_bolt_carbine,
            deathwatch_weapons.instigator_bolt_carbine,
            deathwatch_weapons.bolt_sniper_rifle,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.deathwatch_marksman_bolt_carbine, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.deathwatch_occulus_bolt_carbine, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.special_issue_bolt_pistol_2, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.deathwatch_bolt_carbine, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.instigator_bolt_carbine, selected: true},
            ],
            slot6: [
                {...deathwatch_weapons.bolt_sniper_rifle, selected: true},
            ],
            slot7: [
                {...deathwatch_weapons.paired_combat_blades, selected: true},
            ],
            slot8: [
                {...deathwatch_weapons.combat_knife, selected: true},
            ],
            slot9: [
                {...deathwatch_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Attached Unit", desc: "If a CHARACTER from your army with the Leader ability can be attached to an INFILTRATOR SQUAD, it can be attached to this unit instead. \nIf this unit has a Leader unit attached to it during the Declare Battle Formations step, that Leader unit gains the Infiltrators and Scouts 6\" abilities." },
            { name: "Spectrus Doctrines", desc: "At the end of your opponent’s turn, if this unit is more than 6\" away from all enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves." },
            { name: "Helix Gauntlet", desc: "Models in the bearer’s unit have the Feel No Pain 6+ ability." },
            { name: "Infiltrator Comms Array", desc: "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Instigator Bolt Carbine", desc: "In your Shooting phase, after the bearer’s unit has shot, the bearer’s unit can make a Normal move. If it does, until the end of the turn, the bearer’s unit is not eligible to declare a charge." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Spectrus Kill Team","Kill Team","Faction: Adeptus Astartes","Faction: Deathwatch","Phobos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "other",
        name: "Talonstrike Kill Team",
        pts: 275,
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
            deathwatch_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            deathwatch_weapons.assault_bolters,
            deathwatch_weapons.plasma_exterminators_standard,
            deathwatch_weapons.plasma_exterminators_supercharge,
            deathwatch_weapons.plasma_pistol_standard,
            deathwatch_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.assault_bolters, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.plasma_exterminators_standard, selected: true},
            ],
            slot3: [
                {...deathwatch_weapons.plasma_exterminators_supercharge, selected: true},
            ],
            slot4: [
                {...deathwatch_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...deathwatch_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...deathwatch_weapons.power_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Talonstrike Doctrines", desc: "Each time this unit is set up on the battlefield, until the end of the turn:\n- Improve the Armour Penetration characteristic of weapons equipped by models in this unit by 1. \n- Melee weapons equipped by models in this unit have the [LANCE] ability." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to an ASSAULT INTERCESSORS WITH JUMP PACKS unit, it can be attached to this unit instead." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Deathwatch","Infantry","Fly","Jump Pack","Grenades","Imperium","Kill Team","Talonstrike Kill Team"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "characters",
        name: "Watch Captain Artemis",
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
            deathwatch_weapons.master_crafted_power_weapon,
        ],
        rangedWeapons: [
            deathwatch_weapons.hellfire_extremis,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.hellfire_extremis, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.master_crafted_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Tactical Instinct", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Unstoppable Champion", desc: "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 1 wound remaining." },
            { name: "Leader", desc: "This model can be attached to the following units: \n- DEATHWATCH VETERANS\n- FORTIS KILL TEAM" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Imperium","Watch Captain Artemis","Faction: Adeptus Astartes","Faction: Deathwatch","Captain"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "deathwatch",
        class: "characters",
        name: "Watch Master",
        pts: 95,
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
            invuln: 4
        },
        meleeWeapons: [
            deathwatch_weapons.vigil_spear,
        ],
        rangedWeapons: [
            deathwatch_weapons.vigil_spear_2,
        ],
        weapon_options: {
            slot1: [
                {...deathwatch_weapons.vigil_spear_2, selected: true},
            ],
            slot2: [
                {...deathwatch_weapons.vigil_spear, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Strategic Knowledge", desc: "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back." },
            { name: "Watch Master", desc: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- DEATHWATCH VETERANS\n- FORTIS KILL TEAM" },
        ],
        keywords: ["Character","Infantry","Captain","Grenades","Imperium","Watch Master","Faction: Adeptus Astartes","Faction: Deathwatch"],
        pointOptions: [],
        transport: null,
    },
]

export default deathwatch_army
