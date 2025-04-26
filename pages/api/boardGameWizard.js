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
      "retrieveAndGenerateConfiguration": {
        "type": "KNOWLEDGE_BASE",
        "knowledgeBaseConfiguration": {
          "knowledgeBaseId": process.env.BEDROCK_KB_ID,
          "modelArn": process.env.BEDROCK_MODEL_ARN,
          "retrievalConfiguration": {
            "vectorSearchConfiguration": {
              "numberOfResults": 5
            }
          },
          "generationConfiguration": {
            "inferenceConfig": {
              "textInferenceConfig": {
                "temperature": 0.65,
                "topP": 0.25,
                "maxTokens": 512,
                "stopSequences": []
              }
            }
          },
          "orchestrationConfiguration": {
            "inferenceConfig": {
              "textInferenceConfig": {
                "temperature": 0.45,
                "topP": 0.35,
                "maxTokens": 512,
                "stopSequences": []
              }
            }
          }
        }
      }
    });
    
    const response = await client.send(command);
    res.status(200).json({ reply: response.output?.text || "No response" });
  } 
  catch (err) {
    console.error("Error connecting to One Bet API -- ", err);
    res.status(500).json({ message: "Internal server error" });
  }
}
