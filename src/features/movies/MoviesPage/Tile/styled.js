import styled from "styled-components";

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

export const TileTags = styled.div`
  margin: 5px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.color.black};

  span {
    background-color: ${({ theme }) => theme.color.mystic};
    border-radius: 5px;
    padding: 2px 5px;
    margin: 0 3px;
    display: inline-block;
  }
`;

export const TileRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
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
