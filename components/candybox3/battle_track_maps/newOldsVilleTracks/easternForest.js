import { candyBoxStyles } from "../../const/styles"

const easternForest = {
    pathing: 'straight-line',
    startingY: 0,
    returnTo: 'New Oldsville',
    winReturnTo: 'New Oldsville',
    thingDone: 'CrossedEasternForest',
    length: 120 * 8,
    render: (
        <div>
            <p style={candyBoxStyles.mapStyle}>   88888                                        8888888         8888888o                               8888888o</p>
            <p style={candyBoxStyles.mapStyle}> 888888888                                    88888888888    888o888888888                            8o8888888</p>
            <p style={candyBoxStyles.mapStyle}>88888888888                                 888888888888888 888888888o888888                         88888888888</p>
            <p style={candyBoxStyles.mapStyle}> 888888888                                    88888888888    8888888888888                           o 888888888</p>
            <p style={candyBoxStyles.mapStyle}>   |  |                                          |  |         o  |  |   o                               |  | o</p>
            <p style={candyBoxStyles.mapStyle}>   |  |                                          |  |            |  |                                   |  |</p>
            <p style={candyBoxStyles.mapStyle}>   |  |                                          |  |            |  |                                   |  |</p>
            <p style={candyBoxStyles.mapStyle}>__/    \_________,\/\/._________________________/    \_\/\/_____/    \_________________________________/    \__________</p>
            <p style={candyBoxStyles.mapStyle}>_______________________________________________________________________________________________________________________</p>
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


