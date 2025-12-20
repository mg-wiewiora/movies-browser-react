import { call, put, takeLatest, all } from "redux-saga/effects";
import { tmdbApi } from "./api";
import {
    fetchMovieStart,
    fetchMovieSuccess,
    fetchMovieFailure,
} from "./movieSlice";

function fetchMovieApi(movieId) {
    return tmdbApi.get(`/movie/${movieId}`, { params: { language: "en-US" } });
}

function fetchGenreApi() {
    return tmdbApi.get(`/genre/movie/list`, { params: { language: "en-US" } });
}

function* fetchMovieSaga(action) {
    const movieId = action.payload;

    if (!movieId) {
        console.error("Missing movie ID in action payload.");
        yield put(fetchMovieFailure("Brak ID filmu."));
        return;
    }

    try {
        const [movieResponse, genreResponse] = yield all([
            call(fetchMovieApi, movieId),
            call(fetchGenreApi),
        ]);

        const genreMap = {};
        genreResponse.data.genres.forEach((g) => {
            genreMap[g.id] = g.name;
        });

        const movieData = movieResponse.data;

        const movieWithGenres = {
            ...movieData,
            genre_names: movieData.genres
                ? movieData.genres.map((g) => g.name)
                : (movieData.genre_ids ? movieData.genre_ids.map((id) => genreMap[id] || "Unknown") : []),
        };

        yield put(fetchMovieSuccess(movieWithGenres));

    } catch (error) {
        yield put(fetchMovieFailure(error.message));
    }
}

export function* movieSaga() {
    yield takeLatest(fetchMovieStart.type, fetchMovieSaga);
}