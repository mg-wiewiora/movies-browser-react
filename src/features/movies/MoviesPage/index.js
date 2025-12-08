import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import { fetchMoviesStart } from "../moviesSlice";
import Tile from "./Tile";
import { MoviesGrid } from "./styled";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, [dispatch]);

  console.log({movies})

  return (
    <Container>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      {movies.length > 0 && (
        <Section
          title="Popular Movies"
          content={
            <MoviesGrid >
              {movies.map((movie) => (
                <Tile key={movie.id} movie={movie} />
              ))}
            </MoviesGrid>
          }
        />
      )}
    </Container>
  );
};

export default MoviesPage;