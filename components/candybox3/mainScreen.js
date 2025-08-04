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
    const [newFeatureCost, setNewFeatureCost] = useState([30, 10, 10, 50000])

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
            else if (localState.thrown  >= 1830){
                return(
                    <div style={{flexDirection: 'row'}}>
                        <p>{`You've thrown ${localState.thrown} candies on the ground...`}</p>
                        <p style={{marginLeft: 20}}>
                            {"(>__>)"}
                        </p>
                    </div>
                )
            }
            else if (localState.thrown  >= 1830){
                return(
                    <div style={{flexDirection: 'row'}}>
                        <p>{`You've thrown ${localState.thrown} candies on the ground...`}</p>
                        <p style={{marginLeft: 15}}>
                            {"(>__>)"}
                        </p>
                    </div>
                )
            }
            else if (localState.thrown  >= 1820){
                return(
                    <div style={{flexDirection: 'row'}}>
                        <p>{`You've thrown ${localState.thrown} candies on the ground...`}</p>
                        <p style={{marginLeft: 10}}>
                            {"(>__>)"}
                        </p>
                    </div>
                )
            }
            else if (localState.thrown  >= 1810){
                return(
                    <div style={{flexDirection: 'row'}}>
                        <p>{`You've thrown ${localState.thrown} candies on the ground...`}</p>
                        <p style={{marginLeft: 5}}>
                            {"(>__>)"}
                        </p>
                    </div>
                )
            }
            else if (localState.thrown  >= 1800){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (O _ O) fine, if you won't stop, ill have to stop you myself!!`}</p>
                )
            }
            else if (localState.thrown  >= 1580){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (v__v)`}</p>
                )
            }
            else if (localState.thrown  >= 1570){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (v__v) wow man. not cool.`}</p>
                )
            }
            else if (localState.thrown  >= 1570){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (0__0) I FAKED MY DEATH AND YOU DIDNT CARE???`}</p>
                )
            }
            else if (localState.thrown  >= 1560){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (0__0) YOURE STILL DOING THIS???`}</p>
                )
            }
            else if (localState.thrown  >= 1550){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (x____0) `}</p>
                )
            }
            else if (localState.thrown  >= 1450){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (x____x)`}</p>
                )
            }
            else if (localState.thrown  >= 1400){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (x____x) *he died*`}</p>
                )
            }
            else if (localState.thrown  >= 1300){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (x____x) `}</p>
                )
            }
            else if (localState.thrown  >= 1200){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o____o) `}</p>
                )
            }
            else if (localState.thrown  >= 1190){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o___o) `}</p>
                )
            }
            else if (localState.thrown  >= 1180){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o__o) `}</p>
                )
            }
            else if (localState.thrown  >= 1170){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o_o) `}</p>
                )
            }
            else if (localState.thrown  >= 1150){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (*_*) if i ignore you, you'll stop`}</p>
                )
            }
            else if (localState.thrown  >= 1100){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (*_*) this is probably my fault`}</p>
                )
            }
            else if (localState.thrown  >= 1020){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o_o) i didnt think you'd get this far`}</p>
                )
            }
            else if (localState.thrown  >= 1020){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o_o) you dont get anything for doing this`}</p>
                )
            }
            else if (localState.thrown  >= 1020){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o_o) this makes no sense`}</p>
                )
            }
            else if (localState.thrown  >= 1010){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o_o) that could have fed a whole country`}</p>
                )
            }
            else if (localState.thrown  >= 1000){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (o_o) omg you wasted 1000 candies`}</p>
                )
            }
            else if (localState.thrown  >= 930){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (P_P) pls stop. its such a waste of candy.`}</p>
                )
            }
            else if (localState.thrown  >= 910){
                return(
                    <p>{`You've thrown ${localState.thrown} candies on the ground...\t  (O__o) `}</p>
                )
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