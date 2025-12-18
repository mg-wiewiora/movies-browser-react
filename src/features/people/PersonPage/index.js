import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import poster from "../../../images/people.jpg";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Tile from "../PeoplePage/Tile";

const PersonPage = () => {
  const params = useParams();
  
  return (
    <Container>
      <Section title="Title" content="Content" />
      <Tile people={poster} title="Scarlett Johansson" content="Content" />
    </Container>
  );
};

export default PersonPage;
