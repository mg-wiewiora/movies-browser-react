import { useState } from "react";

export const usePagination = (totalItems, itemsPerPage) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToFirst = () => setPage(1);
  const goToPrev = () => setPage(prev => Math.max(prev - 1, 1));
  const goToNext = () => setPage(prev => Math.min(prev + 1, totalPages));
  const goToLast = () => setPage(totalPages);

  return { page, totalPages, goToFirst, goToPrev, goToNext, goToLast, setPage };
};
