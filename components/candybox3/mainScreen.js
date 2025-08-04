// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";


export default function CandyBox3MainScreen({
    candies,
    setCandies,
    lollipops,
    chocolates,
    thrown,
    setThrown,
    eaten,
    setEaten,
    features,
    setFeature,
}) {

    ///////////
    // State //
    ///////////

    const [showThrow, setShowThrow] = useState(false)
    const [showNewFeature, setShowNewFeature] = useState(false)
    const [newFeatureCost, setNewFeatureCost] = useState([30, 10, 10, 50])

    const [localState, setLocalState] = useState({
        candies: candies,
        lollipops: lollipops,
        chocolates: chocolates,
        thrown: thrown,
        eaten: eaten,
        features: features
    })


    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        if (localState.candies > 10){
            setShowThrow(true)
        }
        if (localState.candies > 25){
            setShowNewFeature(true)
        }
    }, [localState])

    useEffect(() => {
        setLocalState({
            candies: candies,
            lollipops: lollipops,
            chocolates: chocolates,
            thrown: thrown,
            eaten: eaten,
            features: features
        })
    }, [candies, lollipops, chocolates, thrown, eaten, features])

    //////////////
    // Handlers //
    //////////////

    function handleThrowCandy(){
        if (localState.candies < 10){
            return
        }
        else{
            setThrown(prev => prev + 10)
            setCandies(prev => prev - 10)
        }
    }

    function handleRequestFeature(){
        if (localState.candies < newFeatureCost[localState.features]){
            return
        }
        else{
            setFeature(prev => prev + 1)
        }
    }


    ///////////////
    // Renderers //
    ///////////////

    function showCandyCount(){
        return(
            <div style={{marginBottom: 15}}>
                <p>You have {localState.candies} candies</p>
                <button>
                    Eat all the candy
                </button>
            </div>
        )
    }

    function renderThrowCandies(){
        if (showThrow){
            return(
                <button onClick={() => handleThrowCandy()}>
                    Throw 10 candies on the ground
                </button>
            )
        }   
    }

    function renderRequestFeature(){
        if (showNewFeature){
            return(
                <div style={{marginTop: 15}}>
                    <button onClick={() => handleRequestFeature()}>
                        Request a new Feature ({newFeatureCost[localState.features]} candies)
                    </button>
                    
                </div>
                
            )
        }   
    }

    function renderTotalThrown(){
        if (localState.thrown > 0){
            if (thrown >= 30000){

            }
            else if (localState.thrown  >= 890){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (>_<) seriously. thats a LOT of candy...`}</p>
                )
            }
            else if (localState.thrown  >= 720){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (>_<) duuude stop`}</p>
                )
            }
            else if (localState.thrown  >= 600){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  >: (      WHY??`}</p>
                )
            }
            else if (localState.thrown  >= 500){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  >: (`}</p>
                )
            }
            else if (localState.thrown  >= 340){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  :'(`}</p>
                )
            }
            else if (localState.thrown  >= 270){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t : (`}</p>
                )
            }
            else if (localState.thrown  >= 140){
                return(
                    <p>You've thrown {localState.thrown} candies on the ground..?</p>
                )
            }
            else if (localState.thrown  >= 80){
                return(
                    <p>You've thrown {localState.thrown} candies on the ground...</p>
                )
            }
            else{
                return(
                    <p>You've thrown {localState.thrown} candies on the ground.</p>
                )
            }
        }
    }
    

    return(
        <div style={{margin: 20}}>
            {showCandyCount()}
            {renderThrowCandies()}
            {renderTotalThrown()}
            {renderRequestFeature()}
        </div>
    )
}