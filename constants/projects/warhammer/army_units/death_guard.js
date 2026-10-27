// AUTO-GENERATED units for Death Guard (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import death_guard_weapons from "../weapons/death_guard"

const death_guard_army = [
    {
        army: "death_guard",
        class: "other",
        name: "Beasts of Nurgle",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 9,
            saving: 6,
            wounds: 7,
            leader: 7,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.putrid_appendages,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.putrid_appendages, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Grotesque Regeneration", desc: "At the end of each phase, if a Beasts of Nurgle model in this unit has lost any wounds but is not destroyed, that model regains all of its lost wounds." },
        ],
        keywords: ["Beast","Chaos","Daemon","Nurgle","Faction: Plague Legions","Summoned","Beasts of Nurgle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Biologus Putrifier",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.plague_knives,
        ],
        rangedWeapons: [
            death_guard_weapons.hyper_blight_grenades,
            death_guard_weapons.injector_pistol,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.hyper_blight_grenades, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.injector_pistol, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.plague_knives, selected: true},
            ],
        },
        abilities: [
            { name: "Extraction of Fresh Disease", desc: "The first time this model's unit destroys an enemy unit as a result of a melee attack, until the end of the battle, add 6 to the Objective Control characteristic of this model." },
            { name: "Foul Infusion", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [Lethal Hits] ability. In addition, each time a model in that unit makes an attack, a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only on a 6." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Grenades","Biologus Putrifier"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Blightlord Terminators",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.close_combat_weapon,
            death_guard_weapons.flail_of_corruption,
            death_guard_weapons.bubotic_blade,
        ],
        rangedWeapons: [
            death_guard_weapons.combi_bolter,
            death_guard_weapons.reaper_autocannon,
            death_guard_weapons.combi_weapon,
            death_guard_weapons.plague_spewer,
            death_guard_weapons.blight_launcher,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.reaper_autocannon, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.plague_spewer, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.blight_launcher, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.close_combat_weapon, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.flail_of_corruption, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.bubotic_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Blistering Fusillade", desc: "If this unit has a Starting Strength of 5 or more, or if a **Character** is leading this unit, then each time a model in this unit makes a ranged attack that targets an Afflicted unit, improve the Strength and Armour Penetration characteristics of that attack by 1." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Chaos","Nurgle","Blightlord Terminators","Terminator"],
        pointOptions: [{ models: 4, pts: 185 }, { models: 6, pts: 370 }],
        transport: null,
    },
    {
        army: "death_guard",
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
            death_guard_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            death_guard_weapons.soulshatter_lascannon,
            death_guard_weapons.havoc_launcher,
            death_guard_weapons.twin_heavy_bolter,
            death_guard_weapons.combi_bolter,
            death_guard_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.soulshatter_lascannon, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Chaos","Nurgle","Transport","Smoke","Land Raider"],
        pointOptions: [],
        transport: "This model has a transport capacity of 14 **Death Guard Infantry** models. Each **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Chaos Lord on Palanquin of Nurgle [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.close_combat_weapon_2,
            death_guard_weapons.nurglings_claws_and_teeth,
            death_guard_weapons.astartes_chainsword,
            death_guard_weapons.accursed_weapon,
            death_guard_weapons.power_fist,
            death_guard_weapons.paired_accursed_weapons,
        ],
        rangedWeapons: [
            death_guard_weapons.bolt_pistol,
            death_guard_weapons.plasma_pistol_standard,
            death_guard_weapons.plasma_pistol_supercharge,
            death_guard_weapons.combi_bolter_2,
            death_guard_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.combi_bolter_2, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.nurglings_claws_and_teeth, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.astartes_chainsword, selected: true},
            ],
            slot9: [
                {...death_guard_weapons.accursed_weapon, selected: true},
            ],
            slot10: [
                {...death_guard_weapons.power_fist, selected: true},
            ],
            slot11: [
                {...death_guard_weapons.paired_accursed_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHOSEN\n- LEGIONARIES\n- PLAGUE MARINES" },
            { name: "Revolting Regeneration", desc: "At the start of your Command phase, this model regains up to D3 lost wounds." },
            { name: "Lord of Chaos", desc: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Grenades","Chaos","Nurgle","Chaos Lord","Palanquin of Nurgle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Chaos Predator Annihilator",
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
            death_guard_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            death_guard_weapons.predator_twin_lascannon,
            death_guard_weapons.havoc_launcher,
            death_guard_weapons.combi_bolter,
            death_guard_weapons.combi_weapon,
            death_guard_weapons.heavy_bolter,
            death_guard_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.predator_twin_lascannon, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.lascannon, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Metalophagic Infection", desc: "In your Shooting phase, after this model has shot, select one enemy **Monster** or **Vehicle** unit hit by one or more of those attacks. Roll one D6, adding 1 to the result if that unit is Afflicted; on a 5+, that unit suffers D3 mortal wounds." },
        ],
        keywords: ["Vehicle","Smoke","Chaos","Faction: Death Guard","Nurgle","Predator Annihilator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
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
            death_guard_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            death_guard_weapons.predator_autocannon,
            death_guard_weapons.havoc_launcher,
            death_guard_weapons.combi_bolter,
            death_guard_weapons.combi_weapon,
            death_guard_weapons.heavy_bolter,
            death_guard_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.predator_autocannon, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.heavy_bolter, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.lascannon, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Hail of Corrosive Disease", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding **Monsters** and **Vehicles**) hit by one or more of those attacks. Until the end of the phase, each time a friending **Death Guard** unit makes a ranged attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per phase." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Chaos","Nurgle","Smoke","Predator Destructor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
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
            death_guard_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            death_guard_weapons.combi_bolter,
            death_guard_weapons.havoc_launcher,
            death_guard_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this **Transport** this turn makes an attack that targets that unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Vehicle","Transport","Dedicated Transport","Smoke","Chaos","Faction: Death Guard","Nurgle","Rhino"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Death Guard Infantry** models. It cannot transport **Terminator** models.",
    },
    {
        army: "death_guard",
        class: "other",
        name: "Chaos Spawn",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.hideous_mutations,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.hideous_mutations, selected: true},
            ],
        },
        abilities: [
            { name: "Lethal Ichor", desc: "Each time a melee attack is allocated to a model in this unit, after the attacking unit has finished making its attacks, roll one D6 (to a maximum of six D6 per attacking unit): for each 4+, the attacking unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Death Guard","Beast","Chaos","Nurgle","Spawn"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Daemon Prince of Nurgle",
        pts: 195,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 12,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.hellforged_weapons_strike,
            death_guard_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            death_guard_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Death Guard Defenders", desc: "While this model is within 3\" of one or more friendly **Death Guard Infantry** units, this model has the Lone Operative ability." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Fevered Strategist", desc: "Once per Battle Round, one model from your army with this ability can use it when a friendly **Death Guard** unit within 12\" of that model is targeted with a Stratagem. If it does, reduce the CP cost of that Stratagem by 1CP." },
            { name: "Miasma of Pestilence (Aura)", desc: "While a friendly **Death Guard** unit is within 6\" of this model, each time a ranged attack targets that unit, models in that unit have the Benefit of Cover against that attack." },
        ],
        keywords: ["Faction: Death Guard","Monster","Character","Chaos","Nurgle","Daemon","Daemon Prince"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Daemon Prince of Nurgle with wings",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.hellforged_weapons_strike,
            death_guard_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            death_guard_weapons.infernal_cannon_2,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.infernal_cannon_2, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Horrifying Visage", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it. That unit must take a Battle-shock test, subtracting 1 from that test." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Enfeebling Miasma (Aura)", desc: "While an enemy unit (excluding *Monsters** and **Vehicles**) is within 6\" of this model, each time that unit is selected to Fall Back, models in that enemy unit must take Desperate Escape tests. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those Desperate Escape tests." },
        ],
        keywords: ["Faction: Death Guard","Monster","Character","Chaos","Nurgle","Daemon","Fly","Daemon Prince with Wings"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Death Guard Chaos Lord [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.astartes_chainsword,
            death_guard_weapons.plague_fist,
            death_guard_weapons.plague_encrusted_exalted_weapon,
            death_guard_weapons.twin_lightning_claws,
        ],
        rangedWeapons: [
            death_guard_weapons.plague_bolt_pistol,
            death_guard_weapons.plasma_pistol_standard,
            death_guard_weapons.plasma_pistol_supercharge,
            death_guard_weapons.combi_weapon_2,
            death_guard_weapons.combi_bolter,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plague_bolt_pistol, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.combi_weapon_2, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.astartes_chainsword, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.plague_fist, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.plague_encrusted_exalted_weapon, selected: true},
            ],
            slot9: [
                {...death_guard_weapons.twin_lightning_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- PLAGUE MARINES" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Grenades","Chaos Lord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Death Guard Chaos Lord in Terminator Armour [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 4,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.plague_fist_2,
            death_guard_weapons.plague_encrusted_exalted_weapon,
            death_guard_weapons.twin_lightning_claws,
            death_guard_weapons.chainfist,
        ],
        rangedWeapons: [
            death_guard_weapons.combi_weapon_3,
            death_guard_weapons.combi_bolter,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.combi_weapon_3, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.plague_fist_2, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.plague_encrusted_exalted_weapon, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.twin_lightning_claws, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.chainfist, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BLIGHTLORD TERMINATORS\n- DEATHSHROUD TERMINATORS" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Chaos Lord","Terminator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Death Guard Cultists [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.brutal_assault_weapon,
        ],
        rangedWeapons: [
            death_guard_weapons.flamer,
            death_guard_weapons.heavy_stubber,
            death_guard_weapons.grenade_launcher_frag,
            death_guard_weapons.grenade_launcher_krak,
            death_guard_weapons.cultist_firearm,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.flamer, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.grenade_launcher_frag, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.grenade_launcher_krak, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.cultist_firearm, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.brutal_assault_weapon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Faction: Death Guard","Infantry","Chaos","Nurgle","Cultists"],
        pointOptions: [{ models: 11, pts: 100 }],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Death Guard Possessed [Legends]",
        pts: 155,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.hideous_mutations_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.hideous_mutations_2, selected: true},
            ],
        },
        abilities: [
            { name: "Infectious Bloodshed", desc: "Each time this unit makes a Charge move, until the end of the turn, weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Diseased icon", desc: "Melee weapons in the bearer's unit have the [LETHAL HITS] ability." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Chaos","Daemon","Possessed"],
        pointOptions: [{ models: 6, pts: 310 }],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Death Guard Sorcerer in Terminator Armour [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 4,
            tough: 6,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.force_weapon,
            death_guard_weapons.chainfist_2,
            death_guard_weapons.plague_fist_3,
            death_guard_weapons.twin_lightning_claws_2,
            death_guard_weapons.plague_encrusted_exalted_weapon,
        ],
        rangedWeapons: [
            death_guard_weapons.curse_of_the_leper_witchfire,
            death_guard_weapons.curse_of_the_leper_focused_witchfire,
            death_guard_weapons.combi_bolter,
            death_guard_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.curse_of_the_leper_witchfire, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.curse_of_the_leper_focused_witchfire, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.force_weapon, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.chainfist_2, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.plague_fist_3, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.twin_lightning_claws_2, selected: true},
            ],
            slot9: [
                {...death_guard_weapons.plague_encrusted_exalted_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BLIGHTLORD TERMINATORS\n- DEATHSHROUD TERMINATORS" },
            { name: "Putrescent Vitality (Psychic)", desc: "At the start of the Fight phase, you can roll one D6: on a 1, this PSYKER’s unit suffers D3 mortal wounds; on a 2+, until the end of the phase, each time an attack is allocated to a model in this PSYKER’s unit, subtract 1 from the Damage characteristic of that attack." },
            { name: "Pestilent Familiar (Psychic)", desc: "Once per battle, after selecting targets for a Psychic weapon equipped by this model, until the end of the phase, improve the Strength and Damage characteristics of that weapon by 2." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Psyker","Sorcerer","Terminator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Deathshroud Terminators",
        pts: 160,
        units: 2,
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
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.manreaper_strike,
            death_guard_weapons.manreaper_sweep,
        ],
        rangedWeapons: [
            death_guard_weapons.plaguespurt_gauntlet,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plaguespurt_gauntlet, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.manreaper_strike, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.manreaper_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Silent Bodyguard", desc: "While a **Character** model is leading this unit, that **Character** model has the Feel No Pain 4+ ability." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Death Approaches", desc: "In your Movement phase, when this unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all Afflicted enemy units, and more than 9\" horizontally away from any other enemy units." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Chaos","Nurgle","Deathshroud Terminators","Terminator"],
        pointOptions: [{ models: 4, pts: 320 }],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Defiler",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 3,
            wounds: 18,
            leader: 6,
            control: 5,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            death_guard_weapons.shearing_claws_strike,
            death_guard_weapons.shearing_claws_sweep,
            death_guard_weapons.electroscourge,
        ],
        rangedWeapons: [
            death_guard_weapons.heavy_missile_launcher_frag,
            death_guard_weapons.heavy_missile_launcher_krak,
            death_guard_weapons.hades_battle_cannon,
            death_guard_weapons.ectoplasma_destructor,
            death_guard_weapons.heavy_baleflamer,
            death_guard_weapons.excruciator_cannon,
            death_guard_weapons.magma_cutter,
            death_guard_weapons.hades_lascannon,
            death_guard_weapons.heavy_reaper_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.heavy_missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.heavy_missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.hades_battle_cannon, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.ectoplasma_destructor, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.heavy_baleflamer, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.excruciator_cannon, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.magma_cutter, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.hades_lascannon, selected: true},
            ],
            slot9: [
                {...death_guard_weapons.heavy_reaper_autocannon, selected: true},
            ],
            slot10: [
                {...death_guard_weapons.shearing_claws_strike, selected: true},
            ],
            slot11: [
                {...death_guard_weapons.shearing_claws_sweep, selected: true},
            ],
            slot12: [
                {...death_guard_weapons.electroscourge, selected: true},
            ],
        },
        abilities: [
            { name: "Scuttling Walker", desc: "Each time this unit makes a Normal, Advance or Fall Back move, it can move through models (excluding **Titanic** models) and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
            { name: "Barrage of Filth", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Vehicle","Walker","Chaos","Daemon","Nurgle","Defiler","Faction: Death Guard"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Foetid Bloat-drone",
        pts: 100,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.plague_probe,
            death_guard_weapons.fleshmower,
        ],
        rangedWeapons: [
            death_guard_weapons.plaguespitter,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plaguespitter, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plague_probe, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.fleshmower, selected: true},
            ],
        },
        abilities: [
            { name: "Hovering Death", desc: "This model is eligible to shoot and declare a charge in a turn in which it Fell Back." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Fly","Chaos","Nurgle","Daemon","Foetid Bloat-drone"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Foetid Bloat-drone with heavy blight launcher",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.plague_probe,
        ],
        rangedWeapons: [
            death_guard_weapons.heavy_blight_launcher,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.heavy_blight_launcher, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plague_probe, selected: true},
            ],
        },
        abilities: [
            { name: "Explosive Blight", desc: "In your Shooting phase, each time this model makes an attack that destroys an enemy unit, before removing the last model in that unit from play, roll a D6, adding 1 to the result if that unit is Afflicted; on a 5+, each enemy unit within 6\" of that model is Afflicted until the start of your next turn." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Fly","Chaos","Nurgle","Daemon","Foetid Bloat-drone"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Foul Blightspawn",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            death_guard_weapons.plague_sprayer,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plague_sprayer, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Putrefying Stink", desc: "Enemy models cannot start or end an Advance move within 9\" of this model." },
            { name: "Blinding Spray", desc: "In the Fight phase, you can select one model from your army with this ability to use this ability. If you do, until the end of that phase, that model's unit has the Fights First ability. Each model can only be selected for this ability once per battle." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Grenades","Foul Blightspawn"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Gellerpox Infected [Legends]",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 6,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.brutal_weapons,
            death_guard_weapons.hideous_mutations_3,
        ],
        rangedWeapons: [
            death_guard_weapons.belly_flamer,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.belly_flamer, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.brutal_weapons, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.hideous_mutations_3, selected: true},
            ],
        },
        abilities: [
            { name: "Fearsome (Aura)", desc: "While an enemy unit is within 6\" of this unit, each time that enemy unit takes a Battle-shock or Leadership test, subtract 1 from the result." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Chaos","Nurgle","Gellerpox Infected"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Great Unclean One",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 12,
            saving: 5,
            wounds: 20,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.bileblade,
            death_guard_weapons.bilesword_strike,
            death_guard_weapons.bilesword_sweep,
            death_guard_weapons.doomsday_bell,
        ],
        rangedWeapons: [
            death_guard_weapons.putrid_vomit,
            death_guard_weapons.plague_flail,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.putrid_vomit, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plague_flail, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.bileblade, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.bilesword_strike, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.bilesword_sweep, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.doomsday_bell, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemon Lord of Nurgle (Aura)", desc: "While a friendly Plague Legions unit is within 6\" of this model, add 1 to the Toughness characteristic of models in that unit." },
            { name: "Nurgle’s Rot (Psychic)", desc: "At the end of your Movement phase, you can select one enemy unit within 12\" of this model. Until the start of your next Movement phase, that unit is rotted. While a unit is rotted, subtract 1 from the Toughness characteristic of models in that unit." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Monster","Character","Psyker","Chaos","Daemon","Nurgle","Great Unclean One","Faction: Plague Legions","Summoned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Helbrute",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.close_combat_weapon_4,
            death_guard_weapons.helbrute_fist,
            death_guard_weapons.power_scourge,
            death_guard_weapons.helbrute_hammer,
        ],
        rangedWeapons: [
            death_guard_weapons.multi_melta,
            death_guard_weapons.twin_autocannon,
            death_guard_weapons.plasma_cannon,
            death_guard_weapons.combi_bolter,
            death_guard_weapons.heavy_flamer,
            death_guard_weapons.missile_launcher_frag,
            death_guard_weapons.missile_launcher_krak,
            death_guard_weapons.twin_heavy_bolter,
            death_guard_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.multi_melta, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.twin_autocannon, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.plasma_cannon, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.combi_bolter, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.heavy_flamer, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.missile_launcher_frag, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.missile_launcher_krak, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.twin_heavy_bolter, selected: true},
            ],
            slot9: [
                {...death_guard_weapons.twin_lascannon, selected: true},
            ],
            slot10: [
                {...death_guard_weapons.close_combat_weapon_4, selected: true},
            ],
            slot11: [
                {...death_guard_weapons.helbrute_fist, selected: true},
            ],
            slot12: [
                {...death_guard_weapons.power_scourge, selected: true},
            ],
            slot13: [
                {...death_guard_weapons.helbrute_hammer, selected: true},
            ],
        },
        abilities: [
            { name: "Diseased Malice", desc: "Each time this model makes an attack that targets an Afflicted unit, add 1 to the Wound roll." },
            { name: "Froth-spattered Frenzy", desc: "If this model is equipped with two melee weapons in addition to its close combat weapon, add 2 to the Attacks characteristic of those two weapons." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Walker","Chaos","Nurgle","Helbrute"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
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
            death_guard_weapons.armoured_hull,
        ],
        rangedWeapons: [
            death_guard_weapons.autocannon,
            death_guard_weapons.twin_lascannon,
            death_guard_weapons.havoc_launcher,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.autocannon, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.havoc_launcher, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Bomb Rack", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved across during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Aircraft","Fly","Chaos","Nurgle","Hell Talon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
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
            death_guard_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            death_guard_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.twin_lascannon, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can FLY, add 1 to the Hit roll." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Aircraft","Fly","Chaos","Nurgle","Hellblade"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Icon Bearer",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 5,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.plague_knife,
        ],
        rangedWeapons: [
            death_guard_weapons.boltgun,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.boltgun, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plague_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Unclean Icon", desc: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
            { name: "Blessed Icon of Disease", desc: "Once per battle, at the start of any phase, you can select one friendly **Death Guard** unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Grenades","Death Guard Icon Bearer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Lord of Contagion",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.manreaper_strike_2,
            death_guard_weapons.manreaper_sweep_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.manreaper_strike_2, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.manreaper_sweep_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Vector of Disease", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the **[Sustained Hits 1]** and **[Lance]** abilties." },
            { name: "Unholy Resilience", desc: "The first time a model with this ability is destroyed in a battle round, roll one D6 at the end of the phase. On a 2+, set that model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 3 wounds remaining. Each model can only be set up in this way once per battle." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Blightlord Terminators**\n- **Deathshroud Terminators**" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Grenades","Lord of Contagion","Terminator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Lord of Poxes",
        pts: 75,
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
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.great_plague_blade,
        ],
        rangedWeapons: [
            death_guard_weapons.plasma_pistol_standard_2,
            death_guard_weapons.plasma_pistol_supercharge_2,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.great_plague_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Plague Marines**" },
            { name: "Gift of Poxes", desc: "Add 3\" to the range of this model's Contagion Range." },
            { name: "Shroud of Disease", desc: "While this model is leading a unit, that unit cannot be targeted by ranged attacks unless the attacking unit is within 18\"." },
        ],
        keywords: ["Faction: Death Guard","Character","Infantry","Grenades","Chaos","Nurgle","Lord of Poxes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Lord of Virulence",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.power_fist_2,
        ],
        rangedWeapons: [
            death_guard_weapons.twin_plague_spewer,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.twin_plague_spewer, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Virulent Aura", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, you can re-roll the Wound roll." },
            { name: "Blight Bombardment", desc: "At the start of your Shooting phase, select one enemy unit within 30\" of and visible to this model. Until the end of the phase, each time a friendly **Death Guard** unit makes a ranged attack that targets that unit, re-roll a Hit roll of 1 (if that attack is made with a Blast weapon, you can re-roll the Hit roll instead)." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Blightlord Terminators**\n- **Deathshroud Terminators**" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Lord of Virulence","Terminator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Malignant Plaguecaster",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.corrupted_staff,
        ],
        rangedWeapons: [
            death_guard_weapons.plague_wind_witchfire,
            death_guard_weapons.plague_wind_focused_witchfire,
            death_guard_weapons.bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plague_wind_witchfire, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plague_wind_focused_witchfire, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.bolt_pistol_2, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.corrupted_staff, selected: true},
            ],
        },
        abilities: [
            { name: "Gift of Contagion (Psychic)", desc: "While this model is leading a unit, each time a model in that unit makes an attack which targets a unit which is Afflicted, that attack has the [Sustained Hits 1] ability." },
            { name: "Pestilent Fallout (Psychic)", desc: "In your Shooting phase, after this model has shot, select one enemy **Infantry** unit hit by one or more of those attacks made with its Plague Wind. Until the end of your opponent's next turn, that unit is enfeebled. While a unit is enfeebled, subtract 2\" from the Move characteristic of models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n**Plague Marines**, **Poxwalkers**" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Psyker","Malignant Plaguecaster"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Miasmic Malignifier",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            death_guard_weapons.miasmic_gouts,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.miasmic_gouts, selected: true},
            ],
        },
        abilities: [
            { name: "Putrescent Fog (Aura)", desc: "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this model." },
            { name: "Diseased Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this **Fortification**, that model has the Benefit of Cover against that attack." },
            { name: "Deployment", desc: "Both parts of this **Fortification** must be deployed within 1\" of each other. Both parts are then treated as a single model for all rules purposes." },
        ],
        keywords: ["Faction: Death Guard","Fortification","Chaos","Nurgle","Miasmic Malignifier"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Mortarion",
        pts: 380,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 16,
            leader: 5,
            control: 6,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.silence_strike,
            death_guard_weapons.silence_sweep,
        ],
        rangedWeapons: [
            death_guard_weapons.rotwind,
            death_guard_weapons.lantern,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.rotwind, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.lantern, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.silence_strike, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.silence_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Host of Plagues", desc: "At the end of your Movement phase, roll one D6 for each enemy unit within 6\" of this model, adding 1 to the result if that unit is Afflicted; on a 3+, that enemy unit suffers D3 mortal wounds." },
            { name: "Lord of the Death Guard", desc: "Once per turn, this model can use one of the Lord of the Death Guard abilties." },
            { name: "Damaged: 1-6 wounds remaining", desc: "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Death Guard","Monster","Psyker","Fly","Character","Epic Hero","Daemon","Grenades","Chaos","Nurgle","Primarch","Mortarion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Mutoid Vermin [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 2,
            saving: 7,
            wounds: 1,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.diseased_claws_and_fangs,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.diseased_claws_and_fangs, selected: true},
            ],
        },
        abilities: [
            { name: "Mischief Makers (Aura)", desc: "While an enemy unit (excluding MONSTERS and VEHICLES) is within 6\" of this unit, each time a model in that unit makes a melee attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Death Guard","Swarm","Chaos","Nurgle","Mutoid Vermin"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Myphitic Blight-hauler",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.gnashing_maw,
        ],
        rangedWeapons: [
            death_guard_weapons.bile_spurt,
            death_guard_weapons.missile_launcher_frag,
            death_guard_weapons.missile_launcher_krak,
            death_guard_weapons.multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.bile_spurt, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.missile_launcher_frag, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.missile_launcher_krak, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.multi_melta, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.gnashing_maw, selected: true},
            ],
        },
        abilities: [
            { name: "Tank Hunters", desc: "In your Shooting phase, each time a model in this unit makes a attack that targets a **Monster** or **Vehicle** unit, add 1 to the Hit roll and add 1 to the Wound roll." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Chaos","Nurgle","Daemon","Smoke","Myphitic Blight-hauler"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Noxious Blightbringer",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.cursed_plague_bell,
        ],
        rangedWeapons: [
            death_guard_weapons.plasma_pistol_standard_2,
            death_guard_weapons.plasma_pistol_supercharge_2,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.cursed_plague_bell, selected: true},
            ],
        },
        abilities: [
            { name: "Sickening Vitality", desc: "While this model is leading a unit, add 1\" to the Move characteristic of models in that unit and you can re-roll Advance and Charge rolls made for that unit." },
            { name: "Tocsin of Misery (Aura)", desc: "In the Battle-shock step of your opponent's Command phase, if an enemy unit that is below its Starting Strength is within 9\" of this model, that enemy unit must take a Battle-shock test, subtracting 1 from that test if it is a **Psyker** unit." },
            { name: "Leader", desc: "This model can be attached to the following units: **Plague Marines**, **Poxwalkers**\n*You can attach this model to a **Plague Marines** or **Poxwalkers** unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same Leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.*" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Noxious Blightbringer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Nurglings",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 3,
            saving: 7,
            wounds: 4,
            leader: 8,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.diseased_claws_and_teeth,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.diseased_claws_and_teeth, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Mischief Makers (Aura)", desc: "Each time an enemy unit (excluding Titanic units) within Engagement Range of one or more units with this ability is selected to fight, until the end of the phase, each time a model in that enemy unit makes a melee attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Swarm","Chaos","Daemon","Nurgle","Faction: Plague Legions","Summoned","Nurglings"],
        pointOptions: [{ models: 4, pts: 70 }],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Plague Drones",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 6,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.foul_mouthparts,
            death_guard_weapons.plaguesword,
        ],
        rangedWeapons: [
            death_guard_weapons.deaths_heads,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.deaths_heads, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.foul_mouthparts, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.plaguesword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Death’s Heads", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly NURGLE LEGIONES DAEMONICA unit makes an attack that targets that unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Mounted","Fly","Chaos","Daemon","Nurgle","Faction: Plague Legions","Summoned","Plague Drones"],
        pointOptions: [{ models: 4, pts: 230 }],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Plague Lord [Crucible]",
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
            { name: "Gift of Poxes", desc: "Add 3\" to the range of this model's Contagion Range." },
            { name: "Leader", desc: "This model can be attached to the following units: **Plague Marines, Poxwalkers**" },
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Grenades","Plague Lord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "battleline",
        name: "Plague Marines",
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
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.power_fist_3,
            death_guard_weapons.heavy_plague_weapon,
            death_guard_weapons.plague_knives_2,
            death_guard_weapons.bubotic_weapons,
        ],
        rangedWeapons: [
            death_guard_weapons.meltagun,
            death_guard_weapons.plague_belcher,
            death_guard_weapons.bolt_pistol_2,
            death_guard_weapons.boltgun,
            death_guard_weapons.plasma_gun_standard,
            death_guard_weapons.plasma_gun_supercharge,
            death_guard_weapons.plasma_pistol_standard_2,
            death_guard_weapons.plasma_pistol_supercharge_2,
            death_guard_weapons.blight_launcher,
            death_guard_weapons.plague_spewer,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.meltagun, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plague_belcher, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.bolt_pistol_2, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.boltgun, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.plasma_gun_standard, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot9: [
                {...death_guard_weapons.blight_launcher, selected: true},
            ],
            slot10: [
                {...death_guard_weapons.plague_spewer, selected: true},
            ],
            slot11: [
                {...death_guard_weapons.power_fist_3, selected: true},
            ],
            slot12: [
                {...death_guard_weapons.heavy_plague_weapon, selected: true},
            ],
            slot13: [
                {...death_guard_weapons.plague_knives_2, selected: true},
            ],
            slot14: [
                {...death_guard_weapons.bubotic_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Infused with the Blessings of Nurgle", desc: "In your Shooting phase, each time this unit is selected to shoot, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next turn, that unit is Afflicted." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Chaos","Nurgle","Grenades","Battleline","Plague Marines"],
        pointOptions: [{ models: 6, pts: 130 }, { models: 8, pts: 190 }],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Plague Sorcerer [Crucible]",
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
            { name: "Gift of Contagion (Psychic)", desc: "Each time a model in this unit makes an attack that targets a unit that is Afflicted, that attack has the [Sustained Hits 1] ability." },
            { name: "Leader", desc: "This model can be attached to the following units: **Plague Marines, Poxwalkers**" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Psyker","Chaos","Nurgle","Plague Sorcerer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Plague Surgeon",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.balesword,
        ],
        rangedWeapons: [
            death_guard_weapons.bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.balesword, selected: true},
            ],
        },
        abilities: [
            { name: "Tainted Narthecium", desc: "While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit." },
            { name: "Inflamed Infections", desc: "At the start of the Fight phase, select one enemy unit within Engagement Range of this model. Until the end of the phase, each time this model makes an attack that targets that unit, an unmodified Hit roll of 5+ scores a Critical Hit. If that unit is below Half-strength, an unmodified Hit roll of 4+ scores a Critical Hit instead." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Plague Surgeon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "battleline",
        name: "Plaguebearers",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 7,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.plaguesword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plaguesword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Infected Outbreak", desc: "If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
        ],
        keywords: ["Infantry","Battleline","Chaos","Daemon","Nurgle","Faction: Plague Legions","Plaguebearers","Summoned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Plagueburst Crawler",
        pts: 210,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            death_guard_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            death_guard_weapons.plagueburst_mortar,
            death_guard_weapons.rothail_volley_gun,
            death_guard_weapons.heavy_slugger,
            death_guard_weapons.entropy_cannon,
            death_guard_weapons.plaguespitter,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plagueburst_mortar, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.rothail_volley_gun, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.heavy_slugger, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.entropy_cannon, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.plaguespitter, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Spore-laced Shock Waves", desc: "In your Shooting phase, each time you select a target for this model's Plagueburst mortar, roll one D6 for the target unit and every other enemy unit within 3\" of the target unit, adding 1 to that roll if the unit being rolled for is Afflicted. On a 6+, the unit being rolled for is struck by spores; after resolving all of this model's attacks against the target unit, each unit struck by spores suffers D3 mortal wounds." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Death Guard","Vehicle","Chaos","Nurgle","Daemon","Plagueburst Crawler"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "other",
        name: "Poxwalkers",
        pts: 65,
        units: 10,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 7,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.improvised_weapons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.improvised_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Curse of the Walking Pox", desc: "Each time a **Poxwalker** model in this unit makes an attack that destroys an enemy model (excluding **Monster** and **Vehicle** models), after this unit has resolved its attacks, you can return one destroyed **Poxwalker** model to this unit.\n\nWhile **Typhus** is leading this unit, enemy models destroyed as a result of **Typhus**’ Eater Plague ability count as enemy models destroyed by an attack made by a **Poxwalker** model in this unit for the purposes of this ability." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Chaos","Nurgle","Poxwalkers"],
        pointOptions: [{ models: 10, pts: 130 }],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Rotigus",
        pts: 265,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 12,
            saving: 5,
            wounds: 22,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.gnarlrod_strike,
            death_guard_weapons.gnarlrod_sweep,
        ],
        rangedWeapons: [
            death_guard_weapons.streams_of_brackish_filth,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.streams_of_brackish_filth, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.gnarlrod_strike, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.gnarlrod_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Virulent Blessing (Psychic)", desc: "At the start of the Fight phase, you can select one enemy unit within 24\" of and visible to this model. Until the end of the phase, each time an attack made by a **Plague Legions** model is allocated to a model in that unit, add 1 to the Damage characteristic of that attack." },
            { name: "Deluge of Nurgle (Aura)", desc: "While an enemy unit is within 6\" of this model, subtract 2 from the Move characteristic and subtract 1 from the Objective Control characteristic of models in that unit." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Monster","Character","Epic Hero","Psyker","Chaos","Daemon","Nurgle","Faction: Plague Legions","Rotigus","Summoned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Sorcerer on Palanquin of Nurgle [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.accursed_weapon,
            death_guard_weapons.power_fist,
            death_guard_weapons.astartes_chainsword_2,
            death_guard_weapons.nurglings_claws_and_teeth_2,
            death_guard_weapons.force_weapon,
        ],
        rangedWeapons: [
            death_guard_weapons.bolt_pistol,
            death_guard_weapons.combi_bolter_2,
            death_guard_weapons.plasma_pistol_standard,
            death_guard_weapons.plasma_pistol_supercharge,
            death_guard_weapons.infernal_gaze_witchfire,
            death_guard_weapons.infernal_gaze_focused_witchfire,
            death_guard_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.combi_bolter_2, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...death_guard_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...death_guard_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot6: [
                {...death_guard_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot7: [
                {...death_guard_weapons.combi_weapon, selected: true},
            ],
            slot8: [
                {...death_guard_weapons.accursed_weapon, selected: true},
            ],
            slot9: [
                {...death_guard_weapons.power_fist, selected: true},
            ],
            slot10: [
                {...death_guard_weapons.astartes_chainsword_2, selected: true},
            ],
            slot11: [
                {...death_guard_weapons.nurglings_claws_and_teeth_2, selected: true},
            ],
            slot12: [
                {...death_guard_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- PLAGUE MARINES" },
            { name: "Gift of Poxes (Psychic)", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Feculent Despair (Aura, Psychic)", desc: "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock test, subtract 1 from that test." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Grenades","Psyker","Chaos","Nurgle","Sorcerer","Palanquin of Nurgle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Tallyman",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            death_guard_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            death_guard_weapons.plasma_pistol_standard_2,
            death_guard_weapons.plasma_pistol_supercharge_2,
        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot3: [
                {...death_guard_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Malicious Calculations", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill or Weapon Skill characteristics and/or any or all modifiers to the Hit roll." },
            { name: "Seven-fold Chant", desc: "In your Command phase, if this model is on the battlefield, roll 2D6: on a 7+, you gain 1CP." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Chaos","Nurgle","Tallyman"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Tri-lobe Vectors [Crucible]",
        pts: 120,
        units: 3,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
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
            { name: "Leader", desc: "This unit can be attached to the following units: **Plague Marines, Poxwalkers**" },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Grenades","Chaos","Nurgle","Tri-lobe Vectors"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "death_guard",
        class: "characters",
        name: "Typhus",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            death_guard_weapons.lakrimae_strike,
            death_guard_weapons.lakrimae_sweep,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...death_guard_weapons.lakrimae_strike, selected: true},
            ],
            slot2: [
                {...death_guard_weapons.lakrimae_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Blightlord Terminators**\n- **Deathshroud Terminators**\n- **Poxwalkers**" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "The Destroyer Hive", desc: "While this model is leading a unit, each time a melee attack targets that unit, subtract 1 from the Hit roll." },
            { name: "Eater Plague (Psychic)", desc: "In your Shooting phase, you can select one enemy unit within 18\" of and visible to this **Psyker** (excluding units with the Lone Operative ability that are not part of an Attached unit and are not within 12\" of this **Psyker** and roll one D6: on a 1, this **Psyker**'s unit suffers D3 mortal wounds; on a 2-5, that enemy unit suffers D6 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Faction: Death Guard","Infantry","Character","Epic Hero","Chaos","Nurgle","Psyker","Typhus","Terminator"],
        pointOptions: [],
        transport: null,
    },
]

export default death_guard_army
