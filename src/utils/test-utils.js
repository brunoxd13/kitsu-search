import React from "react";
import { render } from "@testing-library/react";

import { CharacterProvider } from "../context/character";
import Theme from "../theme/theme-provider";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useParams: () => ({
    push: jest.fn()
  })
}));

export const Providers = ({ children }) => (
  <CharacterProvider>
    <Theme>{children}</Theme>
  </CharacterProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
