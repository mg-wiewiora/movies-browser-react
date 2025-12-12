import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import { fetchMoviesStart } from "../moviesSlice";
import Tile from "./Tile";
import { MoviesGrid } from "./styled";
import Pagination from "../../../common/Pagination";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, [dispatch]);

  return (
    <Container>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      {movies.length > 0 && (
        <>
          <Section
            title="Popular movies"
            content={
              <MoviesGrid>
                {movies.map((movie) => (
                  <Tile key={movie.id} movie={movie} />
                ))}
              </MoviesGrid>
            }
          />
          <Pagination />
        </>
      )}
    </Container>
  );
};

export default MoviesPage;
