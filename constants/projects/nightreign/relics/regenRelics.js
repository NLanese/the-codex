const regenRelics = [
    {
        title: "Character Skill Cooldown +1",
        desc: "Reduces Chaarcter Skill cooldown by 5%",
        stacks: {self: true, selfType: true},
        selfType: "skillCooldown",
        effect: {
            always: true,
            skillCooldown: .95
        }
    },
    {
        title: "Character Skill Cooldown +2",
        desc: "Reduces Chaarcter Skill cooldown by 7.5%",
        stacks: {self: true, selfType: true},
        selfType: "skillCooldown",
        effect: {
            always: true,
            skillCooldown: .925
        }
    },
    {
        title: "Character Skill Cooldown +3",
        desc: "Reduces Chaarcter Skill cooldown by 10%",
        stacks: {self: true, selfType: true},
        selfType: "skillCooldown",
        effect: {
            always: true,
            skillCooldown: .90
        }
    },

    {
        title: "Ultimate Art Cooldown +1",
        desc: "Reduces Ultimate Art cooldown by 5%",
        stacks: {self: true, selfType: true},
        selfType: "ultCooldown",
        effect: {
            always: true,
            skillCooldown: .95
        }
    },
    {
        title: "Ultimate Art Cooldown +2",
        desc: "Reduces Ultimate Art cooldown by 7.5%",
        stacks: {self: true, selfType: true},
        selfType: "ultCooldown",
        effect: {
            always: true,
            skillCooldown: .925
        }
    },
    {
        title: "Ultimate Art Cooldown +3",
        desc: "Reduces Ultimate Art cooldown by 10%",
        stacks: {self: true, selfType: true},
        selfType: "ultCooldown",
        effect: {
            always: true,
            ultCooldown: .90
        }
    },
    {
        title: "Partial HP Restoartion upon Post-Damage Attacks",
        desc: "Hits restore 30% of Damage Dealt for 3 seconds after taking damage. Can only restore the damage taken during the hit.",
        stacks: {self: false, selfType: false},
        selfType: "postDamage",
        effect: {
            always: false,
        }
    },
    {
        title: "Slowly Restore HP for Self and Nearby Allies when HP is low",
        desc: "Heals Self and Allies 0.5% + 1 HP per second when Health gets below 20%. Lasts 20 seconds even if user heals",
        stacks: {self: false, selfType: false},
        selfType: "holyGround",
        effect: {
            always: false,
        }
    },
    {
        title: "Art Gauge Filled Moderately on Critical Hit",
        desc: "Critical Hits increase Ultimate Gauge by 5.",
        stacks: {self: false, selfType: false},
        selfType: "ultCrit",
        effect: {
            always: true,
            ultCrit: 5
        }
    },
    {
        title: "HP Restored When Using Cured Meats, Boluses, etc.",
        desc: "Restores 50 HP on Boluse, Crab, Prawn, Turtle Neck, and Fowl Feet comsumption.",
        stacks: {self: false, selfType: false},
        selfType: "hpEat",
        effect: {
            always: true,
            hpEat: 50
        }
    },
    {
        title: "Art Gauge Charged from successful Guarding.",
        desc: "1 Ultimate Charge per Successful Guard",
        stacks: {self: false, selfType: false},
        selfType: "ultGuard",
        effect: {
            always: true,
            ultGuard: 1
        }
    },
    {
        title: "Continuous HP Recovery",
        desc: "2 HP Per Second",
        stacks: {self: false, selfType: true},
        selfType: "regenHP",
        effect: {
            always: true,
            regenHP: 1
        }
    },
    {
        title: "Continuous FP Recovery",
        desc: "1 FP Per Second",
        stacks: {self: false, selfType: true},
        selfType: "regenFP",
        effect: {
            always: true,
            regenFP: 1
        }
    },
    {
        title: "Rot in Vicinity Causes Continuous HP Recovery",
        desc: "Heals Self 15% + 15 HP per second for 15 seconds (240% total HP) over 15 seconds after a rot proc",
        stacks: {self: false, selfType: true},
        selfType: "regenHP",
        effect: {
            always: false,
            condition: "15 Seconds after Rot Proc",
            regenHP: 15,
            regenHP_percent: 15
        }
    },
    {
        title: "Raised Stamina Recovery for Nearby Allies but not for Self",
        desc: "Allies regen 4 additional stamina per second when nearby",
        stacks: {self: false, selfType: true},
        selfType: "allyBuff",
        effect: {
            always: false,
        }
    },
    {
        title: "FP Restoration upon Successive Attacks",
        desc: "Recovers 5% of FP after a series of consecutive attacks. Taking damage does not reset the counter.",
        stacks: {self: true, selfType: true},
        selfType: "fpGrantPercent",
        effect: {
            always: true,
            fpGrantPercent: 5,
            condition: "After consecutive attacks" 
        }
    },
    {
        title: "HP Recovery From Successful Guarding",
        desc: "Recovers 8 HP after a Successful Guard.",
        stacks: {self: true, selfType: true},
        selfType: "guardHpGrant",
        effect: {
            always: true,
            guardHpGrant: 5,
        }
    },
    {
        title: "Defeating enemies fills more of the Art gauge",
        desc: "Ultimate Gauge regenerates 5 points per kill",
        stacks: {self: true, selfType: true},
        selfType: "ultGrantOnKill",
        effect: {
            always: true,
            ultGrantOnKill: 5,
        }
    },
    {
        title: "HP Restoration after [Weapon type] Attacks",
        desc: "Restores 15 HP per hit with Specific Weapon Type",
        stacks: {self: true, selfType: true},
        selfType: "hpOnWeaponSucc",
        effect: {
            always: true,
            hpOnWeaponSucc: 15,
        }
    },
    {
        title: "FP Restoration after [Weapon type] Attacks",
        desc: "Restores 2 FP per hit with Specific Weapon Type",
        stacks: {self: true, selfType: true},
        selfType: "hpOnWeaponSucc",
        effect: {
            always: true,
            hpOnWeaponSucc: 15,
        }
    },
]

export default regenRelics