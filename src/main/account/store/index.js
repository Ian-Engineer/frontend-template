import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
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

export const { setExample } = accountSlice.actions;
export default accountSlice.reducer;
