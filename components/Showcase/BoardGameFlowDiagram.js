// Flow diagram for the Board Game Master AI showcase page.
// Top row: what happens once, when the rules change. Bottom row: what happens on every question.

const C = {
    purple: { fill: "#EEEDFE", stroke: "#534AB7", title: "#3C3489", sub: "#534AB7" },
    teal:   { fill: "#E1F5EE", stroke: "#0F6E56", title: "#085041", sub: "#0F6E56" },
    coral:  { fill: "#FAECE7", stroke: "#993C1D", title: "#712B13", sub: "#993C1D" },
    line: "#5F5E5A",
}
const font = "Gilroy, sans-serif"

function Box({ x, y, w, color, title, sub }) {
    const c = C[color]
    return (
        <g>
            <rect x={x} y={y} width={w} height={56} rx={8} fill={c.fill} stroke={c.stroke} strokeWidth={1} />
            <text x={x + w / 2} y={y + 19} textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize={15} fontWeight={600} fill={c.title}>{title}</text>
            <text x={x + w / 2} y={y + 39} textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize={12.5} fill={c.sub}>{sub}</text>
        </g>
    )
}

function Label({ x, y, children, anchor = "start" }) {
    return <text x={x} y={y} textAnchor={anchor} fontFamily={font} fontSize={13} fill={C.line}>{children}</text>
}

export default function BoardGameFlowDiagram({ style }) {
    const arrow = { stroke: C.line, strokeWidth: 1.5, fill: "none", markerEnd: "url(#bg-arrow)" }
    return (
        <svg viewBox="0 0 680 295" width="100%" role="img" aria-label="How the Board Game Master AI answers a question" style={{ maxWidth: 1000, display: "block", margin: "30px auto", ...style }}>
            <defs>
                <marker id="bg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M2 1L8 5L2 9" fill="none" stroke={C.line} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>

            <Label x={40} y={30}>Once, on my computer (whenever the rules change)</Label>
            <Box x={40} y={45} w={180} color="purple" title="Rules files" sub="data/boardgame_rules" />
            <Box x={250} y={45} w={180} color="purple" title="Build script" sub="chops + counts words" />
            <Box x={460} y={45} w={180} color="purple" title="rulesIndex.json" sub="the search index" />
            <line x1={220} y1={73} x2={248} y2={73} {...arrow} />
            <line x1={430} y1={73} x2={458} y2={73} {...arrow} />

            <Label x={40} y={150}>Every question</Label>
            <path d="M550 101 L550 133 L405 133 L405 163" {...arrow} />
            <Box x={40} y={165} w={130} color="teal" title="Your page" sub="game + question" />
            <Box x={190} y={165} w={130} color="teal" title="API route" sub="on Vercel" />
            <Box x={340} y={165} w={130} color="teal" title="Search" sub="picks sections" />
            <Box x={490} y={165} w={130} color="coral" title="Groq (the AI)" sub="writes answer" />
            <line x1={170} y1={193} x2={188} y2={193} {...arrow} />
            <line x1={320} y1={193} x2={338} y2={193} {...arrow} />
            <line x1={470} y1={193} x2={488} y2={193} {...arrow} />
            <path d="M555 221 L555 250 L105 250 L105 223" {...arrow} />
            <Label x={330} y={272} anchor="middle">{'Answer + "rules used" sent back to the page'}</Label>
        </svg>
    )
}
