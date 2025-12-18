import { all } from "redux-saga/effects";

import { moviesSaga } from "./features/movies/moviesSaga";
import { movieSaga } from "./features/movies/movieSaga";
import { creditsSaga } from "./features/movies/creditsSaga";
import { peopleSaga } from "./features/people/peopleSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    movieSaga(),
    creditsSaga(),
    peopleSaga(),
  ]);
}
