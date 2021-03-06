import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunks";

// Define the initial state using that type
const initialState = {
  user: null,
  token: null,
  authenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.authenticated = false;
    },
  },
  extraReducers: {
    [login.fulfilled.toString()]: (state, action) => {
      const data = action.payload.data;
      state.authenticated = true;
      state.user = data.user;
      state.token = data.token;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
