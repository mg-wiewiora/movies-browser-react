import Movies from "./features/movies/MoviesPage";
import Movie from "./features/movies/MoviePage";
import People from "./features/people/PeoplePage";
import Person from "./features/people/PersonPage";

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toMovies, toMovie, toPerson, toPeople } from "./routes";
import Header from "./Header";

const App = () => (
  <HashRouter>
    <Header />

    <Switch>
      <Route path={toMovie()}>
        <Movie />
      </Route>
      <Route path={toMovies()}>
        <Movies />
      </Route>
      <Route path={toPerson()}>
        <Person />
      </Route>
      <Route path={toPeople()}>
        <People />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
