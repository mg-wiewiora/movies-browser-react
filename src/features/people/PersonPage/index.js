import Section from "../../../common/Section";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MoviesGrid } from "./styled";
import { Container } from "../../../common/Container/styled";
import { fetchPersonStart } from "../personSlice";
import { fetchPersonMoviesStart } from "../personMoviesSlice";
import { clearPersonMovies } from "../personMoviesSlice";
import DetailsTile from "../../../common/DetailsTile/index.js";
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
      {personLoading && <p>Loading person...</p>}
      {personError && <p>Error: {personError}</p>}
      <Section
        content={
          <DetailsTile
            key={person.id}
            show={false}
            person={person} />
        } />
      
      {personMoviesLoading && <p>Loading movies...</p>}
      {personMoviesError && <p>Error: {personMoviesError}</p>}
      {castList.length > 0 && (
      <Section
        title={`Movies - Cast (${castList.length})`}
        content={
          <>
            <MoviesGrid>
              {castList.map((movie) => (
                <MoviesTile key={movie.id} movie={movie} />
              ))}
            </MoviesGrid>
          </>
        } />)}
      {personMoviesLoading && <p>Loading movies...</p>}
      {personMoviesError && <p>Error: {personMoviesError}</p>}
      {crewList.length > 0 && (
      <Section
        title={`Movies - Crew (${crewList?.length})`}
      content={
        <>
          <MoviesGrid>
            {crewList.map((movie) => (
              <MoviesTile key={movie.credit_id} movie={movie} />
            ))}
          </MoviesGrid>
        </>
      } />)}
    </Container>
  );
};

export default PersonPage;