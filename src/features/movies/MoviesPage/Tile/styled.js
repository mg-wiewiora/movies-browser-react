import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const TileWrapper = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
  width: 324px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: transform 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-7px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 288px;
    flex-direction: row;
    padding: 8px;
  }
`;

export const TileImage = styled.div`
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
    width: 114px;
    aspect-ratio: 2 / 3;
    margin: 0;
  }
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  line-height: 1.3;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 16px;
    height: auto;
  }
`;

export const TileTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const TileYear = styled.p`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.grey};
  line-height: 1.5;
`;

export const TileTags = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 8px 0;
`;

export const TileTag = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
`;

export const TileRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  justify-content: flex-start;
`;

export const TileIcon = styled(StarIcon)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const TileRating = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

export const TileVotes = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.grey};
`;
