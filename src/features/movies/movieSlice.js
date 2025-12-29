import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
  movieLoading: false,
  movieError: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMovieStart(state, action) {
      state.movieLoading = true;
      state.movie = action.payload;
    },
    fetchMovieSuccess(state, action) {
      state.movieLoading = false;
      state.movie = action.payload;
    },
    fetchMovieFailure(state, action) {
      state.movieLoading = false;
      state.movieError = action.payload;
    },
  },
});

export const {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure,
} =
  movieSlice.actions;

export default movieSlice.reducer;