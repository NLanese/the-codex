// AUTO-GENERATED units for Agents of the Imperium (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import agents_of_the_imperium_weapons from "../weapons/agents_of_the_imperium"

const agents_of_the_imperium_army = [
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Callidus Assassin",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.phase_sword_and_poison_blades,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.neural_shredder,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.neural_shredder, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.phase_sword_and_poison_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Reign of Confusion", desc: "Once per battle, after your opponent uses a Stratagem, this model can use this ability. If it does, until the end of the battle, the CP cost your opponent must pay to use that Stratagem again is increased by 1CP." },
            { name: "Acrobatic Escape", desc: "At the end of the Fight phase, if this model is within Engagement Range of one or more enemy units, it can make a Fall Back move of up to D6\". In addition, at the end of your opponent's turn, if this model is not within 3\" of one or more enemy units, you can remove it from the battlefield and then, in the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the battle ends and this model is not on the battlefield, it is destroyed." },
            { name: "Decoy Targets", desc: "Twice per battle, in your Movement phase, you can select one other friendly INFANTRY model that is on the battlefield and not within Engagement Range of one or more enemy units. The selected model is destroyed (ignoring any rules that are triggered when a model is destroyed) and this model is removed from the battlefield and set up again as close as possible to where that destroyed model was and not within Engagement Range of one or more enemy units. This ability cannot be used more than once in the same battle round." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Imperium","Callidus Assassin","Officio Assassinorum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.armoured_hull,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.hurricane_bolter,
            agents_of_the_imperium_weapons.twin_assault_cannon,
            agents_of_the_imperium_weapons.twin_lascannon,
            agents_of_the_imperium_weapons.blackstar_rocket_launcher,
            agents_of_the_imperium_weapons.stormstrike_missile_launcher,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.hurricane_bolter, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.twin_assault_cannon, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.twin_lascannon, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.blackstar_rocket_launcher, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.stormstrike_missile_launcher, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Blackstar Cluster Launcher", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 5+, that unit suffers 1 mortal wound." },
            { name: "Damaged: 1-5 Wounds Remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Transport", desc: "This model has a transport capacity of 12 DEATHWATCH INFANTRY models." },
            { name: "Auspex Array", desc: "Ranged weapons equipped by the bearer have the [IGNORES COVER] ability." },
            { name: "Infernum Halo-launcher", desc: "The bearer has the SMOKE keyword." },
        ],
        keywords: ["Fly","Vehicle","Aircraft","Imperium","Transport","Faction: Agents of the Imperium","Retinue","Corvus Blackstar","Ordo Xenos","Deathwatch"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Culexus Assassin",
        pts: 85,
        units: -1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.life_draining_touch,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.animus_speculum,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.animus_speculum, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.life_draining_touch, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Abomination", desc: "This model has the Feel No Pain 2+ ability against Psychic Attacks." },
            { name: "Soulless Horror", desc: "Once per battle, at the start of any Command phase, this model can use this ability. If it does, each enemy unit within 9\" of this model must take a Battle-shock test, subtracting 1 from that test (or subtracting 2 if that unit is a PSYKER)." },
            { name: "Etheric Emergence", desc: "In your Movement phase, when this model is set up on the battlefield using the Deep Strike ability, it can perform an etheric emergence. If it does, this model can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge." },
            { name: "Esoteric Explosives", desc: "Each time this model is targeted with the Grenades Stratagem, 1 mortal wound is inflicted for each D6 roll of 3+ instead of for each 4+" },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Grenades","Imperium","Culexus Assassin","Officio Assassinorum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Daemonhost [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.warp_grasp,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.unholy_gaze,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.unholy_gaze, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.warp_grasp, selected: true},
            ],
        },
        abilities: [
            { name: "Malefic Warding", desc: "While an INQUISITOR model is leading a unit that contains one or more DAEMONHOST models, models in this unit have a 5+ invulnerable save." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Bound Daemon", desc: "While an INQUISITOR model is leading a unit that includes one or more DAEMONHOST models, the Objective Control characteristic of DAEMONHOST models in that unit is 1." },
            { name: "Inquisitorial Retinue", desc: "If your Army Faction is not AGENTS OF THE IMPERIUM, then for each unique pairing of 1 INQUISITORIAL AGENTS unit and 1 DAEMONHOST unit occuring in your army, increase the maximum number of RETINUE units permitted in your army by 1. At the start of the Declare Battle Formations step, this unit can join one INQUISITORIAL AGENTS unit from your army that is being led by an INQUISITOR model (a unit cannot have more than one DAEMONHOST unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Imperium","Psyker","Retinue","Daemon","Daemonhost"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Damned Legionnaires [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.plasma_gun_standard,
            agents_of_the_imperium_weapons.plasma_gun_supercharge,
            agents_of_the_imperium_weapons.flamer,
            agents_of_the_imperium_weapons.boltgun,
            agents_of_the_imperium_weapons.multi_melta,
            agents_of_the_imperium_weapons.heavy_flamer,
            agents_of_the_imperium_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.plasma_gun_standard, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.flamer, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.boltgun, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.multi_melta, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.meltagun, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Grim Spectres", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test, subtracting 1 from the result when doing so." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Grenades","Imperium","Damned Legionaires","Retinue"],
        pointOptions: [{ models: 5, pts: 180 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Deathwatch Agent [Crucible]",
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
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
            { name: "Your Vigil is Not Yet Ended", desc: "While this model is leading a unit, in your Command phase, you can returned 1 destroyed model (excluding **Character** models) to that unit." },
            { name: "Leader", desc: "This model can be attached to the following unit: **Deathwatch Kill Team**" },
            { name: "High-handed Authority", desc: "While this model is leading a unit, it can embark within any **Transport** that its Bodyguard unit can embark within." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Grenades","Imperium","Crucible","Ordo Xenos","Deathwatch","Deathwatch Agent"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "battleline",
        name: "Deathwatch Kill Team",
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
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.xenophase_blade,
            agents_of_the_imperium_weapons.power_weapon,
            agents_of_the_imperium_weapons.deathwatch_thunder_hammer,
            agents_of_the_imperium_weapons.close_combat_weapon,
            agents_of_the_imperium_weapons.black_shield_blades,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.combi_weapon,
            agents_of_the_imperium_weapons.boltgun_2,
            agents_of_the_imperium_weapons.frag_cannon,
            agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_bolter,
            agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_flamer,
            agents_of_the_imperium_weapons.stalker_pattern_boltgun,
            agents_of_the_imperium_weapons.deathwatch_shotgun,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.combi_weapon, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.boltgun_2, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.frag_cannon, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_bolter, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_flamer, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.stalker_pattern_boltgun, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.deathwatch_shotgun, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.xenophase_blade, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.power_weapon, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.deathwatch_thunder_hammer, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
            slot12: [
                {...agents_of_the_imperium_weapons.black_shield_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Death to the Alien", desc: "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack does not have the IMPERIUM or CHAOS keywords, you can re-roll the Hit roll instead." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Imperium","Retinue","Faction: Agents of the Imperium","Ordo Xenos","Deathwatch","Kill Team"],
        pointOptions: [{ models: 5, pts: 190 }, { models: 5, pts: 200 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Deathwatch Terminator Squad [Legends]",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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
            agents_of_the_imperium_weapons.twin_lightning_claws,
            agents_of_the_imperium_weapons.thunder_hammer,
            agents_of_the_imperium_weapons.power_fist,
            agents_of_the_imperium_weapons.power_weapon_2,
            agents_of_the_imperium_weapons.chainfist,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.twin_lightning_claws, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.thunder_hammer, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.power_fist, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.power_weapon_2, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.chainfist, selected: true},
            ],
        },
        abilities: [
            { name: "Terminatus Assault", desc: "Each time this unit ends a Charge move, each enemy unit within Engagement Range of this unit must take a Battle-shock test." },
            { name: "Teleport Homer", desc: "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" of that token and not within 9\" of any enemy models. That token is then removed." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Attached Unit", desc: "If a CHARACTER from your army with the Leader ability can be attached to a DEATHWATCH KILL TEAM, it can be attached to this unit instead." },
            { name: "Storm shield", desc: "The bearer has a Wounds characteristic of 4." },
        ],
        keywords: ["Infantry","Imperium","Terminator","Deathwatch Terminator Squad","Deathwatch"],
        pointOptions: [{ models: 5, pts: 420 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.combat_knife,
            agents_of_the_imperium_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.deathwatch_marksman_bolt_carbine,
            agents_of_the_imperium_weapons.special_issue_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.deathwatch_marksman_bolt_carbine, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.special_issue_bolt_pistol, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.combat_knife, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.heavy_thunder_hammer,
            agents_of_the_imperium_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.heavy_thunder_hammer, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.power_weapon_3, selected: true},
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
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.stalker_bolt_rifle,
            agents_of_the_imperium_weapons.bolt_pistol,
            agents_of_the_imperium_weapons.plasma_incinerator_standard,
            agents_of_the_imperium_weapons.plasma_incinerator_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.stalker_bolt_rifle, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.plasma_incinerator_standard, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.plasma_incinerator_supercharge, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Enthroned Agent [Crucible]",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 3,
            wounds: 9,
            leader: 6,
            control: 3,
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
            { name: "Towering Reputation (Aura)", desc: "While a friendly unit is within 6\" of this model, improve the Leadership characteristic of models in that unit by 1. While an enemy unit is within 6\" of this model, worsen the Leadership characteristic of models in that unit by 1." },
            { name: "High-handed Authority", desc: "While this model is leading a unit, it can embark within any **Transport** that its Bodyguard unit can embark within." },
        ],
        keywords: ["Faction: Agents of the Imperium","Character","Imperium","Crucible","Vehicle","Walker","Enthroned Agent"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Eversor Assassin",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 4,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.power_sword_and_neuro_gauntlet,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.executioner_pistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.executioner_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.power_sword_and_neuro_gauntlet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Frenzon", desc: "This model is eligible to shoot and declare a charge in a turn in which it Advanced." },
            { name: "Overkill", desc: "Once per battle, in your Movement phase, this model can use this ability before it makes a Normal move. If it does, until the end of the turn, add 6\" to this model's Movement characteristic and add 3 to the Attacks characteristic of this model's melee weapons." },
            { name: "Intra-neural Biotech", desc: "Once per battle round, you can target this model with the Heroic Intervention or Counter‑offensive Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Grenades","Imperium","Eversor Assassin","Officio Assassinorum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Exaction Squad",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.excruciator_maul,
            agents_of_the_imperium_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.arbites_grenade_launcher_frag,
            agents_of_the_imperium_weapons.arbites_grenade_launcher_krak,
            agents_of_the_imperium_weapons.executioner_shotgun,
            agents_of_the_imperium_weapons.heavy_stubber,
            agents_of_the_imperium_weapons.webber,
            agents_of_the_imperium_weapons.arbites_combat_shotgun,
            agents_of_the_imperium_weapons.arbites_shotpistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.arbites_grenade_launcher_frag, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.arbites_grenade_launcher_krak, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.executioner_shotgun, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.webber, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.arbites_combat_shotgun, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.arbites_shotpistol, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.excruciator_maul, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Arbites medi-kit", desc: "At the start of your Command phase, if the bearer's unit is below its Starting Strength, you can return up to D3 destroyed Exaction Vigilants to this unit." },
            { name: "Soulguilt scanner", desc: "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability." },
            { name: "Imperial Law", desc: "At the start of the battle, select one unit from your opponent's army. Each time a model in this unit makes an attack that targets that unit, that attack has the [Lethal Hits] and [Precision] abilities." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Grenades","Imperium","Retinue","Exaction Squad","Adeptus Arbites"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Fortis Kill Team [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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
            agents_of_the_imperium_weapons.close_combat_weapon,
            agents_of_the_imperium_weapons.long_vigil_melee_weapon,
            agents_of_the_imperium_weapons.astartes_chainsword,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.bolt_rifle,
            agents_of_the_imperium_weapons.hand_flamer,
            agents_of_the_imperium_weapons.heavy_bolt_pistol,
            agents_of_the_imperium_weapons.twin_bolt_rifle,
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.plasma_pistol_standard,
            agents_of_the_imperium_weapons.plasma_pistol_supercharge,
            agents_of_the_imperium_weapons.long_vigil_ranged_weapon,
            agents_of_the_imperium_weapons.plasma_incinerator_standard,
            agents_of_the_imperium_weapons.plasma_incinerator_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.bolt_rifle, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.hand_flamer, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.twin_bolt_rifle, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.plasma_pistol_standard, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.long_vigil_ranged_weapon, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.plasma_incinerator_standard, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.plasma_incinerator_supercharge, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
            slot12: [
                {...agents_of_the_imperium_weapons.long_vigil_melee_weapon, selected: true},
            ],
            slot13: [
                {...agents_of_the_imperium_weapons.astartes_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Fortis Doctrines", desc: "Each time a model in this unit makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll." },
            { name: "Attached Unit", desc: "If a CHARACTER from your army with the Leader ability can be attached to an DEATHWATCH KILL TEAM, it can be attached to this unit instead." },
            { name: "Transport", desc: "This unit cannot embark within an IMPERIAL RHINO." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Deathwatch","Fortis Kill Team"],
        pointOptions: [{ models: 5, pts: 200 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.frag_cannon_2,
            agents_of_the_imperium_weapons.hellstorm_bolt_rifle,
            agents_of_the_imperium_weapons.astartes_grenade_launcher_frag,
            agents_of_the_imperium_weapons.astartes_grenade_launcher_krak,
            agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_bolter_2,
            agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_flamer,
            agents_of_the_imperium_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.frag_cannon_2, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.hellstorm_bolt_rifle, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.astartes_grenade_launcher_frag, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.astartes_grenade_launcher_krak, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_bolter_2, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_flamer, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.bolt_pistol, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Gravis"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Grey Knights Terminator Squad",
        pts: 190,
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
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.nemesis_force_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.incinerator,
            agents_of_the_imperium_weapons.psilencer,
            agents_of_the_imperium_weapons.psycannon,
            agents_of_the_imperium_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.incinerator, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.psilencer, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.psycannon, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.nemesis_force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Rites of Teleportation", desc: "If one or more INQUISITOR units are attached to this unit during the Declare Battle Formations step, models in those units have the Deep Strike ability." },
            { name: "Hammerhand (Psychic)", desc: "Each time this unit makes a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability." },
            { name: "Narthecium", desc: "In your Command phase, you can return 1 destroyed model (excluding CHARACTERS) to the bearer's unit." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Psyker","Terminator","Grenades","Imperium","Ordo Malleus","Requisitioned","Grey Knights Terminator Squad"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "battleline",
        name: "Imperial Navy Breachers",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.chainsword,
            agents_of_the_imperium_weapons.power_weapon_4,
            agents_of_the_imperium_weapons.chainfist_2,
            agents_of_the_imperium_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.autopistol,
            agents_of_the_imperium_weapons.bolt_pistol_3,
            agents_of_the_imperium_weapons.demolition_charge,
            agents_of_the_imperium_weapons.navis_heavy_shotgun,
            agents_of_the_imperium_weapons.navis_las_volley,
            agents_of_the_imperium_weapons.plasma_gun_standard_2,
            agents_of_the_imperium_weapons.plasma_gun_supercharge_2,
            agents_of_the_imperium_weapons.meltagun_2,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.autopistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.bolt_pistol_3, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.demolition_charge, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.navis_heavy_shotgun, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.navis_las_volley, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.plasma_gun_standard_2, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.plasma_gun_supercharge_2, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.meltagun_2, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.chainsword, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.power_weapon_4, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.chainfist_2, selected: true},
            ],
            slot12: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Breaching Team", desc: "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Wound roll instead." },
            { name: "Gheistskull", desc: "Once per battle, when you select this unit as the target of the Grenade Stratagem, you can target one enemy unit visible to and within 18\" of this unit that is not within Engagement Range of any units from your army, instead of one within 8\"." },
            { name: "CAT Unit", desc: "Once per battle, when this unit is selected to shoot, until the end of the phase, ranged weapons equipped by this unit gain the [Ignores Cover] ability." },
            { name: "Endurant shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Retinue","Imperial Navy Breachers","Battleline","Smoke","Voidfarers","Faction: Agents of the Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "transports",
        name: "Imperial Rhino",
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
            agents_of_the_imperium_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.storm_bolter,
            agents_of_the_imperium_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.hunter_killer_missile, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Self-repair", desc: "At the start of your Command phase, this model regains 1 lost wound." },
        ],
        keywords: ["Faction: Agents of the Imperium","Dedicated Transport","Vehicle","Smoke","Transport","Imperium","Imperial Rhino"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 AGENTS OF THE IMPERIUM INFANTRY models. It cannot transport TERMINATOR or OFFICIO ASSASSINORUM models.",
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Indomitor Kill Team [Legends]",
        pts: 120,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.power_fists,
            agents_of_the_imperium_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.heavy_bolt_rifle,
            agents_of_the_imperium_weapons.heavy_bolter,
            agents_of_the_imperium_weapons.flamestorm_gauntlets,
            agents_of_the_imperium_weapons.auto_boltstorm_gauntlets,
            agents_of_the_imperium_weapons.fragstorm_grenade_launcher,
            agents_of_the_imperium_weapons.melta_rifle,
            agents_of_the_imperium_weapons.assault_bolters,
            agents_of_the_imperium_weapons.plasma_exterminators_standard,
            agents_of_the_imperium_weapons.plasma_exterminators_supercharge,
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.heavy_bolt_rifle, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.flamestorm_gauntlets, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.auto_boltstorm_gauntlets, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.fragstorm_grenade_launcher, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.melta_rifle, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.assault_bolters, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.plasma_exterminators_standard, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.plasma_exterminators_supercharge, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.multi_melta, selected: true},
            ],
            slot12: [
                {...agents_of_the_imperium_weapons.power_fists, selected: true},
            ],
            slot13: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Indomitor Doctrines", desc: "Each time a model in this unit makes an attack, add 1 to the Hit roll if this unit is below its Starting Strength, and add 1 to the Wound roll as well if this unit is Below Half-strength." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army can be attached to a DEATHWATCH KILL TEAM, it can be attached to this unit instead." },
            { name: "Transport", desc: "This unit cannot embark within an IMPERIAL RHINO." },
            { name: "Jump pack", desc: "The bearer has a Move characteristic of 10\" and can move over models and terrain features as if they were not there." },
            { name: "Jump pack", desc: "The bearer has a Move characteristic of 10\" and can move over models and terrain features as if they were not there." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Indomitor Kill Team","Deathwatch"],
        pointOptions: [{ models: 5, pts: 240 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.inquisitorial_melee_weapon,
            agents_of_the_imperium_weapons.force_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.combi_weapon_2,
            agents_of_the_imperium_weapons.psychic_shock_wave,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.combi_weapon_2, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.psychic_shock_wave, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.inquisitorial_melee_weapon, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Leader", desc: "This model can be attached to the following units: EXACTION SQUAD, GREY KNIGHTS TERMINATOR SQUAD, IMPERIUM BATTLELINE INFANTRY, IMPERIAL NAVY BREACHERS, INQUISITORIAL AGENTS, SISTERS OF BATTLE SQUAD, SUBDUCTOR SQUAD, VIGILANT SQUAD" },
            { name: "Blessed Wardings", desc: "While this model is leading a unit, models in that unit have a 6+ invulnerable save." },
            { name: "Psychic gifts", desc: "The bearer has the PSYKER keyword." },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Inquisitor","Faction: Agents of the Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor Coteaz",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.nemesis_daemon_hammer,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.psychic_blast,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.psychic_blast, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.nemesis_daemon_hammer, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Malefic Wardings (Psychic)", desc: "While this model is leading a unit, models in that unit have a 6+ invulnerable save, and 4+ invulnerable save against Psychic Attacks and attacks made by DAEMON models." },
            { name: "Spy Network", desc: "Each time your opponent gains a CP as the result of an ability, roll one D6: on a 2+, you also gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units: EXACTION SQUAD, GREY KNIGHTS TERMINATOR SQUAD, IMPERIUM BATTLELINE INFANTRY, IMPERIAL NAVY BREACHERS, INQUISITORIAL AGENTS, SUBDUCTOR SQUAD, VIGILANT SQUAD" },
            { name: "Glovodan Psyber-eagle", desc: "In your Command phase, you can select one enemy unit within 18\" of the bearer. Until the start of your next Command phase, that unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Psyker","Imperium","Inquisitor","Coteaz","Ordo Malleus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor Draxus",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.power_fist_2,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.dirgesinger,
            agents_of_the_imperium_weapons.psychic_tempest,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.dirgesinger, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.psychic_tempest, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Xenos Hunter", desc: "While this model is leading a unit, each time a model in that unit makes an attack that targets an enemy unit that does not have the IMPERIUM or CHAOS keywords, add 1 to the Hit roll." },
            { name: "Psychic Veil (Psychic)", desc: "In your Command phase, this PSYKER can use this ability. If it does, roll one D6: on a 1, this PSYKER’s unit suffers D3 mortal wounds; on a 2+, until the start of your next Command phase, this PSYKER’s unit can only be selected as the target of a ranged attack if the attacking model is within 18\"." },
            { name: "Leader", desc: "This model can be attached to the following units: EXACTION SQUAD, IMPERIUM BATTLELINE INFANTRY, IMPERIAL NAVY BREACHERS, INQUISITORIAL AGENTS, SUBDUCTOR SQUAD, VIGILANT SQUAD" },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Psyker","Grenades","Imperium","Inquisitor","Draxus","Ordo Xenos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor Eisenhorn [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.runestaff_and_barbarisater,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.artificer_bolt_pistol,
            agents_of_the_imperium_weapons.mind_assault,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.artificer_bolt_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.mind_assault, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.runestaff_and_barbarisater, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units: \n- DEATHWATCH KILL TEAM (including FORTIS KILL TEAM, INDOMITOR KILL TEAM, PROTEUS KILL TEAM and SPECTRUS KILL TEAM) \n- DAEMONHOST\n- EXACTION SQUAD \n- IMPERIUM BATTLELINE INFANTRY \n- IMPERIAL NAVY BREACHERS\n- INQUISITORIAL AGENTS\n- SUBDUCTOR SQUAD\n- VIGILANT SQUAD" },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Malus Codicium", desc: "While this model is leading a unit, double the Attacks characteristic of weapons equipped by Daemonhost models in that unit." },
            { name: "Dominate Will (Psychic)", desc: "At the start of your opponent’s Shooting phase, select one enemy INFANTRY unit that is within 12\" of and visible to this model and roll one D6: on a 1, this model suffers D3 mortal wounds; on a 2-5, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; on a 6, until the end of the phase, that unit is not eligible to shoot." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Psyker","Grenades","Imperium","Inquisitor","Eisenhorn","Ordo Xenos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor Greyfax",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.master_crafted_power_sword,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.castigation,
            agents_of_the_imperium_weapons.condemnor_stake,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.castigation, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.condemnor_stake, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.master_crafted_power_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Psyoculum", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ANTI-PSYKER 4+] ability." },
            { name: "No Mercy", desc: "While this model is leading a unit, each time a model in that unit makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll." },
            { name: "Leader", desc: "This model can be attached to the following units: EXACTION SQUAD, IMPERIUM BATTLELINE INFANTRY, IMPERIAL NAVY BREACHERS, INQUISITORIAL AGENTS, SISTERS OF BATTLE SQUAD, SUBDUCTOR SQUAD, VIGILANT SQUAD" },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Psyker","Grenades","Imperium","Inquisitor","Greyfax","Ordo Hereticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor in Terminator Armour [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 4,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.inquisitorial_melee_weapon,
            agents_of_the_imperium_weapons.force_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.storm_bolter,
            agents_of_the_imperium_weapons.combi_weapon_2,
            agents_of_the_imperium_weapons.psycannon,
            agents_of_the_imperium_weapons.psychic_shock_wave,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.combi_weapon_2, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.psycannon, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.psychic_shock_wave, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.inquisitorial_melee_weapon, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.force_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units: \n- DEATHWATCH KILL TEAM (including FORTIS KILL TEAM, INDOMITOR KILL TEAM, PROTEUS KILL TEAM and SPECTRUS KILL TEAM) \n- DEATHWATCH TERMINATOR SQUAD\n- EXACTION SQUAD \n\n- GREY KNIGHTS TERMINATOR SQUAD\n- IMPERIUM BATTLELINE INFANTRY \n- IMPERIAL NAVY BREACHERS\n- INQUISITORIAL AGENTS\n- SISTERS OF BATTLE SQUAD\n- SUBDUCTOR SQUAD\n- VIGILANT SQUAD" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Psychic Gifts", desc: "The bearer has the PSYKER keyword." },
            { name: "Blessed Wardings", desc: "While this model is leading a unit, models in that unit have a 6+ invulnerable save." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Grenades","Terminator","Imperium","Inquisitor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor Karamazov [Legends]",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.master_crafted_power_sword_2,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.master_crafted_multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.master_crafted_multi_melta, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.master_crafted_power_sword_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Unsubtle Crusader", desc: "At the start of the Declare Battle Formations step, you can select up to 3 **Agents of the Imperium Infantry** units from your army, or one **Imperium Battleline** unit from your army - those units gain the Scouts 6\" ability." },
            { name: "Throne of Judgement (Aura)", desc: "While a friendly unit is within 6\" of this model, improve the Leadership characteristic of models in that unit by 1. While an enemy unit is within 6\" of this model, worsen the Leadership characteristic of models in that unit by 1." },
        ],
        keywords: ["Faction: Agents of the Imperium","Vehicle","Walker","Character","Epic Hero","Imperium","Inquisitor","Karamazov","Ordo Hereticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor Kroyle",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.butcher_blade,
            agents_of_the_imperium_weapons.garralisks_claws_and_teeth,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.jindarii_tox_cycler,
            agents_of_the_imperium_weapons.stubcarbine,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.jindarii_tox_cycler, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.stubcarbine, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.butcher_blade, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.garralisks_claws_and_teeth, selected: true},
            ],
        },
        abilities: [
            { name: "On My Signal, Fire!", desc: "After this unit has shot, you can select one enemy unit hit by those attacks. Until the end of the phase, each time an **Agents of the Imperium** or **Imperium Infantry Battleline** model from your army makes an attack that targets that enemy unit, you can re‑roll the Hit roll." },
            { name: "Tox‑cycler", desc: "In your Shooting phase, after this unit has shot, if this model scored a hit with its Jindarii tox‑cycler, until the end of the battle, add 2 to the Strength and Damage characteristics of that weapon (to a maximum Damage characteristic of 6)." },
        ],
        keywords: ["Faction: Agents of the Imperium","Mounted","Character","Epic Hero","Imperium","Grenades","Ordo Xenos","Inquisitor","Kroyle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Inquisitor Ostromandeus [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.power_sword,
            agents_of_the_imperium_weapons.hydraulic_vox_ram,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.inferno_pistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.inferno_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.power_sword, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.hydraulic_vox_ram, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit's Inquisitor Ostromandeus model has a 5+ invulnerable save." },
            { name: "Vox-skull", desc: "Once per battle, at the start of any phase, you can select one enemy unit (excluding **Monsters** and **Vehicles**) within 12\" of the bearer. That unit must take a Battle-shock test; if that test is failed, until the end of your next turn, that unit cannot have the Benefit of Cover. \n**Designer’s Note**: *Place a vox‑skull token next to the unit, removing it once this ability has been used.*" },
            { name: "Ward Against the Malefic Arts", desc: "While this unit is leading a unit, each time a Psychic Attack targets that unit, subtract 1 from the Hit roll and subtract 1 from the Wound roll." },
            { name: "Vox‑cast Proclamations (Aura)", desc: "Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this unit’s Inquisitor Ostromandeus model, increase the cost of that use of that Stratagem by 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units: EXACTION SQUAD, IMPERIUM BATTLELINE INFANTRY, IMPERIAL NAVY BREACHERS, INQUISITORIAL AGENTS, SISTERS OF BATTLE SQUAD, SUBDUCTOR SQUAD, VIGILANT SQUAD" },
        ],
        keywords: ["Epic Hero","Infantry","Imperium","Grenades","Character","Inquisitor","Ostromandeus","Faction: Agents of the Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Inquisitorial Agents",
        pts: 50,
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
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.eviscerator,
            agents_of_the_imperium_weapons.mystic_stave,
            agents_of_the_imperium_weapons.agent_melee_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.plasma_pistol_standard_2,
            agents_of_the_imperium_weapons.plasma_pistol_supercharge_2,
            agents_of_the_imperium_weapons.heavy_bolter_2,
            agents_of_the_imperium_weapons.plasma_cannon_standard,
            agents_of_the_imperium_weapons.plasma_cannon_supercharge,
            agents_of_the_imperium_weapons.agent_firearm,
            agents_of_the_imperium_weapons.multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.heavy_bolter_2, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.plasma_cannon_standard, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.agent_firearm, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.multi_melta, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.eviscerator, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.mystic_stave, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.agent_melee_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Loyal Henchmen", desc: "While an INQUISITOR model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll." },
            { name: "Inquisitorial Henchmen", desc: "If your Army Faction is not AGENTS OF THE IMPERIUM, then for each INQUISITOR unit you include in your army, you can include one INQUISITORIAL AGENTS unit in your army that does not count towards the number of RETINUE units your army can include." },
            { name: "Tome-skull", desc: "Once per battle for each Tome-skull this unit is equipped with, at the start of any phase, you can select one other friendly AGENTS OF THE IMPERIUM unit that is Battle-shocked and within 6\" of this unit or one enemy unit within 6\" of this unit. If you select a friendly unit, that unit is no longer Battle-shocked. If you select an enemy unit, it must take a Battle-shock test." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Retinue","Inquisitorial Agents","Faction: Agents of the Imperium"],
        pointOptions: [{ models: 7, pts: 100 }, { models: 7, pts: 10 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "transports",
        name: "Inquisitorial Chimera",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.lasgun_array,
            agents_of_the_imperium_weapons.storm_bolter_2,
            agents_of_the_imperium_weapons.heavy_stubber,
            agents_of_the_imperium_weapons.multi_laser,
            agents_of_the_imperium_weapons.hunter_killer_missile,
            agents_of_the_imperium_weapons.heavy_bolter_3,
            agents_of_the_imperium_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.lasgun_array, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.storm_bolter_2, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.heavy_stubber, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.multi_laser, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.hunter_killer_missile, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.heavy_bolter_3, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.heavy_flamer, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Rapid Deployment", desc: "Units can disembark from this TRANSPORT after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally." },
        ],
        keywords: ["Dedicated Transport","Vehicle","Smoke","Transport","Imperium","Inquisitorial Chimera","Faction: Agents of the Imperium"],
        pointOptions: [],
        transport: "This model has a transport capacity of 13 INQUISITOR INFANTRY and INQUISITORIAL AGENT models. It cannot transport TERMINATOR models.",
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Janus Draik [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.monomolecular_rapier,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.heirloom_pistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.heirloom_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.monomolecular_rapier, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMPERIAL NAVY BREACHERS\n- VOIDSMEN-AT-ARMS" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Grenades","Imperium","Janus Draik","Voidfarer Character","Voidfarers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Jokaero Weaponsmith [Legends]",
        pts: 30,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 0,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.jokaero_weapons_focused,
            agents_of_the_imperium_weapons.jokaero_weapons_scattered,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.jokaero_weapons_focused, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.jokaero_weapons_scattered, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Inconceivable Augmentation", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Leader", desc: "This model can be attached to the following units: \n- Inquisitorial Agents\n\n*You can attach this model to an INQUISITORIAL AGENTS unit, even if one INQUISITOR unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.*" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Inquisitorial Agent", desc: "If your Army Faction is not AGENTS OF THE IMPERIUM, then for each unique pairing of 1 INQUISITORIAL AGENTS unit and 1 JOKAERO WEAPONSMITH unit occuring in your army, increase the maximum number of CHARACTER units permitted in your army by 1." },
            { name: "A Weaponsmith, Not a Warlord", desc: "This model cannot be selected to be your Warlord. While an INQUISITOR model is leading a unit that includes one or more JOKAERO WEAPONSMITH models, the Objective Control characteristic of JOKAERO WEAPONSMITH models in that unit is 1." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Imperium","Character","Jokaero Weaponsmith"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.artificer_crozius,
            agents_of_the_imperium_weapons.close_combat_weapon_5,
            agents_of_the_imperium_weapons.twin_lightning_claws_2,
            agents_of_the_imperium_weapons.force_weapon_2,
            agents_of_the_imperium_weapons.power_fist,
            agents_of_the_imperium_weapons.long_vigil_melee_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.frag_cannon,
            agents_of_the_imperium_weapons.psychic_cleanse,
            agents_of_the_imperium_weapons.deathwatch_twin_boltgun,
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.boltgun_2,
            agents_of_the_imperium_weapons.long_vigil_ranged_weapon,
            agents_of_the_imperium_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.frag_cannon, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.psychic_cleanse, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.deathwatch_twin_boltgun, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.boltgun_2, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.long_vigil_ranged_weapon, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.heavy_flamer, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.artificer_crozius, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_5, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.twin_lightning_claws_2, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.force_weapon_2, selected: true},
            ],
            slot12: [
                {...agents_of_the_imperium_weapons.power_fist, selected: true},
            ],
            slot13: [
                {...agents_of_the_imperium_weapons.long_vigil_melee_weapon, selected: true},
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
        keywords: ["Infantry","Grenades","Imperium","Faction: Agents of the Imperium","Kill Team","Kill Team Cassius","Deathwatch","Ordo Xenos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.plasma_pistol_standard,
            agents_of_the_imperium_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.plasma_pistol_standard, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.power_weapon_3, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: [],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Martial Agent [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
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
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
            { name: "Moment of Glory", desc: "Once per battle, in the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength and Attacks characteristics of melee weapons equipped by this model by 3." },
            { name: "High-handed Authority", desc: "While this model is leading a unit, it can embark within any **Transport** that its Bodyguard unit can embark within." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Grenades","Imperium","Martial Agent","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Ministorum Priest",
        pts: 40,
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
            agents_of_the_imperium_weapons.power_weapon_5,
            agents_of_the_imperium_weapons.zealots_vindictor,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.holy_pistol,
            agents_of_the_imperium_weapons.zealots_vindictor_2,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.holy_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.zealots_vindictor_2, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.power_weapon_5, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.zealots_vindictor, selected: true},
            ],
        },
        abilities: [
            { name: "Zealot", desc: "Once per battle, in the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength and Attacks characteristics of melee weapons equipped by this model by 3." },
            { name: "Holy Hatred", desc: "While this model is leading a unit, melee weapons equipped by that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Leader", desc: "This model can be attached to the following units: INQUISITORIAL AGENTS, IMPERIAL NAVY BREACHERS, SUBDUCTOR SQUAD, EXACTION SQUAD, VIGILANT SQUAD, SISTERS OF BATTLE SQUAD.\n\n\n*You can attach this model to an INQUISITORIAL AGENTS unit, even if one INQUISITOR unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strength.*" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Infantry","Character","Imperium","Ordo Hereticus","Ministorum Priest","Faction: Agents of the Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Navigator",
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
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.force_orb_cane,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.laspistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.laspistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.force_orb_cane, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Third Eye (Psychic)", desc: "At the start of your Shooting phase, select one enemy unit within 12\" of and visible to this model. That enemy unit must take a Battle-shock test, subtracting 2 from the result if it is an INFANTRY unit; if the test is failed, that enemy unit suffers 3 mortal wounds." },
            { name: "Gaze into the Empyrean (Psychic)", desc: "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this model." },
            { name: "Leader", desc: "This model can be attached to the following units: IMPERIAL NAVY BREACHERS, VOIDSMEN-AT-ARMS" },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Psyker","Imperium","Voidfarers","Navigator","Voidfarer Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Neyam Shai Murad [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.close_combat_weapon_6,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.negotiator_pistols,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.negotiator_pistols, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- IMPERIAL NAVY BREACHERS\n- VOIDSMEN-AT-ARMS" },
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Grenades","Imperium","Neyam Shai Murad","Voidfarers","Voidfarer Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Proteus Kill Team [Legends]",
        pts: 160,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.twin_lightning_claws,
            agents_of_the_imperium_weapons.thunder_hammer,
            agents_of_the_imperium_weapons.power_weapon_2,
            agents_of_the_imperium_weapons.deathwatch_thunder_hammer,
            agents_of_the_imperium_weapons.close_combat_weapon,
            agents_of_the_imperium_weapons.long_vigil_melee_weapon,
            agents_of_the_imperium_weapons.power_fist,
            agents_of_the_imperium_weapons.chainfist,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.frag_cannon,
            agents_of_the_imperium_weapons.twin_boltgun,
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.storm_bolter,
            agents_of_the_imperium_weapons.assault_cannon,
            agents_of_the_imperium_weapons.heavy_flamer,
            agents_of_the_imperium_weapons.plasma_cannon_standard_2,
            agents_of_the_imperium_weapons.plasma_cannon_supercharge_2,
            agents_of_the_imperium_weapons.cyclone_missile_launcher_frag,
            agents_of_the_imperium_weapons.cyclone_missile_launcher_krak,
            agents_of_the_imperium_weapons.boltgun_2,
            agents_of_the_imperium_weapons.long_vigil_ranged_weapon,
            agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_bolter,
            agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.frag_cannon, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.twin_boltgun, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.assault_cannon, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.heavy_flamer, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.plasma_cannon_standard_2, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.plasma_cannon_supercharge_2, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.cyclone_missile_launcher_frag, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.cyclone_missile_launcher_krak, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.boltgun_2, selected: true},
            ],
            slot12: [
                {...agents_of_the_imperium_weapons.long_vigil_ranged_weapon, selected: true},
            ],
            slot13: [
                {...agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_bolter, selected: true},
            ],
            slot14: [
                {...agents_of_the_imperium_weapons.infernus_heavy_bolter_heavy_flamer, selected: true},
            ],
            slot15: [
                {...agents_of_the_imperium_weapons.twin_lightning_claws, selected: true},
            ],
            slot16: [
                {...agents_of_the_imperium_weapons.thunder_hammer, selected: true},
            ],
            slot17: [
                {...agents_of_the_imperium_weapons.power_weapon_2, selected: true},
            ],
            slot18: [
                {...agents_of_the_imperium_weapons.deathwatch_thunder_hammer, selected: true},
            ],
            slot19: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
            slot20: [
                {...agents_of_the_imperium_weapons.long_vigil_melee_weapon, selected: true},
            ],
            slot21: [
                {...agents_of_the_imperium_weapons.power_fist, selected: true},
            ],
            slot22: [
                {...agents_of_the_imperium_weapons.chainfist, selected: true},
            ],
        },
        abilities: [
            { name: "Proteus Doctrines", desc: "Each time a model in this unit makes an attack that targets a unit that is not Below Half-strength, add 1 to the Hit roll." },
            { name: "Attached Unit", desc: "If a CHARACTER from your army with the Leader ability can be attached to a DEATHWATCH KILL TEAM, it can be attached to this unit instead." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Storm shield", desc: "The bearer has a Wounds characteristic of 4." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Jump Pack", desc: "The bearer has a Move characteristic of 12\" and can move over models and terrain features as if they were not there." },
            { name: "Astartes shield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Astartes shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Proteus Kill Team","Deathwatch","Kill Team"],
        pointOptions: [{ models: 5, pts: 320 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Rogue Trader Entourage",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.monomolecular_cane_rapier,
            agents_of_the_imperium_weapons.death_cult_power_blade,
            agents_of_the_imperium_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.household_pistol,
            agents_of_the_imperium_weapons.dartmask,
            agents_of_the_imperium_weapons.voltaic_pistol,
            agents_of_the_imperium_weapons.laspistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.household_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.dartmask, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.voltaic_pistol, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.laspistol, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.monomolecular_cane_rapier, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.death_cult_power_blade, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Backroom Deals", desc: "If your army contains one or more units with this ability, during the Declare Battle Formations step, select one of those units. While the selected unit is leading a unit, models in that unit have the Infiltrators ability." },
            { name: "Leader", desc: "This model can be attached to the following units: IMPERIAL NAVY BREACHERS, VOIDSMEN-AT-ARMS" },
            { name: "Warrant of Trade", desc: "If your army contains one or more models with this ability, after both players have deployed their armies, select up to D3 IMPERIUM BATTLELINE units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserve, regardless of how many units are already in Strategic Reserve." },
            { name: "Healing Serum", desc: "At the start of your Command phase, if the bearer's unit is below its Starting Strength, you can return up to D3 destroyed models (excluding CHARACTERS) to the bearer's unit." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Grenades","Imperium","Rogue Trader Entourage","Voidfarers","Voidfarer Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Sanctifiers",
        pts: 100,
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
            invuln: 5
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.burning_hands,
            agents_of_the_imperium_weapons.close_combat_weapon_7,
            agents_of_the_imperium_weapons.death_cult_blades,
            agents_of_the_imperium_weapons.sanctifier_melee_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.holy_fire,
            agents_of_the_imperium_weapons.plasma_gun_standard,
            agents_of_the_imperium_weapons.plasma_gun_supercharge,
            agents_of_the_imperium_weapons.meltagun_2,
            agents_of_the_imperium_weapons.ministorum_flamer,
            agents_of_the_imperium_weapons.ministorum_hand_flamer,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.holy_fire, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.plasma_gun_standard, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.meltagun_2, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.ministorum_flamer, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.ministorum_hand_flamer, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.burning_hands, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_7, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.death_cult_blades, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.sanctifier_melee_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Salvationist Medikit", desc: "In your Command phase, if the bearer is on the battlefield, you can return up to D3 destroyed models (excluding **Character models**) to this unit." },
            { name: "Simulacrum Imperialis", desc: "Improve the Leadership characteristic of models in the bearer’s unit by 1." },
            { name: "Ministorum Sermon", desc: "While this unit contains a **Ministorum Priest**, each time a model in this unit makes a melee attack, add 1 to the Wound roll." },
            { name: "Cherub", desc: "Once per battle, you can target this unit with the Command Re-roll Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Attached Unit", desc: "If a **Ministorum Priest** or **Inquisitor** model from your army with the Leader ability can be attached to a **Sisters of Battle Squad**, it can be attached to this unit instead. If a **Ministorum Priest** or **Inquisitor** model from your army is attached to this unit during the Declare Battle Formations step, that model gains the Scouts 6\" ability." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Grenades","Imperium","Sanctifiers","Retinue"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "transports",
        name: "Sisters of Battle Immolator",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.immolation_flamers,
            agents_of_the_imperium_weapons.twin_heavy_bolter,
            agents_of_the_imperium_weapons.twin_multi_melta,
            agents_of_the_imperium_weapons.heavy_bolter_3,
            agents_of_the_imperium_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.immolation_flamers, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.twin_multi_melta, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.heavy_bolter_3, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.hunter_killer_missile, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 6 ORDO HERETICUS INFANTRY models.\n\nAt the start of the Declare Battle Formations step, you can select one SISTERS OF BATTLE SQUAD from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit." },
            { name: "Purge and Cleanse", desc: "Each time this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
            { name: "Invulnerable Save", desc: "This model has a 6+ invulnerable save." },
        ],
        keywords: ["Dedicated Transport","Vehicle","Smoke","Transport","Imperium","Faction: Agents of the Imperium","Ordo Hereticus","Sisters of Battle Immolator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Sisters of Battle Squad",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.chainsword_2,
            agents_of_the_imperium_weapons.power_weapon_4,
            agents_of_the_imperium_weapons.close_combat_weapon_8,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.condemnor_boltgun,
            agents_of_the_imperium_weapons.combi_weapon,
            agents_of_the_imperium_weapons.ministorum_hand_flamer,
            agents_of_the_imperium_weapons.inferno_pistol,
            agents_of_the_imperium_weapons.plasma_pistol_supercharge,
            agents_of_the_imperium_weapons.plasma_pistol_standard,
            agents_of_the_imperium_weapons.boltgun,
            agents_of_the_imperium_weapons.ministorum_heavy_flamer,
            agents_of_the_imperium_weapons.heavy_bolter_2,
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.artificer_crafted_storm_bolter,
            agents_of_the_imperium_weapons.meltagun,
            agents_of_the_imperium_weapons.ministorum_flamer,
            agents_of_the_imperium_weapons.multi_melta,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.condemnor_boltgun, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.combi_weapon, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.ministorum_hand_flamer, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.inferno_pistol, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.plasma_pistol_standard, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.boltgun, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.ministorum_heavy_flamer, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.heavy_bolter_2, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.artificer_crafted_storm_bolter, selected: true},
            ],
            slot12: [
                {...agents_of_the_imperium_weapons.meltagun, selected: true},
            ],
            slot13: [
                {...agents_of_the_imperium_weapons.ministorum_flamer, selected: true},
            ],
            slot14: [
                {...agents_of_the_imperium_weapons.multi_melta, selected: true},
            ],
            slot15: [
                {...agents_of_the_imperium_weapons.chainsword_2, selected: true},
            ],
            slot16: [
                {...agents_of_the_imperium_weapons.power_weapon_4, selected: true},
            ],
            slot17: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_8, selected: true},
            ],
        },
        abilities: [
            { name: "Simulacrum Imperialis", desc: "Improve the Leadership characteristic of models in the bearer's unit by 1." },
            { name: "Defenders of the Faith", desc: "If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under your control, even if you have no models in range of it, until your opponent controls it at the start or end of any turn." },
            { name: "Incensor Cherub", desc: "Once per battle, you can target this unit with the Command Re-roll Stratagem for 0CP and can do so if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Ordo Hereticus","Faction: Agents of the Imperium","Sisters of Battle Squad","Requisitioned"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Spectrus Kill Team [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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
            agents_of_the_imperium_weapons.paired_combat_blades,
            agents_of_the_imperium_weapons.combat_knife_2,
            agents_of_the_imperium_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.marksman_bolt_carbine,
            agents_of_the_imperium_weapons.accelerator_autocannon,
            agents_of_the_imperium_weapons.occulus_bolt_carbine,
            agents_of_the_imperium_weapons.special_issue_bolt_pistol_2,
            agents_of_the_imperium_weapons.bolt_carbine,
            agents_of_the_imperium_weapons.bolt_sniper_rifle,
            agents_of_the_imperium_weapons.las_fusil,
            agents_of_the_imperium_weapons.bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.marksman_bolt_carbine, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.accelerator_autocannon, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.occulus_bolt_carbine, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.special_issue_bolt_pistol_2, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.bolt_carbine, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.bolt_sniper_rifle, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.las_fusil, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot9: [
                {...agents_of_the_imperium_weapons.paired_combat_blades, selected: true},
            ],
            slot10: [
                {...agents_of_the_imperium_weapons.combat_knife_2, selected: true},
            ],
            slot11: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army can be attached to a DEATHWATCH KILL TEAM, it can be attached to this unit instead." },
            { name: "Spectrus Doctrines", desc: "At the end of your opponent’s turn, if this unit is more than 6\" away from all enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves. It will arrive back on the battlefield in the Reinforcements step of your next Movement phase." },
            { name: "Transport", desc: "This unit cannot embark within an IMPERIAL RHINO." },
            { name: "Helix Gauntlet", desc: "Models in the bearer’s unit have the Feel No Pain 6+ ability." },
            { name: "Infiltrator Comms Array", desc: "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Jump pack", desc: "The bearer has a Move characteristic of 12\" and can move over models and terrain features as if they were not there." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Smoke","Spectrus Kill Team","Deathwatch","Kill Team"],
        pointOptions: [{ models: 5, pts: 180 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Subductor Squad",
        pts: 85,
        units: 9,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.shock_maul,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.arbites_shotpistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.arbites_shotpistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.shock_maul, selected: true},
            ],
        },
        abilities: [
            { name: "Dedication to Duty", desc: "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play." },
            { name: "Invulnerable Save", desc: "Models in this unit (excluding the Cyber-mastiff) have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Grenades","Imperium","Retinue","Subductor Squad","Adeptus Arbites"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "UR-025 [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.power_claw,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.mk_1_assault_weapon,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.mk_1_assault_weapon, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.power_claw, selected: true},
            ],
        },
        abilities: [
            { name: "Self Repair", desc: "At the start of your Command phase, this model regains 1 lost wound." },
            { name: "Evade and Survive", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model is not within Engagement Range of one or more enemy units, it can make a Normal move." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Imperium","UR-025"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Veteran Bike Squad [Legends]",
        pts: 70,
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
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.xenophase_blade,
            agents_of_the_imperium_weapons.close_combat_weapon,
            agents_of_the_imperium_weapons.long_vigil_melee_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.twin_boltgun,
            agents_of_the_imperium_weapons.bolt_pistol_2,
            agents_of_the_imperium_weapons.long_vigil_ranged_weapon,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.twin_boltgun, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.bolt_pistol_2, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.long_vigil_ranged_weapon, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.xenophase_blade, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.close_combat_weapon, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.long_vigil_melee_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Turbo-boost", desc: "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit." },
            { name: "Astartes Shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Mounted","Grenades","Imperium","Veteran Bike Squad","Deathwatch"],
        pointOptions: [{ models: 3, pts: 140 }],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "battleline",
        name: "Vigilant Squad",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.arbites_grenade_launcher_frag,
            agents_of_the_imperium_weapons.arbites_grenade_launcher_krak,
            agents_of_the_imperium_weapons.executioner_shotgun,
            agents_of_the_imperium_weapons.heavy_stubber,
            agents_of_the_imperium_weapons.webber,
            agents_of_the_imperium_weapons.arbites_combat_shotgun,
            agents_of_the_imperium_weapons.arbites_shotpistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.arbites_grenade_launcher_frag, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.arbites_grenade_launcher_krak, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.executioner_shotgun, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.heavy_stubber, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.webber, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.arbites_combat_shotgun, selected: true},
            ],
            slot7: [
                {...agents_of_the_imperium_weapons.arbites_shotpistol, selected: true},
            ],
            slot8: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Merciless Judgement", desc: "Each time a model in this unit makes a ranged attack that targets a unit that is Below Half-strength, add 1 to the Wound roll." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Battleline","Grenades","Imperium","Retinue","Vigilant Squad","Adeptus Arbites"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "characters",
        name: "Vindicare Assassin",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.vindicare_combat_knife,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.exitus_pistol,
            agents_of_the_imperium_weapons.exitus_rifle,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.exitus_pistol, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.exitus_rifle, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.vindicare_combat_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Shieldbreaker", desc: "Once per battle, when selecting targets for this model’s exitus rifle, it can fire a shieldbreaker round. If it does, until the end of the phase, each time this model makes an attack with that weapon, add 1 to the Wound roll and any successful Wound roll scores a Critical Wound." },
            { name: "Dead-shot", desc: "Each time this model makes a ranged attack, when selecting targets for that attack, you can ignore the Lone Operative ability." },
            { name: "Micromelta Round", desc: "This model’s exitus rifle has the [ANTI‑MONSTER 4+] and [ANTI‑VEHICLE 4+] abilities." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Character","Epic Hero","Smoke","Imperium","Vindicare Assassin","Officio Assassinorum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
        class: "other",
        name: "Voidsmen-at-Arms",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            agents_of_the_imperium_weapons.vicious_bite,
            agents_of_the_imperium_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.artificer_shotgun,
            agents_of_the_imperium_weapons.lasgun,
            agents_of_the_imperium_weapons.voidsman_rotor_cannon,
            agents_of_the_imperium_weapons.laspistol,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.artificer_shotgun, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.lasgun, selected: true},
            ],
            slot3: [
                {...agents_of_the_imperium_weapons.voidsman_rotor_cannon, selected: true},
            ],
            slot4: [
                {...agents_of_the_imperium_weapons.laspistol, selected: true},
            ],
            slot5: [
                {...agents_of_the_imperium_weapons.vicious_bite, selected: true},
            ],
            slot6: [
                {...agents_of_the_imperium_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Masters of Close Confines", desc: "Each time a model in this unit makes a ranged attack that targets the closest eligible target, that attack has the [LETHAL HITS] ability." },
            { name: "Navy Bodyguards", desc: "If your Army Faction is not AGENTS OF THE IMPERIUM, then for each VOIDFARERS CHARACTER unit you include in your army, you can include one VOIDSMEN-AT-ARMS unit in your army that does not count towards the number of RETINUE units your army can include." },
        ],
        keywords: ["Faction: Agents of the Imperium","Infantry","Grenades","Imperium","Retinue","Voidsmen-at-Arms","Voidfarers"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.master_crafted_power_weapon,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.hellfire_extremis,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.hellfire_extremis, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.master_crafted_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Tactical Instinct", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Unstoppable Champion", desc: "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 1 wound remaining." },
            { name: "Leader", desc: "This model can be attached to the following units: DEATHWATCH KILL TEAM" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Imperium","Faction: Agents of the Imperium","Deathwatch","Watch Captain Artemis","Ordo Xenos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "agents_of_the_imperium",
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
            agents_of_the_imperium_weapons.vigil_spear,
        ],
        rangedWeapons: [
            agents_of_the_imperium_weapons.vigil_spear_2,
        ],
        weapon_options: {
            slot1: [
                {...agents_of_the_imperium_weapons.vigil_spear_2, selected: true},
            ],
            slot2: [
                {...agents_of_the_imperium_weapons.vigil_spear, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Strategic Knowledge", desc: "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back." },
            { name: "Rites of Battle", desc: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units: DEATHWATCH KILL TEAM" },
        ],
        keywords: ["Character","Infantry","Captain","Grenades","Imperium","Faction: Agents of the Imperium","Watch Master","Deathwatch","Ordo Xenos"],
        pointOptions: [],
        transport: null,
    },
]

export default agents_of_the_imperium_army
