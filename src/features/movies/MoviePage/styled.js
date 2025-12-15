import styled from "styled-components";

export const BackdropContainer = styled.div`
    width: 272%;
    max-width: cover;
    height: 770px;
    display: flex;
    justify-content: center;
    margin: -80px -1205px 0px;
    background-size: cover;
    background-color: ${({ theme }) => theme.color.black};
`

export const Backdrop = styled.div`
    width: 1398px;
    max-width: 100%;
    height: 770px;
    display: flex;
    justify-content: center;
    margin: 0px 0px 0px 0px;
    background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};
    background-size: cover;
    box-shadow: inset 0px 0px 50px 50px ${({ theme }) => theme.color.black};
`

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
