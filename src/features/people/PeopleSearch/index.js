import Section from "../../../common/Section";
import Tile from "../PeoplePage/Tile/index.js";
import { Loading } from "../../../common/Loading/styled.js";
import { PeopleGrid } from "../PeoplePage/styled";
import { Pagination } from "../../../common/Pagination";
import { useSearchPeople } from "./useSearchPeople";

const PeopleSearch = ({ query }) => {
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
  } = useSearchPeople(query);

  if (!query) return null;

  return (
    <Section
      title={
        loading
          ? `Search results for "${query}"`
          : `Search results for "${query}" (${totalResults})`
      }
      content={
        loading ? (
          <Loading />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <PeopleGrid>
              {searchResults.map((person) => (
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
        )
      }
    />
  );
};

export default PeopleSearch;
