import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";

const client = new BedrockAgentRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const command = new RetrieveAndGenerateCommand({
      input: { text: message },
      retrieveAndGenerateConfiguration: {
        type: "KNOWLEDGE_BASE", // Keep this as needed
        knowledgeBaseConfiguration: {
          knowledgeBaseId: process.env.BEDROCK_KB_ID,
          modelArn: process.env.BEDROCK_MODEL_ARN,
          generationConfiguration: {
            promptTemplate: {
              textPromptTemplate: "Please provide a detailed explanation for the user's board game rule question."
            }
          },
          orchestrationConfiguration: {
            promptTemplate: {
              textPromptTemplate: "Please break down the user's question and clarify any ambiguous parts."
            },
          },
        },
      },
    });
    
    
    

    const response = await client.send(command);

    res.status(200).json({ reply: response.output?.text || "No response" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
