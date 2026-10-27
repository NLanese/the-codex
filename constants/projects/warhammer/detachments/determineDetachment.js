import { findArmy } from "../functions/getallUnits";

// Loads the detachment names for an army ([] if there aren't any)
export default async function determineDetachment(armyTitle){
    const army = findArmy(armyTitle)
    if (!army){
        return []
    }
    return army.loadDetachments()
}
