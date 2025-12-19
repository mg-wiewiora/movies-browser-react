import {
  TileMovieWrapper,
  TileMovieImage,
  TileMovieContainer,
  TileMovieTitle,
  TileMovieYear,
  TileMovieDetails,
  TileMovieDetailsTitle,
  TileMovieTags,
  TileMovieTag,
  TileMovieRatingWrapper,
  TileMovieContent,
  TileMovieVotes,
  TileMovieIcon,
  TileMovieRating
} from "./styled.js";
import { getReleaseYear, getPosterUrl } from "../../moviesData.js";
import noPoster from "../../../../assets/no-poster.svg";

const TileMovie = ({ show, movie, person }) => {

  const releaseYear = getReleaseYear(movie?.release_date);
  const posterUrl = getPosterUrl(movie?.poster_path || person?.profile_path);

  return (
    <TileMovieWrapper>
      <TileMovieImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
      <TileMovieContainer>
        <TileMovieTitle>{movie?.title}{person?.name}</TileMovieTitle>
        {show === true && (
          <TileMovieYear>
            {releaseYear}
          </TileMovieYear>)}
        <TileMovieContainer>
          {movie?.production_countries?.map((product) => (
            <TileMovieDetails key={product.iso_3166_1}>
              <TileMovieDetailsTitle>
                Production:
              </TileMovieDetailsTitle>
              {product.name}
            </TileMovieDetails>))}
          {show === false && (
          <TileMovieDetails>
            <TileMovieDetailsTitle>
              Date of birth:
            </TileMovieDetailsTitle>
            {person?.birthday}
          </TileMovieDetails>)}
          <TileMovieDetails>
            <TileMovieDetailsTitle>
              {show === true ? (<>Release date</>) : (<>Place of birth</>)}
            </TileMovieDetailsTitle>
            {movie?.release_date}{person?.place_of_birth}
          </TileMovieDetails>
        </TileMovieContainer>
        {show === true && (
        <TileMovieTags>
          {movie?.genre_names?.map((g) => (
            <TileMovieTag key={g}>{g}</TileMovieTag>
          ))}
        </TileMovieTags>)}
        <TileMovieRatingWrapper>
          {show === true && (<TileMovieIcon />)}
          <TileMovieRating>{movie?.vote_average?.toFixed(1)}</TileMovieRating>
          {show === true && (<TileMovieVotes> / 10 {movie?.vote_count} votes</TileMovieVotes>)}
        </TileMovieRatingWrapper>
        <TileMovieContent>{movie?.overview}{person?.biography}</TileMovieContent>
      </TileMovieContainer>
    </TileMovieWrapper>
  )
};

export default TileMovie;