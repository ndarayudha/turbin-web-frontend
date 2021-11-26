import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./slice/modal-slice";
import profileSlice from "./slice/profile-slice";

const store = configureStore({
  reducer: { modal: modalSlice.reducer, profile: profileSlice.reducer },
});

export default store;
