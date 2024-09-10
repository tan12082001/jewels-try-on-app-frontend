import { createSlice } from '@reduxjs/toolkit';
// the initial state of the user is null but here set to true until the frontend design is done.
const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
