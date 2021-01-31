import React from "react";
import { render, screen } from "../../testUtils";
import {
  useGetCategoriesQuery,
  getUniqueCategories,
} from "../../dal/categories";
import type { Category } from "../../dal/categories";

import SearchFilter, { INITIAL_VALUES } from "./index";

jest.mock("../../dal/categories");

const categoriesMap: Record<string, Category> = {
  cat1: {
    alias: "cat1",
    title: "cat1",
  },
  cat2: {
    alias: "cat2",
    title: "cat2",
  },
  cat3: {
    alias: "cat3",
    title: "cat3",
  },
};

// We don't care about this mock return value, only that it
// is an object that can be destructure
(useGetCategoriesQuery as jest.Mock).mockImplementation(() => ({}));
// This is how we mock the categories instead of fetching them via graphql
(getUniqueCategories as jest.Mock).mockImplementation(() => categoriesMap);

let onChangeMock: jest.Mock;
beforeEach(() => {
  onChangeMock = jest.fn();
  render(<SearchFilter value={INITIAL_VALUES} onChange={onChangeMock} />);
});

test("open now toogle", () => {
  const openNow = screen.getByRole("checkbox");
  expect(openNow.parentNode?.textContent).toEqual("Open Now");
  openNow.click();
  expect(onChangeMock).toHaveBeenCalledWith({
    ...INITIAL_VALUES,
    isOpen: true,
  });
});

test("select price", () => {
  const price = screen.getByRole("button", { name: /price/i });
  price.click();
  // Should open the tooltip
  expect(price.getAttribute("aria-expanded")).toBe("true");
  // Make sure the tooltip is open
  screen.getByRole("listbox");
  screen.getByText("$").click();
  expect(onChangeMock).toHaveBeenLastCalledWith({
    ...INITIAL_VALUES,
    price: "1",
  });
});

test("select category", () => {
  const cat = screen.getByRole("button", { name: /categories/i });
  cat.click();
  // Should open the tooltip
  expect(cat.getAttribute("aria-expanded")).toBe("true");
  // Make sure the tooltip is open
  screen.getByRole("listbox");
  const catId = "cat1";
  screen.getByText(catId).click();
  expect(onChangeMock).toHaveBeenLastCalledWith({
    ...INITIAL_VALUES,
    category: categoriesMap[catId],
  });
});
