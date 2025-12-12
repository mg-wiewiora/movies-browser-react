import {
  PaginationWrapper,
  PaginationInfo,
  PaginationButton,
  PaginationLeft,
  PaginationRight,
} from "./styled";

export const Pagination = ({
  page,
  totalPages,
  onFirst,
  onPrev,
  onNext,
  onLast,
}) => {
  const isFirst = page === 1;
  const isLast = page === totalPages;

  return (
    <PaginationWrapper>
      <PaginationButton
        disabled={isFirst}
        onClick={onFirst}
        aria-label="Go to first page"
      >
        <PaginationLeft />
        First
      </PaginationButton>
      <PaginationButton
        disabled={isFirst}
        onClick={onPrev}
        aria-label="Go to previous page"
      >
        <PaginationLeft />
        Previous
      </PaginationButton>
      <PaginationInfo>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </PaginationInfo>
      <PaginationButton
        disabled={isLast}
        onClick={onNext}
        aria-label="Go to next page"
      >
        Next
        <PaginationRight />
      </PaginationButton>
      <PaginationButton
        disabled={isLast}
        onClick={onLast}
        aria-label="Go to last page"
      >
        Last
        <PaginationRight />
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
