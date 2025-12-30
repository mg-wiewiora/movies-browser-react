import { Container } from "../../../common/Container/styled"; 
import Section from "../../../common/Section";
import { MoviesGrid } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { useMoviesPage } from "./useMoviesPage";
import { useQueryParameter } from "../../queryParameters";
import MoviesSearch from "../MoviesSearch";
import MoviesTile from "../MoviesTile";
import { Loading } from "../../../common/Loading/styled";
import Error from "../../../common/Error";

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
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : moviesToShow.length > 0 ? (
            <Section
              title="Popular Movies"
              content={
                <>
                  <MoviesGrid>
                    {moviesToShow.map((movie) => (
                      <MoviesTile key={movie.id} movie={movie} />
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
          ) : null}
        </>
      )}
    </Container>
  );
};

export default MoviesPage;
