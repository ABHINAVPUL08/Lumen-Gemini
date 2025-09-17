 // To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node
// To run this code you need to install the following dependencies:
// npm install @google/genai mime

// To run this code you need to install the following dependencies:
// npm install @google/genai mime dotenv
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const API_KEY = "your api key"; 

// Models to try (first one may hit quota, so fallback)
const MODELS = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-2.0-flash"];

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  ];

  for (let modelName of MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chat.sendMessage(prompt || "YOUR_USER_INPUT");
      const response = result.response.text();

      console.log(`✅ Response from ${modelName}:`, response);
      return response;
    } catch (error) {
      if (error.message.includes("429")) {
        console.warn(`⚠️ Quota exceeded for ${modelName}, trying next...`);
        continue; // try next model
      } else {
        console.error(`❌ Error with ${modelName}:`, error);
        throw error;
      }
    }
  }

  throw new Error("All models quota exceeded. Please wait for reset or upgrade your plan.");
}

export default runChat;

