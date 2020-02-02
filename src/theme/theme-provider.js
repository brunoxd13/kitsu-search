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
    small: "1rem", // 16px
    medium: "1.313rem", // 21px
    large: "1.688rem" // 27px
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
