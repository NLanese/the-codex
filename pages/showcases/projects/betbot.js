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
                console.log("Raw API response:", text);
                try {
                    const json = JSON.parse(text);
                    console.log(json)
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


return (
    <div style={{marginTop: 20}}>
        <div style={Styles.Fonts.pageTitle}>The NBA BetBot </div>

        <div style={{display: 'flex', flexDirection: 'row'}}>
            <OstCard style={{margin: "30px", flex: 12}}>
                <div style={Styles.Sections.lessonContent}>
                    <p style={Styles.Fonts.basic}>
                    Below is a Chat Bot designed to answer your questions about any of the board games we have listed! 
                    Simply select a board game from the dropdown menu and enter your question in the text field. 
                    Once complete, press submit and wait for the Board Game Master to give you a response!
                    </p>

                    <p style={Styles.Fonts.basic}>
                    This bot was deisgned using Amazon Bedrock. Its knowledge base was compiled by Nick Lanese but all the content was 
                    information from the respecitve board games' official rules (when applicable).
                    </p>

                    <p style={Styles.Fonts.basic}>
                    The LLM at use is Titan Text Express and I am using Titan Embedding v2 to extract the information from the knowledge base. 
                    </p>
                </div>
            </OstCard>
        </div>
    </div>
  );
}