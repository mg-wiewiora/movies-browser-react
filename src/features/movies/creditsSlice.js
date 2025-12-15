import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credits: [],
  creditsLoading: false,
  creditsError: null,
};

const creditsSlice = createSlice({
  name: "credits",
  initialState,
  reducers: {
    fetchCreditsStart(state, action) {
      state.creditsLoading = true;
      state.credits = action.payload;
    },
    fetchCreditsSuccess(state, action) {
      state.creditsLoading = false;
      state.credits = action.payload;
    },
    fetchCreditsFailure(state, action) {
      state.creditsLoading = false;
      state.creditsError = action.payload;
    },
  },
});

export const {
  fetchCreditsStart,
  fetchCreditsSuccess,
  fetchCreditsFailure,
} =
  creditsSlice.actions;

const selectCreditsState = state => state.credits;

const selectCredits = state => selectCreditsState(state).credits;

export const getCreditsById = (state, creditsId) =>
  selectCredits(state).find(({ id }) => id === creditsId)

export default creditsSlice.reducer;