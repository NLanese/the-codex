const talismans = [
    {
        title: "Crimson Amber Medallion",
        desc: "Increase Max HP by 12%",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            HP: 1.12
        }
    },
    {
        title: "Cerulean Amber Medallion",
        desc: "Increase Max FP by 12%",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            FP: 1.12
        }
    },
    {
        title: "Viridian Amber Medallion",
        desc: "Increase Max Stamina by 12%",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            Stam: 1.12
        }
    },
    {
        title: "Erdtree's Favor",
        desc: "Increase Max Stamina and Max HP by 7%",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            Stam: 1.07,
            HP: 1.07
        }
    },
    {
        title: "Gold Scarab",
        desc: "Increase Runes earned by 15%",
        stacks: {self: true, selfType: true},
        selfType: "runeRate",
        effect: {
            always: true,
            runeRate: 1.15
        }
    },
    {
        title: "Silver Scarab",
        desc: "Improves Item Discovery by 40",
        stacks: {self: true, selfType: true},
        selfType: "itemDiscovery",
        effect: {
            always: true,
            itemDiscovery: 1.15
        }
    },
    {
        title: "Warrior Jar Shard",
        desc: "Improves Skill Attack Damage by 15%",
        stacks: {self: true, selfType: true},
        selfType: "skillDamage",
        effect: {
            always: true,
            skillDamage: 1.15
        }
    },
    {
        title: "Winged Sword Insignia",
        desc: "Successive Attacks Boost Power. This effect stacks on procs, going from 3 to 5 to 10% damage increase. Bows do not trigger, Carian Slicer is the only spell that does.",
        stacks: {self: true, selfType: true},
        selfType: "successiveHits",
        effect: {
            always: false,
            condition: "After 3 Stacks of Successive Hits",
            allDamage: 1.10,
        }
    },
    {
        title: "Millicent's Prothesis",
        desc: "Improves Dex by 5 and Successive Attacks Boost Power. This effect stacks on procs, going from 4 to 6 to 11% damage increase. Bows do not trigger, Carian Slicer is the only spell that does.",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            always: false,
            condition: "After 3 Stacks of Successive Hits",
            allDamage: 1.11,
            dex: 5
        }
    },
    {
        title: "Magic Scorpion Charm",
        desc: "Improves Magic Damage 15% but you take 3% more physical damage.",
        stacks: {self: true, selfType: true},
        selfType: "scorpion",
        effect: {
            always: true,
            magicDamage: 1.15,
            physNegation: 0.97
        }
    },
    {
        title: "Fire Scorpion Charm",
        desc: "Improves Fire Damage 15% but you take 3% more physical damage.",
        stacks: {self: true, selfType: true},
        selfType: "scorpion",
        effect: {
            always: true,
            fireDamage: 1.15,
            physNegation: 0.97
        }
    },
    {
        title: "Lightning Scorpion Charm",
        desc: "Improves Lightning Damage 15% but you take 3% more physical damage.",
        stacks: {self: true, selfType: true},
        selfType: "scorpion",
        effect: {
            always: true,
            lightningDamage: 1.15,
            physNegation: 0.97
        }
    },
    {
        title: "Sacred Scorpion Charm",
        desc: "Improves Holy Damage 15% but you take 3% more physical damage.",
        stacks: {self: true, selfType: true},
        selfType: "scorpion",
        effect: {
            always: true,
            holyDamage: 1.15,
            physNegation: 0.97
        }
    },
    {
        title: "Red-Feathered Branchsword",
        desc: "Improves Attack Power by 20% at when below 20% HP.",
        stacks: {self: true, selfType: true},
        selfType: "scorpion",
        effect: {
            always: false,
            condition: "When below 20% HP",
            allDamage: 1.20,
        }
    },
    {
        title: "Ritual Sword Talisman",
        desc: "Improves Attack Power by 10% at Full HP.",
        stacks: {self: true, selfType: true},
        selfType: "scorpion",
        effect: {
            always: false,
            condition: "When at Full HP",
            allDamage: 1.10,
        }
    },
]