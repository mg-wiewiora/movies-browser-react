import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import axios from "axios";
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "./moviesSlice";
import {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure,
} from "./movieSlice";
import { useMovie } from "./useMovie.js"

const API_KEY = "e0da2a33c4def495d0c4977083b2de8b";
const BASE_URL = "https://api.themoviedb.org/3";

function fetchPopularMoviesApi() {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
}

function fetchGenresApi() {
  return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
}

function* fetchMoviesSaga() {
  try {
    const [moviesResponse, genresResponse] = yield all([
      call(fetchPopularMoviesApi),
      call(fetchGenresApi),
    ]);

    const genresMap = {};
    genresResponse.data.genres.forEach((g) => {
      genresMap[g.id] = g.name;
    });

    const moviesWithGenres = moviesResponse.data.results.map((movie) => ({
      ...movie,
      genre_names: movie.genre_ids.map((id) => genresMap[id] || "Unknown"),
    }));

    yield put(fetchMoviesSuccess(moviesWithGenres));
  } catch (error) {
    yield put(fetchMoviesFailure(error.message));
  }
}

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

export function* moviesSaga() {
  yield takeLatest(fetchMoviesStart.type, fetchMoviesSaga);
}

export function* movieSaga() {
  yield takeLatest(fetchMovieStart.type, fetchMovieHandler);
}