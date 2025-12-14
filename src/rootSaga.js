import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { movieSaga } from "./features/movies/movieSaga";
import { creditsSaga } from "./features/movies/creditsSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), movieSaga(), creditsSaga()]);
}
