// AUTO-GENERATED units for Aeldari (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import aeldari_weapons from "../weapons/aeldari"

const aeldari_army = [
    {
        army: "aeldari",
        class: "characters",
        name: "Amallyn Shadowguide [Legends]",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.power_blade,
        ],
        rangedWeapons: [
            aeldari_weapons.ranger_long_rifle,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.ranger_long_rifle, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.power_blade, selected: true},
            ],
        },
        abilities: [
            { name: "The Path Least Travelled", desc: "If your army includes this model, after both players have deployed their armies and determined who has the first turn, you can select one Rangers or Shroud Runners unit from your army and redeploy that unit. When doing so, that unit can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
            { name: "Path of the Outcast", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6." },
            { name: "Invulnerable Save", desc: "This unit has a 4+ invulnerable save." },
        ],
        keywords: ["Epic Hero","Infantry","Character","Grenades","Faction: Asuryani","Aeldari","Amallyn Shadowguide"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Archon",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save"
        },
        meleeWeapons: [
            aeldari_weapons.huskblade,
            aeldari_weapons.agoniser,
            aeldari_weapons.master_crafted_power_weapon,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_pistol,
            aeldari_weapons.blast_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.blast_pistol, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.huskblade, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.agoniser, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.master_crafted_power_weapon, selected: true},
            ],
        },
        abilities: [
            { name: "Soul Trap", desc: "Add 1 to the Attacks and Strength characteristics of the bearer's melee weapons. The first time the bearer makes a melee attack that destroys an enemy model, after all the bearer's attacks have been resolved, until the end of the battle, add an additional 1 to the Attacks and Strength characteristics of the bearer's melee weapons." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Hand of the Archon\n- Incubi\n- Kabalite Warriors" },
            { name: "Overlord", desc: "Once per battle, at the start of any phase, you can select one friendly **Drukhari** unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." },
            { name: "Devious Mastermind", desc: "Once per battle round, one model from your army with this ability can use it when its unit is targeted with a stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
            { name: "Shadowfield", desc: "You cannot re-roll invulnerable saving throws made for the bearer. The first time an invulnerable saving throw made for the bearer is failed, until the end of the battle, the bearer has no invulnerable save." },
            { name: "Invulnerable Save", desc: "This unit has a 2+ invulnerable save. (See Shadowfield ability)" },
            { name: "Hatred Eternal (Pain)", desc: "In your Shooting or the Fight phase, when you select this model's unit to shoot or fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes an attack, you can re-roll the Hit roll." },
        ],
        keywords: ["Character","Infantry","Kabal","Aeldari","Archon","Faction: Drukhari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Archtormentor [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (Archtormentor)", desc: "An Archtormentor has a 4+ Invulnerable save" },
            { name: "Hatred Eternal (Pain)", desc: "In your Shooting phase or the Fight phase, when you select this model’s unit to shoot or fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes an attack, you can re-roll the Hit roll." },
            { name: "Cruel Example", desc: "Each time this model makes an attack that targets a CHARACTER unit, you can add 1 to the Wound roll. Each time this model’s unit destroys a CHARACTER model, you gain 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Wyches" },
        ],
        keywords: ["Character","Infantry","Crucible","Wych Cult","Aeldari","Faction: Drukhari","Archtormentor"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Asurmen",
        pts: 135,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.the_sword_of_asur,
        ],
        rangedWeapons: [
            aeldari_weapons.the_bloody_twins,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.the_bloody_twins, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.the_sword_of_asur, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Asurmen)", desc: "Asurmen has a 4+ Invulnerable save" },
            { name: "Hand of Asuryan", desc: "Once per battle, when this model is selected to shoot, it can use this ability. If it does, until the end of the phase, its Bloody Twins weapon has a Damage characteristic of 3 and the [Anti-Infantry 5+] and [Devastating Wounds] abilities." },
            { name: "Tactical Acumen", desc: "While this model is leading a unit, in your Shooting phase, after that unit has shot, it can make a Normal move of up to 6\". If it does, until the end of the turn, that unit is not eligible to declare a charge." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Dire Avengers" },
        ],
        keywords: ["Infantry","Epic Hero","Character","Phoenix Lord","Asurmen","Faction: Asuryani","Aeldari","Grenades","Aspect Warrior"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Autarch",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.scorpion_chainsword,
            aeldari_weapons.banshee_blade,
            aeldari_weapons.star_glaive,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol,
            aeldari_weapons.reaper_launcher_starshot,
            aeldari_weapons.reaper_launcher_starswarm,
            aeldari_weapons.death_spinner,
            aeldari_weapons.dragon_fusion_gun,
            aeldari_weapons.dragon_fusion_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.reaper_launcher_starshot, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.reaper_launcher_starswarm, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.death_spinner, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.dragon_fusion_gun, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.dragon_fusion_pistol, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.scorpion_chainsword, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.banshee_blade, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.star_glaive, selected: true},
            ],
        },
        abilities: [
            { name: "Superlative Strategist", desc: "While this model is leading a unit, you can re-roll Advance rolls made for that unit, and you can re-roll any rolls made for that unit while it is performing an Agile Manoeuvre." },
            { name: "Path of Command", desc: "Once per battle round, one model from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that usage of that stratagem by 1CP." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Dark Reapers\n- Dire Avengers\n- Fire Dragons\n- Guardian Defenders\n- Howling Banshees\n- Storm Guardians\n- Striking Scorpions" },
            { name: "Invulnerable Save (Autarch)", desc: "An Autarch has a 4+ Invulnerable save" },
            { name: "Aspect Training", desc: "While this model is leading a Howling Banshees unit, it has the Fights First ability.\nWhile this model is leading a Striking Scorpions unit, it has the Infiltrators, Scouts 7\" and Stealth abilities." },
        ],
        keywords: ["Autarch","Character","Infantry","Grenades","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Autarch Skyrunner [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon,
            aeldari_weapons.laser_lance,
            aeldari_weapons.banshee_blade_2,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_shuriken_catapult,
            aeldari_weapons.laser_lance_2,
            aeldari_weapons.dragon_fusion_gun,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_shuriken_catapult, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.laser_lance_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.dragon_fusion_gun, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.close_combat_weapon, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.laser_lance, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.banshee_blade_2, selected: true},
            ],
        },
        abilities: [
            { name: "Path of Command", desc: "Once per battle round, one model from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that usage of that Stratagem by 1CP." },
            { name: "Invulnerable Save (Autarch)", desc: "An Autarch Skyrunner has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Windriders\n- Corsair Cloud Dancer Band" },
            { name: "Ride the WInd", desc: "While this model is leading a unit, each time that unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit" },
        ],
        keywords: ["Autarch","Autarch Skyrunner","Character","Mounted","Fly","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Autarch Wayleaper",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.scorpion_chainsword,
            aeldari_weapons.banshee_blade,
            aeldari_weapons.star_glaive,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol,
            aeldari_weapons.reaper_launcher_starshot,
            aeldari_weapons.reaper_launcher_starswarm,
            aeldari_weapons.death_spinner,
            aeldari_weapons.dragon_fusion_gun,
            aeldari_weapons.dragon_fusion_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.reaper_launcher_starshot, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.reaper_launcher_starswarm, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.death_spinner, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.dragon_fusion_gun, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.dragon_fusion_pistol, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.scorpion_chainsword, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.banshee_blade, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.star_glaive, selected: true},
            ],
        },
        abilities: [
            { name: "Path of Command", desc: "Once per battle round, one model from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that usage of that stratagem by 1CP." },
            { name: "Invulnerable Save (Autarch)", desc: "An Autarch Wayleaper has a 4+ Invulnerable save" },
            { name: "Indomitable Strength of Will", desc: "While this model is leading a unit, each time you spend a Battle Focus token to enable that unit to perform an Agile Manoeuvre, roll one D6: on a 3+ you gain 1 Battle Focus token." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Swooping Hawks\n- Warp Spiders" },
        ],
        keywords: ["Character","Infantry","Grenades","Fly","Autarch Wayleaper","Faction: Asuryani","Aeldari","Jump Pack","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Avatar of Khaine",
        pts: 280,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 11,
            saving: 2,
            wounds: 14,
            leader: 6,
            control: 5,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.the_wailing_doom_strike,
            aeldari_weapons.the_wailing_doom_sweep,
        ],
        rangedWeapons: [
            aeldari_weapons.the_wailing_doom,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.the_wailing_doom, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.the_wailing_doom_strike, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.the_wailing_doom_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Molten Form", desc: "Each time an attack is allocated to this model, halve the Damage characteristic of that attack." },
            { name: "The Bloody Handed (Aura)", desc: "While a friendly Aeldari unit is within 6\" of this model, add 1 to Advance and Charge rolls made for that unit." },
            { name: "Damaged: 1-5 Wounds Remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save (Avatar)", desc: "The Avatar of Khaine has a 4+ Invulnerable save" },
        ],
        keywords: ["Daemon","Epic Hero","Character","Monster","Avatar of Khaine","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Baharroth",
        pts: 115,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.the_shining_blade,
        ],
        rangedWeapons: [
            aeldari_weapons.fury_of_the_tempest,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.fury_of_the_tempest, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.the_shining_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Baharroth)", desc: "Baharroth has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Swooping Hawks" },
            { name: "Cry of the Wind", desc: "Each time this model is set-up on the battlefield, until the end of the turn, each time this model makes a ranged attack, a successful unmodified Hit roll scores a Critical Hit." },
            { name: "Cloudstrider", desc: "While this model is leading a unit, at the end of your opponent's turn, if that unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves. In addition, while this model is leading a unit, when that unit is set-up on the battlefield using the Deep Strike ability, in your Movement phase, it can use this ability. if it does, that unit can be set-up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models, but until the end of the turn, it is not eligible to declare a charge." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Fly","Phoenix Lord","Baharroth","Faction: Asuryani","Aspect Warrior","Aeldari","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Beastmaster [Legends]",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 4,
            saving: 6,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.agonizer,
            aeldari_weapons.clawed_fiend_fists,
            aeldari_weapons.khymerae_talons,
            aeldari_weapons.razorwing_feathers,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_pods,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_pods, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.agonizer, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.clawed_fiend_fists, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.khymerae_talons, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.razorwing_feathers, selected: true},
            ],
        },
        abilities: [
            { name: "Beastmaster", desc: "While this unit contains a Beastmaster model, you can re-roll Charge rolls made for this unit." },
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Goaded Savagery (Pain)", desc: "In the Fight phase, when you select this unit to fight, you can spend 1 of your Pain tokens to Empower this unit. While this unit is Empowered, if it contains a **Beastmaster** model, each time a **Beast** model in this unit makes a melee attack, you can re-roll the Hit roll and you can re-roll the Wound roll." },
        ],
        keywords: ["Aeldari","Faction: Drukhari","Beast","Character"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Bonesinger [Legends]",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.psytronome_shaper,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.psytronome_shaper, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Wraithblades\n- Wraithguard\n- Wraithlord" },
            { name: "Invulnerable Save (Bonesinger)", desc: "A Bonesinger has a 4+ Invulnerable save" },
            { name: "Way of the Shaper (Psychic)", desc: "While this model is leading a unit, Wraith Construct models in that unit have the Feel No Pain 6+ ability." },
            { name: "Bonesinger", desc: "While this model is within 3\" of one or more friendly Wraith Construct or Asuryani Vehicle units, unless it is leading a unit, this model has the Lone Operative ability." },
            { name: "Psytronome Shaper", desc: "In your Command phase, you can select one friendly Wraith Construct or Asuryani Vehicle model within 3\" of this model. That  Wraith Construct or Asuryani Vehicle model regains up to D3 lost wounds." },
        ],
        keywords: ["Character","Infantry","Psyker","Faction: Asuryani","Aeldari","Bonesinger"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Cobra [Legends]",
        pts: 415,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 11,
            saving: 2,
            wounds: 24,
            leader: 6,
            control: 8,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull,
        ],
        rangedWeapons: [
            aeldari_weapons.d_impaler,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.d_impaler, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.wraithbone_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-8 Wounds Remaining", desc: "While this model has 1-8 wounds remaining, subtract 4 from\nits Objective Control characteristic and each time this model\nmakes an attack, subtract 1 from the Hit roll" },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "D-Rift", desc: "In your Shooting phase, just after selecting a target for this model’s D-impaler, roll one D6 for the target unit and every other unit within 3\" of that unit: on a 5+, the unit being rolled for is struck by a D-rift. After this model has finished making its attacks against that target unit this phase, each unit struck by a D-rift this phase suffers D3 mortal wounds." },
        ],
        keywords: ["Vehicle","Titanic","Fly","Faction: Asuryani","Cobra","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Corsair Cloud Dancer Band [Legends]",
        pts: 105,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.void_sabre,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_cannon,
            aeldari_weapons.dark_lance,
            aeldari_weapons.dissonance_cannon,
            aeldari_weapons.splinter_cannon,
            aeldari_weapons.dissonance_pistol,
            aeldari_weapons.brace_of_pistols,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_cannon, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.dark_lance, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.dissonance_cannon, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.splinter_cannon, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.dissonance_pistol, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.brace_of_pistols, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.void_sabre, selected: true},
            ],
        },
        abilities: [
            { name: "Reckless Abandon", desc: "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
        ],
        keywords: ["Mounted","Grenades","Anhrathe","Corsair Cloud Dancer Band","Corsairs and Travelling Players","Aeldari"],
        pointOptions: [{ models: 4, pts: 140 }, { models: 7, pts: 245 }, { models: 7, pts: 210 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Court of the Archon [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.shaimeshi_blade,
            aeldari_weapons.sslyth_battle_blade,
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.ur_ghul_talons,
        ],
        rangedWeapons: [
            aeldari_weapons.shardcarbine,
            aeldari_weapons.splinter_pistol_2,
            aeldari_weapons.eyeburst,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shardcarbine, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.eyeburst, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shaimeshi_blade, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.sslyth_battle_blade, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.ur_ghul_talons, selected: true},
            ],
        },
        abilities: [
            { name: "Court of the Archon", desc: "While a **Character** model is leading a unit that contains one or more Lhamaean, Medusae, Sslyth and/or Ur-ghul models, that **Character** model has the Feel No Pain 4+ ability." },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Deadly Retinue (Pain)", desc: "At the start of your Shooting phase or at the start of the Fight phase, you can spend 1 Pain token to Empower this unit. While this unit is Empowered:\n- If it contains one or more Lhamaean models, melee weapons equipped by models in this unit have the **[LETHAL HITS]** ability.\n- If it contains one or more Medusae models, ranged weapons equipped by models in this unit have the **[IGNORES COVER]** ability.\n- If it contains one or more Sslyth models, each time a melee attack targets this unit, subtract 1 from the Wound roll.\n- If this unit contains one or more Ur-ghul models, this unit has the Fights First ability." },
            { name: "Court of the Archon [Legends]", desc: "This unit can be led by an **Archon**. Alternatively, in the Declare Battle Formations step, this unit can join one **Kabalite Warriors** or **Hand of the Archon** unit from your army that is being led by an **Archon** (a unit cannot have more than one **Court of the Archon** unit joined to it). If it does, until the end of the battle, every model in this unit counts as part of that **Kabalite Warriors** or **Hand of the Archon **unit, and its Starting Strength is increased accordingly." },
        ],
        keywords: ["Court of the Archon","Aeldari","Kabal","Faction: Drukhari","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Craftworld Warleader [Crucible]",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (Craftworld Warleader)", desc: "A Craftworld Warleader has a 4+ Invulnerable save." },
            { name: "Guided by Fate", desc: "Each time this model makes an attack, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Guardian Defenders\n- Storm Guardian\n- Warlock Conclave" },
        ],
        keywords: ["Character","Infantry","Aeldari","Craftworld Warleader","Faction: Asuryani","Crucible"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Crimson Hunter",
        pts: 160,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.pulse_laser,
            aeldari_weapons.starcannon,
            aeldari_weapons.bright_lance,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.pulse_laser, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.starcannon, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bright_lance, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Skyhunter", desc: "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll and add 1 to the Wound roll." },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Crimson Hunter","Faction: Asuryani","Aeldari","Aspect Warrior","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Cronos",
        pts: 55,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.spirit_leech_tentacles,
        ],
        rangedWeapons: [
            aeldari_weapons.spirit_syphon,
            aeldari_weapons.spirit_vortex,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.spirit_syphon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.spirit_vortex, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.spirit_leech_tentacles, selected: true},
            ],
        },
        abilities: [
            { name: "Pain Engine (Aura)", desc: "Each time you spend 1 Pain token to Empower a friendly unit within 9\" of this unit, roll one D6, adding 1 to the result if one or more models in this unit are not equipped with a spirit vortex: on a 5+, you gain 1 Pain token.\n\n\n**Designer's Note:** Pain tokens you spend for reasons other than Empowering a unit do not trigger this ability." },
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Pain Parasite (Pain)", desc: "In your Shooting phase or the Fight phase, when you select this unit to shoot or fight, you can spend 1 Pain token to Empower this unit. While Empowered, each time this unit shoots or fights, after it has resolved its attacks, if one or more enemy models were destroyed as a result of those attacks, one model in this unit regains up to 3 lost wounds (if all models in this unit have their starting number of wounds and this unit is below its Starting Strength, 1 model is returned to this unit with 3 wounds remaining)." },
        ],
        keywords: ["Cronos","Aeldari","Haemonculus Covens","Faction: Drukhari","Monster","Fly"],
        pointOptions: [{ models: 1, pts: 110 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "D-Cannon Platform",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 6,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.d_cannon,
            aeldari_weapons.shuriken_catapult,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.d_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_catapult, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Structural Collapse", desc: "Each time this model makes an attack with its D-Cannon, re-roll a Damage roll of 1. If that attack targets a Titanic unit, you can re-roll the Damage roll instead." },
        ],
        keywords: ["Support Weapon","Faction: Asuryani","Infantry","Aeldari","D-Cannon Platform","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Dark Reapers",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.reaper_launcher_starshot_2,
            aeldari_weapons.reaper_launcher_starswarm_2,
            aeldari_weapons.shuriken_cannon_2,
            aeldari_weapons.tempest_launcher,
            aeldari_weapons.missile_launcher_starshot,
            aeldari_weapons.missile_launcher_sunburst,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.reaper_launcher_starshot_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.reaper_launcher_starswarm_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_cannon_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.tempest_launcher, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.missile_launcher_starshot, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.missile_launcher_sunburst, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Inescapable Accuracy", desc: "Each time a model in this unit makes a ranged attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and any or all modifiers to the Hit roll." },
        ],
        keywords: ["Dark Reapers","Infantry","Faction: Asuryani","Aspect Warrior","Aeldari","Ynnari"],
        pointOptions: [{ models: 5, pts: 195 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Death Jester",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.jesters_blade,
        ],
        rangedWeapons: [
            aeldari_weapons.shrieker_cannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shrieker_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.jesters_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Death is Not Enough", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding Monsters and Vehicles) hit by one or more of those attacks. That enemy unit must take a Battle-shock test. If one or more of those attacks destroyed a model in that enemy unit, subtract 1 from that test." },
            { name: "Cruel Amusement", desc: "In your Shooting phase, each time this model is selected to shoot, select one of the abilities below. Until the end of the phase, this model’s Shrieker Cannon has that ability:\n- [IGNORES COVER]\n- [PRECISION]\n- [SUSTAINED HITS 3]" },
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
        ],
        keywords: ["Character","Infantry","Death Jester","Harlequin Allies","Aeldari","Faction: Harlequins","Corsairs and Travelling Players"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Dire Avengers",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.diresword,
            aeldari_weapons.power_glaive,
        ],
        rangedWeapons: [
            aeldari_weapons.avenger_shuriken_catapult,
            aeldari_weapons.shuriken_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.avenger_shuriken_catapult, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.diresword, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.power_glaive, selected: true},
            ],
        },
        abilities: [
            { name: "Shimmershield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Shimmershield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Bladestorm", desc: "Ranged weapons equipped by models in this unit have the [Sustained Hits 1] ability while targeting an enemy unit within half range." },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
        ],
        keywords: ["Dire Avengers","Grenades","Infantry","Faction: Asuryani","Aeldari","Aspect Warrior","Ynnari"],
        pointOptions: [{ models: 5, pts: 150 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Drazhar",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.the_executioners_demiklaives_dual_blades,
            aeldari_weapons.the_executioners_demiklaives_single_blade,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.the_executioners_demiklaives_dual_blades, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.the_executioners_demiklaives_single_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Incubi" },
            { name: "Invulnerable Save", desc: "This unit has a 4+ invulnerable save." },
            { name: "Master of Blades (Pain)", desc: "In the Fight phase, when you select this model's unit to fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes a melee attack, add 1 to the Wound roll." },
            { name: "Onslaught", desc: "While this model is leading a unit, each time a model in that unit makes a Pile-In or Consolidation move, it can move up to 6\" instead of up to 3\"." },
            { name: "Silent Executioner", desc: "Each time this model make an attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll. If that target is Below Half-Strength, you can re-roll the Wound roll as well." },
        ],
        keywords: ["Epic Hero","Drazhar","Aeldari","Faction: Drukhari","Infantry","Character","Blades for Hire"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Eldrad Ulthran",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 6,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.staff_of_ulthamar_and_witchblade,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol,
            aeldari_weapons.mind_war,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.mind_war, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.staff_of_ulthamar_and_witchblade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Eldrad)", desc: "Eldrad Ulthran has a 4+ Invulnerable save" },
            { name: "Diviner of the Futures", desc: "At the start of your Command phase, if this model is on the battlefield, you gain 1CP." },
            { name: "Doom (Psychic)", desc: "At the end of your Movement phase, select one enemy unit within 18\" of and visible to this model. Until the start of your next Command phase, each time a friendly Aeldari model makes an attack that targets that enemy unit, add 1 to the Wound roll" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Guardian Defenders\n- Storm Guardians\n- Warlock Conclave" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Psyker","Farseer","Eldrad Ultran","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Falcon",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.pulse_laser,
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_cannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.pulse_laser, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Fire Support", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll" },
        ],
        keywords: ["Falcon","Fly","Transport","Vehicle","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models or Ynnari models (excluding Asuryani, Yvraine and The Visarch models)",
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Farseer",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.witchblade,
            aeldari_weapons.singing_spear,
        ],
        rangedWeapons: [
            aeldari_weapons.singing_spear_2,
            aeldari_weapons.eldritch_storm,
            aeldari_weapons.shuriken_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.singing_spear_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.eldritch_storm, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.witchblade, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.singing_spear, selected: true},
            ],
        },
        abilities: [
            { name: "Branching Fates (Psychic)", desc: "While this model is leading a unit, once per phase you can change the result of one Hit roll, one Wound roll, or one Damage roll made for a model in that unit (excluding Support Weapon models) to an unmodified 6." },
            { name: "Invulnerable Save (Farseer)", desc: "A Farseer has a 4+ Invulnerable save" },
            { name: "Guide (Psychic)", desc: "At the end of your Movement phase, select one enemy unit within 18\" of and visible to this model. Until the start of your next Command phase, each time a friendly Aeldari model makes an attack that targets that enemy unit, add 1 to the Hit roll. Each unit can only be selected for this ability once per turn." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Guardian Defenders\n- Storm Guardians\n- Warlock Conclave" },
        ],
        keywords: ["Character","Infantry","Psyker","Farseer","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Farseer Skyrunner",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 6,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.witchblade,
            aeldari_weapons.singing_spear,
        ],
        rangedWeapons: [
            aeldari_weapons.eldritch_storm,
            aeldari_weapons.shuriken_pistol_2,
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.singing_spear_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.eldritch_storm, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.singing_spear_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.witchblade, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.singing_spear, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Farseer)", desc: "A Farseer Skyrunner has a 4+ Invulnerable save" },
            { name: "Branching Fates (Psychic)", desc: "While this model is leading a unit, once per phase you can change the result of one Hit roll, one Wound roll, or one Damage roll made for a model in that unit to an unmodified 6." },
            { name: "Misfortune (Psychic)", desc: "At the end of your Movement phase, select one enemy unit within 18\" of and visible to this model. Until the start of your next Command phase, each time a model in that unit makes an attack, subtract 1 from the Wound roll. Each unit can only be selected for this ability once per turn." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Warlock Skyrunners\n- Windriders" },
        ],
        keywords: ["Farseer Skyrunner","Farseer","Character","Fly","Mounted","Psyker","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Fire Dragons",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.dragon_axe,
        ],
        rangedWeapons: [
            aeldari_weapons.dragon_fusion_gun_2,
            aeldari_weapons.exarchs_dragon_fusion_gun,
            aeldari_weapons.dragons_breath_flamer,
            aeldari_weapons.firepike,
            aeldari_weapons.dragon_fusion_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.dragon_fusion_gun_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.exarchs_dragon_fusion_gun, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.dragons_breath_flamer, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.firepike, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.dragon_fusion_pistol_2, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.dragon_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Assured Destruction", desc: "In your Shooting phase, each time a model in this unit makes a ranged attack that targets a Monster or Vehicle unit, you can re-roll the Hit roll, you can re-roll the Wound roll and you can re-roll the Damage roll." },
        ],
        keywords: ["Infantry","Grenades","Fire Dragons","Faction: Asuryani","Aeldari","Aspect Warrior","Ynnari"],
        pointOptions: [{ models: 5, pts: 240 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Fire Prism",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.prism_cannon_dispersed_pulse,
            aeldari_weapons.prism_cannon_focused_lances,
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_cannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.prism_cannon_dispersed_pulse, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.prism_cannon_focused_lances, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Crystal Matrix", desc: "Each time this model is selected to shoot, you can re-roll one Hit roll and you can re-roll one Wound roll when resolving those attacks." },
        ],
        keywords: ["Fire Prism","Fly","Vehicle","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Firestorm [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.firestorm_scatter_laser,
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_cannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.firestorm_scatter_laser, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_cannon, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Skyfire", desc: "Each time you target this model with the Fire Overwatch Stratagem just after an enemy unit that can Fly starts or ends a Normal, Advance or Fall Back move, when resolving that Stratagem, in addition to shooting that enemy unit, you can select up to 3 other enemy units within 24\" of this model that can Fly; this model can also shoot at each of those units with its Firestorm scatter laser (provided each one is an eligible target), but when doing so, an unmodified Hit roll of 6 is required to score a hit." },
        ],
        keywords: ["Vehicle","Fly","Firestorm","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models",
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Flesh Crafter [Crucible]",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 5,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (Flesh Crafter)", desc: "A Flesh Crafter has a 6+ Invulnerable save." },
            { name: "Fleshcraft (Pain)", desc: "In your Command phase, you can spend 1 Pain token to Empower this model’s unit. Each time you do, you can return up to D3+1 destroyed Bodyguard models to that unit." },
            { name: "Pain Adept", desc: "In your Command phase, if one or more models from your army with this ability are on the battlefield, roll one D6: on a 4+, you gain 1 Pain token." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Wracks" },
        ],
        keywords: ["Character","Infantry","Crucible","Aeldari","Faction: Drukhari","Haemonculus Covens","Flesh Crafter"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Fuegan",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.the_fire_axe,
        ],
        rangedWeapons: [
            aeldari_weapons.searsong_beam,
            aeldari_weapons.searsong_lance,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.searsong_beam, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.searsong_lance, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.the_fire_axe, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Fuegan)", desc: "Fuegan has a 4+ Invulnerable save" },
            { name: "Burning Lance", desc: "While this model is leading a unit, add 6\" to the Range characteristic of Melta weapons equipped by models in that unit." },
            { name: "Unquenchable Resolve", desc: "The first time this model is destroyed, at the end of the phase, roll one D6. On a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with its full wounds remaining." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Fire Dragons" },
        ],
        keywords: ["Character","Epic Hero","Infantry","Phoenix Lord","Fuegan","Faction: Asuryani","Aeldari","Aspect Warrior","Grenades"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Ghost Warrior [Crucible]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Awakened Spirit", desc: "Each time this model makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
        ],
        keywords: ["Character","Aeldari","Faction: Asuryani","Crucible","Monster","Walker","Ghost Warrior","Wraith Construct"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Grotesques [Legends]",
        pts: 80,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 7,
            tough: 5,
            saving: 6,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.paired_monstrous_weapons,
            aeldari_weapons.monstrous_weapons,
        ],
        rangedWeapons: [
            aeldari_weapons.liquifier_gun,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.liquifier_gun, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.paired_monstrous_weapons, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.monstrous_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Monstrous Hulks", desc: "This unit cannot embark within a **Venom**, but it can embark within other **Drukhari Transports**; when doing so, each **Grotesque** model takes up the space of 3 models." },
            { name: "Macro-steroids (Pain)", desc: "In the Fight phase, when you select this unit to fight, you can spend 1 of your Pain tokens to Empower this unit. While Empowered, melee weapons equipped by models in this unit have a Strength characteristic of 8 and the **[LETHAL HITS]** ability." },
            { name: "Monstrous Charge", desc: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it, then roll one D6 for each model in this unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers D3 mortal wounds." },
        ],
        keywords: ["Grotesques","Aeldari","Haemonculus Covens","Faction: Drukhari","Infantry"],
        pointOptions: [{ models: 3, pts: 170 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "battleline",
        name: "Guardian Defenders",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_catapult,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_catapult, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Fleet of Foot", desc: "This unit can perform the Fade Back Agile Manoeuvre without spending a Battle Focus token to do so. It can do so even if other units have done so in the same phase, and doing so does not prevent other units from performing the same Agile Manoeuvre in the same phase." },
            { name: "Crewed Platform", desc: "When the last Guardian Defender model in this unit is destroyed, any remaining Heavy Weapon Platform models in this unit are also destroyed." },
        ],
        keywords: ["Guardian Defenders","Battleline","Infantry","Grenades","Guardians","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Haemonculus",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 5,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.haemonculus_tools_and_scissorhands,
        ],
        rangedWeapons: [
            aeldari_weapons.stinger_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.stinger_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.haemonculus_tools_and_scissorhands, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Wracks" },
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Fear Incarnate (Aura)", desc: "While an enemy unit is within 6\" of this model, worsen the Leadership characteristic of models in that unit by 1. In addition, in the Battle-shock step of your opponent's Command phase, if such an enemy unit is below its Starting Strength, it must take a Battle-shock test." },
            { name: "Pain Adept", desc: "In your Command phase, if one or more models from your army with this ability are on the battlefield, roll one D6: on a 4+, you gain 1 Pain token." },
            { name: "Fleshcraft (Pain)", desc: "In your Command phase, you can spend 1 Pain token to Empower this model's unit. Each time you do, you can return up to D3+1 destroyed Bodyguard models to that unit." },
        ],
        keywords: ["Haemonculus","Haemonculus Covens","Aeldari","Faction: Drukhari","Character","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Hellions",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.hellglaive,
            aeldari_weapons.power_weapon,
            aeldari_weapons.stunclaw,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_pods,
            aeldari_weapons.splinter_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_pods, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.hellglaive, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.power_weapon, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.stunclaw, selected: true},
            ],
        },
        abilities: [
            { name: "Phantasm Grenade Launcher", desc: "The bearer’s unit has the **Smoke** and **Grenades** keywords." },
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Battlefield Butchery (Pain)", desc: "In the Fight phase, when you select this unit to fight, you can spend 1 Pain token to Empower this unit. While Empowered, add 1 to the Attacks and Strength characteristics of this unit's melee weapons." },
            { name: "Skyboard Evasion", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, this unit can make a Normal move of up to D6\"." },
        ],
        keywords: ["Hellions","Aeldari","Wych Cult","Faction: Drukhari","Mounted","Fly"],
        pointOptions: [{ models: 5, pts: 170 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Hemlock Wraithfighter",
        pts: 155,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.heavy_d_scythe,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.heavy_d_scythe, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Mindshock Pod (Aura, Psychic)", desc: "While an enemy unit is within 9\" of this model, subtract 1 from Battle-shock and Leadership tests taken for that unit." },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Hemlock Wraithfighter","Vehicle","Fly","Aircraft","Psyker","Wraith Construct","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Hornet [Legends]",
        pts: 100,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 7,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.aeldari_missile_launcher_starshot,
            aeldari_weapons.aeldari_missile_launcher_sunburst,
            aeldari_weapons.bright_lance,
            aeldari_weapons.scatter_laser,
            aeldari_weapons.shuriken_cannon,
            aeldari_weapons.starcannon,
            aeldari_weapons.hornet_pulse_laser,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.aeldari_missile_launcher_starshot, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.aeldari_missile_launcher_sunburst, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bright_lance, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.scatter_laser, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.shuriken_cannon, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.starcannon, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.hornet_pulse_laser, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Lightning Assault", desc: "Each time this model ends a Normal move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move, then roll six D6: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Fly","Faction: Asuryani","Hornet","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Howling Banshees",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 4,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.banshee_blade_3,
            aeldari_weapons.executioner,
            aeldari_weapons.triskele,
            aeldari_weapons.mirrorswords,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol_2,
            aeldari_weapons.triskele_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.triskele_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.banshee_blade_3, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.executioner, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.triskele, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.mirrorswords, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable Save. This invulnerable save is improved to 4+ against melee attacks." },
            { name: "Acrobatic", desc: "This unit is eligible to declare a charge in a turn in which it Advanced or Fell Back" },
        ],
        keywords: ["Howling Banshees","Infantry","Faction: Asuryani","Ynnari","Aspect Warrior"],
        pointOptions: [{ models: 5, pts: 190 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Illic Nightspear [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 5,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.aeldari_power_sword,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol,
            aeldari_weapons.voidbringer,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.voidbringer, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.aeldari_power_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Illic Nightspear)", desc: "Illic Nightspear has a 5+ invulnerable save against ranged attacks." },
            { name: "Bringer of the True Death", desc: "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Wound roll." },
            { name: "Hunter Unseen", desc: "This model’s unit can only be selected as the target of a ranged attack if the attacking model is within 12\"." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Rangers" },
        ],
        keywords: ["Infantry","Character","Epic Hero","Illic Nightspear","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Incubi",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.klaive,
            aeldari_weapons.demiklaives_dual_blades,
            aeldari_weapons.demiklaives_single_blade,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.klaive, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.demiklaives_dual_blades, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.demiklaives_single_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Tormentors", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test. Each time a model in this unit makes a melee attack that targets a Battle-shocked unit, add 1 to the Hit roll." },
            { name: "Decapitating Strikes (Pain)", desc: "In the Fight phase, when you select this unit to fight, you can spend 1 Pain token to Empower this unit. While Empowered, each time a model in this unit makes a melee attack that targets an **Infantry** unit, that attack has the **[Devastating Wounds]** ability." },
            { name: "Incubi Shrine Token", desc: "Once per battle for each Incubi Shrine token this unit has, you can change the result of one Hit roll or one Wound roll made for a Klaivex or Incubi model in this unit to an unmodified 6." },
        ],
        keywords: ["Incubi","Aeldari","Faction: Drukhari","Infantry","Blades for Hire"],
        pointOptions: [{ models: 5, pts: 180 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Irillyth [Legends]",
        pts: 105,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.spear_of_starlight,
        ],
        rangedWeapons: [
            aeldari_weapons.spear_of_starlight_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.spear_of_starlight_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.spear_of_starlight, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Phoenix Lord)", desc: "Irillyth has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Shadow Spectres" },
            { name: "Reaper of Souls", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll" },
            { name: "Shadow of Death (Aura)", desc: "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock or Leadership test, subtract 1 from that test." },
        ],
        keywords: ["Epic Hero","Infantry","Character","Fly","Faction: Asuryani","Irillyth","Phoenix Lord","Aeldari","Jump Pack"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Jain Zar",
        pts: 120,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.blade_of_destruction,
        ],
        rangedWeapons: [
            aeldari_weapons.silent_death,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.silent_death, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.blade_of_destruction, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Jain Zar)", desc: "Jain Zar has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Howling Banshees" },
            { name: "Whirling Death", desc: "While this model is leading a unit, each time that unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit and each time a model in that unit makes an Advance move, ignore any vertical distance when determining the total distance that model can be moved during that move." },
            { name: "Storm of Silence", desc: "Each time this model makes an attack that targets a Character unit, you can re-roll the Wound roll." },
        ],
        keywords: ["Jain Zar","Phoenix Lord","Character","Epic Hero","Infantry","Faction: Asuryani","Aeldari","Aspect Warrior"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "battleline",
        name: "Kabalite Warriors",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.shredder,
            aeldari_weapons.splinter_rifle,
            aeldari_weapons.blaster,
            aeldari_weapons.splinter_cannon_2,
            aeldari_weapons.dark_lance_2,
            aeldari_weapons.blast_pistol_2,
            aeldari_weapons.splinter_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shredder, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.splinter_rifle, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.blaster, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.splinter_cannon_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.dark_lance_2, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.blast_pistol_2, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Phantasm Grenade Launcher", desc: "The bearer’s unit has the **Smoke** and **Grenades** keywords." },
            { name: "Kabalite Icon", desc: "While the bearer's unit is not Battle-shocked, add 1 to the bearer's Objective Control characteristic." },
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Cruel Enforcers", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under you control, until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase." },
            { name: "Sadistic Raiders (Pain)", desc: "In your Shooting phase or the Fight phase, when you select this unit to shoot or fight, you can spend 1 Pain token to Empower this unit. While Empowered, each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target is within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Kabalite Warriors","Aeldari","Kabal","Faction: Drukhari","Battleline","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Karandras [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.arhras_bane,
            aeldari_weapons.isirmathil,
        ],
        rangedWeapons: [
            aeldari_weapons.arhras_bane_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.arhras_bane_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.arhras_bane, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.isirmathil, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Phoenix Lord)", desc: "Karandras has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Striking Scorpions" },
            { name: "Shadow Hunter", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll." },
            { name: "Sustained Assault", desc: "Each time this model makes a melee attack, if it made a Charge move this turn, a successful unmodified Hit roll of 4+ scores a Critical Hit" },
            { name: "The Scorpion's Bite", desc: "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Titanic keyword" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Karandras","Phoenix Lord","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Kharseth",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.waystave,
        ],
        rangedWeapons: [
            aeldari_weapons.dread_of_the_deep_void,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.dread_of_the_deep_void, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.waystave, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Kharseth)", desc: "Kharseth has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corsair Voidreavers\n- Corsair Voidscarred" },
            { name: "Aethersense (Psychic)", desc: "Enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" of this model." },
            { name: "Fury of the Void (Psychic)", desc: "In your Shooting phase, after this model’s unit has shot, select one enemy unit hit by one or more attacks made with this model’s Dread of the Deep Void. Until the end of the turn, that unit is riven. Each time an **Aeldari** model from your army makes an attack that targets a riven unit, add 1 to the Strength characteristic of that attack." },
        ],
        keywords: ["Infantry","Aeldari","Faction: Asuryani","Character","Epic Hero","Psyker","Anhrathe","Kharseth"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Lady Malys",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.ladys_blade,
            aeldari_weapons.razor_fan,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.ladys_blade, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.razor_fan, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Hand of the Archon\n- Incubi\n- Kabalite Warriors" },
            { name: "Archon of the Poisoned Tongue (Pain)", desc: "In your Shooting phase or the Fight phase, when you select this model's unit to shoot or fight, you can spend 1 Pain token to Empower that unit. If you do, select one of the following abilities: **[Sustained Hits 1]; [Lethal Hits]**. Until the end of the phase, while that unit is Empowered, weapons equipped by models in that unit have that selected ability." },
            { name: "Precognisant", desc: "If you army includes this model, after both players have deployed their armies, select up to three **Drukhari** units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
            { name: "Mind Like a Steel Trap [Aura]", desc: "Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP." },
        ],
        keywords: ["Infantry","Kabal","Character","Aeldari","Archon","Epic Hero","Faction: Drukhari","Lady Malys"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Lelith Hesperax",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 3
        },
        meleeWeapons: [
            aeldari_weapons.leliths_blades,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.leliths_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Wyches" },
            { name: "Brides of Death (Pain)", desc: "In the Fight phase, when you select this model's unit to fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes a melee attack, improve the Strength and Armour Penetration characteristics of that attack by 1." },
            { name: "Thrilling Spectacle", desc: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, this model has a 3+ invulnerable save and change the Attacks characteristic of melee weapons equipped by this model to 12." },
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Blur of Blades", desc: "While this model is leading a unit, models in that unit have the Fights First ability." },
        ],
        keywords: ["Lelith Hesperax","Aeldari","Wych Cult","Succubus","Faction: Drukhari","Epic Hero","Character","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Lhykhis",
        pts: 135,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.spiders_fangs,
            aeldari_weapons.weaverender,
        ],
        rangedWeapons: [
            aeldari_weapons.brood_twain,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.brood_twain, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.spiders_fangs, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.weaverender, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Warp Spiders" },
            { name: "Invulnerable Save (Lhykhis)", desc: "Lhykhis has a 4+ Invulnerable save" },
            { name: "Empyric Ambush", desc: "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it used its Flickerjump ability." },
            { name: "Whispering Web", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly Aeldari model makes an attack that targets that unit, an unmodified Hit roll of 5+ scores a Critical Hit." },
        ],
        keywords: ["Character","Epic Hero","Infantry","Aeldari","Faction: Asuryani","Jump Pack","Fly","Aspect Warrior","Phoenix Lord","Lhykhis"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Lynx [Legends]",
        pts: 180,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 4,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.lynx_pulsar,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.lynx_pulsar, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Damaged: 1-5 Wounds Remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Speed of Vaul", desc: "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 9\" to the Move characteristic of this model" },
        ],
        keywords: ["Vehicle","Fly","Faction: Asuryani","Lynx","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Mandrakes",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 7,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.glimmersteel_blade,
        ],
        rangedWeapons: [
            aeldari_weapons.baleblast,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.baleblast, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.glimmersteel_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Fade Away (Pain)", desc: "At the end of your opponent’s Fight phase, if this unit is not within Engagement Range of one or more enemy units, you can spend 1 Pain token to Empower this unit. Each time you do, remove this unit from the battlefield and place it into Strategic Reserves." },
            { name: "Invulnerable Save", desc: "This unit has a 5+ invulnerable save." },
            { name: "Shade Weavers", desc: "This unit cannot be targeted by ranged attacks unless the attacking model is within 18\"." },
        ],
        keywords: ["Mandrakes","Aeldari","Faction: Drukhari","Infantry","Blades for Hire"],
        pointOptions: [{ models: 5, pts: 150 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Maugan Ra",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.maugetar,
        ],
        rangedWeapons: [
            aeldari_weapons.maugetar_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.maugetar_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.maugetar, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Dark Reapers" },
            { name: "Invulnerable Save (Maugan Ra)", desc: "Maugan Ra has a 4+ Invulnerable save" },
            { name: "Harvester of Souls", desc: "While this model is leading a unit, in your Shooting phase, after selecting targets for that unit's attacks, if every attack targets the same unit, roll one D6 for the target unit and one D6 for every other enemy unit within 3\" of the target unit. On a 5+, the unit being rolled for is struck by explosive debris; after resolving all of that unit's attacks against the target unit, each unit struck by explosive debris suffers D3 mortal wounds." },
            { name: "Face of Death", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test, subtracting 1 from the result." },
        ],
        keywords: ["Phoenix Lord","Maugan Ra","Infantry","Epic Hero","Character","Faction: Asuryani","Aeldari","Aspect Warrior"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Night Spinner",
        pts: 190,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.doomweaver,
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_cannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.doomweaver, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Monofilament Web", desc: "In your Shooting phase, after this model has shot, if one or more of those attacks made with its doomweaver scored a hit against an enemy unit, until the start of your next turn, that enemy unit is pinned. While a unit is pinned, subtract 2 from that unit's Move characteristic and subtract 2 from Charge rolls made for it." },
        ],
        keywords: ["Fly","Vehicle","Night Spinner","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Nightwing [Legends]",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_bright_lance,
            aeldari_weapons.twin_shuriken_cannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_bright_lance, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_shuriken_cannon, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Faction: Asuryani","Nightwing","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Phantom Titan",
        pts: 2100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 14,
            saving: 2,
            wounds: 55,
            leader: 6,
            control: 20,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.phantom_feet,
            aeldari_weapons.wraith_glaive_strike,
            aeldari_weapons.wraith_glaive_sweep,
        ],
        rangedWeapons: [
            aeldari_weapons.voidstorm_missile_launcher,
            aeldari_weapons.d_bombard,
            aeldari_weapons.phantom_pulsar,
            aeldari_weapons.phantom_starcannon,
            aeldari_weapons.pulse_laser,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.voidstorm_missile_launcher, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.d_bombard, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.phantom_pulsar, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.phantom_starcannon, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.pulse_laser, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.phantom_feet, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.wraith_glaive_strike, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.wraith_glaive_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-16 Wounds Remaining", desc: "While this model has 1-16 wounds remaining, subtract 10 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Titanic Advance", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there." },
            { name: "Towering Wraith Construct", desc: "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save against ranged attacks." },
            { name: "Flawless Poise", desc: "This model is eligible to shoot and declare a charge in a turn in which it Fell Back." },
        ],
        keywords: ["Phantom Titan","Faction: Asuryani","Titanic","Towering","Walker","Monster","Aeldari","Wraith Construct"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Phoenix [Legends]",
        pts: 175,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 16,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.phoenix_missile_array,
            aeldari_weapons.phoenix_pulse_laser,
            aeldari_weapons.twin_shuriken_cannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.phoenix_missile_array, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.phoenix_pulse_laser, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.twin_shuriken_cannon, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Strafing Run", desc: "Each time this model makes a ranged attack that targets a unit that cannot FLY, add 1 to the Hit roll." },
            { name: "Damaged: 1-5 wounds remaining", desc: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Faction: Asuryani","Aeldari","Aircraft","Fly","Phoenix"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Prince Yriel",
        pts: 95,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 3,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.the_spear_of_twilight,
        ],
        rangedWeapons: [
            aeldari_weapons.the_eye_of_wrath,
            aeldari_weapons.shuriken_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.the_eye_of_wrath, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.the_spear_of_twilight, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Prince Yriel)", desc: "Prince Yriel has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corsair Voidreavers\n- Corsair Voidscarred" },
            { name: "Piratical Hero", desc: "While this model is leading a unit, each time a model in that unit makes an attack, that attack has the **[Sustained Hits 1]** ability and add 1 to the Hit roll." },
            { name: "Prince of Corsairs", desc: "After both players have deployed their armies, if this model is on the battlefield (or any **Transport** it is embarked within is on the battlefield), select up to three **Aeldari** units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
        ],
        keywords: ["Prince Yriel","Infantry","Character","Epic Hero","Faction: Asuryani","Aeldari","Anhrathe"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Prince Yriel [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 3,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.the_spear_of_twilight_2,
        ],
        rangedWeapons: [
            aeldari_weapons.the_eye_of_wrath_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.the_eye_of_wrath_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.the_spear_of_twilight_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Prince Yriel)", desc: "Prince Yriel has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corsair Voidreavers\n- Corsair Voidscarred\n- Guardian Defenders\n- Storm Guardians" },
            { name: "Hero of Iyanden", desc: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
            { name: "Prince of Corsairs", desc: "If your army includes this model, after both players have deployed their armies, select up to three Aeldari units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
        ],
        keywords: ["Prince Yriel","Infantry","Character","Epic Hero","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "transports",
        name: "Raider",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes_and_chainsnares,
        ],
        rangedWeapons: [
            aeldari_weapons.disintegrator_cannon,
            aeldari_weapons.dark_lance,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.disintegrator_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.dark_lance, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bladevanes_and_chainsnares, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Aethersails", desc: "While one or more **Drukhari** units are embarked within this model, you can re-roll Advance and Charge rolls made for this model." },
            { name: "Splinter Racks (Pain)", desc: "In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, if one or more units are embarked within this model, each time this model makes an attack with a ranged weapon that has the **Anti** ability, you can re-roll the Hit roll." },
            { name: "Vanguard of the Dark City", desc: "At the start of your Command phase, select one of the abilities in the Vanguard of the Dark City section (see left) for this model. Until the start of your next Command phase, this model has that ability." },
            { name: "Masters of the Shadowed Sky", desc: "At the end of your Command phase, if this model is within range of an objective marker you control, and if one or more **Kabalite Warriors** units are embarked within it, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase." },
            { name: "Speed of the Kill", desc: "Each time a **Wyches** unit disembarks from this model (excluding Emergency Disembarkations), models in that **Wyches** unit must be setup wholly within 6\" of this model." },
            { name: "Visions of Butchery", desc: "While one or more **Wracks** units are embarked within this model, for each **Wracks** model embarked within this model, add 1 to the Attacks characteristic of this model's Bladevanes and chainsnares." },
        ],
        keywords: ["Raider","Aeldari","Faction: Drukhari","Dedicated Transport","Fly","Vehicle","Transport"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 **Drukhari Infantry ** models (excluding **Jump Pack** models).",
    },
    {
        army: "aeldari",
        class: "other",
        name: "Rangers",
        pts: 55,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            aeldari_weapons.long_rifle,
            aeldari_weapons.shuriken_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.long_rifle, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save against ranged attacks only." },
            { name: "Path of the Outcast", desc: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, it can make a Normal move of up to D6\"." },
        ],
        keywords: ["Rangers","Infantry","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [{ models: 5, pts: 110 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Ravager",
        pts: 110,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 4,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes,
        ],
        rangedWeapons: [
            aeldari_weapons.disintegrator_cannon,
            aeldari_weapons.dark_lance,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.disintegrator_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.dark_lance, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bladevanes, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Eradicate the Foe", desc: "Each time this model makes an attack that targets an enemy unit that is at its Starting Strength, you can re-roll the Hit roll." },
            { name: "Agonising Suppression (Pain)", desc: "In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Ravager","Aeldari","Kabal","Faction: Drukhari","Fly","Vehicle"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Raven Strike Fighter [Legends]",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.bladed_wings,
        ],
        rangedWeapons: [
            aeldari_weapons.dark_lance,
            aeldari_weapons.splinterstorm_cannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.dark_lance, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.splinterstorm_cannon, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bladed_wings, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 5+ invulnerable save." },
            { name: "Ground-attack Craft", desc: "Each time a model in this unit makes a ranged attack that targets an enemy unit  (excluding unit that can **Fly**), add 1 to the Hit roll." },
            { name: "Shredding Fire (Pain)", desc: "In your Shooting phase, when you select this unit to shoot, you can spend 1 Pain token to Empower this unit. While Empowered, the Armour Penetration characteristic of its ranged weapons is increased by 1." },
        ],
        keywords: ["Faction: Drukhari","Vehicle","Fly","Aircraft","Aeldari","Raven Strike Fighter"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Razorwing Jetfighter",
        pts: 170,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladed_wings,
        ],
        rangedWeapons: [
            aeldari_weapons.razorwing_missiles_monoscythe_missiles,
            aeldari_weapons.razorwing_missiles_neurotoxin_missiles,
            aeldari_weapons.razorwing_missiles_shatterfield_missiles,
            aeldari_weapons.dark_lance,
            aeldari_weapons.disintegrator_cannon,
            aeldari_weapons.splinter_cannon,
            aeldari_weapons.twin_splinter_rifle,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.razorwing_missiles_monoscythe_missiles, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.razorwing_missiles_neurotoxin_missiles, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.razorwing_missiles_shatterfield_missiles, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.dark_lance, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.disintegrator_cannon, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.splinter_cannon, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.twin_splinter_rifle, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.bladed_wings, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Ground-attack Craft", desc: "Each time a model in this unit makes a ranged attack that targets an enemy unit (excluding units that can **Fly**), add 1 to the Hit roll." },
            { name: "Nowhere to Run (Pain)", desc: "In your Shooting phase, when you select this unit to shoot, you can spend 1 Pain token to Empower this unit. While Empowered, after this unit has shot, select one enemy unit (excluding **Monsters** and **Vehicles**) hit by one or more of those attacks; until the start of your next turn, that enemy unit is pinned. While a unit is pinned, subtract 2 from that unit's Move characteristic and subtract 2 from Charge rolls made for that unit." },
        ],
        keywords: ["Razorwing Jetfighter","Aeldari","Faction: Drukhari","Aircraft","Vehicle","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Reaper [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 4,
            wounds: 11,
            leader: 7,
            control: 3,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes,
            aeldari_weapons.prow_blade,
        ],
        rangedWeapons: [
            aeldari_weapons.storm_vortex_projector_beam,
            aeldari_weapons.storm_vortex_projector_blast,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.storm_vortex_projector_beam, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.storm_vortex_projector_blast, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bladevanes, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.prow_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This model has a 6+ invulnerable save." },
            { name: "Eradicate the Foe", desc: "Each time this model makes an attack that targets an enemy unit that is at its Starting Strength, re-roll a Hit roll of 1. If the target unit has a Starting Strength of 1, this ability only applies if that unit has its starting number of wounds." },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Electromagnetic Cascade (Pain)", desc: "In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered: \n- Each time this model makes a ranged attack that targets a **Vehicle** unit, that attack has the **[SUSTAINED HITS 2]** ability. \n- Each time this model makes a ranged attack that targets a non-**Vehicle** unit, that attack has the **[SUSTAINED HITS 1]** ability." },
        ],
        keywords: ["Faction: Drukhari","Vehicle","Kabal","Fly","Aeldari","Reaper"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Reavers",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 16,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes_2,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_rifle,
            aeldari_weapons.splinter_pistol_2,
            aeldari_weapons.blaster,
            aeldari_weapons.heat_lance,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_rifle, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.blaster, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.heat_lance, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.bladevanes_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ invulnerable save." },
            { name: "Eviscerating Fly-by", desc: "Each time this unit ends a Normal or Advance move, you can select one enemy unit (excluding **Monster **and **Vehicle** units) that it moved over during that move, then roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
            { name: "Matchless Swiftness (Pain)", desc: "In your Movement phase, when you select this unit to Advance, you can spend 1 Pain token to Empower this unit. While Empowered, each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 8\" to the Move characteristic of models in this unit." },
        ],
        keywords: ["Reavers","Wych Cult","Aeldari","Faction: Drukhari","Fly","Mounted"],
        pointOptions: [{ models: 3, pts: 140 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Revenant Titan",
        pts: 1100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 16,
            tough: 13,
            saving: 2,
            wounds: 30,
            leader: 6,
            control: 16,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.revenant_feet,
        ],
        rangedWeapons: [
            aeldari_weapons.cloudburst_missile_launcher,
            aeldari_weapons.sonic_lance,
            aeldari_weapons.revenant_pulsar,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.cloudburst_missile_launcher, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.sonic_lance, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.revenant_pulsar, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.revenant_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save against ranged attacks." },
            { name: "Damaged: 1-10 Wounds Remaining", desc: "While this model has 1-10 wounds remaining, subtract 8 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Titanic Advance", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there." },
            { name: "Towering Wraith Construct", desc: "Each time you target this model with a Stratagem, you must spend twice that Stratagem’s stated CP cost to do so." },
            { name: "Revenant Jet Pack", desc: "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 8\" to the Move characteristic of this model." },
        ],
        keywords: ["Revenant Titan","Faction: Asuryani","Walker","Towering","Titanic","Monster","Fly","Wraith Construct","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Scorpion [Legends]",
        pts: 410,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 11,
            saving: 2,
            wounds: 24,
            leader: 6,
            control: 8,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_scorpion_pulsar,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_scorpion_pulsar, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.wraithbone_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-8 Wounds Remaining", desc: "While this model has 1-8 wounds remaining, subtract 4 from\nits Objective Control characteristic and each time this model\nmakes an attack, subtract 1 from the Hit roll" },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Lanced Obliteration", desc: "Each time an attack made with this model’s twin Scorpion pulsar destroys an enemy model that has the Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 4+ instead of on a 6." },
        ],
        keywords: ["Scorpion","Faction: Asuryani","Vehicle","Fly","Titanic","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Scourges with Heavy Weapons",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.blaster,
            aeldari_weapons.heat_lance_2,
            aeldari_weapons.splinter_cannon_2,
            aeldari_weapons.shredder,
            aeldari_weapons.dark_lance_2,
            aeldari_weapons.haywire_blaster,
            aeldari_weapons.shardcarbine,
            aeldari_weapons.blast_pistol_2,
            aeldari_weapons.splinter_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.blaster, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.heat_lance_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.splinter_cannon_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shredder, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.dark_lance_2, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.haywire_blaster, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.shardcarbine, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.blast_pistol_2, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot10: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot11: [
                {...aeldari_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Airborne Evasion", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge." },
            { name: "Winged Strike (Pain)", desc: "In your Shooting phase, when you select this unit to shoot, you can spend 1 Pain token to Empower this unit. While Empowered, each time a model in this unit makes a range attack, you can re-roll the Hit roll." },
        ],
        keywords: ["Scourges","Aeldari","Faction: Drukhari","Fly","Grenades","Infantry","Jump Pack","Blades for Hire","Scourges with Heavy Weapons"],
        pointOptions: [{ models: 5, pts: 180 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Scourges with Shardcarbines",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 3,
            saving: 4,
            wounds: 1,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.power_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.blaster,
            aeldari_weapons.shredder,
            aeldari_weapons.shardcarbine,
            aeldari_weapons.blast_pistol_2,
            aeldari_weapons.splinter_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.blaster, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shredder, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shardcarbine, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.blast_pistol_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.power_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Murderous Crossfire", desc: "After this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly **Drukhari** unit makes a ranged attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per turn." },
            { name: "Swooping Descent (Pain)", desc: "In your Movement phase, you can spend 1 Pain token to Empower this unit. While Empowered, each time a model in this unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units. When doing so, if this unit is set up within 9\" of one or more enemy units, until the end of the turn, it is not eligible to declare a charge." },
        ],
        keywords: ["Scourges","Aeldari","Faction: Drukhari","Fly","Grenades","Infantry","Jump Pack","Blades for Hire","Scourges with Shardcarbines"],
        pointOptions: [{ models: 5, pts: 180 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Shadow Spectres [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.prism_rifle_dispersed,
            aeldari_weapons.prism_rifle_focused,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.prism_rifle_dispersed, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.prism_rifle_focused, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Shade of Twilight", desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\". If it does, until the end of the turn, this unit is not eligible to declare a charge." },
        ],
        keywords: ["Infantry","Fly","Faction: Asuryani","Shadow Spectres","Jump Pack","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Shadow Weaver Platform",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 6,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.shadow_weaver,
            aeldari_weapons.shuriken_catapult,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shadow_weaver, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_catapult, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Monofilament Snare", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with its Shadow Weaver. Until the start of your next turn, that enemy unit it snared. While a unit is snared, each time that unit makes a Normal, Advance or Fall Back move, roll one D6 for each model in that unit: for each 1, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Support Weapon","Faction: Asuryani","Aeldari","Infantry","Shadow Weaver Platform","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Shadowseer",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.miststave,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol,
            aeldari_weapons.neuro_disruptor,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.neuro_disruptor, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.miststave, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Troupe" },
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Fog of Dreams (Psychic)", desc: "While this model is leading a unit, that unit can only be selected as the target of a ranged attack if the attacking model is within 18\"." },
            { name: "Treacherous Illusion (Psychic)", desc: "Melee weapons equipped by enemy models have the [Hazardous] ability while targeting this model's unit." },
        ],
        keywords: ["Shadowseer","Character","Infantry","Grenades","Psyker","Harlequin Allies","Faction: Harlequins","Aeldari","Corsairs and Travelling Players"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Shining Spears",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 3,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.laser_lance_3,
            aeldari_weapons.paragon_sabre,
            aeldari_weapons.star_lance,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.laser_lance_4,
            aeldari_weapons.star_lance_2,
            aeldari_weapons.shuriken_cannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.laser_lance_4, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.star_lance_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.laser_lance_3, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.paragon_sabre, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.star_lance, selected: true},
            ],
        },
        abilities: [
            { name: "Shimmershield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable Save." },
            { name: "Extreme Mobility", desc: "Each time this unit makes a Normal, Advance, Fall Back or Charge move, ignore any vertical distance when determining the total distance models in this unit can be moved during that move." },
        ],
        keywords: ["Shining Spears","Mounted","Fly","Faction: Asuryani","Aeldari","Aspect Warrior","Ynnari"],
        pointOptions: [{ models: 3, pts: 220 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Shroud Runners",
        pts: 80,
        units: 3,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_3,
        ],
        rangedWeapons: [
            aeldari_weapons.long_rifle_2,
            aeldari_weapons.scatter_laser_2,
            aeldari_weapons.shuriken_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.long_rifle_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.scatter_laser_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.close_combat_weapon_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "Models in this unit have a 5+ invulnerable save against ranged attacks only." },
            { name: "Target Acquisition", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks made with a long rifle. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Shroud Runners","Fly","Mounted","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [{ models: 3, pts: 160 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Skathach Wraithknight [Legends]",
        pts: 490,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 2,
            wounds: 18,
            leader: 6,
            control: 10,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.titanic_feet,
        ],
        rangedWeapons: [
            aeldari_weapons.deathshroud_cannon_dispersed,
            aeldari_weapons.deathshroud_cannon_focused,
            aeldari_weapons.inferno_lance,
            aeldari_weapons.scatter_laser,
            aeldari_weapons.shuriken_cannon,
            aeldari_weapons.starcannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.deathshroud_cannon_dispersed, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.deathshroud_cannon_focused, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.inferno_lance, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.scatter_laser, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.shuriken_cannon, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.starcannon, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.titanic_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Agile", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over other models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there." },
            { name: "Webway Shunt Generator", desc: "Once per battle, at the end of your opponent’s turn, if this model is not within Engagement Range of one or more enemy units, you can remove this model from the battlefield and place it into Strategic Reserves." },
            { name: "Scattershield", desc: "The bearer has a 4+ invulnerable save." },
        ],
        keywords: ["Skathach Wraithknight","Wraith Construct","Faction: Asuryani","Towering","Titanic","Walker","Monster","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Skyrunner [Crucible]",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 6,
            wounds: 5,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Invulnerable Save (Skyrunner)", desc: "A Craftworld Warleader has a 4+ Invulnerable save." },
            { name: "Winds of War", desc: "This model’s unit is eligible to declare a charge in a turn in which it Advanced." },
        ],
        keywords: ["Character","Aeldari","Faction: Asuryani","Crucible","Mounted","Skyrunner","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Skyweavers",
        pts: 95,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 4,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.zephyrglaive,
            aeldari_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            aeldari_weapons.skyweaver_haywire_cannon,
            aeldari_weapons.star_bolas,
            aeldari_weapons.shuriken_cannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.skyweaver_haywire_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.star_bolas, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.zephyrglaive, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Acrobatic Grace", desc: "Each time an attack targets this unit, subtract 1 from the Hit roll." },
        ],
        keywords: ["Skyweavers","Fly","Mounted","Smoke","Harlequin Allies","Aeldari","Faction: Harlequins","Corsairs and Travelling Players"],
        pointOptions: [{ models: 2, pts: 190 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Solitaire",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.solitaire_weapons,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.solitaire_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Blitz", desc: "Once per battle, in your Movement phase, before this model makes a Normal move it can use this ability. If it does, until the end of\nthe turn, add 2D6\" to this model’s Move characteristic and add 3 to the\nAttacks characteristic of this model’s Solitaire weapons." },
            { name: "Blur of Movement", desc: "This model is eligible to declare a charge in a turn in which it Advanced." },
        ],
        keywords: ["Solitaire","Character","Epic Hero","Infantry","Harlequin Allies","Faction: Harlequins","Aeldari","Corsairs and Travelling Players"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Spiritseer",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 3,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.witch_staff,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.witch_staff, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Spiritseer)", desc: "A Spiritseer has a 4+ Invulnerable save" },
            { name: "Spirit Mark (Psychic)", desc: "Once per turn, in your Movement phase, when this model starts or ends a move, select one friendly Wraith Construct unit within 6\" of this model (excluding Titanic units) and one enemy unit visible to this model. Until the start of your next Movement phase, weapons equipped by models in that friendly unit have the [Sustained Hits 1] ability while targeting that enemy unit." },
            { name: "Tears of Isha (Psychic)", desc: "In your Command phase, select one friendly Wraith Construct unit within 6\" of this model. If one or more models in that unit are destroyed, you can return one destroyed model to that unit. Otherwise, one model in that unit regains up to D3 lost wounds. Each unit can only be selected for this ability once per turn." },
            { name: "Spiritseer", desc: "While this model is within 3\" of one or more friendly Wraith Construct units, this model has the Lone Operative ability." },
        ],
        keywords: ["Spiritseer","Character","Infantry","Psyker","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Starfangs",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.disintegrator_cannon_2,
            aeldari_weapons.starfang_grenade_launcher,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.disintegrator_cannon_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.starfang_grenade_launcher, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Hallucinogen Grenades", desc: "At the start of your opponent’s Shooting phase, this unit can use this ability. If it does, select one **Aeldari** Infantry unit from your army visible to and within 36\" of this unit: until the end of the phase, that unit has the Stealth ability." },
        ],
        keywords: ["Vehicle","Aeldari","Fly","Faction: Asuryani","Ynnari","Starfangs","Anhrathe","Grenades","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "transports",
        name: "Starweaver",
        pts: 80,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_cannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Rapid Embarkation", desc: "At the end of the Fight phase, if there are no models currently embarked within this Transport, you can select one friendly Harlequins Infantry unit that has 6 or fewer models that is wholly within 6\" of this Transport. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport." },
        ],
        keywords: ["Star Weaver","Dedicated Transport","Fly","Smoke","Vehicle","Transport","Aeldari","Faction: Harlequins","Harlequin Allies","Corsairs and Travelling Players"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 Harlequins Infantry models.",
    },
    {
        army: "aeldari",
        class: "battleline",
        name: "Storm Guardians",
        pts: 110,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 0,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.power_sword,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol_2,
            aeldari_weapons.flamer,
            aeldari_weapons.fusion_gun,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.flamer, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.fusion_gun, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.power_sword, selected: true},
            ],
        },
        abilities: [
            { name: "Serpent Shield", desc: "Models in the bearer’s unit have a 5+ invulnerable save." },
            { name: "Stormblades", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase." },
            { name: "Crewed Platform", desc: "When the last Storm Guardian model in this unit is destroyed, any remaining Serpent’s Scale Platform models in this unit are also destroyed." },
        ],
        keywords: ["Storm Guardians","Battleline","Infantry","Grenades","Guardians","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Striking Scorpions",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.scorpion_chainsword_2,
            aeldari_weapons.chainsabres,
            aeldari_weapons.scorpions_claw,
            aeldari_weapons.biting_blade,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol_2,
            aeldari_weapons.chainsabres_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.chainsabres_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.scorpion_chainsword_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.chainsabres, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.scorpions_claw, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.biting_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save." },
            { name: "Mandiblasters", desc: "Each time a model in this unit makes a melee attack, if it made a Charge move this turn, an unmodified Hit roll of 5+ scores a Critical Hit." },
        ],
        keywords: ["Striking Scorpions","Infantry","Faction: Asuryani","Aeldari","Aspect Warrior","Ynnari"],
        pointOptions: [{ models: 5, pts: 150 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Succubus",
        pts: 50,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.archite_glaive_and_agoniser,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.archite_glaive_and_agoniser, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Lithe Agility (Pain)", desc: "In your Movement phase when you select this model's unit to Advance, or in your Charge phase before you make a Charge roll for this model's unit, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, you can re-roll Advance and Charge rolls made for that unit." },
            { name: "Storm of Blades", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the **[Sustained Hits 1]** ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Wyches" },
            { name: "Bloody Spectacle", desc: "Each time this model makes a melee attack that targets a **Character** unit, you can re-roll the Hit roll and you can re-roll the Wound roll. Each time this model's unit destroys a **Character** model, you gain 1CP." },
        ],
        keywords: ["Succubus","Wych Cult","Aeldari","Faction: Drukhari","Character","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Swooping Hawks",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 3,
            saving: 4,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
            aeldari_weapons.power_sword_2,
        ],
        rangedWeapons: [
            aeldari_weapons.lasblaster,
            aeldari_weapons.exarchs_lasblaster,
            aeldari_weapons.hawks_talon,
            aeldari_weapons.scatter_laser_2,
            aeldari_weapons.sunpistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.lasblaster, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.exarchs_lasblaster, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.hawks_talon, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.scatter_laser_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.sunpistol, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.power_sword_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Grenade Pack Flyover", desc: "Once per turn, in your Movement phase, when this unit is set-up on the battlefield or ends a Normal, Advance or Fall Back move, it can use this ability. If it does, select one enemy unit within 8\" of and visible to this unit and roll one D6 for each Swooping Hawks model in this unit. For each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds). Each time this unit uses this ability , until the end of the turn, you cannot target this unit with the Grenades Stratagem." },
        ],
        keywords: ["Swooping Hawks","Infantry","Fly","Grenades","Faction: Asuryani","Aeldari","Jump Pack","Aspect Warrior","Ynnari"],
        pointOptions: [{ models: 5, pts: 190 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Talos",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 7,
            saving: 3,
            wounds: 7,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.macro_scalpel,
            aeldari_weapons.talos_ichor_injector,
            aeldari_weapons.chain_flails,
            aeldari_weapons.talos_gauntlet,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_liquifier_gun,
            aeldari_weapons.twin_splinter_cannon,
            aeldari_weapons.twin_haywire_blaster,
            aeldari_weapons.twin_heat_lance,
            aeldari_weapons.stinger_pod,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_liquifier_gun, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_splinter_cannon, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.twin_haywire_blaster, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.twin_heat_lance, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.stinger_pod, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.macro_scalpel, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.talos_ichor_injector, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.chain_flails, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.talos_gauntlet, selected: true},
            ],
        },
        abilities: [
            { name: "Torture Device", desc: "Each time this unit destroys an enemy unit, you gain 1 additional Pain token." },
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Devoted to Pain", desc: "If a model in this unit is equipped with 2 macro-scalpels, those weapons have the **[Twin-Linked]** ability." },
            { name: "Mindless Killing Machines (Pain)", desc: "At the start of the Fight phase, you can spend 1 Pain token to Empower this unit. While Empowered, each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 2+, do not remove it from play; that destroyed model can fight after the attacking unit has finished making its attacks, and it is then removed from play." },
        ],
        keywords: ["Talos","Aeldari","Haemonculus Covens","Faction: Drukhari","Monster","Fly"],
        pointOptions: [{ models: 1, pts: 160 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Tantalus [Legends]",
        pts: 230,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 16,
            tough: 10,
            saving: 4,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.dire_scythe_blades,
        ],
        rangedWeapons: [
            aeldari_weapons.pulse_disintegrators,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.pulse_disintegrators, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.dire_scythe_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Scything Charge", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
            { name: "Engine of Destruction (Pain)", desc: "In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, this model’s pulse disintegrators have the **[RAPID FIRE 8]** ability." },
        ],
        keywords: ["Vehicle","Transport","Fly","Faction: Drukhari","Aeldari"],
        pointOptions: [],
        transport: "This model has a transport capacity of 16 **Drukhari Infantry** models. Each **Grotesque** model takes up the space of 3 models. This model cannot transport models that can **Fly**.",
    },
    {
        army: "aeldari",
        class: "characters",
        name: "The Visarch",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 2,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.asu_var_quicksilver_stance,
            aeldari_weapons.asu_var_duellist_stance,
            aeldari_weapons.asu_var_mythic_stance,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.asu_var_quicksilver_stance, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.asu_var_duellist_stance, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.asu_var_mythic_stance, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (The Visarch)", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Way of the Blade", desc: "While this model is leading a unit, models in that unit have the Fights First ability." },
            { name: "Yvraine's Champion", desc: "While this model is leading a unit, other Character models attached to that unit have the Feel No Pain 4+ ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corsair Voidreavers\n- Corsair Voidscarred\n- Guardian Defenders\n- Storm Guardians\n- Ynnari Incubi\n- Ynnari Kabalite Warriors\n- Ynnari Wyches\n\nYou can attach this unit to one of the above units, even if Yvraine has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Servant of the Whispering God", desc: "If your army includes The Visarch, it cannot include any Epic Hero units (excluding Ynnari units). If your army includes any Epic Hero units (excluding Ynnari units), it cannot include The Visarch." },
        ],
        keywords: ["The Visarch","Infantry","Epic Hero","Character","Faction: Ynnari","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "The Yncarne",
        pts: 260,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 2,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.vilith_zhar_strike,
            aeldari_weapons.vilith_zhar_sweep,
        ],
        rangedWeapons: [
            aeldari_weapons.swirling_soul_energy,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.swirling_soul_energy, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.vilith_zhar_strike, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.vilith_zhar_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Inevitable Death", desc: "Once in each of your opponent's turns, if this model is on the battlefield when another friendly Aeldari unit is destroyed, just after removing the last model in that unit, you can remove this model from the battlefield and set it up as close as possible to where that destroyed model was destroyed and not within Engagement Range of one or more enemy units." },
            { name: "Ethereal Form", desc: "Each time this model destroys an enemy unit it regains up to D3 lost wounds." },
            { name: "Avatar of the Whispering God", desc: "If your army includes The Yncarne, it cannot include any Epic Hero units (excluding Ynnari units). If your army includes any Epic Hero units (excluding Ynnari units), it cannot include The Yncarne." },
        ],
        keywords: ["The Yncarne","Epic Hero","Monster","Character","Fly","Psyker","Daemon","Aeldari","Faction: Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Troupe Master",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.harlequins_special_weapon,
            aeldari_weapons.troupe_masters_blade,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_pistol,
            aeldari_weapons.fusion_pistol,
            aeldari_weapons.neuro_disruptor,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.fusion_pistol, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.neuro_disruptor, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.harlequins_special_weapon, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.troupe_masters_blade, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Troupe" },
            { name: "Choreographer of War", desc: "While this model is leading a unit, each time a model in that unit makes a Pile In or Consolidate move, it can move up to 6\" instead of 3\". In addition, it does not need to end that move closer to the closest enemy model, provided it ends as close as possible to the closest enemy unit." },
            { name: "Cegorach’s Favour:", desc: "Each time this model makes a melee attack you can re-roll a Hit roll of 1 and add 1 to the Wound roll." },
        ],
        keywords: ["Troupe Master","Infantry","Character","Grenades","Harlequin Allies","Faction: Harlequins","Aeldari","Corsairs and Travelling Players"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Urien Rakarth [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 6,
            wounds: 5,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.haemonculus_tools_and_scissorhands,
        ],
        rangedWeapons: [
            aeldari_weapons.casket_of_flensing,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.casket_of_flensing, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.haemonculus_tools_and_scissorhands, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Wracks" },
            { name: "Horrific Regeneration", desc: "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining" },
            { name: "Sculptor of Torments (Pain)", desc: "In your Fight phase, when you select this model’s unit to fight, you can spend 1 of your Pain tokens to Empower this model’s unit. While that unit is Empowered, each time a model in that unit makes a melee attack, add 1 to the Wound roll." },
            { name: "Father of Pain", desc: "Each time an attack with a Damage characteristic of 1 is allocated to a model in this model’s unit, that model has the Feel No Pain 4+ ability against that attack." },
        ],
        keywords: ["Urien Rakarth","Haemonculus Covens","Aeldari","Haemonculus","Faction: Drukhari","Character","Epic Hero","Infantry"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Vampire Hunter [Legends]",
        pts: 460,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 12,
            saving: 3,
            wounds: 30,
            leader: 6,
            control: 0,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull,
        ],
        rangedWeapons: [
            aeldari_weapons.scatter_laser,
            aeldari_weapons.twin_pulse_laser,
            aeldari_weapons.twin_vampire_pulsar,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.scatter_laser, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_pulse_laser, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.twin_vampire_pulsar, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.wraithbone_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-10 Wounds Remaining", desc: "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Titan Hunter", desc: "Each time a ranged attack made by this model is allocated to a Monster or Vehicle model, re-roll a Damage roll of 1." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Titanic","Vampire Hunter","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Vampire Raider [Legends]",
        pts: 430,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 12,
            saving: 3,
            wounds: 30,
            leader: 6,
            control: 0,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull,
        ],
        rangedWeapons: [
            aeldari_weapons.scatter_laser,
            aeldari_weapons.twin_pulse_laser,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.scatter_laser, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_pulse_laser, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.wraithbone_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-10 Wounds Remaining", desc: "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Into the Foe", desc: "If a unit disembarks from this Transport before it moves, until the end of the turn, that unit is eligible to charge in a turn in which it Advanced." },
            { name: "Transport", desc: "This model has a transport capacity of 30 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models or Ynnari models (excluding Yvraine and The Visarch)." },
            { name: "Invulnerable Save", desc: "Models in this unit have a 4+ invulnerable save against ranged attacks." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Titanic","Transport","Vampire Raider","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "transports",
        name: "Venom",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes_3,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_cannon,
            aeldari_weapons.twin_splinter_rifle,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_splinter_rifle, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bladevanes_3, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Aerialists", desc: "At the end of the Fight phase, if there are no models currently embarked within this **Transport**, you can select one friendly **Drukhari Infantry** unit that has 6 or fewer models that is wholly within 6\" of this **Transport** (you cannot select a unit that can **Fly**). Unless that unit is within Engagement Range of one or more enemy units, it can embark within this **Transport**." },
            { name: "Rapid Deployment (Pain)", desc: "In your Movement phase, when you select this model to Advance, you can spend 1 Pain token to Empower this model. While Empowered, units can disembark from this model after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn." },
        ],
        keywords: ["Venom","Aeldari","Faction: Drukhari","Fly","Dedicated Transport","Transport","Vehicle"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 **Drukhari Infantry ** models (excluding **Jump Pack** models). \n\nBefore the battle, at the start of the Declare Battle Formations step, you can select one **Kabalite Warriors**, **Hand of the Archon** or **Wyches** unit from your army that has not already been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this model; the other can start the battle embarked within another **Transport**, or it can be deployed as a separate unit.",
    },
    {
        army: "aeldari",
        class: "other",
        name: "Vibro Cannon Platform",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 6,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.vibro_cannon,
            aeldari_weapons.shuriken_catapult,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.vibro_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_catapult, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Sonic Destruction", desc: "In your Shooting phase, each time this model makes an attack with its Vibro Cannon that targets an enemy unit, improve the Strength, Armour Penetration and Damage characteristics of that attack by 1 for each other friendly Vibro Cannon Platform model that made one or more attacks with its Vibro Cannon that also targeted that enemy unit this phase." },
        ],
        keywords: ["Support Weapon","Faction: Asuryani","Infantry","Aeldari","Vibro Cannon Platform","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Voidraven Bomber",
        pts: 245,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 4,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladed_wings,
        ],
        rangedWeapons: [
            aeldari_weapons.voidraven_missiles_implosion_missiles,
            aeldari_weapons.voidraven_missiles_shatterfield_missiles,
            aeldari_weapons.void_lance,
            aeldari_weapons.dark_scythe,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.voidraven_missiles_implosion_missiles, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.voidraven_missiles_shatterfield_missiles, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.void_lance, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.dark_scythe, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.bladed_wings, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Void Mine", desc: "Once per battle, after this unit ends a Normal move, you can select one enemy model that it moved over during that move, then roll one D6 for each enemy unit within D6\" of that enemy model: on a 4+, that enemy unit suffers D6 mortal wounds." },
            { name: "Nowhere to Hide (Pain)", desc: "In your Shooting phase, when you select this unit to shoot, you can spend 1 Pain token to Empower this unit. While Empowered, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
        ],
        keywords: ["Voidraven","Aeldari","Faction: Drukhari","Aircraft","Vehicle","Fly"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Voidweaver",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            aeldari_weapons.prismatic_cannon_dispersed_pulse,
            aeldari_weapons.prismatic_cannon_focused_lances,
            aeldari_weapons.voidweaver_haywire_cannon,
            aeldari_weapons.shuriken_cannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.prismatic_cannon_dispersed_pulse, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.prismatic_cannon_focused_lances, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.voidweaver_haywire_cannon, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Polychromatic Camoflage", desc: "This unit can only be selected as the target of a ranged attack if the attacking model is within 18\"." },
        ],
        keywords: ["Voidweaver","Fly","Vehicle","Harlequin Allies","Faction: Harlequins","Aeldari","Corsairs and Travelling Players"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Vypers",
        pts: 75,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.bright_lance_2,
            aeldari_weapons.scatter_laser_3,
            aeldari_weapons.starcannon_2,
            aeldari_weapons.shuriken_cannon_3,
            aeldari_weapons.missile_launcher_starshot_2,
            aeldari_weapons.missile_launcher_sunburst_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.bright_lance_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.scatter_laser_3, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.starcannon_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.missile_launcher_starshot_2, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.missile_launcher_sunburst_2, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Harassment Fire", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Aeldari","Fly","Vypers","Faction: Asuryani","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "War Walkers",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.war_walker_feet,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.war_walker_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Crystalline Targeting", desc: "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly Aeldari unit makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. Each unit can only be selected for that ability once per turn." },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save." },
        ],
        keywords: ["Vehicle","Aeldari","Walker","War Walkers","Faction: Asuryani","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Warlock",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.witchblade_2,
            aeldari_weapons.singing_spear_4,
        ],
        rangedWeapons: [
            aeldari_weapons.singing_spear_3,
            aeldari_weapons.destructor,
            aeldari_weapons.shuriken_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.singing_spear_3, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.destructor, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.witchblade_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.singing_spear_4, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- Guardian Defenders\n- Storm Guardians\nYou can attach this model to a unit, even  if one Autarch or Farseer model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths." },
            { name: "Invulnerable Save (Warlock)", desc: "A Warlock has a 4+ Invulnerable save" },
            { name: "Runes of Fortune (Psychic)", desc: "Each time an enemy unit declares a charge, if one or more units with this ability are selected as a target of that charge, subtract 2 from the Charge roll." },
            { name: "Psychic Communion (Psychic)", desc: "Each time this model is selected to shoot, until the end of the phase, add 1 to the Attacks and Strength characteristics of its Destructor weapon for each other friendly Aeldari Psyker  model within 6\" of this model (to a maximum of +2)." },
        ],
        keywords: ["Character","Infantry","Psyker","Faction: Asuryani","Warlock","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Warlock Conclave",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 6,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.witchblade_2,
            aeldari_weapons.singing_spear_4,
        ],
        rangedWeapons: [
            aeldari_weapons.singing_spear_3,
            aeldari_weapons.shuriken_pistol_2,
            aeldari_weapons.destructor,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.singing_spear_3, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.destructor, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.witchblade_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.singing_spear_4, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Protect (Psychic)", desc: "While a Farseer model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll." },
            { name: "Psychic Communion (Psychic)", desc: "Each time this unit is selected to shoot, for each Warlock model in this unit, until the end of the phase, add 1 to the Attacks and Strength characteristics of that model's Destructor weapon for each other friendly Aeldari Psyker model within 6\" of this model (to a maximum of +2)." },
            { name: "Leader", desc: "At the start of the Declare Battle Formations step, if this unit is not an Attached unit, this unit can join one Guardian Defenders or Storm Guardians unit from your army (a unit cannot have more than one Warlock Conclave unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly." },
        ],
        keywords: ["Warlock Conclave","Psyker","Infantry","Faction: Asuryani","Aeldari","Warlock","Ynnari"],
        pointOptions: [{ models: 2, pts: 130 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Warlock Skyrunners",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 4,
            saving: 6,
            wounds: 3,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.witchblade_2,
            aeldari_weapons.singing_spear_4,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_pistol_2,
            aeldari_weapons.destructor,
            aeldari_weapons.singing_spear_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.destructor, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.singing_spear_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.witchblade_2, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.singing_spear_4, selected: true},
            ],
        },
        abilities: [
            { name: "Psychic Communion (Psychic)", desc: "Each time this unit is selected to shoot, for each Warlock model in this unit, until the end of the phase, add 1 to the Attacks and Strength characteristics of that model's Destructor weapon for each other friendly Aeldari Psyker model within 6\" of this model (to a maximum of +2)." },
            { name: "Leader", desc: "At the start of the Declare Battle Formations step, if this unit is not an Attached unit, this unit can join one Windriders unit from your army (a unit cannot have more than one Warlock Skyrunners unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly." },
            { name: "Runes of Battle (Psychic)", desc: "Weapons equipped by models in this unit have the [Ignores Cover] ability." },
            { name: "Invulnerable Save (Warlock)", desc: "A Warlock Skyrunner has a 4+ Invulnerable save." },
        ],
        keywords: ["Psyker","Faction: Asuryani","Mounted","Warlock Skyrunners","Warlock","Aeldari","Fly","Ynnari"],
        pointOptions: [{ models: 1, pts: 90 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Warp Hunter [Legends]",
        pts: 145,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 6,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.d_flail_blast,
            aeldari_weapons.d_flail_rift,
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_cannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.d_flail_blast, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.d_flail_rift, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shuriken_cannon, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Devastating Assault", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Vehicle","Fly","Faction: Asuryani","Warp Hunter","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Warp Spiders",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.powerblades,
            aeldari_weapons.powerblade_array,
            aeldari_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            aeldari_weapons.death_spinner,
            aeldari_weapons.exarchs_deathspinner,
            aeldari_weapons.death_weavers,
            aeldari_weapons.spinneret_rifle,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.death_spinner, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.exarchs_deathspinner, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.death_weavers, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.spinneret_rifle, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.powerblades, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.powerblade_array, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "Flickerjump", desc: "In your Movement phase, each time this unit is selected to make a Normal move, it can use this ability. If it does, until the end of the turn, this unit is not eligible to declare a charge and models in it have a Move characteristic of 24\". Each time this unit uses this ability, at the end of the phase, roll one D6 for each model in this unit: for each 1, this unit suffers 1 mortal wound." },
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
        ],
        keywords: ["Warp Spiders","Infantry","Fly","Faction: Asuryani","Jump Pack","Aeldari","Aspect Warrior","Ynnari"],
        pointOptions: [{ models: 5, pts: 190 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Wasp Assault Walker [Legends]",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 3,
            wounds: 6,
            leader: 6,
            control: 2,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.wasp_feet,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.wasp_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save." },
            { name: "Cloudbreakers", desc: "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of this model." },
        ],
        keywords: ["Vehicle","Fly","Walker","Faction: Asuryani","Wasp Assault Walker","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "transports",
        name: "Wave Serpent",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 9,
            saving: 3,
            wounds: 13,
            leader: 7,
            control: 2,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.wraithbone_hull_2,
        ],
        rangedWeapons: [
            aeldari_weapons.twin_shuriken_catapult_2,
            aeldari_weapons.shuriken_cannon_3,
            aeldari_weapons.twin_aeldari_missile_launcher_starshot,
            aeldari_weapons.twin_aeldari_missile_launcher_sunburst,
            aeldari_weapons.twin_bright_lance,
            aeldari_weapons.twin_scatter_laser,
            aeldari_weapons.twin_shuriken_cannon_2,
            aeldari_weapons.twin_starcannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.twin_shuriken_catapult_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.twin_aeldari_missile_launcher_starshot, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.twin_aeldari_missile_launcher_sunburst, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.twin_bright_lance, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.twin_scatter_laser, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.twin_shuriken_cannon_2, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.twin_starcannon, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.wraithbone_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Wave Serpent Shield", desc: "Each time a ranged attack targets this model, if the Strength characteristic of that attack is greater than the Toughness characteristic of this model, subtract 1 from the Wound roll." },
            { name: "Damaged: 1-4 Wounds Remaining", desc: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Wave Serpent","Fly","Dedicated Transport","Vehicle","Transport","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models or Ynnari models (excluding Asuryani, Yvraine and The Visarch models).",
    },
    {
        army: "aeldari",
        class: "other",
        name: "Webway Gate [Legends]",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 12,
            saving: 3,
            wounds: 14,
            leader: 6,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Arcane Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack." },
            { name: "Webway Strike", desc: "Each time a friendly AELDARI unit arrives from Strategic Reserves, you can choose to set it up anywhere on the battlefield that is wholly within 6\" of this FORTIFICATION. If you do, that AELDARI unit can be set up within 9\" of enemy models, and can be set up within Engagement Range of enemy models. If an AELDARI unit is set up within Engagement Range of any enemy models in this way, it counts as having made a Charge move this turn and is eligible to fight this turn." },
            { name: "Deployment", desc: "Both Wraithbone Arches of this Fortification must be set up with their upper points no more than 1\" apart and with both statues facing in fully opposite directions so that an arch is formed, as shown on the right. Both arches are then treated as a single model for all rules purposes." },
        ],
        keywords: ["Webway Gate","Fortification","Faction: Asuryani","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "battleline",
        name: "Wracks",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 4,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.power_weapon_3,
            aeldari_weapons.torturers_tool,
        ],
        rangedWeapons: [
            aeldari_weapons.hexrifle,
            aeldari_weapons.liquifier_gun,
            aeldari_weapons.ossefactor,
            aeldari_weapons.stinger_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.hexrifle, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.liquifier_gun, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.ossefactor, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.stinger_pistol_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.power_weapon_3, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.torturers_tool, selected: true},
            ],
        },
        abilities: [
            { name: "Torturer’s Craft", desc: "In your Shooting phase and the Fight phase, after this unit has shot or fought, select one enemy unit (excluding **Vehicles**) hit by one or more of those attacks. That units must take a Battle-shock test." },
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Experimental Enhancements (Pain)", desc: "In the Fight phase, when you select this unit to fight, you can spend 1 Pain token to Empower this unit. Each time you do, select one of the following to apply to this unit until the end of the phase:\n\n- Melee weapons equipped by non-**Character** models in this unit have an Attacks characteristic of 3.\n- Melee weapons equipped by non-**Character** models in this unit have an Attacks characteristic of 4 and the **[Hazardous]** ability." },
        ],
        keywords: ["Wracks","Haemonculus Covens","Aeldari","Faction: Drukhari","Battleline","Infantry"],
        pointOptions: [{ models: 5, pts: 100 }, { models: 8, pts: 120 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Wraithblades",
        pts: 150,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.ghostswords,
            aeldari_weapons.ghostaxe,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.ghostswords, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.ghostaxe, selected: true},
            ],
        },
        abilities: [
            { name: "Forceshield", desc: "The bearer has a 4+ invulnerable save." },
            { name: "Malevolent Souls", desc: "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 3+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play." },
            { name: "Psychic Guidance", desc: "While this unit is within 12\" of one or more friendly Aeldari Psyker models, models in this unit have a Leadership characteristic of 6+ and each time a model in this unit makes an attack, add 1 to the Hit roll." },
        ],
        keywords: ["Wraithblades","Infantry","Wraith Construct","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Wraithguard",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            aeldari_weapons.wraithcannon,
            aeldari_weapons.d_scythe,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.wraithcannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.d_scythe, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [
            { name: "War Construct", desc: "This unit is eligible to shoot in a turn in which it Fell Back." },
            { name: "Psychic Guidance", desc: "While this unit is within 12\" of one or more friendly Aeldari Psyker models, models in this unit have a Leadership characteristic of 6+ and each time a model in this unit makes an attack, add 1 to the Hit roll." },
        ],
        keywords: ["Infantry","Faction: Asuryani","Wraithguard","Wraith Construct","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Wraithknight",
        pts: 435,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 12,
            saving: 2,
            wounds: 18,
            leader: 6,
            control: 10,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.titanic_feet,
        ],
        rangedWeapons: [
            aeldari_weapons.heavy_wraithcannon,
            aeldari_weapons.suncannon,
            aeldari_weapons.scatter_laser_2,
            aeldari_weapons.shuriken_cannon_3,
            aeldari_weapons.starcannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.heavy_wraithcannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.suncannon, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.scatter_laser_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.starcannon, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.titanic_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Scattershield", desc: "The bearer has a 4+ invulnerable save and each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack." },
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Titanic Strides", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move through models (excluding Titanic models) and sections of terrain features that are 4\" or less in height. When doing so:\nIt can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them.\nIt can also move through sections of terrain features that are more than 4\" in height, but if it does, after it has moved, roll one D6: on a 1, this model is battle-shocked." },
            { name: "Point-blank Devastation", desc: "Each time this model's Heavy Wraithcannon or Suncannon targets a unit within half range, you can re-roll the dice to determine the number of attacks made." },
        ],
        keywords: ["Wraithknight","Wraith Construct","Monster","Titanic","Towering","Walker","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Wraithknight with Ghostglaive",
        pts: 420,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 12,
            saving: 2,
            wounds: 18,
            leader: 6,
            control: 10,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.titanic_ghostglaive_strike,
            aeldari_weapons.titanic_ghostglaive_sweep,
        ],
        rangedWeapons: [
            aeldari_weapons.heavy_wraithcannon,
            aeldari_weapons.scatter_laser_2,
            aeldari_weapons.shuriken_cannon_3,
            aeldari_weapons.starcannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.heavy_wraithcannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.scatter_laser_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.shuriken_cannon_3, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.starcannon, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.titanic_ghostglaive_strike, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.titanic_ghostglaive_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Scattershield", desc: "The bearer has a 4+ invulnerable save and each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack." },
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Titanic Agility", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move through models and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them." },
        ],
        keywords: ["Wraith Construct","Monster","Titanic","Towering","Walker","Faction: Asuryani","Aeldari","Wraithknight with Ghostglaive","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Wraithlord",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 10,
            leader: 8,
            control: 3,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.ghostglaive_strike,
            aeldari_weapons.ghostglaive_sweep,
            aeldari_weapons.wraithbone_fists,
        ],
        rangedWeapons: [
            aeldari_weapons.shuriken_catapult_2,
            aeldari_weapons.flamer,
            aeldari_weapons.aeldari_missile_launcher_starshot_2,
            aeldari_weapons.aeldari_missile_launcher_sunburst_2,
            aeldari_weapons.bright_lance_3,
            aeldari_weapons.scatter_laser_4,
            aeldari_weapons.shuriken_cannon_4,
            aeldari_weapons.starcannon_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.shuriken_catapult_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.flamer, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.aeldari_missile_launcher_starshot_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.aeldari_missile_launcher_sunburst_2, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.bright_lance_3, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.scatter_laser_4, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.shuriken_cannon_4, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.starcannon_3, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.ghostglaive_strike, selected: true},
            ],
            slot10: [
                {...aeldari_weapons.ghostglaive_sweep, selected: true},
            ],
            slot11: [
                {...aeldari_weapons.wraithbone_fists, selected: true},
            ],
        },
        abilities: [
            { name: "Fated Hero", desc: "At the start of the battle, select one of the following keywords: Infantry, Monster, Mounted, Vehicle. Each time this model makes an attack that targets a unit with the selected keyword, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
            { name: "Psychic Guidance", desc: "While this model is within 12\" of one or more friendly Aeldari Psyker models, improve the Ballistic Skill and Weapon Skill characteristics of weapons equipped by this model by 1 and it has a Leadership characteristic of 6+." },
        ],
        keywords: ["Wraithlord","Wraith Construct","Monster","Walker","Faction: Asuryani","Aeldari","Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Wraithseer [Legends]",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 11,
            saving: 2,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.ghostspear_strike,
            aeldari_weapons.ghostspear_sweep,
        ],
        rangedWeapons: [
            aeldari_weapons.destructor,
            aeldari_weapons.aeldari_missile_launcher_starshot_2,
            aeldari_weapons.aeldari_missile_launcher_sunburst_2,
            aeldari_weapons.bright_lance_3,
            aeldari_weapons.scatter_laser_5,
            aeldari_weapons.shuriken_cannon_5,
            aeldari_weapons.starcannon_3,
            aeldari_weapons.wraithseer_d_cannon,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.destructor, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.aeldari_missile_launcher_starshot_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.aeldari_missile_launcher_sunburst_2, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.bright_lance_3, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.scatter_laser_5, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.shuriken_cannon_5, selected: true},
            ],
            slot7: [
                {...aeldari_weapons.starcannon_3, selected: true},
            ],
            slot8: [
                {...aeldari_weapons.wraithseer_d_cannon, selected: true},
            ],
            slot9: [
                {...aeldari_weapons.ghostspear_strike, selected: true},
            ],
            slot10: [
                {...aeldari_weapons.ghostspear_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Horrify (Psychic)", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test." },
        ],
        keywords: ["Walker","Monster","Faction: Asuryani","Wraith Construct","Wraithseer","Psyker","Aeldari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "battleline",
        name: "Wyches",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 1,
            leader: 7,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.hekatarii_blade,
            aeldari_weapons.gladiatorial_weapons,
            aeldari_weapons.power_weapon_4,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_pistol_2,
            aeldari_weapons.blast_pistol_3,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.blast_pistol_3, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.hekatarii_blade, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.gladiatorial_weapons, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.power_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save.\nThis unit has a 4+ Invulnerable save against melee attacks." },
            { name: "No Escape", desc: "Each time an enemy unit (excluding **Monsters** and **Vehicles**) within Engagement Range of one or more units from your army with this ability Falls Back, all models in that enemy unit must take Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests." },
            { name: "Acrobatic Gladiators (Pain)", desc: "At the start of your Charge phase, you can spend 1 Pain token to Empower this unit. While Empowered, this unit is eligible to declare a charge in a turn in which it Advanced or Fell Back." },
        ],
        keywords: ["Wyches","Wych Cult","Aeldari","Faction: Drukhari","Battleline","Infantry","Grenades"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Ynnari Archon",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 4,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            aeldari_weapons.huskblade_2,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_pistol,
            aeldari_weapons.blast_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.blast_pistol, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.huskblade_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save - Shadow Field", desc: "An Archon has an Invulnerable Save of 2+. You cannot re-roll invulnerable saving throws made for the bearer. The first time an invulnerable saving throw made for the bearer is failed, until the end of the battle, the bearer has no invulnerable saving throw." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Ynnari Incubi\n- Ynnari Kabalite Warriors" },
            { name: "Overlord", desc: "While this model is leading a unit, each time a model in that unit makes an attack, re-roll a Wound roll of 1. While that unit is below its Starting Strength, each time a model in that unit makes an attack, you can re-roll the Wound roll instead." },
            { name: "Reborn Mastermind", desc: "Once per battle round, one model from your army with this ability can use it when its unit is targeted with a Stratgem. If it does, reduce the CP cost of that usage of that Stratagem by 1CP." },
        ],
        keywords: ["Character","Infantry","Aeldari","Archon","Faction: Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "other",
        name: "Ynnari Incubi",
        pts: 85,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 7,
            tough: 3,
            saving: 3,
            wounds: 2,
            leader: 6,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            aeldari_weapons.klaive_2,
            aeldari_weapons.demiklaives_dual_blades_2,
            aeldari_weapons.demiklaives_single_blade_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.klaive_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.demiklaives_dual_blades_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.demiklaives_single_blade_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 5+ Invulnerable save" },
            { name: "Tormentors", desc: "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test." },
        ],
        keywords: ["Incubi","Aeldari","Infantry","Faction: Ynnari"],
        pointOptions: [{ models: 5, pts: 170 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "transports",
        name: "Ynnari Raider",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 6,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes_4,
        ],
        rangedWeapons: [
            aeldari_weapons.disintegrator_cannon_3,
            aeldari_weapons.dark_lance,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.disintegrator_cannon_3, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.dark_lance, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bladevanes_4, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Aethersails", desc: "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of this model." },
        ],
        keywords: ["Raider","Aeldari","Dedicated Transport","Fly","Vehicle","Transport","Faction: Ynnari"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 models from the following units: The Visarch, Ynnari Archon, Ynnari Incubi, Ynnari Kabalite Warriors, Ynnari Succubus, Ynnari Wyches, Yvraine.",
    },
    {
        army: "aeldari",
        class: "other",
        name: "Ynnari Reavers",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 16,
            tough: 4,
            saving: 4,
            wounds: 2,
            leader: 6,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes_5,
            aeldari_weapons.agonizer_2,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_rifle,
            aeldari_weapons.splinter_pistol_2,
            aeldari_weapons.blaster,
            aeldari_weapons.heat_lance,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_rifle, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.blaster, selected: true},
            ],
            slot4: [
                {...aeldari_weapons.heat_lance, selected: true},
            ],
            slot5: [
                {...aeldari_weapons.bladevanes_5, selected: true},
            ],
            slot6: [
                {...aeldari_weapons.agonizer_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ invulnerable save." },
            { name: "Eviscerating Fly-by", desc: "Each time this unit ends a Normal move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move. If you do, roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Reavers","Aeldari","Fly","Mounted","Faction: Ynnari"],
        pointOptions: [{ models: 3, pts: 120 }],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Ynnari Succubus",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.succubus_weapons,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_pistol,
            aeldari_weapons.blast_pistol,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_pistol, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.blast_pistol, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.succubus_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 4+ Invulnerable save" },
            { name: "Empowered by Death", desc: "At the start of the Fight phase, if this model's unit is below its Starting Strength, models in that unit have the Fights First ability." },
            { name: "Storm of Blades", desc: "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- Ynnari Wyches" },
        ],
        keywords: ["Succubus","Aeldari","Character","Infantry","Faction: Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "transports",
        name: "Ynnari Venom",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 14,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.bladevanes_6,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_cannon,
            aeldari_weapons.twin_splinter_rifle_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_cannon, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.twin_splinter_rifle_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.bladevanes_6, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save" },
            { name: "Lithe Embarkation", desc: "At the end of the Fight phase, if there are no models currently embarked within this Transport, you can select one friendly Ynnari Infantry unit that only includes models from the units listed in this unit's Transport section, that has 6 or fewer models and that is wholly within 6\" of this Transport. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport." },
        ],
        keywords: ["Venom","Aeldari","Fly","Dedicated Transport","Transport","Vehicle","Faction: Ynnari"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 models from the following units: The Visarch, Ynnari Archon, Ynnari Incubi, Ynnari Kabalite Warriors, Ynnari Succubus, Ynnari Wyches, Yvraine.\n\n\nBefore the battle, at the start of the Declare Battle Formations step, you can select one Ynnari Kabalite Warriors or Ynnari Wyches unit from your army that has not already been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this Transport; the other can start the battle embarked within another Transport, or it can be deployed as a separate unit.",
    },
    {
        army: "aeldari",
        class: "battleline",
        name: "Ynnari Wyches",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 1,
            leader: 6,
            control: 2,
            invuln: 6
        },
        meleeWeapons: [
            aeldari_weapons.hekatarii_blade_2,
        ],
        rangedWeapons: [
            aeldari_weapons.splinter_pistol_2,
            aeldari_weapons.blast_pistol_2,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.splinter_pistol_2, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.blast_pistol_2, selected: true},
            ],
            slot3: [
                {...aeldari_weapons.hekatarii_blade_2, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save", desc: "This unit has a 6+ Invulnerable save against ranged attacks, and 4+ Invulnerable save against melee attacks." },
            { name: "No Escape", desc: "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of one or more units from your army with this ability is selected to Fall Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests." },
        ],
        keywords: ["Wyches","Aeldari","Battleline","Infantry","Grenades","Faction: Ynnari"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "aeldari",
        class: "characters",
        name: "Yvraine",
        pts: 100,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 8,
            tough: 3,
            saving: 6,
            wounds: 4,
            leader: 6,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            aeldari_weapons.kha_vir,
        ],
        rangedWeapons: [
            aeldari_weapons.storm_of_whispers,
        ],
        weapon_options: {
            slot1: [
                {...aeldari_weapons.storm_of_whispers, selected: true},
            ],
            slot2: [
                {...aeldari_weapons.kha_vir, selected: true},
            ],
        },
        abilities: [
            { name: "Invulnerable Save (Yvraine)", desc: "Yvraine has a 4+ Invulnerable save" },
            { name: "Herald of Ynnead", desc: "At the start of the Fight phase, select one enemy unit within Engagement Range of this model. Until the end of the phase, each time a friendly Aeldari model makes an attack that targets that unit, you can re-roll a Wound roll of 1." },
            { name: "Word of the Phoenix (Psychic)", desc: "While this model is leading a unit, in your Command phase, roll one D6: on a 2+, D3+1 destroyed Bodyguard models (excluding Support Weapon models) are returned to that unit with their full wounds remaining." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- Corsair Voidscarred\n- Corsair Voidreavers\n- Guardian Defenders\n- Storm Guardians\n- Ynnari Incubi\n- Ynnari Kabalite Warriors\n- Ynnari Wyches" },
            { name: "Servant of the Whispering God", desc: "If your army includes Yvraine, it cannot include any Epic Hero units (excluding Ynnari units). If your army includes any Epic Hero units (excluding Ynnari units), it cannot include Yvraine." },
        ],
        keywords: ["Yvraine","Infantry","Character","Epic Hero","Psyker","Aeldari","Faction: Ynnari"],
        pointOptions: [],
        transport: null,
    },
]

export default aeldari_army
