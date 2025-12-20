import { call, put, takeLatest } from "redux-saga/effects";
import { tmdbApi } from "./api";
import {
    fetchCreditsStart,
    fetchCreditsSuccess,
    fetchCreditsFailure,
} from "./creditsSlice";

function fetchCreditsApi(movieId) {
    return tmdbApi.get(`/movie/${movieId}/credits`, { params: { language: "en-US" } });
}

function* fetchCreditsSaga(action) {
    const movieId = action.payload;

    if (!movieId) {
        console.error("Missing movie ID in action payload.");
        yield put(fetchCreditsFailure("Brak ID filmu."));
        return;
    }

    try {
        const creditsResponse = yield call(fetchCreditsApi, movieId);

        const creditsData = creditsResponse.data;

        yield put(fetchCreditsSuccess(creditsData));

    } catch (error) {
        yield put(fetchCreditsFailure(error.message));
    }
}

export function* creditsSaga() {
    yield takeLatest(fetchCreditsStart.type, fetchCreditsSaga);
}