import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Tile from "../../../common/Tile";
import poster from "../../../images/people.jpg";

const PersonPage = () => {
  return (
    <Container>
      <Section title="Title" content="Content" />
      <Tile image={poster} title="Scarlett Johansson" content="Content" />
    </Container>
  );
};

export default PersonPage;
