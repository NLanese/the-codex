const weapon_abilities = {

    hazardous: () =>  {
        return({
            name: "Hazardous",
            desc: "For every 'Hazardous' weapon used during a turn once all other rolls have been resolved rol a D6. On a 1, the firing unit suffers 3 wounds." ,
        })
    },

    overcharge: () =>  {
        return({
            name: "Overcharge",
            desc: "On every 'Hazardous' test a unit takes this turn, subtract 2 from the result",  
        })
    },

    conversion: () =>  {
        return({
            name: "Conversion",
            desc: "When a target hit with a weapon that has Conversion is 12 or mmore inches away, a 4+ scores a Critical Hit",
        })
    },

    lethal_hits: () =>  {
        return({
            name: "Lethal Hits",
            desc: "A weapon with Lethal Hits automatically wounds its target on a Critical Hit",  
        })
    },

    rapid_fire: (x) => {
        return({
            name: `Rapid Fire ${x}`,
            desc: `When attacking a target within half its max range, the weapon does ${x} more attacks`,
            toggle: "Within Half Range",
            effect: {moreAttacks: x}
        })
    },

    sustained_hits: (x) => {
        return({
            name: `Sustained Hits ${x}`,
            desc: `When attacking with Sustained Hits, every Critical Hit Roll results in ${x} more hits landed on the target`,
            toggle_amount: "Criticals Hits",
            effect: {more_hits: x},
        })
    },

    anti_monster: (x) => {
        return({
            name: `Anti-Monster ${x}`,
            desc: `Any wound roll of ${x}+ is a critical wound against Monsters`,
            toggle_amount: "Criticals Hits",
            effect: {crit_wounds: x},
        })
    },

    anti_vehicle: (x) => {
        return({
            name: `Anti-Vehicle ${x}`,
            desc: `Any wound roll of ${x}+ is a critical wound against Vehicles`,
            toggle_amount: "Criticals Hits",
            effect: {crit_wounds: x},
        })
    },

}

export default weapon_abilities