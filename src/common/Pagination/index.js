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
      <PaginationButton disabled={isFirst} onClick={onFirst}>
        <PaginationLeft />
        First
      </PaginationButton>

      <PaginationButton disabled={isFirst} onClick={onPrev}>
        <PaginationLeft />
        Previous
      </PaginationButton>

      <PaginationInfo>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </PaginationInfo>

      <PaginationButton disabled={isLast} onClick={onNext}>
        Next
        <PaginationRight />
      </PaginationButton>

      <PaginationButton disabled={isLast} onClick={onLast}>
        Last
        <PaginationRight />
      </PaginationButton>
    </PaginationWrapper>
  );
};
