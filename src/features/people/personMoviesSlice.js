import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personMovies: [],
  personMoviesLoading: false,
  personMoviesError: null,
};

const personMoviesSlice = createSlice({
  name: "personMovies",
  initialState,
  reducers: {
    fetchPersonMoviesStart(state, action) {
      state.personMoviesLoading = true;
      state.personMovies = action.payload;
    },
    fetchPersonMoviesSuccess(state, action) {
      state.personMoviesLoading = false;
      state.personMovies = action.payload;
    },
    fetchPersonMoviesFailure(state, action) {
      state.personMoviesLoading = false;
      state.personMoviesError = action.payload;
    },
  },
});

export const {
  fetchPersonMoviesStart,
  fetchPersonMoviesSuccess,
  fetchPersonMoviesFailure,
} =
  personMoviesSlice.actions;

export default personMoviesSlice.reducer;