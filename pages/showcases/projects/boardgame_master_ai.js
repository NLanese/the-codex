// React
import React, {useEffect, useState} from "react";

// Recoil
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "@ostrich_development/ostrich-components";
import { OstrichDropDown } from "@ostrich_development/ostrich-components";

// Diagram
import BoardGameFlowDiagram from "../../../components/Showcase/BoardGameFlowDiagram";

// Images
const  S3Strcuture = '../../../assets/showcase_images/boardGameWizard/S3Structure.png'
const  BedrockKB = '../../../assets/showcase_images/boardGameWizard/BedrockKB.png'
const  KB_Dash = '../../../assets/showcase_images/boardGameWizard/KB_Dashboard.png'




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

        // Waiting on the AI
        const [loading, setLoading] = useState(false)

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
            const question = current.trim()
            if (!question || loading) return
            if (!selGame) {
                setMessages(prev => [...prev, {from: "AI", content: "Please pick a game from the dropdown first!", error: true}])
                return
            }
            // Earlier turns (minus errors) let the AI handle follow-up questions
            const history = messages
                .filter(m => !m.error)
                .map(m => ({ role: m.from === "User" ? "user" : "assistant", content: m.content }))
            setCurrent("")
            setMessages(prev => [...prev, {from: "User", content: question}])
            handleRequestToBackend(selGame, question, history)
        }

        async function handleRequestToBackend(game, question, history){
            setLoading(true)
            try {
                const res = await fetch("/api/boardGameWizard", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ game, question, history }),
                })
                const json = await res.json().catch(() => ({}))
                if (!res.ok) throw new Error(json.message || "Something went wrong. Please try again.")
                setMessages(prev => [...prev, {
                    from: "AI",
                    content: formatAIResponse(json.reply),
                    sources: json.sources || []
                }])
            }
            catch (err) {
                console.error("Board Game Master request failed:", err)
                setMessages(prev => [...prev, {from: "AI", content: err.message, error: true}])
            }
            finally {
                setLoading(false)
            }
        }
    
    ////////////////
    // Renderings //
    ////////////////


    // Actual Content //
        function renderMessages(){
            const bubbles = messages.map((msg, i) => {
                return (
                    <div key={i} style={{width: '100%', display: 'flex', marginTop: 15, flexDirection:( msg.from === "User" ? 'row-reverse' : 'row')}}>
                        <OstCard style={{maxWidth: '60%', backgroundColor: ( msg.from === "User" ? 'cyan' : (msg.error ? '#f6d5d1' : 'white'))}}>
                            <p style={{...Styles.Fonts.basic, margin: 3, padding: 1, whiteSpace: 'pre-wrap'}}> 
                                {msg.content}
                            </p>
                            {msg.sources && msg.sources.length > 0 &&
                                <p style={{...Styles.Fonts.basic, margin: 3, padding: 1, fontSize: 13, color: 'grey'}}>
                                    Rules used: {msg.sources.join(" · ")}
                                </p>
                            }
                        </OstCard>
                    </div>
                )
            })
            if (loading) {
                bubbles.push(
                    <div key="loading" style={{width: '100%', display: 'flex', marginTop: 15}}>
                        <OstCard style={{backgroundColor: 'white'}}>
                            <p style={{...Styles.Fonts.basic, margin: 3, padding: 1, color: 'grey'}}>Checking the rulebook...</p>
                        </OstCard>
                    </div>
                )
            }
            return bubbles
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
                            The knowledge base was compiled by Nick Lanese, and all of its content comes from the respective board games' 
                            official rules (when applicable).
                            </p>

                            <p style={Styles.Fonts.basicXL}>
                            The first version of this bot ran on Amazon Bedrock, but keeping it running cost close to $200-300 a month. 
                            This version does its own retrieval: the rules are searched inside this website's code, and only the few 
                            matching sections are sent to a hosted LLM (Google Gemini Flash) to write the answer, which keeps it within Gemini's free tier.
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
                    {loading ? "..." : "Send"}
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
                            <span style={Styles.Code.var}>message</span>
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

        function renderCodeBlock(code){
            return(
                <div style={{...Styles.Sections.simpleLessonCode, width: '80%'}}>
                    <pre style={{...Styles.Code.code, whiteSpace: 'pre-wrap', margin: 0}}>{code}</pre>
                </div>
            )
        }

       

return (
    <div className="codex-writeup" style={{marginTop: 20, marginLeft: '10%', width: '80%'}}>
        <div className="codex-page-title" style={Styles.Fonts.pageTitle}>The Board Game Master AI</div>

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

                {/* Version 2: Local RAG */}
                <div>
                    <p style={Styles.Fonts.lessonHeaderXL}>
                        Version 2: How It Works (in Plain English)
                    </p>

                    <p style={{...Styles.Fonts.lessonHeaderXL, fontSize: 30}}>The Big Idea</p>
                    <p style={Styles.Fonts.basicXL}>
                    Think of it as an open-book test. A language model is smart, but it doesn't reliably know the exact rules of 
                    Robo Quest Arena, and if it guesses it may make rules up. So before asking it anything, the code first finds the relevant pages 
                    of the rulebook and hands them over along with the question: "using only these pages, answer this." That's all RAG 
                    (Retrieval-Augmented Generation) means. <i>Retrieval</i> is finding the right pages, and <i>generation</i> is the AI writing the answer.
                    </p>
                    <p style={Styles.Fonts.basicXL}>
                    Version 1 used Amazon Bedrock, which did both steps on AWS and charged around the clock whether anyone used it or not. 
                    In Version 2, this website's own code does the retrieval for free, and a hosted AI (Google Gemini Flash) only does the writing.
                    </p>

                    <BoardGameFlowDiagram />

                    <p style={{...Styles.Fonts.lessonHeaderXL, fontSize: 30}}>Part 1: Preparing the Rulebooks (top row)</p>
                    <p style={Styles.Fonts.basicXL}>
                    This only happens when I add or change rules, never when someone uses the site.
                    </p>
                    <p style={Styles.Fonts.basicXL}>
                    <b>The rules files</b> are plain text, one file per game, in <code>data/boardgame_rules/</code>.
                    </p>
                    <p style={Styles.Fonts.basicXL}>
                    <b>The build script</b> reads each file and does two things. First, it <b>chops</b> each rulebook into bite-sized sections of 
                    about 220 words, like tearing a manual into index cards. Each card remembers the heading it came from, such as 
                    "How To Castle In Chess." Second, it <b>counts the words</b> on each card. Small connecting words like "the" and "and" are skipped, 
                    and word endings are trimmed so "castle" and "castling" count as the same word. These counts are what make searching possible later.
                    </p>
                    {renderCodeBlock(`node scripts/boardgame/buildRulesIndex.mjs
// reads data/boardgame_rules/  →  writes constants/projects/boardgame_master_ai/rulesIndex.json`)}
                    <p style={Styles.Fonts.basicXL}>
                    <b>rulesIndex.json</b> is the result: all the index cards and their word counts in one file. It is deployed along with 
                    the website like any other file, so there is no database or server to pay for.
                    </p>

                    <p style={{...Styles.Fonts.lessonHeaderXL, fontSize: 30}}>Part 2: When Someone Asks a Question (bottom row)</p>
                    <p style={Styles.Fonts.basicXL}>
                    <b>The page.</b> When you pick "Chess" and type "How do I castle?", the page sends three things to the server: 
                    the game name, the question, and the conversation so far, so that follow-ups like "what about queenside?" make sense. 
                    It then shows "Checking the rulebook..." while it waits.
                    </p>
                    <p style={Styles.Fonts.basicXL}>
                    <b>The API route</b> (<code>pages/api/boardGameWizard.js</code>) is the function that runs on Vercel's servers. In order, it:
                    </p>
                    <ol style={{...Styles.Fonts.basicXL, paddingLeft: 60}}>
                        <li><b>Checks it's a real request.</b> Anything other than a submitted question is turned away.</li>
                        <li><b>Checks the visitor isn't spamming.</b> More than 8 questions in a minute gets a polite "please wait."</li>
                        <li><b>Checks the question makes sense.</b> A game must be picked, and the question can't be empty or longer than 1,000 characters.</li>
                        <li><b>Checks it has rules for that game.</b> If not, it says "I don't have the rules for that game loaded yet."</li>
                        <li><b>Checks the API key is set up.</b> A missing key gives a clear error instead of a mysterious failure.</li>
                        <li><b>Tidies the conversation history.</b> It keeps only the last 6 messages, and only real "user" and "assistant" messages, so nobody can sneak in fake instructions.</li>
                        <li><b>Searches the rulebook</b> (next section).</li>
                        <li><b>Builds the prompt, asks the AI, and sends the answer back.</b></li>
                    </ol>

                    <p style={Styles.Fonts.basicXL}>
                    <b>The search</b> only looks at the selected game's cards, so a Chess question can never pull in rules from Checkers. If the rulebook 
                    is short (under 3,500 words), it skips searching and hands over the whole thing, so the AI sees every rule. Six of the eight 
                    games are that size. For the long ones (Poker and Robo Quest Arena), it scores every card. A card scores higher when it contains 
                    words from the question, especially rare words: "castle" counts for a lot, while "move" appears everywhere and counts for little. 
                    The top 6 cards win. This scoring formula is called BM25, and it's how classic search engines rank results.
                    </p>
                    {renderCodeBlock(`const gameIndex = rulesIndex.games[game]
const { chunks } = retrieve(gameIndex, question)   // top 6 cards, or the whole rulebook if it's short`)}

                    <p style={Styles.Fonts.basicXL}>
                    <b>Building the prompt.</b> <code>fullRequest.js</code> assembles the message for the AI. It contains the instructions 
                    (treat people as beginners, give segmented answers, never make up rules), the winning rulebook cards, the earlier conversation, 
                    and the new question.
                    </p>
                    <p style={Styles.Fonts.basicXL}>
                    <b>The AI.</b> The prompt is sent over the internet to Google's Gemini API, which runs a Gemini Flash model to write the answer. This is the 
                    only step that leaves the website. Because it uses the standard OpenAI-style chat format, switching to a different AI 
                    provider only means changing a few settings, and while developing I can point it at Ollama on my own computer so the 
                    whole thing runs locally.
                    </p>
                    {renderCodeBlock(`fetch(\`\${LLM_BASE_URL}/chat/completions\`, {
    method: "POST",
    headers: { Authorization: \`Bearer \${LLM_API_KEY}\` },
    body: JSON.stringify({
        model: LLM_MODEL,   // a Gemini Flash model
        messages: fullRequest(game, chunks, history, question),
    }),
})`)}
                    <p style={Styles.Fonts.basicXL}>
                    <b>Back to the page.</b> The function returns the answer plus the names of the rule sections it used, which show up as a small 
                    "Rules used" line under each answer. If anything goes wrong, such as the AI being busy, a friendly message appears in the chat instead.
                    </p>

                    <p style={{...Styles.Fonts.lessonHeaderXL, fontSize: 30}}>Keeping the Key Secret</p>
                    <p style={Styles.Fonts.basicXL}>
                    Gemini needs an API key, which is like a password proving the request comes from my account. It is never written in the code, 
                    because the code lives on GitHub where anyone could copy it. Instead it's stored as an <b>environment variable</b>: a setting kept 
                    outside the code (in a <code>.env.local</code> file on my computer, and in Vercel's settings for the live site) that the 
                    server reads when it runs.
                    </p>

                    <p style={{...Styles.Fonts.lessonHeaderXL, fontSize: 30}}>Cost and Upkeep</p>
                    <p style={Styles.Fonts.basicXL}>
                    The bot runs on Gemini's free tier, so instead of $200-300 a month it costs nothing. The only upkeep is re-running the build 
                    script and redeploying whenever I edit a rulebook.
                    </p>
                </div>

                {/* Constructing the Chatbot */}
                <div style={{marginTop: 75}}>
                    <p style={Styles.Fonts.lessonHeaderXL}>
                        Version 1 (Archived): Constructing the Request
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
                        Version 1 (Archived): Setting up the Knowledge Base in AWS
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
                        Version 1 (Archived): Errors and Issues with Solutions
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