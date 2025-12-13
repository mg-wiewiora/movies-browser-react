import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Tile from "./TileMovie/index.js";
import TileCast from "./TileCast";
import TileCrew from "./TileCrew";
import poster from "../../../images/image.jpg"
import { getMovieById } from "../moviesSlice";
import { movieDetails } from "./api.js"
import { fetchMovieStart } from "../movieSlice";
import { fetchMoviesStart } from "../moviesSlice";
import { getMovie } from "../getMovie.js";
import axios from "axios";
import { getPosterUrl } from "../moviesData.js";
import { Backdrop, MoviesGrid } from "./styled.js";
import noPoster from "../../../assets/no-poster.svg";

const MoviePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieStart());
  }, [dispatch]);

  const { id } = useParams();
  const moviee = useSelector(state => getMovieById(state, id))

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDAzMDYyMjE2NmJmN2EzMTFmNWU3OTkxZjE0YjNiMCIsIm5iZiI6MTc2NTQwNTI4OS44NjUsInN1YiI6IjY5MzlmMjY5OThlODg3MmY0YWI4M2RiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WazLAR6hyvQvwl4lejUQSrK__NZ7cy1aC7igNu5ZCto'
      }
    };

    axios
      .request(options)
      .then(res => setMovieData(res.data))
      .catch(err => console.error(err));
  }, []);

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

  const backdropUrl = getPosterUrl(movieData.backdrop_path);

  return (
    <Container>
      <Section title={console.log({ movieData })} />
      <Section title={console.log({ creditsData })} />
      <Section title={console.log({ crewData })} />
      <Backdrop $posterUrl={backdropUrl} $noPosterUrl={noPoster} />
      <Tile
        movie={movieData} />
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