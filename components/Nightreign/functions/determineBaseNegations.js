export default function determineBaseNegations(nightfarer){
    if (nightfarer === "Wylder"){
        return{
            phys: 0.19,
            slash: 0.20,
            strike: 0.19,
            thrust: 0.20,
            magic: 0.19,
            fire: 0.19,
            lightning: .20,
            holy: .17,
            poise: 40
        }
    }
    else if (nightfarer === "Guardian"){
        return{
            phys: 0.24,
            slash: 0.25,
            strike: 0.24,
            thrust: 0.20,
            magic: 0.19,
            fire: 0.14,
            lightning: .15,
            holy: .17,
            poise: 120
        }
    }
    else if (nightfarer === "Ironeye"){
        return{
            phys: 0.19,
            slash: 0.15,
            strike: 0.14,
            thrust: 0.15,
            magic: 0.19,
            fire: 0.14,
            lightning: .15,
            holy: .17,
            poise: 40
        }
    }
    else if (nightfarer === "Duchess"){
        return{
            phys: 0.19,
            slash: 0.15,
            strike: 0.14,
            thrust: 0.15,
            magic: 0.28,
            fire: 0.22,
            lightning: .22,
            holy: .23,
            poise: 40
        }
    }
    else if (nightfarer === "Raider"){
        return{
            phys: 0.24,
            slash: 0.25,
            strike: 0.24,
            thrust: 0.15,
            magic: 0.14,
            fire: 0.24,
            lightning: .15,
            holy: .17,
            poise: 120
        }
    }
    else if (nightfarer === "Revenant"){
        return{
            phys: 0.14,
            slash: 0.10,
            strike: 0.14,
            thrust: 0.10,
            magic: 0.28,
            fire: 0.29,
            lightning: .29,
            holy: .20,
            poise: 40
        }
    }
    else if (nightfarer === "Recluse"){
        return{
            phys: 0.14,
            slash: 0.10,
            strike: 0.14,
            thrust: 0.10,
            magic: 0.29,
            fire: 0.24,
            lightning: .25,
            holy: .25,
            poise: 40
        }
    }
    else if (nightfarer === "Executor"){
        return{
            phys: 0.24,
            slash: 0.25,
            strike: 0.24,
            thrust: 0.25,
            magic: 0.14,
            fire: 0.19,
            lightning: .15,
            holy: .22,
            poise: 40
        }
    }
    else{
        return {
            phys: 0,
            slash: 0,
            strike: 0,
            thrust: 0,
            magic: 0,
            fire: 0,
            lightning: 0,
            holy: 0,
            poise: 40
        }
    }
}