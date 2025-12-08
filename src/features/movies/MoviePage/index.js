import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Tile from "./Tile";
import poster from "../../../images/image.jpg"
import { getMovieById } from "../moviesSlice";

const MoviePage = () => {

  const { movies, loading, error } = useSelector((state) => state.movies);
  const { id } = useParams();
  const movie = useSelector(state => getMovieById(state, id))

  console.log({movies})
  console.log({movie})

  return (
    <Container>
      {movies.map((movie) => (
        <Tile key={movie.id}
          movie={movie}
          image={poster}
          title="Saw VI"
          year="2009"
          tag1="Horror"
          tag2="Thriller"
          content="Content" />
      ))}
    </Container>
  );
};

export default MoviePage;