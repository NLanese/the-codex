const negative_weapon_passives = [
    {
        title: "Reduced Maximum HP 4%",
        desc: "Reduces Maximum HP",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            HP: 0.96
        }
    },
    {
        title: "Reduced Maximum HP 6%",
        desc: "Reduces Maximum HP",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            HP: 0.94
        }
    },
    {
        title: "Reduced Maximum FP 6%",
        desc: "Reduces Maximum FP",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            FP: 0.94
        }
    },
    {
        title: "Reduced Maximum FP 9%",
        desc: "Reduces Maximum FP",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            FP: 0.91
        }
    },
    {
        title: "Reduced Maximum Stamina 5%",
        desc: "Reduces Maximum Stamina",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            Stam: 0.95
        }
    },
    {
        title: "Reduced Maximum Stamina 8%",
        desc: "Reduces Maximum Stamina",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            Stam: 0.92
        }
    },
    {
        title: "Near Death Reduces Max HP",
        desc: "Reduces Maximum HP by 15% for 30 seconds after being downed",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: false,
            condition: "30 Seconds after being downed",
            HP: 0.85
        }
    },
]