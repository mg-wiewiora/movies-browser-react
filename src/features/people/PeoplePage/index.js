import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import CreditsTile from "../../movies/MoviePage/CreditsTile/index";
import { CreditsGrid } from "../../movies/MoviePage/styled";
import { Pagination } from "../../../common/Pagination";
import { usePeoplePage } from "./usePeoplePage";
import { useQueryParameter } from "../../queryParameters";
import PeopleSearch from "../PeopleSearch";
import { Loading } from "../../../common/Loading/styled";
import Error from "../../../common/Error";

const PeoplePage = () => {
  const query = useQueryParameter("query") || "";

  const {
    peopleToShow,
    loading,
    error,
    page,
    totalPages,
    goToFirst,
    goToPrev,
    goToNext,
    goToLast,
  } = usePeoplePage();

  return (
    <Container>
      {query ? (
        <PeopleSearch query={query} />
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : peopleToShow.length > 0 ? (
            <Section
              title="Popular people"
              content={
                <>
                  <CreditsGrid>
                    {peopleToShow.map((person) => (
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
              }
            />
          ) : null}
        </>
      )}
    </Container>
  );
};

export default PeoplePage;