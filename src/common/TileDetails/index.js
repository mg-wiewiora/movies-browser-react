import {
  TileDetailsWrapper,
  TileDetailsImage,
  TileDetailsContainer,
  TileDetailsTitle,
  TileDetailsYear,
  TileDetailsSpecific,
  TileDetailsSpecificTitle,
  TileDetailsTags,
  TileDetailsTag,
  TileDetailsRatingWrapper,
  TileDetailsContent,
  TileDetailsVotes,
  TileDetailsIcon,
  TileDetailsRating
} from "./styled.js";
import { getReleaseYear, getPosterUrl } from "../../features/movies/moviesData.js";
import noPoster from "../../assets/no-poster.svg";

const TileDetails = ({ show, movie, person }) => {

  const releaseYear = getReleaseYear(movie?.release_date);
  const posterUrl = getPosterUrl(movie?.poster_path || person?.profile_path);

  return (
    <TileDetailsWrapper>
      <TileDetailsImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
      <TileDetailsContainer>
        <TileDetailsTitle>{movie?.title}{person?.name}</TileDetailsTitle>
        {show === true && (
          <TileDetailsYear>
            {releaseYear}
          </TileDetailsYear>)}
        <TileDetailsContainer>
          {movie?.production_countries?.map((product) => (
            <TileDetailsSpecific key={product.iso_3166_1}>
              <TileDetailsSpecificTitle>
                Production:
              </TileDetailsSpecificTitle>
              {product.name}
            </TileDetailsSpecific>))}
          {show === false && (
          <TileDetailsSpecific>
            <TileDetailsSpecificTitle>
              Date of birth:
            </TileDetailsSpecificTitle>
            {person?.birthday}
          </TileDetailsSpecific>)}
          <TileDetailsSpecific>
            <TileDetailsSpecificTitle>
              {show === true ? (<>Release date</>) : (<>Place of birth</>)}
            </TileDetailsSpecificTitle>
            {movie?.release_date}{person?.place_of_birth}
          </TileDetailsSpecific>
        </TileDetailsContainer>
        {show === true && (
        <TileDetailsTags>
          {movie?.genre_names?.map((g) => (
            <TileDetailsTag key={g}>{g}</TileDetailsTag>
          ))}
        </TileDetailsTags>)}
        <TileDetailsRatingWrapper>
          {show === true && (<TileDetailsIcon />)}
          <TileDetailsRating>{movie?.vote_average?.toFixed(1)}</TileDetailsRating>
          {show === true && (<TileDetailsVotes> / 10 {movie?.vote_count} votes</TileDetailsVotes>)}
        </TileDetailsRatingWrapper>
        <TileDetailsContent>{movie?.overview}{person?.biography}</TileDetailsContent>
      </TileDetailsContainer>
    </TileDetailsWrapper>
  )
};

export default TileDetails;