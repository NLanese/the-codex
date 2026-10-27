import { findArmy } from "../functions/getallUnits";

// Loads every unit for an army (downloads that army's file the first time it's picked)
export async function loadArmyUnits(armyTitle){
    const army = findArmy(armyTitle)
    if (!army){
        return []
    }
    return army.loadUnits()
}

// Filters an army's units down to one tab: "Characters", "Battleline", "Transports", "Other"
export default function determineUnits(units, type){
    if (!units || !type){
        return []
    }
    return units.filter((unit) => unit.class.toUpperCase() === type.toUpperCase())
}
