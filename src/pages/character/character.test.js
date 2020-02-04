import React from "react";

import { render, waitForElement } from "../../utils/test-utils";
import Character from "./index";

import characterMock from "../../__mocks__/character";
import mediaCharacters from "../../__mocks__/media-characters";
import media111275 from "../../__mocks__/media-111275";
import media111276 from "../../__mocks__/media-111276";

describe("Character Page", () => {
  beforeEach(() => {
    fetch
      .once(JSON.stringify({ ...characterMock }))
      .once(JSON.stringify({ ...mediaCharacters }))
      .once(JSON.stringify({ ...media111275 }))
      .once(JSON.stringify({ ...media111276 }));
  });

  it("should render character details", async () => {
    const {
      getByTestId,
      getByText,
      getAllByTestId
    } = await waitForElement(() => render(<Character />));

    expect(getByTestId("character-details-container")).toBeInTheDocument();

    expect(getByTestId("character-name")).toBeInTheDocument();
    expect(getByTestId("character-image")).toBeInTheDocument();
    expect(getByTestId("character-description")).toBeInTheDocument();

    expect(getByText("Mídias:")).toBeInTheDocument();
    expect(getByTestId("media-container")).toBeInTheDocument();

    expect(getAllByTestId("media-content").length).toBe(2);
    expect(getAllByTestId("media-image").length).toBe(2);
    expect(getAllByTestId("media-title").length).toBe(2);
    expect(getAllByTestId("media-synopsis").length).toBe(2);
  });
});
