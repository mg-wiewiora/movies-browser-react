import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const TileWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  margin: 10px 0;
  box-shadow: 0 0 5px ${({ theme }) => theme.color.grey};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  margin: 15px 0;
  font-size: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const TileImage = styled.img`
    width: 288px;
    height: 384px;
    display: flex;
    justify-content: center;
    margin: auto;
   
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 80%;
        max-width: 80%;
        margin: auto;
    }
`

export const TileContainer = styled.header`
    font-size: 22px;
`

export const TileTitle = styled.h2`
  margin: 0;
  font-size: 36px;
`;

export const TileYear = styled.div`
    font-size: 22px;
`

export const TileTag = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    margin-left: 0;
`

export const TileRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  justify-content: flex-start;
`;

export const TileContent = styled.div`
  font-size: 20px;
    margin: 24px 0px;
    line-height: 1.6;
`;

export const TileTags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 24px 0px;
`

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
