import { createAsyncThunk } from "@reduxjs/toolkit";
import { summarizePdfService } from "../services/pdfService";

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
