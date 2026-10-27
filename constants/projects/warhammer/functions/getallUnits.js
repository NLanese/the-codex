import ARMIES from "../armies";

// Every army the page can show. The list itself lives in ../armies.js, which
// scripts/warhammer/syncArmies.mjs regenerates (Leagues of Votann stays hand-made).
// Each entry: { title, slug, factionType, handMade, loadUnits(), loadDetachments() }
export default function getAllArmies(){
    return ARMIES
}

// Finds an army entry by its dropdown title
export function findArmy(title){
    return ARMIES.find(army => army.title === title)
}
