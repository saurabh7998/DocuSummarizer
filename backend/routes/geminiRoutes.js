import express from "express";
import multer from "multer";
import path from "path";
import { getGeminiSummary } from "../controllers/geminiController.js";
import { getHumanizedSummary } from "../controllers/geminiController.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Temporary storage
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/summarize", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = path.join(__dirname, "../uploads", req.file.filename);

    // Call Gemini API for summarization
    const summary = await getGeminiSummary(filePath);

    // Delete file after processing
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting file:", err);
    });

    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/humanize", async (req, res) => {
  try {
    const { summary } = req.body;

    // Call Gemini API for humanization
    const humanizedSummary = await getHumanizedSummary(summary);

    res.json({ summary: humanizedSummary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
);

export default router;
