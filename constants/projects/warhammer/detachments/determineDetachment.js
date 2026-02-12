import votann_detachments from "./votann"

export default function determineDetachment(army){
    if (army === "Leagues of Votann"){
        return votann_detachments
    }
    else{ 
        return []
    }
}