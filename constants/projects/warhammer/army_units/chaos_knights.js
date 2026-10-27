// AUTO-GENERATED units for Chaos Knights (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import chaos_knights_weapons from "../weapons/chaos_knights"

const chaos_knights_army = [
    {
        army: "chaos_knights",
        class: "other",
        name: "Chaos Acastus Knight Asterius",
        pts: 765,
        units: 2,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.titanic_feet,
        ],
        rangedWeapons: [
            chaos_knights_weapons.asterius_volkite_culverin,
            chaos_knights_weapons.karacnos_mortar_battery,
            chaos_knights_weapons.twin_conversion_beam_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.asterius_volkite_culverin, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.karacnos_mortar_battery, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.twin_conversion_beam_cannon, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.titanic_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Sunderer of Fortresses", desc: "Each time this model makes an attack that targets a **Vehicle**, improve the Strength and Damage characteristics of that attack by 1 (if that attack targets a **Fortification**, improve the Strength and Damage characteristics of that attack by 2 instead)." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Chaos","Acastus","Knight Asterius"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "other",
        name: "Chaos Acastus Knight Porphyrion",
        pts: 700,
        units: 2,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.titanic_feet,
        ],
        rangedWeapons: [
            chaos_knights_weapons.twin_magna_lascannon,
            chaos_knights_weapons.acastus_ironstorm_missile_pod,
            chaos_knights_weapons.helios_defence_missiles,
            chaos_knights_weapons.acastus_autocannon,
            chaos_knights_weapons.lascannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.twin_magna_lascannon, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.acastus_ironstorm_missile_pod, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.helios_defence_missiles, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.acastus_autocannon, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.lascannon, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.titanic_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Bastion of Firepower", desc: "Each time this model Remains Stationary, until the end of the turn, ranged weapons equipped by this model have the [LETHAL HITS] ability." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Chaos","Acastus","Knight Porphyrion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Chaos Cerastus Knight Acheron",
        pts: 385,
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
            chaos_knights_weapons.reaper_chainfist_strike,
            chaos_knights_weapons.reaper_chainfist_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.acheron_flame_cannon,
            chaos_knights_weapons.twin_heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.acheron_flame_cannon, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.reaper_chainfist_strike, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.reaper_chainfist_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Searing Flames", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with an Acheron flame cannon. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
            { name: "Unrestrained Terror (Aura)", desc: "While a friendly **War Dog** model is within 6\" of this model, it is affected by this ability. At the start of the Fight phase, each enemy unit within Engagement Range of one or more **War Dog** units affected by this ability must take a Battle-shock test." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Character","Titanic","Towering","Cerastus","Knight Acheron","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Chaos Cerastus Knight Atrapos",
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
            chaos_knights_weapons.atrapos_lascutter_low_intensity,
            chaos_knights_weapons.atrapos_lascutter_high_intensity,
        ],
        rangedWeapons: [
            chaos_knights_weapons.atrapos_lascutter_low_intensity_2,
            chaos_knights_weapons.atrapos_lascutter_high_intensity_2,
            chaos_knights_weapons.graviton_singularity_cannon_contained,
            chaos_knights_weapons.graviton_singularity_cannon_singularity,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.atrapos_lascutter_low_intensity_2, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.atrapos_lascutter_high_intensity_2, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.graviton_singularity_cannon_contained, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.graviton_singularity_cannon_singularity, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.atrapos_lascutter_low_intensity, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.atrapos_lascutter_high_intensity, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Macro-extinction Protocols", desc: "Each time this model makes an attack that targets a **Monster** or **Vehicle** unit, add 1 to the Hit roll. If that target is **Titanic** or **Towering**, add 1 to the Wound roll as well." },
            { name: "Consumed with Hunger (Aura)", desc: "While a friendly **War Dog** model is within 6\" of this model, each time that **War Dog** model makes an attack that targets a **Titanic** or **Towering** unit, you can re-roll the Hit roll." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Character","Titanic","Towering","Chaos","Cerastus","Knight Atrapos","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Chaos Cerastus Knight Castigator",
        pts: 385,
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
            chaos_knights_weapons.tempest_warblade_strike,
            chaos_knights_weapons.tempest_warblade_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.castigator_bolt_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.castigator_bolt_cannon, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.tempest_warblade_strike, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.tempest_warblade_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Storm of Bolts", desc: "In your Shooting phase, after this model has shot, select one unit (excluding **Monsters** and **Vehicles**) hit by one or more of those attacks. Until the start of your next turn, while this model is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Offerings for the Dark Gods (Aura)", desc: "While a friendly **War Dog** model is within 6\" of this model, ranged weapons equipped by that **War Dog** model have the [SUSTAINED HITS 1] ability." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Character","Titanic","Towering","Chaos","Cerastus","Knight Castigator","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Chaos Cerastus Knight Lancer",
        pts: 385,
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
            invuln: 4
        },
        meleeWeapons: [
            chaos_knights_weapons.cerastus_shock_lance_strike,
            chaos_knights_weapons.cerastus_shock_lance_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.cerastus_shock_lance,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.cerastus_shock_lance, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.cerastus_shock_lance_strike, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.cerastus_shock_lance_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 4+ invulnerable save." },
            { name: "Shock Charge", desc: "You can target this model with the Tank Shock Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Dark Fervour (Aura)", desc: "While a friendly **War Dog** model is within 6\" of this model, ranged weapons equipped by that **War Dog** model have the [ASSAULT] ability." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Character","Titanic","Towering","Chaos","Cerastus","Knight Lancer","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Chaos Questoris Knight Magaera",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.hekaton_siege_claw_strike,
            chaos_knights_weapons.hekaton_siege_claw_sweep,
            chaos_knights_weapons.reaper_chainsword_strike,
            chaos_knights_weapons.reaper_chainsword_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.lightning_cannon,
            chaos_knights_weapons.phased_plasma_fusil,
            chaos_knights_weapons.twin_rad_cleanser,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.lightning_cannon, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.phased_plasma_fusil, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.twin_rad_cleanser, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.hekaton_siege_claw_strike, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.hekaton_siege_claw_sweep, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.reaper_chainsword_strike, selected: true},
            ],
            slot7: [
                {...chaos_knights_weapons.reaper_chainsword_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Repair Auto-simulacra", desc: "At the end of your Command phase, this model regains up to D3 lost wounds." },
        ],
        keywords: ["Vehicle","Walker","Character","Titanic","Towering","Chaos","Abhorrent","Knight Magaera","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Chaos Questoris Knight Styrix",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.hekaton_siege_claw_strike,
            chaos_knights_weapons.hekaton_siege_claw_sweep,
            chaos_knights_weapons.reaper_chainsword_strike,
            chaos_knights_weapons.reaper_chainsword_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.graviton_crusher,
            chaos_knights_weapons.volkite_chierovile,
            chaos_knights_weapons.twin_rad_cleanser,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.graviton_crusher, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.volkite_chierovile, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.twin_rad_cleanser, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.hekaton_siege_claw_strike, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.hekaton_siege_claw_sweep, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.reaper_chainsword_strike, selected: true},
            ],
            slot7: [
                {...chaos_knights_weapons.reaper_chainsword_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Grav-pinned", desc: "In your Shooting phase, after this model has shot, if an enemy **Infantry** unit was hit by one or more of those attacks made with a graviton crusher, until the end of your opponent’s next turn, that enemy unit is grav-pinned. While a unit is grav-pinned, subtract 2 from that unit’s Move characteristic and subtract 2 from Advance and Charge rolls made for that unit." },
            { name: "Preysight (Aura)", desc: "While a friendly **War Dog** model is within 6\" of this model, ranged weapons equipped by that **War Dog** model have the [IGNORES COVER] ability." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Character","Titanic","Towering","Chaos","Abhorrent","Knight Styrix","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Knight Abominant",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.balemace,
            chaos_knights_weapons.electroscourge,
        ],
        rangedWeapons: [
            chaos_knights_weapons.volkite_combustor,
            chaos_knights_weapons.diabolus_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.volkite_combustor, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.balemace, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.electroscourge, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Vortex Terrors (Psychic)", desc: "At the start of your Shooting phase, select one enemy unit within 24\" of and visible to this model. That enemy unit must take a Battle-shock test." },
            { name: "Warp Storms (Psychic)", desc: "At the end of your Movement phase, roll one D6 for each enemy unit within 9\" of one or more models with this ability: on a 3+, that enemy unit suffers D3 mortal wounds." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Abhorrent","Character","Chaos","Knight Abominant","Psyker","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Knight Desecrator",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.reaper_chainsword_strike,
            chaos_knights_weapons.reaper_chainsword_sweep,
            chaos_knights_weapons.warpstrike_claw_strike,
            chaos_knights_weapons.warpstrike_claw_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.desecrator_laser_destructor,
            chaos_knights_weapons.diabolus_heavy_stubber_2,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.desecrator_laser_destructor, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.diabolus_heavy_stubber_2, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.reaper_chainsword_strike, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.reaper_chainsword_sweep, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.warpstrike_claw_strike, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.warpstrike_claw_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Taskmaster (Aura)", desc: "While a friendly **War Dog** model is within 9\" of this model, each time that **War Dog** model makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Obsessive Ruthlessness", desc: "Each time this model makes a ranged attack that targets a **Monster** or **Vehicle** unit, that attack has the [DEVASTATING WOUNDS] ability." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Abhorrent","Character","Chaos","Knight Desecrator","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Knight Despoiler",
        pts: 390,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.titanic_feet_2,
            chaos_knights_weapons.reaper_chainsword_strike,
            chaos_knights_weapons.reaper_chainsword_sweep,
            chaos_knights_weapons.warpstrike_claw_strike,
            chaos_knights_weapons.warpstrike_claw_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.havoc_missile_pod,
            chaos_knights_weapons.ruinspear_rocket_pod,
            chaos_knights_weapons.hellstorm_autocannons,
            chaos_knights_weapons.despoiler_gatling_cannon,
            chaos_knights_weapons.heavy_darkflamer,
            chaos_knights_weapons.despoiler_battle_cannon,
            chaos_knights_weapons.diabolus_heavy_stubber,
            chaos_knights_weapons.daemonbreath_thermal_cannon,
            chaos_knights_weapons.daemonbreath_meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.havoc_missile_pod, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.ruinspear_rocket_pod, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.hellstorm_autocannons, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.despoiler_gatling_cannon, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.heavy_darkflamer, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.despoiler_battle_cannon, selected: true},
            ],
            slot7: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot8: [
                {...chaos_knights_weapons.daemonbreath_thermal_cannon, selected: true},
            ],
            slot9: [
                {...chaos_knights_weapons.daemonbreath_meltagun, selected: true},
            ],
            slot10: [
                {...chaos_knights_weapons.titanic_feet_2, selected: true},
            ],
            slot11: [
                {...chaos_knights_weapons.reaper_chainsword_strike, selected: true},
            ],
            slot12: [
                {...chaos_knights_weapons.reaper_chainsword_sweep, selected: true},
            ],
            slot13: [
                {...chaos_knights_weapons.warpstrike_claw_strike, selected: true},
            ],
            slot14: [
                {...chaos_knights_weapons.warpstrike_claw_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Dread Dominion (Aura)", desc: "While a friendly **War Dog** model is within 9\" of this model, improve that **War Dog** model's Leadership  and Objective Control characteristics by 1." },
            { name: "Seething Hatred", desc: "Each time this model is selected to shoot or fight, you can re-roll one Hit roll or you can re-roll one Wound roll when resolving those attacks." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Abhorrent","Character","Chaos","Knight Despoiler","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Knight Rampager",
        pts: 365,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.reaper_chainsword_strike_2,
            chaos_knights_weapons.reaper_chainsword_sweep_2,
            chaos_knights_weapons.warpstrike_claw_strike_2,
            chaos_knights_weapons.warpstrike_claw_sweep_2,
        ],
        rangedWeapons: [
            chaos_knights_weapons.diabolus_heavy_stubber,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.reaper_chainsword_strike_2, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.reaper_chainsword_sweep_2, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.warpstrike_claw_strike_2, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.warpstrike_claw_sweep_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Frenzied Rampage (Aura)", desc: "While a friendly **War Dog** model is within 9\" of this model, each time that **War Dog** model makes a melee attack, re-roll a Hit roll of 1." },
            { name: "Bloodlust", desc: "Each time this model makes a Charge move, until the end of the turn, its melee weapons have the [Devastating Wounds] ability." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Abhorrent","Character","Chaos","Knight Rampager","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Knight Ruinator",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.fellbore_strike,
            chaos_knights_weapons.fellbore_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.darkflame_lance,
            chaos_knights_weapons.terrorpulse_missiles,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.darkflame_lance, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.terrorpulse_missiles, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.fellbore_strike, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.fellbore_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Methodical Destruction", desc: "At the start of the first battle round, select one unit from your opponent's army to be this model's victim. Each time this model makes an attack that targets its victim, you can re-roll the Wound roll. Each time this model's victim is destroyed, select one new enemy unit to be this model's victim." },
            { name: "Close-range Killers (Aura)", desc: "While a friendly **War Dog** model is within 9\" of this model, each time that **War Dog** model makes an attack that targets the closest enemy unit, improve the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Abhorrent","Character","Chaos","Knight Ruinator","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "characters",
        name: "Knight Tyrant",
        pts: 410,
        units: 1,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.titanic_feet_2,
        ],
        rangedWeapons: [
            chaos_knights_weapons.twin_daemonbreath_meltagun,
            chaos_knights_weapons.brimstone_volcano_lance,
            chaos_knights_weapons.ectoplasma_decimator_standard,
            chaos_knights_weapons.ectoplasma_decimator_supercharge,
            chaos_knights_weapons.darkflame_cannon,
            chaos_knights_weapons.warpshock_harpoon,
            chaos_knights_weapons.gheiststrike_missile_launcher,
            chaos_knights_weapons.twin_desecrator_cannon,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.twin_daemonbreath_meltagun, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.brimstone_volcano_lance, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.ectoplasma_decimator_standard, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.ectoplasma_decimator_supercharge, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.darkflame_cannon, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.warpshock_harpoon, selected: true},
            ],
            slot7: [
                {...chaos_knights_weapons.gheiststrike_missile_launcher, selected: true},
            ],
            slot8: [
                {...chaos_knights_weapons.twin_desecrator_cannon, selected: true},
            ],
            slot9: [
                {...chaos_knights_weapons.titanic_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Infernal Aegis (Aura)", desc: "While a friendly **War Dog** model is within 6\" of this model, that **War Dog** model has the Benefit of Cover." },
            { name: "Bastion of Corruption", desc: "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this model." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Titanic","Towering","Character","Chaos","Knight Tyrant","Knight Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "other",
        name: "War Dog Brigand",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.armoured_feet,
        ],
        rangedWeapons: [
            chaos_knights_weapons.avenger_chaincannon,
            chaos_knights_weapons.daemonbreath_spear,
            chaos_knights_weapons.diabolus_heavy_stubber,
            chaos_knights_weapons.havoc_multi_launcher,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.avenger_chaincannon, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.daemonbreath_spear, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.havoc_multi_launcher, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.armoured_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Brigand", desc: "Ranged weapons equipped by this model have the [Ignores Cover] ability while targeting enemy units in range of one or more objective markers." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Chaos","War Dog","Brigand"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "other",
        name: "War Dog Executioner",
        pts: 130,
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.armoured_feet,
        ],
        rangedWeapons: [
            chaos_knights_weapons.war_dog_autocannon,
            chaos_knights_weapons.diabolus_heavy_stubber,
            chaos_knights_weapons.daemonbreath_meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.war_dog_autocannon, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.daemonbreath_meltagun, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.armoured_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Executioner", desc: "Each time this model makes an attack that targets a unit Below Half-strength, add 1 to the Hit roll. Each time an enemy unit is destroyed as the result of this model's attacks, before removing the last model in that unit from the battlefield, each other unit from your opponent's army that is within 3\" of it must take a Battle-shock test." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Chaos","War Dog","Executioner"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "other",
        name: "War Dog Huntsman",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.reaper_chaintalon_strike,
            chaos_knights_weapons.reaper_chaintalon_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.daemonbreath_spear,
            chaos_knights_weapons.diabolus_heavy_stubber,
            chaos_knights_weapons.daemonbreath_meltagun,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.daemonbreath_spear, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.daemonbreath_meltagun, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.reaper_chaintalon_strike, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.reaper_chaintalon_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Huntsman", desc: "Each time this model makes an attack that targets a **Monster** or **Vehicle** unit, you can re-roll the Wound roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Chaos","War Dog","Huntsman"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "other",
        name: "War Dog Karnivore",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 6,
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.reaper_chaintalon,
            chaos_knights_weapons.slaughterclaw,
        ],
        rangedWeapons: [
            chaos_knights_weapons.diabolus_heavy_stubber,
            chaos_knights_weapons.havoc_multi_launcher,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.havoc_multi_launcher, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.reaper_chaintalon, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.slaughterclaw, selected: true},
            ],
        },
        abilities: [
            { name: "Karnivore", desc: "You can re-roll Advance and Charge rolls made for this model." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Chaos","War Dog","Karnivore"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "other",
        name: "War Dog Moirax",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.siege_claw,
            chaos_knights_weapons.armoured_feet,
        ],
        rangedWeapons: [
            chaos_knights_weapons.volkite_veuglaire,
            chaos_knights_weapons.conversion_beam_cannon,
            chaos_knights_weapons.graviton_pulsar,
            chaos_knights_weapons.lightning_lock,
            chaos_knights_weapons.rad_cleanser,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.volkite_veuglaire, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.conversion_beam_cannon, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.graviton_pulsar, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.lightning_lock, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.rad_cleanser, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.siege_claw, selected: true},
            ],
            slot7: [
                {...chaos_knights_weapons.armoured_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
            { name: "Protection Protocols", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Chaos","War Dog","Moirax"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "chaos_knights",
        class: "other",
        name: "War Dog Stalker",
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
            invuln: 5
        },
        meleeWeapons: [
            chaos_knights_weapons.slaughterclaw_2,
            chaos_knights_weapons.reaper_chaintalon_strike,
            chaos_knights_weapons.reaper_chaintalon_sweep,
        ],
        rangedWeapons: [
            chaos_knights_weapons.diabolus_heavy_stubber,
            chaos_knights_weapons.havoc_multi_launcher,
            chaos_knights_weapons.avenger_chaincannon,
            chaos_knights_weapons.daemonbreath_spear,
        ],
        weapon_options: {
            slot1: [
                {...chaos_knights_weapons.diabolus_heavy_stubber, selected: true},
            ],
            slot2: [
                {...chaos_knights_weapons.havoc_multi_launcher, selected: true},
            ],
            slot3: [
                {...chaos_knights_weapons.avenger_chaincannon, selected: true},
            ],
            slot4: [
                {...chaos_knights_weapons.daemonbreath_spear, selected: true},
            ],
            slot5: [
                {...chaos_knights_weapons.slaughterclaw_2, selected: true},
            ],
            slot6: [
                {...chaos_knights_weapons.reaper_chaintalon_strike, selected: true},
            ],
            slot7: [
                {...chaos_knights_weapons.reaper_chaintalon_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Stalker", desc: "Each time this model makes an attack that targets an enemy unit, if there are no other units from your opponent’s army within 6\" of that target, add 1 to the Wound roll." },
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Faction: Chaos Knights","Vehicle","Walker","Chaos","War Dog","Stalker"],
        pointOptions: [],
        transport: null,
    },
]

export default chaos_knights_army
