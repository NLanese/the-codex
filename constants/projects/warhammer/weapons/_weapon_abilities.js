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

    heavy: () =>  {
        return({
            name: "Heavy",
            desc: "When attacking with Heavy weapons, if the attacking unit did not move during the Movement Phase, add 1 to the Hit Rolls",  
        })
    },

    twin_linked: () =>  {
        return({
            name: "Twin Linked",
            desc: "Any Wound Rolls can be rerolled once when attacking with Twin Linked Weapons",
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

    blast: () =>  {
        return({
            name: "Blast",
            desc: "When rolling a die to determine how many attacks are made, add 1 to the result for every 5 models in the targetted unit. For example, if attacking an consisting of 9 models, add 1 to the total attack roll. Blast Weapons can never be used on enemies within engagement range of one or more allied units.",  
        })
    },

    devastating_wounds: () =>  {
        return({
            name: "Devastating Wounds",
            desc: "Whenever an attack from a weapon with Devastating Wounds lands a Critical Wound, that wounding damamge is automatically applied and cannot be canceled out via scucessful saving rolls or other effects.",  
        })
    },

    indirect_fire: () =>  {
        return({
            name: "Indirect Fire",
            desc: "Indirect Fire Weapons can destory enemy units and models without needing to have direct line of fire. If a single model in the unit is visible, treat all the models in the target unit normally. If none are visible, all models being attacked have the benefit of cover and Attack rolls of 1-3 automatically miss. Additionally, the attacker must subtract 1 on all Hit Rolls.",  
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