import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: ${({ theme }) => theme.palette.background.primary};
    color: ${({ theme }) => theme.palette.positive.high};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
