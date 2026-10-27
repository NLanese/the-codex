// AUTO-GENERATED units for Chaos Daemons (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import chaos_daemons_weapons from "../weapons/chaos_daemons"

const chaos_daemons_army = [
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Aetaos'rau'keres [Legends]",
        pts: 315,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 6,
            wounds: 24,
            leader: 6,
            control: 6,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.staff_of_cataclysm,
            chaos_daemons_weapons.warpfire_talons,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.bolt_of_tzeentch_witchfire,
            chaos_daemons_weapons.bolt_of_tzeentch_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.bolt_of_tzeentch_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.bolt_of_tzeentch_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.staff_of_cataclysm, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.warpfire_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Emissary of the Great Mutator (Aura)", desc: "While a friendly TZEENTCH LEGIONES DAEMONICA unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit." },
            { name: "Master of Magicks (Psychic)", desc: "In your Shooting phase, select one of the following abilities: [IGNORES COVER]; [LETHAL HITS]; [SUSTAINED HITS D3]. Until the end of the phase, this model’s ranged weapon has that ability." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Titanic","Towering","Fly","Psyker","Chaos","Daemon","Tzeentch","Aetaos'rau'keres","Tzeentch non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "An'ggrath the Unbound [Legends]",
        pts: 415,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 4,
            wounds: 24,
            leader: 6,
            control: 6,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.axe_of_khorne_strike,
            chaos_daemons_weapons.axe_of_khorne_sweep,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.bloodlash,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.bloodlash, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.axe_of_khorne_strike, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.axe_of_khorne_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Emissary of the Blood God (Aura)", desc: "While a friendly KHORNE LEGIONES DAEMONICA unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit." },
            { name: "Relentless Carnage", desc: "At the end of the Fight phase, you can select one enemy unit within Engagement Range of this model and roll eight D6: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Titanic","Towering","Chaos","Daemon","Khorne","An'ggrath the Unbound","Khorne non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Be'lakor",
        pts: 375,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 3,
            wounds: 20,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.the_blade_of_shadows_sweep,
            chaos_daemons_weapons.the_blade_of_shadows_strike,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.betraying_shades_witchfire,
            chaos_daemons_weapons.betraying_shades_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.betraying_shades_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.betraying_shades_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.the_blade_of_shadows_sweep, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.the_blade_of_shadows_strike, selected: true},
            ],
        },
        abilities: [
            { name: "The Dark Master (Aura)", desc: "The area of the battlefield within 6\" of this model is considered to be within your army’s Shadow of Chaos." },
            { name: "Shadow Form", desc: "At the start of the battle round, select one Shadow Form ability. Until the end of the battle round, this model has that ability." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Fly","Epic Hero","Psyker","Chaos","Daemon","Be'lakor","Shadow Legion","Undivided"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.putrid_appendages,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.putrid_appendages, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Grotesque Regeneration", desc: "At the end of each phase, if a Beasts of Nurgle model in this unit has lost any wounds but is not destroyed, that model regains all of its lost wounds." },
        ],
        keywords: ["Faction: Legiones Daemonica","Beast","Chaos","Daemon","Nurgle","Beasts of Nurgle","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.hellblade,
            chaos_daemons_weapons.juggernauts_bladed_horn,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.hellblade, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.juggernauts_bladed_horn, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Brass Stampede", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of this unit and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers D3 mortal wounds." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Khorne","Bloodcrushers","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [{ models: 4, pts: 220 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "battleline",
        name: "Bloodletters",
        pts: 110,
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
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.hellblade,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.hellblade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Bane of Cowards", desc: "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of one or more units from your army with this ability Falls Back, models in that enemy unit must take Desperate Escape tests. When doing so, if that enemy unit is also Battle-shocked, subtract 1 from each of those Desperate Escape tests." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Battleline","Chaos","Daemon","Khorne","Bloodletters","Khorne Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Bloodmaster",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.blade_of_blood,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.blade_of_blood, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- BLOODLETTERS" },
            { name: "Invulnerable Save: Bloodmaster", desc: "This model has a 4+ invulnerable save." },
            { name: "Bloodmaster", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Wound roll." },
            { name: "A Gory Path", desc: "Each time this model’s unit Consolidates, it can move up to 6\" instead of up to 3\"." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Chaos","Daemon","Khorne","Bloodmaster","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.great_axe_of_khorne_strike,
            chaos_daemons_weapons.great_axe_of_khorne_sweep,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.hellfire_breath,
            chaos_daemons_weapons.bloodflail,
            chaos_daemons_weapons.lash_of_khorne,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.hellfire_breath, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.bloodflail, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.lash_of_khorne, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.great_axe_of_khorne_strike, selected: true},
            ],
            slot5: [
                {...chaos_daemons_weapons.great_axe_of_khorne_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Daemon Lord of Khorne (Aura)", desc: "While a friendly Khorne Legiones Daemonica unit is within 6\" of this model, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Relentless Carnage", desc: "At the end of the Fight phase, you can select one enemy unit within Engagement Range of this model and roll eight D6: for each 4+, that enemy unit suffers 1 mortal wound." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Fly","Chaos","Daemon","Khorne","Bloodthirster","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "battleline",
        name: "Blue Horrors",
        pts: 125,
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
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.yellow_claws_ref_only,
            chaos_daemons_weapons.blue_claws,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.coruscating_yellow_flames_ref_only,
            chaos_daemons_weapons.coruscating_blue_flames,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.coruscating_yellow_flames_ref_only, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.coruscating_blue_flames, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.yellow_claws_ref_only, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.blue_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Split", desc: "Each time a Blue Horror model in this unit is destroyed, after the attacking unit has finished making its attacks, if this unit is not destroyed, roll one D6 for that model. On a 4+, add one Brimstone Horror model to this unit." },
            { name: "Sullen Malevolence (Aura)", desc: "While an enemy unit is within 6\" of this unit, if this unit contains one or more Blue Horror models, worsen the Leadership characteristic of models in that enemy unit by 1." },
            { name: "Exploding Horrors", desc: "Each time this unit is selected to fight, you can select one enemy unit within Engagement Range of it, then select one or more Brimstone Horror models in this unit. For each Brimstone Horror model you select, roll one D6: on a 4+, that model is destroyed and that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Battleline","Chaos","Daemon","Tzeentch","Tzeentch Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Burning Chariot",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 7,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.flamer_mouths,
            chaos_daemons_weapons.screamer_bites,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.fires_of_tzeentch_blue_fire,
            chaos_daemons_weapons.fires_of_tzeentch_pink_fire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.fires_of_tzeentch_blue_fire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.fires_of_tzeentch_pink_fire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.flamer_mouths, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.screamer_bites, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Eldritch Flames (Psychic)", desc: "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Tzeentch","Burning Chariot","Fly","Tzeentch non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Changecaster",
        pts: 60,
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
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.herald_combat_weapon,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.arcane_fireball_witchfire,
            chaos_daemons_weapons.arcane_fireball_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.arcane_fireball_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.arcane_fireball_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.herald_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Changecaster", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Storm of Mutating Sorcery (Psychic)", desc: "In your Shooting phase, after this model has shot, select one enemy Infantry unit hit by one or more of those attacks. That unit must take a Battle-shock test." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- PINK HORRORS\n- BLUE HORRORS" },
            { name: "Invulnerable Save: Changecaster", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Psyker","Chaos","Daemon","Tzeentch","Changecaster","Tzeentch non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Contorted Epitome",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 6,
            saving: 5,
            wounds: 8,
            leader: 7,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.coiled_tentacles,
            chaos_daemons_weapons.ravaging_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.coiled_tentacles, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.ravaging_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save: Contorted Epitome", desc: "This model has a 4+ invulnerable save." },
            { name: "Swallow Energy (Psychic)", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against mortal wounds and Psychic Attacks." },
            { name: "Horrible Fascination (Psychic)", desc: "At the start of your opponent’s Shooting phase, one PSYKER model from your army with this ability can use it. If it does, select one enemy unit within 12\" of and visible to that PSYKER model and roll one D6: on a 1, that PSYKER model suffers D3 mortal wounds; on a 2-5, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll; on a 6, that enemy unit is not eligible to shoot this phase." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- DAEMONETTES" },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Psyker","Chaos","Slaanesh","Contorted Epitome","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Daemon Prince of Chaos",
        pts: 190,
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
            invuln: 3
        },
        meleeWeapons: [
            chaos_daemons_weapons.hellforged_weapons_strike,
            chaos_daemons_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Prince of Darkness (Aura)", desc: "While a friendly LEGIONES DAEMONICA unit is within 6\" of this model, models in that unit have the Stealth ability." },
            { name: "Unholy Vigour", desc: "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 3+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemonic Lord", desc: "While this model is within 3\" of one or more friendly **Legiones Daemonica** Infantry units, this model has the Lone Operative ability." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Chaos","Daemon","Daemon Prince of Chaos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Daemon Prince of Chaos with wings",
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
            chaos_daemons_weapons.hellforged_weapons_strike,
            chaos_daemons_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Malefic Destruction", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of this model’s hellforged weapons." },
            { name: "Harbinger of Death", desc: "Each time this model is selected to fight, select one of the following abilities. Until the end of the phase, this model’s hellforged weapons have that ability:\n- [LETHAL HITS]\n- [PRECISION]\n- [SUSTAINED HITS 1]" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Chaos","Daemon","Daemon Prince of Chaos with wings","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "battleline",
        name: "Daemonettes",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 9,
            tough: 3,
            saving: 7,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.slashing_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.slashing_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Horrifying Beauty ", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of one of more units from your army with this ability must take a Battle-shock test, subtracting 1 from the result if that enemy unit is Below Half-strength." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Battleline","Chaos","Daemon","Slaanesh","Daemonettes","Slaanesh Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Daemonic Charioteer [Crucible]",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 7,
            saving: 6,
            wounds: 8,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Malefic Impact", desc: "Melee weapons equipped by models in this unit have the [Lance] ability." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Mounted Daemon** units which share one of the following keywords with this model **Khorne, Nurgle, Slaanesh, Tzeentch**" },
        ],
        keywords: ["Character","Chaos","Daemon","Crucible","Mounted","Daemonic Charioteer","Faction: Legiones Daemonica","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Daemonic Herald [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 7,
            wounds: 3,
            leader: 7,
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
            { name: "Daemonic Locus", desc: "While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model, or D3 destroyed models with the **Battleline** keyword, to that unit." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Infantry Daemon** units (excluding **Possessed** units) which share one of the following keywords with this model **Khorne, Nurgle, Slaanesh, Tzeentch**" },
        ],
        keywords: ["Character","Infantry","Chaos","Daemon","Summoned","Daemonic Herald","Crucible","Faction: Legiones Daemonica","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Epidemius",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 6,
            wounds: 8,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.balesword_and_nurgling_attendants,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.balesword_and_nurgling_attendants, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save: Epidemius", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- PLAGUEBEARERS" },
            { name: "Blessed by the Plague God", desc: "While this model is leading a unit, models in that unit have a 4+ invulnerable save." },
            { name: "Tally of Pestilence", desc: "Keep a tally of how many enemy models are destroyed by NURGLE LEGIONES DAEMONICA models from your army during the battle. At the start of your Command phase, if this tally is 7 or more, you gain 1CP and the tally is reset to 0." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Epic Hero","Chaos","Daemon","Nurgle","Epidemius","Nurgle non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Exalted Flamer",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 4,
            saving: 7,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.flamer_mouths_2,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.fires_of_tzeentch_blue_fire,
            chaos_daemons_weapons.fires_of_tzeentch_pink_fire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.fires_of_tzeentch_blue_fire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.fires_of_tzeentch_pink_fire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.flamer_mouths_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- FLAMERS" },
            { name: "Blazing Warpfire (Psychic)", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability." },
            { name: "Flames of Change (Psychic)", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks, and roll one D6. On a 4+, until the end of your opponent’s next turn, that enemy unit is aflame. While a unit is aflame, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Manifestation of Destruction", desc: "This model cannot be your Warlord and cannot be given Enhancements." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Fly","Chaos","Daemon","Tzeentch","Exalted Flamer","Tzeentch non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Exalted Seeker Chariot [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 5,
            wounds: 12,
            leader: 7,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.seeker_tongues,
            chaos_daemons_weapons.slashing_claws_2,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.lashes_of_torment,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lashes_of_torment, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.seeker_tongues, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.slashing_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Infernal Engines of Torment", desc: "In the Fight phase, after this model has finished making its attacks, if one or more enemy units were destroyed as a result of those attacks, every enemy unit within 6\" of this model must take a Battleshock test." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Slaanesh","Exalted Seeker Chariot","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Fateskimmer",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 6,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.screamer_bites,
            chaos_daemons_weapons.herald_combat_weapon,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.arcane_fireball_witchfire,
            chaos_daemons_weapons.arcane_fireball_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.arcane_fireball_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.arcane_fireball_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.screamer_bites, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.herald_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- SCREAMERS" },
            { name: "Fateskimmer", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Rider of the Immaterial Winds", desc: "Once per battle, at the end of your opponent’s turn, if this model’s unit is not within Engagement Range of one or more enemy units, you can remove that unit from the battlefield and place it into Strategic Reserves." },
            { name: "Invulnerable Save: Fateskimmer", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Fly","Psyker","Chaos","Daemon","Tzeentch","Fateskimmer","Tzeentch non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Feculent Gnarlmaw",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 9,
            saving: 4,
            wounds: 9,
            leader: 7,
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
            { name: "Shroud of Flies (Aura)", desc: "While a friendly NURGLE LEGIONES DAEMONICA unit is within 6\" of this Fortification, models in that unit have the Stealth ability." },
            { name: "Diseased Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Faction: Legiones Daemonica","Fortification","Chaos","Daemon","Nurgle","Feculent Gnarlmaw","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Fiends",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 7,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.barbed_tail_and_dissecting_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.barbed_tail_and_dissecting_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Soporific Musk", desc: "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of one or more units from your army with this ability Falls Back, models in that enemy unit must take Desperate Escape tests. When doing so, if that enemy unit is also Battle-shocked, subtract 1 from each of those Desperate Escape tests." },
        ],
        keywords: ["Faction: Legiones Daemonica","Beast","Chaos","Daemon","Slaanesh","Fiends","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [{ models: 4, pts: 190 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.flamer_mouths_3,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.flickering_flames,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.flickering_flames, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.flamer_mouths_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Bounding Leaps", desc: "This unit is eligible to shoot in a turn in which it Fell Back." },
        ],
        keywords: ["Infantry","Fly","Chaos","Daemon","Tzeentch","Flamers","Tzeentch non-Battleline","Faction: Legiones Daemonica","Shadow Legion"],
        pointOptions: [{ models: 4, pts: 130 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.gore_drenched_fangs,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.burning_roar,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.burning_roar, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.gore_drenched_fangs, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Hunters from the Warp", desc: "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
        ],
        keywords: ["Faction: Legiones Daemonica","Beast","Chaos","Daemon","Khorne","Flesh Hounds","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [{ models: 6, pts: 150 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Fluxmaster",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 6,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.herald_combat_weapon,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.arcane_fireball_witchfire,
            chaos_daemons_weapons.arcane_fireball_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.arcane_fireball_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.arcane_fireball_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.herald_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- PINK HORRORS\n- BLUE HORRORS" },
            { name: "Fluxmaster", desc: "While this model is leading a unit, each time an attack is made against that unit, subtract 1 form the Hit roll." },
            { name: "Altered Reality (Psychic)", desc: "Once per battle round, after a Hit roll, a Wound roll or a saving throw is made for this model, you can change the result of that roll to a 6." },
            { name: "Invulnerable Save: Fluxmaster", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Fly","Psyker","Chaos","Daemon","Tzeentch","Fluxmaster","Tzeentch non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Furies [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 7,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.daemonic_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.daemonic_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Prey on the Weak", desc: "Each time this model makes an attack that targets an enemy unit that is Battle-shocked, add 1 to the Wound roll." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Chaos","Daemon","Fly","Furies","Shadow Legion"],
        pointOptions: [{ models: 6, pts: 80 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Giant Chaos Spawn [Legends]",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 7,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.churning_fangs_and_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.churning_fangs_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Regenerating Monstrosity", desc: "At the start of each player’s Command phase, this model regains up to D3 lost wounds." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Chaos","Giant Chaos Spawn","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.bilesword_strike,
            chaos_daemons_weapons.bilesword_sweep,
            chaos_daemons_weapons.doomsday_bell,
            chaos_daemons_weapons.bileblade,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.putrid_vomit,
            chaos_daemons_weapons.plague_flail,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.putrid_vomit, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.plague_flail, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.bilesword_strike, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.bilesword_sweep, selected: true},
            ],
            slot5: [
                {...chaos_daemons_weapons.doomsday_bell, selected: true},
            ],
            slot6: [
                {...chaos_daemons_weapons.bileblade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemon Lord of Nurgle (Aura)", desc: "While a friendly Nurgle Legiones Daemonica unit is within 6\" of this model, add 1 to the Toughness characteristic of models in that unit." },
            { name: "Nurgle’s Rot (Psychic)", desc: "At the end of your Movement phase, you can select one enemy unit within 12\" of this model. Until the start of your next Movement phase, subtract 1 from the Toughness characteristic of models in that unit." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Psyker","Chaos","Daemon","Nurgle","Great Unclean One","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Hellflayers",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 5,
            wounds: 7,
            leader: 7,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.lashes_of_torment_2,
            chaos_daemons_weapons.seeker_tongues_2,
            chaos_daemons_weapons.slashing_claws_3,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.lashes_of_torment_3,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lashes_of_torment_3, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.lashes_of_torment_2, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.seeker_tongues_2, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.slashing_claws_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Cutting Down the Foe", desc: "Each time a model in this unit makes a melee attack, if this unit made a Charge move this turn, improve the Strength and Damage characteristics of that attack by 1." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Slaanesh","Hellflayer","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Herald of Slaanesh on Steed of Slaanesh [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 7,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.lashing_tongue,
            chaos_daemons_weapons.ravaging_claws_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lashing_tongue, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.ravaging_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Lethal Caress", desc: "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1." },
            { name: "Symphony of Pain (Psychic)", desc: "At the end of your Movement phase, you can select one enemy unit that is Battle-shocked and within 12\" of this model. Until the end of the turn, each time a SLAANESH LEGIONES DAEMONICA model from your army makes an attack that targets that enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- SEEKERS" },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Psyker","Chaos","Daemon","Slaanesh","Herald of Slaanesh","Shadow Legion","Slaanesh non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Horticulous Slimux",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 10,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.acidic_maw,
            chaos_daemons_weapons.lopping_shears,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.acidic_maw, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.lopping_shears, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- BEASTS OF NURGLE" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Beast Handler", desc: "While this model is leading a unit, you can re-roll Charge rolls made for that unit. In addition, once per battle, you can target that unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
            { name: "Seed the Garden of Nurgle", desc: "At the end of your Movement phase, if this model is within one AREA TERRAIN feature, until the end of the battle, that AREA TERRAIN feature is considered to be within your army’s Shadow of Chaos." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Epic Hero","Chaos","Daemon","Nurgle","Horticulous Slimux","Nurgle non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Immortal Champion [Crucible]",
        pts: 180,
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
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Infernal Attendants", desc: "While this model is within 3\" of one or more friendly **Daemon Infantry** units, this model has the Lone Operative ability." },
            { name: "Font of Unreality", desc: "Each time an attack is allocated to a friendly **Daemon** unit within 3\" of this model, subtract 1 from the Hit roll." },
        ],
        keywords: ["Character","Chaos","Daemon","Crucible","Faction: Legiones Daemonica","Monster","Immortal Champion","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Infernal Enrapturess",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 3,
            saving: 7,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.ravaging_claws_3,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.heartstring_lyre_cacophonous_melody,
            chaos_daemons_weapons.heartstring_lyre_euphonic_blast,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.heartstring_lyre_cacophonous_melody, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.heartstring_lyre_euphonic_blast, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.ravaging_claws_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- DAEMONETTES" },
            { name: "Invulnerable Save: Infernal Enrapturess", desc: "This model has a 5+ invulnerable save." },
            { name: "Harmonic Alignment", desc: "While this model is leading a unit, in your Command phase, you can return D3 destroyed Bodyguard models to that unit." },
            { name: "Discordant Disruption (Aura)", desc: "While an enemy Psyker unit is within 12\" of this model, Psychic weapons equipped by models in that unit have the [HAZARDOUS] ability." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Chaos","Daemon","Slaanesh","Infernal Enrapturess","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.staff_of_tomorrow,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.infernal_gateway_witchfire,
            chaos_daemons_weapons.infernal_gateway_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.infernal_gateway_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.infernal_gateway_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.staff_of_tomorrow, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "One Head Looks Forward", desc: "At the end of your Command phase, if this model is on the battlefield, take a Leadership test for this model; if that test is passed, you gain 1CP." },
            { name: "One Head Looks Back (Aura)", desc: "Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP (this is not cumulative with any other rules that would increase the CP cost of that Stratagem)." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Fly","Psyker","Chaos","Daemon","Tzeentch","Kairos Fateweaver","Tzeentch non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Karanak",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 7,
            wounds: 5,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.soul_rending_fangs,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.scalding_roar,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.scalding_roar, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.soul_rending_fangs, selected: true},
            ],
        },
        abilities: [
            { name: "Pack Leader", desc: "While this model is leading a unit, you can re-roll Advance and Charge rolls made for that unit." },
            { name: "Prey of the Blood God", desc: "At the start of the first battle round, select one enemy unit to be this model’s prey. Each time a model in this model’s unit makes a melee attack that targets its prey, you can re-roll the Wound roll. Each time this model’s prey is destroyed, select one new enemy unit to be this model’s prey." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- FLESH HOUNDS" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Brass Collar of Bloody Vengeance", desc: "The bearer has the Feel No Pain 3+ ability against Psychic Attacks and mortal wounds." },
        ],
        keywords: ["Beast","Character","Epic Hero","Chaos","Daemon","Khorne","Karanak","Khorne non-Battleline","Faction: Legiones Daemonica"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Keeper of Secrets",
        pts: 240,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 10,
            saving: 5,
            wounds: 18,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.snapping_claws,
            chaos_daemons_weapons.witstealer_sword,
            chaos_daemons_weapons.ritual_knife,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.phantasmagoria_witchfire,
            chaos_daemons_weapons.phantasmagoria_focused_witchfire,
            chaos_daemons_weapons.living_whip,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.phantasmagoria_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.phantasmagoria_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.living_whip, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.snapping_claws, selected: true},
            ],
            slot5: [
                {...chaos_daemons_weapons.witstealer_sword, selected: true},
            ],
            slot6: [
                {...chaos_daemons_weapons.ritual_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemon Lord of Slaanesh (Aura)", desc: "While a friendly Slaanesh Legiones Daemonica unit is within 6\" of this model, improve the Armour Penetration of melee weapons in that unit by 1." },
            { name: "Mesmerising Form", desc: "Each time an attack targets this model, subtract 1 from the Hit roll." },
            { name: "Shining aegis", desc: "The bearer has a Save Characteristic of 3+." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Psyker","Chaos","Daemon","Slaanesh","Keeper of Secrets","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.staff_of_tzeentch,
            chaos_daemons_weapons.baleful_sword,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.bolt_of_change_witchfire,
            chaos_daemons_weapons.bolt_of_change_focused_witchfire,
            chaos_daemons_weapons.rod_of_sorcery,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.bolt_of_change_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.bolt_of_change_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.rod_of_sorcery, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.staff_of_tzeentch, selected: true},
            ],
            slot5: [
                {...chaos_daemons_weapons.baleful_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemon Lord of Tzeentch (Aura)", desc: "While a friendly TZEENTCH LEGIONES DAEMONICA unit is within 6\" of this model, each time a model in that unit makes a ranged attack, add 1 to the Strength characteristic of that attack." },
            { name: "Master of Magicks (Psychic)", desc: "In your Shooting phase, select one of the following abilities: [IGNORES COVER]; [LETHAL HITS]; [SUSTAINED HITS D3]. Until the end of the phase, this model’s Bolt of Change has that ability." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Fly","Psyker","Chaos","Daemon","Tzeentch","Lord of Change","Tzeentch non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "battleline",
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
            chaos_daemons_weapons.diseased_claws_and_teeth,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.diseased_claws_and_teeth, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Mischief Makers (Aura)", desc: "Each time an enemy unit (excluding Titanic units) within Engagement Range of one or more units with this ability is selected to fight, until the end of the phase, each time a model in that enemy unit makes a melee attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Legiones Daemonica","Swarm","Battleline","Chaos","Daemon","Nurgle","Nurglings","Nurgle Battleline","Shadow Legion"],
        pointOptions: [{ models: 4, pts: 70 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "battleline",
        name: "Pink Horrors",
        pts: 140,
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
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.yellow_claws_ref_only,
            chaos_daemons_weapons.blue_claws_ref_only,
            chaos_daemons_weapons.pink_claws,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.coruscating_yellow_flames_ref_only,
            chaos_daemons_weapons.coruscating_blue_flames_ref_only,
            chaos_daemons_weapons.coruscating_pink_flames,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.coruscating_yellow_flames_ref_only, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.coruscating_blue_flames_ref_only, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.coruscating_pink_flames, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.yellow_claws_ref_only, selected: true},
            ],
            slot5: [
                {...chaos_daemons_weapons.blue_claws_ref_only, selected: true},
            ],
            slot6: [
                {...chaos_daemons_weapons.pink_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Split", desc: "Each time a Pink Horror or Blue Horror model in this unit is destroyed, after the attacking unit has finished making its attacks, if this unit is not destroyed, roll one D6 for that model. On a 4+, if it was a Pink Horror, add two Blue Horror models to this unit, and if it was a Blue Horror, add one Brimstone Horror model to this unit." },
            { name: "Horrors are Pink. Horrors are Blue. Where once there was one, now there are two.", desc: "If, at any point, this unit contains no Pink Horrors models, use the Blue Horrors datasheet for this unit. \n\n\n_Designer’s Note: While this unit contains one or more Pink Horrors models, the Cackling Horrors and Exploding Horrors abilities from the Blue Horrors datasheet do not apply to this unit._" },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Battleline","Chaos","Daemon","Tzeentch","Tzeentch Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Plague Drones",
        pts: 110,
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
            chaos_daemons_weapons.foul_mouthparts,
            chaos_daemons_weapons.plaguesword,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.deaths_heads,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.deaths_heads, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.foul_mouthparts, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.plaguesword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Death’s Heads", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly NURGLE LEGIONES DAEMONICA unit makes an attack that targets that unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Fly","Chaos","Daemon","Nurgle","Plague Drones","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [{ models: 4, pts: 220 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Plague Toads [Legends]",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 7,
            tough: 8,
            saving: 6,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.yawning_maw,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.grasping_tongue,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.grasping_tongue, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.yawning_maw, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Grandfather's Blessing", desc: "If a model from your army with the Leader ability can be attached to a BEASTS OF NURGLE unit, it can be attached to this unit instead." },
            { name: "Pouncing Leap", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
        ],
        keywords: ["Faction: Legiones Daemonica","Beast","Chaos","Daemon","Nurgle","Plague Toads","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.plaguesword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.plaguesword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Infected Outbreak", desc: "If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Battleline","Chaos","Daemon","Nurgle","Plaguebearers","Nurgle Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Pox Riders [Legends]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 7,
            tough: 8,
            saving: 6,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.pox_rider_plaguesword,
            chaos_daemons_weapons.yawning_maw,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.grasping_tongue,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.grasping_tongue, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.pox_rider_plaguesword, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.yawning_maw, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Grandfather's Blessing", desc: "If a model from your army with the Leader ability can be attached to a BEASTS OF NURGLE unit, it can be attached to this unit instead." },
            { name: "Bounding Assault", desc: "Each time this unit ends a Charge move, until the end of the turn, Pox Rider plagueswords equipped by models in this unit have the [LANCE] ability." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Nurgle","Pox Riders","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Poxbringer",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 7,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.foul_balesword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.foul_balesword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- PLAGUEBEARERS" },
            { name: "Poxbringer", desc: "While this model is leading a unit, each time a model in that unit makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit." },
            { name: "Feculent Despair (Aura, Psychic)", desc: "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock test, subtract 1 from that test." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Psyker","Chaos","Daemon","Nurgle","Poxbringer","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Rendmaster on Blood Throne",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 4,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.attendants_hellblades,
            chaos_daemons_weapons.blade_of_blood,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.attendants_hellblades, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.blade_of_blood, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Blood Throne", desc: "At the start of the Fight phase, select one enemy unit within 18\" of and visible to this model. Until the end of the phase, each time a friendly KHORNE LEGIONES DAEMONICA unit makes an attack that targets that unit, improve the Strength, Armour Penetration and Damage characteristics of that attack by 1." },
            { name: "Champion Slayer", desc: "Each time this model makes a melee attack that targets a CHARACTER or MONSTER unit, you can re-roll the Wound roll. Each time this model destroys an enemy CHARACTER or MONSTER unit, this model regains up to D6 lost wounds." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Chaos","Daemon","Khorne","Rendmaster on Blood Throne","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.gnarlrod_strike,
            chaos_daemons_weapons.gnarlrod_sweep,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.streams_of_brackish_filth,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.streams_of_brackish_filth, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.gnarlrod_strike, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.gnarlrod_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Virulent Blessing (Psychic)", desc: "At the start of the Fight phase, you can select one enemy unit within 24\" of and visible to this model. Until the end of the phase, each time an attack made by a NURGLE LEGIONES DAEMONICA model is allocated to a model in that unit, add 1 to the Damage characteristic of that attack." },
            { name: "Deluge of Nurgle (Aura)", desc: "While an enemy unit is within 6\" of this model, subtract 2 from the Move characteristic and subtract 1 from the Objective Control characteristic of models in that unit." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Psyker","Chaos","Daemon","Nurgle","Rotigus","Nurgle non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Scabeiathrax the Bloated [Legends]",
        pts: 275,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
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
            chaos_daemons_weapons.blade_of_decay_strike,
            chaos_daemons_weapons.blade_of_decay_sweep,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.putrid_vomit_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.putrid_vomit_2, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.blade_of_decay_strike, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.blade_of_decay_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Emissary of the Plague God (Aura)", desc: "While a friendly NURGLE LEGIONES DAEMONICA unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit." },
            { name: "Nurgle’s Rot (Psychic)", desc: "At the end of your Movement phase, you can select one enemy unit within 12\" of this model. Until the start of your next Movement phase, subtract 1 from the Toughness characteristic of models in that unit." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Psyker","Chaos","Daemon","Nurgle","Scabeiathrax the Bloated","Nurgle non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.lamprey_bite,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lamprey_bite, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Slashing Dive", desc: "In your Movement phase, after this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Legiones Daemonica","Beast","Fly","Chaos","Daemon","Tzeentch","Screamers","Tzeentch non-Battleline","Shadow Legion"],
        pointOptions: [{ models: 4, pts: 160 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Seeker Chariot [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 5,
            wounds: 7,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.seeker_tongues_2,
            chaos_daemons_weapons.slashing_claws_4,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.lashes_of_torment,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lashes_of_torment, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.seeker_tongues_2, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.slashing_claws_4, selected: true},
            ],
        },
        abilities: [
            { name: "Scythed Impact", desc: "Each time this unit makes a Charge move, until the end of the phase, melee weapons equipped by models in this unit have the [ANTI-INFANTRY 4+] ability." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Slaanesh","Seeker Chariot","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Seekers",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 7,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.lashing_tongues,
            chaos_daemons_weapons.slashing_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lashing_tongues, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.slashing_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Unholy Speed", desc: "You can re-roll Advance and Charge rolls made for this unit." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Slaanesh","Seekers","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Shalaxi Helbane",
        pts: 340,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 10,
            saving: 3,
            wounds: 20,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.snapping_claws,
            chaos_daemons_weapons.soulpiercer,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.lash_of_slaanesh,
            chaos_daemons_weapons.pavane_of_slaanesh_witchfire,
            chaos_daemons_weapons.pavane_of_slaanesh_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lash_of_slaanesh, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.pavane_of_slaanesh_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.pavane_of_slaanesh_focused_witchfire, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.snapping_claws, selected: true},
            ],
            slot5: [
                {...chaos_daemons_weapons.soulpiercer, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "No Prey Can Evade", desc: "You can re-roll Advance and Charge rolls made for this model." },
            { name: "Monarch of the Hunt", desc: "At the start of the first battle round, select one enemy unit to be this model’s quarry. Each time this model makes a melee attack that targets its quarry, you can re-roll the Hit roll and you can re-roll the Wound roll. Each time this model’s quarry is destroyed, select one new enemy unit to be this model’s quarry." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Psyker","Chaos","Daemon","Slaanesh","Shalaxi Helbane","Slaanesh non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
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
            chaos_daemons_weapons.slaughter_and_carnage_strike,
            chaos_daemons_weapons.slaughter_and_carnage_sweep,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.bellow_of_endless_fury,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.bellow_of_endless_fury, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.slaughter_and_carnage_strike, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.slaughter_and_carnage_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Rage Embodied (Aura)", desc: "While a friendly Khorne Legiones Daemonica unit is within 6\" of this model, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit." },
            { name: "Murderlust", desc: "This unit is eligible to declare a charge in a turn in which it Advanced." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, add 2 to the Attacks characteristic of this model’s Slaughter and Carnage." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Chaos","Daemon","Khorne","Skarbrand","Khorne non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Skull Altar",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 3,
            wounds: 10,
            leader: 7,
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
            { name: "Shadow of Khorne (Aura)", desc: "The area of the battlefield within 6\" of this FORTIFICATION is considered to be within your army’s Shadow of Chaos. In addition, while a friendly KHORNE LEGIONES DAEMONICA unit is within 6\" of this Fortification, each time you take a Battle-shock test for that unit, you can re-roll that test." },
            { name: "Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Faction: Legiones Daemonica","Fortification","Chaos","Daemon","Khorne","Skull Altar","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Skull Cannon",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 4,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.attendants_hellblades,
            chaos_daemons_weapons.biting_maw,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.skull_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.skull_cannon, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.attendants_hellblades, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.biting_maw, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Skulls of the Fallen", desc: "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. That unit must take a Battle-shock test." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Chaos","Daemon","Khorne","Skull Cannon","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Skullmaster",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.blade_of_blood,
            chaos_daemons_weapons.juggernauts_bladed_horn,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.blade_of_blood, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.juggernauts_bladed_horn, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save: Skullmaster", desc: "This model has a 4+ invulnerable save." },
            { name: "Skullmaster’s Fury", desc: "While this model is leading a unit, each time that unit ends a Charge move, until the end of the turn, Juggernaut’s bladed horns equipped by models in that unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Devastating Charge", desc: "Each time this model’s unit ends a Charge move, each enemy unit within Engagement Range of that unit must take a Battle-shock test." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BLOODCRUSHERS" },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Chaos","Daemon","Khorne","Skullmaster","Khorne non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Skulltaker",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.the_slayer_sword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.the_slayer_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save: Skulltaker", desc: "This model has a 4+ invulnerable save." },
            { name: "Lord of Decapitations", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Skulls for Khorne", desc: "Each time this model makes an attack that targets a Character unit, you can re-roll the Hit roll and you can re-roll the Wound roll. Each time this model destroys an enemy Character unit, you gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- BLOODLETTERS" },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Epic Hero","Chaos","Daemon","Khorne","Skulltaker","Khorne non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Sloppity Bilepiper",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 7,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.marotter,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.marotter, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save: Sloppity Bilepiper", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- PLAGUEBEARERS" },
            { name: "Jolly Gutpipes", desc: "While this model is leading a unit, add 1 to the Move characteristic of models in that unit and you can re-roll Advance rolls made for that unit." },
            { name: "Disease of Mirth (Aura)", desc: "At the start of the Fight phase, every enemy unit (excluding Monsters and Vehicles) within 6\" of this model must take a Battle-shock test." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Chaos","Daemon","Nurgle","Sloppity Bilepiper","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "other",
        name: "Spined Chaos Beast [Legends]",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 4,
            wounds: 12,
            leader: 7,
            control: 4,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.jagged_claws_and_tusked_maw,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.jagged_claws_and_tusked_maw, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Warp Spines", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Chaos","Spined Chaos Beast","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Spoilpox Scrivener",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 7,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.plaguesword_and_distended_maw,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.disgusting_sneezes,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.disgusting_sneezes, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.plaguesword_and_distended_maw, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- PLAGUE BEARERS" },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Keep Counting!", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Meet Your Quota!", desc: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Chaos","Daemon","Nurgle","Spoilpox Scrivener","Nurgle non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Syll'esske",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 6,
            saving: 6,
            wounds: 9,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.axe_of_dominion,
            chaos_daemons_weapons.scourging_whip,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.scourging_whip_2,
            chaos_daemons_weapons.cacophonic_choir_witchfire,
            chaos_daemons_weapons.cacophonic_choir_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.scourging_whip_2, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.cacophonic_choir_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.cacophonic_choir_focused_witchfire, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.axe_of_dominion, selected: true},
            ],
            slot5: [
                {...chaos_daemons_weapons.scourging_whip, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save: Syll'esske", desc: "This model has a 4+ invulnerable save." },
            { name: "Prince of Slaanesh", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, a successful unmodified Wound roll of 5+ scores a Critical Wound." },
            { name: "Delightful Agonies", desc: "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- DAEMONETTES" },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Psyker","Chaos","Daemon","Slaanesh","Syll'esske","Slaanesh non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "The Blue Scribes",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 6,
            wounds: 6,
            leader: 8,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.sharp_quills,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.sharp_quills, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "P’tarix’s Sorcerous Syphon (Aura)", desc: "While an enemy unit is within 12\" of this model, each time a model in that unit makes a Psychic Attack, subtract 1 from the Wound roll." },
            { name: "Xirat’p’s Sorcerous Barrages (Psychic)", desc: "At the end of your Movement phase, roll one D6 for each enemy unit within 6\" of this model: on a 2-3, that unit suffers 1 mortal wound; on a 4-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D6 mortal wounds." },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Epic Hero","Fly","Chaos","Daemon","Tzeentch","The Blue Scribes","Tzeentch non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "The Changeling",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 7,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.the_tricksters_staff,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.infernal_flames_witchfire,
            chaos_daemons_weapons.infernal_flames_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.infernal_flames_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.infernal_flames_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.the_tricksters_staff, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Formless Horror", desc: "Each time an enemy unit wishes to select this model as the target of an attack, that unit must first take a Battle-shock test. If that test is failed, in addition to being Battle-shocked, that enemy unit cannot target this model this phase." },
            { name: "Mischief and Confusion", desc: "At the start of your opponent’s Shooting phase, select one enemy unit within 12\" of and visible to this model and roll one D6: on a 2-5, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll; on a 6, that enemy unit is not eligible to shoot this phase" },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Epic Hero","Psyker","Chaos","Daemon","Tzeentch","The Changeling","Tzeentch non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "The Masque of Slaanesh",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 3,
            saving: 7,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.serrated_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.serrated_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "The Eternal Dance", desc: "At the start of the Fight phase, select one enemy unit within 6\" of this model. Until the end of the phase:\n- Each time a friendly SLAANESH LEGIONES DAEMONICA model makes a melee attack that targets that enemy unit, add 1 to the Wound roll.\n- Each time a model in that enemy unit makes a melee attack, subtract 1 from the Wound roll." },
            { name: "Dazzling Acrobatics", desc: "This model is eligible to declare a charge in a turn in which it Advanced or Fell Back." },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Epic Hero","Fly","Chaos","Daemon","Slaanesh","The Masque of Slaanesh","Slaanesh non-Battleline"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Tormentbringer",
        pts: 140,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 5,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.lashes_of_torment_4,
            chaos_daemons_weapons.seeker_tongues_2,
            chaos_daemons_weapons.slashing_claws_3,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.lashes_of_torment_5,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.lashes_of_torment_5, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.lashes_of_torment_4, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.seeker_tongues_2, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.slashing_claws_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Tormentbringer (Aura)", desc: "While a friendly **Slaanesh Legions Daemonica** unit is within 6\" of this model, melee weapons in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Hysterical Frenzy", desc: "Each time a model in this model’s unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
            { name: "Leader", desc: "This model can be attached to the following unit: \n- **Hellflayers**" },
        ],
        keywords: ["Faction: Legiones Daemonica","Mounted","Character","Psyker","Chaos","Daemon","Slaanesh","Tormentbringer","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Tranceweaver",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 3,
            saving: 7,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            chaos_daemons_weapons.ravaging_claws_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.ravaging_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save: Tranceweaver", desc: "This model has a 5+ invulnerable save." },
            { name: "Tranceweaver", desc: "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is within range of an objective marker, you can re-roll the Hit roll instead." },
            { name: "Symphony of Pain (Psychic)", desc: "At the end of your Movement phase, you can select one enemy unit that is Battle-shocked and within 12\" of this model. Until the end of the turn, each time a SLAANESH LEGIONES DAEMONICA model from your army makes an attack that targets that enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- DAEMONETTES" },
        ],
        keywords: ["Faction: Legiones Daemonica","Infantry","Character","Psyker","Chaos","Daemon","Slaanesh","Tranceweaver","Slaanesh non-Battleline","Shadow Legion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_daemons",
        class: "characters",
        name: "Zarakynel [Legends]",
        pts: 320,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 14,
            tough: 10,
            saving: 5,
            wounds: 20,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            chaos_daemons_weapons.snapping_claws,
            chaos_daemons_weapons.souleater_blade,
        ],
        rangedWeapons: [
            chaos_daemons_weapons.phantasmagoria_witchfire,
            chaos_daemons_weapons.phantasmagoria_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...chaos_daemons_weapons.phantasmagoria_witchfire, selected: true},
            ],
            slot2: [
                {...chaos_daemons_weapons.phantasmagoria_focused_witchfire, selected: true},
            ],
            slot3: [
                {...chaos_daemons_weapons.snapping_claws, selected: true},
            ],
            slot4: [
                {...chaos_daemons_weapons.souleater_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Emissary of the Prince of Excess (Aura)", desc: "While a friendly SLAANESH LEGIONES DAEMONICA unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit." },
            { name: "Mesmerising Form", desc: "Each time an attack targets this model, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Legiones Daemonica","Monster","Character","Epic Hero","Psyker","Chaos","Daemon","Slaanesh","Zarakynel","Slaanesh non-Battleline"],
        pointOptions: [],
        transport: null,
    },
]

export default chaos_daemons_army
