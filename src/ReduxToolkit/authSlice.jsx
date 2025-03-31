import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: localStorage.getItem("role") ? localStorage.getItem("role") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
  },
});

export const { setUserRole } = authSlice.actions;
export default authSlice.reducer;