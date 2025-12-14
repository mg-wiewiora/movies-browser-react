export const getPosterUrl = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : null;
};