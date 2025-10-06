import Enemy from "../const/classes/enemy"

const wasp = new Enemy({
    name: "wasp",
    health: 2,
    atk: 5,
    atkSpeed: 1500,
    render: ( 
    <div>
        <p>
            {"o{>"}
        </p>
    </div>
    ),
    movementSpeed: 500,
    customMovement: false,
    candiesDroppedMin: 2,
    candiesDroppedMax: 7,
  });

  const millipede = new Enemy({
    name: "Millipede",
    health: 5,
    atk:2,
    atkSpeed: 2000,
    render: (
        <div>
            <p>{"@mmm"}</p>
        </div>
    ),
    movementSpeed: 200,
    customMovement: false,
    candiesDroppedMin: 2,
    candiesDroppedMax: 7
  })