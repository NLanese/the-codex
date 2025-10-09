export default function replaceInArray(array, value, newValue){
    return array.map(val => {
        if (val === value){
            return newValue
        }
        else{
            return val
        }
    })
}