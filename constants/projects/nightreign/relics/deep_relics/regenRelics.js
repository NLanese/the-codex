const regenDeepRelics = [
    {
        title: "Art Gauge Charged from successful Guarding +1",
        desc: "1.5 Ultimate Charge per Successful Guard",
        stacks: {self: false, selfType: true},
        selfType: "ultGuard",
        effect: {
            always: true,
            ultGuard: 1.5
        }
    },
    {
        title: "Art Gauge Filled Moderately on Critical Hit",
        desc: "Critical Hits increase Ultimate Gauge by 6.5.",
        stacks: {self: false, selfType: true},
        selfType: "ultCrit",
        effect: {
            always: true,
            ultCrit: 6.5
        }
    },
    {
        title: "Defeating enemies fills more of the Art gauge +1",
        desc: "Ultimate Gauge regenerates 6.5 points per kill",
        stacks: {self: true, selfType: true},
        selfType: "ultGrantOnKill",
        effect: {
            always: true,
            ultGrantOnKill: 6.5,
        }
    },
    {
        title: "Reduced FP Consumuption", 
        desc: "Decreases all FP Consumption by 8%.",
        stacks: {self: true, selfType: true},
        selfType: "fpConsume",
        effect: {
            incantDamage: 0.92,
            always: true,
        }
    },
    {
        title: "Reduced FP Consumuption +1", 
        desc: "Decreases all FP Consumption by 13%.",
        stacks: {self: true, selfType: true},
        selfType: "fpConsume",
        effect: {
            incantDamage: 0.87,
            always: true,
        }
    },
    {
        title: "Reduced FP Consumuption +2", 
        desc: "Decreases all FP Consumption by 16%.",
        stacks: {self: true, selfType: true},
        selfType: "fpConsume",
        effect: {
            incantDamage: 0.84,
            always: true,
        }
    },
    {
        title: "Improved Flask Restoration", 
        desc: "Health Flasks heal 20% more HP.",
        stacks: {self: true, selfType: true},
        selfType: "hpFlask",
        effect: {
            flaskRate: 1.20,
            always: true,
        }
    },
    {
        title: "HP Restored When Using Cured Meats, Boluses, etc. +1",
        desc: "Restores 80 HP on Boluse, Crab, Prawn, Turtle Neck, and Fowl Feet comsumption.",
        stacks: {self: false, selfType: true},
        selfType: "hpEat",
        effect: {
            always: true,
            hpEat: 80
        }
    },
    {
        title: "HP Restoration upon Thrusting Counterattack +1",
        desc: "Restores 3.3% of your Max HP per attack from a thrusting sword / spear landed on an enemy that is in an attack animation",
        stacks: {self: true, selfType: true},
        selfType: "hpOnWeaponSucc",
        effect: {
            always: true,
        }
    },
    {
        title: "Partial HP Restoartion upon Post-Damage Attacks +1",
        desc: "Hits restore 25% of Damage Dealt for 3 seconds after taking damage. Can only restore the damage taken during the hit.",
        stacks: {self: false, selfType: true},
        selfType: "postDamage",
        effect: {
            always: true,
        }
    },
    {
        title: "Partial HP Restoartion upon Post-Damage Attacks +2",
        desc: "Hits restore 35% of Damage Dealt for 3 seconds after taking damage. Can only restore the damage taken during the hit.",
        stacks: {self: false, selfType: true},
        selfType: "postDamage",
        effect: {
            always: true,
        }
    },
]