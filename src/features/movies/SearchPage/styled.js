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
  width: 91px;
  position: absolute;
  top: 313px;
  animation: ${rotate} 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 35px;
    left: 143px;
    top: 208px;
  }
`;
