import { candyBoxStyles } from "../../const/styles"

const easternForest = {
    pathing: 'straight-line',
    startingX: 450,
    startingY: 675,
    returnTo: 'New Oldsville',
    winReturnTo: 'New Oldsville',
    thingDone: 'CrossedEasternForest',
    finalX: 247 * 7.7,
    finalY: false,
    openingMsg: <p>You wander into the (kind of) peaceful forest.</p>,
    render: (
        <div 
        style={{backgroundColor: "#ebfff5"}}
        >
            <p style={candyBoxStyles.mapStyle}>                                                </p>
            <p style={candyBoxStyles.mapStyle}>                                                </p>
            <p style={candyBoxStyles.mapStyle}>           88888                                       8888888         8888888o                             8888888o                   88888                                          8888888         8888888o                               8888888o        </p>
            <p style={candyBoxStyles.mapStyle}>         888888888                                   88888888888    888o888888888                          8o8888888                 888888888                                      88888888888    888o888888888                            8o8888888        </p>
            <p style={candyBoxStyles.mapStyle}>        88888888888                                888888888888888 888888888o888888                       88888888888               88888888888                                   888888888888888 888888888o888888                         88888888888       </p>
            <p style={candyBoxStyles.mapStyle}>         888888888                                   88888888888    8888888888888                         o 888888888                888888888                                      88888888888    8888888888888                           o 888888888       </p>
            <p style={candyBoxStyles.mapStyle}>           |  |                                         |  |         o  |  |   o                             |  | o                    |  |                                            |  |         o  |  |   o                               |  | o         </p>
            <p style={candyBoxStyles.mapStyle}>           |  |                                         |  |            |  |                                 |  |                      |  |                                            |  |            |  |                                   |  |           </p>
            <p style={candyBoxStyles.mapStyle}>           |  |                                         |  |            |  |                                 |  |                      |  |                                            |  |            |  |                                   |  |           </p>
            <p style={candyBoxStyles.mapStyle}>__________/    \___________,\/\/.______________________/    \_\/\/_____/    \_______________________________/    \____________________/    \___________,\/\/._________________________/    \_\/\/_____/    \_________________________________/    \__________</p>
            <p style={candyBoxStyles.mapStyle}>_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
        </div>
    ),
    enemies: [
        {
            name: "wasp",
            health: 2,
            atk: 5,
            atkSpeed: 1500,
            render: (
                <div>
                    <p>{"o{>"}</p>
                </div>
            ),
            movementSpeed: 200,
            customMovement: false,
            candiesDroppedMin: 2,
            candiesDroppedMax: 7,
            spawnsAt: [120, 5]
        },
        {
            name: "Millipede",
            health: 5,
            atk:25,
            atkSpeed: 2000,
            render: (
                <div>
                    <p>{"Cmmm"}</p>
                </div>
            ),
            movementSpeed: 200,
            customMovement: false,
            candiesDroppedMin: 2,
            candiesDroppedMax: 7
        }
    ]

}

export default easternForest


