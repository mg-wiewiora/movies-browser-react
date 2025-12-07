import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { Container } from "../../../common/Container/styled";
import poster from "../../../images/image.jpg"

const MoviesPage = () => {
  return (
    <Container>
     <Section title="Title" content="Content" />
     <Tile image={poster} title="Saw VI" year="2009" tag1="Horror" tag2="Thriller" content="Content"/>
    </Container>
  );
};

export default MoviesPage;
