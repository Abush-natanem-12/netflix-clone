import { configureStore } from "@reduxjs/toolkit";

// HACK: IMPORTING OUR SLICES HERE
import moviePopUpSlice from "./slices/MoviePopUpSlice";
import accountSlice from "./slices/accountSlices";

const store = configureStore({
  reducer: {
    popUp: moviePopUpSlice,
    account: accountSlice,
  },
});

export default store;
