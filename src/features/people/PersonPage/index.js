import Section from "../../../common/Section";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MoviesGrid } from "./styled";
import { Container } from "../../../common/Container/styled";
import { fetchPersonStart } from "../personSlice";
import { fetchMovieStart } from "../../movies/movieSlice";
import TileDetails from "../../../common/TileDetails/index.js";
import Tile from "../../movies/MoviesPage/Tile/index.js";

const PersonPage = () => {

  const { person, personLoading, personError } = useSelector((state) => state.person);
  const { movies, loading, error } = useSelector((state) => state.movies);
  const { credits, creditsLoading, creditsError } = useSelector((state) => state.credits);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonStart(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieStart(id));
    }
  }, [dispatch, id]);

  console.log({ movies })
  console.log({ credits })
  const castList = credits?.cast || [];
  const crewList = credits?.crew || [];

  return (
    <Container>
      {personLoading && <p>Loading movie...</p>}
      {personError && <p>Error: {personError}</p>}
      <Section
        content={
          <TileDetails
            key={person.id}
            show={false}
            person={person} />
        } />
      <Section
        title="Movies Cast"
        content={
        <>
          </>
         } />
      <Section title="Movies Crew" content={<Tile movie={[]} />} />
    </Container>
  );
};

export default PersonPage;