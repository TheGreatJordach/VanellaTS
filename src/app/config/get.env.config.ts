import "dotenv/config"

export const envsVariables = {
  HuggingFaceAPIKye: process.env["HF_API_KEY"],
  OpenAIApiKey: process.env["OPENAI_API_KEY"],
  OpenAiProjectID: process.env["OPENAI_PROJECT_ID"],
}as const;