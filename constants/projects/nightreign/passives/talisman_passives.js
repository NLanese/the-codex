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
        desc: "Successive Attacks Boost Power. This effect stacks on procs, going from 3 to 5 to 10% damage increase",
        stacks: {self: true, selfType: true},
        selfType: "successiveHits",
        effect: {
            always: false,
            condition: "After 3 Stacks of Successive Hits",
            allDamage: 1.10,
        }
    },
]