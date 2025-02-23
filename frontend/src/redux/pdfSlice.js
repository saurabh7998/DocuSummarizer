import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    summary: '',
    loading: false,
    error: null,
};

const pdfSlice = createSlice({
    name: 'pdf',
    initialState,
    reducers: {
        summarizeStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        summarizeSuccess: (state, action) => {
            state.loading = false;
            state.summary = action.payload;
        },
        summarizeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { summarizeStart, summarizeSuccess, summarizeFailure } = pdfSlice.actions;
export default pdfSlice.reducer;