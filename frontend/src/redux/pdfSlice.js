import { createSlice } from "@reduxjs/toolkit";
import { summarizePdfThunk, humanizeSummaryThunk } from "./thunks/pdfThunks";
const initialState = {
  summary: "",
  loading: false,
  error: null,
};

const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(summarizePdfThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(summarizePdfThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(summarizePdfThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(humanizeSummaryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(humanizeSummaryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(humanizeSummaryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pdfSlice.reducer;
