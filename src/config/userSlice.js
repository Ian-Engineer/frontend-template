import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    signedIn: false,
    user: {},
    lastLocation: '/'
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.signedIn = true;
    },
    logout: (state, action) => {
      state.user = {};
      state.signedIn = false;
    },
    setLastLocation: (state, action) => {
      const notAllowedPaths = [
        '/login',
        '/register',
        '/subscribe'
      ]
      if (notAllowedPaths.includes(action.payload)) return;
      state.lastLocation = action.payload
    }
  },
});

export const { setUser, logout, setLastLocation } = userSlice.actions;
export default userSlice.reducer;
