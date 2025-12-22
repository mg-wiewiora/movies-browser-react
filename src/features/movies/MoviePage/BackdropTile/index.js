import {
  BackdropTileWrapper,
  BackdropTileContainer,
  BackdropTileTitle,
  BackdropTileRatingWrapper,
  BackdropTileVotes,
  BackdropTileMaxVotes,
  BackdropTileIcon,
  BackdropTileRating
} from "./styled.js";

const BackdropTile = ({ movie }) => {

  return (
    <BackdropTileWrapper>
      <BackdropTileContainer>
        <BackdropTileTitle>{movie.title}</BackdropTileTitle>
        <BackdropTileRatingWrapper>
          <BackdropTileIcon />
          <BackdropTileRating>{movie.vote_average?.toLocaleString("pl-PL", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}</BackdropTileRating>
          <BackdropTileMaxVotes> / 10 </BackdropTileMaxVotes>
          <BackdropTileVotes>{movie.vote_count} votes</BackdropTileVotes>
        </BackdropTileRatingWrapper>
      </BackdropTileContainer>
    </BackdropTileWrapper>
  )
};

export default BackdropTile;