
import { createSlice } from "@reduxjs/toolkit";


// Create darkModeSlice
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;