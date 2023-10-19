import { createSlice } from "@reduxjs/toolkit";

const passwordResetSlice = createSlice({
  name: "passwordReset",
  initialState: {
    example: "Hello World",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setExample: (state, action) => {
      state.example = action.payload;
    },
  },
});

export const { setExample } = passwordResetSlice.actions;
export default passwordResetSlice.reducer;
