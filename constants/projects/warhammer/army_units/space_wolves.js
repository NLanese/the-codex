// AUTO-GENERATED units for Space Wolves (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import space_wolves_weapons from "../weapons/space_wolves"

const space_wolves_army = [
    {
        army: "space_wolves",
        class: "characters",
        name: "Arjac Rockfist",
        pts: 105,
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
            space_wolves_weapons.foehammer,
        ],
        rangedWeapons: [
            space_wolves_weapons.foehammer_2,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.foehammer_2, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.foehammer, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Wolf Guard Terminators" },
            { name: "Anvil of Endurance", desc: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6, on a 4+, do not remove the destroyed model from play. The destroyed model can fight after the attacking unit has finished making its attacks, and then is removed from play" },
            { name: "Champion of the Kingsguard", desc: "Each time this model makes a melee attack that targets a CHARACTER unit, you can re-roll the Hit roll and you can re-roll the Wound roll." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Epic Hero","Imperium","Terminator","Arjac Rockfist"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Bjorn the Fell-Handed",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            space_wolves_weapons.trueclaw,
        ],
        rangedWeapons: [
            space_wolves_weapons.assault_cannon,
            space_wolves_weapons.multi_melta,
            space_wolves_weapons.helfrost_cannon_dispersed,
            space_wolves_weapons.helfrost_cannon_focused,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.assault_cannon, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.multi_melta, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.helfrost_cannon_dispersed, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.helfrost_cannon_focused, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.trueclaw, selected: true},
            ],
        },
        abilities: [
            { name: "Legendary Tenacity", desc: "Each time an attack is allocated to this model, if the Strength characteristic of that attack is greater than this model's Toughness characteristic, subtract 1 from the Wound roll." },
            { name: "Ancient Tactician", desc: "At the start of your Command phase, if this model is on the battlefield, you gain 1 CP" },
            { name: "Invulnerable Save", desc: "5+" },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Vehicle","Walker","Character","Epic Hero","Smoke","Imperium","Bjorn the Fell-Handed","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "battleline",
        name: "Blood Claws",
        pts: 135,
        units: 1,
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

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Berserk Charge", desc: "This unit is eligible to declare a charge in a turn in which it Advanced" },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Battleline","Grenades","Imperium","Blood Claws","Tacticus"],
        pointOptions: [{ models: 11, pts: 285 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Canis Wolfborn [Legends]",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.wolf_claws,
            space_wolves_weapons.crushing_teeth_and_claws,
        ],
        rangedWeapons: [
            space_wolves_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.wolf_claws, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.crushing_teeth_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Fenrisian Wolves\n- Thunderwolf Cavalry" },
            { name: "Born of Wolves", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Alpha Predator", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy units suffers D3+3 mortal wounds." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Mounted","Character","Epic Hero","Imperium","Canis Wolfborn"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Cyberwolf [Legends]",
        pts: 20,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 6,
            wounds: 2,
            leader: 7,
            control: 0,
            invuln: 6
        },
        meleeWeapons: [
            space_wolves_weapons.teeth_and_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.teeth_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Alpha Hunter", desc: "While this model is leading a unit, models in that unit have the Scouts 6\" ability." },
            { name: "Close In for the Kill", desc: "Each time this model makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Hit roll and add 1 to the Wound roll." },
            { name: "Invulnerable Save", desc: "6+" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Fenrisian Wolves\n\nYou must attach this model to the above unit, even if Canis Wolfborn has been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed." },
            { name: "Wolfkin", desc: "This model cannot be your WARLORD and cannot be given Enhancements." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Beast","Character","Imperium","Cyberwolf"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Fenrisian Wolves",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.teeth_and_claws_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.teeth_and_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Predatory Instinct", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, it can make a Normal move of up to D6\"" },
            { name: "Hunting Hounds", desc: "While this unit is within 6\" of one or more SPACE WOLVES CHARACTER models (excluding WULFEN models), if this unit is not Battle-shocked, models in it have an Objective Control characteristic of 1" },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Beast","Imperium","Fenrisian Wolves"],
        pointOptions: [{ models: 6, pts: 80 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "battleline",
        name: "Grey Hunters",
        pts: 165,
        units: 1,
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
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.power_fist,
            space_wolves_weapons.power_weapon,
        ],
        rangedWeapons: [
            space_wolves_weapons.bolt_carbine,
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.bolt_carbine, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.power_fist, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Cunning Hunters", desc: "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target is within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Battleline","Grenades","Imperium","Grey Hunters","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Harald Deathwolf [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
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
            space_wolves_weapons.glacius,
            space_wolves_weapons.crushing_teeth_and_claws_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.glacius, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.crushing_teeth_and_claws_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Thunderwolf Cavalry" },
            { name: "Lord of the Wolfkin", desc: "While this model is leading a unit, each time that unit makes a Charge move, until the end of the turn, crushing teeth and claws equipped by models in that unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Mantle of the Troll King", desc: "Once per phase, when resolving an attack made against this model, after you make a saving throw for this model, you can change the Damage characteristic of that attack to 0." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Mounted","Character","Epic Hero","Grenades","Imperium","Captain","Harald Deathwolf"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Hounds of Morkai [Legends]",
        pts: 80,
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
            invuln: 6
        },
        meleeWeapons: [
            space_wolves_weapons.morkai_combat_knife,
        ],
        rangedWeapons: [
            space_wolves_weapons.morkai_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.morkai_bolt_pistol, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.morkai_combat_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Morkai’s Howl", desc: "In your Shooting phase, you can select one enemy unit within 12\" of this unit (if a LIEUTENANT IN REIVER ARMOUR is leading this unit, you can select one enemy unit within 18\" instead). That unit must take a Battle-shock test, subtracting 1 from the result if it is a PSYKER unit. If that test is failed, in addition to being Battle-shocked, that unit is Stunned until the start of your next Shooting phase. While a unit is Stunned, each time a model in that unit makes a Psychic Attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 6+ invulnerable save. This invulnerable save is improved to 4+ against Psychic Attacks." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to a REIVER SQUAD, it can instead be attached to this unit." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Grenades","Smoke","Imperium","Phobos","Hounds of Morkai"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Iron Priest",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.tempest_hammer_and_servo_arm,
        ],
        rangedWeapons: [
            space_wolves_weapons.helfrost_pistol_dispersed,
            space_wolves_weapons.helfrost_pistol_focused,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.helfrost_pistol_dispersed, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.helfrost_pistol_focused, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.tempest_hammer_and_servo_arm, selected: true},
            ],
        },
        abilities: [
            { name: "Iron Priest", desc: "While this model is within 3\" of one or more friendly ADEPTUS ASTARTES VEHICLE units, this model has the Lone Operative ability" },
            { name: "Gift of the Iron Wolf", desc: "In your Command phase, you can select one friendly ADEPTUS ASTARTES VEHICLE model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, select one ranged weapon equipped by that model to have the [RAPID FIRE 1] ability. Each model can only be selected for this ability or Blessing of the Omnissiah ability once per turn." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Wolfguard Headtakers\n- Blood Claws\n- Grey Hunters" },
            { name: "Judgement of the Omnissiah", desc: "Each time this model makes an attack that targets an enemy unit within Engagement Range of one or more friendly ADEPTUS ASTARTES VEHICLE units, you can re-roll the wound roll." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Imperium","Techmarine","Iron Priest"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Iron Priest on Thunderwolf [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.iron_priest_hammer,
            space_wolves_weapons.servo_arm,
            space_wolves_weapons.crushing_teeth_and_claws,
        ],
        rangedWeapons: [
            space_wolves_weapons.helfrost_pistol_dispersed_2,
            space_wolves_weapons.helfrost_pistol_focused,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.helfrost_pistol_dispersed_2, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.helfrost_pistol_focused, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.iron_priest_hammer, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.servo_arm, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.crushing_teeth_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Vengeance of the Omnissiah", desc: "If a friendly ADEPTUS ASTARTES VEHICLE model is destroyed within 12\" of this model, until the end of the battle, this model’s Iron Priest hammer has an Attacks characteristic of 6." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Thunderwolf Cavalry" },
            { name: "Iron Priest", desc: "While this model is within 3\" of one or more friendly ADEPTUS ASTARTES VEHICLE units, this model has the Lone Operative ability" },
            { name: "Blessing of the Omnissiah", desc: "In your Command phase, you can select one friendly ADEPTUS ASTARTES VEHICLE model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that VEHICLE model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn." },
        ],
        keywords: ["Character","Mounted","Grenades","Imperium","Iron Priest","Faction: Adeptus Astartes","Faction: Space Wolves"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Krom Dragongaze [Legends]",
        pts: 65,
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
            invuln: 4
        },
        meleeWeapons: [
            space_wolves_weapons.wyrmclaw,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.wyrmclaw, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Grey Hunters\n- Wolf Guard" },
            { name: "Refuse to Accept Defeat", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength." },
            { name: "The Fierce Eye", desc: "In your Shooting phase, you can select one enemy INFANTRY unit within 12\" of and visible to this model. That enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Epic Hero","Grenades","Imperium","Captain","Krom Dragongaze"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Logan Grimnar",
        pts: 110,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_wolves_weapons.tyrnak_and_fenrir,
            space_wolves_weapons.axe_morkai_sweep,
            space_wolves_weapons.axe_morkai_strike,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.tyrnak_and_fenrir, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.axe_morkai_sweep, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.axe_morkai_strike, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Wolf Guard Terminators" },
            { name: "High King of Fenris", desc: "Once per battle round, in your Movement phase, you can select one friendly Space Wolves unit that is in Reserves. If you do, until the end of the phase, for the purposes of setting up that unit on the battlefield, treat the current battle round number as being one higher than it actually is." },
            { name: "Guile of the Wolf (Aura)", desc: "Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that usage of that Stratagem by 1CP P (this is not cumulative with any other rules that increase the CP cost of that Stratagem)" },
            { name: "Embarking within Transports", desc: "This model can embark within friendly Adeptus Astartes Transport models that can transport Terminator models. When doing, it takes up the space of 4 Infantry models" },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Epic Hero","Imperium","Terminator","Chapter Master","Logan Grimnar"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Logan Grimnar on Stormrider [Legends]",
        pts: 180,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 4,
            invuln: 4
        },
        meleeWeapons: [
            space_wolves_weapons.flurry_of_teeth_and_claws,
            space_wolves_weapons.axe_morkai_sweep,
            space_wolves_weapons.axe_morkai_strike,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.flurry_of_teeth_and_claws, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.axe_morkai_sweep, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.axe_morkai_strike, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Thunderwolf Cavalry" },
            { name: "Logan Grimnar", desc: "Your army cannot contain both Logan Grimnar and Logan Grimnar on Stormrider" },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Mounted","Character","Epic Hero","Imperium","Chapter Master","Logan Grimnar on Stormrider"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Long Fangs [Legends]",
        pts: 120,
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
            space_wolves_weapons.power_weapon_2,
            space_wolves_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            space_wolves_weapons.lascannon,
            space_wolves_weapons.heavy_bolter,
            space_wolves_weapons.grav_cannon,
            space_wolves_weapons.missile_launcher_frag,
            space_wolves_weapons.missile_launcher_krak,
            space_wolves_weapons.plasma_cannon_standard,
            space_wolves_weapons.plasma_cannon_supercharge,
            space_wolves_weapons.heavy_flamer,
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.lascannon, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.grav_cannon, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.missile_launcher_frag, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.missile_launcher_krak, selected: true},
            ],
            slot6: [
                {...space_wolves_weapons.plasma_cannon_standard, selected: true},
            ],
            slot7: [
                {...space_wolves_weapons.plasma_cannon_supercharge, selected: true},
            ],
            slot8: [
                {...space_wolves_weapons.heavy_flamer, selected: true},
            ],
            slot9: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot10: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot11: [
                {...space_wolves_weapons.power_weapon_2, selected: true},
            ],
            slot12: [
                {...space_wolves_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Fire Discipline", desc: "Each time this unit Remains Stationary, if it includes a Long Fang Pack Leader, you can select one enemy unit that is visible to that model. Until the end of the turn, each time a model in this unit makes a ranged attack that targets that enemy unit, re-roll a Hit roll of 1." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to a DEVASTATOR SQUAD, it can instead be attached to this unit." },
            { name: "Armorium Cherub", desc: "Once per battle, after making a Hit roll for a model in this unit, you can change that roll to an unmodified 6." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Grenades","Imperium","Long Fangs"],
        pointOptions: [{ models: 6, pts: 145 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Lukas the Trickster [Legends]",
        pts: 50,
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
            space_wolves_weapons.claw_of_the_jackalwolf,
        ],
        rangedWeapons: [
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.claw_of_the_jackalwolf, selected: true},
            ],
        },
        abilities: [
            { name: "Pelt of the Doppelgangrel:", desc: "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll." },
            { name: "Last Laugh", desc: "If this model is destroyed by a melee attack, after the attacking unit has finished making its attacks, roll one D6: on a 4+, the attacking unit suffers D6 mortal wounds and is Battle-shocked." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Blood Claws" },
            { name: "Master of Mischief", desc: "This model cannot be your WARLORD." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Epic Hero","Grenades","Imperium","Lukas the Trickster"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Murderfang",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 9,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.murderclaws,
        ],
        rangedWeapons: [
            space_wolves_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.murderclaws, selected: true},
            ],
        },
        abilities: [
            { name: "Murder-maker [Aura]", desc: "In the Fight phase, each time an attack targets a friendly WULFEN unit within 6\" of this model, if a model in that unit is destroyed as a result of that attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play." },
            { name: "Force of Untamed Destruction", desc: "This model cannot be your WARLORD." },
            { name: "Beastial Fury", desc: "You can re-roll Advance and Charge rolls made for this model." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Vehicle","Walker","Character","Epic Hero","Imperium","Murderfang","Wulfen","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Njal Stormcaller",
        pts: 85,
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
            space_wolves_weapons.staff_of_the_stormcaller,
        ],
        rangedWeapons: [
            space_wolves_weapons.living_lightning_witchfire,
            space_wolves_weapons.living_lightning_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.living_lightning_witchfire, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.living_lightning_focused_witchfire, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.staff_of_the_stormcaller, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Grey Hunters\n- Wolf Guard Headtakers" },
            { name: "Wind Walker (Psychic)", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability and each time that unit advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit" },
            { name: "Tempest's Wrath (Psychic)", desc: "In your Shooting phase, after this model's unit has shot, select one enemy unit, (excluding MONSTERS and VEHICLES) hit by one or more of those attacks made with this model's Living Lightning weapon. Until the start of your next turn, that enemy is stormwracked. While a unit is stormwracked, subtract 6\" from the Range characteristic of ranged weapons equipped by models in that unit (to a minimum of 12\")" },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Epic Hero","Psyker","Imperium","Njal Stormcaller","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Ragnar Blackmane",
        pts: 100,
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
            space_wolves_weapons.frostfang,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.frostfang, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Wolf Guard Headtakers" },
            { name: "War Howl", desc: "While this model is leading a BLOOD CLAWS unit, each time a model in that unit makes a melee attack, you can re-roll the Wound roll. While this model is leading a WOLF GUARD HEADTAKERS UNIT, that unit is eligible to declare a charge in a turn in which it Advanced." },
            { name: "Battle-lust", desc: "Each time this model ends a Charge move, until the end of the turn, add 2 to the Attacks characteristics of this model’s Frostfang." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Epic Hero","Imperium","Grenades","Tacticus","Captain","Ragnar Blackmane"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Skyclaws [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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
            space_wolves_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
            space_wolves_weapons.flamer,
            space_wolves_weapons.grav_gun,
            space_wolves_weapons.plasma_gun_standard,
            space_wolves_weapons.plasma_gun_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.flamer, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.grav_gun, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.plasma_gun_standard, selected: true},
            ],
            slot6: [
                {...space_wolves_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot7: [
                {...space_wolves_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Headstrong", desc: "You can re-roll Charge rolls made for this unit. Each time this unit makes a Charge move, until the end of the turn, each time a model in this unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to an ASSAULT INTERCESSOR SQUAD WITH JUMP PACKS or ASSAULT SQUAD WITH JUMP PACKS, it can instead be attached to this unit." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Jump Pack","Fly","Grenades","Imperium","Skyclaws"],
        pointOptions: [{ models: 6, pts: 165 }, { models: 11, pts: 240 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Stormfang Gunship [Legends]",
        pts: 300,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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

        ],
        rangedWeapons: [
            space_wolves_weapons.helfrost_destructor_dispersed,
            space_wolves_weapons.helfrost_destructor_focused,
            space_wolves_weapons.twin_stormstrike_missile_launcher,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.helfrost_destructor_dispersed, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.helfrost_destructor_focused, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.twin_stormstrike_missile_launcher, selected: true},
            ],
        },
        abilities: [
            { name: "Frozen Prey", desc: "In your Shooting phase, after this model has shot, if an enemy MONSTER or VEHICLE unit was hit by one or more of those attacks made with this model’s helfrost destructor, until the end of your opponent’s next turn, that enemy unit is Frozen. While a unit is Frozen, subtract 2 from that unit’s Move characteristic, and  subtract 2 from Advance and Charge rolls made for that unit." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Vehicle","Aircraft","Fly","Transport","Stormfang Gunship","Imperium"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION model takes up the space of 3 models.",
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Stormwolf [Legends]",
        pts: 250,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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

        ],
        rangedWeapons: [
            space_wolves_weapons.twin_helfrost_cannon_dispersed,
            space_wolves_weapons.twin_helfrost_cannon_focused,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.twin_helfrost_cannon_dispersed, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.twin_helfrost_cannon_focused, selected: true},
            ],
        },
        abilities: [
            { name: "Into the Foe", desc: "If a unit disembarks from this TRANSPORT before it moves, until the end of the turn, that unit is eligible to charge in a turn in which it Advanced." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Vehicle","Aircraft","Fly","Transport","Stormwolf","Imperium"],
        pointOptions: [],
        transport: "This model has a transport capacity of 16 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, WULFEN, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION model takes up the space of 3 models.",
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Thunderwolf Cavalry",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.wolf_guard_weapon,
            space_wolves_weapons.crushing_teeth_and_claws,
        ],
        rangedWeapons: [
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.wolf_guard_weapon, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.crushing_teeth_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Thunderous Charge", desc: "Each time a model in this unit makes a melee attack with its Wolf Guard weapon, if it made a Charge move this turn, add 1 to the Damage characteristic of that attack" },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Mounted","Grenades","Imperium","Thunderwolf Cavalry"],
        pointOptions: [{ models: 4, pts: 230 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Ulrik the Slayer",
        pts: 70,
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
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            space_wolves_weapons.artificer_crozius,
        ],
        rangedWeapons: [
            space_wolves_weapons.plasma_pistol_standard_2,
            space_wolves_weapons.plasma_pistol_supercharge_2,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.artificer_crozius, selected: true},
            ],
        },
        abilities: [
            { name: "Slayer’s Oath", desc: "At the start of the battle, select one of the following keywords to be this model's Slayer's Oath: CHARACTER, VEHICLE or MONSTER. The first time this model's unit destroys a unit with this model's Slayer's Oath keyword, if your Detachment has a Saga, until the end of the battle, this model's unit receives the benefits of that Detachment rule as if that Saga had been completed." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Grey Hunters\n- Wolf Guard Headtakers" },
            { name: "Oathbound", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll. If that attack targets a unit that has this model's Slayer's Oath keyword (see above), add 1 to the Wound roll as well." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Epic Hero","Grenades","Imperium","Ulrik the Slayer","Wolf Priest"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Venerable Dreadnought",
        pts: 130,
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
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.fenrisian_great_axe_strike,
            space_wolves_weapons.fenrisian_great_axe_sweep,
        ],
        rangedWeapons: [
            space_wolves_weapons.helfrost_cannon_dispersed,
            space_wolves_weapons.helfrost_cannon_focused_2,
            space_wolves_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.helfrost_cannon_dispersed, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.helfrost_cannon_focused_2, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.fenrisian_great_axe_strike, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.fenrisian_great_axe_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Fervour of the Ancients (Aura)", desc: "While a friendly SPACE WOLVES unit is within 6\" of this model, add 1 to Advance and Charge rolls made for that unit." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Vehicle","Walker","Smoke","Imperium","Dreadnought","Venerable Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wolf Guard [Legends]",
        pts: 85,
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
            leader: 5,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.heirloom_weapon,
        ],
        rangedWeapons: [
            space_wolves_weapons.combi_weapon,
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.combi_weapon, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.heirloom_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Chosen Companions", desc: "While a CHARACTER model is leading this unit, each time a model in this unit makes an attack, add 1 to the Hit roll." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to an STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD, it can instead be attached to this unit." },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Grenades","Imperium","Wolf Guard"],
        pointOptions: [{ models: 6, pts: 170 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Guard Battle Leader",
        pts: 65,
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
            space_wolves_weapons.master_crafted_power_weapon,
        ],
        rangedWeapons: [
            space_wolves_weapons.master_crafted_bolt_carbine,
            space_wolves_weapons.master_crafted_heavy_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.master_crafted_bolt_carbine, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.master_crafted_heavy_bolt_pistol, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.master_crafted_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Tempered Ferocity", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability and, each time a model in that unit makes an attack that targets an enemy unit within 6\", re-roll a Hit roll of 1" },
            { name: "Heroic Last Stand", desc: "If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 2+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and then it is removed from play." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Grey Hunters\n- Wolf Guard Headtakers" },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 6" },
        ],
        keywords: ["Infantry","Character","Imperium","Tacticus","Wolf Guard","Battle Leader","Faction: Adeptus Astartes","Faction: Space Wolves"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Guard Battle Leader in Terminator Armour [Legends]",
        pts: 75,
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
            invuln: 4
        },
        meleeWeapons: [
            space_wolves_weapons.chainfist,
            space_wolves_weapons.close_combat_weapon_2,
            space_wolves_weapons.power_weapon_3,
            space_wolves_weapons.thunder_hammer,
            space_wolves_weapons.power_fist_2,
        ],
        rangedWeapons: [
            space_wolves_weapons.combi_weapon_2,
            space_wolves_weapons.storm_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.combi_weapon_2, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.storm_bolter_2, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.chainfist, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.close_combat_weapon_2, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.power_weapon_3, selected: true},
            ],
            slot6: [
                {...space_wolves_weapons.thunder_hammer, selected: true},
            ],
            slot7: [
                {...space_wolves_weapons.power_fist_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Relic Terminator Squad\n- Terminator Assault Squad\n- Terminator Squad\n- Wolf Guard Terminators\n\nYou can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Huskarl to the Jarl", desc: "While this model is attached to a unit that contains another CHARACTER model, all CHARACTER models in that unit have the Feel No Pain 4+ ability." },
            { name: "Relic shield", desc: "The bearer has a Wounds characteristic of 6." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Imperium","Terminator","Wolf Guard Battle Leader in Terminator Armour"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Guard Battle Leader on Thunderwolf [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.close_combat_weapon_3,
            space_wolves_weapons.crushing_teeth_and_claws,
            space_wolves_weapons.relic_weapon,
            space_wolves_weapons.power_fist_2,
            space_wolves_weapons.thunder_hammer,
        ],
        rangedWeapons: [
            space_wolves_weapons.plasma_pistol_supercharge_3,
            space_wolves_weapons.plasma_pistol_standard_2,
            space_wolves_weapons.combi_weapon_2,
            space_wolves_weapons.storm_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.plasma_pistol_supercharge_3, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.combi_weapon_2, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.storm_bolter_2, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.close_combat_weapon_3, selected: true},
            ],
            slot6: [
                {...space_wolves_weapons.crushing_teeth_and_claws, selected: true},
            ],
            slot7: [
                {...space_wolves_weapons.relic_weapon, selected: true},
            ],
            slot8: [
                {...space_wolves_weapons.power_fist_2, selected: true},
            ],
            slot9: [
                {...space_wolves_weapons.thunder_hammer, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Thunderwolf Cavalry\n\nYou can attach this model to the above unit even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Aggressive Hunter", desc: "Once per battle, in your opponent’s Shooting phase, after an enemy unit has finished making its attacks, if this model’s unit was targeted by one or more of those attacks, this model’s unit can make a Normal move of up to D6\", but must end that move as close as possible to the closest enemy unit. When doing so, models in this model’s unit can be moved within Engagement Range of that enemy unit." },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Mounted","Character","Grenades","Imperium","Wolf Guard Battle Leader on Thunderwolf"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wolf Guard Headtakers",
        pts: 85,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 8,
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
            { name: "Let Loose the Wolves", desc: "At the start of the Declare Battle Formations step, split this unit into two units, one containing all of it's HEADTAKERS models and one containing all of its HUNTING WOLVES models, with new Starting Strengths accordingly." },
            { name: "Headhunters", desc: "At the start of the battle, select one unit from your opponent's army to be this unit's quarry. Weapons equipped by HEADTAKERS models in this unit have the [DEVASTATING WOUNDS] and [PRECISION] abilities while targeting it's quarry. Each time this unit's quarry is destroyed, select one new enemy unit to be this unit's quarry. This ability can be used even if this unit is embarked within\na Transport" },
            { name: "Hunting Hounds", desc: "While this unit is within 6\" of one or more friendly SPACE WOLVES CHARACTER models (excluding WULFEN models), if this unit is not Battle-shocked, HUNTING WOLVES models in it have an Objective Control characteristic of 1" },
        ],
        keywords: ["Infantry","Faction: Adeptus Astartes","Faction: Space Wolves"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wolf Guard Headtakers",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 8,
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
            { name: "Let Loose the Wolves", desc: "At the start of the Declare Battle Formations step, split this unit into two units, one containing all of it's HEADTAKERS models and one containing all of its HUNTING WOLVES models, with new Starting Strengths accordingly." },
            { name: "Headhunters", desc: "At the start of the battle, select one unit from your opponent's army to be this unit's quarry. Weapons equipped by HEADTAKERS models in this unit have the [DEVASTATING WOUNDS] and [PRECISION] abilities while targeting it's quarry. Each time this unit's quarry is destroyed, select one new enemy unit to be this unit's quarry. This ability can be used even if this unit is embarked within\na Transport" },
            { name: "Hunting Hounds", desc: "While this unit is within 6\" of one or more friendly SPACE WOLVES CHARACTER models (excluding WULFEN models), if this unit is not Battle-shocked, HUNTING WOLVES models in it have an Objective Control characteristic of 1" },
        ],
        keywords: ["Infantry","Faction: Adeptus Astartes","Faction: Space Wolves"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Guard Pack Leader [Legends]",
        pts: 30,
        units: 2,
        img: null,
        leader: true,
        warlord: true,
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

        ],
        rangedWeapons: [
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
            space_wolves_weapons.combi_weapon_2,
            space_wolves_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.combi_weapon_2, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.storm_bolter, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Grey Hunters\n- Long Fangs\n\nYou must attach this model to one of the above units, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed." },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Grenades","Imperium","Pack Leader","Wolf Guard Pack Leader"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Guard Pack Leader in Terminator Armour [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
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
            space_wolves_weapons.power_fist,
        ],
        rangedWeapons: [
            space_wolves_weapons.cyclone_missile_launcher_frag,
            space_wolves_weapons.cyclone_missile_launcher_krak,
            space_wolves_weapons.combi_weapon_2,
            space_wolves_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.cyclone_missile_launcher_frag, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.cyclone_missile_launcher_krak, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.combi_weapon_2, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Grey Hunters\n- Long Fangs\n\nYou must attach this model to one of the above units, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed." },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 4." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Grenades","Imperium","Terminator","Pack Leader","Wolf Guard Pack Leader in Terminator Armour"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Guard Pack Leader with Jump Pack [Legends]",
        pts: 35,
        units: 2,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
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

        ],
        rangedWeapons: [
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
            space_wolves_weapons.combi_weapon_2,
            space_wolves_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.combi_weapon_2, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.storm_bolter, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n\n- Skyclaws\n\nYou must attach this model to the above unit, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed." },
            { name: "Storm Shield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Character","Jump Pack","Fly","Grenades","Imperium","Pack Leader","Wolf Guard Pack Leader with Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wolf Guard Terminators",
        pts: 170,
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
            space_wolves_weapons.master_crafted_power_weapon_2,
            space_wolves_weapons.twin_lightning_claws,
            space_wolves_weapons.relic_great_axe,
            space_wolves_weapons.power_fist,
        ],
        rangedWeapons: [
            space_wolves_weapons.storm_bolter_2,
            space_wolves_weapons.assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.assault_cannon, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.master_crafted_power_weapon_2, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.twin_lightning_claws, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.relic_great_axe, selected: true},
            ],
            slot6: [
                {...space_wolves_weapons.power_fist, selected: true},
            ],
        },
        abilities: [
            { name: "Rugged Resilience", desc: "Each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Imperium","Terminator","Wolf Guard Terminators","Wolf Guard"],
        pointOptions: [{ models: 6, pts: 340 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Lord on Thunderwolf [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            space_wolves_weapons.close_combat_weapon_3,
            space_wolves_weapons.twin_lightning_claws_2,
            space_wolves_weapons.crushing_teeth_and_claws,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.close_combat_weapon_3, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.twin_lightning_claws_2, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.crushing_teeth_and_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Thunderwolf Cavalry" },
            { name: "Speed of the Hunter", desc: "Add 1 to Advance and Charge rolls made for this model’s unit." },
            { name: "Relic shield", desc: "The bearer has a Wounds characteristic of 7." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Mounted","Character","Grenades","Imperium","Captain","Wolf Lord on Thunderwolf"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "characters",
        name: "Wolf Priest",
        pts: 70,
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
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Blood Claws\n- Grey Hunters\n- Wolf Guard Headtakers" },
            { name: "Healing Balms", desc: "While this model is leading a unit, in your Command phase, you can return 1 model (excluding CHARACTER models) to that unit." },
        ],
        keywords: ["Infantry","Character","Imperium","Tacticus","Wolf Priest","Faction: Space Wolves","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wolf Scouts",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 6,
            wounds: 1,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.teeth_and_claws_3,
            space_wolves_weapons.combat_blade,
        ],
        rangedWeapons: [
            space_wolves_weapons.instigator_bolt_carbine,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.instigator_bolt_carbine, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.teeth_and_claws_3, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.combat_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Hunting Hounds", desc: "While this unit is within 6\" of one or more friendly **Space Wolves Character** models (excluding **Wulfen** models), if this unit is not Battle-shocked, Hunting Wolves models in this unit have an Objective Control characteristic of 1." },
            { name: "Deadly Stalkers", desc: "Each time a model in this unit makes an attack that targets an enemy unit, if there are no other units from your opponent’s army within 6\" of that target, add 1 to the Wound roll." },
        ],
        keywords: ["Infantry","Grenades","Smoke","Imperium","Phobos","Wolf Scouts","Faction: Adeptus Astartes","Faction: Space Wolves"],
        pointOptions: [{ models: 12, pts: 210 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wolf Scouts [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.combat_knife,
        ],
        rangedWeapons: [
            space_wolves_weapons.astartes_shotgun,
            space_wolves_weapons.combi_weapon_2,
            space_wolves_weapons.storm_bolter,
            space_wolves_weapons.plasma_pistol_supercharge,
            space_wolves_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.astartes_shotgun, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.combi_weapon_2, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.storm_bolter, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot5: [
                {...space_wolves_weapons.plasma_pistol_standard, selected: true},
            ],
            slot6: [
                {...space_wolves_weapons.combat_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Guerrilla Tactics", desc: "At the end of your opponent’s turn, if this unit is more than 6\" away from all enemy models, you can remove this unit from the battlefield and place it into\nStrategic Reserves." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Grenades","Smoke","Imperium","Scout Squad","Wolf Scouts"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wulfen",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 9,
            tough: 6,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.wulfen_weapons,
        ],
        rangedWeapons: [
            space_wolves_weapons.stormfrag_auto_launcher,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.stormfrag_auto_launcher, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.wulfen_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Death Totem", desc: "Each time the bearer makes a melee attack, re-roll a hit roll of 1." },
            { name: "Savage Frenzy", desc: "Each time an enemy unit, (excluding MONSTERS and VEHICLES) within Engagement Range of this unit Falls Back, all that models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from those tests." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Imperium","Wulfen"],
        pointOptions: [{ models: 6, pts: 170 }],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wulfen Dreadnought",
        pts: 135,
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
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.great_wolf_claw,
            space_wolves_weapons.fenrisian_great_axe_strike,
            space_wolves_weapons.fenrisian_great_axe_sweep,
        ],
        rangedWeapons: [
            space_wolves_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.great_wolf_claw, selected: true},
            ],
            slot3: [
                {...space_wolves_weapons.fenrisian_great_axe_strike, selected: true},
            ],
            slot4: [
                {...space_wolves_weapons.fenrisian_great_axe_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Bestial Rage", desc: "Each time an enemy unit is selected to shoot, after that unit has shot, if this model lost one or more wounds as a result of those attacks, this model can make a Bestial Rage move. To do so, roll one D6, adding 2 to the result: this model can be moved a number of inches up to the result, but must finish that move as close as possible to the closest enemy unit(excluding AIRCRAFT). When doing so, this model can be moved within Engagement Range of that enemy unit. Each model can only make one Bestial Rage move per phase." },
            { name: "Violent Fury", desc: "If this model is equipped with two melee weapons, those weapon profiles have the TWIN-LINKED ability." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Vehicle","Walker","Imperium","Wulfen","Dreadnought"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "space_wolves",
        class: "other",
        name: "Wulfen with Storm Shields",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 9,
            tough: 6,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            space_wolves_weapons.thunder_hammer_2,
        ],
        rangedWeapons: [
            space_wolves_weapons.stormfrag_auto_launcher,
        ],
        weapon_options: {
            slot1: [
                {...space_wolves_weapons.stormfrag_auto_launcher, selected: true},
            ],
            slot2: [
                {...space_wolves_weapons.thunder_hammer_2, selected: true},
            ],
        },
        abilities: [
            { name: "Death Totem", desc: "Each time the bearer makes a melee attack, re-roll a hit roll of 1." },
            { name: "Hammer Blow", desc: "In the Fight phase, after this unit has fought, select one enemy MONSTER or VEHICLE unit hit by one or more of those attacks. Until the end of the next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Faction: Adeptus Astartes","Faction: Space Wolves","Infantry","Imperium","Wulfen","Wulfen with Storm Shields"],
        pointOptions: [{ models: 6, pts: 200 }],
        transport: null,
    },
]

export default space_wolves_army
