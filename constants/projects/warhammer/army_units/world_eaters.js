// AUTO-GENERATED units for World Eaters (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import world_eaters_weapons from "../weapons/world_eaters"

const world_eaters_army = [
    {
        army: "world_eaters",
        class: "characters",
        name: "Angron",
        pts: 340,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 11,
            saving: 2,
            wounds: 16,
            leader: 5,
            control: 6,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.samni_arius_and_spinegrinder_strike,
            world_eaters_weapons.samni_arius_and_spinegrinder_sweep,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.samni_arius_and_spinegrinder_strike, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.samni_arius_and_spinegrinder_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Reborn in Blood", desc: "At the start of the battle round, when you make a Blessings of Khorne roll, if this model is destroyed, you can use a triple 6 from that roll to use this ability instead of activating any Blessings of Khorne at the start of that battle round. If you do, this model is no longer destroyed and in the Reinforcements step of your next Movement phase, it is set up anywhere on the battlefield using its Deep Strike ability, with 8 wounds remaining." },
            { name: "Wrathful Presence", desc: "At the start of the battle round, select one Wrathful Presence ability. Until the start of the next battle round, this model has that ability." },
            { name: "Damaged: 1-6 wounds remaining", desc: "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: World Eaters","Monster","Fly","Character","Epic Hero","Chaos","Khorne","Daemon","Primarch","Angron"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Bloodcrushers",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.hellblade,
            world_eaters_weapons.bladed_horn,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.hellblade, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.bladed_horn, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Brass Stampede", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of this unit and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers D3 mortal wounds." },
        ],
        keywords: ["Mounted","Chaos","Daemon","Khorne","Faction: Blood Legions","Summoned","Bloodcrushers"],
        pointOptions: [{ models: 4, pts: 220 }],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Bloodcult Champion [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 6,
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
            { name: "Aura of Dark Glory", desc: "Models in this unit have an invulnerable save characteristic of 5+." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Jakhals**" },
        ],
        keywords: ["Faction: World Eaters","Infantry","Character","Grenades","Khorne","Bloodcult Champion","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "battleline",
        name: "Bloodletters",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 7,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.hellblade,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.hellblade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Bane of Cowards", desc: "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of one or more units from your army with this ability Falls Back, models in that enemy unit must take Desperate Escape tests. When doing so, if that enemy unit is also Battle-shocked, subtract 1 from each of those Desperate Escape tests." },
        ],
        keywords: ["Infantry","Battleline","Chaos","Daemon","Khorne","Summoned","Faction: Blood Legions"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Bloodthirster",
        pts: 305,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 3,
            wounds: 18,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.great_axe_of_khorne_strike,
            world_eaters_weapons.great_axe_of_khorne_sweep,
        ],
        rangedWeapons: [
            world_eaters_weapons.hellfire_breath,
            world_eaters_weapons.bloodflail,
            world_eaters_weapons.lash_of_khorne,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.hellfire_breath, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.bloodflail, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.lash_of_khorne, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.great_axe_of_khorne_strike, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.great_axe_of_khorne_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Daemon Lord of Khorne (Aura)", desc: "While a friendly Blood Legions unit is within 6\" of this model, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Relentless Carnage", desc: "At the end of the Fight phase, you can select one enemy unit within Engagement Range of this model and roll eight D6: for each 4+, that enemy unit suffers 1 mortal wound." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Damaged: 1-6 wounds remaining", desc: "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Monster","Character","Fly","Chaos","Daemon","Khorne","Faction: Blood Legions","Summoned","Bloodthirster"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Butcherlord [Crucible]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
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

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Endless Hatred", desc: "You can re-roll Charge rolls made for this model's unit." },
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Khorne Berzerkers**" },
        ],
        keywords: ["Faction: World Eaters","Infantry","Character","Grenades","Chaos","Khorne","Butcherlord","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Chaos Land Raider",
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
            world_eaters_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            world_eaters_weapons.soulshatter_lascannon,
            world_eaters_weapons.havoc_launcher,
            world_eaters_weapons.twin_heavy_bolter,
            world_eaters_weapons.combi_bolter,
            world_eaters_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.soulshatter_lascannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.combi_bolter, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...world_eaters_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Transport","Smoke","Chaos","Khorne","Land Raider"],
        pointOptions: [],
        transport: "This model has a transport capacity of 14 **World Eaters Infantry** models. Each **Possessed** and **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Chaos Predator Annihilator",
        pts: 145,
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
            world_eaters_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            world_eaters_weapons.predator_twin_lascannon,
            world_eaters_weapons.havoc_launcher,
            world_eaters_weapons.combi_bolter,
            world_eaters_weapons.combi_weapon,
            world_eaters_weapons.heavy_bolter,
            world_eaters_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.predator_twin_lascannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.combi_bolter, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...world_eaters_weapons.lascannon, selected: true},
            ],
            slot7: [
                {...world_eaters_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Blood-hungry Annihilator", desc: "Each time this model makes a ranged attack that targets the closest eligible **Monster** or **Vehicle** target within 18\", you can re-roll the Wound roll and you can re-roll the Damage roll." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Smoke","Chaos","Khorne","Predator Annihilator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Chaos Predator Destructor",
        pts: 145,
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
            world_eaters_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            world_eaters_weapons.predator_autocannon,
            world_eaters_weapons.havoc_launcher,
            world_eaters_weapons.combi_bolter,
            world_eaters_weapons.combi_weapon,
            world_eaters_weapons.heavy_bolter,
            world_eaters_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.predator_autocannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.combi_bolter, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...world_eaters_weapons.lascannon, selected: true},
            ],
            slot7: [
                {...world_eaters_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Punishing Suppression", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks (excluding **Monsters** and **Vehicles*). Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Smoke","Chaos","Khorne","Predator Destructor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "transports",
        name: "Chaos Rhino",
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
            world_eaters_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            world_eaters_weapons.combi_bolter,
            world_eaters_weapons.havoc_launcher,
            world_eaters_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Meet Any Challenge", desc: "In your opponent's Movement phase, each time an enemy unit is set up or ends a Normal, Advance or Fall Back move within 9\" of this model, any units embarked within it can disembark." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Transport","Dedicated Transport","Smoke","Chaos","Khorne","Rhino"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **World Eaters Infantry** models. It cannot transport **Possessed** or **Terminator** models.",
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Chaos Spawn",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            world_eaters_weapons.hideous_mutations,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.hideous_mutations, selected: true},
            ],
        },
        abilities: [
            { name: "To Slake Its Rage", desc: "This unit is eligible to declare a charge in a turn in which it Advanced." },
        ],
        keywords: ["Faction: World Eaters","Beast","Chaos","Khorne","Spawn"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Chaos Terminators",
        pts: 175,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 5,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.power_fist,
            world_eaters_weapons.accursed_weapon,
            world_eaters_weapons.chainfist,
            world_eaters_weapons.paired_accursed_weapons,
        ],
        rangedWeapons: [
            world_eaters_weapons.reaper_autocannon,
            world_eaters_weapons.combi_weapon,
            world_eaters_weapons.combi_bolter,
            world_eaters_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.reaper_autocannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.combi_bolter, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.heavy_flamer, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.power_fist, selected: true},
            ],
            slot6: [
                {...world_eaters_weapons.accursed_weapon, selected: true},
            ],
            slot7: [
                {...world_eaters_weapons.chainfist, selected: true},
            ],
            slot8: [
                {...world_eaters_weapons.paired_accursed_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Model in this unit have a 4+ invulnerable save." },
            { name: "Bloody Fury", desc: "Each time a model in this unit makes a ranged attack that targets the closest enemy unit, you can re-roll the Hit roll. Each time this unit declares a charge that targets the closest enemy unit, you can re-roll the Charge roll." },
        ],
        keywords: ["Faction: World Eaters","Infantry","Chaos","Khorne","Terminator","Terminator Squad"],
        pointOptions: [{ models: 5, pts: 350 }],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Daemon Prince of Khorne",
        pts: 200,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.hellforged_weapons_strike,
            world_eaters_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            world_eaters_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Lord of Murder", desc: "While this model is within 3\" of one or more friendly **World Eaters Infantry** units, this model has the Lone Operative ability." },
            { name: "Devastating Assault", desc: "Each time this model makes a Charge move, until the end of the turn, its hellforged weapons have the [DEVASTATING WOUNDS] ability." },
            { name: "Direct the Slaughter", desc: "Once per battle round, one model from your army with this ability can use it when a friendly **World Eaters** unit within 12\" of this model is targeted with a Stratagem. If it does, reduce the CP cost of that Stratagem by 1CP." },
        ],
        keywords: ["Faction: World Eaters","Monster","Character","Chaos","Khorne","Daemon","Daemon Prince"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Daemon Prince of Khorne with wings",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.hellforged_weapons_strike,
            world_eaters_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            world_eaters_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Bloodied Terror", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of this model must take a Battle-shock test, subtracting 1 if that enemy unit is Below Half-strength." },
            { name: "Swooping Predator", desc: "Each time this model ends a Normal or Advance move, you can select one enemy unit that it moved over during that move and roll 6 D6: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: World Eaters","Monster","Character","Chaos","Khorne","Daemon","Daemon Prince","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Defiler",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 11,
            saving: 3,
            wounds: 18,
            leader: 6,
            control: 5,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            world_eaters_weapons.shearing_claws_strike,
            world_eaters_weapons.shearing_claws_sweep,
            world_eaters_weapons.electroscourge,
        ],
        rangedWeapons: [
            world_eaters_weapons.heavy_missile_launcher_frag,
            world_eaters_weapons.heavy_missile_launcher_krak,
            world_eaters_weapons.hades_battle_cannon,
            world_eaters_weapons.ectoplasma_destructor,
            world_eaters_weapons.heavy_baleflamer,
            world_eaters_weapons.excruciator_cannon,
            world_eaters_weapons.magma_cutter,
            world_eaters_weapons.hades_lascannon,
            world_eaters_weapons.heavy_reaper_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.heavy_missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.heavy_missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.hades_battle_cannon, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.ectoplasma_destructor, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.heavy_baleflamer, selected: true},
            ],
            slot6: [
                {...world_eaters_weapons.excruciator_cannon, selected: true},
            ],
            slot7: [
                {...world_eaters_weapons.magma_cutter, selected: true},
            ],
            slot8: [
                {...world_eaters_weapons.hades_lascannon, selected: true},
            ],
            slot9: [
                {...world_eaters_weapons.heavy_reaper_autocannon, selected: true},
            ],
            slot10: [
                {...world_eaters_weapons.shearing_claws_strike, selected: true},
            ],
            slot11: [
                {...world_eaters_weapons.shearing_claws_sweep, selected: true},
            ],
            slot12: [
                {...world_eaters_weapons.electroscourge, selected: true},
            ],
        },
        abilities: [
            { name: "Scuttling Walker", desc: "Each time this unit makes a Normal, Advance or Fall Back move, it can move through models (excluding **Titanic** models) and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
            { name: "Unleash Wrath", desc: "At the end of your opponent's Movement phase, you can select one enemy unit that was set up on the battlefield within 12\" of this model; this model can then either:\n- Shoot at that unit, but only if it is an eligible target.\n- Declare a charge against that unit (note that even if this charge is successful, this model does not receive any Charge bonus this turn)." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Walker","Chaos","Khorne","Daemon","Defiler"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Eight-blessed Lord [Crucible]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.bladed_horn_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.bladed_horn_2, selected: true},
            ],
        },
        abilities: [
            { name: "Bloodthirst", desc: "Add 2 to Charge rolls made for this unit." },
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Khorne Berzerkers**" },
        ],
        keywords: ["Faction: World Eaters","Character","Chaos","Khorne","Mounted","Eight-blessed Lord","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Eightbound",
        pts: 135,
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
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.chainblades,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.chainblades, selected: true},
            ],
        },
        abilities: [
            { name: "Beacons of Rage (Aura)", desc: "While a friendly **World Eaters** unit is within 6\" of this unit, each time a model in that unit makes a melee attack that targets a unit (excluding **Monsters** and **Vehicles**), add 1 to the Hit roll. If that attack targets a unit that is Below Half-strength, add 1 to the Wound roll as well." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: World Eaters","Infantry","Chaos","Khorne","Daemon","Eightbound","Possessed"],
        pointOptions: [{ models: 3, pts: 270 }],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Exalted Eightbound",
        pts: 140,
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
            invuln: 5
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Rend and Tear", desc: "Each time a model in this unit makes a melee attack that targets a **Monster** or **Vehicle** unit, until the end of the phase, improve the Damage characteristic of that attack by 1." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: World Eaters","Infantry","Chaos","Khorne","Daemon","Exalted Eightbound","Possessed"],
        pointOptions: [{ models: 3, pts: 280 }],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Flesh Hounds",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 7,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.gore_drenched_fangs,
        ],
        rangedWeapons: [
            world_eaters_weapons.burning_roar,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.burning_roar, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.gore_drenched_fangs, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Hunters from the Warp", desc: "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
        ],
        keywords: ["Beast","Chaos","Daemon","Khorne","Faction: Blood Legions","Summoned","Flesh Hounds"],
        pointOptions: [{ models: 6, pts: 150 }],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Forgefiend",
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
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.forgefiend_claws,
            world_eaters_weapons.forgefiend_jaws,
        ],
        rangedWeapons: [
            world_eaters_weapons.ectoplasma_cannon,
            world_eaters_weapons.hades_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.ectoplasma_cannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.hades_autocannon, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.forgefiend_claws, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.forgefiend_jaws, selected: true},
            ],
        },
        abilities: [
            { name: "Furious Onslaught", desc: "Each time this model makes a ranged attack that targets the closest eligible target within 18\", you can re-roll the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Walker","Chaos","Khorne","Daemon","Forgefiend"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Goremongers",
        pts: 75,
        units: 7,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 9,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            world_eaters_weapons.chainblade,
            world_eaters_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            world_eaters_weapons.blood_harpoon,
            world_eaters_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.blood_harpoon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.autopistol, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.chainblade, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Loping Speed", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\"." },
        ],
        keywords: ["Faction: World Eaters","Infantry","Grenades","Chaos","Khorne","Goremongers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Helbrute",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 9,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            world_eaters_weapons.close_combat_weapon_2,
            world_eaters_weapons.helbrute_hammer,
            world_eaters_weapons.power_scourge,
        ],
        rangedWeapons: [
            world_eaters_weapons.missile_launcher_frag,
            world_eaters_weapons.missile_launcher_krak,
            world_eaters_weapons.multi_melta,
            world_eaters_weapons.twin_autocannon,
            world_eaters_weapons.plasma_cannon,
            world_eaters_weapons.combi_bolter,
            world_eaters_weapons.heavy_flamer,
            world_eaters_weapons.twin_heavy_bolter,
            world_eaters_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.multi_melta, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.twin_autocannon, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.plasma_cannon, selected: true},
            ],
            slot6: [
                {...world_eaters_weapons.combi_bolter, selected: true},
            ],
            slot7: [
                {...world_eaters_weapons.heavy_flamer, selected: true},
            ],
            slot8: [
                {...world_eaters_weapons.twin_heavy_bolter, selected: true},
            ],
            slot9: [
                {...world_eaters_weapons.twin_lascannon, selected: true},
            ],
            slot10: [
                {...world_eaters_weapons.close_combat_weapon_2, selected: true},
            ],
            slot11: [
                {...world_eaters_weapons.helbrute_hammer, selected: true},
            ],
            slot12: [
                {...world_eaters_weapons.power_scourge, selected: true},
            ],
        },
        abilities: [
            { name: "Frenzy", desc: "In your opponent's Shooting phase, and in the Fight phase, each time an enemy unit targets this model, after that unit has finished making its attacks, this model can either shoot or fight, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)." },
            { name: "Devoted to Destruction", desc: "If this model is equipped with 2 melee weapons in addition to its close combat weapon, add 2 to the Attacks characteristic of those two weapons." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Walker","Chaos","Khorne","Helbrute"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Heldrake",
        pts: 200,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.heldrake_claws,
        ],
        rangedWeapons: [
            world_eaters_weapons.baleflamer,
            world_eaters_weapons.hades_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.baleflamer, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.hades_autocannon, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.heldrake_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Airborne Predator", desc: "Each time this model makes an attack that targets a unit that can **Fly**, add 1 to the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Fly","Aircraft","Chaos","Khorne","Daemon","Heldrake"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Hell Talon [Legends]",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.armoured_hull,
        ],
        rangedWeapons: [
            world_eaters_weapons.autocannon,
            world_eaters_weapons.twin_lascannon,
            world_eaters_weapons.havoc_launcher,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.autocannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.havoc_launcher, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Bomb Rack", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved across during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Chaos","Khorne","Faction: World Eaters","Hell Talon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Hellblade [Legends]",
        pts: 115,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            world_eaters_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.twin_lascannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can FLY, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Chaos","Khorne","Hellblade","Faction: World Eaters"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Jakhals",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            world_eaters_weapons.skullsmasher_and_mangler,
            world_eaters_weapons.paired_manglers,
            world_eaters_weapons.chainblades_2,
            world_eaters_weapons.mauler_chainblade,
        ],
        rangedWeapons: [
            world_eaters_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.skullsmasher_and_mangler, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.paired_manglers, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.chainblades_2, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.mauler_chainblade, selected: true},
            ],
        },
        abilities: [
            { name: "Objective Ravaged", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase." },
        ],
        keywords: ["Faction: World Eaters","Infantry","Chaos","Khorne","Jakhals","Grenades"],
        pointOptions: [{ models: 10, pts: 140 }],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Khârn the Betrayer",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.gorechild,
        ],
        rangedWeapons: [
            world_eaters_weapons.plasma_pistol_standard,
            world_eaters_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.plasma_pistol_standard, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.gorechild, selected: true},
            ],
        },
        abilities: [
            { name: "Legendary Killer", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
            { name: "The Betrayer", desc: "At the end of your Charge phase, if this model is leading a unit and that unit is not within Engagement Range of one or more enemy units, you must take a Leadership test for this model. If that test is failed, one Bodyguard model of your choice in that unit is destroyed." },
            { name: "Berserker Frenzy", desc: "The first time this model is destroyed, at the end of the phase, roll one D6: on a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 3 wounds remaining." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Khorne Berzerkers**" },
        ],
        keywords: ["Faction: World Eaters","Infantry","Character","Epic Hero","Grenades","Chaos","Khorne","Khârn the Betrayer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "battleline",
        name: "Khorne Berzerkers",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            world_eaters_weapons.chainblade_2,
            world_eaters_weapons.khornate_eviscerator,
        ],
        rangedWeapons: [
            world_eaters_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.chainblade_2, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.khornate_eviscerator, selected: true},
            ],
        },
        abilities: [
            { name: "Blood Surge", desc: "In your opponent's Shooting phase, each time an enemy unit has shot, if any models from this unit were destroyed as a result of those attacks, this unit can make a Blood Surge move. To do so, roll one D6 and add 2 to the roll: models in this unit move a number of inches up to this result, but this unit must finish that move as close as possible to the closest enemy unit (excluding **Aircraft**). When doing so, those models can be moved within Engagement Range of that enemy unit. This unit cannot make a Blood Surge move while it is Battle-shocked or within Engagement Range of one or more enemy units, and can only make one Blood Surge move per phase." },
        ],
        keywords: ["Faction: World Eaters","Infantry","Battleline","Grenades","Chaos","Khorne","Berzerkers"],
        pointOptions: [{ models: 10, pts: 360 }],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Khorne Lord of Skulls",
        pts: 505,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 13,
            saving: 3,
            wounds: 24,
            leader: 6,
            control: 8,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.great_cleaver_of_khorne_strike,
            world_eaters_weapons.great_cleaver_of_khorne_sweep,
        ],
        rangedWeapons: [
            world_eaters_weapons.hades_gatling_cannon,
            world_eaters_weapons.skullhurler,
            world_eaters_weapons.gorestorm_cannon,
            world_eaters_weapons.daemongore_cannon,
            world_eaters_weapons.ichor_cannon,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.hades_gatling_cannon, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.skullhurler, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.gorestorm_cannon, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.daemongore_cannon, selected: true},
            ],
            slot5: [
                {...world_eaters_weapons.ichor_cannon, selected: true},
            ],
            slot6: [
                {...world_eaters_weapons.great_cleaver_of_khorne_strike, selected: true},
            ],
            slot7: [
                {...world_eaters_weapons.great_cleaver_of_khorne_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Idol of Blessed Blood", desc: "At the start of the battle round, if this unit is on the battlefield, when you make a Blessings of Khorne roll, roll one additional D6." },
            { name: "Damaged: 1-8 wounds remaining", desc: "While this model has 1-8 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Titanic","Towering","Chaos","Khorne","Daemon","Lord of Skulls"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Lord Invocatus",
        pts: 110,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.cowards_bane,
            world_eaters_weapons.bladed_horn_2,
        ],
        rangedWeapons: [
            world_eaters_weapons.bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.cowards_bane, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.bladed_horn_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: **Eightbound**, **Exalted Eightbound**, **Khorne Berzerkers**" },
            { name: "Fire Riders", desc: "While this model is leading a unit, models in that unit have the Deep Strike ability and each time a model in that unit makes a Normal, Advance, Fall Back or Charge move, it can move horizontally through models and terrain features. When making a Normal, Advance or Fall Back move, models in that unit can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them and any Desperate Escape test is automatically passed." },
            { name: "Bloody Stampede", desc: "Each time this model's unit ends a Charge move, select one enemy unit within Engagement Range of this model, then roll one D6: on a 2-3, that enemy unit suffers 1 mortal wound; on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Faction: World Eaters","Mounted","Character","Epic Hero","Chaos","Khorne","Lord Invocatus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Lord on Juggernaut",
        pts: 105,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.bladed_horn_2,
            world_eaters_weapons.exalted_chainblade,
        ],
        rangedWeapons: [
            world_eaters_weapons.plasma_pistol_standard,
            world_eaters_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.plasma_pistol_standard, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.bladed_horn_2, selected: true},
            ],
            slot4: [
                {...world_eaters_weapons.exalted_chainblade, selected: true},
            ],
        },
        abilities: [
            { name: "Aggressive Advance", desc: "While this model is leading a unit, models in that unit have a Move characteristic of 10\" and each time a model in that unit makes a Normal, Advance, Fall Back or Charge move, it can move horizontally though terrain features." },
            { name: "Crush All Who Stand Before Us", desc: "Each time this model's unit is selected to fight, you can use this ability. When determining which models in this unit are eligible to fight, any models in it that are within 3\" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3\" of them and within Engagement Range of their unit." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: **Eightbound**, **Exalted Eightbound**, **Khorne Berzerkers**" },
        ],
        keywords: ["Faction: World Eaters","Mounted","Character","Chaos","Khorne","Lord on Juggernaut"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Master of Executions",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            world_eaters_weapons.axe_of_dismemberment,
        ],
        rangedWeapons: [
            world_eaters_weapons.bolt_pistol_3,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.bolt_pistol_3, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.axe_of_dismemberment, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit: **Khorne Berzerkers**" },
            { name: "A Worthy Skull", desc: "Each time this model makes a melee attack that targets a **Character** unit, you can re-roll the Hit roll and you can re-roll the Wound roll. Each time this model's unit destroys a **Character** model, you gain 1CP." },
            { name: "Forwards, For Blood!", desc: "While this model is leading a unit, you can re-roll Advance rolls made for that unit and each time that unit makes a Blood Surge move, you can re-roll the D6 used to determine how far models in that unit move." },
        ],
        keywords: ["Faction: World Eaters","Infantry","Character","Chaos","Khorne","Master of Executions"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "other",
        name: "Maulerfiend",
        pts: 150,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.maulerfiend_fists,
            world_eaters_weapons.lasher_tendrils,
        ],
        rangedWeapons: [
            world_eaters_weapons.magma_cutter_2,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.magma_cutter_2, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.maulerfiend_fists, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.lasher_tendrils, selected: true},
            ],
        },
        abilities: [
            { name: "The Scent of Blood", desc: "Each time this model declares a charge that targets one or more units below Starting Strength, add 1 to the Charge roll. If one or more of the targets of that charge are Below Half-strength, add 2 to the Charge roll instead." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Savage Exaltation", desc: "Each time this model makes a melee attack that targets an enemy unit that is below its Starting Strength, add 1 to the Hit roll and, if that attack targets an enemy unit that is Below Half-Strength, add 1 to the Wound roll as well." },
        ],
        keywords: ["Faction: World Eaters","Vehicle","Walker","Chaos","Khorne","Daemon","Maulerfiend"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Skarbrand",
        pts: 305,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 20,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            world_eaters_weapons.slaughter_and_carnage_strike,
            world_eaters_weapons.slaughter_and_carnage_sweep,
        ],
        rangedWeapons: [
            world_eaters_weapons.bellow_of_endless_fury,
        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.bellow_of_endless_fury, selected: true},
            ],
            slot2: [
                {...world_eaters_weapons.slaughter_and_carnage_strike, selected: true},
            ],
            slot3: [
                {...world_eaters_weapons.slaughter_and_carnage_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Rage Embodied (Aura)", desc: "While a friendly Blood Legions unit is within 6\" of this model, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit." },
            { name: "Murderlust", desc: "This unit is eligible to declare a charge in a turn in which it Advanced." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, add 2 to the Attacks characteristic of this model’s Slaughter and Carnage." },
        ],
        keywords: ["Monster","Character","Epic Hero","Chaos","Daemon","Khorne","Faction: Blood Legions","Skarbrand"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "world_eaters",
        class: "characters",
        name: "Slaughterbound",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            world_eaters_weapons.lacerator_and_daemonic_claw,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...world_eaters_weapons.lacerator_and_daemonic_claw, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Rage Eternal", desc: "While this model is leading a unit, in your Command phase, you can return one destroyed Bodyguard model to that unit." },
            { name: "Possessed Lord", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [Devastating Wounds] ability." },
            { name: "Leader", desc: "This model can be attached to the following units: **Eightbound**, **Exalted Eightbound**" },
            { name: "Lord of the Eightbound", desc: "If this model is attached to a **World Eaters Possessed** unit during the Declare Battle Formations step, this model has the Deep Strike and Scouts 6\" abilities." },
        ],
        keywords: ["Character","Infantry","Chaos","Khorne","Daemon","Possessed","Slaughterbound","Faction: World Eaters"],
        pointOptions: [],
        transport: null,
    },
]

export default world_eaters_army
