export default function checkInvFor(inv, id){
    let found = false
    inv.forEach(itm => {
        if (itm.id){
            if (itm.id === id){
                found = itm
            }
        } 
        else{
            if (itm === id){
                found = itm
            }
        }
    });
    return found
}