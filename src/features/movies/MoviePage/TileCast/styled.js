import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const TileWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.grey};
  display: grid;
  grid-template-columns: auto;
  justify-content: space-bet;
  grid-gap: 12px;
  width: 208px;
  height: 400px;
  padding: 12px;
  margin: 15px 0;
  font-size: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const TileImage = styled.div`
  width: 176px;
  height: 231px;
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

export const TileContainer = styled.header`
    font-size: 22px;
`

export const TileActor = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1.3;
`;

export const TileCharacter = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.grey};;
`;