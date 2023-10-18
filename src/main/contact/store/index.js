import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
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

export const { setExample } = contactSlice.actions;
export default contactSlice.reducer;
