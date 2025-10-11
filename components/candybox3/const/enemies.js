import Enemy from "../const/classes/enemy"
import { candyBoxStyles } from "../const/styles";


const wasp = new Enemy({
    name: "wasp",
    health: 2,
    atk: 5,
    atkSpeed: 1500,
    render: ( 
    <div>
        <p style={{...candyBoxStyles.mapStyle, fontWeight: 700}}>
            {"o{>"}
        </p>
    </div>
    ),
    movementSpeed: 3,
    customMovement: false,
    candiesDroppedMin: 2,
    candiesDroppedMax: 7,
    spawnWeight: 1,
    deathMessage: "You squashed a wasp",
    playerKillMessage: "You got stung too many times to continue"
  });

  const millipede = new Enemy({
    name: "Millipede",
    health: 5,
    atk:2,
    atkSpeed: 2000,
    render: (
        <div>
            <p style={{...candyBoxStyles.mapStyle, fontWeight: 700}}>
                {"@mmm"}
            </p>
        </div>
    ),
    movementSpeed: 15,
    customMovement: false,
    candiesDroppedMin: 2,
    candiesDroppedMax: 7,
    spawnWeight: 1,
    deathMessage: "The millipede is no-more-ipede.",
    playerKillMessage: "Not sure how you let a millipede beat you, but it happened."
  })


  export {
    wasp,
    millipede
  }