// AUTO-GENERATED units for Necrons (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import necrons_weapons from "../weapons/necrons"

const necrons_army = [
    {
        army: "necrons",
        class: "other",
        name: "Annihilation Barge",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 3,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk,
        ],
        rangedWeapons: [
            necrons_weapons.twin_tesla_destructor,
            necrons_weapons.gauss_cannon,
            necrons_weapons.tesla_cannon,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.twin_tesla_destructor, selected: true},
            ],
            slot2: [
                {...necrons_weapons.gauss_cannon, selected: true},
            ],
            slot3: [
                {...necrons_weapons.tesla_cannon, selected: true},
            ],
            slot4: [
                {...necrons_weapons.armoured_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Malevolent Arcing", desc: "In your Shooting phase, each time you select a target for this model’s twin tesla destructor, roll one D6 for the target unit and one D6 for every other enemy unit within 3\" of the target unit. On a 5+, the unit being rolled for is struck by arcing energies; after resolving all of this model’s attacks against the target unit, each unit struck by arcing energies suffers D3 mortal wounds." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Fly","Annihilation Barge"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Anrakyr the Traveller [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
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
            necrons_weapons.warscythe,
        ],
        rangedWeapons: [
            necrons_weapons.tachyon_arrow,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.tachyon_arrow, selected: true},
            ],
            slot2: [
                {...necrons_weapons.warscythe, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Lord of the Pyrrhian Eternals", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Wound roll." },
            { name: "Mind in the Machine", desc: "At the start of your opponent’s Shooting phase, select one enemy VEHICLE unit within 12\" of and visible to this model. That unit must take a Leadership test. If that test is passed, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; if that test is failed, that unit is not eligible to shoot this phase." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Noble","Anrakyr the Traveller"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "C'tan Shard of the Deceiver",
        pts: 310,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 11,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            necrons_weapons.golden_fists,
        ],
        rangedWeapons: [
            necrons_weapons.cosmic_insanity,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.cosmic_insanity, selected: true},
            ],
            slot2: [
                {...necrons_weapons.golden_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Grand Illusion", desc: "If your army includes this model, after both players have deployed their armies, select up to three **NECRONS** units from your army and redeploy them. When doing so, any of those units can be placed in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
            { name: "Lord of Deceit (Aura)", desc: "Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP." },
        ],
        keywords: ["Faction: Necrons","Monster","Character","Epic Hero","Fly","C'tan Shard of the Deceiver"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "C'tan Shard of the Nightbringer",
        pts: 340,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            necrons_weapons.scythe_of_the_nightbringer_strike,
            necrons_weapons.scythe_of_the_nightbringer_sweep,
        ],
        rangedWeapons: [
            necrons_weapons.gaze_of_death,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gaze_of_death, selected: true},
            ],
            slot2: [
                {...necrons_weapons.scythe_of_the_nightbringer_strike, selected: true},
            ],
            slot3: [
                {...necrons_weapons.scythe_of_the_nightbringer_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Drain Life", desc: "At the end of the Fight phase, roll one D6 for each enemy unit within 6\" of this model: on a 4+, that enemy unit suffers D3 mortal wounds." },
            { name: "Quantum Goad", desc: "This model is eligible to declare a charge in a turn in which it Advanced." },
        ],
        keywords: ["Faction: Necrons","Monster","Character","Epic Hero","Fly","C'tan Shard of the Nightbringer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "C'tan Shard of the Void Dragon",
        pts: 330,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            necrons_weapons.spear_of_the_void_dragon_strike,
            necrons_weapons.spear_of_the_void_dragon_sweep,
            necrons_weapons.canoptek_tail_blades,
        ],
        rangedWeapons: [
            necrons_weapons.spear_of_the_void_dragon,
            necrons_weapons.voltaic_storm,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.spear_of_the_void_dragon, selected: true},
            ],
            slot2: [
                {...necrons_weapons.voltaic_storm, selected: true},
            ],
            slot3: [
                {...necrons_weapons.spear_of_the_void_dragon_strike, selected: true},
            ],
            slot4: [
                {...necrons_weapons.spear_of_the_void_dragon_sweep, selected: true},
            ],
            slot5: [
                {...necrons_weapons.canoptek_tail_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Matter Absorption", desc: "At the start of your Shooting phase, select one enemy **VEHICLE** unit within 12\" of this model and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds and this model regains up to that many lost wounds." },
            { name: "Animus Damper", desc: "Once per turn, at the start of your opponent’s Shooting phase, select one enemy **Vehicle** unit visible to the bearer. That unit must take a Leadership test. Until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll and, if that Leadership test was failed, subtract 1 from the Wound roll as well." },
        ],
        keywords: ["Faction: Necrons","Monster","Character","Epic Hero","Fly","C'tan Shard of the Void Dragon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Acanthrites [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 2,
            leader: 8,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.voidblade,
        ],
        rangedWeapons: [
            necrons_weapons.cutting_beam,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.cutting_beam, selected: true},
            ],
            slot2: [
                {...necrons_weapons.voidblade, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged Armour", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly NECRONS model makes an attack that targets that unit, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Faction: Necrons","Beast","Fly","Canoptek","Acanthrites"],
        pointOptions: [{ models: 4, pts: 170 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Doomstalker",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 8,
            control: 4,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.doomstalker_limbs,
        ],
        rangedWeapons: [
            necrons_weapons.doomsday_blaster,
            necrons_weapons.twin_gauss_flayer,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.doomsday_blaster, selected: true},
            ],
            slot2: [
                {...necrons_weapons.twin_gauss_flayer, selected: true},
            ],
            slot3: [
                {...necrons_weapons.doomstalker_limbs, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 wounds remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Sentinel Construct", desc: "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Walker","Canoptek","Doomstalker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Macrocytes",
        pts: 85,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.claws,
        ],
        rangedWeapons: [
            necrons_weapons.atomiser_beam,
            necrons_weapons.tesla_caster,
            necrons_weapons.gauss_scalpel,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.atomiser_beam, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tesla_caster, selected: true},
            ],
            slot3: [
                {...necrons_weapons.gauss_scalpel, selected: true},
            ],
            slot4: [
                {...necrons_weapons.claws, selected: true},
            ],
        },
        abilities: [
            { name: "Harassment Swarm (Aura)", desc: "While an enemy unit (excluding **Monsters** and **Vehicles**) is within 3\" of this unit, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Nanoscarab Projector", desc: "Once per battle round, when a friendly **Necrons** unit within 3\" of the bearer activates its Reanimation Protocols, the bearer can use this ability. If it does, that unit reanimates 1 additional wound." },
            { name: "Accelerator Mandible", desc: "At the start of the Fight phase, select one friendly **Canoptek** unit within 3\" of the bearer’s unit. Until the end of the phase, improve the Weapon Skill characteristic of weapons equipped by models in that unit by 1." },
        ],
        keywords: ["Faction: Necrons","Beast","Fly","Canoptek","Macrocytes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Reanimator",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 8,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.reanimators_claws,
        ],
        rangedWeapons: [
            necrons_weapons.atomiser_beam_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.atomiser_beam_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.reanimators_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Nanoscarab Reanimation Beam (Aura)", desc: "While a friendly NECRONS unit is within 3\" of this model, each time that unit’s Reanimation Protocols activate, that unit reanimates an additional D3 wounds." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Walker","Canoptek","Reanimator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Scarab Swarms",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 2,
            saving: 6,
            wounds: 4,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.feeder_mandibles,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.feeder_mandibles, selected: true},
            ],
        },
        abilities: [
            { name: "Self-destruction", desc: "At the start of the Fight phase, if this unit is within Engagement Range of one or more enemy units, you can select one model in this unit to destroy. If you do, select one enemy unit within Engagement Range of that model and roll one D6, adding 1 to the result if that unit is a VEHICLE. On a 2-5, that unit suffers D3 mortal wounds; on a 6+, that unit suffers 3 mortal wounds." },
            { name: "Chittering Swarm", desc: "While an enemy unit is within Engagement Range of this unit, subtract 1 from the Objective Control  characteristic of models in that enemy unit (to a minimum of 1). While this unit is within 6\" of one or more friendly CRYPTEK models, the Objective Control characteristic of models in this unit is 1." },
        ],
        keywords: ["Swarm","Fly","Canoptek","Scarab Swarms","Faction: Necrons"],
        pointOptions: [{ models: 4, pts: 80 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Spyders",
        pts: 75,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 8,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.automaton_claws,
        ],
        rangedWeapons: [
            necrons_weapons.particle_beamer,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.particle_beamer, selected: true},
            ],
            slot2: [
                {...necrons_weapons.automaton_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Fabricator Claw Array (Aura)", desc: "While a friendly NECRONS VEHICLE unit is within 6\" of the bearer, models in that unit have the Feel No Pain 6+ ability." },
            { name: "Canoptek Swarm", desc: "In your Command phase, select one friendly CANOPTEK SCARAB SWARM unit within 6\" of this unit. One destroyed model is returned to that CANOPTEK SCARAB SWARM unit for each SPYDER model in this unit." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Fly","Canoptek","Spyders"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Tomb Crawlers",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 3,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.claws_2,
        ],
        rangedWeapons: [
            necrons_weapons.twin_gauss_reaper,
            necrons_weapons.dimensional_isolator,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.twin_gauss_reaper, selected: true},
            ],
            slot2: [
                {...necrons_weapons.dimensional_isolator, selected: true},
            ],
            slot3: [
                {...necrons_weapons.claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Weapon Sentinels", desc: "Each time a model in this unit makes a ranged attack that targets a unit within 12\", you can ignore any or all modifiers to the following: that attack’s Ballistic Skill characteristic; the Hit roll; the Wound roll." },
            { name: "Canoptek Retinue", desc: "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a **Cryptek** model (a unit cannot have more than one **Tomb Crawlers** unit joined to it and cannot have both a **Tomb Crawlers** and a **Cryptothralls** unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly." },
        ],
        keywords: ["Faction: Necrons","Beast","Canoptek","Tomb Crawlers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Tomb Sentinel [Legends]",
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
            wounds: 9,
            leader: 8,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.tomb_sentinel_claws,
        ],
        rangedWeapons: [
            necrons_weapons.exile_cannon,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.exile_cannon, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tomb_sentinel_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Aggressor Guardian", desc: "Each time an attack targets this model, if this model is within range of an objective marker, worsen the Armour Penetration characteristic of that attack by 1. In addition, each time this model makes an attack that targets a unit within range of an objective marker, improve the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Faction: Necrons","Monster","Canoptek","Tomb Sentinel"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Tomb Stalker [Legends]",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 9,
            leader: 8,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.tomb_stalker_claws,
        ],
        rangedWeapons: [
            necrons_weapons.gauss_slicers,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauss_slicers, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tomb_stalker_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Snaking Ambush", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
        ],
        keywords: ["Faction: Necrons","Monster","Canoptek","Tomb Stalker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Canoptek Wraiths",
        pts: 110,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 8,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.vicious_claws,
            necrons_weapons.whip_coils,
        ],
        rangedWeapons: [
            necrons_weapons.transdimensional_beamer,
            necrons_weapons.particle_caster,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.transdimensional_beamer, selected: true},
            ],
            slot2: [
                {...necrons_weapons.particle_caster, selected: true},
            ],
            slot3: [
                {...necrons_weapons.vicious_claws, selected: true},
            ],
            slot4: [
                {...necrons_weapons.whip_coils, selected: true},
            ],
        },
        abilities: [
            { name: "Wraith Form", desc: "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Necrons","Beast","Fly","Canoptek","Wraiths"],
        pointOptions: [{ models: 4, pts: 220 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Catacomb Command Barge",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 3,
            wounds: 9,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.staff_of_light,
            necrons_weapons.overlords_blade,
        ],
        rangedWeapons: [
            necrons_weapons.gauss_cannon,
            necrons_weapons.tesla_cannon,
            necrons_weapons.staff_of_light_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauss_cannon, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tesla_cannon, selected: true},
            ],
            slot3: [
                {...necrons_weapons.staff_of_light_2, selected: true},
            ],
            slot4: [
                {...necrons_weapons.staff_of_light, selected: true},
            ],
            slot5: [
                {...necrons_weapons.overlords_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Carrier Wave (Aura)", desc: "While a friendly NECRONS unit is within 6\" of this model, add 1 to the Objective Control characteristic of models in that unit." },
            { name: "Advanced Quantum Shielding", desc: "Each time an attack targets this model, if the Strength characteristic of that attack is greater than this model’s Toughness characteristic, subtract 1 from the Wound roll." },
            { name: "Resurrection orb", desc: "Once per battle, at the end of any phase, select one friendly NECRONS INFANTRY or NECRONS MOUNTED unit within 6\" of the bearer and resurrect that unit. When you do, that unit’s Reanimation Protocols are activated reanimating D6 wounds instead of D3 when doing so. You cannot resurrect more than one unit per turn." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Character","Fly","Catacomb Command Barge"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Chronomancer",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.chronomancers_stave,
        ],
        rangedWeapons: [
            necrons_weapons.chronomancers_stave_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.chronomancers_stave_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.chronomancers_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- NECRON WARRIORS\nYou can attach this model to one of the above units even if one ROYAL WARDEN or NOBLE model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Timesplinter Mantle", desc: "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll." },
            { name: "Chronometron", desc: "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy units, that unit can make a Normal move of up to 5\". If it does, until the end of the turn, that unit is not eligible to declare a charge." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Cryptek","Chronomancer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Convergence of Dominion",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 9,
            saving: 3,
            wounds: 7,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            necrons_weapons.transdimensional_abductor,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.transdimensional_abductor, selected: true},
            ],
        },
        abilities: [
            { name: "Reanimation Nodes (Aura)", desc: "While a friendly NECRONS INFANTRY unit is within 6” of this FORTIFICATION, models in that unit have the Feel No Pain 6+ ability." },
            { name: "Ancient Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
            { name: "Deployment", desc: "When this unit is first set up on the battlefield, its models do not have to be set up in Unit Coherency. Instead, each model must be set up wholly within 12\" of one other model from its unit. From that point on, each model in this unit is treated as a separate unit." },
        ],
        keywords: ["Faction: Necrons","Fortification","Vehicle","Convergence of Dominion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Cryptothralls",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 3,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.scythed_limbs,
        ],
        rangedWeapons: [
            necrons_weapons.scouring_eye,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.scouring_eye, selected: true},
            ],
            slot2: [
                {...necrons_weapons.scythed_limbs, selected: true},
            ],
        },
        abilities: [
            { name: "Bound Creation", desc: "While this unit is in the same unit as a CRYPTEK model, that CRYPTEK model has the Feel No Pain 4+ ability." },
            { name: "Systematic Vigour", desc: "Each time a CRYPTOTHRALL model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 2+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and it is then removed from play." },
            { name: "Cryptek Retinue", desc: "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a CRYPTEK model (a unit cannot have more than one CRYPTOTHRALLS unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that  Bodyguard unit’s Starting Strength is increased accordingly." },
        ],
        keywords: ["Faction: Necrons","Infantry","Cryptothralls"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Deathmarks",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            necrons_weapons.synaptic_disintegrator,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.synaptic_disintegrator, selected: true},
            ],
            slot2: [
                {...necrons_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Hyperspace Hunters", desc: "Once per turn, in the Reinforcements step of your opponent’s Movement phase, when an enemy unit is set up on the battlefield from Reserves within 18\" of and visible to this unit, this unit can shoot as if it were your Shooting phase, but must only target that enemy unit when doing so, and can only do so if that enemy unit is an eligible target." },
        ],
        keywords: ["Faction: Necrons","Infantry","Deathmarks"],
        pointOptions: [{ models: 6, pts: 120 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Doom Scythe",
        pts: 230,
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
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk,
        ],
        rangedWeapons: [
            necrons_weapons.heavy_death_ray,
            necrons_weapons.twin_tesla_destructor,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.heavy_death_ray, selected: true},
            ],
            slot2: [
                {...necrons_weapons.twin_tesla_destructor, selected: true},
            ],
            slot3: [
                {...necrons_weapons.armoured_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Atavistic Instigation", desc: "Each time this model targets an enemy unit with its heavy death ray, your opponent must declare if that unit will stand firm or duck for cover:\n- If it stands firm, when resolving attacks against that unit this phase, a successful unmodified Hit roll of 5+ scores a Critical Hit.\n- If it ducks for cover, until the start of your next Shooting phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Damaged: 1-4 wounds remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Aircraft","Fly","Doom Scythe"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Doomsday Ark",
        pts: 200,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk,
        ],
        rangedWeapons: [
            necrons_weapons.doomsday_cannon,
            necrons_weapons.gauss_flayer_array,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.doomsday_cannon, selected: true},
            ],
            slot2: [
                {...necrons_weapons.gauss_flayer_array, selected: true},
            ],
            slot3: [
                {...necrons_weapons.armoured_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Damaged: 1-5 wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Overwhelming Obliteration", desc: "In your Movement phase, if this model Remains Stationary, until the end of the turn, its doomsday cannon has the [DEVASTATING WOUNDS] ability." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Fly","Doomsday Ark"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Dynastic Conqueror [Crucible]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 6,
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
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: **Immortals, Lychguard, Necron Warriors**" },
            { name: "Implacable Resistance", desc: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack." },
        ],
        keywords: ["Character","Infantry","Noble","Dynastic Conqueror","Faction: Necrons","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Flayed Ones",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.flayer_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.flayer_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Flesh Hunger", desc: "Each time a model in this unit makes a melee attack, if the target of that attack is Below Half-strength, a successful Hit roll scores a Critical Hit." },
        ],
        keywords: ["Faction: Necrons","Infantry","Flayed Ones"],
        pointOptions: [{ models: 6, pts: 120 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Gauss Pylon [Legends]",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 3,
            wounds: 22,
            leader: 7,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            necrons_weapons.gauss_annihilator,
            necrons_weapons.tesla_arc,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauss_annihilator, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tesla_arc, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Phase Shift Generator (Aura)", desc: "While a friendly NECRONS unit is within 3\" of this Fortification, models in that unit have a 5+ invulnerable save against ranged attacks." },
            { name: "Phase-shifted Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack." },
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Necrons","Fortification","Vehicle","Towering","Titanic","Gauss Pylon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Geomancer",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.tremorglaive,
        ],
        rangedWeapons: [
            necrons_weapons.tremorglaive_reverberating_beam,
            necrons_weapons.tremorglaive_shock_wave_pulse,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.tremorglaive_reverberating_beam, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tremorglaive_shock_wave_pulse, selected: true},
            ],
            slot3: [
                {...necrons_weapons.tremorglaive, selected: true},
            ],
        },
        abilities: [
            { name: "Tectonic Reverberations", desc: "In your Movement phase, you can select one enemy unit within 18\" of and visible to this model. Until the start of your next Movement phase that enemy unit is pinned. While a unit is pinned, subtract 2 from that unit’s Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Obelisk Node Control", desc: "While this model is within range of an objective marker you control, enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" of this model." },
            { name: "Leader", desc: "This model can be attached to the following units: **Canoptek Macrocytes, Immortals, Necron Warriors**. \n\n\n*You can attach this model to one of the above units even if one **Royal Warden** or **Noble** model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.*" },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Cryptek","Geomancer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "transports",
        name: "Ghost Ark",
        pts: 115,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk,
        ],
        rangedWeapons: [
            necrons_weapons.gauss_flayer_array,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauss_flayer_array, selected: true},
            ],
            slot2: [
                {...necrons_weapons.armoured_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Repair Barge", desc: "Once per turn, just after an enemy unit finishes making its attacks, if one or more friendly NECRON WARRIORS units within 3\" of this model lost one or more wounds as a result of those attacks, this model can use this ability. If it does, select one of those NECRON WARRIORS units; that unit’s Reanimation Protocols activate. The same NECRON WARRIORS unit cannot be selected for this ability more than once per turn." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Fly","Transport","Dedicated Transport","Ghost Ark"],
        pointOptions: [],
        transport: "This model has a transport capacity of 10 NECRON WARRIOR models and 1 NECRONS INFANTRY CHARACTER model.",
    },
    {
        army: "necrons",
        class: "characters",
        name: "Hexmark Destroyer",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            necrons_weapons.enmitic_disintegrator_pistols,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.enmitic_disintegrator_pistols, selected: true},
            ],
            slot2: [
                {...necrons_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Inescapable Death", desc: "Once per turn, one unit from your army with this ability can be targeted with the Fire Overwatch Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase. In addition, each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 2+." },
            { name: "Multi-threat Eliminator", desc: "Once per turn, in your opponent's Shooting phase, when an enemy unit makes a ranged attack that targets a friendly NECRONS unit within 3\" of a model with this ability, after that enemy has shot, one model with this ability that is within 3\" of that target can shoot as if it were your Shooting phase, but must target that enemy unit when doing so, and can only do so if that enemy unit is an eligible target." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Destroyer Cult","Hexmark Destroyer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Hyperscientist [Crucible]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 4,
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
            { name: "Leader", desc: "This model can be attached to the following units: **Immortals, Necron Warriors**" },
        ],
        keywords: ["Character","Infantry","Faction: Necrons","Crucible","Hyperscientist","Cryptek"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Illuminor Szeras",
        pts: 165,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 2,
            wounds: 9,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.eldritch_lance,
            necrons_weapons.impaling_legs,
        ],
        rangedWeapons: [
            necrons_weapons.eldritch_lance_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.eldritch_lance_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.eldritch_lance, selected: true},
            ],
            slot3: [
                {...necrons_weapons.impaling_legs, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Illuminor", desc: "While this model is within 3\" of one or more other friendly NECRONS units, this model has the Lone Operative ability." },
            { name: "Mechanical Augmentation (Aura)", desc: "While a friendly NECRONS BATTLELINE unit is within 3\" of this model, each time a model in that unit makes an attack, improve the Armour Penetration characteristic of that attack by 1, and each time an attack targets that unit, worsen the Armour Penetration characteristic of that attack by 1." },
            { name: "Atomic Energy Manipulator", desc: "At the end of the Fight phase, if this model destroyed one or more models this phase, until the end of the battle, add 3\" to the range of its Mechanical Augmentation ability (to a maximum of 12\")." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Cryptek","Illuminor Szeras"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "battleline",
        name: "Immortals",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            necrons_weapons.gauss_blaster,
            necrons_weapons.tesla_carbine,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauss_blaster, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tesla_carbine, selected: true},
            ],
            slot3: [
                {...necrons_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Implacable Eradication", desc: "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Faction: Necrons","Infantry","Battleline","Immortals"],
        pointOptions: [{ models: 6, pts: 150 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Imotekh the Stormlord",
        pts: 100,
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
            necrons_weapons.staff_of_the_destroyer,
        ],
        rangedWeapons: [
            necrons_weapons.gauntlet_of_fire,
            necrons_weapons.staff_of_the_destroyer_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauntlet_of_fire, selected: true},
            ],
            slot2: [
                {...necrons_weapons.staff_of_the_destroyer_2, selected: true},
            ],
            slot3: [
                {...necrons_weapons.staff_of_the_destroyer, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- LYCHGUARD\n- NECRON WARRIORS" },
            { name: "Grand Strategist", desc: "At the start of your Command phase, if this model is on the battlefield, you gain 1CP." },
            { name: "Lord of the Storm", desc: "Once per battle, at the end of your Command phase, this model can use this ability. If it does, roll one D6 for each enemy unit within 12\" of this model: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Noble","Imotekh the Stormlord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Lokhust Destroyers",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            necrons_weapons.gauss_cannon,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauss_cannon, selected: true},
            ],
            slot2: [
                {...necrons_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Hard-wired for Destruction", desc: "Each time a model in this unit makes a ranged attack that targets the closest eligible enemy unit, re-roll a Hit roll of 1. If the target of that attack is within range of an objective marker your opponent controls, you can re-roll the Hit roll instead." },
        ],
        keywords: ["Faction: Necrons","Mounted","Fly","Destroyer Cult","Lokhust Destroyers"],
        pointOptions: [{ models: 2, pts: 60 }, { models: 3, pts: 90 }, { models: 4, pts: 180 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Lokhust Heavy Destroyers",
        pts: 55,
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
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            necrons_weapons.enmitic_exterminator,
            necrons_weapons.gauss_destructor,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.enmitic_exterminator, selected: true},
            ],
            slot2: [
                {...necrons_weapons.gauss_destructor, selected: true},
            ],
            slot3: [
                {...necrons_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Optimised for Slaughter", desc: "Each time a model in this unit makes an attack with an enmitic exterminator that targets a unit (excluding MONSTERS and VEHICLES), re-roll a Wound roll of 1. Each time a model in this unit makes an attack with a gauss destructor against a MONSTER or VEHICLE unit, re-roll a Wound roll of 1." },
        ],
        keywords: ["Faction: Necrons","Mounted","Fly","Destroyer Cult","Lokhust Heavy Destroyers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Lokhust Lord",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.lords_blade,
            necrons_weapons.staff_of_light_3,
        ],
        rangedWeapons: [
            necrons_weapons.staff_of_light_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.staff_of_light_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.lords_blade, selected: true},
            ],
            slot3: [
                {...necrons_weapons.staff_of_light_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- LOKHUST DESTROYERS\n- LOKHUST HEAVY DESTROYERS" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Destroyer Cult", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, a successful unmodifed Hit roll of 5+ scores a Critical Hit." },
            { name: "Driven by Hatred", desc: "Each time this model makes an attack that targets an enemy unit that is Below Half-strength, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Nanoscarab amulet", desc: "The bearer has the Feel No Pain 5+ ability." },
        ],
        keywords: ["Faction: Necrons","Mounted","Character","Fly","Destroyer Cult","Lokhust Lord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Lord [Legends]",
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
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.lords_blade_2,
            necrons_weapons.staff_of_light_4,
        ],
        rangedWeapons: [
            necrons_weapons.staff_of_light_5,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.staff_of_light_5, selected: true},
            ],
            slot2: [
                {...necrons_weapons.lords_blade_2, selected: true},
            ],
            slot3: [
                {...necrons_weapons.staff_of_light_4, selected: true},
            ],
        },
        abilities: [
            { name: "Relentless March", desc: "While this model is leading a unit, add 1\" to the Move characteristic of models in that unit." },
            { name: "The Lord’s Will", desc: "While this model is leading a unit, you can target that unit with Stratagems even when it is Battle-shocked." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- LYCHGUARD\n- NECRON WARRIORS" },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Noble","Lord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Lychguard",
        pts: 85,
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
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.warscythe_2,
            necrons_weapons.hyperphase_sword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.warscythe_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.hyperphase_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Dispersion Shield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Guardian Protocols", desc: "While a NOBLE model is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll." },
        ],
        keywords: ["Faction: Necrons","Infantry","Lychguard"],
        pointOptions: [{ models: 6, pts: 170 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Monolith",
        pts: 400,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 13,
            saving: 2,
            wounds: 22,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.portal_of_exile,
        ],
        rangedWeapons: [
            necrons_weapons.particle_whip,
            necrons_weapons.death_ray,
            necrons_weapons.gauss_flux_arc,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.particle_whip, selected: true},
            ],
            slot2: [
                {...necrons_weapons.death_ray, selected: true},
            ],
            slot3: [
                {...necrons_weapons.gauss_flux_arc, selected: true},
            ],
            slot4: [
                {...necrons_weapons.portal_of_exile, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-7 wounds remaining", desc: "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Eternity Gate", desc: "In the Reinforcements step of your Movement phase, you can select one NECRONS INFANTRY unit from your army that is either in Reserves or on the battlefield (if you select the latter, remove that unit from the battlefield and place it into Reserves). That unit is then set up anywhere on the battlefield that is wholly within 6\" of this model and not within Engagement Range of any enemy models. That unit cannot declare a charge this turn." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Titanic","Fly","Towering","Monolith"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "battleline",
        name: "Necron Warriors",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            necrons_weapons.gauss_flayer,
            necrons_weapons.gauss_reaper,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.gauss_flayer, selected: true},
            ],
            slot2: [
                {...necrons_weapons.gauss_reaper, selected: true},
            ],
            slot3: [
                {...necrons_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Their Number is Legion", desc: "Each time this unit’s Reanimation Protocols activate, you can re-roll the dice to see how many wounds are regenerated." },
        ],
        keywords: ["Faction: Necrons","Infantry","Battleline","Necron Warriors"],
        pointOptions: [{ models: 11, pts: 200 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Nekrosor Ammentar",
        pts: 185,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 3,
            wounds: 9,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.blade_tail_and_whip_coils,
            necrons_weapons.unmaker_gauntlet,
        ],
        rangedWeapons: [
            necrons_weapons.enmitic_disintegrators,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.enmitic_disintegrators, selected: true},
            ],
            slot2: [
                {...necrons_weapons.blade_tail_and_whip_coils, selected: true},
            ],
            slot3: [
                {...necrons_weapons.unmaker_gauntlet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Protective Disciples", desc: "While this model is within 3\" of one or more other friendly **Destroyer Cult** units, this model has the Lone Operative ability." },
            { name: "Infectious Murder‑madness (Aura)", desc: "While a friendly **Necrons** unit (excluding **Monster** and **Titanic** units) is within 6\" of this model, each time a model in that unit makes an attack, if that model has the **Destroyer Cult** keyword or that enemy unit is the closest eligible target, that attack has the [SUSTAINED HITS 1] ability." },
            { name: "Prophet of Destruction", desc: "Each time this model destroys an enemy unit, select one other friendly **Destroyer Cult** unit within 9\" of it. Until the end of the phase, each time a model in that unit makes an attack, re‑roll a Wound roll of 1." },
            { name: "Nullstone Field Generator (Aura)", desc: "While a friendly **Necrons** unit is within 6\" of the bearer, models in that unit have the Feel No Pain 5+ ability against mortal wounds and Psychic Attacks." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Destroyer Cult","Nekrosor Ammentar"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Nemesor Zahndrekh [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.staff_of_light,
        ],
        rangedWeapons: [
            necrons_weapons.staff_of_light_5,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.staff_of_light_5, selected: true},
            ],
            slot2: [
                {...necrons_weapons.staff_of_light, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- LYCHGUARD\n- NECRON WARRIORS" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Transient Madness", desc: "While this model is leading a unit, at the start of your Command phase, roll one D6: until the start of your next Command phase, weapons equipped by models in that unit gain the ability below that corresponds with that roll:\n- 1-2: [SUSTAINED HITS 1]\n- 3-4: [LETHAL HITS]\n- 5-6: [DEVASTATING WOUNDS]" },
            { name: "Counter-tactics", desc: "Once per battle, after your opponent uses a Stratagem, if this model is on the battlefield, it can use this ability. If it does, until the end of the battle, the CP cost your opponent must pay to use that Stratagem again is increased by 1CP." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Noble","Nemesor Zahndrekh"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Night Scythe",
        pts: 145,
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
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk,
        ],
        rangedWeapons: [
            necrons_weapons.twin_tesla_destructor,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.twin_tesla_destructor, selected: true},
            ],
            slot2: [
                {...necrons_weapons.armoured_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Invasion Beams", desc: "At the end of the Fight phase, if there are no models currently embarked within this TRANSPORT, you can select one friendly NECRONS INFANTRY unit wholly within 6\" of this TRANSPORT. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this TRANSPORT." },
            { name: "Damaged: 1-4 wounds remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Quantum Invader", desc: "This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Aircraft","Fly","Transport","Night Scythe"],
        pointOptions: [],
        transport: "This model has a transport capacity of 1 NECRONS INFANTRY unit.",
    },
    {
        army: "necrons",
        class: "other",
        name: "Night Shroud [Legends]",
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
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk,
        ],
        rangedWeapons: [
            necrons_weapons.twin_tesla_destructor,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.twin_tesla_destructor, selected: true},
            ],
            slot2: [
                {...necrons_weapons.armoured_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Death Sphere Bombardment", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound." },
            { name: "Damaged: 1-5 wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Aircraft","Fly","Night Shroud"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Obelisk",
        pts: 300,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 13,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk_2,
        ],
        rangedWeapons: [
            necrons_weapons.tesla_sphere,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.tesla_sphere, selected: true},
            ],
            slot2: [
                {...necrons_weapons.armoured_bulk_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-8 wounds remaining", desc: "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Gravitic Pulse", desc: "At the start of your opponent’s Movement phase, you can select one enemy unit within 18\" of and visible to this model. Until the end of the turn, halve the Move characteristic of models in that unit and halve Advance and Charge rolls made for that unit. In addition, if that unit can FLY, until the start of your next Movement phase, roll one D6 each time that unit ends any type of move: on a 4+, that unit suffers D3 mortal wounds." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Titanic","Fly","Towering","Obelisk"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Ophydian Destroyers",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 4,
            wounds: 3,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.ophydian_hyperphase_weapons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.ophydian_hyperphase_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Tunnelling Horrors", desc: "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models." },
        ],
        keywords: ["Faction: Necrons","Infantry","Destroyer Cult","Ophydian Destroyers"],
        pointOptions: [{ models: 4, pts: 160 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Orikan the Diviner",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.staff_of_tomorrow,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.staff_of_tomorrow, selected: true},
            ],
        },
        abilities: [
            { name: "Master Chronomancer", desc: "While this model is leading a unit, models in that unit have a 4+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "The Stars Are Right", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, triple the Attacks and Strength characteristics of this model’s Staff of Tomorrow and every successful Wound roll made for this model’s attacks scores a Critical Wound." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- NECRON WARRIORS\nYou can attach this model to one of the above units even if one ROYAL WARDEN or NOBLE model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Cryptek","Chronomancer","Orikan the Diviner"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Overlord",
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
            necrons_weapons.voidscythe,
            necrons_weapons.staff_of_light_3,
            necrons_weapons.overlords_blade,
        ],
        rangedWeapons: [
            necrons_weapons.staff_of_light_2,
            necrons_weapons.tachyon_arrow,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.staff_of_light_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tachyon_arrow, selected: true},
            ],
            slot3: [
                {...necrons_weapons.voidscythe, selected: true},
            ],
            slot4: [
                {...necrons_weapons.staff_of_light_3, selected: true},
            ],
            slot5: [
                {...necrons_weapons.overlords_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Implacable Resilience", desc: "Each time an attack is allocated to this model, subtract 1 from that attack’s Damage characteristic." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- LYCHGUARD\n- NECRON WARRIORS" },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Noble","Overlord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Overlord with Translocation Shroud",
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
            necrons_weapons.overlords_blade,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.overlords_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Translocation Shroud", desc: "Each time this model's unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit. In addition, each time a model in that unit makes a Normal, Advance or Fall Back move, until that move is finished, it can move horizontally through models and terrain features (it cannot finish a move on top of another model or its base)." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- LYCHGUARD\n- NECRON WARRIORS" },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Noble","Overlord","Overlord with Translocation Shroud"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Plasmancer",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.plasmic_lance,
        ],
        rangedWeapons: [
            necrons_weapons.plasmic_lance_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.plasmic_lance_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.plasmic_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- NECRON WARRIORS\nYou can attach this model to one of the above units even if one ROYAL WARDEN or NOBLE model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Harbinger of Destruction", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, a successful unmodifed Hit roll of 5+ scores a Critical Hit." },
            { name: "Living Lightning", desc: "In your Shooting phase, select one enemy unit within 18\" of and visible to this model (excluding units with the Lone Operative ability that are not part of an Attached unit and are not within 12\" of this model) and roll four D6: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Cryptek","Plasmancer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Psychomancer",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.abyssal_lance,
        ],
        rangedWeapons: [
            necrons_weapons.abyssal_lance_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.abyssal_lance_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.abyssal_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- NECRON WARRIORS\nYou can attach this model to one of the above units even if one ROYAL WARDEN or NOBLE model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Nightmare Shroud (Aura)", desc: "In the Battle-shock step of your opponent's Command phase, if an enemy unit that is below its Starting Strength is within 6\" of this model, that enemy unit must take a Battle-shock test, subtracting 1 from the roll when it does so." },
            { name: "Harbinger of Despair", desc: "Once per turn, at the start of your Command, Movement, Shooting, Charge or Fight phase, you can select one enemy unit within 18\" of this model. That unit must take a Battle-shock test, subtracting 1 from the roll when it does so." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Cryptek","Psychomancer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Royal Warden",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            necrons_weapons.relic_gauss_blaster,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.relic_gauss_blaster, selected: true},
            ],
            slot2: [
                {...necrons_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- NECRON WARRIORS" },
            { name: "Adaptive Strategy", desc: "This model's unit is eligible to shoot and declare a charge in a turn in which it Fell Back." },
            { name: "Engrammatic Logic", desc: "Once per battle, at the start of any phase, you can select one friendly NECRONS unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Royal Warden"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Sentry Pylon [Legends]",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            necrons_weapons.focused_death_ray,
            necrons_weapons.gauss_exterminator,
            necrons_weapons.heat_cannon,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.focused_death_ray, selected: true},
            ],
            slot2: [
                {...necrons_weapons.gauss_exterminator, selected: true},
            ],
            slot3: [
                {...necrons_weapons.heat_cannon, selected: true},
            ],
        },
        abilities: [
            { name: "Teleportation Matrix", desc: "Once per battle, at the end of your opponent’s turn, if this FORTIFICATION is not within Engagement Range of one or more enemy units, you can remove it from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the battle ends and this FORTIFICATION is not on the battlefield, it is destroyed." },
            { name: "Phase-shifted Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Faction: Necrons","Fortification","Vehicle","Sentry Pylon"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Seraptek Heavy Construct",
        pts: 540,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 3,
            wounds: 24,
            leader: 7,
            control: 10,
            invuln: 5
        },
        meleeWeapons: [
            necrons_weapons.titanic_forelimbs_strike,
            necrons_weapons.titanic_forelimbs_sweep,
        ],
        rangedWeapons: [
            necrons_weapons.singularity_generator,
            necrons_weapons.synaptic_obliterator,
            necrons_weapons.transdimensional_projector,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.singularity_generator, selected: true},
            ],
            slot2: [
                {...necrons_weapons.synaptic_obliterator, selected: true},
            ],
            slot3: [
                {...necrons_weapons.transdimensional_projector, selected: true},
            ],
            slot4: [
                {...necrons_weapons.titanic_forelimbs_strike, selected: true},
            ],
            slot5: [
                {...necrons_weapons.titanic_forelimbs_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Terrifying Monstrosity", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test." },
            { name: "Damaged: 1-9 wounds remaining", desc: "While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Walker","Titanic","Towering","Seraptek Heavy Construct"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Skorpekh Destroyers",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.skorpekh_hyperphase_weapons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.skorpekh_hyperphase_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Whirling Onslaught", desc: "Each time a model in this unit makes a melee attack, re-roll a Hit roll of 1. If this unit made a Charge move this turn, you can re-roll the Hit roll instead." },
        ],
        keywords: ["Faction: Necrons","Infantry","Destroyer Cult","Skorpekh Destroyers"],
        pointOptions: [{ models: 4, pts: 180 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Skorpekh Lord",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.flensing_claw,
            necrons_weapons.hyperphase_harvester,
        ],
        rangedWeapons: [
            necrons_weapons.enmitic_annihilator,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.enmitic_annihilator, selected: true},
            ],
            slot2: [
                {...necrons_weapons.flensing_claw, selected: true},
            ],
            slot3: [
                {...necrons_weapons.hyperphase_harvester, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- SKORPEKH DESTROYERS" },
            { name: "United In Destruction", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Crimson Harvest", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of this model and roll one D6: on a 2-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D3+3 mortal wounds." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Destroyer Cult","Skorpekh Lord"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Technomancer",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.staff_of_light_6,
        ],
        rangedWeapons: [
            necrons_weapons.staff_of_light_7,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.staff_of_light_7, selected: true},
            ],
            slot2: [
                {...necrons_weapons.staff_of_light_6, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- CANOPTEK WRAITHS\n- IMMORTALS\n- NECRON WARRIORS\nYou can attach this model to one of the above units even if one ROYAL WARDEN or NOBLE model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Rites of Reanimation", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "Technomancer", desc: "At the end of your Movement phase, select one friendly NECRONS model within 6\" of the bearer. That model regains up to D3 lost wounds. Each model can only be selected for this ability once per turn." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Fly","Cryptek","Technomancer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Tesseract Ark [Legends]",
        pts: 130,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk,
        ],
        rangedWeapons: [
            necrons_weapons.tesseract_singularity_chamber_particle,
            necrons_weapons.tesseract_singularity_chamber_seismic_lash,
            necrons_weapons.gauss_cannon,
            necrons_weapons.particle_beamer,
            necrons_weapons.tesla_cannon,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.tesseract_singularity_chamber_particle, selected: true},
            ],
            slot2: [
                {...necrons_weapons.tesseract_singularity_chamber_seismic_lash, selected: true},
            ],
            slot3: [
                {...necrons_weapons.gauss_cannon, selected: true},
            ],
            slot4: [
                {...necrons_weapons.particle_beamer, selected: true},
            ],
            slot5: [
                {...necrons_weapons.tesla_cannon, selected: true},
            ],
            slot6: [
                {...necrons_weapons.armoured_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Gravitational Field", desc: "Each time an enemy unit selects this model as the target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other reductions to that Charge roll)." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Fly","Tesseract Ark"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Tesseract Vault",
        pts: 425,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 12,
            saving: 2,
            wounds: 24,
            leader: 7,
            control: 8,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.armoured_bulk_2,
        ],
        rangedWeapons: [
            necrons_weapons.tesla_sphere_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.tesla_sphere_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.armoured_bulk_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-8 wounds remaining", desc: "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and you can only select one of the C'tan Powers weapons in your Shooting phase, instead of two." },
            { name: "Powers of the C’tan", desc: "In your Shooting phase, when this model is selected to shoot, first select up to 2 different C’tan Powers weapons. Until the end of the phase, this model is equipped with those weapons in addition to its other weapons (this model cannot make attacks with any other C’tan Powers weapon you did not select in this way this phase)." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Titanic","Fly","Towering","Tesseract Vault"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "The Silent King",
        pts: 400,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.weapons_of_the_final_triarch,
            necrons_weapons.armoured_bulk_3,
        ],
        rangedWeapons: [
            necrons_weapons.sceptre_of_eternal_glory,
            necrons_weapons.staff_of_stars,
            necrons_weapons.annihilator_beam,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.sceptre_of_eternal_glory, selected: true},
            ],
            slot2: [
                {...necrons_weapons.staff_of_stars, selected: true},
            ],
            slot3: [
                {...necrons_weapons.annihilator_beam, selected: true},
            ],
            slot4: [
                {...necrons_weapons.weapons_of_the_final_triarch, selected: true},
            ],
            slot5: [
                {...necrons_weapons.armoured_bulk_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Damaged: 1-6 wounds remaining", desc: "While this unit’s Szarekh model has 1-6 wounds remaining, halve the Attacks characteristic of that model’s weapons, and each time this unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Voice of the Triarch", desc: "At the start of the battle round, select one Triarch ability. Until the start of the next battle round, this unit has that ability." },
            { name: "The Silent King (Aura)", desc: "While a friendly NECRONS unit is within 6\" of this unit's Szarekh model, improve that unit's Leadership characteristic by 1." },
            { name: "Triarchal Menhirs", desc: "If this unit’s Szarekh model is destroyed, all of this unit’s remaining Triarchal Menhir models are also destroyed." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Epic Hero","Triarch"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Tomb Blades",
        pts: 75,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            necrons_weapons.twin_gauss_blaster,
            necrons_weapons.particle_beamer_2,
            necrons_weapons.twin_tesla_carbine,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.twin_gauss_blaster, selected: true},
            ],
            slot2: [
                {...necrons_weapons.particle_beamer_2, selected: true},
            ],
            slot3: [
                {...necrons_weapons.twin_tesla_carbine, selected: true},
            ],
            slot4: [
                {...necrons_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Evasion Engrams", desc: "In your Shooting phase, after this unit has shot, it can make a Normal Move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge." },
            { name: "Shadowloom", desc: "The bearer has the Stealth ability." },
            { name: "Nebuloscope", desc: "Ranged weapons equipped by the bearer have the [IGNORES COVER] ability." },
            { name: "Shieldvanes", desc: "The bearer has a Save characteristic of 3+ and a Move characteristic of 8\"." },
        ],
        keywords: ["Faction: Necrons","Mounted","Fly","Tomb Blades"],
        pointOptions: [{ models: 4, pts: 150 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Transcendent C'tan",
        pts: 325,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 11,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 4,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.crackling_tendrils,
        ],
        rangedWeapons: [
            necrons_weapons.seismic_assault,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.seismic_assault, selected: true},
            ],
            slot2: [
                {...necrons_weapons.crackling_tendrils, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Transdimensional Displacement", desc: "Each time this model is selected to Advance, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models." },
            { name: "C'tan Shard", desc: "This model cannot be given Enhancements." },
            { name: "Relatavistic Tether", desc: "In your turn, each time this model is set up on the battlefield using the Deep Strike or Transdimensional Displacement abilities, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units. When doing so, if this model is set up within 9\" of one or more enemy units, until the end of the turn, it is not eligible to declare a charge." },
        ],
        keywords: ["Faction: Necrons","Monster","Character","Fly","Transcendent C'tan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Trazyn the Infinite",
        pts: 75,
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
            necrons_weapons.empathic_obliterator,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.empathic_obliterator, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- LYCHGUARD\n- NECRON WARRIORS" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Ancient Collector", desc: "While this model is leading a unit, at the end of your Command phase, if that unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at start or end of any turn." },
            { name: "Surrogate Hosts", desc: "At the start of your Command phase, if this model is on the battlefield, you can select one other friendly NECRONS INFANTRY CHARACTER model on the battlefield (excluding SKORPEKH LORD or EPIC HERO models). The selected model is destroyed (ignoring any rules that are triggered when a model is destroyed) and this model is put\nin its place, with all of its wounds remaining (if the selected model was leading a unit, this model now attaches to that unit as its Leader)." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Noble","Trazyn the Infinite"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Triarch Praetorians",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 3,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.rod_of_covenant,
            necrons_weapons.voidblade_2,
        ],
        rangedWeapons: [
            necrons_weapons.rod_of_covenant_2,
            necrons_weapons.particle_caster_2,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.rod_of_covenant_2, selected: true},
            ],
            slot2: [
                {...necrons_weapons.particle_caster_2, selected: true},
            ],
            slot3: [
                {...necrons_weapons.rod_of_covenant, selected: true},
            ],
            slot4: [
                {...necrons_weapons.voidblade_2, selected: true},
            ],
        },
        abilities: [
            { name: "Relentless Combatants", desc: "You can re-roll Charge rolls made for this unit, and this unit is eligible to declare a charge in a turn in which it Fell Back." },
        ],
        keywords: ["Faction: Necrons","Infantry","Fly","Triarch Praetorians"],
        pointOptions: [{ models: 6, pts: 180 }],
        transport: null,
    },
    {
        army: "necrons",
        class: "other",
        name: "Triarch Stalker",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 4,
            invuln: 4
        },
        meleeWeapons: [
            necrons_weapons.stalkers_forelimbs,
        ],
        rangedWeapons: [
            necrons_weapons.heat_ray_dispersed,
            necrons_weapons.heat_ray_focused,
            necrons_weapons.particle_shredder,
            necrons_weapons.heavy_gauss_cannon_array,
        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.heat_ray_dispersed, selected: true},
            ],
            slot2: [
                {...necrons_weapons.heat_ray_focused, selected: true},
            ],
            slot3: [
                {...necrons_weapons.particle_shredder, selected: true},
            ],
            slot4: [
                {...necrons_weapons.heavy_gauss_cannon_array, selected: true},
            ],
            slot5: [
                {...necrons_weapons.stalkers_forelimbs, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Targeting Relay", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Faction: Necrons","Vehicle","Walker","Triarch Stalker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Triarchal Overseer [Crucible]",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 4,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Targeting Relay", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Character","Faction: Necrons","Crucible","Vehicle","Walker","Triarch","Triarchal Overseer","Stalker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "necrons",
        class: "characters",
        name: "Vargard Obyron [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            necrons_weapons.warscythe_3,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...necrons_weapons.warscythe_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMMORTALS\n- LYCHGUARD\n- NECRON WARRIORS\nYou can attach this model to one of the above units even if NEMESOR ZAHNDREKH has already been attached to it. If it is, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Ghostwalk Mantle", desc: "While this model is leading a unit, models in that unit have the Fights First ability." },
            { name: "The Vargard’s Duty", desc: "While this model is in the same unit as NEMESOR ZAHNDREKH, CHARACTER models in that unit have the Feel No Pain 4+ ability." },
        ],
        keywords: ["Faction: Necrons","Infantry","Character","Epic Hero","Vargard Obyron"],
        pointOptions: [],
        transport: null,
    },
]

export default necrons_army
