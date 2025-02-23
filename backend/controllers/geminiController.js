import fs from 'fs';
import model from "../config/geminiConfig.js";


const getGeminiSummary = async () => {
  const result = await model.generateContent([
    {
      inlineData: {
        data: Buffer.from(
          fs.readFileSync("/Users/saurabhg/Documents/GitHub/Testing/Resume_SaurabhGade (55).pdf")
        ).toString("base64"),
        mimeType: "application/pdf",
      },
    },
    "Summarize this document",
  ]);
  console.log(result.response.text());
};
export default getGeminiSummary;