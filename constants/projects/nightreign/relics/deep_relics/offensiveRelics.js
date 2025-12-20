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
    },
    {
        title: "Attack Power up when facing Frostbite afflicted enemy +1", 
        desc: "Increases damage by 16% on enemies with Frostbite ailment",
        stacks: {self: false, selfType: true},
        selfType: "frozenTarget",
        effect: { 
            allDamage: 1.16,
            appliesRanged: true,
            always: false,
            condition: "Attacking a frostbiten enemy"
         }
    },
    {
        title: "Attack Power up when facing Frostbite afflicted enemy +2", 
        desc: "Increases damage by 20% on enemies with Frostbite ailment",
        stacks: {self: false, selfType: true},
        selfType: "frozenTarget",
        effect: { 
            allDamage: 1.20,
            appliesRanged: true,
            always: false,
            condition: "Attacking a frostbiten enemy"
         }
    },
    {
        title: "Attack Power up when facing Rot afflicted enemy +1", 
        desc: "Increases damage by 16% on enemies with Rot ailment",
        stacks: {self: false, selfType: true},
        selfType: "rotTarget",
        effect: { 
            allDamage: 1.16,
            appliesRanged: true,
            always: false,
            condition: "Attacking a Rotted enemy"
         }
    },
    {
        title: "Attack Power up when facing Rot afflicted enemy +2", 
        desc: "Increases damage by 20% on enemies with Rot ailment",
        stacks: {self: false, selfType: true},
        selfType: "rotTarget",
        effect: { 
            allDamage: 1.20,
            appliesRanged: true,
            always: false,
            condition: "Attacking a Rotted enemy"
         }
    },
    {
        title: "Attack Power up when facing Poison afflicted enemy +1", 
        desc: "Increases damage by 16% on enemies with Poison ailment",
        stacks: {self: false, selfType: true},
        selfType: "poisonTarget",
        effect: { 
            allDamage: 1.16,
            appliesRanged: true,
            always: false,
            condition: "Attacking a Poisoned enemy"
         }
    },
    {
        title: "Attack Power up when facing Poison afflicted enemy +2", 
        desc: "Increases damage by 20% on enemies with Poison ailment",
        stacks: {self: false, selfType: true},
        selfType: "poisonTarget",
        effect: { 
            allDamage: 1.20,
            appliesRanged: true,
            always: false,
            condition: "Attacking a Poisoned enemy"
         }
    },
    {
        title: "Madness in Vicinity Increases Attack Power", 
        desc: "Increases all damage by 12% for 20 seconds after Madness Procs",
        stacks: {self: false, selfType: true},
        selfType: "madnessUp",
        effect: { 
            allDamage: 1.12,
            appliesRanged: true,
            always: false,
            condition: "20 seconds after Madness Procs nearby"
         }
    },
    {
        title: "Madness in Vicinity Increases Attack Power +1", 
        desc: "Increases all damage by 16% for 20 seconds after Madness Procs",
        stacks: {self: false, selfType: true},
        selfType: "madnessUp",
        effect: { 
            allDamage: 1.16,
            appliesRanged: true,
            always: false,
            condition: "20 seconds after Madness Procs nearby"
         }
    },
    {
        title: "Sleep in Vicinity Increases Attack Power", 
        desc: "Increases all damage by 12% for 20 seconds after Madness Procs",
        stacks: {self: false, selfType: true},
        selfType: "sleepUp",
        effect: { 
            allDamage: 1.12,
            appliesRanged: true,
            always: false,
            condition: "20 seconds after Sleep Procs nearby"
         }
    },
    {
        title: "Sleep in Vicinity Increases Attack Power +1", 
        desc: "Increases all damage by 16% for 20 seconds after Madness Procs",
        stacks: {self: false, selfType: true},
        selfType: "sleepUp",
        effect: { 
            allDamage: 1.16,
            appliesRanged: true,
            always: false,
            condition: "20 seconds after Sleep Procs nearby"
         }
    },
    {
        title: "Posion or Rot in Vicinity Increases Attack Power", 
        desc: "Increases all damage by 12% for 20 seconds after Poison or Rot Procs",
        stacks: {self: false, selfType: true},
        selfType: "posionRotUp",
        effect: { 
            allDamage: 1.12,
            appliesRanged: true,
            always: false,
            condition: "20 seconds after Poison or Rot Procs nearby"
         }
    },
    {
        title: "Improved Guard Counters +1", 
        desc: "Increases Guard Counter Damage by 25%",
        stacks: {self: true, selfType: true},
        selfType: "GuardCounter",
        effect: {
            counterDamage: 1.25,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Guard Counters +2", 
        desc: "Increases Guard Counter Damage by 29%",
        stacks: {self: true, selfType: true},
        selfType: "GuardCounter",
        effect: {
            counterDamage: 1.29,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Throwing Pot Damage +1", 
        desc: "Increases Pot damage by 30%",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            potDamage: 1.30,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Throwing Pot Damage +2", 
        desc: "Increases Pot damage by 35%",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            throwingDamage: 1.35,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Throwing Knife Damage +1", 
        desc: "Increases Throwing Knife / Poison Dart / Crystal Dart / Kukri  damage by 30%",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            throwingDamage: 1.30,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Throwing Knife Damage +2", 
        desc: "Increases Throwing Knife / Poison Dart / Crystal Dart / Kukri  damage by 35%",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            throwingDamage: 1.35,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Glintstone and Gravity Stone Damage +1", 
        desc: "Increases all throwing stone damage by 30%",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            stoneDamage: 1.30,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Glintstone and Gravity Stone Damage +2", 
        desc: "Increases all throwing stone damage by 35%",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            stoneDamage: 1.35,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Perfuming Arts +1", 
        desc: "Increases all effects from Perfumes by 30%. This means nefations negate 30% more, poison perfumes have 35% more ailment buildup, etc.",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            perfumeEff: 1.30,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Perfuming Arts +2", 
        desc: "Increases all effects from Perfumes by 35%. This means nefations negate 35% more, poison perfumes have 35% more ailment buildup, etc.",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            perfumeEff: 1.35,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Sorceries", 
        desc: "Increases all Sorcery Damage by 5%.",
        stacks: {self: true, selfType: true},
        selfType: "SorcUp",
        effect: {
            sorcDamage: 1.05,
            always: true,
        }
    },
    {
        title: "Improved Sorceries +1", 
        desc: "Increases all Sorcery Damage by 8.5%.",
        stacks: {self: true, selfType: true},
        selfType: "SorcUp",
        effect: {
            sorcDamage: 1.085,
            always: true,
        }
    },
    {
        title: "Improved Sorceries +2", 
        desc: "Increases all Sorcery Damage by 10%.",
        stacks: {self: true, selfType: true},
        selfType: "SorcUp",
        effect: {
            sorcDamage: 1.1,
            always: true,
        }
    },
    {
        title: "Improved Incantations", 
        desc: "Increases all Incantation Damage by 5%.",
        stacks: {self: true, selfType: true},
        selfType: "IncantUp",
        effect: {
            incantDamage: 1.05,
            always: true,
        }
    },
    {
        title: "Improved Incantations +1", 
        desc: "Increases all Incantation Damage by 8.5%.",
        stacks: {self: true, selfType: true},
        selfType: "IncantUp",
        effect: {
            incantDamage: 1.085,
            always: true,
        }
    },
    {
        title: "Improved Incantations +2", 
        desc: "Increases all Incantation Damage by 10%.",
        stacks: {self: true, selfType: true},
        selfType: "IncantUp",
        effect: {
            incantDamage: 1.1,
            always: true,
        }
    },
]

export default deepOffensiveRelics