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

        useEffect(() => {
            // console.log(bets)
        }, [bets])

    ///////////////
    // Functions //
    ///////////////

        // Grabs Bets from Odds API
        async function handleRequestToAPI(){
            fetch("/api/scrapeFanDuel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            })
            .then(async (res) => {
                const text = await res.text(); 
                try {
                    const json = JSON.parse(text);
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

    // Render Text Preamble
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
                    As mentioned, all bets below are FanDuel odds pulled using the Odds API. Once bets are selected, all of the relevant
                    infromation is scraped from the NBA API. This includes things like each player's full season game log, the team stats, and
                    the specific head to head matchup stats between each team. 
                    Once all of this information is scraped and collected, the backend server compiles a JSON document using this information
                    and sends it up to the AWS Bedrock API. This API is also conencted to a knowledge base which holds details like Playoff Schedule and 
                    significant player / general team analysis. 
                    </p>

                    <p style={Styles.Fonts.basic}>
                    Using all of the information given the AWS Model with the knowledge base then determines the odds of your bet coming to fruition. 
                    If the AI's odds look better than what FanDuel has, it will return to you that it is a good value bet. If the AI determines
                    the odds of your bet hitting are above 50%, it will return to you that it is a secure bet. 
                    </p>

                    <p style={Styles.Fonts.basic}>
                    I'm pretty sure I have to say something about responsible gambling here... so gamble responsibly, I'm not endorsing gambling. You get it.  
                    </p>
                </div>
                
            </div>
        )
    }

    // Renders all FanDuel Bets as individual Cards
    function renderBetCards(){
        if (!bets || bets.length < 1){
            return
        }
        let fullRenderList = []
        let row = []
        let i = 0
        bets.forEach((betCard, index) => {
            const awayLine = betCard?.bet?.moneyline?.[betCard.away] ? betCard?.bet?.moneyline?.[betCard.away] : false
            const homeLine = betCard?.bet?.moneyline?.[betCard.home] ? betCard?.bet?.moneyline?.[betCard.home] : false

            const awayDiff = betCard?.bet?.spread?.[betCard.away]?.diff ? betCard?.bet?.spread?.[betCard.away]?.diff : false
            const homeDiff = betCard?.bet?.spread?.[betCard.home]?.diff ? betCard?.bet?.spread?.[betCard.home]?.diff : false

            const awaySpreadOdds = betCard?.bet?.spread?.[betCard.away]?.odds ? betCard?.bet?.spread?.[betCard.away]?.odds : "No Spread Betting"
            const homeSpreadOdds = betCard?.bet?.spread?.[betCard.home]?.odds ? betCard?.bet?.spread?.[betCard.home]?.odds : "No Spread Betting"

            const tipoff = betCard.tipoff

            // if (!awayLine && !awayDiff){
            //     return false
            // }

            row = [
                ...row, 
                (
                <OstCard 
                style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 4}}
                >
                    <div style={{borderRadius: 15, paddingBottom: 0, marginBottom: 15, paddingRight: '3.3%', paddingLeft: '3.3%', backgroundColor: "#11013b"}}>
                        <p style={{...Styles.Fonts.basic, color: '#efefef', lineHeight: 1, margin: 2, padding: 2, fontSize: 24}}>
                            {betCard.away} @ {betCard.home}
                        </p>
                        <p style={{...Styles.Fonts.basic, color: '#efefef', lineHeight: 1, margin: 2, padding: 2, paddingTop: 5}}>
                            {renderDate(betCard.tipoff)}
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                        {renderTeamBetCard(betCard.away, awayLine, awayDiff, awaySpreadOdds, tipoff)}
                        {renderTeamBetCard(betCard.home, homeLine, homeDiff, homeSpreadOdds)}
                    </div>
                </OstCard>
                )
            ]
            i = i + 1
            if (i == 3 || index >= bets.length - 1){
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

    // Takes UTC Date String and Returns it Legibly
    function renderDate(dateTime){
        let dateArray = dateTime.split("-")
        let time = dateArray[2].split("T")[1]
        dateArray[2] = dateArray[2].split("T")[0]
        dateArray = [...dateArray, time]
        return `${dateArray[1]}-${dateArray[2]} at ${renderTime(dateArray[3])}`
    }

    // Takes Military Time and Converts it 
    function renderTime(time){
        let ampm = "am"
        let hour = parseInt(time.split(":")[0], 10)
        if (hour > 12){
            hour = hour - 12
            ampm = "pm"
        }
        if (hour == 0){
            hour = 12
        }
        return `${hour}:${time.split(":")[1]}${ampm}`
    }

    // Renders a single Moneyline / Spread Sheet
    function renderTeamBetCard(team, line, points, spreadLine){
        return(
            <OstCard 
            style={{flex: 5, height: 230}}
            onClick={(team, line, points, spread) => {

            }}
            >
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

    // Main Render for Betting Area
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


    /////////////////
    // Main Render //
    /////////////////
    return (
        <div style={{marginTop: 20}}>
            <div style={Styles.Fonts.pageTitle}>The NBA BetBot </div>
            {renderIntro()}
            {renderBetCardArea()}
        </div>
    );
}