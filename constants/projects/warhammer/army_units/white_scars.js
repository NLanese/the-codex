// AUTO-GENERATED units for White Scars (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import white_scars_weapons from "../weapons/white_scars"

const white_scars_army = [
    {
        army: "white_scars",
        class: "characters",
        name: "Kor'sarro Khan",
        pts: 60,
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
            white_scars_weapons.moonfang,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...white_scars_weapons.moonfang, selected: true},
            ],
        },
        abilities: [
            { name: "For the Khan!", desc: "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability and melee weapons equipped by models in that unit have the [LANCE] ability." },
            { name: "Trophy Taker", desc: "Each time this model destroys an enemy Character model, you gain 1CP" },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessor Squad\n- Bladeguard Veteran Squad\n- Intercessor Squad\n- Sternguard Veteran Squad\n- Tactical Squad\n- Company Heroes" },
            { name: "Inspiring Commander", desc: "If you include this model in your army, until the end of the battle, non-Character models in Outrider Squad units from your army have an Objective Control characteristic of 3 while they are not Battle-shocked." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Captain","Imperium","Faction: Adeptus Astartes","Faction: White Scars","Kor'sarro Khan","Tacticus"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "white_scars",
        class: "characters",
        name: "Suboden Khan",
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
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            white_scars_weapons.stormtooth,
            white_scars_weapons.power_sword,
        ],
        rangedWeapons: [
            white_scars_weapons.onslaught_gatling_cannon,
        ],
        weapon_options: {
            slot1: [
                {...white_scars_weapons.onslaught_gatling_cannon, selected: true},
            ],
            slot2: [
                {...white_scars_weapons.stormtooth, selected: true},
            ],
            slot3: [
                {...white_scars_weapons.power_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Spear of Chogoris", desc: "This model’s unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back. If that unit is already eligible to shoot and declare a charge in a turn in which it Advanced, add 1 to Advance and Charge rolls made for that unit instead." },
            { name: "Skilled Riders", desc: "Each time a model in this model’s unit makes a Normal, Advance, Fall Back or Charge move, it can move horizontally through terrain features." },
            { name: "Leader", desc: "This model can be attached to the following units: **Outrider Squad**" },
        ],
        keywords: ["Mounted","Character","Epic Hero","Imperium","Grenades","Captain","Faction: Adeptus Astartes","Faction: White Scars","Suboden Khan"],
        pointOptions: [],
        transport: null,
    },
]

export default white_scars_army
