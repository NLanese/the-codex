// AUTO-GENERATED units for Imperial Knights (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import imperial_knights_weapons from "../weapons/imperial_knights"

const imperial_knights_army = [
    {
        army: "imperial_knights",
        class: "other",
        name: "Acastus Knight Asterius",
        pts: 765,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 13,
            saving: 2,
            wounds: 30,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.titanic_feet,
        ],
        rangedWeapons: [
            imperial_knights_weapons.twin_conversion_beam_cannon,
            imperial_knights_weapons.asterius_volkite_culverin,
            imperial_knights_weapons.karacnos_mortar_battery,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.twin_conversion_beam_cannon, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.asterius_volkite_culverin, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.karacnos_mortar_battery, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.titanic_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Sunderer of Fortresses", desc: "Each time this model makes an attack that targets a VEHICLE, improve the Strength and Damage characteristics of that attack by 1. If that attack targets a FORTIFICATION, improve the Strength and Damage characteristics of that attack by 2 instead." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Knight Asterius","Acastus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "other",
        name: "Acastus Knight Porphyrion",
        pts: 700,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 13,
            saving: 2,
            wounds: 30,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.titanic_feet,
        ],
        rangedWeapons: [
            imperial_knights_weapons.twin_magna_lascannon,
            imperial_knights_weapons.acastus_autocannon,
            imperial_knights_weapons.lascannon,
            imperial_knights_weapons.acastus_ironstorm_missile_pod,
            imperial_knights_weapons.helios_defence_missiles,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.twin_magna_lascannon, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.acastus_autocannon, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.lascannon, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.acastus_ironstorm_missile_pod, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.helios_defence_missiles, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.titanic_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Bastion of Firepower", desc: "Each time this model Remains Stationary, until the end of the turn, ranged weapons equipped by this model have the [LETHAL HITS] ability." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Acastus","Knight Porphyrion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "other",
        name: "Armiger Helverin",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 6,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.armoured_feet,
        ],
        rangedWeapons: [
            imperial_knights_weapons.armiger_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.armiger_autocannon, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.armoured_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Suppression Protocols", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding **Monsters** and **Vehicles**) hit by one or more of those attacks made with an Armiger autocannon. Until the start of your next turn, that enemy unit is suppressed. While that unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Faction: Imperial Knights","Helverin","Armiger"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "other",
        name: "Armiger Moirax",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 6,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.siege_claw,
            imperial_knights_weapons.armoured_feet,
        ],
        rangedWeapons: [
            imperial_knights_weapons.volkite_veuglaire,
            imperial_knights_weapons.graviton_pulsar,
            imperial_knights_weapons.lightning_lock,
            imperial_knights_weapons.conversion_beam_cannon,
            imperial_knights_weapons.rad_cleanser,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.volkite_veuglaire, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.graviton_pulsar, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.lightning_lock, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.conversion_beam_cannon, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.rad_cleanser, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.siege_claw, selected: true},
            ],
            slot7: [
                {...imperial_knights_weapons.armoured_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Protection Protocols", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Faction: Imperial Knights","Armiger","Moirax"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "other",
        name: "Armiger Warglaive",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 6,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.reaper_chain_cleaver_strike,
            imperial_knights_weapons.reaper_chain_cleaver_sweep,
        ],
        rangedWeapons: [
            imperial_knights_weapons.thermal_spear,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.thermal_spear, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.reaper_chain_cleaver_strike, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.reaper_chain_cleaver_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Impetuous Glory", desc: "Each time this model makes a charge move, until the end of the turn, add 1 to the Attacks characteristic of this model's reaper chain-cleaver - strike profile, and add 2 to the Attacks characteristic of this model's reaper chain-cleaver - sweep profile." },
        ],
        keywords: ["Vehicle","Walker","Imperium","Faction: Imperial Knights","Warglaive","Armiger"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Canis Rex",
        pts: 415,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 3,
            leader: 5,
            control: 1,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.freedoms_hand_strike,
            imperial_knights_weapons.freedoms_hand_sweep,
            imperial_knights_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            imperial_knights_weapons.las_impulsor_high_intensity,
            imperial_knights_weapons.las_impulsor_low_intensity,
            imperial_knights_weapons.questoris_multi_laser,
            imperial_knights_weapons.hekhturs_pistol,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.las_impulsor_high_intensity, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.las_impulsor_low_intensity, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.questoris_multi_laser, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.hekhturs_pistol, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.freedoms_hand_strike, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.freedoms_hand_sweep, selected: true},
            ],
            slot7: [
                {...imperial_knights_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Chainbreaker", desc: "Once per battle, at the start of any phase, you can select one friendly **Imperium** unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." },
            { name: "Legendary Freeblade", desc: "Once per turn, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Using Sir Hekhtur", desc: "If your Canis Rex model is destroyed, this model is treated as a model disembarking from a destroyed **Transport** and must perform an Emergency Disembarkation. Sir Hekhtur cannot be selected as the target of any of your Stratagems other than Core Stratagems. Your Canis Rex unit is not considered to be destroyed until Sir Hekhtur is also destroyed." },
        ],
        keywords: ["Epic Hero","Character","Imperium","Faction: Imperial Knights"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Cerastus Knight Acheron",
        pts: 395,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 3,
            wounds: 28,
            leader: 6,
            control: 10,
            invuln: 5
        },
        meleeWeapons: [
            imperial_knights_weapons.reaper_chainfist_strike,
            imperial_knights_weapons.reaper_chainfist_sweep,
        ],
        rangedWeapons: [
            imperial_knights_weapons.twin_heavy_bolter,
            imperial_knights_weapons.acheron_flame_cannon,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.acheron_flame_cannon, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.reaper_chainfist_strike, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.reaper_chainfist_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Searing Flames", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with an Acheron flame cannon. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
            { name: "Cerastus Knight Acheron", desc: "This model has a 5+ invulnerable save against ranged attacks only." },
            { name: "Acheron’s Duty (Bondsman)", desc: "While a model is affected by this ability, at the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test, subtracting 1 from the result when they do." },
        ],
        keywords: ["Character","Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Cerastus","Knight Acheron"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Cerastus Knight Atrapos",
        pts: 405,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 3,
            wounds: 28,
            leader: 6,
            control: 10,
            invuln: 5
        },
        meleeWeapons: [
            imperial_knights_weapons.atrapos_lascutter_high_intensity_melee,
            imperial_knights_weapons.atrapos_lascutter_low_intensity_melee,
        ],
        rangedWeapons: [
            imperial_knights_weapons.atrapos_lascutter_high_intensity_ranged,
            imperial_knights_weapons.atrapos_lascutter_low_intensity_ranged,
            imperial_knights_weapons.graviton_singularity_cannon_singularity,
            imperial_knights_weapons.graviton_singularity_cannon_contained,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.atrapos_lascutter_high_intensity_ranged, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.atrapos_lascutter_low_intensity_ranged, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.graviton_singularity_cannon_singularity, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.graviton_singularity_cannon_contained, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.atrapos_lascutter_high_intensity_melee, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.atrapos_lascutter_low_intensity_melee, selected: true},
            ],
        },
        abilities: [
            { name: "Macro-extinction Protocols", desc: "Each time this model makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the Hit roll. If that target is TITANIC or TOWERING, add 1 to the Wound roll as well." },
            { name: "Invulnerable Save (5+)", desc: "This model has a 5+ invulnerable save." },
            { name: "Atrapos’ Duty (Bondsman)", desc: "While a model is affected by this ability, each time that model makes an attack that targets a TITANIC or TOWERING model, you can re-roll the Hit roll and you can re-roll the Wound roll." },
        ],
        keywords: ["Character","Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Cerastus","Knight Atrapos"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Cerastus Knight Castigator",
        pts: 395,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 3,
            wounds: 28,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.tempest_warblade_strike,
            imperial_knights_weapons.tempest_warblade_sweep,
        ],
        rangedWeapons: [
            imperial_knights_weapons.castigator_bolt_cannon,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.castigator_bolt_cannon, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.tempest_warblade_strike, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.tempest_warblade_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Storm of Bolts", desc: "In your Shooting phase, after this model has shot, select one unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks. Until the start of your next turn, while this model is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Castigator’s Duty (Bondsman)", desc: "While a model is affected by this ability, its ranged weapons have the [SUSTAINED HITS 1] ability and the Armour Penetration characteristic of its ranged weapons is improved by 1." },
        ],
        keywords: ["Character","Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Cerastus","Knight Castigator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Cerastus Knight Lancer",
        pts: 395,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 11,
            saving: 3,
            wounds: 28,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            imperial_knights_weapons.cerastus_shock_lance_strike,
            imperial_knights_weapons.cerastus_shock_lance_sweep,
        ],
        rangedWeapons: [
            imperial_knights_weapons.cerastus_shock_lance,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.cerastus_shock_lance, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.cerastus_shock_lance_strike, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.cerastus_shock_lance_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Shock Charge", desc: "You can target this model with the Tank Shock Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Lancer’s Duty (Bondsman)", desc: "While a model is affected by this ability, it is eligible to declare a charge in a turn in which it Advanced." },
        ],
        keywords: ["Character","Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Knight Lancer","Cerastus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Castellan",
        pts: 410,
        units: 2,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 12,
            saving: 3,
            wounds: 28,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.titanic_feet_2,
        ],
        rangedWeapons: [
            imperial_knights_weapons.plasma_decimator_standard,
            imperial_knights_weapons.plasma_decimator_supercharge,
            imperial_knights_weapons.volcano_lance,
            imperial_knights_weapons.twin_meltagun,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.plasma_decimator_standard, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.plasma_decimator_supercharge, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.volcano_lance, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.twin_meltagun, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.titanic_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Titan Hunter", desc: "Each time a ranged attack made by this model is allocated to a **Monster** or **Vehicle** model, you can re-roll the Damage roll." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Castellan","Dominus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Crusader",
        pts: 385,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.titanic_feet_2,
        ],
        rangedWeapons: [
            imperial_knights_weapons.avenger_gatling_cannon,
            imperial_knights_weapons.heavy_flamer,
            imperial_knights_weapons.questoris_heavy_stubber,
            imperial_knights_weapons.rapid_fire_battle_cannon,
            imperial_knights_weapons.thermal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.avenger_gatling_cannon, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.heavy_flamer, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.questoris_heavy_stubber, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.rapid_fire_battle_cannon, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.thermal_cannon, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.titanic_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Punishing Salvoes", desc: "In your Movement phase, if this model Remains Stationary, until the end of the turn, ranged weapons equipped by this model have the **[SUSTAINED HITS 1]** ability." },
            { name: "Crusader's Duty (Bondsman)", desc: "While a model is affected by this ability, each time that model makes a ranged attack, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Crusader","Questoris"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Defender",
        pts: 415,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (4+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.titanic_feet_2,
        ],
        rangedWeapons: [
            imperial_knights_weapons.twin_incendine_combustor,
            imperial_knights_weapons.conversion_beam_obliterator,
            imperial_knights_weapons.plasma_executor_standard,
            imperial_knights_weapons.plasma_executor_supercharge,
            imperial_knights_weapons.phosphor_blaster,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.twin_incendine_combustor, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.conversion_beam_obliterator, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.plasma_executor_standard, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.plasma_executor_supercharge, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.phosphor_blaster, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.titanic_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Selfless Protector", desc: "Each time a ranged attack is allocated to an **Imperial Knights** model from your army, if that model is not fully visible to every model in the attacking unit because of this Knight Defender model, that model has the Benefit of Cover and a 4+ invulnerable save against that attack." },
            { name: "Warden's Duty (Bondsman)", desc: "While a model is affected by this ability, each time an attack is allocated to that model, subtract 1 from the Damage characteristic of that attack." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Questoris","Knight Defender"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Destrier",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 3,
            wounds: 18,
            leader: 6,
            control: 8,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.titanic_feet_3,
            imperial_knights_weapons.bellatus_reaper_chainsword_strike,
            imperial_knights_weapons.bellatus_reaper_chainsword_sweep,
            imperial_knights_weapons.thundershock_spear_strike,
            imperial_knights_weapons.thundershock_spear_sweep,
        ],
        rangedWeapons: [
            imperial_knights_weapons.questoris_heavy_stubber_2,
            imperial_knights_weapons.chastiser_gatling_cannon,
            imperial_knights_weapons.frag_bombard,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.questoris_heavy_stubber_2, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.chastiser_gatling_cannon, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.frag_bombard, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.titanic_feet_3, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.bellatus_reaper_chainsword_strike, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.bellatus_reaper_chainsword_sweep, selected: true},
            ],
            slot7: [
                {...imperial_knights_weapons.thundershock_spear_strike, selected: true},
            ],
            slot8: [
                {...imperial_knights_weapons.thundershock_spear_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, subtract 4 from this model's Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Thundercharge", desc: "If this model is equipped with a thundershock spear and a bellatus reaper chainsword, add 2 to the Attacks characteristic of melee weapons equipped by this model." },
            { name: "Ram Jets", desc: "Each time this unit is selected to make a Normal or Advance move, until the end of the phase, add D3\" to the Move characteristic of this model." },
            { name: "Saturation Fire", desc: "Each time this model makes a ranged attack that targets a unit within range of one or more objective markers, that attack has the **[IGNORES COVER]** ability." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Bellatus","Knight Destrier"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Errant",
        pts: 355,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            imperial_knights_weapons.thermal_cannon,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.thermal_cannon, selected: true},
            ],
        },
        abilities: [
            { name: "Aggressive Assault", desc: "Each time this model makes a ranged attack that targets the closest eligible target, add 1 to the Hit roll." },
            { name: "Errant's Duty (Bondsman)", desc: "While a model is affected by this ability, you can re-roll Advance rolls made for that model and ranged weapons equipped by that model have the **[ASSAULT]** ability." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Errant","Questoris"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Gallant",
        pts: 355,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.reaper_chainsword_sweep,
            imperial_knights_weapons.reaper_chainsword_strike,
            imperial_knights_weapons.thunderstrike_gauntlet_strike,
            imperial_knights_weapons.thunderstrike_gauntlet_sweep,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.reaper_chainsword_sweep, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.reaper_chainsword_strike, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.thunderstrike_gauntlet_strike, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.thunderstrike_gauntlet_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Martial Pride", desc: "Each time this unit Consolidates, models in it can move an additional 3\" provided your unit can end that move within Engagement Range of one or more enemy units." },
            { name: "Gallant's Duty (Bondsman)", desc: "While a model is affected by this ability, you can re-roll Charge rolls made for that model and each time that model makes a melee attack, you can re-roll the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Gallant","Questoris"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Paladin",
        pts: 375,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            imperial_knights_weapons.questoris_heavy_stubber,
            imperial_knights_weapons.rapid_fire_battle_cannon,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.questoris_heavy_stubber, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.rapid_fire_battle_cannon, selected: true},
            ],
        },
        abilities: [
            { name: "Seasoned Noble", desc: "Each time this model makes a ranged attack that targets the closest eligible target, improve the Armour Penetration characteristic of that attack by 1." },
            { name: "Paladin’s Duty (Bondsman)", desc: "While a model is affected by this ability, weapons equipped by that model have the **[LETHAL HITS]** ability, and melee weapons equipped by that model have the **[LANCE]** ability." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Paladin","Questoris"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Preceptor",
        pts: 365,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            imperial_knights_weapons.las_impulsor_high_intensity_2,
            imperial_knights_weapons.las_impulsor_low_intensity_2,
            imperial_knights_weapons.preceptor_multi_laser,
            imperial_knights_weapons.questoris_heavy_stubber,
            imperial_knights_weapons.meltagun,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.las_impulsor_high_intensity_2, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.las_impulsor_low_intensity_2, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.preceptor_multi_laser, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.questoris_heavy_stubber, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.meltagun, selected: true},
            ],
        },
        abilities: [
            { name: "Exemplar of the Code", desc: "At the start of the battle, select one unit from your opponent’s army to be this model's quarry. Each time this model makes an attack that targets its quarry, you can re-roll the Wound roll. Each time this model's quarry is destroyed, you can select a new unit from your opponent's army to be its quarry." },
            { name: "Mentor (Bondsman)", desc: "Each time a model affected by this ability makes an attack that targets this model's quarry, you can re-roll the Wound roll." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Preceptor","Questoris"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Valiant",
        pts: 410,
        units: 2,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 12,
            saving: 3,
            wounds: 28,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [
            imperial_knights_weapons.titanic_feet_2,
        ],
        rangedWeapons: [
            imperial_knights_weapons.conflagration_cannon,
            imperial_knights_weapons.thundercoil_harpoon,
            imperial_knights_weapons.twin_meltagun,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.conflagration_cannon, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.thundercoil_harpoon, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.twin_meltagun, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.titanic_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Thundershock", desc: "In your Shooting phase, each time you select a target for this model's thundercoil harpoon, roll one D6 for the target unit and one D6 for each other enemy unit within 6\" of the target unit. On a 4+, the unit being rolled for is struck by arcing energies; after resolving all of this model's attacks against the target unit, each unit struck by arcing energies suffers D3 mortal wounds." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Valiant","Dominus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Knight Warden",
        pts: 375,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+*)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            imperial_knights_weapons.avenger_gatling_cannon,
            imperial_knights_weapons.heavy_flamer,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.avenger_gatling_cannon, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.heavy_flamer, selected: true},
            ],
        },
        abilities: [
            { name: "Thin Their Ranks", desc: "Each time this model makes a ranged attack that targets an enemy unit (excluding **Monsters** and **Vehicles**), that attack has the **[DEVASTATING WOUNDS]** ability." },
            { name: "Warden's Duty (Bondsman)", desc: "While a model is affected by this ability, weapons equipped by that model have the **[SUSTAINED HITS 1]** ability, and ranged weapons equipped by that model have the **[IGNORES COVER]** ability." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Character","Imperium","Faction: Imperial Knights","Knight Warden","Questoris"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Questoris Knight Magaera",
        pts: 385,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            imperial_knights_weapons.reaper_chainsword_strike_2,
            imperial_knights_weapons.reaper_chainsword_sweep_2,
            imperial_knights_weapons.hekaton_siege_claw_strike,
            imperial_knights_weapons.hekaton_siege_claw_sweep,
        ],
        rangedWeapons: [
            imperial_knights_weapons.phased_plasma_fusil,
            imperial_knights_weapons.lightning_cannon,
            imperial_knights_weapons.twin_rad_cleanser,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.phased_plasma_fusil, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.lightning_cannon, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.twin_rad_cleanser, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.reaper_chainsword_strike_2, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.reaper_chainsword_sweep_2, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.hekaton_siege_claw_strike, selected: true},
            ],
            slot7: [
                {...imperial_knights_weapons.hekaton_siege_claw_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Repair Auto-simulacra", desc: "At the end of your Command phase, this model regains up to D3 lost wounds." },
            { name: "Magaera’s Duty (Bondsman)", desc: "While a model is affected by this ability, each time that model makes a ranged attack that targets the closest eligible target, improve the Strength and Armour Penetration characteristics of that attack by 1." },
        ],
        keywords: ["Character","Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Questoris","Knight Magaera"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "imperial_knights",
        class: "characters",
        name: "Questoris Knight Styrix",
        pts: 385,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 3,
            wounds: 26,
            leader: 6,
            control: 10,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            imperial_knights_weapons.reaper_chainsword_strike_2,
            imperial_knights_weapons.reaper_chainsword_sweep_2,
            imperial_knights_weapons.hekaton_siege_claw_strike,
            imperial_knights_weapons.hekaton_siege_claw_sweep,
        ],
        rangedWeapons: [
            imperial_knights_weapons.graviton_crusher,
            imperial_knights_weapons.volkite_chierovile,
            imperial_knights_weapons.twin_rad_cleanser,
        ],
        weapon_options: {
            slot1: [
                {...imperial_knights_weapons.graviton_crusher, selected: true},
            ],
            slot2: [
                {...imperial_knights_weapons.volkite_chierovile, selected: true},
            ],
            slot3: [
                {...imperial_knights_weapons.twin_rad_cleanser, selected: true},
            ],
            slot4: [
                {...imperial_knights_weapons.reaper_chainsword_strike_2, selected: true},
            ],
            slot5: [
                {...imperial_knights_weapons.reaper_chainsword_sweep_2, selected: true},
            ],
            slot6: [
                {...imperial_knights_weapons.hekaton_siege_claw_strike, selected: true},
            ],
            slot7: [
                {...imperial_knights_weapons.hekaton_siege_claw_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Grav-pinned", desc: "In your Shooting phase, after this model has shot, if an enemy INFANTRY unit was hit by one or more of those attacks made with a graviton crusher, until the end of your opponent’s next turn, that enemy unit is grav-pinned. While a unit is grav-pinned, subtract 2 from that unit’s Move characteristic and subtract 2 from Charge rolls made for that unit." },
            { name: "Styrix’s Duty (Bondsman)", desc: "While a model is affected by this ability, each time that model is selected to shoot or fight, after it has resolved all of its attacks, select one enemy unit hit by one or more of those attacks; that unit must take a Battle-shock test, subtracting one from the test when doing so." },
        ],
        keywords: ["Character","Vehicle","Walker","Titanic","Towering","Imperium","Faction: Imperial Knights","Questoris","Knight Styrix"],
        pointOptions: [],
        transport: null,
    },
]

export default imperial_knights_army
