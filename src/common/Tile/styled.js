import styled from "styled-components";

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

