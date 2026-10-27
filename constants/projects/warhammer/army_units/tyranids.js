// AUTO-GENERATED units for Tyranids (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import tyranids_weapons from "../weapons/tyranids"

const tyranids_army = [
    {
        army: "tyranids",
        class: "characters",
        name: "Deathleaper",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tyranids_weapons.lictor_claws_and_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.lictor_claws_and_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Fear of the Unseen (Aura)", desc: "While an enemy unit is within 6\" of this model, worsen the Leadership characteristic of models in that unit by 1. In addition, in the Battle-shock step of your opponent’s Command phase, if such an enemy unit is below its Starting Strength, it must take a Battle-shock test." },
            { name: "Hunter Organism", desc: "This model cannot be your Warlord" },
        ],
        keywords: ["Epic Hero","Faction: Tyranids","Character","Great Devourer","Deathleaper","Infantry","Vanguard Invader"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "battleline",
        name: "Gargoyles",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 6,
            wounds: 1,
            leader: 8,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.blinding_venom,
        ],
        rangedWeapons: [
            tyranids_weapons.fleshborer,
        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.fleshborer, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.blinding_venom, selected: true},
            ],
        },
        abilities: [
            { name: "Winged Swarm", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge." },
        ],
        keywords: ["Battleline","Infantry","Fly","Gargoyles","Great Devourer","Faction: Tyranids","Endless Multitude","Vanguard Invader"],
        pointOptions: [{ models: 10, pts: 170 }],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "Hyperadapted Raveners",
        pts: 165,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 4,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.prime_claws_and_talons,
            tyranids_weapons.ravener_heavy_claws_and_talons,
        ],
        rangedWeapons: [
            tyranids_weapons.venom_bolt,
        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.venom_bolt, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.prime_claws_and_talons, selected: true},
            ],
            slot3: [
                {...tyranids_weapons.ravener_heavy_claws_and_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This unit can be attached to the following units: **Raveners**" },
            { name: "Alpha Invader", desc: "Weapons equipped by models in this unit have the **[SUSTAINED HITS 1]** ability." },
            { name: "Hypersensory Array", desc: "Once per battle round, you can target this unit with the Rapid Ingress or Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this turn." },
        ],
        keywords: ["Infantry","Great Devourer","Vanguard Invader","Burrowers","Hyperadapted Raveners","Faction: Tyranids","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "other",
        name: "Lictor",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.lictor_claws_and_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.lictor_claws_and_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Pheromone Trail", desc: "Once per battle round, you can target one model with this ability with the Rapid Ingress Stratagem for 0CP." },
        ],
        keywords: ["Infantry","Great Devourer","Lictor","Faction: Tyranids","Vanguard Invader"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "Macro Organism [Crucible]",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 3,
            wounds: 14,
            leader: 8,
            control: 4,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Unstoppable Monstrosity", desc: "At the start of each player's Command phase, this model regains up to D3 lost wounds." },
        ],
        keywords: ["Character","Crucible","Great Devourer","Faction: Tyranids","Monster","Macro Organism"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "other",
        name: "Mawloc",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 14,
            leader: 8,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.distendible_jaw,
            tyranids_weapons.mawloc_scything_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.distendible_jaw, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.mawloc_scything_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Terror from the Deep", desc: "Each time this unit is set up on the battlefield using the Deep Strike ability, roll one D6 for each enemy unit within 12\" of this model: on a 2-4, that unit suffers D3 mortal wounds; on a 5+, that unit suffers 3 mortal wounds and must take a Battle-shock test." },
        ],
        keywords: ["Mawloc","Monster","Great Devourer","Faction: Tyranids","Vanguard Invader"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "other",
        name: "Neurolictor",
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
            wounds: 7,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tyranids_weapons.piercing_claws_and_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.piercing_claws_and_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Feeder Tendrils", desc: "Each time this model destroys an enemy CHARACTER model, you gain 1CP" },
            { name: "Neural Disruption", desc: "In your Command phase, select one enemy unit within 12\" of this model. That unit must take a Battle-shock test" },
            { name: "Psychological Saboteur (Aura)", desc: "While an enemy unit is with 12\" of this model, if that unit is Battle-shocked:\n\n- Each time a model in that unit makes an attack, subtract 1 from the Hit roll\n- Each time a friendly TYRANIDS model makes an attack that targets that unit, add 1 to the Wound roll." },
        ],
        keywords: ["Infantry","Great Devourer","Neurolictor","Vanguard Invader","Faction: Tyranids","Synapse"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "Node Organism [Crucible]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 6,
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
            { name: "Alpha Warrior", desc: "While this model is leading a unit, weapons equipped by models in that unit have the **[SUSTAINED HITS 1]** ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Tyranid Warriors with Melee Bio-weapons**\n- **Tyranid Warriors with Ranged Bio-weapons**" },
        ],
        keywords: ["Character","Infantry","Crucible","Great Devourer","Synapse","Faction: Tyranids","Node Organism"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "Parasite of Mortrex",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 4,
            wounds: 5,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.barbed_ovipositor,
            tyranids_weapons.clawed_limbs,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.barbed_ovipositor, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.clawed_limbs, selected: true},
            ],
        },
        abilities: [
            { name: "Parasitic Infection", desc: "Each time an **Infantry** model is destroyed by an attack made with this model’s barbed ovipositor, after this model has finished making its attacks, you can add one new **Ripper Swarms** unit to your army consisting of D3 models and set it up within 3\" of this model. If you do, that **Ripper Swarms** unit can be set up within Engagement Range of the destroyed model’s unit (but not within Engagement Range of any other enemy units)." },
            { name: "It Itches!", desc: "At the start of the Fight phase, select one enemy unit within Engagement Range of this model. That enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Parasite of Mortrex","Character","Fly","Great Devourer","Infantry","Faction: Tyranids","Vanguard Invader","Synapse"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "Prime Organism [Crucible]",
        pts: 135,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 2,
            wounds: 9,
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
            { name: "Monstrous Barrage", desc: "This unit is eligible to shoot and declare a charge in a turn in which it Advanced." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Carnifexes**\n- **Tyrant Guard**" },
        ],
        keywords: ["Character","Crucible","Great Devourer","Faction: Tyranids","Monster","Prime Organism"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "other",
        name: "Raveners",
        pts: 125,
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
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.ravener_claws_and_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.ravener_claws_and_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Death From Below", desc: "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
        ],
        keywords: ["Faction: Tyranids","Infantry","Great Devourer","Raveners","Vanguard Invader","Burrowers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "The Red Terror",
        pts: 130,
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
            leader: 8,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.gaping_maw,
            tyranids_weapons.scything_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.gaping_maw, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.scything_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Serpentine Fiend", desc: "This model can move through terrain features, but cannot end a move within a wall, a floor, etc. This model can be set up or end a move on any floor level of **Ruins**, but if that level is not the ground floor, it can only do so if its base does not overhang the floor at that level." },
            { name: "Swallow Whole", desc: "Each time an attack with this model’s gaping maw targets an **Infantry**, **Mounted** or **Beasts** unit, each successful unmodified Wound roll is a Critical Wound. Each time an **Infantry**, **Mounted** or **Beasts** model is destroyed as a result of an attack made by this model’s gaping maw, this model regains up to D3+2 lost wounds." },
            { name: "Subterranean Hunter", desc: "At the end of the Fight phase, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
        ],
        keywords: ["Character","Great Devourer","Faction: Tyranids","Vanguard Invader","Epic Hero","Monster","The Red Terror","Burrowers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "other",
        name: "Trygon",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 14,
            leader: 8,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.trygon_scything_talons,
        ],
        rangedWeapons: [
            tyranids_weapons.bio_electric_pulse,
        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.bio_electric_pulse, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.trygon_scything_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Subterranean Tunnels", desc: "In your Movement phase, when this model is set up on the battlefield using the Deep Strike ability, it can use a subterranean tunnel. If it does, this model can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge." },
        ],
        keywords: ["Trygon","Monster","Great Devourer","Faction: Tyranids","Vanguard Invader"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "transports",
        name: "Tyrannocyte",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 8,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tyranids_weapons.flensing_whips,
        ],
        rangedWeapons: [
            tyranids_weapons.tyrannocyte_bio_weapons,
        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.tyrannocyte_bio_weapons, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.flensing_whips, selected: true},
            ],
        },
        abilities: [
            { name: "Aerial Seeding", desc: "This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model must immediately disembark after it has been set up on the battlefield, and they must be set up more than 9\" away from all enemy models. After this model has been set up on the battlefield, no units can embark within it." },
        ],
        keywords: ["Dedicated Transport","Transport","Monster","Fly","Great Devourer","Tyrannocyte","Faction: Tyranids","Vanguard Invader"],
        pointOptions: [],
        transport: "This model has a transport capacity of 20 TYRANIDS INFANTRY models, or 1 TYRANIDS MONSTER model with a Wounds characteristic of 12 or less. Each INFANTRY model with a Wounds characteristic of more than 1 takes up the space of 3 models.",
    },
    {
        army: "tyranids",
        class: "other",
        name: "Von Ryan's Leapers",
        pts: 70,
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
            leader: 8,
            control: 1,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            tyranids_weapons.leapers_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.leapers_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Pouncing Leap", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
        ],
        keywords: ["Infantry","Great Devourer","Von Ryan's Leapers","Faction: Tyranids","Vanguard Invader"],
        pointOptions: [{ models: 3, pts: 140 }],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "Winged Hive Tyrant",
        pts: 170,
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
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tyranids_weapons.tyrant_talons,
            tyranids_weapons.monstrous_scything_talons,
            tyranids_weapons.monstrous_bonesword_and_lash_whip,
        ],
        rangedWeapons: [
            tyranids_weapons.stranglethorn_cannon,
            tyranids_weapons.heavy_venom_cannon,
        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.stranglethorn_cannon, selected: true},
            ],
            slot2: [
                {...tyranids_weapons.heavy_venom_cannon, selected: true},
            ],
            slot3: [
                {...tyranids_weapons.tyrant_talons, selected: true},
            ],
            slot4: [
                {...tyranids_weapons.monstrous_scything_talons, selected: true},
            ],
            slot5: [
                {...tyranids_weapons.monstrous_bonesword_and_lash_whip, selected: true},
            ],
        },
        abilities: [
            { name: "Paroxysm (Psychic)", desc: "At the start of the Fight phase, you can select one enemy unit within 12\" of and visible to this model and roll one D6: on a 1, this Psyker suffers D3 mortal wounds; on a 2+, until the end of the phase, subtract 1 from the Attacks characteristic of weapons equipped by models in that unit." },
        ],
        keywords: ["Monster","Character","Psyker","Winged Hive Tyrant","Faction: Tyranids","Great Devourer","Fly","Synapse","Vanguard Invader","Hive Tyrant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tyranids",
        class: "characters",
        name: "Winged Tyranid Prime",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tyranids_weapons.prime_talons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tyranids_weapons.prime_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Alpha Warrior", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Death Blow", desc: "If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Gargoyles**\n- **Tyranid Warriors With Melee Bio-Weapons**\n- **Tyranid Warriors With Ranged Bio-Weapons**" },
        ],
        keywords: ["Winged Tyranid Prime","Character","Infantry","Fly","Great Devourer","Faction: Tyranids","Synapse","Vanguard Invader"],
        pointOptions: [],
        transport: null,
    },
]

export default tyranids_army
