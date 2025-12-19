import Section from "../../../common/Section";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "../../../common/Container/styled";
import { fetchPersonStart } from "../personSlice";
import TileMovie from "../../movies/MoviePage/TileMovie/index.js";
import Tile from "../../movies/MoviesPage/Tile/index.js";

const PersonPage = () => {

  const { person, personLoading, personError } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonStart(id));
    }
  }, [dispatch, id]);

  return (
    <Container>
      {personLoading && <p>Loading movie...</p>}
      {personError && <p>Error: {personError}</p>}
      <Section
        content={
          <TileMovie
            key={person.id}
            show={false}
            person={person} />
        } />
      <Section title="Movies Cast" content={<Tile movie={person} />} />
      <Section title="Movies Crew" content={<Tile movie={[]} />} />
    </Container>
  );
};

export default PersonPage;