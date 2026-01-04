import styled from "styled-components";

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 208px);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.beneathFullHD}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopStandard}px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
  }
`;