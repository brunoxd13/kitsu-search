import React from "react";

import { render } from "../utils/test-utils";
import Header from "./header";

describe("Header", () => {
  it("loads and displays header", () => {
    const { getByText } = render(<Header />);

    expect(!!getByText("BUSCA KITSU")).toBe(true);
    expect(!!getByText("TESTE FRONT-END")).toBe(true);
    expect(!!getByText("BRUNO RUSSI LAUTENSCHLAGER")).toBe(true);
  });
});
