const weapon_abilities = {
    rapid_fire: {
        desc: "When attacking a target within half its max range, the weapon does X more attacks",
        toggle: "Within Half Range",
        ranks: {
            1: {desc: "One more attack", effect: {more_attacks: 1}}
        }
    }
}