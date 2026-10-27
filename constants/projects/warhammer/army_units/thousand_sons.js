// AUTO-GENERATED units for Thousand Sons (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import thousand_sons_weapons from "../weapons/thousand_sons"

const thousand_sons_army = [
    {
        army: "thousand_sons",
        class: "characters",
        name: "Ahriman",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.black_staff_of_ahriman,
        ],
        rangedWeapons: [
            thousand_sons_weapons.transmogrifying_blast,
            thousand_sons_weapons.inferno_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.transmogrifying_blast, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.inferno_bolt_pistol, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.black_staff_of_ahriman, selected: true},
            ],
        },
        abilities: [
            { name: "Scryer of Fates (Psychic)", desc: "if your army includes this model, after both players have deployed their armies, you can select up to 3 **Thousand Sons** units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
            { name: "Arch-Sorcerer of Tzeentch (Psychic)", desc: "Each time this model attempts a Ritual, add 1 to the Psychic test result." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Rubric Marines, Tzaangor Enlightened**" },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Character","Epic Hero","Psyker","Chaos","Tzeentch","Fly","Mounted","Ahriman"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "battleline",
        name: "Blue Horrors",
        pts: 90,
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
            leader: 8,
            control: 0,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.yellow_claws_ref_only,
            thousand_sons_weapons.blue_claws,
        ],
        rangedWeapons: [
            thousand_sons_weapons.coruscating_yellow_flames_ref_only,
            thousand_sons_weapons.coruscating_blue_flames,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.coruscating_yellow_flames_ref_only, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.coruscating_blue_flames, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.yellow_claws_ref_only, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.blue_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Split", desc: "Each time a Blue Horror model in this unit is destroyed, after the attacking unit has finished making its attacks, if this unit is not destroyed, roll one D6 for that model. On a 4+, add one Brimstone Horror model to this unit." },
            { name: "Sullen Malevolence (Aura)", desc: "While an enemy unit is within 6\" of this unit, if this unit contains one or more **Blue Horror** models, worsen the Leadership characteristic of models in that enemy unit by 1." },
            { name: "Exploding Horrors", desc: "Each time this unit is selected to fight, you can select one enemy unit within Engagement Range of it, then select one or more **Brimstone Horror** models in this unit. For each **Brimstone Horror** model you select, roll one D6: on a 4+, that model is destroyed and that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Infantry","Battleline","Chaos","Daemon","Tzeentch","Summoned","Horrors","Faction: Scintillating Legions"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Brayherd Chieftain [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 5,
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
            { name: "Leader", desc: "This model can be attached to the following unit: **Tzaangors**" },
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
            { name: "Fate's Guide", desc: "If this unit starts the game in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third turn, regardless of any mission rules. If this unit is in Strategic Reserves, for the purposes of setting up this unit on the battlefield, treat the current battle round number as being one higher than it actually is." },
        ],
        keywords: ["Faction: Thousand Sons","Character","Infantry","Chaos","Tzeentch","Mutant","Brayherd Chieftain"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Brayherd Shaman [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 5,
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
            { name: "Leader", desc: "This model can be attached to the following unit: **Tzaangors**" },
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
            { name: "Bestial Prophet", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll." },
        ],
        keywords: ["Faction: Thousand Sons","Character","Infantry","Chaos","Tzeentch","Mutant","Psyker","Brayherd Shaman"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            thousand_sons_weapons.soulshatter_lascannon,
            thousand_sons_weapons.havoc_launcher,
            thousand_sons_weapons.twin_inferno_heavy_bolter,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.inferno_combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.soulshatter_lascannon, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.twin_inferno_heavy_bolter, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.inferno_combi_weapon, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this **Transport** after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Transport","Smoke","Chaos","Tzeentch","Land Raider"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Thousand Sons Infantry** models. Each **Terminator** model takes up the space of 2 models.",
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.close_combat_weapon,
            thousand_sons_weapons.astartes_chainsword,
            thousand_sons_weapons.accursed_weapon,
            thousand_sons_weapons.power_fist,
            thousand_sons_weapons.paired_accursed_weapons,
        ],
        rangedWeapons: [
            thousand_sons_weapons.bolt_pistol,
            thousand_sons_weapons.plasma_pistol_standard,
            thousand_sons_weapons.plasma_pistol_supercharge,
            thousand_sons_weapons.combi_bolter,
            thousand_sons_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.combi_bolter, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.combi_weapon, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.close_combat_weapon, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.astartes_chainsword, selected: true},
            ],
            slot8: [
                {...thousand_sons_weapons.accursed_weapon, selected: true},
            ],
            slot9: [
                {...thousand_sons_weapons.power_fist, selected: true},
            ],
            slot10: [
                {...thousand_sons_weapons.paired_accursed_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- CHOSEN\n- LEGIONARIES\n- RUBRIC MARINES" },
            { name: "Lord of Fate", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds." },
            { name: "Lord of Chaos", desc: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
        ],
        keywords: ["Infantry","Character","Grenades","Chaos","Tzeentch","Chaos Lord","Disc of Tzeentch"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Chaos Predator Annihilator",
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
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            thousand_sons_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.predator_twin_lascannon,
            thousand_sons_weapons.havoc_launcher,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.inferno_combi_weapon,
            thousand_sons_weapons.inferno_heavy_bolter,
            thousand_sons_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.predator_twin_lascannon, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.inferno_combi_weapon, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.inferno_heavy_bolter, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.lascannon, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Ensorcelled Annihilation", desc: "Each time this model makes a ranged attack that targets a **Monster** or **Vehicle** unit that was hit by one or more Psychic attacks made by a **Thousand Sons Psyker** unit from your army this turn, you can re-roll the Hit roll and you can re-roll the Damage roll." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Smoke","Chaos","Tzeentch","Predator Annihilator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Chaos Predator Destructor",
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
            wounds: 11,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            thousand_sons_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.predator_autocannon,
            thousand_sons_weapons.havoc_launcher,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.inferno_combi_weapon,
            thousand_sons_weapons.inferno_heavy_bolter,
            thousand_sons_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.predator_autocannon, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.inferno_combi_weapon, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.inferno_heavy_bolter, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.lascannon, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Ensorcelled Destruction", desc: "Each time this model makes a ranged attack that targets a unit (excluding **Monsters** and **Vehicles**) that was hit by one or more Psychic attacks made by a **Thousand Sons Psyker** unit from your army this turn, improve the Strength and Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Smoke","Chaos","Tzeentch","Predator Destructor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "transports",
        name: "Chaos Rhino",
        pts: 90,
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
            thousand_sons_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.havoc_launcher,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.inferno_combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.havoc_launcher, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.inferno_combi_weapon, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Sorcerous Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this **Transport** this turn makes a Psychic attack that targets that enemy unit, add 1 to the Hit roll and add 1 to the Wound roll." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Transport","Dedicated Transport","Chaos","Tzeentch","Rhino","Smoke"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Thousand Sons Infantry** models (excluding **Terminator** models).",
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Chaos Spawn",
        pts: 65,
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
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.hideous_mutations,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.hideous_mutations, selected: true},
            ],
        },
        abilities: [
            { name: "Regenerating Monstrosities", desc: "At the start of each player’s Command phase, one model in this unit regains up to 3 lost wounds." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Beast","Chaos","Tzeentch","Spawn","Mutant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Chaos Spawn (Flesh Change)",
        pts: 65,
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
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.hideous_mutations,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.hideous_mutations, selected: true},
            ],
        },
        abilities: [
            { name: "Regenerating Monstrosities", desc: "At the start of each player’s Command phase, one model in this unit regains up to 3 lost wounds." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Beast","Chaos","Tzeentch","Spawn","Mutant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.demolisher_cannon,
            thousand_sons_weapons.havoc_launcher,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.inferno_combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.demolisher_cannon, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.inferno_combi_weapon, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Siege Shield", desc: "When making ranged attacks with its demolisher cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Smoke","Chaos","Tzeentch","Vindicator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Daemon Prince of Tzeentch",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 10,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.hellforged_weapons_strike,
            thousand_sons_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            thousand_sons_weapons.dark_blessing,
            thousand_sons_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.dark_blessing, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.infernal_cannon, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Spirit Snare", desc: "Each time a friendly **Thousand Sons Psyker** model with the Cabal of Sorcerers ability is destroyed while within 9\" of one or more models with this ability, select one of those models with this ability: until the end of the battle, each time the selected model attempts a Ritual, add 1 to the Psychic test result (to a maximum of +2)." },
            { name: "Servile Pawns", desc: "While this model is within 3\" of one or more friendly **Thousand Sons Infantry** units, this model has the Lone Operative ability." },
            { name: "Glamour of Tzeentch (Aura, Psychic)", desc: "While a friendly **Thousand Sons Infantry** unit is within 6\" of this model, models in that unit have the Stealth ability." },
        ],
        keywords: ["Faction: Thousand Sons","Monster","Character","Daemon","Psyker","Chaos","Tzeentch","Daemon Prince"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Daemon Prince of Tzeentch with wings",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 13,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.hellforged_weapons_strike,
            thousand_sons_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            thousand_sons_weapons.dark_blessing,
            thousand_sons_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.dark_blessing, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.infernal_cannon, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Aetherstride (Psychic)", desc: "In your Movement phase, when this model is set up on the battlefield using the Deep Strike ability, it can perform an aetherstride. If it does:\n- It can be set up anywhere on the battlefield more than 6\" horizontally away from all enemy units.\n- Until the end of the turn, its Dark Blessing has the [Sustained Hits D3] ability.\n- Until the end of the turn, it is not eligible to declare a charge." },
            { name: "Hunter of Souls", desc: "Each time this model makes an attack that targets a **Character** unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1 (if that attack targets a **Psyker Character** unit, you can re-roll the Hit roll and you can re-roll the Wound roll instead). Each time this model destroys a **Character** unit, this model regains up to D3 lost wounds (if that **Character** unit was a **Psyker**, this model regains up to 3 lost wounds instead)." },
        ],
        keywords: ["Faction: Thousand Sons","Monster","Character","Daemon","Psyker","Chaos","Tzeentch","Daemon Prince","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.shearing_claws_strike,
            thousand_sons_weapons.shearing_claws_sweep,
            thousand_sons_weapons.electroscourge,
        ],
        rangedWeapons: [
            thousand_sons_weapons.heavy_missile_launcher_frag,
            thousand_sons_weapons.heavy_missile_launcher_krak,
            thousand_sons_weapons.hades_battle_cannon,
            thousand_sons_weapons.ectoplasma_destructor,
            thousand_sons_weapons.heavy_baleflamer,
            thousand_sons_weapons.excruciator_cannon,
            thousand_sons_weapons.pyraflux_magma_cutter,
            thousand_sons_weapons.hades_lascannon,
            thousand_sons_weapons.heavy_reaper_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.heavy_missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.heavy_missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.hades_battle_cannon, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.ectoplasma_destructor, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.heavy_baleflamer, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.excruciator_cannon, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.pyraflux_magma_cutter, selected: true},
            ],
            slot8: [
                {...thousand_sons_weapons.hades_lascannon, selected: true},
            ],
            slot9: [
                {...thousand_sons_weapons.heavy_reaper_autocannon, selected: true},
            ],
            slot10: [
                {...thousand_sons_weapons.shearing_claws_strike, selected: true},
            ],
            slot11: [
                {...thousand_sons_weapons.shearing_claws_sweep, selected: true},
            ],
            slot12: [
                {...thousand_sons_weapons.electroscourge, selected: true},
            ],
        },
        abilities: [
            { name: "Scuttling Walker", desc: "Each time this unit makes a Normal, Advance or Fall Back move, it can move through models (excluding **Titanic** models) and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
            { name: "Destroyer of Futures", desc: "Each time you target this unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem. For each of those attacks that targets an enemy unit within 9\" of one or more **Thousand Sons Psyker** units from your army, a hit is scored on an unmodified Hit roll of 4+ instead." },
        ],
        keywords: ["Vehicle","Walker","Chaos","Daemon","Faction: Thousand Sons","Defiler","Tzeentch"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Exalted Sorcerer",
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
            thousand_sons_weapons.prosperine_khopesh,
            thousand_sons_weapons.force_weapon,
        ],
        rangedWeapons: [
            thousand_sons_weapons.astral_blast,
            thousand_sons_weapons.inferno_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.astral_blast, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.inferno_bolt_pistol, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.prosperine_khopesh, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Arcane Shield (Psychic)", desc: "While this model is leading a unit, models in that unit have a 4+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Rebind Rubricae (Psychic)", desc: "In your Command phase, if this model is leading a unit, you can roll one D6: on a 1, that unit suffers D3 mortal wounds; on a 2-5, you can return 1 destroyed Bodyguard model to that unit; on a 6, you can return up to 2 destroyed Bodyguard models to that unit." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Rubric Marines**" },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Character","Grenades","Psyker","Chaos","Tzeentch","Exalted Sorcerer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Exalted Sorcerer on Disc of Tzeentch",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.prosperine_khopesh,
            thousand_sons_weapons.force_weapon,
        ],
        rangedWeapons: [
            thousand_sons_weapons.arcane_fire,
            thousand_sons_weapons.inferno_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.arcane_fire, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.inferno_bolt_pistol, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.prosperine_khopesh, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Arcane Shield (Psychic)", desc: "While this model is leading a unit, that unit can only be selected as the target of a ranged attack if the attacking model is within 18\"." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Binding Tendrils (Psychic)", desc: "In your Shooting phase, after this model has shot, select one enemy **Infantry** unit hit by one or more of those attacks made with Arcane Fire. Until the start of your next turn, that unit is ensnared. While a unit is ensnared, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Rubric Marines, Tzaangor Enlightened**" },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Character","Psyker","Chaos","Tzeentch","Exalted Sorcerer","Fly","Grenades","Mounted"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Flamers",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 9,
            tough: 4,
            saving: 7,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.flamer_mouths,
        ],
        rangedWeapons: [
            thousand_sons_weapons.flickering_flames,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.flickering_flames, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.flamer_mouths, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Bounding Leaps", desc: "This unit is eligible to shoot in a turn in which it Fell Back." },
        ],
        keywords: ["Infantry","Fly","Chaos","Daemon","Tzeentch","Summoned","Flamers","Faction: Scintillating Legions"],
        pointOptions: [{ models: 4, pts: 130 }],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Forgefiend",
        pts: 130,
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
            thousand_sons_weapons.forgefiend_claws,
            thousand_sons_weapons.forgefiend_jaws,
        ],
        rangedWeapons: [
            thousand_sons_weapons.ectoplasma_cannon,
            thousand_sons_weapons.hades_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.ectoplasma_cannon, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.hades_autocannon, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.forgefiend_claws, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.forgefiend_jaws, selected: true},
            ],
        },
        abilities: [
            { name: "Blazing Salvos", desc: "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Walker","Daemon","Chaos","Tzeentch","Forgefiend"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Helbrute",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.close_combat_weapon_2,
            thousand_sons_weapons.helbrute_hammer,
            thousand_sons_weapons.power_scourge,
        ],
        rangedWeapons: [
            thousand_sons_weapons.missile_launcher_frag,
            thousand_sons_weapons.missile_launcher_krak,
            thousand_sons_weapons.multi_melta,
            thousand_sons_weapons.twin_autocannon,
            thousand_sons_weapons.helbrute_plasma_cannon,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.heavy_flamer,
            thousand_sons_weapons.twin_inferno_heavy_bolter,
            thousand_sons_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.multi_melta, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.twin_autocannon, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.helbrute_plasma_cannon, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.heavy_flamer, selected: true},
            ],
            slot8: [
                {...thousand_sons_weapons.twin_inferno_heavy_bolter, selected: true},
            ],
            slot9: [
                {...thousand_sons_weapons.twin_lascannon, selected: true},
            ],
            slot10: [
                {...thousand_sons_weapons.close_combat_weapon_2, selected: true},
            ],
            slot11: [
                {...thousand_sons_weapons.helbrute_hammer, selected: true},
            ],
            slot12: [
                {...thousand_sons_weapons.power_scourge, selected: true},
            ],
        },
        abilities: [
            { name: "Terrifying Assault", desc: "In your Shooting phase and the Fight phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That unit must take a Battle-shock test, subtracting 1 if that unit is within 9\" of one or more **Thousand Sons Psyker** units from your army." },
            { name: "Devoted to Destruction", desc: "If this model is equipped with 2 melee weapons in addition to its close combat weapon, add 2 to the Attacks characteristic of those two weapons." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Walker","Chaos","Tzeentch","Helbrute"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Heldrake",
        pts: 215,
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
            thousand_sons_weapons.heldrake_claws,
        ],
        rangedWeapons: [
            thousand_sons_weapons.baleflamer,
            thousand_sons_weapons.hades_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.baleflamer, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.hades_autocannon, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.heldrake_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Flame-wreathed", desc: "Each time this model ends a Normal move, select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Aircraft","Fly","Chaos","Tzeentch","Heldrake"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.armoured_hull,
        ],
        rangedWeapons: [
            thousand_sons_weapons.autocannon,
            thousand_sons_weapons.twin_lascannon,
            thousand_sons_weapons.havoc_launcher,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.autocannon, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.twin_lascannon, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.havoc_launcher, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Bomb Rack", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved across during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Chaos","Tzeentch","Hell Talon","Faction: Thousand Sons"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.twin_lascannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.twin_lascannon, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can FLY, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Chaos","Tzeentch","Hellblade","Faction: Thousand Sons"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Infernal Master",
        pts: 95,
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
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.force_weapon,
        ],
        rangedWeapons: [
            thousand_sons_weapons.fires_of_the_abyss_witchfire,
            thousand_sons_weapons.fires_of_the_abyss_focused_witchfire,
            thousand_sons_weapons.inferno_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.fires_of_the_abyss_witchfire, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.fires_of_the_abyss_focused_witchfire, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.inferno_bolt_pistol, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Malefic Maelstrom (Psychic)", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Glimpse of Eternity (Psychic)", desc: "Once per turn, you can change the result of one Hit roll, one Wound roll or one saving throw made for this model to an unmodified 6." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Rubric Marines**" },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Character","Grenades","Psyker","Chaos","Tzeentch","Infernal Master"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Kairos Fateweaver",
        pts: 295,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 6,
            wounds: 20,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.staff_of_tomorrow,
        ],
        rangedWeapons: [
            thousand_sons_weapons.infernal_gateway_witchfire,
            thousand_sons_weapons.infernal_gateway_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.infernal_gateway_witchfire, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.infernal_gateway_focused_witchfire, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.staff_of_tomorrow, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "One Head Looks Forward", desc: "At the end of your Command phase, if this model is on the battlefield, take a Leadership test for this model; if that test is passed, you gain 1CP." },
            { name: "One Head Looks Back (Aura)", desc: "Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Scintillating Legions","Monster","Character","Epic Hero","Fly","Psyker","Chaos","Daemon","Tzeentch","Summoned","Kairos Fateweaver"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Lord of Change",
        pts: 285,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 6,
            wounds: 18,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.staff_of_tzeentch,
            thousand_sons_weapons.baleful_sword,
        ],
        rangedWeapons: [
            thousand_sons_weapons.bolt_of_change_witchfire,
            thousand_sons_weapons.bolt_of_change_focused_witchfire,
            thousand_sons_weapons.rod_of_sorcery,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.bolt_of_change_witchfire, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.bolt_of_change_focused_witchfire, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.rod_of_sorcery, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.staff_of_tzeentch, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.baleful_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Daemon Lord of Tzeentch (Aura)", desc: "While a friendly **Scintillating Legions** unit is within 6\" of this model, each time a model in that unit makes a ranged attack, add 1 to the Strength characteristic of that attack." },
            { name: "Master of Magicks (Aura)", desc: "In your Shooting phase, select one of the following abilities: [Ignores Cover], [Lethal Hits], [Sustained Hits D3]. Until the end of the phase, this model's Bolt of Change has that ability." },
        ],
        keywords: ["Monster","Character","Fly","Psyker","Chaos","Daemon","Tzeentch","Summoned","Lord of Change","Faction: Scintillating Legions"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Magister [Crucible]",
        pts: 105,
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
            invuln: 5
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Rebinding (Psychic)", desc: "In your Command phase, if this model is leading a unit, you can roll one D6: on a 1, that unit suffers D3 mortal wounds, on a 2+, you can return 1 destroyed Bodyguard model to that unit." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Rubric Marines**" },
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Character","Infantry","Grenades","Psyker","Chaos","Tzeentch","Magister"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Magnus the Red",
        pts: 435,
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
            thousand_sons_weapons.blade_of_magnus_strike,
            thousand_sons_weapons.blade_of_magnus_sweep,
        ],
        rangedWeapons: [
            thousand_sons_weapons.gaze_of_magnus,
            thousand_sons_weapons.tzeentchs_firestorm,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.gaze_of_magnus, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.tzeentchs_firestorm, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.blade_of_magnus_strike, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.blade_of_magnus_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-6 wounds remaining", desc: "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Unearthly Power", desc: "At the start of the battle round, select one of the abilities in the Crimson King section. Until the start of the next battle round, this model has that ability." },
            { name: "Lord of the Planet of the Sorcerers (Psychic)", desc: "This model can attempt up to 2 Rituals per turn instead of one, and each time this model attempts a Ritual, add 2 to the Psychic test result." },
        ],
        keywords: ["Faction: Thousand Sons","Monster","Psyker","Fly","Character","Epic Hero","Daemon","Chaos","Tzeentch","Primarch","Magnus the Red"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Maulerfiend",
        pts: 120,
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
            thousand_sons_weapons.maulerfiend_fists,
            thousand_sons_weapons.lasher_tendrils,
        ],
        rangedWeapons: [
            thousand_sons_weapons.magma_cutter,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.magma_cutter, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.maulerfiend_fists, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.lasher_tendrils, selected: true},
            ],
        },
        abilities: [
            { name: "Snarling Protector", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem in this phase. In addition, each time this model declares a charge that targets an enemy unit within Engagement Range of one or more **Thousand Sons Psyker** units from your army, you can re-roll the Charge roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Walker","Daemon","Chaos","Tzeentch","Maulerfiend"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Mutalith Vortex Beast",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 4,
            wounds: 13,
            leader: 6,
            control: 4,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.betentacled_maw,
            thousand_sons_weapons.mutalith_claws,
        ],
        rangedWeapons: [
            thousand_sons_weapons.warp_vortex_blast,
            thousand_sons_weapons.warp_vortex_beam,
            thousand_sons_weapons.warp_vortex_torrent,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.warp_vortex_blast, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.warp_vortex_beam, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.warp_vortex_torrent, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.betentacled_maw, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.mutalith_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Mutating Vortex (Aura)", desc: "At the end of your Movement phase, roll one D6 for each enemy unit within 6\" of this model: on a 2-3, that unit suffers 1 mortal wound; on a 4-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D6 mortal wounds. Each enemy unit within range of this ability must then take a Battle-shock test." },
            { name: "Immaterial Flare (Aura)", desc: "While a friendly **Thousand Sons Psyker** model is within 6\" of this model, each time that model Channels the Warp, add 1 to the Psychic test result. This is not cumulative with any other modifiers to the Psychic test result." },
        ],
        keywords: ["Faction: Thousand Sons","Monster","Chaos","Tzeentch","Mutalith Vortex Beast","Mutant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "battleline",
        name: "Pink Horrors",
        pts: 115,
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
            leader: 8,
            control: 0,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.pink_claws,
            thousand_sons_weapons.blue_claws_ref_only,
            thousand_sons_weapons.yellow_claws_ref_only,
        ],
        rangedWeapons: [
            thousand_sons_weapons.coruscating_pink_flames,
            thousand_sons_weapons.coruscating_blue_flames_ref_only,
            thousand_sons_weapons.coruscating_yellow_flames_ref_only,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.coruscating_pink_flames, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.coruscating_blue_flames_ref_only, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.coruscating_yellow_flames_ref_only, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.pink_claws, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.blue_claws_ref_only, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.yellow_claws_ref_only, selected: true},
            ],
        },
        abilities: [
            { name: "Daemonic Icon", desc: "Models in the bearer's unit have a Leadership characteristic of 6+" },
            { name: "Instrument of Chaos", desc: "Add 1 to Charge rolls made for the bearer's unit." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Split", desc: "Each time a **Pink Horror** or **Blue Horror** model in this unit is destroyed, after the attacking unit has finished making its attacks, if this unit is not destroyed, roll one D6 for that model. On a 4+, if it was a **Pink Horror**, add 2 **Blue Horror** models to this unit and if it was a **Blue Horror**, add one **Brimstone Horror** model to this unit." },
            { name: "Horrors are Pink. Horrors are Blue. Where once there was one, now there are two.", desc: "If, at any point, this unit contains no Pink Horrors models, use the Blue Horrors datasheet for this unit. \n\n_Designer’s Note: While this unit contains one or more Pink Horrors models, the Sullen Malevolence and Exploding Horrors abilities from the Blue Horrors datasheet do not apply to this unit._" },
        ],
        keywords: ["Infantry","Battleline","Chaos","Daemon","Tzeentch","Summoned","Horrors","Faction: Scintillating Legions"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.force_weapon_2,
            thousand_sons_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            thousand_sons_weapons.inferno_bolt_pistol_2,
            thousand_sons_weapons.warpflame_pistol,
            thousand_sons_weapons.malefic_curse,
            thousand_sons_weapons.inferno_boltgun,
            thousand_sons_weapons.warpflamer,
            thousand_sons_weapons.soulreaper_cannon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.inferno_bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.warpflame_pistol, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.malefic_curse, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.inferno_boltgun, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.warpflamer, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.soulreaper_cannon, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.force_weapon_2, selected: true},
            ],
            slot8: [
                {...thousand_sons_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Bringers of Change", desc: "Each time a model in this unit makes a ranged attack, re-roll a Wound roll of 1. If the attack targets a unit within range of an objective marker you do not control, you can re-roll the Wound roll instead." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Icon of Flame", desc: "Ranged weapons equipped by models in the bearer's unit (excluding **Characters**) have the [Ignores Cover] ability." },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Battleline","Chaos","Tzeentch","Rubric Marines","Rubricae"],
        pointOptions: [{ models: 5, pts: 190 }],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Scarab Occult Terminators",
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
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.force_weapon,
            thousand_sons_weapons.prosperine_khopesh_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.malefic_curse,
            thousand_sons_weapons.hellfyre_missile_rack,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.soulreaper_cannon,
            thousand_sons_weapons.heavy_warpflamer,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.malefic_curse, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.hellfyre_missile_rack, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.soulreaper_cannon, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.heavy_warpflamer, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.force_weapon, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.prosperine_khopesh_2, selected: true},
            ],
        },
        abilities: [
            { name: "Rites of Coalescence", desc: "While this unit contains one or more **Psyker** models, each time an attack targets this unit, subtract 1 from the\nWound roll." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Chaos","Tzeentch","Scarab Occult","Rubricae","Terminator"],
        pointOptions: [{ models: 5, pts: 360 }],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Screamers",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 6,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.lamprey_bite,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.lamprey_bite, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Slashing Dive", desc: "In your Movement phase, after this unit ends a Normal move, select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Beast","Fly","Chaos","Daemon","Tzeentch","Summoned","Screamers","Faction: Scintillating Legions"],
        pointOptions: [{ models: 4, pts: 160 }],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Sekhetar Robots",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.power_claw,
            thousand_sons_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            thousand_sons_weapons.pyreflux_meltagun,
            thousand_sons_weapons.warpflame_projector,
            thousand_sons_weapons.heavy_warpflamer,
            thousand_sons_weapons.hellfyre_missile_rack_2,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.pyreflux_meltagun, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.warpflame_projector, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.heavy_warpflamer, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.hellfyre_missile_rack_2, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.power_claw, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Prophetic Sentinels", desc: "Once per battle round, you can target this unit with the Fire Overwatch or Heroic Intervention Stratagem for 0CP." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Vehicle","Walker","Chaos","Tzeentch","Sekhetar Robots"],
        pointOptions: [{ models: 3, pts: 160 }],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Sorcerer",
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
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.prosperine_khopesh_2,
            thousand_sons_weapons.force_weapon,
        ],
        rangedWeapons: [
            thousand_sons_weapons.pandaemonic_delusion,
            thousand_sons_weapons.inferno_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.pandaemonic_delusion, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.inferno_bolt_pistol, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.prosperine_khopesh_2, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Rubric Marines**" },
            { name: "Twisted Sorceries (Psychic)", desc: "Once per battle, in your Shooting phase or the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength and Attacks characteristic of Psychic weapons equipped by this model by 3." },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Character","Psyker","Grenades","Chaos","Tzeentch","Sorcerer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Sorcerer in Terminator Armour",
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
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            thousand_sons_weapons.force_weapon,
        ],
        rangedWeapons: [
            thousand_sons_weapons.gaze_of_hate,
            thousand_sons_weapons.inferno_combi_bolter,
            thousand_sons_weapons.inferno_combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.gaze_of_hate, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.inferno_combi_bolter, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.inferno_combi_weapon, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit: **Scarab Occult Terminators**" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Marked by Fate (Psychic)", desc: "At the start of your Shooting phase, select one enemy unit that is visible to this **Psyker** model. Until the end of the phase, each time a model in this unit makes an attack that targets that enemy unit, add 1 to the Hit roll." },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Character","Psyker","Chaos","Tzeentch","Sorcerer","Terminator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
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
            thousand_sons_weapons.force_weapon,
            thousand_sons_weapons.accursed_weapon,
            thousand_sons_weapons.power_fist,
            thousand_sons_weapons.astartes_chainsword_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.infernal_gaze_witchfire,
            thousand_sons_weapons.infernal_gaze_focused_witchfire,
            thousand_sons_weapons.bolt_pistol,
            thousand_sons_weapons.combi_bolter,
            thousand_sons_weapons.plasma_pistol_standard,
            thousand_sons_weapons.plasma_pistol_supercharge,
            thousand_sons_weapons.combi_weapon_2,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.infernal_gaze_witchfire, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.infernal_gaze_focused_witchfire, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...thousand_sons_weapons.combi_bolter, selected: true},
            ],
            slot5: [
                {...thousand_sons_weapons.plasma_pistol_standard, selected: true},
            ],
            slot6: [
                {...thousand_sons_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot7: [
                {...thousand_sons_weapons.combi_weapon_2, selected: true},
            ],
            slot8: [
                {...thousand_sons_weapons.force_weapon, selected: true},
            ],
            slot9: [
                {...thousand_sons_weapons.accursed_weapon, selected: true},
            ],
            slot10: [
                {...thousand_sons_weapons.power_fist, selected: true},
            ],
            slot11: [
                {...thousand_sons_weapons.astartes_chainsword_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- RUBRIC MARINES" },
            { name: "Flames of Change (Psychic)", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability." },
            { name: "Altered Reality (Psychic)", desc: "Once per battle round, after a Hit roll, a Wound roll or a saving throw is made for this model, you can change the result of that roll to a 6." },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Character","Grenades","Psyker","Fly","Chaos","Tzeentch","Sorcerer","Disc of Tzeentch"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Tzaangor Enlightened",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.divining_spear,
            thousand_sons_weapons.chainsword,
        ],
        rangedWeapons: [
            thousand_sons_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.divining_spear, selected: true},
            ],
            slot3: [
                {...thousand_sons_weapons.chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Prophesied Doom", desc: "Each time this unit makes a Charge move, select one enemy unit within Engagement Range of it, then roll one D6 for each model in this unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Thousand Sons","Mounted","Fly","Chaos","Tzeentch","Tzaangor Enlightened","Mutant"],
        pointOptions: [{ models: 3, pts: 90 }],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Tzaangor Enlightened with Fatecaster greatbows",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            thousand_sons_weapons.fatecaster_greatbow,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.fatecaster_greatbow, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Malign Trickery", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\"." },
        ],
        keywords: ["Faction: Thousand Sons","Mounted","Fly","Chaos","Tzeentch","Tzaangor Enlightened","Mutant","Tzaangor Enlightened with Fatecaster greatbows"],
        pointOptions: [{ models: 3, pts: 110 }],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "characters",
        name: "Tzaangor Shaman",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            thousand_sons_weapons.force_stave,
        ],
        rangedWeapons: [
            thousand_sons_weapons.baleful_devolution,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.baleful_devolution, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.force_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Sacrificial Blessing", desc: "While this model is leading a unit, in your Shooting phase and the Fight phase, each time that unit is selected to shoot or fight, this model can use this ability. If it does, select one Bodyguard model in that unit; that Bodyguard model is destroyed and, until the end of the phase, add D3 to the Attacks and Strength characteristics of Psychic weapons equipped by this model." },
            { name: "Bestial Prophet", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll." },
            { name: "Leader", desc: "This model can be attached to the following units: **Tzaangor Enlightened, Tzaangors**" },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Thousand Sons","Mounted","Character","Fly","Psyker","Chaos","Tzeentch","Tzaangor Shaman","Infantry","Mutant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "thousand_sons",
        class: "other",
        name: "Tzaangors",
        pts: 70,
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
            invuln: 6
        },
        meleeWeapons: [
            thousand_sons_weapons.chainsword_2,
        ],
        rangedWeapons: [
            thousand_sons_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...thousand_sons_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...thousand_sons_weapons.chainsword_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save." },
            { name: "Ambushing Hunters", desc: "At the end of your opponent's turn, if this unit is more than 6\" horizontally away from all enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves." },
            { name: "Brayhorn", desc: "You can re-roll Advance and Charge rolls made for the bearer’s unit." },
            { name: "Herd banner", desc: "While the bearer's unit is within range of one or more objective markers you control, improve the Leadership characteristic of models in the bearer's unit by 1." },
        ],
        keywords: ["Faction: Thousand Sons","Infantry","Chaos","Tzeentch","Tzaangors","Mutant"],
        pointOptions: [{ models: 10, pts: 160 }],
        transport: null,
    },
]

export default thousand_sons_army
