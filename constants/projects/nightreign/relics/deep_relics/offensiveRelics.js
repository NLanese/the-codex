const deepOffensiveRelics = [
    {
        title: "Physical Attack Up +3", 
        desc: "10.5% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            weaponDamage: 1.105,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Physical Attack Up +4", 
        desc: "12% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            weaponDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up +3", 
        desc: "10.5% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.105,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up +4", 
        desc: "12% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up +3", 
        desc: "10.5% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.105,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up +4", 
        desc: "12% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up +3", 
        desc: "10.5% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.105,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up +4", 
        desc: "12% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up +3", 
        desc: "10.5% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.105,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up +4", 
        desc: "12% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Affinity Attack Power", 
        desc: "5% Increase to all Affinity Damage",
        stacks: {self: true, selfType: true},
        selfType: "affUp",
        effect: {
            affDamag: 1.05,
            appliesRanged: false,
        }
    },
    {
        title: "Improved Affinity Attack Power +1", 
        desc: "8% Increase to all Affinity Damage",
        stacks: {self: true, selfType: true},
        selfType: "affUp",
        effect: {
            affDamag: 1.08,
            appliesRanged: false,
        }
    },
    {
        title: "Improved Affinity Attack Power +2", 
        desc: "10% Increase to all Affinity Damage",
        stacks: {self: true, selfType: true},
        selfType: "affUp",
        effect: {
            affDamag: 1.1,
            appliesRanged: false,
        }
    },
    {
        title: "Physical Attack Power Increases after using Grease Items +1", 
        desc: "Increases Damage by 17% for 30 seconds after using a weapon grease",
        stacks: {self: false, selfType: true},
        selfType: "GreaseAttacks",
        effect: {
            allDamage: 1.17,
            appliesRanged: true,
            always: false,
            condition: "30 Seconds after Applying Grease"
        }
    },
    {
        title: "Physical Attack Power Increases after using Grease Items +2", 
        desc: "Increases Damage by 17% for 30 seconds after using a weapon grease",
        stacks: {self: false, selfType: true},
        selfType: "GreaseAttacks",
        effect: {
            allDamage: 1.2,
            appliesRanged: true,
            always: false,
            condition: "30 Seconds after Applying Grease"
        }
    }
]

export default offensiveRelics