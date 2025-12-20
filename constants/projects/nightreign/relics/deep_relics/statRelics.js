const deepStatRelics = [
    {
        title: "Increased Max HP",
        desc: "Increase Max HP by 10%",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            HP: 1.10
        }
    },
    {
        title: "Max HP Increased for each Great Enemy defeated at a Great Church",
        desc: "Increase Max HP by 5% per Cathedral POI Cleared",
        stacks: {self: false, selfType: false},
        selfType: "statPercent",
        effect: {
            always: false,
            HP: 1.05,
            condition: "Cathedral POIs Cleared",
            conditionCount: true
        }
    },
    {
        title: "Increased Max FP",
        desc: "Increase Max FP by 15%",
        stacks: {self: true, selfType: true},
        selfType: "statPercent",
        effect: {
            always: true,
            FP: 1.10
        }
    },
    {
        title: "Increased Max Stamina",
        desc: "Increase Max Stamina by 12%",
        stacks: {self: false, selfType: false},
        selfType: "statPercent",
        effect: {
            Stam: 1.12
        }
    },
    {
        title: "Max Stamina Increased for each Great Enemy defeated at a Great Encampment",
        desc: "Increase Max HP by 7% per Camp POI Cleared",
        stacks: {self: false, selfType: false},
        selfType: "statPercent",
        effect: {
            always: false,
            HP: 1.05,
            condition: "Cathedral POIs Cleared",
            conditionCount: true
        }
    },
    {
        title: "Dormant Power Helps Discover [Weapon Type]",
        desc: "Replaces Weapon already set as more likely to drop for your nightfarer. For example, putting this for Hammers on a Wylder would make him get more Hammers and less Greatswords. You can use multiple of these effects, but priority goes to the first in the list",
        stacks: {self: false, selfType: true},
        selfType: "statPercent",
        effect: {
            always: false,
            HP: 1.05,
            condition: "Cathedral POIs Cleared",
            conditionCount: true
        }
    },
]