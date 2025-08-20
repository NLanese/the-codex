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

    // Weapon
    const weapon = findActiveWeapon(inventory)

    // Sponge
    const hasSponge = checkInvFor(inventory, "sponge") ? true : false;
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