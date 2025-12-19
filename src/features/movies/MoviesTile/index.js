import {
  MoviesTileWrapper,
  MoviesTileImage,
  MoviesTileContainer,
  MoviesTileTitle,
  MoviesTileYear,
  MoviesTileTags,
  MoviesTileTag,
  MoviesTileRatingWrapper,
  MoviesTileIcon,
  MoviesTileRating,
  MoviesTileVotes,
} from "./styled";
import noPoster from "../../../assets/no-poster.svg";
import { getReleaseYear, getPosterUrl } from "../moviesData.js";

const MoviesTile = ({ movie }) => {
  const releaseYear = getReleaseYear(movie.release_date);
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <MoviesTileWrapper to={`/movie/${movie.id}`}>
      <MoviesTileImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
      <MoviesTileContainer>
        <MoviesTileTitle>{movie.title}</MoviesTileTitle>
        <MoviesTileYear>{releaseYear}</MoviesTileYear>
        <MoviesTileTags>
          {movie.genre_names?.map((g) => (
            <MoviesTileTag key={g}>{g}</MoviesTileTag>
          ))}
        </MoviesTileTags>
        <MoviesTileRatingWrapper>
          <MoviesTileIcon />
          <MoviesTileRating>
            {movie.vote_average.toLocaleString("pl-PL", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </MoviesTileRating>

          <MoviesTileVotes>{movie.vote_count} votes</MoviesTileVotes>
        </MoviesTileRatingWrapper>
      </MoviesTileContainer>
    </MoviesTileWrapper>
  );
};

export default MoviesTile;
