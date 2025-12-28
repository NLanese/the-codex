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
]