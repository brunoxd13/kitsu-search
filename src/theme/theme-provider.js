import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./global-styles";

const theme = {
  colors: {
    red: "#d42026",
    gray: "#a5a5a5",
    text: "#4e4e4e",
    white: "#ffffff",
    rose: "#fadfe2",
    lightRose: "#fcf1f2"
  },
  fontWeight: {
    ligth: 300,
    regular: 400,
    black: 900
  },
  fontSizes: {
    sm: "1rem", // 16px
    md: "1.313rem", // 21px
    lg: "1.688rem" // 27px
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
