import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import Tile from "./Tile";
import { MoviesGrid } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { useMoviesPage } from "./useMoviesPage";

const MoviesPage = () => {
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
