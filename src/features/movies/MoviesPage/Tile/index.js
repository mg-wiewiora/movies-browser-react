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

const Tile = ({ movie }) => {
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : null;

  return (
    <TileWrapper>
      <TileImage posterUrl={posterUrl} noPosterUrl={noPoster} />
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
          <TileRating>{movie.vote_average}</TileRating>
          <TileVotes>{movie.vote_count} votes</TileVotes>
        </TileRatingWrapper>
      </TileContainer>
    </TileWrapper>
  );
};

export default Tile;
