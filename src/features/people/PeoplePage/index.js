import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import { fetchPeopleStart } from "../peopleSlice";
import Tile from "./Tile";
import { PeopleGrid } from "./styled";


const PeoplePage = () => {
   const dispatch = useDispatch();
   const { people, loading, error } = useSelector((state) => state.people);

    useEffect(() => {
       dispatch(fetchPeopleStart());
     }, [dispatch]);

  return (
    <Container>
      {loading && <p>Loading people...</p>}
      {error && <p>Error: {error}</p>}
      {people.length > 0 && (
      <Section 
        title="Popular people" 
        content={
            <PeopleGrid>
              {people.map((person) => (
                <Tile key={person.id} person={person} />
              ))}
            </PeopleGrid>
          }
        />
      )}
    </Container>
  );
};

export default PeoplePage;
