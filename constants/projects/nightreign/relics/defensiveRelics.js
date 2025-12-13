const defensiveRelics = [
    {
        title: "Improved Physical Damage Negation", 
        desc: "10% Boost to Phsyical Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "allNeg",
        effect: {
            physDamage: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Magic Damage Negation", 
        desc: "10% Boost to Magic Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "magicNeg",
        effect: {
            magicDamage: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Lightning Damage Negation", 
        desc: "10% Boost to Lightning Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "lightningNeg",
        effect: {
            lightningDamage: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Holy Damage Negation", 
        desc: "10% Boost to Holy Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "holyNeg",
        effect: {
            physDamage: 1.10,
            always: true,
        }
    },
    {
        title: "Improved Damage Negation at Low HP", 
        desc: "16% Boost to All Damage Negation when below 40% Health",
        stacks: {self: true, selfType: true},
        selfType: "lowHealth",
        effect: {
            allDamage: 1.16,
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
            allDamage: 1.20,
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
            allDamage: 1.20,
            always: false,
            condition: "20 seconds after being knocked down"
        }
    },
]

export default defensiveRelics