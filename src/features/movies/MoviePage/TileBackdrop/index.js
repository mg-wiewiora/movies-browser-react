import {
  TileBackdropWrapper,
  TileBackdropContainer,
  TileBackdropTitle,
  TileBackdropRatingWrapper,
  TileBackdropVotes,
  TileBackdropIcon,
  TileBackdropRating
} from "./styled.js";

const TileBackdrop = ({ movie }) => {

  return(
  <TileBackdropWrapper>
    <TileBackdropContainer>
      <TileBackdropTitle>{movie.title}</TileBackdropTitle>
      <TileBackdropRatingWrapper>
        <TileBackdropIcon />
        <TileBackdropRating>{movie.vote_average?.toFixed(1)}</TileBackdropRating>
        <TileBackdropVotes> / 10 </TileBackdropVotes>
        <TileBackdropVotes>{movie.vote_count} votes</TileBackdropVotes>
      </TileBackdropRatingWrapper>
    </TileBackdropContainer>
  </TileBackdropWrapper>
)};

export default TileBackdrop;