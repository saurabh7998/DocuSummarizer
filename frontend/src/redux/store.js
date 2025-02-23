import { configureStore } from '@reduxjs/toolkit';
import pdfReducer from './pdfSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        pdf: pdfReducer,
        user: userReducer,
    },
});

export default store;