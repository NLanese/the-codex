const defensiveRelics = [
    {
        title: "Improved Physical Damage Negation", 
        desc: "10% Boost to Phsyical Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "allNeg",
        effect: {
            physNegation: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Magic Damage Negation", 
        desc: "10% Boost to Magic Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "magicNeg",
        effect: {
            magicNegation: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Lightning Damage Negation", 
        desc: "10% Boost to Lightning Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "lightningNeg",
        effect: {
            lightningNegation: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Holy Damage Negation", 
        desc: "10% Boost to Holy Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "holyNeg",
        effect: {
            holyNegation: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Damage Negation at Low HP", 
        desc: "16% Boost to All Damage Negation when below 40% Health",
        stacks: {self: true, selfType: true},
        selfType: "lowHealth",
        effect: {
            allNegation: 1.16,
            always: true,
        }
    },
    {
        title: "Draw Enemy Attention While Guarding", 
        desc: "+2 aggro per second on nearby enemies when guarding",
        stacks: {self: true, selfType: true},
        selfType: "guardAggro",
        effect: {
            
        }
    },
    {
        title: "Improved Poise & Damage Negation When Knocked Back by Damage", 
        desc: "Damage Negation increased 20% and Poise Damage Taken reduced 80% after being knocked off your feet",
        stacks: {self: false, selfType: true},
        selfType: "knockBack",
        effect: {
            allNegation: 1.20,
            always: false,
            condition: "20 seconds after being knocked down"
        }
    },
    {
        title: "Occasionally Nullify Attacks When Damage Negation is Lowered", 
        desc: "5-10% chance of taking no damage on a hit when below 40% HP",
        stacks: {self: false, selfType: true},
        selfType: "lowHealth",
        effect: {
            
        }
    },


    {
        title: "Improved Madness Resistance", 
        desc: "Increases Madness Resistance by 75",
        stacks: {self: true, selfType: true},
        selfType: "madRes",
        effect: {
            madRes: 75
        }
    },
    {
        title: "Improved Sleep Resistance", 
        desc: "Increases Sleep Resistance by 75",
        stacks: {self: true, selfType: true},
        selfType: "sleepRes",
        effect: {
            sleepRes: 75
        }
    },
    {
        title: "Improved Frost Resistance", 
        desc: "Increases Frost Resistance by 75",
        stacks: {self: true, selfType: true},
        selfType: "frostRes",
        effect: {
            frostRes: 75
        }
    },
    {
        title: "Improved Bleed Resistance", 
        desc: "Increases Bleed Resistance by 75",
        stacks: {self: true, selfType: true},
        selfType: "bleedRes",
        effect: {
            bleedRes: 75
        }
    },
    {
        title: "Improved Death Resistance", 
        desc: "Increases Death Resistance by 75",
        stacks: {self: true, selfType: true},
        selfType: "deathRes",
        effect: {
            deathRes: 75
        }
    },
    {
        title: "Improved Poison Resistance", 
        desc: "Increases Poison Resistance by 75",
        stacks: {self: true, selfType: true},
        selfType: "poisonRes",
        effect: {
            poisonRes: 75
        }
    },
    {
        title: "Improved Rot Resistance", 
        desc: "Increases Rot Resistance by 75",
        stacks: {self: true, selfType: true},
        selfType: "rotRes",
        effect: {
            rotRes: 75
        }
    },
]

export default defensiveRelics