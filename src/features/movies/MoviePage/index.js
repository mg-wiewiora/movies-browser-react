import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Tile from "./TileMovie/index.js";
import TileCast from "./TileCast";
import TileCrew from "./TileCrew";
import { fetchMovieStart } from "../movieSlice";
import axios from "axios";
import { getPosterUrl } from "../moviesData.js";
import { BackdropContainer, Backdrop, MoviesGrid } from "./styled.js";
import noPoster from "../../../assets/no-poster.svg";

const MoviePage = () => {

  const { movie, loadings, errors } = useSelector((state) => state.movie);

  const { id } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieStart(id)); 
    }
  }, [dispatch, id]);

  const [creditsData, setCreditsData] = useState([]);

  useEffect(() => {
    const optionsCredits = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDAzMDYyMjE2NmJmN2EzMTFmNWU3OTkxZjE0YjNiMCIsIm5iZiI6MTc2NTQwNTI4OS44NjUsInN1YiI6IjY5MzlmMjY5OThlODg3MmY0YWI4M2RiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WazLAR6hyvQvwl4lejUQSrK__NZ7cy1aC7igNu5ZCto'
      }
    };

    axios
      .request(optionsCredits)
      .then(res => setCreditsData(res.data.cast))
      .catch(err => console.error(err));
  }, []);

  const [crewData, setCrewData] = useState([])

  useEffect(() => {
    const optionsCrew = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDAzMDYyMjE2NmJmN2EzMTFmNWU3OTkxZjE0YjNiMCIsIm5iZiI6MTc2NTQwNTI4OS44NjUsInN1YiI6IjY5MzlmMjY5OThlODg3MmY0YWI4M2RiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WazLAR6hyvQvwl4lejUQSrK__NZ7cy1aC7igNu5ZCto'
      }
    };

    axios
      .request(optionsCrew)
      .then(res => setCrewData(res.data.crew))
      .catch(err => console.error(err));
  }, []);

  const backdropUrl = getPosterUrl(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);

  return (
    <Container>
      <Section title={console.log({ movie })} />
      <Section title={console.log({ creditsData })} />
      <Section title={console.log({ crewData })} />
      <BackdropContainer>
        <Backdrop $posterUrl={backdropUrl} $noPosterUrl={noPoster} />
      </BackdropContainer>
      <Tile
        movie={movie} />
      <Section title="Cast" />
      <MoviesGrid >
        {creditsData.map((actor) => (
          <TileCast key={actor.id} actor={actor} />
        ))}
      </MoviesGrid>
      <Section title="Crew" />
      <MoviesGrid >
        {crewData.map((actor) => (
          <TileCrew key={actor.id} actor={actor} />
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default MoviePage;