import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
    fetchMovieStart,
    fetchMovieSuccess,
    fetchMovieFailure,
} from "./movieSlice";

const API_KEY = "e0da2a33c4def495d0c4977083b2de8b";
const BASE_URL = "https://api.themoviedb.org/3";

function fetchMovieApi() {
    return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
}

function fetchGenreApi() {
    return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
}

function* fetchMovieSaga() {
  try {
    const [movieResponse, genreResponse] = yield all([
      call(fetchMovieApi),
      call(fetchGenreApi),
    ]);

    const genreMap = {};
    genreResponse.data.genres.forEach((g) => {
      genreMap[g.id] = g.name;
    });

    const movieWithGenres = movieResponse.data.results.map((movie) => ({
      ...movie,
      genre_names: movie.genre_ids.map((id) => genreMap[id] || "Unknown"),
    }));

    yield put(fetchMovieSuccess(movieWithGenres));
  } catch (error) {
    yield put(fetchMovieFailure(error.message));
  }
}

export function* movieSaga() {
    yield takeLatest(fetchMovieStart.type, fetchMovieSaga);
}