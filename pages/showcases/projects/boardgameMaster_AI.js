// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";
import { HeaderBar } from "../../../components/Global/headerBar";

export default function BoardGameMasterAIProjectPage() {

    ///////////
    // State //
    ///////////

        // Selected Game
        const [selGame, setSelGame] = useState(false)

        // Current Question
        const [current, setCurrent] = useState("")

        // Messages
        const [messages, setMessages] = useState([])

    ///////////////
    // UseEffect //
    ///////////////

        // Empties Messages When Game Changes
        useEffect(() => {
            setMessages([])
            setCurrent("")
        }, [selGame])

    ///////////////
    // Functions //
    ///////////////

        function determineDropTitle(){
            return (selGame ? selGame : "No Game Selected")
        }

        function sendMessage(){
            let newMessage = {
                from: "User",
                content: current
            }
            let fullMessage = current
            if (messages.length === 0){
                fullMessage = `In the game ${selGame}, ${current}`
            }
            setCurrent("")
            setMessages(prev => [...prev, newMessage]);
            handleRequestToAPI(fullMessage)
        }

        async function handleRequestToAPI(fullMessage){
            fetch("/api/boardGameWizard", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: fullMessage }),
            })
            .then(async (res) => {
                const text = await res.text(); 
                console.log("Raw API response:", text);
                try {
                    const json = JSON.parse(text);
                    console.log("Parsed JSON:", json);
                    let newMessage = {
                        from: "AI",
                        content: json.reply
                    }
                    setMessages(prev => [...prev, newMessage])
                } 
                catch (err) {
                    console.error("BEDROCK ERROR:", JSON.stringify(err, null, 2));
                    res.status(500).json({ message: "Internal server error" });
                }
            })
            .catch((err) => {
                console.error("API call failed:", err);
            });
        }
    
    ////////////////
    // Renderings //
    ////////////////

        function renderMessages(){
            return messages.map(msg => {
                return (
                    <div style={{width: '100%', display: 'flex', marginTop: 15, flexDirection:( msg.from === "User" ? 'row-reverse' : 'row')}}>
                        <OstCard style={{maxWidth: '60%', backgroundColor: ( msg.from === "User" ? 'cyan' : 'white')}}>
                            {msg.content}
                        </OstCard>
                    </div>
                )
            })
        }

return (
    <div style={{marginTop: 20}}>
        <div style={Styles.Fonts.pageTitle}>The Board Game Master AI</div>

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

            <div style={{...Styles.Sections.lessonContent, alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <div>
                    <OstrichDropDown 
                        boxStyle={{width: 400, alignContent: 'center'}}
                        title={determineDropTitle()}
                        titleStyle={{fontSize: 20}}
                        onDrawerClick={(drawer) => setSelGame(drawer)}
                        drawers={[
                            "Checkers",
                            "Chess",
                            "Splendor",
                            "Robo Quest Arena",
                            "5 Minute Mystery",
                            "Jenga",
                            "Monopoly"
                        ]}
                    />
                </div>
                
                <OstCard style={{marginTop: 50, height: '45vw', width: '85%'}}>
                    <OstCard 
                    style={{marginTop: '3%', height: '70%', width: '90%', marginLeft: '5%', borderRadius: 0, backgroundColor: '#ededed', overflow: 'scroll'}}
                    >
                        {renderMessages()}
                    </OstCard>
                    <textarea 
                        type="textarea" 
                        onChange={(event) => setCurrent(event.target.value)} 
                        value={current}
                        style={{
                            marginTop: '3%', 
                            height: '14%', 
                            width: '95%', 
                            marginLeft: '2.5%', 
                            borderRadius: 0, 
                            backgroundColor: '#eee',
                            fontSize: 18,
                            padding: 20,
                            boxSizing: 'border-box',
                            verticalAlign: 'top',
                            fontFamily: 'Gilroy'
                        }}
                    />
                    <OstCard
                        style={{alignSelf: 'flex-end', backgroundColor: '#fff', marginLeft: '88%', marginTop: '-4.5%', width: '7.5%', justifyContent: 'center', display: 'flex', fontSize: 22, borderRadius: 0}}
                        onClick={() => sendMessage()}
                    >
                        Send
                    </OstCard>
                </OstCard>
            </div>
    </div>
  );
}