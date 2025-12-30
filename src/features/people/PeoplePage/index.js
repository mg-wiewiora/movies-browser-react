import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import Tile from "./Tile";
import { PeopleGrid } from "./styled";
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
          ) : null}
        </>
      )}
    </Container>
  );
};

export default PeoplePage;