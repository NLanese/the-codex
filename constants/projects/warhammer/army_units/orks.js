// AUTO-GENERATED units for Orks (10e) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (https://openhammer-api-production.up.railway.app) - re-run the script to refresh; hand edits will be overwritten.

import orks_weapons from "../weapons/orks"

const orks_army = [
    {
        army: "orks",
        class: "other",
        name: "Attack Fighta [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 10,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.twin_big_shoota,
            orks_weapons.wing_missiles,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.wing_missiles, selected: true},
            ],
            slot3: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Interceptor", desc: "Each time this model makes a ranged attack that targets a unit that can FLY, add 1 to the Hit roll." },
            { name: "Small Bomms", desc: "Each time the bearer ends a Normal move, you can select one enemy unit it moved across during that move and roll three D6: for each 4+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Attack Fighta","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Battlewagon",
        pts: 160,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 16,
            leader: 7,
            control: 5,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.deff_rolla,
            orks_weapons.tracks_and_wheels,
            orks_weapons.wreckin_ball,
            orks_weapons.grabbin_klaw,
        ],
        rangedWeapons: [
            orks_weapons.killkannon,
            orks_weapons.zzap_gun,
            orks_weapons.kannon_shell,
            orks_weapons.kannon_frag,
            orks_weapons.lobba,
            orks_weapons.big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.killkannon, selected: true},
            ],
            slot2: [
                {...orks_weapons.zzap_gun, selected: true},
            ],
            slot3: [
                {...orks_weapons.kannon_shell, selected: true},
            ],
            slot4: [
                {...orks_weapons.kannon_frag, selected: true},
            ],
            slot5: [
                {...orks_weapons.lobba, selected: true},
            ],
            slot6: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot7: [
                {...orks_weapons.deff_rolla, selected: true},
            ],
            slot8: [
                {...orks_weapons.tracks_and_wheels, selected: true},
            ],
            slot9: [
                {...orks_weapons.wreckin_ball, selected: true},
            ],
            slot10: [
                {...orks_weapons.grabbin_klaw, selected: true},
            ],
        },
        abilities: [
            { name: "Ramshackle but Rugged", desc: "Each time an attack is allocated to this model, worsen the Armour Penetration characteristic of that attack by 1." },
            { name: "’Ard Case", desc: "Add 2 to the bearer’s Toughness characteristic, but it no longer has the Firing Deck ability." },
        ],
        keywords: ["Vehicle","Transport","Faction: Orks","Battlewagon"],
        pointOptions: [],
        transport: "This model has a transport capacity of 22 **Orks Infantry** models. If this model is equipped with a killkannon, it has a transport capacity of 12 **Orks Infantry** models. Each **Mega Armour** or **Jump Pack** model takes up the space of 2 models. The **Ghazghkull Thraka** model takes up the space of 4 models.",
    },
    {
        army: "orks",
        class: "battleline",
        name: "Beast Snagga Boyz",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.close_combat_weapon,
            orks_weapons.power_snappa,
            orks_weapons.choppa,
        ],
        rangedWeapons: [
            orks_weapons.thump_gun,
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.thump_gun, selected: true},
            ],
            slot2: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot3: [
                {...orks_weapons.close_combat_weapon, selected: true},
            ],
            slot4: [
                {...orks_weapons.power_snappa, selected: true},
            ],
            slot5: [
                {...orks_weapons.choppa, selected: true},
            ],
        },
        abilities: [
            { name: "Monster Hunters", desc: "Each time a model in this unit makes an attack that targets a MONSTER or VEHICLE unit, you can re-roll the Hit roll." },
        ],
        keywords: ["Infantry","Mob","Battleline","Beast Snagga","Beast Snagga Boyz","Faction: Orks"],
        pointOptions: [{ models: 10, pts: 190 }],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Beastboss",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.beast_snagga_klaw,
            orks_weapons.beastchoppa,
        ],
        rangedWeapons: [
            orks_weapons.shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.beast_snagga_klaw, selected: true},
            ],
            slot3: [
                {...orks_weapons.beastchoppa, selected: true},
            ],
        },
        abilities: [
            { name: "Beastboss", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Ferocious Rage", desc: "Each time this model makes a Charge move, until the end of the turn, melee weapons it is equipped with have the **[DEVASTATING WOUNDS]** ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Beast Snagga Boyz**" },
        ],
        keywords: ["Character","Infantry","Beast Snagga","Beastboss","Warboss","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Beastboss on Squigosaur",
        pts: 110,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.squigosaur_s_jaws,
            orks_weapons.beastchoppa,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
            orks_weapons.thump_gun,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.thump_gun, selected: true},
            ],
            slot3: [
                {...orks_weapons.squigosaur_s_jaws, selected: true},
            ],
            slot4: [
                {...orks_weapons.beastchoppa, selected: true},
            ],
        },
        abilities: [
            { name: "Thundering Stampede", desc: "While this model is leading a unit, add 1 to Charge rolls made for that unit." },
            { name: "Single-minded Predator", desc: "You can target this model's unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- SQUIGHOG BOYZ" },
        ],
        keywords: ["Character","Beast Snagga","Beastboss on Squigosaur","Faction: Orks","Warboss","Mounted"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Big Gunz [Legends]",
        pts: 20,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 3,
            tough: 4,
            saving: 5,
            wounds: 3,
            leader: 8,
            control: 1,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.close_combat_weapons,
        ],
        rangedWeapons: [
            orks_weapons.kannon_frag_2,
            orks_weapons.kannon_shell_2,
            orks_weapons.lobba_2,
            orks_weapons.zzap_gun_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kannon_frag_2, selected: true},
            ],
            slot2: [
                {...orks_weapons.kannon_shell_2, selected: true},
            ],
            slot3: [
                {...orks_weapons.lobba_2, selected: true},
            ],
            slot4: [
                {...orks_weapons.zzap_gun_2, selected: true},
            ],
            slot5: [
                {...orks_weapons.close_combat_weapons, selected: true},
            ],
        },
        abilities: [
            { name: "Splat!", desc: "Each time a model in this unit makes a ranged attack that targets a unit containing 10 or more models, re-roll a Hit roll of 1." },
            { name: "Big Gunz", desc: "Designer’s Note: Place two Grot Crew tokens next to each Big Gun model when this unit is first set up, removing one each time its Big Gun model loses a wound (a Big Gun model itself is considered to represent its final wound)." },
        ],
        keywords: ["Vehicle","Artillery","Big Gunz","Faction: Orks","Grots"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Big Mek",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.drilla,
            orks_weapons.power_klaw,
        ],
        rangedWeapons: [
            orks_weapons.traktor_blasta,
            orks_weapons.kustom_mega_blasta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.traktor_blasta, selected: true},
            ],
            slot2: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot3: [
                {...orks_weapons.drilla, selected: true},
            ],
            slot4: [
                {...orks_weapons.power_klaw, selected: true},
            ],
        },
        abilities: [
            { name: "More Dakka", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Shokk-boosta", desc: "You can re-roll Advance rolls made for this model's unit. In addition, each time this model's unit makes a Normal, Advance or Fall Back move, models in that unit can move through models and terrain features. When doing so, they can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- LOOTAS\n- MEK GUNZ\n- NOBZ" },
        ],
        keywords: ["Infantry","Character","Grenades","Mek","Faction: Orks","Big Mek"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Big Mek in Mega Armour",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 2,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.killsaw,
            orks_weapons.power_klaw,
        ],
        rangedWeapons: [
            orks_weapons.tellyport_blasta,
            orks_weapons.kustom_mega_blasta,
            orks_weapons.kustom_shoota,
            orks_weapons.kombi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.tellyport_blasta, selected: true},
            ],
            slot2: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot3: [
                {...orks_weapons.kustom_shoota, selected: true},
            ],
            slot4: [
                {...orks_weapons.kombi_weapon, selected: true},
            ],
            slot5: [
                {...orks_weapons.killsaw, selected: true},
            ],
            slot6: [
                {...orks_weapons.power_klaw, selected: true},
            ],
        },
        abilities: [
            { name: "More Dakka", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Fix Dat Armour Up", desc: "While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- MEGANOBZ" },
            { name: "Grot Oiler", desc: "Once per battle, at the end of your Movement phase, one model in the bearer’s unit regains D3 lost wounds.\nDesigner’s Note: Place a Grot Oiler token next to the unit, removing it once this ability has been used." },
        ],
        keywords: ["Character","Infantry","Big Mek in Mega Armour","Faction: Orks","Mega Armour","Mek"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Big Mek on Warbike [Legends]",
        pts: 105,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.big_choppa,
            orks_weapons.power_klaw_2,
            orks_weapons.choppa_2,
            orks_weapons.killsaw,
            orks_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
            orks_weapons.kombi_weapon,
            orks_weapons.kustom_mega_blasta,
            orks_weapons.rokkit_launcha,
            orks_weapons.kustom_mega_slugga,
            orks_weapons.shokk_attack_gun,
            orks_weapons.twin_dakkagun,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.kombi_weapon, selected: true},
            ],
            slot3: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot4: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot5: [
                {...orks_weapons.kustom_mega_slugga, selected: true},
            ],
            slot6: [
                {...orks_weapons.shokk_attack_gun, selected: true},
            ],
            slot7: [
                {...orks_weapons.twin_dakkagun, selected: true},
            ],
            slot8: [
                {...orks_weapons.big_choppa, selected: true},
            ],
            slot9: [
                {...orks_weapons.power_klaw_2, selected: true},
            ],
            slot10: [
                {...orks_weapons.choppa_2, selected: true},
            ],
            slot11: [
                {...orks_weapons.killsaw, selected: true},
            ],
            slot12: [
                {...orks_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "More Dakka", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Mekaniak", desc: "At the end of your Movement phase, you can select one friendly ORKS VEHICLE model within 3\" of this model. That VEHICLE model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that VEHICLE model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- WARBIKERS" },
        ],
        keywords: ["Character","Mounted","Speed Freeks","Grenades","Faction: Orks","Big Mek on Warbike","Big Mek"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Big Mek with Kustom Force Field [Legends]",
        pts: 55,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: 5
        },
        meleeWeapons: [
            orks_weapons.choppa_2,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.choppa_2, selected: true},
            ],
        },
        abilities: [
            { name: "More Dakka", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Kustom Force Field", desc: "While this model is leading a unit, models in that unit have a 5+ invulnerable save against ranged attacks. Once per battle, at the start of any phase, this model can overcharge its kustom force field. If it does, until the end of the phase, this invulnerable save is improved to 4+." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- BURNA BOYZ\n- TANKBUSTAS\n- LOOTAS\n- NOBZ" },
            { name: "Grot Helper", desc: "Once per battle, the bearer can overcharge its kustom force field one additional time.\nDesigner’s Note: Place a Grot Helper token next to the bearer, removing it once this ability has been used." },
        ],
        keywords: ["Character","Infantry","Grenades","Faction: Orks","Big Mek with Kustom Force Field","Big Mek","Mek"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Big Mek with Shokk Attack Gun",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.close_combat_weapon_2,
        ],
        rangedWeapons: [
            orks_weapons.shokk_attack_gun,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.shokk_attack_gun, selected: true},
            ],
            slot2: [
                {...orks_weapons.close_combat_weapon_2, selected: true},
            ],
        },
        abilities: [
            { name: "More Dakka", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1." },
            { name: "Deranged Snotling Assault", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks; that unit must take a Battle-shock test." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Boyz**\n- **Lootas**\n- **Mek Gunz**\n- **Nobz**" },
            { name: "Grot Assistant", desc: "Once per battle, after rolling to determine how many attacks the bearer’s shokk attack gun makes, you can re-roll that dice.\n\n**Designer’s Note:** *Place a Grot Assistant token next to the bearer, removing it once this ability has been used.*" },
        ],
        keywords: ["Character","Infantry","Grenades","Faction: Orks","Big Mek with Shokk Attack Gun","Mek"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Big Trakk [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 9,
            saving: 4,
            wounds: 12,
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.big_shoota,
            orks_weapons.kannon_shell_3,
            orks_weapons.kannon_frag_3,
            orks_weapons.supa_kannon_shell,
            orks_weapons.supa_kannon_frag,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.kannon_shell_3, selected: true},
            ],
            slot3: [
                {...orks_weapons.kannon_frag_3, selected: true},
            ],
            slot4: [
                {...orks_weapons.supa_kannon_shell, selected: true},
            ],
            slot5: [
                {...orks_weapons.supa_kannon_frag, selected: true},
            ],
            slot6: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Spiked Ram", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds." },
        ],
        keywords: ["Vehicle","Transport","Faction: Orks","Big Trakk"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ORKS INFANTRY models. Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models. This model cannot transport GHAZGHKULL THRAKA models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Big'ed Bossbunka",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "-",
            tough: 10,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [
            orks_weapons.gaze_of_gork_glare,
            orks_weapons.gaze_of_gork_squint,
            orks_weapons.big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.gaze_of_gork_glare, selected: true},
            ],
            slot2: [
                {...orks_weapons.gaze_of_gork_squint, selected: true},
            ],
            slot3: [
                {...orks_weapons.big_shoota, selected: true},
            ],
        },
        abilities: [
            { name: "Ramshackle Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
            { name: "Shoutin’ Pole (Aura)", desc: "While a friendly ORKS unit is within 6\" of this FORTIFICATION, improve the Leadership characteristic of models in that unit by 1." },
        ],
        keywords: ["Fortification","Vehicle","Transport","Big'ed Bossbunka","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 ORKS INFANTRY models (excluding GHAZGHKULL THRAKA). Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Blitza-bommer",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.big_shoota,
            orks_weapons.twin_supa_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.twin_supa_shoota, selected: true},
            ],
            slot3: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Boom Bomb", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6: on a 4+, that unit suffers D6 mortal wounds." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Blitza-bommer","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Boomdakka Snazzwagon",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 4,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spiked_wheels,
        ],
        rangedWeapons: [
            orks_weapons.mek_speshul,
            orks_weapons.big_shoota,
            orks_weapons.grot_blasta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.mek_speshul, selected: true},
            ],
            slot2: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot3: [
                {...orks_weapons.grot_blasta, selected: true},
            ],
            slot4: [
                {...orks_weapons.spiked_wheels, selected: true},
            ],
        },
        abilities: [
            { name: "Billowing Fumes (Aura)", desc: "While an enemy unit (excluding MONSTERS and VEHICLES) is within 6\" of this model, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Grenades","Boomdakka Snazzwagon","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Boss Snikrot",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.mork_s_teeth,
        ],
        rangedWeapons: [
            orks_weapons.slugga_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga_2, selected: true},
            ],
            slot2: [
                {...orks_weapons.mork_s_teeth, selected: true},
            ],
        },
        abilities: [
            { name: "Red Skull Kommandos", desc: "While this model is leading a unit, models in that unit have the Benefit of Cover." },
            { name: "Kunnin’ Infiltrator", desc: "Once per battle, in your Movement phase, instead of making a Normal move with this model’s unit, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- KOMMANDOS" },
        ],
        keywords: ["Epic Hero","Infantry","Character","Grenades","Faction: Orks","Boss Snikrot","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Boss Zagstruk [Legends]",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.da_vulcha_s_klaws_and_choppa,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.da_vulcha_s_klaws_and_choppa, selected: true},
            ],
        },
        abilities: [
            { name: "Drill Boss", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Plummeting Descent", desc: "You can re-roll Charge rolls made for this model’s unit in a turn in which it was set up on the battlefield from Reserves." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- STORMBOYZ" },
        ],
        keywords: ["Infantry","Character","Epic Hero","Jump Pack","Fly","Boss Zagstruk","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "battleline",
        name: "Boyz",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.choppa_3,
            orks_weapons.close_combat_weapon_3,
            orks_weapons.big_choppa_2,
            orks_weapons.power_klaw_3,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
            orks_weapons.shoota_2,
            orks_weapons.big_shoota,
            orks_weapons.rokkit_launcha,
            orks_weapons.kombi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.shoota_2, selected: true},
            ],
            slot3: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot4: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot5: [
                {...orks_weapons.kombi_weapon, selected: true},
            ],
            slot6: [
                {...orks_weapons.choppa_3, selected: true},
            ],
            slot7: [
                {...orks_weapons.close_combat_weapon_3, selected: true},
            ],
            slot8: [
                {...orks_weapons.big_choppa_2, selected: true},
            ],
            slot9: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
        },
        abilities: [
            { name: "Get Da Good Bitz", desc: "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
            { name: "Bodyguard", desc: "If this unit has a Starting Strength of 20, you can attach up to two Leader units to it instead of one (but only if one of those is a WARBOSS model). If you do, and this unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths." },
        ],
        keywords: ["Infantry","Battleline","Mob","Grenades","Boyz","Faction: Orks"],
        pointOptions: [{ models: 10, pts: 170 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Breaka Boyz",
        pts: 140,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.tankhammer,
            orks_weapons.knucklebustas,
            orks_weapons.smash_hammer,
            orks_weapons.choppa_2,
        ],
        rangedWeapons: [
            orks_weapons.rokkit_pistol,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.rokkit_pistol, selected: true},
            ],
            slot2: [
                {...orks_weapons.tankhammer, selected: true},
            ],
            slot3: [
                {...orks_weapons.knucklebustas, selected: true},
            ],
            slot4: [
                {...orks_weapons.smash_hammer, selected: true},
            ],
            slot5: [
                {...orks_weapons.choppa_2, selected: true},
            ],
        },
        abilities: [
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to a BOYZ unit, it can be attached to this unit instead." },
            { name: "Trophy Hunters", desc: "Each time this unit declares a charge, you can re-roll the Charge roll." },
        ],
        keywords: ["Faction: Orks","Infantry","Grenades","Breaka Boyz"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Burna Boyz",
        pts: 60,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Pyromaniaks", desc: "Each time a model in this unit makes a ranged attack with a burna that targets an enemy unit within 6\", re-roll a Wound roll of 1. If the target of that attack is also within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Infantry","Burna Boyz","Faction: Orks"],
        pointOptions: [{ models: 5, pts: 120 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Burna-bommer",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.skorcha_missile_rack,
            orks_weapons.twin_big_shoota,
            orks_weapons.twin_supa_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.skorcha_missile_rack, selected: true},
            ],
            slot2: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot3: [
                {...orks_weapons.twin_supa_shoota, selected: true},
            ],
            slot4: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Burna Bomb", desc: "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover. In addition, roll one D6 for each model in that unit: for each 6, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Burna-bommer","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Chinork Warkopta [Legends]",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 14,
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.deffgun,
            orks_weapons.rattler_kannon,
            orks_weapons.big_shoota,
            orks_weapons.kustom_mega_blasta,
            orks_weapons.rokkit_launcha,
            orks_weapons.skorcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.deffgun, selected: true},
            ],
            slot2: [
                {...orks_weapons.rattler_kannon, selected: true},
            ],
            slot3: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot4: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot5: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot6: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot7: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Aerial Deployment", desc: "If this model starts the game in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
            { name: "Big Bomms", desc: "Once per battle, after the bearer ends a Normal move, you can select one enemy unit it moved across during that move and roll six D6: for each 4+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Fly","Transport","Chinork Warkopta","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ORKS INFANTRY models. This model cannot transport GHAZGHKULL THRAKA, MEGA ARMOUR or JUMP PACK models.",
    },
    {
        army: "orks",
        class: "characters",
        name: "Da Red Gobbo [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 2,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.icon_of_da_revolushun,
        ],
        rangedWeapons: [
            orks_weapons.kustom_grot_blasta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kustom_grot_blasta, selected: true},
            ],
            slot2: [
                {...orks_weapons.icon_of_da_revolushun, selected: true},
            ],
        },
        abilities: [
            { name: "Da Revolushun!", desc: "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll." },
            { name: "Has Yoo Been a Good Little Grot This Year?", desc: "Once per battle, in your Shooting phase, you can target this model’s unit with the Grenade Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Gretchin**" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Grenades","Faction: Orks","Da Red Gobbo","Grots"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Da Red Gobbo's A-bomb-inable Snowman [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 2,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.close_combat_weapon_4,
        ],
        rangedWeapons: [
            orks_weapons.kustom_grot_blasta_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kustom_grot_blasta_2, selected: true},
            ],
            slot2: [
                {...orks_weapons.close_combat_weapon_4, selected: true},
            ],
        },
        abilities: [
            { name: "Explosive Snowballs", desc: "Once in each of your Shooting phases, you can target this unit with the Grenades stratagem for 0CP. After resolving this stratagem, this unit can make a Normal move of up to 6\"." },
            { name: "A-bomb-inable Snowman", desc: "When this model is destroyed, its Deadly Demise ability inflicts mortal wounds on a D6 roll of 2+ instead of on a 6." },
        ],
        keywords: ["Epic Hero","Character","Infantry","Faction: Orks","Da Red Gobbo A-bomb-inable Snowman"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Da Red Gobbo's Tinboy [Legends]",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 3,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.tinboys_klaw,
        ],
        rangedWeapons: [
            orks_weapons.tinboys_kustom_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.tinboys_kustom_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.tinboys_klaw, selected: true},
            ],
        },
        abilities: [
            { name: "Redistributin' da Gifts", desc: "Once in each of your Shooting phases, you can target this unit with the Grenade Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
        ],
        keywords: ["Epic Hero","Character","Faction: Orks","Da Red Gobbo","Grots","Vehicle","Walker"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Dakkajet",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.twin_supa_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_supa_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Dakkastorm", desc: "Each time this model makes a ranged attack, every successful Hit roll scores a Critical Hit." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Dakkajet","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Deff Dread",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 2,
            wounds: 8,
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.dread_klaw,
            orks_weapons.stompy_feet,
        ],
        rangedWeapons: [
            orks_weapons.big_shoota,
            orks_weapons.kustom_mega_blasta,
            orks_weapons.rokkit_launcha,
            orks_weapons.skorcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot3: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot4: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot5: [
                {...orks_weapons.dread_klaw, selected: true},
            ],
            slot6: [
                {...orks_weapons.stompy_feet, selected: true},
            ],
        },
        abilities: [
            { name: "Piston-driven Brutality", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2‑5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds." },
        ],
        keywords: ["Vehicle","Walker","Deff Dread","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Deff Rolla Battle Fortress [Legends]",
        pts: 250,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 3,
            wounds: 22,
            leader: 7,
            control: 8,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.deff_rolla,
        ],
        rangedWeapons: [
            orks_weapons.zzap_gun_3,
            orks_weapons.kannon_shell_3,
            orks_weapons.kannon_frag_3,
            orks_weapons.lobba,
            orks_weapons.big_shoota,
            orks_weapons.twin_big_shoota,
            orks_weapons.skorcha,
            orks_weapons.rokkit_launcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.zzap_gun_3, selected: true},
            ],
            slot2: [
                {...orks_weapons.kannon_shell_3, selected: true},
            ],
            slot3: [
                {...orks_weapons.kannon_frag_3, selected: true},
            ],
            slot4: [
                {...orks_weapons.lobba, selected: true},
            ],
            slot5: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot6: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot7: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot8: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot9: [
                {...orks_weapons.deff_rolla, selected: true},
            ],
        },
        abilities: [
            { name: "Rolling Fortress", desc: "Each time a ranged attack is allocated to an ORKS model from your army, if that model is not fully visible to every model in the attacking unit because of this DEFF ROLLA BATTLE FORTRESS model, that model has the Benefit of Cover against that attack." },
        ],
        keywords: ["Vehicle","Titanic","Transport","Deff Rolla Battle Fortress","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 22 ORKS INFANTRY models. Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models. The Ghazghkull Thraka model takes up the space of 18 models.",
    },
    {
        army: "orks",
        class: "characters",
        name: "Deffkilla Wartrike",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 9,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.snagga_klaw,
        ],
        rangedWeapons: [
            orks_weapons.deffkilla_boomstikks,
            orks_weapons.killa_jet_burna,
            orks_weapons.killa_jet_cutta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.deffkilla_boomstikks, selected: true},
            ],
            slot2: [
                {...orks_weapons.killa_jet_burna, selected: true},
            ],
            slot3: [
                {...orks_weapons.killa_jet_cutta, selected: true},
            ],
            slot4: [
                {...orks_weapons.snagga_klaw, selected: true},
            ],
        },
        abilities: [
            { name: "Speedboss", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Fuel-mixa Grot", desc: "Each time this model’s unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- WARBIKERS" },
        ],
        keywords: ["Mounted","Warboss","Deffkilla Wartrike","Faction: Orks","Character","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Deffkoptas",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spinnin_blades,
        ],
        rangedWeapons: [
            orks_weapons.kopta_rokkits,
            orks_weapons.slugga,
            orks_weapons.kustom_mega_blasta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kopta_rokkits, selected: true},
            ],
            slot2: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot3: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot4: [
                {...orks_weapons.spinnin_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Deff from Above", desc: "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Fly","Grenades","Deffkoptas","Faction: Orks","Speed Freeks"],
        pointOptions: [{ models: 3, pts: 160 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Deffkoptas with Big Shootas [Legends]",
        pts: 130,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spinnin_blades,
            orks_weapons.killsaw,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
            orks_weapons.twin_big_shoota,
            orks_weapons.kopta_rokkits,
            orks_weapons.kustom_mega_blasta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot3: [
                {...orks_weapons.kopta_rokkits, selected: true},
            ],
            slot4: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot5: [
                {...orks_weapons.spinnin_blades, selected: true},
            ],
            slot6: [
                {...orks_weapons.killsaw, selected: true},
            ],
        },
        abilities: [
            { name: "Deff from Above", desc: "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Deffkoptas with Big Shootas","Fly","Grenades","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Fighta-Bommer [Legends]",
        pts: 100,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.grot_guided_bomm,
            orks_weapons.wing_missiles,
            orks_weapons.twin_big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.grot_guided_bomm, selected: true},
            ],
            slot2: [
                {...orks_weapons.wing_missiles, selected: true},
            ],
            slot3: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot4: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Strafing Run", desc: "Each time this model makes a ranged attack that targets a unit that cannot FLY, add 1 to the Hit roll." },
            { name: "Small Bomms", desc: "Each time the bearer ends a Normal move, you can select one enemy unit it moved across during that move and roll three D6: for each 4+, that unit suffers 1 mortal wound." },
        ],
        keywords: ["Vehicle","Fly","Aircraft","Fighta-Bommer","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Flash Gitz",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.choppa_2,
        ],
        rangedWeapons: [
            orks_weapons.snazzgun,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.snazzgun, selected: true},
            ],
            slot2: [
                {...orks_weapons.choppa_2, selected: true},
            ],
        },
        abilities: [
            { name: "Gun-crazy Show-offs", desc: "Each time a model in this unit targets the closest eligible target with its snazzgun, until the end of the phase, that weapon has an Attacks characteristic of 4." },
            { name: "Ammo Runt", desc: "Once per battle, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the **[LETHAL HITS]** ability.\n\n**Designer’s Note:** *Place an Ammo Runt token next to the unit, removing it after this ability has been used.*" },
        ],
        keywords: ["Infantry","Grenades","Flash Gitz","Faction: Orks"],
        pointOptions: [{ models: 5, pts: 160 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Gargantuan Squiggoth",
        pts: 440,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 13,
            saving: 3,
            wounds: 30,
            leader: 7,
            control: 12,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.huge_tusks_strike,
            orks_weapons.huge_tusks_sweep,
        ],
        rangedWeapons: [
            orks_weapons.supa_kannon,
            orks_weapons.kannon_shell_3,
            orks_weapons.kannon_frag_3,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.supa_kannon, selected: true},
            ],
            slot2: [
                {...orks_weapons.kannon_shell_3, selected: true},
            ],
            slot3: [
                {...orks_weapons.kannon_frag_3, selected: true},
            ],
            slot4: [
                {...orks_weapons.huge_tusks_strike, selected: true},
            ],
            slot5: [
                {...orks_weapons.huge_tusks_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Gargantuan", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding TITANIC models) and terrain features that are 4\" or less in height as if they were not there." },
            { name: "Walking Bastion", desc: "This model does not suffer the penalty to its Hit rolls for making ranged attacks while enemy units are within Engagement Range of it." },
            { name: "Damaged: 1-10 Wounds Remaining", desc: "While this model has 1-10 wounds remaining, subtract 6 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Monster","Titanic","Towering","Transport","Gargantuan Squiggoth","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 20 ORKS INFANTRY models. Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models. GHAZGHKULL THRAKA takes up the space of 18 models. If this model is equipped with a supa-kannon, it has a transport capacity of 15 ORKS INFANTRY models.",
    },
    {
        army: "orks",
        class: "characters",
        name: "Ghazghkull Thraka",
        pts: 235,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 7,
            wounds: 1,
            leader: 8,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            orks_weapons.gork_s_klaw_strike,
            orks_weapons.gork_s_klaw_sweep,
            orks_weapons.makari_s_stabba,
        ],
        rangedWeapons: [
            orks_weapons.mork_s_roar,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.mork_s_roar, selected: true},
            ],
            slot2: [
                {...orks_weapons.gork_s_klaw_strike, selected: true},
            ],
            slot3: [
                {...orks_weapons.gork_s_klaw_sweep, selected: true},
            ],
            slot4: [
                {...orks_weapons.makari_s_stabba, selected: true},
            ],
        },
        abilities: [
            { name: "Supreme Commander", desc: "If this unit is in your army, its Ghazghkull Thraka model must be your **Warlord**." },
            { name: "Prophet of Da Great Waaagh!", desc: "While this unit is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll and add 1 to the Wound roll and if the Waaagh! is active for your army, a Critical Hit is scored on a successful unmodified Hit roll of 5+." },
            { name: "Ghazghkull’s Waaagh! Banner (Aura)", desc: "While a friendly **Orks** unit is within 12\" of Makari, if the Waaagh! is active for your army, melee weapons equipped by models in that unit have the **[LETHAL HITS]** ability." },
            { name: "Leader", desc: "This unit can be attached to the following units:\n- **Boyz**\n- **Meganobz**\n- **Nobz**" },
            { name: "Invulnerable Save (2+*) [Makari]", desc: "This model has a 2+ invulnerable save. You cannot re-roll invulnerable saving throws made for this model." },
        ],
        keywords: ["Infantry","Epic Hero","Character","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Gorkanaut",
        pts: 265,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 12,
            saving: 3,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.klaw_of_gork_strike,
            orks_weapons.klaw_of_gork_sweep,
        ],
        rangedWeapons: [
            orks_weapons.deffstorm_mega_shoota,
            orks_weapons.rokkit_launcha,
            orks_weapons.skorcha,
            orks_weapons.twin_big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.deffstorm_mega_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot3: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot4: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot5: [
                {...orks_weapons.klaw_of_gork_strike, selected: true},
            ],
            slot6: [
                {...orks_weapons.klaw_of_gork_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Clankin’ Forward", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding MONSTER and VEHICLE models) and terrain features that are 4\" or less in height as if they were not there." },
            { name: "Big an’ Stompy", desc: "Each time this model makes a melee attack, if the Waaagh! is active for your army, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Titanic","Towering","Walker","Transport","Gorkanaut","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ORKS INFANTRY models (excluding GHAZGHKULL THRAKA). Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Gretchin",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 2,
            saving: 7,
            wounds: 1,
            leader: 8,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.close_combat_weapon_5,
        ],
        rangedWeapons: [
            orks_weapons.grot_blasta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.grot_blasta, selected: true},
            ],
            slot2: [
                {...orks_weapons.close_combat_weapon_5, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: [],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Grot Bomm Launcha [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spiked_wheel,
        ],
        rangedWeapons: [
            orks_weapons.grot_guided_bomms,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.grot_guided_bomms, selected: true},
            ],
            slot2: [
                {...orks_weapons.spiked_wheel, selected: true},
            ],
        },
        abilities: [
            { name: "Furious Barrage", desc: "Each time this model makes a ranged attack that targets an enemy unit that contains five or more models, you can re-roll the Hit roll." },
        ],
        keywords: ["Mounted","Speed Freeks","Grot Bomm Launcha","Faction: Orks","Grots"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Grot Mega-Tank [Legends]",
        pts: 110,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 8,
            control: 4,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.armoured_hull_2,
        ],
        rangedWeapons: [
            orks_weapons.mega_tank_weapons,
            orks_weapons.twin_big_shoota_2,
            orks_weapons.twin_grotzooka,
            orks_weapons.twin_kustom_mega_blasta,
            orks_weapons.twin_rokkit_launcha,
            orks_weapons.twin_skorcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.mega_tank_weapons, selected: true},
            ],
            slot2: [
                {...orks_weapons.twin_big_shoota_2, selected: true},
            ],
            slot3: [
                {...orks_weapons.twin_grotzooka, selected: true},
            ],
            slot4: [
                {...orks_weapons.twin_kustom_mega_blasta, selected: true},
            ],
            slot5: [
                {...orks_weapons.twin_rokkit_launcha, selected: true},
            ],
            slot6: [
                {...orks_weapons.twin_skorcha, selected: true},
            ],
            slot7: [
                {...orks_weapons.armoured_hull_2, selected: true},
            ],
        },
        abilities: [
            { name: "Bizarrely Resilient", desc: "Each time an attack targets this model, worsen the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Vehicle","Grot Mega-Tank","Faction: Orks","Grots"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Grotmas Gitz [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: true,
        base_stats: {
            move: 10,
            tough: 3,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.bludgeoning_bag_of_gifts,
            orks_weapons.massive_gift_filled_gob,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.bludgeoning_bag_of_gifts, selected: true},
            ],
            slot2: [
                {...orks_weapons.massive_gift_filled_gob, selected: true},
            ],
        },
        abilities: [
            { name: "Bludgeoning Cheer", desc: "Each time this model ends a Normal, Advance, Fall Back or Charge move, select one enemy unit within 3\" of this model and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound. That enemy unit must then take a Battle-shock test." },
            { name: "Gifts for All! (Aura)", desc: "While a GRETCHIN unit is within 6\" of this model, that unit’s Thievin’ Scavengers ability is successful on D6 rolls of 2+, instead of rolls of 4+." },
        ],
        keywords: ["Epic Hero","Character","Mounted","Gretchin","Fly","Faction: Orks","Grotmas Gitz"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Hordeboss [Crucible]",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "More Lads, More Swagger", desc: "Improve this model's Leadership characteristic by 1 for every 5 models in this unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Boyz**\n- **Nobz**" },
        ],
        keywords: ["Character","Infantry","Faction: Orks","Hordeboss","Crucible","Grenades"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Hunta Rig",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 16,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.butcha_boyz,
            orks_weapons.savage_horns_and_hooves,
            orks_weapons.saw_blades,
        ],
        rangedWeapons: [
            orks_weapons.eavy_lobba,
            orks_weapons.stikka_kannon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.eavy_lobba, selected: true},
            ],
            slot2: [
                {...orks_weapons.stikka_kannon, selected: true},
            ],
            slot3: [
                {...orks_weapons.butcha_boyz, selected: true},
            ],
            slot4: [
                {...orks_weapons.savage_horns_and_hooves, selected: true},
            ],
            slot5: [
                {...orks_weapons.saw_blades, selected: true},
            ],
        },
        abilities: [
            { name: "On Da Hunt", desc: "For each model embarked within this TRANSPORT, add 1 to the Attacks characteristic of this model’s butcha boyz weapon (to a maximum of +6)." },
        ],
        keywords: ["Transport","Beast Snagga","Hunta Rig","Faction: Orks","Monster"],
        pointOptions: [],
        transport: "This model has a transport capacity of 21 BEAST SNAGGA INFANTRY models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Kannonwagon [Legends]",
        pts: 115,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 10,
            saving: 4,
            wounds: 16,
            leader: 7,
            control: 4,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spiked_ram,
        ],
        rangedWeapons: [
            orks_weapons.big_shoota,
            orks_weapons.supa_kannon_shell,
            orks_weapons.supa_kannon_frag,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.supa_kannon_shell, selected: true},
            ],
            slot3: [
                {...orks_weapons.supa_kannon_frag, selected: true},
            ],
            slot4: [
                {...orks_weapons.spiked_ram, selected: true},
            ],
        },
        abilities: [
            { name: "Big Booms", desc: "In your Shooting phase, just after selecting a target for this model’s supa-kannon, roll one D6 for the target unit and every other unit within 3\" of that unit: on a 5+, the unit being rolled for is struck by a concussive wave. After this model has finished making its attacks against that target unit this phase, each unit struck by a concussive wave this phase suffers D3 mortal wounds." },
        ],
        keywords: ["Vehicle","Transport","Kannonwagon","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 6 ORKS INFANTRY models. Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models. This model cannot transport GHAZGHKULL THRAKA models.",
    },
    {
        army: "orks",
        class: "characters",
        name: "Kaptin Badrukk [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 3,
            wounds: 6,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            orks_weapons.choppa_4,
        ],
        rangedWeapons: [
            orks_weapons.da_rippa_standard,
            orks_weapons.da_rippa_supercharge,
            orks_weapons.slugga_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.da_rippa_standard, selected: true},
            ],
            slot2: [
                {...orks_weapons.da_rippa_supercharge, selected: true},
            ],
            slot3: [
                {...orks_weapons.slugga_2, selected: true},
            ],
            slot4: [
                {...orks_weapons.choppa_4, selected: true},
            ],
        },
        abilities: [
            { name: "Flashiest Gitz", desc: "While this model is leading a unit, each time a model in that unit makes a ranged attack, you can re-roll the Hit roll." },
            { name: "Ded Glowy Ammo (Aura)", desc: "While an enemy INFANTRY unit is within 6\" of this model, subtract 1 from the Toughness characteristic of models in that unit." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- FLASH GITZ" },
        ],
        keywords: ["Epic Hero","Infantry","Character","Kaptin Badrukk","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Kill Krusha [Legends]",
        pts: 230,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 12,
            saving: 3,
            wounds: 22,
            leader: 7,
            control: 8,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.tracks_and_wheels_2,
        ],
        rangedWeapons: [
            orks_weapons.krusha_kannon_tankhamma_shell,
            orks_weapons.krusha_kannon_blast_burna,
            orks_weapons.rokkit_launcha,
            orks_weapons.twin_big_shoota,
            orks_weapons.skorcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.krusha_kannon_tankhamma_shell, selected: true},
            ],
            slot2: [
                {...orks_weapons.krusha_kannon_blast_burna, selected: true},
            ],
            slot3: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot4: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot5: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot6: [
                {...orks_weapons.tracks_and_wheels_2, selected: true},
            ],
        },
        abilities: [
            { name: "Da Biggest Booms", desc: "In your Shooting phase, just after selecting a target for this model’s krusha kannon, the target unit and every other enemy INFANTRY unit within 3\" of that unit must take a Battle-shock test." },
        ],
        keywords: ["Vehicle","Titanic","Transport","Kill Krusha","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ORKS INFANTRY models. Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models. This model cannot transport GHAZGHKULL THRAKA models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Kill Rig",
        pts: 155,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 16,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.butcha_boyz,
            orks_weapons.savage_horns_and_hooves,
            orks_weapons.saw_blades,
        ],
        rangedWeapons: [
            orks_weapons.wurrtower,
            orks_weapons.eavy_lobba,
            orks_weapons.stikka_kannon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.wurrtower, selected: true},
            ],
            slot2: [
                {...orks_weapons.eavy_lobba, selected: true},
            ],
            slot3: [
                {...orks_weapons.stikka_kannon, selected: true},
            ],
            slot4: [
                {...orks_weapons.butcha_boyz, selected: true},
            ],
            slot5: [
                {...orks_weapons.savage_horns_and_hooves, selected: true},
            ],
            slot6: [
                {...orks_weapons.saw_blades, selected: true},
            ],
        },
        abilities: [
            { name: "Spirit of Gork (Psychic)", desc: "At the start of the Fight phase, you can select one friendly ORKS unit within 12\" of this model and roll one D6: on a 1, this model suffers D3 mortal wounds; on a 2-5, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit; on a 6, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit and those weapons have the [LETHAL HITS] ability." },
        ],
        keywords: ["Transport","Psyker","Beast Snagga","Kill Rig","Faction: Orks","Monster"],
        pointOptions: [],
        transport: "This model has a transport capacity of 11 BEAST SNAGGA INFANTRY models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Kill Tank [Legends]",
        pts: 295,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 12,
            saving: 3,
            wounds: 24,
            leader: 6,
            control: 10,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.reinforced_ram,
        ],
        rangedWeapons: [
            orks_weapons.bursta_kannon,
            orks_weapons.giga_shoota,
            orks_weapons.skorcha,
            orks_weapons.twin_big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.bursta_kannon, selected: true},
            ],
            slot2: [
                {...orks_weapons.giga_shoota, selected: true},
            ],
            slot3: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot4: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot5: [
                {...orks_weapons.reinforced_ram, selected: true},
            ],
        },
        abilities: [
            { name: "Wall of Dakka", desc: "Each time this model makes a ranged attack that targets a unit within half range, add 1 to the Hit roll." },
            { name: "Damaged: 1-8 Wounds Remaining", desc: "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Titanic","Transport","Kill Tank","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ORKS INFANTRY models. Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models. It cannot transport GHAZGHKULL THRAKA models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Killa Kans",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 6,
            saving: 3,
            wounds: 5,
            leader: 8,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.kan_klaw,
        ],
        rangedWeapons: [
            orks_weapons.kan_shoota,
            orks_weapons.grotzooka,
            orks_weapons.rokkit_launcha_2,
            orks_weapons.skorcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kan_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.grotzooka, selected: true},
            ],
            slot3: [
                {...orks_weapons.rokkit_launcha_2, selected: true},
            ],
            slot4: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot5: [
                {...orks_weapons.kan_klaw, selected: true},
            ],
        },
        abilities: [
            { name: "Shooty Power Trip", desc: "Each time this unit is selected to shoot, you can roll one D6:\n- On a 1-2, this unit suffers D3 mortal wounds.\n- On a 3-4, until the end of the phase, add 1 to the Strength characteristic of ranged weapons equipped by models in this unit.\n- On a 5-6, until the end of the phase, add 1 to the Attacks characteristic of ranged weapons equipped by models in this unit." },
        ],
        keywords: ["Vehicle","Walker","Killa Kans","Faction: Orks","Grots"],
        pointOptions: [{ models: 3, pts: 250 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Kommandos",
        pts: 120,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.breacha_ram,
            orks_weapons.choppa_3,
            orks_weapons.close_combat_weapon_3,
            orks_weapons.power_klaw_3,
            orks_weapons.big_choppa,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
            orks_weapons.kustom_shoota,
            orks_weapons.burna,
            orks_weapons.rokkit_launcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.kustom_shoota, selected: true},
            ],
            slot3: [
                {...orks_weapons.burna, selected: true},
            ],
            slot4: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot5: [
                {...orks_weapons.breacha_ram, selected: true},
            ],
            slot6: [
                {...orks_weapons.choppa_3, selected: true},
            ],
            slot7: [
                {...orks_weapons.close_combat_weapon_3, selected: true},
            ],
            slot8: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
            slot9: [
                {...orks_weapons.big_choppa, selected: true},
            ],
        },
        abilities: [
            { name: "Sneaky Surprise", desc: "Enemy units cannot use the Fire Overwatch Stratagem to shoot at this unit." },
            { name: "Patrol Squad", desc: "At the start of the Declare Battle Formations step this unit can be split into two units, each containing five models.\n(when splitting a unit in this way, make a note of which models form each of the two new units. If you are splitting a unit that is equipped with 1 bomb squig and/or 1 distraction grot, only one of the new units can use that ability during the battle - make a note of which of the new units this will be)." },
            { name: "Distraction Grot", desc: "Once per battle, in your opponent’s Shooting phase, before making a saving throw for a model in this unit, it can deploy the distraction grot. If it does, until the end of the phase, models in this unit have a 5+ invulnerable save.\n\n**Designer’s Note:** *Place a Distraction Grot token next to the unit, removing it when this unit uses this ability.*" },
        ],
        keywords: ["Infantry","Grenades","Kommandos","Faction: Orks","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Kustom Boosta-blasta",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 4,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spiked_wheels,
        ],
        rangedWeapons: [
            orks_weapons.burna_exhausts,
            orks_weapons.rivet_kannon,
            orks_weapons.grot_blasta,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.burna_exhausts, selected: true},
            ],
            slot2: [
                {...orks_weapons.rivet_kannon, selected: true},
            ],
            slot3: [
                {...orks_weapons.grot_blasta, selected: true},
            ],
            slot4: [
                {...orks_weapons.spiked_wheels, selected: true},
            ],
        },
        abilities: [
            { name: "Rivetin’ Dakka", desc: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with a rivet kannon. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes a ranged attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Vehicle","Kustom Boosta-blasta","Faction: Orks","Grenades","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Lifta Wagon [Legends]",
        pts: 135,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 16,
            leader: 7,
            control: 5,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.deff_rolla,
            orks_weapons.tracks_and_wheels,
            orks_weapons.grabbin_klaw,
            orks_weapons.wreckin_ball,
        ],
        rangedWeapons: [
            orks_weapons.lifta_droppa,
            orks_weapons.big_shoota,
            orks_weapons.rokkit_launcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.lifta_droppa, selected: true},
            ],
            slot2: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot3: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot4: [
                {...orks_weapons.deff_rolla, selected: true},
            ],
            slot5: [
                {...orks_weapons.tracks_and_wheels, selected: true},
            ],
            slot6: [
                {...orks_weapons.grabbin_klaw, selected: true},
            ],
            slot7: [
                {...orks_weapons.wreckin_ball, selected: true},
            ],
        },
        abilities: [
            { name: "Da Bigger Dey Are, da Better Dey Drop", desc: "Each time an attack made with this model’s lifta-droppa destroys an enemy model that has the Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 3+ instead of on a 6." },
        ],
        keywords: ["Vehicle","Lifta Wagon","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Lootas",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 1,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Dat’s Our Loot!", desc: "Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If that attack targets a unit that is within range of an objective marker, you can re-roll the Hit roll instead." },
        ],
        keywords: ["Infantry","Lootas","Faction: Orks"],
        pointOptions: [{ models: 5, pts: 100 }],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Mad Dok Grotsnik [Legends]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.power_klaw_4,
            orks_weapons.urty_syringe,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.power_klaw_4, selected: true},
            ],
            slot3: [
                {...orks_weapons.urty_syringe, selected: true},
            ],
        },
        abilities: [
            { name: "Mad Dok", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "One Scalpel Short of a Medpack", desc: "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Fell Back." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- BURNA BOYZ\n- TANKBUSTAS\n- LOOTAS\n- NOBZ" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Painboy","Mad Dok Grotsnik","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Mega Dread [Legends]",
        pts: 225,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 16,
            leader: 7,
            control: 5,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.dread_killsaw,
            orks_weapons.dread_rippa_klaw,
            orks_weapons.stompy_feet_2,
        ],
        rangedWeapons: [
            orks_weapons.boombits,
            orks_weapons.killkannon_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.boombits, selected: true},
            ],
            slot2: [
                {...orks_weapons.killkannon_2, selected: true},
            ],
            slot3: [
                {...orks_weapons.dread_killsaw, selected: true},
            ],
            slot4: [
                {...orks_weapons.dread_rippa_klaw, selected: true},
            ],
            slot5: [
                {...orks_weapons.stompy_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Mega Carnage", desc: "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds." },
            { name: "Dead Rippy", desc: "If this model is equipped with 2 dread killsaws, those weapons have the [TWIN-LINKED] ability. If this model is equipped with 2 dread rippa klaws, those weapons have the [TWIN-LINKED] ability." },
        ],
        keywords: ["Vehicle","Mega Dread","Walker","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Meganobz",
        pts: 65,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 2,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.twin_killsaw,
            orks_weapons.power_klaw_3,
            orks_weapons.killsaw_2,
        ],
        rangedWeapons: [
            orks_weapons.kustom_shoota,
            orks_weapons.kombi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kustom_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.kombi_weapon, selected: true},
            ],
            slot3: [
                {...orks_weapons.twin_killsaw, selected: true},
            ],
            slot4: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
            slot5: [
                {...orks_weapons.killsaw_2, selected: true},
            ],
        },
        abilities: [
            { name: "Krumpin’ Time", desc: "While the Waaagh! is active for your army, models in this unit have the Feel No Pain 5+ ability." },
        ],
        keywords: ["Infantry","Grenades","Meganobz","Faction: Orks","Mega Armour"],
        pointOptions: [{ models: 3, pts: 95 }, { models: 4, pts: 160 }, { models: 6, pts: 190 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Megatrakk Scrapjet",
        pts: 75,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 4,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.nose_drill,
        ],
        rangedWeapons: [
            orks_weapons.rokkit_cannon,
            orks_weapons.wing_missiles,
            orks_weapons.twin_big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.rokkit_cannon, selected: true},
            ],
            slot2: [
                {...orks_weapons.wing_missiles, selected: true},
            ],
            slot3: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot4: [
                {...orks_weapons.nose_drill, selected: true},
            ],
        },
        abilities: [
            { name: "Drill Through", desc: "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds." },
        ],
        keywords: ["Vehicle","Megatrakk Scrapjet","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Mek",
        pts: 45,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.wrench,
            orks_weapons.killsaw_3,
        ],
        rangedWeapons: [
            orks_weapons.kustom_mega_slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kustom_mega_slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.wrench, selected: true},
            ],
            slot3: [
                {...orks_weapons.killsaw_3, selected: true},
            ],
        },
        abilities: [
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- LOOTAS\n- MEK GUNZ\n- NOBZ\n- TANKBUSTAS" },
            { name: "Know-wotz", desc: "While this model is within 3\" of one or more friendly ORKS VEHICLE units, this model has the Lone Operative ability." },
            { name: "Mekaniak", desc: "At the end of your Movement phase, you can select one friendly ORKS VEHICLE model within 3\" of this model. That VEHICLE model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that VEHICLE model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn." },
        ],
        keywords: ["Character","Infantry","Mek","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Mek Gunz",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 3,
            tough: 5,
            saving: 5,
            wounds: 6,
            leader: 8,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.grot_crew,
        ],
        rangedWeapons: [
            orks_weapons.smasha_gun,
            orks_weapons.w_1_2_bubblechukka_big_bubble,
            orks_weapons.w_3_4_bubblechukka_wobbly_bubble,
            orks_weapons.w_5_6_bubblechukka_dense_bubble,
            orks_weapons.kustom_mega_kannon,
            orks_weapons.traktor_kannon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.smasha_gun, selected: true},
            ],
            slot2: [
                {...orks_weapons.w_1_2_bubblechukka_big_bubble, selected: true},
            ],
            slot3: [
                {...orks_weapons.w_3_4_bubblechukka_wobbly_bubble, selected: true},
            ],
            slot4: [
                {...orks_weapons.w_5_6_bubblechukka_dense_bubble, selected: true},
            ],
            slot5: [
                {...orks_weapons.kustom_mega_kannon, selected: true},
            ],
            slot6: [
                {...orks_weapons.traktor_kannon, selected: true},
            ],
            slot7: [
                {...orks_weapons.grot_crew, selected: true},
            ],
        },
        abilities: [
            { name: "Splat!", desc: "Each time a model in this unit makes a ranged attack that targets a unit that is at its Starting Strength (excluding MONSTERS and VEHICLES), re-roll a Hit roll of 1." },
        ],
        keywords: ["Vehicle","Mek Gunz","Faction: Orks","Grots"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Meka-Dread [Legends]",
        pts: 210,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 8,
            tough: 10,
            saving: 2,
            wounds: 16,
            leader: 7,
            control: 5,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.dread_killsaw,
            orks_weapons.dread_rippa_klaw,
            orks_weapons.stompy_feet_2,
        ],
        rangedWeapons: [
            orks_weapons.killkannon_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.killkannon_2, selected: true},
            ],
            slot2: [
                {...orks_weapons.dread_killsaw, selected: true},
            ],
            slot3: [
                {...orks_weapons.dread_rippa_klaw, selected: true},
            ],
            slot4: [
                {...orks_weapons.stompy_feet_2, selected: true},
            ],
        },
        abilities: [
            { name: "Mekaniak", desc: "At the end of your Movement phase, you can select one friendly ORKS VEHICLE model within 3\" of this model. That VEHICLE model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that VEHICLE model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn." },
            { name: "Dead Rippy", desc: "If this model is equipped with 2 dread killsaws, those weapons have the [TWIN-LINKED] ability. If this model is equipped with 2 dread rippa klaws, those weapons have the [TWIN-LINKED] ability." },
        ],
        keywords: ["Vehicle","Walker","Faction: Orks","Meka-Dread"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Mekboy Workshop [Legends]",
        pts: 80,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: "-",
            tough: 9,
            saving: 4,
            wounds: 10,
            leader: 7,
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
            { name: "Ramshackle Cover", desc: "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack." },
            { name: "Workshop", desc: "When this FORTIFICATION is set up, all parts of it must be set up within 1” of another part. At the end of your Movement phase, each friendly ORKS VEHICLE model within 12” of this FORTIFICATION can regain up to D3 lost wounds (roll separately for each model). Each model can only be affected by this ability once per turn." },
        ],
        keywords: ["Fortification","Vehicle","Mekboy Workshop","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Morkanaut",
        pts: 280,
        units: 2,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 8,
            tough: 12,
            saving: 3,
            wounds: 20,
            leader: 7,
            control: 8,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.klaw_of_mork_strike,
            orks_weapons.klaw_of_mork_sweep,
        ],
        rangedWeapons: [
            orks_weapons.kustom_mega_zappa,
            orks_weapons.kustom_mega_blasta,
            orks_weapons.rokkit_launcha,
            orks_weapons.twin_big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kustom_mega_zappa, selected: true},
            ],
            slot2: [
                {...orks_weapons.kustom_mega_blasta, selected: true},
            ],
            slot3: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot4: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot5: [
                {...orks_weapons.klaw_of_mork_strike, selected: true},
            ],
            slot6: [
                {...orks_weapons.klaw_of_mork_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Clankin’ Forward", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding MONSTER and VEHICLE models) and terrain features that are 4\" or less in height as if they were not there." },
            { name: "Big an’ Shooty", desc: "Each time this model makes a ranged attack, if the Waaagh! is active for your army, add 1 to the Hit roll." },
        ],
        keywords: ["Vehicle","Titanic","Towering","Transport","Walker","Morkanaut","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ORKS INFANTRY models (excluding GHAZGHKULL THRAKA). Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models.",
    },
    {
        army: "orks",
        class: "characters",
        name: "Mozrog Skragbad",
        pts: 145,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 10,
            tough: 8,
            saving: 3,
            wounds: 8,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            orks_weapons.big_chompa_s_jaws,
            orks_weapons.gutrippa,
        ],
        rangedWeapons: [
            orks_weapons.thump_gun,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.thump_gun, selected: true},
            ],
            slot2: [
                {...orks_weapons.big_chompa_s_jaws, selected: true},
            ],
            slot3: [
                {...orks_weapons.gutrippa, selected: true},
            ],
        },
        abilities: [
            { name: "Da Bigger Dey Iz…", desc: "Each time this model makes an attack that targets a **Monster** or **Vehicle** unit, add 1 to the Damage characteristic of that attack. Each time this model makes an attack that targets a **Titanic** unit, add 2 to the Damage characteristic of that attack instead." },
            { name: "One Last Kill", desc: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if it has not fought this phase, roll on D6; on a 4+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- SQUIGHOG BOYZ" },
        ],
        keywords: ["Epic Hero","Character","Beast Snagga","Mozrog Skragbad","Faction: Orks","Mounted","Warboss"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Nob on Smasha Squig",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.big_choppa_3,
            orks_weapons.squig_jaws,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.big_choppa_3, selected: true},
            ],
            slot3: [
                {...orks_weapons.squig_jaws, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: [],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Nob with Waaagh! Banner [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: 4
        },
        meleeWeapons: [
            orks_weapons.waaagh_banner,
        ],
        rangedWeapons: [
            orks_weapons.kustom_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kustom_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.waaagh_banner, selected: true},
            ],
        },
        abilities: [
            { name: "Plant the Waaagh! Banner", desc: "Once per battle, at the start of the battle round, this model can use this ability. If it does, until the start of the next battle round, this model’s unit gains the benefits of the Waaagh! ability as if you had called a Waaagh! this battle round." },
            { name: "Da Boss Iz Watchin’", desc: "While this model is gaining the benefits of the Waaagh! ability, it has a 4+ invulnerable save and an Objective Control characteristic of 5." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- NOBZ" },
        ],
        keywords: ["Character","Infantry","Nob with Waaagh! Banner","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Nobz",
        pts: 105,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.big_choppa_2,
            orks_weapons.power_klaw_3,
            orks_weapons.close_combat_weapon_6,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
            orks_weapons.kombi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.kombi_weapon, selected: true},
            ],
            slot3: [
                {...orks_weapons.big_choppa_2, selected: true},
            ],
            slot4: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
            slot5: [
                {...orks_weapons.close_combat_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Da Boss’ Ladz", desc: "While a WARBOSS model is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll." },
            { name: "Ammo Runt", desc: "Once per battle for each ammo runt this unit has, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] ability.\nDesigner’s Note: Place the relevant number of Ammo Runt tokens next to the unit, removing one each time the unit uses this ability." },
        ],
        keywords: ["Infantry","Nobz","Grenades","Faction: Orks"],
        pointOptions: [{ models: 5, pts: 210 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Nobz on Warbikes [Legends]",
        pts: 125,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.power_stabba,
            orks_weapons.choppa,
            orks_weapons.big_choppa_2,
            orks_weapons.power_klaw_3,
            orks_weapons.killsaw_2,
            orks_weapons.close_combat_weapon_6,
        ],
        rangedWeapons: [
            orks_weapons.twin_dakkagun,
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_dakkagun, selected: true},
            ],
            slot2: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot3: [
                {...orks_weapons.power_stabba, selected: true},
            ],
            slot4: [
                {...orks_weapons.choppa, selected: true},
            ],
            slot5: [
                {...orks_weapons.big_choppa_2, selected: true},
            ],
            slot6: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
            slot7: [
                {...orks_weapons.killsaw_2, selected: true},
            ],
            slot8: [
                {...orks_weapons.close_combat_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Drive-by Krumpin'", desc: "Each time this unit Consolidates, each model in this unit can move up to 6\" instead of up to 3\"." },
            { name: "Speed Freeks Mob", desc: "If a model from your army with the Leader ability can be attached to a **Warbikers** unit, it can be attached to this unit instead." },
        ],
        keywords: ["Mounted","Speed Freeks","Nobz on Warbikes","Grenades","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Painboss",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.beast_snagga_klaw_2,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.beast_snagga_klaw_2, selected: true},
            ],
        },
        abilities: [
            { name: "Dok’s Toolz", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "Sawbonez", desc: "At the end of your Movement phase, select one friendly BEAST SNAGGA CHARACTER model within 3\" of this model. That model is healed and regains up to 3 lost wounds. Each model can only be healed once per turn" },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- BEAST SNAGGA BOYZ" },
            { name: "Grot Orderly", desc: "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit.\n\n**Designer’s Note:** *Place a Grot Orderly token next to the unit, removing it once this ability has been used.*" },
        ],
        keywords: ["Character","Infantry","Beast Snagga","Faction: Orks","Painboss"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Painboy",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 3,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.urty_syringe,
            orks_weapons.power_klaw_3,
        ],
        rangedWeapons: [

        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.urty_syringe, selected: true},
            ],
            slot2: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
        },
        abilities: [
            { name: "Dok’s Toolz", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
            { name: "Hold Still and Say ‘Aargh!’", desc: "Each time an attack made by this model with its ’urty syringe scores a Critical Wound against a unit (excluding VEHICLE units), that unit suffers D6 mortal wounds." },
            { name: "Grot Orderly", desc: "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit.\n\n**Designer’s Note:** *Place a Grot Orderly token next to the unit, removing it once this ability has been used.*" },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- NOBZ\n- LOOTAS\n- BURNA BOYZ\n- TANKBUSTAS" },
        ],
        keywords: ["Infantry","Character","Painboy","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Painboy on Warbike [Legends]",
        pts: 85,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.urty_syringe,
            orks_weapons.power_klaw_3,
            orks_weapons.killsaw_2,
        ],
        rangedWeapons: [
            orks_weapons.twin_dakkagun,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_dakkagun, selected: true},
            ],
            slot2: [
                {...orks_weapons.urty_syringe, selected: true},
            ],
            slot3: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
            slot4: [
                {...orks_weapons.killsaw_2, selected: true},
            ],
        },
        abilities: [
            { name: "Hold Still and Say ‘Aargh!’", desc: "Each time an attack made by this model with its ’urty syringe scores a Critical Wound against a unit (excluding VEHICLE units), that unit suffers D6 mortal wounds." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- WARBIKERS" },
            { name: "Dok’s Toolz", desc: "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability." },
        ],
        keywords: ["Mounted","Speed Freeks","Character","Painboy on Warbike","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Rukkatrukk Squigbuggy",
        pts: 95,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 4,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.saw_blades_2,
        ],
        rangedWeapons: [
            orks_weapons.sawn_off_shotgun,
            orks_weapons.squig_launchas,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.sawn_off_shotgun, selected: true},
            ],
            slot2: [
                {...orks_weapons.squig_launchas, selected: true},
            ],
            slot3: [
                {...orks_weapons.saw_blades_2, selected: true},
            ],
        },
        abilities: [
            { name: "Buzzer Squigs", desc: "In your Shooting phase, after this model has shot, select one enemy unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks made with squig-launchas and roll one D6; on a 4+, until the end of your opponent's next turn, that enemy unit is hindered. While a unit is hindered, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it." },
            { name: "Squig Mine", desc: "Once per battle, at the start of any phase, select one enemy unit within 3\" of this model and roll one D6: on a 4+, that enemy unit suffers D6 mortal wounds.\nDesigner’s Note: Place a Squig Mine token next to the model, removing it once this ability has been used." },
        ],
        keywords: ["Vehicle","Faction: Orks","Rukkatrukk Squigbuggy","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Runtherd",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.grot_smacka,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.grot_smacka, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: [],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Shokkjump Dragsta",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 7,
            saving: 4,
            wounds: 9,
            leader: 7,
            control: 3,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.saw_blades_2,
        ],
        rangedWeapons: [
            orks_weapons.kustom_shokk_rifle,
            orks_weapons.rokkit_launcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kustom_shokk_rifle, selected: true},
            ],
            slot2: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot3: [
                {...orks_weapons.saw_blades_2, selected: true},
            ],
        },
        abilities: [
            { name: "Shokk Tunnel", desc: "Each time this model is selected to Advance, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models instead of making an Advance move (this model is still considered to have Advanced this turn)." },
        ],
        keywords: ["Vehicle","Shokkjump Dragsta","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Skorchas [Legends]",
        pts: 45,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spiked_wheel,
        ],
        rangedWeapons: [
            orks_weapons.skorcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot2: [
                {...orks_weapons.spiked_wheel, selected: true},
            ],
        },
        abilities: [
            { name: "Pyromaniaks", desc: "Each time a model in this unit makes a ranged attack with a Torrent weapon that targets an enemy unit within 6\", re-roll a Wound roll of 1. If the target of that attack is also within range of an objective marker, you can re-roll the Wound roll instead." },
        ],
        keywords: ["Mounted","Speed Freeks","Faction: Orks","Skorchas"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Squiggoth [Legends]",
        pts: 150,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 10,
            tough: 10,
            saving: 3,
            wounds: 18,
            leader: 7,
            control: 5,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.gorin_horns_sweep,
            orks_weapons.gorin_horns_strike,
        ],
        rangedWeapons: [
            orks_weapons.kannon_shell_3,
            orks_weapons.kannon_frag_3,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.kannon_shell_3, selected: true},
            ],
            slot2: [
                {...orks_weapons.kannon_frag_3, selected: true},
            ],
            slot3: [
                {...orks_weapons.gorin_horns_sweep, selected: true},
            ],
            slot4: [
                {...orks_weapons.gorin_horns_strike, selected: true},
            ],
        },
        abilities: [
            { name: "Trample", desc: "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds." },
            { name: "Damaged: 1-6 Wounds Remaining", desc: "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." },
        ],
        keywords: ["Monster","Transport","Squiggoth","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 10 ORKS INFANTRY models. If this model is equipped with a kannon, it has a transport capacity of 6 ORKS INFANTRY models. It cannot transport MEGA ARMOUR, JUMP PACK or GHAZGHKULL THRAKA models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Squighog Boy",
        pts: null,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 7,
            saving: 4,
            wounds: 3,
            leader: 7,
            control: 2,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.stikka_melee,
            orks_weapons.squig_jaws,
        ],
        rangedWeapons: [
            orks_weapons.stikka_ranged,
            orks_weapons.saddlegit_weapons,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.stikka_ranged, selected: true},
            ],
            slot2: [
                {...orks_weapons.saddlegit_weapons, selected: true},
            ],
            slot3: [
                {...orks_weapons.stikka_melee, selected: true},
            ],
            slot4: [
                {...orks_weapons.squig_jaws, selected: true},
            ],
        },
        abilities: [

        ],
        keywords: [],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Stompa",
        pts: 800,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 10,
            tough: 14,
            saving: 2,
            wounds: 30,
            leader: 6,
            control: 12,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.mega_choppa_strike,
            orks_weapons.mega_choppa_sweep,
        ],
        rangedWeapons: [
            orks_weapons.deffkannon,
            orks_weapons.supa_gatler,
            orks_weapons.supa_rokkits,
            orks_weapons.big_shoota,
            orks_weapons.skorcha,
            orks_weapons.twin_big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.deffkannon, selected: true},
            ],
            slot2: [
                {...orks_weapons.supa_gatler, selected: true},
            ],
            slot3: [
                {...orks_weapons.supa_rokkits, selected: true},
            ],
            slot4: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot5: [
                {...orks_weapons.skorcha, selected: true},
            ],
            slot6: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot7: [
                {...orks_weapons.mega_choppa_strike, selected: true},
            ],
            slot8: [
                {...orks_weapons.mega_choppa_sweep, selected: true},
            ],
        },
        abilities: [
            { name: "Damaged: 1-10 Wounds Remaining", desc: "While this model has 1-10 wounds remaining, subtract 6 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll." },
            { name: "Waaagh! Effigy (Aura)", desc: "While a friendly ORKS unit is within 12\" of this model, each time you take a Battle-shock test for that unit, add 1 to that test." },
            { name: "Stompin’ Forward", desc: "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding **Titanic** models) and terrain features that are 4\" or less in height as if they were not there." },
        ],
        keywords: ["Vehicle","Transport","Titanic","Towering","Walker","Stompa","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 22 ORKS INFANTRY models. Each MEGA ARMOUR or JUMP PACK model takes up the space of 2 models. The GHAZGHKULL THRAKA model takes up the space of 15 models.",
    },
    {
        army: "orks",
        class: "other",
        name: "Stormboyz",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 5,
            saving: 5,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.choppa_3,
            orks_weapons.power_klaw_3,
        ],
        rangedWeapons: [
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.choppa_3, selected: true},
            ],
            slot3: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
        },
        abilities: [
            { name: "Full Throttle", desc: "This unit is eligible to declare a charge in a turn in which it Advanced or Fell Back." },
        ],
        keywords: ["Infantry","Jump Pack","Fly","Grenades","Stormboyz","Faction: Orks"],
        pointOptions: [{ models: 5, pts: 130 }],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Tankbustas",
        pts: 140,
        units: 5,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 2,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.smash_hammer,
            orks_weapons.choppa_2,
            orks_weapons.close_combat_weapon_6,
        ],
        rangedWeapons: [
            orks_weapons.rokkit_pistol,
            orks_weapons.rokkit_launcha,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.rokkit_pistol, selected: true},
            ],
            slot2: [
                {...orks_weapons.rokkit_launcha, selected: true},
            ],
            slot3: [
                {...orks_weapons.smash_hammer, selected: true},
            ],
            slot4: [
                {...orks_weapons.choppa_2, selected: true},
            ],
            slot5: [
                {...orks_weapons.close_combat_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Tank Hunters", desc: "Each time a model in this unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the Hit roll and add 1 to the Wound roll." },
            { name: "Attached Unit", desc: "If a CHARACTER unit from your army with the Leader ability can be attached to a LOOTAS unit, it can be attached to this unit instead." },
            { name: "Pulsa Rokkit", desc: "Once per battle, when the bearer’s unit is selected to shoot in your Shooting phase, the bearer can use its pulsa rokkit. If it does, until the end of the phase, improve the Strength and Armour Penetration characteristics of ranged weapons equipped by models in the bearer’s unit by 1." },
        ],
        keywords: ["Infantry","Tankbustas","Faction: Orks","Grenades"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "transports",
        name: "Trukk",
        pts: 70,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 8,
            saving: 4,
            wounds: 10,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.wreckin_ball,
            orks_weapons.spiked_wheel_2,
        ],
        rangedWeapons: [
            orks_weapons.big_shoota,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.wreckin_ball, selected: true},
            ],
            slot3: [
                {...orks_weapons.spiked_wheel_2, selected: true},
            ],
        },
        abilities: [
            { name: "Grot Riggers", desc: "At the start of your Command phase, this model regains 1 lost wound." },
        ],
        keywords: ["Dedicated Transport","Vehicle","Transport","Trukk","Faction: Orks"],
        pointOptions: [],
        transport: "This model has a transport capacity of 12 ORKS INFANTRY models. Each MEGA ARMOUR model takes up the space of 2 models. It cannot transport JUMP PACK or GHAZGHKULL THRAKA models.",
    },
    {
        army: "orks",
        class: "characters",
        name: "Ufthak Blackhawk [Legends]",
        pts: 70,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.princess_jaws,
            orks_weapons.snazzhammer,
        ],
        rangedWeapons: [
            orks_weapons.shokk_rifle,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.shokk_rifle, selected: true},
            ],
            slot2: [
                {...orks_weapons.princess_jaws, selected: true},
            ],
            slot3: [
                {...orks_weapons.snazzhammer, selected: true},
            ],
        },
        abilities: [
            { name: "Tellyporta Tech", desc: "While this model is leading a unit, models in that unit have the Deep Strike ability." },
            { name: "Gargantsmasha", desc: "Each time this model makes an attack that targets a **Titanic* unit, you can re-roll the Hit roll and you can re-roll the Wound roll." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- NOBZ" },
        ],
        keywords: ["Infantry","Epic Hero","Character","Grenades","Warboss","Faction: Orks","Ufthak Blackhawk"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Upstart Gretchin [Crucible]",
        pts: 40,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 2,
            saving: 7,
            wounds: 3,
            leader: 8,
            control: 2,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Skulkin' Grot", desc: "While this model is leading a unit, models in that unit have the Infiltrators and Stealth abilities." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Gretchin**" },
        ],
        keywords: ["Character","Infantry","Faction: Orks","Crucible","Grenades","Grots","Upstart Gretchin"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Warbikers",
        pts: 65,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 4,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.close_combat_weapon_3,
            orks_weapons.choppa_3,
            orks_weapons.big_choppa_2,
            orks_weapons.power_klaw_3,
        ],
        rangedWeapons: [
            orks_weapons.twin_dakkagun,
            orks_weapons.slugga,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_dakkagun, selected: true},
            ],
            slot2: [
                {...orks_weapons.slugga, selected: true},
            ],
            slot3: [
                {...orks_weapons.close_combat_weapon_3, selected: true},
            ],
            slot4: [
                {...orks_weapons.choppa_3, selected: true},
            ],
            slot5: [
                {...orks_weapons.big_choppa_2, selected: true},
            ],
            slot6: [
                {...orks_weapons.power_klaw_3, selected: true},
            ],
        },
        abilities: [
            { name: "Drive-by Dakka", desc: "Each time a model in this unit makes a ranged attack that targets a unit within 9\", improve the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Mounted","Grenades","Warbikers","Faction: Orks","Speed Freeks"],
        pointOptions: [{ models: 3, pts: 130 }],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Warboss",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 4,
            wounds: 6,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.attack_squig,
            orks_weapons.big_choppa_4,
            orks_weapons.power_klaw_5,
        ],
        rangedWeapons: [
            orks_weapons.twin_slugga,
            orks_weapons.kombi_weapon,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_slugga, selected: true},
            ],
            slot2: [
                {...orks_weapons.kombi_weapon, selected: true},
            ],
            slot3: [
                {...orks_weapons.attack_squig, selected: true},
            ],
            slot4: [
                {...orks_weapons.big_choppa_4, selected: true},
            ],
            slot5: [
                {...orks_weapons.power_klaw_5, selected: true},
            ],
        },
        abilities: [
            { name: "Might is Right", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Da Biggest and da Best", desc: "While the Waaagh! is active for your army, add 4 to the Attacks characteristic of this model’s melee weapons." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- BOYZ\n- NOBZ" },
        ],
        keywords: ["Warboss","Character","Infantry","Grenades","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Warboss in Mega Armour",
        pts: 80,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 5,
            tough: 6,
            saving: 2,
            wounds: 7,
            leader: 6,
            control: 1,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.uge_choppa,
        ],
        rangedWeapons: [
            orks_weapons.big_shoota_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.big_shoota_2, selected: true},
            ],
            slot2: [
                {...orks_weapons.uge_choppa, selected: true},
            ],
        },
        abilities: [
            { name: "Might is Right", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "Dead Brutal", desc: "While the Waaagh! is active for your army, this model's 'uge choppa has a Damage characteristic of 3." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- MEGANOBZ" },
        ],
        keywords: ["Character","Infantry","Warboss in Mega Armour","Faction: Orks","Mega Armour","Warboss"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Warboss on Warbike [Legends]",
        pts: 75,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 7,
            leader: 6,
            control: 2,
            invuln: "Invulnerable Save (5+)"
        },
        meleeWeapons: [
            orks_weapons.killsaw,
            orks_weapons.big_choppa_4,
            orks_weapons.power_klaw_5,
        ],
        rangedWeapons: [
            orks_weapons.twin_dakkagun,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_dakkagun, selected: true},
            ],
            slot2: [
                {...orks_weapons.killsaw, selected: true},
            ],
            slot3: [
                {...orks_weapons.big_choppa_4, selected: true},
            ],
            slot4: [
                {...orks_weapons.power_klaw_5, selected: true},
            ],
        },
        abilities: [
            { name: "Speedboss", desc: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
            { name: "High-octane Fuel", desc: "Each time this model’s unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this model’s unit." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- WARBIKERS\n- NOBZ ON WARBIKES" },
        ],
        keywords: ["Mounted","Character","Speed Freeks","Grenades","Warboss","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Warbuggies [Legends]",
        pts: 40,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spiked_wheel_2,
        ],
        rangedWeapons: [
            orks_weapons.twin_big_shoota,
            orks_weapons.rack_of_rokkits,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.rack_of_rokkits, selected: true},
            ],
            slot3: [
                {...orks_weapons.spiked_wheel_2, selected: true},
            ],
        },
        abilities: [
            { name: "Outflank", desc: "When this unit arrives from Strategic Reserves, it can be set up within your opponent’s deployment zone (all other restrictions still apply)." },
        ],
        keywords: ["Mounted","Speed Freeks","Warbuggies","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Warphead [Crucible]",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [

        ],
        rangedWeapons: [

        ],
        weapon_options: {

        },
        abilities: [
            { name: "Channellin' da Waaagh!", desc: "Each time this model attacks with a Psychic weapon, until the end of the phase, improve the Attacks, Strength and Damage characteristics of that weapon by 1 for every 5 models in this unit. While this unit contains 10 or more models, those weapons have the **[HAZARDOUS]** ability." },
            { name: "Leader", desc: "This model can be attached to the following units:\n- **Boyz**\n- **Nobz**\n- **Gretchin**" },
        ],
        keywords: ["Character","Infantry","Faction: Orks","Crucible","Psyker","Warphead"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Wartrakks [Legends]",
        pts: 50,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: true,
        base_stats: {
            move: 12,
            tough: 6,
            saving: 4,
            wounds: 6,
            leader: 7,
            control: 2,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.spiked_wheel,
        ],
        rangedWeapons: [
            orks_weapons.twin_big_shoota,
            orks_weapons.rack_of_rokkits,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.twin_big_shoota, selected: true},
            ],
            slot2: [
                {...orks_weapons.rack_of_rokkits, selected: true},
            ],
            slot3: [
                {...orks_weapons.spiked_wheel, selected: true},
            ],
        },
        abilities: [
            { name: "Drive-by Dakka", desc: "Each time a model in this unit makes a ranged attack that targets a unit within 9\", improve the Armour Penetration characteristic of that attack by 1." },
        ],
        keywords: ["Mounted","Speed Freeks","Wartrakks","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "other",
        name: "Wazbom Blastajet",
        pts: 175,
        units: 1,
        img: null,
        leader: false,
        warlord: false,
        legends: false,
        base_stats: {
            move: "20+",
            tough: 9,
            saving: 3,
            wounds: 12,
            leader: 7,
            control: 0,
            invuln: "Invulnerable Save (6+)"
        },
        meleeWeapons: [
            orks_weapons.armoured_hull,
        ],
        rangedWeapons: [
            orks_weapons.smasha_gun_2,
            orks_weapons.twin_wazbom_mega_kannon,
            orks_weapons.twin_tellyport_mega_blasta,
            orks_weapons.twin_supa_shoota_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.smasha_gun_2, selected: true},
            ],
            slot2: [
                {...orks_weapons.twin_wazbom_mega_kannon, selected: true},
            ],
            slot3: [
                {...orks_weapons.twin_tellyport_mega_blasta, selected: true},
            ],
            slot4: [
                {...orks_weapons.twin_supa_shoota_2, selected: true},
            ],
            slot5: [
                {...orks_weapons.armoured_hull, selected: true},
            ],
        },
        abilities: [
            { name: "Blastajet Attack Run", desc: "Each time this model makes a ranged attack that targets a unit that cannot FLY, re-roll a Hit roll of 1." },
            { name: "Blastajet Force Field", desc: "The bearer has a 4+ invulnerable save, but it loses the **Grenades** keyword." },
        ],
        keywords: ["Vehicle","Aircraft","Fly","Grenades","Wazbom Blastajet","Faction: Orks","Speed Freeks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Wazdakka Gutsmek",
        pts: 175,
        units: 1,
        img: null,
        leader: false,
        warlord: true,
        legends: false,
        base_stats: {
            move: 14,
            tough: 8,
            saving: 3,
            wounds: 10,
            leader: 6,
            control: 3,
            invuln: "Invulnerable Save (4+)"
        },
        meleeWeapons: [
            orks_weapons.fixits_wrench,
            orks_weapons.grabba_dragga,
            orks_weapons.speeding_bulk_and_flaming_exhaust,
        ],
        rangedWeapons: [
            orks_weapons.psyko_gatler,
            orks_weapons.grabba_dragga_2,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.psyko_gatler, selected: true},
            ],
            slot2: [
                {...orks_weapons.grabba_dragga_2, selected: true},
            ],
            slot3: [
                {...orks_weapons.fixits_wrench, selected: true},
            ],
            slot4: [
                {...orks_weapons.grabba_dragga, selected: true},
            ],
            slot5: [
                {...orks_weapons.speeding_bulk_and_flaming_exhaust, selected: true},
            ],
        },
        abilities: [
            { name: "Fixit da Grot", desc: "At the start of your Command phase, this model regains up to D3 lost wounds." },
            { name: "Waaagh! Wazdakka", desc: "If this model is your **Warlord**, **Warbiker** units from your army have the **Battleline** keyword." },
            { name: "Throttlerokkit Shokka Engine", desc: "In your Command phase, select one of the abilities in the Throttlerokkit Shokka Engine section. Until the start of your next Command phase, this model has that ability." },
        ],
        keywords: ["Epic Hero","Character","Faction: Orks","Wazdakka Gutsmek","Mounted","Vehicle","Speed Freeks","Smoke"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Weirdboy",
        pts: 65,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.weirdboy_staff,
        ],
        rangedWeapons: [
            orks_weapons.eadbanger,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.eadbanger, selected: true},
            ],
            slot2: [
                {...orks_weapons.weirdboy_staff, selected: true},
            ],
        },
        abilities: [
            { name: "Da Jump (Psychic)", desc: "Once per turn, at the end of your Movement phase, one WEIRDBOY from your army can use this ability. If it does, roll one D6: on a 1, that WEIRDBOY’s unit suffers D6 mortal wounds; on a 2+, remove this WEIRDBOY’s unit from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models." },
            { name: "Waaagh! Energy", desc: "While this model is leading a unit, add 1 to the Strength and Damage characteristics of this model’s ’Eadbanger weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the **[HAZARDOUS]** ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Boyz**" },
        ],
        keywords: ["Weirdboy","Character","Infantry","Psyker","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Wurrboy",
        pts: 60,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 4,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.close_combat_weapon_6,
        ],
        rangedWeapons: [
            orks_weapons.eyez_of_mork,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.eyez_of_mork, selected: true},
            ],
            slot2: [
                {...orks_weapons.close_combat_weapon_6, selected: true},
            ],
        },
        abilities: [
            { name: "Roar of Mork (Psychic)", desc: "In your opponent’s Command phase, you can select one enemy unit within 18\" of and visible to this **Psyker** and roll one D6: on a 1, this **Psyker**’s unit suffers D3 mortal wounds; on a 2+, until the start of your opponent’s next Command phase, that enemy unit is confrazzled. While a unit is confrazzled, each time a Battle-shock or Leadership test is taken for it, subtract 2 from that test." },
            { name: "Unstable Oracle", desc: "While this model is leading a unit, add 2 to the Attacks characteristic of this model’s Eyez of Mork weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the [HAZARDOUS] ability." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Beast Snagga Boyz**" },
        ],
        keywords: ["Character","Infantry","Wurrboy","Psyker","Beast Snagga","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
    {
        army: "orks",
        class: "characters",
        name: "Zodgrod Wortsnagga",
        pts: 90,
        units: 1,
        img: null,
        leader: true,
        warlord: true,
        legends: false,
        base_stats: {
            move: 6,
            tough: 5,
            saving: 5,
            wounds: 5,
            leader: 7,
            control: 1,
            invuln: false
        },
        meleeWeapons: [
            orks_weapons.da_grabzappa,
        ],
        rangedWeapons: [
            orks_weapons.squigstoppa,
        ],
        weapon_options: {
            slot1: [
                {...orks_weapons.squigstoppa, selected: true},
            ],
            slot2: [
                {...orks_weapons.da_grabzappa, selected: true},
            ],
        },
        abilities: [
            { name: "Super Runts", desc: "While this model is leading a unit:\n- Models in that unit have the Scouts 9\" ability.\n- Each time a model in that unit makes an attack, add 1 to the Hit roll and add 1 to the Wound roll.\n- Each time an attack targets that unit, subtract 1 from the Wound roll." },
            { name: "Special Dose", desc: "While the Waaagh! is active for your army, add 6\" to the Move characteristic of models in this model’s unit." },
            { name: "Leader", desc: "This model can be attached to the following unit:\n- **Gretchin**" },
        ],
        keywords: ["Epic Hero","Character","Infantry","Zodgrod Wortsnagga","Faction: Orks"],
        pointOptions: [],
        transport: null,
    },
]

export default orks_army
