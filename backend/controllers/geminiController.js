import fs from 'fs';
import model from "../config/geminiConfig.js";


const getGeminiSummary = async (filePath) => {
  const result = await model.generateContent([
    {
      inlineData: {
        data: Buffer.from(
          fs.readFileSync(filePath)
        ).toString("base64"),
        mimeType: "application/pdf",
      },
    },
    "Summarize this document",
  ]);
  console.log(result.response.text());
};
export default getGeminiSummary;