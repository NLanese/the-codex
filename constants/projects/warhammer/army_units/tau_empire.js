// AUTO-GENERATED units for T'au Empire (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import tau_empire_weapons from "../weapons/tau_empire"

const tau_empire_army = [
    {
        army: "tau_empire",
        class: "characters",
        name: "Aun'shi [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.fidelity,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.fidelity, selected: true},
            ],
        },
        abilities: [
            { name: "Inspirational Defiance", desc: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Breacher Team**\n- **Kroot Carnivores**\n- **Strike Team**" },
            { name: "Martial Warrior", desc: "Each time this model is selected to fight, select one of the following abilities to be active while resolving those attacks:\n- Direct Grace: Fidelity has the [PRECISION] ability.\n- Forceful Strike: Fidelity has the [DEVASTATING WOUNDS] ability.\n- Whirling Stance: Fidelity has the [SUSTAINED HITS 2] ability instead of [SUSTAINED HITS 1]." },
        ],
        keywords: ["Character","Infantry","Ethereal","Faction: T'au Empire","Aun'shi","Epic Hero","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Aun'va [Legends]",
        pts: 65,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon,
            tau_empire_weapons.supreme_honour_blade,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.close_combat_weapon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.supreme_honour_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Duality Shield", desc: "Once per battle, each time an attack targets this unit, it can use this ability. If it does, until the end of the phase, models in this unit have a 2+ invulnerable save." },
            { name: "Paradox of Duality", desc: "Each time an attack targets this unit, subtract 1 from the Hit roll and subtract 1 from the Wound roll." },
            { name: "Supreme Loyalty (Aura)", desc: "While a friendly T’AU EMPIRE unit is within 6\" of this unit, each time that unit takes a Battle-shock or Leadership test, add 1 to that test." },
        ],
        keywords: ["Faction: T'au Empire","Epic Hero","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "AX-1-0 Tiger Shark",
        pts: 315,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 11,
            saving: 3,
            wounds: 18,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.twin_heavy_rail_cannon,
            tau_empire_weapons.burst_cannon,
            tau_empire_weapons.cyclic_ion_blaster_standard,
            tau_empire_weapons.cyclic_ion_blaster_overcharge,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.missile_pod,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.twin_heavy_rail_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.burst_cannon, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.cyclic_ion_blaster_standard, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.cyclic_ion_blaster_overcharge, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Titan Hunter", desc: "This model’s twin heavy rail cannon and seeker missiles have the [ANTI-TITANIC 3+] ability while targeting a unit within half range." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Faction: T'au Empire","AX-1-0 Tiger Shark","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Barracuda [Legends]",
        pts: 220,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.swiftstrike_burst_cannon,
            tau_empire_weapons.ion_cannon_standard,
            tau_empire_weapons.ion_cannon_overcharge,
            tau_empire_weapons.long_barrelled_burst_cannon,
            tau_empire_weapons.swiftstrike_railgun,
            tau_empire_weapons.cyclic_ion_blaster_standard,
            tau_empire_weapons.cyclic_ion_blaster_overcharge,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.missile_pod,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.swiftstrike_burst_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ion_cannon_standard, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ion_cannon_overcharge, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.long_barrelled_burst_cannon, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.swiftstrike_railgun, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.cyclic_ion_blaster_standard, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.cyclic_ion_blaster_overcharge, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot10: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Agile Dogfighter", desc: "Each time an attack targets this model, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Barracuda","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Battlesuit Veteran [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Strategic Redeployment", desc: "The bearer's unit is eligible to shoot in a turn in which it Fell Back." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Stealth Battlesuits**" },
        ],
        keywords: ["Character","Infantry","Crucible","Faction: T'au Empire","Fly","Battlesuit","Battlesuit Veteran"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "battleline",
        name: "Breacher Team",
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
            tau_empire_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.pulse_pistol,
            tau_empire_weapons.pulse_blaster,
            tau_empire_weapons.support_turret,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.pulse_pistol, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.pulse_blaster, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.support_turret, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Breach and Clear", desc: "Each time a model in this unit makes a ranged attack that targets an enemy unit within range of an objective marker, you can re-roll the Wound roll." },
            { name: "DS8 Support Turret", desc: "In your Movement phase, if this unit Remains Stationary, until the start of your next turn, its Shas’ui model is equipped with the support turret weapon.\n\nDesigner’s Note: Place a Support Turret token next to this unit to remind you." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Markerlight","Fire Warrior","Faction: T'au Empire","Breacher Team","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Broadside Battlesuits",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 2,
            wounds: 8,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.crushing_bulk,
        ],
        rangedWeapons: [
            tau_empire_weapons.heavy_rail_rifle,
            tau_empire_weapons.high_yield_missile_pods,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.twin_plasma_rifle,
            tau_empire_weapons.twin_smart_missile_system,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.heavy_rail_rifle, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.high_yield_missile_pods, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.twin_plasma_rifle, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.twin_smart_missile_system, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.crushing_bulk, selected: true},
            ],
        },
        abilities: [
            { name: "Advanced Armour", desc: "Models in this unit have the Feel No Pain 4+ ability against mortal wounds." },
        ],
        keywords: ["Vehicle","Walker","Battlesuit","Faction: T'au Empire","Broadside","Non-Kroot"],
        pointOptions: [{ models: 2, pts: 170 }, { models: 3, pts: 270 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Cadre Fireblade",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            tau_empire_weapons.fireblade_pulse_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.fireblade_pulse_rifle, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Volley Fire", desc: "While this model is leading a unit, add 1 to the Attacks characteristic of ranged weapons equipped by models in that unit." },
            { name: "Crack Shot", desc: "Each time this model makes a ranged attack, on a Critical Wound, that attack has an Armour Penetration characteristic of -3." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Breacher Team**\n- **Strike Team**" },
        ],
        keywords: ["Character","Infantry","Grenades","Faction: T'au Empire","Cadre Fireblade","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Commander Farsight",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tau_empire_weapons.dawn_blade_strike,
            tau_empire_weapons.dawn_blade_sweep,
        ],
        rangedWeapons: [
            tau_empire_weapons.high_intensity_plasma_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.high_intensity_plasma_rifle, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.dawn_blade_strike, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.dawn_blade_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Way of the Short Blade", desc: "While this model is leading a unit, each time a model in that unit makes an attack that targets an enemy unit within 9\", add 1 to the Wound roll." },
            { name: "Puretide's Teachings", desc: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Crisis Sunforge Battlesuits**\n- **Crisis Fireknife Battlesuits**\n- **Crisis Starscythe Battlesuits**" },
        ],
        keywords: ["Epic Hero","Vehicle","Walker","Fly","Character","Battlesuit","Commander Farsight","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Commander in Coldstar Battlesuit",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.high_output_burst_cannon,
            tau_empire_weapons.missile_pod_2,
            tau_empire_weapons.burst_cannon_2,
            tau_empire_weapons.airbursting_fragmentation_projector,
            tau_empire_weapons.cyclic_ion_blaster_standard_2,
            tau_empire_weapons.cyclic_ion_blaster_overcharge_2,
            tau_empire_weapons.tau_flamer,
            tau_empire_weapons.fusion_blaster,
            tau_empire_weapons.plasma_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.high_output_burst_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.missile_pod_2, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.burst_cannon_2, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.airbursting_fragmentation_projector, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.cyclic_ion_blaster_standard_2, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.cyclic_ion_blaster_overcharge_2, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.tau_flamer, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.fusion_blaster, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.plasma_rifle, selected: true},
            ],
            slot10: [
                {...tau_empire_weapons.battlesuit_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Crisis Sunforge Battlesuits**\n- **Crisis Fireknife Battlesuits**\n- **Crisis Starscythe Battlesuits**" },
            { name: "Coldstar Commander", desc: "While this model is leading a unit, models in that unit have a Move characteristic of 12\" and ranged weapons equipped by models in that unit have the **[ASSAULT]** ability." },
        ],
        keywords: ["Character","Vehicle","Walker","Fly","Battlesuit","Faction: T'au Empire","Commander in Coldstar Battlesuit","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Commander in Crisis Battlesuit [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 3,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.missile_pod_2,
            tau_empire_weapons.burst_cannon_2,
            tau_empire_weapons.airbursting_fragmentation_projector,
            tau_empire_weapons.cyclic_ion_blaster_standard_2,
            tau_empire_weapons.cyclic_ion_blaster_overcharge_2,
            tau_empire_weapons.tau_flamer,
            tau_empire_weapons.fusion_blaster,
            tau_empire_weapons.plasma_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.missile_pod_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.burst_cannon_2, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.airbursting_fragmentation_projector, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.cyclic_ion_blaster_standard_2, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.cyclic_ion_blaster_overcharge_2, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.tau_flamer, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.fusion_blaster, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.plasma_rifle, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.battlesuit_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Crisis Commander", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Crisis Battlesuits**\n- **Crisis Sunforge Battlesuits**\n- **Crisis Fireknife Battlesuits**\n- **Crisis Starscythe Battlesuits**" },
        ],
        keywords: ["Character","Vehicle","Walker","Fly","Battlesuit","Commander in Crisis Battlesuit","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Commander in Enforcer Battlesuit",
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
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.missile_pod_2,
            tau_empire_weapons.burst_cannon_2,
            tau_empire_weapons.airbursting_fragmentation_projector,
            tau_empire_weapons.cyclic_ion_blaster_standard_2,
            tau_empire_weapons.cyclic_ion_blaster_overcharge_2,
            tau_empire_weapons.tau_flamer,
            tau_empire_weapons.fusion_blaster,
            tau_empire_weapons.plasma_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.missile_pod_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.burst_cannon_2, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.airbursting_fragmentation_projector, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.cyclic_ion_blaster_standard_2, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.cyclic_ion_blaster_overcharge_2, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.tau_flamer, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.fusion_blaster, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.plasma_rifle, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.battlesuit_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Enforcer Commander", desc: "While this model is leading a unit, each time a ranged attack targets that unit, worsen the Armour Penetration characteristic of that attack by 1." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Crisis Sunforge Battlesuits**\n- **Crisis Fireknife Battlesuits**\n- **Crisis Starscythe Battlesuits**" },
        ],
        keywords: ["Character","Vehicle","Walker","Fly","Battlesuit","Faction: T'au Empire","Commander in Enforcer Battlesuit","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Commander Shadowsun",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 4,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.light_missile_pod,
            tau_empire_weapons.high_energy_fusion_blaster,
            tau_empire_weapons.flechette_launcher,
            tau_empire_weapons.pulse_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.light_missile_pod, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.high_energy_fusion_blaster, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.flechette_launcher, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.pulse_pistol_2, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.battlesuit_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Agile Combatant", desc: "This model is eligible to shoot in a turn in which it Fell Back." },
            { name: "Hero of the Empire (Aura)", desc: "While a friendly **T’au Empire** unit is within 6\" of this model, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Advanced Guardian Drone", desc: "Each time a ranged attack targets the bearer, subtract 1 from the Wound roll." },
            { name: "Command-link Drone (Aura)", desc: "While a friendly **T’au Empire** unit is within 6\" of the bearer, each time you select that unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Supreme Commander", desc: "If this model is in your army, it must be your **Warlord**." },
        ],
        keywords: ["Epic Hero","Infantry","Fly","Character","Battlesuit","Commander Shadowsun","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Crisis Battlesuits [Legends]",
        pts: 200,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.tau_flamer,
            tau_empire_weapons.burst_cannon,
            tau_empire_weapons.missile_pod,
            tau_empire_weapons.plasma_rifle_2,
            tau_empire_weapons.airbursting_fragmentation_projector_2,
            tau_empire_weapons.cyclic_ion_blaster_standard,
            tau_empire_weapons.cyclic_ion_blaster_overcharge,
            tau_empire_weapons.fusion_blaster_2,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.tau_flamer, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.burst_cannon, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.plasma_rifle_2, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.airbursting_fragmentation_projector_2, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.cyclic_ion_blaster_standard, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.cyclic_ion_blaster_overcharge, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.fusion_blaster_2, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.battlesuit_fists_2, selected: true},
            ],
        },
        abilities: [
            { name: "Turbo-jets", desc: "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit." },
            { name: "Crisis Bodyguard", desc: "If a **Character** unit from your army with the Leader ability can be attached to a **Crisis Fireknife Battlesuit** unit, it can be attached to this unit instead." },
        ],
        keywords: ["Vehicle","Walker","Fly","Battlesuit","Crisis","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [{ models: 3, pts: 400 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Crisis Fireknife Battlesuits",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.plasma_rifle_2,
            tau_empire_weapons.missile_pod,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.plasma_rifle_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.battlesuit_fists_2, selected: true},
            ],
        },
        abilities: [
            { name: "Fireknife", desc: "Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If that attack targets a unit that is at its Starting Strength, you can re-roll the Hit roll instead." },
            { name: "Weapon Support System", desc: "Each time a model in this unit makes a ranged attack, you can ignore any or all modifiers to the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Fly","Battlesuit","Crisis","Faction: T'au Empire","Fireknife","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Crisis Starscythe Battlesuits",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.burst_cannon,
            tau_empire_weapons.tau_flamer,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.burst_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.tau_flamer, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.battlesuit_fists_2, selected: true},
            ],
        },
        abilities: [
            { name: "Starscythe", desc: "Each time a model in this unit makes a ranged attack (excluding attacks that target MONSTERS and VEHICLES), improve the Armour Penetration characteristic of that attack by 1." },
            { name: "Battlesuit Support System", desc: "The unit is eligible to shoot in a turn in which it Fell Back." },
        ],
        keywords: ["Vehicle","Walker","Fly","Battlesuit","Crisis","Faction: T'au Empire","Starscythe","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Crisis Sunforge Battlesuits",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.fusion_blaster_2,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.fusion_blaster_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.battlesuit_fists_2, selected: true},
            ],
        },
        abilities: [
            { name: "Sunforge", desc: "Each time a model in this unit makes a ranged attack that targets a **Monster** or **Vehicle** unit, you can re-roll the Wound roll and you can re-roll the Damage roll." },
        ],
        keywords: ["Vehicle","Walker","Fly","Battlesuit","Crisis","Faction: T'au Empire","Sunforge","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Darkstrider",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            tau_empire_weapons.shade,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.shade, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Structural Analyser", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, add 1 to the Wound roll." },
            { name: "Jammer Array", desc: "Enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" of this model." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Pathfinder Team**" },
        ],
        keywords: ["Character","Epic Hero","Darkstrider","Faction: T'au Empire","Markerlight","Infantry","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "transports",
        name: "Devilfish",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 3,
            wounds: 13,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.twin_pulse_carbine,
            tau_empire_weapons.smart_missile_system,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.accelerator_burst_cannon,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.twin_pulse_carbine, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.smart_missile_system, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.accelerator_burst_cannon, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Rapid Deployment", desc: "Units can disembark from this TRANSPORT after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn." },
        ],
        keywords: ["Vehicle","Fly","Transport","Dedicated Transport","Devilfish","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models.",
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Drone Sentry Turret [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 8,
            saving: 4,
            wounds: 4,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            tau_empire_weapons.twin_plasma_rifle_2,
            tau_empire_weapons.twin_fusion_blaster,
            tau_empire_weapons.twin_missile_pod,
            tau_empire_weapons.twin_burst_cannon,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.twin_plasma_rifle_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.twin_fusion_blaster, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.twin_missile_pod, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.twin_burst_cannon, selected: true},
            ],
        },
        abilities: [
            { name: "Reinforced Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
            { name: "Sentinel Protocols", desc: "Each time you select this FORTIFICATION for the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem." },
        ],
        keywords: ["Fortification","Vehicle","Drone Sentry Turret","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Ethereal",
        pts: 50,
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
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.honour_stave,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.honour_stave, selected: true},
            ],
        },
        abilities: [
            { name: "Coordinated Leadership", desc: "In your Command phase, roll one D6: on a 4+, you gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Breacher Team**\n- **Strike Team**" },
            { name: "Failure Is Not an Option", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "Hover Drone", desc: "The bearer can **Fly** and has a Move characteristic of 10\"." },
        ],
        keywords: ["Character","Infantry","Ethereal","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Firesight Team",
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
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            tau_empire_weapons.longshot_pulse_rifles,
            tau_empire_weapons.pulse_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.longshot_pulse_rifles, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.pulse_pistol_2, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Precise Targeting", desc: "Each time a model in this unit makes an attack that targets a Spotted unit, you can re‑roll the Hit roll." },
        ],
        keywords: ["Character","Infantry","Markerlight","Faction: T'au Empire","Firesight Team","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Ghostkeel Battlesuit",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 2,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.ghostkeel_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.twin_burst_cannon_2,
            tau_empire_weapons.fusion_collider,
            tau_empire_weapons.cyclic_ion_raker_standard,
            tau_empire_weapons.cyclic_ion_raker_overcharge,
            tau_empire_weapons.twin_tau_flamer,
            tau_empire_weapons.twin_fusion_blaster_2,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.twin_burst_cannon_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.fusion_collider, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.cyclic_ion_raker_standard, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.cyclic_ion_raker_overcharge, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.twin_tau_flamer, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.twin_fusion_blaster_2, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.ghostkeel_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Stealth Drones", desc: "Twice per battle, after an attack has been allocated to this model, you can change the Damage characteristic of that attack to 0.\n\nDesigner’s Note: Place two Stealth Drone tokens next to the unit, removing one each time this ability has been used." },
            { name: "Battlesuit Support System", desc: "The bearer is eligible to shoot in a turn in which it Fell Back but it loses the **Smoke** keyword." },
        ],
        keywords: ["Vehicle","Walker","Fly","Smoke","Battlesuit","Ghostkeel","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Great Knarloc [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 9,
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.great_knarloc_beak_and_talons,
            tau_empire_weapons.kroot_rifle_melee,
        ],
        rangedWeapons: [
            tau_empire_weapons.kroot_bolt_thrower,
            tau_empire_weapons.kroot_rifle_ranged,
            tau_empire_weapons.twin_kroot_gun,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.kroot_bolt_thrower, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.kroot_rifle_ranged, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.twin_kroot_gun, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.great_knarloc_beak_and_talons, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.kroot_rifle_melee, selected: true},
            ],
        },
        abilities: [
            { name: "Loping Stride", desc: "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of this model." },
            { name: "Baggage Harness (Aura)", desc: "While a friendly KROOT unit is within 3\" of the bearer, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
        ],
        keywords: ["Monster","Kroot","Great Knarloc","Faction: T'au Empire"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Hammerhead Gunship",
        pts: 145,
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
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.railgun,
            tau_empire_weapons.ion_cannon_standard,
            tau_empire_weapons.ion_cannon_overcharge,
            tau_empire_weapons.twin_pulse_carbine_2,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.accelerator_burst_cannon,
            tau_empire_weapons.smart_missile_system,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.railgun, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ion_cannon_standard, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ion_cannon_overcharge, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.twin_pulse_carbine_2, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.accelerator_burst_cannon, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.smart_missile_system, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Armour Hunter", desc: "Each time this model makes an attack that targets a MONSTER or VEHICLE, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Fly","Hammerhead Gunship","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Heavy Gun Drones [Legends]",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 5,
            saving: 4,
            wounds: 2,
            leader: 8,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            tau_empire_weapons.burst_cannon,
            tau_empire_weapons.twin_burst_cannon,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.burst_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.twin_burst_cannon, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Drone Escort", desc: "Once per turn, in your opponent’s Shooting phase, when a friendly T'AU EMPIRE unit within 6\" of this unit is selected as the target of an attack, one unit from your army with this ability can use it. If it does, after that enemy unit has finished making its attacks, the unit using this ability can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)." },
        ],
        keywords: ["Vehicle","Fly","Heavy Gun Drones","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Kinband Champion [Crucible]",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 3,
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
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Kroot Carnivores**\n- **Kroot Farstalkers**" },
        ],
        keywords: ["Character","Infantry","Crucible","Faction: T'au Empire","Kroot","Kinband Champion"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Knarloc Riders [Legends]",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 7,
            tough: 5,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.knarloc_beak_and_talons,
            tau_empire_weapons.kroot_rifle_melee,
        ],
        rangedWeapons: [
            tau_empire_weapons.kroot_rifle_ranged,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.kroot_rifle_ranged, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.knarloc_beak_and_talons, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.kroot_rifle_melee, selected: true},
            ],
        },
        abilities: [
            { name: "Thunderous Pounce", desc: "Each time this unit ends a Charge move, until the end of the turn, Knarloc beak and talons equipped by models in this unit have the [LANCE] ability." },
        ],
        keywords: ["Mounted","Kroot","Knarloc Riders","Faction: T'au Empire"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Kroot Carnivores",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            tau_empire_weapons.kroot_rifle,
            tau_empire_weapons.tanglebomb_launcher,
            tau_empire_weapons.kroot_carbine,
            tau_empire_weapons.kroot_pistol,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.kroot_rifle, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.tanglebomb_launcher, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.kroot_carbine, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.kroot_pistol, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Fieldcraft", desc: "At the end of the your Command phase, if this unit within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
            { name: "Bodyguard", desc: "If this unit has a Starting Strength of 20, you can attach up to two Leader units to it instead of one, provided those Leaders are not duplicates (e.g. you cannot attach two WAR SHAPERS to this unit). If you do, and this unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths." },
        ],
        keywords: ["Infantry","Grenades","Kroot","Carnivores","Faction: T'au Empire"],
        pointOptions: [{ models: 10, pts: 140 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Kroot Farstalkers",
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
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.ripping_fangs,
            tau_empire_weapons.ritual_blade,
            tau_empire_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            tau_empire_weapons.farstalker_firearm,
            tau_empire_weapons.tau_tech_rifle,
            tau_empire_weapons.kroot_pistol,
            tau_empire_weapons.dvorgite_skinner,
            tau_empire_weapons.londaxi_tribalest,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.farstalker_firearm, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.tau_tech_rifle, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.kroot_pistol, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.dvorgite_skinner, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.londaxi_tribalest, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.ripping_fangs, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.ritual_blade, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Bounty Hunters", desc: "At the start of the battle, select one unit from your opponent’s army. Each time a model in this unit makes an attack that targets that unit, that attack has the [LETHAL HITS] and [PRECISION] abilities." },
            { name: "Pech'ra", desc: "Ranged weapons equipped by the bearer’s unit have the [IGNORES COVER] ability." },
        ],
        keywords: ["Infantry","Grenades","Kroot","Farstalkers","Faction: T'au Empire"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Kroot Flesh Shaper",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.twin_ritualistic_blades,
        ],
        rangedWeapons: [
            tau_empire_weapons.kroot_scattergun,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.kroot_scattergun, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.twin_ritualistic_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Kroot Carnivores**\n- **Kroot Farstalkers**" },
            { name: "Rites of Feasting", desc: "While this model is leading a unit, models in that unit have the Feel Not Pain 6+ ability. If that unit destroys one or more enemy units in the Fight phase, until the end of the battle, models in that unit have the Feel No Pain 5+ ability instead." },
            { name: "Ritual Butchery", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
        ],
        keywords: ["Infantry","Character","Kroot","Shaper","Faction: T'au Empire","Flesh Shaper"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Kroot Hounds",
        pts: 40,
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
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.ripping_fangs,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.ripping_fangs, selected: true},
            ],
        },
        abilities: [
            { name: "Loping Pounce", desc: "At the start of your Command phase, if this unit is within 6\" of one or more friendly KROOT INFANTRY units, then until the end of the turn, this unit is eligible to declare a charge in a turn in which it Advanced." },
            { name: "Hunting Hounds", desc: "While this unit is within 12\" of one or more friendly KROOT CHARACTER models, the Objective Control characteristic of models in this unit is 1." },
        ],
        keywords: ["Beast","Kroot","Faction: T'au Empire","Hounds"],
        pointOptions: [{ models: 5, pts: 80 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Kroot Lone-spear",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 5,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.hunting_javelin,
            tau_empire_weapons.close_combat_weapon_6,
            tau_empire_weapons.kalamandras_bite,
        ],
        rangedWeapons: [
            tau_empire_weapons.blast_javelin,
            tau_empire_weapons.kroot_long_gun,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.blast_javelin, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.kroot_long_gun, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.hunting_javelin, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.close_combat_weapon_6, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.kalamandras_bite, selected: true},
            ],
        },
        abilities: [
            { name: "Fire and Fade", desc: "In your Shooting phase, after this model has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this model is not eligible to declare a charge." },
            { name: "Advanced Scouting", desc: "Each time this model makes a ranged attack that hits an enemy unit, until the end of the turn, each time another KROOT model from your army makes an attack that targets that enemy unit, you can re-roll the Hit roll." },
        ],
        keywords: ["Character","Mounted","Kroot","Faction: T'au Empire","Lone-spear"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Kroot Trail Shaper",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.shapers_blade,
        ],
        rangedWeapons: [
            tau_empire_weapons.kroot_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.kroot_rifle, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.shapers_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Kroot Ambush", desc: "After both players have deployed their armies, you can redeploy this model's unit and one other friendly KROOT unit. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
            { name: "Trail Finding", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model's unit, if this model's unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\"." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Kroot Carnivores**\n- **Kroot Farstalkers**" },
        ],
        keywords: ["Infantry","Character","Kroot","Shaper","Faction: T'au Empire","Trail Shaper"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Kroot War Shaper",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.bladestave_and_prey_hook,
            tau_empire_weapons.shapers_blade,
        ],
        rangedWeapons: [
            tau_empire_weapons.dart_bow_and_tri_blade,
            tau_empire_weapons.kroot_pistol,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.dart_bow_and_tri_blade, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.kroot_pistol, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.bladestave_and_prey_hook, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.shapers_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Root of Honour", desc: "Once per battle, at the start of any phase, you can select one friendly KROOT unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Kroot Carnivores**\n- **Kroot Farstalkers**" },
        ],
        keywords: ["Infantry","Character","Kroot","Shaper","Faction: T'au Empire","War Shaper"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Krootox Rampagers",
        pts: 85,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 6,
            saving: 5,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.hunting_blades,
            tau_empire_weapons.rampager_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.kroot_pistol_and_hunting_javelins,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.kroot_pistol_and_hunting_javelins, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.hunting_blades, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.rampager_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Kroot Linebreakers", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it, then roll one D6 for each model in this unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers D3 mortal wounds. If one or more enemy models are destroyed as a result of these mortal wounds, that enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Mounted","Grenades","Kroot","Faction: T'au Empire","Krootox Rampagers"],
        pointOptions: [{ models: 4, pts: 170 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Krootox Riders",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 6,
            saving: 5,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.krootox_fists,
            tau_empire_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            tau_empire_weapons.repeater_cannon,
            tau_empire_weapons.tanglecannon,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.repeater_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.tanglecannon, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.krootox_fists, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "Kroot Packmates", desc: "Once per turn, in your opponent's Shooting phase, when a friendly KROOT INFANTRY unit within 6\" of this unit is selected as the target of an attack, one unit from your army with this ability can use it. If it does, after that enemy unit has finished making its attacks, that unit with this ability can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)." },
        ],
        keywords: ["Mounted","Kroot","Krootox Riders","Faction: T'au Empire","Grenades"],
        pointOptions: [{ models: 2, pts: 60 }, { models: 3, pts: 90 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Longstrike [Legends]",
        pts: 140,
        units: 2,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.railgun_2,
            tau_empire_weapons.ion_cannon_standard_2,
            tau_empire_weapons.ion_cannon_overcharge_2,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.accelerator_burst_cannon,
            tau_empire_weapons.twin_pulse_carbine,
            tau_empire_weapons.smart_missile_system,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.railgun_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ion_cannon_standard_2, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ion_cannon_overcharge_2, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.accelerator_burst_cannon, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.twin_pulse_carbine, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.smart_missile_system, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Armour Hunter", desc: "Each time this model makes an attack that targets a MONSTER or VEHICLE, add 1 to the Hit roll." },
            { name: "XV02 Pilot Battlesuit", desc: "In your Command phase, you can select one friendly HAMMERHEAD GUNSHIP unit within 12\". Until the start of your next Command phase, ranged weapons equipped by models in that unit have the [LETHAL HITS] ability." },
        ],
        keywords: ["Epic Hero","Character","Fly","Vehicle","Longstrike","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Manta",
        pts: 2100,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 14,
            saving: 2,
            wounds: 60,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.heavy_rail_cannon,
            tau_empire_weapons.long_barrelled_burst_cannon_array,
            tau_empire_weapons.ion_cannon_standard,
            tau_empire_weapons.ion_cannon_overcharge,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.missile_pod,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.heavy_rail_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.long_barrelled_burst_cannon_array, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ion_cannon_standard, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.ion_cannon_overcharge, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Aggressive Deployment", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this TRANSPORT this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll." },
            { name: "Air Caste Colossus", desc: "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so." },
            { name: "Damaged: 1-20 Wounds Remaining", desc: "While this model has 1-20 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Titanic","Transport","Markerlight","Manta","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: "This model has a transport capacity of all of the following:\n- 200 T’AU EMPIRE INFANTRY or TACTICAL DRONE models\n- 4 DEVILFISH, SKY RAY GUNSHIP or HAMMERHEAD models\n- 8 BATTLESUIT models with a Wounds characteristic of 9 or less",
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Orca Dropship [Legends]",
        pts: 275,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 12,
            saving: 3,
            wounds: 28,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull_3,
        ],
        rangedWeapons: [
            tau_empire_weapons.long_barrelled_burst_cannon_2,
            tau_empire_weapons.missile_pod,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.long_barrelled_burst_cannon_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.armoured_hull_3, selected: true},
            ],
        },
        abilities: [
            { name: "Jet Pack Insertion", desc: "At the end of your opponent’s Movement phase, one or more units embarked within this TRANSPORT can disembark from it, provided every model in each of those disembarking units has the Deep Strike ability." },
            { name: "Damaged: 1-9 Wounds Remaining", desc: "While this model has 1-9 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Titanic","Transport","Orca Dropship","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: "This model has a transport capacity of 48 T’AU EMPIRE INFANTRY models. This model can also transport up to 6 BATTLESUIT models (these models take up the space of a number of models equal to their Wounds characteristic, e.g. a BATTLESUIT with a Wounds characteristic of 8 would take up the space of 8 models). This model cannot transport KROOT or VESPID STINGWINGS models.",
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Pathfinder Team",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.pulse_carbine,
            tau_empire_weapons.ion_rifle_standard,
            tau_empire_weapons.ion_rifle_overcharge,
            tau_empire_weapons.rail_rifle,
            tau_empire_weapons.drone_burst_cannon,
            tau_empire_weapons.pulse_pistol,
            tau_empire_weapons.semi_automatic_grenade_launcher_emp,
            tau_empire_weapons.semi_automatic_grenade_launcher_fusion,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.pulse_carbine, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ion_rifle_standard, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ion_rifle_overcharge, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.rail_rifle, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.drone_burst_cannon, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.pulse_pistol, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.semi_automatic_grenade_launcher_emp, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.semi_automatic_grenade_launcher_fusion, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Target Uploaded", desc: "Each time a model in this unit makes an attack that targets their Spotted unit, improve the Ballistic Skill characteristic of that attack by 1 and that attack has the **[IGNORES COVER]** ability." },
            { name: "Grav-inhibitor Drone", desc: "Each time an enemy unit selects the bearer's unit as the target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll)." },
            { name: "Pulse Accelerator Drone", desc: "Add 6\" to the Range characteristic of pulse carbines equipped by models in the bearer’s unit." },
            { name: "Recon Drone", desc: "The bearer is equipped with 1 drone burst cannon and the bearer’s unit has the Infiltrators ability." },
        ],
        keywords: ["Infantry","Grenades","Markerlight","Pathfinder Team","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Piranha",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 4,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull_4,
        ],
        rangedWeapons: [
            tau_empire_weapons.piranha_burst_cannon,
            tau_empire_weapons.piranha_fusion_blaster,
            tau_empire_weapons.twin_pulse_carbine,
            tau_empire_weapons.seeker_missile,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.piranha_burst_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.piranha_fusion_blaster, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.twin_pulse_carbine, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.armoured_hull_4, selected: true},
            ],
        },
        abilities: [
            { name: "Piranha", desc: "At the end of your Movement phase, select one enemy unit within 12\" of this unit; that enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Vehicle","Fly","Faction: T'au Empire","Piranha","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "R'varna Battlesuit [Legends]",
        pts: 200,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 15,
            leader: 7,
            control: 4,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists_3,
        ],
        rangedWeapons: [
            tau_empire_weapons.pulse_submunitions_cannon,
            tau_empire_weapons.missile_pod_3,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.pulse_submunitions_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.missile_pod_3, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.battlesuit_fists_3, selected: true},
            ],
        },
        abilities: [
            { name: "Nova Shielding", desc: "Once per battle, when this model is selected as the target of a ranged attack, it can use this ability. If it does, until the end of the phase, each time an attack targets this model, if the Strength characteristic of that attack is greater than the Toughness characteristic of this model, subtract 1 from the Wound roll." },
        ],
        keywords: ["Vehicle","Walker","Fly","R'varna","Battlesuit","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Razorshark Strike Fighter",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.quad_ion_turret_standard,
            tau_empire_weapons.quad_ion_turret_overcharge,
            tau_empire_weapons.missile_pod,
            tau_empire_weapons.accelerator_burst_cannon,
            tau_empire_weapons.seeker_missile,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.quad_ion_turret_standard, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.quad_ion_turret_overcharge, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.accelerator_burst_cannon, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Ground Strike Fighter", desc: "Each time this model makes a ranged attack that targets an enemy unit that cannot FLY, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Razorshark Strike Fighter","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Remora Stealth Drones [Legends]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 16,
            tough: 6,
            saving: 3,
            wounds: 5,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon_7,
        ],
        rangedWeapons: [
            tau_empire_weapons.remora_seeker_missile,
            tau_empire_weapons.twin_long_barrelled_burst_cannon,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.remora_seeker_missile, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.twin_long_barrelled_burst_cannon, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.close_combat_weapon_7, selected: true},
            ],
        },
        abilities: [
            { name: "Aerial Disengagement", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\"." },
        ],
        keywords: ["Vehicle","Fly","Markerlight","Remora Stealth Drones","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Remote Sensor Tower [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 8,
            saving: 4,
            wounds: 4,
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
            { name: "Orbital Comms Array (Aura)", desc: "While a friendly T'AU EMPIRE unit is within 6\" of this FORTIFICATION, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP." },
            { name: "Reinforced Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Fortification","Remote Sensor Tower","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Riptide Battlesuit",
        pts: 200,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 2,
            wounds: 14,
            leader: 7,
            control: 4,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tau_empire_weapons.riptide_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.heavy_burst_cannon,
            tau_empire_weapons.ion_accelerator_standard,
            tau_empire_weapons.ion_accelerator_overcharge,
            tau_empire_weapons.twin_smart_missile_system_2,
            tau_empire_weapons.missile_pod_3,
            tau_empire_weapons.twin_fusion_blaster_2,
            tau_empire_weapons.twin_plasma_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.heavy_burst_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ion_accelerator_standard, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ion_accelerator_overcharge, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.twin_smart_missile_system_2, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.missile_pod_3, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.twin_fusion_blaster_2, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.twin_plasma_rifle, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.riptide_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Nova Charge", desc: "Once per battle, when this unit is selected to shoot in your Shooting phase, select one ranged weapon equipped by this model. Until the end of the phase, that weapon has the [DEVASTATING WOUNDS] ability." },
        ],
        keywords: ["Vehicle","Walker","Fly","Battlesuit","Faction: T'au Empire","Riptide","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Shas'nel [Crucible]",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 4,
            wounds: 3,
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
            { name: "Volley Fire", desc: "While this model is leading a unit, add 1 to the Attacks characteristic of ranged weapons equipped by models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Breacher Team**\n- **Strike Team**" },
        ],
        keywords: ["Character","Infantry","Crucible","Grenades","Faction: T'au Empire","Shas'nel"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "Shas'o R'alai [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 8,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists,
        ],
        rangedWeapons: [
            tau_empire_weapons.experimental_pulse_submunitions_rifle_emp,
            tau_empire_weapons.experimental_pulse_submunitions_rifle_ionic_cluster_beam_shell,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.experimental_pulse_submunitions_rifle_emp, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.experimental_pulse_submunitions_rifle_ionic_cluster_beam_shell, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.battlesuit_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Eclipse Field Generator", desc: "While this model is leading a unit, models in that unit have a 5+ invulnerable save." },
            { name: "Assassin", desc: "Each time this model makes an attack that targets a **Character** unit, you can re-roll the Hit roll." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **XV9 Hazard Battlesuits**" },
            { name: "Blacklight Marker Drones", desc: "Twice per battle, when this unit is an Observer unit, until the end of the phase, each time a ranged attack is made by a model in their Guided unit that targets their Spotted unit, re-roll a Wound roll of 1.\n**Designer’s Note:** *Place two Blacklight Marker Drone tokens next to this model, removing one each time this ability has been used.*" },
        ],
        keywords: ["Epic Hero","Character","Vehicle","Walker","Fly","Markerlight","Shas'o R'alai","Battlesuit","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Sky Ray Gunship",
        pts: 150,
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
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.seeker_missile_rack,
            tau_empire_weapons.accelerator_burst_cannon,
            tau_empire_weapons.twin_pulse_carbine,
            tau_empire_weapons.smart_missile_system,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.seeker_missile_rack, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.accelerator_burst_cannon, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.twin_pulse_carbine, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.smart_missile_system, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Velocity Tracker", desc: "Each time this model makes an attack with a ranged weapon that targets a unit that can FLY, you can re-roll the Hit roll." },
        ],
        keywords: ["Vehicle","Fly","Markerlight","Sky Ray Gunship","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Stealth Battlesuits",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists_4,
        ],
        rangedWeapons: [
            tau_empire_weapons.burst_cannon,
            tau_empire_weapons.fusion_blaster_2,
            tau_empire_weapons.pulse_pistol,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.burst_cannon, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.fusion_blaster_2, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.pulse_pistol, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.battlesuit_fists_4, selected: true},
            ],
        },
        abilities: [
            { name: "Forward Observers", desc: "Each time this unit is an Observer unit, until the end of the phase, each time a ranged attack is made by a model in a Guided unit that targets their Spotted unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
        ],
        keywords: ["Infantry","Fly","Battlesuit","Stealth","Faction: T'au Empire","Grenades","Markerlight","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Stormsurge",
        pts: 360,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 11,
            saving: 2,
            wounds: 20,
            leader: 7,
            control: 6,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tau_empire_weapons.thunderous_footfalls,
        ],
        rangedWeapons: [
            tau_empire_weapons.cluster_rocket_system,
            tau_empire_weapons.destroyer_missiles,
            tau_empire_weapons.twin_smart_missile_system_3,
            tau_empire_weapons.pulse_driver_cannon,
            tau_empire_weapons.pulse_blast_cannon_focused,
            tau_empire_weapons.pulse_blast_cannon_dispersed,
            tau_empire_weapons.twin_airbursting_fragmentation_projector,
            tau_empire_weapons.twin_burst_cannon_3,
            tau_empire_weapons.twin_tau_flamer,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.cluster_rocket_system, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.destroyer_missiles, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.twin_smart_missile_system_3, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.pulse_driver_cannon, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.pulse_blast_cannon_focused, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.pulse_blast_cannon_dispersed, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.twin_airbursting_fragmentation_projector, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.twin_burst_cannon_3, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.twin_tau_flamer, selected: true},
            ],
            slot10: [
                {...tau_empire_weapons.thunderous_footfalls, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-5 Wounds Remaining", desc: "While this model has 1-5 wounds remaining, subtract 3 from this models Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Heavy Walker", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding TITANIC models) and terrain features that are 4\" or less in height as if they were not there." },
            { name: "Support System", desc: "Each time this model makes a ranged attack, you can ignore any or all modifiers to the Hit roll." },
            { name: "Titan-killer", desc: "Each time this model makes a ranged attack that targets a TITANIC or TOWERING unit, you can re-roll the Hit roll." },
        ],
        keywords: ["Vehicle","Walker","Titanic","Towering","Stormsurge","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "battleline",
        name: "Strike Team",
        pts: 70,
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
            tau_empire_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.pulse_carbine,
            tau_empire_weapons.pulse_pistol,
            tau_empire_weapons.pulse_rifle,
            tau_empire_weapons.support_turret,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.pulse_carbine, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.pulse_pistol, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.pulse_rifle, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.support_turret, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Suppression Volley", desc: "In your Shooting phase, after this unit has shot, select one enemy INFANTRY unit hit by one or more of those attacks. Until the start of your next turn, while unit is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
            { name: "DS8 Support Turret", desc: "In your Movement phase, if this unit Remains Stationary, until the start of your next turn, its Shas’ui model is equipped with the support turret weapon.\n\nDesigner’s Note: Place a Support Turret token next to this unit to remind you." },
        ],
        keywords: ["Infantry","Battleline","Grenades","Markerlight","Fire Warrior","Strike Team","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Sun Shark Bomber",
        pts: 160,
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
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.twin_ion_rifle_standard,
            tau_empire_weapons.twin_ion_rifle_overcharged,
            tau_empire_weapons.twin_missile_pod_2,
            tau_empire_weapons.missile_pod,
            tau_empire_weapons.seeker_missile,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.twin_ion_rifle_standard, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.twin_ion_rifle_overcharged, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.twin_missile_pod_2, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Pulse Bombs", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 4+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Sun Shark Bomber","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Ta'unar Supremacy Armour",
        pts: 790,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 13,
            saving: 2,
            wounds: 30,
            leader: 7,
            control: 10,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.crushing_feet,
        ],
        rangedWeapons: [
            tau_empire_weapons.tri_axis_ion_cannon_standard,
            tau_empire_weapons.tri_axis_ion_cannon_supercharge,
            tau_empire_weapons.fusion_eradicator,
            tau_empire_weapons.pulse_ordnance_driver,
            tau_empire_weapons.nexus_missile_launcher,
            tau_empire_weapons.heavy_rail_cannon_array,
            tau_empire_weapons.fragmentation_cluster_shell_launcher,
            tau_empire_weapons.burst_cannon,
            tau_empire_weapons.smart_missile_system,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.tri_axis_ion_cannon_standard, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.tri_axis_ion_cannon_supercharge, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.fusion_eradicator, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.pulse_ordnance_driver, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.nexus_missile_launcher, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.heavy_rail_cannon_array, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.fragmentation_cluster_shell_launcher, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.burst_cannon, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.smart_missile_system, selected: true},
            ],
            slot10: [
                {...tau_empire_weapons.crushing_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Coordinated Strike", desc: "While this model is a Guided unit, each time it makes an attack that targets its Spotted unit, re-roll a Hit roll of 1." },
            { name: "Damaged: 1-10 Wounds Remaining", desc: "While this model has 1-10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Super-Heavy Walker", desc: "Each time a model with this ability makes a Normal, Advance or Fall Back move, it can move through models (excluding **Titanic** models) and terrain features that are 4\" or less in height as if they were not there." },
        ],
        keywords: ["Vehicle","Titanic","Walker","Towering","Faction: T'au Empire","Ta'unar Supremacy Armour","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Tactical Drones [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            tau_empire_weapons.twin_pulse_carbine_3,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.twin_pulse_carbine_3, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Drone","Fly","Tactical Drones","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [{ models: 4, pts: 70 }, { models: 8, pts: 70 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Tetras [Legends]",
        pts: 80,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 4,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.close_combat_weapons_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.pulse_rifle,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.pulse_rifle, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.close_combat_weapons_2, selected: true},
            ],
        },
        abilities: [
            { name: "High-intensity Markerlights", desc: "Each time this unit is an Observer unit, until the end of the phase, each time a model in its Guided unit makes an attack that targets their Spotted unit, you can re-roll the Hit roll." },
        ],
        keywords: ["Vehicle","Fly","Markerlight","Tetras","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [{ models: 2, pts: 160 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "characters",
        name: "The Twin Lance",
        pts: 185,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 6,
            saving: 2,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            tau_empire_weapons.fusion_eliminator,
            tau_empire_weapons.ion_scattercannon,
            tau_empire_weapons.xv_pulse_pistol,
        ],
        rangedWeapons: [
            tau_empire_weapons.fusion_eliminator_2,
            tau_empire_weapons.ion_scattercannon_overcharge,
            tau_empire_weapons.ion_scattercannon_standard,
            tau_empire_weapons.shardstorm_burst_system,
            tau_empire_weapons.twin_pulse_blaster,
            tau_empire_weapons.xv_pulse_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.fusion_eliminator_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ion_scattercannon_overcharge, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ion_scattercannon_standard, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.shardstorm_burst_system, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.twin_pulse_blaster, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.xv_pulse_pistol_2, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.fusion_eliminator, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.ion_scattercannon, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.xv_pulse_pistol, selected: true},
            ],
        },
        abilities: [
            { name: "Neocapacitor Shields", desc: "At the start of your opponent’s Charge phase, you can select one enemy unit (excluding **Monster** and **Vehicle** units) within 12\" of this unit. That unit must take a Battle‑shock test and, until the end of the turn, subtract 1 from Charge rolls made for that unit." },
            { name: "Exemplars of Mont’ka", desc: "Each time a model in this unit makes a ranged attack that targets the closest eligible target, that attack has the **[SUSTAINED HITS 1]** and **[IGNORES COVER]** abilities." },
            { name: "Retro-thrusters", desc: "At the end of the Fight phase, if this unit was eligible to fight this phase, this unit can either make a Normal move of up to 6\" or a Fall Back move." },
        ],
        keywords: ["Epic Hero","Vehicle","Walker","Fly","Character","Battlesuit","Faction: T'au Empire","Non-Kroot","The Twin Lance"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Tidewall Droneport",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 4,
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
            tau_empire_weapons.drone_defenders,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.drone_defenders, selected: true},
            ],
        },
        abilities: [
            { name: "Droneport", desc: "Each time this FORTIFICATION is selected to shoot, its drone defenders weapon will target and resolve attacks against every enemy unit that is an eligible target to this FORTIFICATION." },
        ],
        keywords: ["Fortification","Vehicle","Transport","Fly","Faction: T'au Empire","Tidewall Droneport","Non-Kroot"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models.",
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Tidewall Gunrig",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 4,
            tough: 8,
            saving: 3,
            wounds: 14,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            tau_empire_weapons.supremacy_railgun,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.supremacy_railgun, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: ["Fortification","Vehicle","Transport","Fly","Tidewall Gunrig","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models.",
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Tidewall Shieldline",
        pts: 20,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 4,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Tidewall Defence Platform", desc: "If equipped with a Tidewall defence platform, this FORTIFICATION has a Wounds characteristic of 15." },
        ],
        keywords: ["Fortification","Vehicle","Transport","Fly","Tidewall Shieldline","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models. If this model is equipped with a Tidewall defence platform, it has a transport capacity of 22 T’AU INFANTRY models instead.",
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Tiger Shark",
        pts: 325,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 11,
            saving: 3,
            wounds: 18,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull,
        ],
        rangedWeapons: [
            tau_empire_weapons.ion_cannon_standard,
            tau_empire_weapons.ion_cannon_overcharge,
            tau_empire_weapons.swiftstrike_burst_cannon,
            tau_empire_weapons.skyspear_missile_rack,
            tau_empire_weapons.cyclic_ion_blaster_standard,
            tau_empire_weapons.cyclic_ion_blaster_overcharge,
            tau_empire_weapons.burst_cannon,
            tau_empire_weapons.swiftstrike_railgun,
            tau_empire_weapons.seeker_missile,
            tau_empire_weapons.missile_pod,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.ion_cannon_standard, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ion_cannon_overcharge, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.swiftstrike_burst_cannon, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.skyspear_missile_rack, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.cyclic_ion_blaster_standard, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.cyclic_ion_blaster_overcharge, selected: true},
            ],
            slot7: [
                {...tau_empire_weapons.burst_cannon, selected: true},
            ],
            slot8: [
                {...tau_empire_weapons.swiftstrike_railgun, selected: true},
            ],
            slot9: [
                {...tau_empire_weapons.seeker_missile, selected: true},
            ],
            slot10: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot11: [
                {...tau_empire_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Strafing Run", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks that cannot FLY. That enemy unit must take a Battle-shock test." },
            { name: "Transport bay", desc: "The bearer has the TRANSPORT keyword and has a transport capacity of 12 TACTICAL DRONES models." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Tiger Shark","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "TX42 Piranha [Legends]",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 4,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.armoured_hull_4,
        ],
        rangedWeapons: [
            tau_empire_weapons.rail_rifle_2,
            tau_empire_weapons.plasma_rifle_2,
            tau_empire_weapons.fusion_blaster_2,
            tau_empire_weapons.missile_pod,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.rail_rifle_2, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.plasma_rifle_2, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.fusion_blaster_2, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.missile_pod, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.armoured_hull_4, selected: true},
            ],
        },
        abilities: [
            { name: "Outflank", desc: "When this unit arrives from Strategic Reserves, it can be set up within your opponent’s deployment zone (all other restrictions still apply)." },
        ],
        keywords: ["Vehicle","Fly","Faction: T'au Empire","TX42 Piranha","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Vespid Stingwings",
        pts: 65,
        units: 4,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            tau_empire_weapons.stingwing_claws,
        ],
        rangedWeapons: [
            tau_empire_weapons.neutron_grenade_launcher,
            tau_empire_weapons.neutron_rail_rifle,
            tau_empire_weapons.neutron_blaster,
            tau_empire_weapons.tau_flamer,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.neutron_grenade_launcher, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.neutron_rail_rifle, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.neutron_blaster, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.tau_flamer, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.stingwing_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Airborne Agility", desc: "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
            { name: "Oversight Drone", desc: "Once per battle, when the bearer’s unit is selected to shoot, until the end of the phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability.\n\nDesigner’s Note: Place an Oversight Drone token next to the bearer, removing it once this ability has been used." },
        ],
        keywords: ["Infantry","Fly","Faction: T'au Empire","Vespid Stingwings","Non-Kroot"],
        pointOptions: [{ models: 6, pts: 130 }],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "XV9 Hazard Battlesuits [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
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
            tau_empire_weapons.battlesuit_fists_2,
        ],
        rangedWeapons: [
            tau_empire_weapons.fusion_cascade,
            tau_empire_weapons.phased_ion_gun,
            tau_empire_weapons.twin_hazard_burst_cannon,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.fusion_cascade, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.phased_ion_gun, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.twin_hazard_burst_cannon, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.battlesuit_fists_2, selected: true},
            ],
        },
        abilities: [
            { name: "Photon Casters", desc: "In your Shooting phase, after this unit has shot, if an enemy **Infantry** unit was hit by one or more of those attacks, until the end of your opponent’s next turn, that enemy unit is stunned. While a unit is stunned, subtract 2 from that unit’s Move characteristic, and subtract 2 from Advance and Charge rolls made for that unit." },
        ],
        keywords: ["Vehicle","Walker","Fly","XV9 Hazard","Battlesuit","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "tau_empire",
        class: "other",
        name: "Y'vahra Battlesuit [Legends]",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 9,
            saving: 2,
            wounds: 15,
            leader: 7,
            control: 4,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            tau_empire_weapons.battlesuit_fists_3,
        ],
        rangedWeapons: [
            tau_empire_weapons.flechette_pod,
            tau_empire_weapons.ionic_discharge_cannon_standard,
            tau_empire_weapons.ionic_discharge_cannon_overcharge,
            tau_empire_weapons.phased_plasma_flamer,
            tau_empire_weapons.missile_pod_3,
        ],
        weapon_options: {
            slot1: [
                {...tau_empire_weapons.flechette_pod, selected: true},
            ],
            slot2: [
                {...tau_empire_weapons.ionic_discharge_cannon_standard, selected: true},
            ],
            slot3: [
                {...tau_empire_weapons.ionic_discharge_cannon_overcharge, selected: true},
            ],
            slot4: [
                {...tau_empire_weapons.phased_plasma_flamer, selected: true},
            ],
            slot5: [
                {...tau_empire_weapons.missile_pod_3, selected: true},
            ],
            slot6: [
                {...tau_empire_weapons.battlesuit_fists_3, selected: true},
            ],
        },
        abilities: [
            { name: "Nova Burst", desc: "Once per battle, before this model makes a Normal, Advance or Fall Back move, it can use this ability. If it does, until the end of the phase, it has a Move characteristic of 18\"." },
        ],
        keywords: ["Vehicle","Walker","Fly","Battlesuit","Y'vahra","Faction: T'au Empire","Non-Kroot"],
        pointOptions: [],
        transport: null,
    },
]

export default tau_empire_army
