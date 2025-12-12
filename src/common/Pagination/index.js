import { PaginationWrapper, PaginationInfo, PaginationButton, PaginationLeft, PaginationRight } from "./styled";

export const Pagination = ({ page, totalPages, onFirst, onPrev, onNext, onLast }) => {
  const isFirst = page === 1;
  const isLast = page === totalPages;

  const renderIcons = (IconComponent, count) => {
    return Array.from({ length: count }).map((_, i) => <IconComponent key={i} />);
  };

  return (
    <PaginationWrapper>
      <PaginationButton disabled={isFirst} onClick={onFirst}>
        <span className="desktop-text">First</span>
        <span className="mobile-icons">{renderIcons(PaginationLeft, 2)}</span>
      </PaginationButton>

      <PaginationButton disabled={isFirst} onClick={onPrev}>
        <span className="desktop-text">Previous</span>
        <span className="mobile-icons">{renderIcons(PaginationLeft, 1)}</span>
      </PaginationButton>

      <PaginationInfo>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </PaginationInfo>

      <PaginationButton disabled={isLast} onClick={onNext}>
        <span className="desktop-text">Next</span>
        <span className="mobile-icons">{renderIcons(PaginationRight, 1)}</span>
      </PaginationButton>

      <PaginationButton disabled={isLast} onClick={onLast}>
        <span className="desktop-text">Last</span>
        <span className="mobile-icons">{renderIcons(PaginationRight, 2)}</span>
      </PaginationButton>
    </PaginationWrapper>
  );
};
