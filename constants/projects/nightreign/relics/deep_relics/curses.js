const curses = [
    {
        title: "Taking Damage Causes Deathblight Buildup", 
        desc: "Any damage from an enemy causes 32 Deathblight buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            deathOnHit: 32,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Madness Buildup", 
        desc: "Any damage from an enemy causes 40 Madness buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            madOnHit: 40,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Sleep Buildup", 
        desc: "Any damage from an enemy causes 40 Sleep buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            sleepOnHit: 40,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Bleed Buildup", 
        desc: "Any damage from an enemy causes 44 Bleed buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            bleedOnHit: 44,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Rot Buildup", 
        desc: "Any damage from an enemy causes 44 Rot buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            rotOnHit: 44,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Frostbite Buildup", 
        desc: "Any damage from an enemy causes 44 Frost buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            frostOnHit: 44,
            always: true,
        }
    },
    {
        title: "Taking Damage Causes Poison Buildup", 
        desc: "Any damage from an enemy causes 52 Poison buildup",
        stacks: {self: true, selfType: true},
        selfType: "ailmentCurse",
        effect: {
            frostOnHit: 52,
            always: true,
        }
    },
    {
        title: "Reduced Strength and Intelligence", 
        desc: "Strength and Intelligence -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            str: -3,
            intl: -3,
            always: true
        }
    },
    {
        title: "Reduced Dexterity and Faith", 
        desc: "Dexterity and Faith -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            dex: -3,
            fai: -3,
            always: true
        }
    },
    {
        title: "Reduced Strength and Faith", 
        desc: "Dexterity and Faith -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            str: -3,
            fai: -3,
            always: true
        }
    },
    {
        title: "Reduced Dexterity and Intelligence", 
        desc: "Dexterity and Intelligence -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            dex: -3,
            intl: -3,
            always: true
        }
    },
    {
        title: "Reduced Vigor and Arcane", 
        desc: "Vigor and Arcane -3",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            vigor: -3,
            arcane: -3,
            always: true
        }
    },
    {
        title: "Reduced Rune Acquisition", 
        desc: "Rune Acquisition reduced by 10%",
        stacks: {self: true, selfType: true},
        selfType: "statCurse",
        effect: {
            runeRate: .90,
            always: true
        }
    },
    {
        title: "Reduced Flask HP Restoration", 
        desc: "Flask Restoration Reduced 15%",
        stacks: {self: true, selfType: true},
        selfType: "flaskCurse",
        effect: {
            flaskRate: .85,
            always: true
        }
    },
    {
        title: "Ultimate Art Charging Impaired", 
        desc: "All Ultimate Guage increases reduced by 85%",
        stacks: {self: true, selfType: true},
        selfType: "ultCurse",
        effect: {
            ultRate: .85,
            always: true
        }
    },
]

export default curses