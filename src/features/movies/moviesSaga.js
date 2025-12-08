import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "./moviesSlice";

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

export function* moviesSaga() {
  yield takeLatest(fetchMoviesStart.type, fetchMoviesSaga);
}
