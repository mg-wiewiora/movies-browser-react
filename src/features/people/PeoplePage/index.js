import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import { fetchPeopleStart } from "../peopleSlice";
import Tile from "./Tile";
import { PeopleGrid } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { usePagination } from "../../../common/Pagination/usePagination";
import {
  ITEMS_PER_PAGE,
  TOTAL_PAGES,
  TMDB_ITEMS_PER_PAGE,
} from "../peopleConstants";
import { getPageData } from "./peopleData";


const PeoplePage = () => {
   const dispatch = useDispatch();
   const { people, loading, error } = useSelector((state) => state.people);

   const { page, totalPages, goToFirst, goToPrev, goToNext, goToLast } =
    usePagination(TOTAL_PAGES, ITEMS_PER_PAGE, TOTAL_PAGES);

  const { tmdbPage, startIndex, endIndex } = getPageData(
    page,
    ITEMS_PER_PAGE,
    TMDB_ITEMS_PER_PAGE
  );
  const peopleToShow = people.slice(startIndex, endIndex);

    useEffect(() => {
       dispatch(fetchPeopleStart({ page: tmdbPage }));
     }, [dispatch, tmdbPage]);

  return (
    <Container>
      {loading && <p>Loading people...</p>}
      {error && <p>Error: {error}</p>}
      {peopleToShow.length > 0 && (
      <Section 
        title="Popular people" 
        content={
          <>
            <PeopleGrid>
              {peopleToShow.map((person) => (
                <Tile key={person.id} person={person} />
              ))}
            </PeopleGrid>
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

export default PeoplePage;
