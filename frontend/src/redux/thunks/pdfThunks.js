import { createAsyncThunk } from "@reduxjs/toolkit";
import { summarizePdfService, humanizeSummaryService } from "../services/pdfService";

export const summarizePdfThunk = createAsyncThunk(
  "gemini/summarizePdf",
  async ({ file, token }, { rejectWithValue }) => { 
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await summarizePdfService(formData, token);
      return response.summary;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.error : error.message
      );
    }
  }
);

export const humanizeSummaryThunk = createAsyncThunk(
  "gemini/humanizeSummary",
  async ({summary, token}, { rejectWithValue }) => {
    try {
      console.log(`Humanizing summary: ${summary}`);
      const response = await humanizeSummaryService(summary, token);
      return response.summary;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.error : error.message
      );
    }
  }
);

