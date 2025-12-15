import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../moviesSlice";
import { usePagination } from "../../../common/Pagination/usePagination";
import { ITEMS_PER_PAGE, TOTAL_PAGES, TMDB_ITEMS_PER_PAGE } from "../moviesConstants";
import { getPageData } from "./moviesData";

export const useMoviesPage = () => {
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

  return {
    moviesToShow,
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
