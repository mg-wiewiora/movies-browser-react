import styled from "styled-components";

export const BackdropContainer = styled.div`
    width: 100%;
    height: 770px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: -19px auto;
    background-size: cover;
    background-color: ${({ theme }) => theme.color.black};

    @media (max-width: 1400px) {
    width: 100%;
    height: 600px;
  }

  @media (max-width: 1000px) {
    width: 1200px;
    height: 400px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
    height: 280px;
    }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}px) {
    width: 100%;
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

    @media (max-width: 1400px) {
    width: 1200px;
    height: 100%;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
    max-height: 100%;
    box-shadow: inset 0px 0px 50px 30px ${({ theme }) => theme.color.black};
  }
`

export const CreditsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
     grid-gap: 0px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
  }
`;