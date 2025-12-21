import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import TileMovie from "../../movies/MoviePage/TileMovie/index.js";
import MoviesTile from "../../movies/MoviesTile/index.js";

const PersonPage = () => {

  return (
    <Container>
      <Section content={<TileMovie movie={[]}/>} />
      <Section title="Movies Cast" content={<MoviesTile movie={[]}/>} />
      <Section title="Movies Crew" content={<MoviesTile movie={[]}/>} />
    </Container>
  );
};

export default PersonPage;