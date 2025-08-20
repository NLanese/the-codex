// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Functions
import checkInvFor from "./func/checkInventoryFor"
import makeNewInventoryWithReplacement from "./func/updateFromInv"
import findActiveWeapon from "./func/findActiveWeapon"


export default function BATTLE_TRACK({
    setSelectedMap,
    selectedTrack,
    inventory,
    setInventory,
    thingsDone, 
    setThingsDone,
    setCandies,
    setLollipops,
    selectedWeapon,
    selectedArmor,
    selectedBoots,
    selectedTrinkets,
    knownSpells,
    knownPotions,
    knownSkills
}) {

    ///////////
    // State //
    ///////////

        // TRACK STATE \\

            // Movement and Movement Timer
            const [moved, setMoved] = useState(0)
            useEffect(() => {
                if (!inCombat){
                    const posTimer = setInterval(() => {
                        handlePathing()
                    }, 150);
                    return () => {
                        clearInterval(posTimer)
                    };
                }
            }, [inCombat]);

            // Combat Timer
            useEffect(() => {
            if (inCombat){
                const attacks = setInterval(() => {
                    // TO DO: Attack Function
                }, atkSpeed);
                const defends = setInterval(() => {
                    // TO DO: Defend Function
                }, fightingEnemy.atkSpeed);
                return () => {
                    clearInterval(attacks)
                    clearInterval(defends)
                };
            }
            }, [inCombat]);

            // Messages
            const [msg, setMsg] = useState([])

            // Completion Status
            const [isComplete, setIsComplete] = useState(false)

            // Candies
            const [candiesAcquired, setCandiesAcquired] = useState(0)

        // PLAYER \\

            // Player Token
            const [token, setToken] = useState(determineTokenAtStart())
            function determineTokenAtStart(){
                if (checkInvFor(selectedTrinkets, 'sponge')){
                    if (checkInvFor(selectedTrinkets, 'sponge').status === 'active'){
                        return (
                        <div>
                            <p>\o/</p>
                        </div>
                        )
                    }
                }
                return (
                <div>
                    <p>\O/</p>
                    <p> | </p>
                    <p>/ \</p>
                </div>
                )
            }

            // Fighting Enemy Boolean
            const [inCombat, setInCombat] = useState(false)

            // Enemy that is being Fought
            const [fightingEnemy, setfightingenemy] = useState({name: "Nothing", atkSpeed: 1000})

            // Position
            const [pos, setPos] = useState([ 0, selectedTrack.startingY ])

        // WEAPON \\ 

            // Selected Weapon
            const weapon = findActiveWeapon(inventory)

            // Weapon Attack Speed
            const [atkSpeed, setAtkSpeed] = useState(weapon.speed)

        // TRINKETS \\

            // Sponge
            const hasSponge = checkInvFor(inventory, "sponge") ? true : false;
            // Use Sponge
            function activateShrink(){
                let foundSponge = checkInvFor(inventory, "sponge")
                foundSponge.status = "active"
                let newInv = makeNewInventoryWithReplacement(inventory, "sponge", foundSponge)
                setInventory(newInv)
            }

    ///////////////
    // Functions //
    ///////////////

            function handleLeave(){
                if (isComplete()){
                    if (selectedTrack.thingDone){
                        if (!thingsDone.includes(selectedTrack.thingDone)){
                            setThingsDone(prev => [...prev, selectedTrack.thingDone])
                            setCandies(prev => prev + candiesAcquired)
                            setSelectedMap(selectedTrack.winReturnTo)
                        }   
                    }
                }
                else{
                    setSelectedMap(selectedTrack.returnTo)
                }
            }

            function handlePathing(){
                if (selectedTrack.pathing === 'straight-line'){
                    setPos(prev => [prev[0] + 1, prev[1]])
                }
            }

    /////////////
    // Renders //
    /////////////

        function renderMessages(){
            return msg.map(m => {
                {m}
            })
        }

        function renderLeave(){
            let leaveTxt = "Leave (If you leave now you won't keep what you found)"
            if (isComplete){
                leaveTxt = "Leave (and keep what you found)"
            }
            return (
                <div style={{marginTop: 20}}>
                    <button onClick={() => handleLeave()}>
                        {leaveTxt}
                    </button>
                </div>
            )
        }

    //////////
    // Main //
    //////////
    return(
        <div>
            <div style={{border: '1px solid black'}}>
                {renderMessages()}
                {renderLeave()}
            </div>  
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {selectedTrack.render}
            </div>
        </div>
    )
}