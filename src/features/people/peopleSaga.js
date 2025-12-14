import { call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {
  fetchPeopleStart,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "./peopleSlice";

const API_KEY = "e0da2a33c4def495d0c4977083b2de8b";
const BASE_URL = "https://api.themoviedb.org/3";

function fetchPopularPeopleApi() {
  return axios.get(`${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`);
}

function* fetchPeopleSaga() {
  try {
    const response = yield call(fetchPopularPeopleApi);
      
   yield put(fetchPeopleSuccess(response.data.results));
  } catch (error) {
    yield put(fetchPeopleFailure(error.message));
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeopleStart.type, fetchPeopleSaga);
}
