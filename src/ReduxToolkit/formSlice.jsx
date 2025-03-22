import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Username: "",
    email: "",
    password: "",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setFormValue: (state, action) => {
            state[action.payload.name] = action.payload.value;
        },
        resetForm: () => initialState,
    },
});

export const {setFormValue, resetForm} = formSlice.actions;
export default formSlice.reducer;