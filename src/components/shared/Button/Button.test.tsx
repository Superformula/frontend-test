import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders", () => {
  const handleClick = jest.fn();
  render(
    <Button type="primary" handleClick={handleClick}>
      Test
    </Button>
  );
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});

test("handleClick is being called", () => {
  const handleClick = jest.fn();
  render(
    <Button type="primary" handleClick={handleClick}>
      Test
    </Button>
  );
  const button = screen.getByText(/test/i);
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  fireEvent.click(button);
  expect(handleClick).toBeCalledTimes(2);
});
