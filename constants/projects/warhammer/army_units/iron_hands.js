// AUTO-GENERATED units for Iron Hands (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import iron_hands_weapons from "../weapons/iron_hands"

const iron_hands_army = [
    {
        army: "iron_hands",
        class: "characters",
        name: "Caanok Var",
        pts: 100,
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
            iron_hands_weapons.axiom_strike,
            iron_hands_weapons.axiom_sweep,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...iron_hands_weapons.axiom_strike, selected: true},
            ],
            slot2: [
                {...iron_hands_weapons.axiom_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Cold and Calculating", desc: "Each time a model in this model’s unit makes an attack that targets a Monster or Vehicle unit, that\nattack has the [LETHAL HITS] ability. Each time a model in this model’s unit makes an attack that targets any other unit, that attack has the [SUSTAINED HITS 1] ability." },
            { name: "Cerebrex Logic Engine", desc: "- At the start of the Declare Battle Formations step, you can select one Adeptus Astartes Infantry unit from your army. Until the end of the battle, that unit gains the Scouts 6\" ability.\n\n\n- After both players have deployed their armies, you can select one Adeptus Astartes unit from your army and redeploy it. When doing so, you can set that unit up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
            { name: "Leader", desc: "This model can be attached to the following units: Terminator Assault Squad, Terminator Squad" },
        ],
        keywords: ["Infantry","Character","Epic Hero","Imperium","Terminator","Captain","Faction: Iron Hands","Faction: Adeptus Astartes","Caanok Var"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "iron_hands",
        class: "characters",
        name: "Iron Father Feirros",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 2,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            iron_hands_weapons.harrowhand,
            iron_hands_weapons.medusan_manipuli,
        ],
        rangedWeapons: [
            iron_hands_weapons.gorgons_wrath,
        ],
        weapon_options: {
            slot1: [
                {...iron_hands_weapons.gorgons_wrath, selected: true},
            ],
            slot2: [
                {...iron_hands_weapons.harrowhand, selected: true},
            ],
            slot3: [
                {...iron_hands_weapons.medusan_manipuli, selected: true},
            ],
        },
        abilities: [
            { name: "Rites of Tempering", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability" },
            { name: "Iron Father", desc: "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, it has the Lone Operative ability." },
            { name: "Master of the Forge", desc: "In your Command phase, select one friendly Adeptus Astartes Vehicle model within 3\" of this model. That model regains up to 3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. You cannot select a unit for this ability that has already been selected for the Blessing of the Omnissiah ability this phase, and vice versa." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Aggressor Squad\n- Eradicator Squad\n- Heavy Intercessor Squad" },
            { name: "Inspiring Commander", desc: "If you include this model in your army, until the end of the battle, non-Character models in Heavy\nIntercessor Squad units from your army have an Objective Control characteristic of 3 while they are\nnot Battle-shocked." },
        ],
        keywords: ["Character","Epic Hero","Infantry","Imperium","Gravis","Faction: Adeptus Astartes","Faction: Iron Hands","Iron Father Ferrios"],
        pointOptions: [],
        transport: null,
    },
]

export default iron_hands_army
