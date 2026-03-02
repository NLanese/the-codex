const weapon_abilities = {

    hazardous: {
        name: "Hazardous",
        desc: "For every 'Hazardous' weapon used during a turn once all other rolls have been resolved rol a D6. On a 1, the firing unit suffers 3 wounds." ,
    },

    overcharge: {
        name: "Overcharge",
        desc: "On every 'Hazardous' test a unit takes this turn, subtract 2 from the result",
    },

    conversion: {
        name: "Conversion",
        desc: "When a target hit with a weapon that has Conversion is 12 or mmore inches away, a 4+ scores a Critical Hit",
    },

    lethal_hits: {
        name: "Lethal Hits",
        desc: "A weapon with Lethal Hits automatically wounds its target on a Critical Hit",
    },

    rapid_fire: {
        name: "Rapid Fire",
        desc: "When attacking a target within half its max range, the weapon does X more attacks",
        toggle: "Within Half Range",
        ranks: {
            1: {desc: "One more attack", effect: {more_attacks: 1}},
            2: {desc: "One more attack", effect: {more_attacks: 2}},
            3: {desc: "One more attack", effect: {more_attacks: 3}}
        }
    },

    sustained_hits: {
        name: "Sustained Hits",
        desc: "When attacking with Sustained Hits, every Critical Hit Roll results in X more hits landed on the target",
        toggle_amount: "Criticals Hits",
        ranks: {
            1: {desc: "One more attack", effect: {more_hits: 1}},
            2: {desc: "One more attack", effect: {more_hits: 2}},
            3: {desc: "One more attack", effect: {more_hits: 3}}
        }
    },

    anti_monster: {
        name: "Anti-Moster",
        desc: "Any wound roll of X+ is a critical wound against Monsters",
        toggle: "Against a Monster",
        ranks: {
            3: {desc: "Critical Wounds at 3+", effect: {critWound: 3}},
            4: {desc: "Critical Wounds at 4+", effect: {critWound: 4}},
            5: {desc: "Critical Wounds at 5+", effect: {critWound: 5}},
        }
    },

    anti_vehicle: {
        name: "Anti-Vehicle",
        desc: "Any wound roll of X+ is a critical wound against Vehicles",
        toggle: "Against a Vehicle",
        ranks: {
            3: {desc: "Critical Wounds at 3+", effect: {critWound: 3}},
            4: {desc: "Critical Wounds at 4+", effect: {critWound: 4}},
            5: {desc: "Critical Wounds at 5+", effect: {critWound: 5}},
        }
    }

}

export default weapon_abilities