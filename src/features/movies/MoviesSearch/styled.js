import styled, { keyframes } from "styled-components";
import LoadingIcon from "../../../assets/loading.svg";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Loading = styled.img.attrs({
  src: LoadingIcon,
  alt: "Loading",
})`
  display: block;
  margin: 120px auto 0;
  width: 91px;
  animation: ${rotate} 0.5s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 24px;
    width: 35px;
  }
`;
