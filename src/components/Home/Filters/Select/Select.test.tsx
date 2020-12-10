import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

const defaultOptions = ["Option 1", "Option 2"];

test("renders selected option value as label", () => {
  const handleSelect = jest.fn();
  render(
    <Select label="test" options={defaultOptions} value={"Option 1"} onSelect={handleSelect} />
  );
  expect(screen.queryByText("test")).not.toBeInTheDocument();
  expect(screen.getByText("Option 1")).toBeInTheDocument();
});

test("renders options", () => {
  const handleSelect = jest.fn();
  render(<Select label="test" options={defaultOptions} value={"All"} onSelect={handleSelect} />);
  expect(screen.getByText("test")).toBeInTheDocument();
  fireEvent.click(screen.getByText("test"));
  const options = screen.getAllByTestId("selectOption").map((div) => div.textContent);
  expect(options).toMatchInlineSnapshot(`
    Array [
      "All",
      "Option 1",
      "Option 2",
    ]
  `);
});

test("onSelect handler is being called", () => {
  const handleSelect = jest.fn();
  render(<Select label="test" options={defaultOptions} value={"All"} onSelect={handleSelect} />);
  expect(screen.getByText("test")).toBeInTheDocument();
  fireEvent.click(screen.getByText("test"));
  fireEvent.click(screen.getByText("Option 1"));
  expect(handleSelect).toBeCalledTimes(1);
});
