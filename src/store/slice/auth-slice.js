import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action){
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.token
        },
        logout(state){
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        }
    } 
})


export const authAction = authSlice.actions;

export default authSlice;