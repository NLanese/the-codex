const deepCharacterRelics = [
    {
        title: "Character Skill inflicts Blood Loss", 
        desc: "60 Bleed Attack Power on initial Grapple Hook Hit, and then 55 on the following pull. Enhanced by Skill Damage increase.",
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
        title: "Slowly restores nearby allies HP while Art is active", 
        desc: "Heals self and allies 10% + 15 HP per half second while Ultimate is open",
        stacks: {self: false, selfType: false},
        selfType: "healSkill",
        nightfarer: "Guardian",
        effect: {
            always: true,
        },
    },
    {
        title: "Creates Whirlwind When Charging Halberd Attacks", 
        desc: "Creates a decent sized whirlwind that deals small damage and poise damage on enemies inside",
        stacks: {self: false, selfType: false},
        selfType: "whirl",
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
        desc: "All Piercing (Bows included) Attack damage dealt while enemy is in an attack animation deals an extra 20% damage for 30 seconds after using Ultimate Art.",
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
    {
        title: "Successive Dagger Attack reprises Event upon Nearby Enemies", 
        desc: "Successive hits (complete R1 / RB chain) are restaged onto nearby enemies at 50% damage.",
        stacks: {self: false, selfType: false},
        selfType: "invisCrit",
        nightfarer: "Duchess",
        effect: {
            always: true,
        },
    },
    {
        title: "Duration of Ultimate Art extended", 
        desc: "That big rock that gets in everyone's way lasts 30 seconds instead of 20.",
        stacks: {self: false, selfType: false},
        selfType: "longArt",
        nightfarer: "Raider",
        effect: {
            always: true,
        },
    },
    {
        title: "Damage taken while using Character Skill Improves Attack Power and Stamina", 
        desc: "Taking any damage from an Enemy while using character Skill will increase all attack damage by 10% and stamina by 20% for 20 seconds",
        stacks: {self: false, selfType: false},
        selfType: "raiderBuff",
        nightfarer: "Raider",
        effect: {
            allDamage: 1.10,
            end: 10,
            always: false,
            condition: "20 Seconds after taking Damage during Character Skill"
        },
    },
    {
        title: "Defeating Enemies neat Totem Stela Restores HP", 
        desc: "Enemies killed near the Totem Stela will heal you 20% HP",
        stacks: {self: false, selfType: false},
        selfType: "healOnUltKill",
        nightfarer: "Raider",
        effect: {
            healOnUltKill: 20 
        },
    },
    {
        title: "Improved Poise Near Totem Stela", 
        desc: "Take half poise damage when near Totem Stela",
        stacks: {self: false, selfType: false},
        selfType: "poiseNeg",
        nightfarer: "Raider",
        effect: {
            poiseNeg: 1.50,
            always: false,
            condition: "Standing near a deployed Totem Stela"
        },
    },
    {
        title: "Trigger ghostflame explosion during Ultimate Art activation", 
        desc: "Performs a ghostflame 'explosion' that does 20 base magic damage. It may tickle a foot soldier. Never use this.",
        stacks: {self: false, selfType: false},
        selfType: "thisSucks",
        nightfarer: "Revenant",
        effect: {
            always: true,
        },
    },
    {
        title: "Strengthens Family and Allies when Ultimate Art is activated", 
        desc: "Increases Summons' and Ally damage by 25% for 30 seconds after Ultimate Art usage.",
        stacks: {self: false, selfType: false},
        selfType: "powerUlt",
        nightfarer: "Revenant",
        effect: {
            always: true
        },
    },
    {
        title: "Power up while Fighting Alongside Family", 
        desc: "Each Summon provides a unique buff. Helen heals 1 HP per second, Sebastian boosts Affinity Negation 20%, Sebastion increases all damage by 10%.",
        stacks: {self: false, selfType: false},
        selfType: "powerUlt",
        nightfarer: "Revenant",
        effect: {
            always: true
        },
    },
    {
        title: "Collecting Affinity residue Activates Terra Magica", 
        desc: "Terra Magica Sigil (Increase Magic Dmaage by 15%) Spawns beneath you when collecting magical residue. Lasts 30 seconds or until next residue collection",
        stacks: {self: false, selfType: false},
        selfType: "terraSkill",
        nightfarer: "Recluse",
        effect: {
            always: true
        },
    },
    {
        title: "Collecting Affinity residue Activates Terra Magica", 
        desc: "Terra Magica Sigil (Increase Magic Dmaage by 15%) Spawns beneath you when collecting magical residue. Lasts 30 seconds or until next residue collection",
        stacks: {self: false, selfType: false},
        selfType: "terraSkill",
        nightfarer: "Recluse",
        effect: {
            always: true
        },
    },
    {
        title: "Suffer Blood Loss and increase Attack Power upon Art activation", 
        desc: "Lose 20% HP to blood loss but gain 16% bonus to all attack damage for 30 seconds",
        stacks: {self: false, selfType: true},
        selfType: "allDamage",
        nightfarer: "Recluse",
        effect: {
            always: false,
            allDamage: 1.16,
            condition: "20 Seconds after using Ultimate Art"
        },
    },
    {
        title: "Character Skill Boosts Attack but Attacking Drains HP", 
        desc: "Cursed Blade deals 8% more damage but you lose 10 HP per attack",
        stacks: {self: false, selfType: true},
        selfType: "cursedCurse",
        nightfarer: "Executor",
        effect: {
            always: true,
        },
    },
    {
        title: "Character Skill Boosts Attack but Attacking Drains HP", 
        desc: "Cursed Blade deals 8% more damage but you lose 10 HP per attack",
        stacks: {self: false, selfType: true},
        selfType: "charSkillDam",
        nightfarer: "Executor",
        effect: {
            always: true,
            charSkillDam: 1.08 
        },
    },
    {
        title: "While Character Skill is active, Unlocking use of Cursed Sword Restores HP", 
        desc: "Restores 100 HP on Cursed Sword Unlocking",
        stacks: {self: false, selfType: true},
        selfType: "healOnSword",
        nightfarer: "Executor",
        effect: {
            always: true,
            healOnSword: 100
        },
    },
    {
        title: "While Character Skill is active, Unlocking use of Cursed Sword Restores HP", 
        desc: "Restores 15% of HP for Self and Allies on Roar while in Crucible Beast Form",
        stacks: {self: false, selfType: true},
        selfType: "healOnRoar",
        nightfarer: "Executor",
        effect: {
            always: true,
            healOnRoar: 15
        },
    },
    {
        title: "Prevent slowing of Character Skill", 
        desc: "Analyze progress decay is slowed",
        stacks: {self: false, selfType: true},
        selfType: "slowDecay",
        nightfarer: "Scholar",
        effect: {
            always: true,
        },
    },
    {
        title: "Allies targeted by Character Skill gain boosted attack", 
        desc: "Allies targetted and buffed by Character Skill will get a 20% physical and 15% affinity damage bonus for 30 seconds",
        stacks: {self: false, selfType: true},
        selfType: "slowDecay",
        nightfarer: "Scholar",
        effect: {
            always: true,
        },
    },
    {
        title: "Allies targeted by Character Skill gain boosted attack", 
        desc: "Allies targetted and buffed by Character Skill will get a 20% physical and 15% affinity damage bonus for 30 seconds",
        stacks: {self: false, selfType: true},
        selfType: "slowDecay",
        nightfarer: "Scholar",
        effect: {
            always: true,
        },
    },
    {
        title: "Continuous damage inflicted on targets threaded by Ultimate Art", 
        desc: "Enemies caught in Analyze Character Skill will sustain 15 Dam/Second for 20 seconds (300 total)",
        stacks: {self: false, selfType: false},
        selfType: "damSkill",
        nightfarer: "Scholar",
        effect: {
            always: true,
        },
    },
    {
        title: "Earn Runes for each additional Specimen Acquired with Character Skill", 
        desc: "Every new enemy TYPE (foot soldier, dog, crow, etc) will grant 1300 runes when first fully analyzed",
        stacks: {self: false, selfType: false},
        selfType: "runeSkill",
        nightfarer: "Scholar",
        effect: {
            always: true,
        },
    },
    {
        title: "Activating Ultimate Art Increases Attack Power", 
        desc: "Using Ult or Alternate Ult granrts 14% attack power for 40 seconds",
        stacks: {self: false, selfType: true},
        selfType: "allDamage",
        nightfarer: "Undertaker",
        effect: {
            always: false,
            condition: "40 Seconds after using Ult",
            allDamage: 1.14
        },
    },
    {
        title: "Attack Power increases by landing the Final Blow of a chain attack", 
        desc: "After completeing an R1 / RB chain, all attack power is boosted by 12% for 20 seconds. Works with any weapon type",
        stacks: {self: false, selfType: true},
        selfType: "allDamage",
        nightfarer: "Undertaker",
        effect: {
            always: false,
            condition: "20 Seconds after completing light attack chain",
            allDamage: 1.12
        },
    },
    {
        title: "Physical Attacks Boosted while assist effect from Incantation is active for self", 
        desc: "For 60 seconda after using a body or a weapon buff incantation (Black Flmae Blade, Flame Protect Me, etc) recieve a 15% boost to physical damage",
        stacks: {self: false, selfType: true},
        selfType: "allDamage",
        nightfarer: "Undertaker",
        effect: {
            always: false,
            condition: "60 Seconds after using a buff incantation",
            weaponDamage: 1.15,
            appliesRanged: true
        },
    },
]

export default deepCharacterRelics