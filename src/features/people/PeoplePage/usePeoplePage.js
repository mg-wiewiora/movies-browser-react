import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleStart } from "../peopleSlice";
import { usePagination } from "../../../common/Pagination/usePagination";
import { ITEMS_PER_PEOPLE_PAGE, TOTAL_PAGES, TMDB_ITEMS_PER_PAGE } from "../../constants";
import { getPageData } from "./peopleData";

export const usePeoplePage = () => {
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((state) => state.people);

  const { page, totalPages, goToFirst, goToPrev, goToNext, goToLast } =
    usePagination(TOTAL_PAGES, ITEMS_PER_PEOPLE_PAGE, TOTAL_PAGES);

  const { tmdbPage, startIndex, endIndex } = getPageData(
    page,
    ITEMS_PER_PEOPLE_PAGE,
    TMDB_ITEMS_PER_PAGE
  );
  const peopleToShow = people.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchPeopleStart({ page: tmdbPage }));
  }, [dispatch, tmdbPage]);

  return {
    peopleToShow,
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
