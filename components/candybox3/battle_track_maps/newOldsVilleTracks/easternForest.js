import { candyBoxStyles } from "../../const/styles"
import { wasp, millipede } from "../../const/enemies"

const easternForest = {
    pathing: 'straight-line',
    startingX: 450,
    startingY: 685,
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
        wasp, millipede
    ]

    
    
}

export default easternForest


