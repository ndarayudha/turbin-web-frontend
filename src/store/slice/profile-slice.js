import {createSlice} from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: "profile",
    initialState: {value: null},
    reducers: {
        updateProfil(state, action){
            state.value = {
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                address: action.payload.address
            };
        }
    }
})

export const profileAction = profileSlice.actions;

export default profileSlice;