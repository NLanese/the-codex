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

        // Directory
        const [directory, setDirectory] = useRecoilState(directoryDataState)

    ///////////////
    // UseEffect //
    ///////////////

        // Sets Directory
        useEffect(() => {
            setDirectory("Portfolio")            
        }, [])

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
            fullMessage = `(This question is for the game ${selGame}, ${current})`
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
                            <p style={{...Styles.Fonts.basic, margin: 3, padding: 1}}> 
                                {msg.content}
                            </p>
                        </OstCard>
                    </div>
                )
            })
        }

        function renderBackendRequestCode(){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '60%'}}>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.bool}>async </span>
                            <span style={Styles.Code.keyword}>function </span>
                            <span style={Styles.Code.func}>handleRequestToBackend</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.var}>message</span>
                            <span style={Styles.Code.keyword}>{"){"}</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.func}>fetch( </span>
                            <span style={Styles.Code.str}>"api/boardGameWizard" </span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.func}>{" {"}</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 40}}>
                            <span style={Styles.Code.var}>method</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"POST"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 40}}>
                            <span style={Styles.Code.var}>headers</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.keyword}>{" { "}</span>
                            <span style={Styles.Code.str}>"Content-Type"</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"application/json"</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 40}}>
                            <span style={Styles.Code.var}>body</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.var}>JSON</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.func}>stringify</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.bool}>{"{"}</span>
                            <span style={Styles.Code.var}>message</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.var}>messaage</span>
                            <span style={Styles.Code.bool}>{"}"}</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 0}}>
                            <span style={Styles.Code.bool}>{"}"}</span>
                            <span style={Styles.Code.func}>{")"}</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 0}}>
                            <span style={Styles.Code.reg}>{"."}</span>
                            <span style={Styles.Code.keyword}>{"then("}</span>
                            <span style={Styles.Code.comment}>{"/* the rest */"}</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                        </p>
                </div>
            )
        }

        function renderAWSRequestCode(){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '60%'}}>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>const </span>
                        <span style={Styles.Code.var}>message</span>
                        <span style={Styles.Code.reg}>{" = "}</span>
                        <span style={Styles.Code.var}>req</span>
                        <span style={Styles.Code.reg}>.</span>
                        <span style={Styles.Code.var}>body</span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>const </span>
                        <span style={Styles.Code.var}>command</span>
                        <span style={Styles.Code.reg}>{" = "}</span>
                        <span style={Styles.Code.keyword}>new </span>
                        <span style={Styles.Code.func}>RetrieveAndGenerateCommand</span>
                        <span style={Styles.Code.bool}>{"("}</span>
                        <span style={Styles.Code.func}>{"{"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                        <span style={Styles.Code.var}>input</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.keyword}>{"{ "}</span>
                        <span style={Styles.Code.var}>text</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.var}>message </span>
                        <span style={Styles.Code.keyword}>{"}"}</span>
                        <span style={Styles.Code.reg}>{","}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                        <span style={Styles.Code.str}>"retrieveAndGenerateConfiguration"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.keyword}>{"{ "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                        <span style={Styles.Code.str}>"type"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.str}>"KNOWLEDGE_BASE"</span>
                        <span style={Styles.Code.reg}>{","}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                        <span style={Styles.Code.str}>"knowledgeBaseConfiguration"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.bool}>{"{ "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 60}}>
                        <span style={Styles.Code.str}>"knowledgeBaseId"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.var}>process.env.BEDROCK_KB_ID</span>
                        <span style={Styles.Code.reg}>{","}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 60}}>
                        <span style={Styles.Code.str}>"modelArn"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.var}>process.env.BEDROCK_MODEL_ARN</span>
                        <span style={Styles.Code.reg}>{","}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 60}}>
                        <span style={Styles.Code.str}>"retrievalConfiguration"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.func}>{"{ "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 80}}>
                        <span style={Styles.Code.str}>"vectorSearchConfiguration"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.keyword}>{"{ "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 100}}>
                        <span style={Styles.Code.str}>"numberOfResults"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.reg}>3</span>
                        <span style={Styles.Code.reg}>{","}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 80}}>
                        <span style={Styles.Code.keyword}>{"}"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 60}}>
                        <span style={Styles.Code.func}>{"}"}</span>
                        <span style={Styles.Code.reg}>{", "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 60}}>
                        <span style={Styles.Code.str}>"generationConfiguration"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.func}>{"{ "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 80}}>
                        <span style={Styles.Code.str}>"inferenceConfig"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.keyword}>{"{ "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 100}}>
                        <span style={Styles.Code.str}>"textInferenceConfig"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.var}>{"{ "}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 120}}>
                        <span style={Styles.Code.str}>"temperature"</span>
                        <span style={Styles.Code.reg}>{": 0.05,"}</span>
                        <span style={Styles.Code.comment}>{"     // 0 - 1.0, Higher Values stray further from given data"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 120}}>
                        <span style={Styles.Code.str}>"topP"</span>
                        <span style={Styles.Code.reg}>{": 0.93,"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 120}}>
                        <span style={Styles.Code.str}>"maxTokens"</span>
                        <span style={Styles.Code.reg}>{": 256,"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 120}}>
                        <span style={Styles.Code.str}>"stopSequences"</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.func}>{"[]"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 100}}>
                        <span style={Styles.Code.var}>{"}"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 80}}>
                        <span style={Styles.Code.keyword}>{"}"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 60}}>
                        <span style={Styles.Code.func}>{"}"}</span>
                        <span style={Styles.Code.reg}>{","}</span>
                    </p>

                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.func}>{"}"}</span>
                        <span style={Styles.Code.bool}>{")"}</span>
                    </p>
                </div>
            )
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

        {/* Board Game AI  */}
        <div style={{...Styles.Sections.lessonContent, alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            
            {/* Dropdown */}
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
            
            {/* Message Space */}
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

        {/* Technical Exploration */}
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
            <OstCard style={{margin: "30px", flex: 12}}>
                <div style={Styles.Sections.lessonContent}>
                    <p style={Styles.Fonts.basic}>
                    Like everything else you see on this site, the UI was constructed using Ostrich React Components (Made by myself) on NextJS. 
                    The majority of the code sending the request to the API is within the `api` subdirectory that is naturally a part of NextJS projects.
                    This makes the process of sending the initial request to the backend where the API request is compiled much simpler
                    </p>

                    {renderBackendRequestCode()}                   
                    
                    <p style={Styles.Fonts.basic}>
                    From there, the user Message is taken, packaged up in a request and sent to this project's `ppages/api/boardGameWizard.js' file, where the 
                    brunt of the request content lies. There, we compile the request to my specific Amazon Bedrock Bnowledge Base API
                    </p>

                    <p style={Styles.Fonts.basic}>
                    Thankfully, AWS makes sending the request pretty simple. They have a default option to copy and paste from, but
                    it is recommended you adjust some of the values and structure youself. The adjustments depend on what model you are using 
                    for Text Generation. This does NOT have anything to do with the model you have selected for Text Embedding and Processing. 
                    </p>

                    {renderAWSRequestCode()}

                </div>
            </OstCard>
        </div>
    </div>
  );
}