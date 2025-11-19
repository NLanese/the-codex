import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Force AWS region from environment explicitly
  const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION;
  const accessKey = process.env.AWS_ACCESS_KEY_ID;
  const secretKey = process.env.AWS_SECRET_ACCESS_KEY;

  console.log("Region at runtime:", region);
  console.log("Access key present:", !!accessKey);
  console.log("Secret key present:", !!secretKey);

  if (!region || !accessKey || !secretKey) {
    return res.status(500).json({ message: "AWS credentials or region not set in environment" });
  }

  const client = new BedrockAgentRuntimeClient({
    region,
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    },
  });

  try {
    const { message } = req.body;

    const command = new RetrieveAndGenerateCommand({
      input: { text: message },
      retrieveAndGenerateConfiguration: {
        type: "KNOWLEDGE_BASE",
        knowledgeBaseConfiguration: {
          knowledgeBaseId: process.env.BEDROCK_KB_ID,
          modelArn: process.env.BEDROCK_MODEL_ARN,
          retrievalConfiguration: {
            vectorSearchConfiguration: { numberOfResults: 5 },
          },
          generationConfiguration: {
            inferenceConfig: {
              textInferenceConfig: { temperature: 0.65, topP: 0.25, maxTokens: 512, stopSequences: [] },
            },
          },
          orchestrationConfiguration: {
            inferenceConfig: {
              textInferenceConfig: { temperature: 0.45, topP: 0.35, maxTokens: 512, stopSequences: [] },
            },
          },
        },
      },
    });

    const response = await client.send(command);
    res.status(200).json({ reply: response.output?.text || "No response" });
  } catch (err) {
    console.error("Error connecting to RAG Response from Bedrock Model -- ", err);
    res.status(500).json({ message: "Internal server error", error: err instanceof Error ? err.message : JSON.stringify(err) });
  }
}
