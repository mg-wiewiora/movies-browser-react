import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const TileWrapper = styled.div`
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
    max-width: 450px;
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
    margin: 0 16px 0 0;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px 8px;
    max-width: 100%;
  }
`;

export const TileTag = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
    line-height: 1.1;
    white-space: normal;
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
  color: ${({ theme }) => theme.color.black};

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
