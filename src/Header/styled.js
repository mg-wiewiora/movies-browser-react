import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 80px;
  min-width: 320px;
  height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 142px;
    padding: 16px 16px;
    gap: 12px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    width: 100%;
  }
`;

export const HeaderMainLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 8px;
  }
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
  font-size: 24px;
  letter-spacing: -1.5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.5px;
    line-height: 1.3;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-left: 19px;
  }
`;

export const HeaderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
`;

export const HeaderItem = styled.li``;

export const HeaderNavLink = styled(NavLink)`
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

export const HeaderInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 432px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const HeaderInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 20% 12px 64px;
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};

  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
  }

  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    padding: 14px 122px 14px 40px;
    line-height: 1.3;
    height: 44px;
  }
`;

export const HeaderIcon = styled(SearchIcon)`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  pointer-events: none;
  stroke: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: 16px;
    width: 16px;
  }
`;
