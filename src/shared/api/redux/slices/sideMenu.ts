import { createSlice } from '@reduxjs/toolkit';

const sideMenuSlice = createSlice({
  name: 'sideMenu',

  initialState: {
    sideMenuVisible: false,
  },

  reducers: {
    sideMenuVisibleToggled(state) {
      state.sideMenuVisible = !state.sideMenuVisible;
    },
  },
});
export const { sideMenuVisibleToggled } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
