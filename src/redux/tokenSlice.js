import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {},
  reducers: {
    loginUser(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
    logoutUser(state, action) {
      state.token = null;
      state.email = null;
      state.userId = null;
    },
  },
});

export const { loginUser, logoutUser } = tokenSlice.actions;

export default tokenSlice.reducer;
