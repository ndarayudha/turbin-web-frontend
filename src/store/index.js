import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./slice/modal-slice";
import profileSlice from "./slice/profile-slice";
import authSlice from "./slice/auth-slice";
import notificationSlice from "./slice/notification-slice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    profile: profileSlice.reducer,
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
