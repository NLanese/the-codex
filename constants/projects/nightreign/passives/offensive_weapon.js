const offensive_weapon_passives = [
    {
        title: "Attack Up When Wielding Two Armaments +12%", 
        desc: "When powerstancing weapons of the same type, paired LB / L1's do more damage",
        stacks: {self: true, selfType: true},
        selfType: "powerstanceDam",
        effect: {
            allDamage: 1.12,
            always: false,
            condition: "Powerstancing similar weapons",
            appliesRanged: false,
        }
    },
    {
        title: "Attack Up When Wielding Two Armaments +15%", 
        desc: "When powerstancing weapons of the same type, paired LB / L1's do more damage",
        stacks: {self: true, selfType: true},
        selfType: "powerstanceDam",
        effect: {
            allDamage: 1.15,
            always: false,
            condition: "Powerstancing similar weapons",
            appliesRanged: false,
        }
    },
    {
        title: "Attack Up When Wielding Two Armaments +18%", 
        desc: "When powerstancing weapons of the same type, paired LB / L1's do more damage",
        stacks: {self: true, selfType: true},
        selfType: "powerstanceDam",
        effect: {
            allDamage: 1.18,
            always: false,
            appliesRanged: false,
            condition: "Powerstancing similar weapons"
        }
    },
    {
        title: "Improved Attack Power When Two-Handings +12%", 
        desc: "Two handing any armamemnt causes it to deal more damage. Does not work on bows",
        stacks: {self: true, selfType: true},
        selfType: "powerstanceDam",
        effect: {
            allDamage: 1.12,
            always: false,
            appliesRanged: false,
            condition: "Two-Handing your Weapon"
        }
    },
    {
        title: "Improved Attack Power When Two-Handings +15%", 
        desc: "Two handing any armamemnt causes it to deal more damage. Does not work on bows",
        stacks: {self: true, selfType: true},
        selfType: "powerstanceDam",
        effect: {
            allDamage: 1.15,
            always: false,
            appliesRanged: false,
            condition: "Two-Handing your Weapon"
        }
    },
    {
        title: "Improved Attack Power When Two-Handings +18%", 
        desc: "Two handing any armamemnt causes it to deal more damage. Does not work on bows",
        stacks: {self: true, selfType: true},
        selfType: "powerstanceDam",
        effect: {
            allDamage: 1.18,
            always: false,
            appliesRanged: false,
            condition: "Two-Handing your Weapon"
        }
    },
    {
        title: "Improved Attack Power at Low HP +7%", 
        desc: "All Attack Damage increases when below 20% HP",
        stacks: {self: true, selfType: true},
        selfType: "lowHP",
        effect: {
            allDamage: 1.07,
            always: false,
            appliesRanged: true,
            condition: "Below 20% HP"
        }
    },
    {
        title: "Improved Attack Power at Low HP +10%", 
        desc: "All Attack Damage increases when below 20% HP",
        stacks: {self: true, selfType: true},
        selfType: "lowHP",
        effect: {
            allDamage: 1.10,
            always: false,
            appliesRanged: true,
            condition: "Below 20% HP"
        }
    },
    {
        title: "Improved Attack Power at Low HP +13%", 
        desc: "All Attack Damage increases when below 20% HP",
        stacks: {self: true, selfType: true},
        selfType: "lowHP",
        effect: {
            allDamage: 1.13,
            always: false,
            appliesRanged: true,
            condition: "Below 20% HP"
        }
    },
    {
        title: "Improved Attack Power at Low HP +17%", 
        desc: "All Attack Damage increases when below 20% HP",
        stacks: {self: true, selfType: true},
        selfType: "lowHP",
        effect: {
            allDamage: 1.17,
            always: false,
            appliesRanged: true,
            condition: "Below 20% HP"
        }
    },
    {
        title: "Improved Attack Power at Low HP +21%", 
        desc: "All Attack Damage increases when below 20% HP",
        stacks: {self: true, selfType: true},
        selfType: "lowHP",
        effect: {
            allDamage: 1.21,
            always: false,
            appliesRanged: true,
            condition: "Below 20% HP"
        }
    },
    {
        title: "Improved Attack Power at Full HP +7%", 
        desc: "All Attack Damage increases when at 100% HP",
        stacks: {self: true, selfType: true},
        selfType: "fullHP",
        effect: {
            allDamage: 1.07,
            always: false,
            appliesRanged: true,
            condition: "At Max HP"
        }
    },
    {
        title: "Improved Attack Power at Full HP +10.5%", 
        desc: "All Attack Damage increases when at 100% HP",
        stacks: {self: true, selfType: true},
        selfType: "fullHP",
        effect: {
            allDamage: 1.105,
            always: false,
            appliesRanged: true,
            condition: "At Max HP"
        }
    },
    {
        title: "Improved Attack Power at Full HP +14%", 
        desc: "All Attack Damage increases when at 100% HP",
        stacks: {self: true, selfType: true},
        selfType: "fullHP",
        effect: {
            allDamage: 1.14,
            always: false,
            appliesRanged: true,
            condition: "At Max HP"
        }
    },
    {
        title: "Improved Melee Attack Power +9%", 
        desc: "All Melee Attack Damage increases",
        stacks: {self: true, selfType: true},
        selfType: "meleeUp",
        effect: {
            allDamage: 1.09,
            always: true,
            appliesRanged: false,
        }
    },
    {
        title: "Improved Melee Attack Power +12%", 
        desc: "All Melee Attack Damage increases",
        stacks: {self: true, selfType: true},
        selfType: "meleeUp",
        effect: {
            allDamage: 1.12,
            always: true,
            appliesRanged: false,
        }
    },
    {
        title: "Improved Melee Attack Power +15%", 
        desc: "All Melee Attack Damage increases",
        stacks: {self: true, selfType: true},
        selfType: "meleeUp",
        effect: {
            allDamage: 1.15,
            always: true,
            appliesRanged: false,
        }
    },
    {
        title: "Improved Chain Attack Finishers +X%", 
        desc: "Hit hit of an R1 / RB chain does increased damaged",
        stacks: {self: true, selfType: true},
        selfType: "finisherUp",
        effect: {
            always: true,
            appliesRanged: true,
        }
    },
    {
        title: "Improved Charged Attacks +21%", 
        desc: "Hit hit of an R1 / RB chain does increased damaged",
        stacks: {self: true, selfType: true},
        selfType: "chargedUp",
        effect: {
            always: false,
            appliesRanged: true,
            weaponDamage: 1.16,
            condition: "Charged R2 / RT Attacks"
        }
    },
    {
        title: "Improved Charged Attacks +26%", 
        desc: "Hit hit of an R1 / RB chain does increased damaged",
        stacks: {self: true, selfType: true},
        selfType: "chargedUp",
        effect: {
            always: false,
            appliesRanged: true,
            weaponDamage: 1.16,
            condition: "Charged R2 / RT Attacks"
        }
    },
    {
        title: "Improved Charged Attacks +31%", 
        desc: "Hit hit of an R1 / RB chain does increased damaged",
        stacks: {self: true, selfType: true},
        selfType: "chargedUp",
        effect: {
            always: false,
            appliesRanged: true,
            weaponDamage: 1.16,
            condition: "Charged R2 / RT Attacks"
        }
    },
    {
        title: "Improved Skill Attack Power +15%", 
        desc: "Skills do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "skillUp",
        effect: {
            always: true,
            appliesRanged: true,
            skillDamage: 1.15,
        }
    },
    {
        title: "Improved Skill Attack Power +18%", 
        desc: "Skills do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "skillUp",
        effect: {
            always: true,
            appliesRanged: true,
            skillDamage: 1.18,
        }
    },
    {
        title: "Improved Skill Attack Power +21%", 
        desc: "Skills do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "skillUp",
        effect: {
            always: true,
            appliesRanged: true,
            skillDamage: 1.21,
        }
    },
    {
        title: "Improved Dash Attacks +20%", 
        desc: "R1 / RB Attacks while sprinting do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "dashUp",
        effect: {
            always: true,
            appliesRanged: true,
            dashDamage: 1.20,
        }
    },
    {
        title: "Improved Dash Attacks +24%", 
        desc: "R1 / RB Attacks while sprinting do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "dashUp",
        effect: {
            always: true,
            appliesRanged: true,
            dashDamage: 1.24,
        }
    },
    {
        title: "Improved Dash Attacks +28%", 
        desc: "R1 / RB Attacks while sprinting do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "dashUp",
        effect: {
            always: true,
            appliesRanged: true,
            dashDamage: 1.24,
        }
    },
    {
        title: "Improved Rolling Attacks +20%", 
        desc: "R1 / RB / RT / R2 Attacks right after a dodge do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "dashUp",
        effect: {
            always: true,
            appliesRanged: true,
            rollDamage: 1.20,
        }
    },
    {
        title: "Improved Rolling Attacks +20%", 
        desc: "R1 / RB / RT / R2 Attacks right after a dodge do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "rollUp",
        effect: {
            always: true,
            appliesRanged: true,
            rollDamage: 1.20,
        }
    },
    {
        title: "Improved Rolling Attacks +24%", 
        desc: "R1 / RB / RT / R2 Attacks right after a dodge do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "rollUp",
        effect: {
            always: true,
            appliesRanged: true,
            rollDamage: 1.24,
        }
    },
    {
        title: "Improved Rolling Attacks +28%", 
        desc: "R1 / RB / RT / R2 Attacks right after a dodge do increased damage",
        stacks: {self: true, selfType: true},
        selfType: "rollUp",
        effect: {
            always: true,
            appliesRanged: true,
            rollDamage: 1.28,
        }
    },
    {
        title: "Improved Guard Counters +17%", 
        desc: "Increases Guard Counter Damage by 17%",
        stacks: {self: true, selfType: true},
        selfType: "GuardCounter",
        effect: {
            counterDamage: 1.17,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Guard Counters +20%", 
        desc: "Increases Guard Counter Damage by 20%",
        stacks: {self: true, selfType: true},
        selfType: "GuardCounter",
        effect: {
            counterDamage: 1.20,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Guard Counters +23%", 
        desc: "Increases Guard Counter Damage by 23%",
        stacks: {self: true, selfType: true},
        selfType: "GuardCounter",
        effect: {
            counterDamage: 1.23,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Jump Attacks +14%", 
        desc: "Increases Jump Attack Damage by 14%",
        stacks: {self: true, selfType: true},
        selfType: "jumpAttack",
        effect: {
            jumpDamage: 1.14,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Jump Attacks +17%", 
        desc: "Increases Jump Attack Damage by 17%",
        stacks: {self: true, selfType: true},
        selfType: "jumpAttack",
        effect: {
            jumpDamage: 1.17,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Jump Attacks +20%", 
        desc: "Increases Jump Attack Damage by 20%",
        stacks: {self: true, selfType: true},
        selfType: "jumpAttack",
        effect: {
            jumpDamage: 1.20,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Critical Hits +12%", 
        desc: "Increases Critical Hit Damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "critDamage",
        effect: {
            critDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Critical Hits +18%", 
        desc: "Increases Critical Hit Damage by 18%",
        stacks: {self: true, selfType: true},
        selfType: "critDamage",
        effect: {
            critDamage: 1.18,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Critical Hits +24%", 
        desc: "Increases Critical Hit Damage by 24%",
        stacks: {self: true, selfType: true},
        selfType: "critDamage",
        effect: {
            critDamage: 1.24,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Ranged Attacks +7%", 
        desc: "Increases Ranged R1 / RB / R2 / RT Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "rangedDamage",
        effect: {
            rangedDamage: 1.07,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Ranged Attacks +11%", 
        desc: "Increases Ranged R1 / RB / R2 / RT Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "rangedDamage",
        effect: {
            rangedDamage: 1.11,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Ranged Attacks +14%", 
        desc: "Increases Ranged R1 / RB / R2 / RT Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "rangedDamage",
        effect: {
            rangedDamage: 1.14,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Magic Attack Power +6%", 
        desc: "Increases All Magic Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "magicDamage",
        effect: {
            magicDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Magic Attack Power +9%", 
        desc: "Increases All Magic Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "magicDamage",
        effect: {
            magicDamage: 1.09,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Magic Attack Power +12%", 
        desc: "Increases All Magic Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "magicDamage",
        effect: {
            magicDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Fire Attack Power +6%", 
        desc: "Increases All Fire Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "fireDamage",
        effect: {
            fireDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Fire Attack Power +9%", 
        desc: "Increases All Fire Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "fireDamage",
        effect: {
            fireDamage: 1.09,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Fire Attack Power +12%", 
        desc: "Increases All Fire Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "fireDamage",
        effect: {
            fireDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Lightning Attack Power +6%", 
        desc: "Increases All Lightning Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "lightningDamage",
        effect: {
            lightningDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Lightning Attack Power +9%", 
        desc: "Increases All Lightning Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "lightningDamage",
        effect: {
            lightningDamage: 1.09,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Lightning Attack Power +12%", 
        desc: "Increases All Lightning Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "lightningDamage",
        effect: {
            lightningDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Holy Attack Power +6%", 
        desc: "Increases All Holy Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "holyDamage",
        effect: {
            holyDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Holy Attack Power +9%", 
        desc: "Increases All Holy Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "holyDamage",
        effect: {
            holyDamage: 1.09,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Holy Attack Power +12%", 
        desc: "Increases All Holy Attack Damage",
        stacks: {self: true, selfType: true},
        selfType: "holyDamage",
        effect: {
            holyDamage: 1.12,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Sorceries +5%", 
        desc: "Increases All Sorcery Damage",
        stacks: {self: true, selfType: true},
        selfType: "sorcDamage",
        effect: {
            sorcDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Sorceries +8%", 
        desc: "Increases All Sorcery Damage",
        stacks: {self: true, selfType: true},
        selfType: "sorcDamage",
        effect: {
            sorcDamage: 1.08,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Sorceries +11%", 
        desc: "Increases All Sorcery Damage",
        stacks: {self: true, selfType: true},
        selfType: "sorcDamage",
        effect: {
            sorcDamage: 1.11,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Incantation +5%", 
        desc: "Increases All Incantation Damage",
        stacks: {self: true, selfType: true},
        selfType: "incantDamage",
        effect: {
            incantDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Incantation +8%", 
        desc: "Increases All Incantation Damage",
        stacks: {self: true, selfType: true},
        selfType: "incantDamage",
        effect: {
            incantDamage: 1.08,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Incantation +11%", 
        desc: "Increases All Incantation Damage",
        stacks: {self: true, selfType: true},
        selfType: "incantDamage",
        effect: {
            incantDamage: 1.11,
            appliesRanged: true,
            always: true,
        }
    }, 
    {
        title: "Improved Charged Sorceriey/Incantation Damage +9%", 
        desc: "Increases All Incantation Damage",
        stacks: {self: true, selfType: true},
        selfType: "incantDamage",
        effect: {
            chargedSpellDamaged: 1.09,
            appliesRanged: true,
            always: true,
        }
    }, 
    {
        title: "Improved Charged Sorceriey/Incantation Damage +13%", 
        desc: "Increases All Incantation Damage",
        stacks: {self: true, selfType: true},
        selfType: "incantDamage",
        effect: {
            chargedSpellDamaged: 1.13,
            appliesRanged: true,
            always: true,
        }
    }, 
    {
        title: "Improved Charged Sorceriey/Incantation Damage +18%", 
        desc: "Increases All Incantation Damage",
        stacks: {self: true, selfType: true},
        selfType: "incantDamage",
        effect: {
            chargedSpellDamaged: 1.18,
            appliesRanged: true,
            always: true,
        }
    }, 
    {
        title: "Improved Spell Casting Speed +1", 
        desc: "Increases Spell Casting Speed by 30 Dex",
        stacks: {self: true, selfType: true},
        selfType: "spellSpeed",
        effect: {
            always: true,
        }
    }, 
    {
        title: "Improved Spell Casting Speed +2", 
        desc: "Increases Spell Casting Speed by 60 Dex",
        stacks: {self: true, selfType: true},
        selfType: "spellSpeed",
        effect: {
            always: true,
        }
    }, 
    {
        title: "Projectile Damage Drop-off Reduced", 
        desc: "Reduces the amount of attack damage reduction suffered at distances",
        stacks: {self: true, selfType: true},
        selfType: "falloff",
        effect: {
            always: true,
        }
    }, 
]

export default offensive_weapon_passives