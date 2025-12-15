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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 300px;
    background-size: contain;
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
    box-shadow: inset 0px 0px 50px 50px ${({ theme }) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 300px;
    background-size: contain;
  }
`

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
