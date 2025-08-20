// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

// Candybox
import {candyBoxStyles} from "../../const/styles"
import checkInvFor from "../../func/checkInventoryFor";



export default function NewOldsvilleHouse3({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone, 
    setThingsDone,
    setCandies,
    setLollipops,
}){

    ////////////////////
    // Question State //
    ////////////////////
    
    const [ans, setAns] = useState("")
    const [ansResp, setAnsResp] = useState("")
    const ans1 = "38"

    function checkAnswer(){
        if (manInHouse3 === 'q1'){
            if (ans === ans1){
                setThingsDone(prev => [...prev, "house3ManQ1"])
                setManInHouse3('q2')
                setAnsResp("")
                setCandies(prev => prev + 55)
            }
            else{
                setAnsResp("No, I'm sorry! I don't think that's right...")
            }
        }
    }

    /////////////////////////
    // Flower Pot Lollipop //
    /////////////////////////

    const [deskFlowerGrabbed, setDeskFlowerGrabbed] = useState(determineLolliState())

    function grabDeskLolli(){
        setLollipops(prev => prev + 1)
        setThingsDone(prev => [...prev, "house3FlowerDeskGrabbed"])
        setDeskFlowerGrabbed(true)
    }

    function determineLolliState(){
        if (thingsDone.includes("house3FlowerDeskGrabbed")){
            return (true)
        }
        else{
            return (false)
        }
    }

    const renderLolliOnDesk = (x) => {
        if (deskFlowerGrabbed){
            return<>     </>
        }
        else{
            return(<span onClick={() => grabDeskLolli()}>----o</span>)
        }
    }


    //////////////////////
    // Homeowner Status //
    //////////////////////

    const [manInHouse3, setManInHouse3] = useState(determineManInHouseState())

    // Sets initial Man State
    function determineManInHouseState(){
        if (thingsDone.includes("house3ManQ3")){
            return ("q4")
        }
        else if (thingsDone.includes("house3ManQ2")){
            return ("q3")
        }
        else if (thingsDone.includes("house3ManQ1")){
            return ("q2")
        }
        else if (thingsDone.includes("house3OK")){
            return ("q1")
        }
        else{
            return "Default"
        }
    }

    // Tells man Okay init
    function tellManOkay(){
        setManInHouse3("q1")
        setThingsDone(prev => [...prev, "house3OK"])
    }  

    /////////////
    // Renders //
    /////////////

    function renderHouse3(){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>   /       |                                                                             |      |                |      \</p>
                <p style={candyBoxStyles.mapStyle}>  /        |                                                                             |      |                |        \</p>
                <p style={candyBoxStyles.mapStyle}> /         |                                                                             |      |                |         \</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                                                             |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                           __________                        |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           ___________________            /___       \                       |    __|                |          |</p>      
                <p style={candyBoxStyles.mapStyle}>|          |           |  v     v        |           |/ O \   O   |                      |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           | v         / \   |           |\___/       |9                     |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           |   /www\  /   \  |           | |   ]      |                      |    - |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           |  /     \/     \ |           | |********# |                      | --   |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           | /       \      \|           */  ----   #**                      |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|          |           |/_________\______|            ************                       |      |                |   | \    |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                        //|*#**##***|\\                      |   ---|                |   |  \   |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                       / /|  *#**##  |\ \                    |  -   |                |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                      / / |    **    | \ \                   |      |                |   |   |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                     / /__|     *    |__\ \                  |      |                |    \  |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |                                    (_____|          |_____)                 |      |                |     \ |  |</p>
                <p style={candyBoxStyles.mapStyle}>|          |____________________________              |          |                       |-     |                |      \|  |</p>
                <p style={candyBoxStyles.mapStyle}>|         /                            /|             |__________|                       |      |                |          |</p>
                <p style={candyBoxStyles.mapStyle}>|        /       {renderLolliOnDesk()}                / |             /          \                  _____|  --  |________        |          |</p>
                <p style={candyBoxStyles.mapStyle}>|       _____________________________/  |            /     /\     \                /     |      |       /|       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |    o        ||         o   |   |           |     |  |     |              /                    / |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |_____________||_____________|   |           |     |  |     |             /____________________/  |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |  /          ||  /          |   |           |     |  |     |             |                   |   |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      | /           || /           |   |           |_____|  |_____|             |      _______      |   |       |          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |/____________||/____________|   |___________/-    |__|    -\_____________|    /)|#(#%|& \    |   |_______|          |</p>
                <p style={candyBoxStyles.mapStyle}>|      |  /          ||  /          |   /         |________|  |________|         |   |(#|3#3%|)% |   |  /        \          |</p>
                <p style={candyBoxStyles.mapStyle}>|      | /           || /           |  /                                         |   |__|____|___|   | /          \         |</p>
                <p style={candyBoxStyles.mapStyle}>|      |/____________||/____________| /                                          |___________________|/            \        |</p>
                <p style={candyBoxStyles.mapStyle}>|      |____________________________|/    ____________________________________________________                      \       |</p>
                <p style={candyBoxStyles.mapStyle}>|     /                                 #                                                   #                        \      |</p>
                <p style={candyBoxStyles.mapStyle}>|    /                                 #                                                   #                          \     |</p>
                <p style={candyBoxStyles.mapStyle}>|   /                                 #                                                   #                            \    |</p>
                <p style={candyBoxStyles.mapStyle}>|  /                                 #___________________________________________________#                              \   |</p>
                <p style={candyBoxStyles.mapStyle}>| /                                                                                                                      \  |</p>
                <p style={candyBoxStyles.mapStyle}>|/________________________________________________________________________________________________________________________\ |</p>
            </div>
        )        
    }

    function renderDialogue(){
        return(
            <div style={{height: '70%', marginRight: '10%'}}>
                <div>
                    Hello and welcome to my house.  I am The Explorer, I've traveled 100s of miles 
                    from Overtheristan to be here and explore the area, but alas I am too old to continue anymore. 
                    Can you remind me some of the finer details of the world? I will reward you with some candy!
                </div>
                <div style={{marginTop: 20}}>
                    {renderOkayOrQuestions()}
                </div>
                <button 
                style={{marginTop: 20}}
                onClick={() => setSelectedMap("New Oldsville")}>
                    Leave
                </button>
            </div>
        )
    }

    function renderOkayOrQuestions(){ 
        if (manInHouse3 === "Default"){
            return(
                <div>
                    <button onClick={() => tellManOkay()}>Sure!</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    {determineQuestion()}
                    {renderInputAndResponse()}
                    <div style={{marginTop: 20}}>
                        <button onClick={() => checkAnswer()}>
                            Submit
                        </button>
                    </div> 
                </div>
            )
        }
    }

    function renderResponse(){
        return(
            <div style={{marginLeft: 20}}>
                {ansResp}
            </div>
        )
    }

    function determineQuestion(){
        if (manInHouse3 === "q1"){
            return(
                <div>
                    I haven't been outside in awhile, and I forgot how to count. 
                    Can you remind me how many trees are outside in New Oldsville?
                </div>
            )
        }
        else if (manInHouse3 === "q2"){
            return(
                <div>
                    Wonderful! Here's 55 candies as a reward! Now can you tell me how many apple trees were in the Eastern Forest?
                </div>
            )
        }
    }

    function renderInputAndResponse(){
        return(
            <div style={{marginTop: 20, display: 'flex', flexDirection: 'row'}}>
                <input
                    onChange={(e) => setAns(e.target.value)}
                    value={ans}
                />
                {renderResponse()}
            </div>
        )
    }   


    /////////////////
    // Main Render //
    /////////////////

    return (
        <div style={{flexDirection: 'row', display: 'flex', marginTop: '5%'}}>
            <div style={{ marginTop: '1%', marginLeft: '2.5%', flex:7, }}>   
                {renderHouse3()} 
            </div>
            <div style={{marginTop: '1%', paddingLeft: '2.5%', flex:5, }}>
                {renderDialogue()}
            </div>
        </div>
    )
}