import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Read env vars at runtime
  const region = process.env.AWS_DEFAULT_REGION;
  const accessKey = process.env.AWS_ACCESS_KEY_ID;
  const secretKey = process.env.AWS_SECRET_ACCESS_KEY;
  const knowledgeBaseId = process.env.BEDROCK_KB_ID;
  const modelArn = process.env.BEDROCK_MODEL_ARN;

  if (!region || !accessKey || !secretKey || !knowledgeBaseId || !modelArn) {
    return res.status(500).json({ message: "AWS credentials, region, or Bedrock configuration missing in environment" });
  }

  // Instantiate the client **inside the handler** to ensure env vars are loaded
  const client = new BedrockAgentRuntimeClient({
    region,
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    },
  });

  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ message: "No message provided" });

    const command = new RetrieveAndGenerateCommand({
      input: { text: message },
      retrieveAndGenerateConfiguration: {
        type: "KNOWLEDGE_BASE",
        knowledgeBaseConfiguration: {
          knowledgeBaseId,
          modelArn,
          retrievalConfiguration: { vectorSearchConfiguration: { numberOfResults: 5 } },
          generationConfiguration: { inferenceConfig: { textInferenceConfig: { temperature: 0.65, topP: 0.25, maxTokens: 512, stopSequences: [] } } },
          orchestrationConfiguration: { inferenceConfig: { textInferenceConfig: { temperature: 0.45, topP: 0.35, maxTokens: 512, stopSequences: [] } } },
        },
      },
    });

    const response = await client.send(command);
    return res.status(200).json({ reply: response.output?.text || "No response" });
  } catch (err) {
    console.error("Error connecting to RAG Response from Bedrock Model --", err);
    return res.status(500).json({
      message: "Internal server error",
      error: err instanceof Error ? err.message : JSON.stringify(err),
    });
  }
}
