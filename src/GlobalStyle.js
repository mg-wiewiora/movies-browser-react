import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.color.whisper};
    color: ${({ theme }) => theme.color.woodsmoke};
    margin: 0 auto;
    line-height: 1.6;
  }
`;