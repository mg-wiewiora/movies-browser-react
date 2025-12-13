export const getReleaseYear = (releaseDate) => {
  return releaseDate ? releaseDate.split("-")[0] : "N/A";
};

export const getPosterUrl = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : null;
};