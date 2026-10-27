#!/usr/bin/env node
/*
    Warhammer army data sync
    ------------------------
    Pulls every faction's units from the OpenHammer API ONCE and writes them into
    static files laid out exactly like the hand-made Leagues of Votann files:

        constants/projects/warhammer/army_units/<slug>.js   (units)
        constants/projects/warhammer/weapons/<slug>.js      (weapon profiles)
        constants/projects/warhammer/armies.js              (index the page uses)

    The website then reads these files - it never calls the API at runtime.
    The API's data only changes about once a month, so re-run this when you want
    fresh points/stats:

        node scripts/warhammer/syncArmies.mjs                  # 10th edition (default)
        node scripts/warhammer/syncArmies.mjs --edition 11e    # 11th edition
        node scripts/warhammer/syncArmies.mjs --local ./path/to/openhammer-api/data/json/10e

    One run = 34 API calls total (one per faction, limit=500), well under the
    API's 100 requests/minute limit.

    Hand-made armies listed in HAND_MADE are never overwritten.
    Detachment files (detachments/<slug>.js) are not touched by this script.
*/

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://openhammer-api-production.up.railway.app";

// ---------------------------------------------------------------- options
const args = process.argv.slice(2);
const opt = (name, fallback) => {
    const i = args.indexOf(`--${name}`);
    return i === -1 ? fallback : args[i + 1];
};
const EDITION = opt("edition", "10e");
const LOCAL_DIR = opt("local", null);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = path.join(ROOT, "constants/projects/warhammer");

// ---------------------------------------------------------------- factions
// apiName: the faction name the API uses   file: the JSON file name in the API's repo
// title:   what shows in the army dropdown  slug: file name in this project
const FACTIONS = [
    // Imperium
    { apiName: "Adepta Sororitas",        type: "Imperium",  file: "Imperium_-_Adepta_Sororitas" },
    { apiName: "Adeptus Custodes",        type: "Imperium",  file: "Imperium_-_Adeptus_Custodes" },
    { apiName: "Adeptus Mechanicus",      type: "Imperium",  file: "Imperium_-_Adeptus_Mechanicus" },
    { apiName: "Agents of the Imperium",  type: "Imperium",  file: "Imperium_-_Agents_of_the_Imperium" },
    { apiName: "Astra Militarum",         type: "Imperium",  file: "Imperium_-_Astra_Militarum" },
    { apiName: "Black Templars",          type: "Imperium",  file: "Imperium_-_Black_Templars" },
    { apiName: "Blood Angels",            type: "Imperium",  file: "Imperium_-_Blood_Angels" },
    { apiName: "Dark Angels",             type: "Imperium",  file: "Imperium_-_Dark_Angels" },
    { apiName: "Deathwatch",              type: "Imperium",  file: "Imperium_-_Deathwatch" },
    { apiName: "Grey Knights",            type: "Imperium",  file: "Imperium_-_Grey_Knights" },
    { apiName: "Imperial Fists",          type: "Imperium",  file: "Imperium_-_Imperial_Fists" },
    { apiName: "Imperial Knights",        type: "Imperium",  file: "Imperium_-_Imperial_Knights" },
    { apiName: "Iron Hands",              type: "Imperium",  file: "Imperium_-_Iron_Hands" },
    { apiName: "Raven Guard",             type: "Imperium",  file: "Imperium_-_Raven_Guard" },
    { apiName: "Salamanders",             type: "Imperium",  file: "Imperium_-_Salamanders" },
    { apiName: "Space Marines",           type: "Imperium",  file: "Imperium_-_Space_Marines" },
    { apiName: "Space Wolves",            type: "Imperium",  file: "Imperium_-_Space_Wolves" },
    { apiName: "Ultramarines",            type: "Imperium",  file: "Imperium_-_Ultramarines" },
    { apiName: "White Scars",             type: "Imperium",  file: "Imperium_-_White_Scars" },
    // Chaos
    { apiName: "Daemons",                 type: "Chaos",     file: "Chaos_-_Chaos_Daemons", title: "Chaos Daemons" },
    { apiName: "Chaos Knights",           type: "Chaos",     file: "Chaos_-_Chaos_Knights" },
    { apiName: "Chaos Space Marines",     type: "Chaos",     file: "Chaos_-_Chaos_Space_Marines" },
    { apiName: "Death Guard",             type: "Chaos",     file: "Chaos_-_Death_Guard" },
    { apiName: "Emperor's Children",      type: "Chaos",     file: "Chaos_-_Emperor's_Children" },
    { apiName: "Thousand Sons",           type: "Chaos",     file: "Chaos_-_Thousand_Sons" },
    { apiName: "World Eaters",            type: "Chaos",     file: "Chaos_-_World_Eaters" },
    // Xenos
    { apiName: "Aeldari",                 type: "Xenos",     file: "Xenos_-_Aeldari" },
    { apiName: "Genestealer Cults",       type: "Xenos",     file: "Xenos_-_Genestealer_Cults" },
    { apiName: "Leagues of Votann",       type: "Xenos",     file: "Xenos_-_Leagues_of_Votann" },
    { apiName: "Necrons",                 type: "Xenos",     file: "Xenos_-_Necrons" },
    { apiName: "Orks",                    type: "Xenos",     file: "Xenos_-_Orks" },
    { apiName: "T'au Empire",             type: "Xenos",     file: "Xenos_-_T'au_Empire" },
    { apiName: "Tyranids",                type: "Xenos",     file: "Xenos_-_Tyranids" },
    // Unaligned
    { apiName: "Titans",                  type: "Unaligned", file: "Unaligned_-_Titanicus" },
    { apiName: "Unaligned Forces",        type: "Unaligned", file: "Unaligned_-_Unaligned_Forces" },
];

// Armies maintained by hand - never regenerated. title -> existing slug
const HAND_MADE = { "Leagues of Votann": "votann" };

// ---------------------------------------------------------------- helpers
const slugify = (s) => s
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");

const jsKey = (s) => {
    const k = slugify(s) || "weapon";
    return /^[0-9]/.test(k) ? `w_${k}` : k;
};

const SMALL_WORDS = new Set(["of", "the", "and", "a", "an", "in", "on", "with", "to", "for"]);
const titleCase = (s) => s
    .replace(/(^|[\s\-(\/])([a-z])/g, (m, a, b) => a + b.toUpperCase())
    .replace(/ (Of|The|And|A|An|In|On|With|To|For)(?= )/g, (m, w) => " " + w.toLowerCase());

const cleanWeaponName = (s) => titleCase(s.replace(/^[^A-Za-z0-9(]+/, "").replace(/\s+/g, " ").trim());

// "12\"" -> 12, "3+" -> 3, "-1" -> 1 (AP stored positive like the Votann files), "D6" stays "D6"
const num = (v, { stripPlus = false, abs = false } = {}) => {
    if (v === null || v === undefined) return null;
    let s = String(v).trim().replace(/["”]/g, "");
    if (stripPlus) s = s.replace(/\+$/, "");
    if (/^-?\d+$/.test(s)) {
        const n = parseInt(s, 10);
        return abs ? Math.abs(n) : n;
    }
    return s;
};

const js = (v) => JSON.stringify(v);

// Weapon keyword text -> code calling weapon_abilities (same helpers the Votann weapons use)
function abilityCode(raw) {
    const k = raw.trim();
    if (!k || k === "-") return null;
    const low = k.toLowerCase().replace(/\s+/g, " ");
    const arg = (s) => {
        const t = s.trim().replace(/\+$/, "");
        return /^\d+$/.test(t) ? t : js(t);
    };
    let m;
    if ((m = low.match(/^rapid fire (.+)$/)))      return `weapon_abilities.rapid_fire(${arg(m[1])})`;
    if ((m = low.match(/^sustained hits (.+)$/)))  return `weapon_abilities.sustained_hits(${arg(m[1])})`;
    if ((m = low.match(/^melta (.+)$/)))           return `weapon_abilities.melta(${arg(m[1])})`;
    if ((m = low.match(/^anti[- ]monster (.+)$/))) return `weapon_abilities.anti_monster(${arg(m[1])})`;
    if ((m = low.match(/^anti[- ]vehicle (.+)$/))) return `weapon_abilities.anti_vehicle(${arg(m[1])})`;
    if ((m = k.match(/^anti[- ](.+?) (\d\+?)$/i))) {
        const target = m[1].toLowerCase().replace(/(^|[\s-])([a-z])/g, (x, a, b) => a + b.toUpperCase());
        return `weapon_abilities.anti(${js(target)}, ${arg(m[2])})`;
    }
    const simple = {
        "assault": "assault", "heavy": "heavy", "pistol": "pistol", "torrent": "torrent",
        "blast": "blast", "hazardous": "hazardous", "one shot": "oneshot", "overcharge": "overcharge",
        "twin-linked": "twin_linked", "twin linked": "twin_linked", "conversion": "conversion",
        "lethal hits": "lethal_hits", "devastating wounds": "devastating_wounds",
        "indirect fire": "indirect_fire", "ignores cover": "ignores_cover", "psychic": "psychic",
        "precision": "precision", "lance": "lance", "extra attacks": "extra_attacks",
    };
    if (simple[low]) return `weapon_abilities.${simple[low]}()`;
    return `weapon_abilities.other(${js(k)})`;
}

const unitClass = (u) => {
    const kw = (u.keywords || []).map(k => k.toLowerCase());
    if (kw.includes("character")) return "characters";
    if (kw.includes("battleline")) return "battleline";
    if (kw.includes("dedicated transport")) return "transports";
    return "other";
};

// ---------------------------------------------------------------- data loading
async function loadFaction(f) {
    if (LOCAL_DIR) {
        return JSON.parse(fs.readFileSync(path.join(LOCAL_DIR, `${f.file}.json`), "utf8"));
    }
    const url = `${API}/v1/${EDITION}/factions/${encodeURIComponent(f.apiName)}/units?limit=500`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
    return res.json();
}

// ---------------------------------------------------------------- writers
function buildFaction(f, units) {
    const slug = slugify(f.title || f.apiName);
    const wVar = `${slug}_weapons`;

    // ---- weapons: one entry per distinct profile
    const weapons = new Map();      // key -> profile
    const bySignature = new Map();  // signature -> key
    function weaponKey(w, type) {
        const name = cleanWeaponName(w.name);
        const profile = {
            name,
            type,
            range: type === "melee" ? 0 : num(w.Range),
            attacks: num(w.A),
            b_save: num(type === "melee" ? w.WS : w.BS, { stripPlus: true }),
            str: num(w.S),
            AP: num(w.AP, { abs: true }),
            dam: num(w.D),
            abilities: (w.Keywords || "").split(",").map(abilityCode).filter(Boolean),
        };
        const sig = JSON.stringify(profile);
        if (bySignature.has(sig)) return bySignature.get(sig);
        let key = jsKey(name), n = 2;
        while (weapons.has(key)) key = `${jsKey(name)}_${n++}`;
        weapons.set(key, profile);
        bySignature.set(sig, key);
        return key;
    }

    // ---- units
    const unitBlocks = [...units]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(u => {
            const melee = (u.weapons?.melee || []).map(w => weaponKey(w, "melee"));
            const ranged = (u.weapons?.ranged || []).map(w => weaponKey(w, "ranged"));
            const uniq = (a) => [...new Set(a)];
            const allWeapons = uniq([...ranged, ...melee]);
            const kw = (u.keywords || []).map(k => k.toLowerCase());
            const s = u.stats || {};
            const ref = (k) => `${wVar}.${k}`;
            const slots = allWeapons.map((k, i) =>
                `            slot${i + 1}: [\n                {...${ref(k)}, selected: true},\n            ],`).join("\n");
            const abilities = (u.abilities || []).map(a => `            { name: ${js(a.name)}, desc: ${js(a.description)} },`).join("\n");
            const pointOptions = (u.points?.variants || []).map(v => `{ models: ${js(v.models)}, pts: ${js(v.points)} }`).join(", ");
            return `    {
        army: ${js(slug)},
        class: ${js(unitClass(u))},
        name: ${js(u.name)},
        pts: ${js(u.points?.base ?? null)},
        units: ${js(u.composition?.min_models || 1)},
        img: null,
        leader: ${(u.abilities || []).some(a => a.name === "Leader")},
        warlord: ${kw.includes("character")},
        legends: ${/\[legends\]/i.test(u.name)},
        base_stats: {
            move: ${js(num(s.M))},
            tough: ${js(num(s.T))},
            saving: ${js(num(s.SV, { stripPlus: true }))},
            wounds: ${js(num(s.W))},
            leader: ${js(num(s.LD, { stripPlus: true }))},
            control: ${js(num(s.OC))},
            invuln: ${u.invuln_save ? js(num(u.invuln_save, { stripPlus: true })) : "false"}
        },
        meleeWeapons: [
${uniq(melee).map(k => `            ${ref(k)},`).join("\n")}
        ],
        rangedWeapons: [
${uniq(ranged).map(k => `            ${ref(k)},`).join("\n")}
        ],
        weapon_options: {
${slots}
        },
        abilities: [
${abilities}
        ],
        keywords: ${js(u.keywords || [])},
        pointOptions: [${pointOptions}],
        transport: ${js(u.transport || null)},
    },`;
        });

    const header = (what) =>
`// AUTO-GENERATED ${what} for ${f.title || f.apiName} (${EDITION}) by scripts/warhammer/syncArmies.mjs
// Source: OpenHammer API (${API}) - re-run the script to refresh; hand edits will be overwritten.
`;

    const weaponsFile = `${header("weapons")}
import weapon_abilities from "./_weapon_abilities"

const ${wVar} = {
${[...weapons].map(([k, w]) => `    ${k}: {
        name: ${js(w.name)},
        type: ${js(w.type)},
        range: ${js(w.range)},
        attacks: ${js(w.attacks)},
        b_save: ${js(w.b_save)},
        str: ${js(w.str)},
        AP: ${js(w.AP)},
        dam: ${js(w.dam)},
        abilities: [${w.abilities.length ? "\n" + w.abilities.map(a => `            ${a},`).join("\n") + "\n        " : ""}],
    },`).join("\n")}
}

export default ${wVar}
`;

    const unitsFile = `${header("units")}
import ${wVar} from "../weapons/${slug}"

const ${slug}_army = [
${unitBlocks.join("\n")}
]

export default ${slug}_army
`;
    return { slug, weaponsFile, unitsFile, unitCount: units.length, weaponCount: weapons.size };
}

function buildIndex(entries) {
    const lines = entries.map(e => {
        const det = fs.existsSync(path.join(OUT, "detachments", `${e.slug}.js`));
        return `    {
        title: ${js(e.title)},
        slug: ${js(e.slug)},
        factionType: ${js(e.type)},
        handMade: ${e.handMade},
        // loaded only when this army is picked, so the page doesn't download every faction up front
        loadUnits: () => import("./army_units/${e.slug}").then(m => m.default),
        loadDetachments: ${det ? `() => import("./detachments/${e.slug}").then(m => m.default)` : "async () => []"},
    },`;
    });
    return `// AUTO-GENERATED by scripts/warhammer/syncArmies.mjs (${EDITION}) - lists every army the page can show.
// Hand-made armies (${Object.keys(HAND_MADE).join(", ")}) are listed here but their files are never overwritten.

const ARMIES = [
${lines.join("\n")}
]

export default ARMIES
`;
}

// ---------------------------------------------------------------- main
const index = [];
let calls = 0;
for (const f of FACTIONS) {
    const title = f.title || f.apiName;
    if (HAND_MADE[title]) {
        index.push({ title, slug: HAND_MADE[title], type: f.type, handMade: true });
        console.log(`skip  ${title} (hand-made)`);
        continue;
    }
    const units = await loadFaction(f);
    if (!LOCAL_DIR) calls++;
    const built = buildFaction(f, units);
    fs.writeFileSync(path.join(OUT, "army_units", `${built.slug}.js`), built.unitsFile);
    fs.writeFileSync(path.join(OUT, "weapons", `${built.slug}.js`), built.weaponsFile);
    index.push({ title, slug: built.slug, type: f.type, handMade: false });
    console.log(`wrote ${title}: ${built.unitCount} units, ${built.weaponCount} weapons`);
}
fs.writeFileSync(path.join(OUT, "armies.js"), buildIndex(index));
console.log(`\nDone - ${index.length} armies in armies.js${LOCAL_DIR ? " (from local files)" : `, ${calls} API calls`}.`);
