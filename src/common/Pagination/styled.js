import styled from "styled-components";
import { ReactComponent as LeftActiveIcon } from "../../assets/arrowLeftActive.svg";
import { ReactComponent as LeftDisabledIcon } from "../../assets/arrowLeftDisabled.svg";
import { ReactComponent as RightActiveIcon } from "../../assets/arrowRightActive.svg";
import { ReactComponent as RightDisabledIcon } from "../../assets/arrowRightDisabled.svg";

export const PaginationWrapper = styled.footer`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 24px;
  max-width: 525px;
  margin: 40px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 8px;
    max-width: 232px;
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.sky};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    cursor: not-allowed;
  }

  .desktop-icon {
    display: flex;
    align-items: center;
  }

  .desktop-text {
    display: inline;
  }

  .mobile-icons {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 8px 12px;
    font-size: 0;

    .desktop-icon {
      display: none;
    }

    .desktop-text {
      display: none;
    }

    .mobile-icons {
      display: flex;
      gap: 2px;
      align-items: center;
    }
  }
`;

export const PaginationInfo = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.grey};
  white-space: nowrap;

  strong {
    color: ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
  }
`;

export const PaginationLeftActive = styled(LeftActiveIcon)`
  width: 5px;
`;

export const PaginationLeftDisabled = styled(LeftDisabledIcon)`
  width: 5px;
`;

export const PaginationRightActive = styled(RightActiveIcon)`
  width: 5px;
`;

export const PaginationRightDisabled = styled(RightDisabledIcon)`
  width: 5px;
`;
