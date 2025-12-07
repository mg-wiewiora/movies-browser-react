import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { Container } from "../../../common/Container/styled";

const MoviesPage = () => {
  return (
    <Container>
     <Section title="Title" content="Content" />
     <Tile title="Title" content="Content" tag1="Horror" tag2="Thriller"/>
    </Container>
  );
};

export default MoviesPage;
