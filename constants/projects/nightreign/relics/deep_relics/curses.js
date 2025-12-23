const curses = [
    {
        title: "Taking Damage Causes Deathblight Buildup", 
        desc: "Any damage from an enemy causes 32 Deathblight buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            deathOnHit: 32,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Madness Buildup", 
        desc: "Any damage from an enemy causes 40 Madness buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            madOnHit: 40,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Sleep Buildup", 
        desc: "Any damage from an enemy causes 40 Sleep buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            sleepOnHit: 40,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Bleed Buildup", 
        desc: "Any damage from an enemy causes 44 Bleed buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            bleedOnHit: 44,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Rot Buildup", 
        desc: "Any damage from an enemy causes 44 Rot buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            rotOnHit: 44,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Frostbite Buildup", 
        desc: "Any damage from an enemy causes 44 Frost buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            frostOnHit: 44,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Poison Buildup", 
        desc: "Any damage from an enemy causes 52 Poison buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            frostOnHit: 52,
            always: true,
        }
    },
    {
        title: "Reduced Strength and Intelligence", 
        desc: "Strength and Intelligence -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            str: -3,
            intl: -3,
            always: true
        }
    },
    {
        title: "Reduced Dexterity and Faith", 
        desc: "Dexterity and Faith -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            dex: -3,
            fai: -3,
            always: true
        }
    },
    {
        title: "Reduced Strength and Faith", 
        desc: "Dexterity and Faith -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            str: -3,
            fai: -3,
            always: true
        }
    },
    {
        title: "Reduced Dexterity and Intelligence", 
        desc: "Dexterity and Intelligence -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            dex: -3,
            intl: -3,
            always: true
        }
    },
    {
        title: "Reduced Vigor and Arcane", 
        desc: "Vigor and Arcane -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            vigor: -3,
            arcane: -3,
            always: true
        }
    },
    {
        title: "Reduced Rune Acquisition", 
        desc: "Rune Acquisition reduced by 10%",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            runeRate: .90,
            always: true
        }
    },
    {
        title: "Reduced Flask HP Restoration", 
        desc: "Flask Restoration Reduced 15%",
        stacks: {self: true, selfType: true},
        selfType: "flaskCurse",
        effect: {
            flaskRate: .85,
            always: true
        }
    },
    {
        title: "Ultimate Art Charging Impaired", 
        desc: "All Ultimate Guage increases reduced by 85%",
        stacks: {self: true, selfType: true},
        selfType: "ultCurse",
        effect: {
            ultRate: .85,
            always: true
        }
    },
    {
        title: "All Resistances Down", 
        desc: "All Ailment Resistances Reduced by 80. THIS IS LETHAL, DO NOT USE IT WITHOUT COUNTER MEASURES",
        stacks: {self: true, selfType: true},
        selfType: "allAilments",
        effect: {
            frostRes: -80,
            bleedRes: -80,
            blightRes: -80,
            poisonRes: -80,
            rotRes: -80,
            sleepRes: -80,
            madRes: -80,
            always: true
        }
    },
    {
        title: "More Damage Taken After Evasion", 
        desc: "For about 5 frames after you exit the iFrame of a dodge, All Damage Negation is lowered 45%",
        stacks: {self: true, selfType: true},
        selfType: "dodgeNeg",
        effect: {
            allNeg: 0.55,
            always: false,
            condition: "Immediately after a dodge"
        }
    },
    {
        title: "Repeated Evasions Lower Damage Negation", 
        desc: "2 Back-to-Back Dodges will result in 23% Damage Negation Reduction. 3 of such dodges will result in 35% reduction",
        stacks: {self: true, selfType: true},
        selfType: "repeatDodgeNeg",
        effect: {
            allNeg: 0.65,
            always: false,
            condition: "After a back to back dodge"
        }
    },
    {
        title: "Reduced Damage Negation for Flask Usages", 
        desc: "While in the flask drinking animation, damage negation is reduced 45%",
        stacks: {self: true, selfType: true},
        selfType: "flaskNeg",
        effect: {
            allNeg: 0.65,
            always: false,
            condition: "While drinking a flask"
        }
    },
    {
        title: "Lower Attack When Below Max HP", 
        desc: "All damage reduced by 8.5% when below 85% Max HP",
        stacks: {self: true, selfType: true},
        selfType: "healthNeg",
        effect: {
            allNeg: 0.915,
            always: false,
            condition: "While below 85% Max Health"
        }
    },
    {
        title: "Poison Buildup when Below Max HP", 
        desc: "2 Poison Buildup per tick (.22 seconds)  when below 85% max HP",
        stacks: {self: true, selfType: true},
        selfType: "poisonMaxHP",
        effect: {
            always: true,
        }
    },
    {
        title: "Rot Buildup when Below Max HP", 
        desc: "2 Rot Buildup per tick (.22 seconds) when below 85% max HP",
        stacks: {self: true, selfType: true},
        selfType: "rotMaxHP",
        effect: {
            always: true,
        }
    },
    {
        title: "Near Death Reduces Max HP", 
        desc: "Max HP Reduced 25% After being Revivied when Down for the next 60 seconds",
        stacks: {self: true, selfType: true},
        selfType: "maxHPDown",
        effect: {
            always: true,
        }
    },
]

export default curses