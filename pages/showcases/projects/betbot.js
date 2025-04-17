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
import { ST } from "next/dist/shared/lib/utils";

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



        // Credits Error Message
        const [outOfCredits, setOutOfCredits] = useState(false)

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
                    if (json.ERROR){
                        if (json.ERROR === "OUT OF CREDITS"){
                            setOutOfCredits(true)
                        }
                    }
                    else{
                        setBets(json)
                        setLoading(false)      
                    }  
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
        if (!bets || bets.length < 1){
            return
        }
        let fullRenderList = []
        let row = []
        let i = 0
        console.log(bets)
        bets.forEach((betCard) => {
            const awayLine = betCard?.bet?.moneyline?.[betCard.away] ? betCard?.bet?.moneyline?.[betCard.away] : false
            const homeLine = betCard?.bet?.moneyline?.[betCard.home] ? betCard?.bet?.moneyline?.[betCard.home] : false

            const awayDiff = betCard?.bet?.spread?.[betCard.away]?.diff ? betCard?.bet?.spread?.[betCard.away]?.diff : false
            const homeDiff = betCard?.bet?.spread?.[betCard.home]?.diff ? betCard?.bet?.spread?.[betCard.home]?.diff : false

            const awaySpreadOdds = betCard?.bet?.spread?.[betCard.away]?.odds ? betCard?.bet?.spread?.[betCard.away]?.odds : "No Spread Betting"
            const homeSpreadOdds = betCard?.bet?.spread?.[betCard.home]?.odds ? betCard?.bet?.spread?.[betCard.home]?.odds : "No Spread Betting"

            if (!awayLine && !awayDiff){
                console.log(betCard)
                return false
            }

            row = [
                ...row, 
                (
                <OstCard style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 4}}>
                    <div style={{borderRadius: 15, paddingBottom: 0, paddingRight: '3.3%', paddingLeft: '3.3%', backgroundColor: "#11013b"}}>
                        <p style={{...Styles.Fonts.basic, color: '#efefef', lineHeight: 0.6}}>
                            {betCard.away} @ {betCard.home}
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                        {renderTeamBetCard(betCard.away, awayLine, awayDiff, awaySpreadOdds)}
                        {renderTeamBetCard(betCard.home, homeLine, homeDiff, homeSpreadOdds)}
                    </div>
                </OstCard>
                )
            ]
            i = i + 1
            if (i == 3 || i >= bets.length){
                fullRenderList = [
                    ...fullRenderList,
                    (
                        <div style={{
                            display: 'flex', flexDirection: 'row', gap: 33,
                            width: '95%', marginLeft: '2.5%', 
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
        return fullRenderList  
    }

    function renderTeamBetCard(team, line, points, spreadLine){
        console.log(team)
        console.log(line)
        console.log(points)
        console.log(spreadLine)
        return(
            <OstCard style={{flex: 5, height: 230}}>
                <p style={{...Styles.Fonts.h2, fontSize: 28, paddingBottom: 10, height: 40}}>
                    {team}
                </p>
                <p style={{...Styles.Fonts.basic, fontSize: 20, textAlign: 'center'}}>
                    Moneyline: <span style={{color: 'darkgrey', fontWeight: 500}}>{line ? line : "No Moneyline"}</span>
                </p>
                <div>
                    <p style={{...Styles.Fonts.basic, fontSize: 20, textAlign: 'center', margin: 0, padding: 0}}>
                        {points ? ("Spread: " + points + " ") : "No Spread Betting"}
                    </p>
                    <p style={{color: 'darkgrey', fontWeight: 500, fontSize: 20,  margin: 0, padding: 0, textAlign: 'center'}}>
                        {points ? spreadLine : null}
                    </p>
                </div>
            </OstCard>
        )
    }

    function renderBetCardArea(){
        if (outOfCredits){
            return(
                <OstCard style={{backgroundColor: 'red', width: '60%', marginLeft: '20%', ...Styles.Fonts.h2, fontSize: 42}}>
                    Sorry! We've run out of credits for the month and cannot access the OneBet API until those Credits refill next month!
                </OstCard>
            )
        }
        else if (loading){
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