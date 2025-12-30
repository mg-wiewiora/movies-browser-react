import { call, put, takeLatest } from "redux-saga/effects";
import { tmdbApi } from "../api";
import {
  fetchPersonStart,
  fetchPersonSuccess,
  fetchPersonFailure,
} from "./personSlice";

function fetchPersonApi(personId) {
  return tmdbApi.get(`/person/${personId}`, { params: { language: "en-US" } });
}

function* fetchPersonSaga(action) {
  const personId = action.payload;

  if (!personId) {
    console.error("Missing person ID in action payload.");
    yield put(fetchPersonFailure("Brak ID osoby."));
    return;
  }

  try {
    const personResponse = yield call(fetchPersonApi, personId);

    const personData = personResponse.data;

    yield put(fetchPersonSuccess(personData));
  } catch (error) {
    yield put(fetchPersonFailure(error.message));
  }
}

export function* personSaga() {
  yield takeLatest(fetchPersonStart.type, fetchPersonSaga);
}
