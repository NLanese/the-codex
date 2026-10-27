// AUTO-GENERATED units for Raven Guard (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import raven_guard_weapons from "../weapons/raven_guard"

const raven_guard_army = [
    {
        army: "raven_guard",
        class: "characters",
        name: "Aethon Shaan",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            raven_guard_weapons.claws_of_severax,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...raven_guard_weapons.claws_of_severax, selected: true},
            ],
        },
        abilities: [
            { name: "Chapter Master of the Raven Guard", desc: "At the start of the Declare Battle Formations step, if your army includes Aethon Shaan and Kayvaan\nShrike, until the end of the battle, your Kayvaan Shrike unit loses its Lone Operative ability and it\nreplaces its Chapter Master keyword with Captain." },
            { name: "Master of Shadows", desc: "In your Command phase, you can select one unit from your opponent’s army. Until the start of your next Command phase, each time an Adeptus Astartes unit from your army declares a charge while it is within 12\" of that enemy unit, you can re-roll the Charge roll, but it must declare that enemy unit as a target of that charge (if possible)." },
            { name: "Blackwing Mantle", desc: "You can target this model’s unit with the Rapid Ingress and Heroic Intervention Stratagems for 0CP,\neven if you have already used that Stratagem on a different unit this phase." },
        ],
        keywords: ["Character","Epic Hero","Infantry","Fly","Jump Pack","Imperium","Faction: Adeptus Astartes","Faction: Raven Guard","Tacticus","Chapter Master","Aethon Shaan"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "raven_guard",
        class: "characters",
        name: "Kayvaan Shrike",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            raven_guard_weapons.the_ravens_talons,
        ],
        rangedWeapons: [
            raven_guard_weapons.blackout,
        ],
        weapon_options: {
            slot1: [
                {...raven_guard_weapons.blackout, selected: true},
            ],
            slot2: [
                {...raven_guard_weapons.the_ravens_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Trifold Path of Shadow", desc: "While this model is leading a unit, models  in this unit cannot be targeted by ranged attacks unless the attacking model is within 12\"." },
            { name: "Echo of the Ravenspire", desc: "At the end of your opponent’s turn, if this model’s unit is not within Engagement Range of any enemy models, you can remove it from the battlefield and place it into Strategic Reserves." },
            { name: "Leader", desc: "This model can be attached to the following units:\n\n- Assault Intercessors with Jump Packs\n- Vanguard Veteran Squad with Jump Packs" },
            { name: "Inspiring Commander", desc: "If you include this model in your army, until the end of the battle, non-Character models in Assault\nIntercessors with Jump Packs units from your army have an Objective Control characteristic of 2 while they are not Battle-shocked." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Imperium","Fly","Jump Pack","Faction: Adeptus Astartes","Faction: Raven Guard","Chapter Master","Kayvaan Shrike","Phobos"],
        pointOptions: [],
        transport: null,
    },
]

export default raven_guard_army
