import {
  TileWrapper,
  TileImage,
  TileContainer,
  TileTitle,
  TileYear,
  TileTags,
  TileRatingWrapper,
  TileRating,
  TileVotes,
} from "./styled";

const Tile = ({ movie }) => {
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  return (
    <TileWrapper>
      <TileImage
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : ""
        }
        alt={movie.title}
      />
      <TileContainer>
      <TileTitle>{movie.title}</TileTitle>
      <TileYear>{releaseYear}</TileYear>
      <TileTags>
        {movie.genre_names?.map((g) => (
          <span key={g}>{g}</span>
        ))}
      </TileTags>
      <TileRatingWrapper>
        <TileRating>{movie.vote_average}</TileRating>
        <TileVotes>{movie.vote_count} votes</TileVotes>
      </TileRatingWrapper>
      </TileContainer>
    </TileWrapper>
  );
};

export default Tile;
