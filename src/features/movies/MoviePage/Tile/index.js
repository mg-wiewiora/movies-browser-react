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
} from "./styled";
import { getReleaseYear, getPosterUrl } from "../../moviesData.js";
import noPoster from "../../../../assets/no-poster.svg";

const Tile = ({ content, movie, }) => {

  const releaseYear = getReleaseYear(movie.release_date);
  const posterUrl = getPosterUrl(movie.poster_path);
  
  return(
  <TileWrapper>
    <TileImage src={posterUrl} $noPosterUrl={noPoster} />
    <TileContainer>
      <TileTitle>{movie.title}</TileTitle>
      <TileYear>{releaseYear}</TileYear>
      <TileDetails><TileDetailsTitle>Production: </TileDetailsTitle>{movie.original_language}</TileDetails>
      <TileDetails><TileDetailsTitle>Release date: </TileDetailsTitle>{movie.release_date}</TileDetails>
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
      <TileContent>{movie.overview}</TileContent>
    </TileContainer>
  </TileWrapper>
)};

export default Tile;