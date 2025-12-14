import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
    fetchCreditsStart,
    fetchCreditsSuccess,
    fetchCreditsFailure,
} from "./creditsSlice";

const API_KEY = "e0da2a33c4def495d0c4977083b2de8b";
const BASE_URL = "https://api.themoviedb.org/3";

function fetchCreditsApi(movieId) {
    return axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
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

        const creditsCastAndCrew = {
            ...creditsData,
            credits: {
                cast: creditsData.cast,
                crew: creditsData.crew,
            },
        };

        yield put(fetchCreditsSuccess(creditsCastAndCrew));

    } catch (error) {
        yield put(fetchCreditsFailure(error.message));
    }
}

export function* creditsSaga() {
    yield takeLatest(fetchCreditsStart.type, fetchCreditsSaga);
}