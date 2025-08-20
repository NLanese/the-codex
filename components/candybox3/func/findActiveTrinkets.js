export default function findActiveTrinkets(inv){
    let found = []
    inv.forEach(itm => {
        if (itm.type){
            if (itm.type === 'trinket'){
                if (itm.status === 'active'){
                    found = [...found, itm]
                }
            }
        }
        else{
            console.error("itm has no type" )
            console.error(itm)
        }
    });
    return found
}
