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

    // UPDATE TIMERS \\


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

        // Fighting Enemy
        const [inCombat, setInCombat] = useState(false)

        const [fightingEnemy, setfightingenemy] = useState({name: "Nothing", atkSpeed: 1000})

        // Position
        const [pos, setPos] = useState([0,0])

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





    //////////
    // Main //
    //////////
    return(
        <div>

        </div>
    )
}