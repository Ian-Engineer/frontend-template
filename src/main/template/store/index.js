import { createSlice } from "@reduxjs/toolkit";

const templateSlice = createSlice({
  name: "template",
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

export const { setExample } = templateSlice.actions;
export default templateSlice.reducer;
