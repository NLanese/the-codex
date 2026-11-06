// Leagues of Votann (10e) - same layout as the files scripts/warhammer/syncArmies.mjs writes.
// The OpenHammer sync skips this army (it's in HAND_MADE), so this file is kept by hand:
// converted from the BSData wh40k-10e BattleScribe catalogue (github.com/BSData/wh40k-10e),
// with the unit photos below added by hand. Re-running the sync script will not overwrite it.

import votann_weapons from "../weapons/votann"

const votann_army = [
    {
        army: "votann",
        class: "characters",
        name: "Arkanyst Evaluator",
        pts: 65,
        units: 1,
        img: "/assets/project_images/warhammer/units/votann/eval.png",
        leader: false,
        warlord: true,
        legends: false,
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
            votann_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            votann_weapons.transmatter_inverter_half_charge,
            votann_weapons.transmatter_inverter_full_charge,
            votann_weapons.transmatter_inverter_overcharge,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.transmatter_inverter_half_charge, selected: true},
            ],
            slot2: [
                {...votann_weapons.transmatter_inverter_full_charge, selected: true},
            ],
            slot3: [
                {...votann_weapons.transmatter_inverter_overcharge, selected: true},
            ],
            slot4: [
                {...votann_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Science Guild Support", desc: "While this model is within 3\" of one or more other friendly LEAGUES OF VOTANN INFANTRY units (excluding units with the Lone Operative ability), this model has the Lone Operative ability." },
            { name: "Resource Transmutation", desc: "Once per turn, in your Shooting phase, one model with this ability can choose to use it when it is selected to shoot. If it does, you must spend 1YP and, until the end of the phase, ranged weapons equipped by that model have the [SUSTAINED HITS 1] ability and, after that model has shot this phase, if one or more enemy units were destroyed by those attacks, you can gain up to 2YP." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Character","Infantry","Faction: Leagues of Votann","Arkanyst Evaluator"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "characters",
        name: "Berehk Stornbröw",
        pts: 95,
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
            invuln: 5
        },
        meleeWeapons: [
            votann_weapons.kromloks_revenge_graviton_strikes,
            votann_weapons.kromloks_revenge_plasma_sweeps,
            votann_weapons.warforge_gauntlets,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.kromloks_revenge_graviton_strikes, selected: true},
            ],
            slot2: [
                {...votann_weapons.kromloks_revenge_plasma_sweeps, selected: true},
            ],
            slot3: [
                {...votann_weapons.warforge_gauntlets, selected: true},
            ],
        },
        abilities: [
            { name: "Break the Foe", desc: "Melee weapons equipped by models in this unit have the [Sustained Hits 1] ability." },
            { name: "Relentless Avalanche", desc: "You can target this model's unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Leader", desc: "This model can be attached to the following units: CTHONIAN BESERKS" },
        ],
        keywords: ["Epic Hero","Infantry","Character","Cthonian","Berehk Stornbröw","Faction: Leagues of Votann"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "characters",
        name: "Brôkhyr Iron-master",
        pts: 75,
        units: 5,
        img: "/assets/project_images/warhammer/units/votann/iron.png",
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.graviton_hammer,
            votann_weapons.close_combat_weapon,
            votann_weapons.plasma_torch,
            votann_weapons.manipulator_arms,
        ],
        rangedWeapons: [
            votann_weapons.graviton_rifle,
            votann_weapons.autoch_pattern_bolt_pistol,
            votann_weapons.las_beam_cutter,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.graviton_rifle, selected: true},
            ],
            slot2: [
                {...votann_weapons.autoch_pattern_bolt_pistol, selected: true},
            ],
            slot3: [
                {...votann_weapons.las_beam_cutter, selected: true},
            ],
            slot4: [
                {...votann_weapons.graviton_hammer, selected: true},
            ],
            slot5: [
                {...votann_weapons.close_combat_weapon, selected: true},
            ],
            slot6: [
                {...votann_weapons.plasma_torch, selected: true},
            ],
            slot7: [
                {...votann_weapons.manipulator_arms, selected: true},
            ],
        },
        abilities: [
            { name: "Multi-spectral visor", desc: "Each time a model in this unit makes a ranged attack, re-roll a Wound roll of 1." },
            { name: "Brôkhyr Guild Support", desc: "While this unit is within 3\" of one or more friendly LEAGUES OF VOTANN VEHICLE or IRONKIN STEELJACKS units, if this unit is not an attached unit, it has the Lone Operative ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- HEARTHKYN WARRIORS\n- BRÔKHYR THUNDERKYN" },
            { name: "Forgewrought Expertise", desc: "At the end of your Movement phase, this model can repair one friendly LEAGUES OF VOTANN VEHICLE, EXOFRAME or IRONKIN STEELJACKS unit within 3\" of it. One model in that unit regains up to D3 lost wounds, or up to 3 lost wounds if this unit contains an Ironkin Assistant model. Each unit can only be repaired once per turn." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Character","Brôkhyr","Iron-master"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Brôkhyr Thunderkyn",
        pts: 80,
        units: 3,
        img: "/assets/project_images/warhammer/units/votann/brokhyr.png",
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            votann_weapons.bolt_cannon,
            votann_weapons.graviton_blast_cannon,
            votann_weapons.sp_conversion_beamer,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.bolt_cannon, selected: true},
            ],
            slot2: [
                {...votann_weapons.graviton_blast_cannon, selected: true},
            ],
            slot3: [
                {...votann_weapons.sp_conversion_beamer, selected: true},
            ],
            slot4: [
                {...votann_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Breaching Fire", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next Shooting phase, that enemy unit cannot have the Benefit of Cover." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Exoframe","Thunderkyn","Brôkhyr"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "votann",
        class: "characters",
        name: "Buri Aegnirssen",
        pts: 95,
        units: 1,
        img: "/assets/project_images/warhammer/units/votann/buri.png",
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            votann_weapons.bane_strike,
            votann_weapons.bane_sweep,
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_bolt_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...votann_weapons.bane_strike, selected: true},
            ],
            slot3: [
                {...votann_weapons.bane_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Grudge-fuelled Fortitude", desc: "The first time this model is destroyed, at the end of the phase, roll one D6: on a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with its full wounds remaining." },
            { name: "Unhinged Vengeance", desc: "In your opponent's Shooting phase, each time an enemy unit has shot, if this model lost one or more wounds as a result of those attacks, this model can make a Vengeance move. To do so, roll one D6 and add 2 to the result: it moves a number of inches up to this result, but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, it can be moved within Engagement Range of that enemy unit. This model cannot make a Vengeance move while it is Battle-shocked or within Engagement Range of one or more enemy units, and can only make one Vengeance move per phase." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Epic Hero","Infantry","Character","Buri Aegnirssen","Faction: Leagues of Votann"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Cthonian Beserks",
        pts: 100,
        units: 5,
        img: "/assets/project_images/warhammer/units/votann/beserks.png",
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.concussion_maul,
            votann_weapons.heavy_plasma_axe,
            votann_weapons.twin_concussion_gauntlets,
        ],
        rangedWeapons: [
            votann_weapons.mole_grenade_launcher,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.mole_grenade_launcher, selected: true},
            ],
            slot2: [
                {...votann_weapons.concussion_maul, selected: true},
            ],
            slot3: [
                {...votann_weapons.heavy_plasma_axe, selected: true},
            ],
            slot4: [
                {...votann_weapons.twin_concussion_gauntlets, selected: true},
            ],
        },
        abilities: [
            { name: "Cyberstimms", desc: "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6, adding one to the result if units from your army have Fortify Takeover: on a 4+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Subterranean Explosives", desc: "In your Shooting phase, after this unit has shot, select one enemy unit (excluding MONSTERS and VEHICLES) that was hit by one or more of those attacks made with a mole grenade launcher. Until the start of your next Shooting phase, that enemy unit cannot be targeted with the Fire Overwatch Stratagem." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Cthonian","Beserks"],
        pointOptions: [{ models: 10, pts: 200 }],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Cthonian Earthshakers",
        pts: 110,
        units: 2,
        img: "/assets/project_images/warhammer/units/votann/shaker.png",
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 4,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.plasma_picks,
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_bolt_pistol_3,
            votann_weapons.breacher_ordnance,
            votann_weapons.tremor_shells,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_bolt_pistol_3, selected: true},
            ],
            slot2: [
                {...votann_weapons.breacher_ordnance, selected: true},
            ],
            slot3: [
                {...votann_weapons.tremor_shells, selected: true},
            ],
            slot4: [
                {...votann_weapons.plasma_picks, selected: true},
            ],
        },
        abilities: [
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Geomantic Hunters", desc: "Up to twice per battle, in your Shooting phase, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, each time a model in this unit makes an attack with its breacher ordnance, you can re-roll the Wound roll." },
            { name: "Destabilising Quakes", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks made with its tremor shells. That unit must take a Battle-shock test, subtracting 1 from the result." },
        ],
        keywords: ["Infantry","Artillery","Cthonian","Earthshakers","Faction: Leagues of Votann"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "characters",
        name: "Einhyr Champion",
        pts: 70,
        units: 1,
        img: "/assets/project_images/warhammer/units/votann/champ.png",
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.mass_hammer,
            votann_weapons.darkstar_axe,
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_combi_bolter,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_combi_bolter, selected: true},
            ],
            slot2: [
                {...votann_weapons.mass_hammer, selected: true},
            ],
            slot3: [
                {...votann_weapons.darkstar_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- EINHYR HEARTHGUARD" },
            { name: "Exemplar of the Einhyr", desc: "While this model is leading a unit, add 1 to Advance and Charge rolls made for that unit." },
            { name: "Mass Driver Accelerators", desc: "Each time this model ends a Charge move, you can select one enemy unit within Engagement Range of this model and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Weavefield crest", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Teleport crest", desc: "While the bearer is leading a unit, models in that unit have the Deep Strike ability." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Character","Exoarmour","Einhyr Champion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Einhyr Hearthguard",
        pts: 135,
        units: 5,
        img: "/assets/project_images/warhammer/units/votann/hearth.png",
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.graviton_hammer,
            votann_weapons.concussion_gauntlet,
            votann_weapons.plasma_blade_gauntlet,
        ],
        rangedWeapons: [
            votann_weapons.exo_armour_grenade_launcher,
            votann_weapons.etacarn_plasma_gun,
            votann_weapons.volkanite_disintegrator,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.exo_armour_grenade_launcher, selected: true},
            ],
            slot2: [
                {...votann_weapons.etacarn_plasma_gun, selected: true},
            ],
            slot3: [
                {...votann_weapons.volkanite_disintegrator, selected: true},
            ],
            slot4: [
                {...votann_weapons.graviton_hammer, selected: true},
            ],
            slot5: [
                {...votann_weapons.concussion_gauntlet, selected: true},
            ],
            slot6: [
                {...votann_weapons.plasma_blade_gauntlet, selected: true},
            ],
        },
        abilities: [
            { name: "Decisive Destruction", desc: "Each time a model in this unit makes a ranged attack that targets the closest eligible target, re-roll a Hit roll of 1." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Teleport crest", desc: "Models in the bearer's unit have the Deep Strike ability." },
            { name: "Weavefield crest", desc: "Models in the bearer's unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Exoarmour","Einhyr Hearthguard"],
        pointOptions: [{ models: 10, pts: 270 }],
        transport: null,
    },
    {
        army: "votann",
        class: "characters",
        name: "Grimnyr",
        pts: 65,
        units: 3,
        img: "/assets/project_images/warhammer/units/votann/grim.png",
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            votann_weapons.ancestral_ward_stave,
            votann_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            votann_weapons.ancestral_wrath_witchfire,
            votann_weapons.ancestral_wrath_focused_witchfire,
            votann_weapons.autoch_pattern_bolter,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.ancestral_wrath_witchfire, selected: true},
            ],
            slot2: [
                {...votann_weapons.ancestral_wrath_focused_witchfire, selected: true},
            ],
            slot3: [
                {...votann_weapons.autoch_pattern_bolter, selected: true},
            ],
            slot4: [
                {...votann_weapons.ancestral_ward_stave, selected: true},
            ],
            slot5: [
                {...votann_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- HEARTHKYN WARRIORS" },
            { name: "Fortify (Psychic)", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "Grimnyr's Regard", desc: "Once per battle, at the start of any phase, you can select one friendly LEAGUES OF VOTANN unit that is Battle-shocked and within 12\" of this unit's GRIMNYR model. That unit is no longer Battle-shocked." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Character","Psyker","Grimnyr"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "battleline",
        name: "Hearthkyn Warriors",
        pts: 100,
        units: 10,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.close_combat_weapon_3,
            votann_weapons.theyns_melee_weapon,
            votann_weapons.plasma_knife,
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_bolt_pistol_3,
            votann_weapons.autoch_pattern_bolter,
            votann_weapons.ion_blaster,
            votann_weapons.theyns_pistol,
            votann_weapons.hylas_rotary_cannon,
            votann_weapons.hylas_auto_rifle,
            votann_weapons.l7_missile_launcher_blast,
            votann_weapons.l7_missile_launcher_focused,
            votann_weapons.magna_rail_rifle,
            votann_weapons.etacarn_plasma_beamer,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_bolt_pistol_3, selected: true},
            ],
            slot2: [
                {...votann_weapons.autoch_pattern_bolter, selected: true},
            ],
            slot3: [
                {...votann_weapons.ion_blaster, selected: true},
            ],
            slot4: [
                {...votann_weapons.theyns_pistol, selected: true},
            ],
            slot5: [
                {...votann_weapons.hylas_rotary_cannon, selected: true},
            ],
            slot6: [
                {...votann_weapons.hylas_auto_rifle, selected: true},
            ],
            slot7: [
                {...votann_weapons.l7_missile_launcher_blast, selected: true},
            ],
            slot8: [
                {...votann_weapons.l7_missile_launcher_focused, selected: true},
            ],
            slot9: [
                {...votann_weapons.magna_rail_rifle, selected: true},
            ],
            slot10: [
                {...votann_weapons.etacarn_plasma_beamer, selected: true},
            ],
            slot11: [
                {...votann_weapons.close_combat_weapon_3, selected: true},
            ],
            slot12: [
                {...votann_weapons.theyns_melee_weapon, selected: true},
            ],
            slot13: [
                {...votann_weapons.plasma_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Luck Has, Need Keeps, Toil Earns", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, until your opponent's Level of Control over that is greater than yours at the end of a phase." },
            { name: "Pan-spectral Scanning", desc: "Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Weavefield crest", desc: "Models in the bearer's unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Battleline","Grenades","Hearthkyn Warriors"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Hekaton Land Fortress",
        pts: 240,
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
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.armoured_wheels,
        ],
        rangedWeapons: [
            votann_weapons.sp_heavy_conversion_beamer,
            votann_weapons.heavy_magna_rail_cannon,
            votann_weapons.cyclic_ion_cannon,
            votann_weapons.twin_ion_beamer,
            votann_weapons.twin_bolt_cannon,
            votann_weapons.hekaton_warhead,
            votann_weapons.matr_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.sp_heavy_conversion_beamer, selected: true},
            ],
            slot2: [
                {...votann_weapons.heavy_magna_rail_cannon, selected: true},
            ],
            slot3: [
                {...votann_weapons.cyclic_ion_cannon, selected: true},
            ],
            slot4: [
                {...votann_weapons.twin_ion_beamer, selected: true},
            ],
            slot5: [
                {...votann_weapons.twin_bolt_cannon, selected: true},
            ],
            slot6: [
                {...votann_weapons.hekaton_warhead, selected: true},
            ],
            slot7: [
                {...votann_weapons.matr_autocannon, selected: true},
            ],
            slot8: [
                {...votann_weapons.armoured_wheels, selected: true},
            ],
        },
        abilities: [
            { name: "MultiCOG Targeting", desc: "Each time this model makes a ranged attack, you can ignore any or all modifiers to the following: that attack's Ballistic Skill characteristic, the Hit roll." },
            { name: "Damaged: 1-5 wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Firebase Control (Aura)", desc: "While a friendly LEAGUES OF VOTANN INFANTRY unit is wholly within 6\" of this TRANSPORT, ranged weapons equipped by models in that INFANTRY unit have the [SUSTAINED HITS 1] ability." },
            { name: "Pan spectral scanner", desc: "Each time a model in the bearer's unit makes a ranged attack, re-roll a Hit roll of 1." },
        ],
        keywords: ["Faction: Leagues of Votann","Vehicle","Transport","Hekaton Land Fortress"],
        pointOptions: [],
        transport: "This model has a transport capacity of 14 ^^**Leagues of Votann Infantry**^^ models. Each **^^Exoarmour, Exoframe**^^ or **^^Ironkin Steeljacks**^^ model takes up the space of 2 models. It cannot transport ^**Artillery**^^ models.",
    },
    {
        army: "votann",
        class: "other",
        name: "Hernkyn Pioneers",
        pts: 80,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 3,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.plasma_knife,
        ],
        rangedWeapons: [
            votann_weapons.bolt_revolver,
            votann_weapons.bolt_shotgun,
            votann_weapons.magna_coil_autocannon,
            votann_weapons.hylas_rotary_cannon_2,
            votann_weapons.ion_beamer,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.bolt_revolver, selected: true},
            ],
            slot2: [
                {...votann_weapons.bolt_shotgun, selected: true},
            ],
            slot3: [
                {...votann_weapons.magna_coil_autocannon, selected: true},
            ],
            slot4: [
                {...votann_weapons.hylas_rotary_cannon_2, selected: true},
            ],
            slot5: [
                {...votann_weapons.ion_beamer, selected: true},
            ],
            slot6: [
                {...votann_weapons.plasma_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Outflanking Mag-Riders", desc: "At the end of your opponent’s turn, if this unit is wholly within 9\" of one or more battlefield edges and not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Comms array", desc: "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Pan-spectral scanner", desc: "Each time a model in the bearer's unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Rollbar searchlight", desc: "Each time a model in the bearer's unit makes a ranged attack, you can ignore any or all modifiers to the Hit roll." },
        ],
        keywords: ["Faction: Leagues of Votann","Mounted","Grenades","Fly","Hernkyn Pioneers"],
        pointOptions: [{ models: 6, pts: 160 }],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Hernkyn Yaegirs",
        pts: 90,
        units: 10,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.close_combat_weapon_3,
            votann_weapons.plasma_knife,
        ],
        rangedWeapons: [
            votann_weapons.bolt_shotgun,
            votann_weapons.apm_launcher,
            votann_weapons.magna_coil_rifle,
            votann_weapons.bolt_revolver,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.bolt_shotgun, selected: true},
            ],
            slot2: [
                {...votann_weapons.apm_launcher, selected: true},
            ],
            slot3: [
                {...votann_weapons.magna_coil_rifle, selected: true},
            ],
            slot4: [
                {...votann_weapons.bolt_revolver, selected: true},
            ],
            slot5: [
                {...votann_weapons.close_combat_weapon_3, selected: true},
            ],
            slot6: [
                {...votann_weapons.plasma_knife, selected: true},
            ],
        },
        abilities: [
            { name: "Pragmatic Hunters", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, it can make a Normal move of up to D6\"." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Grenades","Hernkyn Yaegirs"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Ironkin Steeljacks with Heavy Volkanite Disintegrators",
        pts: 85,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.plasma_knife_2,
            votann_weapons.plasma_sword,
        ],
        rangedWeapons: [
            votann_weapons.heavy_volkanite_disintegrator,
            votann_weapons.autoch_pattern_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.heavy_volkanite_disintegrator, selected: true},
            ],
            slot2: [
                {...votann_weapons.autoch_pattern_bolter_2, selected: true},
            ],
            slot3: [
                {...votann_weapons.plasma_knife_2, selected: true},
            ],
            slot4: [
                {...votann_weapons.plasma_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Purge Response", desc: "Each time you target this unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ while resolving that Stratagem. If units from your army have Fortify Takeover, hits are scored on unmodified Hit rolls of 4+ while resolving that Stratagem instead." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Preymark crest", desc: "Each time a model in the bearer's unit makes an attack that targets an enemy unit within range of one or more objective markers, on a Critical Wound, that attack has the [Precision] ability." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Ironkin Steeljacks","Ironkin Steeljacks with Heavy Volkanite Disintegrators"],
        pointOptions: [{ models: 6, pts: 170 }],
        transport: null,
    },
    {
        army: "votann",
        class: "other",
        name: "Ironkin Steeljacks with Melee Weapons",
        pts: 85,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.plasma_sword,
            votann_weapons.concussion_gauntlet_2,
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_bolter_2, selected: true},
            ],
            slot2: [
                {...votann_weapons.plasma_sword, selected: true},
            ],
            slot3: [
                {...votann_weapons.concussion_gauntlet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Merciless Eradication", desc: "Each time an enemy unit (excluding MONSTERS and VEHICLES) that is within Engagement Range of this unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Preymark crest", desc: "Each time a model in the bearer's unit makes an attack that targets an enemy unit within range of one or more objective markers, on a Critical Wound, that attack has the [Precision] ability." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Ironkin Steeljacks","Ironkin Steeljacks with Melee Weapons"],
        pointOptions: [{ models: 6, pts: 170 }],
        transport: null,
    },
    {
        army: "votann",
        class: "characters",
        name: "Kâhl",
        pts: 65,
        units: 1,
        img: "/assets/project_images/warhammer/units/votann/kahl.png",
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            votann_weapons.mass_gauntlet,
            votann_weapons.forgewrought_plasma_axe,
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_combi_bolter,
            votann_weapons.volkanite_disintegrator_2,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_combi_bolter, selected: true},
            ],
            slot2: [
                {...votann_weapons.volkanite_disintegrator_2, selected: true},
            ],
            slot3: [
                {...votann_weapons.mass_gauntlet, selected: true},
            ],
            slot4: [
                {...votann_weapons.forgewrought_plasma_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Kindred Hero", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- EINHYR HEARTHGUARD\n- HEARTHKYN WARRIORS" },
            { name: "Seized Opportunity", desc: "Once per phase, one model from your army with this ability can use it when its unit destroys an enemy unit. If it does, gain 1YP." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Rampart crest", desc: "While the bearer is leading a unit, models in that unit have a 5+ invulnerable save." },
            { name: "Teleport crest", desc: "While the bearer is leading a unit, models in that unit have the Deep Strike ability." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Character","Kâhl"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "transports",
        name: "Kapricus Carrier",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 4,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.armoured_hull,
        ],
        rangedWeapons: [
            votann_weapons.magna_coil_autocannon,
            votann_weapons.twin_magna_coil_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.magna_coil_autocannon, selected: true},
            ],
            slot2: [
                {...votann_weapons.twin_magna_coil_autocannon, selected: true},
            ],
            slot3: [
                {...votann_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Scanner Uplinks", desc: "In your shooting phase, after this model has shot, select one enemy unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Firebase Control (Aura)", desc: "While a friendly LEAGUES OF VOTANN INFANTRY unit is wholly within 6\" of this TRANSPORT, ranged weapons equipped by models in that INFANTRY unit have the [SUSTAINED HITS 1] ability." },
            { name: "Smoke Launcher", desc: "The bearer has the SMOKE keyword." },
        ],
        keywords: ["Dedicated Transport","Transport","Vehicle","Fly","Hernkyn","Kapricus","Carrier","Faction: Leagues of Votann"],
        pointOptions: [],
        transport: "This model has a transport capacity of 5 ^^**Hernkyn Yaegir**^^ models.\n\nAt the start of the Declare Battle Formations step, you can select one ^^**Hernkyn Yaegir^^** unit from your army that has not been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this ^^**Transport^^**; the other can start the battle embarked within another ^^**Transport^^**, or it can be deployed as a separate unit.",
    },
    {
        army: "votann",
        class: "other",
        name: "Kapricus Defenders",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 4,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.armoured_hull,
        ],
        rangedWeapons: [
            votann_weapons.magna_rail_cannon,
            votann_weapons.hylas_rotary_cannon_3,
            votann_weapons.twin_magna_coil_autocannon,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.magna_rail_cannon, selected: true},
            ],
            slot2: [
                {...votann_weapons.hylas_rotary_cannon_3, selected: true},
            ],
            slot3: [
                {...votann_weapons.twin_magna_coil_autocannon, selected: true},
            ],
            slot4: [
                {...votann_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Opportunistic Manoeuvre", desc: "In your Shooting phase, after this unit has shot, it can make a Normal Move of up to D6\". If it does, until the end of the turn, this unit is not eligible to declare a charge." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Smoke Launcher", desc: "The bearer has the SMOKE keyword." },
        ],
        keywords: ["Vehicle","Fly","Hernkyn","Kapricus","Defenders","Faction: Leagues of Votann"],
        pointOptions: [{ models: 2, pts: 140 }],
        transport: null,
    },
    {
        army: "votann",
        class: "characters",
        name: "Memnyr Strategist",
        pts: 45,
        units: 1,
        img: "/assets/project_images/warhammer/units/votann/mem.png",
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            votann_weapons.autoch_pattern_bolt_pistol_3,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.autoch_pattern_bolt_pistol_3, selected: true},
            ],
            slot2: [
                {...votann_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Computational Mastermind", desc: "At the end of your Command phase, before you determine if units from your army have Hostile Acquisition or Fortify Takeover, for each objective marker you control that has one or more models with this ability in range of it, you can spend 1YP or gain 1YP." },
            { name: "Predictive Guidance", desc: "Once per battle round, this model can use this ability. If it does, you can target this unit with the Fire Overwatch or Heroic Intervention Stratagem for 0CP." },
            { name: "Leader", desc: "This model can be attached to the following units: IRONKIN STEELJACKS WITH HEAVY VOLKANITE DISINTEGRATORS, IRONKIN STEELJACKS WITH MELEE WEAPONS" },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Character","Infantry","Memnyr Strategist","Faction: Leagues of Votann"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "votann",
        class: "transports",
        name: "Sagitaur",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 9,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            votann_weapons.armoured_wheels_2,
        ],
        rangedWeapons: [
            votann_weapons.hylas_beam_cannon,
            votann_weapons.sagitaur_missile_launcher,
            votann_weapons.l7_missile_launcher_blast,
            votann_weapons.l7_missile_launcher_focused,
            votann_weapons.matr_autocannon,
            votann_weapons.twin_bolt_cannon,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.hylas_beam_cannon, selected: true},
            ],
            slot2: [
                {...votann_weapons.sagitaur_missile_launcher, selected: true},
            ],
            slot3: [
                {...votann_weapons.l7_missile_launcher_blast, selected: true},
            ],
            slot4: [
                {...votann_weapons.l7_missile_launcher_focused, selected: true},
            ],
            slot5: [
                {...votann_weapons.matr_autocannon, selected: true},
            ],
            slot6: [
                {...votann_weapons.twin_bolt_cannon, selected: true},
            ],
            slot7: [
                {...votann_weapons.armoured_wheels_2, selected: true},
            ],
        },
        abilities: [
            { name: "Blistering Advance", desc: "Units can disembark from this TRANSPORT after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Firebase Control (Aura)", desc: "While a friendly LEAGUES OF VOTANN INFANTRY unit is wholly within 6\" of this TRANSPORT, ranged weapons equipped by models in that INFANTRY unit have the [SUSTAINED HITS 1] ability." },
        ],
        keywords: ["Faction: Leagues of Votann","Vehicle","Transport","Dedicated Transport","Sagitaur"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 ^^**Leagues of Votann Infantry**^^ models. It cannot transport ^^**Artillery**^^, ^^**Exoarmour**^^, ^^**Exoframe^^** or ^^**Ironkin Steeljack**^^ models.\n\nAt the start of the Declare Battle Formations step, you can select one ^^**Hearthkyn Warriors^^** unit from your army that has not been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this ^^**Transport^^**; the other can start the battle embarked within another ^^**Transport^^**, or it can be deployed as a separate unit.",
    },
    {
        army: "votann",
        class: "characters",
        name: "Ûthar the Destined",
        pts: 95,
        units: 1,
        img: "/assets/project_images/warhammer/units/votann/uthar.png",
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            votann_weapons.blade_of_the_ancestors,
        ],
        rangedWeapons: [
            votann_weapons.volkanite_disintegrator_2,
        ],
        weapon_options: {
            slot1: [
                {...votann_weapons.volkanite_disintegrator_2, selected: true},
            ],
            slot2: [
                {...votann_weapons.blade_of_the_ancestors, selected: true},
            ],
        },
        abilities: [
            { name: "Ancestral Fortune", desc: "Once per turn, you can spend 1YP to change one Hit roll, one Wound roll or one saving throw made for this model to a 6." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Einhyr Hearthguard\n- Hearthkyn Warriors" },
            { name: "Grim Efficiency", desc: "Once per battle round, when a friendly LEAGUES OF VOTANN unit within 12\" of this model is targeted with a Stratagem, this model can use this ability. If it does, reduce the CP cost of that Stratagem by 1CP." },
            { name: "Guerrilla Adepts", desc: "In your Shooting phase, just after this unit is selected to shoot, this unit can use this ability. If it does, select one enemy unit (excluding MONSTERS and VEHICLES). Until the end of the phase, attacks made by models in this unit can only attack that enemy unit (and only if it is an eligible target) and, after resolving those attacks, if one or more of those attacks hit that enemy unit, until the start of your next Shooting phase, that enemy unit is assailed (this simply labels that unit for the purposes of this ability and some Enhancements or Stratagems). If that unit is already assailed, until the start of your next Shooting phase, it is also pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it." },
            { name: "Rampart crest", desc: "While the bearer is leading a unit, models in that unit have a 5+ invulnerable save." },
        ],
        keywords: ["Faction: Leagues of Votann","Infantry","Character","Epic Hero","Ûthar the Destined","Ranged Weapon"],
        pointOptions: [],
        transport: null,
    },
]

export default votann_army
