import React from "react";

import { render } from "../utils/test-utils";
import Pagination from "./pagination";

describe("pagination", () => {
  it("displays pagination bullets", () => {
    const { getByText, getByTestId, getAllByTestId } = render(<Pagination />);

    expect(!!getByText("1")).toBe(true);
    expect(!!getByText("2")).toBe(true);
    expect(!!getByText("3")).toBe(true);
    expect(!!getByText("4")).toBe(true);
    expect(!!getByText("5")).toBe(true);
    expect(!!getByText("6")).toBe(true);

    expect(getAllByTestId("page-bullet").length).toBe(6);

    expect(getByTestId("arrow-next")).toBeInTheDocument();
    expect(getByTestId("arrow-back")).toBeInTheDocument();
  });
});
