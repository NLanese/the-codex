// AUTO-GENERATED units for Genestealer Cults (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import genestealer_cults_weapons from "../weapons/genestealer_cults"

const genestealer_cults_army = [
    {
        army: "genestealer_cults",
        class: "other",
        name: "Aberrants",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
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
            genestealer_cults_weapons.aberrant_weapons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.aberrant_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Feel No Pain 5+", desc: "This unit has a 5+ Feel No Pain" },
            { name: "Hulking Bodyguards", desc: "While a CHARACTER is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll." },
        ],
        keywords: ["Aberrants","Infantry","Great Devourer","Faction: Genestealer Cults"],
        pointOptions: [{ models: 5, pts: 300 }],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Abominant",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 5,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.power_sledgehammer,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.power_sledgehammer, selected: true},
            ],
        },
        abilities: [
            { name: "Feel No Pain 5+", desc: "This model has a 5+ Feel No Pain" },
            { name: "The Chosen One", desc: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+ do not remove the destroyed model from play, it can fight after the attacking model's unit has finished making it's attacks and is then removed from play." },
            { name: "Regenerating Gene-mass", desc: "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- ABERRANTS" },
        ],
        keywords: ["Abominant","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "other",
        name: "Achilles Ridgerunners",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 3,
            wounds: 8,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.armoured_hull,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.twin_heavy_stubber,
            genestealer_cults_weapons.achilles_missile_launcher,
            genestealer_cults_weapons.heavy_mortar,
            genestealer_cults_weapons.heavy_mining_laser,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.twin_heavy_stubber, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.achilles_missile_launcher, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.heavy_mortar, selected: true},
            ],
            slot4: [
                {...genestealer_cults_weapons.heavy_mining_laser, selected: true},
            ],
            slot5: [
                {...genestealer_cults_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Crossfire", desc: "in your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly **Genestealer Cults** unit makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per turn." },
            { name: "Flare Launcher", desc: "The bearer’s unit has the SMOKE keyword and you can target it with the Smokescreen Stratagem for 0CP." },
            { name: "Spotter", desc: "The bearer’s ranged weapons have a Ballistic Skill characteristic of 3+." },
            { name: "Survey Augur", desc: "Each time the bearer’s unit has shot, select one enemy unit that was hit by one or more attacks made by the bearer this phase. Until the end of the phase, each time a friendly GENESTEALER CULTS model makes an attack against that unit, that attack has the [IGNORES COVER] ability." },
        ],
        keywords: ["Achilles Ridgerunners","Faction: Genestealer Cults","Vehicle","Great Devourer"],
        pointOptions: [{ models: 2, pts: 170 }],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Acolyte Iconward",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 5,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.cult_claws,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.cult_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Nexus of Devotion", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability. If that unit has the HYBRID METAMORPHS keyword, models in that unit have the Feel No Pain 4+ ability instead." },
            { name: "Summon the Cult", desc: "Once per battle, when you have to remove a Cult Ambush marker because your opponent has moved too close to it, if one or more models from your army with this ability are on the battlefield, you can use this ability. If you do, instead of removing that marker, you can place it anywhere on the battlefield that is within 12\" of a model from your army with this ability and more than 9\" horizontally away from all enemy units (if this is not possible, this ability is not considered to have been used and that marker is removed as normal)." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Acolyte Hybrids**\n- **Hybrid Metamorphs**\n- **Neophyte Hybrids**" },
        ],
        keywords: ["Acolyte Iconward","Faction: Genestealer Cults","Infantry","Character","Grenades","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "other",
        name: "Atalan Jackals",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.close_combat_weapon,
            genestealer_cults_weapons.atalan_power_weapon,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.mining_laser,
            genestealer_cults_weapons.atalan_incinerator,
            genestealer_cults_weapons.heavy_stubber,
            genestealer_cults_weapons.grenade_launcher_frag,
            genestealer_cults_weapons.grenade_launcher_krak,
            genestealer_cults_weapons.atalan_small_arms,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.mining_laser, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.atalan_incinerator, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.heavy_stubber, selected: true},
            ],
            slot4: [
                {...genestealer_cults_weapons.grenade_launcher_frag, selected: true},
            ],
            slot5: [
                {...genestealer_cults_weapons.grenade_launcher_krak, selected: true},
            ],
            slot6: [
                {...genestealer_cults_weapons.atalan_small_arms, selected: true},
            ],
            slot7: [
                {...genestealer_cults_weapons.close_combat_weapon, selected: true},
            ],
            slot8: [
                {...genestealer_cults_weapons.atalan_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Outrider Gangs", desc: "Each time you use the Cult Ambush ability to set this unit back up on the battlefield, in addition to the normal rules, all of its models must be set up wholly within 9\" of a battlefield edge and at least one of its models must be touching one of your Cult Ambush markers (that marker is then removed from the battlefield). If this cannot be done, this unit cannot be set back up." },
            { name: "Demolition Run", desc: "Once per battle round, in your Movement phase, when this unit ends a Normal, Advance, or Fall Back move, you can select one enemy unit within 6\" of and visible to this unit and roll one D6 for each ATALAN JACKALS model in this unit: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds.)" },
        ],
        keywords: ["Atalan Jackals","Faction: Genestealer Cults","Mounted","Grenades","Great Devourer"],
        pointOptions: [{ models: 5, pts: 150 }],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Benefictus",
        pts: 70,
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
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.psionic_cascade_witchfire,
            genestealer_cults_weapons.psionic_cascade_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.psionic_cascade_witchfire, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.psionic_cascade_focused_witchfire, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACOLYTE HYBRIDS\n- HYBRID METAMORPHS\n- NEOPHYTE HYBRIDS" },
            { name: "Bio-horror Disruption (Psychic)", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Psionic Shield (Psychic)", desc: "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 4+ invulnerable save." },
        ],
        keywords: ["Character","Infantry","Psyker","Great Devourer","Faction: Genestealer Cults","Benefictus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Biophagus",
        pts: 50,
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
            genestealer_cults_weapons.injector_goad,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.autopistol,
            genestealer_cults_weapons.chemical_vials,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.chemical_vials, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.injector_goad, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- ABERRANTS\n\n- ACOLYTE HYBRIDS WITH AUTOPISTOLS\n- ACOLYTE HYBRIDS WITH HANDFLAMERS\n- HYBRID METAMORPHS\n- NEOPHYTE HYBRIDS\n\nYou can attach this model to an ACOLYTE HYBRIDS or NEOPHYTE HYBRID unit, even if a PRIMUS, MAGUS, or ACOLYTE ICONWARD model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Twisted Science", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Biological Warfare", desc: "Once per battle, when this model’s unit is selected to fight, this model can use this ability. If it does, until the end of the phase, improve the Attacks and Damage characteristics of its injector goad by 3." },
            { name: "Alchemicus Familiar", desc: "Once per battle, when the bearer’s unit is selected to fight, the bearer can use its alchemicus familiar. If it does, until the end of the phase, each time a model in the bearer's unit makes an attack that targets an INFANTRY unit, add 1 to the Wound roll" },
        ],
        keywords: ["Biophagus","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Clamavus",
        pts: 50,
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
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACOLYTE HYBRIDS\n- HYBRID METAMORPHS\n- NEOPHYTE HYBRIDS\nYou can attach this model to an ACOLYTE HYBRIDS or NEOPHYTE HYBRID unit, even if a PRIMUS, MAGUS, or ACOLYTE ICONWARD model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Voice of New Truths", desc: "In your Command phase, one model from your army with this ability can use it, if it does, select one enemy unit with 18\" of it, that enemy unit must take a Battle-shock test." },
            { name: "Scrambler Array", desc: "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this model." },
        ],
        keywords: ["Clamavus","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Cult Guerrilla [Crucible]",
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
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Battlefield Analysis", desc: "Once per battle round, one model from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Acolyte Hybrids with Hand Flamers**\n- **Acolyte Hybrids with Autopistols**\n- **Hybrid Metamorphs**\n- **Neophyte Hybrids**" },
        ],
        keywords: ["Character","Infantry","Crucible","Great Devourer","Faction: Genestealer Cults","Grenades","Cult Guerrilla"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Cult Insurrectionist [Crucible]",
        pts: 80,
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
            { name: "Cult Demagogue", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Acolyte Hybrids with Hand Flamers**\n- **Acolyte Hybrids with Autopistols**\n- **Hybrid Metamorphs**\n- **Neophyte Hybrids**" },
        ],
        keywords: ["Character","Infantry","Crucible","Great Devourer","Cult Insurrectionist","Faction: Genestealer Cults"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "other",
        name: "Goliath Rockgrinder",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.drilldozer_blade,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.clearance_incinerator,
            genestealer_cults_weapons.heavy_seismic_cannon,
            genestealer_cults_weapons.heavy_mining_laser,
            genestealer_cults_weapons.heavy_stubber_2,
            genestealer_cults_weapons.demolition_charge_cache,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.clearance_incinerator, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.heavy_seismic_cannon, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.heavy_mining_laser, selected: true},
            ],
            slot4: [
                {...genestealer_cults_weapons.heavy_stubber_2, selected: true},
            ],
            slot5: [
                {...genestealer_cults_weapons.demolition_charge_cache, selected: true},
            ],
            slot6: [
                {...genestealer_cults_weapons.drilldozer_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Grinding Line-breaker", desc: "Each time an enemy unit (excluding MONSTER and VEHICLES) that is within Engagement Range of this model Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests." },
        ],
        keywords: ["Goliath Rockgrinder","Faction: Genestealer Cults","Vehicle","Great Devourer","Transport"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 GENESTEALER CULTS INFANTRY models.",
    },
    {
        army: "genestealer_cults",
        class: "transports",
        name: "Goliath Truck",
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
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.goliath_wheels,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.twin_autocannon,
            genestealer_cults_weapons.demolition_charge_cache,
            genestealer_cults_weapons.heavy_stubber_2,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.twin_autocannon, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.demolition_charge_cache, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.heavy_stubber_2, selected: true},
            ],
            slot4: [
                {...genestealer_cults_weapons.goliath_wheels, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this TRANSPORT this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Goliath Truck","Faction: Genestealer Cults","Vehicle","Dedicated Transport","Transport","Great Devourer"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 GENESTEALER CULTS INFANTRY models.",
    },
    {
        army: "genestealer_cults",
        class: "other",
        name: "Hybrid Metamorphs",
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
            genestealer_cults_weapons.leaders_bio_weapons,
            genestealer_cults_weapons.metamorph_mutations_strike,
            genestealer_cults_weapons.metamorph_mutations_sweep,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.autopistol_2,
            genestealer_cults_weapons.hand_flamer,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.autopistol_2, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.hand_flamer, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.leaders_bio_weapons, selected: true},
            ],
            slot4: [
                {...genestealer_cults_weapons.metamorph_mutations_strike, selected: true},
            ],
            slot5: [
                {...genestealer_cults_weapons.metamorph_mutations_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Brood Surge", desc: "Each time an enemy unit is selected to shoot, after that unit has shot, if any models from this unit were destroyed as a result of those attacks, this unit can make a Brood Surge move. To do so, roll one D6: this unit can be moved a number of inches up to the result, but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so those models can be within Engagement Range of that enemy unit.\n\nIf, at the start of the battle, no model in this unit is equipped with a hand flamer, each time this unit makes a Brood Surge move, it can be moved up to 6\" instead of up to D6\". A unit cannot make a Brood Surge move while it is Battle-shocked." },
        ],
        keywords: ["Hybrid Metamorphs","Faction: Genestealer Cults","Infantry","Grenades","Great Devourer"],
        pointOptions: [{ models: 5, pts: 140 }],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Jackal Alphus",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.cult_sniper_rifle,
            genestealer_cults_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.cult_sniper_rifle, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.autopistol, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Priority Target", desc: "In your Shooting phase, after this model's unit has shot, select one enemy unit hit by one or more of those attacks made with a cult sniper rifle. Until the end of the phase, each time a friendly **Genestealer Cults** model makes an attack that targets that enemy unit, re-roll a Hit roll of 1." },
            { name: "Master Outrider", desc: "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy units, that unit can make a Normal move of up to 6\" as if it were your Movement phase. If it does, until the end of the turn, that unit is not eligible to declare a charge." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- ATALAN JACKALS" },
        ],
        keywords: ["Jackal Alphus","Faction: Genestealer Cults","Character","Grenades","Great Devourer","Mounted"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Kelermorph",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.liberator_autostubs,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.liberator_autostubs, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Hypersensory Abilities", desc: "Once per turn, in your opponent's Movement phase, when an enemy unit ends a Normal, Advance, or Fall Back move within 9\" of this model, if this unit is not within Engagement Range of one or more enemy units, it can shoot at that unit as if it were your Shooting phase, and then make a Normal move of up to D6\" (it cannot embark within a TRANSPORT as part of this move)" },
            { name: "Heroic Fusillade", desc: "Once per turn, after one model from your army with this ability has shot, you can select one INFANTRY unit hit by one or more of those attacks. That unit must take a Battle-shock test." },
        ],
        keywords: ["Kelermorph","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Locus",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.locus_blades,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.locus_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Sudden Assault", desc: "While this model is leading a unit, models in that unit have the Fights First ability" },
            { name: "Bodyguard", desc: "While this model is leading a unit, other Character models attached to that unit have the Feel No Pain 4+ ability" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACOLYTE HYBRIDS\n- HYBRID METAMORPHS\n- NEOPHYTE HYBRIDS\nYou can attach this model to an ACOLYTE HYBRIDS or NEOPHYTE HYBRID unit, even if a PRIMUS, MAGUS, or ACOLYTE ICONWARD model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Locus","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Magus",
        pts: 50,
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
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.force_stave,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.force_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Psychic Familiar", desc: "Once per battle, at the start of any of your opponent’s Shooting phases, this model can use its psychic familiar. If it does, until the end of the phase, add 6\" to the range of its Mind Control ability." },
            { name: "Mind Control (Psychic)", desc: "At the start of your opponent’s Shooting phase, one PSYKER model from your army with this ability can use it. If used, select one enemy unit within 18\" of and visible to that PSYKER model and roll one D6: on a 1, that PSYKER model suffers D3 mortal wounds; on a 2-5, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll; on a 6, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll and subtract 1 from the Wound Roll." },
            { name: "Spiritual Leader", desc: "Once per battle, at the start of any phase, you can select one friendly GENESTELERS CULTS unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACOLYTE HYBRIDS\n- HYBRID METAMORPHS\n- NEOPHYTE HYBRIDS" },
        ],
        keywords: ["Magus","Faction: Genestealer Cults","Infantry","Character","Psyker","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "battleline",
        name: "Neophyte Hybrids",
        pts: 65,
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
            genestealer_cults_weapons.power_weapon,
            genestealer_cults_weapons.chainsword,
            genestealer_cults_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.mining_laser_2,
            genestealer_cults_weapons.seismic_cannon,
            genestealer_cults_weapons.hybrid_firearm,
            genestealer_cults_weapons.autopistol_2,
            genestealer_cults_weapons.heavy_stubber_2,
            genestealer_cults_weapons.webber,
            genestealer_cults_weapons.flamer,
            genestealer_cults_weapons.grenade_launcher_frag,
            genestealer_cults_weapons.grenade_launcher_krak,
            genestealer_cults_weapons.anointed_pistol,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.mining_laser_2, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.seismic_cannon, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.hybrid_firearm, selected: true},
            ],
            slot4: [
                {...genestealer_cults_weapons.autopistol_2, selected: true},
            ],
            slot5: [
                {...genestealer_cults_weapons.heavy_stubber_2, selected: true},
            ],
            slot6: [
                {...genestealer_cults_weapons.webber, selected: true},
            ],
            slot7: [
                {...genestealer_cults_weapons.flamer, selected: true},
            ],
            slot8: [
                {...genestealer_cults_weapons.grenade_launcher_frag, selected: true},
            ],
            slot9: [
                {...genestealer_cults_weapons.grenade_launcher_krak, selected: true},
            ],
            slot10: [
                {...genestealer_cults_weapons.anointed_pistol, selected: true},
            ],
            slot11: [
                {...genestealer_cults_weapons.power_weapon, selected: true},
            ],
            slot12: [
                {...genestealer_cults_weapons.chainsword, selected: true},
            ],
            slot13: [
                {...genestealer_cults_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Cult Icon", desc: "In your Command phase, you can return up to 3 destroyed models to the bearer’s unit. If the bearer’s unit is within range of an objective marker you control, you can return up to D3+3 destroyed models to that unit instead. This ability cannot be used to return destroyed CHARACTER models in Attached units and any [ONE SHOT] weapons equipped with by returned models that were shot before they were destroyed are still considered to have been shot." },
            { name: "A Plan Generations in the Making", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
        ],
        keywords: ["Neophyte Hybrids","Faction: Genestealer Cults","Infantry","Grenades","Great Devourer","Battleline"],
        pointOptions: [{ models: 10, pts: 145 }],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Nexos",
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
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.autopistol,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Battlefield Analysis", desc: "Once per battle round, one model from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Cult Infiltration", desc: "At the start of each player’s Command phase, if this model is on the battlefield, you can select one of your Cult Ambush markers that is on the battlefield and has not been moved this turn and move it up to 6\"" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- ACOLYTE HYBRIDS\n- HYBRID METAMORPHS\n- NEOPHYTE HYBRIDS\nYou can attach this model to an ACOLYTE HYBRIDS or NEOPHYTE HYBRID unit, even if a PRIMUS, MAGUS, or ACOLYTE ICONWARD model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Nexos","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Patriarch",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.patriarchs_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.patriarchs_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- PURESTRAIN GENESTEALERS" },
            { name: "Might From Beyond", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Cosmic Horror (Psychic)", desc: "At the start of the Fight phase, each enemy unit within 6\" of this model must take a Battle-shock test." },
            { name: "Psychic Familiar", desc: "Once per battle, at the start of the Fight phase, this model can use its psychic familiar. If it does, until the end of the phase, add 6\" to the range of its Cosmic Horror ability." },
            { name: "Supreme Commander", desc: "- You cannot include more than one **Patriarch** model in your army.\n- If this model is in your army, it must be your **Warlord**." },
        ],
        keywords: ["Patriarch","Faction: Genestealer Cults","Infantry","Character","Psyker","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Primus",
        pts: 70,
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
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.toxin_injector_claw,
            genestealer_cults_weapons.cult_bonesword,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.scoped_needle_pistol,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.scoped_needle_pistol, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.toxin_injector_claw, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.cult_bonesword, selected: true},
            ],
        },
        abilities: [
            { name: "Cult Demagogue", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can add 1 to the Hit roll." },
            { name: "Decoys and Misdirection", desc: "If your army includes one or more models with this ability, after both players have deployed their armies, select up to three GENESTEALER CULTS units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Acolyte Hybrids**\n- **Hybrid Metamorphs**\n- **Neophyte Hybrids**" },
        ],
        keywords: ["Primus","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "other",
        name: "Purestrain Genestealers",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.cult_claws_and_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.cult_claws_and_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Swift and Deadly", desc: "This unit is eligible to declare a charge in a turn in which it Advanced." },
        ],
        keywords: ["Purestrain Genestealers","Faction: Genestealer Cults","Infantry","Great Devourer"],
        pointOptions: [{ models: 5, pts: 140 }],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Reductus Saboteur",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.demolition_charges,
            genestealer_cults_weapons.autopistol,
            genestealer_cults_weapons.remote_explosives,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.demolition_charges, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.autopistol, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.remote_explosives, selected: true},
            ],
            slot4: [
                {...genestealer_cults_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Primed and Ready", desc: "In your Shooting phase, you can select one model from your army with this ability as the target of the Grenade Stratagem for 0CP, provided that model has not already been the target of that Stratagem this phase." },
            { name: "Planted Explosives", desc: "Once per battle, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, this model can use its Reductus mine. If it does, roll one D6: on a 2+, that enemy unit suffers D3+3 mortal wounds. Only one model from your army with this ability can use it in the same battle round." },
        ],
        keywords: ["Reductus Saboteur","Faction: Genestealer Cults","Infantry","Character","Grenades","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Sanctus",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            genestealer_cults_weapons.sanctus_bio_dagger,
            genestealer_cults_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            genestealer_cults_weapons.cult_sniper_rifle_2,
        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.cult_sniper_rifle_2, selected: true},
            ],
            slot2: [
                {...genestealer_cults_weapons.sanctus_bio_dagger, selected: true},
            ],
            slot3: [
                {...genestealer_cults_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Creeping Shadow", desc: "If this model is equipped with a cult sniper rifle, once per turn when an enemy unit ends a Normal, Advance, or Fall Back move within 9\" of this model, if this model is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\"" },
            { name: "Psychic Spoor", desc: "At the start of the first battle round, select one enemy unit to be this model’s prey. Each time this model makes an attack that targets its prey, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Cloaked Assassin", desc: "If this model is equipped with a Sanctus Bio-dagger, enemy units cannot use the Fire Overwatch Stratagem to shoot at this model." },
        ],
        keywords: ["Sanctus","Faction: Genestealer Cults","Infantry","Character","Great Devourer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "other",
        name: "Tectonic Fragdrill [Legends]",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 11,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            genestealer_cults_weapons.fragdrill,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...genestealer_cults_weapons.fragdrill, selected: true},
            ],
        },
        abilities: [
            { name: "Tectonic Fragdrill", desc: "Friendly GENESTEALER CULT INFANTRY models can be set up or end any type of move on top of the floor sections of this FORTIFICATION." },
            { name: "Underground Egress", desc: "Each time one of your Cult Ambush markers is removed as the result of an enemy unit ending any kind of move within 9\" of it, you can instead move that marker so that it is wholly within 9\" of this FORTIFICATION and more than 9\" horizontally away from all enemy units (if this is not possible, that marker is removed as normal)." },
            { name: "Manufactorum Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
            { name: "Fortification", desc: "While an enemy unit is only within Engagement Range of one or more FORTIFICATION from your army:\n- That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll.\n- Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so." },
        ],
        keywords: ["Fortification","Vehicle","Tectonic Fragdrill","Faction: Genestealer Cults"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "genestealer_cults",
        class: "characters",
        name: "Voice of the Patriarch [Crucible]",
        pts: 70,
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
            { name: "Biohorror Disruption (Psychic)", desc: "Ranged weapons equipped by models in this unit have the **[LETHAL HITS]** ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Acolyte Hybrids with Hand Flamers**\n- **Acolyte Hybrids with Autopistols**\n- **Hybrid Metamorphs**\n- **Neophyte Hybrids**" },
        ],
        keywords: ["Character","Infantry","Crucible","Great Devourer","Faction: Genestealer Cults","Psyker","Voice of the Patriarch"],
        pointOptions: [],
        transport: null,
    },
]

export default genestealer_cults_army
