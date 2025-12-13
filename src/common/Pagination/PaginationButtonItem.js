import {
  PaginationButton,
  PaginationLeftActive,
  PaginationLeftDisabled,
  PaginationRightActive,
  PaginationRightDisabled,
} from "./styled";

const getIcon = (direction, disabled) => {
  if (direction === "left")
    return disabled ? PaginationLeftDisabled : PaginationLeftActive;
  if (direction === "right")
    return disabled ? PaginationRightDisabled : PaginationRightActive;
};

export const PaginationButtonItem = ({
  text,
  direction,
  mobileIconsCount,
  onClick,
  disabled,
}) => {
  const Icon = getIcon(direction, disabled);

  return (
    <PaginationButton disabled={disabled} onClick={onClick}>
      <span className="desktop-icon">
        <Icon />
      </span>
      <span className="desktop-text">{text}</span>
      <span className="mobile-icons">
        {Array.from({ length: mobileIconsCount }).map((_, i) => (
          <Icon key={i} />
        ))}
      </span>
    </PaginationButton>
  );
};
