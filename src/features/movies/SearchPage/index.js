import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import Tile from "../../movies/MoviesTile";
import { Loading } from "./styled";
import { MoviesGrid } from "../MoviesPage/styled";
import { Pagination } from "../../../common/Pagination";
import { useSearchMovies } from "./useSearchMovies";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";

const SearchPage = () => {
  const location = useLocation();
  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();

  const [searchText] = useState(query);

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
  } = useSearchMovies(searchText, 1);

  useEffect(() => {
    if (searchText !== query) {
      replaceQuery({ key: "query", value: searchText });
    }
  }, [searchText, query, replaceQuery]);

  if (!searchText) return null;

  return (
    <Container>
      <Section
        title={
          loading
            ? `Search results for "${searchText}"`
            : `Search results for "${searchText}" (${searchResults.length})`
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
          )
        }
      />
    </Container>
  );
};

export default SearchPage;
