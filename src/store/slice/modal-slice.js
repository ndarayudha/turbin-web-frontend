import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isVisible: false, modalContent: null },
  reducers: {
    toogle(state) {
      state.isVisible = !state.isVisible;
    },
    showModal(state, action) {
      state.modalContent = {
        title: action.payload.title,
        message: action.payload.message,
      }
    },
  },
});


export const modalAction = modalSlice.actions;

export default modalSlice;