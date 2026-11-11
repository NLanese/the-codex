// React
import React, { useEffect, useRef, useState } from "react";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../jotai/atoms";

// Showcase Kit
import { Page, Hero, ActionButton, PillTabs, Section, Chip, Avatar, DOC, jumpTo } from "../../../components/Showcase/showcaseKit";
import { P, SubHeading, FactRow, Panel, WideShot, Checklist } from "../../../components/Showcase/caseStudyKit";
import { CodeBlock } from "../../../components/ostrich-components/docKit";

// Diagram
import BoardGameFlowDiagram from "../../../components/Showcase/BoardGameFlowDiagram";

const IMAGES = "/assets/showcase_images/boardGameWizard"

const GAMES = [
    "5 Minute Mystery",
    "Checkers",
    "Chess",
    "Jenga",
    "Monopoly",
    "Poker",
    "Robo Quest Arena",
    "Splendor",
]

const STARTER_QUESTIONS = ["How do I win?", "How do I set up the game?", "What can I do on my turn?"]

const VERSION_2 = "Version 2 · Local RAG"
const VERSION_1 = "Version 1 · Amazon Bedrock"


/////////////////////
// Code for the page //
/////////////////////

const BUILD_CODE = `node scripts/boardgame/buildRulesIndex.mjs
// reads data/boardgame_rules/  →  writes rulesIndex.json`

const SEARCH_CODE = `const gameIndex = rulesIndex.games[game]
const { chunks } = retrieve(gameIndex, question)   // top 6 cards, or the whole rulebook if it's short`

const LLM_CODE = `fetch(\`\${LLM_BASE_URL}/chat/completions\`, {
    method: "POST",
    headers: { Authorization: \`Bearer \${LLM_API_KEY}\` },
    body: JSON.stringify({
        model: LLM_MODEL,   // a Gemini Flash model
        messages: fullRequest(game, chunks, history, question),
    }),
})`

const V1_FRONTEND_CODE = `async function handleRequestToBackend(message){
    fetch("api/boardGameWizard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message }),
    })
    .then(/* the rest */)
}`

const V1_COMMAND_CODE = `const command = new RetrieveAndGenerateCommand({
    input: { text: message },
    retrieveAndGenerateConfiguration: {
        type: "KNOWLEDGE_BASE",
        knowledgeBaseConfiguration: {
            knowledgeBaseId: process.env.BEDROCK_KB_ID,
            modelArn: process.env.BEDROCK_MODEL_ARN,
            retrievalConfiguration: { vectorSearchConfiguration: { numberOfResults: 5 } },
        },
    },
})
const response = await client.send(command)`

const V1_CLIENT_CODE = `const client = new BedrockAgentRuntimeClient({
    region: process.env.AWS_DEFAULT_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
})`

const V1_ARN_CODE = `modelArn: process.env.BEDROCK_MODEL_ARN,   // this value needs updating in your .env file

// A model arn looks like:
// arn:aws:bedrock:[region]::foundation-model/[model string]
// region:        us-west-2
// model string:  anthropic.claude-3-haiku-20240307-v1:0`


///////////////////////////
// AI reply formatting //
///////////////////////////

// Gemini answers in light markdown (headings, lists, **bold**). This turns it into simple JSX.
function renderInline(text) {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
    )
}

function renderMarkdown(text) {
    const blocks = []
    let list = null
    const closeList = () => {
        if (!list) return
        const Tag = list.ordered ? "ol" : "ul"
        blocks.push(
            <Tag key={blocks.length} style={{ margin: "4px 0 10px", paddingLeft: 22 }}>
                {list.items.map((it, i) => <li key={i} style={{ marginBottom: 4 }}>{renderInline(it)}</li>)}
            </Tag>
        )
        list = null
    }
    for (const raw of text.split("\n")) {
        const line = raw.trimEnd()
        const heading = line.match(/^#{1,6}\s+(.*)/)
        const bullet = line.match(/^\s*[-*•]\s+(.*)/)
        const numbered = line.match(/^\s*\d+[.)]\s+(.*)/)
        if (heading) {
            closeList()
            blocks.push(<div key={blocks.length} style={{ fontWeight: 700, color: DOC.ink, margin: "12px 0 4px" }}>{renderInline(heading[1])}</div>)
        } else if (bullet || numbered) {
            const ordered = !!numbered
            if (list && list.ordered !== ordered) closeList()
            if (!list) list = { ordered, items: [] }
            list.items.push((bullet || numbered)[1])
        } else if (!line.trim()) {
            closeList()
        } else {
            closeList()
            blocks.push(<p key={blocks.length} style={{ margin: "0 0 10px" }}>{renderInline(line)}</p>)
        }
    }
    closeList()
    return blocks
}


export default function BoardGameMasterAIProjectPage() {

    ///////////
    // State //
    ///////////

        const [directory, setDirectory] = useAtom(directoryDataState)
        const [activeTab, setActiveTab] = useAtom(tabBarState)

        // Selected game
        const [selGame, setSelGame] = useState("Chess")

        // Current question being typed
        const [current, setCurrent] = useState("")

        // Chat messages: { from: "User" | "AI", content, sources?, error? }
        const [messages, setMessages] = useState([])

        // Waiting on the AI
        const [loading, setLoading] = useState(false)

        // Which version of the write-up is showing
        const [version, setVersion] = useState(VERSION_2)

        const chatRef = useRef(null)

    ////////////////
    // UseEffects //
    ////////////////

        useEffect(() => {
            setDirectory("Portfolio")
            setActiveTab("Ongoing Projects")
        }, [])

        // A new game starts a new conversation
        useEffect(() => {
            setMessages([])
            setCurrent("")
        }, [selGame])

        // Keep the newest message in view
        useEffect(() => {
            if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
        }, [messages, loading])

    ///////////////
    // Functions //
    ///////////////

        function sendMessage(text){
            const question = (text ?? current).trim()
            if (!question || loading) return
            if (!selGame) {
                setMessages(prev => [...prev, {from: "AI", content: "Please pick a game above first!", error: true}])
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
            let started = false   // has the AI's message bubble been added yet?
            const updateAnswer = (change) => setMessages(prev => {
                const next = [...prev]
                next[next.length - 1] = { ...next[next.length - 1], ...change(next[next.length - 1]) }
                return next
            })
            try {
                const res = await fetch("/api/boardGameWizard", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ game, question, history }),
                    signal: AbortSignal.timeout(90000),   // never wait forever
                })
                // Problems found before the AI was asked come back as a normal JSON error
                if (!res.ok || !res.body) {
                    const json = await res.json().catch(() => ({}))
                    throw new Error(json.message || "Something went wrong. Please try again.")
                }

                // The answer streams in one JSON object per line, so show each piece as it arrives
                const reader = res.body.getReader()
                const decoder = new TextDecoder()
                let buffer = ""
                let sources = []
                while (true) {
                    const { value, done } = await reader.read()
                    if (done) break
                    buffer += decoder.decode(value, { stream: true })
                    const lines = buffer.split("\n")
                    buffer = lines.pop()
                    for (const line of lines) {
                        if (!line.trim()) continue
                        const event = JSON.parse(line)
                        if (event.type === "sources") sources = event.sources || []
                        if (event.type === "error") throw new Error(event.message)
                        if (event.type === "text") {
                            if (!started) {
                                started = true
                                setLoading(false)
                                setMessages(prev => [...prev, { from: "AI", content: event.text, sources }])
                            } else {
                                updateAnswer(m => ({ content: m.content + event.text }))
                            }
                        }
                    }
                }
                if (!started) throw new Error("The Board Game Master didn't have an answer. Please try rephrasing.")
            }
            catch (err) {
                console.error("Board Game Master request failed:", err)
                const message = err.name === "TimeoutError"
                    ? "The Board Game Master took too long to answer. Please try again."
                    : err.message
                // If part of an answer already showed, keep it and add the error after it
                setMessages(prev => [...prev, {from: "AI", content: message, error: true}])
            }
            finally {
                setLoading(false)
            }
        }

        // Enter sends, Shift + Enter makes a new line
        function handleKeyDown(e){
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                sendMessage()
            }
        }

    ////////////////
    // Renderings //
    ////////////////

    // Chat //
        function renderBubble(msg, i){
            const isUser = msg.from === "User"
            const look = isUser
                ? { backgroundColor: DOC.ink, color: "white", border: `1px solid ${DOC.ink}`, borderRadius: "18px 18px 4px 18px" }
                : msg.error
                    ? { backgroundColor: "#fdecea", color: "#8a1c12", border: "1px solid #f5c6c0", borderRadius: "18px 18px 18px 4px" }
                    : { backgroundColor: "white", color: DOC.text, border: `1px solid ${DOC.line}`, borderRadius: "18px 18px 18px 4px" }
            return (
                <div key={i} style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", marginTop: 12 }}>
                    <div style={{ maxWidth: "78%", padding: "12px 16px", fontSize: 16, lineHeight: 1.6, boxShadow: "0 2px 6px rgba(17, 1, 59, 0.06)", ...look }}>
                        {isUser || msg.error ? msg.content : renderMarkdown(msg.content)}
                        {msg.sources && msg.sources.length > 0 ? (
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, marginTop: 8, paddingTop: 10, borderTop: `1px solid ${DOC.line}` }}>
                                <span style={{ fontSize: 13, color: DOC.muted, marginRight: 2 }}>Rules used:</span>
                                {msg.sources.map(s => <Chip key={s}>{s}</Chip>)}
                            </div>
                        ) : null}
                    </div>
                </div>
            )
        }

        function renderEmptyState(){
            if (!selGame) {
                return (
                    <div style={{ margin: "auto", textAlign: "center", color: DOC.muted, fontSize: 17 }}>
                        Pick a game above to start asking questions.
                    </div>
                )
            }
            return (
                <div style={{ margin: "auto", textAlign: "center" }}>
                    <div style={{ fontSize: 19, fontWeight: 700, color: DOC.ink }}>Ask anything about {selGame}</div>
                    <div style={{ fontSize: 15.5, color: DOC.muted, marginTop: 6 }}>Not sure where to start? Try one of these:</div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 16 }}>
                        {STARTER_QUESTIONS.map(q => (
                            <ActionButton key={q} label={q} variant="light" onClick={() => sendMessage(q)} style={{ padding: "8px 16px" }} labelStyle={{ fontSize: 14.5 }} />
                        ))}
                    </div>
                </div>
            )
        }

        function renderChat(){
            return (
                <Panel>
                    <div style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: DOC.muted, fontWeight: 700, marginBottom: 12 }}>
                        Choose a game
                    </div>
                    <PillTabs tabs={GAMES} value={selGame} onChange={setSelGame} ariaLabel="Choose a board game" />

                    <div
                        ref={chatRef}
                        aria-live="polite"
                        style={{
                            marginTop: 22, height: 460, overflowY: "auto", display: "flex", flexDirection: "column",
                            backgroundColor: DOC.wash, border: `1px solid ${DOC.line}`, borderRadius: 16, padding: "8px 18px 18px",
                        }}
                    >
                        {messages.length === 0 && !loading ? renderEmptyState() : messages.map(renderBubble)}
                        {loading ? (
                            <div style={{ display: "flex", marginTop: 12 }}>
                                <div style={{ padding: "12px 16px", borderRadius: "18px 18px 18px 4px", backgroundColor: "white", border: `1px solid ${DOC.line}`, color: DOC.muted, fontSize: 15.5 }}>
                                    Checking the rulebook…
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div style={{ display: "flex", gap: 12, alignItems: "flex-end", marginTop: 14 }}>
                        <textarea
                            value={current}
                            onChange={(e) => setCurrent(e.target.value)}
                            onKeyDown={handleKeyDown}
                            rows={2}
                            maxLength={1000}
                            placeholder={selGame ? `Ask a question about ${selGame}…` : "Pick a game first…"}
                            aria-label="Your question"
                            style={{
                                flex: 1, resize: "none", fontFamily: DOC.font, fontSize: 16, lineHeight: 1.5, color: DOC.text,
                                padding: "12px 16px", borderRadius: 14, border: `1px solid ${DOC.line}`, outline: "none",
                                backgroundColor: "white", boxSizing: "border-box",
                            }}
                        />
                        <ActionButton label={loading ? "…" : "Send"} variant="dark" onClick={() => sendMessage()} ariaLabel="Send question" />
                    </div>
                    <div style={{ fontSize: 13.5, color: DOC.muted, marginTop: 8 }}>
                        Enter to send · Shift + Enter for a new line · Answers come only from each game's official rules
                    </div>
                </Panel>
            )
        }

    // How it works: Version 2 //
        function renderVersion2(){
            return (
                <div>
                    <SubHeading style={{ marginTop: 10 }}>The big idea</SubHeading>
                    <P>
                        Think of it as an open-book test. A language model is smart, but it doesn't reliably know the exact rules of
                        Robo Quest Arena, and if it guesses it may make rules up. So before asking it anything, the code first finds the
                        relevant pages of the rulebook and hands them over along with the question: "using only these pages, answer this."
                        That's all RAG (Retrieval-Augmented Generation) means. <i>Retrieval</i> is finding the right pages, and{" "}
                        <i>generation</i> is the AI writing the answer.
                    </P>
                    <P>
                        Version 1 used Amazon Bedrock, which did both steps on AWS and charged around the clock whether anyone used it or not.
                        In Version 2, this website's own code does the retrieval for free, and a hosted AI (Google Gemini Flash) only does the writing.
                    </P>

                    <Panel style={{ margin: "26px 0 8px", padding: "10px 18px" }}>
                        <BoardGameFlowDiagram style={{ margin: "10px auto" }} />
                    </Panel>

                    <SubHeading>Part 1: Preparing the rulebooks (top row)</SubHeading>
                    <P>This only happens when I add or change rules, never when someone uses the site.</P>
                    <P>
                        <b>The rules files</b> are plain text, one file per game, in <code>data/boardgame_rules/</code>.
                    </P>
                    <P>
                        <b>The build script</b> reads each file and does two things. First, it <b>chops</b> each rulebook into bite-sized
                        sections of about 220 words, like tearing a manual into index cards. Each card remembers the heading it came from,
                        such as "How To Castle In Chess." Second, it <b>counts the words</b> on each card. Small connecting words like "the"
                        and "and" are skipped, and word endings are trimmed so "castle" and "castling" count as the same word. These counts
                        are what make searching possible later.
                    </P>
                    <CodeBlock title="Terminal" code={BUILD_CODE} style={{ maxWidth: 760, margin: "6px 0 22px" }} />
                    <P>
                        <b>rulesIndex.json</b> is the result: all the index cards and their word counts in one file. It is deployed along
                        with the website like any other file, so there is no database or server to pay for.
                    </P>

                    <SubHeading>Part 2: When someone asks a question (bottom row)</SubHeading>
                    <P>
                        <b>The page.</b> When you pick "Chess" and type "How do I castle?", the page sends three things to the server: the
                        game name, the question, and the conversation so far, so that follow-ups like "what about queenside?" make sense.
                    </P>
                    <P>
                        <b>The API route</b> (<code>pages/api/boardGameWizard.js</code>) is the function that runs on Vercel's servers. In order, it:
                    </P>
                    <Checklist items={[
                        <span><b>Checks it's a real request.</b> Anything other than a submitted question is turned away.</span>,
                        <span><b>Checks the visitor isn't spamming.</b> More than 8 questions in a minute gets a polite "please wait."</span>,
                        <span><b>Checks the question makes sense.</b> A game must be picked, and the question can't be empty or longer than 1,000 characters.</span>,
                        <span><b>Checks it has rules for that game.</b> If not, it says so instead of guessing.</span>,
                        <span><b>Checks the API key is set up.</b> A missing key gives a clear error instead of a mysterious failure.</span>,
                        <span><b>Tidies the conversation history.</b> It keeps only the last 6 messages, and only real "user" and "assistant" messages, so nobody can sneak in fake instructions.</span>,
                        <span><b>Searches the rulebook.</b></span>,
                        <span><b>Builds the prompt, asks the AI, and sends the answer back.</b></span>,
                    ]} />
                    <P>
                        <b>The search</b> only looks at the selected game's cards, so a Chess question can never pull in rules from Checkers.
                        If the rulebook is short (under 3,500 words), it skips searching and hands over the whole thing, so the AI sees every
                        rule. Six of the eight games are that size. For the long ones (Poker and Robo Quest Arena), it scores every card. A card
                        scores higher when it contains words from the question, especially rare words: "castle" counts for a lot, while "move"
                        appears everywhere and counts for little. The top 6 cards win. This scoring formula is called BM25, and it's how classic
                        search engines rank results.
                    </P>
                    <CodeBlock title="pages/api/boardGameWizard.js" code={SEARCH_CODE} style={{ maxWidth: 760, margin: "6px 0 22px" }} />
                    <P>
                        <b>Building the prompt.</b> <code>fullRequest.js</code> assembles the message for the AI. It contains the instructions
                        (treat people as beginners, give segmented answers, never make up rules), the winning rulebook cards, the earlier
                        conversation, and the new question.
                    </P>
                    <P>
                        <b>The AI.</b> The prompt is sent over the internet to Google's Gemini API, which runs a Gemini Flash model to write the
                        answer. This is the only step that leaves the website. Because it uses the standard OpenAI-style chat format, switching
                        to a different AI provider only means changing a few settings, and while developing I can point it at Ollama on my own
                        computer so the whole thing runs locally.
                    </P>
                    <CodeBlock title="pages/api/boardGameWizard.js" code={LLM_CODE} style={{ maxWidth: 760, margin: "6px 0 22px" }} />
                    <P>
                        <b>Back to the page.</b> The function returns the answer plus the names of the rule sections it used, which show up as
                        "Rules used" under each answer. If anything goes wrong, such as the AI being busy, a friendly message appears in the chat instead.
                    </P>

                    <SubHeading>Keeping the key secret</SubHeading>
                    <P>
                        Gemini needs an API key, which is like a password proving the request comes from my account. It is never written in
                        the code, because the code lives on GitHub where anyone could copy it. Instead it's stored as an <b>environment
                        variable</b>: a setting kept outside the code (in a <code>.env</code> file on my computer, and in Vercel's settings for
                        the live site) that the server reads when it runs.
                    </P>

                    <SubHeading>Cost and upkeep</SubHeading>
                    <P>
                        The bot runs on Gemini's free tier, so instead of $200–300 a month it costs nothing. The only upkeep is re-running the
                        build script and redeploying whenever I edit a rulebook.
                    </P>
                </div>
            )
        }

    // How it works: Version 1 //
        function renderVersion1(){
            return (
                <div>
                    <P style={{ marginTop: 10 }}>
                        The first version ran entirely on Amazon Bedrock: Titan Text Express wrote the answers and Titan Embedding v2 searched
                        the knowledge base. It worked well, but keeping it running cost close to $200–300 a month, which is why it was taken
                        down and rebuilt as Version 2. Here's how it was put together.
                    </P>

                    <SubHeading>Constructing the request</SubHeading>
                    <P>
                        Like everything else on this site, the UI was built with Ostrich React Components (made by me) on Next.js. The code
                        that talks to the AI lives in the <code>api</code> folder that comes with every Next.js project, which makes sending
                        the request from the page to the backend simple.
                    </P>
                    <CodeBlock title="The page" code={V1_FRONTEND_CODE} style={{ maxWidth: 760, margin: "6px 0 22px" }} />
                    <P>
                        From there, the message is packaged into a request in <code>pages/api/boardGameWizard.js</code> and sent to my Amazon
                        Bedrock Knowledge Base. AWS has a default request you can <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html" target="_blank" rel="noopener noreferrer">copy
                        from</a>, but it's worth adjusting the values for the model you use for text generation. That has nothing to do with
                        the model you pick for text embedding.
                    </P>
                    <CodeBlock title="pages/api/boardGameWizard.js" code={V1_COMMAND_CODE} style={{ maxWidth: 760, margin: "6px 0 22px" }} />
                    <P>
                        The call is made with <code>client.send</code> instead of Axios or another generic HTTP library, because the request
                        has to come from a logged-in AWS client. The client is configured with the AWS region, an IAM access key ID and its
                        secret key, all found in the AWS Console:
                    </P>
                    <CodeBlock title="pages/api/boardGameWizard.js" code={V1_CLIENT_CODE} style={{ maxWidth: 760, margin: "6px 0 22px" }} />
                    <P>That's all the code the chatbot needed. The rest of the work happened in the AWS Console.</P>

                    <SubHeading>Setting up the knowledge base in AWS</SubHeading>
                    <P>
                        First, put the information the chatbot should reference into a document (or up to 10 documents). All my board game
                        rules lived in one text file, which was uploaded to an S3 bucket.
                    </P>
                    <WideShot src={`${IMAGES}/S3Structure.png`} alt="The rules document in an S3 bucket" caption="The rules document in S3" />
                    <P style={{ marginTop: 22 }}>
                        Next, open the AWS Bedrock dashboard and choose Knowledge Bases from the left menu.
                    </P>
                    <WideShot src={`${IMAGES}/BedrockKB.png`} alt="Knowledge Bases in the Bedrock menu" caption="Knowledge Bases in the Bedrock dashboard" />
                    <P style={{ marginTop: 22 }}>
                        Create a knowledge base (or open an existing one) to reach its dashboard. From there you can customize it and test
                        different LLMs against it.
                    </P>
                    <WideShot src={`${IMAGES}/KB_Dashboard.png`} alt="A knowledge base's dashboard" caption="The knowledge base dashboard" />

                    <SubHeading>Errors and fixes</SubHeading>
                    <Panel style={{ borderLeft: "6px solid #d9534f", maxWidth: 760, padding: "16px 22px" }}>
                        <div style={{ fontFamily: DOC.mono, fontSize: 14.5, color: "#8a1c12", fontWeight: 600 }}>
                            ValidationException: The model arn provided is not supported. Please check your configuration and retry the request
                        </div>
                    </Panel>
                    <P style={{ marginTop: 16 }}>
                        AWS and its model partners update their models constantly, so models get deprecated. When that happens, pick a
                        supported model and update the model arn stored in your <code>.env</code> file.
                    </P>
                    <CodeBlock title="Model arn" code={V1_ARN_CODE} style={{ maxWidth: 760, margin: "6px 0 22px" }} />
                    <P>
                        Only models on <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-supported.html" target="_blank" rel="noopener noreferrer">this
                        list</a> work with Bedrock Knowledge Bases, even if they exist elsewhere in AWS. Once you've chosen one, look it up in
                        the AWS model catalog to find its arn.
                    </P>
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

        return (
            <Page>
                <Hero
                    eyebrow="AI Experiment · RAG"
                    title="The Board Game Master AI"
                    intro="A chatbot that answers rules questions about eight board games, using only their official rulebooks. Pick a game, ask anything from setup to tricky edge cases, and it explains things the way you'd want a friend to: clearly, and without making rules up."
                    actions={[
                        <ActionButton key="try" label="Ask a question" onClick={() => jumpTo("try-it")} />,
                        <ActionButton key="how" label="How it works" variant="ghost" onClick={() => jumpTo("how-it-works")} />,
                    ]}
                    aside={<Avatar src="/assets/icons/big/BoardGameWizardIcon.jpeg" alt="" size={190} />}
                />

                <FactRow facts={[
                    { label: "Games", value: "8 official rulebooks" },
                    { label: "Search", value: "BM25, in the site's own code" },
                    { label: "AI model", value: "Google Gemini Flash" },
                    { label: "Running cost", value: "$0 / month" },
                ]} />

                <Section id="try-it" eyebrow="Try it" title="Ask the Board Game Master">
                    {renderChat()}
                </Section>

                <Section
                    id="how-it-works"
                    eyebrow="Under the hood"
                    title="How it works"
                    subtitle="The bot has been built twice. Version 2 is what runs today; Version 1 is the original Amazon Bedrock build, kept here for reference."
                >
                    <PillTabs tabs={[VERSION_2, VERSION_1]} value={version} onChange={setVersion} ariaLabel="Choose a version" />
                    <div role="tabpanel" aria-label={version} style={{ marginTop: 22 }}>
                        {version === VERSION_2 ? renderVersion2() : renderVersion1()}
                    </div>
                </Section>
            </Page>
        )
}
