import Section from "../../../common/Section";
import MoviesTile from "../MoviesTile";
import { Loading } from "../../../common/Loading/styled";
import { NoResults } from "../../../common/NoResults/styled";
import Error from "../../../common/Error";
import { MoviesGrid } from "../MoviesPage/styled";
import { Pagination } from "../../../common/Pagination";
import { useSearchMovies } from "./useSearchMovies";

const MoviesSearch = ({ query }) => {
  const {
    searchResults,
    totalResults,
    loading,
    error,
    page,
    totalPages,
    goToFirst,
    goToPrev,
    goToNext,
    goToLast,
  } = useSearchMovies(query);

  if (!query) return null;

  const isNoResults = !loading && !error && searchResults.length === 0;

  const sectionTitle = isNoResults
    ? `Sorry, there are no results for "${query}"`
    : loading
    ? `Search results for "${query}"`
    : `Search results for "${query}" (${totalResults})`;

  return (
    <Section
      title={sectionTitle}
      content={
        loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : isNoResults ? (
          <NoResults />
        ) : (
          <>
            <MoviesGrid>
              {searchResults.map((movie) => (
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
        )
      }
    />
  );
};

export default MoviesSearch;