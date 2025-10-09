export default function forEachInObject(object, functionToRun){
    Object.keys(object).forEach(key => {
        functionToRun(object[key])
    })
}