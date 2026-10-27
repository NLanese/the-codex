// AUTO-GENERATED units for Dark Angels (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import dark_angels_weapons from "../weapons/dark_angels"

const dark_angels_army = [
    {
        army: "dark_angels",
        class: "characters",
        name: "Asmodai",
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
            wounds: 4,
            leader: 5,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.crozius_arcanum_and_power_weapon_strike,
            dark_angels_weapons.crozius_arcanum_and_power_weapon_sweep,
        ],
        rangedWeapons: [
            dark_angels_weapons.heavy_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.crozius_arcanum_and_power_weapon_strike, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.crozius_arcanum_and_power_weapon_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable save", desc: "4+" },
            { name: "Exemplar of Hate", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Hit roll." },
            { name: "Feared Interrogator", desc: "At the start of the Fight phase, each enemy Character unit within 6\" of this model must take a Battle-shock test, subtracting 1 from that test when they do. In addition, each time this model destroys an enemy Character model with a melee attack, you gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Hellblaster Squad\n- Infernus Squad\n- Inner Circle Companions\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Grenades","Imperium","Faction: Dark Angels","Faction: Adeptus Astartes","Asmodai","Chaplain","Tacticus","Deathwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Azrael",
        pts: 125,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.the_sword_of_secrets,
        ],
        rangedWeapons: [
            dark_angels_weapons.lions_wrath,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.lions_wrath, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.the_sword_of_secrets, selected: true},
            ],
        },
        abilities: [
            { name: "Supreme Grand Master", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Masterful Tactician", desc: "At the start of your Command phase, if this model is on the battlefield, you gain 1CP." },
            { name: "The Lion Helm", desc: "Models in the bearer’s unit have a 4+ invulnerable save. In addition, once per battle, in any phase, the bearer can summon a Watcher in the Dark. When it does, until the end of the phase, models in the bearer’s unit have the Feel No Pain 4+ ability against mortal wounds." },
            { name: "Invulnerable save", desc: "4+" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Hellblaster Squad\n- Infernus Squad\n- Inner Circle Companions\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Grenades","Imperium","Tacticus","Azrael","Faction: Dark Angels","Faction: Adeptus Astartes","Chapter Master","Deathwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Belial",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.the_sword_of_silence,
        ],
        rangedWeapons: [
            dark_angels_weapons.master_crafted_storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.master_crafted_storm_bolter, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.the_sword_of_silence, selected: true},
            ],
        },
        abilities: [
            { name: "Grand Master of the Deathwing", desc: "While this model is leading a unit, each time a model in that unit makes an attack, if a Critical Hit is scored, that attack has the [PRECISION] ability." },
            { name: "Strikes of Retribution", desc: "Each time a melee attack is allocated to this model, after the attacking model’s unit has finished making its attacks, roll one D6 (to a maximum of six D6 per attacking unit): for each 4+, the attacking unit suffers 1 mortal wound." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Leader", desc: "This unit can be attached to the following units:\n- Deathwing Knights\n- Deathwing Terminator Squad\n- Terminator Assault Squad\n- Terminator Squad" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Captain","Faction: Dark Angels","Faction: Adeptus Astartes","Imperium","Belial","Terminator","Deathwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Deathwing Command Squad [Legends]",
        pts: 200,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.power_fist,
            dark_angels_weapons.chainfist,
            dark_angels_weapons.halberd_of_caliban,
            dark_angels_weapons.power_weapon,
            dark_angels_weapons.thunder_hammer,
        ],
        rangedWeapons: [
            dark_angels_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.power_fist, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.chainfist, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.halberd_of_caliban, selected: true},
            ],
            slot5: [
                {...dark_angels_weapons.power_weapon, selected: true},
            ],
            slot6: [
                {...dark_angels_weapons.thunder_hammer, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Astartes Banner", desc: "While this unit contains an Ancient, add 1 to the Objective Control characteristic of its models." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Narthecium", desc: "While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding Character models) to this unit." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Honour or Death", desc: "While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 4." },
            { name: "Watcher in the Dark", desc: "Once per battle, in any phase, just after a mortal wound is allocated to an Adeptus Astartes model in this unit, this unit can summon a Watcher in the Dark. When it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability against mortal wounds." },
            { name: "Attached Unit", desc: "If a Character unit from your army with the Leader ability can be attached to a Terminator Squad, it can be attached to this unit instead." },
        ],
        keywords: ["Infantry","Imperium","Deathwing","Deathwing Command Squad","Terminator","Faction: Dark Angels","Faction: Adeptus Astartes"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Deathwing Knights",
        pts: 250,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 5,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.mace_of_absolution,
            dark_angels_weapons.power_weapon_2,
            dark_angels_weapons.great_weapon_of_the_unforgiven,
            dark_angels_weapons.relic_weapon,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.mace_of_absolution, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.power_weapon_2, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.great_weapon_of_the_unforgiven, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.relic_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Watcher in the Dark", desc: "Once per battle, in any phase, just after a mortal wound is allocated to an Adeptus Astartes model in this unit, this unit can summon a Watcher in the Dark. When it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability against mortal wounds." },
            { name: "Inner Circle", desc: "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Attached Unit", desc: "If a Character unit from your army with the Leader ability can be attached to a Terminator Squad, it can be attached to this unit instead." },
            { name: "Teleport Homer", desc: "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" horizontally of that token and not within 9\" horizontally of any enemy models. That token is then removed." },
        ],
        keywords: ["Infantry","Imperium","Faction: Dark Angels","Faction: Adeptus Astartes","Deathwing Knights","Terminator","Deathwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Deathwing Strikemaster [Legends]",
        pts: 80,
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
            dark_angels_weapons.master_crafted_power_weapon,
            dark_angels_weapons.chainfist_2,
            dark_angels_weapons.mace_of_absolution_2,
            dark_angels_weapons.power_fist_2,
            dark_angels_weapons.thunder_hammer_2,
            dark_angels_weapons.twin_lightning_claws,
        ],
        rangedWeapons: [
            dark_angels_weapons.storm_bolter_2,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.storm_bolter_2, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.master_crafted_power_weapon, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.chainfist_2, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.mace_of_absolution_2, selected: true},
            ],
            slot5: [
                {...dark_angels_weapons.power_fist_2, selected: true},
            ],
            slot6: [
                {...dark_angels_weapons.thunder_hammer_2, selected: true},
            ],
            slot7: [
                {...dark_angels_weapons.twin_lightning_claws, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Leader", desc: "This unit can be attached to the following units:\n- Deathwing Command Squad\n- Deathwing Terminator Squad\n\n- Relic Terminator Squad\n- Terminator Assault Squad\n- Terminator Squad" },
            { name: "Tactical Precision", desc: "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability." },
            { name: "Vanquish the Foe", desc: "Each time this model makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Hit roll and add 1 to the Wound roll." },
            { name: "Storm Shield", desc: "The bearer has a Wounds characteristic of 6." },
        ],
        keywords: ["Character","Infantry","Imperium","Faction: Dark Angels","Faction: Adeptus Astartes","Deathwing","Deathwing Strikemaster","Terminator","Lieutenant"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Deathwing Terminator Squad",
        pts: 180,
        units: 5,
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
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.power_weapon,
            dark_angels_weapons.power_fist,
            dark_angels_weapons.chainfist,
        ],
        rangedWeapons: [
            dark_angels_weapons.storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.storm_bolter, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.power_weapon, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.power_fist, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.chainfist, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save." },
            { name: "Deathwing", desc: "Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill or Weapon Skill characteristics and/or to the Hit roll.\nIn addition, each time a model in this unit makes an attack that targets your Oath of Moment target (see Codex: Space Marines), add 1 to the Hit roll." },
            { name: "Attached Unit", desc: "If a Character unit from your army with the Leader ability can be attached to a Terminator Squad, it can be attached to this unit instead." },
            { name: "Teleport Homer", desc: "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" horizontally of that token and not within 9\" horizontally of any enemy models. That token is then removed." },
            { name: "Watcher in the Dark", desc: "Once per battle, in any phase, just after a mortal wound is allocated to an Adeptus Astartes model in this unit, this unit can summon a Watcher in the Dark. When it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability against mortal wounds." },
        ],
        keywords: ["Infantry","Imperium","Deathwing Terminator Squad","Faction: Dark Angels","Faction: Adeptus Astartes","Terminator","Deathwing"],
        pointOptions: [{ models: 5, pts: 360 }],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Ezekiel",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 2,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.traitors_bane,
        ],
        rangedWeapons: [
            dark_angels_weapons.the_deliverer,
            dark_angels_weapons.mind_wipe_witchfire,
            dark_angels_weapons.mind_wipe_focussed_witchfire,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.the_deliverer, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.mind_wipe_witchfire, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.mind_wipe_focussed_witchfire, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.traitors_bane, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable save", desc: "4+" },
            { name: "Engulfing Fear [Psychic]", desc: "In your Shooting phase, you can select one enemy unit within 18\" of this model. That enemy unit must take a Battle-shock test." },
            { name: "Book of Salvation", desc: "While this model is leading a unit, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit. When this model is destroyed, each friendly Adeptus Astartes unit within 6\" of this model must take a Battle-shock test." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Hellblaster Squad\n- Infernus Squad\n- Inner Circle Companions\n- Intercessor Squad\n- Sternguard Veterans Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Grenades","Imperium","Psyker","Ezekiel","Faction: Dark Angels","Faction: Adeptus Astartes","Librarian","Deathwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Inner Circle Companions",
        pts: 90,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 4,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            dark_angels_weapons.calibanite_greatsword_strike,
            dark_angels_weapons.calibanite_greatsword_sweep,
        ],
        rangedWeapons: [
            dark_angels_weapons.heavy_bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.heavy_bolt_pistol, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.calibanite_greatsword_strike, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.calibanite_greatsword_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Attached Unit", desc: "If a Character unit from your army with the Leader ability can be attached to a Sternguard Veteran Squad, it can be attached to this unit instead." },
            { name: "Braziers of Judgement", desc: "While a Character model is leading this unit, each time an attack targets this unit, subtract 1 from the Hit roll." },
            { name: "Emnity for the Unworthy", desc: "Each time a model in this unit makes an attack that targets a Character unit, add 1 to the Hit roll." },
        ],
        keywords: ["Infantry","Imperium","Faction: Dark Angels","Tacticus","Inner Circle Companions","Faction: Adeptus Astartes","Deathwing"],
        pointOptions: [{ models: 3, pts: 180 }],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Land Speeder Vengeance",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            dark_angels_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            dark_angels_weapons.plasma_storm_battery_standard,
            dark_angels_weapons.plasma_storm_battery_supercharge,
            dark_angels_weapons.assault_cannon,
            dark_angels_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.plasma_storm_battery_standard, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.plasma_storm_battery_supercharge, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.assault_cannon, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.heavy_bolter, selected: true},
            ],
            slot5: [
                {...dark_angels_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "5+" },
            { name: "Storm of Vengeance", desc: "Once per turn, in your opponent’s Shooting phase, when another friendly Adeptus Astartes unit within 6\" of this model is destroyed, one model with this ability can use it. If it does, after the attacking unit has finished making its attacks, that model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)." },
        ],
        keywords: ["Fly","Imperium","Vehicle","Land Speeder Vengeance","Faction: Adeptus Astartes","Faction: Dark Angels","Ravenwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Lazarus",
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
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.enmity_s_edge,
        ],
        rangedWeapons: [
            dark_angels_weapons.bolt_pistol,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.enmity_s_edge, selected: true},
            ],
        },
        abilities: [
            { name: "Intractable Will", desc: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
            { name: "The Spiritshield Helm", desc: "This model has the Feel No Pain 3+ ability against Psychic Attacks and mortal wounds." },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Infernus Squad\n- Inner Circle Companions\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Captain","Grenades","Imperium","Faction: Dark Angels","Faction: Adeptus Astartes","Lazarus","Tacticus","Deathwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Lion El'Jonson",
        pts: 315,
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
            invuln: 3
        },
        meleeWeapons: [
            dark_angels_weapons.fealty_strike,
            dark_angels_weapons.fealty_sweep,
        ],
        rangedWeapons: [
            dark_angels_weapons.arma_luminis_bolt,
            dark_angels_weapons.arma_luminis_plasma,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.arma_luminis_bolt, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.arma_luminis_plasma, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.fealty_strike, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.fealty_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Primarch of the First Legion", desc: "At the start of your Command phase, select two Primarch of the First Legion abilities. Until the start of your next Command phase, this model has those abilities." },
            { name: "The Emperor's Shield", desc: "Each time an attack is allocated to this model, if the Strength characteristic of that attack is greater than the Toughness characteristic of this model, subtract 1 from the Wound roll." },
            { name: "Dark Angels Bodyguard", desc: "While this model is within 3\" of one or more friendly **Adeptus Astartes Infantry** units, this model has the Lone Operative ability." },
            { name: "Invulnerable Save", desc: "3+" },
        ],
        keywords: ["Character","Epic Hero","Monster","Imperium","Faction: Dark Angels","Faction: Adeptus Astartes","Primarch","Lion El'Jonson"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Nephilim Jetfighter",
        pts: 195,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            dark_angels_weapons.armoured_hull,
        ],
        rangedWeapons: [
            dark_angels_weapons.blacksword_missiles,
            dark_angels_weapons.twin_heavy_bolter,
            dark_angels_weapons.avenger_mega_bolter,
            dark_angels_weapons.nephilim_lascannons,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.blacksword_missiles, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.twin_heavy_bolter, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.avenger_mega_bolter, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.nephilim_lascannons, selected: true},
            ],
            slot5: [
                {...dark_angels_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Lightning-fast Manoeuvres", desc: "Each time a ranged attack targets this model, subtract 1 from the Hit roll. If that attack was made by a model that can Fly, subtract 1 from the Wound roll as well." },
            { name: "Damaged: 1-3 Wounds Remaining", desc: "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "5+" },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Imperium","Nephilim Jetfighter","Faction: Adeptus Astartes","Faction: Dark Angels","Ravenwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Ravenwing Black Knights",
        pts: 80,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            dark_angels_weapons.black_knight_combat_weapon,
        ],
        rangedWeapons: [
            dark_angels_weapons.bolt_pistol_2,
            dark_angels_weapons.plasma_talon_standard,
            dark_angels_weapons.plasma_talon_supercharged,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.plasma_talon_standard, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.plasma_talon_supercharged, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.black_knight_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Knights of Caliban", desc: "Each time this unit is selected to fight, if it made a Charge move this turn, until the end of the phase, melee weapons equipped by models in this unit have the [ANTI-MONSTER 4+] and [ANTI-VEHICLE 4+] abilities." },
            { name: "Attached Unit", desc: "If a Character unit from your army with the Leader ability can be attached to an Outrider Squad, it can be attached to this unit instead." },
            { name: "Invulnerable Save", desc: "5+" },
        ],
        keywords: ["Mounted","Grenades","Imperium","Faction: Dark Angels","Faction: Adeptus Astartes","Ravenwing Black Knights","Ravenwing"],
        pointOptions: [{ models: 3, pts: 160 }],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Ravenwing Command Squad",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            dark_angels_weapons.black_knight_combat_weapon,
            dark_angels_weapons.master_crafted_power_weapon_2,
        ],
        rangedWeapons: [
            dark_angels_weapons.bolt_pistol_2,
            dark_angels_weapons.plasma_talon_standard,
            dark_angels_weapons.plasma_talon_supercharged,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.bolt_pistol_2, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.plasma_talon_standard, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.plasma_talon_supercharged, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.black_knight_combat_weapon, selected: true},
            ],
            slot5: [
                {...dark_angels_weapons.master_crafted_power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This unit can be attached to the following units:\n- Outrider Squad\n- Ravenwing Black Knights" },
            { name: "Invulnerable Save", desc: "5+" },
            { name: "Narthecium", desc: "While this unit contains a Ravenwing Apothecary, in your Command phase, you can return 1 destroyed model (excluding Character and Invader ATV models) to this unit." },
            { name: "Astartes Banner", desc: "While this unit contains a Ravenwing Ancient, add 1 to the Objective Control characteristic of models in this unit." },
            { name: "Honour or Death", desc: "While this unit contains a Ravenwing Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP." },
        ],
        keywords: ["Mounted","Grenades","Imperium","Ravenwing Command Squad","Faction: Dark Angels","Faction: Adeptus Astartes","Ravenwing","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Ravenwing Dark Talon",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 11,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            dark_angels_weapons.armoured_hull,
        ],
        rangedWeapons: [
            dark_angels_weapons.hurricane_bolter,
            dark_angels_weapons.rift_cannon,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.hurricane_bolter, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.rift_cannon, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "5+" },
            { name: "Stasis Bomb", desc: "Once per battle, one model from your army with this ability can use it after it ends a Normal move. If it does, you can select one enemy unit (excluding Aircraft) that model moved over this phase. That unit suffers D3 mortal wounds and you must roll one D6: on a 1-3, that unit cannot Advance or Fall Back in your opponent’s next Movement phase; on a 4-6, that unit must Remain Stationary in your opponent’s next Movement phase. Each model can only use this ability once per battle." },
            { name: "Damaged: 1-3 Wounds Remaining", desc: "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Imperium","Fly","Vehicle","Aircraft","Dark Talon","Faction: Adeptus Astartes","Faction: Dark Angels","Ravenwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "other",
        name: "Ravenwing Darkshroud",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            dark_angels_weapons.close_combat_weapon,
        ],
        rangedWeapons: [
            dark_angels_weapons.assault_cannon,
            dark_angels_weapons.heavy_bolter,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.assault_cannon, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.heavy_bolter, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.close_combat_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "5+" },
            { name: "Icon of Old Caliban (Aura)", desc: "While a friendly Adeptus Astartes unit is within 6\" of this model, models in that unit have the Stealth ability and each time a ranged attack targets that unit, that unit has the Benefit of Cover against that attack." },
        ],
        keywords: ["Darkshroud","Imperium","Fly","Vehicle","Faction: Dark Angels","Faction: Adeptus Astartes","Ravenwing"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Ravenwing Talonmaster [Legends]",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 16,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            dark_angels_weapons.power_weapon_3,
        ],
        rangedWeapons: [
            dark_angels_weapons.twin_heavy_bolter,
            dark_angels_weapons.twin_assault_cannon,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.twin_heavy_bolter, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.twin_assault_cannon, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.power_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Talonmaster", desc: "While this model is within 3\" of one or more other friendly Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle units, this model has the Lone Operative ability." },
            { name: "Nowhere To Hide", desc: "While a friendly Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle unit is within 6\" of this model, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability." },
            { name: "Master of Manoeuvre", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model is not within Engagement Range of one or more enemy units, this model can make a Normal move of up to 6\"." },
            { name: "Invulnerable Save", desc: "5+" },
        ],
        keywords: ["Vehicle","Character","Fly","Ravenwing","Ravenwing Talonmaster","Faction: Adeptus Astartes","Faction: Dark Angels","Imperium"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "dark_angels",
        class: "characters",
        name: "Sammael",
        pts: 115,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 3,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            dark_angels_weapons.the_raven_sword,
        ],
        rangedWeapons: [
            dark_angels_weapons.bolt_pistol,
            dark_angels_weapons.master_crafted_plasma_cannon,
            dark_angels_weapons.twin_storm_bolter,
        ],
        weapon_options: {
            slot1: [
                {...dark_angels_weapons.bolt_pistol, selected: true},
            ],
            slot2: [
                {...dark_angels_weapons.master_crafted_plasma_cannon, selected: true},
            ],
            slot3: [
                {...dark_angels_weapons.twin_storm_bolter, selected: true},
            ],
            slot4: [
                {...dark_angels_weapons.the_raven_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Outrider Squad\n- Ravenwing Black Knights" },
            { name: "Invulnerable Save", desc: "4+" },
            { name: "Grand Master of the Ravenwing", desc: "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced. If that unit is already eligible to shoot and declare a charge in a turn in which it Advanced, add 1 to Advance and Charge rolls made for that unit instead." },
            { name: "Cut Off Their Escape", desc: "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of this model’s unit is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests." },
        ],
        keywords: ["Character","Epic Hero","Mounted","Captain","Imperium","Fly","Grenades","Sammael","Faction: Dark Angels","Faction: Adeptus Astartes","Ravenwing"],
        pointOptions: [],
        transport: null,
    },
]

export default dark_angels_army
