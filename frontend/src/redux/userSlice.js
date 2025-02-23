import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    isSubscribed: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            return { ...state, ...action.payload };
        },
        subscribe: (state) => {
            return { ...state, isSubscribed: true };
        },
        unsubscribe: (state) => {
            return { ...state, isSubscribed: false };
        }
    },
});

export const { setUserDetails, subscribe, unsubscribe } = userSlice.actions;
export default userSlice.reducer;