export default offensiveRelics = [
    {
        title: "Taking attacks improves attack power", 
        desc: "15% Buff to ALL DAMAGE after taking damage from an unblocked enemy attack. Lasts 10 seconds and refreshes duration on next hit.",
        stacks: {self: false, selfType: false},
        selfType: "BuffOnHit",
        effect: {
            allDamage: 1.15,
            always: false,
            appliesRanged: true,
            condition: "10 seconds active after taking damage from an enemy"
        }
    },
    {
        title: "Physical Attack Up", 
        desc: "4% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            physDamage: 1.04,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Physical Attack Up +1", 
        desc: "5% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            physDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Physical Attack Up +2", 
        desc: "6% Increase to all Physical Damage",
        stacks: {self: true, selfType: true},
        selfType: "PhysUp",
        effect: {
            physDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Melee Attack Power", 
        desc: "6% Increase to all Non-Ranged and Non-Catalyst Weapon Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "Melee",
        effect: {
            weaponDamge: 1.06,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Skill Attack Power", 
        desc: "20% Increase to all Skill Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "SkillUp",
        effect: {
            skillDamage: 1.20,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up", 
        desc: "4.5% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up +1", 
        desc: "5% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Magic Attack Up +2", 
        desc: "6% Increase to all Magic Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "MagicUp",
        effect: {
            magicDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up", 
        desc: "4.5% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up +1", 
        desc: "5% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Fire Attack Up +2", 
        desc: "6% Increase to all Fire Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "FireUp",
        effect: {
            fireDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up", 
        desc: "4.5% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up +1", 
        desc: "5% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Lightning Attack Up +2", 
        desc: "6% Increase to all Lightning Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "LightningUp",
        effect: {
            lightningDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up", 
        desc: "4.5% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.045,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up +1", 
        desc: "5% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.05,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Holy Attack Up +2", 
        desc: "6% Increase to all Holy Attack Power",
        stacks: {self: true, selfType: true},
        selfType: "HolyUp",
        effect: {
            holyDamage: 1.06,
            appliesRanged: true,
            always: true,
        }
    },
    {
        title: "Improved Stance Breaking when Two Handing", 
        desc: "5% Increase to poise dmaage when two handing",
        stacks: {self: true, selfType: true},
        selfType: "StanceUp",
        effect: {
            stanceDamage: 1.05,
            appliesRanged: false,
            always: false,
            condition: "Two handing a Weapon"
        }
    },
    {
        title: "Improved Stance Breaking when Weilding Two Armaments", 
        desc: "5% Increase to poise dmaage when powestancing two weapons of the same type",
        stacks: {self: true, selfType: true},
        selfType: "StanceUp",
        effect: {
            stanceDamage: 1.05,
            appliesRanged: false,
            always: false,
            condition: "Weilding Two weapons of the same type"
        }
    },
    {
        title: "Switching Weapons Adds an Affinity Attack", 
        desc: "Adds 12 Magic/Fire/Lightning/Holy Attack (AP) to your Weapon for 10 seconds after switching to it",
        stacks: {self: false, selfType: false},
        selfType: "AffinityGrant",
        effect: {
            affinity_AP: 12,
            affintiy_type: "random",
            appliesRanged: true,
            always: false,
            condition: "10 Seconds after Weapon Switching"
        }
    },
    {
        title: "Successive Attacks Boosts Attack Power", 
        desc: "Increases Damage by 6%, then 10.5%, and finally 15% after 3, 5, and 8 consecutive hits. Taking damage has no effect on this relic",
        stacks: {self: false, selfType: false},
        selfType: "SuccessiveAttacks",
        effect: {
            allDamage: 1.15,
            appliesRanged: true,
            always: false,
            condition: "10 Seconds after Landing 8 Hits in succession"
        }
    },
    {
        title: "Attack Power increases after using grease items", 
        desc: "Increases Physical Attack Power by 10% for 30 seconds after using Grease Items",
        stacks: {self: false, selfType: false},
        selfType: "GreaseAttacks",
        effect: {
            physDamage: 1.10,
            appliesRanged: true,
            always: false,
            condition: "30 Seconds after Applying Grease"
        }
    },
    {
        title: "Improved Initial Standard Attack", 
        desc: "Increases standing RB/R1 initial combo chain hit by 15%",
        stacks: {self: false, selfType: false},
        selfType: "StandardAttack",
        effect: {
            physDamage: 1.15,
            appliesRanged: true,
            always: false,
            condition: "First hit of standard Combo"
        }
    },
    {
        title: "Improved Guard Counters", 
        desc: "Increases Guard Counter Damage by 23%",
        stacks: {self: true, selfType: true},
        selfType: "GuardCounter",
        effect: {
            counterDamage: 1.23,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Guard Counter is Given a Boost based on Current HP", 
        desc: "Damage increase given based on total HP remaining, not percentage remaining. A Guardian with 700/1100 hits will do more damage than a Recluse with 480/550",
        stacks: {self: false, selfType: false},
        selfType: "GuardCounter",
        effect: {
            counterDamage: 1.35,
            appliesRanged: false,
            always: false,
            condition: "At full health, 800/800 for example"
        }
    },
    {
        title: "Improved Critical Hits", 
        desc: "Increases Critical Hit Damage by 18%",
        stacks: {self: true, selfType: true},
        selfType: "CritUp",
        effect: {
            critDamage: 1.18,
            appliesRanged: false,
            always: false,
        }
    },
    {
        title: "Improved Critical Hits +1", 
        desc: "Increases Critical Hit Damage by 23%",
        stacks: {self: true, selfType: true},
        selfType: "CritUp",
        effect: {
            critDamage: 1.23,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Throwing Pot/Knife/Stone/Perfuming Arts Damage", 
        desc: "Increases Pot/Knife/Stone/Perfuming Arts damage by 15%",
        stacks: {self: true, selfType: true},
        selfType: "ThrowsUp",
        effect: {
            throwingDamage: 1.15,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Crystalian Sorcery", 
        desc: "Increases Crystalian Sorcery (Shattering Crystal, Crystal Release, Crystal Torrent) damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "CrystalUp",
        effect: {
            crystalDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Carian Sorcery", 
        desc: "Increases Carian Sorcery (Slicer, Greatsword, Lance) damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "CarianUp",
        effect: {
            carianDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Glintblade Sorcery", 
        desc: "Increases Glintblade Sorcery (Phalanx, Glintblade) damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "GlintUp",
        effect: {
            glintDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Stonedigger Sorcery", 
        desc: "Increases Stonedigger Sorcery damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "DigUp",
        effect: {
            digDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Gravity Sorcery", 
        desc: "Increases Gravity Sorcery (Rock Sling, Collapsing Stars, Meteorite, etc) damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "GravUp",
        effect: {
            gravDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Thorn Sorcery", 
        desc: "Increases Thorn Sorcery damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "ThornUp",
        effect: {
            thornDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Fundamentalist Incantation", 
        desc: "Increases Golden Order Incantation (Rings of Light, Discus, Triple Rings) damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "FundUp",
        effect: {
            fundDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Dragon Cult Incantation", 
        desc: "Increases Lightning Incantation damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "ThornUp",
        effect: {
            dargonCultDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Giant's Flame Incantation", 
        desc: "Increases Giant Fire (Giants Flame Take Thee, Flame of the Fell God, etc) Incantation damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "giantUp",
        effect: {
            giantFireDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Frenzy Flame Incantation", 
        desc: "Increases Frenzy Incantation damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "frenzyUp",
        effect: {
            giantFireDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Frenzy Flame Incantation", 
        desc: "Increases Frenzy Incantation damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "frenzyUp",
        effect: {
            giantFireDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Bestial Incantation", 
        desc: "Increases Bestial (Sling, Claw) Incantation damage by 12%",
        stacks: {self: true, selfType: true},
        selfType: "beastUp",
        effect: {
            giantFireDamage: 1.12,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved Roar and Breath Attacks", 
        desc: "Increases Roar / Breath Skill damage by 15%",
        stacks: {self: true, selfType: true},
        selfType: "beastUp",
        effect: {
            roarDamage: 1.15,
            appliesRanged: false,
            always: true,
        }
    },
    {
        title: "Improved [Weapon] Attack Power", 
        desc: "Increases Specific Weapon damage by 9%",
        stacks: {self: true, selfType: true},
        selfType: "specificWeaponUp",
        effect: {
            weaponDamge: 1.09,
            appliesRanged: true,
            always: false,
            condition: "When using specific weapon type"
        }
    },
]