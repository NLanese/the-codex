const regenRelics = [
    {
        title: "Character Skill Cooldown +1",
        desc: "Reduces Chaarcter Skill cooldown by 5%",
        stacks: {self: true, selfType: true},
        selfType: "skillCooldown",
        effect: {
            skillCooldown: .95
        }
    },
    {
        title: "Character Skill Cooldown +2",
        desc: "Reduces Chaarcter Skill cooldown by 7.5%",
        stacks: {self: true, selfType: true},
        selfType: "skillCooldown",
        effect: {
            skillCooldown: .925
        }
    },
    {
        title: "Character Skill Cooldown +3",
        desc: "Reduces Chaarcter Skill cooldown by 10%",
        stacks: {self: true, selfType: true},
        selfType: "skillCooldown",
        effect: {
            skillCooldown: .90
        }
    },

    {
        title: "Ultimate Art Cooldown +1",
        desc: "Reduces Ultimate Art cooldown by 5%",
        stacks: {self: true, selfType: true},
        selfType: "ultCooldown",
        effect: {
            skillCooldown: .95
        }
    },
    {
        title: "Ultimate Art Cooldown +2",
        desc: "Reduces Ultimate Art cooldown by 7.5%",
        stacks: {self: true, selfType: true},
        selfType: "ultCooldown",
        effect: {
            skillCooldown: .925
        }
    },
    {
        title: "Ultimate Art Cooldown +3",
        desc: "Reduces Ultimate Art cooldown by 10%",
        stacks: {self: true, selfType: true},
        selfType: "ultCooldown",
        effect: {
            ultCooldown: .90
        }
    },
    {
        title: "Partial HP Restoartion upon Post-Damage Attacks",
        desc: "Hits restore 30% of Damage Dealt for 3 seconds after taking damage. Can only restore the damage taken during the hit.",
        stacks: {self: false, selfType: false},
        selfType: "postDamage",
        effect: {
            
        }
    },
    {
        title: "Slowly Restore HP for Self and Nearby Allies when HP is low",
        desc: "Hits restore 30% of Damage Dealt for 3 seconds after taking damage. Can only restore the damage taken during the hit.",
        stacks: {self: false, selfType: false},
        selfType: "holyGround",
        effect: {
            
        }
    },
    {
        title: "Art Gauge Filled Moderately on Critical Hit",
        desc: "Hits restore 30% of Damage Dealt for 3 seconds after taking damage. Can only restore the damage taken during the hit.",
        stacks: {self: false, selfType: false},
        selfType: "ultGiven",
        effect: {
            ultGiven: 5
        }
    },
    {
        title: "HP Restored When Using Cured Meats, Boluses, etc.",
        desc: "Restores 50 HP on Boluse, Crab, Prawn, Turtle Neck, and Fowl Feet comsumption.",
        stacks: {self: false, selfType: false},
        selfType: "ultGiven",
        effect: {
            
        }
    },
]