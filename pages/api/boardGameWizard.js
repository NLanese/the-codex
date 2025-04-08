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
          "knowledgeBaseId": "FCKMBNCFEW",
          "modelArn": "arn:aws:bedrock:us-east-1::foundation-model/amazon.titan-text-premier-v1:0",
          "retrievalConfiguration": {
            "vectorSearchConfiguration": {
              "numberOfResults": 5
            }
          },
          "generationConfiguration": {
            "inferenceConfig": {
              "textInferenceConfig": {
                "temperature": 0,
                "topP": 0.9,
                "maxTokens": 512,
                "stopSequences": []
              }
            }
          },
          "orchestrationConfiguration": {
            "inferenceConfig": {
              "textInferenceConfig": {
                "temperature": 0,
                "topP": 0.9,
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
