import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState = {
  type: null,
  message: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialNotificationState,
  reducers: {
    showNotification(state, action) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

export const notificationAction = notificationSlice.actions;

export default notificationSlice;
