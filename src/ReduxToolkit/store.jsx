import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice"; // Import file formSlice.js

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
