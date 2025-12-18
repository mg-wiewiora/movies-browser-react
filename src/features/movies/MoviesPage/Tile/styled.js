import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";
import { NavLink } from "react-router-dom";

const activeClassName = "active"; //to jest do przerobienia/usunięcia, nie powinno tu być

export const TileWrapper = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: transform 0.2s;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  width: 100%;
  max-width: 324px;

  &:hover {
    transform: translateY(-7px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: row;
    max-width: 430px;
  }
`;

export const TileImage = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 114px;
    flex-shrink: 0;
    margin: 0;
  }
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  gap: 8px;
  line-height: 1.5;
  overflow-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 16px;
    justify-content: flex-start;
    padding: 4px 0;
    line-height: 1.3;
  }
`;

export const TileTitle = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodsmoke};
  word-break: break-word;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const TileYear = styled.p`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    margin: 0;
  }
`;

export const TileTags = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 4px 8px;
    margin: 0;
  }
`;

export const TileTag = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.woodsmoke};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
    line-height: 1.1;
    padding: 4px 8px;
  }
`;

export const TileRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 0;
  }
`;

export const TileIcon = styled(StarIcon)`
  width: 24px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 16px;
  }
`;

export const TileRating = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
  }
`;

export const TileVotes = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
  }
`;
