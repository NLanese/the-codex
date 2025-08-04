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
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";


export default function CandyBox3() {

    ///////////
    // State //
    ///////////

        // Site Stuff
        const [directory, setDirectory] = useRecoilState(directoryDataState)
        const router = useRouter()

        // Accumulation and Basic Stats
        const [candies, setCandies] = useState(0)
        const [candiesRate, setCandiesRate] = useState(1)
        const [candiesEaten, setCandiesEaten] = useState(0)
        const [candiesThrown, setCandiesThrown] = useState(0)

        const [lollipops, setLollipops] = useState(0)
        const [lollipopsRate, setLollipopsRate] = useState(0)
        const [lollipopsInSeconds, setLollipopsInSeconds] = useState(false)
        const [lollipopsInMinutes, setLollipopsInMinutes] = useState(true)

        const [chocolateBars, setChocolateBars] = useState(0)
        const [pocs, setPocs] = useState(0)

        const [health, setHealth] = useState(100)
        const [maxHealth, setMaxHealth] = useState(100)
        const [healthPercent, setHealthPercent] = useState('100%')

        // Page State
        const [featuresUnlocked, setFeaturesUnlocked] = useState(1)
        const [screenShown, setScreenShown] = useState("Main")
        const [screenTabs, setScreenTabs] = useState(["Map", "Inventory", "Candy Box"])
      


    ////////////////
    // UseEffects //
    ////////////////
    
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

    ///////////////
    // Functions //
    ///////////////

        function eatAllCandies(){

        }

    ///////////////
    // Renderers //
    ///////////////

        function renderMainBar(){
            if (featuresUnlocked > 0){
                return(
                    <OstCard style={{width: '95%', marginLeft: '2.5%'}}>
                        <div style={{width: '100%'}}>
                            <OstrichTabBar
                                style={{width: '100%'}}
                                tabs={screenTabs}
                            />
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
                        </div>
                    </OstCard>
                )
            }   
        }

        function MAIN(){
            if (screenShown === "Main"){
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