export default function makeNewInventoryWithReplacement(inv, id, replacement){
    let newInv = inv.filter(itm => {
        if (typeof itm === 'string'){
            if (itm !== id){
                return itm
            }
        }
        else{
            if (itm.id){
                if (itm.id !== id){
                    return itm
                }
            }
        }
    })
    newInv = [...newInv, replacement]
    return newInv
}