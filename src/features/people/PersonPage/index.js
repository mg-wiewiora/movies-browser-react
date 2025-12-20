import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import TileMovie from "../../movies/MoviePage/TileMovie/index.js";
import Tile from "../../movies/MoviesPage/Tile/index.js";

const PersonPage = () => {

  return (
    <Container>
      <Section content={<TileMovie movie={[]}/>} />
      <Section title="Movies Cast" content={<Tile movie={[]}/>} />
      <Section title="Movies Crew" content={<Tile movie={[]}/>} />
    </Container>
  );
};

export default PersonPage;