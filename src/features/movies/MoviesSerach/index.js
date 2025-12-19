import Section from "../../../common/Section";
import MoviesTile from "../MoviesTile";
import { MoviesGrid } from "../MoviesPage/styled";
import { Pagination } from "../../../common/Pagination";
import { useSearchMovies } from "./useSearchMovies";
import { useQueryParameter } from "../../queryParameters";
import { Loading } from "./styled";

const MoviesSearch = () => {
  const query = useQueryParameter("query") || "";

  const {
    searchResults,
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

  return (
    <Section
      title={
        loading
          ? `Search results for "${query}"`
          : `Search results for "${query}" (${searchResults.length})`
      }
      content={
        loading ? (
          <Loading />
        ) : error ? (
          <p>Error: {error}</p>
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
