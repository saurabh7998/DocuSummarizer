import fs from 'fs';
import model from "../config/geminiConfig.js";


export const getGeminiSummary = async (filePath, wordMin, wordMax) => {
  const result = await model.generateContent([
    {
      inlineData: {
        data: Buffer.from(
          fs.readFileSync(filePath)
        ).toString("base64"),
        mimeType: "application/pdf",
      },
    },
    `Summarize this document with a minimum of ${wordMin} words and a maximum of ${wordMax} words.`,
  ]);
  console.log(result.response.text());
  return result.response.text();
};

export const getHumanizedSummary = async (summary) => {
  const encodedSummary = Buffer.from(summary).toString("base64");
  const result = await model.generateContent([
    {
      inlineData: {
        data: encodedSummary,
        mimeType: "text/plain",
      },
    },
    "Humanize this text, but keep it concise.",
  ]);
  console.log(result.response.text());
  return result.response.text();
};