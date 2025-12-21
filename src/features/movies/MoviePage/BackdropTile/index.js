import {
  BackdropTileWrapper,
  BackdropTileContainer,
  BackdropTileTitle,
  BackdropTileRatingWrapper,
  BackdropTileVotes,
  BackdropTileIcon,
  BackdropTileRating
} from "./styled.js";

const BackdropTile = ({ movie }) => {

  return(
  <BackdropTileWrapper>
    <BackdropTileContainer>
      <BackdropTileTitle>{movie.title}</BackdropTileTitle>
      <BackdropTileRatingWrapper>
        <BackdropTileIcon />
        <BackdropTileRating>{movie.vote_average?.toFixed(1)}</BackdropTileRating>
        <BackdropTileVotes> / 10 </BackdropTileVotes>
        <BackdropTileVotes>{movie.vote_count} votes</BackdropTileVotes>
      </BackdropTileRatingWrapper>
    </BackdropTileContainer>
  </BackdropTileWrapper>
)};

export default BackdropTile;