import {
  DetailsTileWrapper,
  DetailsTileImage,
  DetailsTileContainer,
  DetailsTileTitle,
  DetailsTileYear,
  DetailsTileSpecific,
  DetailsTileSpecificTitle,
  DetailsTileTags,
  DetailsTileTag,
  DetailsTileRatingWrapper,
  DetailsTileContent,
  DetailsTileVotes,
  DetailsTileIcon,
  DetailsTileRating
} from "./styled.js";
import { getReleaseYear, getPosterUrl } from "../../features/movies/moviesData.js";
import noPoster from "../../assets/no-poster.svg";

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
          {movie?.production_countries?.map((product) => (
            <DetailsTileSpecific key={product.iso_3166_1}>
              <DetailsTileSpecificTitle>
                Production:
              </DetailsTileSpecificTitle>
              {product.name}
            </DetailsTileSpecific>))}
          {person?.birthday && (
            <DetailsTileSpecific>
              <DetailsTileSpecificTitle>
                Date of birth:
              </DetailsTileSpecificTitle>
              {person?.birthday}
            </DetailsTileSpecific>)}
          <DetailsTileSpecific>
            <DetailsTileSpecificTitle>
              {show ? "Release date" : "Place of birth"}
            </DetailsTileSpecificTitle>
            {movie?.release_date}{person?.place_of_birth}
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
              {movie.vote_average.toLocaleString("pl-PL", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}</DetailsTileRating>
            <DetailsTileVotes> / 10 {movie?.vote_count} votes</DetailsTileVotes>
          </DetailsTileRatingWrapper>)}
        <DetailsTileContent>{movie?.overview}{person?.biography}</DetailsTileContent>
      </DetailsTileContainer>
    </DetailsTileWrapper>
  )
};

export default DetailsTile;