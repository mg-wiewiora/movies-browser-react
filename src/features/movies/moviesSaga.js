import { call, put, takeLatest, all } from "redux-saga/effects";
import { tmdbApi } from "./api";
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "./moviesSlice";

function fetchPopularMoviesApi(page) {
  return tmdbApi.get("/movie/popular", { params: { language: "en-US", page } });
}

function fetchGenresApi() {
  return tmdbApi.get("/genre/movie/list", { params: { language: "en-US" } });
}

function* fetchMoviesSaga(action) {
  try {
    const page = action.payload?.page || 1;

    const [moviesResponse, genresResponse] = yield all([
      call(fetchPopularMoviesApi, page),
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

