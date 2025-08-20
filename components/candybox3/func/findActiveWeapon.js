export default function findActiveWeapon(inv){
    let found = false
    inv.forEach(itm => {
        if (itm.type){
            if (itm.type === 'weapon'){
                if (itm.status === 'active'){
                    found = itm
                }
            }
        }
        else{
            console.error("itm has no type" )
            console.error(itm)
        }
    });
    if (found){
        return found
    }
    else{
        return fists
    }
}

const fists = {
    name: "Your Bare Hands",
    desc: "Does this merit a description? How are you even seeing this, that shouldn't be possible.",
    cost: 0,
    id: "fists",
    status: "base",
    type: "weapon",
    damage: 1,
    speed: 800,
    status: 'active'
}