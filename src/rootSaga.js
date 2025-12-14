import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { movieSaga } from "./features/movies/movieSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), movieSaga()]);
}
