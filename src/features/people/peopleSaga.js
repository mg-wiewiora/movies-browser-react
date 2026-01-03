import { call, put, takeLatest, delay } from "redux-saga/effects";
import { tmdbApi } from "../api";
import {
  fetchPeopleStart,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "./peopleSlice";

function fetchPopularPeopleApi(page) {
  return tmdbApi.get("/person/popular", {
    params: { language: "en-US", page },
  });
}

function* fetchPeopleSaga(action) {
  try {
    yield delay(500);
    const page = action.payload?.page || 1;

    const peopleResponse = yield call(fetchPopularPeopleApi, page);

    yield put(fetchPeopleSuccess(peopleResponse.data.results));
  } catch (error) {
    yield put(fetchPeopleFailure(error.message));
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeopleStart.type, fetchPeopleSaga);
}
