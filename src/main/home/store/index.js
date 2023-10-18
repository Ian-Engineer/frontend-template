import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    searchText: ''
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    }
  },
});

export const { setSearchText } = homeSlice.actions;
export default homeSlice.reducer;
