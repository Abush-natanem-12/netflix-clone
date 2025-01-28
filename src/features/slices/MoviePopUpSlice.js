import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: null,
  description: null,
  poster: null,
};

const moviePopUpSlice = createSlice({
  name: "moviePopUp",
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      state.isOpen = action.payload;
    },
    setMovies: {
      prepare(title, description, poster) {
        return { payload: { title, description, poster } };
      },
      reducer(state, action) {
        state.title = action.payload.title;
        state.description = action.payload.description;
        state.poster = action.payload.poster;
      },
    },
  },
});

export const { togglePopup, setMovies } = moviePopUpSlice.actions;

export default moviePopUpSlice.reducer;
