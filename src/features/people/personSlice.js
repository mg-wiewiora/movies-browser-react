import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: [],
  personLoading: false,
  personError: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    fetchPersonStart(state, action) {
      state.personLoading = true;
      state.person = action.payload;
    },
    fetchPersonSuccess(state, action) {
      state.personLoading = false;
      state.person = action.payload;
    },
    fetchPersonFailure(state, action) {
      state.personLoading = false;
      state.personError = action.payload;
    },
  },
});

export const {
  fetchPersonStart,
  fetchPersonSuccess,
  fetchPersonFailure,
} =
  personSlice.actions;

export default personSlice.reducer;