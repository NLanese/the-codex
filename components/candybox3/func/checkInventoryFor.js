export default function checkInvFor(inv, id){
    let found = false
    inv.forEach(itm => {
        if (itm.id){
            if (it?.id === id){
                found = true
            }
        } 
        else{
            if (itm === id){
                found = true
            }
        }
    });
    return found
}