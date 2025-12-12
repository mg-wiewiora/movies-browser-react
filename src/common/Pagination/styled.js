import styled from "styled-components";
import { ReactComponent as LeftIcon } from "../../assets/left.svg";
import { ReactComponent as RightIcon } from "../../assets/right.svg";

export const PaginationWrapper = styled.footer`
  display: flex;
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

  .desktop-text {
    display: inline;
  }
  .mobile-icons {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 8px 12px;
    font-size: 0;

    .desktop-text {
      display: none;
    }
    .mobile-icons {
      display: flex;
      gap: 2px;
    }
  }
`;

export const PaginationInfo = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.grey};

  strong {
    color: ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
  }
`;

export const PaginationLeft = styled(LeftIcon)`
  width: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-right: 2px;
  }
`;

export const PaginationRight = styled(RightIcon)`
  width: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 2px;
  }
`;
