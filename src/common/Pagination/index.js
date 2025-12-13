import { PaginationWrapper, PaginationInfo } from "./styled";
import { PaginationButtonItem } from "./PaginationButtonItem";

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

  const buttons = [
    {
      text: "First",
      direction: "left",
      mobileIconsCount: 2,
      onClick: onFirst,
      disabled: isFirst,
    },
    {
      text: "Previous",
      direction: "left",
      mobileIconsCount: 1,
      onClick: onPrev,
      disabled: isFirst,
    },
    {
      text: "Next",
      direction: "right",
      mobileIconsCount: 1,
      onClick: onNext,
      disabled: isLast,
    },
    {
      text: "Last",
      direction: "right",
      mobileIconsCount: 2,
      onClick: onLast,
      disabled: isLast,
    },
  ];

  return (
    <PaginationWrapper>
      {buttons.slice(0, 2).map((btn, index) => (
        <PaginationButtonItem
          key={index}
          text={btn.text}
          direction={btn.direction}
          mobileIconsCount={btn.mobileIconsCount}
          onClick={btn.onClick}
          disabled={btn.disabled}
        />
      ))}

      <PaginationInfo>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </PaginationInfo>

      {buttons.slice(2).map((btn, index) => (
        <PaginationButtonItem
          key={index + 2}
          text={btn.text}
          direction={btn.direction}
          mobileIconsCount={btn.mobileIconsCount}
          onClick={btn.onClick}
          disabled={btn.disabled}
        />
      ))}
    </PaginationWrapper>
  );
};
