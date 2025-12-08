import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Tile from "../../../common/Tile";
import poster from "../../../images/image.jpg"

const MoviePage = () => {
  return (
    <Container>
      <Section title="Title" content="Content" />
      <Tile image={poster} title="Saw VI" year="2009" tag1="Horror" tag2="Thriller" content="Content"/>
    </Container>
  );
};

export default MoviePage;