const weapon_passives = [
    {
        title: "Wylder's Grief +1", 
        desc: "Dexterity and Strength +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 3,
            str: 3,
            always: true
        }
    },
    {
        title: "Wylder's Grief +2", 
        desc: "Dexterity and Strength +6",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 6,
            str: 6,
            always: true
        }
    },
    {
        title: "Wylder's Grief +3", 
        desc: "Dexterity and Strength +9",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 9,
            str: 9,
            always: true
        }
    },
    {
        title: "Ironeye's Grief +1", 
        desc: "Endurance and Dexterity +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 3,
            end: 3,
            always: true
        }
    },
    {
        title: "Ironeye's Grief +2", 
        desc: "Endurance and Dexterity +6",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 6,
            end: 6,
            always: true
        }
    },
    {
        title: "Ironeye's Grief +3", 
        desc: "Endurance and Dexterity +9",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 6,
            end: 6,
            always: true
        }
    },
    {
        title: "Guardian's Grief +1", 
        desc: "Endurance and Vigor +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            vigor: 3,
            end: 3,
            always: true
        }
    },
    {
        title: "Guardian's Grief +2", 
        desc: "Endurance and Vigor +6",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            vigor: 6,
            end: 6,
            always: true
        }
    },
    {
        title: "Guardian's Grief +3", 
        desc: "Endurance and Vigor +9",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            vigor: 9,
            end: 9,
            always: true
        }
    },
    {
        title: "Duchess's Grief +1", 
        desc: "Dexterity and Intelligence +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            intl: 3,
            dex: 3,
            always: true
        }
    },
    {
        title: "Duchess's Grief +2", 
        desc: "Dexterity and Intelligence +6",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            intl: 6,
            dex: 6,
            always: true
        }
    },
    {
        title: "Duchess's Grief +3", 
        desc: "Dexterity and Intelligence +9",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            intl: 9,
            dex: 9,
            always: true
        }
    },
    {
        title: "Raider's Grief +1", 
        desc: "Vigor and Strength +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            str: 3,
            vigor: 3,
            always: true
        }
    },
    {
        title: "Raider's Grief +2", 
        desc: "Vigor and Strength +6",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            str: 6,
            vigor: 6,
            always: true
        }
    },
    {
        title: "Raider's Grief +3", 
        desc: "Vigor and Strength +9",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            str: 9,
            vigor: 9,
            always: true
        }
    },
    {
        title: "Revenent's Grief +1", 
        desc: "Faith and Arcane +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            fai: 3,
            arcane: 3,
            always: true
        }
    },
    {
        title: "Revenent's Grief +2", 
        desc: "Faith and Arcane +6",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            fai: 6,
            arcane: 6,
            always: true
        }
    },
    {
        title: "Revenent's Grief +3", 
        desc: "Faith and Arcane +9",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            fai: 9,
            arcane: 9,
            always: true
        }
    },
    {
        title: "Recluse's Grief +1", 
        desc: "Faith and Intelligence +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            fai: 3,
            intl: 3,
            always: true
        }
    },
    {
        title: "Recluse's Grief +2", 
        desc: "Faith and Intelligence +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            fai: 6,
            intl: 6,
            always: true
        }
    },
    {
        title: "Recluse's Grief +3", 
        desc: "Faith and Intelligence +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            fai: 9,
            intl: 9,
            always: true
        }
    },
    {
        title: "Executor's Grief +1", 
        desc: "Dexterity and Arcane +3",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 3,
            arcane: 3,
            always: true
        }
    },
    {
        title: "Executor's Grief +2", 
        desc: "Dexterity and Arcane +6",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 6,
            arcane: 6,
            always: true
        }
    },
    {
        title: "Executor's Grief +3", 
        desc: "Dexterity and Arcane +9",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 9,
            arcane: 9,
            always: true
        }
    },
    {
        title: "Improved Item Discovery", 
        desc: "Imrproves Item Discovery",
        stacks: {self: true, selfType: true},
        selfType: "statChange",
        effect: {
            dex: 9,
            arcane: 9,
            always: true,
        }
    },
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
]