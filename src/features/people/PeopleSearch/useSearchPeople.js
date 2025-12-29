import { useState, useEffect } from "react";
import { tmdbApi } from "../api";
import { ITEMS_PER_PAGE } from "../peopleConstants";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const useSearchPeople = (query) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (!query || Object.keys({id}).length === 0) {
      setSearchResults([]);
      setTotalResults(0);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await tmdbApi.get("/search/person", { params: { query, page } });
        
        setSearchResults(response.data.results.slice(0, ITEMS_PER_PAGE));
        setTotalPages(response.data.total_pages);
        setTotalResults(response.data.total_results);
      } catch (err) {
        setError(err.response?.data?.status_message || err.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, page, id]);

  const goToFirst = () => setPage(1);
  const goToPrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const goToLast = () => setPage(totalPages);

  return {
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
  };
};
