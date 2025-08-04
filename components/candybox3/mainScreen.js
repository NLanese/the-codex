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
    features
}) {

    ///////////
    // State //
    ///////////

    const [showThrow, setShowThrow] = useState(false)
    const [showNewFeature, setShowNewFeature] = useState(false)
    const [newFeatureCost, setNewFeatureCost] = useState([30, 10, 10, 50])


    ////////////////
    // UseEffects //
    ////////////////

    useEffect(() => {
        if (candies > 10){
            setShowThrow(true)
        }
        if (candies > 25){
            setShowNewFeature(true)
        }
    }, [])

    //////////////
    // Handlers //
    //////////////

    function handleThrowCandy(){
        if (candies < 10){
            return
        }
        else{
            setThrown(prev => prev + 10)
            setCandies(prev => prev - 10)
        }
    }


    ///////////////
    // Renderers //
    ///////////////

    function showCandyCount(){
        return(
            <div style={{marginBottom: 15}}>
                <p>You have {candies} candies</p>
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
                <div>
                    <button>
                        Request a new Feature ({newFeatureCost[features]} candies)
                    </button>
                    
                </div>
                
            )
        }   
    }

    function renderTotalThrown(){
        if (thrown > 0){
            if (thrown >= 30000){

            }
            else if (thrown  >= 890){
                return(
                    <p>{`You've thrown ${thrown} candies on the ground...  (>_<) seriously. thats a LOT of candy...`}</p>
                )
            }
            else if (thrown  >= 720){
                return(
                    <p>{`You've thrown ${thrown} candies on the ground...  (>_<) duuude stop`}</p>
                )
            }
            else if (thrown  >= 600){
                return(
                    <p>{`You've thrown ${thrown} candies on the ground...  >: (      WHY??`}</p>
                )
            }
            else if (thrown  >= 500){
                return(
                    <p>{`You've thrown ${thrown} candies on the ground...  >: (`}</p>
                )
            }
            else if (thrown  >= 340){
                return(
                    <p>{`You've thrown ${thrown} candies on the ground...  :'(`}</p>
                )
            }
            else if (thrown  >= 270){
                return(
                    <p>{`You've thrown ${thrown} candies on the ground...  : (`}</p>
                )
            }
            else if (thrown  >= 140){
                return(
                    <p>You've thrown {thrown} candies on the ground..?</p>
                )
            }
            else if (thrown  >= 80){
                return(
                    <p>You've thrown {thrown} candies on the ground...</p>
                )
            }
            else{
                return(
                    <p>You've thrown {thrown} candies on the ground.</p>
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