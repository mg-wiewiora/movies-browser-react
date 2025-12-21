import { call, put, takeLatest, all } from "redux-saga/effects";
import { tmdbApi } from "../movies/api";
import {
    fetchPersonMoviesStart,
    fetchPersonMoviesSuccess,
    fetchPersonMoviesFailure,
} from "./personMoviesSlice";

function fetchPersonMoviesApi(personId) {
    return tmdbApi.get(`/person/${personId}/movie_credits`, { params: { language: "en-US" } });
}

function fetchGenreApi() {
    return tmdbApi.get(`/genre/movie/list`, { params: { language: "en-US" } });
}

function* fetchPersonMoviesSaga(action) {
    const personId = action.payload;

    if (!personId) {
        console.error("Missing person ID in action payload.");
        yield put(fetchPersonMoviesFailure("Missing person ID."));
        return;
    }

    try {
        const [personMoviesResponse, genreResponse] = yield all([
            call(fetchPersonMoviesApi, personId),
            call(fetchGenreApi),
        ]);

        const genreMap = {};
        genreResponse.data.genres.forEach((g) => {
            genreMap[g.id] = g.name;
        });

        const personMovieData = personMoviesResponse.data;

        const movieWithGenres = {
            ...personMovieData,
            genre_names: personMovieData.genres
                ? personMovieData.genres.map((g) => g.name)
                : (personMovieData.genre_ids ? personMovieData.genre_ids.map((id) => genreMap[id] || "Unknown") : []),
        };

        yield put(fetchPersonMoviesSuccess(movieWithGenres));

    } catch (error) {
        yield put(fetchPersonMoviesFailure(error.message));
    }
}

export function* personMoviesSaga() {
    yield takeLatest(fetchPersonMoviesStart.type, fetchPersonMoviesSaga);
}