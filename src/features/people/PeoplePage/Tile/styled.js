import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TileWrapper = styled(NavLink)`
  width: 208px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  border-radius: 5px;
  margin: 24px 0px;
  padding: 12px;
  transition: transform 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  justify-content: center;
  text-decoration: none;

  &:hover {
    transform: translateY(-6px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 165px;
    margin: 8px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
    grid-template-columns: 2fr;
    width: 136px;
    margin: 5px;
  }
`;

export const TilePeople = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  margin: 0 auto 16px auto;
  background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 135px;
    aspect-ratio: 2 / 3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
    width: 114px;
    background-size: cover;
  }
`;

export const TileContainer = styled.div`
  height: 100%;
  line-height: 1.3;
  gap: 8px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: auto;
  }
`;

export const TileTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }

  @media (max-width: 540px) {
    font-size: 8px;
  }
`;
export const TileRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  justify-content: flex-start;
`;
export const TileRating = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;


