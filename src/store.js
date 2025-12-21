import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "./features/movies/moviesSlice";
import movieReducer from "./features/movies/movieSlice";
import creditsReducer from "./features/movies/creditsSlice";
import peopleReducer from "./features/people/peopleSlice";
import personReducer from "./features/people/personSlice";
import personMoviesReducer from "./features/people/personMoviesSlice";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
    credits: creditsReducer,
    people: peopleReducer,
    person: personReducer,
    personMovies: personMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
