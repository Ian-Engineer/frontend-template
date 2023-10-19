import { createSlice } from "@reduxjs/toolkit";

const passwordResetTokenSlice = createSlice({
  name: "passwordResetToken",
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

export const { setExample } = passwordResetTokenSlice.actions;
export default passwordResetTokenSlice.reducer;
