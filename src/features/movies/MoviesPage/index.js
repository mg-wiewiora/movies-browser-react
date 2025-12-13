import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import Tile from "./Tile";
import { MoviesGrid } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { usePagination } from "../../../common/Pagination/usePagination";
import {
  ITEMS_PER_PAGE,
  TOTAL_PAGES,
  TMDB_ITEMS_PER_PAGE,
} from "../moviesConstants";
import { getPageData } from "./moviesData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../moviesSlice";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  const { page, totalPages, goToFirst, goToPrev, goToNext, goToLast } =
    usePagination(TOTAL_PAGES, ITEMS_PER_PAGE, TOTAL_PAGES);

  const { tmdbPage, startIndex, endIndex } = getPageData(
    page,
    ITEMS_PER_PAGE,
    TMDB_ITEMS_PER_PAGE
  );
  const moviesToShow = movies.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchMoviesStart({ page: tmdbPage }));
  }, [dispatch, tmdbPage]);

  return (
    <Container>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      {moviesToShow.length > 0 && (
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
