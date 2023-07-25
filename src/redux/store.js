import { configureStore } from "@reduxjs/toolkit";
import speechChanger from "./counterSlice";

export const store = configureStore({
  reducer: {
    rainbow: speechChanger,
  },
});
