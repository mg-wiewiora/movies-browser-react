import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.color.black};
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h1`
    padding: 10px;
    font-size: 24px;
`;

export const Navigation = styled.nav`
    padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;

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
    justify-content: center;
`;

export const Item = styled.li`
    margin: 20px;
`;