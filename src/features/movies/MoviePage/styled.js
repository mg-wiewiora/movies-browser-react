import styled from "styled-components";

export const BackdropContainer = styled.div`
    
    height: 770px;
    display: flex;
    justify-content: center;
    margin: -20px;
    background-size: cover;
    background-color: ${({ theme }) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.beneathFullHD}px) {
    height: 600px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
    height: 400px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 280px;
    }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
    max-height: 148px;
  }`

export const Backdrop = styled.div`
    width: 1368px;
    max-width: 100%;
    height: 770px;
    display: flex;
    justify-content: center;
    margin: 0px 0px 0px 0px;
    background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};
    background-size: cover;
    box-shadow: inset 0px 0px 100px 75px ${({ theme }) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.beneathFullHD}px) {
    width: 1200px;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
    height: 400px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 300px;
    max-height: 100%;
    box-shadow: inset 0px 0px 30px 20px ${({ theme }) => theme.color.black};
  }
`

export const CreditsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 208px);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.beneathFullHD}px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }

  @media (max-width: 340px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;