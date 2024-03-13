import { createSlice } from '@reduxjs/toolkit';
import { Middleware } from 'redux';

const sideMenuSlice = createSlice({
  name: 'sideMenu',

  initialState: {
    sideMenuVisible: false,
    thanksVisible: false,
    userData: {
      name: '',
      tel: '',
    },
  },

  reducers: {
    sideMenuVisibleToggled(state) {
      state.sideMenuVisible = !state.sideMenuVisible;
    },
    thanksVisibleVisibleToggled(state, action) {
      state.thanksVisible = action.payload;
    },
    userDataChanged(state, action) {
      state.userData = action.payload;
    },
  },
});
export const {
  sideMenuVisibleToggled,
  thanksVisibleVisibleToggled,
  userDataChanged,
} = sideMenuSlice.actions;
export default sideMenuSlice.reducer;

export const userDataMiddleware: Middleware = (store) => (next) => (action) => {
  const userData = store.getState().sideMenu.userData;
  if (userData.name !== '' && userData.tel !== '') {
    localStorage.setItem(
      'userData',
      JSON.stringify({
        name: userData.name,
        tel: userData.tel,
      })
    );
  }

  return next(action);
};
