export default offensiveRelics = [
    {
        title: "Taking attacks improves attack power", 
        desc: "15% Buff to ALL DAMAGE after taking damage from an unblocked enemy attack. Lasts 10 seconds and refreshes duration on next hit.",
        stacks: {self: false, selfType: false},
        selfType: "BuffOnHit",
        effect: {
            allDamage: 1.15,
            always: false,
            appliesRanged: true,
            condition: "10 seconds active after taking damage from an enemy"
        }
    },
    {
        title: "Physical Attack Up", 
        desc: "4% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            physDamage: 1.04,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Physical Attack Up +1", 
        desc: "5% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            physDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Physical Attack Up +2", 
        desc: "6% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            physDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Melee Attack Power", 
        desc: "6% Increase to all Non-Ranged and Non-Catalyst Weapon Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "Melee",
        effect: {
            weaponDamge: 1.06,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Skill Attack Power", 
        desc: "20% Increase to all Skill Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "SkillUp",
        effect: {
            skillDamage: 1.20,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up", 
        desc: "4.5% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up +1", 
        desc: "5% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up +2", 
        desc: "6% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up", 
        desc: "4.5% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up +1", 
        desc: "5% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up +2", 
        desc: "6% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up", 
        desc: "4.5% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up +1", 
        desc: "5% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up +2", 
        desc: "6% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up", 
        desc: "4.5% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up +1", 
        desc: "5% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up +2", 
        desc: "6% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Stance Breaking when Two Handing", 
        desc: "5% Increase to poise dmaage when two handing",
        stacks: {self: true, selfType: true},
        selfType: "StanceUp",
        effect: {
            stanceDamage: 1.05,
            appliesRanged: false,
            always: false,
            condition: "Two handing a Weapon"
        }
    },
    {
        title: "Improved Stance Breaking when Weilding Two Armaments", 
        desc: "5% Increase to poise dmaage when powestancing two weapons of the same type",
        stacks: {self: true, selfType: true},
        selfType: "StanceUp",
        effect: {
            stanceDamage: 1.05,
            appliesRanged: false,
            always: false,
            condition: "Weilding Two weapons of the same type"
        }
    },
    {
        title: "Switching Weapons Adds an Affinity Attack", 
        desc: "Adds 12 Magic/Fire/Lightning/Holy Attack (AP) to your Weapon for 10 seconds after switching to it",
        stacks: {self: false, selfType: false},
        selfType: "AffinityGrant",
        effect: {
            affinity_AP: 12,
            appliesRanged: true,
            always: false,
            condition: "10 Seconds after Weapon Switching"
        }
    },
]