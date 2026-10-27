// AUTO-GENERATED units for Adepta Sororitas (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import adepta_sororitas_weapons from "../weapons/adepta_sororitas"

const adepta_sororitas_army = [
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Aestred Thurga and Agathae Dolan",
        pts: 70,
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
            adepta_sororitas_weapons.blade_of_vigil,
            adepta_sororitas_weapons.scribes_staff,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.blade_of_vigil, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.scribes_staff, selected: true},
            ],
        },
        abilities: [
            { name: "Auto-Tapestry of the Emperor's Judgement", desc: "While this unit is leading a unit and contains an Aestred Thurga model, weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability" },
            { name: "Recount the Deeds of the Saints", desc: "While this unit is leading a unit and contains and Agathae Dolan model, each time that unit destroys an enemy unit, you gain 1 Miracle dice. When that Agathae Dolan model is destroyed, you gain D3 Miracle dice." },
            { name: "Invulnerable Save", desc: "Models in this units have an invulnerable save of 4+" },
            { name: "Leader", desc: "This unit can be attached to the following units: \n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\n- Sisters Novitiate Squad" },
        ],
        keywords: ["Epic Hero","Aestred Thurga and Agathae Dolan","Character","Imperium","Faction: Adepta Sororitas","Grenades","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Arco-Flagellants",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 7,
            wounds: 2,
            leader: 8,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.arco_flails,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.arco_flails, selected: true},
            ],
        },
        abilities: [
            { name: "Extremis Trigger Word", desc: "Each time this unit is selected to fight, you can choose to invoke its extremis trigger word. If you do, then until the end of the phase, arco-flails equipped by models in this unit have an Attacks characteristic of 6 and the HAZARDOUS ability." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
        ],
        keywords: ["Infantry","Imperium","Faction: Adepta Sororitas","Penitent"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Battle Sanctum [Legends]",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 11,
            saving: 3,
            wounds: 20,
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
            { name: "Consecrated Ground", desc: "When this FORTIFICATION is set up, all parts of it must be set up within 1\" of another part. Friendly ADEPTA SORORITAS INFANTRY models can be set up or end any type of move on top of the floor sections of this FORTIFICATION. While an ADEPTA SORORITAS unit from your army is within 1\" of this FORTIFICATION, that unit can perform one additional Act of Faith per phase." },
            { name: "Holy Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Fortification","Faction: Adepta Sororitas","Imperium","Towering","Battle Sanctum"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Canoness",
        pts: 60,
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
            leader: 7,
            control: 1,
            invuln: 2
        },
        meleeWeapons: [
            adepta_sororitas_weapons.blessed_blade,
            adepta_sororitas_weapons.power_weapon,
            adepta_sororitas_weapons.hallowed_chainsword,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.brazier_of_holy_fire,
            adepta_sororitas_weapons.bolt_pistol,
            adepta_sororitas_weapons.condemnor_boltgun,
            adepta_sororitas_weapons.inferno_pistol,
            adepta_sororitas_weapons.plasma_pistol_standard,
            adepta_sororitas_weapons.plasma_pistol_supercharge,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.brazier_of_holy_fire, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.bolt_pistol, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.condemnor_boltgun, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.inferno_pistol, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.plasma_pistol_standard, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot7: [
                {...adepta_sororitas_weapons.blessed_blade, selected: true},
            ],
            slot8: [
                {...adepta_sororitas_weapons.power_weapon, selected: true},
            ],
            slot9: [
                {...adepta_sororitas_weapons.hallowed_chainsword, selected: true},
            ],
        },
        abilities: [
            { name: "Null Rod", desc: "Models in the bearer’s unit have the Feel No Pain 4+ ability against mortal wounds and Psychic Attacks." },
            { name: "Rod of Office", desc: "Each time a model in the bearer's unit makes an attack, re-roll a Hit roll of 1." },
            { name: "The Emperor's Grace", desc: "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 2+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
            { name: "Leader", desc: "This unit can be attached to the following units: \n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\n- Sisters Novitiate Squad" },
        ],
        keywords: ["Character","Infantry","Grenades","Canoness","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Canoness with Jump Pack",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 3,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.blessed_halberd,
            adepta_sororitas_weapons.power_weapon,
            adepta_sororitas_weapons.holy_eviscerator,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.ministorum_hand_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.ministorum_hand_flamer, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.blessed_halberd, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.power_weapon, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.holy_eviscerator, selected: true},
            ],
        },
        abilities: [
            { name: "Divine Deliverance", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by the model and those weapons have the [DEVASTATING WOUNDS] ability" },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
            { name: "Leader", desc: "This unit can be attached to the following units: \n- Seraphim Squad\n- Zephyrim Squad" },
        ],
        keywords: ["Character","Infantry","Grenades","Canoness","Faction: Adepta Sororitas","Jump Pack","Fly","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Castigator",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.heavy_bolter,
            adepta_sororitas_weapons.castigator_autocannons,
            adepta_sororitas_weapons.castigator_battle_cannon,
            adepta_sororitas_weapons.storm_bolter,
            adepta_sororitas_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.castigator_autocannons, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.castigator_battle_cannon, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.hunter_killer_missile, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Rites of Castigation", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly Adepta Sororitas unit makes a ranged attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per turn." },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Castigator","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Celestian Insidiants",
        pts: 120,
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
            invuln: 5
        },
        meleeWeapons: [
            adepta_sororitas_weapons.blessed_sword,
            adepta_sororitas_weapons.virge_of_admonition,
            adepta_sororitas_weapons.null_mace,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.inferno_pistol_2,
            adepta_sororitas_weapons.condemnor_bolt_pistol,
            adepta_sororitas_weapons.ministorum_hand_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.inferno_pistol_2, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.condemnor_bolt_pistol, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.ministorum_hand_flamer, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.blessed_sword, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.virge_of_admonition, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.null_mace, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have an Invulnerable save of 5+." },
            { name: "Rituale Nullificatus", desc: "Models in this unit have the Feel No Pain 4+ ability against Psychic Attacks and mortal wounds." },
            { name: "Virtue of Intolerance", desc: "At the start of the battle, select one unit from your opponent’s army to be this unit’s quarry. Each time a model in this unit makes an attack that targets its quarry, that attack has the **[Precision]** ability and you can re‑roll the Hit roll. This ability can be used even if this unit is embarked within a **Transport**." },
            { name: "Attached Unit", desc: "If a **Character** unit from your army can be attached to a **Dominion Squad** unit, it can be attached to this unit instead." },
            { name: "Denuncia Oratory", desc: "Each time the bearer’s unit’s quarry is destroyed, you can select a new unit from your opponent’s army to be its quarry." },
            { name: "Simulacrum Imperialis", desc: "At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, roll one D6: on a 4+, you gain 1 Miracle dice showing a value equal to that result." },
        ],
        keywords: ["Faction: Adepta Sororitas","Infantry","Grenades","Imperium","Celestian Insidiants"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Celestian Sacresant Aveline [Legends]",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.the_thorn_of_the_white_rose,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.ministorum_hand_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.ministorum_hand_flamer, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.the_thorn_of_the_white_rose, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Instrument of the Emperor's Wrath", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability." },
            { name: "Daemonbreaker", desc: "Each time this model makes an attack that targets a DAEMON unit, you can re-roll the Hit roll and you can re-roll the Wound roll." },
        ],
        keywords: ["Epic Hero","Infantry","Character","Imperium","Grenades","Celestian Sacresant Aveline","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Crusaders [Legends]",
        pts: 40,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.power_weapon_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Spiritual Fortitude", desc: "Models in this unit have the Feel No Pain 4+ ability against Psychic Attacks and mortal wounds." },
            { name: "Attached Unit", desc: "If a model from your army with the Leader ability can be attached to a BATTLE SISTERS SQUAD, it can be attached to this unit instead." },
            { name: "Invulnerable Save", desc: "Models in this unit have an Invulnerable save of 4+." },
        ],
        keywords: ["Infantry","Imperium","Crusaders","Faction: Adepta Sororitas"],
        pointOptions: [{ models: 3, pts: 80 }],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Daemonifuge",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.sanctity,
            adepta_sororitas_weapons.the_outcasts_blades,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.sanctity, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.the_outcasts_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Holy Judgement", desc: "At the start of your Shooting phase, select one enemy unit within 12\" of and visible to this unit's Ephrael Stern model. That unit must take a Battle-shock test, subtracting 2 from the result if it is a Chaos unit. If the test is failed, that enemy unit suffers 3 mortal wounds." },
            { name: "Mysterious Saviours", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Invulnerable Save", desc: "Models in this units have an Invulnerable save of 4+" },
        ],
        keywords: ["Epic Hero","Infantry","Grenades","Character","Imperium","Daemonifuge","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Dialogus",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.dialogus_staff,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.dialogus_staff, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\n- Sisters Novitiate Squad\nThis model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine, Junith Eruita, or Aestred Thurga unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Laud Hailer", desc: "Once per battle, at the start of any phase, you can select one friendly Adepta Sororitas unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." },
            { name: "Stirring Rhetoric", desc: "While this model is leading a unit, each time that unit performs an Act of Faith, the value of one of the Miracle dice used in that Act of Faith is first changed to a 6." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
        ],
        keywords: ["Infantry","Character","Imperium","Dialogus","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Dogmata",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.mace_of_the_righteous,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.mace_of_the_righteous, selected: true},
            ],
        },
        abilities: [
            { name: "Executioner of Heretics (Aura)", desc: "While an enemy unit is within 6\" of this model, worsen the Leadership characteristic of models in that unit by 1." },
            { name: "Unflinching Determination", desc: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\nThis model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine, Junith Eruita, or Aestred Thurga unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Dogmata","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Exorcist",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.heavy_bolter,
            adepta_sororitas_weapons.exorcist_missile_launcher,
            adepta_sororitas_weapons.exorcist_conflagration_rockets,
            adepta_sororitas_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.exorcist_missile_launcher, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.exorcist_conflagration_rockets, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.hunter_killer_missile, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Devastating Refrain", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with an Indirect Fire weapon scored a hit against an enemy unit, that unit must take a Battle-shock test. Each time such an attack destroys an enemy model that has the Deadly Demise ability, the model's Deadly Demise ability inflicts mortal wounds on a D6 roll of 5+ instead of a 6." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
        ],
        keywords: ["Vehicle","Smoke","Imperium","Exorcist","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Geminae Superia",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 2,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            adepta_sororitas_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.power_weapon_3, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Infantry","Fly","Grenades","Imperium","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Hospitaller",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.chirugeons_tools,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.chirugeons_tools, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\n- Sisters Novitiate Squad\nThis model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine, Junith Eruita, or Aestred Thurga unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Medicus Ministorum", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "Sacred Healing", desc: "While this model is leading a unit, in your Command phase, you can return up to 1 destroyed model (excluding Character models) to that unit. If you wish, you first discard 1 Miracle dice; if you do, you can return up to D3+1 destroyed models (excluding Character models) to that unit instead." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
        ],
        keywords: ["Infantry","Character","Imperium","Hospitaller","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Imagifier",
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
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 2
        },
        meleeWeapons: [
            adepta_sororitas_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.boltgun,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.boltgun, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\nThis model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine, Junith Eruita, or Aestred Thurga unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Litany of Deeds", desc: "Each time you gain a Miracle dice as the result of a friendly ADEPTA SORORITAS unit or model being destroyed, if that unit or model was destroyed within 12\" of this model, you can re-roll the result of that Miracle dice before adding it to your Miracle dice pool." },
            { name: "Stanchion of Holy Martyrs", desc: "While this model is leading a unit, models in that unit have a Save characteristic of 2+ and a 4+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Imagifier","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "transports",
        name: "Immolator",
        pts: 115,
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
            adepta_sororitas_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.heavy_bolter,
            adepta_sororitas_weapons.immolation_flamers,
            adepta_sororitas_weapons.twin_heavy_bolter,
            adepta_sororitas_weapons.twin_multi_melta,
            adepta_sororitas_weapons.hunter_killer_missile,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.immolation_flamers, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.twin_heavy_bolter, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.twin_multi_melta, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.hunter_killer_missile, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 6 ADEPTA SORORITAS INFANTRY models. It cannot transport JUMP PACK models or the Triumph of Saint Katherine.\n\nAt the start of the Declare Battle Formations step, you can select one BATTLE SISTERS SQUAD, DOMINION SQUAD or SISTERS NOVITIATE SQUAD from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units. If you are splitting a unit that has the Cherub ability, only one of the new units can use that ability during the battle - make a note of which of the new units this will be). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit." },
            { name: "Purge and Cleanse", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
        ],
        keywords: ["Dedicated Transport","Vehicle","Smoke","Transport","Imperium","Immolator","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Inspiring Devotee [Crucible]",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Sacred Devotions", desc: "Each time this unit performs an Act of Faith, the value of one of the Miracle dice used in that Act of Faith is first changed to a 4." },
            { name: "Leader", desc: "This model can be attached to the following units: **Battle Sisters Squad, Celestian Sacresants, Dominion Squad, Retributor Squad, Sisters Novitiate Squad**" },
            { name: "Invulnerable Save (6+)", desc: "This model has a 6+ invulnerable save." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Faction: Adepta Sororitas","Crucible","Inspiring Devotee"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Intranzia Fraye",
        pts: 150,
        units: 2,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            adepta_sororitas_weapons.mace_of_saint_praxedes,
            adepta_sororitas_weapons.throne_of_blame,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.heavy_bolter_2,
            adepta_sororitas_weapons.melta_missile_array,
            adepta_sororitas_weapons.ministorum_heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.heavy_bolter_2, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.melta_missile_array, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.ministorum_heavy_flamer, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.mace_of_saint_praxedes, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.throne_of_blame, selected: true},
            ],
        },
        abilities: [
            { name: "Righteous Denunciation", desc: "At the start of the Fight phase, each enemy unit within 6\" of this model must take a Battle‑shock test, subtracting 1 from that test." },
            { name: "Judged for Execution", desc: "At the end of your Movement phase, you can select one enemy unit within 18\" of and visible to this model. Until the start of your next Command phase, each time a friendly **Adepta Sororitas** model makes an attack that targets that enemy unit, that attack has the [LETHAL HITS] ability." },
        ],
        keywords: ["Faction: Adepta Sororitas","Vehicle","Walker","Imperium","Character","Penitent","Epic Hero","Intranzia Fraye"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Junith Eruita",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.mace_of_castigation,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.twin_ministorum_heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.twin_ministorum_heavy_flamer, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.mace_of_castigation, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\n- Sisters Novitiate Squad" },
            { name: "The Pulpit of Saint Holline’s Basilica", desc: "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll." },
            { name: "Fiery Conviction", desc: "If this model is on the battlefield at the start\nof your Command phase, you can choose one of the following:\n- Discard 1 Miracle dice and gain 1CP.\n- Take a Leadership test for this model, if that test is passed, gain 1CP." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
        ],
        keywords: ["Epic Hero","Character","Fly","Imperium","Junith Eruita","Faction: Adepta Sororitas","Mounted"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Militant Commander [Crucible]",
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
            leader: 7,
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
            { name: "Sacred Command", desc: "Once per battle round, one unit from your army with the ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase." },
            { name: "Leader", desc: "This model can be attached to the following units: **Battle Sisters Squad, Celestian Sacresants, Dominion Squad, Retributor Squad, Sisters Novitiate Squad**" },
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Character","Infantry","Grenades","Imperium","Canoness","Militant Commander","Faction: Adepta Sororitas","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Ministorum Priest",
        pts: 50,
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
            adepta_sororitas_weapons.power_weapon_4,
            adepta_sororitas_weapons.zealots_vindictor,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.holy_pistol,
            adepta_sororitas_weapons.zealots_vindictor_2,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.holy_pistol, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.zealots_vindictor_2, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.power_weapon_4, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.zealots_vindictor, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Arco-flagellants\n- Battle Sisters Squad\n- Dominion Squad\n- Sisters Novitiate Squad" },
            { name: "Righteous Smiting", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll." },
            { name: "Zealot", desc: "Once per battle, in the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength and Attacks characteristics of melee weapons equipped by this model by 3." },
            { name: "Holy Mission", desc: "If this model is attached to a Dominion Squad during the Declare Battle Formations step, it gains the Scouts 6\" ability. If this model is attached to a Sisters Novitiate Squad during the Declare Battle Formations step, it gains the Infiltrators ability." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
        ],
        keywords: ["Infantry","Character","Imperium","Faction: Adepta Sororitas","Ministorum Priest","Penitent"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Mortifiers",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.twin_penitent_buzz_blades,
            adepta_sororitas_weapons.twin_penitent_flails,
            adepta_sororitas_weapons.penitent_buzz_blade,
            adepta_sororitas_weapons.penitent_flail,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.heavy_bolter,
            adepta_sororitas_weapons.mortifier_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.heavy_bolter, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.mortifier_flamer, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.twin_penitent_buzz_blades, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.twin_penitent_flails, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.penitent_buzz_blade, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.penitent_flail, selected: true},
            ],
        },
        abilities: [
            { name: "Anchorite Sarcophagus", desc: "The bearer has a Move characteristic of 7\" and a Save Characteristic of 3+." },
            { name: "Anguish of the Unredeemed", desc: "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 2+, do not remove it from play; that destroyed model can fight after attacking unit has finished making its attacks, and is then removed from play." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
        ],
        keywords: ["Vehicle","Walker","Imperium","Mortifiers","Faction: Adepta Sororitas","Penitent"],
        pointOptions: [{ models: 2, pts: 140 }],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Morvenn Vahl",
        pts: 185,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.lance_of_illumination_strike,
            adepta_sororitas_weapons.lance_of_illumination_sweep,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.fidelis,
            adepta_sororitas_weapons.paragon_missile_launcher_prioris,
            adepta_sororitas_weapons.paragon_missile_launcher_sanctorum,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.fidelis, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.paragon_missile_launcher_prioris, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.paragon_missile_launcher_sanctorum, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.lance_of_illumination_strike, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.lance_of_illumination_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Paragon Warsuits" },
            { name: "Abbess Sanctorum", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Righteous Repugnance", desc: "Each time this model's unit is selected to shoot or fight, you can discard 1 Miracle dice. If you do, until the end of the phase, add 3 to the Attacks characteristic of Fidelis and the Lance of Illumination. Each time an enemy unit is destroyed by this model, you gain 1 Miracle dice." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
        ],
        keywords: ["Vehicle","Walker","Character","Epic Hero","Imperium","Morvenn Vahl","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Palatine",
        pts: 50,
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
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.palatine_blade,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.plasma_pistol_supercharge,
            adepta_sororitas_weapons.plasma_pistol_standard,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.plasma_pistol_supercharge, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.plasma_pistol_standard, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.palatine_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Battle Sisters Squad\n- Celestian Sacresants\n- Dominion Squad\n- Retributor Squad\n- Sisters Novitiate Squad" },
            { name: "Fury of the Righteous", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Rapturous Blows", desc: "Each time this model’s unit is selected to fight, you can discard 1 Miracle dice. If you do, then until the end of the phase, each time a melee attack made by this model scores a wound, the target of that attack suffers 1 mortal wound in addition to any normal damage." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
        ],
        keywords: ["Infantry","Character","Grenades","Imperium","Palatine","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Paragon Warsuits",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 2,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.paragon_war_blade,
            adepta_sororitas_weapons.paragon_war_mace,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.paragon_storm_bolters,
            adepta_sororitas_weapons.paragon_grenade_launchers,
            adepta_sororitas_weapons.heavy_bolter,
            adepta_sororitas_weapons.multi_melta,
            adepta_sororitas_weapons.ministorum_heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.paragon_storm_bolters, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.paragon_grenade_launchers, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.heavy_bolter, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.multi_melta, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.ministorum_heavy_flamer, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.paragon_war_blade, selected: true},
            ],
            slot7: [
                {...adepta_sororitas_weapons.paragon_war_mace, selected: true},
            ],
        },
        abilities: [
            { name: "Righteous Paragons", desc: "Each time a model in this unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the Hit roll and add 1 to the Wound roll." },
            { name: "Invulnerable Save", desc: "Models in this units have an Invulnerable save of 4+." },
        ],
        keywords: ["Vehicle","Walker","Grenades","Imperium","Paragon Warsuits","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Penitent Engines",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.twin_penitent_buzz_blades_2,
            adepta_sororitas_weapons.twin_penitent_flails_2,
            adepta_sororitas_weapons.penitent_buzz_blade_2,
            adepta_sororitas_weapons.penitent_flail_2,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.penitent_flamers,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.penitent_flamers, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.twin_penitent_buzz_blades_2, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.twin_penitent_flails_2, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.penitent_buzz_blade_2, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.penitent_flail_2, selected: true},
            ],
        },
        abilities: [
            { name: "Endless Suffering", desc: "This unit is eligible to declare a charge in a turn in which it Advanced" },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
        ],
        keywords: ["Vehicle","Walker","Imperium","Penitent Engines","Faction: Adepta Sororitas","Penitent"],
        pointOptions: [{ models: 2, pts: 150 }],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Reliquant Knight [Crucible]",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 7,
            saving: 2,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Adamant Wrath", desc: "You can re-roll Advance and Charge rolls made for this unit." },
            { name: "Leader", desc: "This model can be attached to the following units: **Paragon Warsuits**" },
            { name: "Invulnerable Save (4+)", desc: "This model has a 4+ invulnerable save." },
        ],
        keywords: ["Character","Grenades","Imperium","Faction: Adepta Sororitas","Crucible","Vehicle","Walker","Reliquant Knight","Paragon Warsuits"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "transports",
        name: "Repressor [Legends]",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.dozer_ram,
            adepta_sororitas_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.repressor_twin_heavy_flamer,
            adepta_sororitas_weapons.heavy_flamer,
            adepta_sororitas_weapons.hunter_killer_missile,
            adepta_sororitas_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.repressor_twin_heavy_flamer, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.heavy_flamer, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.hunter_killer_missile, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.storm_bolter, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.dozer_ram, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 12 ADEPTA SORORITAS INFANTRY models. It cannot transport JUMP PACK models or the Triumph of Saint Katherine." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
            { name: "Emergency Combat Embarkation", desc: "Once per turn, in your opponent’s Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move, you can select one ADEPTA SORORITAS unit from your army that was selected as a target of that charge. Provided that unit is not within Engagement Range of any enemy units and every model in that unit is within 3\" of this TRANSPORT, it can embark within this TRANSPORT." },
        ],
        keywords: ["Dedicated Transport","Vehicle","Transport","Smoke","Imperium","Sororitas Rhino","Faction: Adepta Sororitas","Repressor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Retributor Squad",
        pts: 120,
        units: 4,
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
            invuln: 6
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            adepta_sororitas_weapons.ministorum_heavy_flamer,
            adepta_sororitas_weapons.multi_melta_2,
            adepta_sororitas_weapons.heavy_bolter_3,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.ministorum_heavy_flamer, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.multi_melta_2, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.heavy_bolter_3, selected: true},
            ],
        },
        abilities: [
            { name: "Cherubs", desc: "Twice per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice." },
            { name: "Storm of Retribution", desc: "Each time a model in this unit makes a ranged attack, re‑roll a Hit roll of 1 and re‑roll a Wound roll of 1. If such an attack targets an enemy unit that has destroyed one or more **Adepta Sororitas** units from your army during the battle, add 1 to the Hit roll and add 1 to the Wound roll as well." },
            { name: "Invulnerable Save", desc: "Models in this units have an invulnerable save of 6+" },
        ],
        keywords: ["Infantry","Grenades","Imperium","Retributor Squad","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Saint Celestine",
        pts: 150,
        units: 2,
        img: null,
        leader: true,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.the_ardent_blade,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.the_ardent_blade_2,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.the_ardent_blade_2, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.the_ardent_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This unit can be attached to the following units:\n- Seraphim Squad\n- Zephyrim Squad" },
            { name: "Healing Tears", desc: "While this unit contains a Celestine model, in your Command phase, if this unit is below its Starting Strength, either one destroyed Geminae Superia model or up to D3 other Bodyguard models are returned to this unit." },
            { name: "Lifewards", desc: "While this unit contains one or more Geminae Superia models, Celestine has the Feel No Pain 4+ ability." },
            { name: "Miraculous Intervention", desc: "The first time this unit’s Celestine model is destroyed, roll one D6 at the end of the phase. On a 2+, set that Celestine model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
        ],
        keywords: ["Faction: Adepta Sororitas","Infantry","Fly","Grenades","Imperium","Epic Hero","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Sanctifiers",
        pts: 110,
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
            adepta_sororitas_weapons.close_combat_weapon_2,
            adepta_sororitas_weapons.burning_hands,
            adepta_sororitas_weapons.death_cult_blades,
            adepta_sororitas_weapons.sanctifier_melee_weapon,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.plasma_gun_standard,
            adepta_sororitas_weapons.plasma_gun_supercharge,
            adepta_sororitas_weapons.meltagun,
            adepta_sororitas_weapons.holy_fire,
            adepta_sororitas_weapons.ministorum_hand_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.plasma_gun_standard, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.plasma_gun_supercharge, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.meltagun, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.holy_fire, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.ministorum_hand_flamer, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...adepta_sororitas_weapons.burning_hands, selected: true},
            ],
            slot8: [
                {...adepta_sororitas_weapons.death_cult_blades, selected: true},
            ],
            slot9: [
                {...adepta_sororitas_weapons.sanctifier_melee_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Ministorum Sermon", desc: "While this unit contains a **Ministorum Priest**, melee weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability." },
            { name: "Cherub", desc: "Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice." },
            { name: "Attached Unit", desc: "If a **Ministorum Priest** model from your army with the Leader ability can be attached to a **Battle Sisters Squad**, it can be attached to this unit instead. If a **Ministorum Priest** model from your army is attached to this unit during the Declare Battle Formations step, that model gains the Scouts 6\" ability." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save." },
            { name: "Simulacrum Imperialis", desc: "At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, roll one D6: on a 4+, you gain 1 Miracle dice showing a value equal to that result." },
            { name: "Salvationist Medikit", desc: "In your Command phase, if the bearer is on the battlefield, you can return up to D3 destroyed models (excluding **Character models**) to this unit." },
        ],
        keywords: ["Infantry","Grenades","Imperium","Sanctifiers","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Seraphim Squad",
        pts: 80,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 3,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adepta_sororitas_weapons.power_weapon_4,
            adepta_sororitas_weapons.chainsword,
            adepta_sororitas_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.inferno_pistol_2,
            adepta_sororitas_weapons.plasma_pistol_supercharge_2,
            adepta_sororitas_weapons.plasma_pistol_standard_2,
            adepta_sororitas_weapons.ministorum_hand_flamer,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.inferno_pistol_2, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot4: [
                {...adepta_sororitas_weapons.ministorum_hand_flamer, selected: true},
            ],
            slot5: [
                {...adepta_sororitas_weapons.power_weapon_4, selected: true},
            ],
            slot6: [
                {...adepta_sororitas_weapons.chainsword, selected: true},
            ],
            slot7: [
                {...adepta_sororitas_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Angelic Ascent", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge." },
            { name: "Invulnerable Save", desc: "Models in this units have an Invulnerable save of 5+." },
        ],
        keywords: ["Infantry","Fly","Grenades","Imperium","Seraphim Squad","Faction: Adepta Sororitas","Jump Pack"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "transports",
        name: "Sororitas Rhino",
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
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            adepta_sororitas_weapons.armoured_tracks,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.hunter_killer_missile,
            adepta_sororitas_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.hunter_killer_missile, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.storm_bolter, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.armoured_tracks, selected: true},
            ],
        },
        abilities: [
            { name: "Transport", desc: "This model has a transport capacity of 12 ADEPTA SORORITAS INFANTRY models. It cannot transport JUMP PACK models or the TRIUMPH OF SAINT KATHERINE." },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 6+" },
            { name: "Self Repair", desc: "At the start of your Command phase, this model regains 1 lost wound." },
        ],
        keywords: ["Dedicated Transport","Vehicle","Transport","Smoke","Imperium","Sororitas Rhino","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "characters",
        name: "Triumph of Saint Katherine",
        pts: 235,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 18,
            leader: 6,
            control: 6,
            invuln: 4
        },
        meleeWeapons: [
            adepta_sororitas_weapons.relic_weapons,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.bolt_pistols,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.bolt_pistols, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.relic_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Battle Sisters Squad" },
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, the Attacks characteristics of all of its weapons are halved, and you can only select one ability when using its Relics of the Matriarchs ability, instead of up to two." },
            { name: "Relics of the Matriarchs", desc: "At the start of the battle round, select up to two of the abilities in the Relics of the Matriarchs section. Until the start of the next battle round, this model has those abilities." },
            { name: "Relic of the Matriarch - The Fiery Heart (Aura)", desc: "While a friendly Adepta Sororitas unit is within 6\" of this model, add 2\" to that unit's Move characteristic and add 1 to the Advance and Charge rolls made for that unit." },
            { name: "Relic of the Matriarch - Censer of the Sacred Rose (Aura)", desc: "While a friendly Adepta Sororitas unit is within 6\" of this model, you can re-roll all Battle-shock tests taken for that unit." },
            { name: "Relic of the Matriarch - Simulacrum of the Ebon Chalice (Aura)", desc: "While a friendly Adepta Sororitas unit is within 6\" of this model, that unit can perform up to two Acts of Faith per phase, instead of only one." },
            { name: "Relic of the Matriarch - Simulacrum of the Argent Shroud (Aura)", desc: "While a friendly Adepta Sororitas unit is within 6\" of this model, each time a model in that unit makes a ranged attack, re-roll a Wound roll of 1." },
            { name: "Relic of the Matriarch - Icon of the Valorous Heart (Aura)", desc: "While a friendly Adepta Sororitas unit is within 6\" of this model, models in that unit have the Feel No Pain 6+ ability." },
            { name: "Relic of the Matriarch - Petals of the Bloody Rose (Aura)", desc: "While a friendly Adepta Sororitas unit is within 6\" of this model, improve the Armour Penetration characteristic of melee weapons equipped by model in that unit by 1." },
            { name: "Solemn Procession", desc: "Each time you gain 1 Miracle dice at the start of the battle round, if this model is on the battlefield, do not roll one D6 to determine the value of that Miracle dice; it has a value of 6.’" },
            { name: "Invulnerable Save", desc: "This model has an invulnerable save of 4+" },
        ],
        keywords: ["Infantry","Grenades","Character","Epic Hero","Imperium","Triumph of Saint Katherine","Faction: Adepta Sororitas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "adepta_sororitas",
        class: "other",
        name: "Zephyrim Squad",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 3,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            adepta_sororitas_weapons.power_weapon_4,
        ],
        rangedWeapons: [
            adepta_sororitas_weapons.plasma_pistol_supercharge_2,
            adepta_sororitas_weapons.plasma_pistol_standard_2,
        ],
        weapon_options: {
            slot1: [
                {...adepta_sororitas_weapons.plasma_pistol_supercharge_2, selected: true},
            ],
            slot2: [
                {...adepta_sororitas_weapons.plasma_pistol_standard_2, selected: true},
            ],
            slot3: [
                {...adepta_sororitas_weapons.power_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Sacred Banner", desc: "You can re-roll Advance and Charge rolls made for the bearer’s unit." },
            { name: "Embodied Prophecy", desc: "Each time this unit is selected to fight, select one of the following abilities to apply to melee weapons equipped by models in this unit until the end of the phase:\n- Sustained Hits 1\n- Lethal Hits\n\n\nIf this unit made a Charge move this turn, until the end of the phase, select both abilities above to apply to melee weapons equipped by models in this unit instead." },
            { name: "Invulnerable Save", desc: "Models in this unit have an Invulnerable save of 5+." },
        ],
        keywords: ["Infantry","Fly","Grenades","Imperium","Zephyrim Squad","Faction: Adepta Sororitas","Jump Pack"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
]

export default adepta_sororitas_army
