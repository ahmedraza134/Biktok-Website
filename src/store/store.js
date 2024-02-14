import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice";

const store = configureStore({
    reducer: {
        darkModeSlice
    }
})

export default store