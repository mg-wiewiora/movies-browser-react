import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const TileMovieWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.grey};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  margin: 40px 0;
  font-size: 20px;
  max-width: 100%;
`;

export const TileMovieImage = styled.div`
    width: 312px;
    height: 464px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 0;
    background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};
    background-size: cover;
   
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 228px;
        height: 338px;
    }

    @media (max-width: 640px) {
        width: 171px;
        height: 254px;
    }

    @media (max-width: 540px) {
        width: 114px;
        height: 169px; 
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}px) {
        width: 114px;
        height: 169px; 
    }
`

export const TileMovieContainer = styled.header`
    font-size: 22px;
`

export const TileMovieTitle = styled.h2`
  margin: 18px 0;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 16px;
        margin: 5px 0;
  }
  
@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TileMovieYear = styled.div`
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        margin: 5px 0;
  }

  @media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;


export const TileMovieDetails = styled.div`
    font-size: 18px;
    display: flex;
    gap: 8px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
  }

@media (max-width: 540px) {
        font-size: 8px;
  }`;

export const TileMovieDetailsTitle = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.color.grey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
  }

@media (max-width: 540px) {
        font-size: 8px;
  }`;

export const TileMovieTag = styled.li`
        background-color: ${({ theme }) => theme.color.mystic};
        padding: 8px 16px;
        font-size: 14px;
        margin: 8px;
        margin-left: 0;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        padding: 4px 8px;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TileMovieRatingWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-top: auto;
justify-content: flex - start;
`;

export const TileMovieContent = styled.div`
font-size: 20px;
margin: 24px 0px;
line-height: 1.6;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 11px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TileMovieTags = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
padding-left: 0;
margin: 24px 0px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 11px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TileMovieIcon = styled(StarIcon)`
width: 20px;
height: 20px;
flex-shrink: 0;
`;

export const TileMovieRating = styled.span`
font-weight: 600;
font-size: 22px;
color: ${({ theme }) => theme.color.woodsmoke};
line-height: 1.2;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 11px;
        margin: 5px 0;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TileMovieVotes = styled.span`
font-weight: 400;
font-size: 14px;
margin-bottom: -10px;
color: ${({ theme }) => theme.color.woodsmoke};
line-height: 1.2;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 11px;
        margin: 5px 0;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}px) {
        font-size: 8px;
        margin: 5px 0;
  }`;
