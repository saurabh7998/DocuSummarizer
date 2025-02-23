import express from 'express';
import getGeminiSummary  from '../controllers/geminiController.js';


const router = express.Router();

router.post('/summarize', getGeminiSummary);

export default router;