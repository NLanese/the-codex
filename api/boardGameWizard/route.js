import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";

const client = new BedrockAgentRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req) {
  const body = await req.json();
  const userMessage = body.message;

  const command = new RetrieveAndGenerateCommand({
    input: { text: userMessage },
    retrieveAndGenerateConfiguration: {
      type: "KNOWLEDGE_BASE",
      knowledgeBaseConfiguration: {
        knowledgeBaseId: process.env.BEDROCK_KB_ID,
        modelArn: process.env.BEDROCK_MODEL_ARN,
      },
    },
  });

  try {
    const response = await client.send(command);
    return Response.json({ reply: response.output?.text || "No response" });
  } catch (err) {
    console.error("ERROR IN BOARD GAME WIZARD API ROUTE --- ", err);
    return Response.json({ reply: ("Something went wrong. \n", err) }, { status: 500 });
  }
}
