// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";

export default function BetBotProjectPage() {

    ///////////
    // State //
    ///////////

        // Directory
        const [directory, setDirectory] = useRecoilState(directoryDataState)

        // Loading
        const [loading, setLoading] = useState(true)

        // All Scraped Bets
        const [bets, setBets] = useState(false)

    ///////////////
    // UseEffect //
    ///////////////

        // On Init
        useEffect(() => {
            setDirectory("Portfolio")    
            handleRequestToAPI()
        }, [])


    ///////////////
    // Functions //
    ///////////////

        function determineDropTitle(){
            return (selGame ? selGame : "No Game Selected")
        }


        async function handleRequestToAPI(){
            fetch("/api/scrapeFanDuel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // body: JSON.stringify({ message: "fullMessage" }),
            })
            .then(async (res) => {
                const text = await res.text(); 
                try {
                    const json = JSON.parse(text);
                    console.log("Setting bets as ")
                    console.log(json)
                    setBets(json)
                    setLoading(false)        
                } 
                catch (err) {
                    console.error("BEDROCK ERROR:", JSON.stringify(err, null, 2));
                    res.status(500).json({ message: "Internal server error" });
                    setLoading(false)        
                }
            })
            .catch((err) => {
                console.error("API call failed:", err);
                setLoading(false)        
            });
        }
    
    ////////////////
    // Renderings //
    ////////////////

    function renderIntro(){
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{...Styles.Sections.lessonContent, width: '70%', marginLeft: '15%', marginTop: 45}}>
                    <p style={Styles.Fonts.basic}>
                    Here I have created a system that uses two seperate webscrapers combined with some AI to find all of today's
                    NBA Bets from FanDuel, gets all relevant stats from the NBA API, sends the Data to an AI and determines how good 
                    or bad a bet may be. 
                    </p>

                    <p style={Styles.Fonts.basic}>
                    I'm pretty sure I have to say something about responsible gambling here... so gamble responsibly, I'm not endorsing gambling. You get it.  
                    </p>
                </div>
                
            </div>
        )
    }

    function renderBetCards(){
        let fullRenderList = []
        let row = []
        let i = 0
        bets.forEach((betCard) => {
            console.log("Bet Card mapping")
            row = [
                ...row, 
                (<OstCard style={{display: 'flex', justifyContent: 'center', flex: 4}}>
                    <div style={{borderRadius: 15, paddingBottom: 0, paddingRight: '3.3%', paddingLeft: '3.3%', backgroundColor: "#11013b"}}>
                        <p style={{...Styles.Fonts.basic, color: '#efefef', lineHeight: 0.6}}>
                            {betCard.away} @ {betCard.home}
                        </p>
                    </div>
                </OstCard>)
            ]
            i = i + 1
            if (i == 3 || i >= bets.length){
                fullRenderList = [
                    ...fullRenderList,
                    (
                        <div style={{
                            display: 'flex', flexDirection: 'row', gap: 33,
                            width: '90%', marginLeft: '10%', 
                            borderTop: "4px solid #11013b", marginBottom: 20, paddingTop: 20
                        }}>
                            {row}
                        </div>
                    )
                ]
                row = []
                i = 0
            }
        })
        console.log(fullRenderList)
        return fullRenderList  
    }

    function renderBetCardArea(){
        if (loading){
            return(
                <OstCard>
                </OstCard>
            )
        }
        else{
            return(
                <OstCard>
                    <div style={{...Styles.Fonts.pageTitle, fontSize: 30, width: '30%', marginLeft: '35%', marginBottom: 35}}>Select Your Bets to Analyze! </div>
                        {renderBetCards()}
                </OstCard>
            )
        }
    }


return (
    <div style={{marginTop: 20}}>
        <div style={Styles.Fonts.pageTitle}>The NBA BetBot </div>
        {renderIntro()}
        {renderBetCardArea()}
    </div>
  );
}