// React + Next
import React, {useEffect, useState, useRef, useLayoutEffect} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Styles
import { candyBoxStyles } from "./const/styles";

// Candybox3 Functions
import checkInvFor from "./func/checkInventoryFor"
import makeNewInventoryWithReplacement from "./func/updateFromInv"
import findActiveWeapon from "./func/findActiveWeapon"

// General Functions
import replaceInArray from "../../constants/functions/replaceInArray";
import removeFromArray from "../../constants/functions/removeFromArray";
import orderArrayBy from "../../constants/functions/orderArrayBy";


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
            const playerRef = useRef(null);
            function determineTokenAtStart(){
                if (checkInvFor(selectedTrinkets, 'sponge')){
                    if (checkInvFor(selectedTrinkets, 'sponge').status === 'active'){
                        return (
                        <div ref={tokenRef}
                        style={candyBoxStyles.mapStyle}>
                            <p style={candyBoxStyles.mapStyle}>\o/</p>
                        </div>
                        )
                    }
                }
                return (
                <div style={{...candyBoxStyles.mapStyle, padding: 0, margin:0}}>
                    <p style={{...candyBoxStyles.mapStyle, fontWeight: 700}}>\O/</p>
                    <p style={{...candyBoxStyles.mapStyle, fontWeight: 900}}> | </p>
                    <p style={{...candyBoxStyles.mapStyle, fontWeight: 900}}>/ \</p>
                </div>
                )
            }

            // Fighting Enemy Boolean
            const [inCombat, setInCombat] = useState(false)

            // Enemy that is being Fought
            const [fightingEnemy, setFightingEnemy] = useState({name: "Nothing", atkSpeed: 1000})

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

            // Track Left at Point
            const trackRef = useRef(null);
            const [trackLeft, setTrackLeft] = useState(0);
          
            useLayoutEffect(() => {
              if (trackRef.current) {
                const rect = trackRef.current.getBoundingClientRect();
                setTrackLeft(rect.left);
              }
            }, [selectedTrack]);

        // ENEMIES STATE \\
        
            // All Enemies
            const [enemies, setEnemies] = useState([])
            const enemiesRef = useRef(enemies);
            useEffect(() => {
                enemiesRef.current = enemies
            }, [enemies])

            // Enemy Movement
            const enemyTimers = useRef(new Map());

            useEffect(() => {
              if (selectedTrack) {
                // Set timers for each enemy
                selectedTrack.enemies.forEach(mapEnemy => {
                  const timerId = setInterval(() => {
                    handlePathing(mapEnemy);
                  }, mapEnemy.movementSpeed);
                  enemyTimers.current.set(mapEnemy.name, timerId); // or use a unique ID
                });
              }
            
              // Cleanup: stop all timers when leaving the page or changing track
              return () => {
                enemyTimers.current.forEach((timerId) => clearInterval(timerId));
                enemyTimers.current.clear();
              };
            }, [selectedTrack]);

            // Enemy Spawning
            const [enemyWeightedList, setEnemyWeightedList] = useState()

            // Current Weight for Enemy Spawning
            const [spawnWeight, setSpawnWeight] = useState(0)
            const spawnWeightRef = useRef(spawnWeight)
            useEffect(() => {
                spawnWeightRef.current = spawnWeight
            }, [spawnWeight])

            // Creates Enemy List for Spawning Weights
            useEffect(() => {
                if (selectedTrack){
                    setEnemyWeightedList(orderArrayBy(selectedTrack.enemies, "spawnWeight", false))
                }
            }, [selectedTrack])

            // Spawns Enemies
            useEffect(() => {
                if (enemyWeightedList){
                    const spawner = setInterval(() => {
                        determineWhichEnemySpawns()
                    }, selectedTrack.spawnTick);
                    return () => {
                        clearInterval(spawner);
                    };
                }
            }, [enemyWeightedList])

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
            function handlePathing(forEnemy=false){

                // Standard Straight Track
                if (selectedTrack.pathing === 'straight-line'){

                    // For Player
                    if (!forEnemy){
                        setPos(prev => [prev[0] + 1, prev[1]])
                    }

                    // For Enemy
                    else{
                        let oldEnemiesValues = [...enemies]
                        let newEnemiesValue = replaceInArray(
                            oldEnemiesValues, 
                            forEnemy, 
                            {...forEnemy, 
                                posX : forEnemy.posX - 1
                            })
                        setEnemies(newEnemiesValue)
                    }
                    
                }
                setMoved(prev => prev + 1)
            }

            // Runs on the Defeat of an Enemy
            function handleSlayEnemy(enemy){
                let newEnemiesValue = removeFromArray([...enemies], enemy)
                setEnemies(newEnemiesValue)
                addToMessages(enemy.deathMessage)
                let candies = enemy.dropCandies()
                setCandiesAcquired(prev => prev + candies)
                addToMessages(`You've picked up ${candies} candies. You have found ${candiesAcquired} candies total.`)
            }

            function spanwEnemy(enemy){
                console.log("Should be spawning ", enemy.name)
                setEnemies(prev => [...enemies, enemy])
                decreaseSpawnWeight(enemy)
            }

            // Adds content to Messages Screen
            function addToMessages(msg){
                setMsg(prev => [...prev, msg])
            }

            function determineWhichEnemySpawns(){
                console.log("Spawn Weight: ", spawnWeightRef.current)
                let weighted = Math.floor(Math.random() * (spawnWeightRef.current + 1));
                console.log("Spawning with weight ", weighted)
                enemyWeightedList.forEach((en) => {
                    if (weighted >= en.spawnWeight){
                        console.log("Should be spawning ", en.name)
                        spanwEnemy(en)
                    }
                    else{
                        console.log("Not spawning ", en.name)
                    }
                })
                increaseSpawnWeight()
            }

            function increaseSpawnWeight(){
                console.log("Increasing Spawn Weight")
                if (spawnWeight + 1 >= selectedTrack.maxSpawnWeight){
                    console.log("Increasing Spawn Weight to ", selectedTrack.maxSpawnWeight)
                    setSpawnWeight(selectedTrack.maxSpawnWeight)
                }
                else{
                    console.log("Increasing Spawn Weight to ", spawnWeight + 1)
                    setSpawnWeight(prev => prev + 1)
                }
            }

            function decreaseSpawnWeight(enemy){
                let newWeight = spawnWeight - enemy.spawnWeight
                if (newWeight < 0){
                    newWeight = 0
                }
                setSpawnWeight(newWeight)
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

        function renderBaddies(){
            if (enemiesRef){
                return enemiesRef.current?.map(enemy => {
                    return(
                        <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', top: 500, left: 500}}>
                            {enemy.render}
                        </div>
                    )
                })
            }   
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
            <div style={{height: 120, marginLeft: '20%', width: '60%', marginBottom: 25, backgroundColor: 'green'}}>
                Abilities will go here
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div ref={trackRef} style={{backgroundColor: 'red'}}>
                    {selectedTrack.render}
                </div>
                {renderDude()}
                {renderBaddies()}
            </div>
        </div>
    )
}