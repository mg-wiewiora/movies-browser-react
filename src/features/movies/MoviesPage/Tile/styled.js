import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const TileWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 8px ${({ theme }) => theme.color.grey};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const TileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const TileTitle = styled.h3`
  margin: 10px 0 5px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
`;

export const TileYear = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.color.grey};
`;

export const TileTags = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TileTag = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const TileRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
`;

export const TileIcon = styled(StarIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const TileRating = styled.span`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

export const TileVotes = styled.span`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.grey};
`;
