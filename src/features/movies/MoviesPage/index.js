import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import { fetchMoviesStart } from "../moviesSlice";
import Tile from "./Tile";
import { MoviesGrid } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { usePagination } from "../../../common/Pagination/usePagination";

const ITEMS_PER_PAGE = 8;

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  const { page, totalPages, goToFirst, goToPrev, goToNext, goToLast } =
    usePagination(movies.length, ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, [dispatch]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const moviesToShow = movies.slice(startIndex, endIndex);

  return (
    <Container>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      {movies.length > 0 && (
        <Section
          title="Popular Movies"
          content={
            <>
              <MoviesGrid>
                {moviesToShow.map((movie) => (
                  <Tile key={movie.id} movie={movie} />
                ))}
              </MoviesGrid>
              <Pagination
                page={page}
                totalPages={totalPages}
                onFirst={goToFirst}
                onPrev={goToPrev}
                onNext={goToNext}
                onLast={goToLast}
              />
            </>
          }
        />
      )}
    </Container>
  );
};

export default MoviesPage;
