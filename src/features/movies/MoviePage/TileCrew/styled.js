import styled from "styled-components";

export const TileWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.grey};
  display: grid;
  grid-template-columns: auto;
  transition: transform 0.2s;
  cursor: pointer;
  width: 208px;
  height: 420px;
  padding: 12px;
  margin: 24px 0px;
  font-size: 25px;

  &:hover {
    transform: translateY(-7px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 2fr;
    justify-content: center;
    width: 165px;
    height: 335px;
  }

@media (max-width: 540px) {
        width: 165px;
        height: 335px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}px) {
    grid-template-columns: 2fr;
    width: 136px;
    height: 265px;
    justify-content: center;
  }
`;

export const TileImage = styled.div`
  width: 176px;
  display: block;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  margin: 0 auto 16px auto;
  background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    aspect-ratio: 2 / 3;
    margin: 0;
    width: 135px;
  }

  @media (max-width: 540px) {
        width: 140px;
        background-size: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}px) {
    width: 114px;
    background-size: cover;
  }
`;

export const TileContainer = styled.header`
    font-size: 22px;
`

export const TileCrewName = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TileCrewJob = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;