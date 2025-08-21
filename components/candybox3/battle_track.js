// React + Next
import React, {useEffect, useState, useRef, useLayoutEffect} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Styles
import { candyBoxStyles } from "./const/styles";

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

        // PLAYER \\

            // Player Token
            const [token, setToken] = useState(determineTokenAtStart())
            function determineTokenAtStart(){
                if (checkInvFor(selectedTrinkets, 'sponge')){
                    if (checkInvFor(selectedTrinkets, 'sponge').status === 'active'){
                        return (
                        <div style={candyBoxStyles.mapStyle}>
                            <p style={candyBoxStyles.mapStyle}>\o/</p>
                        </div>
                        )
                    }
                }
                return (
                <div style={{...candyBoxStyles.mapStyle, padding: 0, margin:0}}>
                    <p style={candyBoxStyles.mapStyle}>\O/</p>
                    <p style={candyBoxStyles.mapStyle}> | </p>
                    <p style={candyBoxStyles.mapStyle}>/ \</p>
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

        // TRACK STATE \\

            // Movement and Movement Timer
            const [moved, setMoved] = useState(0)
            useEffect(() => {
                if (!inCombat && !isComplete){
                    const posTimer = setInterval(() => {
                        handlePathing()
                    }, 10);
                    return () => {
                        clearInterval(posTimer)
                    };
                }
            }, [inCombat]);

            // Marks when Player Token gets to the end of the Track
            useEffect(() => {
                if (selectedTrack.finalX){
                    if (moved >= selectedTrack.finalX){
                        setIsComplete(true)
                    }
                }
                
            }, [moved])

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
            const [msg, setMsg] = useState([selectedTrack.openingMsg])

            // Completion Status
            const [isComplete, setIsComplete] = useState(false)

            // Candies
            const [candiesAcquired, setCandiesAcquired] = useState(0)

            // Track Left st Point
            const trackRef = useRef(null);
            const parentRef = useRef(null);
            const [trackLeft, setTrackLeft] = useState(0);
          
            useLayoutEffect(() => {
              if (trackRef.current) {
                const rect = trackRef.current.getBoundingClientRect();
                setTrackLeft(rect.left);
                console.log(trackLeft)
              }
            }, [selectedTrack]);

    ///////////////
    // Functions //
    ///////////////

            // Handles Leaving the Track
            function handleLeave(){
                if (isComplete){
                    if (selectedTrack.thingDone){
                        if (!thingsDone.includes(selectedTrack.thingDone)){
                            setThingsDone(prev => [...prev, selectedTrack.thingDone])
                        }   
                    }
                    setCandies(prev => prev + candiesAcquired)
                    setSelectedMap(selectedTrack.winReturnTo)
                }
                else{
                    setSelectedMap(selectedTrack.returnTo)
                }
            }

            // Handles moving your player Token
            function handlePathing(){
                if (selectedTrack.pathing === 'straight-line'){
                    setPos(prev => [prev[0] + 1, prev[1]])
                }
                setMoved(prev => prev + 1)
            }

    /////////////
    // Renders //
    /////////////

        function renderMessages(){
            return msg.map(m => {
                return <>{m}</>
            })
        }

        function renderLeave(){
            let leaveTxt = "Leave (If you leave now you won't keep what you found)"
            if (isComplete){
                leaveTxt = "Leave (and keep what you found)"
            }
            return (
                <div style={{marginTop: 20, marginBottom: 20, display: 'flex', justifyContent: 'center'}}>
                    <button onClick={() => handleLeave()}>
                        {leaveTxt}
                    </button>
                </div>
            )
        }

        function renderDude(){
            return(
                <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', top: pos[1], left: pos[0]}}>
                    {token}
                </div>
            )
        }

    //////////
    // Main //
    //////////
    return(
        <div>
            <div style={{border: '1px solid black', marginTop: '1.5%', marginLeft: '20%', width: '60%', marginBottom: 20}}>
                <div style={{height: 120, padding: 10}}>
                    {renderMessages()}
                </div>
                {renderLeave()}
            </div>  
            <div style={{height: 120, marginLeft: '20%', marginBottom: 50}}>
                Abilities will go here
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div ref={trackRef} style={{backgroundColor: 'red'}}>
                    {selectedTrack.render}
                </div>
                {renderDude()}
            </div>
        </div>
    )
}