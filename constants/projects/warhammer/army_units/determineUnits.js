import votann_army from "./votann";

export default function determineUnits(army, type){
    console.log(army, type)
    if (army === "Leagues of Votann"){
        return votann_army
        // .filter(unit => unit.class === type)
    }
    else {
        return []
    }
}