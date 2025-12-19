const characterRelics = [
    {
        title: "Art Gauge is Greatly Filled when Ability is Activated", 
        desc: "18 Ult Gauge Points gained when Second Chance ability is used. THIS DOES NOT MEAN THE GRAPPLE HOOK.",
        stacks: {self: false, selfType: false},
        selfType: "ultOnArt",
        nightfarer: "Wylder",
        effect: {
            utlOnArt: 18,
            always: true,
        },
    },
    {
        title: "Art Aactivation Spreads Fire in the Area", 
        desc: "Ultimate Ability leaves fire AoE that damages enemies over time.",
        stacks: {self: false, selfType: false},
        selfType: "ultAoeDot",
        nightfarer: "Wylder",
        effect: {
            always: true,
        },
    },
    {
        title: "Standard attacks enhanced with fiery follow-ups when using Character Skill ", 
        desc: "RB / R1 attack during or after a grapple hook use will be a special fire attack. Adds 12 Fire Attack Points (AP) to weapon.",
        stacks: {self: false, selfType: false},
        selfType: "fireHook",
        nightfarer: "Wylder",
        effect: {
            always: true,
        },
    },
    {
        title: "+1 Additonal Character Skill Use ", 
        desc: "Can hold 2 Charges of Grapple Hook",
        stacks: {self: false, selfType: false},
        selfType: "2hooks",
        nightfarer: "Wylder",
        effect: {
            always: true,
        },
    },
    {
        title: "Increased Skill Duration", 
        desc: "Charged Character Skill now creates a much larger tornado that persist longer. Blocks most projectiles",
        stacks: {self: false, selfType: false},
        selfType: "longSkill",
        nightfarer: "Guardian",
        effect: {
            always: true,
        },
    },
    {
        title: "Successful Guards send out Shockwaves while Ability is active", 
        desc: "Successful blocks during Iron Guard cause shockwaves that damage enemies and revive allies. Base 100 physical damage.",
        stacks: {self: false, selfType: false},
        selfType: "boomGuard",
        nightfarer: "Guardian",
        effect: {
            always: true,
        },
    },
    {
        title: "Art Charge Activation Adds Poison Effect", 
        desc: "Ultimate Art deals 300 Poison Buildup.",
        stacks: {self: false, selfType: false},
        selfType: "poisonUlt",
        nightfarer: "Ironeye",
        effect: {
            always: true,
        },
    },
    {
        title: "Boosts Thrusting Counterattacks after executing Art", 
        desc: "Thrusting Attack damage dealt while enemy is in an attack animation deals an extra 20% damage for 30 seconds after using Ultimate Art.",
        stacks: {self: false, selfType: false},
        selfType: "thrusting",
        nightfarer: "Ironeye",
        effect: {
            always: true,
        },
    },
    {
        title: "Extends Duration of Weak Point", 
        desc: "Weak Point Mark lasts on enemies 22 seconds now, as opposed to 17.",
        stacks: {self: false, selfType: false},
        selfType: "longMark",
        nightfarer: "Ironeye",
        effect: {
            always: true,
        },
    },
    {
        title: "+1 Additonal Character Skill Use ", 
        desc: "Can hold 2 Charges of Mark Evade Skill",
        stacks: {self: false, selfType: false},
        selfType: "2marks",
        nightfarer: "Ironeye",
        effect: {
            always: true,
        },
    },
    {
        title: "Defeating enemies while Art is active ups attack power", 
        desc: "All damage increased by 15% per enemy killed while invisible. Each 15% stack lasts 30 seconds, new kills do not reset the timer.",
        stacks: {self: false, selfType: false},
        selfType: "boomArt",
        nightfarer: "Duchess",
        effect: {
            always: true,
        },
    },
    {
        title: "Improved Character Skill Attack Power", 
        desc: "Duchess' Restage does 60% of total damage instead of 50%",
        stacks: {self: false, selfType: false},
        selfType: "restageBuff",
        nightfarer: "Duchess",
        effect: {
            always: true,
        },
    },
    {
        title: "Become Difficult to spot and silence footsteps after landing Critical from behind", 
        desc: "Near invisibility for a few seconds after getting a backstab critical. Dont use this, guys.",
        stacks: {self: false, selfType: false},
        selfType: "invisCrit",
        nightfarer: "Duchess",
        effect: {
            always: true,
        },
    },
]