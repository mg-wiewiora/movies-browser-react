import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Tile from "./Tile";
import poster from "../../../images/image.jpg"
import { useSelector } from "react-redux";

const MoviePage = () => {

  const { movies, loading, error } = useSelector((state) => state.movies);

  return (
    <Container>
      {movies.map((movie) => (
        <Tile key={movie.id} movie={movie} image={poster} title="Saw VI" year="2009" tag1="Horror" tag2="Thriller" content="Content" />
      ))}
    </Container>
  );
};

export default MoviePage;