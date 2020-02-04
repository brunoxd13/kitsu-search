import React from "react";

import { render, waitForElement } from "../../utils/test-utils";
import Characters from "./index";

import charactersMock from "../../__mocks__/characters";

describe("Characters Page", () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({ ...charactersMock }));
  });

  it("should render characters", async () => {
    const {
      getByTestId,
      getByText,
      getAllByTestId
    } = await waitForElement(() => render(<Characters />));

    expect(getByTestId("character-search")).toBeInTheDocument();
    expect(getByTestId("label-search-input")).toBeInTheDocument();
    expect(getByTestId("search-input")).toBeInTheDocument();

    expect(getByTestId("character-list")).toBeInTheDocument();
    expect(getByText("Personagem")).toBeInTheDocument();
    expect(getByText("Descrição")).toBeInTheDocument();

    expect(getAllByTestId("character-row").length).toBe(10);
    expect(getAllByTestId("character-image").length).toBe(10);
    expect(getAllByTestId("character-name").length).toBe(10);
    expect(getAllByTestId("character-description").length).toBe(10);

    expect(getByTestId("pagination-container")).toBeInTheDocument();
  });
});
