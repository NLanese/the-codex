// AUTO-GENERATED units for Emperor's Children (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import emperors_children_weapons from "../weapons/emperors_children"

const emperors_children_army = [
    {
        army: "emperors_children",
        class: "characters",
        name: "Champion of Excess [Crucible]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 3,
            wounds: 4,
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
            { name: "Leader", desc: "This unit can be attached to the following units: **Infractors, Noise Marines, Tormentors**" },
            { name: "Euphoric Strikes", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and improve the Armour Penetration characteristic of those weapons by 1." },
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Emperor's Children","Infantry","Character","Grenades","Chaos","Slaanesh","Crucible","Champion of Excess"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            emperors_children_weapons.soulshatter_lascannon,
            emperors_children_weapons.havoc_launcher,
            emperors_children_weapons.twin_heavy_bolter,
            emperors_children_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.soulshatter_lascannon, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.havoc_launcher, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.combi_weapon, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Ramp", desc: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
            { name: "Damaged: 1-5 wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Transport","Smoke","Chaos","Slaanesh","Faction: Emperor's Children","Land Raider"],
        pointOptions: [],
        transport: "This model has a transport capacity of 14 **Emperor's Children Infantry** models. Each **Terminator** and **Flawless Blade** model takes up the space of 2 models.",
    },
    {
        army: "emperors_children",
        class: "transports",
        name: "Chaos Rhino",
        pts: 80,
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
            emperors_children_weapons.armoured_tracks_2,
        ],
        rangedWeapons: [
            emperors_children_weapons.havoc_launcher,
            emperors_children_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.havoc_launcher, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.armoured_tracks_2, selected: true},
            ],
        },
        abilities: [
            { name: "Assault Vehicle", desc: "Units can disembark from this **Vehicle** after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally." },
        ],
        keywords: ["Vehicle","Transport","Dedicated Transport","Chaos","Rhino","Smoke","Faction: Emperor's Children","Slaanesh"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 **Emperor's Children Infantry**models (excluding **Terminator** and **Flawless Blade** models).",
    },
    {
        army: "emperors_children",
        class: "other",
        name: "Chaos Spawn",
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
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            emperors_children_weapons.hideous_mutations,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.hideous_mutations, selected: true},
            ],
        },
        abilities: [
            { name: "Scuttling Horrors", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, this unit can make a Normal move of up to 6\"." },
        ],
        keywords: ["Beast","Chaos","Faction: Emperor's Children","Slaanesh","Chaos Spawn"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "other",
        name: "Chaos Terminators",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            emperors_children_weapons.power_fist,
            emperors_children_weapons.chainfist,
            emperors_children_weapons.paired_accursed_weapons,
        ],
        rangedWeapons: [
            emperors_children_weapons.heavy_flamer,
            emperors_children_weapons.reaper_autocannon,
            emperors_children_weapons.combi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.heavy_flamer, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.reaper_autocannon, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.combi_weapon, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.power_fist, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.chainfist, selected: true},
            ],
            slot6: [
                {...emperors_children_weapons.paired_accursed_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Lethal Obsession", desc: "In your Shooting phase, each time this unit is selected to shoot, if it makes one or more shooting attacks and all of those attacks target the same enemy unit, until the end of the turn, each time this unit declares a charge, if that enemy unit is a target of that charge, you can re-roll the Charge roll." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Infantry","Chaos","Terminator","Faction: Emperor's Children","Slaanesh","Terminator Squad"],
        pointOptions: [{ models: 6, pts: 360 }],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Daemon Prince of Slaanesh",
        pts: 180,
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
            emperors_children_weapons.hellforged_weapons_strike,
            emperors_children_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            emperors_children_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Lord of Excess", desc: "While this model is within 3\" of one or more friendly **Slaanesh Infantry**, this model has the Lone Operative ability." },
            { name: "Excessive Vigour (Aura)", desc: "While a friendly **Slaanesh** unit is within 6\" of this model, if that unit made a Charge move this turn, improve the Armour Penetration characteristic of melee weapons equipped by that unit by 1." },
            { name: "Ecstatic Death", desc: "If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 2+, do not remove it from play. This model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
        ],
        keywords: ["Faction: Emperor's Children","Monster","Character","Chaos","Daemon","Slaanesh","Daemon Prince"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Daemon Prince of Slaanesh with Wings",
        pts: 215,
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
            emperors_children_weapons.hellforged_weapons_strike,
            emperors_children_weapons.hellforged_weapons_sweep,
        ],
        rangedWeapons: [
            emperors_children_weapons.infernal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.infernal_cannon, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.hellforged_weapons_strike, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.hellforged_weapons_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemonic Destruction", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of this model and roll one D6 for each of this model's remaining wounds: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds)." },
            { name: "Stimulated by Pain", desc: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack." },
        ],
        keywords: ["Faction: Emperor's Children","Monster","Character","Chaos","Daemon","Slaanesh","Fly","Daemon Prince with Wings"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "battleline",
        name: "Daemonettes",
        pts: 90,
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
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            emperors_children_weapons.slashing_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.slashing_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Horrifying Beauty", desc: "At the start of the Fight phase, each enemy unit in Engagement Range of one or more units from your army with this ability must take a Battle-shock test, subtracting 1 from that test if that enemy unit is Below Half-strength." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Daemonic Icon", desc: "Models in the bearer's unit have a Leadership characteristic of 6+." },
            { name: "Instrument of Chaos", desc: "Add 1 to Charge rolls made for the bearer's unit." },
        ],
        keywords: ["Infantry","Battleline","Chaos","Daemon","Slaanesh","Daemonettes","Faction: Legions of Excess","Summoned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.shearing_claws_strike,
            emperors_children_weapons.shearing_claws_sweep,
            emperors_children_weapons.electroscourge,
        ],
        rangedWeapons: [
            emperors_children_weapons.heavy_missile_launcher_frag,
            emperors_children_weapons.heavy_missile_launcher_krak,
            emperors_children_weapons.hades_battle_cannon,
            emperors_children_weapons.ectoplasma_destructor,
            emperors_children_weapons.heavy_baleflamer,
            emperors_children_weapons.excruciator_cannon,
            emperors_children_weapons.magma_cutter,
            emperors_children_weapons.hades_lascannon,
            emperors_children_weapons.heavy_reaper_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.heavy_missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.heavy_missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.hades_battle_cannon, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.ectoplasma_destructor, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.heavy_baleflamer, selected: true},
            ],
            slot6: [
                {...emperors_children_weapons.excruciator_cannon, selected: true},
            ],
            slot7: [
                {...emperors_children_weapons.magma_cutter, selected: true},
            ],
            slot8: [
                {...emperors_children_weapons.hades_lascannon, selected: true},
            ],
            slot9: [
                {...emperors_children_weapons.heavy_reaper_autocannon, selected: true},
            ],
            slot10: [
                {...emperors_children_weapons.shearing_claws_strike, selected: true},
            ],
            slot11: [
                {...emperors_children_weapons.shearing_claws_sweep, selected: true},
            ],
            slot12: [
                {...emperors_children_weapons.electroscourge, selected: true},
            ],
        },
        abilities: [
            { name: "Scuttling Walker", desc: "Each time this unit makes a Normal, Advance or Fall Back move, it can move through models (excluding **Titanic** models) and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
            { name: "Revel in Desecration", desc: "Each time this model makes an attack that targets an enemy unit that is not below Half-strength, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Chaos","Daemon","Slaanesh","Faction: Emperor's Children","Defiler"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Excruciator [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
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
            { name: "Leader", desc: "This unit can be attached to the following units: **Infractors, Noise Marines, Tormentors**" },
            { name: "Warped Invigoration (Psychic)", desc: "In your Shooting phase, after this model has shot, if an enemy unit was hit by one or more of those attacks, until the end of the turn, add 1 to Charge rolls made for this unit." },
        ],
        keywords: ["Faction: Emperor's Children","Infantry","Character","Psyker","Grenades","Chaos","Slaanesh","Excruciator","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.barbed_tail_and_dissecting_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.barbed_tail_and_dissecting_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Soporific Musk", desc: "Each time an enemy unit (excluding **Monsters** and **Vehicles**) within Engagement Range of one or more units from your army with this ability Falls Back, models in that unit must take Desperate Escape tests. When doing so, if that enemy unit is also Battle-shocked, subtract 1 from each of those Desperate Escape tests." },
        ],
        keywords: ["Beast","Chaos","Daemon","Slaanesh","Fiends","Faction: Legions of Excess","Summoned"],
        pointOptions: [{ models: 4, pts: 190 }],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "other",
        name: "Flawless Blades",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            emperors_children_weapons.blissblade,
        ],
        rangedWeapons: [
            emperors_children_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.blissblade, selected: true},
            ],
        },
        abilities: [
            { name: "Daemonic Patrons", desc: "Each time this unit is selected to fight, it can call upon daemonic patrons. If it does, until the end of the phase, each time a model in this unit makes an attack. an unmodified Wound roll of 3+ scores a Critical Wound. At the end of the Fight phase, if this unit called upon daemonic patrons this phase and no enemy models were destroyed by attacks made by models in this unit this phase, one model in this unit is destroyed." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Infantry","Grenades","Chaos","Slaanesh","Flawless Blades","Faction: Emperor's Children"],
        pointOptions: [{ models: 3, pts: 200 }],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Flawless Champion [Crucible]",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 3,
            wounds: 5,
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
            { name: "Leader", desc: "This unit can be attached to the following units: **Flawless Blades**" },
            { name: "Obsessive Huntsman", desc: "Melee weapons equipped by this model have the [Precision] ability." },
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Emperor's Children","Infantry","Character","Grenades","Chaos","Slaanesh","Crucible","Flawless Champion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Fulgrim",
        pts: 340,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 16,
            tough: 11,
            saving: 2,
            wounds: 16,
            leader: 5,
            control: 6,
            invuln: 4
        },
        meleeWeapons: [
            emperors_children_weapons.serpentine_tail,
            emperors_children_weapons.daemonic_blades_strike,
            emperors_children_weapons.daemonic_blades_sweep,
        ],
        rangedWeapons: [
            emperors_children_weapons.malefic_lash,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.malefic_lash, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.serpentine_tail, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.daemonic_blades_strike, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.daemonic_blades_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemonic Poisons", desc: "In your Shooting phase and the Fight phase, after this model has finished making its attacks, select one enemy unit hit by one or more of those attacks. Until the end of the battle, that enemy unit is poisoned. At the start of each player's Command phase, roll one D6 for each poisoned enemy unit on the battlefield: on a 4+, that enemy unit suffers D3 mortal wounds." },
            { name: "Daemon Prince of Slaanesh", desc: "At the start of your opponent's Command phase, select one of the abilities in the Daemon Prince of Slaanesh section. Until the start of your opponent's next Command phase, this model has that ability." },
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Supreme Commander", desc: "If this model is in your army, it must be your **Warlord**." },
            { name: "Serpentine", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over sections of terrain features that are 4\" or less in height." },
            { name: "Beguiling Form", desc: "Each time a model makes an attack that targets this unit, subtract 1 from the Hit roll." },
            { name: "Daemonic Speed", desc: "This model has the Fights First ability." },
            { name: "Enthralling Hypnosis (Aura)", desc: "While an enemy unit is within 6\" of this model, each time that unit is selected to Fall Back, it must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead." },
        ],
        keywords: ["Faction: Emperor's Children","Chaos","Slaanesh","Fulgrim","Primarch","Daemon","Monster","Fly","Epic Hero","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "other",
        name: "Heldrake",
        pts: 195,
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
            leader: 7,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            emperors_children_weapons.heldrake_claws,
        ],
        rangedWeapons: [
            emperors_children_weapons.baleflamer,
            emperors_children_weapons.hades_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.baleflamer, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.hades_autocannon, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.heldrake_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Airborne Predator", desc: "Each time this model ends a Normal move, you can select one enemy unit that it moved over during that move and roll two D6, adding 1 to each result if that enemy unit can FLY: for each 4+, that enemy unit suffers D3 mortal wounds." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Chaos","Daemon","Heldrake","Faction: Emperor's Children","Slaanesh"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "battleline",
        name: "Infractors",
        pts: 85,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            emperors_children_weapons.duelling_sabre,
            emperors_children_weapons.rapture_lash,
            emperors_children_weapons.power_sword,
        ],
        rangedWeapons: [
            emperors_children_weapons.bolt_pistol,
            emperors_children_weapons.plasma_pistol_standard,
            emperors_children_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.duelling_sabre, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.rapture_lash, selected: true},
            ],
            slot6: [
                {...emperors_children_weapons.power_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Excessive Assault", desc: "Each time a model in this unit targets an enemy unit with a melee attack, re-roll a Wound roll of 1. If that enemy unit is within range of an objective marker, you can re-roll the Wound roll instead." },
            { name: "Icon of Excess", desc: "At the end of your Shooting phase or the Fight phase, if the bearer's unit destroyed one or more enemy units this phase, the bearer's unit takes a Leadership test. If that test is passed, you gain 1CP." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Chaos","Slaanesh","Infractors","Faction: Emperor's Children"],
        pointOptions: [{ models: 5, pts: 160 }],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.snapping_claws,
            emperors_children_weapons.witstealer_sword,
            emperors_children_weapons.ritual_knife,
        ],
        rangedWeapons: [
            emperors_children_weapons.phantasmagoria_witchfire,
            emperors_children_weapons.phantasmagoria_focused_witchfire,
            emperors_children_weapons.living_whip,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.phantasmagoria_witchfire, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.phantasmagoria_focused_witchfire, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.living_whip, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.snapping_claws, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.witstealer_sword, selected: true},
            ],
            slot6: [
                {...emperors_children_weapons.ritual_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Daemon Lord of Slaanesh (Aura)", desc: "While a friendly **Legions of Excess** unit is within 6\" of this model, improve the Armour Penetration of melee weapons in that unit by 1." },
            { name: "Mesmerising Form", desc: "Each time an attack targets this model, subtract 1 from the Hit roll." },
            { name: "Shining aegis", desc: "The bearer has a Save characteristic of 3+." },
        ],
        keywords: ["Monster","Character","Psyker","Chaos","Daemon","Slaanesh","Faction: Legions of Excess","Keeper of Secrets"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Lord Exultant",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            emperors_children_weapons.close_combat_weapon,
            emperors_children_weapons.rapture_lash_2,
            emperors_children_weapons.phoenix_power_spear,
            emperors_children_weapons.master_crafted_power_sword,
            emperors_children_weapons.power_fist,
        ],
        rangedWeapons: [
            emperors_children_weapons.bolt_pistol,
            emperors_children_weapons.plasma_pistol_standard,
            emperors_children_weapons.plasma_pistol_supercharge,
            emperors_children_weapons.screamer_pistol,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.screamer_pistol, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.close_combat_weapon, selected: true},
            ],
            slot6: [
                {...emperors_children_weapons.rapture_lash_2, selected: true},
            ],
            slot7: [
                {...emperors_children_weapons.phoenix_power_spear, selected: true},
            ],
            slot8: [
                {...emperors_children_weapons.master_crafted_power_sword, selected: true},
            ],
            slot9: [
                {...emperors_children_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Perfectionists", desc: "While this model is leading a unit, weapons equipped by models in that unit have the **[LETHAL HITS]** ability." },
            { name: "Euphoric Strikes", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does so, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and improve the Armour Penetration characteristic of those weapons by 1." },
            { name: "Lord of the Host", desc: "If this model is attached to an **Emperor's Children Battleline** unit during the Declare Battle Formations step, this model has the Infiltrators and Scouts 6\" ability." },
            { name: "Leader", desc: "This model can be attached to the following units: **Infractors; Tormentors**" },
        ],
        keywords: ["Character","Faction: Emperor's Children","Infantry","Grenades","Chaos","Slaanesh","Lord Exultant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Lord Kakophonist",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            emperors_children_weapons.power_sword_2,
            emperors_children_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            emperors_children_weapons.screamer_pistol,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.screamer_pistol, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.power_sword_2, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: **Emperor's Children Terminator Squad; Noise Marines**" },
            { name: "Obsessive Annunciation", desc: "While this model is leading a unit, ranged weapons equipped by that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Doom Siren", desc: "In your Shooting phase, after this model's unit has shot, select one enemy **Infantry** unit hit by one or more of those attacks and roll three D6: for each 4+, that enemy unit suffers 1 mortal wound. If an enemy suffers one or more mortal wounds as a result of this ability, it must take a Battle-shock test." },
        ],
        keywords: ["Character","Grenades","Infantry","Chaos","Slaanesh","Faction: Emperor's Children","Lord Kakophonist"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Lucius the Eternal",
        pts: 150,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            emperors_children_weapons.blade_of_the_laer,
            emperors_children_weapons.lash_of_torment,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.blade_of_the_laer, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.lash_of_torment, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Flawless Blades**" },
            { name: "Duellist’s Hubris", desc: "At the start of the Fight phase, if this model is not leading a unit, until the end of the phase, it has the Fights First ability." },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "A Challenge Worthy of Skill", desc: "Each time this model makes an attack that targets a **Character, Monster** or **Walker** unit, you can re-roll the Hit roll and re-roll the Wound roll." },
        ],
        keywords: ["Infantry","Character","Epic Hero","Chaos","Slaanesh","Faction: Emperor's Children","Lucius the Eternal"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.maulerfiend_fists,
            emperors_children_weapons.lasher_tendrils,
        ],
        rangedWeapons: [
            emperors_children_weapons.magma_cutter_2,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.magma_cutter_2, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.maulerfiend_fists, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.lasher_tendrils, selected: true},
            ],
        },
        abilities: [
            { name: "Glutton for Punishment", desc: "Each time this model makes an attack, if it is below its Starting Strength, add 1 to the Hit roll. If this model is also Below Half-Strength, add 1 to the Wound roll as well." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
        ],
        keywords: ["Vehicle","Walker","Chaos","Daemon","Faction: Emperor's Children","Slaanesh","Maulerfiend"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.power_sword,
            emperors_children_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            emperors_children_weapons.screamer_pistol_2,
            emperors_children_weapons.blastmaster_varied_frequency,
            emperors_children_weapons.blastmaster_single_frequency,
            emperors_children_weapons.sonic_blaster,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.screamer_pistol_2, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.blastmaster_varied_frequency, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.blastmaster_single_frequency, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.sonic_blaster, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.power_sword, selected: true},
            ],
            slot6: [
                {...emperors_children_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Terrifying Crescendo", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next Shooting phase, each time a Battle-shock or Leadership test is taken for that enemy unit, subtract 1 from that test." },
        ],
        keywords: ["Infantry","Chaos","Slaanesh","Faction: Emperor's Children","Noise Marines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.lashing_tongues,
            emperors_children_weapons.slashing_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.lashing_tongues, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.slashing_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Unholy Speed", desc: "You can re-roll Advance and Charge rolls made for this unit." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Daemonic Icon", desc: "Models in the bearer's unit have a Leadership characteristic of 6+." },
            { name: "Instrument of Chaos", desc: "Add 1 to Charge rolls made for the bearer's unit." },
        ],
        keywords: ["Mounted","Chaos","Daemon","Slaanesh","Seekers","Summoned","Faction: Legions of Excess"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "emperors_children",
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
            emperors_children_weapons.snapping_claws,
            emperors_children_weapons.soulpiercer,
        ],
        rangedWeapons: [
            emperors_children_weapons.lash_of_slaanesh,
            emperors_children_weapons.pavane_of_slaanesh_witchfire,
            emperors_children_weapons.pavane_of_slaanesh_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.lash_of_slaanesh, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.pavane_of_slaanesh_witchfire, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.pavane_of_slaanesh_focused_witchfire, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.snapping_claws, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.soulpiercer, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "No Prey Can Evade", desc: "You can re-roll Advance and Charge rolls made for this model." },
            { name: "Monarch of the Hunt", desc: "At the start of the first battle round, select one enemy unit to be this model's quarry. Each time this model makes a melee attack that targets its quarry, you can re-roll the Hit roll and you can re-roll the Wound roll. Each time this model's quarry is destroyed, select one new enemy unit to be this model's quarry." },
        ],
        keywords: ["Monster","Character","Epic Hero","Psyker","Chaos","Daemon","Slaanesh","Faction: Legions of Excess","Shalaxi Helbane"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "characters",
        name: "Sorcerer",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            emperors_children_weapons.force_weapon,
        ],
        rangedWeapons: [
            emperors_children_weapons.agonising_energies_witchfire,
            emperors_children_weapons.agonising_energies_focused_witchfire,
            emperors_children_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.agonising_energies_witchfire, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.agonising_energies_focused_witchfire, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.bolt_pistol, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units: **Infractors; Noise Marines; Tormentors**" },
            { name: "Warped Interference (Psychic)", desc: "While this model is leading a unit, each time a ranged attack targets that unit, models in it have the Benefit of Cover against that attack." },
            { name: "Wracking Agonies (Psychic)", desc: "In your Shooting phase, after this model has shot, select one INFANTRY unit hit by one or more of those attacks made with its Agonising Energies. Until the start of your next turn, that unit is wracked with agonies. While a unit is wracked with agonies, subtract 2\" from its Move characteristic and subtract 2 from charge rolls made for it." },
        ],
        keywords: ["Faction: Emperor's Children","Character","Infantry","Psyker","Chaos","Slaanesh","Grenades","Sorcerer"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "emperors_children",
        class: "battleline",
        name: "Tormentors",
        pts: 85,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            emperors_children_weapons.rapture_lash,
            emperors_children_weapons.power_sword,
            emperors_children_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            emperors_children_weapons.boltgun,
            emperors_children_weapons.plasma_gun_standard,
            emperors_children_weapons.plasma_gun_supercharge,
            emperors_children_weapons.meltagun,
            emperors_children_weapons.bolt_pistol,
            emperors_children_weapons.plasma_pistol_standard,
            emperors_children_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...emperors_children_weapons.boltgun, selected: true},
            ],
            slot2: [
                {...emperors_children_weapons.plasma_gun_standard, selected: true},
            ],
            slot3: [
                {...emperors_children_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot4: [
                {...emperors_children_weapons.meltagun, selected: true},
            ],
            slot5: [
                {...emperors_children_weapons.bolt_pistol, selected: true},
            ],
            slot6: [
                {...emperors_children_weapons.plasma_pistol_standard, selected: true},
            ],
            slot7: [
                {...emperors_children_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot8: [
                {...emperors_children_weapons.rapture_lash, selected: true},
            ],
            slot9: [
                {...emperors_children_weapons.power_sword, selected: true},
            ],
            slot10: [
                {...emperors_children_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Icon of Excess", desc: "At the end of your Shooting phase or the Fight phase, if the bearer's unit destroyed one or more enemy units this phase, the bearer's unit takes a Leadership test. If that test is passed, you gain 1CP." },
            { name: "Objective Defiled", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Chaos","Slaanesh","Tormentors","Faction: Emperor's Children"],
        pointOptions: [{ models: 5, pts: 160 }],
        transport: null,
    },
]

export default emperors_children_army
