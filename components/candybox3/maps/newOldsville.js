// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

import {candyBoxStyles} from "../const/styles"


export default function NewOldsville({
    inventory,
    setInventory,
    setSelectedMap
}){

    ///////////
    // State //
    ///////////

        const [yourInventory, setYourInventory] = useState([...inventory])

        const [house1, setHouse1] = useState({
            onClick: (() => {
                if (yourInventory.includes("Your House Key")){
                    setSelectedMap("Your House")
                }
                else{
                    setHouse1Msg(true)
                }
            }),
            message: "This is your house. You lost your key when you fed to a crocodile."
        })
        const [house1Msg, setHouse1Msg] = useState(false)

        const [house2, setHouse2] = useState({
            onClick: (() => {
                if (yourInventory.includes("Your House Key")){
                    setSelectedMap("Your House")
                }
                else{
                    setHouse1Msg(true)
                }
            }),
            message: "This is your house. You lost your key when you fed to a crocodile."
        })
        const [house2Msg, setHouse2Msg] = useState(false)

    ///////////////
    // Constants //
    ///////////////

    ///////////////
    // Functions //
    ///////////////

        function clearAllMessages(){
            setHouse1Msg(false)
        }

        function clickOnStore(){
            console.log("Store")
        }

    ///////////////
    // Renderers //
    ///////////////

    function renderOldsVilleSign(){
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flexDirection: 'column'}}>
                    <p style={candyBoxStyles.mapStyle}>          |-----*----*-------****------|</p>
                    <p style={candyBoxStyles.mapStyle}>          |     -                __    |</p>
                    <p style={candyBoxStyles.mapStyle}>          | `     New Oldsville    -   |</p>
                    <p style={candyBoxStyles.mapStyle}>          |     -                __    |</p>
                    <p style={candyBoxStyles.mapStyle}>          |---^^^^=-------*-**-----^^--|</p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={{...candyBoxStyles.mapStyle, marginTop: -7}}>             vVwvw              wVyw     </p>
                </div>
                <div style={{flexDirection: 'column'}}>
                    <p style={candyBoxStyles.mapStyle}>          |-----*----*-------*--*------|</p>
                    <p style={candyBoxStyles.mapStyle}>          |      Population: 56        |</p>
                    <p style={candyBoxStyles.mapStyle}>          |  (give or take a respawn)  |</p>
                    <p style={candyBoxStyles.mapStyle}>          |-----*----*-------*--*------|</p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={{...candyBoxStyles.mapStyle, marginTop: -7}}>             vVwvw              wVyw     </p>
                </div>
            
            
            </div>
        )
    }

    function renderWesternRoad(){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>  |   |         `           |   |    '''           *          ',     ,      |   |         ; '      |   |</p>
                <p style={candyBoxStyles.mapStyle}> /     \___________________/     \_________________________________________/     \________________/     \_</p>
                <p style={candyBoxStyles.mapStyle}>|                                </p>
                <p style={candyBoxStyles.mapStyle}> \_________________________________________________________________________       _______________________</p>
                <p style={candyBoxStyles.mapStyle}>    *                 '',                                                  \     /</p>
                <p style={candyBoxStyles.mapStyle}>                    ,                         *              '.             |   |</p>
            </div>
        )
    }

    function renderHouse(houseObj, show){
        return(
            <div>
            <p style={candyBoxStyles.mapStyle}>         ____         </p>
            <p style={candyBoxStyles.mapStyle}>        /    \  ___   </p>
            <p style={candyBoxStyles.mapStyle}>       /      \ | |   </p>
            <p style={candyBoxStyles.mapStyle}>      /        \| |   </p>
            <p style={candyBoxStyles.mapStyle}>     /          \ |   </p>
            <p style={candyBoxStyles.mapStyle}>    /            \|   </p>
            <p style={candyBoxStyles.mapStyle}>   |--------------|   </p>
            <p style={candyBoxStyles.mapStyle}>   |              |    8</p>
            <p style={candyBoxStyles.mapStyle}>   |  []      []  |   888</p>
            <p style={candyBoxStyles.mapStyle}>   |      {renderHouseMessage(houseObj, show)}        |  8888</p>
            <p style={candyBoxStyles.mapStyle}>   |      <span onClick={() => houseObj.onClick()}>____</span>    | 888888</p>
            <p style={candyBoxStyles.mapStyle}>   |      <span onClick={() => houseObj.onClick()}>|. |</span>    |   ||</p>
            <p style={candyBoxStyles.mapStyle}>   |######<span onClick={() => houseObj.onClick()}>|__|</span>####|   ||</p>
            </div>
        )
    }

    function renderHouseB(){
        return(
            <div>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>     _____||___   </p>
            <p style={candyBoxStyles.mapStyle}>    /          \ </p>
            <p style={candyBoxStyles.mapStyle}>   /            \ </p>
            <p style={candyBoxStyles.mapStyle}>  /______________\  </p>
            <p style={candyBoxStyles.mapStyle}> /|              |\         </p>
            <p style={candyBoxStyles.mapStyle}>  |  __          |</p>
            <p style={candyBoxStyles.mapStyle}>  | [__] ______  |</p>
            <p style={candyBoxStyles.mapStyle}>  |       |. |   | </p>
            <p style={candyBoxStyles.mapStyle}>  |_______|__|___|    </p>
            </div>
        )
    }

    function renderShop(){
        return(
            <div>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>   ______________ </p>
            <p style={candyBoxStyles.mapStyle}>  /______________\  </p>
            <p style={candyBoxStyles.mapStyle}> /|              |\ </p>
            <p style={candyBoxStyles.mapStyle}>  |   | SHOP |   |</p>
            <p style={candyBoxStyles.mapStyle}>  |    ______    |</p>
            <p style={candyBoxStyles.mapStyle}>  |     <span onClick={() => clickOnStore()}>|. |</span>     | </p>
            <p style={candyBoxStyles.mapStyle}>  |_____<span onClick={() => clickOnStore()}>|__|</span>_____|    </p>
            </div>
        )
    }

    function renderForge(){
        return(
            <div>
            <p style={candyBoxStyles.mapStyle}>                  </p>
            <p style={candyBoxStyles.mapStyle}>                              %%# </p>
            <p style={candyBoxStyles.mapStyle}>                            %###</p>
            <p style={candyBoxStyles.mapStyle}>    ----                   ##%</p>
            <p style={candyBoxStyles.mapStyle}>    |  |                   %# </p>
            <p style={candyBoxStyles.mapStyle}>   _|__|_________          #</p>
            <p style={candyBoxStyles.mapStyle}>  /_______________\       /--\</p>
            <p style={candyBoxStyles.mapStyle}> /|_T_T_T_T_T_T_T_|\     /    \</p>
            <p style={candyBoxStyles.mapStyle}>  |]  | FORGE |  [|-----[======]</p>
            <p style={candyBoxStyles.mapStyle}>  |]   _______   [|     [-|-|-|]</p>
            <p style={candyBoxStyles.mapStyle}>  |]   |. | .|   [|     [|-|-|-]</p>
            <p style={candyBoxStyles.mapStyle}>  |]___|__|__|___[|_____[_|_|_|]</p>
            </div>
        )
    }

    function renderHouseMessage(houseObj, show){
        if (show){
            return(
                <div
                style={{
                    position: 'absolute',
                    marginTop: -40,
                    backgroundColor: 'white',
                    border: '1px solid black',
                    padding: '5px',
                    width: 200,
                    whiteSpace: 'normal',      
                    overflowWrap: 'normal',
                    wordBreak: 'normal', fontSize: 12,
                    zIndex: 1000
                }}
                onClick={() => clearAllMessages()}
                >
                    {houseObj.message}
                </div>
            )
        }
    }

    function renderLilForest1(){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>  888        </p>
                <p style={candyBoxStyles.mapStyle}> 888*8    *  </p>
                <p style={candyBoxStyles.mapStyle}>8*888*8      </p>
                <p style={candyBoxStyles.mapStyle}>  ||      88*   </p>
                <p style={candyBoxStyles.mapStyle}>  ||     8*88*   </p>
                <p style={candyBoxStyles.mapStyle}>*       8*888*8   </p>
                <p style={candyBoxStyles.mapStyle}>    '     ||   </p>
                <p style={candyBoxStyles.mapStyle}> ''        ||   </p>
            </div>
        )
    }

    function renderLilForest2(){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>      888        </p>
                <p style={candyBoxStyles.mapStyle}> ,'   888*8        * </p>
                <p style={candyBoxStyles.mapStyle}>    8*888*8    8   </p>
                <p style={candyBoxStyles.mapStyle}>       ||     &88   </p>
                <p style={candyBoxStyles.mapStyle}>   888 ||    88*8 </p>
                <p style={candyBoxStyles.mapStyle}> *88*88     *88*88</p>
                <p style={candyBoxStyles.mapStyle}> 8*888*8       ||</p>
                <p style={candyBoxStyles.mapStyle}>   ||          ||  </p>
                <p style={candyBoxStyles.mapStyle}> ' ||       </p>
            </div>
        )
    }

    return(
        <div style={{...candyBoxStyles.mapStyle, height: '150%', width: '100%', margin: 20}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {renderOldsVilleSign()}
            </div>

            {/* Top Row */}
            <div style={{display: 'flex', flexDirection: 'row'}}>

                {/* Left Forest Wall */}
                <div style={{display: 'flex', flexDirection: 'column', marginTop: -80}}>
                    {renderLilForest1()}
                    {renderLilForest1()}
                    {renderLilForest2()}
                    {renderLilForest1()}
                </div>

                {/* Your House */}
                <div>{renderHouse(house1, house1Msg)}</div>

                {/* Old Man Jenkins' House */}
                <div>{renderHouse(house2, house2Msg)}</div>

                {/* Trees */}
                {renderLilForest2()}

                {/* Shop */}
                <div style={{marginLeft:30}}>
                    {renderShop()}
                </div>

                {/* Forge */}
                <div>
                    {renderForge()}
                </div>

                {/* Left Forest Wall */}
                <div style={{display: 'flex', flexDirection: 'column', marginTop: -80, marginLeft: 40}}>
                    {renderLilForest1()}
                    {renderLilForest1()}
                    {renderLilForest2()}
                    {renderLilForest1()}
                </div>
            </div>
            <div style={{marginTop: -200, marginLeft: 220}}>
                {renderWesternRoad()}
            </div>
        </div>
    )
}