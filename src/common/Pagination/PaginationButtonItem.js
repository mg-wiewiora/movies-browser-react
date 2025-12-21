import {
  PaginationButton,
  PaginationLeftActive,
  PaginationLeftDisabled,
  PaginationRightActive,
  PaginationRightDisabled,
} from "./styled";

const icons = {
  left: {
    active: PaginationLeftActive,
    disabled: PaginationLeftDisabled,
  },
  right: {
    active: PaginationRightActive,
    disabled: PaginationRightDisabled,
  },
};

export const PaginationButtonItem = ({
  text,
  direction,
  mobileIconsCount,
  onClick,
  disabled,
}) => {
  const Icon = disabled ? icons[direction].disabled : icons[direction].active;
  const isLeft = direction === "left";

  return (
    <PaginationButton disabled={disabled} onClick={onClick}>
      {isLeft && (
        <span className="desktop-icon">
          <Icon />
        </span>
      )}
      <span className="desktop-text">{text}</span>
      {!isLeft && (
        <span className="desktop-icon">
          <Icon />
        </span>
      )}
      <span className="mobile-icons">
        {Array.from({ length: mobileIconsCount }).map((_, i) => (
          <Icon key={i} />
        ))}
      </span>
    </PaginationButton>
  );
};
