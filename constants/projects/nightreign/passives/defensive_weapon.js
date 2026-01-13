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
    {
        title: "Taking Attacks Boosts Damage Negation +21%", 
        desc: "Damage Negation boosted for 10 seconds after taking enemy damage.",
        stacks: {self: false, selfType: true},
        selfType: "BuffOnHit",
        effect: {
            allNegation: 1.21,
            always: false,
            appliesRanged: true,
            condition: "10 seconds active after taking damage from an enemy"
        }
    },
    {
        title: "Taking Attacks Boosts Damage Negation +28%", 
        desc: "Damage Negation boosted for 10 seconds after taking enemy damage.",
        stacks: {self: false, selfType: true},
        selfType: "BuffOnHit",
        effect: {
            allNegation: 1.28,
            always: false,
            appliesRanged: true,
            condition: "10 seconds active after taking damage from an enemy"
        }
    },
    {
        title: "Taking Attacks Boosts Damage Negation +36%", 
        desc: "Damage Negation boosted for 10 seconds after taking enemy damage.",
        stacks: {self: false, selfType: true},
        selfType: "BuffOnHit",
        effect: {
            allNegation: 1.36,
            always: false,
            appliesRanged: true,
            condition: "10 seconds active after taking damage from an enemy"
        }
    },
    {
        title: "Damage Negataion Up While Casting Spells +18%", 
        desc: "Damage Negation boosted while in a sorcery or incantation animation.",
        stacks: {self: false, selfType: true},
        selfType: "CastNeg",
        effect: {
            allNegation: 1.18,
            always: false,
            appliesRanged: true,
            condition: "While casting a spell"
        }
    },
    {
        title: "Damage Negataion Up While Casting Spells +24%", 
        desc: "Damage Negation boosted while in a sorcery or incantation animation.",
        stacks: {self: false, selfType: true},
        selfType: "CastNeg",
        effect: {
            allNegation: 1.24,
            always: false,
            appliesRanged: true,
            condition: "While casting a spell"
        }
    },
    {
        title: "Damage Negataion Up While Casting Spells +30%", 
        desc: "Damage Negation boosted while in a sorcery or incantation animation.",
        stacks: {self: false, selfType: true},
        selfType: "CastNeg",
        effect: {
            allNegation: 1.30,
            always: false,
            appliesRanged: true,
            condition: "While casting a spell"
        }
    },
    {
        title: "Successive Attacks Negate Damage +38%",
        desc: "Several consecutive hits provide Damage Negation. This negation is lost after 30 seconds or being hit.",
        stacks: {self: false, selfType: true},
        selfType: "successiveHits",
        effect: {
            always: false,
            condition: "After Successive Hits",
            allNegation: 1.38,
        }
    },
    {
        title: "Successive Attacks Negate Damage +48%",
        desc: "Several consecutive hits provide Damage Negation. This negation is lost after 30 seconds or being hit.",
        stacks: {self: false, selfType: true},
        selfType: "successiveHits",
        effect: {
            always: false,
            condition: "After Successive Hits",
            allNegation: 1.48,
        }
    },
    {
        title: "Successive Attacks Negate Damage +60%",
        desc: "Several consecutive hits provide Damage Negation. This negation is lost after 30 seconds or being hit.",
        stacks: {self: false, selfType: true},
        selfType: "successiveHits",
        effect: {
            always: false,
            condition: "After Successive Hits",
            allNegation: 1.60,
        }
    },
    {
        title: "Damage Negation Up upon Landing Charge Attacks +24%", 
        desc: "Hitting an enemy with a charged RT / R2 Provides Damage Negation for 15 seconds. Persists even if hit",
        stacks: {self: false, selfType: true},
        selfType: "chargedNeg",
        effect: {
            always: false,
            condition: "After landing a Charged RT / R2",
            allNegation: 1.24,
        }
    },
    {
        title: "Damage Negation Up upon Landing Charge Attacks +32%", 
        desc: "Hitting an enemy with a charged RT / R2 Provides Damage Negation for 15 seconds. Persists even if hit",
        stacks: {self: false, selfType: true},
        selfType: "chargedNeg",
        effect: {
            always: false,
            condition: "After landing a Charged RT / R2",
            allNegation: 1.32,
        }
    },
    {
        title: "Damage Negation Up upon Landing Charge Attacks +40%", 
        desc: "Hitting an enemy with a charged RT / R2 Provides Damage Negation for 15 seconds. Persists even if hit",
        stacks: {self: false, selfType: true},
        selfType: "chargedNeg",
        effect: {
            always: false,
            condition: "After landing a Charged RT / R2",
            allNegation: 1.40,
        }
    },
    {
        title: "Successful Guarding Ups Damage Negation +14%", 
        desc: "Successfully blocking an enemy attack grants Damage Negation",
        stacks: {self: false, selfType: true},
        selfType: "blockingNeg",
        effect: {
            always: false,
            condition: "After blocking an attack",
            allNegation: 1.14,
        }
    },
    {
        title: "Successful Guarding Ups Damage Negation +19%", 
        desc: "Successfully blocking an enemy attack grants Damage Negation",
        stacks: {self: false, selfType: true},
        selfType: "blockingNeg",
        effect: {
            always: false,
            condition: "After blocking an attack",
            allNegation: 1.19,
        }
    },
    {
        title: "Successful Guarding Ups Damage Negation +24%", 
        desc: "Successfully blocking an enemy attack grants Damage Negation",
        stacks: {self: false, selfType: true},
        selfType: "blockingNeg",
        effect: {
            always: false,
            condition: "After blocking an attack",
            allNegation: 1.24,
        }
    },
    
]

export default defensive_weapon_passives