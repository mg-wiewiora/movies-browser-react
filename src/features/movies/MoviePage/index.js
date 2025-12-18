import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Tile from "./TileMovie/index.js";
import TileCast from "./TileCast";
import TileCrew from "./TileCrew";
import { fetchMovieStart } from "../movieSlice";
import { fetchCreditsStart } from "../creditsSlice";
import { getPosterUrl } from "../moviesData.js";
import { BackdropContainer, Backdrop, MoviesGrid } from "./styled.js";
import noPoster from "../../../assets/no-poster.svg";

const MoviePage = () => {

  const { movie, loading, error } = useSelector((state) => state.movie);
  const { credits, creditsLoading, creditsError } = useSelector((state) => state.credits);
  const { id } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieStart(id)); 
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchCreditsStart(id)); 
    }
  }, [dispatch, id]);

  const backdropUrl = getPosterUrl(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);
  const castList = credits?.cast || [];
  const crewList = credits?.crew || [];
  return (
    <Container>
      <Section />
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      <BackdropContainer>
        <Backdrop $posterUrl={backdropUrl} $noPosterUrl={noPoster} />
      </BackdropContainer>
      <Tile
        movie={movie} />
      <Section title="Cast" />
      {creditsLoading && <p>Loading movies...</p>}
      {creditsError && <p>Error: {error}</p>}
      <MoviesGrid >
        {castList.map((actor) => (
          <TileCast key={actor.cast_id} actor={actor} />
        ))}
      </MoviesGrid>
      <Section title="Crew" />
      <MoviesGrid >
        {crewList.map((crew) => (
          <TileCrew key={crew.credit_id} crew={crew} />
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default MoviePage;