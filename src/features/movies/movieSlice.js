import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMovieStart(state, action) {
      state.loading = true;
      state.movie = action.payload;
    },
    fetchMovieSuccess(state, action) {
      state.loading = false;
      state.movie = action.payload;
    },
    fetchMovieFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure,
} =
  movieSlice.actions;

const selectMovieState = state => state.movie;

const selectMovie = state => selectMovieState(state).movie;

export const getMovieById = (state, movieId) =>
  selectMovie(state).find(({ id }) => id === movieId)

export default movieSlice.reducer;