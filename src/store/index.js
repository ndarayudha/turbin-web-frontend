import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./slice/modal-slice";

const store = configureStore({
  reducer: { modal: modalSlice.reducer },
});

export default store;
