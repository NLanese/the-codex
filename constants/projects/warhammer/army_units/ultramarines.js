// AUTO-GENERATED units for Ultramarines (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import ultramarines_weapons from "../weapons/ultramarines"

const ultramarines_army = [
    {
        army: "ultramarines",
        class: "characters",
        name: "Captain Sicarius",
        pts: 85,
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
            ultramarines_weapons.talassarian_tempest_blade,
        ],
        rangedWeapons: [
            ultramarines_weapons.artisan_plasma_pistol,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.artisan_plasma_pistol, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.talassarian_tempest_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Lead From the Front", desc: "While this model is leading a unit, models in that unit have the Scouts 6\" ability and ranged weapons equipped by models in that unit have the [ASSAULT] ability." },
            { name: "Knight Champion of Macragge", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model’s unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\"." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Company Heroes\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Captain","Imperium","Faction: Adeptus Astartes","Faction: Ultramarines","Sicarius"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Captain Titus",
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
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            ultramarines_weapons.master_crafted_chainsword,
        ],
        rangedWeapons: [
            ultramarines_weapons.master_crafted_bolter,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.master_crafted_bolter, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.master_crafted_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Press the Attack", desc: "Weapons equipped by models in this model’s unit have the [SUSTAINED HITS 1] ability" },
            { name: "Honour of Ultramar", desc: "If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 2+,\ndo not remove it from play. This model can fight after the attacking unit has finished making its attacks. If one or more enemy models are destroyed as a result of those attacks, this model regains D3 lost wounds and is not destroyed; otherwise, it is removed from play." },
            { name: "Leader", desc: "This model can be attached to the following units: \n\n\n-  Assault Intercessor Squad \n-  Bladeguard Veteran Squad \n-  Company Heroes \n-  Hellblaster Squad \n-  Infernus Squad \n-  Intercessor Squad \n-  Sternguard Veteran Squad \n-  Wardens of Ultramar" },
        ],
        keywords: ["Titus","Infantry","Character","Epic Hero","Imperium","Tacticus","Grenades","Captain","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Cato Sicarius",
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
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            ultramarines_weapons.talassarian_tempest_blade_strike,
            ultramarines_weapons.talassarian_tempest_blade_coup_de_grace,
            ultramarines_weapons.talassarian_tempest_blade_sweep,
        ],
        rangedWeapons: [
            ultramarines_weapons.artisan_plasma_pistol,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.artisan_plasma_pistol, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.talassarian_tempest_blade_strike, selected: true},
            ],
            slot3: [
                {...ultramarines_weapons.talassarian_tempest_blade_coup_de_grace, selected: true},
            ],
            slot4: [
                {...ultramarines_weapons.talassarian_tempest_blade_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Knight Champion of Macragge", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model’s unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\"." },
            { name: "Honour or Death", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, even if you have already used\nthat Stratagem on a different unit this phase." },
            { name: "Leader", desc: "This model can be attached to the following units: Victrix Honour Guard\n\n\nYou can attach this model to the above unit even if a Marneus Calgar unit has already been attached\nto it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate\nunits, with their original Starting Strengths" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Captain","Imperium","Tacticus","Sicarius","Cato","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Chaplain Cassius [Legends]",
        pts: 80,
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
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            ultramarines_weapons.artificer_crozius,
        ],
        rangedWeapons: [
            ultramarines_weapons.infernus,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.infernus, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.artificer_crozius, selected: true},
            ],
        },
        abilities: [
            { name: "Catechism of Death", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability." },
            { name: "Inspired Retribution", desc: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Squad\n- Command Squad\n- Sternguard Veteran Squad\n- Tactical Squad\n- Tyrannic War Veterans\n- Vanguard Veteran Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Chaplain Cassius","Imperium","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Chief Librarian Tigurius",
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
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            ultramarines_weapons.rod_of_tigurius,
        ],
        rangedWeapons: [
            ultramarines_weapons.storm_of_the_emperor_s_wrath_witchfire,
            ultramarines_weapons.storm_of_the_emperor_s_wrath_focused_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.storm_of_the_emperor_s_wrath_witchfire, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.storm_of_the_emperor_s_wrath_focused_witchfire, selected: true},
            ],
            slot3: [
                {...ultramarines_weapons.rod_of_tigurius, selected: true},
            ],
        },
        abilities: [
            { name: "Hood of Hellfire", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks and mortal wounds." },
            { name: "Master of Prescience (Psychic)", desc: "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll. In addition, once per battle round, you can target that unit with one of the following Stratagems for 0CP: Counter-offensive; Fire Overwatch; Go to Ground;\nHeroic Intervention." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Desolation Squad\n- Devastator Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Imperium","Psyker","Chief Librarian Tigurius","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Lieutenant Titus",
        pts: 70,
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
            invuln: false
        },
        meleeWeapons: [
            ultramarines_weapons.astartes_chainsword,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.astartes_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Press the Attack", desc: ": Weapons equipped by models in this model’s unit have the [SUSTAINED HITS 1] ability." },
            { name: "Honour of the Chapter", desc: "If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 2+, do not remove it from play. This model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Hellblaster Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad" },
        ],
        keywords: ["Infantry","Character","Imperium","Grenades","Epic Hero","Lieutenant","Titus","Faction: Adeptus Astartes","Faction: Ultramarines","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "other",
        name: "Marneus Calgar",
        pts: 200,
        units: 2,
        img: null,
        leader: true,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            ultramarines_weapons.gauntlets_of_ultramar,
            ultramarines_weapons.victrix_power_sword,
        ],
        rangedWeapons: [
            ultramarines_weapons.gauntlets_of_ultramar_2,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.gauntlets_of_ultramar_2, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.gauntlets_of_ultramar, selected: true},
            ],
            slot3: [
                {...ultramarines_weapons.victrix_power_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Inspiring Leader", desc: "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back." },
            { name: "Master Tactician", desc: "At the start of your Command phase, if this unit’s Marneus Calgar model is your WARLORD and is on the battlefield, you gain 1CP." },
            { name: "Honour Guard of Macragge", desc: "While this unit contains one or more Victrix Honour Guard models, this unit’s Marneus Calgar model has the Feel No Pain 4+ ability." },
            { name: "Leader", desc: "This unit can be attached to the following units:\n\n- Aggressor Squad\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Company Heroes\n- Eradicator Squad\n- Heavy Intercessor Squad\n- Infernus Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Imperium","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Marneus Calgar in Armour of Antilochus",
        pts: 140,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            ultramarines_weapons.gauntlets_of_ultramar,
        ],
        rangedWeapons: [
            ultramarines_weapons.gauntlets_of_ultramar_2,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.gauntlets_of_ultramar_2, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.gauntlets_of_ultramar, selected: true},
            ],
        },
        abilities: [
            { name: "Inspiring Leader", desc: "This unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back." },
            { name: "Master Tactician", desc: "At the start of your Command phase, if this unit’s Marneus Calgar model is your **Warlord** and is on the battlefield, you gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units: **Aggressor Squad, Assault Intercessor Squad, Bladeguard Veteran Squad, Company Heroes, Eradicator Squad, Heavy Intercessor Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad, Terminator Assault Squad, Terminator Squad, Victrix Honour Guard**" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Imperium","Terminator","Chapter Master","Marneus Calgar","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Roboute Guilliman",
        pts: 340,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 2,
            wounds: 10,
            leader: 5,
            control: 4,
            invuln: 4
        },
        meleeWeapons: [
            ultramarines_weapons.hand_of_dominion,
            ultramarines_weapons.the_emperors_sword,
        ],
        rangedWeapons: [
            ultramarines_weapons.hand_of_dominion_2,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.hand_of_dominion_2, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.hand_of_dominion, selected: true},
            ],
            slot3: [
                {...ultramarines_weapons.the_emperors_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Author of the Codex", desc: "At the Start of your Command phase, select two Author of the Codex abilities (see left). Until the start of your next Command phase, this model has those abilities.’\n\nPrimarch of the XIII (Aura): While a friendly Adeptus Astartes unit is within 6\" of this model, add 1 to the Objective Control characteristic of models in that unit and you can re-roll Battle-shock and Leadership tests taken for that unit.\n\nMaster of Battle: After you have selected an enemy unit using the Oath of Moment ability, select a second enemy unit. Until the start of your next Command phase, if your Oath of Moment target is destroyed, that second enemy unit becomes your Oath of Moment target until you select a new one.\n\nSupreme Strategist: Once per battle round, you can target one friendly ADEPTUS ASTARTES unit within 12\" of this model with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Ultramarines Bodyguard", desc: "While this model is within 3\" of one or more friendly Adeptus Astartes Infantry units, this model has the Lone Operative ability" },
            { name: "Armour of Fate", desc: "The first time this model is destroyed, roll one D6 at the end of the phase: on a 3+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy models, with 6 wounds remaining." },
            { name: "Supreme Commander", desc: "If this model is in your army, it must be your Warlord." },
        ],
        keywords: ["Epic Hero","Character","Imperium","Primarch","Roboute Guilliman","Faction: Adeptus Astartes","Faction: Ultramarines","Monster"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Sergeant Chronus [Legends]",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            ultramarines_weapons.chronus_servo_arm,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.chronus_servo_arm, selected: true},
            ],
        },
        abilities: [
            { name: "Tank Commander", desc: "While this model is commanding a Vehicle model (see reverse):\n\n- Ranged weapons equipped by that Vehicle model have a Ballistic Skill characteristic of 2+.\n- Each time that Vehicle model is selected to shoot, you can re-roll one Wound roll when resolving those attacks.\n\nIf your army includes one or more of the Vehicle models listed below, Sergeant Chronus must start the battle embarked within one of those models as if it were a Transport. Sergeant Chronus can only disembark from that Vehicle if it is destroyed. While embarked in this way, Sergeant Chronus is said to be commanding that Vehicle.\n\n- Hunter\n- Land Raider\n- Land Raider Crusader\n- Land Raider Redeemer\n- Predator Annihilator\n- Predator Destructor\n- Stalker\n- Vindicator\n- Whirlwind" },
            { name: "Chronus", desc: "When this model disembarks from a Vehicle model it was commanding, it has the Lone Operative ability until the end of the battle." },
        ],
        keywords: ["Infantry","Character","Epic Hero","Imperium","Sergeant Chronus","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Sergeant Telion [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 4,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            ultramarines_weapons.combat_knife,
        ],
        rangedWeapons: [
            ultramarines_weapons.quietus,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.quietus, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.combat_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Voice of Experience", desc: "While this model is leading a unit, improve the Objective Control characteristic of models in that unit by 1 and each time a model in that unit makes an attack, add 1 to the Hit roll." },
            { name: "Guiding Hand", desc: "While this model is leading a unit, each time that unit is selected to shoot or fight, select one of the following abilities to apply to weapons equipped by models in that unit until the end of the phase:\n\n\n- [LETHAL HITS]\n- [PRECISION]\n- [SUSTAINED HITS 1]" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Scout Squad\n- Scout Sniper Squad" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Imperium","Sergeant Telion","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "other",
        name: "Tyrannic War Veterans [Legends]",
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
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            ultramarines_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            ultramarines_weapons.bolt_pistol,
            ultramarines_weapons.boltgun,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.boltgun, selected: true},
            ],
            slot3: [
                {...ultramarines_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Tyrannic War Veterans", desc: "Weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability when targeting Tyranids units." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Tyrannic War Veterans","Faction: Adeptus Astartes","Faction: Ultramarines"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "other",
        name: "Ultramarines Honour Guard [Legends]",
        pts: 155,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 2,
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
            { name: "Astartes Banner", desc: "While this unit contains a Company Ancient, add 1 to the Objective Control characteristic of models in this unit." },
            { name: "Honour or Death", desc: "While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic  Intervention Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase." },
            { name: "Honour Guard", desc: "While a Captain or Chapter Master model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll." },
            { name: "Honour Guard of Macragge", desc: "MARNEUS CALGAR can be attached to this unit. If a CAPTAIN model from your army with the Leader ability can be attached to a COMMAND SQUAD, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Honor Guard","Faction: Ultramarines","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "characters",
        name: "Uriel Ventris",
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
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            ultramarines_weapons.sword_of_idaeus,
        ],
        rangedWeapons: [
            ultramarines_weapons.invictus,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.invictus, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.sword_of_idaeus, selected: true},
            ],
        },
        abilities: [
            { name: "Unorthodox Strategist [Aura]", desc: "Each time your opponent targets a unit from their army with a  stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP (this is not cumulative with any other rules that would increase the CP cost of that Stratagem)." },
            { name: "Master of the Fleet", desc: "During the Declare Battle Formations step, if your army includes this model, select one Phobos, Gravis, or Tacticus Adeptus Astartes Infantry unit from your army.  That unit gains the Deep Strike ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad'\n- Company Heroes\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Uriel Ventris","Character","Epic Hero","Infantry","Captain","Imperium","Faction: Adeptus Astartes","Faction: Ultramarines","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "other",
        name: "Victrix Honour Guard",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            ultramarines_weapons.blades_of_honour,
        ],
        rangedWeapons: [
            ultramarines_weapons.master_crafted_bolt_carbine,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.master_crafted_bolt_carbine, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.blades_of_honour, selected: true},
            ],
        },
        abilities: [
            { name: "Banner of Macragge", desc: "Once per battle, at the start of the Fight phase, the bearer can use this ability. If it does, until the end of the phase, add 1 to the Strength and Attacks characteristics of melee weapons equipped by models in the bearer’s unit." },
            { name: "Attached Unit", desc: "If a Captain or Chapter Master unit from your army can be attached to a Company Heroes unit, it can\nbe attached to this unit instead." },
            { name: "Ultramarines Honour Guard", desc: "While a Captain or Chapter Master model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll" },
            { name: "Glory of Ultramar", desc: "In your opponent’s Shooting phase, each time an enemy unit has shot, if any models from this unit\nwere destroyed as a result of those attacks, this unit can make a Surge move. To do so, roll one D6: models in this unit move a number of inches up to the result, but this unit must end that move as close as possible to the closest enemy unit (excluding Aircraft). When doing so, those models can be\nmoved within Engagement Range of that enemy unit. This unit cannot make a Surge move while it is Battle‑shocked or within Engagement Range of one or more enemy units, and can only make one Surge move per phase." },
        ],
        keywords: ["Infantry","Imperium","Tacticus","Honor Guard","Victrix","Faction: Ultramarines"],
        pointOptions: [{ models: 4, pts: 220 }],
        transport: null,
    },
    {
        army: "ultramarines",
        class: "other",
        name: "Wardens of Ultramar",
        pts: 105,
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
            ultramarines_weapons.close_combat_weapon_2,
            ultramarines_weapons.force_stave,
            ultramarines_weapons.power_weapon,
        ],
        rangedWeapons: [
            ultramarines_weapons.astropathic_blast,
            ultramarines_weapons.archeotech_laspistol,
        ],
        weapon_options: {
            slot1: [
                {...ultramarines_weapons.astropathic_blast, selected: true},
            ],
            slot2: [
                {...ultramarines_weapons.archeotech_laspistol, selected: true},
            ],
            slot3: [
                {...ultramarines_weapons.close_combat_weapon_2, selected: true},
            ],
            slot4: [
                {...ultramarines_weapons.force_stave, selected: true},
            ],
            slot5: [
                {...ultramarines_weapons.power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Second Company Banner", desc: "While this unit contains Ancient Gadriel, add 1 to the Objective Control characteristic of models in this unit. While this unit contains Ancient Gadriel and Captain Titus, improve the Leadership characteristic of models in this unit by 1 as well." },
            { name: "Strategium Command", desc: "After both players have deployed their armies, if this unit is on the battlefield (or any Transport it\nis embarked within is on the battlefield), select up to three Adeptus Astartes units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
            { name: "Heroes of Ultramar", desc: "At the start of the Declare Battle Formations step, this unit can join one of the following units. This\nunit then counts as part of that unit for the rest of the battle, and that unit’s Starting Strength is\nincreased accordingly.\n\n\n- Assault intercessor Squad\n- Bladeguard Veteran Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n\n\nThis unit cannot join an Attached unit, and only Captain Titus can join a unit this unit has joined." },
            { name: "Storm Shield", desc: "The bearer has a 4+ Invulnerable save." },
            { name: "Refractor Field", desc: "The bearer has a 5+ invulnerable save." },
        ],
        keywords: ["Infantry","Epic Hero","Grenades","Imperium","Tacticus","Faction: Adeptus Astartes","Faction: Ultramarines","Wardens of Ultramar"],
        pointOptions: [],
        transport: null,
    },
]

export default ultramarines_army
