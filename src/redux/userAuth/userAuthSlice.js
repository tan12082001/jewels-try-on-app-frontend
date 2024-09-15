import { createSlice } from '@reduxjs/toolkit';
// the initial state of the user is null but here set to true until the frontend design is done.
const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: true,
    mode: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setLightDarkMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { setUser, clearUser, setLightDarkMode } = userAuthSlice.actions;
export default userAuthSlice.reducer;
