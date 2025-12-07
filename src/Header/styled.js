import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  min-width: 320px;
  height: 94px;
`;

export const Title = styled.h1`
  font-weight: 500;
  padding: 10px;
  font-size: 24px;
  letter-spacing: -1.5px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    font-weight: bold;
  }
  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
  padding: 13.5px 24px;
`;
