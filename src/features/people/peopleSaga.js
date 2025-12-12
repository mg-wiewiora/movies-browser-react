import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPeopleStart,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "./peopleSlice";

const API_KEY = "e0da2a33c4def495d0c4977083b2de8b";
const BASE_URL = "https://api.themoviedb.org/3";

function fetchPopularPeopleApi() {
  return axios.get(`${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`);
}

function fetchGenresApi() {
  return axios.get(`${BASE_URL}/genre/person/list?api_key=${API_KEY}&language=en-US`);
}

function* fetchPeopleSaga() {
  try {
    const [peopleResponse, genresResponse] = yield all([
      call(fetchPopularPeopleApi),
      call(fetchGenresApi),
    ]);

    const genresMap = {};
    genresResponse.data.genres.forEach((g) => {
      genresMap[g.id] = g.name;
    });

    const peopleWithGenres =peopleResponse.data.results.map((people) => ({
      ...people,
      genre_names:people.genre_ids.map((id) => genresMap[id] || "Unknown"),
    }));

    yield put(fetchPeopleSuccess(peopleWithGenres));
  } catch (error) {
    yield put(fetchPeopleFailure(error.message));
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeopleStart.type, fetchPeopleSaga);
}
