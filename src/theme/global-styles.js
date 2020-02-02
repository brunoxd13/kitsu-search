import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,900&display=swap');

  html {
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }


  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  textarea,
  input {
    -webkit-appearance: none;
  }
`;

export default GlobalStyles;
