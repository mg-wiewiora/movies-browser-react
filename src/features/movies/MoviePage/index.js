import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import DetailsTile from "../../../common/DetailsTile/index.js";
import CreditsTile from "./CreditsTile/index.js";
import BackdropTile from "./BackdropTile/index.js";
import { fetchMovieStart } from "../movieSlice";
import { fetchCreditsStart } from "../creditsSlice";
import { getPosterUrl } from "../moviesData.js";
import { BackdropContainer, Backdrop, CreditsGrid } from "./styled.js";
import { Loading } from "../../../common/Loading/styled.js";

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
      {loading && <Loading/>}
      {error && <p>Error: {error}</p>}
      {movie.backdrop_path !== null && (
        <BackdropContainer>
          <Backdrop $posterUrl={backdropUrl}>
            <BackdropTile
              key={movie.imdb_id}
              movie={movie}
            />
          </Backdrop>
        </BackdropContainer>)}
      {loading && <p>Loading movie...</p>}
      {error && <p>Error: {error}</p>}
      <Section
        content={
          <DetailsTile
            show={true}
            key={movie.id}
            movie={movie} />
        } />
      {creditsLoading && <p>Loading credits...</p>}
      {creditsError && <p>Error: {error}</p>}
      <Section
        title="Cast"
        content={
          <>
            <CreditsGrid >
              {castList.map((actor) => (
                <CreditsTile key={actor.cast_id} actor={actor} />
              ))}
            </CreditsGrid>
          </>
        } />
      <Section
        title="Crew"
        content={
          <>
            <CreditsGrid >
              {crewList.map((crew) => (
                <CreditsTile key={crew.credit_id} crew={crew} />
              ))}
            </CreditsGrid>
          </>
        } />
    </Container>
  );
};

export default MoviePage;