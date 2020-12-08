import * as React from "react";
import { render } from "@testing-library/react";
import Detail from "./Detail";

test("dummy test to check config", () => {
  const { getByText } = render(<Detail />);
  const titleElement = getByText(/restaurant/i);
  expect(titleElement).toBeInTheDocument();
});
