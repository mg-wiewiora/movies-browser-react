import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";

import poster from "../../../images/people.jpg";
import Tiles from "../../../common/Tiles";



const PersonPage = () => {
  return (
    <Container>
      <Section title="Title" content="Content" />
      <Tiles people={poster} title="Scarlett Johansson" content="Content" />
    </Container>
  );
};

export default PersonPage;
