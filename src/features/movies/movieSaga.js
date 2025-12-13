import { call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure,
} from "./movieSlice";
import { useMovie } from "./useMovie.js"

const API_KEY = "e0da2a33c4def495d0c4977083b2de8b";
const BASE_URL = "https://api.themoviedb.org/3";

function* fetchMovieHandler() {
  try {
    yield delay(300);
    const movieDetails = yield call(useMovie);
    yield put(fetchMovieSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieFailure(error.message));
    yield call(alert, "Coś nie działa");
  }
}

function fetchMovieApi() {
  return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
}

export function* movieSaga() {
  yield takeLatest(fetchMovieStart.type, fetchMovieHandler);
}