import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const BackdropTileWrapper = styled.section`
  color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  margin: 40px 0;
  font-size: 20px;
  align-self: end;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 5px 0;
        margin-right: auto;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
        margin: 0px 0;
        margin-right: auto;
  }
`;

export const BackdropTileContainer = styled.header`
    font-size: 22px;
`

export const BackdropTileTitle = styled.h2`
  margin: 18px 0;
  font-size: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 32px;
        margin: 5px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
        grid-template-columns: 1fr;
        align-self: end;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
        font-size: 12px;
        margin: 5px 0;
  }
  `;


export const BackdropTileIcon = styled(StarIcon)`
width: 40px;
height: 40px;
flex-shrink: 0;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 16px;
  }
`;

export const BackdropTileRatingWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    justify-content: baseline;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        display: flex;
  }
`;

export const BackdropTileRating = styled.span`
font-weight: 600;
font-size: 30px;
line-height: 1.2;

@media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 16px;
        margin: 5px 0;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 11px;
        margin: 5px 0;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const BackdropTileMaxVotes = styled.span`
font-weight: 400;
font-size: 16px;
margin-bottom: -10px;
margin-top: 10px;
line-height: 1.2;

@media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 8px;
        margin: 5px 0;
  }
`;

export const BackdropTileVotes = styled.span`
    font-weight: 400;
    font-size: 16px;
    margin-bottom: -10px;
    margin-top: 10px;
    line-height: 1.2;
    grid-column: 1/3;

@media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 8px;
        margin: 5px 0;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
        font-size: 8px;
        margin: 5px 0;
  }`;