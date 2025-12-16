import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const TileBackdropWrapper = styled.section`
  color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  margin: 40px 0;
  font-size: 20px;
  align-self: end;
  margin-right: auto;
`;

export const TileBackdropContainer = styled.header`
    font-size: 22px;
`

export const TileBackdropTitle = styled.h2`
  margin: 18px 0;
  font-size: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 32px;
        margin: 5px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
        font-size: 12px;
        margin: 5px 0;
  }
  `;


export const TileBackdropIcon = styled(StarIcon)`
width: 40px;
height: 40px;
flex-shrink: 0;
`;

export const TileBackdropRatingWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-top: auto;
justify-content: flex - start;
`;

export const TileBackdropRating = styled.span`
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

export const TileBackdropVotes = styled.span`
font-weight: 400;
font-size: 16px;
margin-bottom: -10px;
line-height: 1.2;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 11px;
        margin: 5px 0;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
        font-size: 8px;
        margin: 5px 0;
  }`;