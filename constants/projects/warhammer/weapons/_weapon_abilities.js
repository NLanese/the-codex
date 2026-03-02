const weapon_abilities = {
    
    hazardous: {
        name: "Hazardous",
        desc: "For every 'Hazardous' weapon used during a turn once all other rolls have been resolved rol a D6. On a 1, the firing unit suffers 3 wounds." ,
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

}

export default weapon_abilities