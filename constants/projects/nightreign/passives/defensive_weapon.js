const defensive_weapon_passives = [
    {
        title: "Improved Magic Damage Negation +12%" , 
        desc: "Boost to Magic Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "magicNeg",
        effect: {
            magicNegation: 1.12,
            always: true,
        }
    },
    {
        title: "Improved Magic Damage Negation +16%" , 
        desc: "Boost to Magic Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "magicNeg",
        effect: {
            magicNegation: 1.16,
            always: true,
        }
    },
    {
        title: "Improved Magic Damage Negation +20%" , 
        desc: "Boost to Magic Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "magicNeg",
        effect: {
            magicNegation: 1.20 ,
            always: true,
        }
    },
    {
        title: "Improved Lightning Damage Negation +12%", 
        desc: "Boost to Lightning Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "lightningNeg",
        effect: {
            lightningNegation: 1.12,
            always: true,
        }
    },
    {
        title: "Improved Lightning Damage Negation +16%", 
        desc: "Boost to Lightning Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "lightningNeg",
        effect: {
            lightningNegation: 1.16,
            always: true,
        }
    },
    {
        title: "Improved Lightning Damage Negation +20%", 
        desc: "Boost to Lightning Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "lightningNeg",
        effect: {
            lightningNegation: 1.20,
            always: true,
        }
    },
    {
        title: "Improved Holy Damage Negation +12%", 
        desc: "Boost to Holy Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "holyNeg",
        effect: {
            holyNegation: 1.12,
            always: true,
        }
    },
    {
        title: "Improved Holy Damage Negation +16%", 
        desc: "Boost to Holy Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "holyNeg",
        effect: {
            holyNegation: 1.16,
            always: true,
        }
    },
    {
        title: "Improved Holy Damage Negation +20%", 
        desc: "Boost to Holy Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "holyNeg",
        effect: {
            holyNegation: 1.20,
            always: true,
        }
    },
    {
        title: "Improved Fire Damage Negation +12%", 
        desc: "Boost to Fire Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "fireNeg",
        effect: {
            fireNegation: 1.12,
            always: true,
        }
    },
    {
        title: "Improved Fire Damage Negation +16%", 
        desc: "Boost to Fire Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "fireNeg",
        effect: {
            fireNegation: 1.16,
            always: true,
        }
    },
    {
        title: "Improved Fire Damage Negation +20%", 
        desc: "Boost to Fire Damage Negation",
        stacks: {self: true, selfType: true},
        selfType: "fireNeg",
        effect: {
            fireNegation: 1.20,
            always: true,
        }
    },
    {
        title: "Improved Damage Negation at Low HP +23%", 
        desc: "Boost to All Damage Negation when below 40% Health",
        stacks: {self: true, selfType: true},
        selfType: "lowHealth",
        effect: {
            allNegation: 1.23,
            always: false,
            condition: "Below 40% Health"
        }
    },
    {
        title: "Improved Damage Negation at Low HP +30%", 
        desc: "Boost to All Damage Negation when below 40% Health",
        stacks: {self: true, selfType: true},
        selfType: "lowHealth",
        effect: {
            allNegation: 1.30,
            always: false,
            condition: "Below 40% Health"
        }
    },
    {
        title: "Improved Damage Negation at Low HP +37%", 
        desc: "Boost to All Damage Negation when below 40% Health",
        stacks: {self: true, selfType: true},
        selfType: "lowHealth",
        effect: {
            allNegation: 1.37,
            always: false,
            condition: "Below 40% Health"
        }
    },
    {
        title: "Improved Damage Negation at Full HP +24%", 
        desc: "16% Boost to All Damage Negation when below 40% Health",
        stacks: {self: true, selfType: true},
        selfType: "lowHealth",
        effect: {
            allNegation: 1.16,
            always: false,
            condition: "Below 40% Health"
        }
    },
]