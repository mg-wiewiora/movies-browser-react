import { all } from "redux-saga/effects";
import { moviesSaga, movieSaga } from "./features/movies/moviesSaga";

export default function* rootSaga() {
  yield all([moviesSaga()]);
  yield all([movieSaga()]);
}
