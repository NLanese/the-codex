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
        selfType: "lowHPBuff",
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
        selfType: "fullHPBuff",
        effect: {
            always: false,
            condition: "When at Full HP",
            allDamage: 1.10,
        }
    },
    {
        title: "Spear Talisman",
        desc: "Improves All Piercing Damage Power by 20% when hitting an enemy in mid attack animation.",
        stacks: {self: true, selfType: true},
        selfType: "counterAttacks",
        effect: {
            always: true,
        }
    },
    {
        title: "Hammer Talisman",
        desc: "Improves stamina damage on blocking enemies by 50%.",
        stacks: {self: true, selfType: true},
        selfType: "guardBreaking",
        effect: {
            always: true,
        }
    },
    {
        title: "Dagger Talisman",
        desc: "Improves Critical Hit Damage by 24%.",
        stacks: {self: true, selfType: true},
        selfType: "critDamage",
        effect: {
            always: true,
            critDamage
        }
    },
    {
        title: "Twinblade Talisman",
        desc: "Improves the Damage on the final hit of an R1 / RB Chain by 15%.",
        stacks: {self: true, selfType: true},
        selfType: "critDamage",
        effect: {
            always: true,
            critDamage: 1.15
        }
    },
    {
        title: "Axe Talisman",
        desc: "Improves the Damage on Charge Attacks by 12%.",
        stacks: {self: true, selfType: true},
        selfType: "chargeDamage",
        effect: {
            always: true,
            chargeDamage: 1.12
        }
    },
    {
        title: "Claw Talisman",
        desc: "Improves the Damage on Jump Attacks by 12%.",
        stacks: {self: true, selfType: true},
        selfType: "jumpDamage",
        effect: {
            always: true,
            jumpDamage: 1.12
        }
    },
    {
        title: "Curved Sword Talisman",
        desc: "Improves the Damage on Guard Counters by 20%.",
        stacks: {self: true, selfType: true},
        selfType: "counterDamage",
        effect: {
            always: true,
            counterDamage: 1.20
        }
    },
    {
        title: "Roar Medallion",
        desc: "Improves the Damage on Roar and Breath Skills as well as Dragon Communion Spells by 20%.",
        stacks: {self: true, selfType: true},
        selfType: "roarDamage",
        effect: {
            always: true,
            roarDamage: 1.20
        }
    },
    {
        title: "Perfumer's Talisman",
        desc: "Improves the Damage on Perfume Items as well as their status buildup by 20%.",
        stacks: {self: true, selfType: true},
        selfType: "perfumeDamage",
        effect: {
            always: true,
            perfumeDamage: 1.20
        }
    },
    {
        title: "Companion Jar",
        desc: "Improves the Damage on Pot Items as well as their status buildup by 20%.",
        stacks: {self: true, selfType: true},
        selfType: "perfumeDamage",
        effect: {
            always: true,
            potDamage: 1.20
        }
    },
    {
        title: "Arrow's Reach Talisman",
        desc: "Bow Attack Damage Falloff effects accrue 50% more slowly (Distance reduces damage half as much sort of).",
        stacks: {self: true, selfType: true},
        selfType: "fallOffDam",
        effect: {
            always: true,
            fallOfDam: .50
        }
    },
    {
        title: "Arrow's Sting Talisman",
        desc: "Bow / Crossbow Attack Damage increased 14%.",
        stacks: {self: true, selfType: true},
        selfType: "rangedDamage",
        effect: {
            always: true,
            rangedDamage: 1.14
        }
    },
    {
        title: "Lord of Blood's Exultation",
        desc: "Nearby Blood Loss gives all Damage a 20% boost for 20 seconds.",
        stacks: {self: true, selfType: true},
        selfType: "bloodBoost",
        effect: {
            always: false,
            condition: "After nearby blood loss (20 Seconds)",
            allDamage: 1.20
        }
    },
    {
        title: "Kindred of Rot's Exultation",
        desc: "Nearby Rot or Poison Proc gives all Damage a 20% boost for 20 seconds.",
        stacks: {self: true, selfType: true},
        selfType: "bloodBoost",
        effect: {
            always: false,
            condition: "After nearby poison or rot proc (20 Seconds)",
            allDamage: 1.20
        }
    },
    {
        title: "Graven-School Talisman",
        desc: "11% Increase to all Sorcery Damage.",
        stacks: {self: true, selfType: true},
        selfType: "sorcDamage",
        effect: {
            always: true,
            sorcDamage: 1.11
        }
    },
    {
        title: "Faithful's Canvas Talisman",
        desc: "11% Increase to all Incantation Damage.",
        stacks: {self: true, selfType: true},
        selfType: "incantDamage",
        effect: {
            always: true,
            sorcDamage: 1.11
        }
    },
]