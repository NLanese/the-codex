export default function removeFromArray(array, value){
    return array.filter(val => {
        if (val !== value){
            return val
        }
    })
}