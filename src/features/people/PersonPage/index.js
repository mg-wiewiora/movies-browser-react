import Section from "../../../common/Section";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MoviesGrid } from "./styled";
import { Container } from "../../../common/Container/styled";
import { Loading } from "../../../common/Loading/styled.js";
import { fetchPersonStart } from "../personSlice";
import { fetchPersonMoviesStart } from "../personMoviesSlice";
import { clearPersonMovies } from "../personMoviesSlice";
import DetailsTile from "../../movies/MoviePage/DetailsTile/index.js";
import MoviesTile from "../../movies/MoviesTile/index.js";

const PersonPage = () => {

  const { person, personLoading, personError } = useSelector((state) => state.person);
  const { personMovies, personMoviesLoading, personMoviesError } = useSelector((state) => state.personMovies);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonStart(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonMoviesStart(id));
    }
    return () => {
      dispatch(clearPersonMovies());
    };
  }, [dispatch, id]);

  const castList = personMovies?.cast || [];
  const crewList = personMovies?.crew || [];

  return (
    <Container>
      {personLoading || personMoviesLoading ? (<Loading />) : (
        <>
          {personError || personMoviesError ? (<p>Error: {personError}</p>) : (
            <>
              <Section
                content={
                  <DetailsTile
                    key={person.id}
                    show={false}
                    person={person} />
                } />
              {castList.length > 0 && (
                <Section
                  title={`Movies - Cast (${castList.length})`}
                  content={
                    <>
                      <MoviesGrid>
                        {castList.map((movie) => (
                          <MoviesTile key={movie.id} movie={movie} person={true} />
                        ))}
                      </MoviesGrid>
                    </>
                  } />)}
              {crewList.length > 0 && (
                <Section
                  title={`Movies - Crew (${crewList?.length})`}
                  content={
                    <>
                      <MoviesGrid>
                        {crewList.map((movie) => (
                          <MoviesTile key={movie.credit_id} movie={movie} person={true}/>
                        ))}
                      </MoviesGrid>
                    </>
                  } />
              )}
            </>
          )}
        </>
      )}
    </Container>
  )
};

export default PersonPage;