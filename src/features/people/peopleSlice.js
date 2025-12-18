import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  people: [],
  loading: false,
  error: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    fetchPeopleStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchPeopleSuccess(state, action) {
          state.loading = false;
          state.people = action.payload;
        },
    fetchPeopleFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
}});

export const { fetchPeopleStart, fetchPeopleSuccess, fetchPeopleFailure } = peopleSlice.actions;
export default peopleSlice.reducer;