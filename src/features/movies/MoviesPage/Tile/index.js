import {
  TileWrapper,
  TileImage,
  TileContainer,
  TileTitle,
  TileYear,
  TileTags,
  TileTag,
  TileRatingWrapper,
  TileIcon,
  TileRating,
  TileVotes,
} from "./styled";
import noPoster from "../../../../assets/no-poster.svg";
import { getReleaseYear, getPosterUrl } from "../moviesData";

import {toMovie} from "../../../../routes.js"

const Tile = ({ movie }) => {
  const releaseYear = getReleaseYear(movie.release_date);
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <TileWrapper to={toMovie()}>
      <TileImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
      <TileContainer>
        <TileTitle>{movie.title}</TileTitle>
        <TileYear>{releaseYear}</TileYear>
        <TileTags>
          {movie.genre_names?.map((g) => (
            <TileTag key={g}>{g}</TileTag>
          ))}
        </TileTags>
        <TileRatingWrapper>
          <TileIcon />
          <TileRating>{movie.vote_average.toFixed(1)}</TileRating>
          <TileVotes>{movie.vote_count} votes</TileVotes>
        </TileRatingWrapper>
      </TileContainer>
    </TileWrapper>
  );
};

export default Tile;
