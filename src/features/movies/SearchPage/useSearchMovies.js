import { useState, useEffect } from "react";
import { tmdbApi } from "../api";
import { ITEMS_PER_PAGE } from "../moviesConstants";

export const useSearchMovies = (query, initialPage = 1) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await tmdbApi.get("/search/movie", {
            params: {
              query,
              page,
            },
          });
          setSearchResults(response.data.results.slice(0, ITEMS_PER_PAGE));
          setTotalPages(response.data.total_pages);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, page]);

  const goToFirst = () => setPage(1);
  const goToPrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const goToLast = () => setPage(totalPages);

  return {
    searchResults,
    loading,
    error,
    page,
    totalPages,
    goToFirst,
    goToPrev,
    goToNext,
    goToLast,
  };
};
