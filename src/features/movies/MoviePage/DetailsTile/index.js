import {
  DetailsTileWrapper,
  DetailsTileImage,
  DetailsTileContainer,
  DetailsTileTitle,
  DetailsTileYear,
  DetailsTileSpecific,
  DetailsTileSpecificCredits,
  DetailsTileSpecificTitle,
  DetailsTileSpecificLongTitle,
  DetailsTileSpecificShortTitle,
  DetailsTileTags,
  DetailsTileTag,
  DetailsTileRatingWrapper,
  DetailsTileContent,
  DetailsTileVotes,
  DetailsTileIcon,
  DetailsTileRating
} from "./styled.js";
import { getReleaseYear, getPosterUrl } from "../../moviesData.js";
import noPoster from "../../../../assets/no-poster.svg";

const DetailsTile = ({ show, movie, person }) => {

  const releaseYear = getReleaseYear(movie?.release_date);
  const posterUrl = getPosterUrl(movie?.poster_path || person?.profile_path);

  return (
    <DetailsTileWrapper>
      <DetailsTileImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
      <DetailsTileContainer>
        <DetailsTileTitle>{movie?.title}{person?.name}</DetailsTileTitle>
        {show === true && (
          <DetailsTileYear>
            {releaseYear}
          </DetailsTileYear>)}
        <DetailsTileContainer>
          <DetailsTileSpecific>
            {show === true && (
          <DetailsTileSpecificTitle>
                Production:
              </DetailsTileSpecificTitle>)}
          {movie?.production_countries?.map((product, index) => (
            <DetailsTileSpecific key={product.iso_3166_1}>
              <DetailsTileSpecificLongTitle>
                {product.name}
                {index < movie.production_countries.length - 1 ? "," : ""}
              </DetailsTileSpecificLongTitle>
              <DetailsTileSpecificShortTitle>
                {product.iso_3166_1}
              </DetailsTileSpecificShortTitle>
            </DetailsTileSpecific>))}
            </DetailsTileSpecific>
          {person?.birthday && (
            <DetailsTileSpecific>
              <DetailsTileSpecificTitle>
                Date of birth:
              </DetailsTileSpecificTitle>
              <DetailsTileSpecificCredits>
                Birth:
              </DetailsTileSpecificCredits>
              {person?.birthday.replace(/-/g, ".")}
            </DetailsTileSpecific>)}
          <DetailsTileSpecific>
            <DetailsTileSpecificTitle>
              {show ? "Release date:" : "Place of birth:"}
            </DetailsTileSpecificTitle>
            {show === false &&
            <DetailsTileSpecificCredits>
              Place of birth:
            </DetailsTileSpecificCredits>} 
            {movie?.release_date?.replace(/-/g, ".")}{person?.place_of_birth}
          </DetailsTileSpecific>
        </DetailsTileContainer>
        {show === true && (
          <DetailsTileTags>
            {movie?.genre_names?.map((g) => (
              <DetailsTileTag key={g}>{g}</DetailsTileTag>
            ))}
          </DetailsTileTags>)}
        {show === true && (
          <DetailsTileRatingWrapper>
            <DetailsTileIcon />
            <DetailsTileRating>
              {movie.vote_average?.toLocaleString("pl-PL", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}</DetailsTileRating>
            <DetailsTileVotes> / 10 {movie?.vote_count} votes</DetailsTileVotes>
          </DetailsTileRatingWrapper>)}
      </DetailsTileContainer>
      <DetailsTileContent>{movie?.overview}{person?.biography}</DetailsTileContent>
    </DetailsTileWrapper>
  )
};

export default DetailsTile;