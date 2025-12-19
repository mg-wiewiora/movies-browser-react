import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import Tile from "../MoviesTile";
import { MoviesGrid } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { useMoviesPage } from "./useMoviesPage";
import { useQueryParameter } from "../../queryParameters";
import MoviesSearch from "../MoviesSearch";

const MoviesPage = () => {
  const query = useQueryParameter("query") || "";

  const {
    moviesToShow,
    loading,
    error,
    page,
    totalPages,
    goToFirst,
    goToPrev,
    goToNext,
    goToLast,
  } = useMoviesPage();

  return (
    <Container>
      {query ? (
        <MoviesSearch query={query} />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default MoviesPage;
