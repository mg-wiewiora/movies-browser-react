import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg"

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  min-width: 320px;
  height: 94px;
`;

export const HeaderLogo = styled(Logo)`
  width: 40px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 17px;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: 500;
  padding: 10px;
  font-size: 24px;
  letter-spacing: -1.5px;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const HeaderStyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding: 13.5px 24px;
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    font-weight: bold;
  }
  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

export const HeaderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
`;

export const HeaderItem = styled.li``;
