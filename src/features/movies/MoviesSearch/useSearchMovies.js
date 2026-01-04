import { useState, useEffect } from "react";
import { tmdbApi } from "../../api";
import { ITEMS_PER_PAGE } from "../../constants";

export const useSearchMovies = (query) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [genresMap, setGenresMap] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await tmdbApi.get("/genre/movie/list", {
          params: { language: "en-US" },
        });
        const map = {};
        response.data.genres.forEach((g) => {
          map[g.id] = g.name;
        });
        setGenresMap(map);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (!query || Object.keys(genresMap).length === 0) {
      setLoading(false);
      return;
    }

    // ✅ KLUCZOWA LINIJKA
    setLoading(true);

    const timeoutId = setTimeout(async () => {
      setError(null);

      try {
        const response = await tmdbApi.get("/search/movie", {
          params: { query, page },
        });

        const resultsWithGenres = response.data.results.map((movie) => ({
          ...movie,
          genre_names: movie.genre_ids?.map((id) => genresMap[id]) || [],
        }));

        setSearchResults(resultsWithGenres.slice(0, ITEMS_PER_PAGE));
        setTotalPages(response.data.total_pages);
        setTotalResults(response.data.total_results);
      } catch (err) {
        setError(err.response?.data?.status_message || err.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, page, genresMap]);

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
