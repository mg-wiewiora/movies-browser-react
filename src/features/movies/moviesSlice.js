import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action) {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  moviesSlice.actions;

const selectMoviesState = state => state.movies;

const selectMovies = state => selectMoviesState(state).movies;

export const getMovieById = (state, movieId) =>
  selectMovies(state).find(({ id }) => id === movieId)

export default moviesSlice.reducer;