export const getPosterUrl = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : null;
};

export const getPageData = (page, itemsPerPage, tmdbItemsPerPage) => {
  const tmdbPage = Math.ceil(page / Math.ceil(tmdbItemsPerPage / itemsPerPage));
  const startIndex =
    ((page - 1) % Math.ceil(tmdbItemsPerPage / itemsPerPage)) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return { tmdbPage, startIndex, endIndex };
};
