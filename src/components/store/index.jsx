import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import authReducer from "./auth-slice";
import themeReducer from "./theme-slice";

const store = configureStore({
  reducer: {
    modals: modalReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
