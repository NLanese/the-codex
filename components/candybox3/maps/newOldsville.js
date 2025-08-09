// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

import {candyBoxStyles} from "../const/styles"


export default function NewOldsville({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone,
    setThingsDone,
    setCandies,
    setLollipops,
}){

    ///////////
    // State //
    ///////////

        // Inventory
        const [yourInventory, setYourInventory] = useState([...inventory])


        // House Objects
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

        // Lake Objects
        const [showLakeMsg, setShowLakeMsg] = useState(false)
        const [showKeyInLakeMsg, setShowKeyInLakeMsg] = useState(false)

        useEffect(() => {
            console.log("showLakeMsg changed:", showLakeMsg);
          }, [showLakeMsg]);
          

    ///////////////
    // Constants //
    ///////////////

    ///////////////
    // Functions //
    ///////////////

        // Clears all Messages
        function clearAllMessages(){
            setHouse1Msg(false)
            setShowLakeMsg(false)
        }

        // Navigates to Store Screen
        function clickOnStore(){
            console.log("Store")
        }

        function handleLakeClick(){
            setShowLakeMsg(true)
        }

        function handleKeyInLakeClick(e){
            e.stopPropagation();
            setShowLakeMsg(false)
            setShowKeyInLakeMsg(true)
        }

        function handleForgeClick(){
            console.log("Changing Selected Screen....")
            setSelectedMap("New Oldsville -- Forge")
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
                <p style={candyBoxStyles.mapStyle}>  |   |         `           |   |    '''           *          ',     ,      |   |         ; '     |    |</p>
                <p style={candyBoxStyles.mapStyle}> /     \___________________/     \_________________________________________/     \_______________/      \_____________</p>
                <p style={candyBoxStyles.mapStyle}>|                                                                                                                      \</p>
                <p style={candyBoxStyles.mapStyle}> \_________________________________________________________________________       ________________________________     |</p>
                <p style={candyBoxStyles.mapStyle}>    *                 '',                                                  \     /                                \    |</p>
                <p style={candyBoxStyles.mapStyle}>                    ,                         *              '.             |   |                                  |   |</p>
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
            <p style={candyBoxStyles.mapStyle}>  |]   <span onClick={() => handleForgeClick()}>|. | .|</span>   [|     [|-|-|-]</p>
            <p style={candyBoxStyles.mapStyle}>  |]___<span onClick={() => handleForgeClick()}>|__|__|</span>___[|_____[_|_|_|]</p>
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
                <p style={candyBoxStyles.mapStyle}> ''       ||   </p>
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

    function renderLake(show, setShow, show2, setShow2){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>                                __________</p>
                <p style={candyBoxStyles.mapStyle}>     ______               _____<span onClick={() => handleLakeClick()}>/           \_</span></p>
                <p style={candyBoxStyles.mapStyle}>   <span onClick={() => handleLakeClick()}> /       \___________/         ~~         \____</span></p>
                <p style={candyBoxStyles.mapStyle}>   <span onClick={() => handleLakeClick()}>/                                               \</span></p>
                <p style={candyBoxStyles.mapStyle}>  <span onClick={() => handleLakeClick()}>|          ~                _____                 \</span></p>
                <p style={candyBoxStyles.mapStyle}>  <span onClick={() => handleLakeClick()}>|        {"<=^^^8<"}           </span><span onClick={(e) => handleKeyInLakeClick(e)}>/ 0=k \</span><span onClick={() => handleLakeClick()}>                 \__</span></p>
                <p style={candyBoxStyles.mapStyle}>   <span onClick={() => handleLakeClick()}>\                         </span><span onClick={(e) => handleKeyInLakeClick(e)}>\_____/</span><span onClick={() => handleLakeClick()}>           ~~         \</span></p>
                <p style={candyBoxStyles.mapStyle}>    <span onClick={() => handleLakeClick()}>\                                                     \</span></p>
                <p style={candyBoxStyles.mapStyle}>     <span onClick={() => handleLakeClick()}>\           {"<=^^^8<"}      {renderLakeMessage(show, setShow)}                             |</span></p>
                <p style={candyBoxStyles.mapStyle}>      <span onClick={() => handleLakeClick()}>|      ~                                            /</span></p>
                <p style={candyBoxStyles.mapStyle}>      <span onClick={() => handleLakeClick()}>|                                   {">8^^^=>"}         /</span></p>
                <p style={candyBoxStyles.mapStyle}>      <span onClick={() => handleLakeClick()}> \ _____              ~                            \</span></p>
                <p style={candyBoxStyles.mapStyle}>              <span onClick={() => handleLakeClick()}>\_                                     ~   /</span></p>
                <p style={candyBoxStyles.mapStyle}>                <span onClick={() => handleLakeClick()}>\______________________________________ /</span></p>
            </div>
        )
    }

    function renderLakeMessage(show, setShow){
        if (show){
            return(
                <div
                    style={{
                        position: 'absolute',
                        marginTop: -40,
                        marginLeft: 30,
                        backgroundColor: 'white',
                        border: '1px solid black',
                        padding: '5px',
                        width: 200,
                        whiteSpace: 'normal',      
                        overflowWrap: 'normal',
                        wordBreak: 'normal', fontSize: 12,
                        zIndex: 1000
                    }}
                    >
                    The Lake is deep and filled with crocodiles. No way you can get across without a raft
                    <div style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        {yourInventory.includes("Raft") && (
                            <button>
                                Take Raft
                            </button>
                        )}
                            <button onClick={(e) => {
                                e.stopPropagation();
                                setShow(false);
                            }}>
                                Leave
                            </button>
                    </div>
                </div>
            )
        }
    }

    function renderKeyInLakeMessage(show, setShow){
        if (show){
            return(
                <div
                    style={{
                        position: 'absolute',
                        marginTop: -40,
                        marginLeft: 30,
                        backgroundColor: 'white',
                        border: '1px solid black',
                        padding: '5px',
                        width: 200,
                        whiteSpace: 'normal',      
                        overflowWrap: 'normal',
                        wordBreak: 'normal', fontSize: 12,
                        zIndex: 1000
                    }}
                    >
                    Your key! It is on a rock in the middle of the lake. 
                    <div style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        {yourInventory.includes("Raft") && (
                            <button>
                                Take Raft
                            </button>
                        )}
                            <button onClick={(e) => {
                                e.stopPropagation();
                                setShow(false);
                            }}>
                                Leave
                            </button>
                    </div>
                </div>
            )
        }
    }

    function renderSouthbound(hasExit=false){
        function renderExit(){
            if ((hasExit)){
                return(
                    <>
                        <p style={candyBoxStyles.mapStyle}>                |   |        _________ </p>
                        <p style={candyBoxStyles.mapStyle}>                |   |       [To Forest]  </p>
                        <p style={candyBoxStyles.mapStyle}>                |   |          |   |  </p>
                        <p style={candyBoxStyles.mapStyle}>                |   |______________________</p>
                        <p style={candyBoxStyles.mapStyle}>                |                </p>
                        <p style={candyBoxStyles.mapStyle}>                |    ______________________</p>
                        <p style={candyBoxStyles.mapStyle}>                |   |</p>
                    </>
                )
            }
        }
        function renderExtra(){
            if (!hasExit)
            return(
                <>
                    <p style={candyBoxStyles.mapStyle}>                |   |</p>
                    <p style={candyBoxStyles.mapStyle}>                |   |</p>
                    <p style={candyBoxStyles.mapStyle}>                |   |</p>
                    <p style={candyBoxStyles.mapStyle}>                |   |</p>
                    <p style={candyBoxStyles.mapStyle}>                |   |</p>
                    <p style={candyBoxStyles.mapStyle}>                |   |</p>
                    <p style={candyBoxStyles.mapStyle}>                |   |</p>
                </>
            )
        }
        return(
            <div style={{marginLeft: 2}}>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                {renderExit()}
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                <p style={candyBoxStyles.mapStyle}>                |   |</p>
                {renderExtra()}
            </div>
        )
    }


    //////////
    // MAIN //
    //////////

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

            {/* Road */}
            <div style={{marginTop: -200, marginLeft: 220}}>
                {renderWesternRoad()}
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {renderLake(showLakeMsg, setShowLakeMsg)}
                    {renderSouthbound()}
                    <div style={{marginLeft: 40, display: 'flex', flexDirection: 'column'}}>
                        {renderHouse()}
                        {renderHouseB()}
                    </div>
                    <div style={{marginLeft: -116}}>{renderSouthbound(true)}</div>
                </div>
                
            </div>
        </div>
    )
}