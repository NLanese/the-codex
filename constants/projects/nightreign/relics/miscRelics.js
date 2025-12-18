const miscRelics = [
    {
        title: "Item confer effect to all Nearby Allies", 
        desc: "Cosnumable Item effects apply to nearby Allies.",
        stacks: {self: false, selfType: false},
        selfType: "itemShare",
        effect: {
            always: true,
        }
    },
    {
        title: "Increase rune acquisition for Self and Allies", 
        desc: "3.5% increase to rune acquisition for Self and Allies.",
        stacks: {self: true, selfType: true},
        selfType: "runeIncrease",
        effect: {
            always: true,
            runeIncrease: 1.035
        }
    },
    {
        title: "Critical Hits earn Runes", 
        desc: "Gain 600 Runes on Critical Hits. This is stupid.",
        stacks: {self: true, selfType: true},
        selfType: "critForRunes",
        effect: {
            always: true,
            critForRunes: 600
        }
    },
    {
        title: "Flasks Also Heal Allies", 
        desc: "Whenever you heal from Crimson Flasks, nearby allies heal 50% that amount",
        stacks: {self: true, selfType: true},
        selfType: "flaskShare",
        effect: {
            always: true,
            flaskShare: .50
        }
    },
    {
        title: "Rune Discount for Shop Purchases", 
        desc: "10% Discount on all shops on Day 1 and Day 2",
        stacks: {self: false, selfType: true},
        selfType: "discount",
        effect: {
            always: true,
            discount: .90
        }
    },
    {
        title: "Huge Rune Discount for Shop Purchases", 
        desc: "20% Discount on all shops on Day 1 and Day 2",
        stacks: {self: false, selfType: true},
        selfType: "discount",
        effect: {
            always: true,
            discount: .80
        }
    },
    {
        title: "Treasure Marked upon map", 
        desc: "Reveals hidden chest locations ",
        stacks: {self: false, selfType: false},
        selfType: "reveals",
        effect: {
            always: true,
        }
    },
    {
        title: "Stating Armament inflicts [Whatever] Status", 
        desc: "Weapon Damage reduced 15% but 25 Blood or 35 Poison / Frost Buildup per Hit",
        stacks: {self: false, selfType: false},
        selfType: "startingAilment",
        effect: {
            always: true,
        }
    },
    {
        title: "Starting Weapon Deals [Affinity] Damage", 
        desc: "Weapon Physical Attack Power (AP) Reduced 30/40/50/60 (Depending on Weapon Type) and adds 33/44/55/66 Affinity AP",
        stacks: {self: false, selfType: false},
        selfType: "startingAilment",
        effect: {
            always: true,
        }
    },
    {
        title: "Starts With an Item", 
        desc: "Im getting tired and these have nothing to do with numbers. You know what this does",
        stacks: {self: false, selfType: true},
        selfType: "startingAilment",
        effect: {
            always: true,
        }
    },
]

export default miscRelics