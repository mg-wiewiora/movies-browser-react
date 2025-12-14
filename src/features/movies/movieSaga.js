import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
    fetchMovieStart,
    fetchMovieSuccess,
    fetchMovieFailure,
} from "./movieSlice";

const API_KEY = "e0da2a33c4def495d0c4977083b2de8b";
const BASE_URL = "https://api.themoviedb.org/3";

function fetchMovieApi(movieId) {
    return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

function fetchCreditsApi(movieId) {
    return axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
}

function fetchGenreApi() {
    return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
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