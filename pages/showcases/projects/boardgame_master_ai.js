// React
import React, {useEffect, useState} from "react";

// Recoil
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";

// Images
const  S3Strcuture = '../../../assets/showcase_images/boardGameWizard/S3Structure.png'
const  BedrockKB = '../../../assets/showcase_images/boardGameWizard/BedrockKB.png'
const  KB_Dash = '../../../assets/showcase_images/boardGameWizard/KB_Dashboard.png'

import fullRequest from "../../../constants/projects/boardgame_master_ai/fullRequest";



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
        const [directory, setDirectory] = useAtom(directoryDataState)

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

        function formatAIResponse(text) {
            return text
              // Add newline before markdown headers like "### Something"
              .replace(/###/g, '\n###')
          
              // Add newline before numbered list items like "1. Something"
              .replace(/(\n?)(\d+\.\s)/g, '\n$2')
              .trim();
          }

        function sendMessage(){
            let newMessage = {
                from: "User",
                content: current
            }
            let fullMessage = current
            let makeRequest = fullRequest
            fullMessage = makeRequest(selGame, current)
            setCurrent("")
            setMessages(prev => [...prev, newMessage]);
            handleRequestToScrapeFanDuel(fullMessage)
        }

        async function handleRequestToScrapeFanDuel(fullMessage){
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
                    let formattedReply = formatAIResponse(json.reply)
                    let newMessage = {
                        from: "AI",
                        content: formattedReply
                    }
                    setMessages(prev => [...prev, newMessage])
                } 
                catch (err) {
                    console.warn("BEDROCK IN RESPONSE ERROR:", JSON.stringify(err, null, 2));
                    console.warn(JSON.stringify(err))
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


    // Actual Content //
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

        function renderINTRO_REGION(){
            return(
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <OstCard style={{margin: "30px", flex: 12}}>
                        <div style={Styles.Sections.lessonContent}>
                            <p style={Styles.Fonts.basicXL}>
                            Below is a Chat Bot designed to answer your questions about any of the board games we have listed! 
                            Simply select a board game from the dropdown menu and enter your question in the text field. 
                            Once complete, press submit and wait for the Board Game Master to give you a response!
                            </p>

                            <p style={Styles.Fonts.basicXL}>
                            This bot was deisgned using Amazon Bedrock. Its knowledge base was compiled by Nick Lanese but all the content was 
                            information from the respecitve board games' official rules (when applicable).
                            </p>

                            <p style={Styles.Fonts.basicXL}>
                            The LLM at use is Titan Text Express and I am using Titan Embedding v2 to extract the information from the knowledge base. 
                            </p>
                        </div>
                    </OstCard>
                </div>
            )
        }

        function renderGAME_DROPDOWN(){
            return(
                <div>
                <OstrichDropDown 
                    boxStyle={{width: 400, alignContent: 'center'}}
                    title={determineDropTitle()}
                    titleStyle={{fontSize: 20}}
                    onDrawerClick={(drawer) => setSelGame(drawer)}
                    drawers={[
                        "5 Minute Mystery",
                        "Checkers",
                        "Chess",
                        "Jenga",
                        "Monopoly",
                        "Poker",
                        "Robo Quest Arena",
                        "Splendor",
                    ]}
                />
            </div>
            )
        }

        function renderMESSAGE_SPACE(){
            return(
                <OstCard style={{marginTop: 10, height: '45vw', width: '100%'}}>
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
                    style={{alignSelf: 'flex-end', backgroundColor: 'white', marginLeft: '88%', marginTop: '-4.5%', width: '7.5%', justifyContent: 'center', display: 'flex', fontSize: 22, borderRadius: 0}}
                    onClick={() => sendMessage()}
                >
                    Send
                </OstCard>
            </OstCard>
            )
        }

    // How-to Section
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
                        <span style={Styles.Code.reg}>{": 0.65,"}</span>
                        <span style={Styles.Code.comment}>{"\t// 0 - 1.0, Higher Values stray further from given data"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 120}}>
                        <span style={Styles.Code.str}>"topP"</span>
                        <span style={Styles.Code.reg}>{": 0.25,"}</span>
                        <span style={Styles.Code.comment}>{"\t// 0 - 1.0, Higher Values need less confidence"}</span>
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

                    <p style={{...Styles.Code.code, marginLeft: 60}}>
                        <span style={Styles.Code.str}>"orchestrationConfiguration"</span>
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
                        <span style={Styles.Code.reg}>{": 0.65,"}</span>
                        <span style={Styles.Code.comment}>{"\t// 0 - 1.0, Higher Values stray further from given data"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 120}}>
                        <span style={Styles.Code.str}>"topP"</span>
                        <span style={Styles.Code.reg}>{": 0.35,"}</span>
                        <span style={Styles.Code.comment}>{"\t// 0 - 1.0, Higher Values need less confidence"}</span>
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
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                        <span style={Styles.Code.bool}>{"}"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                        <span style={Styles.Code.keyword}>{"}"}</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.func}>{"}"}</span>
                        <span style={Styles.Code.bool}>{")"}</span>
                    </p>

                    <p style={{...Styles.Code.code, marginTop: 20}}>
                        <span style={Styles.Code.keyword}>const </span>
                        <span style={Styles.Code.var}>response</span>
                        <span style={Styles.Code.reg}> = </span>
                        <span style={Styles.Code.var}>client</span>
                        <span style={Styles.Code.reg}>.</span>
                        <span style={Styles.Code.func}>send(</span>
                        <span style={Styles.Code.var}>command</span>
                        <span style={Styles.Code.func}>{")"}</span>
                    </p>
                </div>
            )
        }

        function renderAWSClientCode(){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '65%'}}>
                     <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>import </span>
                        <span style={Styles.Code.func}>{"{"}</span>
                        <span style={Styles.Code.var}>BedrockAgentRuntimeClient</span>
                        <span style={Styles.Code.reg}>{","}</span>
                        <span style={Styles.Code.var}>RetrieveAndGenerateCommand</span>
                        <span style={Styles.Code.func}>{"}"}</span>
                        <span style={Styles.Code.keyword}> from </span>
                        <span style={Styles.Code.str}>"@aws-sdk/client-bedrock-agent-runtime" </span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.keyword}>const </span>
                        <span style={Styles.Code.var}>client</span>
                        <span style={Styles.Code.reg}>{" = "}</span>
                        <span style={Styles.Code.bool}>new </span>
                        <span style={Styles.Code.keyword}>BedrockAgentRuntimeClient</span>
                        <span style={Styles.Code.func}>{"("}</span>
                        <span style={Styles.Code.reg}>{"{"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                        <span style={Styles.Code.var}>region </span>
                        <span style={Styles.Code.reg}>: </span>
                        <span style={Styles.Code.var}>process.env.AWS_REGION </span>
                        <span style={Styles.Code.reg}>, </span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                        <span style={Styles.Code.var}>credentials </span>
                        <span style={Styles.Code.reg}>{": {"}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                        <span style={Styles.Code.var}>accessKeyId</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.var}>process.env.AWS_ACCESS_ID </span>
                        <span style={Styles.Code.reg}>{","}</span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 40}}>
                        <span style={Styles.Code.var}>secretAccessKey</span>
                        <span style={Styles.Code.reg}>{": "}</span>
                        <span style={Styles.Code.var}>process.env.AWS_SECRET_ACCESS_KEY </span>
                    </p>
                    <p style={{...Styles.Code.code, marginLeft: 20}}>
                        <span style={Styles.Code.reg}>{"}"}</span>
                    </p>
                    <p style={Styles.Code.code}>
                        <span style={Styles.Code.reg}>{"}"}</span>
                        <span style={Styles.Code.func}>{")"}</span>
                    </p>
                </div>
            )
        }

       

return (
    <div style={{marginTop: 20, marginLeft: '10%', width: '80%'}}>
        <div style={Styles.Fonts.pageTitle}>The Board Game Master AI</div>

        {renderINTRO_REGION()}

        {/* Board Game AI  */}
        <div style={{...Styles.Sections.lessonContent, alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            
            {/* Dropdown */}
            {renderGAME_DROPDOWN()}
            
            {/* Message Space */}
            {renderMESSAGE_SPACE()}

        </div>

        {/* Technical Exploration */}
        <div style={{...Styles.Sections.lessonContent, marginTop: 50}}>
            <OstCard style={{padding: 30}}>

                {/* Constructing the Chatbot */}
                <div>
                    <p style={Styles.Fonts.lessonHeaderXL}>
                        Constructing the Request
                    </p>
                    <p style={Styles.Fonts.basicXL}>
                    Like everything else you see on this site, the UI was constructed using Ostrich React Components (Made by myself) on NextJS. 
                    The majority of the code sending the request to the API is within the `api` subdirectory that is naturally a part of NextJS projects.
                    This makes the process of sending the initial request to the backend where the API request is compiled much simpler
                    </p>

                    {renderBackendRequestCode()}                   
                    
                    <p style={Styles.Fonts.basicXL}>
                    From there, the user Message is taken, packaged up in a request and sent to this project's `ppages/api/boardGameWizard.js' file, where the 
                    brunt of the request content lies. There, we compile the request to my specific Amazon Bedrock Bnowledge Base API
                    </p>

                    <p style={Styles.Fonts.basicXL}>
                    Thankfully, AWS makes sending the request pretty simple. They have a default option to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html">copy and paste from</a>, but
                    it is recommended you adjust some of the values and structure youself. The adjustments depend on what model you are using 
                    for Text Generation. This does NOT have anything to do with the model you have selected for Text Embedding and Processing. 
                    </p>

                    {renderAWSRequestCode()}

                    <p style={Styles.Fonts.basicXL}>
                    As you may see, we make the API call using the 'send' function from a client variable; as opposed to using Axios or some other generic HTTP Request function. This is because 
                    we need to make the request through a logged in client instance of AWS. We must configure the client using our AWS Region, I_AM Access ID, and our Knowledge Base's Secrey Key. 
                    You can find all of these in your AWS Console, and we will cover how to find those further along in this page. However, immediately below you will see the proper syntax for creating
                    and AWS client object
                    </p>

                    {renderAWSClientCode()}

                    <p style={Styles.Fonts.basicXL}>
                    And that is as much coding as we will need for creating this Chat Bot! The rest of the work is done in the AWS Console
                    </p>

                    <p style={{...Styles.Fonts.lessonHeaderXL, marginTop: 75, marginBottom: 35}}>
                        Setting up the Knowledge Base in AWS
                    </p>

                    <p style={Styles.Fonts.basicXL}>
                    The first thing to do is generate a document (or up to 10 documents) that hold the information you want your Chat Bot to reference. 
                    For now, all of my Board Game Rules are stored in a single text document, since they can be a massive size. However, upon adding more rules,
                    I may be forced to split the master document up into smaller sections. Regardless, we have to upload this document to an S3 Bucket
                    </p>

                    <OstCard
                        templateStyle={1}
                        imageSrc={S3Strcuture}
                    />

                    <p style={Styles.Fonts.basicXL}>
                    From here, you will want to navigae to the AWS Bedrock Dashboard. Once there, you will be able to do a few different actions, but for now we are
                    focused on the Knowledge Bases. Clicking Knowledge Bases from the left menu will bring you to the 
                    desired dashboard
                    </p>

                    <OstCard
                        templateStyle={1}
                        imageSrc={BedrockKB}
                    />

                    <p style={Styles.Fonts.basicXL}>
                    You then get brought to the AWS Bedrock Knowledge Bases Dashboard, you will want to select onw of your Knowledge Bases. If you have none, none 
                    will be shown and you will be prompted to create one. Once you have created one or clicked on an existing one, you will be brought to the Knowledge Base Actions Dashboard. 
                    From here you have a lot of different customization options as well as an ability to test different LLMs against your knowledge base
                    </p>

                    <OstCard
                        templateStyle={1}
                        imageSrc={KB_Dash}
                    />

                </div>

                {/* Errors and Issues */}
                <div style={{marginTop: 75}}>
                    <p style={{...Styles.Fonts.lessonHeaderXL, marginTop: 75, marginBottom: 35}}>
                        Errors and Issues with Solutions
                    </p>
                    <div>
                        <div>
                            <OstCard style={{backgroundColor: '#db695e', fontWeight: 600, fontSize: 28}}>
                            ValidationException: The model arn provided is not supported. Please check your configuration and retry the request
                            </OstCard>
                        </div>
                        <div>
                            <p style={Styles.Fonts.basicXL}>
                                AWS is constantly updating their models, and similarly the connected parties AWS works with are updating their's
                                as well. As such, models can become deprecated. When this happens, you will need to find an accepted model. Once you have,
                                update your model arn (which should be stored in your .env file). Recall the following line inside of your <span style={{...Styles.Code.code, fontSize: 24, fontWeight: 600}}>retrieveAndGenerateConfiguration</span> property
                            </p>
                            <div style={{...Styles.Sections.simpleLessonCode, minWidth: 1000}}>
                                <p style={{...Styles.Code.code, marginLeft: 60}}>
                                    <span style={Styles.Code.str}>"modelArn"</span>
                                    <span style={Styles.Code.reg}>{": "}</span>
                                    <span style={Styles.Code.var}>process.env.BEDROCK_MODEL_ARN</span>
                                    <span style={Styles.Code.comment}> {"// This value will need to be updated in your .env file"}</span>
                                    <span style={Styles.Code.reg}>{","}</span>
                                </p>
                            </div>
                            <p style={{...Styles.Fonts.basicXL, padding: 0, margin: 0}}>
                                A proper model arn string will look as follows...
                            </p>
                            <div style={{...Styles.Sections.simpleLessonCode, minWidth: 800}}>
                                <p style={{...Styles.Fonts.basicXL, color: "white", paddingLeft: 40}}>
                                    arn:aws:bedrock:<span style={{color: 'red'}}>[region]</span>::foundation-model/<span style={{color: 'red'}}>[model string]</span>
                                </p>
                            </div>
                            <p style={{...Styles.Fonts.basicXL, padding: 0, margin: 0}}>
                                Where <span style={{color: 'red'}}>regions</span> look like... <span style={{color: 'grey'}}>us-west-2</span>
                            </p>
                            <p style={{...Styles.Fonts.basicXL, padding: 0, margin: 0}}>
                                and <span style={{color: 'red'}}>model strings</span> look like... <span style={{color: 'grey'}}>anthropic.claude-3-haiku-20240307-v1:0</span>
                            </p>
                            <p style={Styles.Fonts.basicXL}>
                                Considering that models are always being updated and that licensing will always keep models from being truly static;
                                it is good to periodically check what models are acceptable for AWS Bedrock Knowledge Bases, as any of the models that are not 
                                on <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-supported.html">this list</a> will cause the error seen above, even if they exist on other AWS services. 
                            </p>
                            <p style={Styles.Fonts.basicXL}>
                                Once you have determined which model best suits your needs, you will then want to look it up in the <a href="https://us-east-1.console.aws.amazon.com/bedrock/home?region=us-east-1#/model-catalog?region=us-east-1&providerName=anthropic">
                                AWS Model Registry</a> in order to find the model arn string that you need for your request. 
                            </p>
                        </div>

                    </div>
                </div>
            </OstCard>
        </div>
    </div>
  );
}