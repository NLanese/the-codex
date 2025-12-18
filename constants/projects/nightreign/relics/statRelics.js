const statRelics = [
    {
        title: "Vigor +1",
        desc: "Increase Vigor by 1 or 20 HP",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            vigor: 1
        }
    },
    {
        title: "Vigor +2",
        desc: "Increase Vigor by 2 or 40 HP",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            vigor: 2
        }
    },
    {
        title: "Vigor +3",
        desc: "Increase Vigor by 3 or 60 HP",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            vigor: 3
        }
    },

    {
        title: "Mind +1",
        desc: "Increase Mind by 1 or 5 FP",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            mind: 1
        }
    },
    {
        title: "Mind +2",
        desc: "Increase Mind by 1 or 10 FP",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            mind: 2
        }
    },
    {
        title: "Mind +3",
        desc: "Increase Mind by 1 or 15 FP",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            mind: 3
        }
    },
    {
        title: "Max FP increased for each Sorcerer's Rise unlocked",
        desc: "Increases FP by 18% per Rise opened",
        stacks: {self: false, selfType: false},
        selfType: "fpOnRise",
        effect: {
            fpOnRise: 1.18
        }
    },

    {
        title: "Endurance +1",
        desc: "Increase Stamina by 2",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            end: 1
        }
    },
    {
        title: "Endurance +2",
        desc: "Increase Stamina by 4",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            end: 2
        }
    },
    {
        title: "Endurance +3",
        desc: "Increase Stamina by 6",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            end: 3
        }
    },

    {
        title: "Dexterity +1",
        desc: "Increase Dexterity by 1",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            dex: 1
        }
    },
    {
        title: "Dexterity +2",
        desc: "Increase Dexterity by 2",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            dex: 2
        }
    },
    {
        title: "Dexterity +3",
        desc: "Increase Dexterity by 3",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            dex: 3
        }
    },

    {
        title: "Intelligence +1",
        desc: "Increase Intelligence by 1",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            intl: 1
        }
    },
    {
        title: "Intelligence +2",
        desc: "Increase Intelligence by 2",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            intl: 2
        }
    },
    {
        title: "Intelligence +3",
        desc: "Increase Intelligence by 3",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            intl: 3
        }
    },


    {
        title: "Faith +1",
        desc: "Increase Faith by 1",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            fai: 1
        }
    },
    {
        title: "Faith +2",
        desc: "Increase Faith by 2",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            fai: 2
        }
    },
    {
        title: "Faith +3",
        desc: "Increase Faith by 3",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            fai: 3
        }
    },

    {
        title: "Strength +1",
        desc: "Increase Strength by 1",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            str: 1
        }
    },
    {
        title: "Strength +2",
        desc: "Increase Strength by 2",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            str: 2
        }
    },
    {
        title: "Strength +3",
        desc: "Increase Strength by 3",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            str: 3
        }
    },

    {
        title: "Arcane +1",
        desc: "Increase Arcane by 1",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            arcane: 1
        }
    },
    {
        title: "Arcane +2",
        desc: "Increase Arcane by 2",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            arcane: 2
        }
    },
    {
        title: "Arcane +3",
        desc: "Increase Arcane by 3",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            arcane: 3
        }
    },

    {
        title: "Increased Max HP",
        desc: "Increase Vigor by 5 or HP by 100",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            vigor: 5
        }
    },
    {
        title: "Increased Max FP",
        desc: "Increase Mind by 5 or FP by 25",
        stacks: {self: true, selfType: true},
        selfType: "stat",
        effect: {
            mind: 5
        }
    },

    
]

export default statRelics