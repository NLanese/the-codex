// Returns true if thingsDone has an entry with this title, otherwise false.
//   findIfDone(thingsDone, "CrossedEasternForest")
export default function findIfDone(thingsDone, title){
    if (!Array.isArray(thingsDone)){
        return false
    }
    return thingsDone.some(thing => thing && thing.title === title)
}
