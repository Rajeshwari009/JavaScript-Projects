import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState= {darkmode: false}

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: initialState,
  reducers: {
    toggleDarkMode (state) {state.darkmode= !state.darkmode},
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer, 
  },
});

export default store;

