// AUTO-GENERATED units for Chaos Space Marines (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import chaos_space_marines_weapons from "../weapons/chaos_space_marines"

const chaos_space_marines_army = [
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Abaddon the Despoiler",
        pts: 270,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 9,
            leader: 5,
            control: 4,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.talon_of_horus,
            chaos_space_marines_weapons.drachnyen,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.talon_of_horus_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.talon_of_horus_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.talon_of_horus, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.drachnyen, selected: true},
            ],
        },
        abilities: [
            { name: "The Warmaster", desc: "In your Command phase, select one Warmaster ability. Until the start of your next Command phase, this model has that ability." },
            { name: "Dark Destiny", desc: "Each time this model makes a Dark Pact and does not fail the resulting Leadership test, if the result of that test was 7+, you gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHAOS TERMINATOR SQUAD\n- CHOSEN" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Epic Hero","Terminator","Chaos Undivided","Chaos","Abaddon the Despoiler"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Accursed Cultists",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.hideous_mutations,
            chaos_space_marines_weapons.blasphemous_appendages,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.hideous_mutations, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.blasphemous_appendages, selected: true},
            ],
        },
        abilities: [
            { name: "Howling Horde", desc: "Each time an enemy unit has shot, if one or more models from this unit were destroyed as a result of those attacks, this unit can make a Horde move. To do so, roll one D6; this unit can move a number of inches up to the result, but this unit must finish that move as close as possible to the nearest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit. This unit cannot make a Horde move while it is Battle-shocked." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Accursed Cultists","Damned"],
        pointOptions: [{ models: 9, pts: 195 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Chaos Bikers",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.power_fist,
            chaos_space_marines_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.flamer,
            chaos_space_marines_weapons.meltagun,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.flamer, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.meltagun, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.power_fist, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Rapid Assault", desc: "Each time a model in this unit makes a melee attack, if this unit made a Charge move this turn, improve the Strength characteristic of that attack by 1." },
        ],
        keywords: ["Faction: Heretic Astartes","Mounted","Grenades","Chaos","Chaos Bikers"],
        pointOptions: [{ models: 4, pts: 130 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Chaos Deimos Predator [Legends]",
        pts: 115,
        units: 2,
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

        ],
        rangedWeapons: [
            chaos_space_marines_weapons.plasma_destroyer_standard,
            chaos_space_marines_weapons.plasma_destroyer_supercharge,
            chaos_space_marines_weapons.conversion_beam_cannon,
            chaos_space_marines_weapons.magna_melta_cannon,
            chaos_space_marines_weapons.infernus_cannon,
            chaos_space_marines_weapons.heavy_bolter,
            chaos_space_marines_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.plasma_destroyer_standard, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.plasma_destroyer_supercharge, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.conversion_beam_cannon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.magna_melta_cannon, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.infernus_cannon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.lascannon, selected: true},
            ],
        },
        abilities: [
            { name: "Armoured Spearhead", desc: "Each time this model makes an attack that targets an enemy unit, re-roll a Hit roll of 1 and, if that unit is within range of an objective marker you do not control, you can re-roll the Hit roll instead." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Smoke","Chaos","Deimos Predator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.soulshatter_lascannon,
            chaos_space_marines_weapons.havoc_launcher,
            chaos_space_marines_weapons.twin_heavy_bolter,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.soulshatter_lascannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Transport","Smoke","Chaos","Land Raider"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Heretic Astartes Infantry** (excluding **Obliterator** and **Jump Pack** models). Each **Possessed, Mutilators** and **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Chaos Lord",
        pts: 90,
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
            chaos_space_marines_weapons.daemon_hammer,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.astartes_chainblade,
            chaos_space_marines_weapons.power_fist_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.daemon_hammer, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.astartes_chainblade, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHOSEN\n- LEGIONARIES" },
            { name: "Chance for Glory", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength, Attacks, Armour\nPenetration and Damage characteristics of melee weapons equipped by this model by 1." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Grenades","Chaos","Chaos Lord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Chaos Lord in Terminator Armour",
        pts: 85,
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
            chaos_space_marines_weapons.exalted_weapon,
            chaos_space_marines_weapons.chainfist,
            chaos_space_marines_weapons.paired_accursed_weapons,
            chaos_space_marines_weapons.power_fist_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.combi_weapon_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_weapon_2, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.exalted_weapon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.chainfist, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.paired_accursed_weapons, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHAOS TERMINATOR SQUAD" },
            { name: "Formidably Resilient", desc: "Each time an attack is allocated to this model, halve the Damage characteristic of that attack." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Chaos","Terminator","Chaos Lord in Terminator Armour","Chaos Lord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Chaos Lord on Bike [Legends]",
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
            chaos_space_marines_weapons.close_combat_weapon_2,
            chaos_space_marines_weapons.astartes_chainsword,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.paired_accursed_weapons_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHAOS BIKERS" },
            { name: "Swift Assault", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability." },
        ],
        keywords: ["Faction: Heretic Astartes","Mounted","Character","Grenades","Chaos","Chaos Lord on Bike"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Chaos Lord on Disc of Tzeentch [Legends]",
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
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.close_combat_weapon_2,
            chaos_space_marines_weapons.astartes_chainsword,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.paired_accursed_weapons_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHOSEN\n- LEGIONARIES\n- RUBRIC MARINES" },
            { name: "Lord of Fate", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds." },
        ],
        keywords: ["Infantry","Character","Grenades","Faction: Heretic Astartes","Fly","Chaos","Tzeentch","Chaos Lord","Disc of Tzeentch"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Chaos Lord on Juggernaut [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 2,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.bladed_horn,
            chaos_space_marines_weapons.close_combat_weapon_2,
            chaos_space_marines_weapons.astartes_chainsword,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.paired_accursed_weapons_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.bladed_horn, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHAOS BIKERS\n- KHORNE BERZERKERS" },
            { name: "Bloody Stampede", desc: "Each time this model’s unit ends a Charge move, select one enemy unit within Engagement Range of this model and roll one D6: on a 2-3, that enemy unit suffers 1 mortal wound; on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Faction: Heretic Astartes","Mounted","Character","Grenades","Chaos","Khorne","Chaos Lord","Juggernaut"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.close_combat_weapon_2,
            chaos_space_marines_weapons.nurglings_claws_and_teeth,
            chaos_space_marines_weapons.astartes_chainsword,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.paired_accursed_weapons_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.nurglings_claws_and_teeth, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHOSEN\n- LEGIONARIES\n- PLAGUE MARINES" },
            { name: "Revolting Regeneration", desc: "At the start of your Command phase, this model regains up to D3 lost wounds." },
        ],
        keywords: ["Infantry","Character","Grenades","Chaos","Nurgle","Chaos Lord","Palanquin of Nurgle","Faction: Heretic Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Chaos Lord on Steed of Slaanesh [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 14,
            tough: 5,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.close_combat_weapon_2,
            chaos_space_marines_weapons.lashing_tongue,
            chaos_space_marines_weapons.astartes_chainsword,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.paired_accursed_weapons_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.lashing_tongue, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.astartes_chainsword, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHAOS BIKERS" },
            { name: "Cut Off Their Escape", desc: "Each time an enemy unit (excluding MONSTERS and VEHICLES) within Engagement Range of this model’s unit is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests." },
        ],
        keywords: ["Faction: Heretic Astartes","Mounted","Character","Grenades","Chaos","Slaanesh","Chaos Lord","Steed of Slaanesh"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Chaos Lord with Jump Pack",
        pts: 80,
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
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.twin_lightning_claws,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.twin_lightning_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- RAPTORS" },
            { name: "Cruel Hunter", desc: "While this model is leading a unit, each time that unit Piles In or Consolidates, each model in that unit can move up to 6\" instead of up to 3\"." },
        ],
        keywords: ["Faction: Heretic Astartes","Chaos Lord","Jump Pack","Character","Infantry","Fly","Grenades","Chaos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.predator_twin_lascannon,
            chaos_space_marines_weapons.havoc_launcher,
            chaos_space_marines_weapons.combi_weapon,
            chaos_space_marines_weapons.heavy_bolter,
            chaos_space_marines_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.predator_twin_lascannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.lascannon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Annihilator", desc: "Each time a ranged attack made by this model is allocated to a **Monster** or **Vehicle** model, you can re-roll the Damage roll." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Smoke","Chaos","Predator Annihilator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Chaos Predator Destructor",
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
            chaos_space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.predator_autocannon,
            chaos_space_marines_weapons.havoc_launcher,
            chaos_space_marines_weapons.combi_weapon,
            chaos_space_marines_weapons.heavy_bolter,
            chaos_space_marines_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.predator_autocannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.lascannon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Destructor", desc: "Each time a ranged attack made by this model targets an enemy INFANTRY unit, improve the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Smoke","Chaos","Predator Destructor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "transports",
        name: "Chaos Rhino",
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
            chaos_space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.havoc_launcher,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.havoc_launcher, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Self-repair", desc: "At the start of your Command phase, this model regains 1 lost wound." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Transport","Dedicated Transport","Chaos","Rhino","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Heretic Astartes Infantry** models. It cannot transport **Terminator, Jump Pack, Mutilators, Obliterator** or **Possessed** models.",
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Chaos Spawn",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.hideous_mutations,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.hideous_mutations, selected: true},
            ],
        },
        abilities: [
            { name: "Mind-breaking Mutations (Aura)", desc: "While an enemy unit (excluding VEHICLES) is within 3\" of this unit, subtract 1 from the Objective Control characteristic of models in that enemy unit." },
        ],
        keywords: ["Faction: Heretic Astartes","Beast","Chaos","Chaos Spawn"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Chaos Terminator Squad",
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
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.power_fist,
            chaos_space_marines_weapons.paired_accursed_weapons_3,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.heavy_flamer,
            chaos_space_marines_weapons.reaper_autocannon,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.reaper_autocannon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.power_fist, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_3, selected: true},
            ],
        },
        abilities: [
            { name: "Despoilers", desc: "Each time this unit makes a Dark Pact, until the end of the phase, each time a model in this unit makes an attack, you can re-roll the Hit roll." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Terminator","Chaos Terminator Squad"],
        pointOptions: [{ models: 6, pts: 360 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Chaos Vindicator",
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
            chaos_space_marines_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.demolisher_cannon,
            chaos_space_marines_weapons.havoc_launcher,
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.demolisher_cannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Siege Shield", desc: "When making ranged attacks with its demolisher cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Smoke","Chaos","Vindicator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Chosen",
        pts: 125,
        units: 1,
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
            chaos_space_marines_weapons.paired_accursed_weapons_3,
            chaos_space_marines_weapons.power_fist_3,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_3, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.power_fist_3, selected: true},
            ],
        },
        abilities: [
            { name: "Chosen Marauders", desc: "This unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Grenades","Chaos","Chosen"],
        pointOptions: [{ models: 6, pts: 250 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Cultist Firebrand",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.balefire_pike,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.balefire_pike, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Fiery Faith", desc: "While this model is leading a unit, you can re-roll Leadership tests taken for that unit." },
            { name: "Cursed Flames", desc: "In your Shooting phase, after this model has shot, select one enemy INFANTRY unit hit by one or more of those attacks. That unit must make a Battle-shock test." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACCURSED CULTISTS\n- CULTIST MOB" },
        ],
        keywords: ["Character","Faction: Heretic Astartes","Infantry","Grenades","Chaos","Damned","Cultist Firebrand"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "battleline",
        name: "Cultist Mob",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
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

        ],
        rangedWeapons: [
            chaos_space_marines_weapons.bolt_pistol_2,
            chaos_space_marines_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.autopistol, selected: true},
            ],
        },
        abilities: [
            { name: "For the Dark Gods", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Battleline","Grenades","Chaos","Cultist Mob","Damned"],
        pointOptions: [{ models: 11, pts: 100 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "battleline",
        name: "Cultist Mob with Firearms [Legends]",
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

        ],
        rangedWeapons: [
            chaos_space_marines_weapons.bolt_pistol_2,
            chaos_space_marines_weapons.autopistol,
            chaos_space_marines_weapons.flamer,
            chaos_space_marines_weapons.cultist_grenade_launcher_frag,
            chaos_space_marines_weapons.cultist_grenade_launcher_krak,
            chaos_space_marines_weapons.heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.autopistol, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.flamer, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.cultist_grenade_launcher_frag, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.cultist_grenade_launcher_krak, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.heavy_stubber, selected: true},
            ],
        },
        abilities: [
            { name: "For the Dark Gods", desc: "At the end of your Command phase, if this unit is within range of an objective marker  you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Battleline","Grenades","Chaos","Damned","Cultist Mob with Firearms"],
        pointOptions: [{ models: 11, pts: 100 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Cypher",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
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
            chaos_space_marines_weapons.cyphers_bolt_pistol,
            chaos_space_marines_weapons.cyphers_plasma_pistol,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.cyphers_bolt_pistol_2,
            chaos_space_marines_weapons.cyphers_plasma_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.cyphers_bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.cyphers_plasma_pistol_2, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.cyphers_bolt_pistol, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.cyphers_plasma_pistol, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Agent of Discord (Aura)", desc: "Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP (this is not cumulative with any other rules that would increase the CP cost of that Stratagem)." },
            { name: "Guns Blazing", desc: "Once per turn, in your opponent's Shooting phase, when an enemy unit makes a ranged attacks that targets a friendly HERETIC ASTARTES unit within 3\" of this model, after that enemy unit has shot, this model can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so and can only do so if that enemy unit is an eligible target." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Epic Hero","Chaos","Cypher","Fallen"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Dark Apostle",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.accursed_crozius,
            chaos_space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.accursed_crozius, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACCURSED CULTISTS\n- CHOSEN\n- CULTIST MOB\n- LEGIONARIES" },
            { name: "Dark Zealotry", desc: "While this unit is leading a unit and contains a DARK APOSTLE model, each time a model in that unit makes a melee attack, add 1 to the Wound roll." },
            { name: "Demagogue", desc: "Once per battle, at the start of any phase, you can select one friendly HERETIC ASTARTES unit that is Battle-shocked and within 12\" of this unit’s DARK APOSTLE model. That unit is no longer Battle-shocked." },
            { name: "Malign Sacrifice", desc: "At the start of the Fight phase, if this unit contains one or more Dark Disciple models, you can select one of those models and one enemy unit within Engagement Range of this unit, then roll one D6: on a 2-5, that enemy unit suffers 1 mortal wound; on a 6, that enemy unit suffers D3 mortal wounds. That Dark Disciple model is then destroyed." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Character","Faction: Heretic Astartes","Infantry","Grenades","Chaos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Dark Commune",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.commune_blade,
            chaos_space_marines_weapons.close_combat_weapon_4,
            chaos_space_marines_weapons.commune_stave,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.autopistol,
            chaos_space_marines_weapons.warp_curse_witchfire,
            chaos_space_marines_weapons.warp_curse_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.warp_curse_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.warp_curse_focused_witchfire, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.commune_blade, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.commune_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACCURSED CULTISTS\n- CULTIST MOB" },
            { name: "Faithful Flock", desc: "While this unit is leading a unit and contains a CULT DEMAGOGUE model, models in that unit have a 5+ invulnerable save." },
            { name: "Dark Ritual", desc: "Once per battle, in your Command phase, if this unit contains a CULT DEMAGOGUE model, it can use this ability. If it does, until the end of the turn, this unit can declare a charge in a turn in which it Advanced and each time a model in this unit makes an attack, add 1 to the Hit roll and add 1 to the Wound roll." },
        ],
        keywords: ["Character","Damned","Faction: Heretic Astartes","Infantry","Grenades","Dark Commune","Chaos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.shearing_claws_strike,
            chaos_space_marines_weapons.shearing_claws_sweep,
            chaos_space_marines_weapons.electroscourge,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.heavy_missile_launcher_frag,
            chaos_space_marines_weapons.heavy_missile_launcher_krak,
            chaos_space_marines_weapons.hades_battle_cannon,
            chaos_space_marines_weapons.ectoplasma_destructor,
            chaos_space_marines_weapons.heavy_baleflamer,
            chaos_space_marines_weapons.excruciator_cannon,
            chaos_space_marines_weapons.magma_cutter,
            chaos_space_marines_weapons.hades_lascannon,
            chaos_space_marines_weapons.heavy_reaper_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.heavy_missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.heavy_missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.hades_battle_cannon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.ectoplasma_destructor, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.heavy_baleflamer, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.excruciator_cannon, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.magma_cutter, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.hades_lascannon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.heavy_reaper_autocannon, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.shearing_claws_strike, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.shearing_claws_sweep, selected: true},
            ],
            slot12: [
                {...chaos_space_marines_weapons.electroscourge, selected: true},
            ],
        },
        abilities: [
            { name: "Scuttling Walker", desc: "Each time this unit makes a Normal, Advance or Fall Back move, it can move through models (excluding **Titanic** models) and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
            { name: "Daemonforge", desc: "Each time this unit makes a Dark Pact, until the end of the phase, each time this model makes an attack, re-roll a Wound roll of 1. In addition, once per battle, when this unit makes a Dark Pact, before making the resulting Leadership test, you can declare it will overcharge its daemonforge. If it does: \n- If the resulting Leadership test is failed, this model suffers 3 mortal wounds instead of D3 mortal wounds.\n- Until the end of the phase, each time this model makes an attack, you can re-roll the Wound roll." },
        ],
        keywords: ["Vehicle","Walker","Chaos","Daemon","Faction: Heretic Astartes","Defiler"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Exalted Champion [Crucible]",
        pts: 90,
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
            { name: "Leader", desc: "This model can be attached to the following units: **Chosen, Havocs, Legionaries, Nemesis Claw, Raiders**" },
            { name: "Marked by the Dark Gods", desc: "Each time this model makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit." },
        ],
        keywords: ["Character","Infantry","Grenades","Chaos","Exalted Champion","Faction: Heretic Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Exalted Champion [Legends]",
        pts: 70,
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
            chaos_space_marines_weapons.exalted_weapon_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.exalted_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHOSEN\n- LEGIONARIES\n\nYou can attach this model to one of the above units even if one other CHARACTER model has already been attached to it (a unit cannot have two EXALTED CHAMPIONS attached to it). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Dark Champion", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll." },
            { name: "Aspire to Glory", desc: "Each time this model’s unit makes a Dark Pact, until the end of the phase, add D3 to the Strength characteristic of weapons equipped by this model." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Grenades","Chaos","Exalted Champion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Fabius Bile",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.the_chirurgeon,
            chaos_space_marines_weapons.rod_of_torment,
            chaos_space_marines_weapons.surgeon_acolytes_tools,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.xyclos_needler,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.xyclos_needler, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.the_chirurgeon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.rod_of_torment, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.surgeon_acolytes_tools, selected: true},
            ],
        },
        abilities: [
            { name: "Enhanced Warriors", desc: "If this unit is attached to a unit at the start of the battle, until the end of the battle, add 1 to the Strength characteristic of melee weapons equipped by Bodyguard models in that unit and add 1 to the Toughness characteristic of Bodyguard models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACCURSED CULTISTS\n- CHOSEN\n- CULTIST MOB\n- LEGIONARIES" },
            { name: "Surgeon Acolyte", desc: "Once per turn, when an attack is allocated to a model in this unit, if this unit contains **Fabius Bile**, you can change the Damage characteristic of that attack to 0." },
            { name: "Chirurgeon", desc: "The first time this unit’s **Fabius Bile** model is destroyed, at the end of the phase, roll one D6: on a 2+, set it back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy models, with its full wounds remaining. If that model was attached to a unit when it was destroyed, it must be set up attached to that unit." },
        ],
        keywords: ["Epic Hero"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Fellgor Beastmen",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.chainsword,
            chaos_space_marines_weapons.close_combat_weapon_5,
            chaos_space_marines_weapons.great_weapon,
            chaos_space_marines_weapons.corrupted_stave,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.bolt_pistol_2,
            chaos_space_marines_weapons.plasma_pistol_standard_2,
            chaos_space_marines_weapons.plasma_pistol_supercharge_2,
            chaos_space_marines_weapons.autopistol,
            chaos_space_marines_weapons.corrupted_stave_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.autopistol, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.corrupted_stave_2, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.chainsword, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.close_combat_weapon_5, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.great_weapon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.corrupted_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Bestial Raiders", desc: "If this unit begins the game in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. If this unit is in Strategic Reserves, for the purposes of setting it up on the battlefield, treat the current battle round number as being one higher than it actually is." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Grenades","Chaos","Fellgor Beastmen","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Forgefiend",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.armoured_limbs,
            chaos_space_marines_weapons.forgefiend_jaws,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.ectoplasma_cannon,
            chaos_space_marines_weapons.hades_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.ectoplasma_cannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.hades_autocannon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.armoured_limbs, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.forgefiend_jaws, selected: true},
            ],
        },
        abilities: [
            { name: "Daemonic Ordnance", desc: "Each time this model is selected to shoot, it can use this ability. If it does, until the end of the phase, its ranged weapons have the [DEVASTATING WOUNDS] and [HAZARDOUS] abilities." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Walker","Chaos","Daemon","Forgefiend"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.brutal_weapons,
            chaos_space_marines_weapons.hideous_mutations_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.belly_flamer,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.belly_flamer, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.brutal_weapons, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.hideous_mutations_2, selected: true},
            ],
        },
        abilities: [
            { name: "Fearsome (Aura)", desc: "While an enemy unit is within 6\" of this unit, each time that enemy unit takes a Battle-shock or Leadership test, subtract 1 from the result." },
        ],
        keywords: ["Infantry","Chaos","Nurgle","Gellerpox Infected","Faction: Heretic Astartes","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Haarken Worldclaimer",
        pts: 90,
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
            chaos_space_marines_weapons.hellspear,
            chaos_space_marines_weapons.heralds_talon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.hellspear_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.hellspear_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.hellspear, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.heralds_talon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- RAPTORS" },
            { name: "Head Taker", desc: "While this model is leading a unit, each time this model’s unit ends a Charge move, select one enemy unit within Engagement Range of this model’s unit and roll one D6 for each model in this model’s unit which is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound." },
            { name: "Herald of the Apocalypse (Aura)", desc: "While an enemy unit is within 6\" of this model, in the Battle-shock step of your opponent’s Command phase, if that enemy unit is below its Starting Strength, it must take a Battle-shock test. This ability cannot cause a unit to take two Battle-shock tests in the same phase." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Epic Hero","Fly","Jump Pack","Chaos","Chaos Undivided","Haarken Worldclaimer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Havocs",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.power_fist,
            chaos_space_marines_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.havoc_autocannon,
            chaos_space_marines_weapons.havoc_lascannon,
            chaos_space_marines_weapons.havoc_missile_launcher_frag,
            chaos_space_marines_weapons.havoc_missile_launcher_krak,
            chaos_space_marines_weapons.havoc_reaper_chaincannon,
            chaos_space_marines_weapons.havoc_heavy_bolter,
            chaos_space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.havoc_autocannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.havoc_lascannon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.havoc_missile_launcher_frag, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.havoc_missile_launcher_krak, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.havoc_reaper_chaincannon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.havoc_heavy_bolter, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.meltagun, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.power_fist, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Stabilisation Talons", desc: "Each time a model in this unit makes an attack with a ranged weapon, you can ignore any or all modifiers to the Hit roll and any or all modifiers to the Ballistic Skill characteristic of that weapon." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Havocs"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Helbrute",
        pts: 130,
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
            chaos_space_marines_weapons.close_combat_weapon_6,
            chaos_space_marines_weapons.helbrute_hammer,
            chaos_space_marines_weapons.power_scourge,
            chaos_space_marines_weapons.helbrute_fist,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.missile_launcher_frag,
            chaos_space_marines_weapons.missile_launcher_krak,
            chaos_space_marines_weapons.multi_melta,
            chaos_space_marines_weapons.twin_autocannon,
            chaos_space_marines_weapons.helbrute_plasma_cannon,
            chaos_space_marines_weapons.heavy_flamer,
            chaos_space_marines_weapons.twin_heavy_bolter,
            chaos_space_marines_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.multi_melta, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.twin_autocannon, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.helbrute_plasma_cannon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.twin_heavy_bolter, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.close_combat_weapon_6, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.helbrute_hammer, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.power_scourge, selected: true},
            ],
            slot12: [
                {...chaos_space_marines_weapons.helbrute_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Dark Ascension (Aura)", desc: "While a friendly HERETIC ASTARTES unit is within 6\" of this model, each time that unit makes a Dark Pact, until the end of the phase, its weapons gain both abilities conferred by that pact (instead of only one)." },
            { name: "Devoted to Destruction", desc: "If this model is equipped with 2 melee weapons in addition to its close combat weapon, add 2 to the Attacks characteristics of those 2 weapons." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Walker","Chaos","Helbrute"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Heldrake",
        pts: 205,
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
            chaos_space_marines_weapons.heldrake_claws,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.baleflamer,
            chaos_space_marines_weapons.hades_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.baleflamer, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.hades_autocannon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.heldrake_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Airborne Predator", desc: "Each time this model makes an attack that targets a unit that can FLY, add 1 to the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Fly","Aircraft","Chaos","Daemon","Heldrake"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.armoured_hull,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.autocannon,
            chaos_space_marines_weapons.twin_lascannon,
            chaos_space_marines_weapons.havoc_launcher,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.autocannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.havoc_launcher, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Bomb Rack", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved across during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Chaos","Hell Talon","Faction: Heretic Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.twin_autocannon_2,
            chaos_space_marines_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.twin_autocannon_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can FLY, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Chaos","Hellblade","Faction: Heretic Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Heretic Astartes Daemon Prince",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.hellforged_weapons_strike,
            chaos_space_marines_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Dark Blessing (Aura)", desc: "While a friendly HERETIC ASTARTES INFANTRY unit is within 6\" of this model, each time a ranged attack is allocated to a model in that unit, that model has the Benefit of Cover against that attack." },
            { name: "Ascended Daemon", desc: "Each time this model shoot or fights, while resolving those attacks, you can re-roll one Hit roll and you can re-roll one Wound roll." },
            { name: "Lord of Chaos", desc: "While this model is within 3\" of one or more friendly **Heretic Astartes Infantry** units, this model has the Lone Operative ability." },
        ],
        keywords: ["Faction: Heretic Astartes","Monster","Character","Chaos","Daemon","Daemon Prince"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Heretic Astartes Daemon Prince with wings",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.hellforged_weapons_strike,
            chaos_space_marines_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Flying Horror", desc: "Each time this model ends a Normal or Advance move, select one enemy unit it moved over during that move. That unit must take a Battle-shock test." },
            { name: "Daemonic Destruction", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each of this model’s remaining wounds: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds)." },
        ],
        keywords: ["Faction: Heretic Astartes","Monster","Character","Chaos","Daemon","Fly","Daemon Prince with Wings","Daemon Prince"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Huron Blackheart",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.tyrants_claw_and_exalted_power_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.tyrants_claw_heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.tyrants_claw_heavy_flamer, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.tyrants_claw_and_exalted_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Chosen** \n- **Chaos Terminator Squad** \n- **Legionaries** \n- **Masters of the Maelstrom** \n- **Red Corsairs Raiders**" },
            { name: "Lord of Badab (Aura)", desc: "While a friendly **Heretic Astartes Infantry** unit (excluding Battle-shocked units and **Damned** units) is within 6\" of this model, add 1 to the Objective Control characteristic of models in that unit." },
            { name: "Hamadrya’s Knowledge (Psychic)", desc: "Once per battle round, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model’s unit, if this model’s unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D3+3\"." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Epic Hero","Chaos","Chaos Undivided","Huron Blackheart"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.chainblade,
            chaos_space_marines_weapons.khornate_eviscerator,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.chainblade, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.khornate_eviscerator, selected: true},
            ],
        },
        abilities: [
            { name: "Blood Surge", desc: "In your opponent's Shooting phase, each time an enemy unit has shot, if any models from this unit were destroyed as a result of those attacks, this unit can make a Blood Surge move. To do so, roll one D6 and add 2 to the roll: models in this unit move a number of inches up to this result, but this unit must finish that move as close as possible to the closest enemy unit (excluding **Aircraft**). When doing so, those models can be moved within Engagement Range of that enemy unit. This unit cannot make a Blood Surge move while it is Battle-shocked or within Engagement Range of one or more enemy units, and can only make one Blood Surge move per phase." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Battleline","Grenades","Chaos","Khorne","Berzerkers"],
        pointOptions: [{ models: 10, pts: 360 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Khorne Lord of Skulls",
        pts: 450,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 13,
            saving: 3,
            wounds: 24,
            leader: 6,
            control: 8,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.great_cleaver_of_khorne_strike,
            chaos_space_marines_weapons.great_cleaver_of_khorne_sweep,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.hades_gatling_cannon,
            chaos_space_marines_weapons.skullhurler,
            chaos_space_marines_weapons.gorestorm_cannon,
            chaos_space_marines_weapons.daemongore_cannon,
            chaos_space_marines_weapons.ichor_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.hades_gatling_cannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.skullhurler, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.gorestorm_cannon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.daemongore_cannon, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.ichor_cannon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.great_cleaver_of_khorne_strike, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.great_cleaver_of_khorne_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Plough Through the Enemy", desc: "In the Fight phase, after this model has finished making its attacks, if this model destroyed one or more enemy units this phase, each enemy unit within 6\" of this model must take a Battle-shock test." },
            { name: "Damaged: 1-8 wounds remaining", desc: "While this model has 1-8 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Titanic","Towering","Chaos","Khorne","Daemon","Lord of Skulls"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Kravek Morne",
        pts: null,
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
            chaos_space_marines_weapons.last_argument_and_power_fist,
            chaos_space_marines_weapons.servo_harness,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.baleflamer,
            chaos_space_marines_weapons.combi_bolter,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.baleflamer, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.last_argument_and_power_fist, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.servo_harness, selected: true},
            ],
        },
        abilities: [
            { name: "Headlong Destruction", desc: "Each time a model in this unit makes an attack that targets the closest eligible enemy unit, improve the Armour Penetration characteristic of that attack by 1." },
            { name: "Architect of Ruin", desc: "At the start of the battle, select one unit in your opponent’s army to be this model’s hated foe. Each time this model makes an attack that targets its hated foe, you can re-roll the Wound roll. Each time this model’s hated foe is destroyed, you can select a new unit from your opponent’s army to be its hated foe." },
            { name: "Leader", desc: "This model can be attached to the following units: **Chaos Terminator Squad, Mutilators, Obliterators.**" },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Epic Hero","Chaos","Chaos Undivided","Terminator","Kravek Morne"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "battleline",
        name: "Legionaries",
        pts: 90,
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
            chaos_space_marines_weapons.accursed_weapon_2,
            chaos_space_marines_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.balefire_tome,
            chaos_space_marines_weapons.flamer,
            chaos_space_marines_weapons.havoc_autocannon_2,
            chaos_space_marines_weapons.heavy_bolter_2,
            chaos_space_marines_weapons.lascannon_2,
            chaos_space_marines_weapons.missile_launcher_frag_2,
            chaos_space_marines_weapons.missile_launcher_krak_2,
            chaos_space_marines_weapons.reaper_chaincannon,
            chaos_space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.balefire_tome, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.flamer, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.havoc_autocannon_2, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.lascannon_2, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.missile_launcher_frag_2, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.missile_launcher_krak_2, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.reaper_chaincannon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.meltagun, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.accursed_weapon_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Veterans of the Long War", desc: "Each time a model in this unit targets an enemy unit with a melee attack, re-roll a Wound roll of 1. If that enemy unit is within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Battleline","Chaos","Grenades","Legionaries"],
        pointOptions: [{ models: 6, pts: 170 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Lord Discordant on Helstalker",
        pts: 160,
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
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            chaos_space_marines_weapons.bladed_limbs,
            chaos_space_marines_weapons.impaler_chainglaive,
            chaos_space_marines_weapons.techno_virus_injector,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.helstalker_autocannon,
            chaos_space_marines_weapons.baleflamer,
            chaos_space_marines_weapons.magma_cutter_2,
            chaos_space_marines_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.helstalker_autocannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.baleflamer, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.magma_cutter_2, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.bladed_limbs, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.impaler_chainglaive, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.techno_virus_injector, selected: true},
            ],
        },
        abilities: [
            { name: "Corrupt Machine Spirits", desc: "At the start of your Shooting phase, select one visible enemy **Vehicle** unit within 12\" of this model and roll one D6: on a 2‑3, that enemy unit suffers D3 mortal wounds; on a 4‑5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.’" },
            { name: "Spirit Thief", desc: "At the start of your Shooting phase, select one visible enemy **Vehicle** unit. Until the end of the phase, each time a friendly **Heretic Astartes** model makes an attack that targets that unit, re-roll a Wound roll of 1." },
        ],
        keywords: ["Faction: Heretic Astartes","Mounted","Character","Chaos","Daemon","Lord Discordant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Master of Executions",
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
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.axe_of_dismemberment,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.axe_of_dismemberment, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHOSEN\n- LEGIONARIES\n\nYou can attach this model to one of the above units even if one other CHARACTER model has already been attached to it (a unit cannot have two MASTERS OF EXECUTIONS attached to it). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Warp-sighted Butcher", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll. If that unit is Below Half-strength, you can re-roll the Wound roll as well." },
            { name: "Trophy Taker", desc: "Each time this model destroys an enemy CHARACTER model, you gain 1CP." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Grenades","Chaos","Master of Executions"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Master of Possession",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.staff_of_possession,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.rite_of_possession_witchfire,
            chaos_space_marines_weapons.rite_of_possession_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.rite_of_possession_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.rite_of_possession_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.staff_of_possession, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHOSEN\n- LEGIONARIES\n- POSSESSED" },
            { name: "Daemonkin (Psychic)", desc: "While this model is leading a unit, add 1 to Advance and Charge rolls made for that unit." },
            { name: "Sacrificial Dagger", desc: "Once per phase, when this model is selected to shoot or fight, it can use this ability. If it does, this model’s unit suffers 1 mortal wound and, until the end of the phase, each time this model makes a Psychic Attack, add 1 to the Hit roll and add 1 to the Wound roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Psyker","Chaos","Master of Possession"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Masters of the Maelstrom",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.reductor_array,
            chaos_space_marines_weapons.force_stave,
            chaos_space_marines_weapons.axe_of_ending,
            chaos_space_marines_weapons.power_sabre,
            chaos_space_marines_weapons.bionic_gauntlet,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.absolver_bolt_pistol,
            chaos_space_marines_weapons.mind_wrench,
            chaos_space_marines_weapons.bolt_pistol_3,
            chaos_space_marines_weapons.laspistol,
            chaos_space_marines_weapons.londaxi_maimer,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.absolver_bolt_pistol, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.mind_wrench, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.bolt_pistol_3, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.laspistol, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.londaxi_maimer, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.reductor_array, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.force_stave, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.axe_of_ending, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.power_sabre, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.bionic_gauntlet, selected: true},
            ],
        },
        abilities: [
            { name: "Choice Samples", desc: "While this unit's Garreon the Corpsemaster model is on the battlefield, in your Command phase, select one of the following: you can return one destroyed model (excluding **Character** models) to this unit, or, if one or more **Heretic Astartes Infantry** units from your army are below Starting Strength and within 3\" of this unit, you gain 1CP." },
            { name: "Fleet Command", desc: "After both players have deployed their armies, if this unit is on the battlefield (or any **Transport** it is embarked within is on the battlefield) select up to three **Heretic Astartes** units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
            { name: "Plunder", desc: "Once per battle, after this unit ends a Normal move, you can select one visible enemy unit within 12\" of it and roll one D6: on a 2+, that enemy unit suffers D3+1 mortal wounds." },
            { name: "Masters of the Maelstrom", desc: "At the start of the Declare Battle Formations step, this unit can join one of the following units. This unit then counts as part of that unit for the rest of the battle, and that unit’s Starting Strength is increased accordingly.\n- **Chosen, Legionaries, Red Corsairs Raiders**\n\n\nThis unit cannot join an Attached unit, and only **Huron Blackheart** can join a unit this unit has joined." },
        ],
        keywords: ["Epic Hero","Infantry","Grenades","Chaos","Chaos Undivided","Masters of the Maelstrom","Faction: Heretic Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Maulerfiend",
        pts: 130,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.maulerfiend_fists,
            chaos_space_marines_weapons.lasher_tendrils,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.magma_cutter_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.magma_cutter_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.maulerfiend_fists, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.lasher_tendrils, selected: true},
            ],
        },
        abilities: [
            { name: "Siege Crawler", desc: "You can ignore any or all modifiers to this model's Move characteristic and to Advance and Charge rolls made for it." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Walker","Chaos","Daemon","Maulerfiend"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Mutilators",
        pts: 200,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            chaos_space_marines_weapons.fleshmetal_weapons_rending_strikes,
            chaos_space_marines_weapons.fleshmetal_weapons_clawed_sweeps,
            chaos_space_marines_weapons.fleshmetal_weapons_thunderous_blows,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.fleshmetal_weapons_rending_strikes, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.fleshmetal_weapons_clawed_sweeps, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.fleshmetal_weapons_thunderous_blows, selected: true},
            ],
        },
        abilities: [
            { name: "Crushing Charge", desc: "You can re-roll charge rolls made for this unit, and each time this unit makes a Charge move, select one enemy unit and roll one D6 for each model in this unit that is within Engagement Range of that unit: for each 4+, that enemy unit suffers D3 mortal wounds." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Daemon","Mutilators"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.diseased_claws_and_fangs,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.diseased_claws_and_fangs, selected: true},
            ],
        },
        abilities: [
            { name: "Mischief Makers (Aura)", desc: "While an enemy unit (excluding MONSTERS and VEHICLES) is within 6\" of this unit, each time a model in that unit makes a melee attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Swarm","Chaos","Nurgle","Mutoid Vermin","Faction: Heretic Astartes","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Negavolt Cultists [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 7,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.electro_goads,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.electro_goads, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Voltagheist Field", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
            { name: "Servants of the Abyss", desc: "If a unit from your army with the Leader ability can be attached to a CULTIST MOB, it can be attached to this unit instead." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Negavolt Cultists","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Nemesis Claw",
        pts: 110,
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
            chaos_space_marines_weapons.nostraman_chainblade,
            chaos_space_marines_weapons.nostraman_chainglaive,
            chaos_space_marines_weapons.power_fist,
            chaos_space_marines_weapons.close_combat_weapon,
            chaos_space_marines_weapons.paired_accursed_weapons_3,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.heavy_bolter_2,
            chaos_space_marines_weapons.missile_launcher_frag_2,
            chaos_space_marines_weapons.missile_launcher_krak_2,
            chaos_space_marines_weapons.flamer,
            chaos_space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.heavy_bolter_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.missile_launcher_frag_2, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.missile_launcher_krak_2, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.flamer, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.meltagun, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.nostraman_chainblade, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.nostraman_chainglaive, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.power_fist, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.close_combat_weapon, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.paired_accursed_weapons_3, selected: true},
            ],
        },
        abilities: [
            { name: "Voice eater", desc: "Enemy units (excluding MONSTERS and VEHICLES) cannot be targeted with Stratagems while they are within Engagement Range of the bearer’s unit." },
            { name: "Visions of Suffering (Psychic)", desc: "Each time a model in this unit makes an attack that targets an enemy unit that is below its Starting Strength, add 1 to the Hit roll. If that enemy unit is Below Half-strength, add 1 to the Wound roll as well." },
            { name: "Attached Unit", desc: "If a CHARACTER UNIT unit from your army with the Leader ability (excluding EPIC HEROES) can be attached to a LEGIONARIES unit, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Psyker","Grenades","Nemesis Claw","Faction: Heretic Astartes","Chaos"],
        pointOptions: [{ models: 6, pts: 190 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Noctilith Crown",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 11,
            saving: 3,
            wounds: 14,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            chaos_space_marines_weapons.lashing_warp_energies,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.lashing_warp_energies, selected: true},
            ],
        },
        abilities: [
            { name: "Malevolent Locus (Aura)", desc: "While a friendly HERETIC ASTARTES unit is within 9\" of this Fortification, improve that unit's Leadership characteristic by 1." },
            { name: "Malign Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Faction: Heretic Astartes","Fortification","Chaos","Noctilith Crown"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Noise Marines",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.power_sword,
            chaos_space_marines_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.screamer_pistol,
            chaos_space_marines_weapons.blastmaster_varied_frequency,
            chaos_space_marines_weapons.blastmaster_single_frequency,
            chaos_space_marines_weapons.sonic_blaster,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.screamer_pistol, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.blastmaster_varied_frequency, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.blastmaster_single_frequency, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.sonic_blaster, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.power_sword, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Terrifying Crescendo", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next Shooting phase, each time a Battle-shock or Leadership test is taken for that enemy unit, subtract 1 from that test." },
        ],
        keywords: ["Infantry","Chaos","Slaanesh","Faction: Heretic Astartes","Noise Marines","Cults of the Dark Gods"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Obliterators",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 4,
            tough: 7,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.crushing_fists,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.fleshmetal_guns_focused_malice,
            chaos_space_marines_weapons.fleshmetal_guns_ruinous_salvo,
            chaos_space_marines_weapons.fleshmetal_guns_warp_hail,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.fleshmetal_guns_focused_malice, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.fleshmetal_guns_ruinous_salvo, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.fleshmetal_guns_warp_hail, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.crushing_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Warp Rift Firepower", desc: "Once per battle, during the Shooting phase, this unit can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [INDIRECT FIRE] ability." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Daemon","Obliterators"],
        pointOptions: [{ models: 3, pts: 360 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            chaos_space_marines_weapons.power_fist_4,
            chaos_space_marines_weapons.plague_knives,
            chaos_space_marines_weapons.bubotic_weapons,
            chaos_space_marines_weapons.heavy_plague_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.plague_bolt_pistol,
            chaos_space_marines_weapons.blight_launcher,
            chaos_space_marines_weapons.plague_spewer,
            chaos_space_marines_weapons.plague_belcher,
            chaos_space_marines_weapons.boltgun,
            chaos_space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.plague_bolt_pistol, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.blight_launcher, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plague_spewer, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plague_belcher, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.boltgun, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.meltagun, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.power_fist_4, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.plague_knives, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.bubotic_weapons, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.heavy_plague_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Infused with the Blessings of Nurgle", desc: "In your Shooting phase, each time this unit is selected to shoot, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next turn, that unit is Afflicted." },
            { name: "Icon of Despair", desc: "While an enemy unit is within 6\" of the bearer, worsen the Leadership characteristic of models in that unit by 1." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Battleline","Grenades","Chaos","Nurgle","Plague Marines"],
        pointOptions: [{ models: 6, pts: 130 }, { models: 8, pts: 190 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Possessed",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
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
            chaos_space_marines_weapons.hideous_mutations_3,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.hideous_mutations_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Unholy Bloodshed", desc: "Once per battle, when this unit makes a Dark Pact, until the end of the phase, weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Daemon","Possessed"],
        pointOptions: [{ models: 6, pts: 240 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Raptors",
        pts: 110,
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
            chaos_space_marines_weapons.mutations,
            chaos_space_marines_weapons.heavy_melee_weapon,
            chaos_space_marines_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.meltagun, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.mutations, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.heavy_melee_weapon, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Fearsome (Aura)", desc: "While an enemy unit is within 6\" of this unit, each time that enemy unit takes a Battle-shock or Leadership test, subtract 1 from the result." },
            { name: "Terrifying Assault", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Fly","Jump Pack","Chaos","Raptors","Grenades"],
        pointOptions: [{ models: 6, pts: 210 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Red Corsairs Raiders",
        pts: 110,
        units: 1,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.reavers_blade,
            chaos_space_marines_weapons.power_fist,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.hand_flamer,
            chaos_space_marines_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.hand_flamer, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.meltagun, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.reavers_blade, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Trophy Takers", desc: "The first time this unit destroys an enemy unit, until the end of the battle, while this unit is not Battle-shocked, add 1 to the Objective Control characteristic of models in this unit." },
            { name: "Attached Unit", desc: "If a **Character** unit from your army with the Leader ability can be attached to a **Legionaries** unit, it can be attached to this unit instead." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Grenades","Red Corsairs Raiders","Chaos"],
        pointOptions: [{ models: 6, pts: 220 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Red Corsairs Reave-captain",
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
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.power_sword_2,
            chaos_space_marines_weapons.power_maul,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.power_sword_2, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.power_maul, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Brutal Raider", desc: "Each time this model's unit ends a Charge move, until the end of the turn, add 1 to the Strength characteristic of melee weapons equipped by this model and improve the Armour Penetration characteristic of those weapons by 1." },
            { name: "Raider's Due", desc: "Each time this unit declares a Charge that targets one or more units that are within range of one or more objective markers, you can re-roll the Charge roll." },
            { name: "Leader", desc: "This model can be attached to the following units: **Chosen, Legionaries, Red Corsairs Raiders**" },
        ],
        keywords: ["Faction: Heretic Astartes","Character","Infantry","Chaos","Red Corsairs Reave-captain"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Renegade Enforcer [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.enforcer_melee_weapon,
            chaos_space_marines_weapons.power_weapon,
            chaos_space_marines_weapons.power_fist_5,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.enforcer_pistol,
            chaos_space_marines_weapons.autogun,
            chaos_space_marines_weapons.lasgun,
            chaos_space_marines_weapons.shotgun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.enforcer_pistol, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.autogun, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.lasgun, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.shotgun, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.enforcer_melee_weapon, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.power_weapon, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.power_fist_5, selected: true},
            ],
        },
        abilities: [
            { name: "Brutal Example", desc: "While this model is leading a unit, you can target that unit with the Insane Bravery Stratagem for 0CP, and can do so even if another unit from your army has already been targeted with that Stratagem this phase. Each time you use this ability, one Bodyguard model in that unit is destroyed." },
            { name: "Enforcer", desc: "This model's unit is eligible to declare a charge in a turn in which it Fell Back." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- TRAITOR GUARDSMEN SQUAD\n- RENEGADE HEAVY WEAPONS SQUAD" },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Grenades","Chaos","Renegade Enforcer","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Renegade Heavy Weapons Squad [Legends]",
        pts: 75,
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
            chaos_space_marines_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.renegade_firearm,
            chaos_space_marines_weapons.heavy_stubber,
            chaos_space_marines_weapons.heavy_bolter_3,
            chaos_space_marines_weapons.autocannon_2,
            chaos_space_marines_weapons.lascannon_3,
            chaos_space_marines_weapons.missile_launcher_frag_3,
            chaos_space_marines_weapons.missile_launcher_krak_3,
            chaos_space_marines_weapons.mortar,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.renegade_firearm, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.heavy_stubber, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.heavy_bolter_3, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.autocannon_2, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.lascannon_3, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.missile_launcher_frag_3, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.missile_launcher_krak_3, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.mortar, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Covering Fire", desc: "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Grenades","Chaos","Renegade Heavy Weapons Squad","Damned"],
        pointOptions: [],
        transport: "For the purposes of embarking within TRANSPORTS, each Renegade Heavy Weapons Team model counts as two models.",
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Renegade Ogryn Beast Handler [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.mauler_goad_and_ripper_claw,
            chaos_space_marines_weapons.befouled_fangs_and_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.mauler_goad_and_ripper_claw, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.befouled_fangs_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Beastmaster", desc: "While this unit contains an Ogryn Pack Master model, you can re-roll Charge rolls made for this unit, and each time a Chaos Mauler Hound model in this unit makes an attack, re-roll a Hit roll of 1." },
        ],
        keywords: ["Faction: Heretic Astartes","Beast","Chaos","Renegade Ogryn Beast Handler","Damned"],
        pointOptions: [{ models: 4, pts: 70 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Renegade Ogryn Brutes [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.ogryn_weapon,
            chaos_space_marines_weapons.ogryn_power_drill,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.ogryn_weapon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.ogryn_power_drill, selected: true},
            ],
        },
        abilities: [
            { name: "Ogryn Combat Stimms", desc: "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Renegade Ogryn Brutes","Damned"],
        pointOptions: [],
        transport: "For the purposes of embarking within TRANSPORTS, each Renegade Ogryn Brute model counts as one TERMINATOR model.",
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Renegade Plague Ogryns [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.ogryn_plague_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.ogryn_plague_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Wall of Muscle", desc: "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Chaos","Nurgle","Renegade Plague Ogryns","Damned"],
        pointOptions: [],
        transport: "For the purposes of embarking within TRANSPORTS, each Renegade Plague Ogryn model counts as one TERMINATOR model.",
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Rogue Psyker [Legends]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
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
            chaos_space_marines_weapons.chaos_stave,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.laspistol_2,
            chaos_space_marines_weapons.psychic_strike_focused_witchfire,
            chaos_space_marines_weapons.psychic_strike_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.laspistol_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.psychic_strike_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.psychic_strike_witchfire, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.chaos_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACCURSED CULTISTS\n- CULTIST MOB\n- NEGAVOLT CULTISTS" },
            { name: "Cursed Wardings (Psychic)", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks." },
            { name: "Psychic Barrier (Psychic)", desc: "At the start of your opponent’s Shooting phase, you can roll one D6: on a 1, this PSYKER’s unit suffers D3 mortal wounds; on a 2+, until the end of the phase, models in this PSYKER’s unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Psyker","Chaos","Rogue Psyker","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "battleline",
        name: "Rubric Marines",
        pts: 100,
        units: 1,
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
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.force_weapon,
            chaos_space_marines_weapons.close_combat_weapon_7,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.malefic_curse,
            chaos_space_marines_weapons.inferno_bolt_pistol,
            chaos_space_marines_weapons.warpflame_pistol,
            chaos_space_marines_weapons.inferno_boltgun,
            chaos_space_marines_weapons.warpflamer,
            chaos_space_marines_weapons.soulreaper_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.malefic_curse, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.inferno_bolt_pistol, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.warpflame_pistol, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.inferno_boltgun, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.warpflamer, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.soulreaper_cannon, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.force_weapon, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.close_combat_weapon_7, selected: true},
            ],
        },
        abilities: [
            { name: "Bringers of Change", desc: "Each time a model in this unit makes a ranged attack, re-roll a Wound roll of 1. If the target of that attack is within range of an objective marker you do not control, you can re-roll the Wound roll instead." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Icon of Flame", desc: "Ranged weapons equipped by models in this unit (excluding **Characters**) have the [Ignores Cover] ability." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Battleline","Chaos","Tzeentch","Rubric Marines","Rubricae"],
        pointOptions: [{ models: 5, pts: 190 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Sorcerer",
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
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.force_weapon_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.infernal_gaze_witchfire,
            chaos_space_marines_weapons.infernal_gaze_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.force_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHOSEN\n- LEGIONARIES" },
            { name: "Prescience (Psychic)", desc: "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll." },
            { name: "Gift of Chaos (Psychic)", desc: "Each time this model is selected to shoot or fight, after resolving its attacks, select one enemy unit hit by one or more of those attacks that had the [PSYCHIC] ability. That unit must take a Leadership test: if that test is failed, that unit suffers D3 mortal wounds." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Psyker","Grenades","Chaos","Sorcerer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Sorcerer in Terminator Armour",
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
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.force_weapon_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter_2,
            chaos_space_marines_weapons.combi_weapon,
            chaos_space_marines_weapons.infernal_gaze_witchfire,
            chaos_space_marines_weapons.infernal_gaze_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter_2, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.force_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- CHAOS TERMINATOR SQUAD" },
            { name: "Warptime (Psychic)", desc: "While this model is leading a unit, you can re-roll Advance and Charge rolls made for that unit." },
            { name: "Death Hex (Psychic)", desc: "At the start of your Shooting phase, one PSYKER with this ability can use it. If it does, select one enemy unit within 12\" of and visible to that PSYKER and roll one D6: on a 1, that PSYKER's unit suffers D3 mortal wounds; on a 2+, until the start of your next Movement phase, each time an attack targets that enemy unit, improve the Armour Penetration  characteristic of that attack by 1." },
            { name: "Chaos Familiar", desc: "Once per battle, when an attack is allocated to the bearer, you can change the Damage characteristic to 0." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Psyker","Chaos","Terminator","Sorcerer in Terminator Armour"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Sorcerer on Bike [Legends]",
        pts: 75,
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
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.astartes_chainsword_2,
            chaos_space_marines_weapons.force_weapon_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.combi_weapon_3,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.infernal_gaze_witchfire,
            chaos_space_marines_weapons.infernal_gaze_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_weapon_3, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.force_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHAOS BIKERS" },
            { name: "Prescience (Psychic)", desc: "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll." },
            { name: "Unholy Power", desc: "Each time this model's unit makes a Dark Pact, until the end of the phase, each time this model makes a Psychic Attack, add 1 to the Wound roll." },
        ],
        keywords: ["Faction: Heretic Astartes","Mounted","Character","Grenades","Psyker","Chaos","Sorcerer on Bike"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Sorcerer on Disc of Tzeentch [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.astartes_chainsword_2,
            chaos_space_marines_weapons.force_weapon_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.combi_weapon_3,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.infernal_gaze_witchfire,
            chaos_space_marines_weapons.infernal_gaze_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_weapon_3, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.force_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- RUBRIC MARINES" },
            { name: "Flames of Change (Psychic)", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability." },
            { name: "Altered Reality (Psychic)", desc: "Once per battle round, after a Hit roll, a Wound roll or a saving throw is made for this model, you can change the result of that roll to a 6." },
        ],
        keywords: ["Infantry","Character","Grenades","Psyker","Fly","Chaos","Tzeentch","Sorcerer","Disc of Tzeentch","Faction: Heretic Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
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
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.nurglings_claws_and_teeth_2,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.astartes_chainsword_2,
            chaos_space_marines_weapons.force_weapon_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.combi_weapon,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.infernal_gaze_witchfire,
            chaos_space_marines_weapons.infernal_gaze_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.nurglings_claws_and_teeth_2, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot12: [
                {...chaos_space_marines_weapons.force_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- PLAGUE MARINES" },
            { name: "Gift of Poxes (Psychic)", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Feculent Despair (Aura, Psychic)", desc: "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock test, subtract 1 from that test." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Grenades","Psyker","Chaos","Nurgle","Sorcerer","Palanquin of Nurgle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Sorcerer on Steed of Slaanesh [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 14,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_space_marines_weapons.lashing_tongue,
            chaos_space_marines_weapons.accursed_weapon,
            chaos_space_marines_weapons.power_fist_2,
            chaos_space_marines_weapons.astartes_chainsword_2,
            chaos_space_marines_weapons.force_weapon_2,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.combi_bolter,
            chaos_space_marines_weapons.combi_weapon_3,
            chaos_space_marines_weapons.bolt_pistol,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
            chaos_space_marines_weapons.infernal_gaze_witchfire,
            chaos_space_marines_weapons.infernal_gaze_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.combi_bolter, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.combi_weapon_3, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.lashing_tongue, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.accursed_weapon, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.power_fist_2, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.astartes_chainsword_2, selected: true},
            ],
            slot12: [
                {...chaos_space_marines_weapons.force_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHAOS BIKERS" },
            { name: "Infernal Speed", desc: "While this model is leading a unit, change the Move characteristic of models in that unit to 14\"." },
            { name: "Dark Favour (Psychic)", desc: "While this model is leading a unit, models in that unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Mounted","Character","Grenades","Psyker","Chaos","Slaanesh","Sorcerer","Steed of Slaanesh"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Sorcerous Champion [Crucible]",
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
            { name: "Leader", desc: "This model can be attached to the following units: **Chosen, Havocs, Legionaries, Nemesis Claw, Raiders**" },
            { name: "Gift of Chaos (Psychic)", desc: "Each time this model is selected to shoot or fight, after resolving its attacks, select one enemy unit hit by one or more of those attacks that had the [PSYCHIC} ability. That unit must take a Leadership test. If it fails, it suffers D3 mortal wounds." },
        ],
        keywords: ["Character","Infantry","Grenades","Chaos","Psyker","Sorcerous Champion","Faction: Heretic Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Soul Forge Tyrant [Crucible]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 4,
            invuln: 5
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Skulking Nightmare", desc: "While this model is within 3\" of one or more friendly **Heretic Astartes Infantry** units, this model has the Lone Operative ability." },
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Character","Chaos","Mounted","Daemon","Helstalker","Faction: Heretic Astartes","Soul Forge Tyrant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Traitor Enforcer",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.power_fist_5,
            chaos_space_marines_weapons.ogryn_weapons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.power_fist_5, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.ogryn_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This unit can be attached to the following unit:\n- TRAITOR GUARDSMAN SQUAD" },
            { name: "Brutal Example", desc: "Once per turn, while this unit is leading a unit and contains a TRAITOR ENFORCER model, you can target that unit with the Fire Overwatch Stratagem for 0CP, and can do so even if you have already targeted a different unit from your army with that Stratagem this phase. Each time you use this ability, one Bodyguard model in that unit is destroyed." },
            { name: "Mutated Bodyguard", desc: "While this unit contains a Traitor Ogryn model, CHARACTER models in this unit have the Feel No Pain 4+ ability." },
            { name: "Invulnerable Save", desc: "This unit's TRAITOR ENFORCER model has a 5+ invulnerable save" },
        ],
        keywords: ["Character","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Traitor Guardsmen Squad",
        pts: 70,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            chaos_space_marines_weapons.chainsword_2,
            chaos_space_marines_weapons.power_weapon_2,
            chaos_space_marines_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.corrupted_pistol,
            chaos_space_marines_weapons.boltgun_2,
            chaos_space_marines_weapons.lasgun_2,
            chaos_space_marines_weapons.flamer,
            chaos_space_marines_weapons.plasma_gun_standard,
            chaos_space_marines_weapons.plasma_gun_supercharge,
            chaos_space_marines_weapons.meltagun_2,
            chaos_space_marines_weapons.cultist_sniper_rifle,
            chaos_space_marines_weapons.cultist_grenade_launcher_frag,
            chaos_space_marines_weapons.cultist_grenade_launcher_krak,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.corrupted_pistol, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.boltgun_2, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.lasgun_2, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.flamer, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.plasma_gun_standard, selected: true},
            ],
            slot6: [
                {...chaos_space_marines_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot7: [
                {...chaos_space_marines_weapons.meltagun_2, selected: true},
            ],
            slot8: [
                {...chaos_space_marines_weapons.cultist_sniper_rifle, selected: true},
            ],
            slot9: [
                {...chaos_space_marines_weapons.cultist_grenade_launcher_frag, selected: true},
            ],
            slot10: [
                {...chaos_space_marines_weapons.cultist_grenade_launcher_krak, selected: true},
            ],
            slot11: [
                {...chaos_space_marines_weapons.chainsword_2, selected: true},
            ],
            slot12: [
                {...chaos_space_marines_weapons.power_weapon_2, selected: true},
            ],
            slot13: [
                {...chaos_space_marines_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Twisted Defence Force", desc: "While this unit is within range of an objective marker, each time a ranged attack targets this unit, models in this unit have the Benefit of Cover against that attack." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Grenades","Chaos","Traitor Guardsmen Squad","Damned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Vashtorr the Arkifane",
        pts: 175,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 2,
            wounds: 14,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            chaos_space_marines_weapons.vashtorrs_hammer_strike,
            chaos_space_marines_weapons.vashtorrs_hammer_sweep,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.vashtorrs_claw,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.vashtorrs_claw, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.vashtorrs_hammer_strike, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.vashtorrs_hammer_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Unholy Mechanisms (Aura)", desc: "While a friendly **Daemon Vehicle** unit is within 6\" of this model, add 2 to the Strength characteristic of weapons equipped by models in that unit." },
            { name: "Reorder Reality", desc: "Each time an enemy unit within 18\" of this model targets this model, subtract 1 from the Hit roll and, until the end of the phase, that enemy unit’s ranged weapons have the [HAZARDOUS] ability." },
            { name: "Indentured Daemon Engines", desc: "While this model is within 3\" of one or more friendly **Daemon Vehicle** units, this model has the Lone Operative ability." },
        ],
        keywords: ["Faction: Heretic Astartes","Monster","Character","Epic Hero","Fly","Chaos","Daemon","Vashtorr the Arkifane"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Venomcrawler",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 9,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.soulflayer_tendrils_and_claws,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.excruciator_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.excruciator_cannon, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.soulflayer_tendrils_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save" },
            { name: "Soul Eater", desc: "At the end of the Fight phase, if one or more attacks made by this model that phase destroyed one or more enemy units, until the end of the battle, add 1 to the Attacks characteristic of this model’s weapons." },
        ],
        keywords: ["Faction: Heretic Astartes","Vehicle","Walker","Chaos","Daemon","Venomcrawler"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "other",
        name: "Warp Talons",
        pts: 125,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_space_marines_weapons.warp_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.warp_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Warp Strike", desc: "At the end of the Fight phase, if this unit destroyed one or more enemy units this phase and is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves." },
            { name: "Invulnerable Save (5+)", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Fly","Jump Pack","Chaos","Daemon","Warp Talons","Grenades"],
        pointOptions: [{ models: 6, pts: 270 }],
        transport: null,
    },
    {
        army: "chaos_space_marines",
        class: "characters",
        name: "Warpsmith",
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
            chaos_space_marines_weapons.forge_weapon,
        ],
        rangedWeapons: [
            chaos_space_marines_weapons.flamer_tendril,
            chaos_space_marines_weapons.melta_tendril,
            chaos_space_marines_weapons.plasma_pistol_standard,
            chaos_space_marines_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...chaos_space_marines_weapons.flamer_tendril, selected: true},
            ],
            slot2: [
                {...chaos_space_marines_weapons.melta_tendril, selected: true},
            ],
            slot3: [
                {...chaos_space_marines_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...chaos_space_marines_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...chaos_space_marines_weapons.forge_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Warpsmith", desc: "While this model is within 3\" of one or more friendly **Heretic Astartes Vehicle** units, this model has the Lone Operative ability." },
            { name: "Master of Mechanisms", desc: "In your Command phase, select one friendly **Heretic Astartes Vehicle** model within 3\" of this model. That ** Vehicle** model regains up to D3 lost wounds and, until the start of your next Command phase, each time that **Vehicle** makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per Command phase." },
            { name: "Enrage Machine Spirits", desc: "At the end of your Movement phase, select one enemy **Vehicle** unit within 12\" of this model. That unit must take a Battle-shock test." },
            { name: "Leader", desc: "This model can be attached to the following units: **Chosen, Havocs, Legionaires**" },
        ],
        keywords: ["Faction: Heretic Astartes","Infantry","Character","Chaos","Warpsmith"],
        pointOptions: [],
        transport: null,
    },
]

export default chaos_space_marines_army
