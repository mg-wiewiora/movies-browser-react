import styled from "styled-components";
import NoResultsIcon from "../../assets/no-results.svg";

export const NoResults = styled.img.attrs({
  src: NoResultsIcon,
  alt: "No results",
})`
  display: block;
  margin: 40px auto 0;
  width: 668px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 24px;
    width: 334px;
  }
`;
