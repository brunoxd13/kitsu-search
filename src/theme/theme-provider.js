import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./global-styles";

const theme = {
  colors: {
    red: "#d42026",
    gray: "#A5A5A5",
    text: "#4E4E4E"
  },
  fontWeight: {
    ligth: 300,
    regular: 400,
    black: 900
  },
  fontSizes: {
    small: "1rem", // 17px
    medium: "1.313rem", // 21px
    large: "1.688rem" // 27px
  },
  spaces: {
    0: "0px",
    1: "10px",
    2: "16px",
    3: "20px",
    4: "25px",
    5: "34px",
    6: "37px",
    7: "42px"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
