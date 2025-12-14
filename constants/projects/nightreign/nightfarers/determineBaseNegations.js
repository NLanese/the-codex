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
            poise: 40,
            poison: 102,
            rot: 102,
            bleed: 95,
            frost: 95,
            sleep: 59,
            mad: 59,
            blight: 59,
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
            poise: 120,
            poison: 112,
            rot: 112,
            bleed: 85,
            frost: 85,
            sleep: 69,
            mad: 59,
            blight: 59,
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
            poise: 40,
            poison: 112,
            rot: 112,
            bleed: 85,
            frost: 85,
            sleep: 69,
            mad: 59,
            blight: 59,
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
            poise: 40,
            poison: 102,
            rot: 102,
            bleed: 85,
            frost: 85,
            sleep: 69,
            mad: 69,
            blight: 59,
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
            poise: 120,
            poison: 102,
            rot: 102,
            bleed: 95,
            frost: 95,
            sleep: 49,
            mad: 49,
            blight: 59,
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
            poise: 40,
            poison: 112,
            rot: 112,
            bleed: 85,
            frost: 85,
            sleep: 69,
            mad: 69,
            blight: 69,
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
            poise: 40,
            poison: 112,
            rot: 112,
            bleed: 85,
            frost: 85,
            sleep: 69,
            mad: 69,
            blight: 59,
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
            poise: 40,
            poison: 92,
            rot: 92,
            bleed: 105,
            frost: 105,
            sleep: 49,
            mad: 49,
            blight: 69,
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
            poise: 40,
            poison: 0,
            rot: 0,
            bleed: 0,
            frost: 0,
            sleep: 0,
            mad: 0,
            blight: 0,
        }
    }
}