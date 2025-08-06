// React + Next
import React, {useEffect, useState, useRef} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import CandyBox3MainScreen from "../../../components/candybox3/mainScreen";
import Map from "../../../components/candybox3/map";
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";


export default function CandyBox3() {

    ///////////
    // State //
    ///////////

        // Site Stuff
        const [directory, setDirectory] = useRecoilState(directoryDataState)
        const router = useRouter()

        // Accumulation and Basic Stats
        const [candies, setCandies] = useState(1000)
        const [candiesRate, setCandiesRate] = useState(1)
        const [candiesEaten, setCandiesEaten] = useState(0)
        const [candiesThrown, setCandiesThrown] = useState(0)
        const [candiesPerThrow, setCandiesPerThrow] = useState(10)

        const [lollipops, setLollipops] = useState(0)
        const [lollipopsRate, setLollipopsRate] = useState(0)
        const [lollipopsInSeconds, setLollipopsInSeconds] = useState(false)
        const [lollipopsInMinutes, setLollipopsInMinutes] = useState(true)

        const [chocolateBars, setChocolateBars] = useState(0)
        const [pocs, setPocs] = useState(0)

        const [health, setHealth] = useState(100)
        const [maxHealth, setMaxHealth] = useState(100)
        const [healthPercent, setHealthPercent] = useState('100%')

        const [inventory, setInventory] = useState([])

        // Page State
        const [featuresUnlocked, setFeaturesUnlocked] = useState(0)
        const [screenShown, setScreenShown] = useState("Main")
        const [screenTabs, setScreenTabs] = useState(["Inventory", "Candy Box"])
        const [selectedMap, setSelectedMap] = useState("New Oldsville")
        const [termMsgs, setTermMsgs] = useState([])
      


    ////////////////
    // UseEffects //
    ////////////////

        // Sets Directory
        useEffect(() => {
            setDirectory("Portfolio")            
        }, [])
    
        // Candies and Lollipops Timers
        useEffect(() => {
            const secondsInterval = setInterval(() => {
              setCandies(prev => prev + candiesRate);
              if (lollipopsInSeconds) {
                setLollipops(prev => prev + lollipopsRate);
              }
            }, 1000);
          
            const minutesInterval = setInterval(() => {
              if (lollipopsInMinutes) {
                setLollipops(prev => prev + lollipopsRate);
              }
            }, 60000);
          
            // Cleanup on unmount or re-render
            return () => {
              clearInterval(secondsInterval);
              clearInterval(minutesInterval);
            };
        }, []);

        // Features
        useEffect(() => {
            if (featuresUnlocked === 4){
                setScreenTabs(prev => [...prev, "Local Map", "Save"])
            }
        }, [featuresUnlocked])

        // Health Updates
        useEffect(() => {

        }, [])

    ///////////////
    // Functions //
    ///////////////

        function eatAllCandies(){

        }

        function determineHealthBarColor(){

        }


    ///////////////
    // Renderers //
    ///////////////

        function renderMainBar(){
            if (featuresUnlocked > 0){
                return(
                    <OstCard style={{width: '95%', marginLeft: '2.5%'}}>
                        <div style={{width: '100%'}}>

                            {/* Tabs */}
                            {renderTabs()}

                            {/* Health Bar */}
                            <div style={{display: 'flex', flexDirection: 'row', marginTop: 30, textAlign: 'center'}}>
                                <div style={{flex: 1}}>
                                    Health:
                                </div>
                                <div style={{flex: 11}}>
                                    <div style={{backgroundColor: 'red', width: healthPercent, height: '100%', display: 'flex', justifyContent: 'center'}}>
                                        <p style={{padding: 2, margin: 0}}>{health} / {maxHealth}</p>
                                    </div>
                                </div>
                            </div>
                            {renderMoreMenu()}
                        </div>
                        
                    </OstCard>
                )
            }   
        }

        function renderTabs(){
            if (featuresUnlocked >= 2){
                return(
                    <OstrichTabBar
                        style={{width: '100%'}}
                        tabs={screenTabs}
                        onTabClick={setScreenShown}
                        startingTabByIndex={1}
                    />
                )
            }
        }

        function renderMoreMenu(){
            if (featuresUnlocked >= 3){
                return(
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <p>Candies: {candies}</p> 
                        <p> Lollipops: {lollipops}</p>
                        <p> Chocolate Bars: {chocolateBars}</p>
                        <p> Pains Au Chocolat: {pocs}</p>
                    </div>
                )
            }
        }

        function renderTerminal(){
            if (featuresUnlocked >= 4){
                return(
                    <div
                    style={{
                        width: '100%',
                        backgroundColor: '#efefef',
                        height: '200px',           
                        overflowY: 'auto',         
                        padding: '10px',
                        fontFamily: 'monospace'    
                    }}>
                    {termMsgs.map(msg => {
                        <p>{msg}</p>
                    })}
                </div>
                )
            }
        }

        function MAIN(){
            if (screenShown === "Main" || screenShown === "Candy Box"){
                return (
                    <CandyBox3MainScreen
                        candies={candies}
                        setCandies={setCandies}
                        lollipops={lollipops}
                        chocolates={chocolateBars}
                        thrown={candiesThrown}
                        setThrown={setCandiesThrown}
                        eaten={candiesEaten}
                        setEaten={setCandiesEaten}
                        features={featuresUnlocked}
                        setFeature={setFeaturesUnlocked}
                    />
                )
            }
            if (screenShown === "Local Map"){
                return(
                    <Map
                    selectedMap={selectedMap}
                    setSelectedMap={setSelectedMap}
                    inventory={inventory}
                    setInventory={setInventory}
                    />
                )
            }
        }

    return(
        <div style={{marginTop: 20}}>
            {renderMainBar()}
            {MAIN()}
        </div>
    )
}