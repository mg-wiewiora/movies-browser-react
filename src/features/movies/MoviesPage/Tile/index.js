import {
  TileWrapper,
  Poster,
  Title,
  Info,
  Genres,
  RatingWrapper,
  RatingValue,
  Votes,
} from "./styled";

const Tile = ({ movie }) => {
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  return (
    <TileWrapper>
      <Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : ""
        }
        alt={movie.title}
      />
      <Title>{movie.title}</Title>
      <Info>{releaseYear}</Info>
      <Genres>
        {movie.genre_names?.map((g) => (
          <span key={g}>{g}</span>
        ))}
      </Genres>
      <RatingWrapper>
        <RatingValue>{movie.vote_average}</RatingValue>
        <Votes>{movie.vote_count} votes</Votes>
      </RatingWrapper>
    </TileWrapper>
  );
};

export default Tile;
