import Section from "../../../common/Section";
import CreditsTile from "../../movies/MoviePage/CreditsTile/index";
import { Loading } from "../../../common/Loading/styled";
import { NoResults } from "../../../common/NoResults/styled";
import Error from "../../../common/Error";
import { CreditsGrid } from "../../movies/MoviePage/styled";
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
            <CreditsGrid>
              {searchResults.map((person) => (
                <CreditsTile key={person.id} person={person} />
              ))}
            </CreditsGrid>
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
