import {
  TileWrapper,
  TileImage,
  TileContainer,
  TileTitle,
  TileYear,
  TileTags,
  TileTag,
  TileRatingWrapper,
  TileContent,
  TileVotes,
  TileIcon,
  TileRating
} from "./styled";
import { getReleaseYear, getPosterUrl } from "../../moviesData.js";

const Tile = ({ image, content, movie }) => (

  <TileWrapper>
    <TileImage src={image} />
    <TileContainer>
      <TileTitle>{movie.title}</TileTitle>
      <TileYear>{movie.year}</TileYear>
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
      <TileContent>{content}</TileContent>
    </TileContainer>
  </TileWrapper>
);

export default Tile;