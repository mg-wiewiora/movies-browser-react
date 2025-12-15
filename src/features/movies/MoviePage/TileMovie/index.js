import {
  TileWrapper,
  TileImage,
  TileContainer,
  TileTitle,
  TileYear,
  TileDetails,
  TileDetailsTitle,
  TileTags,
  TileTag,
  TileRatingWrapper,
  TileContent,
  TileVotes,
  TileIcon,
  TileRating
} from "./styled.js";
import { getReleaseYear, getPosterUrl } from "../../moviesData.js";
import noPoster from "../../../../assets/no-poster.svg";

const Tile = ({ movie }) => {

  const releaseYear = getReleaseYear(movie.release_date);
  const posterUrl = getPosterUrl(movie.poster_path);

  return(
  <TileWrapper>
    <TileImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
    <TileContainer>
      <TileTitle>{movie.title}</TileTitle>
      <TileYear>{releaseYear}</TileYear>
      <TileContainer>
        {movie.production_countries?.map((product) => (
      <TileDetails key={product.id}> <TileDetailsTitle>Production: </TileDetailsTitle>
        {product.name} </TileDetails>))}
      <TileDetails><TileDetailsTitle>Release date: </TileDetailsTitle>{movie.release_date}</TileDetails>
      </TileContainer>
      <TileTags>
        {movie.genre_names?.map((g) => (
          <TileTag key={g}>{g}</TileTag>
        ))}
      </TileTags>
      <TileRatingWrapper>
        <TileIcon />
        <TileRating>{movie.vote_average?.toFixed(1)}</TileRating>
        <TileVotes> / {movie.vote_count} votes</TileVotes>
      </TileRatingWrapper>
      <TileContent>{movie.overview}</TileContent>
    </TileContainer>
  </TileWrapper>
)};

export default Tile;