import OpenAI from "openai";

const openaiApiKey = "";
const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true });

export const getChatResponse = async (input) => {
  try {
    const response = await openai.chat.completions.create({
      engine: "davinci",
      prompt: input,
      maxTokens: 15000,
      temperature: 0.7,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      model: "gpt-3.5-turbo"
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error:", error);
    return "Sorry, an error occurred.";
  }
};
